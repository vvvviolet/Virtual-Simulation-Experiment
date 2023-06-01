<template>
  <div>

    <InputChart :dataSource="dataSource1" :columns="columns1" @updateData="handleDataSource1Update">
      一、分析变量表
    </InputChart>

    <div class="container" style="margin-top: 20px;">
      <a-table :dataSource="dataSource" :columns="columns" bordered :pagination="false"/>
    </div>

    <InputChart :dataSource="dataSource1" :columns="columns2" @updateData="handleDataSource2Update">
      二、变化幅度表
    </InputChart>

    <form style="text-align: center;">
      <a-button type="primary" @click="handleSubmit">更新敏感性分析结果</a-button>
    </form>

    <!-- 敏感性分析图表 -->
    <div>
      <h2>敏感性分析龙卷风图</h2>
      <div id="sensitivity-chart" style="height:100%;min-height:400px;text-align: center;">
      </div>
    </div>
    <!-- 折线图 -->
    <div>
      <h2>敏感性分析折线图</h2>
      <div id="line-chart" style="height:100%;min-height:400px;text-align: center;">
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import * as echarts from 'echarts'
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { LegendComponent, TooltipComponent } from 'echarts/components'
import InputChart from '@/pages/exp8/MINGANXING/InputChart.vue';
import { Table } from 'ant-design-vue';

// 注册需要使用的 ECharts 组件
use([CanvasRenderer, LegendComponent, TooltipComponent])

export default {
  name: 'minganxing',
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
      dataSource: [
          {
            key: '0',
            name: '收入',
            value: 100,
          },
      ],
      columns:[
          {
            title: '分析对象名',
            dataIndex: 'name',
            key: 'name',
          },
          {
            title: '分析对象值',
            dataIndex: 'value',
            key: 'value',
          },
      ],
      dataSource1: [
          {
            key: '0',
            uncertainty: '敏感性因素1',
            value: 4000,
            change_minus15:73,
            change_minus10:82,
            change_minus5:95,
            change_minus2:98,
            changeBasicPlan:100,
            change_2:102,
            change_5:105,
            change_10:113,
            change_15:122,
          },
          {
            key: '2',
            uncertainty: '敏感性因素2',
            value: 1200,
            change_minus15:151,
            change_minus10:138,
            change_minus5:125,
            change_minus2:113,
            changeBasicPlan:100,
            change_2:89,
            change_5:55,
            change_10:33,
            change_15:16,
          },
          {
            key: '5',
            uncertainty: '敏感性因素3',
            value: 3500,
            change_minus15:198,
            change_minus10:172,
            change_minus5:150,
            change_minus2:123,
            changeBasicPlan:100,
            change_2:80,
            change_5:55,
            change_10:30,
            change_15:10,
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
          data: [ '亏损','收益'],
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
          inverse:true,
          data: this.analysisData.map((d) => d.name),
        },
        series: [
          {
            name: '收益',
            type: 'bar',
            stack: '2%',
            label: {
              show: true,
              position: 'insideRight',
            },
            //data: this.analysisData.map((d) => d.benefit),
            data:[102,89,80]
          },
          {
            name: '亏损',
            type: 'bar',
            stack: '2%',
            label: {
              show: true,
              position: 'insideRight',
            },
            //data: this.analysisData.map((d) => -d.cost),
            data:[-98,-113,-123]
          },
          {
            name: '收益',
            type: 'bar',
            stack: '5%',
            label: {
              show: true,
              position: 'insideRight',
            },
            //data: this.analysisData.map((d) => d.benefit),
            data:[105,55,55]
          },
          {
            name: '亏损',
            type: 'bar',
            stack: '5%',
            label: {
              show: true,
              position: 'insideRight',
            },
            //data: this.analysisData.map((d) => -d.cost),
            data:[-95,-125,-150]
          },
          {
            name: '收益',
            type: 'bar',
            stack: '10%',
            label: {
              show: true,
              position: 'insideRight',
            },
            //data: this.analysisData.map((d) => d.benefit),
            data:[113,33,30]
          },
          {
            name: '亏损',
            type: 'bar',
            stack: '10%',
            label: {
              show: true,
              position: 'insideRight',
            },
            //data: this.analysisData.map((d) => -d.cost),
            data:[-82,-138,-172]
          },
          {
            name: '收益',
            type: 'bar',
            stack: '15%',
            label: {
              show: true,
              position: 'insideRight',
            },
            //data: this.analysisData.map((d) => d.benefit),
            data:[122,16,10]
          },
          {
            name: '亏损',
            type: 'bar',
            stack: '15%',
            label: {
              show: true,
              position: 'insideRight',
            },
            //data: this.analysisData.map((d) => -d.cost),
            data:[-73,-151,-198]
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
          data: ['敏感性因素1', '敏感性因素2', '敏感性因素3'],
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
        },
        xAxis: {
          type: 'category',
          data: ['-15%', '-10%', '-5%', '-2%', 'Base', '2%', '5%', '10%', '15%']
        },
        yAxis: {
          type: 'value'
        },
        series: [
        {
          name:'敏感性因素1',
          data: [73,82,95,98,100,102,105,113,122],
          type: 'line',
          stack: '敏感性因素1'
        },
        {
          name:'敏感性因素2',
          data: [151,138,125,113,100,89,55,33,16],
          type: 'line',
          stack: '敏感性因素2'
        },
        {
          name:'敏感性因素3',
          data: [198,172,150,123,100,80,55,30,10],
          type: 'line',
          stack: '敏感性因素3'
        }
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
    { name: '敏感性因素1', benefit: 10, cost: 5 },
    { name: '敏感性因素2', benefit: 20, cost: 10 },
    { name: '敏感性因素3', benefit: 30, cost: 15 },
    ]

return analysisData
}
</script>

<style>
   .ant-table-thead > tr > th {
    background: #e9ecef !important;
  }
</style>