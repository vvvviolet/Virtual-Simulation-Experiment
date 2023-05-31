<template>
  <a-typography>
    <a-typography-title :level="3">方法介绍</a-typography-title>
    <a-typography-paragraph>
      不确定性决策方法，适用于决策者在不知晓每种可能结果发生概率的情况下做出决策。也就是说，这些方法适合用来进行不确定性条件下的投资决策，而非
      风险条件下的投资决策。
    </a-typography-paragraph>

    <a-typography-paragraph> 常用的不确定决策方法有五种： </a-typography-paragraph>
  </a-typography>

  <a-menu v-model:selectedKeys="current" mode="horizontal">
    <a-menu-item key="f1">最大最小法</a-menu-item>
    <a-menu-item key="f2"> 最大最大法 </a-menu-item>
    <a-menu-item key="f3"> 赫維斯基法 </a-menu-item>
    <a-menu-item key="f4"> 拉普拉斯法 </a-menu-item>
    <a-menu-item key="f5"> 最小最大后悔值法 </a-menu-item>
  </a-menu>
  <div v-if="current[0] === 'f1'">
    <a-typography>
      <a-typography-title :level="4">最大最小法(Wald法)</a-typography-title>
      <a-typography-paragraph>
        最大最小法是决策者从最不利结果着眼，将在最不利结果中取得的最有利结果之行动作为最优行动方案
      </a-typography-paragraph>
    </a-typography>
    <a-table
      :pagination="false"
      :columns="columns"
      :data-source="tabledata"
      bordered
      size="middle"
      style="word-break: break-all"
    >
      <template #bodyCell="{ column, record }">
        <template v-if="column.dataIndex === 'a01' && tabledata !== undefined">
          <a-input v-model:value="record.a01" allowClear />
        </template>
        <template v-if="column.dataIndex === 'a02'">
          <a-input v-model:value="record.a02" allowClear />
        </template>
        <template v-if="column.dataIndex === 'a03'">
          <a-input v-model:value="record.a03" allowClear />
        </template>
        <template v-if="column.dataIndex === 'a04'">
          <a-input v-model:value="record.a04" allowClear />
        </template>
        <template v-if="column.dataIndex === 'a05'">
          <a-input v-model:value="record.a05" allowClear />
        </template>
      </template>
    </a-table>
    <p>最小的 method 属性: {{ getMinMethod() }}</p>
  </div>
  <div v-if="current[0] === 'f2'">phone</div>
  <div v-if="current[0] === 'f3'">phone</div>
  <div v-if="current[0] === 'f4'">phone</div>
  <div v-if="current[0] === 'f5'">phone</div>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  // import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons-vue';
  export default {
    data() {
      return {
        current: ref<string[]>(['mail']),
        columns: [
          {
            title: '方案',
            dataIndex: 'method',
            key: 'method',
            align: 'center',
          },
          {
            title: '状态',
            children: [
              {
                title: '01',
                align: 'center',
                dataIndex: 'a01',
              },
              {
                title: '02',
                align: 'center',
                dataIndex: 'a02',
              },
              {
                title: '03',
                align: 'center',
                dataIndex: 'a03',
              },
              {
                title: '04',
                align: 'center',
                dataIndex: 'a04',
              },
              {
                title: '05',
                align: 'center',
                dataIndex: 'a05',
              },
            ],
          },
        ],
        tabledata: [
          {
            key: '1',
            method: 'A',
            a01: '',
            a02: '',
            a03: '',
            a04: '',
            a05: '',
          },
          {
            key: '2',
            method: 'B',
            a01: '',
            a02: '',
            a03: '',
            a04: '',
            a05: '',
          },
          {
            key: '3',
            method: 'C',
            a01: '',
            a02: '',
            a03: '',
            a04: '',
            a05: '',
          },
          {
            key: '4',
            method: 'D',
            a01: '',
            a02: '',
            a03: '',
            a04: '',
            a05: '',
          },
        ],
      };
    },
    methods: {
      created() {
        this.gettableData();
      },
      getMinMethod() {
        if (this.tabledata.length === 0) {
          return null;
        }

        let min = Infinity;
        let minMethod = null;

        for (const item of this.tabledata) {
          const values = Object.values(item).slice(2) as number[]; // 获取 a01 到 a05 的属性值
          const minValue = Math.min(...values);

          if (minValue < min) {
            min = minValue;
            minMethod = item.method;
          }
        }

        return minMethod;
      },
    },
  };
</script>

<style scoped></style>
