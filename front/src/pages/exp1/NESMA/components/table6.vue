<template>
  <h2 style="text-align: center">系统特征因子表及计算表</h2>
  <a-table
    :columns="columns6"
    :pagination="false"
    :data-source="tableData6"
    bordered
    size="middle"
    style="word-break: break-all"
  >
    <template #bodyCell="{ column, record }">
      <template v-if="column.dataIndex === 'grade'">
        <a-input-group compact>
          <a-select v-model:value="record.grade">
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
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import { useExp1Store } from '../stores';
  import { storeToRefs } from 'pinia';
  const { tableData6 } = storeToRefs(useExp1Store());
  const columns6 = ref([
    {
      title: '序号',
      dataIndex: 'index',
      key: 'component',
      align: 'center',
      width: 100,
    },
    {
      title: '因子',
      dataIndex: 'title',
      key: 'component',
      align: 'center',
      width: 900,
    },
    {
      title: '等级',
      dataIndex: 'grade',
      key: 'component',
      align: 'center',
    },
  ]);
</script>

<style scoped>
  :deep(.ant-table .ant-table-thead > tr > th) {
    border-width: 1px;
  }
</style>
