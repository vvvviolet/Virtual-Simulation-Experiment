<template>
  <h2 style="text-align: center">ILF 和 EIF 数据复杂度认定表</h2>
  <a-table
    :pagination="false"
    :columns="columns1"
    :data-source="tableData1"
    bordered
    size="middle"
    style="word-break: break-all"
  />
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  const columns1 = ref([
    {
      title: '记录元素类型(RET) ',
      dataIndex: 'RET',
      key: 'type',
      align: 'center',
      width: 400,
    },
    {
      title: '数据元素类型(DET)',
      children: [
        {
          title: '1-19',
          dataIndex: 'left',
          key: '1-19',
          align: 'center',
        },
        {
          title: '20-50',
          dataIndex: 'mide',
          key: '20-50',
          align: 'center',
        },
        {
          title: '>50',
          key: '50',
          dataIndex: 'right',
          align: 'center',
        },
      ],
    },
  ]);
  
  const tableData1 = ref([
    {
      RET: '1',
      left: '简单',
      mide: '简单',
      right: '平均',
    },
    {
      RET: '2~4',
      left: '简单',
      mide: '平均',
      right: '复杂',
    },
    {
      RET: '>5',
      left: '平均',
      mide: '复杂',
      right: '复杂',
    },
  ]);
</script>

<style scoped></style>
