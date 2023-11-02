<template>
  <h2>一、实验目的</h2>
  <p class="content">
    理解软件项目规模度量功能点法原理，通过实验操作掌握功能点法。
    学生应以小组为单位，根据本小组“软件工程管理与经济”课程设计项目架构及组件等设计成果，以功能点方法测量该项目的规模(功能点数量)。
    建议选用某一种功能点方法度量课程设计项目的功能点，并采用另外一种功能点方法或其他的软件规模度量方法对前一种方法的度量结果进行验证。
  </p>
  <p style="margin-bottom: 20px; text-indent: 2em">本实验为课内设计性实验项目，实验学时1学时，完成实验报告1学时。</p>
  <h2>二、实验原理</h2>
  <p class="content">
    软件规模度量是软件项目成本估算以及软件项目经济评价的基础。软件规模度量是软件项目成本估算以及软件项目经济评价的基础。软件规模度量的方法主要有代码行法、功能点法、对象点法和用例点法等。
  </p>
  <p class="content">
    功能点法(Function
    point,简称FP)，是从软件系统功能特征的角度，测量软件规模的方法，以期克服代码行法的弱点。功能点法基于软件系统需求和设计模型分析，得到软件系统实现功能所具备的功能点，功能点的定义明确，功能点不仅数量反映了软件系统的复杂度及规模，也有利于软件系统间规模的比较。软件系统的功能点也可以转换为代码行，转换系数则取决于特定开发语言。
    功能点法在演进过程中，先后有5种功能点法成为ISO国际标准，即IFPUG、MARKⅡ、COSMIC、NESMA和FiSMA方法。目前在全球使用功能点方法的企业中，超过90%使用IFPUG或NESMA方法，而NESMA方法中详细功能点方法与IFPUG方法基本等效。
  </p>
  <p class="content">建议按照以下步骤执行度量过程。</p>
  <p class="content">1.判定软件系统的工程类型</p>
  <p class="content">
    功能点对软件规模的测量可包含软件生命周期的整个过程，从软件需求、架构设计、构件设计、测试直至软件部署与维护，功能点测量软件系统规模的准确度逐步提高。功能点测量软件系统的工程类型有三种：新开发项目、增强(开发)项目以及应用程序功能点测量。
  </p>
  <p class="content">2.识别和确定系统的边界和范围</p>
  <p class="content">
    在功能点测量中，边界划分和确定是正确估算所测软件系统规模的重点和难点。依据测量工作目的确定测量范围，通常认为测量边界是指被测程序与外部使用者、其他应用系统或程序的接口或边界。
  </p>
  <p class="content">3.功能点分析</p>
  <p class="content">
    功能点分析将软件系统的功能需求分为数据功能需求和处理数据的事务功能需求。数据功能需求由数据类型功能点描述，包含应用程序的内部逻辑数据和应用程序的外部接口数据，事务功能需求由反应人机交互(事务处理)类型的功能点描述，包含对数据的外部输入、输出和查询。
  </p>
  <p class="content">4.测量数据功能点和事务功能点</p>
  <p class="content">(1) 数据类型功能点</p>
  <p class="content">ILF 内部逻辑文件（Internal Logical File） EIF 外部接口文件（External Interface File）</p>
  <p class="content">
    ILF内部逻辑文件是用户可识别的系统边界以内的一组逻辑关联的数据或者控制信息，ILF由系统的基本处理过程来维护。
    EIF外部接口文件是用户可以识别的，由其它系统维护，在本系统引用的一组逻辑相关数据或控制信息，由本系统的基本处理过程引用，是其它系统的内部逻辑文件。
  </p>
  <p class="content">(2) 人机交互类型（事务）的功能点</p>
  <p class="content">EI 外部输入（External Input） EO 外部输出（External Output） EQ 外部查询（External Inquiry）</p>
  <p class="content">
    EI外部输入是指一个处理来自本应用边界之外的一组数据或者控制信息的基本处理过程。外部输入的基本目的是为了维护（包括增加、修改及删除数据等）一个内部逻辑文件（ILF）或者改变系统的行为。
    EO外部输出是指一个向应用边界之外或用户提供经过加工处理的数据或者控制信息的基本处理过程
  </p>
  <p class="content">5.计算未调整功能点数</p>
  <p class="content">
    根据软件系统的需求模型和设计模型，计数ILF、EIF、EI、EO和EQ组件的数量，确定每个组件的复杂度等级。按照国际功能点用户组(IFPUG方法)标准的计算方法，计算软件系统的未调整功能点数(UFP)，公式如下：
  </p>
  <p class="content">UFP = ΣILF +ΣEIF +Σ𝐸𝐸𝐸 +ΣEI +ΣEO +ΣEQ</p>
  <p class="content">6.计算调整后功能点</p>
  <p class="content">
    为了有效反应软件系统非功能因素对软件项目工作量的影响，IFPUG方法使用14个通用系统特征因子修正未调整功能点数，这些特征因子包括数据通信、分布式数据处理、性能、复杂处理、可重用性等。将这14个因子根据其对软件系统影响程度的不同分别赋予0～5数值中的某个权重值，按照以下公式对应用系统的功能点进行调整，最终得到软件系统工作量的功能点数。功能点公式如下：
  </p>
  <p class="content">
    FP = UFP x VAF &nbsp;&nbsp;&nbsp;&nbsp;上式中，UFP是未调整功能点数，VAF是功能点调整因子，FP是功能点数。
  </p>
  <p class="content">
    VAF计算式： VAF = 0.65 +0.01x ΣAi(1-14)
    &nbsp;&nbsp;&nbsp;&nbsp;上式中，Ai的取值0～5，因此VAF的取值范围为0.65～1.35。
  </p>
  <h2 style="margin-top: 50px">下面具体区分三种方法</h2>
  <a-tabs v-model:activeKey="activeKey" :tabBarGutter="100">
    <a-tab-pane key="1" tab="预估功能点分析方法">
      <One></One>
    </a-tab-pane>
    <a-tab-pane key="2" tab="估算功能点分析方法" force-render>
      <Two></Two>
    </a-tab-pane>
    <a-tab-pane key="3" tab="详细功能点分析方法">
      <Three></Three>
    </a-tab-pane>
  </a-tabs>
  <h2 style="margin-top: 20px">五、实验心得</h2>
  <a-textarea
    v-model:value="value"
    placeholder="写下你的心得"
    :rows="4"
    allowClear
    showCount
    autosize
    style="margin-bottom: 60px"
  ></a-textarea>
</template>

<script setup lang="ts">
  import { ref, watch } from 'vue';
  import './styles/main.css';
  import One from './views/1.vue';
  import Two from './views/2.vue';
  import Three from './views/3.vue';
  import { useExp1Store } from './stores';

  const value = ref<string>('');
  const activeKey = ref('1');
  const store = useExp1Store();
  watch(activeKey, () => {
    store.clear();
  });
</script>

<style scoped></style>
