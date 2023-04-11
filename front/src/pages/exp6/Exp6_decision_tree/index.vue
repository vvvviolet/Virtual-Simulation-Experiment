<template>
  <div class="container">
    <EditableForm :dataSource="dataSource1" :columns="columns1" @updateData="handleDataSource1Update"
      >一、基础经济数据表</EditableForm
    >
    <HorizontalTree1 :dataSource="dataSource1"></HorizontalTree1>
    <EditableForm :dataSource="dataSource2" :columns="columns2" @updateData="handleDataSource2Update"
      >二、现值和净现值序列决策树图</EditableForm
    >
    <HorizontalTree2 :dataSource="dataSource2"></HorizontalTree2>
  </div>
</template>

<script>
  import { cloneDeep } from 'lodash-es';
  import { Table } from 'ant-design-vue';
  import HorizontalTree1 from '@/pages/exp6/Exp6_decision_tree/HorizontalTree1.vue';
  import HorizontalTree2 from '@/pages/exp6/Exp6_decision_tree/HorizontalTree2.vue';
  import EditableForm from '@/pages/exp6/Exp6_decision_tree/EditableForm.vue';
  import { reactive, ref } from 'vue';

  export default {
    components: {
      'a-table': Table,
      HorizontalTree1,
      HorizontalTree2,
      EditableForm,
    },
    data() {
      return {
        dataSource1: [
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
        columns1: [
          {
            title: '不确定因素',
            dataIndex: 'uncertainty',
            slots: {
              customRender: 'uncertainty',
            },
          },
          {
            title: '取值（万元）',
            dataIndex: 'value',
            slots: {
              customRender: 'value',
            },
          },
          {
            title: '概率',
            dataIndex: 'probability',
            slots: {
              customRender: 'probability',
            },
          },
          {
            title: '开始年份',
            dataIndex: 'start_year',
            slots: {
              customRender: 'start_year',
            },
          },
          {
            title: '结束年份',
            dataIndex: 'end_year',
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
        dataSource2: [
          {
            investmentPresentValue: 4000,
            investmentProbability: 0.6,
            annualCostPresentValue: 200,
            costProbability: 0.8,
            annualRevenuePresentValue: 800,
            revenueProbability: 0.7,
            expectedNetPresentValue: 300,
            probability: 0.5,
          },
          {
            investmentPresentValue: 4000,
            investmentProbability: 0.6,
            annualCostPresentValue: 300,
            costProbability: 0.8,
            annualRevenuePresentValue: 800,
            revenueProbability: 0.7,
            expectedNetPresentValue: 300,
            probability: 0.5,
          },
          {
            investmentPresentValue: 4000,
            investmentProbability: 0.7,
            annualCostPresentValue: 200,
            costProbability: 0.8,
            annualRevenuePresentValue: 800,
            revenueProbability: 0.7,
            expectedNetPresentValue: 300,
            probability: 0.5,
          },
          {
            investmentPresentValue: 3000,
            investmentProbability: 0.7,
            annualCostPresentValue: 300,
            costProbability: 0.8,
            annualRevenuePresentValue: 800,
            revenueProbability: 0.7,
            expectedNetPresentValue: 300,
            probability: 0.5,
          },
        ],
        columns2: [
          {
            title: '投资现值',
            dataIndex: 'investmentPresentValue',
            slots: {
              customRender: 'investmentPresentValue',
            },
          },
          {
            title: '投资概率',
            dataIndex: 'investmentProbability',
            slots: {
              customRender: 'investmentProbability',
            },
          },
          {
            title: '年成本现值',
            dataIndex: 'annualCostPresentValue',
            slots: {
              customRender: 'annualCostPresentValue',
            },
          },
          {
            title: '成本概率',
            dataIndex: 'costProbability',
            slots: {
              customRender: 'costProbability',
            },
          },
          {
            title: '年收入现值',
            dataIndex: 'annualRevenuePresentValue',
            slots: {
              customRender: 'annualRevenuePresentValue',
            },
          },
          {
            title: '收入概率',
            dataIndex: 'revenueProbability',
            slots: {
              customRender: 'revenueProbability',
            },
          },
          {
            title: '期望净现值',
            dataIndex: 'expectedNetPresentValue',
            slots: {
              customRender: 'expectedNetPresentValue',
            },
          },
          {
            title: '概率',
            dataIndex: 'probability',
            slots: {
              customRender: 'probability',
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
      calculateDataSource2() {
        const investmentPresentValue = this.dataSource1.filter((item) => item.uncertainty === '投资');
        const annualCostPresentValue = this.dataSource1.filter((item) => item.uncertainty === '年经营成本');
        const annualRevenuePresentValue = this.dataSource1.filter((item) => item.uncertainty === '年销售收入');

        // for (int i = 0;i < investmentPresentValue.length;i++) {
        //   for (int j = 0;j < annualCostPresentValue.length;j++) {
        //     for (int k = 0;k < annualRevenuePresentValue.length;k++) {
        //       this.dataSource2.push({
        //         investmentPresentValue: investmentPresentValue[i].value,
        //         investmentProbability: investmentPresentValue[i].probability,
        //         annualCostPresentValue: annualCostPresentValue[j].value,
        //         costProbability: annualCostPresentValue[j].probability,
        //         annualRevenuePresentValue: annualRevenuePresentValue[k].value,
        //         revenueProbability: annualRevenuePresentValue[k].probability,
        //         expectedNetPresentValue: investmentPresentValue[i].value - annualCostPresentValue[j].value + annualRevenuePresentValue[k].value,
        //         probability: investmentPresentValue[i].probability * annualCostPresentValue[j].probability * annualRevenuePresentValue[k].probability,
        //       })
        //     }
        //   }
        // }
      },
      handleDataSource1Update(newData) {
        this.dataSource1 = newData;
      },
      handleDataSource2Update(newData) {
        this.dataSource2 = newData;
      },
    },
  };
</script>
