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
    <a-space direction="vertical">
      <div>
        请输入预算每日成本：
        <a-input-number v-model:value="value2">
          <template #addonAfter>
            <a-select v-model:value="addonAfterValue" style="width: 60px">
              <a-select-option value="CNY">¥</a-select-option>
              <a-select-option value="USD">$</a-select-option>
              <a-select-option value="EUR">€</a-select-option>
              <a-select-option value="GBP">£</a-select-option>
            </a-select>
          </template>
        </a-input-number>
      </div>
      <div>
      请输入估计开发时间：
      <a-input-number id="inputNumber" v-model:value="value" :min="1" :max="10" /> 天
      </div>
      <div>
        项目评估
        <a-form
            ref="formRef"
            name="dynamic_form_nest_item"
            :model="dynamicValidateForm"
            @finish="onFinish"
        >
          <a-space
              v-for="(timePoint, index) in dynamicValidateForm.timePoints"
              :key="timePoint.id"
              style="display: flex; margin-bottom: 8px"
              align="baseline"
          >
            <a-form-item
                :name="['timePoints', index, 'currentDay']"
                :rules="{
                required: true,
                message: '缺少当前天数',
              }"
            >
              <a-input v-model:value="timePoint.currentDay" placeholder="当前天数" />
            </a-form-item>
            <a-form-item
                :name="['timePoints', index, 'EV']"
                :rules="{
                required: true,
                message: '缺少挣值',
              }"
            >
              <a-input v-model:value="timePoint.EV" placeholder="挣值" />
            </a-form-item>
            <a-form-item
                :name="['timePoints', index, 'AC']"
                :rules="{
                required: true,
                message: '缺少实际成本',
              }"
            >
              <a-input v-model:value="timePoint.AC" placeholder="实际成本" />
            </a-form-item>
            <MinusCircleOutlined @click="removeTimePoint(timePoint)" />
          </a-space>
          <a-form-item>
            <a-button type="dashed" block @click="addTimePoint">
              <PlusOutlined />
              添加时间点
            </a-button>
          </a-form-item>
          <a-form-item>
            <a-button type="primary" html-type="submit">提交</a-button>
          </a-form-item>
        </a-form>
      </div>
    </a-space>
    <div ref="myChart" style="width: 600px;height:400px;" id="chart"></div>
  </div>
</template>


<script>
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons-vue';
import { defineComponent, reactive, ref, watch } from 'vue';
import { SettingOutlined } from '@ant-design/icons-vue';
import * as echarts from 'echarts';
export default defineComponent({
  name: 'Exp10',
  components: { SettingOutlined,MinusCircleOutlined, PlusOutlined},
  setup() {
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
      var newDataArr = [1,2,3,4,5]
      var options = {
        xAxis: {
          data: ['A', 'B', 'C', 'D', 'E']
        },
        yAxis: {},
        series: [
          {
            data: newDataArr,
            type: 'line',
            smooth: true
          }
        ]
      }
      myChart.setOption(options);
      console.log(options)
      console.log('Received values of form:', values);
      console.log('dynamicValidateForm.timePoints:', dynamicValidateForm.timePoints);
    };
    return{
      value: ref(10),
      value2: ref(100),
      addonAfterValue: ref('CNY'),

      formRef,
      dynamicValidateForm,
      onFinish,
      removeTimePoint,
      addTimePoint,

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
