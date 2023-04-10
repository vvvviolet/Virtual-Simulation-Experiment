<template>
  <div ref="container"></div>
</template>

<script>
  import { onMounted, onUnmounted, ref, watch } from 'vue';
  import * as d3 from 'd3';

  export default {
    props: {
      dataSource: {
        type: Array,
        required: true,
      },
    },
    setup(props) {
      const defaultNodeName = 'root'; // 根节点默认名称

      const treeData = {
        name: defaultNodeName,
        children: [],
      };

      let dataSource = props.dataSource.map(({ key, ...rest }) => rest);

      const keys = Object.keys(dataSource[0]); // 获取数据源中的所有属性名称

      console.log(keys);

      dataSource.reduce((prev, cur) => {
        let node = prev;
        keys.forEach((key) => {
          const name = `${key}:${cur[key]}`;
          let childNode = node.children.find((child) => child.name === name);
          if (!childNode) {
            childNode = {
              name,
              children: [],
            };
            node.children.push(childNode);
          }
          node = childNode; // 将新创建的或已经存在的节点设置为当前节点
        });
        return prev;
      }, treeData);

      console.log(treeData);

      const container = ref(null);
      let root, svg;

      // 绘制树形图
      const calculateWidthAndDepth = (tree) => {
        let maxWidth = 0;
        let maxDepth = 0;

        // 使用队列来遍历树形结构
        const queue = [];
        queue.push([tree, 0]);

        while (queue.length > 0) {
          const [node, depth] = queue.shift();
          maxDepth = Math.max(maxDepth, depth); // 更新深度

          // 如果节点有子节点，则将它们加入队列
          if (node.children) {
            node.children.forEach((child) => {
              queue.push([child, depth + 1]);
            });

            // 更新最大宽度
            maxWidth = Math.max(maxWidth, node.children.length);
          }
        }

        return { tree_width: maxWidth, tree_depth: maxDepth };
      };

      let { tree_width, tree_depth } = calculateWidthAndDepth(treeData);

      console.log(tree_width, tree_depth);

      const drawTree = () => {
        const width = tree_depth * 100 + 200;
        const height = tree_depth * 70 + 50;

        console.log(width, height);

        // 创建一个树形布局
        const treeLayout = d3.tree().size([height, width]);

        // 对数据进行布局，生成树形结构
        root = d3.hierarchy(treeData);

        // 计算节点位置和连线路径
        treeLayout(root);

        // 创建一个 SVG 元素，并设置其大小和坐标系
        svg = d3
          .select(container.value)
          .append('svg')
          .attr('width', width)
          .attr('height', height)
          .append('g')
          .attr('transform', `translate(20,0)`)

        // 绘制连线路径
        svg
          .selectAll('.link')
          .data(root.links())
          .join('path')
          .attr('class', 'link')
          .attr(
            'd',
            d3
              .linkHorizontal()
              .x((d) => d.y)
              .y((d) => d.x)
          );

        // 绘制节点
        const node = svg
          .selectAll('.node')
          .data(root.descendants())
          .join('g')
          .attr('class', 'node')
          .attr('transform', (d) => `translate(${d.y},${d.x})`);

        // 在节点内部绘制圆形和文本
        node.append('circle').attr('r', 6);

        node
          .append('text')
          .attr('x', (d) => (d.children ? -5 : 5))
          .attr('text-anchor', (d) => (d.children ? 'end' : 'start'))
          .text((d) => d.data.name);
      };

      // 组件挂载时调用绘制函数
      onMounted(() => {
        drawTree();
      });

      // 监听数据源变化，并重新绘制树形图
      watch(
        () => props.dataSource,
        () => {
          // 在重新绘制前先清空 SVG 元素
          svg.selectAll('*').remove();
          svg.remove();
          drawTree();
        },
        { deep: true }
      );

      // 组件卸载时清除 SVG 元素
      onUnmounted(() => {
        svg.remove();
      });

      return {
        container,
      };
    },
  };
</script>

<style scoped>
  .node circle {
    fill: #fff;
    stroke: steelblue;
  }

  .link {
    fill: none;
    stroke: #ccc;
    stroke-width: 2px;
  }
</style>
