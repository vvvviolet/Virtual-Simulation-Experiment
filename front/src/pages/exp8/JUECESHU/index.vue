<template>
  <div>
    <div style="padding-top: 60px; padding-bottom: 20px">
      <a-config-provider  >
        <p style="line-height: 200%; font-size: 16px">
          <a-row justify="center">
            <a-col span="6">课程名称：软件工程经济学</a-col>
            <a-col span="6">课号：420279</a-col>
            <a-col span="6">实验项目名称：决策树法</a-col>
          </a-row>
          <a-row justify="center">
            <a-col span="6"
              >实验时间：<span style="border-bottom: 1px solid grey; border-radius: none"
                ><a-date-picker
                  v-model="experimentdate"
                  :bordered="false"
                  style="width: 150px; padding-left: 3px; padding-right: 3px"
                  placeholder="点击选择实验时间" /></span
            ></a-col>
            <a-col span="6"
              >实验报告人：
              <span style="border-bottom: 1px solid grey; border-radius: none"
                ><a-input
                  v-model="reportername"
                  placeholder="请输入报告人姓名"
                  size="small"
                  :bordered="false"
                  style="width: 18vh"
                ></a-input
              ></span>
            </a-col>
            <a-col span="6"></a-col>
          </a-row>
        </p>
      </a-config-provider>
    </div>
    <h2>实验目的</h2>
    <ol>
      <li>理解决策树法原理，通过实验计算与操作，掌握如何将其应用于风险分析与评价</li>
      <li>本实验为课内设计性实验项目，实验学时1学时，完成实验报告1学时</li>
    </ol>
    <h2>实验原理</h2>
    <p>
      决策树法是根据项目现金流量数据及其发生概率，用决策树列出现金流量序列，并用无风险折现率和概率乘法公式计算每一现金流量序列的净现值及其概率，最后求出净现值期望值和净现值小于零的累计概率，从
      而估算出项目亏损风险的大小
    </p>
    <h2>实验要求</h2>
    <p>某项目的有关经济数据如下表一所示。试求该项目的净现值期望值并进行风险决策分析。其中无风险折现率取8%。</p>
    <h2>实验步骤</h2>
    <a-steps direction="vertical" size="small">
      <a-step title="查看基础经济数据表" description="初步了解决策树" />
      <a-step
        title="计算每个不确定因素的净现值"
        description="根据年金现值公式和终值现值公式，计算出每个不确定因素的净现值，并将数据填入到表2中。数据会动态地显示在下方的决策树中"
      />
      <a-step
        title="计算每条实验现金流量序列的净现值、概率及相应概率"
        description="针对每条实验现金流量序列，计算出其净现值、概率和加权净现值，并将数据填入到表3中"
      />
      <a-step title="制作净现值累积概率图" description="将净现值从小到大按顺序排列成表，并求出各净现值累积概率" />
      <a-step title="计算ENPV，得出结论" description="根据净现值与其累计概率表，计算出期望净现值ENPV" />
    </a-steps>

    <h2 style="margin-top: 20px; margin-bottom: 20px">实验内容</h2>

    <a-timeline>
      <a-timeline-item>
        <h2>第一步、查看基础经济数据表</h2>
        <p>PS</p>
        <ul>
          <li>如果需要编辑数据，请点击右侧的“编辑”按钮进行修改。</li>
          <li>请保证每个不确定因素的概率之和为1，并且开始年份和结束年份相同。</li>
          <li>表1下方的图1将会按照表1的数据自动更新，无需手动更改</li>
        </ul>
        <EditableForm1 :dataSource="dataSource1" :columns="columns1" @updateData="handleDataSource1Update"
          >表1 基础经济数据表</EditableForm1
        >
        <a-tooltip placement="topLeft">
          <template #title>内部数据将随着上表的变化自动更新</template>
          <HorizontalTree :dataSource="dataSource1">图1 基于 表1 基础经济数据表 的决策树</HorizontalTree>
        </a-tooltip>
      </a-timeline-item>
      <a-timeline-item>
        <h2>第二步、计算每个不确定因素的净现值</h2>
        <p>
          请根据年金现值公式和终值现值公式，计算出每个不确定因素的净现值，并将数据手动填入到表2中。<strong
            >（精确到小数点后两位）</strong
          >
        </p>
        <p>操作方法：点击右侧的“编辑”按钮后可修改数据，点击”保存“确认</p>
        <EditableForm2 :dataSource="dataSource2" :columns="columns2" @updateData="handleDataSource2Update"
          >表2 不确定因素现值表</EditableForm2
        >
        <a-tooltip placement="topLeft">
          <template #title>内部数据将随着上表的变化自动更新</template>
          <HorizontalTree :dataSource="dataSource2">图2 基于 表2 不确定因素现值表 的决策树</HorizontalTree>
        </a-tooltip>
      </a-timeline-item>
      <a-timeline-item>
        <h2>第三步、计算实验现金流量序列</h2>
        <p>
          请针对每条实验现金流量序列，计算出其净现值、概率和加权净现值<strong>（精确到小数点后两位）</strong>，并将计算数据手动填入到表3中。
        </p>
        <p>表3的行数和编号是根据不确定因素自动生成的，无需更改。</p>
        <p>操作方法：点击右侧的“编辑”按钮后可修改数据，点击”保存“确认</p>
        <EditableForm3 :dataSource="dataSource3" :columns="columns3" @updateData="handleDataSource3Update"
          >表3 净现值计算表格</EditableForm3
        >
      </a-timeline-item>
      <a-timeline-item>
        <p>在demo中给出参考的净现值计算表格，无需填入数据。</p>
        <EditableForm2 :dataSource="dataSource4" :columns="columns4" @updateData="handleDataSource4Update"
          >表4 净现值计算表格（参考，后续将删去）</EditableForm2
        >
      </a-timeline-item>
      <a-timeline-item>
        <h2>第四步、计算净现值累积概率</h2>
        <p>
          请根据表3计算得出的结果，将净现值的累计值及其对应概率按顺序从小到大排列，手动填入到表4中。<strong
            >（精确到小数点后两位）</strong
          >
        </p>
        <p>操作方法：</p>
        <p>
          <span>(1) 点击右侧的“编辑”按钮后，可以修改净现值和概率</span><br />
          <span>(2) 点击”保存“并确认后，系统会根据已有的概率，计算出累计概率，无需手动输入</span><br />
          <span>(3) 点击右侧的”删除“按钮，可将本行删除</span><br />
          <span>(4) 点击右下角的“增加一行”，可以新增一行数据</span>
        </p>
        <EditableForm4 :dataSource="dataSource5" :columns="columns5" @updateData="handleDataSource5Update"
          >表5 净现值与其累计概率表</EditableForm4
        >
      </a-timeline-item>
      <a-timeline-item>
        <div>
          <h2>第五步、计算ENPV，得出结论</h2>
          <p>根据表5 净现值与其累计概率表，计算出期望净现值ENPV<strong>（精确到小数点后两位）</strong>，填入下表，并得出结论。</p>
          经计算，本项目的期望净现值(ENPV)为 <a-input v-model:value="enpv" allowClear style="width: 10%"></a-input>（请输入）万元，
          净现值小于零的可能性为 <a-input v-model:value="risk" allowClear style="width: 10%"></a-input>%（请输入）。
        </div>
      </a-timeline-item>
      <a-timeline-item>
        <a-upload v-model:file-list="fileList" list-type="file" accept=".pdf" :max-count="1" action="">
          <a-button>
            <upload-outlined></upload-outlined>
            上传实验报告
          </a-button>
        </a-upload>
      </a-timeline-item>
    </a-timeline>
  </div>
</template>

<script>
  import { Table } from 'ant-design-vue';
  import HorizontalTree from '@/pages/exp8/JUECESHU/HorizontalTree.vue';
  import EditableForm1 from '@/pages/exp8/JUECESHU/EditableForm1.vue';
  import EditableForm2 from '@/pages/exp8/JUECESHU/EditableForm2.vue';
  import EditableForm3 from '@/pages/exp8/JUECESHU/EditableForm3.vue';
  import EditableForm4 from '@/pages/exp8/JUECESHU/EditableForm4.vue';
  export default {
    components: {
      'a-table': Table,
      HorizontalTree,
      EditableForm1,
      EditableForm2,
      EditableForm3,
      EditableForm4,
    },
    data() {
      return {
        fileList: [],
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
            title: '净现值（万元）',
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
            title: '编号',
            dataIndex: 'key',
            slots: {
              customRender: 'key',
            },
          },
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
        dataSource4: [],
        columns4: [
          {
            title: '编号',
            dataIndex: 'key',
            slots: {
              customRender: 'key',
            },
          },
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

        // clear dataSource3
        while (this.dataSource3.length) {
          this.dataSource3.pop();
        }

        for (let i = 0; i < tableLength; i++) {
          this.dataSource3.push({
            key: (i + 1).toString(),
            netValue: undefined,
            probability: undefined,
            weightedNetPresentValue: undefined,
          });
        }
      },
      calculateDataSource4() {
        // this.dataSource4 = [];
        while (this.dataSource4.length) {
          this.dataSource4.pop();
        }

        const investmentPresentValue = this.dataSource1.filter((item) => item.uncertainty === '投资');
        const annualCostPresentValue = this.dataSource1.filter((item) => item.uncertainty === '年经营成本');
        const annualRevenuePresentValue = this.dataSource1.filter((item) => item.uncertainty === '年销售收入');

        let count = 1;

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
                key: count++,
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
        console.log(this.dataSource4);
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
