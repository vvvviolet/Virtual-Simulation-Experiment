<template>
    <p class="FirstTitle">一、实验内容及案例</p>
    <p class="content">a. 本实验要求根据单方案经济评价指标的相应定义与公式表示，计算出各指标的相应数值。</p>
    <p class="content">b. 根据计算出的各项指标，对该方案经济性进行评价。</p>
    <p class="content">c. 完成实验表格，完善实验报告。</p>
    <p class="content">d. 总结实验经验</p>
    <p class="picture"></p>
    <p class="FirstTitle">二、计算静态评价指标</p>
    <p class="content">现给出关于单方案静态评价指标实验的案例：</p>
    <p class="content">某企业计划采用云平台方案建设业务信息系统，项目总投资20亿元，
        其中企业投入资本金7亿元，贷款13亿元。项目设计开发期为一年，预计第二年投产后的五年内，
        年平均可获息税前利润(EBIT)3亿元，年平均可获净利润1.5亿元。该项目的年净现金流量如下表所示。</p>
    <a-table :dataSource="static_indicators" :columns="columns" />
    <p class="SecondTitle">2.1 总投资收益率(ROI)</p>
    <p class="content">项目运营期内年平均息税前利润（EBIT）与项目总投资（TI）的比率。
        总投资收益率高于同行业的收益率参考值，表明该项目盈利能力达到要求。</p>
    <p class="content"></p>
    <p class="SecondTitle">2.2 资本金净利润率(ROE)</p>
    <p class="SecondTitle">2.3 投资回收期(Pt)</p>
    <p class="FirstTitle">三、计算动态评价指标</p>
    <p class="SecondTitle">3.1 净现值(NPV)</p>
    <p class="SecondTitle">3.2 内部收益率(IRR)</p>
    <p class="SecondTitle">3.3 动态投资回收期(DPP)</p>
</template>

<script>
  export default {
    setup() {
      return {
        static_indicators: [
          {
            column1: '净现金流量（亿元）',
            column2: -20,
            column3: -2,
            column4: 3,
            column5: 9,
            column6: 12,
            column7: 12,
          },
          {
            column1: '累计净现金流量（亿元）',
            column2: -20,
            column3: -22,
            column4: -19,
            column5: -10,
            column6: 2,
            column7: 14,
          },
        ],

        columns: [
          {
            title: '年',
            dataIndex: 'column1',
            key: 'column1',
          },
          {
            title: '1',
            dataIndex: 'column2',
            key: 'column2',
          },
          {
            title: '2',
            dataIndex: 'column3',
            key: 'column3',
          },
          {
            title: '3',
            dataIndex: 'column4',
            key: 'column4',
          },
          {
            title: '4',
            dataIndex: 'column5',
            key: 'column5',
          },
          {
            title: '5',
            dataIndex: 'column6',
            key: 'column6',
          },
          {
            title: '6',
            dataIndex: 'column7',
            key: 'column7',
          },
        ],
      };
    },
  };
</script>

<style>
.FirstTitle{
  font-family: sans-serif;
  font-size:30px;
}
.SecondTitle{
  font-family: sans-serif;
  font-size:25px;
}
.content {
    font-size:15px;
    text-indent:2em;
    margin-left: 10px;
    margin-right: 10px;
}
</style>