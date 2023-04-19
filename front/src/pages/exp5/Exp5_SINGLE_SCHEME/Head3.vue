<template>
    <p class="FirstTitle">三、计算动态评价指标</p>
    <p class="content">现给出某软件项目的现金流表，
        请根据现金流表计算以下三个动态评价指标：</p>
        <a-table :dataSource="dynamic_indicators" :columns="dynamic_columns" />
    <p class="SecondTitle">3.1 净现值(NPV)</p>
    <p class="content">净现值是指按一定的折现率（一般采用基准收益率ic
），将各年的净现金流量折现到同一时点（通常是期初时点）的现值之和。</p>
    <div class="pictures">
        <img :src="formula_3_1">
    </div>
    <p class="content">其中，NPV为净现值，(CI - CO)t为第t年的净现金流量，n为方案寿命期，ic
为设定的折现率（基准收益率）。这里基准收益率的含义是项目建设方投资开发项目时
，所期望的最低财务盈利水平，即对项目投资收益的期望水平，也称作最低期望收益率（MARR）。</p>
    <p class="SecondTitle">3.2 内部收益率(IRR)</p>
    <p class="SecondTitle">3.3 动态投资回收期(DPP)</p>
</template>

<script lang="ts">
import formula_3_1 from "@/pages/exp5/Exp5_SINGLE_SCHEME/pictures/formula_31.png";
import formula_3_2 from "@/pages/exp5/Exp5_SINGLE_SCHEME/pictures/formula_32.png";
import formula_3_3 from "@/pages/exp5/Exp5_SINGLE_SCHEME/pictures/formula_33.png";
  export default {
    setup() {
      return {
        formula_3_1,
        formula_3_2,
        formula_3_3,
        dynamic_indicators: [
          {
            column1: '各年净现金流量（元）',
            column2: "-1M",
            column3: "50k",
            column4: "50k",
            column5: "208k",
            column6: "373k",
            column7: "547k",
            column8: "729k",
          },
        ],

        dynamic_columns: [
          {
            title: '年',
            dataIndex: 'column1',
            key: 'column1',
          },
          {
            title: '0',
            dataIndex: 'column2',
            key: 'column2',
          },
          {
            title: '1',
            dataIndex: 'column3',
            key: 'column3',
          },
          {
            title: '2',
            dataIndex: 'column4',
            key: 'column4',
          },
          {
            title: '3',
            dataIndex: 'column5',
            key: 'column5',
          },
          {
            title: '4',
            dataIndex: 'column6',
            key: 'column6',
          },
          {
            title: '5',
            dataIndex: 'column7',
            key: 'column7',
          },
          {
            title: '6',
            dataIndex: 'column8',
            key: 'column8',
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
.pictures {
  text-indent:2em;
  padding-left: 10px;
  padding-right: 10px;
}
</style>