<template>
  <div>
    <h1 class="title">实验五 单方案/软件产品经济性分析实验</h1>
    <hr/>
    <h2>一、实验目的  </h2>
    <p class="content">掌握独立方案评价的动态指标计算方法，并根据指标判断方案是否可行。本实验为课内设计性实验项目，实验学时 1 学时，完成实验报告 1 学时。
    </p>
    <h2>二、实验步骤</h2>
    <p class="content">第一步，用户选择计算的年份数，并输入每年的现金流入（独立方案年收入）和现金流出值（单位：千元）</p>
  </div>
    <a-button class="editable-add-btn" style="margin-bottom: 8px" @click="handleAdd">Add</a-button>
    <a-table bordered :data-source="dataSource" :columns="columns">
      <template #bodyCell="{ column, text, record }">
        <template v-if="column.dataIndex === 'income'">
          <div class="editable-cell">
            <div v-if="editableData[record.key]" class="editable-cell-input-wrapper">
              <a-input v-model:value="editableData[record.key].income" @pressEnter="save(record.key)" />
              <check-outlined class="editable-cell-icon-check" @click="save(record.key)" />
            </div>
            <div v-else class="editable-cell-text-wrapper">
              {{ text || ' ' }}
              <edit-outlined class="editable-cell-icon" @click="edit(record.key)" />
            </div>
          </div>
        </template>
        <template v-if="column.dataIndex === 'outcome'">
          <div class="editable-cell">
            <div v-if="editableData[record.key]" class="editable-cell-input-wrapper">
              <a-input v-model:value="editableData[record.key].outcome" @pressEnter="save(record.key)" />
              <check-outlined class="editable-cell-icon-check" @click="save(record.key)" />
            </div>
            <div v-else class="editable-cell-text-wrapper">
              {{ text || ' ' }}
              <edit-outlined class="editable-cell-icon" @click="edit(record.key)" />
            </div>
          </div>
        </template>
        <template v-else-if="column.dataIndex === 'operation'">
          <a-popconfirm
            v-if="dataSource.length"
            title="Sure to delete?"
            @confirm="onDelete(record.key)"
          >
            <a>Delete</a>
          </a-popconfirm>
        </template>
      </template>
    </a-table>
  </template>
  <script lang="ts">
  import { computed, defineComponent, reactive, ref } from 'vue';
  import type { Ref, UnwrapRef } from 'vue';
  import { CheckOutlined, EditOutlined } from '@ant-design/icons-vue';
  import { cloneDeep } from 'lodash-es';
  
  interface DataItem {
    key: string;
    year: number;
    income: number;
    outcome: number;
  }
  
  export default defineComponent({
    components: {
      CheckOutlined,
      EditOutlined,
    },
    setup() {
      const columns = [
        {
          title: '年份',
          dataIndex: 'year',
          width: '30%',
        },
        {
          title: '现金流入',
          dataIndex: 'income',
        },
        {
          title: '现金流出',
          dataIndex: 'outcome',
        },
        {
          title: '操作',
          dataIndex: 'operation',
        },
      ];
      const dataSource: Ref<DataItem[]> = ref([
        {
          key: '0',
          year: 0,
          income: 0,
          outcome: 1000,
        },
        
      ]);
      const count = computed(() => dataSource.value.length );
      const editableData: UnwrapRef<Record<string, DataItem>> = reactive({});
  
      const edit = (key: string) => {
        editableData[key] = cloneDeep(dataSource.value.filter(item => key === item.key)[0]);
      };
      const save = (key: string) => {
        Object.assign(dataSource.value.filter(item => key === item.key)[0], editableData[key]);
        delete editableData[key];
      };
  
      const onDelete = (key: string) => {
        dataSource.value = dataSource.value.filter(item => item.key !== key);
      };
      const handleAdd = () => {
        const newData = {
          key: `${count.value}`,
          year: count.value,
          income: 0,
          outcome: 0,
        };
        dataSource.value.push(newData);
      };
  
      return {
        columns,
        onDelete,
        handleAdd,
        dataSource,
        editableData,
        count,
        edit,
        save,
      };
    },
  });
  </script>
  <style lang="less">
  .editable-cell {
    position: relative;
    .editable-cell-input-wrapper,
    .editable-cell-text-wrapper {
      padding-right: 24px;
    }
  
    .editable-cell-text-wrapper {
      padding: 5px 24px 5px 5px;
    }
  
    .editable-cell-icon,
    .editable-cell-icon-check {
      position: absolute;
      right: 0;
      width: 20px;
      cursor: pointer;
    }
  
    .editable-cell-icon {
      margin-top: 4px;
      display: none;
    }
  
    .editable-cell-icon-check {
      line-height: 28px;
    }
  
    .editable-cell-icon:hover,
    .editable-cell-icon-check:hover {
      color: #108ee9;
    }
  
    .editable-add-btn {
      margin-bottom: 8px;
    }
  }
  .editable-cell:hover .editable-cell-icon {
    display: inline-block;
  }
  </style>
  