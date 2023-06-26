<!-- 8.软件项目/产品的财务评价实验
包括: 净现值法、IRR 法、投资回收期法等 -->
<template>
   <div style="padding-top: 60px; padding-bottom: 20px">
         <p style="line-height:200%;font-size: 16px;">
             <a-row justify="center">
                 <a-col span="6">课程名称：软件工程经济学</a-col>
                 <a-col span="6">课号：420279</a-col>
                 <a-col span="6">实验项目名称：简化计算模型实验</a-col>
             </a-row>
             <a-row justify="center">
                 <a-col span="6">实验时间：<span style="border-bottom: 1px solid grey;border-radius: none;"><a-date-picker
                              :bordered="false"
                             style="width:150px;padding-left:3px;padding-right:3px;"
                             placeholder="点击选择实验时间" /></span></a-col>
                 <a-col span="6">实验报告人： <span style="border-bottom: 1px solid grey;border-radius: none;"><a-input
                               placeholder="请输入报告人姓名" size="small" :bordered="false"
                             style="width:18vh;"></a-input></span>
                 </a-col>
                 <a-col span="6"></a-col>
             </a-row>
         </p>
        </div>
  <h2>一、实验目的</h2>
  <p class="content">基于业务目标及市场信息的分析，设计课程设计项目的营销策略和软件定价策略方法，构建课程设计项目财务评价模型，根据本地区及实验期内的经济参数，通过本实验测算课程设计项目盈利能力和项目生存能力。
  </p>
  <h2>二、实验步骤</h2>
  <h3>1.前置输入</h3>
  <p class="content">本实验中，独立项目的生命周期设定为
  <a-input-number id="inputNumber" v-model:value="year" :bordered="false" :min="1" :max="10" />
  年</p>
  <h3>2.项目现金流入</h3>
  <p class="content">项目的现金流入包括独立方案的年收入，其中，独立方案是指各工程项目方案的现金流是独立的、不相关，而且任何一个方案的采用与否都不会对是否采纳其他方案的决策产生影响。例如:阿里集团的淘宝和闲鱼，分别投资开发各自平台新产品方案，如果选择某个方案，不会影响到另一个方案，则这两个方案就是独立方案。请按照下列表格填写项目每年的现金流入：</p>
  <a-table :columns="columns_1" :data-source="Input" :pagination="false">
      <template #bodyCell="{ column,record,index}">
          <template v-if="column.dataIndex === 'year0'">
            <template v-if="record.project === '现金流入'">
              {{c(index,0)}}
            </template> 
            <template v-if="record.project === '独立方案年收入'">
              <a-input v-model:value="record.year0" style="width:100px;"/>
            </template> 
            <template v-if="record.project === '其他'">
              <a-input v-model:value="record.year0" style="width:100px;"/>
            </template>
          </template>
          <template v-if="column.dataIndex === 'year1'">
            <template v-if="record.project === '现金流入'">
              {{c(index,1)}}
            </template> 
            <template v-if="record.project === '独立方案年收入'">
              <a-input v-model:value="record.year1" style="width:100px;"/>
            </template>
            <template v-if="record.project === '其他'">
              <a-input v-model:value="record.year1" style="width:100px;"/>
            </template> 
          </template>
          <template v-if="column.dataIndex === 'year2'">
            <template v-if="record.project === '现金流入'">
              {{c(index,2)}}
            </template> 
            <template v-if="record.project === '独立方案年收入'">
              <a-input v-model:value="record.year2" style="width:100px;"/>
            </template>
            <template v-if="record.project === '其他'">
              <a-input v-model:value="record.year2" style="width:100px;"/>
            </template> 
          </template>
          <template v-if="column.dataIndex === 'year3'">
            <template v-if="record.project === '现金流入'">
              {{c(index,3)}}
            </template> 
            <template v-if="record.project === '独立方案年收入'">
              <a-input v-model:value="record.year3" style="width:100px;"/>
            </template>
            <template v-if="record.project === '其他'">
              <a-input v-model:value="record.year3" style="width:100px;"/>
            </template> 
          </template>
          <template v-if="column.dataIndex === 'year4'">
            <template v-if="record.project === '现金流入'">
              {{c(index,4)}}
            </template> 
            <template v-if="record.project === '独立方案年收入'">
              <a-input v-model:value="record.year4" style="width:100px;"/>
            </template>
            <template v-if="record.project === '其他'">
              <a-input v-model:value="record.year4" style="width:100px;"/>
            </template> 
          </template>
          <template v-if="column.dataIndex === 'year5'">
            <template v-if="record.project === '现金流入'">
              {{c(index,5)}}
            </template> 
            <template v-if="record.project === '独立方案年收入'">
              <a-input v-model:value="record.year5" style="width:100px;"/>
            </template>
            <template v-if="record.project === '其他'">
              <a-input v-model:value="record.year5" style="width:100px;"/>
            </template> 
          </template>
      </template> 
  </a-table>
  <p></p>
  <h3>3.项目现金流出</h3>
  <p class="content">项目的现金流出包括直接人员成本、非直接人员成本、直接运维成本、非直接运维成本和其他。
                    直接人员成本指员工的直接所得：包括工资、奖金、加班费、红利、职务津贴、遣散补偿等。
                    非直接人员成本指项目以外的其他相关公司的管理人员、辅助部门的人员工资、奖金、福利的分摊。
                    直接运维成本指硬件成本和对软件进行运维花费的成本。
                    非直接运维成本指非硬件成本。其他是除人员成本和运维成本外多余的花费。</p>

  <p class="content">请按照下列表格填写项目每年的现金流出：
  </p>
  <a-table :columns="columns_1" :data-source="Output" :pagination="false">
  <template #bodyCell="{ column, record, index }">
    <template v-if="column.dataIndex === 'year0'">
      <template v-if="record.project === '现金流出'">
        {{ d(index, 0) }}
      </template>
      <template v-if="record.project === '直接人力成本'">
        <a-input v-model:value="record.year0" style="width:100px;" />
      </template>
      <template v-if="record.project === '间接人力成本'">
        <a-input v-model:value="record.year0" style="width:100px;" />
      </template>
      <template v-if="record.project === '直接运维成本'">
        <a-input v-model:value="record.year0" style="width:100px;" />
      </template>
      <template v-if="record.project === '间接运维成本'">
        <a-input v-model:value="record.year0" style="width:100px;" />
      </template>
      <template v-if="record.project === '其他'">
        <a-input v-model:value="record.year0" style="width:100px;" />
      </template>
    </template>

    <template v-if="column.dataIndex === 'year1'">
      <template v-if="record.project === '现金流出'">
        {{ d(index, 1) }}
      </template>
      <template v-if="record.project === '直接人力成本'">
        <a-input v-model:value="record.year1" style="width:100px;" />
      </template>
      <template v-if="record.project === '间接人力成本'">
        <a-input v-model:value="record.year1" style="width:100px;" />
      </template>
      <template v-if="record.project === '直接运维成本'">
        <a-input v-model:value="record.year1" style="width:100px;" />
      </template>
      <template v-if="record.project === '间接运维成本'">
        <a-input v-model:value="record.year1" style="width:100px;" />
      </template>
      <template v-if="record.project === '其他'">
        <a-input v-model:value="record.year1" style="width:100px;" />
      </template>
    </template>

    <template v-if="column.dataIndex === 'year2'">
      <template v-if="record.project === '现金流出'">
        {{ d(index, 2) }}
      </template>
      <template v-if="record.project === '直接人力成本'">
        <a-input v-model:value="record.year2" style="width:100px;" />
      </template>
      <template v-if="record.project === '间接人力成本'">
        <a-input v-model:value="record.year2" style="width:100px;" />
      </template>
      <template v-if="record.project === '直接运维成本'">
        <a-input v-model:value="record.year2" style="width:100px;" />
      </template>
      <template v-if="record.project === '间接运维成本'">
        <a-input v-model:value="record.year2" style="width:100px;" />
      </template>
      <template v-if="record.project === '其他'">
        <a-input v-model:value="record.year2" style="width:100px;" />
      </template>
    </template>

    <template v-if="column.dataIndex === 'year3'">
      <template v-if="record.project === '现金流出'">
        {{ d(index, 3) }}
      </template>
      <template v-if="record.project === '直接人力成本'">
        <a-input v-model:value="record.year3" style="width:100px;" />
      </template>
      <template v-if="record.project === '间接人力成本'">
        <a-input v-model:value="record.year3" style="width:100px;" />
      </template>
      <template v-if="record.project === '直接运维成本'">
        <a-input v-model:value="record.year3" style="width:100px;" />
      </template>
      <template v-if="record.project === '间接运维成本'">
        <a-input v-model:value="record.year3" style="width:100px;" />
      </template>
      <template v-if="record.project === '其他'">
        <a-input v-model:value="record.year3" style="width:100px;" />
      </template>
    </template>

    <template v-if="column.dataIndex === 'year4'">
      <template v-if="record.project === '现金流出'">
        {{ d(index, 4) }}
      </template>
      <template v-if="record.project === '直接人力成本'">
        <a-input v-model:value="record.year4" style="width:100px;" />
      </template>
      <template v-if="record.project === '间接人力成本'">
        <a-input v-model:value="record.year4" style="width:100px;" />
      </template>
      <template v-if="record.project === '直接运维成本'">
        <a-input v-model:value="record.year4" style="width:100px;" />
      </template>
      <template v-if="record.project === '间接运维成本'">
        <a-input v-model:value="record.year4" style="width:100px;" />
      </template>
      <template v-if="record.project === '其他'">
        <a-input v-model:value="record.year4" style="width:100px;" />
      </template>
    </template>

    <template v-if="column.dataIndex === 'year5'">
      <template v-if="record.project === '现金流出'">
        {{ d(index, 5) }}
      </template>
      <template v-if="record.project === '直接人力成本'">
        <a-input v-model:value="record.year5" style="width:100px;" />
      </template>
      <template v-if="record.project === '间接人力成本'">
        <a-input v-model:value="record.year5" style="width:100px;" />
      </template>
      <template v-if="record.project === '直接运维成本'">
        <a-input v-model:value="record.year5" style="width:100px;" />
      </template>
      <template v-if="record.project === '间接运维成本'">
        <a-input v-model:value="record.year5" style="width:100px;" />
      </template>
      <template v-if="record.project === '其他'">
        <a-input v-model:value="record.year5" style="width:100px;" />
      </template>
    </template>

  </template>
</a-table>
<p></p>
  <h3>4.项目净现金流量</h3>
  <p class="content">根据1和2中得到的现金流入和现金流出计算净现金流量和累计净现金流量；</p>
  <p class="content">净现金流量是现金流量表中的一个指标，是指一定时期内，现金及现金等价物的流入（收入）减去流出（支出）的余额（净收入或净支出），反映了企业本期内净增加或净减少的现金及现金等价数额。</p>
  <p class="formula">某一年度的净现金流量=现金流入量-现金流出量。</p>
  <p class="content">根据当年的现值系数计算净现金流量（现值）和累计净现金流量（现值）。
净现金流量现值为现金流入扣除现金流出的净额按照一定的折现率折现至评估时点的现值，净现金流量总现值是指未来各期现金净流量的现值之和，即未来现金流入现值与未来现金流出现值差额，也称为净现值。
</p>
<p class="formula">第n年的净现金流量现值=第n年的净现金流量×现值系数  </p>
<p class="content">本实验中，现值系数设定为
  <a-input-number id="inputNumber" v-model:value="discountRate" :min="1" :max="20" />
  %</p>
<a-table :columns="columns_1" :data-source="netCashFlow" :pagination="false">
      <template #bodyCell="{ column,record,index}">
          <template v-if="column.dataIndex === 'year0'">
            <template v-if="record.project === '净现金流量'">
              <a-input v-model:value="record.year0" style="width:100px;"/>
            </template> 
            <template v-if="record.project === '累计净现金流量'">
              {{c1(index,0)}}
            </template> 
            <template v-if="record.project === '净现金流量(现值)'">
              <a-input v-model:value="record.year0" style="width:100px;"/>
            </template> 
            <template v-if="record.project === '累计净现金流量(现值)'">
              {{c2(index,0)}}
            </template> 
            <template v-if="record.project === '现值系数'">
              {{c3(index,0)}}
            </template>

          </template>

          <template v-if="column.dataIndex === 'year1'">
            <template v-if="record.project === '净现金流量'">
              <a-input v-model:value="record.year1" style="width:100px;"/>
            </template> 
            <template v-if="record.project === '累计净现金流量'">
              {{c1(index,1)}}
            </template> 
            <template v-if="record.project === '净现金流量(现值)'">
              <a-input v-model:value="record.year1" style="width:100px;"/>
            </template> 
            <template v-if="record.project === '累计净现金流量(现值)'">
              {{c2(index,1)}}
            </template>
            <template v-if="record.project === '现值系数'">
              {{c3(index,1)}}
            </template>
          </template>

          <template v-if="column.dataIndex === 'year2'">
            <template v-if="record.project === '净现金流量'">
              <a-input v-model:value="record.year2" style="width:100px;"/>
            </template> 
            <template v-if="record.project === '累计净现金流量'">
              {{c1(index,2)}}
            </template>
            <template v-if="record.project === '净现金流量(现值)'">
              <a-input v-model:value="record.year2" style="width:100px;"/>
            </template> 
            <template v-if="record.project === '累计净现金流量(现值)'">
              {{c2(index,2)}}
            </template>
            <template v-if="record.project === '现值系数'">
              {{c3(index,2)}}
            </template>
          </template>

          <template v-if="column.dataIndex === 'year3'">
            <template v-if="record.project === '净现金流量'">
              <a-input v-model:value="record.year3" style="width:100px;"/>
            </template> 
            <template v-if="record.project === '累计净现金流量'">
              {{c1(index,3)}}
            </template>
            <template v-if="record.project === '净现金流量(现值)'">
              <a-input v-model:value="record.year3" style="width:100px;"/>
            </template> 
            <template v-if="record.project === '累计净现金流量(现值)'">
              {{c2(index,3)}}
            </template>
            <template v-if="record.project === '现值系数'">
              {{c3(index,3)}}
            </template>
          </template>

          <template v-if="column.dataIndex === 'year4'">
            <template v-if="record.project === '净现金流量'">
              <a-input v-model:value="record.year4" style="width:100px;"/>
            </template> 
            <template v-if="record.project === '累计净现金流量'">
              {{c1(index,4)}}
            </template>
            <template v-if="record.project === '净现金流量(现值)'">
              <a-input v-model:value="record.year4" style="width:100px;"/>
            </template> 
            <template v-if="record.project === '累计净现金流量(现值)'">
              {{c2(index,4)}}
            </template>
            <template v-if="record.project === '现值系数'">
              {{c3(index,4)}}
            </template>

          </template>

          <template v-if="column.dataIndex === 'year5'">
            <template v-if="record.project === '净现金流量'">
              <a-input v-model:value="record.year5" style="width:100px;"/>
            </template> 
            <template v-if="record.project === '累计净现金流量'">
              {{c1(index,5)}}
            </template>
            <template v-if="record.project === '净现金流量(现值)'">
              <a-input v-model:value="record.year5" style="width:100px;"/>
            </template> 
            <template v-if="record.project === '累计净现金流量(现值)'">
              {{c2(index,5)}}
            </template>
            <template v-if="record.project === '现值系数'">
              {{c3(index,5)}}
            </template>

          </template>

      </template> 
  </a-table>
  <p></p>
  <h3>5.项目指标</h3>
  <p class="content">根据所提取的财务评价所需基础数据进行项目财务分析，重在考察项目盈利能力是否能够满足要求。编制项目资本金现金流量表，计算项目资本金财务内部收益率IRR、净现值NPV以及动态投资回收期（年），考察项目资本金可获得的收益水平。
  </p>
  <p class="content">1. 净现值NPV是指按照一定的折现率（通常为基准折现率ic），将各年的净现金流量折现到同一时点（通常是期初时点）的现值之和,公式如下：</p>
  <img class="formula" src="./img/NPV.png">
  <p class="content">（CI-CO）t为第t年的净现金流量，n为方案寿命期，ic为设定的折现率（基准收益率）。</p>
  <p class="content">2. 项目资本金财务内部收益率IRR是指在整个计算期内净现值等于零时所对应的折现率,公式如下：</p>
  <img class="formula" src="./img/IRR.png">
  <p class="content">其中，IRR为内部收益率，（CI-CO）t为第t年净现金流量，n为方案寿命期。</p>
  <p class="content">3. 动态投资回收期（年）是指按照设定的基准收益率ic回收全部投资所需的时间,公式如下：</p>
  <img class="formula" src="./img/DPP.png">
  <p class="content">其中，DPP为动态投资回收期、（CI-CO）t为第t年净现金流量，ic为设定的基准收益率。</p>
  <p class="content">根据计算，本项目的财务指标如下</p>
  <a-table :dataSource="Index" :columns="columns_2" :pagination="false">
      <template #bodyCell="{column,record,index}">
        <template v-if="column.dataIndex === 'value'">
          <template v-if="record.key === '15'">
              {{npv()}}
          </template>
          <template v-if="record.key === '16'">
              {{ irr() }}
          </template>
          <template v-if="record.key === '17'">
              {{ dpp() }}
          </template>
        </template>
      </template>
  </a-table>
  <p></p>
  <p class="content">根据上述步骤，汇总编制出的项目资本金现金流量表，计算出的项目资本金财务内部收益率IRR、净现值NPV以及动态投资回收期（年），考察项目资本金可获得的收益水平，综合判断项目的财务状况，并且做出评价。
  </p>
  <a-button @click="sum">总表</a-button>
  <a-table sticky :dataSource="Sum" :columns="columns_1" :pagination="false"></a-table>
</template>
  
  <script lang="ts">
    import { Input } from 'ant-design-vue';
import {  ref } from 'vue';
     export default{
      name: 'Exp8',
      setup() {
        const year = ref<number>(5);
        var discountRate = ref<number>(10);
        return {
          year,
          discountRate,
        }
      },
        data(){
          return {
          Sum:[],
          Input: [
            {
              key: '1',
              number: '1',
              project: '现金流入',
              year0: "",
              year1: "",
              year2: "",
              year3: "",
              year4: "",
              year5: "",                   
            },
            {
              key: '2',
              number: '1.1',
              project: '独立方案年收入',
              year0: "",
              year1: "",
              year2: "",
              year3: "",
              year4: "",
              year5: "",                 
            },
            {
              key: '3',
              number: '1.2',
              project: '其他',
              year0: "",
              year1: "",
              year2: "",
              year3: "",
              year4: "",
              year5: "",                 
            },
          ],
          Output: [
            {
              key: '4',
              number: '2',
              project: '现金流出',
              year0: "",
              year1: "",
              year2: "",
              year3: "",
              year4: "",
              year5: "",                 
            },
            {
              key: '5',
              number: '2.1',
              project: '直接人力成本',
              year0: "",
              year1: "",
              year2: "",
              year3: "",
              year4: "",
              year5: "",                  
            },
            {
              key: '6',
              number: '2.2',
              project: '间接人力成本',
              year0: "",
              year1: "",
              year2: "",
              year3: "",
              year4: "",
              year5: "",                 
            },
            {
              key: '7',
              number: '2.3',
              project: '直接运维成本',
              year0: "",
              year1: "",
              year2: "",
              year3: "",
              year4: "",
              year5: "",                 
            },
            {
              key: '8',
              number: '2.4',
              project: '间接运维成本',
              year0: "",
              year1: "",
              year2: "",
              year3: "",
              year4: "",
              year5: "",               
            },
            {
              key: '9',
              number: '2.5',
              project: '其他',
              year0: "",
              year1: "",
              year2: "",
              year3: "",
              year4: "",
              year5: "",               
            },
          ],
          netCashFlow:[
          {
              key: '10',
              number: '3',
              project: '净现金流量',
              year0: "",
              year1: "",
              year2: "",
              year3: "",
              year4: "",
              year5: "",                  
            },
            {
              key: '11',
              number: '3.1',
              project: '累计净现金流量',
              year0: "",
              year1: "",
              year2: "",
              year3: "",
              year4: "",
              year5: "",                  
            },
            {
              key: '12',
              number: '4',
              project: '净现金流量(现值)',
              year0: "",
              year1: "",
              year2: "",
              year3: "",
              year4: "",
              year5: "",
            },
            {
              key: '13',
              number: '4.1',
              project: '累计净现金流量(现值)',
              year0: "",
              year1: "",
              year2: "",
              year3: "",
              year4: "",
              year5: "",
            },
            {
              key: '14',
              number: '5',
              project: '现值系数',
              year0: "1.00",
              year1: "",
              year2: "",
              year3: "",
              year4: "",
              year5: "",
            },
          ],
          Index: [
            {
              key: '15',
              number: '6',
              project: '净现值 NPV',
              value: "0",
            },
            {
              key: '16',
              number: '7',
              project: '内部收益率 IRR',
              value: "0",
            },
            {
              key: '17',
              number: '8',
              project: '动态投资回收期(年) DPP',
              value: "0",
            },
          ],           
          columns_1: [
          {
              title: '序号',
              dataIndex: 'number',
              key: 'number',
            },
            {
              title: '项目/年份',
              dataIndex: 'project',
              key: 'project',
            },
            {
              title: '0',
              dataIndex: 'year0',
              key: '0',
            },
            {
              title: '1',
              dataIndex: 'year1',
              key: '1',
            },
            {
              title: '2',
              dataIndex: 'year2',
              key: '2',
            },
            {
              title: '3',
              dataIndex: 'year3',
              key: '3',
            },
            {
              title: '4',
              dataIndex: 'year4',
              key: '4',
            },
            {
              title: '5',
              dataIndex: 'year5',
              key: '5',
            },
          ],
          columns_2: [
            {
              title: '序号',
              dataIndex: 'number',
              key: 'number',
            },
            {
              title: '指标',
              dataIndex: 'project',
              key: 'project',
            },
            {
              title: '值',
              dataIndex: 'value',
              key: 'value',
            },
          ]
        };
      },
      computed:{
        c(){
          return function(index,year)
          {
            switch (year){
              case 0:
                var total =(parseInt(this.Input[index+1].year0)? parseInt(this.Input[index+1].year0):0) + 
                                            (parseInt(this.Input[index+2].year0)? parseInt(this.Input[index+2].year0):0)
                this.Input[index].year0 = total?total:0
                return this.Input[index].year0
              case 1:
                var total =(parseInt(this.Input[index+1].year1)? parseInt(this.Input[index+1].year1):0) + 
                                            (parseInt(this.Input[index+2].year1)? parseInt(this.Input[index+2].year1):0)
                this.Input[index].year1 = total?total:0
                return this.Input[index].year1
              case 2:
                var total =(parseInt(this.Input[index+1].year2)? parseInt(this.Input[index+1].year2):0) + 
                                            (parseInt(this.Input[index+2].year2)? parseInt(this.Input[index+2].year2):0)
                this.Input[index].year2 = total?total:0
                return this.Input[index].year2
              case 3:
                var total =(parseInt(this.Input[index+1].year3)? parseInt(this.Input[index+1].year3):0) + 
                                            (parseInt(this.Input[index+2].year3)? parseInt(this.Input[index+2].year3):0)
                this.Input[index].year3 = total?total:0
                return this.Input[index].year3
              case 4:
                var total =(parseInt(this.Input[index+1].year4)? parseInt(this.Input[index+1].year4):0) + 
                                            (parseInt(this.Input[index+2].year4)? parseInt(this.Input[index+2].year4):0)
                this.Input[index].year4 = total?total:0
                return this.Input[index].year4
              case 5:
                var total =(parseInt(this.Input[index+1].year5)? parseInt(this.Input[index+1].year5):0) + 
                                            (parseInt(this.Input[index+2].year5)? parseInt(this.Input[index+2].year5):0)
                this.Input[index].year5 = total?total:0
                return this.Input[index].year5
              default:
                break
            }
          }
        },
        d() {
    return function (index, year) {
            switch (year) {
              case 0:
                this.Output[index].year0 = (parseInt(this.Output[index + 1].year0) ? parseInt(this.Output[index + 1].year0) : 0) +
                  (parseInt(this.Output[index + 2].year0) ? parseInt(this.Output[index + 2].year0) : 0) +
                  (parseInt(this.Output[index + 3].year0) ? parseInt(this.Output[index + 3].year0) : 0) +
                  (parseInt(this.Output[index + 4].year0) ? parseInt(this.Output[index + 4].year0) : 0) +
                  (parseInt(this.Output[index + 5].year0) ? parseInt(this.Output[index + 5].year0) : 0)
                return this.Output[index].year0
              case 1:
              this.Output[index].year1 = (parseInt(this.Output[index + 1].year1) ? parseInt(this.Output[index + 1].year1) : 0) +
                  (parseInt(this.Output[index + 2].year1) ? parseInt(this.Output[index + 2].year1) : 0) +
                  (parseInt(this.Output[index + 3].year1) ? parseInt(this.Output[index + 3].year1) : 0) +
                  (parseInt(this.Output[index + 4].year1) ? parseInt(this.Output[index + 4].year1) : 0) +
                  (parseInt(this.Output[index + 5].year1) ? parseInt(this.Output[index + 5].year1) : 0)
                return this.Output[index].year1
              case 2:
              this.Output[index].year2 = (parseInt(this.Output[index + 1].year2) ? parseInt(this.Output[index + 1].year2) : 0) +
                  (parseInt(this.Output[index + 2].year2) ? parseInt(this.Output[index + 2].year2) : 0) +
                  (parseInt(this.Output[index + 3].year2) ? parseInt(this.Output[index + 3].year2) : 0) +
                  (parseInt(this.Output[index + 4].year2) ? parseInt(this.Output[index + 4].year2) : 0) +
                  (parseInt(this.Output[index + 5].year2) ? parseInt(this.Output[index + 5].year2) : 0)
                return this.Output[index].year2
              case 3:
              this.Output[index].year3 = (parseInt(this.Output[index + 1].year3) ? parseInt(this.Output[index + 1].year3) : 0) +
                  (parseInt(this.Output[index + 2].year3) ? parseInt(this.Output[index + 2].year3) : 0) +
                  (parseInt(this.Output[index + 3].year3) ? parseInt(this.Output[index + 3].year3) : 0) +
                  (parseInt(this.Output[index + 4].year3) ? parseInt(this.Output[index + 4].year3) : 0) +
                  (parseInt(this.Output[index + 5].year3) ? parseInt(this.Output[index + 5].year3) : 0)
                return this.Output[index].year3
              case 4:
              this.Output[index].year4 = (parseInt(this.Output[index + 1].year4) ? parseInt(this.Output[index + 1].year4) : 0) +
                  (parseInt(this.Output[index + 2].year4) ? parseInt(this.Output[index + 2].year4) : 0) +
                  (parseInt(this.Output[index + 3].year4) ? parseInt(this.Output[index + 3].year4) : 0) +
                  (parseInt(this.Output[index + 4].year4) ? parseInt(this.Output[index + 4].year4) : 0) +
                  (parseInt(this.Output[index + 5].year4) ? parseInt(this.Output[index + 5].year4) : 0)
                return this.Output[index].year4
              case 5:
              this.Output[index].year5 = (parseInt(this.Output[index + 1].year5) ? parseInt(this.Output[index + 1].year5) : 0) +
                  (parseInt(this.Output[index + 2].year5) ? parseInt(this.Output[index + 2].year5) : 0) +
                  (parseInt(this.Output[index + 3].year5) ? parseInt(this.Output[index + 3].year5) : 0) +
                  (parseInt(this.Output[index + 4].year5) ? parseInt(this.Output[index + 4].year5) : 0) +
                  (parseInt(this.Output[index + 5].year5) ? parseInt(this.Output[index + 5].year5) : 0)
                return this.Output[index].year5
              default:
                break
            }
           }
        },
        c1(){
          return function(index,year)
          {
            switch (year){
              case 0:
                var total =(parseInt(this.netCashFlow[0].year0)? parseInt(this.netCashFlow[0].year0):0) 
                this.netCashFlow[index].year0 = parseInt(this.netCashFlow[0].year0)?total:0
                return this.netCashFlow[index].year0
              case 1:
                var total =(parseInt(this.netCashFlow[0].year0)? parseInt(this.netCashFlow[0].year0):0) + (parseInt(this.netCashFlow[0].year1)? parseInt(this.netCashFlow[0].year1):0) 
                this.netCashFlow[index].year1 = parseInt(this.netCashFlow[0].year1)?total:0
                return this.netCashFlow[index].year1
              case 2:
                var total =(parseInt(this.netCashFlow[0].year0)? parseInt(this.netCashFlow[0].year0):0) +(parseInt(this.netCashFlow[0].year1)? parseInt(this.netCashFlow[0].year1):0) + (parseInt(this.netCashFlow[0].year2)? parseInt(this.netCashFlow[0].year2):0) 
                this.netCashFlow[index].year2 = parseInt(this.netCashFlow[0].year2)?total:0
                return this.netCashFlow[index].year2
              case 3:
                var total =(parseInt(this.netCashFlow[0].year0)? parseInt(this.netCashFlow[0].year0):0) +(parseInt(this.netCashFlow[0].year1)? parseInt(this.netCashFlow[0].year1):0) + (parseInt(this.netCashFlow[0].year2)? parseInt(this.netCashFlow[0].year2):0) + (parseInt(this.netCashFlow[0].year3)? parseInt(this.netCashFlow[0].year3):0) 
                this.netCashFlow[index].year3 = parseInt(this.netCashFlow[0].year3)?total:0
                return this.netCashFlow[index].year3
              case 4:
                var total =(parseInt(this.netCashFlow[0].year0)? parseInt(this.netCashFlow[0].year0):0) + (parseInt(this.netCashFlow[0].year1)? parseInt(this.netCashFlow[0].year1):0) + (parseInt(this.netCashFlow[0].year2)? parseInt(this.netCashFlow[0].year2):0) + (parseInt(this.netCashFlow[0].year3)? parseInt(this.netCashFlow[0].year3):0) + (parseInt(this.netCashFlow[0].year4)? parseInt(this.netCashFlow[0].year4):0)
                this.netCashFlow[index].year4 = parseInt(this.netCashFlow[0].year4)?total:0
                return this.netCashFlow[index].year4
              case 5:
                var total =(parseInt(this.netCashFlow[0].year0)? parseInt(this.netCashFlow[0].year0):0) + (parseInt(this.netCashFlow[0].year1)? parseInt(this.netCashFlow[0].year1):0) + (parseInt(this.netCashFlow[0].year2)? parseInt(this.netCashFlow[0].year2):0) + (parseInt(this.netCashFlow[0].year3)? parseInt(this.netCashFlow[0].year3):0) + (parseInt(this.netCashFlow[0].year4)? parseInt(this.netCashFlow[0].year4):0) + (parseInt(this.netCashFlow[0].year5)? parseInt(this.netCashFlow[0].year5):0)
                this.netCashFlow[index].year5 = parseInt(this.netCashFlow[0].year5)?total:0
                return this.netCashFlow[index].year5

              default:
                break
            }
          }
        },
        c2(){
          return function(index,year)
          {
            switch (year){
              case 0:
                var total =(parseInt(this.netCashFlow[2].year0)? parseInt(this.netCashFlow[2].year0):0) 
                this.netCashFlow[index].year0 = parseInt(this.netCashFlow[2].year0)?total:0
                return this.netCashFlow[index].year0
              case 1:
                var total =(parseInt(this.netCashFlow[2].year0)? parseInt(this.netCashFlow[2].year0):0) + (parseInt(this.netCashFlow[2].year1)? parseInt(this.netCashFlow[2].year1):0) 
                this.netCashFlow[index].year1 = parseInt(this.netCashFlow[2].year1)?total:0
                return this.netCashFlow[index].year1
              case 2:
                var total =(parseInt(this.netCashFlow[2].year0)? parseInt(this.netCashFlow[2].year0):0) +(parseInt(this.netCashFlow[2].year1)? parseInt(this.netCashFlow[2].year1):0) + (parseInt(this.netCashFlow[2].year2)? parseInt(this.netCashFlow[2].year2):0) 
                this.netCashFlow[index].year2 = parseInt(this.netCashFlow[2].year2)?total:0
                return this.netCashFlow[index].year2
              case 3:
                var total =(parseInt(this.netCashFlow[2].year0)? parseInt(this.netCashFlow[2].year0):0) +(parseInt(this.netCashFlow[2].year1)? parseInt(this.netCashFlow[2].year1):0) + (parseInt(this.netCashFlow[2].year2)? parseInt(this.netCashFlow[2].year2):0) + (parseInt(this.netCashFlow[2].year3)? parseInt(this.netCashFlow[2].year3):0) 
                this.netCashFlow[index].year3 = parseInt(this.netCashFlow[2].year3)?total:0
                return this.netCashFlow[index].year3
              case 4:
                var total =(parseInt(this.netCashFlow[2].year0)? parseInt(this.netCashFlow[2].year0):0) + (parseInt(this.netCashFlow[2].year1)? parseInt(this.netCashFlow[2].year1):0) + (parseInt(this.netCashFlow[2].year2)? parseInt(this.netCashFlow[2].year2):0) + (parseInt(this.netCashFlow[2].year3)? parseInt(this.netCashFlow[2].year3):0) + (parseInt(this.netCashFlow[2].year4)? parseInt(this.netCashFlow[2].year4):0)
                this.netCashFlow[index].year4 = parseInt(this.netCashFlow[2].year4)?total:0
                return this.netCashFlow[index].year4
              case 5:
                var total =(parseInt(this.netCashFlow[2].year0)? parseInt(this.netCashFlow[2].year0):0) + (parseInt(this.netCashFlow[2].year1)? parseInt(this.netCashFlow[2].year1):0) + (parseInt(this.netCashFlow[2].year2)? parseInt(this.netCashFlow[2].year2):0) + (parseInt(this.netCashFlow[2].year3)? parseInt(this.netCashFlow[2].year3):0) + (parseInt(this.netCashFlow[2].year4)? parseInt(this.netCashFlow[2].year4):0) + (parseInt(this.netCashFlow[2].year5)? parseInt(this.netCashFlow[2].year5):0)
                this.netCashFlow[index].year5 = parseInt(this.netCashFlow[2].year5)?total:0
                return this.netCashFlow[index].year5

              default:
                break
            }
          }
        },
        c3(){
          return function(index,year)
          {
            const discountRate = this.discountRate / 100
            switch (year){
              case 0:
                return 1;
              case 1:
                var temp_discountRate=1/(1+discountRate);
                this.netCashFlow[index].year1=temp_discountRate.toFixed(2)
                return this.netCashFlow[index].year1;  
              case 2:
              var temp_discountRate=1/((1+discountRate)*(1+discountRate));
              this.netCashFlow[index].year2=temp_discountRate.toFixed(2)
                return this.netCashFlow[index].year2;
              case 3:
              var temp_discountRate=1/((1+discountRate)*(1+discountRate)*(1+discountRate));
              this.netCashFlow[index].year3=temp_discountRate.toFixed(2)
                return this.netCashFlow[index].year3;
              case 4:
              var temp_discountRate=1/((1+discountRate)*(1+discountRate)*(1+discountRate)*(1+discountRate));
              this.netCashFlow[index].year4=temp_discountRate.toFixed(2)
                return this.netCashFlow[index].year4;
              case 5:
              var temp_discountRate=1/((1+discountRate)*(1+discountRate)*(1+discountRate)*(1+discountRate)*(1+discountRate));
              this.netCashFlow[index].year5=temp_discountRate.toFixed(2)
                return this.netCashFlow[index].year5;
            }
          }


        },
        npv(){
          return function()
          {
              const cashFlow = [0,0,0,0,0,0]
              cashFlow[0] = parseInt(this.netCashFlow[0].year0) ? parseInt(this.netCashFlow[0].year0):0
              cashFlow[1] = parseInt(this.netCashFlow[0].year1) ? parseInt(this.netCashFlow[0].year1):0
              cashFlow[2] = parseInt(this.netCashFlow[0].year2) ? parseInt(this.netCashFlow[0].year2):0
              cashFlow[3] = parseInt(this.netCashFlow[0].year3) ? parseInt(this.netCashFlow[0].year3):0
              cashFlow[4] = parseInt(this.netCashFlow[0].year4) ? parseInt(this.netCashFlow[0].year4):0
              cashFlow[5] = parseInt(this.netCashFlow[0].year5) ? parseInt(this.netCashFlow[0].year5):0
              const discountRate = this.discountRate / 100
              var npv = 0
              for(var t = 0; t <= 5; t++)
                npv += cashFlow[t] / Math.pow(1 + discountRate, t);
              this.Index[0].value = npv.toFixed(2)
              return this.Index[0].value 
          }
        },
        irr(){
          return function()
          {           
            var npv = 0  //净现值
            var irr = 0.1  //初始irr值设为0.1
            var count = 0  //计数
            const epsilon =  0.0001  //迭代精度
            const max_iter = 1000  //最大迭代次数

            const cashFlow = [0,0,0,0,0,0]  //净现金流量
            cashFlow[0] = parseInt(this.netCashFlow[0].year0) ? parseInt(this.netCashFlow[0].year0):0
            cashFlow[1] = parseInt(this.netCashFlow[0].year1) ? parseInt(this.netCashFlow[0].year1):0
            cashFlow[2] = parseInt(this.netCashFlow[0].year2) ? parseInt(this.netCashFlow[0].year2):0
            cashFlow[3] = parseInt(this.netCashFlow[0].year3) ? parseInt(this.netCashFlow[0].year3):0
            cashFlow[4] = parseInt(this.netCashFlow[0].year4) ? parseInt(this.netCashFlow[0].year4):0
            cashFlow[5] = parseInt(this.netCashFlow[0].year5) ? parseInt(this.netCashFlow[0].year5):0
            if(!(parseInt(this.netCashFlow[0].year0) && parseInt(this.netCashFlow[0].year1) && parseInt(this.netCashFlow[0].year2) && parseInt(this.netCashFlow[0].year3) && parseInt(this.netCashFlow[0].year4) && parseInt(this.netCashFlow[0].year5)))
              return this.Index[1].value = 0

            do{
              count++
              npv=0
              for(var t = 0; t <= 5; t++)
                npv += cashFlow[t] / Math.pow(1 + irr, t);
              if(npv > 0)
                irr += epsilon
              else if(npv < 0)
                irr -= epsilon
              else
                break  

            }while(Math.abs(npv) > epsilon && count < max_iter)

            this.Index[1].value = (irr * 100).toFixed(2)  //返回百分比值
            
            return this.Index[1].value 
          }
        },
        dpp(){
          return function()
          {
            var npv = 0
            var dpp = 0
            const discountRate = this.discountRate / 100

            const cashFlow = [0,0,0,0,0,0]  //净现金流量
            cashFlow[0] = parseInt(this.netCashFlow[0].year0) ? parseInt(this.netCashFlow[0].year0):0
            cashFlow[1] = parseInt(this.netCashFlow[0].year1) ? parseInt(this.netCashFlow[0].year1):0
            cashFlow[2] = parseInt(this.netCashFlow[0].year2) ? parseInt(this.netCashFlow[0].year2):0
            cashFlow[3] = parseInt(this.netCashFlow[0].year3) ? parseInt(this.netCashFlow[0].year3):0
            cashFlow[4] = parseInt(this.netCashFlow[0].year4) ? parseInt(this.netCashFlow[0].year4):0
            cashFlow[5] = parseInt(this.netCashFlow[0].year5) ? parseInt(this.netCashFlow[0].year5):0
            if(!(parseInt(this.netCashFlow[0].year0) && parseInt(this.netCashFlow[0].year1) && parseInt(this.netCashFlow[0].year2) && parseInt(this.netCashFlow[0].year3) && parseInt(this.netCashFlow[0].year4) && parseInt(this.netCashFlow[0].year5)))
              return this.Index[2].value = 0

            for(var t = 0; t <= 5; t++)
            {
                npv += cashFlow[t] / Math.pow(1 + discountRate, t);
                if(npv >= 0)
                {
                  dpp = t  - npv / cashFlow[t] / Math.pow(1 + discountRate, t)
                  break
                }
            }

            this.Index[2].value = dpp.toFixed(2)
            return this.Index[2].value
          }
        },
        sum(){
          for(let i = 0; i < 3; i++)
            this.Sum.push(this.Input[i])
          for(let i = 0; i < 6; i++)
            this.Sum.push(this.Output[i])
          for(let i = 0; i < 5; i++)
            this.Sum.push(this.netCashFlow[i])
          this.Sum.push({   
            number: '',
            project: '',    
          }
          )
          this.Sum.push({   
            number: '序号',
            project: '指标',   
            year0: '值',   
          }
          )
          this.Sum.push({   
            number: '6',
            project: '净现值 NPV',
            year0: this.Index[0].value,       
          }
          )
          this.Sum.push({   
            number: '7',
            project: '内部收益率 IRR',
            year0: this.Index[1].value,       
          }
          )
          this.Sum.push({   
            number: '8',
            project: '动态投资回收期(年) DPP',
            year0: this.Index[2].value,       
          }
          )
        },
        },
      methods:{
      }
      }
  </script>
  <style scoped lang="less">
  .title{
    text-align:center;
    font-family: sans-serif;
    font-size:30px;
}
.secondtitle{
    text-indent: 2em;
    font-weight: bold;
    margin-left: 30px;
    margin-right: 30px;
}
.content{
    text-indent: 2em;
    margin-left: 20px;
    margin-right: 20px;
}
.guidance{
    position:absolute;
    right:50px;
    font-weight: bold;
}
.formula{
  display: block;
  margin: 0 auto;
  width: auto;
  height: 60px;
  text-align:center;
}
</style>