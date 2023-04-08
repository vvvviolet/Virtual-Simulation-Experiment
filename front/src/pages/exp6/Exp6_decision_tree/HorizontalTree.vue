<template>
    <a-card style="height: calc(100vh - 80px);">
      <svg :width="width" :height="height">
        <g :transform="`translate(${margin.left},${margin.top})`">
          <g v-for="(link, index) in links" :key="index">
            <path
              :d="link.path"
              :stroke="link.color"
              :stroke-width="linkWidth"
              :fill="link.fill"
            />
            <text
              :x="link.textX"
              :y="link.textY"
              :style="{ fill: link.color }"
              text-anchor="middle"
              alignment-baseline="central"
            >
              {{ link.value }}
            </text>
          </g>
          <g v-for="(node, index) in nodes" :key="index">
            <circle
              :cx="node.x"
              :cy="node.y"
              :r="nodeRadius"
              :fill="node.color"
              :stroke-width="nodeWidth"
              :stroke="nodeStrokeColor"
            />
            <text
              :x="node.x"
              :y="node.y"
              :style="{ fill: node.textColor }"
              text-anchor="middle"
              alignment-baseline="central"
            >
              {{ node.value }}
            </text>
            <foreignObject :x="node.x + nodeRadius + 5" :y="node.y - nodeRadius" width="200">
              <div style="height: 100%; display: flex; align-items: center;">
                <a-input-number style="width: 80px;" :value="node.netPresentValue" disabled />
                <span style="margin-left: 10px;">总概率: {{ node.probability }}%</span>
              </div>
            </foreignObject>
          </g>
        </g>
      </svg>
    </a-card>
  </template>
  
  <script>
  import * as d3 from 'd3';
  import { Card, InputNumber } from 'ant-design-vue';
  
  export default {
    name: 'HorizontalTree',
  
    components: {
      Card,
      InputNumber,
    },
  
    props: {
      data: {
        type: Object,
        required: true,
      },
    },
  
    data() {
      return {
        margin: { top: 20, right: 90, bottom: 30, left: 90 },
        width: 960,
        height: 500,
  
        nodeRadius: 25,
        nodeWidth: 2,
        nodeStrokeColor: '#52c41a',
  
        linkWidth: 1.5,
        linkColor: '#bbb',
        linkFill: 'none',
  
        nodes: [],
        links: [],
      };
    },
  
    mounted() {
      this.createTree();
    },
  
    methods: {
      createTree() {
        const treeData = d3.hierarchy(this.data, (d) => d.children);
        const treeLayout = d3.tree().size([this.height - this.margin.top - this.margin.bottom, this.width - this.margin.left - this.margin.right]);
  
        treeLayout(treeData);
  
        const descendants = treeData.descendants();
        const links = treeData.links();
  
        this.nodes = descendants.map((node) => ({
          x: node.y,
          y: node.x,
          value: node.data.value,
          color: node.children ? '#1890ff' : '#f5222d',
          textColor: '#fff',
          probability: node.data.probability,
          netPresentValue: node.data.netPresentValue,
        }));
  
        this.links = links.map((link) => {
          const points = [
            [link.source.y, link.source.x],
            [link.target.y, link.target.x],
          ];
          const diagonal = d3
            .line()
            .curve(d3.curveCardinal)
            .x((d) => d[0])
            .y((d) => d[1]);
          const path = diagonal(points);
  
          return {
            path,
            value: link.target.data.value,
            color: this.linkColor,
            fill: this.linkFill,
            textX: (link.source.y + link.target.y) / 2,
            textY: (link.source.x + link.target.x) / 2,
          };
        });
      },
    },
  };
  </script>
  