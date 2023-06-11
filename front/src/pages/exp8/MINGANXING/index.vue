<template>
  <div>

    <h1>一、实验目的 </h1>
    <p class="content">
      + 研究相关因素的变动对项目经济效果评价指标的影响程度
    </p>
    <p class="content">
      + 找出影响项目经济效果的敏感因素
    </p>
    <p class="content">
      + 区分敏感性大的方案和敏感性小的方案，以便选出风险小的方案
    </p>
    <p class="content">
      + 找出项目方案的最好与最坏的经济效果的变化范围，对不确定性因素实施控制
    </p>


    <h1>二、实验原理</h1>
    <p class="secondtitle"> 敏感性分析：</p>
    <p class="content">
      敏感性分析是指从定量分析的角度研究有关因素发生某种变化对某一个或一组关键指标影响程度的一种不确定分析技术。其实质是通过逐一改变相关变量数值的方法来解释关键指标受这些因素变动影响大小的规律。
    </p>
    <p class="content">
      敏感性因素一般可选择主要参数（如销售收入、经营成本、生产能力、初始投资、寿命期、建设期、达产期等）进行分析。若某参数的小幅度变化能导致经济效果指标的较大变化，则称此参数为敏感性因素，反之则称其为非敏感性因素。
    </p>
    <p class="secondtitle"> 利润的敏感性分析：</p>
    <p class="content">
      利润的敏感性分析是指专门研究制约利润的有关因素在特定条件下发生变化时对利润所产生影响的一种敏感性的分析方法。进行利润敏感性分析的主要目的是计算有关因素的利润灵敏度指标，揭示利润与有关因素之间的相对关系，并利用灵敏度指标进行利润预测。
    </p>
    <p class="secondtitle"> 计算公式：</p>
    <p class="content">
      任意第1个因素的利润灵敏度指标=该因素的中间变量基数÷利润基数×100%
    </p>




    <h1>三、实验过程 </h1>
    <!-- <p class="content" > -->
    <p class="secondtitle"> 第一步：</p>
    <p class="content">
      选定需要分析的不确定因素。
    </p>
    <p class="content">
      不确定因素通过分析系统模型获得。确定不确定因素后，将其填写在分析变量表中。
    </p>

    <p class="secondtitle">第二步</p>
    <p class="content">
      确定进行敏感性分析经济评价指标。
    </p>
    <p class="content">
      确定经济评价指标后，将其填写在变化幅度表中。
    </p>

    <p class="secondtitle">第三步 </p>
    <p class="content">计算不确定因素变动对指标影响的数量结果。</p>
    <p class="content">将设计好的不确定因素变化情况填入分析变量表，然后将对应的经济评价指标变化结果填入变化幅度表</p>


    <p class="secondtitle">第四步</p>
    <p class="content">绘制敏感性分析统计图。</p>
    <p class="content">点击“更新敏感性分析结果”，将根据填写的敏感性因素、经济评价指标变化程度，绘制用于敏感性分析的龙卷风图和折线图</p>
    <br>

    <p class="secondtitle">第五步</p>
    <p class="content">确定敏感因素。</p>
    <p class="content">通过绘制的敏感性分析图表，结合相关计算结果，确定出各敏感因素的敏感程度 </p>

    <h1>四、实验步骤 </h1>

    <InputChart :dataSource="dataSource1" :columns="columns1" @updateData="handleDataSource1Update">
      选择分析分析变量
    </InputChart>

    <div class="container" style="margin-top: 20px;">
      <a-table :dataSource="dataSource" :columns="columns" bordered :pagination="false" />
    </div>

    <InputChart :dataSource="dataSource1" :columns="columns2" @updateData="handleDataSource2Update">
      选择变化幅度
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

    <h1>五、实验小结与心得 </h1>
    <p class="content">
      结合实验内容和结果，总结实验，并在实验报告中填写实验小结和心得。
    </p>
  </div>
</template>

<script lang="ts">
import * as echarts from 'echarts'
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { LegendComponent, TooltipComponent } from 'echarts/components'
import InputChart from '@/pages/exp8/MINGANXING/InputChart.vue';
import { Table } from 'ant-design-vue';
import { info } from 'console';

import { toRaw } from '@vue/reactivity'
import { el } from 'element-plus/es/locale';

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
        param4: 0,
      },
      analysisData: null,
      series: null,
      names: null,
      dataSource: [
        {
          key: '0',
          name: '收入',
          value: 100,
        },
      ],
      columns: [
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
          change_minus15: 73,
          change_minus10: 82,
          change_minus5: 95,
          change_minus2: 98,
          changeBasicPlan: 100,
          change_2: 102,
          change_5: 105,
          change_10: 113,
          change_15: 122,
        },
        {
          key: '2',
          uncertainty: '敏感性因素2',
          value: 1200,
          change_minus15: 151,
          change_minus10: 138,
          change_minus5: 125,
          change_minus2: 113,
          changeBasicPlan: 100,
          change_2: 89,
          change_5: 55,
          change_10: 33,
          change_15: 16,
        },
        {
          key: '5',
          uncertainty: '敏感性因素3',
          value: 3500,
          change_minus15: 198,
          change_minus10: 172,
          change_minus5: 150,
          change_minus2: 123,
          changeBasicPlan: 100,
          change_2: 80,
          change_5: 55,
          change_10: 30,
          change_15: 8,
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

      //console.log(typeof(JSON.parse(JSON.stringify(this.dataSource1))))
      this.analysisData = doAnalysis(JSON.parse(JSON.stringify(this.dataSource1)))

      this.series = getSeries(JSON.parse(JSON.stringify(this.dataSource1)))

      this.names = getName(this.series)

      // 绘制竖向柱状图
      this.drawSensitivityChart()

      // 绘制最后的折线图
      this.drawLineChart()
    },
    drawSensitivityChart(analysisData) {
      const chart = echarts.init(document.getElementById("sensitivity-chart"))
      //取第一组数据





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
          data: ['亏损', '收益'],
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
          inverse: true,
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
            data: this.analysisData.map((d) => d.change_2),
            // data:[105,55,55,22]
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
            data: this.analysisData.map((d) => -d.change_minus2),
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
            data: this.analysisData.map((d) => d.change_5),
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
            data: this.analysisData.map((d) => -d.change_minus5),
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
            data: this.analysisData.map((d) => d.change_10),
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
            data: this.analysisData.map((d) => -d.change_minus10),
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
            data: this.analysisData.map((d) => d.change_15),
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
            data: this.analysisData.map((d) => -d.change_minus15),
          },
        ],
      }

      chart.setOption(option)
    },
    drawLineChart() {
      const chart = echarts.init(document.getElementById("line-chart"))
      console.log(111)
      console.log(this.analysisData)

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
          data: this.names,
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
        series: this.series
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

function doAnalysis(dataSource1) {
  // 在这里执行敏感性分析并返回结果
  class Info {
    name: String
    change_2: number
    change_5: number
    change_10: number
    change_15: number
    changeBasicPlan: number
    change_minus2: number
    change_minus5: number
    change_minus10: number
    change_minus15: number
  }

  var datas = Info[dataSource1.length];



  var datas = []




  for (var i = 0; i < dataSource1.length; i++) {
    var newData = new Info()

    newData.name = dataSource1[i].uncertainty
    newData.change_2 = dataSource1[i].change_2
    newData.change_5 = dataSource1[i].change_5
    newData.change_10 = dataSource1[i].change_10
    newData.change_15 = dataSource1[i].change_15
    newData.changeBasicPlan = dataSource1[i].changeBasicPlan
    newData.change_minus2 = dataSource1[i].change_minus2
    newData.change_minus5 = dataSource1[i].change_minus5
    newData.change_minus10 = dataSource1[i].change_minus10
    newData.change_minus15 = dataSource1[i].change_minus15
    datas.push(newData)
  };
  console.log("datas")
  console.log(datas)


  return datas
}

function getSeries(dataSource1) {
  class serie {
    name: string
    data: Number[]
    type: string
    stack: string
  }
  console.log(dataSource1)
  var datas = [];

  for (var i = 0; i < dataSource1.length; i++) {
    var newSerie = new serie()
    newSerie.name = dataSource1[i].uncertainty
    newSerie.stack = dataSource1[i].uncertainty
    newSerie.data = []
    newSerie.type = 'line'
    newSerie.data.push(dataSource1[i].change_minus15)
    newSerie.data.push(dataSource1[i].change_minus10)
    newSerie.data.push(dataSource1[i].change_minus5)
    newSerie.data.push(dataSource1[i].change_minus2)
    newSerie.data.push(100)
    newSerie.data.push(dataSource1[i].change_2)
    newSerie.data.push(dataSource1[i].change_5)
    newSerie.data.push(dataSource1[i].change_10)
    newSerie.data.push(dataSource1[i].change_15)

    datas.push(newSerie)
  }
  console.log(datas);
  return datas
}

function getName(dataSource1) {
  var datas = [];
  for (var i = 0; i < dataSource1.length; i++) {
    datas.push(dataSource1[i].name)
  }
  return datas
}
</script>

<style>
.ant-table-thead>tr>th {
  background: #e9ecef !important;
}

.title {
  text-align: center;
  font-family: sans-serif;
  font-size: 30px;
}

.secondtitle {
  text-indent: 2em;
  font-weight: bold;
  margin-left: 30px;
  margin-right: 30px;
}

.content {
  text-indent: 2em;
  margin-left: 20px;
  margin-right: 20px;
}
</style>
