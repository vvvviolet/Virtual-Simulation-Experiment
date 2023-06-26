<!-- 14.软件项目进度监督与控制实验项目(EVA 法)Earned Value Analysis 挣值分析法 -->
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
    <div style="padding-top: 60px; padding-bottom: 20px">
      <a-config-provider  >
        <p style="line-height: 200%; font-size: 16px">
          <a-row justify="center">
            <a-col span="6">课程名称：软件工程经济学</a-col>
            <a-col span="6">课号：420279</a-col>
            <a-col span="6">实验项目名称：软件项目进度监督与控制实验</a-col>
          </a-row>
          <a-row justify="center">
            <a-col span="6"
              >实验时间：<span style="border-bottom: 1px solid grey; border-radius: none"
                ><a-date-picker
                  v-model="experimentdate"
                  :bordered="false"
                  style="width: 150px; padding-left: 3px; padding-right: 3px"
                  placeholder="点击选择实验时间" /></span
            ></a-col>
            <a-col span="6"
              >实验报告人：
              <span style="border-bottom: 1px solid grey; border-radius: none"
                ><a-input
                  v-model="reportername"
                  placeholder="请输入报告人姓名"
                  size="small"
                  :bordered="false"
                  style="width: 18vh"
                ></a-input
              ></span>
            </a-col>
            <a-col span="6"></a-col>
          </a-row>
        </p>
      </a-config-provider>
    </div>
    <h2>一、实验目的</h2>
    <a-space direction="vertical" style="width: 100%">
      <div style="margin-left: 30px">
        1、理解软件项目进度监督与控制中的挣值分析法(Earned Value Analysis), 通过实验操作, 掌握挣值分析法的分析过程。
      </div>
      <div style="margin-left: 30px">
        2、以小组为单位, 根据本小组"软件工程管理与经济"课程设计项目的实际进度, 使用挣值分析法评估该项目的进度情况。
      </div>
      <div style="margin-left: 30px">3、本实验为课内设计性实验项目, 实验学时1学时, 完成实验报告1学时。</div>
    </a-space>
  </div>
  <div>
    <h2 style="margin-top: 10px">二、实验原理</h2>
    <a-space direction="vertical" style="width: 100%">
      <div style="margin-left: 30px">
        挣值分析法(Earned Value Analysis)是一种用于评估项目进度的方法, 通过对项目的实际成本、实际进度和计划成本进行分析,
        评估项目的进度情况。挣值分析法的核心是将项目在任一时间的计划指标, 完成状况和资源耗费综合度量。将进度转化为货币,
        或人工时, 工程量。挣值分析法的价值在于将项目的进度和费用综合度量,
        从而能准确描述项目的进展状态。挣值分析法的另一个重要优点是可以预测项目可能发生的工期滞后量和费用超支量,
        从而及时采取纠正措施, 为项目管理和控制提供了有效手段。
      </div>
    </a-space>
  </div>
  <div>
    <h2 style="margin-top: 10px">三、实验步骤与结果</h2>
    <div style="margin-top: 10px; font-size: large; margin-bottom: 10px">1、填写项目计划与项目实况信息</div>
    <a-space direction="vertical" style="width: 100%">
      <div style="font-size: large">项目计划</div>

      <div style="margin-left: 70px">
        <a-row>
          <a-col :span="6">开始日期</a-col>
          <a-col :span="6">结束日期</a-col>
          <a-col :span="6">计划工作量（人日）</a-col>
          <a-col :span="6">计划成本（千元）</a-col>
        </a-row>
      </div>
      <div>
        <a-form ref="planRef" name="plan_item" :model="plannedForm" @finish="onFinish">
          <a-space
            v-for="(timePoint, index) in plannedForm.timePoints"
            :key="timePoint.id"
            style="display: flex; margin-bottom: 8px"
            align="baseline"
          >
            <a-form-item
              :name="['timePoints', index, 'startDay']"
              :rules="{
                required: true,
                message: '缺少开始日期',
              }"
              :label="`阶段${index + 1}`"
            >
              <a-date-picker
                v-model:value="timePoint.startDay"
                placeholder="该阶段开始日期"
                @change="(date) => onChangeStart(date, index)"
                :disabled-date="(date) => disabledStart(date, index)"
              ></a-date-picker>
            </a-form-item>
            <a-form-item
              :name="['timePoints', index, 'endDay']"
              :rules="{
                required: true,
                message: '缺少结束日期',
              }"
              style="margin-left: 100px"
            >
              <a-date-picker
                v-model:value="timePoint.endDay"
                placeholder="该阶段结束日期"
                @change="(date) => onChangeEnd(date, index)"
                :disabled-date="(date) => disabledEnd(date, index)"
              ></a-date-picker>
            </a-form-item>
            <a-form-item
              :name="['timePoints', index, 'PV']"
              :rules="{
                required: true,
                message: '缺少计划工作量',
              }"
              style="margin-left: 110px"
            >
              <a-input v-model:value="timePoint.PV" placeholder="该阶段计划工作量" />
            </a-form-item>
            <a-form-item
              :name="['timePoints', index, 'cost']"
              :rules="{
                required: true,
                message: '缺少计划成本',
              }"
              style="margin-left: 70px"
            >
              <a-input v-model:value="timePoint.cost" placeholder="该阶段计划成本" />
            </a-form-item>
            <MinusCircleOutlined v-if="!timePoint.disabled" @click="removePlanTimePoint(timePoint)" />
            <MinusCircleOutlined v-else style="color: #ccc; cursor: not-allowed" />
          </a-space>
          <a-form-item>
            <a-button type="dashed" block @click="addPlanTimePoint">
              <PlusOutlined />
              添加阶段
            </a-button>
          </a-form-item>
        </a-form>
      </div>
      <a-divider></a-divider>
      <div style="font-size: large">项目实际情况</div>
      <div>
        <div style="margin-left: 65px">
          <a-row>
            <a-col :span="6">开始日期</a-col>
            <a-col :span="6">结束日期</a-col>
            <a-col :span="6">实际工作量（人日）</a-col>
            <a-col :span="6">实际成本（千元）</a-col>
          </a-row>
        </div>
        <a-form ref="formRef" name="dynamic_form_nest_item" :model="dynamicValidateForm" @finish="onFinish">
          <a-space
            v-for="(timePoint, index) in dynamicValidateForm.timePoints"
            :key="timePoint.id"
            style="display: flex; margin-bottom: 8px"
            align="baseline"
          >
            <a-form-item
              :name="['timePoints', index, 'startDay']"
              :rules="{
                required: true,
                message: '缺少开始日期',
              }"
              :label="`阶段${index + 1}`"
            >
              <a-date-picker
                v-model:value="timePoint.startDay"
                placeholder="该阶段开始日期"
                @change="(date) => onChangeStart2(date, index)"
                :disabled-date="(date) => disabledStart2(date, index)"
              ></a-date-picker>
            </a-form-item>
            <a-form-item
              :name="['timePoints', index, 'endDay']"
              :rules="{
                required: true,
                message: '缺少结束日期',
              }"
              style="margin-left: 100px"
            >
              <a-date-picker
                v-model:value="timePoint.endDay"
                placeholder="该阶段结束日期"
                @change="(date) => onChangeEnd2(date, index)"
                :disabled-date="(date) => disabledEnd2(date, index)"
              ></a-date-picker>
            </a-form-item>
            <a-form-item
              :name="['timePoints', index, 'EV']"
              :rules="{
                required: true,
                message: '缺少实际工作量',
              }"
              style="margin-left: 110px"
            >
              <a-input v-model:value="timePoint.EV" placeholder="该阶段实际工作量" />
            </a-form-item>
            <a-form-item
              :name="['timePoints', index, 'AC']"
              :rules="{
                required: true,
                message: '缺少实际成本',
              }"
              style="margin-left: 70px"
            >
              <a-input v-model:value="timePoint.AC" placeholder="该阶段实际成本" />
            </a-form-item>
            <MinusCircleOutlined v-if="!timePoint.disabled" @click="removeTimePoint(timePoint)" />
            <MinusCircleOutlined v-else style="color: #ccc; cursor: not-allowed" />
          </a-space>
          <a-form-item>
            <a-button type="dashed" block @click="addTimePoint">
              <PlusOutlined />
              添加阶段
            </a-button>
          </a-form-item>
          <a-form-item style="text-align: center">
            <a-button type="primary" html-type="submit">提交</a-button>
          </a-form-item>
        </a-form>
      </div>
      <a-divider></a-divider>
    </a-space>
    <div v-if="parameter.length !== 0" style="margin-top: 10px; font-size: large; margin-bottom: 10px">
      2、查看各项项目进度评估指标
    </div>
    <a-table v-if="parameter.length !== 0" :dataSource="parameter" :columns="paraColumns" bordered>
      <template #title>各阶段基础指标</template>
    </a-table>
    <a-table v-if="vDataSource.length !== 0" :dataSource="vDataSource" :columns="vColumns" bordered>
      <template #title>各阶段SV、CV指标</template>
      <template #footer>
        <div>
          SV &gt; 0代表实际消耗时间小于预算值, 进度提前; SV = 0代表实际消耗时间等于预算值; SV &lt;
          0代表实际消耗时间大于预算值, 进度滞后
        </div>
        <div>
          CV &gt; 0代表实际消耗成本小于预算值, 预算结余; CV = 0代表实际消耗成本等于预算值; CV &lt;
          0代表实际消耗成本大于预算值, 预算超支
        </div>
      </template>
    </a-table>
    <a-table v-if="piDataSource.length !== 0" :dataSource="piDataSource" :columns="piColumns" bordered>
      <template #title>各阶段SPI、CPI指标</template>
      <template #footer>
        <div>
          SPI &gt; 1代表实际消耗时间小于预算值, 进度提前; SPI = 1代表实际消耗时间等于预算值; SPI &lt;
          1代表实际消耗时间大于预算值, 进度滞后
        </div>
        <div>
          CPI &gt; 1代表实际消耗成本小于预算值, 预算结余; CPI = 1代表实际消耗成本等于预算值; CPI &lt;
          1代表实际消耗成本大于预算值, 预算超支
        </div>
      </template>
    </a-table>
    <div>
      <a-row :gutter="16">
        <a-col :span="12">
          <div ref="myChart" style="width: 600px; height: 600px" id="chart"></div>
        </a-col>
        <a-col :span="12">
          <div ref="myChart2" style="width: 600px; height: 600px" id="chart2"></div>
        </a-col>
      </a-row>
    </div>
    <div v-if="parameter.length !== 0" style="margin-top: 10px; font-size: large; margin-bottom: 10px">3、结论</div>
    <div v-if="parameter.length !== 0" style="margin-top: 10px; margin-bottom: 10px; margin-left: 30px">
      {{ conclusion }}
    </div>
    <h2 v-if="parameter.length !== 0" style="margin-top: 10px">四、实验心得</h2>
    <a-textarea
      v-if="parameter.length !== 0"
      v-model:value="input"
      placeholder="请在此处填写实验心得"
      show-count
      :maxlength="500"
      :rows="5"
      style="margin-top: 10px; margin-bottom: 30px"
    >
    </a-textarea>
    <div style="text-align: center">
      <a-button v-if="parameter.length !== 0" type="primary" style="margin-bottom: 20px">提交</a-button>
    </div>
  </div>
</template>

<script lang="ts">
  import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons-vue';
  import { defineComponent, reactive, ref } from 'vue';
  import { SettingOutlined } from '@ant-design/icons-vue';
  import * as echarts from 'echarts';

  export default defineComponent({
    name: 'Exp14',
    components: { SettingOutlined, MinusCircleOutlined, PlusOutlined },
    setup() {
      const plannedDays = ref(10);
      const formRef = ref();
      const planRef = ref();
      let planStageNum = 1;
      let actualStageNum = 1;
      let costPersonDay = [];
      let startDayList = [];
      let endDayList = [];
      let startDayList2 = [];
      let endDayList2 = [];
      let conclusion = ref('自定义结论');
      let input = ref('');
      const dynamicValidateForm = reactive({
        timePoints: [],
      });
      const plannedForm = reactive({
        timePoints: [],
      });
      let vDataSource = reactive([]);
      let piDataSource = reactive([]);
      let parameter = reactive([]);
      const removeTimePoint = (item) => {
        let index = dynamicValidateForm.timePoints.indexOf(item);
        if (index !== -1) {
          dynamicValidateForm.timePoints.splice(index, 1);
          startDayList2.splice(index, 1);
          endDayList2.splice(index, 1);
          actualStageNum--;
          if (actualStageNum > 1) {
            dynamicValidateForm.timePoints[actualStageNum - 1].disabled = false;
          }
        }
        onFinish(item);
      };
      const removePlanTimePoint = (item) => {
        let index = plannedForm.timePoints.indexOf(item);
        if (index !== -1) {
          plannedForm.timePoints.splice(index, 1);
          startDayList.splice(index, 1);
          endDayList.splice(index, 1);
          //console.log(plannedForm.timePoints.length);
          planStageNum--;
          if (planStageNum > 1) {
            plannedForm.timePoints[planStageNum - 1].disabled = false;
          }
          if (index < actualStageNum) {
            dynamicValidateForm.timePoints.splice(index, 1);
            actualStageNum--;
            if (actualStageNum > 1) {
              dynamicValidateForm.timePoints[actualStageNum - 1].disabled = false;
            }
          }
        }
        //console.log(plannedForm.timePoints.length);
        onFinish(item);
      };
      const addTimePoint = () => {
        //console.log(actualStageNum);
        //console.log(planStageNum);
        if (actualStageNum < planStageNum) {
          dynamicValidateForm.timePoints[actualStageNum - 1].disabled = true;
          dynamicValidateForm.timePoints.push({
            startDay: '',
            endDay: '',
            EV: '',
            AC: '',
            disabled: false,
            id: Date.now(),
          });
          actualStageNum++;
        }
      };
      const addPlanTimePoint = () => {
        //console.log(planStageNum);
        //console.log(plannedForm.timePoints[planStageNum - 1]);
        plannedForm.timePoints[planStageNum - 1].disabled = true;
        planStageNum++;
        plannedForm.timePoints.push({
          startDay: '',
          endDay: '',
          PV: '',
          cost: '',
          disabled: false,
          id: Date.now(),
        });
      };
      const onChangeStart = (date, index) => {
        //console.log(index);
        //console.log(date);
        //console.log(dateString);
        startDayList[index] = date;
        //console.log(startDayList.length);
        //let tmp = dynamicValidateForm.timePoints[index];
        let tmp = plannedForm.timePoints[index];
        tmp.id = Date.now();
        //tmp.startDay = date;
      };
      const onChangeEnd = (date, index) => {
        endDayList[index] = date;
        //let tmp = dynamicValidateForm.timePoints[index];
        let tmp = plannedForm.timePoints[index];
        tmp.id = Date.now();
        //tmp.endDay = date;
      };
      const disabledStart = (date, index) => {
        if (index > 0) {
          return date.valueOf() < endDayList[index - 1].add(1, 'days').valueOf();
        }
      };
      const disabledEnd = (date, index) => {
        return date.valueOf() < startDayList[index].add(1, 'days').valueOf();
        //return startDayList[index];
      };
      const onChangeStart2 = (date, index) => {
        //console.log(index);
        //console.log(date);
        //console.log(dateString);
        startDayList2[index] = date;
        //console.log(startDayList.length);
        let tmp = dynamicValidateForm.timePoints[index];

        tmp.id = Date.now();
        //tmp.startDay = date;
      };
      const onChangeEnd2 = (date, index) => {
        endDayList2[index] = date;
        let tmp = dynamicValidateForm.timePoints[index];
        tmp.id = Date.now();
        //tmp.endDay = date;
      };
      const disabledStart2 = (date, index) => {
        if (index > 0) {
          return date.valueOf() < endDayList2[index - 1].add(1, 'days').valueOf();
        }
      };
      const disabledEnd2 = (date, index) => {
        return date.valueOf() < startDayList2[index].add(1, 'days').valueOf();
        //return startDayList[index];
      };
      const onFinish = (values) => {
        //console.log(values);
        const myChart = echarts.init(document.getElementById('chart'));
        const myChart2 = echarts.init(document.getElementById('chart2'));
        let Min = 0;
        let Max = 50;
        let Intv = 10;

        //PV数据处理
        const objPV = new Object();
        const objPV2 = new Object();

        objPV[0] = 0; //以人日为单位
        objPV2[0] = 0; //以千元为单位
        let accumulation = 0;
        let acc2 = 0;
        let days = 0;
        for (let i = 0; i < plannedForm.timePoints.length; i++) {
          const tmp = plannedForm.timePoints[i];
          let day = 0;
          day = Math.ceil((tmp.endDay.toDate().getTime() - tmp.startDay.toDate().getTime()) / (1000 * 3600 * 24));
          days += day;

          accumulation = accumulation + parseInt(tmp.PV);
          acc2 = acc2 + parseInt(tmp.cost);
          objPV[days] = accumulation;
          objPV2[days] = acc2;
          costPersonDay[i] = parseInt(tmp.cost) / parseInt(tmp.PV);
        }
        // for (let i = 0; i < dynamicValidateForm.timePoints.length; i++) {
        //   const tmpPlan = plannedForm.timePoints[i];
        //   const tmp = dynamicValidateForm.timePoints[i];
        //   let day = 0;
        //   day = Math.ceil((tmp.endDay.toDate().getTime() - tmp.startDay.toDate().getTime()) / (1000 * 3600 * 24));
        //   days += day;

        //   accumulation = accumulation + parseInt(tmpPlan.PV);
        //   acc2 = acc2 + parseInt(tmpPlan.cost);
        //   objPV[days] = accumulation;
        //   objPV2[days] = acc2;
        // }
        //console.log(objPV)
        const PVData = Object.entries(objPV);
        const PVData2 = Object.entries(objPV2);
        //console.log(PVData)

        //EV和AC数据处理
        const objEV = new Object(); //以人日为单位
        const objEV2 = new Object(); //以千元为单位
        const objAC = new Object(); //以人日为单位
        const objAC2 = new Object(); //以千元为单位
        const objEVpre = new Object();
        const objEVpre2 = new Object();
        const objACpre = new Object();
        const objACpre2 = new Object();

        objEV[0] = 0;
        objEV2[0] = 0;
        objAC[0] = 0;
        objAC2[0] = 0;

        days = 0;
        let EV_acc = 0;
        let EV_acc2 = 0;
        let AC_acc = 0;
        let AC_acc2 = 0;
        let finalDay = 0;
        console.log(dynamicValidateForm.timePoints[dynamicValidateForm.timePoints.length - 1]);

        for (let i = 0; i < dynamicValidateForm.timePoints.length; i++) {
          const tmp = dynamicValidateForm.timePoints[i];
          const tmpPlan = plannedForm.timePoints[i];

          /* let dayPlan = Math.ceil(
          (tmpPlan.endDay.toDate().getTime() - tmpPlan.startDay.toDate().getTime()) / (1000 * 3600 * 24)
        ); */

          let day = 0;
          day = Math.ceil((tmp.endDay.toDate().getTime() - tmp.startDay.toDate().getTime()) / (1000 * 3600 * 24));
          days += day;

          //let v = dayPlan / day;

          //先计算可以直接相加得到的数据
          EV_acc = EV_acc + parseInt(tmp.EV);
          AC_acc2 = AC_acc2 + parseInt(tmp.AC);

          //再计算需要换算的数据
          EV_acc2 = EV_acc2 + parseInt(tmp.EV) * costPersonDay[i];
          AC_acc = AC_acc + parseInt(tmp.AC) / costPersonDay[i];

          objEV[days] = EV_acc;
          objEV2[days] = EV_acc2;
          objAC[days] = AC_acc;
          objAC2[days] = AC_acc2;
          finalDay = days;
        }
        let completeDay1 = 0;
        let completeDay2 = 0;
        if (accumulation > EV_acc) {
          let delta1 = Math.ceil(((accumulation - EV_acc) / EV_acc) * finalDay);
          completeDay1 = finalDay + delta1;
          objEVpre[days] = objEV[days];
          objEVpre[completeDay1] = accumulation;
          let finalAC1 = (AC_acc / finalDay) * delta1 + AC_acc;
          objACpre[completeDay1] = finalAC1;
          objACpre[days] = objAC[days];
        }
        if (acc2 > EV_acc2) {
          let delta2 = Math.ceil(((acc2 - EV_acc2) / EV_acc2) * finalDay);
          completeDay2 = finalDay + delta2;
          objEVpre2[completeDay2] = acc2;
          objEVpre2[days] = objEV2[days];
          let finalAC2 = (AC_acc2 / finalDay) * delta2 + AC_acc2;
          objACpre2[completeDay2] = finalAC2;
          objACpre2[days] = objAC2[days];
        }

        for (let i = 0; i < plannedForm.timePoints.length; i++) {
          if (i == plannedForm.timePoints.length) {
          } else {
            const tmpPlan = plannedForm.timePoints[i];
            const tmp = dynamicValidateForm.timePoints[i];
            let item;
            if (i == 0) {
              /* let dayPlan = Math.ceil(
              (tmpPlan.endDay.toDate().getTime() - tmpPlan.startDay.toDate().getTime()) / (1000 * 3600 * 24)
            );
            let day = Math.ceil(
              (tmp.endDay.toDate().getTime() - tmp.startDay.toDate().getTime()) / (1000 * 3600 * 24)
            );
            let v = dayPlan / day; */
              item = {
                num: 1,
                startDay: tmp.startDay.format('YYYY-MM-DD'),
                endDay: tmp.endDay.format('YYYY-MM-DD'),
                PV: tmpPlan.PV + '',
                EV: tmp.EV + '',
                AC: tmp.AC + '',
              };
            } else if (i < dynamicValidateForm.timePoints.length) {
              /* let dayPlan = Math.ceil(
              (tmpPlan.endDay.toDate().getTime() - tmpPlan.startDay.toDate().getTime()) / (1000 * 3600 * 24)
            );
            let day = Math.ceil(
              (tmp.endDay.toDate().getTime() - tmp.startDay.toDate().getTime()) / (1000 * 3600 * 24)
            );
            let v = dayPlan / day; */
              item = {
                num: i + 1,
                startDay: tmp.startDay.format('YYYY-MM-DD'),
                endDay: tmp.endDay.format('YYYY-MM-DD'),
                PV: tmpPlan.PV + '',
                EV: tmp.EV + '',
                AC: tmp.AC + '',
              };
            } else {
              item = {
                num: i + 1,
                //startDay: dynamicValidateForm.timePoints[i - 1].endDay.add(1, 'days').format('YYYY-MM-DD'),
                startDay: '/',
                endDay: '/',
                PV: tmpPlan.PV + '',
                EV: '/',
                AC: '/',
              };
            }
            parameter.splice(i, 1, item);
            console.log(parameter.length);
          }
        }
        console.log(plannedForm.timePoints.length);
        parameter.splice(plannedForm.timePoints.length, 1);

        //算SV，CV，SPI，CPI
        for (let i = 0; i < plannedForm.timePoints.length; i++) {
          const tmpPlan = plannedForm.timePoints[i];
          const tmp = dynamicValidateForm.timePoints[i];
          /* let dayPlan = Math.ceil(
          (tmpPlan.endDay.toDate().getTime() - tmpPlan.startDay.toDate().getTime()) / (1000 * 3600 * 24)
        );
        let day = Math.ceil((tmp.endDay.toDate().getTime() - tmp.startDay.toDate().getTime()) / (1000 * 3600 * 24));
        let v = dayPlan / day; */
          let index = i + 1;
          let vItem, piItem;
          if (i < dynamicValidateForm.timePoints.length) {
            vItem = {
              num: index,
              sv: (tmp.EV - tmpPlan.PV).toFixed(3),
              cv: (tmp.EV * costPersonDay[i] - tmp.AC).toFixed(3),
            };
            piItem = {
              num: index,
              spi: (tmp.EV / tmpPlan.PV).toFixed(3),
              cpi: ((tmp.EV * costPersonDay[i]) / tmp.AC).toFixed(3),
            };
          } else {
            vItem = {
              num: index,
              sv: '/',
              cv: '/',
            };
            piItem = {
              num: index,
              spi: '/',
              cpi: '/',
            };
          }
          vDataSource.splice(i, 1, vItem);
          piDataSource.splice(i, 1, piItem);
        }
        vDataSource.splice(plannedForm.timePoints.length, 1);
        piDataSource.splice(plannedForm.timePoints.length, 1);

        /* const tmpPlan = plannedForm.timePoints[dynamicValidateForm.timePoints.length - 1];
      const tmp = dynamicValidateForm.timePoints[dynamicValidateForm.timePoints.length - 1];
      let dayPlan = Math.ceil(
        (tmpPlan.endDay.toDate().getTime() - tmpPlan.startDay.toDate().getTime()) / (1000 * 3600 * 24)
      );
      let day = Math.ceil((tmp.endDay.toDate().getTime() - tmp.startDay.toDate().getTime()) / (1000 * 3600 * 24));
      let v = dayPlan / day; */

        console.log(objEV[days]);
        console.log(objPV[days]);
        console.log(objAC[days]);
        let totalSV = objEV[days] - objPV[days];
        let totalCV = objEV2[days] - objAC2[days];
        conclusion.value = '该项目总SV为' + totalSV.toFixed(3) + ', 项目总CV为' + totalCV.toFixed(3) + ', 可知: ';
        if (totalSV > 0) {
          conclusion.value += '该项目进度提前, ';
        } else if (totalSV < 0) {
          conclusion.value += '该项目进度滞后, ';
        } else {
          conclusion.value += '该项目进度与预期相同, ';
        }
        if (totalCV > 0) {
          conclusion.value += '成本节约。';
        } else if (totalCV < 0) {
          conclusion.value += '成本超支。';
        } else {
          conclusion.value += '成本与预期相同。';
        }
        console.log(conclusion);
        const EVData = Object.entries(objEV);
        const EVData2 = Object.entries(objEV2);
        const ACData = Object.entries(objAC);
        const ACData2 = Object.entries(objAC2);
        const EVDataPre = Object.entries(objEVpre);
        const EVDataPre2 = Object.entries(objEVpre2);
        const ACDataPre = Object.entries(objACpre);
        const ACDataPre2 = Object.entries(objACpre2);

        console.log(PVData);
        console.log(EVData);
        console.log(ACData);
        // console.log(dataSource[0])
        let maxDay1 = Math.max(days, completeDay1);
        let maxDay2 = Math.max(days, completeDay2);

        let options = {
          legend: {
            data: ['PV', 'EV', 'AC'],
          },
          xAxis: {
            interval: Intv, // 步长
            min: Min, // 起始
            max: (maxDay1 / 10 + 1) * 10, // 终止
            name: '/天',
          },
          yAxis: {
            interval: 1000, // 步长
            min: Min, // 起始
            max: (Math.ceil(objPV[days] + objEV[days] + objAC[days]) / 10 + 1) * 10, // 终止
            name: '/人日',
          },
          tooltip: {
            trigger: 'axis',
          },
          series: [
            {
              name: 'PV',
              data: PVData,
              type: 'line',
              smooth: true,
            },
            {
              name: 'EV',
              data: EVData,
              type: 'line',
              smooth: true,
            },
            {
              name: 'AC',
              data: ACData,
              type: 'line',
              smooth: true,
            },
          ],
        };

        let optionsPredict = {
          legend: {
            data: ['PV', 'EV', 'AC', 'EV_predict', 'AC_predict'],
          },
          xAxis: {
            interval: Intv, // 步长
            min: Min, // 起始
            max: (maxDay1 / 10 + 1) * 10, // 终止
            name: '/天',
          },
          yAxis: {
            interval: 1000, // 步长
            min: Min, // 起始
            max: (Math.ceil(objPV[days] + objEV[days] + objAC[days]) / 10 + 1) * 10, // 终止
            name: '/人日',
          },
          tooltip: {
            trigger: 'axis',
          },
          series: [
            {
              name: 'PV',
              data: PVData,
              type: 'line',
              smooth: true,
            },
            {
              name: 'EV',
              data: EVData,
              type: 'line',
              smooth: true,
            },
            {
              name: 'AC',
              data: ACData,
              type: 'line',
              smooth: true,
            },
            {
              name: 'EV_predict',
              data: EVDataPre,
              type: 'line',
              smooth: true,
              lineStyle: {
                type: 'dashed', // 设置为虚线
              },
            },
            {
              name: 'AC_predict',
              data: ACDataPre,
              type: 'line',
              smooth: true,
              lineStyle: {
                type: 'dashed', // 设置为虚线
              },
            },
          ],
        };

        let options2 = {
          legend: {
            data: ['PV', 'EV', 'AC'],
          },
          xAxis: {
            interval: Intv, // 步长
            min: Min, // 起始
            max: (maxDay2 / 10 + 1) * 10, // 终止
            name: '/天',
          },
          yAxis: {
            interval: 1000, // 步长
            min: Min, // 起始
            max: (Math.ceil(objPV2[days] + objEV2[days] + objAC2[days]) / 10 + 1) * 10, // 终止
            name: '/千元',
          },
          tooltip: {
            trigger: 'axis',
          },
          series: [
            {
              name: 'PV',
              data: PVData2,
              type: 'line',
              smooth: true,
            },
            {
              name: 'EV',
              data: EVData2,
              type: 'line',
              smooth: true,
            },
            {
              name: 'AC',
              data: ACData2,
              type: 'line',
              smooth: true,
            },
          ],
        };

        let optionsPredict2 = {
          legend: {
            data: ['PV', 'EV', 'AC', 'EV_predict', 'AC_predict'],
          },
          xAxis: {
            interval: Intv, // 步长
            min: Min, // 起始
            max: (maxDay2 / 10 + 1) * 10, // 终止
            name: '/天',
          },
          yAxis: {
            interval: 1000, // 步长
            min: Min, // 起始
            max: (Math.ceil(objPV2[days] + objEV2[days] + objAC2[days]) / 10 + 1) * 10, // 终止
            name: '/千元',
          },
          tooltip: {
            trigger: 'axis',
          },
          series: [
            {
              name: 'PV',
              data: PVData2,
              type: 'line',
              smooth: true,
            },
            {
              name: 'EV',
              data: EVData2,
              type: 'line',
              smooth: true,
            },
            {
              name: 'AC',
              data: ACData2,
              type: 'line',
              smooth: true,
            },
            {
              name: 'EV_predict',
              data: EVDataPre2,
              type: 'line',
              smooth: true,
              lineStyle: {
                type: 'dashed', // 设置为虚线
              },
            },
            {
              name: 'AC_predict',
              data: ACDataPre2,
              type: 'line',
              smooth: true,
              lineStyle: {
                type: 'dashed', // 设置为虚线
              },
            },
          ],
        };

        if (accumulation <= EV_acc) {
          myChart.setOption(options);
        } else {
          myChart.setOption(optionsPredict);
        }

        if (acc2 <= EV_acc2) {
          myChart2.setOption(options2);
        } else {
          myChart2.setOption(optionsPredict2);
        }
        // myChart.setOption(options);

        /* var x = plannedForm.timePoints[0].endDay.toDate().getTime();
      var y = startDay.value.toDate().getTime();
      var gap = (x - y) / (1000 * 3600 * 24); */
        /* console.log(Math.ceil(gap)); */
        /* console.log('Received values of form:', values.timePoints[0]);
      console.log('dynamicValidateForm.timePoints:', dynamicValidateForm.timePoints[0]); */
      };
      return {
        experimentdate: 0, //实验时间
        reportername: '', //实验人姓名
        plannedDays,
        planStageNum,
        actualStageNum,
        // addonAfterValue: ref('CNY'),
        plannedForm,
        formRef,
        dynamicValidateForm,
        costPersonDay,
        startDayList,
        endDayList,
        startDayList2,
        endDayList2,
        conclusion,
        input,
        onFinish,
        onChangeStart,
        onChangeEnd,
        disabledStart,
        disabledEnd,
        onChangeStart2,
        onChangeEnd2,
        disabledStart2,
        disabledEnd2,
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
          },
          {
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
          /* {
          title: 'SV含义',
          dataIndex: 'svMeaning',
          key: 'svMeaning',
        }, */
          {
            title: 'CV',
            dataIndex: 'cv',
            key: 'cv',
          },
          /* {
          title: 'CV含义',
          dataIndex: 'cvMeaning',
          key: 'cvMeaning',
        }, */
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
          /* {
          title: 'SPI含义',
          dataIndex: 'spiMeaning',
          key: 'spiMeaning',
        }, */
          {
            title: 'CPI',
            dataIndex: 'cpi',
            key: 'cpi',
          },
          /* {
          title: 'CPI含义',
          dataIndex: 'cpiMeaning',
          key: 'cpiMeaning',
        }, */
        ],

        options: {
          legend: {
            data: ['PV', 'EV', 'AC'],
          },
          xAxis: {
            interval: 10, // 步长
            min: 0, // 起始
            max: 50, // 终止
          },
          yAxis: {},
          series: [
            {
              data: [
                [1, 1],
                [2, 1],
                [3, 4],
                [4, 7],
                [5, 2],
                [6, 2],
                [7, 4],
                [8, 3],
                [10, 1],
                [11, 1],
                [12, 1],
                [13, 1],
                [14, 4],
                [15, 3],
                [16, 1],
                [18, 1],
                [20, 2],
                [22, 2],
                [23, 1],
                [25, 1],
                [26, 1],
                [27, 4],
                [29, 2],
                [30, 1],
                [31, 1],
                [32, 2],
                [34, 2],
                [35, 3],
                [36, 5],
                [37, 3],
                [38, 2],
                [42, 2],
                [43, 1],
                [46, 1],
                [47, 1],
                [48, 3],
                [51, 1],
                [53, 1],
                [56, 1],
                [62, 2],
                [63, 2],
                [65, 3],
                [66, 1],
                [67, 1],
                [68, 2],
                [69, 1],
                [70, 1],
                [71, 1],
                [75, 1],
                [77, 1],
                [83, 1],
                [85, 2],
                [86, 1],
                [88, 1],
                [91, 1],
                [96, 1],
                [104, 1],
                [106, 1],
              ],
              type: 'line',
              smooth: true,
            },
          ],
        },
      };
    },
    mounted() {
      // 获取 DOM 节点，进行初始化
      const myChart = echarts.init(this.$refs.myChart);
      // 使用ECharts设置选项
      // myChart.setOption(this.options);
      console.log(this.dynamicValidateForm.timePoints);
      if (this.dynamicValidateForm.timePoints.length === 0) {
        this.dynamicValidateForm.timePoints.push({
          startDay: '',
          endDay: '',
          EV: '',
          AC: '',
          id: Date.now(),
          disabled: true, // 添加一个 disabled 属性，防止该时间点被删除
        });
      }
      if (this.plannedForm.timePoints.length === 0) {
        this.plannedForm.timePoints.push({
          startDay: '',
          endDay: '',
          PV: '',
          cost: '',
          id: Date.now(),
          disabled: true, // 添加一个 disabled 属性，防止该时间点被删除
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
    methods: {},
  });
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

  :deep().ant-table-thead > tr > th {
    text-align: center;
  }

  :deep().ant-table-tbody > tr > td {
    text-align: center;
  }
</style>
