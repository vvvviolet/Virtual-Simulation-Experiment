<template>
  <div class="container">
    <h1>可编辑表格</h1>
    <a-table :columns="columns" :pagination="false" :data-source="dataSource" bordered>
      <template
        v-for="(col, index) in ['uncertainty', 'value', 'probability', 'start_year', 'end_year']"
        :key="index"
        #[col]="{ text, record }"
      >
        <div>
          <a-input
            v-if="editableData[record.key]"
            v-model:value="editableData[record.key][col]"
            style="margin: -5px 0"
          />
          <template v-else>
            {{ text }}
          </template>
        </div>
      </template>
      <template #operation="{ record }">
        <div class="editable-row-operations">
          <span v-if="editableData[record.key]">
            <a @click="save(record.key)" style="margin: 10px">保存</a>
            <a-popconfirm title="确定取消保存吗？" @confirm="cancel(record.key)">
              <a>取消</a>
            </a-popconfirm>
          </span>
          <span v-else>
            <a @click="edit(record.key)" style="margin: 10px">编辑</a>
            <a-popconfirm title="确定删除本行吗？" @confirm="deleteRow(record.key)">
              <a>删除</a>
            </a-popconfirm>
          </span>
        </div>
      </template>
    </a-table>
    <div class="add-button">
      <a-button type="primary" @click="addRow">增加一行</a-button>
    </div>
  </div>

  <HorizontalTree1 :dataSource="dataSource"></HorizontalTree1>
</template>

<script>
  import { cloneDeep } from 'lodash-es';
  import { Table } from 'ant-design-vue';
  import * as d3 from 'd3';
  import HorizontalTree1 from '@/pages/exp6/Exp6_decision_tree/HorizontalTree1.vue';
  import { reactive, ref } from 'vue';

  export default {
    components: {
      'a-table': Table,
      HorizontalTree1,
    },
    data() {
      return {
        editableData: {},
        dataSource: [
          {
            key: '0',
            uncertainty: '投资',
            value: 4000,
            probability: 0.6,
            start_year: 1,
            end_year: 2,
          },
          {
            key: '1',
            uncertainty: '投资',
            value: 4500,
            probability: 0.4,
            start_year: 1,
            end_year: 2,
          },
          {
            key: '2',
            uncertainty: '年经营成本',
            value: 1200,
            probability: 0.3,
            start_year: 2,
            end_year: 7,
          },
          {
            key: '3',
            uncertainty: '年经营成本',
            value: 1000,
            probability: 0.4,
            start_year: 2,
            end_year: 7,
          },
          {
            key: '4',
            uncertainty: '年经营成本',
            value: 900,
            probability: 0.3,
            start_year: 2,
            end_year: 7,
          },
          {
            key: '5',
            uncertainty: '年销售收入',
            value: 3500,
            probability: 0.2,
            start_year: 2,
            end_year: 7,
          },
          {
            key: '6',
            uncertainty: '年销售收入',
            value: 3000,
            probability: 0.5,
            start_year: 2,
            end_year: 7,
          },
          {
            key: '7',
            uncertainty: '年销售收入',
            value: 2700,
            probability: 0.3,
            start_year: 2,
            end_year: 7,
          },
        ],
        editableData: {},
        editingKey: '',
        columns: [
          {
            title: '不确定因素',
            dataIndex: 'uncertainty',
            width: '20%',
            slots: {
              customRender: 'uncertainty',
            },
          },
          {
            title: '取值（万元）',
            dataIndex: 'value',
            width: '15%',
            slots: {
              customRender: 'value',
            },
          },
          {
            title: '概率',
            dataIndex: 'probability',
            width: '15%',
            slots: {
              customRender: 'probability',
            },
          },
          {
            title: '开始年份',
            dataIndex: 'start_year',
            width: '15%',
            slots: {
              customRender: 'start_year',
            },
          },
          {
            title: '结束年份',
            dataIndex: 'end_year',
            width: '15%',
            slots: {
              customRender: 'end_year',
            },
          },
          {
            title: '操作',
            dataIndex: 'operation',
            slots: {
              customRender: 'operation',
            },
          },
        ],
      };
    },
    methods: {
      edit(key) {
        this.editableData[key] = cloneDeep(this.dataSource.filter((item) => key === item.key)[0]);
        this.editingKey = key;
      },
      save(key) {
        Object.assign(this.dataSource.filter((item) => key === item.key)[0], this.editableData[key]);
        delete this.editableData[key];
        this.editingKey = '';
      },
      cancel(key) {
        delete this.editableData[key];
        this.editingKey = '';
      },
      addRow() {
        const key = this.dataSource.length;
        this.dataSource.push({
          key: key.toString(),
          uncertainty: '',
          value: '',
          probability: '',
          start_year: '',
          end_year: '',
        });
      },
      deleteRow(key) {
        this.dataSource = this.dataSource.filter((item) => key !== item.key);
      },
      handleDataSourceChange(data) {
        this.dataSource = data.map((item, index) => {
          return {
            uncertainty: item.uncertainty,
            value: item.value,
            probability: item.probability,
            start_year: item.start_year,
            end_year: item.end_year,
            event: item.event,
          };
        });
      },
    },
  };
</script>
<style lang="less" scoped>
  // .container {
  //   max-width: 800px;
  //   margin: 0 auto;
  //   padding-top: 32px;
  // }

  .add-button {
    margin-top: 16px;
    text-align: right;
  }
</style>
