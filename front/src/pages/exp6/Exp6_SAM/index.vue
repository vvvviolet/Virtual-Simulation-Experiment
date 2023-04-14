<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <!-- 参数输入表单 -->
      <div>
        <label for="param1">Parameter 1:</label>
        <input type="number" v-model="params.param1">
      </div>
      <div>
        <label for="param2">Parameter 2:</label>
        <input type="number" v-model="params.param2">
      </div>
      <div>
        <label for="param3">Parameter 3:</label>
        <input type="number" v-model="params.param3">
      </div>
      <button type="submit">Run Analysis</button>
    </form>

    <!-- 敏感性分析图表 -->
    <div>
      <h2>敏感性分析结果</h2>
      <div id="sensitivity-chart" style="width: 600px; height: 400px">
      </div>
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { LegendComponent, TooltipComponent } from 'echarts/components'

// 注册需要使用的 ECharts 组件
use([CanvasRenderer, LegendComponent, TooltipComponent])

export default {
  data() {
    return {
      params: {
        param1: 0,
        param2: 0,
        param3: 0,
      },
      analysisData: null,
    }
  },
  methods: {
    handleSubmit() {
      // 在这里执行敏感性分析并更新 analysisData
      this.analysisData = doAnalysis(this.params)

      // 绘制竖向柱状图
      this.drawSensitivityChart()
    },
    drawSensitivityChart() {
      const chart = echarts.init(document.getElementById("sensitivity-chart"))

      const option = {
        title: {
          text: '敏感性分析结果',
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          },
        },
        legend: {
          data: ['收益', '成本'],
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
        },
        xAxis: {
          type: 'value',
        },
        yAxis: {
          type: 'category',
          data: this.analysisData.map((d) => d.name),
        },
        series: [
          {
            name: '收益',
            type: 'bar',
            stack: '总量',
            label: {
              show: true,
              position: 'insideRight',
            },
            data: this.analysisData.map((d) => d.benefit),
          },
          {
            name: '成本',
            type: 'bar',
            stack: '总量',
            label: {
              show: true,
              position: 'insideRight',
            },
            data: this.analysisData.map((d) => -d.cost),
          },
        ],
      }

      chart.setOption(option)
    },
  },
}

function doAnalysis(params) {
  // 在这里执行敏感性分析并返回结果
  const analysisData = [
    { name: 'Parameter 1', benefit: 10, cost: 5 },
   
    { name: 'Parameter 2', benefit: 20, cost: 10 },
    { name: 'Parameter 3', benefit: 30, cost: 15 },
    ]

return analysisData
}
</script>