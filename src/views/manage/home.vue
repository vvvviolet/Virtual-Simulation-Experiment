<template>
  <div>
    <el-row :gutter="10">
      <el-col :span="12">
        <el-card>
          <div id="pie" :style="{width: '100%', height: '400px'}"></div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card>
          <div>
            <h3>系统公告</h3>
          </div>
          <el-collapse accordion v-model="active">
            <el-collapse-item :name="index" v-for="(item ,index) in notices" :key="item.id">
              <template slot="title">
                <b>{{ item.title }}</b>
                <span style="margin-left: 50px; color: #888">{{ item.time }}</span>
              </template>
              <div style="padding: 0 20px">{{ item.content }}</div>
            </el-collapse-item>
          </el-collapse>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import API from '../../utils/request'

const url = "/api/user/"

export default {
  name: "Home",
  data() {
    return {
      notices: [],
      active: 0,
      user: {},
    };
  },
  mounted() {
    this.user = sessionStorage.getItem("user") ? JSON.parse(sessionStorage.getItem("user")) : {}
    this.load()
    this.drawLine()
  },
  methods: {
    load() {
      API.get("/api/notice/").then((res) => {
        this.notices = res.data;
      })
    },
    drawLine() {
      const pieOption = {
        title: {text: '分类商品销量统计'},
        tooltip: {trigger: 'item'},
        legend: {top: '0', left: 'right'},
        series: [
          {
            name: '销量',
            type: 'pie',
            radius: ['40%', '70%'],
            itemStyle: {
              borderRadius: 10,
              borderColor: '#fff',
              borderWidth: 2
            },
            data: [

            ]
          }
        ]
      };
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('pie'))

      API.get("/api/goods").then(res => {
        let category = Array.from(new Set(res.data.map(v => v.categoryName)))
        category.forEach(item => {
          pieOption.series[0].data.push({name: item, value: res.data.filter(v => v.categoryName === item).map(v => v.sales).reduce((a,b) => a + b)})
        })
        console.log(pieOption)
        // 绘制图表
        myChart.setOption(pieOption);
      })
    }
  },
};
</script>

<style scoped>
</style>
