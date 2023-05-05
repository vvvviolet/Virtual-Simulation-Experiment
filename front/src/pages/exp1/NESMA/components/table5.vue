<template>
  <h2 style="text-align: center">未调整功能点计算表</h2>
  <a-table
    :pagination="false"
    :columns="columns5"
    :data-source="tableData5"
    bordered
    size="middle"
    style="word-break: break-all"
  >
    <template #bodyCell="{ column, record, index }">
      <template v-if="column.dataIndex === 'A'">
        <a-input v-model:value="record.A" style="width: 100px" />
      </template>
      <template v-if="column.dataIndex === 'D'">
        <a-input v-model:value="record.D" style="width: 100px" />
      </template>
      <template v-if="column.dataIndex === 'G'">
        <a-input v-model:value="record.G" style="width: 100px" />
      </template>
      <template v-if="column.dataIndex === 'C'">
        {{ c(index) }}
      </template>
      <template v-if="column.dataIndex === 'F'">
        {{ f(index) }}
      </template>
      <template v-if="column.dataIndex === 'I'">
        {{ i(index) }}
      </template>
      <template v-if="column.dataIndex === 'unchanged'">
        {{ unchanged(index) }}
      </template>
    </template>
  </a-table>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import { useExp1Store } from '../stores';
  import { storeToRefs } from 'pinia';
  
  const { tableData5, c, f, i, unchanged } = storeToRefs(useExp1Store());
  const columns5 = ref([
    {
      title: '组件',
      dataIndex: 'component',
      key: 'component',
      align: 'center',
    },
    {
      title: '复杂度',
      children: [
        {
          title: '简单',
          align: 'center',
          children: [
            {
              title: '计数',
              align: 'center',
              children: [
                {
                  title: 'A',
                  // width: 30,
                  dataIndex: 'A',
                  align: 'center',
                },
              ],
            },
            {
              title: '权重',
              align: 'center',
              children: [
                {
                  title: 'B',
                  dataIndex: 'B',
                  align: 'center',
                  // width: 30,
                },
              ],
            },
            {
              title: '功能点数',
              align: 'center',
              children: [
                {
                  title: 'C=A*B',
                  align: 'center',
                  dataIndex: 'C',
                  // width: 30,
                },
              ],
            },
          ],
        },
        {
          title: '平均',
          align: 'center',
          children: [
            {
              title: '计数',
              children: [
                {
                  align: 'center',
                  dataIndex: 'D',
                  title: 'D',
                  // width: 30,
                },
              ],
            },
            {
              title: '权重',
              align: 'center',
              children: [
                {
                  dataIndex: 'E',
                  align: 'center',
                  title: 'E',
                  // width: 30,
                },
              ],
            },
            {
              title: '功能点数',
              align: 'center',
              children: [
                {
                  dataIndex: 'F',
                  title: 'F=D*E',
                  align: 'center',
                  // width: 30,
                },
              ],
            },
          ],
        },
        {
          title: '复杂',
          align: 'center',
          children: [
            {
              title: '计数',
              align: 'center',
              children: [
                {
                  dataIndex: 'G',
                  align: 'center',
                  title: 'G',
                  // width: 30,
                },
              ],
            },
            {
              title: '权重',
              align: 'center',
              children: [
                {
                  dataIndex: 'H',
                  align: 'center',
                  title: 'H',
                  // width: 30,
                },
              ],
            },
            {
              title: '功能点数',
              align: 'center',
              children: [
                {
                  dataIndex: 'I',
                  title: 'I=G*H',
                  align: 'center',
                  // width: 30,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      title: '未调整功能点数',
      dataIndex: 'unchanged',
      key: 'unchanged',
      align: 'center',
    },
  ]);
</script>

<style scoped></style>
