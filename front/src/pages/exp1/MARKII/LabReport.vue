<template>
    <div style="padding-top:60px;padding-bottom:20px">
        <a-config-provider  >
            <p style="line-height:200%;font-size: 16px;">
                <a-row justify="center">
                    <a-col span="6">课程名称：软件工程经济学</a-col>
                    <a-col span="6">课号：420279</a-col>
                    <a-col span="6">实验项目名称：软件规模度量实验</a-col>
                </a-row>
                <a-row justify="center">
                    <a-col span="6">实验时间：<span style="border-bottom: 1px solid grey;border-radius: none;"><a-date-picker
                         :bordered="false"
                        style="width:150px;padding-left:3px;padding-right:3px;"
                        placeholder="点击选择实验时间" /></span></a-col>
                    <a-col span="6">实验报告人： <span style="border-bottom: 1px solid grey;border-radius: none;"><a-input
                          placeholder="请输入报告人姓名" size="small" :bordered="false"
                        style="width:18vh;"></a-input></span>
                    </a-col>
                    <a-col span="6"></a-col>
                </a-row>
            </p>
        </a-config-provider>
    </div>
  <h2>一、实验目的 </h2>
  <a-textarea v-model:value="purpose" :autoSize="{ minRows: 3}"
              style="margin-top: 10px; margin-bottom: 10px"></a-textarea>
  <h2>二、实验设备 </h2>
  <a-textarea v-model:value="equipment" :autoSize="{ minRows: 3}"
              style="margin-top: 10px; margin-bottom: 10px"></a-textarea>
  <h2>三、实验原理 </h2>
  <a-textarea v-model:value="principal" :autoSize="{ minRows: 3}"
              style="margin-top: 10px; margin-bottom: 10px"></a-textarea>
  <h2>四、实验步骤 </h2>
  <a-textarea v-model:value="steps" :autoSize="{ minRows: 3}"
              style="margin-top: 10px; margin-bottom: 10px"></a-textarea>
  <h2>五、功能点指数计算 </h2>
  <h3>1. 清点事务</h3>
  <h3 style="text-align: center;">表1：事务清点 </h3>
  <a-table
      :columns="columns"
      :data-source="tableData"
      :pagination="false"
      bordered
      size="middle"
      style="margin-bottom: 10px">
    <template #bodyCell="{column, text, record}">
      <template v-if="['name', 'type', 'inputNum', 'outputNum', 'entityNum', 'operation'].includes(column.dataIndex)">
        <div>
          <a-input
              v-if="column.dataIndex === 'name'"
              style="margin: -5px 0; width: 100%;text-align: center"
              v-model:value="record.name"
              @keyup='computeFP(record.index)'
          />
          <a-select
              v-if="column.dataIndex === 'type'"
              placeholder="请选择"
              style="margin: -5px 0; width: 100%;text-align: center"
              v-model:value="record.type"
              @change='computeFP(record.index)'>
            <a-select-option value="E" style='text-align: center'>事件</a-select-option>
            <a-select-option value="Q" style='text-align: center'>查询</a-select-option>
          </a-select>
          <a-input
              v-if="column.dataIndex === 'inputNum'"
              style="margin: -5px 0; width: 100%;text-align: center"
              v-model:value="record.inputNum" :maxlength='3'
              @input="record.inputNum = record.inputNum.replace(/\D/g,'')"
              @keyup='computeFP(record.index)'
          />
          <a-input
              v-if="column.dataIndex === 'outputNum'"
              style="margin: -5px 0; width: 100%;text-align: center"
              v-model:value="record.outputNum" :maxlength='3'
              @input="record.outputNum = record.outputNum.replace(/\D/g,'')"
              @keyup='computeFP(record.index)'
          />
          <a-input
              v-if="column.dataIndex === 'entityNum'"
              style="margin: -5px 0; width: 100%;text-align: center"
              v-model:value="record.entityNum" :maxlength='3'
              @input="record.entityNum = record.entityNum.replace(/\D/g,'')"
              @keyup='computeFP(record.index)'
          />
        </div>
      </template>
    </template>
  </a-table>
  <a-button type="primary"
            style="margin-right: 10px;
            margin-bottom: 10px" @click="handleAdd"
            :disabled='tableData.length>=20'>添加一行
  </a-button>
  <a-button type="primary"
            @click="() => {this.tableData.pop(); this.computeUnadjusted();}"
            :disabled='tableData.length<=1'>删除一行
  </a-button>
  <a-checkbox @change="onChange" style="margin-left: 15px">
    使用调整因子
  </a-checkbox>
  <h3 v-show="!checked">2. 计算未调整功能点数</h3>
  <div v-show="!checked" class="unadjusted">
    合计未调整功能点数：<span style="font-style: italic; font-weight: bold">{{
      unadjusted
    }}</span></div>
  <h3 v-show="checked">2. 计算复杂度调整因子</h3>
  <h3 v-show="checked" style="text-align: center;">表2：复杂度调整因子 </h3>
  <a-table v-show="checked" :columns="columnsAdjust" :pagination="false" :data-source="dataAdjust" bordered
           size="middle"
           style="word-break: break-all;">
    <template #bodyCell="{ column, record }">
      <template v-if="column.dataIndex === 'grade'">
        <a-input-group compact>
          <a-select v-model:value="record.grade" style="width:100%" @change="computeAdjustedRate">
            <a-select-option value="0">0</a-select-option>
            <a-select-option value="1">1</a-select-option>
            <a-select-option value="2">2</a-select-option>
            <a-select-option value="3">3</a-select-option>
            <a-select-option value="4">4</a-select-option>
            <a-select-option value="5">5</a-select-option>
          </a-select>
        </a-input-group>

      </template>
    </template>
  </a-table>
  <div v-show="checked" class="unadjusted">（可选）技术复杂度调整系数：<span style="font-weight: bold; font-style: italic">{{
      adjustedRate
    }}</span></div>
  <h3 v-show="checked">3. 计算调整后功能点数</h3>
  <div v-show="checked" class="unadjusted"> 合计调整后功能点数：<span
      style="font-weight: bold; font-style: italic">{{ adjusted }}</span></div>
  <h2>六、实验心得 </h2>
  <a-textarea v-model:value="experience" :autoSize="{ minRows: 3}"
              style="margin-top: 10px; margin-bottom: 10px"></a-textarea>

  <a-button style="margin-left: 500px" @click="submit">
    提交报告
  </a-button>

</template>

<script lang="ts">
import {message} from "ant-design-vue";
import { Dayjs } from "dayjs";
import {defineComponent, ref} from "vue";

export default defineComponent({
  name: "LabReport",
  data() {
    return {
      purpose: '',
      equipment: '',
      principal: '',
      steps: '',
      experience: '',
      checked: false,
      date: ref<Dayjs>(),
      reporter: "",

      // 项目测量报告参数
      unadjusted: 0.0,
      adjustedRate: 0,
      adjusted: 0,

      columnsAdjust: [
        {
          title: '序号', dataIndex: 'index', key: 'component',
          align: 'center', width: "8%"
        },
        {
          title: '因子', dataIndex: 'title', key: 'component',
          align: 'center', width: "80%"
        },
        {
          title: '等级', dataIndex: 'grade', key: 'component',
          align: 'center'
        },
      ],
      dataAdjust: [
        {index: '1', title: '数据通讯—使用通信设施传输数据和控制信息', grade: '0'},
        {index: '2', title: '分布式功能—应用分布在两个或更多的处理器上执行', grade: '0'},
        {index: '3', title: '性能—应用程序的响应/吞吐率', grade: '0'},
        {index: '4', title: '超负荷使用配置—运行应用程序的响应/吞吐率', grade: '0'},
        {index: '5', title: '事务到达率—高事务到达率会引发的除性能以外的问题', grade: '0'},
        {index: '6', title: '在线数据录入—用于输入的终端设备', grade: '0'},
        {index: '7', title: '为终端用户使用效率进行设计—在设计中考虑人的因素', grade: '0'},
        {index: '8', title: '在线更新—数据实时更新', grade: '0'},
        {index: '9', title: '处理的复杂性—除了简单实体数据转换之外的内部处理', grade: '0'},
        {index: '10', title: '代码复用性—代码被设计来与其他应用共享或重复使用', grade: '0'},
        {index: '11', title: '易安装—数据转换和易安装需要在设计时考虑', grade: '0'},
        {index: '12', title: '操作易用性—在设计时考虑方便的操作', grade: '0'},
        {index: '13', title: '多节点—应用程序在多个节点和/或多个组织中使用', grade: '0'},
        {index: '14', title: '支持变化—在设计时考虑支持未来的变化', grade: '0'},
        {index: '15', title: '其他应用程序的需求—接口', grade: '0'},
        {index: '16', title: '安全、隐私、可审计—保密/安全专有特性', grade: '0'},
        {index: '17', title: '用户培训需要—特定需求', grade: '0'},
        {index: '18', title: '第三方直接使用—应用程序的使用/关联度', grade: '0'},
        {index: '19', title: '文档化', grade: '0'},
      ],

      columns: [
        {
          title: '编号',
          dataIndex: 'index',
          scopedSlots: {customRender: 'index'},
          width: "10%"
        },
        {
          title: '事务名称',
          dataIndex: 'name',
          scopedSlots: {customRender: 'name'},
          width: "18%"
        },
        {
          title: '事件或查询',
          dataIndex: 'type',
          scopedSlots: {customRender: 'type'},
          width: "15%"
        },
        {
          title: '输入DET数量',
          dataIndex: 'inputNum',
          scopedSlots: {customRender: 'input'},
          width: "15%"
        },
        {
          title: '输出DET数量',
          dataIndex: 'outputNum',
          scopedSlots: {customRender: 'output'},
          width: "15%"
        },
        {
          title: '引用实体数量',
          dataIndex: 'entityNum',
          scopedSlots: {customRender: 'entity'},
          width: "15%"
        },
        {
          title: '功能点指数',
          dataIndex: 'FP',
          scopedSlots: {customRender: 'FP'},
          width: "13%"
        },
      ],
      tableData: [
        {
          index: 'T01',
          name: '',
          type: undefined,
          inputNum: '',
          outputNum: '',
          entityNum: '',
          FP: ''
        },
      ],
    }
  },
  methods: {
    handleAdd() {
      let len = this.tableData.length
      let index = 'T' + (len > 8 ? '' : '0') + (len + 1)
      console.log(index)
      const newData = {
        index: index,
        name: ``,
        type: undefined,
        inputNum: '',
        outputNum: '',
        entityNum: '',
        FP: ''
      };
      this.tableData.push(newData);
    },
    computeFP(index) {
      index = parseInt(index.substring(1)) - 1
      if (this.tableData[index].inputNum === '') {
        this.tableData[index].FP = ''
        return
      }
      if (this.tableData[index].outputNum === '') {
        this.tableData[index].FP = ''
        return
      }
      if (this.tableData[index].entityNum === '') {
        this.tableData[index].FP = ''
        return
      }
      let fp = parseInt(this.tableData[index].inputNum) * 0.58
          + parseInt(this.tableData[index].entityNum) * 1.66
          + parseInt(this.tableData[index].outputNum) * 0.26
      this.tableData[index].FP = fp.toFixed(2)
      this.adjusted = this.unadjusted * this.adjustedRate
      this.computeUnadjusted();
    },
    computeUnadjusted() {
      let unadjusted = 0.0;
      for (let i = 0; i < this.tableData.length; i++) {
        unadjusted += parseFloat(this.tableData[i].FP);
      }
      this.unadjusted = unadjusted.toFixed(2);
    },
    computeAdjustedRate() {
      let rate = 0;
      for (let i = 0; i < this.dataAdjust.length; i++) {
        rate += parseInt(this.dataAdjust[i].grade);
      }
      this.adjustedRate = rate * 0.005 + 0.65;
      this.adjustedRate = this.adjustedRate.toFixed(3)
      this.adjusted = this.unadjusted * this.adjustedRate
      this.adjusted = this.adjusted.toFixed(2)
    },
    submit() {
      console.log(this.purpose)
      if (this.purpose === '') {
        message.warning('请填写实验目的');
        return
      }
      if (this.equipment === '') {
        message.warning('请填写实验设备');
        return
      }
      if (this.principal === '') {
        message.warning('请填写实验原理');
        return
      }
      if (this.steps === '') {
        message.warning('请填写实验步骤');
        return
      }

      for (let i in this.tableData) {
        if (this.tableData[i].name === '' ||
            this.tableData[i].type === undefined ||
            this.tableData[i].inputNum === '' ||
            this.tableData[i].outputNum === '' ||
            this.tableData[i].entityNum === '') {
          message.warning('请填写表格');
          return
        }
      }
      if (this.experience === '') {
        message.warning('请填写实验心得');
        return
      }
      // 将报告转为pdf
      // 调用接口传递pdf
      message.success('提交成功');
    },
    pdfHandle() {
      window.open('/#/show', "_blank")
    },
    onChange(e) {
      this.checked = !this.checked
      console.log(`checked = ${e.target.checked}`);
    },
  }
})
</script>

<style scoped>
:deep(.ant-table-tbody) {
  font-size: 18px;
  text-align: center;
  word-break: break-word;
}

:deep(.ant-table-thead > tr > th) {
  font-size: 18px;
  background-color: rgba(250, 248, 248, 0.85);
  text-align: center
}
h3 {
  margin-top: 20px;
}
h1,h2,h3{
    font-weight: bolder;
}
.wrapper{
  width: 80%;
  margin-left: 10%;
  height: auto;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  font-size: 16px;
}
.wrapper-content{
  width: 33%;
}
.wrapper-content1{
  width: 20%;
}
.wrapper-content2{
  width: 46%;
}

.title {
  text-align: center;
  font-family: sans-serif;
  font-size: 30px;
}

.content {
  text-indent: 2em;
  margin-left: 20px;
  margin-right: 20px;
}

.unadjusted {
  font-size: 18px;
  text-align: right;
  word-break: break-word;
}
</style>
