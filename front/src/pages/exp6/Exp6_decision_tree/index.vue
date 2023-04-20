<template>
  <div class="container">
    <p>Notice：改动表一将清空表三的数据，修改表四的数据！</p>
    <EditableForm1 :dataSource="dataSource1" :columns="columns1" @updateData="handleDataSource1Update"
      >一、基础经济数据表</EditableForm1
    >
    <HorizontalTree :dataSource="dataSource1"></HorizontalTree>

    <EditableForm2 :dataSource="dataSource2" :columns="columns2" @updateData="handleDataSource2Update"
      >二、现值和净现值序列决策树图</EditableForm2
    >
    <HorizontalTree :dataSource="dataSource2"></HorizontalTree>

    <EditableForm2 :dataSource="dataSource3" :columns="columns3" @updateData="handleDataSource3Update"
      >三、净现值计算表格</EditableForm2
    >

    <EditableForm2 :dataSource="dataSource4" :columns="columns4" @updateData="handleDataSource4Update"
      >四、净现值计算表格（参考）</EditableForm2
    >

    <EditableForm1 :dataSource="dataSource5" :columns="columns5" @updateData="handleDataSource5Update"
      >五、净现值与其累计概率表</EditableForm1
    >

    <div>
      本项目的期望净现值(ENPV)为 <a-input v-model:value="enpv" allowClear style="width: 10%"></a-input>万元，
      但是存在净现值小于零的可能性为 <a-input v-model:value="risk" allowClear style="width: 10%"></a-input>%的风险。
    </div>
  </div>
</template>

<script>
  import { Table } from 'ant-design-vue';
  import HorizontalTree from '@/pages/exp6/Exp6_decision_tree/HorizontalTree.vue';
  import EditableForm1 from '@/pages/exp6/Exp6_decision_tree/EditableForm1.vue';
  import EditableForm2 from '@/pages/exp6/Exp6_decision_tree/EditableForm2.vue';
  export default {
    components: {
      'a-table': Table,
      HorizontalTree,
      EditableForm1,
      EditableForm2,
    },
    data() {
      return {
        enpv: 0,
        risk: 0,
        discountRate: 0.08, // 折现率
        dataSource1: [
          {
            key: '0',
            uncertainty: '投资',
            value: 3500,
            probability: 0.15,
            start_year: 1,
            end_year: 3,
          },
          {
            key: '1',
            uncertainty: '投资',
            value: 3300,
            probability: 0.7,
            start_year: 1,
            end_year: 3,
          },
          {
            key: '2',
            uncertainty: '投资',
            value: 3000,
            probability: 0.15,
            start_year: 1,
            end_year: 3,
          },
          {
            key: '3',
            uncertainty: '年经营成本',
            value: 1100,
            probability: 0.3,
            start_year: 4,
            end_year: 13,
          },
          {
            key: '4',
            uncertainty: '年经营成本',
            value: 1000,
            probability: 0.4,
            start_year: 4,
            end_year: 13,
          },
          {
            key: '5',
            uncertainty: '年经营成本',
            value: 900,
            probability: 0.3,
            start_year: 4,
            end_year: 13,
          },
          {
            key: '6',
            uncertainty: '年销售收入',
            value: 3300,
            probability: 0.3,
            start_year: 4,
            end_year: 13,
          },
          {
            key: '7',
            uncertainty: '年销售收入',
            value: 3000,
            probability: 0.5,
            start_year: 4,
            end_year: 13,
          },
          {
            key: '8',
            uncertainty: '年销售收入',
            value: 2700,
            probability: 0.2,
            start_year: 4,
            end_year: 13,
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
            key: '0',
            uncertainty: '投资',
            value: undefined,
            probability: 0.15,
          },
          {
            key: '1',
            uncertainty: '投资',
            value: undefined,
            probability: 0.7,
          },
          {
            key: '2',
            uncertainty: '投资',
            value: undefined,
            probability: 0.15,
          },
          {
            key: '3',
            uncertainty: '年经营成本',
            value: undefined,
            probability: 0.3,
          },
          {
            key: '4',
            uncertainty: '年经营成本',
            value: undefined,
            probability: 0.4,
          },
          {
            key: '5',
            uncertainty: '年经营成本',
            value: undefined,
            probability: 0.3,
          },
          {
            key: '6',
            uncertainty: '年销售收入',
            value: undefined,
            probability: 0.3,
          },
          {
            key: '7',
            uncertainty: '年销售收入',
            value: undefined,
            probability: 0.5,
          },
          {
            key: '8',
            uncertainty: '年销售收入',
            value: undefined,
            probability: 0.2,
          },
        ],
        columns2: [
          {
            title: '不确定因素',
            dataIndex: 'uncertainty',
            slots: {
              customRender: 'uncertainty',
            },
          },
          {
            title: '现值（万元）',
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
            title: '操作',
            dataIndex: 'operation',
            slots: {
              customRender: 'operation',
            },
          },
        ],
        dataSource3: [],
        columns3: [
          {
            title: '净现值（万元）',
            dataIndex: 'netValue',
            slots: {
              customRender: 'netValue',
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
            title: '加权净现值',
            dataIndex: 'weightedNetPresentValue',
            slots: {
              customRender: 'weightedNetPresentValue',
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
        dataSource4: [
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
        columns4: [
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
        ],
        dataSource5: [
          {
            key: '0',
            netValue: -1116,
            probability: 0.05,
            cumulativeProbability: 0.05,
          },
        ],
        columns5: [
          {
            title: '净现值',
            dataIndex: 'netValue',
            slots: {
              customRender: 'netValue',
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
            title: '累计概率',
            dataIndex: 'cumulativeProbability',
            slots: {
              customRender: 'cumulativeProbability',
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
    mounted() {
      this.calculateDataSource3();
      this.calculateDataSource4();
    },
    methods: {
      presentValueOfAnnuity(A, i, n) {
        const P_A = (1 - Math.pow(1 + i, -n)) / i;
        const P = A * P_A;
        return P;
      },
      presentValueOfFutureValue(F, i, n) {
        const P_F = 1 / Math.pow(1 + i, n);
        const P = F * P_F;
        return P;
      },
      calculateDataSource3() {
        const levels = {};
        // 将具有相同uncertainty的项分组到一起
        for (const item of this.dataSource1) {
          if (!levels[item.uncertainty]) {
            levels[item.uncertainty] = [];
          }
          levels[item.uncertainty].push(item);
        }
        // 遍历uncertainty层次，构建树结构
        const keys = Object.keys(levels);
        let tableLength = 1;
        for (let i = 0; i < keys.length; i++) {
          tableLength *= levels[keys[i]].length;
        }
        for (let i = 0; i < tableLength; i++) {
          this.dataSource3.push({
            netValue: undefined,
            probability: undefined,
            weightedNetPresentValue: undefined,
          });
        }
      },
      calculateDataSource4() {
        const investmentPresentValue = this.dataSource1.filter((item) => item.uncertainty === '投资');
        const annualCostPresentValue = this.dataSource1.filter((item) => item.uncertainty === '年经营成本');
        const annualRevenuePresentValue = this.dataSource1.filter((item) => item.uncertainty === '年销售收入');

        for (let i = 0; i < investmentPresentValue.length; i++) {
          for (let j = 0; j < annualCostPresentValue.length; j++) {
            for (let k = 0; k < annualRevenuePresentValue.length; k++) {
              let cost = this.presentValueOfFutureValue(
                this.presentValueOfAnnuity(
                  annualCostPresentValue[j].value,
                  this.discountRate,
                  annualCostPresentValue[i].end_year - annualCostPresentValue[i].start_year + 1
                ),
                this.discountRate,
                investmentPresentValue[i].end_year - investmentPresentValue[i].start_year
              );
              let revenue = this.presentValueOfFutureValue(
                this.presentValueOfAnnuity(
                  annualRevenuePresentValue[j].value,
                  this.discountRate,
                  annualRevenuePresentValue[i].end_year - annualRevenuePresentValue[i].start_year + 1
                ),
                this.discountRate,
                investmentPresentValue[i].end_year - investmentPresentValue[i].start_year
              );
              this.dataSource4.push({
                investmentPresentValue: investmentPresentValue[i].value,
                investmentProbability: investmentPresentValue[i].probability,
                annualCostPresentValue: cost.toFixed(2),
                costProbability: annualCostPresentValue[j].probability,
                annualRevenuePresentValue: revenue.toFixed(2),
                revenueProbability: annualRevenuePresentValue[k].probability,
                expectedNetPresentValue: (
                  revenue * annualRevenuePresentValue[k].probability -
                  cost * annualCostPresentValue[j].probability -
                  investmentPresentValue[i].value * investmentPresentValue[i].probability
                ).toFixed(2),
                probability: (
                  investmentPresentValue[i].probability *
                  annualCostPresentValue[j].probability *
                  annualRevenuePresentValue[k].probability
                ).toFixed(2),
              });
            }
          }
        }
      },
      handleDataSource1Update(newData) {
        console.log('parent watch dataSource1 change');
        this.dataSource1 = newData;

        this.calculateDataSource3();
        this.calculateDataSource4();
      },
      handleDataSource2Update(newData) {
        console.log('parent watch dataSource2 change');
        this.dataSource2 = newData;
      },
      handleDataSource3Update(newData) {
        console.log('parent watch dataSource3 change');
        this.dataSource3 = newData;
      },
      handleDataSource4Update(newData) {
        console.log('parent watch dataSource4 change');
        this.dataSource4 = newData;
      },
      handleDataSource5Update(newData) {
        console.log('parent watch dataSource5 change');
        this.dataSource5 = newData;
      },
    },
  };
</script>
