<template>
  <div ref="container"></div>
</template>

<script>
  import * as d3 from 'd3';

  export default {
    props: {
      dataSource: {
        type: Array,
        required: true,
      },
    },
    data() {
      return {
        dataSourceCopy: this.dataSource,
        container: null,
        margin: { top: 20, right: 130, bottom: 30, left: 90 },

        svg: null,
        node: null,
        link: null,
      };
    },
    mounted() {
      this.container = this.$refs.container;
      this.initTree();
      this.drawTree();
    },
    // 监听数据源变化，并重新绘制树形图
    watch: {
      dataSource: {
        handler(val) {
          this.dataSourceCopy = val;
          console.log('horizontal tree watch dataSource change');
          // console.log(this.dataSourceCopy);
          // 清空之前的svg内容并重新创建svg元素
          d3.select(this.container).select('svg').remove();
          this.initTree();
          this.drawTree();
        },
        deep: true,
      },
    },
    methods: {
      initTree() {
        const width = 960 - this.margin.left - this.margin.right;
        const height = 500 - this.margin.top - this.margin.bottom;
        this.svg = d3
          .select(this.container)
          .append('svg')
          .attr('width', width + this.margin.left + this.margin.right)
          .attr('height', height + this.margin.top + this.margin.bottom)
          .append('g')
          .attr('transform', `translate(${this.margin.left},${this.margin.top})`);
      },
      drawTree() {
        function createTree(data) {
          const tree = {
            name: 'Root',
            children: [],
          };
          const levels = {};

          // 将具有相同uncertainty的项分组到一起
          for (const item of data) {
            if (!levels[item.uncertainty]) {
              levels[item.uncertainty] = [];
            }
            levels[item.uncertainty].push(item);
          }
          // 遍历uncertainty层次，构建树结构
          const keys = Object.keys(levels);
          function buildChildren(index, parent) {
            if (index >= keys.length) {
              return;
            }
            const levelData = levels[keys[index]];
            for (const item of levelData) {
              const node = {
                name: '数值：' + item.value + ' 概率：' + item.probability,
                children: [],
              };
              parent.children.push(node);
              buildChildren(index + 1, node);
            }
          }
          buildChildren(0, tree);
          return tree;
        }

        const treeData = createTree(this.dataSourceCopy);

        const width = 960 - this.margin.left - this.margin.right;
        const height = 500 - this.margin.top - this.margin.bottom;

        const tree = d3.tree().size([height, width]);

        const root = d3.hierarchy(treeData, (d) => d.children);
        tree(root);

        this.link = this.svg
          .selectAll('.link')
          .data(root.links())
          .enter()
          .append('path')
          .attr('class', 'link')
          .attr(
            'd',
            d3
              .linkHorizontal()
              .x((d) => d.y)
              .y((d) => d.x)
          );

        this.node = this.svg
          .selectAll('.node')
          .data(root.descendants())
          .enter()
          .append('g')
          .attr('class', (d) => `node${d.children ? ' node--internal' : ' node--leaf'}`)
          .attr('transform', (d) => `translate(${d.y},${d.x})`);

        this.node.append('circle').attr('r', 2.5);

        this.node
          .append('text')
          .attr('dy', '.31em')
          .attr('x', (d) => (d.children ? -6 : 6))
          .style('text-anchor', (d) => (d.children ? 'end' : 'start'))
          .text((d) => d.data.name);
      },
    },
  };
</script>

<style>
  .node circle {
    fill: #fff;
    stroke: steelblue;
    stroke-width: 1.5px;
  }

  .node text {
    font: 10px sans-serif;
  }

  .link {
    fill: none;
    stroke: #ccc;
    stroke-width: 1.5px;
  }
</style>
