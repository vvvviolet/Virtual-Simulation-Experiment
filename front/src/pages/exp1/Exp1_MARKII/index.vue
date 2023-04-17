<template>

  <h1 class="title">实验1 基于MARKII的小型软件项目规模度量实验

    <span>  <el-button class="guidance" type="primary" text @click="pdfHandle"><el-icon size="25px"><Document/></el-icon>实验指导书下载</el-button></span>
  </h1>
  <hr/>
  <!-- <span> {{ test }}</span> -->
  <h2>一、实验目的 </h2>
  <p class="content">理解软件项目规模度量功能点法原理，通过实验操作掌握功能点法。
    学生应以小组为单位，根据本小组“软件工程管理与经济”课程设计项目架构及组件等设计成果，以功能点方法测量该项目的规模(功能点数量)。
    建议选用某一种功能点方法度量课程设计项目的功能点，并采用另外一种功能点方法或其他的软件规模度量方法对前一种方法的度量结果进行验证。
    本实验为课内设计性实验项目，实验学时 1 学时，完成实验报告 1 学时。
  </p>
  <h2>二、实验参数 </h2>
  <a-button @click="handleAdd">添加一行</a-button>
  <a-table
    :columns="columns"
    :data-source="tableData"
    bordered
    size="middle"
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
</template>

<script>
  import {Document} from '@element-plus/icons-vue'

  export default {
    name: 'Exp1_MarkII',
    data() {
      return {
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
        if(this.tableData[index].name===''){
          return
        }
        if(this.tableData[index].type===''){
          return
        }
        if(this.tableData[index].inputNum===''){
          return
        }
        if(this.tableData[index].outputNum===''){
          return
        }
        if(this.tableData[index].entityNum===''){
          return
        }
        this.tableData[index].FP = parseInt(this.tableData[index].inputNum)*0.58
          + parseInt(this.tableData[index].entityNum)*1.66
          + parseInt(this.tableData[index].outputNum)*0.26

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
