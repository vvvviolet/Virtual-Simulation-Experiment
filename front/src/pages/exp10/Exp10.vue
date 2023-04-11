<!-- 10.软件项目进度监督与控制实验项目(EVA 法)Earned Value Analysis 挣值分析法 -->
<template>

<!--  <h1 class="title" >实验10 软件项目进度监督与控制实验-->
<!--    <span>  <el-button  class="guidance" type="primary" text  @click="pdfHandle" ><el-icon size="25px"><Document /></el-icon>实验指导书下载</el-button></span>-->
<!--  </h1>-->
<!--  <hr />-->
<!--  &lt;!&ndash; <span> {{ test }}</span> &ndash;&gt;-->
<!--  <h2>一、实验目的  </h2>-->
<!--  <p class="content">理解软件项目规模度量功能点法原理，通过实验操作掌握功能点法。 学生应以小组为单位，根据本小组“软件工程管理与经济”课程设计项目架构及组件等设计成果，以功能点方法测量该项目的规模(功能点数量)。 建议选用某一种功能点方法度量课程设计项目的功能点，并采用另外一种功能点方法或其他的软件规模度量方法对前一种方法的度量结果进行验证。 本实验为课内设计性实验项目，实验学时 1 学时，完成实验报告 1 学时。-->
<!--  </p>-->
<!--  <h2>二、实验参数  </h2>-->
  <div>
    <div ref="myChart" style="width: 600px;height:400px;"></div>
  </div>



</template>


<script>
import { Document } from '@element-plus/icons-vue'
import * as echarts from 'echarts';
export default {
  name: 'Exp10',
  data() {
    return{
      options: {
        xAxis: {
          data: ['A', 'B', 'C', 'D', 'E']
        },
        yAxis: {},
        series: [
          {
            data: [10, 22, 28, 23, 19],
            type: 'line',
            smooth: true
          }
        ]
      }
    }
  },
  mounted() {
      // 获取 DOM 节点，进行初始化
      const myChart = echarts.init(this.$refs.myChart);
      // 使用ECharts设置选项
      myChart.setOption(this.options);
    },
  methods: {

  },

}
</script>

<style scoped>
.title{
  text-align:center;
  font-family: sans-serif;
  font-size:30px;
}
.secondtitle{
  text-indent: 2em;
  font-weight: bold;
  margin-left: 30px;
  margin-right: 30px;
}
.content{
  text-indent: 2em;
  margin-left: 20px;
  margin-right: 20px;
}
.guidance{
  position:absolute;
  right:50px;
  font-weight: bold;
}
</style>
