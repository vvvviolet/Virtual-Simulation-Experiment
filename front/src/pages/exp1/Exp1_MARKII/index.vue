<template>

  <h1 class="title">实验1 基于MARKII的小型软件项目规模度量实验

    <span>  <a-button class="guidance" type="primary" text @click="pdfHandle"><el-icon size="25px"><Document/></el-icon>实验指导书下载</a-button></span>
  </h1>
  <hr/>
  <!-- <span> {{ test }}</span> -->
  <h2>一、实验目的 </h2>
    <a-textarea v-model="purpose" style="margin-top: 10px; margin-bottom: 10px"></a-textarea>
  <h2>二、实验设备 </h2>
    <a-textarea v-model="equipment" style="margin-top: 10px; margin-bottom: 10px"></a-textarea>
  <h2>三、实验原理 </h2>
    <a-textarea v-model="principal" style="margin-top: 10px; margin-bottom: 10px"></a-textarea>
  <h2>四、实验步骤 </h2>
    <a-textarea v-model="steps" style="margin-top: 10px; margin-bottom: 10px"></a-textarea>
  <h2>五、功能点指数计算 </h2>
  <a-table
    :columns="columns"
    :data-source="tableData"
    :pagination="false"
    bordered
    size="middle"
    style="margin-bottom: 10px"
  >
    <template #bodyCell="{column, text, record}">
      <template v-if="['name', 'type', 'inputNum', 'outputNum', 'entityNum', 'operation'].includes(column.dataIndex)">
        <div>
          <a-input
            v-if="column.dataIndex === 'name'"
            style="margin: -5px 0; width: 100px"
            v-model:value="record.name"
            @keyup='computeFP(record.index)'
          />
          <a-select
            v-if="column.dataIndex === 'type'"
            style="margin: -5px 0; width: 100px"
            v-model:value="record.type"
            @change='computeFP(record.index)'>
            <a-select-option value="E">E</a-select-option>
            <a-select-option value="Q">Q</a-select-option>
          </a-select>
          <a-input
            v-if="column.dataIndex === 'inputNum'"
            style="margin: -5px 0; width: 100px"
            v-model:value="record.inputNum"
            @keyup='computeFP(record.index)'
          />
          <a-input
            v-if="column.dataIndex === 'outputNum'"
            style="margin: -5px 0; width: 100px"
            v-model:value="record.outputNum"
            @keyup='computeFP(record.index)'
          />
          <a-input
            v-if="column.dataIndex === 'entityNum'"
            style="margin: -5px 0; width: 100px"
            v-model:value="record.entityNum"
            @keyup='computeFP(record.index)'
          />
          <a-button
            v-if="column.dataIndex === 'FP'"
            style="margin: -5px 0; width: 150px"
            @click="computeFP"
          ><b>{{ record.FP }}</b></a-button>
        </div>
      </template>

    </template>
  </a-table>
  <a-button type="primary" style="margin-right: 10px; margin-bottom: 10px" @click="handleAdd">添加一行</a-button>
  <a-button type="primary" @click="() => {this.tableData.pop()}">删除一行</a-button>
  <h2>六、实验心得 </h2>
  <a-textarea v-model="experience" style="margin-top: 10px; margin-bottom: 10px"></a-textarea>

  <a-button type="primary" @click="submit">提交</a-button>
</template>

<script>
  import {Document} from '@element-plus/icons-vue'

  export default {
    name: 'Exp1_MarkII',
    data() {
      return {
        principal: '',
        equipment: '',
        purpose: '',
        steps: '',
        experience: '',
        columns: [
          {
            title: '编号',
            dataIndex: 'index',
            scopedSlots: {customRender: 'index'}
          },
          {
            title: '事务名称',
            dataIndex: 'name',
            scopedSlots: {customRender: 'name'}
          },
          {
            title: '事务类型(事件E或查询Q)',
            dataIndex: 'type',
            scopedSlots: {customRender: 'type'}
          },
          {
            title: '输入DET数量',
            dataIndex: 'inputNum',
            scopedSlots: {customRender: 'input'}
          },
          {
            title: '输出DET数量',
            dataIndex: 'outputNum',
            scopedSlots: {customRender: 'output'}
          },
          {
            title: '引用实体数量',
            dataIndex: 'entityNum',
            scopedSlots: {customRender: 'entity'}
          },
          {
            title: '功能点指数',
            dataIndex: 'FP'
          },
        ],
        tableData: [
          {
            index: 'T001',
            name: '',
            type: '',
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
        const newData = {
          index: `T00${this.tableData.length + 1}`,
          name: ``,
          type: '',
          inputNum: '',
          outputNum: '',
          entityNum: '',
          FP: ''
        };
        this.tableData.push(newData);
      },
      computeFP(index){
        index = parseInt(index.substring(1)) - 1
        console.log(index)
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
      created() {
        this.gettableData()
      },
      updated() {
        // 用于防止表格合计行不显示
        this.$nextTick(() => {
          this.$refs['detailTable'].doLayout();
        })
      },
      pdfHandle() {
        window.open('/#/show', "_blank")
      },
      getSummaries(param, val) {
        const {columns, data} = param;
        const sums = [];
        columns.forEach((column, index) => {
          if (index === 0) {
            sums[index] = (() => {
              // let el=<p>未调整功能点</p>
            })();
            return;
          }
          if (index === 11) {
            sums[index] = (() => {
              // let num=<p >￥{this.tableData[val].nonum.toFixed(2)}</p>
              return num;
            })();
            return;
          }
        });
        return sums;
      },
      count() {
      }
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
</style>
