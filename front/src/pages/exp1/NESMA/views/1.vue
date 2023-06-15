<template>
  <div id="one">
    <h2>三、实验方法简介</h2>
    <p class="content" style="margin-bottom: 20px">
      预估功能点分析方法主要用于计划阶段，因为此阶段需求文件大多不完善，故而只需关注逻辑文件即可。预估功能点分析是指在度量时，只识别出软件需求的数据功能数量，根据经验公式得出软件规模。
    </p>
    <h2>四、实验步骤</h2>
    <div class="title">第一步：识别数据功能点和事务处理功能点</div>
    <p class="content">
      数据功能是指更新、引用和检索而储存的可用的逻辑数据。数据块及控制信息是逻辑上的并且用户可确认的。数据功能分为内部逻辑文件(ILF)和外部接口文件(EIF)。事务处理是指外部输入、外部输出、外部查询、完成更新、检索和输出等操作，分为外部输入(EI)、外部输出(EO)和外部查询(EQ)。
    </p>
    <p class="content italic">请详细阅读文档中提供的系统设计模型。</p>
    <br />

    <p class="title">第二步：测量内部逻辑文件(ILF)</p>
    <p class="content">
      内部逻辑文件(ILF)是用户可确认的，在应用程序内部维护、逻辑上相关的数据块或控制信息。内部逻辑文件(ILF)用来保存经由应用程序的一个或多个处理后的数据。一旦应用程序内部的一个数据块被标识为
      ILF，即使它被另一个事务处理所引用，它也不能再被同一个应用程序当作 EIF。
    </p>
    <p class="content italic">实验操作：清点实验案例中 ILF 数量。</p>
    <br />

    <p class="title">第三步：测量外部接口文件(EIF)</p>
    <p class="content">
      外部接口文件(EIF)是用户可确认的、由被测应用程序引用，但在其他应用程序内部维护的、逻辑上相关的数据块或控制信息。外部接口文件(EIF)用来存放被测应用程序中的一个或多个基本处理所引用的数据。数据或控制数据通过诸如增加、变更、更新等事务来维护，一个
      EIF 可以被多个应用程序引用和计算，但是对于一个应用程序来讲，一个 EIF 只应被计算一次。
    </p>
    <p class="content italic">实验操作：清点实验案例中 EIF 数量。</p>
    <br />

    <p class="title">第四步：计算未调整功能点</p>
    <p class="content">
      使用公式 35 × NroILFs + 15 × NroEIFs 直接计算未调整功能点数(UFP)。其中，NroILFs 表示 ILF 的数量，NroEIFs 表示 EIF
      的数量
    </p>
    <br />
    <div style="margin-left: 30px">
      35 × <a-input v-model:value="ILF" placeholder="NroILFs" style="width: 100px" /> + 15 ×
      <a-input v-model:value="EIF" placeholder="NroEIFs" style="width: 100px" /> =
      {{ SUM }}
    </div>
    <br />

    <p class="title">第五步：计算调整后功能点</p>
    <p class="content">
      考虑本实验案例的非功能性，从系统特征因子表及计算表采集相对复杂度调整因子(标红数值)，得到本实验案例的功能点调整因子(VAF)为
      41。将 VAF 数值代入(NESMA 法)功能点计算公式，计算得到本实验案例的功能点为_____________。
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
    <!-- <a-button class="button3" type="primary" shape="round">实验报告提交</a-button> -->
  </div>
</template>

<script setup lang="ts">
  import { storeToRefs } from 'pinia';
  import { useExp1Store } from '../stores';
  import { ref, computed } from 'vue';
  import table1 from '../components/table1.vue';
  import table2 from '../components/table2.vue';
  import table3 from '../components/table3.vue';
  import table4 from '../components/table4.vue';
  import table5 from '../components/table5.vue';
  import table6 from '../components/table6.vue';

  const { VAF } = storeToRefs(useExp1Store());
  const ILF = ref<number>();
  const EIF = ref<number>();
  const SUM = computed(() => 35 * (ILF.value ? ILF.value : 0) + 15 * (EIF.value ? EIF.value : 0));
  const ALL = computed(() => (SUM.value * VAF.value).toFixed(2));
  
</script>

<style scoped>
  #one {
    margin-top: 20px;
  }
</style>
