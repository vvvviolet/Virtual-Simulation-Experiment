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
    mounted() {
      this.drawTree();
    },
    // 监听数据源变化，并重新绘制树形图
    watch: {
      dataSource: {
        handler(newValue, oldValue) {
          // 在重新绘制前先清空 SVG 元素
          svg.selectAll('*').remove();
          svg.remove();
          drawTree();
        },
      },
      immediate: true,
    },
    methods: {
      drawTree() {
        // 构造虚拟根节点
        const data = {
          name: 'Root',
          children: [
            // { name: 'l1', children: [{ name: 'l2' }] },
            // { name: 'l2', children: [{ name: 'l2' }, { name: 'l2' }] },
          ],
        };

        //TODO: 修改算法，输出正确的data
        // 根据 uncertainty 字段分组，构造第二层节点
        // const groupedData = d3.group(this.dataSource, (d) => d.uncertainty);
        // console.log(groupedData)
        // groupedData.forEach((group, key) => {
        //   const probability = d3.sum(group, (d) => d.probability);
        //   const value = d3.sum(group, (d) => d.value);
        //   data.children.push({
        //     name: `${key}:${probability}`,
        //     value,
        //     children: group.map((item) => ({
        //       name: item.key,
        //       value: item.value,
        //       start_year: item.start_year,
        //       end_year: item.end_year,
        //     })),
        //   });
        // });

        console.log(data);
        const container = this.$refs.container;
        const margin = { top: 20, right: 90, bottom: 30, left: 90 };
        const width = 960 - margin.left - margin.right;
        const height = 500 - margin.top - margin.bottom;

        const svg = d3
          .select(container)
          .append('svg')
          .attr('width', width + margin.left + margin.right)
          .attr('height', height + margin.top + margin.bottom)
          .append('g')
          .attr('transform', `translate(${margin.left},${margin.top})`);

        const tree = d3.tree().size([height, width]);

        const root = d3.hierarchy(data, (d) => d.children);
        tree(root);

        const link = svg
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

        const node = svg
          .selectAll('.node')
          .data(root.descendants())
          .enter()
          .append('g')
          .attr('class', (d) => `node${d.children ? ' node--internal' : ' node--leaf'}`)
          .attr('transform', (d) => `translate(${d.y},${d.x})`);

        node.append('circle').attr('r', 2.5);

        node
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
