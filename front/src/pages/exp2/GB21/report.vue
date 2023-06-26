<template>
  <!-- 补上题头 -->
  <div style="padding-top:60px;padding-bottom:20px">
        <a-config-provider  >
            <p style="line-height:200%;font-size: 16px;">
                <a-row justify="center">
                    <a-col span="6">课程名称：软件工程经济学</a-col>
                    <a-col span="6">课号：420279</a-col>
                    <a-col span="6">实验项目名称：软件规模度量实验</a-col>
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
        </a-config-provider>
    </div>

  <h2 style="font-weight: bold;">一、实验目的 </h2>
  <p class="content">
    <br>通过对软件开发成本进行估算，掌握和了解软件成本估算的方法和技术，同时熟悉和掌握国家标准GB/T36964-2018《软件工程软件成本估算》的相关规定和要求，以提高软件项目管理和开发能力。该实验的目的包括：
    <br>1. 熟悉国标GB标准的软件成本估算的基本原理和方法：了解软件开发成本的组成、估算方法和技术。
    <br>2.掌握软件成本估算的实际应用技能：通过实验操作，掌握软件成本估算的实际应用技能，如数据采集、分析、计算和结果解释等。
    <br>3.熟悉国家标准GB/T36964-2018《软件工程软件成本估算》的相关规定和要求：了解国家标准对软件成本估算的规范和要求，以提高软件开发过程的规范化程度。
    <br>4.提高软件项目管理和开发能力：通过掌握软件成本估算的方法和技术，提高软件项目管理和开发能力，以更好地满足用户需求，提高软件质量和效率。
  </p>
  <h2 style="font-weight: bold;">二、实验原理 </h2>
  <div class="content"></div>
  <p
    class="principle_title"
    style="font-weight: bold;"
  >1.软件开发成本构成 </p>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;软件开发过程指从项目立项开始到项目完成验收之间所涉及的需求分析、概要设计、编码实现、集成测试、验收交付及相关的项目管理支持活动。软件开发成本仅包括软件开发过程中的所有人力成本和非人力成本之和，不包括数据迁移和软件维护等成本。人力成本包括直接人力成本和间接人力成本，非人力成本包括直接非人力成本和间接非人力成本。本标准中所涉及工作量也仅为软件开发过程所用工作量。
  <br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;直接人力成本包括开发方项目组成员的工资、奖金和福利等人力资源费用。其中，项目成员包括参与该项目开发过程的所有开发或支持人员，如项目经理、需求分析人员、设计人员、开发人员、测试人员、部署人员、用户文档编写人员、质量保证人员和配置管理人员等。对于非全职投人该项目开发工作的人员，按照项目工作量所占其总工作量比例折算其人力资源费用。
  <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;间接人力成本指开发方服务于开发管理整体需求的非项目组人员的人力资源费用分摊。包括开发部门经理、项目管理办公室人员、工程过程组人员、产品规划人员、组织级质量保证人员、组织级配置管理人员、商务采购人员和IT支持人员等的工资、奖金和福利等的分摊。
  <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;直接非人力成本包括：
  <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(a)办公费，即开发方为开发此项目而产生的行政办公费用，如办公用品、通讯、邮寄、印刷和会议等；
  <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(b)差旅费，即开发方为开发此项目而产生的差旅费用，如交通、住宿和差旅补贴等；
  <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(c)培训费，即开发方为开发此项目而安排的培训产生的费用；
  <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(d)业务费，即开发方为完成此项目开发工作所需辅助活动产生的费用，如招待费、评审费和验收费等；
  <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(e)采购费，即开发方为开发此项目而需特殊采购专用资产或服务的费用，如专用设备费、专用软
  件费、技术协作费和专利费等；
  <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(f)其他，即未在以上项目列出但却是开发方为开发此项目所需花费的费用。
  <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;间接非人力成本指开发方不为开发某个特定项目而产生，但服务于整体开发活动的非人力成本分摊。包括：开发方开发场地房租、水电和物业，开发人员日常办公费用分摊，战略、市场宣传推广、品牌建设、知识产权专利等费用分摊，以及各种开发办公设备的租赁、维修和折旧分摊等。
  注：在编制软件项目预算、报价或结算时，除软件开发成本外，考虑开发方合理的毛利润水平是必要的。对于需要提供其他支持服务的项目或产品，还需要考虑支持活动所需的各种成本，如数据迁移费和维护费等。
  <br><br>
  <p
    class="principle_title"
    style="font-weight: bold;"
  >2.软件开发成本估算基本流程
  </p>
  <img
    src="https://yixun-picture.oss-cn-shanghai.aliyuncs.com/RJCBGS_Process.png"
    width="700"
    height="300"
  />
  <!-- </p> -->
  <h2 style="font-weight: bold;">三、实验步骤 </h2>
  <main-table> </main-table>
  <h2 style="font-weight: bold;">四、实验小结与心得 </h2>
  <div class="content">
    <div style="margin: 20px 0"></div>
    <a-textarea
      v-model:value="reflection"
      placeholder="请输入实验心得"
      :auto-size="{ minRows: 2 }"
    />
  </div>
</template>
  
  <script lang="ts">
import { defineComponent } from 'vue'
import { ref } from 'vue'
import mainTable from './mainTable.vue';

export default defineComponent({
  components: {
    mainTable
  },
  setup () {
    const reflection = ref('')
    const time = ref('');
    const person = ref('');
    return {
      zIndex: 3000,
      size: 'small',
      reflection,
      time,
      person
    }
  },
})

  </script>
  
  <style scoped>
.all_title {
  text-indent: 2em;
  margin-left: 20px;
  margin-right: 20px;
}
.pre_title {
  display: inline-block;
}
</style>