<template>
    <a-card>
        <h1 class="title">实验1 基于MARK II的小型软件项目规模度量实验
            <span>
<!--        <a-button class="guidance" type="primary" text @click="pdfHandle">-->
<!--          <el-icon size="25px">-->
<!--          </el-icon>实验指导书下载-->
<!--        </a-button>-->
      </span>

        </h1>
      <h2>第一步 决定计算的目的和类型 </h2>
      <a-textarea v-model:value="purpose" :autoSize="{ minRows: 3}"
                  style="margin-top: 10px; margin-bottom: 10px"></a-textarea>

      <a-descriptions title="项目测量报告" bordered>
        <a-descriptions-item label="测量结果" :span="3">测量结果应按照表A-2填写，并保存到项目的配置管理库中。项目结束时，应把该项目
          中的所有测量结果统一提交到SEPG组，进行归档总结，纳入公司的度量数据库，用以形成
          经验数据库和基准数据。
        </a-descriptions-item>
        <a-descriptions-item label="项目编号">
          <a-input v-model:value="projectIndex" placeholder="" />
        </a-descriptions-item>
        <a-descriptions-item label="项目名称">
          <a-input v-model:value="projectName" placeholder="" />
        </a-descriptions-item>
        <a-descriptions-item label="测量日期">
          <a-input v-model:value="projectDate" placeholder="" />
        </a-descriptions-item>
        <a-descriptions-item label="生命周期模型">
          <a-input v-model:value="lifeCircleModel" placeholder="" />
        </a-descriptions-item>
        <a-descriptions-item label="当前阶段">
          <a-input v-model:value="currentPhrase" placeholder="" />
        </a-descriptions-item>
        <a-descriptions-item label="数据来源版本">
          <a-input v-model:value="dataSourceEdition" placeholder="" />
        </a-descriptions-item>
        <a-descriptions-item label="项目经理">
          <a-input v-model:value="projectManager" placeholder="" />
        </a-descriptions-item>
        <a-descriptions-item label="需求人员">
          <a-input v-model:value="requirePeople" placeholder="" />
        </a-descriptions-item>
        <a-descriptions-item label="测量人员">
          <a-input v-model:value="measurePeople" placeholder="" />
        </a-descriptions-item>
        <a-descriptions-item label="是否评审" :span="3">
          <a-input v-model:value="isAudit" placeholder="" />
        </a-descriptions-item>
        <a-descriptions-item label="测量目的">
          <a-input v-model:value="measurePurpose" placeholder="" />
        </a-descriptions-item>
        <a-descriptions-item label="精度要求" :span="2">
          <a-input v-model:value="accuracyRequest" placeholder="" />
        </a-descriptions-item>
        <a-descriptions-item label="事务总数">
          <a-input v-model:value="totalAffair" placeholder="" />
        </a-descriptions-item>
        <a-descriptions-item label="项目规模" :span="2">
          <a-input v-model:value="projectScale" placeholder="" />
        </a-descriptions-item>
        <a-descriptions-item label="输入DET总数">
          <a-input v-model:value="totalInputDET" placeholder="" />
        </a-descriptions-item>
        <a-descriptions-item label="输出DET总数">
          <a-input v-model:value="totalOutputDET" placeholder="" />
        </a-descriptions-item>
        <a-descriptions-item label="引用实体总数">
          <a-input v-model:value="totalQuoteAffair" placeholder="" />
        </a-descriptions-item>
        <a-descriptions-item label="不确定问题" :span="3">
          <a-input v-model:value="uncertainQuestion" placeholder="" />
        </a-descriptions-item>
        <a-descriptions-item label="备注" :span="3">
          <a-input v-model:value="memo" placeholder="" />
        </a-descriptions-item>
      </a-descriptions>

      <h1 class="title">实验报告</h1>
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
                            <a-select-option value="EI" style='text-align: center'>EI</a-select-option>
                            <a-select-option value="EQ" style='text-align: center'>EQ</a-select-option>
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
                  :disabled='tableData.length>=20'>添加一行</a-button>
        <a-button type="primary"
                  @click="() => {this.tableData.pop()}"
                  :disabled='tableData.length<=1'>删除一行</a-button>
        <h2>六、实验心得 </h2>
        <a-textarea v-model:value="experience" :autoSize="{ minRows: 3}"
                    style="margin-top: 10px; margin-bottom: 10px"></a-textarea>
<!--        <a-button type="primary" @click="submit">提交</a-button>-->
    </a-card>
</template>

<script>
// import {Document} from '@element-plus/icons-vue'
import { message } from 'ant-design-vue';
export default {
    name: 'Exp1_MarkII',
    data() {
        return {
            purpose: '',
            equipment: '',
            principal: '',
            steps: '',
            experience: '',

            // 项目测量报告参数
            projectIndex: '',
            projectName: '',
            projectDate: '',
            lifeCircleModel: '',
            currentPhrase: '',
            dataSourceEdition: '',
            projectManager: '',
            requirePeople: '',
            measurePeople: '',
            isAudit: '',
            measurePurpose: '',
            accuracyRequest: '',
            totalAffair: '',
            projectScale: '',
            totalInputDET: '',
            totalOutputDET: '',
            totalQuoteAffair: '',
            uncertainQuestion: '',
            memo: '',

            columns: [
                {
                    title: '编号',
                    dataIndex: 'index',
                    scopedSlots: {customRender: 'index'},
                    width:"10%"
                },
                {
                    title: '事务名称',
                    dataIndex: 'name',
                    scopedSlots: {customRender: 'name'},
                    width:"19%"
                },
                {
                    title: '事务类型',
                    dataIndex: 'type',
                    scopedSlots: {customRender: 'type'},
                    width:"10%"
                },
                {
                    title: '输入DET数量',
                    dataIndex: 'inputNum',
                    scopedSlots: {customRender: 'input'},
                    width:"16%"
                },
                {
                    title: '输出DET数量',
                    dataIndex: 'outputNum',
                    scopedSlots: {customRender: 'output'},
                    width:"16%"
                },
                {
                    title: '引用实体数量',
                    dataIndex: 'entityNum',
                    scopedSlots: {customRender: 'entity'},
                    width:"16%"
                },
                {
                    title: '功能点指数',
                    dataIndex: 'FP',
                    scopedSlots: {customRender: 'FP'},
                    width:"13%"
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
            let index = 'T' + (len>8?'':'0') + (len + 1)
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
        computeFP(index){
            index = parseInt(index.substring(1)) - 1
            if(this.tableData[index].inputNum===''){
                this.tableData[index].FP = ''
                return
            }
            if(this.tableData[index].outputNum===''){
                this.tableData[index].FP = ''
                return
            }
            if(this.tableData[index].entityNum===''){
                this.tableData[index].FP = ''
                return
            }
            let fp = parseInt(this.tableData[index].inputNum)*0.58
                + parseInt(this.tableData[index].entityNum)*1.66
                + parseInt(this.tableData[index].outputNum)*0.26
            this.tableData[index].FP =  fp.toFixed(2)

        },
        submit(){
            console.log(this.purpose)
            if(this.purpose===''){
                message.warning('请填写实验目的');
                return
            }
            if(this.equipment===''){
                message.warning('请填写实验设备');
                return
            }
            if(this.principal===''){
                message.warning('请填写实验原理');
                return
            }
            if(this.steps===''){
                message.warning('请填写实验步骤');
                return
            }
            if(this.experience===''){
                message.warning('请填写实验心得');
                return
            }
            for(let i in this.tableData){
                if(this.tableData[i].name===''||
                    this.tableData[i].type===undefined||
                    this.tableData[i].inputNum===''||
                    this.tableData[i].outputNum===''||
                    this.tableData[i].entityNum===''){
                    message.warning('请填写表格');
                    return
                }
            }
            // 将报告转为pdf
            // 调用接口传递pdf
        },
        pdfHandle() {
            window.open('/#/show', "_blank")
        },
    }
}
</script>

<!--<style scoped>-->
<!--:deep(.ant-table-tbody){-->
<!--    font-size: 18px;-->
<!--    text-align: center;-->
<!--    word-break: break-word;-->
<!--}-->
<!--:deep(.ant-table-thead > tr > th){-->
<!--    font-size: 18px;-->
<!--    background-color: rgba(250, 248, 248, 0.85);-->
<!--    text-align: center-->
<!--}-->
<!--.title {-->
<!--    text-align: center;-->
<!--    font-family: sans-serif;-->
<!--    font-size: 30px;-->
<!--}-->
<!--.guidance {-->
<!--    position: absolute;-->
<!--    right: 50px;-->
<!--    font-weight: bold;-->
<!--}-->
<!--</style>-->
