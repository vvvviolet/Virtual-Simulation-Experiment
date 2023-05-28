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
    <h2>实验指导书</h2>
    <p class="secondtitle">1. 目的</p>
    <p class="content">本规则是对公司的所有项目进行规模测量的计算规则，基于软件需求产生软件规模的
      估计。
      <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;本规则是基于Mk II功能点分析方法对应用软件行进规模测量。
      <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;本规则一共是5个步骤，其中前3步骤是计算未调整功能点指数数量，即第
      四步是计算调整后的功能点指数，这一步是可选的。
    </p>


    <p class="secondtitle">2. 范围</p>
    <p class="content">功能点指数数量是对软件功能规模的间接定量测量。
      <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;决定未调整的功能指数的工作包括分析计算实体的数量，分析、标示、归类实体类型，
      计算输入DET，计算输出DET等。
      <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;功能点具有两个独立的目标，第一个目标是作为软件测量、对比和分析（例如，软件度量方法）的基础。第二个，也是更重要的目标，是作为软件成本估计模型（例如，公式）
      和产出工作量（例如，工时）工具的输入，软件成本估计模型和工具则基于功能点和工作
      量之间的经验成本估计关系（CER），以及把项目数据记录到历史经验库和基准数据库，
      为将来的项目提供参考和基准数据。
    </p>


    <p class="secondtitle">3. 输出</p>
    <p class="content">未调整功能点指数数量。未调整功能点指数数量作为软件成本估计基础，是对软件
      规模、功能和复杂度的测量。
      <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果进行可选的第五步，还需要下列输出：
      <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1.&nbsp;调整因子列表。列出20种调整因子的数值和总调整因子。
      <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.&nbsp;调整后功能点指数数量。调整后功能点指数数量作为软件成本估计基础，是对软件
      规模、功能和复杂度的测量。
    </p>


    <p class="secondtitle">4. 步骤</p>
    <p class="secondtitle">第一步，决定测量的目的和精确程度</p>
    <p class="content">首先要标识出客户和计算功能点的目的。例如，它是测量一个特定开发组的工作输出，还是测量一个特定用户所需要的功能。目的是计算需求的所有功能，还是计算交付给用户
      的功能。
      <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;此外，测量的时间和所处的项目生命周期阶段，决定了测量的目的和要求的精确程度。
    </p>
    <p class="secondtitle">第二步，决定测量的边界</p>
    <p class="content">边界决定了计算所包含的逻辑事务，并且标识了计算可能涉及到的任何界面接口。
    </p>
    <p class="secondtitle">第三步，决定未调整功能点</p>
    <p class="content">未调整功能点的数目包括外部输入、外部输出、外部查询、内部逻辑文件和外部接口
      文件的数目。
      <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      （1）标识逻辑事务
      <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      逻辑事务是应用软件支持的最底层的业务处理过程，每个事务包括3个要素：跨越应用
      软件边界的输入、一些相关的处理过程、跨越应用软件边界的输出。
      <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      每个逻辑事务是由应用软件外部世界中的独一无二的相关事件或者信息请求触发的。
      当整个事务完成时，应用软件处于一个与这个事件相关的、自我一致的状态。
      <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      当测量应用软件规模时，一个逻辑事务只能被计算一次，即使它也许可以在应用软件
      中的多个地方被执行。
      <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      在分析和定义软件需求时，对应用软件（或项目）执行的逻辑事务进行分类，并随项
      目进行不断的提炼。
      <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      应用软件规模的变更是通过计算逻辑事务的增加、修改和删除的数量，然后汇总得到
      的。
      <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      在变更逻辑事务的情况下，只需要计算逻辑事务发生变更的那部分规模，而不是逻辑
      事务全部的规模。变更发生的规模是指对逻辑事务的输入、处理和输出部分的增加、修改
      和删除次数的汇总。
      <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      （2）对数据实体类型进行标识和分类
      <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      计算引用的实体类型的数量，不要计算它们在一个事务中被使用的次数。
      计算主要实体，而不计算次要实体。
      <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      建议先进行实体关系分析或者相关数据分析，以生成应用软件的实体图。不要计算物
      理上存在的文件。
      <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      （3）计算输入和输出DET
      <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      DET是与用户相关的基础性事物，保存着相关信息、实体和它的属性之间的关联关系，
      它自身也是一个实体。识别和计算输入和输出DET，就是识别一个逻辑事务的每种跨越边
      界的输入DET，并计算输入有几种类型；识别跨越边界的输出DET，并计算输出有几种类
      型。
      <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      对以下情况应分别计算：
      <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      1.&nbsp;单个、复合、多用户等数据元素
      <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      2.&nbsp;数组
      <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      3.&nbsp;菜单和事务初始化
      <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      4.&nbsp;事务类型标识
      <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      5.&nbsp;域的标题、页眉、页脚等
      <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      6.&nbsp;物理屏幕限制
      <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      7.&nbsp;在输入/输出流中的粒度和特别处理的DET
      <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      8.&nbsp;不同形式的输入/输出
      <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      分析结果应以文档形式进行保存。
      <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      （4）计算功能规模
      <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      通过计算每个逻辑事务的处理过程中引用的主要实体类型的数量，来测量每个逻辑事
      务处理过程的规模，汇总所有逻辑事务的功能规模就得到该应用软件的整体规模，是该逻辑事务的输入、处理和输出部分的加权总和。
      <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      工业标准的逻辑事务各部分所占的权重是：输入部分的权重是0.58（每个输入DET），
      处理部分的权重是1.66（每个实体类型范围），输出部分的权重是0.26（每个输出DET）。
      <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span style="font-weight: bold; font-style: italic">
      应用软件的规模＝输入DET数量×0.58＋引用实体数量×1.66＋输出DET数量×1.66
      </span>
    </p>


    <p class="secondtitle">第四步，计算调整后的功能点指数</p>
    <p class="content">这一步是非正式步骤，可以省略。建议根据本规程对项目进行分析，以获取对项目整
      体特性的认识。
      <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      （1）计算调整因子
      <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      考虑本实验案例的非功能性，从表 6 采集相对复杂度调整因子(标红数值)， 得到本实验案例的功能点调整因子
      <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      （2）计算调整后功能点指数数量
      <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      将 VAF 数值代入(Mark II 法)功能 点计算公式，计算得到本实验案例的功能点
    </p>


    <p class="secondtitle">第五步，分析汇报测量结果</p>
    <p class="content"> 测量结果填写到最后实验结果的表中，进行归纳总结，完成实验报告
    </p>

      <a-descriptions title="项目测量报告" bordered>
        <a-descriptions-item label="测量结果" :span="3">测量结果应按照表填写，并保存到项目的配置管理库中。项目结束时，应把该项目
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

</style>
