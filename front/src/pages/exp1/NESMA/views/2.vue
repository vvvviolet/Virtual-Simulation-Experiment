<template>
  <div id="three">
    <h2>一、实验方法简介</h2>
    <p class="content" style="margin-bottom: 20px">
      估算功能点分析方法主要用于执行阶段，此时需求文件较为完善，故需要关注逻辑文件和相应的操作。估算功能点分析是指在确定每个功能部件（数据功能或事务功能）的复杂性程度时使用标准值：数据功能全部采用“低”级复杂性程度，事务功能全部采用“中”级复杂性程度计量。该方法与详细功能点分析的唯一区别是不用为每个功能识别分配复杂性程度，而是采用“默认值”。
    </p>
    <h2>二、实验步骤</h2>
    <div class="title">第一步：识别数据功能点和事务处理功能点</div>
    <p class="content">
      数据功能是指更新、引用和检索而储存的可用的逻辑数据。数据块及控制信息是逻辑上的并且用户可确认的。数据功能分为内部逻辑文件(ILF)和外部接口文件(EIF)。事务处理是指外部输入、外部输出、外部查询、完成更新、检索和输出等操作，分为外部输入(EI)、外部输出(EO)和外部查询(EQ)。
    </p>
    <p class="content italic">请详细阅读文档中提供的系统设计模型。</p>
    <br />

    <p class="title">第二步：明确 ILF、EIF、EI、EO、EQ 的复杂度</p>
    <p class="content">
      数据功能选择“低”级复杂度，事务处理功能选“中”级复杂度，也就是 ILF、EIF 都为简单，EI、EO、EQ 都为平均
    </p>
    <br />

    <p class="title">第三步：计算未调整功能点</p>
    <p class="content">
      按照 NESMA 功能点计算实践手册(4.1 版)组件复杂度等级与功能点数对应关系表，计算得到未调整功能点数(UFP)。
    </p>
    <table4></table4>
    <br />
    <p class="content italic">
      实验操作：将上述各步得到的数据，填写在下面的“未调整功能点计算表”中的合适位置，计算本实验案例的未调整功能点。
    </p>
    <table5 :second="second"></table5>
    <br />

    <p class="title">第四步：计算调整后功能点</p>
    <p class="content">
      考虑本实验案例的非功能性，从系统特征因子表及计算表采集相对复杂度调整因子(标红数值)，得到本实验案例的功能点调整因子(VAF)为
      41。将 VAF 数值代入(NESMA 法)功能 点计算公式，计算得到本实验案例的功能点为_____________。
    </p>
    <p class="content italic">实验操作：运用 NESMA 标准规则，计算实验案例的调整后功能点。</p>
    <table6></table6>
    <br />
    <span class="title">本实验功能点调整因子(VAF)为 </span>
    <span style="font-size: 20px">{{ VAF }}</span>
    <span style="margin-left: 220px" class="title">本实验未调整功能点数总计为 </span>
    <span style="font-size: 20px">{{ SUM }}</span>
    <span style="margin-left: 220px" class="title">本实验的功能点数为 </span>
    <span style="font-size: 20px">{{ ALL }}</span>
    <br /><br />

    <a-button class="button3" type="primary" shape="round">实验报告提交</a-button>
  </div>
</template>

<script setup lang="ts">
  import { storeToRefs } from 'pinia';
  import { useExp1Store } from '../stores';
  import { onMounted, onUpdated, nextTick, ref } from 'vue';
  import table1 from '../components/table1.vue';
  import table2 from '../components/table2.vue';
  import table3 from '../components/table3.vue';
  import table4 from '../components/table4.vue';
  import table5 from '../components/table5.vue';
  import table6 from '../components/table6.vue';

  const { SUM, VAF, ALL } = storeToRefs(useExp1Store());
  const second = ref('two');
  onMounted(() => {
    // gettableData()
  });
  onUpdated(() => {
    nextTick(() => {
      // refs['detailTable'].doLayout();
    });
  });
</script>

<style scoped>
  #three {
    margin-top: 20px;
  }
</style>
