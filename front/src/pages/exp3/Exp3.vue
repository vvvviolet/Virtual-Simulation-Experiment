<!-- 3.碳排放需求与供给实验
寻求碳排放权市场交易的供给与需求平衡点，以达成均衡价格，建议考虑交易的公平性 -->
<template>
  <Table ref="supply" :title='`供给`' @drawLine="updateChat"/>
  <Table ref="demand" :title='`需求`' @drawLine="updateChat"/>
  <div id="myChart123" :style="{width: '1500px', height: '550px'}"></div>
  <div v-if="intersectionPoint.length==0" style="text-align: center;font-weight: bold;font-size: 15px;" >暂无均衡价格</div>
  <div v-if="intersectionPoint.length>0" style="text-align: center;font-weight: bold;font-size: 15px;">均衡价格为{{ intersectionPoint[0][1] }}元/吨</div>
</template>
<script lang="ts">
import { computed, defineComponent, onMounted, reactive, ref, toRefs } from 'vue';
import type { Ref, UnwrapRef } from 'vue';
import { CheckOutlined, EditOutlined } from '@ant-design/icons-vue';
import { cloneDeep, forEach } from 'lodash-es';
import * as echarts from 'echarts'
import Table from './table.vue'
interface DataItem {
  key: string;
  supply: number;
  price: number;
}

interface Point {
  x:number;
  y:number;
}

export default defineComponent({
  components: {
    CheckOutlined,
    EditOutlined,
    Table
  },
  
  setup() {
    // 求两条线段交点，a,b 为第一条线段的始末点，c,d 为第二条线段的始末点。x，y 为点的横纵坐标
    const segmentsIntr=(a, b, c, d)=>{
      var denominator = (b.y - a.y) * (d.x - c.x) - (a.x - b.x) * (c.y - d.y)
      var x = ((b.x - a.x) * (d.x - c.x) * (c.y - a.y) +
        (b.y - a.y) * (d.x - c.x) * a.x -
        (d.y - c.y) * (b.x - a.x) * c.x) / denominator
      var y = -((b.y - a.y) * (d.y - c.y) * (c.x - a.x) +
        (b.x - a.x) * (d.y - c.y) * a.y -
        (d.x - c.x) * (b.y - a.y) * c.y) / denominator
      return [x,y]
    }

    // 判断两条线段是否有交点, a1、b1 为两条线在 x1 处的值；a2、b2 为两条线在 x2 处的值；
    // 只要不是一条线段的两个点都高于另一个点就会有交点；
    const ifHaveIntersectionPoint=(a1, b1, a2, b2)=> {
      return (+a1 > +b1) != (+a2 > +b2) || (+a1 < +b1) != (+a2 < +b2)
    }

    // 获取两线所有交点
    const getIntersectionPoint=(line1,line2)=> {
      // 交点数组
      var intersectionPointList = []
      for(let i=0;i<line1.length-1;++i){
        for(let j=0;j<line2.length-1;++j){
          if(line1[i+1][0]<line2[j][0]){
            break;
          }
          else if(line1[i][0]>line2[j+1][0]){
            continue;
          }
          else{
            if(ifHaveIntersectionPoint(line1[i][1],line2[j][1],line1[i+1][1],line2[j+1][1])){
              var a:Point={
                x:line1[i][0],
                y:line1[i][1]
              }
              var b:Point={
                x:line1[i+1][0],
                y:line1[i+1][1]
              }
              var c:Point={
                x:line2[j][0],
                y:line2[j][1]
              }
              var d:Point={
                x:line2[j+1][0],
                y:line2[j+1][1]
              }
              // 计算交点的位置
              var intersectionPoint = segmentsIntr(a,b,c,d)
              intersectionPointList.push(intersectionPoint)
            }
          }
        }
      }
      return intersectionPointList;
    }


    const dataSource: Ref<DataItem[]> = ref([
      {
        key: '0',
        supply: 100,
        price: 32,
      },
      {
        key: '1',
        supply: 200,
        price: 35,
      },
    ]);

    const supply = ref(null)
    const demand = ref(null)
    const intersectionPoint=ref([])

    const draw=(supplyData:DataItem[],demandData:DataItem[])=>{
      let myChart = echarts.init(document.getElementById("myChart123"));
      let xdata=[],ydata=[]
      let drawData1=[]
      let drawData2=[]
      supplyData.sort((a, b) => a.supply - b.supply)
      for(let i=0;i<supplyData.length;++i){
        ydata.push(supplyData[i].price)
        xdata.push(supplyData[i].supply)
        drawData1.push([Number(supplyData[i].supply),Number(supplyData[i].price)])
      }
      demandData.sort((a, b) => a.supply - b.supply)
      for(let i=0;i<demandData.length;++i){
        ydata.push(demandData[i].price)
        xdata.push(demandData[i].supply)
        drawData2.push([Number(demandData[i].supply),Number(demandData[i].price)])
      }
      console.log(getIntersectionPoint(drawData1,drawData2))
      intersectionPoint.value=getIntersectionPoint(drawData1,drawData2)
      
      // 绘制图表
      myChart.setOption({
        title:{
          text: '碳排放权供给与需求折线图',
          x: 'center'
        },
        legend: {
          data: ["供给","需求"],
          x: 'left',
        },
        xAxis: {
          min:Math.min(...xdata),
          name:"数量(吨)"
        },
        yAxis: {
          min:Math.min(...ydata),
          name:"价格(元/吨)"
        },
        tooltip: {
          trigger: 'axis', // 设置提示框为：坐标轴触发。此项主要用于柱图、折线图的配置。
        },
        series: [
          {
            name: "供给",
            type: "line",
            data: drawData1
          },
          {
            name: "需求",
            type: "line",
            data: drawData2
          },
          {
            name:"交点",
            type: 'effectScatter',
            itemStyle:{
              color: function(){
                return 'red'
              }
            },
            symbolSize: function () {   //计算大小
                return 10;
            },
            data:intersectionPoint.value
          }
        ]
      });
      window.onresize = function () { // 自适应大小
        myChart.resize();
      };
    }

    const updateChat=()=>{
      draw(supply.value.getDataSource(),demand.value.getDataSource());
    }

    onMounted(() => { // 需要获取到element,所以是onMounted的Hook
      updateChat()
    });

    return {
      dataSource,
      draw,
      supply,
      demand,
      updateChat,
      intersectionPoint
    };
  },
});
</script>
<style lang="less">
.editable-cell {
  position: relative;
  .editable-cell-input-wrapper,
  .editable-cell-text-wrapper {
    padding-right: 24px;
  }

  .editable-cell-text-wrapper {
    padding: 5px 24px 5px 5px;
  }

  .editable-cell-icon,
  .editable-cell-icon-check {
    position: absolute;
    right: 0;
    width: 20px;
    cursor: pointer;
  }

  .editable-cell-icon {
    margin-top: 4px;
    display: none;
  }

  .editable-cell-icon-check {
    line-height: 28px;
  }

  .editable-cell-icon:hover,
  .editable-cell-icon-check:hover {
    color: #108ee9;
  }

  .editable-add-btn {
    margin-bottom: 8px;
  }
}
.editable-cell:hover .editable-cell-icon {
  display: inline-block;
}
</style>
