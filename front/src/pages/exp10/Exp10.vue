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
      <!-- <div>
        请输入预算每日成本：
        <a-input-number v-model:value="plannedDailyCost"> -->
      <!--          <template #addonAfter>-->
      <!--            <a-select v-model:value="addonAfterValue" style="width: 60px">-->
      <!--              <a-select-option value="CNY">¥</a-select-option>-->
      <!--              <a-select-option value="USD">$</a-select-option>-->
      <!--              <a-select-option value="EUR">€</a-select-option>-->
      <!--              <a-select-option value="GBP">£</a-select-option>-->
      <!--            </a-select>-->
      <!--          </template>-->
      <!-- </a-input-number> 元
      </div>
      <div>
      请输入估计开发时间：
      <a-input-number id="inputNumber" v-model:value="plannedDays" :min="1" :max="10" /> 天
      </div> -->
      <div>
        计划阶段安排
      </div>
      <div>
        项目开始日期：
        <a-date-picker v-model:value="startDay" placeholder="项目开始日期"></a-date-picker>
      </div>
      <div style="margin-left: 75px;">
        <a-row>
          <a-col :span="12">阶段结束日期</a-col>
          <a-col :span="12">本阶段计划成本</a-col>
        </a-row>
      </div>
      <div>
        <a-form ref="planRef" name="plan_item" :model="plannedForm" @finish="onFinish">
          <a-space v-for="(timePoint, index) in plannedForm.timePoints" :key="timePoint.id"
            style="display: flex; margin-bottom: 8px" align="baseline">
            <a-form-item :name="['timePoints', index, 'endDay']" :rules="{
                required: true,
                message: '缺少结束日期',
              }" :label="`阶段${index + 1}`">
              <a-date-picker v-model:value="timePoint.endDay" placeholder="该阶段结束日期"></a-date-picker>
            </a-form-item>
            <a-form-item :name="['timePoints', index, 'PV']" :rules="{
                required: true,
                message: '缺少计划成本',
              }">
              <a-input v-model:value="timePoint.PV" placeholder="该阶段计划成本" />
            </a-form-item>
            <MinusCircleOutlined v-if="!timePoint.disabled" @click="removePlanTimePoint(timePoint)" />
            <MinusCircleOutlined v-else style="color: #ccc; cursor: not-allowed;" />
          </a-space>
          <a-form-item>
            <a-button type="dashed" block @click="addPlanTimePoint">
              <PlusOutlined />
              添加阶段
            </a-button>
          </a-form-item>
          <!-- <a-form-item>
            <a-button type="primary" html-type="submit">提交</a-button>
          </a-form-item> -->
        </a-form>
      </div>
      <a-divider></a-divider>
      <div>
        项目评估
        <div style="margin-left: 65px;">
          <a-row>
            <a-col :span="12">阶段末完成工作量</a-col>
            <a-col :span="12">本阶段实际成本</a-col>
          </a-row>
        </div>
        <a-form ref="formRef" name="dynamic_form_nest_item" :model="dynamicValidateForm" @finish="onFinish">
          <a-space v-for="(timePoint, index) in dynamicValidateForm.timePoints" :key="timePoint.id"
            style="display: flex; margin-bottom: 8px" align="baseline">

            <a-form-item :name="['timePoints', index, 'currentWork']" :rules="{
                required: true,
                message: '缺少当前完成的工作量',
              }" :label="`阶段${index + 1}`">
              <!-- <a-input v-model:value="timePoint.currentWork" placeholder="当前完成的工作量" /> -->
              <a-date-picker v-model:value="timePoint.currentWork" placeholder="该阶段结束日期"></a-date-picker>
            </a-form-item>
            <a-form-item :name="['timePoints', index, 'AC']" :rules="{
                required: true,
                message: '缺少实际成本',
              }">
              <a-input v-model:value="timePoint.AC" placeholder="实际成本" />
            </a-form-item>
            <MinusCircleOutlined v-if="!timePoint.disabled" @click="removeTimePoint(timePoint)" />
            <MinusCircleOutlined v-else style="color: #ccc; cursor: not-allowed;" />
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
      <a-divider></a-divider>
    </a-space>
    <a-table v-if="parameter.length !== 0" :dataSource="parameter" :columns="paraColumns" bordered />
    <a-table v-if="vDataSource.length !== 0" :dataSource="vDataSource" :columns="vColumns" bordered />
    <a-table v-if="piDataSource.length !== 0" :dataSource="piDataSource" :columns="piColumns" bordered />
    <div ref="myChart" style="width: 1200px;height:675px;" id="chart"></div>
  </div>
</template>


<script >
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons-vue';
import { defineComponent, reactive, ref, watch } from 'vue';
import { SettingOutlined } from '@ant-design/icons-vue';
import moment from 'moment';
import * as echarts from 'echarts';

export default defineComponent({
  name: 'Exp10',
  components: { SettingOutlined, MinusCircleOutlined, PlusOutlined },
  setup() {
    const plannedDays = ref(10);
    const plannedDailyCost = ref(100);
    const startDay = ref();
    const value = ref < Number > (3);
    const formRef = ref();
    const planRef = ref();
    let planStageNum = ref < Number > (1);
    let actualStageNum = ref < Number > (1);
    const dynamicValidateForm = reactive({
      timePoints: [],
    });
    const plannedForm = reactive({
      timePoints: [],
    });
    let vDataSource = reactive([]);
    let piDataSource = reactive([]);
    let parameter = reactive([]);
    const removeTimePoint = item => {
      let index = dynamicValidateForm.timePoints.indexOf(item);
      if (index !== -1) {
        dynamicValidateForm.timePoints.splice(index, 1);
        actualStageNum--
      }
    };
    const removePlanTimePoint = item => {
      let index = plannedForm.timePoints.indexOf(item);
      if (index !== -1) {
        plannedForm.timePoints.splice(index, 1);
        planStageNum--
        if (index <= actualStageNum) {
          dynamicValidateForm.timePoints.splice(index, 1);
          actualStageNum--
        }
      }
    };
    const addTimePoint = () => {
      if (actualStageNum < planStageNum) {
        dynamicValidateForm.timePoints.push({
          currentDay: '',
          EV: '',
          AC: '',
          disabled: false,
          id: Date.now(),
        });
        actualStageNum++
      }

    };
    const addPlanTimePoint = () => {
      planStageNum++
      plannedForm.timePoints.push({
        endDay: '',
        PV: '',
        disabled: false,
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
      // for (let i = Min; i <= Max; i += Intv) {
      //   objPV[i] = i * plannedDailyCost.value
      // }
      objPV[0] = 0
      let accumulation = 0;
      for (let i = 0; i < plannedForm.timePoints.length; i++) {
        const tmp = plannedForm.timePoints[i]
        let current = 0
        current = Math.ceil((tmp.endDay.toDate().getTime() - startDay.value.toDate().getTime()) / (1000 * 3600 * 24))
        // if(i==0){
        //   gap=Math.ceil((tmp.endDay.toDate().getTime()-startDay.value.toDate().getTime())/ (1000 * 3600 * 24))
        // }
        // else{
        //   gap=Math.ceil((tmp.endDay.toDate().getTime()-plannedForm.timePoints[i-1].endDay.toDate().getTime())/ (1000 * 3600 * 24))
        // }
        accumulation = accumulation + parseInt(tmp.PV)
        objPV[current] = accumulation
      }
      //console.log(objPV)
      const PVData = Object.entries(objPV);
      //console.log(PVData)

      //EV和AC数据处理
      const objEV = new Object();
      const objAC = new Object();
      objEV[0] = 0
      objAC[0] = 0

      for (let i = 0; i < dynamicValidateForm.timePoints.length; i++) {
        const tmp = dynamicValidateForm.timePoints[i]
        const x = Math.ceil((tmp.currentWork.toDate().getTime() - startDay.value.toDate().getTime()) / (1000 * 3600 * 24))
        let j = 0
        for (; ; j++) {
          const tmp = plannedForm.timePoints[j]
          let current = 0
          current = Math.ceil((tmp.endDay.toDate().getTime() - startDay.value.toDate().getTime()) / (1000 * 3600 * 24))
          // console.log("!")
          // console.log(current)
          if (current >= x) {
            break
          }
        }
        console.log(j)
        let x0 = 0
        let y0 = 0
        if (j == 0) {
          x0 = 0
          y0 = 0
        }
        else {
          x0 = Math.ceil((plannedForm.timePoints[j - 1].endDay.toDate().getTime() - startDay.value.toDate().getTime()) / (1000 * 3600 * 24))
          for (let k = 0; k < j; k++) {
            y0 = y0 + parseInt(plannedForm.timePoints[k].PV)
          }
        }
        // const x0=Math.ceil((plannedForm.timePoints[j-1].endDay.toDate().getTime() - startDay.value.toDate().getTime()) / (1000 * 3600 * 24))
        // const yo=plannedForm.timePoints[j-1].PV
        const x1 = Math.ceil((plannedForm.timePoints[j].endDay.toDate().getTime() - startDay.value.toDate().getTime()) / (1000 * 3600 * 24))
        let y1 = parseInt(plannedForm.timePoints[j].PV) + y0
        const h0 = x - x0
        const h1 = x1 - x
        const y = (h1 * y0 + h0 * y1) / (h0 + h1);
        console.log("y0")
        console.log(y0)
        console.log("y1")
        console.log(y1)
        const tmpPlan = plannedForm.timePoints[i]
        const time = Math.ceil((tmpPlan.endDay.toDate().getTime() - startDay.value.toDate().getTime()) / (1000 * 3600 * 24))
        dynamicValidateForm.timePoints[i].EV = y
        objEV[time] = y
      }

      let costAccumulate = 0
      for (let i = 0; i < dynamicValidateForm.timePoints.length; i++) {
        const tmp = plannedForm.timePoints[i]
        const tmpAc = dynamicValidateForm.timePoints[i]
        console.log(tmp.endDay.toDate())
        let current = Math.ceil((tmp.endDay.toDate().getTime() - startDay.value.toDate().getTime()) / (1000 * 3600 * 24))
        costAccumulate = costAccumulate + parseInt(tmpAc.AC)
        objAC[current] = costAccumulate
      }

      for (let i = 0; i < plannedForm.timePoints.length; i++) {
        const tmpPlan = plannedForm.timePoints[i]
        const tmp = dynamicValidateForm.timePoints[i]
        let item
        if (i == 0) {
          item = {
            num: 1,
            startDay: startDay.value.format('YYYY-MM-DD'),
            endDay: tmpPlan.endDay.format('YYYY-MM-DD'),
            PV: tmpPlan.PV + "",
            EV: tmp.EV.toFixed(3) + "",
            AC: tmp.AC + "",
          }
        }
        else if (i < dynamicValidateForm.timePoints.length) {
          let accumulationPV = 0
          let accumulationAC = 0
          for (let j = 0; j <= i; j++) {
            const tmpPlan = plannedForm.timePoints[j]
            const tmp = dynamicValidateForm.timePoints[j]
            accumulationPV = accumulationPV + parseInt(tmpPlan.PV)
            accumulationAC = accumulationAC + parseInt(tmp.AC)
          }
          item = {
            num: i + 1,
            startDay: plannedForm.timePoints[i - 1].endDay.add(1, 'days').format('YYYY-MM-DD'),
            endDay: tmpPlan.endDay.format('YYYY-MM-DD'),
            PV: accumulationPV + "",
            EV: tmp.EV.toFixed(3) + "",
            AC: accumulationAC + "",
          }
        }
        else {
          let accumulationPV = 0
          for (let j = 0; j <= i; j++) {
            const tmpPlan = plannedForm.timePoints[j]
            accumulationPV = accumulationPV + parseInt(tmpPlan.PV)
          }
          item = {
            num: i + 1,
            startDay: plannedForm.timePoints[i - 1].endDay.add(1, 'days').format('YYYY-MM-DD'),
            endDay: tmpPlan.endDay.format('YYYY-MM-DD'),
            PV: accumulationPV + "",
            EV: "/",
            AC: "/",
          }
        }
        parameter.splice(i, 1, item)
      }

      //算SV，CV，SPI，CPI
      for (let i = 0; i < dynamicValidateForm.timePoints.length; i++) {
        const tmpPlan = plannedForm.timePoints[i]
        const tmp = dynamicValidateForm.timePoints[i]
        let current = Math.ceil((tmpPlan.endDay.toDate().getTime() - startDay.value.toDate().getTime()) / (1000 * 3600 * 24))
        let index = i + 1
        //console.log(index)
        let accumulationPV = 0
        let accumulationAC = 0
        for (let j = 0; j <= i; j++) {
          const tmpPlan = plannedForm.timePoints[j]
          const tmp = dynamicValidateForm.timePoints[j]
          accumulationPV = accumulationPV + parseInt(tmpPlan.PV)
          accumulationAC = accumulationAC + parseInt(tmp.AC)
        }
        let vItem = {
          num: index,
          sv: (tmp.EV - accumulationPV).toFixed(3),
          cv: (tmp.EV - accumulationAC).toFixed(3),
        }
        let piItem = {
          num: index,
          spi: (tmp.EV / accumulationPV).toFixed(3),
          cpi: (tmp.EV / accumulationAC).toFixed(3),
        }
        if (vItem.sv > 0)
          vItem.svMeaning = "实际消耗时间小于预算值，进度提前"
        else if (vItem.sv == 0)
          vItem.svMeaning = "实际消耗时间等于预算值"
        else if (vItem.sv < 0)
          vItem.svMeaning = "实际消耗时间大于预算值，进度滞后"

        if (vItem.cv > 0)
          vItem.cvMeaning = "实际消耗成本小于预算值，预算结余"
        else if (vItem.cv == 0)
          vItem.cvMeaning = "实际消耗成本等于预算值"
        else if (vItem.cv < 0)
          vItem.cvMeaning = "实际消耗成本大于预算值，预算超支"

        if (piItem.spi > 1)
          piItem.spiMeaning = "实际消耗时间小于预算值，进度提前"
        else if (piItem.spi == 1)
          piItem.spiMeaning = "实际消耗时间等于预算值"
        else if (piItem.spi < 1)
          piItem.spiMeaning = "实际消耗时间大于预算值，进度滞后"

        if (piItem.cpi > 1)
          piItem.cpiMeaning = "实际消耗成本小于预算值，预算结余"
        else if (piItem.cpi == 1)
          piItem.cpiMeaning = "实际消耗成本等于预算值"
        else if (piItem.cpi < 1)
          piItem.cpiMeaning = "实际消耗成本大于预算值，预算超支"
        vDataSource.splice(i, 1, vItem)
        piDataSource.splice(i, 1, piItem)
      }


      // for (let i = 0; i < values.timePoints.length; i++) {
      //   const tmp = values.timePoints[i]
      //   objEV[tmp.currentDay] = tmp.EV * plannedDailyCost.value
      //   objAC[tmp.currentDay] = tmp.AC
      //   let item = {
      //     days: tmp.currentDay,
      //     sv: tmp.EV * plannedDailyCost.value - tmp.currentDay * plannedDailyCost.value,
      //     cv: tmp.EV * plannedDailyCost.value - tmp.AC,
      //     spi: (tmp.EV * plannedDailyCost.value) / (tmp.currentDay * plannedDailyCost.value),
      //     cpi: (tmp.EV * plannedDailyCost.value) / (tmp.AC)
      //   }
      //   if (item.sv > 0)
      //     item.svMeaning = "实际消耗时间小于预算值，进度提前"
      //   else if (item.sv == 0)
      //     item.svMeaning = "实际消耗时间等于预算值"
      //   else if (item.sv < 0)
      //     item.svMeaning = "实际消耗时间大于预算值，进度滞后"

      //   if (item.cv > 0)
      //     item.cvMeaning = "实际消耗成本小于预算值，预算结余"
      //   else if (item.cv == 0)
      //     item.cvMeaning = "实际消耗成本等于预算值"
      //   else if (item.cv < 0)
      //     item.cvMeaning = "实际消耗成本大于预算值，预算超支"

      //   if (item.spi > 1)
      //     item.spiMeaning = "实际消耗时间小于预算值，进度提前"
      //   else if (item.spi == 1)
      //     item.spiMeaning = "实际消耗时间等于预算值"
      //   else if (item.spi < 1)
      //     item.spiMeaning = "实际消耗时间大于预算值，进度滞后"

      //   if (item.cpi > 1)
      //     item.cpiMeaning = "实际消耗成本小于预算值，预算结余"
      //   else if (item.cpi == 1)
      //     item.cpiMeaning = "实际消耗成本等于预算值"
      //   else if (item.cpi < 1)
      //     item.cpiMeaning = "实际消耗成本大于预算值，预算超支"
      //   dataSource.splice(i, 1, item)
      //   dataSource[i].SV=tmp.EV*plannedDailyCost.value-objPV[i]
      // }
      const EVData = Object.entries(objEV);
      const ACData = Object.entries(objAC);
      console.log(PVData)
      console.log(EVData)
      console.log(ACData)
      // console.log(dataSource[0])

      let options = {
        legend: {
          data: ['PV', 'EV', 'AC']
        },
        xAxis: {
          interval: Intv, // 步长
          min: Min, // 起始
          max: Max // 终止
        },
        yAxis: {
          interval: 1000, // 步长
          min: Min, // 起始
          max: 100 // 终止
        },
        tooltip: {
          trigger: 'axis'
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
      var x = plannedForm.timePoints[0].endDay.toDate().getTime()
      var y = startDay.value.toDate().getTime()
      var gap = (x - y) / (1000 * 3600 * 24)
      console.log(Math.ceil(gap))
      console.log('Received values of form:', values.timePoints[0]);
      console.log('dynamicValidateForm.timePoints:', dynamicValidateForm.timePoints[0]);
    };
    return {
      plannedDays,
      plannedDailyCost,
      startDay,
      planStageNum,
      actualStageNum,
      // addonAfterValue: ref('CNY'),
      plannedForm,
      formRef,
      dynamicValidateForm,
      onFinish,
      removeTimePoint,
      addTimePoint,
      addPlanTimePoint,
      removePlanTimePoint,

      vDataSource,
      piDataSource,

      parameter,
      paraColumns: [
        {
          title: '阶段数',
          dataIndex: 'num',
          key: 'num',
        },
        {
          title: '起始日期',
          dataIndex: 'startDay',
          key: 'startDay',
        },
        {
          title: '终止日期',
          dataIndex: 'endDay',
          key: 'endDay',
        },
        {
          title: 'PV',
          dataIndex: 'PV',
          key: 'PV',
        },
        {
          title: 'EV',
          dataIndex: 'EV',
          key: 'EV',
        }, {
          title: 'AC',
          dataIndex: 'AC',
          key: 'AC',
        },
      ],
      vColumns: [
        {
          title: '阶段数',
          dataIndex: 'num',
          key: 'num',
        },
        {
          title: 'SV',
          dataIndex: 'sv',
          key: 'sv',
        },
        {
          title: 'SV含义',
          dataIndex: 'svMeaning',
          key: 'svMeaning',
        },
        {
          title: 'CV',
          dataIndex: 'cv',
          key: 'cv',
        },
        {
          title: 'CV含义',
          dataIndex: 'cvMeaning',
          key: 'cvMeaning',
        },
      ],
      piColumns: [
        {
          title: '阶段数',
          dataIndex: 'num',
          key: 'num',
        },
        {
          title: 'SPI',
          dataIndex: 'spi',
          key: 'spi',
        },
        {
          title: 'SPI含义',
          dataIndex: 'spiMeaning',
          key: 'spiMeaning',
        },
        {
          title: 'CPI',
          dataIndex: 'cpi',
          key: 'cpi',
        },
        {
          title: 'CPI含义',
          dataIndex: 'cpiMeaning',
          key: 'cpiMeaning',
        },
      ],

      options: {
        legend: {
          data: ['PV', 'EV', 'AC']
        },
        xAxis: {
          interval: 10, // 步长
          min: 0, // 起始
          max: 50 // 终止
        },
        yAxis: {},
        series: [
          {
            data: [[1, 1], [2, 1], [3, 4], [4, 7], [5, 2], [6, 2], [7, 4], [8, 3], [10, 1], [11, 1], [12, 1], [13, 1], [14, 4], [15, 3], [16, 1], [18, 1], [20, 2], [22, 2], [23, 1], [25, 1], [26, 1], [27, 4], [29, 2], [30, 1], [31, 1], [32, 2], [34, 2], [35, 3], [36, 5], [37, 3], [38, 2], [42, 2], [43, 1], [46, 1], [47, 1], [48, 3], [51, 1], [53, 1], [56, 1], [62, 2], [63, 2], [65, 3], [66, 1], [67, 1], [68, 2], [69, 1], [70, 1], [71, 1], [75, 1], [77, 1], [83, 1], [85, 2], [86, 1], [88, 1], [91, 1], [96, 1], [104, 1], [106, 1]],
            type: 'line',
            smooth: true
          }
        ]
      },
    }
  },
  mounted() {
    // 获取 DOM 节点，进行初始化
    const myChart = echarts.init(this.$refs.myChart);
    // 使用ECharts设置选项
    // myChart.setOption(this.options);
    console.log(this.dynamicValidateForm.timePoints)
    if (this.dynamicValidateForm.timePoints.length === 0) {
      this.dynamicValidateForm.timePoints.push({
        currentDay: '',
        currentWork: '',
        EV: '',
        AC: '',
        id: Date.now(),
        disabled: true // 添加一个 disabled 属性，防止该时间点被删除
      });
    }
    if (this.plannedForm.timePoints.length === 0) {
      this.plannedForm.timePoints.push({
        endDay: '',
        PV: '',
        id: Date.now(),
        disabled: true // 添加一个 disabled 属性，防止该时间点被删除
      });
    }
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

.guidance {
  position: absolute;
  right: 50px;
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

:deep().ant-table-thead>tr>th {
  text-align: center;
}

:deep().ant-table-tbody>tr>td {
  text-align: center;
}
</style>
