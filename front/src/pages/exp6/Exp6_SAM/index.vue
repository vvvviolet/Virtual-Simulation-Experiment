<template>
  <div>

    <InputChart :dataSource="dataSource1" :columns="columns1" @updateData="handleDataSource1Update">
      一、分析变量表
    </InputChart>

    <form style="text-align: center;">
      <a-button type="primary" @click="handleSubmit">更新敏感性分析结果</a-button>
    </form>

    <!-- 敏感性分析图表 -->
    <div>
      <h2>敏感性分析龙卷风图</h2>
      <div id="sensitivity-chart" style="width: 600px; height: 400px;text-align: center;">
      </div>
    </div>

    <InputChart :dataSource="dataSource1" :columns="columns2" @updateData="handleDataSource2Update">
      二、变化幅度表
    </InputChart>
    <form style="text-align: center;">
      <a-button type="primary" @click="handleSubmit2">更新敏感性分析结果</a-button>
    </form>
    <!-- 折线图 -->
    <div>
      <h2>敏感性分析折线图</h2>
      <div id="line-chart" style="width: 600px; height: 400px;text-align: center;">
      </div>
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { LegendComponent, TooltipComponent } from 'echarts/components'
import InputChart from '@/pages/exp6/Exp6_SAM/InputChart.vue';

// 注册需要使用的 ECharts 组件
use([CanvasRenderer, LegendComponent, TooltipComponent])

export default {
  components: {
    InputChart
  },
  data() {
    return {
      params: {
        param1: 0,
        param2: 0,
        param3: 0,
      },
      analysisData: null,
      dataSource1: [
          {
            key: '0',
            uncertainty: '投资',
            value: 4000,
            change_minus15:123,
            change_minus10:123,
            change_minus5:123,
            change_minus2:123,
            changeBasicPlan:123,
            change_2:123,
            change_5:123,
            change_10:123,
            change_15:123,
          },
          {
            key: '1',
            uncertainty: '投资',
            value: 4500,
            change_minus15:123,
            change_minus10:123,
            change_minus5:123,
            change_minus2:123,
            changeBasicPlan:123,
            change_2:123,
            change_5:123,
            change_10:123,
            change_15:123,
          },
          {
            key: '2',
            uncertainty: '年经营成本',
            value: 1200,
            change_minus15:123,
            change_minus10:123,
            change_minus5:123,
            change_minus2:123,
            changeBasicPlan:123,
            change_2:123,
            change_5:123,
            change_10:123,
            change_15:123,
          },
          {
            key: '3',
            uncertainty: '年经营成本',
            value: 1000,
            change_minus15:123,
            change_minus10:123,
            change_minus5:123,
            change_minus2:123,
            changeBasicPlan:123,
            change_2:123,
            change_5:123,
            change_10:123,
            change_15:123,
          },
          {
            key: '4',
            uncertainty: '年经营成本',
            value: 900,
            change_minus15:123,
            change_minus10:123,
            change_minus5:123,
            change_minus2:123,
            changeBasicPlan:123,
            change_2:123,
            change_5:123,
            change_10:123,
            change_15:123,
          },
          {
            key: '5',
            uncertainty: '年销售收入',
            value: 3500,
            change_minus15:123,
            change_minus10:123,
            change_minus5:123,
            change_minus2:123,
            changeBasicPlan:123,
            change_2:123,
            change_5:123,
            change_10:123,
            change_15:123,
          },
          {
            key: '6',
            uncertainty: '年销售收入',
            value: 3000,
            change_minus15:123,
            change_minus10:123,
            change_minus5:123,
            change_minus2:123,
            changeBasicPlan:123,
            change_2:123,
            change_5:123,
            change_10:123,
            change_15:123,
          },
          {
            key: '7',
            uncertainty: '年销售收入',
            value: 2700,
            change_minus15:123,
            change_minus10:123,
            change_minus5:123,
            change_minus2:123,
            changeBasicPlan:123,
            change_2:123,
            change_5:123,
            change_10:123,
            change_15:123,
          },
        ],
        columns1: [
          {
            title: '不确定因素',
            dataIndex: 'uncertainty',
            slots: {
              customRender: 'uncertainty',
            },
          },
          {
            title: '取值（万元）',
            dataIndex: 'value',
            slots: {
              customRender: 'value',
            },
          },
          {
            title: '操作',
            dataIndex: 'operation',
            slots: {
              customRender: 'operation',
            },
          },
        ],
        columns2: [
          {
            title: '不确定因素',
            dataIndex: 'uncertainty',
            slots: {
              customRender: 'uncertainty',
            },
          },
          {
            title: '-15%',
            dataIndex: 'change_minus15',
            slots: {
              customRender: 'change_minus15',
            },
          },
          {
            title: '-10%',
            dataIndex: 'change_minus10',
            slots: {
              customRender: 'change_minus10',
            },
          },
          {
            title: '-5%',
            dataIndex: 'change_minus5',
            slots: {
              customRender: 'change_minus5',
            },
          },
          {
            title: '-2%',
            dataIndex: 'change_minus2',
            slots: {
              customRender: 'change_minus2',
            },
          },
          {
            title: '基本方案',
            dataIndex: 'changeBasicPlan',
            slots: {
              customRender: 'changeBasicPlan',
            },
          },
          {
            title: '2%',
            dataIndex: 'change_2',
            slots: {
              customRender: 'change_2',
            },
          },
          {
            title: '5%',
            dataIndex: 'change_5',
            slots: {
              customRender: 'change_5',
            },
          },
          {
            title: '10%',
            dataIndex: 'change_10',
            slots: {
              customRender: 'change_10',
            },
          },
          {
            title: '15%',
            dataIndex: 'change_15',
            slots: {
              customRender: 'change_15',
            },
          },
          {
            title: '操作',
            dataIndex: 'operation',
            slots: {
              customRender: 'operation',
            },
          },
        ],
    }
  },
  methods: {
    handleSubmit() {
      // 在这里执行敏感性分析并更新 analysisData
      this.analysisData = doAnalysis(this.params)

      // 绘制竖向柱状图
      this.drawSensitivityChart()
    },
    handleSubmit2() {
      // 绘制最后的折线图
      this.drawLineChart()
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
    drawLineChart() {
      const chart = echarts.init(document.getElementById("line-chart"))

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
    handleDataSource1Update(newData) {
        this.dataSource1 = newData;
    },
    handleDataSource2Update(newData) {
        this.dataSource2 = newData;
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