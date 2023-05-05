<template>
  <h2 style="text-align: center">每个组件复杂度等级与功能点数对应关系表</h2>
  <a-table
    :pagination="false"
    :columns="columns4"
    :data-source="tableData4"
    bordered
    size="middle"
    style="word-break: break-all"
  />
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  const columns4 = ref([
    {
      title: '类型 ',
      dataIndex: 'type',
      key: 'type',
      align: 'center',
      width: 400,
      // fixed: 'left',
    },
    {
      title: '复杂度级别',
      children: [
        {
          title: '简单',
          dataIndex: 'easy',
          key: 'type',
          align: 'center',
          // width: 30,
          // fixed: 'left',
        },
        {
          title: '平均',
          dataIndex: 'mide',
          key: 'type',
          align: 'center',
          // width: 30,
          // fixed: 'left',
        },
        {
          title: '复杂',
          dataIndex: 'complex',
          key: 'type',
          align: 'center',
          // width: 30,
          // fixed: 'left',
        },
      ],
    },
  ]);
  const tableData4 = ref([
    {
      type: 'ILF',
      easy: 'X7',
      mide: 'X10',
      complex: 'X15',
    },
    {
      type: 'EIF',
      easy: 'X5',
      mide: 'X7',
      complex: 'X10',
    },
    {
      type: 'EI',
      easy: 'X3',
      mide: 'X4',
      complex: 'X6',
    },
    {
      type: 'EO',
      easy: 'X4',
      mide: 'X5',
      complex: 'X7',
    },
    {
      type: 'EQ',
      easy: 'X3',
      mide: 'X4',
      complex: 'X6',
    },
  ]);
</script>

<style scoped>
  :deep(.ant-table .ant-table-thead > tr > th) {
    border-width: 1px;
  }
</style>
