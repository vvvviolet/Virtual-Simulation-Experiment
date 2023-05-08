<!-- 10.软件项目进度监督与控制实验项目(EVA 法)Earned Value Analysis 挣值分析法 -->
<template>
<RouterView/>
</template>


<script >
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons-vue';
import { defineComponent, reactive, ref, watch } from 'vue';
import { SettingOutlined } from '@ant-design/icons-vue';
import * as echarts from 'echarts';
export default defineComponent({
  name: 'Exp14',
  components: { SettingOutlined,MinusCircleOutlined, PlusOutlined},
  setup() {
    const plannedDays=ref(10);
    const plannedDailyCost=ref(100);

    const value = ref<Number>(3);
    const formRef = ref();
    const dynamicValidateForm = reactive({
      timePoints: [],
    });
    const removeTimePoint = item => {
      let index = dynamicValidateForm.timePoints.indexOf(item);
      if (index !== -1) {
        dynamicValidateForm.timePoints.splice(index, 1);
      }
    };
    const addTimePoint = () => {
      dynamicValidateForm.timePoints.push({
        currentDay: '',
        EV: '',
        AC: '',
        id: Date.now(),
      });
    };
    const onFinish = values => {
      const myChart = echarts.init(document.getElementById("chart"));
      let Min = 0
      let Max = 50
      let Intv = 10

      //PV数据处理
      const objPV = new Object();
      for (let i=Min;i<=Max;i+=Intv){
        objPV[i]=i*plannedDailyCost.value
      }
      const PVData = Object.entries(objPV);

      //EV数据处理
      const objEV = new Object();
      objEV[0] = 0
      for (let i=0;i<values.timePoints.length;i++){
        let tmp = values.timePoints[i]
        objEV[tmp.currentDay] = tmp.EV*plannedDailyCost.value
      }
      const EVData = Object.entries(objEV);

      //AC数据处理
      const objAC = new Object();
      objAC[0] = 0
      for (let i=0;i<values.timePoints.length;i++){
        let tmp = values.timePoints[i]
        objAC[tmp.currentDay] = tmp.AC
      }
      const ACData = Object.entries(objAC);
      console.log(ACData)

      let options = {
        legend: {
          data: ['PV', 'EV', 'AC']
        },
        xAxis: {
          interval:Intv, // 步长
          min:Min, // 起始
          max:Max // 终止
        },
        yAxis: {
          interval:1000, // 步长
          min:Min, // 起始
          max:5000 // 终止
        },
        series: [
          {
            name: 'PV',
            data: PVData,
            type: 'line',
            smooth: true
          },
          {
            name: 'EV',
            data: EVData,
            type: 'line',
            smooth: true
          },
          {
            name: 'AC',
            data: ACData,
            type: 'line',
            smooth: true
          }
        ]
      }
      myChart.setOption(options);
      console.log('Received values of form:', values.timePoints[0]);
      console.log('dynamicValidateForm.timePoints:', dynamicValidateForm.timePoints[0]);
    };
    return{
      plannedDays,
      plannedDailyCost,
      addonAfterValue: ref('CNY'),

      formRef,
      dynamicValidateForm,
      onFinish,
      removeTimePoint,
      addTimePoint,

      options: {
        legend: {
          data: ['PV', 'EV', 'AC']
        },
        xAxis: {
          interval:10, // 步长
          min:0, // 起始
          max:50 // 终止
        },
        yAxis: {},
        series: [
          {
            data: [[1,1],[2,1],[3,4],[4,7],[5,2],[6,2],[7,4],[8,3],[10,1],[11,1],[12,1],[13,1],[14,4],[15,3],[16,1],[18,1],[20,2],[22,2],[23,1],[25,1],[26,1],[27,4],[29,2],[30,1],[31,1],[32,2],[34,2],[35,3],[36,5],[37,3],[38,2],[42,2],[43,1],[46,1],[47,1],[48,3],[51,1],[53,1],[56,1],[62,2],[63,2],[65,3],[66,1],[67,1],[68,2],[69,1],[70,1],[71,1],[75,1],[77,1],[83,1],[85,2],[86,1],[88,1],[91,1],[96,1],[104,1],[106,1]],
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
    // myChart.setOption(this.options);
  },
  // watch: {
  //   /* 如果图表数据是后台获取的，监听父组件中的数据变化，重新触发Echarts */
  //   options: {
  //     deep: true,
  //     handler (val) {
  //       console.log(val)
  //       // this.setOptions(val)
  //       this.myChart.setOption(val, true)
  //     }
  //   },
  // },
  methods: {

  },
})
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
.dynamic-delete-button {
  cursor: pointer;
  position: relative;
  top: 4px;
  font-size: 24px;
  color: #999;
  transition: all 0.3s;
}
.dynamic-delete-button:hover {
  color: #777;
}
.dynamic-delete-button[disabled] {
  cursor: not-allowed;
  opacity: 0.5;
}
</style>
