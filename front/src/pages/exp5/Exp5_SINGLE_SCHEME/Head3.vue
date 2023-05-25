<template>
    <p class="FirstTitle">二、计算静态评价指标</p>
    <p class="content">现给出关于单方案静态评价指标实验的案例：</p>
    <p class="content">某企业计划采用云平台方案建设业务信息系统，项目总投资20亿元，
        其中企业投入资本金7亿元，贷款13亿元。项目设计开发期为一年，预计第二年投产后的五年内，
        年平均可获息税前利润(EBIT)3亿元，年平均可获净利润1.5亿元。该项目的年净现金流量如下表所示。</p>
    <a-table :dataSource="static_indicators" :columns="static_columns" bordered />
    <p class="SecondTitle">1.1 总投资收益率(ROI)</p>
    <p class="content">项目运营期内年平均息税前利润（EBIT）与项目总投资（TI）的比率。
        总投资收益率高于同行业的收益率参考值，表明该项目盈利能力达到要求。</p>
    <p class="content">评价指标：若ROI大于Rb,则项目可以考虑；
       反之,则项目不满足要求,Rb为基准投资收益率。</p>
    <div class="pictures">
      <img :src="formula_2_1">
    </div>
    <p class="content"></p>
    <p class="SecondTitle">1.2 资本金净利润率(ROE)</p>
    <p class="content">项目运营期内年平均净利润（NP）与项目资本金（EC）的比率
      。资本金净利润率高于同行业的净利润率参考值，表明该项目的盈利能力满足要求。</p>
      <p class="content">评价指标：若ROE大于Rb,则项目可以考虑；
         反之,则项目不满足要求,Rb为基准净利润率。</p>
    <div class="pictures">
      <img :src="formula_2_2">
    </div>
    <p class="SecondTitle">1.3 投资回收期(Pt)</p>
    <p class="content">以项目净收益回收项目投资所需的时间，以年为单位。
      投资回收期一般从项目建设或开发的起始年起算，若从项目投产年起算，应予以注明。</p>
    <div class="pictures">
      <img :src="formula_2_3">
    </div>
    <p class="content">其中，CI为现金流入量，CO为现金流出量，Pt
为投资回收期。</p>
    <p class="content">静态投资回收期亦可根据全部投资的财务现金流
      量表中累计净现金流量计算求得，其详细计算公式为：</p>
    <div class="pictures">
      <img :src="formula_2_3_2">
    </div>
    <p class="content">评价指标：若Pt小于或等于Pc,则项目可以考虑； 
        反之，则项目不满足要求,Pc为基准投资回收期。</p>
    <p class="SecondTitle">2.4 填写静态指标计算表</p>
    <a-table :dataSource="static_data" :columns="static_table" bordered>
      <template #title>静态指标计算</template>
    </a-table>
</template>

<script lang="ts">
import formula_2_1 from "@/pages/exp5/Exp5_SINGLE_SCHEME/pictures/formula_21.png";
import formula_2_2 from "@/pages/exp5/Exp5_SINGLE_SCHEME/pictures/formula_22.png";
import formula_2_3 from "@/pages/exp5/Exp5_SINGLE_SCHEME/pictures/formula_23.png";
import formula_2_3_2 from "@/pages/exp5/Exp5_SINGLE_SCHEME/pictures/formula_232.png";
  export default {
    setup() {
      return {
        formula_2_1,
        formula_2_2,
        formula_2_3,
        formula_2_3_2,
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

        static_columns: [
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

        static_data:[
          {
            column1:"ROI=(Param1)/(Param2) *100%",
            column2:"",
            column3:"",
            column4:"",
            column5:"",
          },
          {
            column1:"ROE=(Param1)/(Param2) *100%",
            column2:"",
            column3:"",
            column4:"",
            column5:"",
          },
          {
            column1:"Pt=(Param1)-1+(Param2)/(Param3)",
            column2:"",
            column3:"",
            column4:"",
            column5:"",
          }
        ],
        static_table:[
          {
            title:"指标及公式",
            dataIndex: 'column1',
            key: 'column1',
          },
          {
            title:"Param1",
            dataIndex: 'column2',
            key: 'column2',
          },
          {
            title:"Param2",
            dataIndex: 'column3',
            key: 'column3',
          },
          {
            title:"Param3",
            dataIndex: 'column4',
            key: 'column4',
          },
          {
            title:"结果",
            dataIndex: 'column5',
            key: 'column5',
          },
        ]
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