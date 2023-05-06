<template>
  <div id="three">
    <h2>一、实验方法简介</h2>
    <p class="content" style="margin-bottom: 20px">
      详细功能点分析方法主要用于事后评估阶段，此时功能需求非常详细，可关注逻辑文件、相应操作和复杂度。预估功能点分析方法与估算功能点分析方法的计算结果，与详细功能点分析方法的计算结果有很强的相关性和一致性。在软件项目早期，选择预估功能点分析方法较好。
    </p>
    <h2>二、实验步骤</h2>
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

    <p class="title">第四步：计算 ILF 和 EIF 复杂度</p>
    <p class="content">
      根据 NESMA 功能点计算实践手册(4.1 版)，识别 ILF 和 EIF 组件的复杂程度，并按照下表的参数并赋值(简单、平均或复杂)。
    </p>
    <p class="content italic">实验操作：复杂度为简单的 ILF 数量和复杂的 ILF 数量各占 50%。EIF 的复杂度均为复杂。</p>
    <table1></table1>
    <br />

    <p class="title">第五步：测量外部输入(EI)</p>
    <p class="content">
      外部输入(EI)是应用程序处理来自系统边界以外的数据或控制信息的基本过程。EI 的作用是维护一个或多个 ILF
      以及通过其处理逻辑来改变系统的行为。
    </p>
    <p class="content italic">实验操作：清点实验案例中 EI 数量。</p>
    <br />

    <p class="title">第六步：测量外部输出(EO)</p>
    <p class="content">
      外部输出(EO)是应用程序向其边界之外提供数据或控制信息的基本处理。EO的作用是向用户提供经过处理逻辑加工的，除了检索信息或控制信息之外的信息或附加信息。处理逻辑中必须至少包含一个数学公式或者计算，创建导出数据或者维护一个或多个
      ILF，并且改变系统的行为。
    </p>
    <p class="content italic">实验操作：清点实验案例中 EO 数量。</p>
    <br />

    <p class="title">第七步：测量外部查询(EQ)</p>
    <p class="content">
      外部查询(EQ)是应用程序向其边界之外提供数据或控制信息查询的基本处理。EQ的作用是通过查询数据或控制信息来为用户提供信息，处理逻辑中既不包含数学公式或计算，也不产生导出数据。处理过程中不维护
      ILF，系统行为不受影响。
    </p>
    <p class="content italic">实验操作：清点实验案例中 EQ 数量。</p>
    <br />

    <p class="title">第八步：计算 EI、EO 和 EQ 复杂度</p>
    <p class="content">
      根据 NESMA 功能点计算实践手册(4.1 版)，分别识别 EI 以及 EO 和 EQ
      组件的复杂程度，并按照以下两个表格的参数并赋值(简单、平均或复杂)。
    </p>
    <p class="content italic">
      实验操作：复杂度为简单的 EI 数量和复杂的 EI 数量各占 50%。复杂度为平均的 EO 数量占 2/3，复杂度为复杂的 EO 数量占
      1/3。复杂度为简单、平均和复 杂的 EQ 数量各占 1/3。
    </p>
    <table2></table2>
    <br />
    <table3></table3>
    <br />

    <p class="title">第九步：计算未调整功能点</p>
    <p class="content">
      按照 NESMA 功能点计算实践手册(4.1 版)组件复杂度等级与功能点数对应关系表，计算得到未调整功能点数(UFP)。
    </p>
    <table4></table4>
    <br />
    <p class="content italic">
      实验操作：将上述各步得到的数据，填写在下面的“未调整功能点计算表”中的合适位置，计算本实验案例的未调整功能点。
    </p>
    <table5></table5>
    <br />

    <p class="title">第十步：计算调整后功能点</p>
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

    <a-button class="button3" type="primary" shape="round">实验报告提交</a-button>
  </div>
</template>

<script setup lang="ts">
  import { storeToRefs } from 'pinia';
  import { useExp1Store } from '../stores';
  import table1 from '../components/table1.vue';
  import table2 from '../components/table2.vue';
  import table3 from '../components/table3.vue';
  import table4 from '../components/table4.vue';
  import table5 from '../components/table5.vue';
  import table6 from '../components/table6.vue';

  const { SUM, VAF, ALL } = storeToRefs(useExp1Store());
</script>

<style scoped>
  #three {
    margin-top: 20px;
  }
</style>
