<template>

    <h1 class="title" >实验1 基于COSMIC的小型软件项目规模度量实验
    </h1>
    <div style="padding-top:60px;padding-bottom:20px" ref="content_1">
        <a-config-provider>
            <p style="line-height:200%;font-size: 16px;">
                <a-row justify="center">
                    <a-col span="6">课程名称：软件工程经济学</a-col>
                    <a-col span="6">课号：420279</a-col>
                    <a-col span="6">实验项目名称：软件规模度量实验</a-col>
                </a-row>
                <a-row justify="center">
                    <a-col span="6">实验时间：<span style="border-bottom: 1px solid grey;border-radius: none;"><a-date-picker
                                v-model="experimentdate" :bordered="false"
                                style="width:150px;padding-left:3px;padding-right:3px;"
                                placeholder="点击选择实验时间" /></span></a-col>
                    <a-col span="6">实验报告人： <span style="border-bottom: 1px solid grey;border-radius: none;"><a-input
                                v-model="reportername" placeholder="请输入报告人姓名" size="small" :bordered="false"
                                style="width:18vh;"></a-input></span>
                    </a-col>
                    <a-col span="6"></a-col>
                </a-row>
            </p>
        </a-config-provider>
    </div>
    <hr />
    <!-- <span> {{ test }}</span> -->
    <a-row :gutter="16">
        <a-col :span="19">
            <a-button type="primary" @click="showDrawer">  实验理论指导  </a-button>
        </a-col>
        <a-col :span="4">
        <a-statistic-countdown :value="deadline" style="margin-right: 50px" @finish="onFinish">
            <template #title>
            <span>Countdown</span>
            <a-tooltip placement="right">
                <template #title>
                <span>hurry up!</span>
                </template>
                <question-circle-two-tone style="margin-left: 5px" />
            </a-tooltip>
            </template>
        </a-statistic-countdown>
        </a-col>
    </a-row>
    <div ref="content_2">
        <a-drawer
        v-model:visible="visible"
        class="custom-class"
        style="color: black"
        title="实验理论指导"
        placement="left"
        width=60%
    >
    <h2>一、实验目的  </h2>
    <p class="content">● - 理解软件项目规模度量功能点法原理，通过实验操作掌握功能点法
    </p>
    <p class="content">● - 学生应据本实验指导书中给定的示例项目的架构及组件等，以功能点方法测量该项目的规模(功能点数量)，在实践中促进对功能点法和更广泛的规模度量方法的理解
    </p>
    <p class="content">● - 本实验中采用COSMIC功能点法进行测量，建议选用另外一种功能点方法或其他的软件规模度量方法对本实验中得到的度量结果进行验证
    </p>
    <p class="content">● - 本实验为课内设计性实验项目，实验学时 1 学时，完成实验报告 1 学时
    </p>
    <h2>二、实验设备  </h2>
    <p class="content"> 每位学生PC机一台(含电子表格软件，例如MS Excel软件)。
    </p>
    <h2>三、实验原理  </h2>
      <h3>软件规模度量</h3>
    <p class="content">软件规模度量是软件项目成本估算以及软件项目经济评价的基础。软件规模估算的方法主要有代码行法、功能点法、对象点法和用例点法等。其中的功能点法测量的即是软件项目的功能规模。
    </p>
      <h3>COSMIC简介</h3>
    <p class="content">COSMIC 方法是功能点法中的一种，定义了衡量软件标准功能规模的原则、规则和过程。在COSMIC法中，每个数据移动（data movement）算作一个COSMIC功能点（CFP）。
    </p>
    <p class="content">在COSMIC方法中有4种数据移动：
    </p>
    <p class="content">● - 输入（Entry）：将一个数据组跨越边界，从一个功能用户移动到需要它的功能流程中。
    输入应该：
    </p>
    <p class="content">     1. 接受来自边界外的功能用户发送的单个数据组
    </p>    
    <p class="content">     2. 在不涉及其他数据移动类型的情况下，包括所有必须的格式化和展示运算，以及与验证输入数据属性相关的运算。
    </p>
    <p class="content">     3. 包括所有“请求接收输入数据”的功能，无需指定输入什么数据
    </p>
    <p class="content">● - 输出（Exit）：将一个数据组跨越边界，从一个功能流程移动到需要它的功能用户中。
  输出应该：
    </p>
    <p class="content">     1. 从一个单一数据组向边界外的功能用户发送数据属性
    </p>
    <p class="content">     2. 在不涉及其他数据移动类型的情况下，包括所有必须的格式化和展示运算，以及需 要向功能用户发送数据属性所需的数据运算。
    </p>
    <p class="content">● - 读（Read）：将一个数据组从持久性存储中移到需要它的功能流程中。
  读应该：
    </p>
    <p class="content">     1. 从持久性存储介质检索一个单一的数据组
    </p>
    <p class="content">     2. 在不涉及其他数据移动类型的情况下，包括读取数据所需的所有逻辑处理和/或数学计算
    </p>
    <p class="content">     3. 包括所有“读请求”的功能。
    </p>
    <p class="content">● - 写（Write）：将一个数据组从一个功能流程内部移动到持久性存储中。
  写应该：
    </p>
    <p class="content">     1. 从一个独立的数据组向持久性存储介质移动数据属性。
    </p>
    <p class="content">     2. 在不涉及其他数据移动类型的情况下，包括所有为了要建立“写”数据属性的逻辑处理和/或数学计算
    </p>
      <h3>COSMIC度量过程</h3>
      <p class="content">     COSMIC 度量过程包括以下三个阶段：
      </p>
      <div class="image-center"><img src="./image/COSMIC_process.png" width="500"></div>
      <h4>1. 度量策略阶段</h4>
      <p class="content">     进行实际测量前，有必要确定测量的目的与其他测量相关参数并进行记录，以便将来其他使用者能够正确地理解测量的结果。其中五个关键的测量策略参数为：
      </p>
      <p class="content"> - ● - 测量目的：有助于决定其他所有参数
      </p>
      <p class="content"> - ● - 待测量的软件块规模：一个项目可能包含多个软件块，哪些要被包含而哪些不要应当被加以确定
      </p>
      <p class="content"> - ● - 待测量的软件块的分解级别：不同的级别可能是“整个应用”、“一个分布式系统的一个组件”等等
      </p>
      <p class="content"> - ● - 每个待测量软件块的功能用户：包括人或物（硬件设备或其他软件系统），它们是被测软件的数据发送者或接收者。正是他们感知到的功能将要被衡量
      </p>
      <p class="content"> - ● - 软件在所处软件架构中的层次：一个待测量的软件必须被限制在一个层内
      </p>
      <p class="content">     除此之外，我们还需要考虑我们能得到哪些软件制品（包括概要或详细的需求说明、 设计模型、实际已上线的软件等等）用于度量功能性用户需求(FUR)。如果已有制品无法满足度量所需精确的，我们往往需要做一些假设。
      </p>
      <div class="image-center"><img src="./image/COSMIC_p1.png" width="500"></div>
      <h4>2. 映射阶段</h4>
      <p class="content">     映射阶段的任务是基于COSMIC“通用软件模型”的原则，从待度量软件的可获取制品（包括概要或详细的需求说明、 设计模型、实际已上线的软件等等）中提取该软件的功能性用户需求(FUR)。
      </p>
      <p class="content">     通用软件模型由以下假设组成：
      </p>
      <p class="content">  1. 一个软件跨越边界和它的功能用户交互，并在该边界内与持久存储交互。
      </p>
      <p class="content">  2. 功能处理由被称为数据移动的子流程组成。
      </p>
      <p class="content">  3. 有四种数据移动类型，输入（Entry），输出（Exit），写（Write）和读（Read）。数据移动类型包括任何关联的数据操作。
      </p>
      <p class="content">  4. 数据移动移动一个数据组。
      </p>
      <p class="content">  5. 数据组由一组唯一的数据属性组成，这些属性描述了单个受关注的对象。
      </p>
      <p class="content">  6. 每个功能处理都由一个触发事件启动，由功能用户检测到，然后启动一个称为触发条目的数据移动。
      </p>
      <p class="content">  7. 功能大小基于用于测量的元素类型，而不是它们出现的次数。
      </p>
      <p class="content">  8. 功能处理的大小等于其数据移动的数量，其中一个数据移动的大小为 1 个COSMIC 功能点。
      </p>
      <p class="content">  9. 一个软件的大小是FSM范围内的功能处理大小的总和。
      </p>
      <p class="content">  10. 修改后的软件的大小是修改、添加和删除的功能过程的大小之和。
      </p>
      <p class="content">     基于通用软件模型，软件的任务是响应其功能用户的世界中发生的事件（“触发事件”），功能用户通知软件该事件发生，并向软件发送该事件相关的数据，软件进行“功能处理”作为回应，所有软件的功能用户需求（FUR）都可以用“功能处理”来表示。而“功能处理”的结构也被描述了，即包含若干数据移动。数据移动包含四种类型，即输入、输出、读、写，分别将数据从功能用户移入或移出软件、将数据从持久存储介质移出或移入软件。
      </p>
      <p class="content">     当待度量软件的可获取制品达到功能处理的粒度级别后，我们便可以通过 COSMIC 模型推导出功能用户需求（FUR）。该步骤如下所示：
      </p>
      <p class="content">  1. 识别软件必须响应的功能用户世界中的独立事件，即“触发事件”
      </p>
      <p class="content">  2. 识别这些触发事件是由哪些功能用户响应的，后者会生成一个由触发输入移动的数据组
      </p>
      <p class="content">  3. 为每个触发输入识别一个功能处理理
      </p>
      <p class="content">  4. 在每个功能处理中，识别响应该触发输入的、满足 FUR 所需的所有其他数据移动，包括输入、输 出、读和写。
      </p>
      <div class="image-center"><img src="./image/COSMIC_p2.png" width="500"></div>
      <h4>3. 度量阶段</h4>
      <p class="content">     当映射阶段结束后，我们生成了功能用户需求（FUR）的 COSMIC 模型（也就是通用软件模型的一个实例），随后我们可以进行实际规模的度量。
      </p>
      <p class="content">     度量的原则就是，软件块的功能规模等于其数据移动的数量。功能规模度量的单位称作“COSMIC 功能点（CFP）”，单个数据移动(输入、 输出、读或写)的规模定义为 1CFP。
      </p>
      <p class="content">     我们在不同的级别上进行规模的汇总：
      </p>
      <p class="content"> - ● - 功能处理的规模等于其数据移动的数量
      </p>
      <p class="content"> - ● - 软件块的规模等于其功能处理的规模的总和
      </p>
      <p class="content">     只要遵循汇总规则，就可以从其组件规模推导出整个软件规模。
      </p>
      <p class="content">     另外，等于软件块变更的规模计算，我们度量如下：一个软件块变更的规模等于其所有功能处理中新增、修改或删除的数据移动之和（一个数据移动变更（新增、删除、修改（修改包括对对应数据组任何属性相关的数据运算的变更））的规模记为1CFP）。
      </p>
      <p class="content">     最终度量结果可表示为：x CFP(v.y)，其中x表示使用v.y版本的COSMIC方法得到的软件规模度量数值汇总，如：2500CFP（4.0）
      </p>
      <p class="content">     另外，对于并非以数据移动为主的软件，如果觉得基本的COSMIC方法有所不足，可以可以为例外的功能（如为了解决复杂算法的度量问题时）设置一个本地化标准。
      </p>
      <p class="content">     当使用了本地化扩展时，最终度量结果可表示为：x CFP(v.y) +z LocalFP
      </p>
      <p class="content">     （示例：“在我们组织中，诸如"算法示例列表"的数学算法计作1个本地FP。"另一个算法示例列表"计作2个本地FP。”）
      </p>
      <div class="image-center"><img src="./image/COSMIC_p3.png" width="500"></div>
    </a-drawer>

    </div>
    

    

    <h2 class="title">  实验内容  </h2>

    <div>
        <a-steps v-model:current="current" size="small">
        <a-step v-for="item in steps" :key="item.title" :title="item.title" />
        </a-steps>
        <div class="steps-content">
        <!-- {{ steps[current].content }} -->
        <!-- <div ref="content1"> -->
            <!-- <div v-if="current == 0"> -->
            <div v-if="current == 0" ref="content1">
              <h2>
                确定度量策略参数
              </h2>
              <p>进行实际度量前，五个关键的测量策略参数需要被确定：
              </p>
              <p> - ● - 测量目的：有助于决定其他所有参数
              </p>
              <p> - ● - 待测量的软件块规模：一个项目可能包含多个软件块，哪些要被包含而哪些不要应当被加以确定
              </p>
              <p> - ● - 待测量的软件块的分解级别：不同的级别可能是“整个应用”、“一个分布式系统的一个组件”等等
              </p>
              <p> - ● - 每个待测量软件块的功能用户：包括人或物（硬件设备或其他软件系统），它们是被测软件的数据发送者或接收者。正是他们感知到的功能将要被衡量
              </p>
              <p> - ● - 软件在所处软件架构中的层次：一个待测量的软件必须被限制在一个层内
              </p>
<!--              输入数据及变量尚未考虑，后面统一处理-->
            <a-form
                    ref="formRef"
                    name="custom-validation"
                    :model="formState1"
                    v-bind="layout"
            >
              <a-form-item :name="['strategy', 'measurementPurpose']" label="测量目的" :rules="[{ required: true }]">
                <a-input v-model:value="formState1.strategy.measurementPurpose" />
              </a-form-item>
              <a-form-item :name="['strategy', 'softwareBlockSize']" label="软件块规模" :rules="[{ required: true }]">
                <a-input v-model:value="formState1.strategy.softwareBlockSize" />
              </a-form-item>
              <a-form-item :name="['strategy', 'softwareBlockDecompositionLevel']" label="软件块的分解级别" :rules="[{ required: true }]">
                <a-input v-model:value="formState1.strategy.softwareBlockDecompositionLevel" />
              </a-form-item>
              <a-form-item :name="['strategy', 'softwareBlockFunctionalUser']" label="软件块的功能用户" :rules="[{ required: true }]">
                <a-input v-model:value="formState1.strategy.softwareBlockFunctionalUser" />
              </a-form-item>
              <a-form-item :name="['strategy', 'softwareArchitectureLevel']" label="所处软件架构中的层次" :rules="[{ required: true }]">
                <a-input v-model:value="formState1.strategy.softwareArchitectureLevel" />
              </a-form-item>
            </a-form>
              
        <!-- </div> -->
              <!-- <div>
                <pre>{{ formState1.strategy }}</pre>
              </div> -->
                <!-- <a-form
                    ref="formRef"
                    name="custom-validation"
                    :model="formState"
                    :rules="rules"
                    v-bind="layout"
                >
                    <a-form-item has-feedback label="Password" name="pass">
                    <a-input v-model:value="formState.pass" type="password" autocomplete="off" />
                    </a-form-item>
                    <a-form-item has-feedback label="Confirm" name="checkPass">
                    <a-input v-model:value="formState.checkPass" type="password" autocomplete="off" />
                    </a-form-item>
                    <a-form-item has-feedback label="Age" name="age">
                    <a-input-number v-model:value="formState.age" />
                    </a-form-item>
                    <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
                    <a-button type="primary" html-type="submit">Submit</a-button>
                    <a-button style="margin-left: 10px" @click="resetForm">Reset</a-button>
                    </a-form-item>
                </a-form> -->
            </div>
        <!-- <div ref="content2"> -->
            <div v-if="current==1" ref="content2">
              <h2>
                识别功能处理
              </h2>
              <p>功能规模度量(FSM)范围内识别的每个功能处理应该具备以下特点：
              </p>
              <p>1. 源自至少一个可识别的功能用户需求（FUR）
              </p>
              <p>2. 由功能用户的输入数据移动触发，以通知功能处理它已检测到触发事件
              </p>
              <p>3. 至少包含两个数据移动，通常是一个输入加一个输出或写
              </p>
              <p>4. 属于且仅属于一个层级
              </p>
              <p>5. 根据其功能用户需求（FUR），当需要达到某个时间点时是已结束的状态。
              </p>
<!--              输入数据及变量尚未考虑，后面统一处理  and 理论上需要可变数目的输入项，这儿先用一个大输入框代替，进行分行，后面需要的话再改 -->
              <a-form-item :name="['input', 'functionprocessing']" label="输入分析得到的功能处理（每行输入一个功能处理项）：">
                <a-textarea v-model:value="formState2.input.functionprocessing" />
              </a-form-item>
              <!-- <a-form-item :wrapper-col="{ ...layout.wrapperCol, offset: 8 }">
                <a-button type="primary" html-type="submit">Submit</a-button>
              </a-form-item> -->
        <!-- </div> -->
              <!-- <div>
                <pre>{{ formState2.input.functionprocessing }}</pre>
              </div> -->
            </div>
        <!-- <div ref="content3"> -->
            <div v-if="current==2" ref="content3">
                <!-- <h2>
                    识别数据则
                </h2>
                <p class="content">度量阶段
                </p>
                <a-form
                    :model="formState"
                    v-bind="layout"
                    name="nest-messages"
                    :validate-messages="validateMessages"
                >
                    <a-form-item :name="['user', 'name']" label="Name" :rules="[{ required: true }]">
                    <a-input v-model:value="formState.user.name" />
                    </a-form-item>
                    <a-form-item :name="['user', 'email']" label="Email" :rules="[{ type: 'email' }]">
                    <a-input v-model:value="formState.user.email" />
                    </a-form-item>
                   <a-form-item :name="['user', 'age']" label="Age" :rules="[{ type: 'number', min: 0, max: 99 }]">
                    <a-input-number v-model:value="formState.user.age" />
                    </a-form-item>
                    <a-form-item :name="['user', 'website']" label="Website">
                    <a-input v-model:value="formState.user.website" />
                    </a-form-item>
                    <a-form-item :name="['user', 'introduction']" label="Introduction">
                    <a-textarea v-model:value="formState.user.introduction" />
                    </a-form-item>
                    <a-form-item :wrapper-col="{ ...layout.wrapperCol, offset: 8 }">
                    <a-button type="primary" html-type="submit">Submit</a-button>
                    </a-form-item>
                </a-form> -->
                <p>功能规模度量(FSM)范围中识别的每个数据组应该：
                </p>
                <p class="content">1. 通过其独一无二的数据属性的集合而具有唯一性和可区分性
                </p>
                <p class="content">2. 直接关联到软件功能用户需求（FUR）中描述的某个兴趣对象
                </p>
                <p class="content">2. 直接关联到软件功能用户需求（FUR）中描述的某个兴趣对象
                </p>
                <p class="content"> ⭕注：兴趣对象可以是任何物理对象，也可以是功能用户世界中的任意概念对象或是概念（包括但不局限于，软件应用、人、传感器或其他硬件）
                </p>
                <p class="content"> ⭕注：功能处理内部的常量或变量，或计算过程的中间结果，或是由功能处理直接从实现结果得到而不是从功能用户需求（FUR）中得到而存储的数据，都不是数据组
                </p>
                <a-form
                    :model="formState2"
                    v-bind="layout"
                    name="nest-messages"
                    :validate-messages="validateMessages"
                >
                    <a-form-item :name="['input', 'dataItem']" label="识别到的数据项">
                    <a-textarea v-model:value="formState2.input.dataItem" />
                    </a-form-item>
                </a-form>
        <!-- </div> -->
                <!-- <div>
                <pre>{{ formState2.input.dataItem }}</pre>
                </div> -->
            </div>
        <!-- <div ref="content4"> -->
            <div v-if="current==3" ref="content4">
                <p>步骤二中识别的每个功能处理应该分解成部件，即数据移动（包括输入、输出、读、写）。
                </p>
                <p class="content">对于任何一个功能处理，按照功能用户需求（FUR）的要求，输入的描述了同一个兴趣对象的所有数据都应该被识别并计算为一个单独的输入，除非FUR明确要求同一个兴趣对象的数据在同一个功能处理中被多次输入。相似地，对于按照功能用户需求（FUR）描述某个兴趣对象的输出、读或写数据移动都应该被一样地识别和计数，除非在FUR中明确表示，在同一个功能处理中，需要多次输出、读或写同一个兴趣对象的数据。
                </p>
                <div class="image-center">
                    <a-image
                        src="http://blog.nsfocus.net/wp-content/uploads/2018/06/4-4.png"
                    />
                    <!-- <a-image
                        src="./images/4-4.png"
                    /> -->
                </div>
                <div>
    <a-button type="primary" @click="addRow">新增行</a-button>
    <a-table :columns="columns" :data-source="tableData" row-key="id" :pagination="false" :row-selection="rowSelection">
        <template #inputs="{ text, record, index }">
            <a-input v-model="tableData[index].input" @change="updateTotal(index, 'input', $event.target.value)" />
</template>
<template #outputs="{ text, record, index }">
            <a-input v-model="tableData[index].output" @change="updateTotal(index, 'output', $event.target.value)" />
</template>

<template #reads="{ text, record, index }">
            <a-input v-model="tableData[index].read" @change="updateTotal(index, 'read', $event.target.value)" />
</template>
<template #writes="{ text, record, index }">
            <a-input v-model="tableData[index].write" @change="updateTotal(index, 'write', $event.target.value)" />
</template>
      <template #statistics="scope">
        {{ scope.record.total }}
      </template>
    </a-table>
  </div>
                <div class="content">数据输入个数分别为：
                    <!-- <a-form
                    :model="formState2"
                    v-bind="layout"
                    name="nest-messages"
                    :validate-messages="validateMessages"
                    >
                    <a-form-item :name="['input', 'input']" label="输入" :rules="[{ type: 'number', min: 0, max: 99 }]">
                    <a-input-number v-model:value="formState2.input.input" />
                    </a-form-item>
                    <a-form-item :name="['input', 'output']" label="输出" :rules="[{ type: 'number', min: 0, max: 99 }]">
                    <a-input-number v-model:value="formState2.input.output" />
                    </a-form-item>
                    <a-form-item :name="['input', 'write']" label="写" :rules="[{ type: 'number', min: 0, max: 99 }]">
                    <a-input-number v-model:value="formState2.input.write" />
                    </a-form-item>
                    <a-form-item :name="['input', 'read']" label="读" :rules="[{ type: 'number', min: 0, max: 99 }]">
                    <a-input-number v-model:value="formState2.input.read" />
                    </a-form-item>
                </a-form> -->
                <a-form-item :name="['input', 'input']" label="输入" :rules="[{ type: 'number', min: 0, max: 99 }]">
                    <a-input-number v-model:value="sumInput" />
                    </a-form-item>
                    <a-form-item :name="['input', 'output']" label="输出" :rules="[{ type: 'number', min: 0, max: 99 }]">
                    <a-input-number v-model:value="sumOutput" />
                    </a-form-item>
                    <a-form-item :name="['input', 'write']" label="写" :rules="[{ type: 'number', min: 0, max: 99 }]">
                    <a-input-number v-model:value="sumWrite" />
                    </a-form-item>
                    <a-form-item :name="['input', 'read']" label="读" :rules="[{ type: 'number', min: 0, max: 99 }]">
                    <a-input-number v-model:value="sumRead" />
                    </a-form-item>
                </div>
        <!-- </div> -->
                <!-- <div>
                <pre>input:  {{ formState2.input.input }}</pre>
                <pre>output:  {{ formState2.input.output }}</pre>
                <pre>write:  {{ formState2.input.write }}</pre>
                <pre>read:  {{ formState2.input.read }}</pre>
                </div> -->
                
            </div>
        <!-- <div ref="content5"> -->
            <div v-if="current==4" ref="content5">
                <p class="content"> 对于并非以数据移动为主的软件，如果觉得基本的COSMIC方法有所不足，可以可以为例外的功能（如为了解决复杂算法的度量问题时）设置一个本地化标准。
                </p>
                <p class="content"> ----示例：“在我们组织中，诸如《算法示例列表》的数学算法计作1个本地FP。《另一个算法示例列表》计作2个本地FP。”
                </p>
                <p class="content"> 可给出一个可加行的列表，每行有三列：本土化规模类别名称、FP记数、出现次数
                </p>
                <p class="content"> 得到软件块的功能规模（拓展）为：y LocalFP
                </p>
                <a-form-item :name="['input', 'LocalFP']" label="LocalFP" :rules="[{ type: 'LocalFP' }]">
                    <a-input v-model:value="formState2.input.LocalFP" />
                 </a-form-item>
        <!-- </div> -->
                 <!-- <div>
                    <pre>LocalFP:  {{ formState2.input.LocalFP }}</pre>
                </div> -->
            </div>
        <!-- <div ref="content6"> -->
            <div v-if="current==5" ref="content6">
                <p class="content"> 基于上述实验过程，得到最终度量结果为：x CFP(5.0)+y LocalFP
                </p>
                <!-- <a-form-item :name="['user', 'SumFP']" label="CFP + LocalFP" :rules="[{ type: 'SumFP' }]">
                    <a-input v-model:value="formState.user.email" />
                </a-form-item> -->
                <a-form-item :name="['output', 'SumFP']" label="CFP + LocalFP" :rules="[{ type: 'number', message: 'sunFP为' }]">
                    <a-input v-model:value="sumFP" />
                </a-form-item>
            </div>
        <!-- </div> -->
        <!-- <div ref="content7"> -->
            <div v-if="current==6" ref="content7">
                <h2>
                    思考题
                </h2>
                <p>
                    COSMIC方法是目前功能点度量最先进的方法，也是最简单易用的方法。
                    但是，也有很多软件工程师在使用功能点方法时，认为该方法需要学习一些规则，需要经过训练，不够简便，因此想寻求一种更简单快速的方法。
                    这种探索的精神值得提倡，但是自己探索的方法必须要合理且要具备一定的科学性与适用性。
                    请你思考如何评估一个规模度量方法的合理性与科学性，并给出思路与方法。
                </p>
                <p>
                    答案：判断采用这种方法度量的规模数据与实际工作量数据之间的相关性
                </p>
            </div>
        <!-- </div> -->
        <!-- <div ref="content8"> -->
            <div v-if="current==7" ref="content8">
                <div>
                    实验心得
                    <a-form
                    :model="formState2"
                    v-bind="layout"
                    name="nest-messages"
                    :validate-messages="validateMessages"
                >
                    <a-form-item :name="['input', 'experience']" label="实验心得" :rules="[{ required: true }]">
                    <a-textarea v-model:value="formState2.input.experience" />
                    </a-form-item>

                </a-form>
                </div>
        <!-- </div> -->
                <!-- <div>
                    <pre> {{ formState2.input.experience }} </pre>
                </div> -->
            </div>
        </div>
        <div class="steps-action">
        <a-button v-if="current < steps.length - 1" type="primary" style="float: right;" @click="next"><step-forward-outlined />Next</a-button>
        <a-button
            v-if="current == steps.length - 1"
            type="primary"
            style="float: right;"
            @click="generatePDF1"
        >
            Done
            <!-- @click="message.success('Processing complete!')" -->
        </a-button>
        <a-button v-if="current > 0" style="margin-left: 8px" @click="prev"><step-backward-outlined />Previous</a-button>
        </div>
    </div>


</template>


<script lang="ts">
import { Document } from '@element-plus/icons-vue'
import { ref } from 'vue';
import { message } from 'ant-design-vue';
//import type { FormInstance } from 'ant-design-vue';
//import type { Rule } from 'ant-design-vue/es/form';
import { reactive } from 'vue';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable'
import html2canvas from 'html2canvas';
import html2pdf from 'html2pdf.js';

export default {
    name: 'Exp1_COSMIC',
    data() {
        return{     
            test:'21111',
            sum:'',
            visible: false,
            experimentdate: 0,//实验时间
            reportername: '',//实验人姓名
            current: 0,
            message,
            // formRef: ref(),
            // formState: reactive({
            //     pass: '',
            //     checkPass: '',
            //     age: undefined,
            // }),
            // rules: {
            //     pass: [{ required: true, validator: validatePass, trigger: 'change' }],
            //     checkPass: [{ validator: validatePass2, trigger: 'change' }],
            //     age: [{ validator: checkAge, trigger: 'change' }],
            // },
            layout: {
                labelCol: {
                    span: 4,
                },
                wrapperCol: {
                    span: 16,
                },
            },
            deadline: Date.now() + 1000 * 60 * 60 * 20 * 2,
            validateMessages: {
                required: '${label} is required!',
                types: {
                    email: '${label} is not a valid email!',
                    number: '${label} is not a valid number!',
                },
                number: {
                    range: '${label} must be between ${min} and ${max}',
                },
            },
            tableData: [],
      idCounter: 0,
      rowSelection: {
        onChange: (selectedRowKeys) => {
          console.log('Selected Row Keys:', selectedRowKeys);
        },
      },
      columns: [
        { title: '功能处理', dataIndex: 'process', key: 'process' },
        { title: '输入', dataIndex: 'input', key: 'input', slots: { customRender: 'inputs' } },
        { title: '输出', dataIndex: 'output', key: 'output', slots: { customRender: 'outputs' } },
        { title: '读', dataIndex: 'read', key: 'read', slots: { customRender: 'reads' } },
        { title: '写', dataIndex: 'write', key: 'write', slots: { customRender: 'writes' } },
        { title: '统计', dataIndex: 'total', key: 'total', slots: { customRender: 'statistics' } },
      ],
            formState: reactive({
                user: {
                    name: '',
                    age: undefined,
                    email: '',
                    website: '',
                    introduction: '',
                    input: undefined,
                    output: undefined,
                    write: undefined,
                    read: undefined,
                    shujuxiang: '',
                    experience: '',
                    LocalFP: '',
                    SumFP: '',
                },
            }),
            strategy: {
                    measurementPurpose: '',
                    softwareBlockSize: '',
                    softwareBlockDecompositionLevel: '',
                    softwareBlockFunctionalUser: '',
                    softwareArchitectureLevel: '',
            },
            formState1: reactive({
                strategy: {
                    measurementPurpose: '',
                    softwareBlockSize: '',
                    softwareBlockDecompositionLevel: '',
                    softwareBlockFunctionalUser: '',
                    softwareArchitectureLevel: '',
                },
            }),
            formState2: reactive({
                input: {
                    functionprocessing: '',
                    dataItem: '',
                    input: 0,
                    output: 0,
                    write: 0,
                    read: 0,
                    LocalFP: '',
                    experience: '',
                },
            }),
            content: [],
            steps: [{
                title: '确定度量策略参数',
                content: 'First-content',
            }, {
                title: '识别功能处理',
                content: 'Second-content',
            }, {
                title: '识别数据组',
                content: 'Third-content',
            },
            {
                title: '计算数据移动',
                content: 'Fourth-content',
            },
            {
                title: '进行本土化扩展(选做)',
                content: 'Fifth-content',
            },
            {
                title: '得到度量结果',
                content: 'Sixth-content',
            },
            {
                title: '思考题',
                content: 'Seventh-content',
            },
            {
                title: '实验心得',
                content: 'Last-content',
            }],
            // tableData: [
            //     {
            //         component: 'EI',
            //         number: '2',
            //         A: '',
            //         B: '3',
            //         C: '',
            //         D: '',
            //         E: '4',
            //         F: '',
            //         G: '',
            //         H: '6',
            //         I: '',
            //         nonum:'',
            //     },
            //     {
            //         component: 'EO',
            //         number: '2',
            //         A: '',
            //         B: '4',
            //         C: '',
            //         D: '',
            //         E: '5',
            //         F: '',
            //         G: '',
            //         H: '7',
            //         I: '',
            //         nonum:'',
            //     },
            //     {
            //         component: 'EQ',
            //         number: '2',
            //         A: '',
            //         B: '3',
            //         C: '',
            //         D: '',
            //         E: '4',
            //         F: '',
            //         G: '',
            //         H: '6',
            //         I: '',
            //         nonum:'',
            //     },
            //     {
            //         component: 'ILF',
            //         number: '2',
            //         A: '',
            //         B: '7',
            //         C: '',
            //         D: '',
            //         E: '10',
            //         F: '',
            //         G: '',
            //         H: '15',
            //         I: '',
            //         nonum:'',
            //     },
            //     {
            //         component: 'EIF',
            //         number: '2',
            //         A: '',
            //         B: '5',
            //         C: '',
            //         D: '',
            //         E: '7',
            //         F: '',
            //         G: '',
            //         H: '10',
            //         I: '',
            //         nonum:'',
            //     },
            // ],
        }
    },
    computed: {
    sumFP() {
      const { functionprocessing, dataItem, input, output, write, read, LocalFP, experience } = this.formState2.input;
      const regex = /\d+/g;
      const numbers = LocalFP.match(regex);
      const sum = numbers.reduce((acc, cur) => acc + Number(cur), 0);
      return Number(input) + Number(output) + Number(write) + Number(read) + sum;
    //   const sum = Number(intpu) + Number(output) + Number(write) + Number(read) + Number(LocalFP);
    //   console.log('LocalFP:', LocalFP, typeof LocalFP);
    //   return sum;
    },
    sumInput() {
      //将tableData中的input列的值相加
        let sum = 0;
        for (let i = 0; i < this.tableData.length; i++) {
            sum += parseInt(this.tableData[i].input);
        }
        this.formState2.input.input = sum;
        return sum;
    },
    sumOutput() {
      //将tableData中的output列的值相加
        let sum = 0;
        for (let i = 0; i < this.tableData.length; i++) {
            sum += parseInt(this.tableData[i].output);
        }
        this.formState2.input.output = sum;
        return sum;
    },
    sumRead() {
      //将tableData中的read列的值相加
        let sum = 0;
        for (let i = 0; i < this.tableData.length; i++) {
            sum += parseInt(this.tableData[i].read);
        }
        this.formState2.input.read = sum;
        return sum;
    },
    sumWrite() {
      //将tableData中的write列的值相加
        let sum = 0;
        for (let i = 0; i < this.tableData.length; i++) {
            sum += parseInt(this.tableData[i].write);
        }
        this.formState2.input.write = sum;
        return sum;
    },
    calculateTotal() {
      let total = 0;
      for (const row of this.tableData) {
        const input = parseInt(row.input);
        const output = parseInt(row.output);
        const read = parseInt(row.read);
        const write = parseInt(row.write);
        if (!isNaN(input)) total += input;
        if (!isNaN(output)) total += output;
        if (!isNaN(read)) total += read;
        if (!isNaN(write)) total += write;
        row.total = total;
      }
      console.log('total:', total);
      return total;
    },
  },
    methods:{
        showDrawer() {
            this.visible = true;
            const content_2 = this.$refs.content_2;
            this.content.push(content_2);
        },
        created() {
    const functionProcessings = this.formState2.input.functionprocessing.split('\n');
    for (let i = 0; i < functionProcessings.length; i++) {
      const processing = functionProcessings[i].trim();
      const newRow = {
        id: this.idCounter++,
        process: processing,
        input: 0,
        output: 0,
        read: 0,
        write: 0,
        total: 0,
      };
      this.tableData.push(newRow);
    }
    console.log("钩子函数创建")
  },
        next() {
            if(this.current == 0){
                const content_1 = this.$refs.content_1;
                this.content.push(content_1);
                
                const content1 = this.$refs.content1;
                this.content.push(content1);
                
            }
            if(this.current == 1){
                const content2 = this.$refs.content2;
                this.content.push(content2);
            }
            if(this.current == 2){
                const content3 = this.$refs.content3;
                this.content.push(content3);
                this.created();
            }
            if(this.current == 3){
                const content4 = this.$refs.content4;
                this.content.push(content4);
            }
            if(this.current == 4){
                const content5 = this.$refs.content5;
                this.content.push(content5);
            }
            if(this.current == 5){
                const content6 = this.$refs.content6;
                this.content.push(content6);
            }
            if(this.current == 6){
                const content7 = this.$refs.content7;
                this.content.push(content7);
            }
            if(this.current == 7){
                const content8 = this.$refs.content8;
                this.content.push(content8);
            }
            this.current++;
            // this.generatePDF1();
            
        },
        prev() {
            if(this.current == 0){
                const content1 = this.$refs.content1;
                this.content.push(content1);
            }
            if(this.current == 1){
                const content2 = this.$refs.content2;
                this.content.push(content2);
            }
            if(this.current == 2){
                const content3 = this.$refs.content3;
                this.content.push(content3);
            }
            if(this.current == 3){
                const content4 = this.$refs.content4;
                this.content.push(content4);
            }
            if(this.current == 4){
                const content5 = this.$refs.content5;
                this.content.push(content5);
            }
            if(this.current == 5){
                const content6 = this.$refs.content6;
                this.content.push(content6);
            }
            if(this.current == 6){
                const content7 = this.$refs.content7;
                this.content.push(content7);
            }
            if(this.current == 7){
                const content8 = this.$refs.content8;
                this.content.push(content8);
            }
            this.current--;
        },
        // checkAge = async (_rule, value) => {
        //     if (!value) {
        //         return Promise.reject('Please input the age');
        //     }
        //     if (!Number.isInteger(value)) {
        //         return Promise.reject('Please input digits');
        //     } else {
        //         if (value < 18) {
        //         return Promise.reject('Age must be greater than 18');
        //         } else {
        //         return Promise.resolve();
        //         }
        //     }
        // },
        // validatePass = async (_rule, value) => {
        //     if (value === '') {
        //         return Promise.reject('Please input the password');
        //     } else {
        //         if (this.formState.checkPass !== '') {
        //         formRef.value.validateFields('checkPass');
        //         }
        //         return Promise.resolve();
        //     }
        // },
        // validatePass2 = async (_rule, value) => {
        //     if (value === '') {
        //         return Promise.reject('Please input the password again');
        //     } else if (value !== this.formState.pass) {
        //         return Promise.reject("Two inputs don't match!");
        //     } else {
        //         return Promise.resolve();
        //     }
        // },
        // resetForm() {
        //     this.formRef.value.resetFields();
        // },
        onFinish() {
            console.log('finished!');
            message.info('time is over!');
        },
        
        updated() {
        // 用于防止表格合计行不显示
        	this.$nextTick(() => {
        	   this.$refs['detailTable'].doLayout();
        	})
        },
        pdfHandle(){        
            window.open('/#/show',"_blank")
        },
        getSummaries(param,val){
            const {columns, data}=param;
            const sums=[];
            columns.forEach((column,index) => {
                if(index===0){
                    sums[index]=(()=>{
                        // let el=<p>未调整功能点</p>
                    })();
                    return;
                }
                if(index===11){
                    sums[index]=(()=>{
                        // let num=<p >￥{this.tableData[val].nonum.toFixed(2)}</p>
                        // return num;
                    })();
                    return;
                }
            });
            return sums;
        },
        count(){
        },
        addRow() {
            const newRow = {
        id: this.idCounter++,
        process: '',
        input: 0,
        output: 0,
        read: 0,
        write: 0,
        total: 0,
      };
      this.tableData.push(newRow);
    },
    // updateTotal(rowIndex, property, value) {
        updateTotal(index, field, value) {
    //   console.log('rowIndex', rowIndex-1);
    //   const rowData = this.tableData[rowIndex-1];
    //   console.log('rowData', rowData);
    //   rowData[property] = value;
    //   const { id, process, input, output, read, write, total } = rowData;
    //   rowData.total = Number(input) + Number(output) + Number(read) + Number(write);
        this.tableData[index][field] = value;
        console.log('tableData', this.tableData[index][field]);
        const rowData = this.tableData[index];
        const { id, process, input, output, read, write, total } = rowData;
        rowData.total = Number(input) + Number(output) + Number(read) + Number(write);
    },
        generatePDF() {
            // 创建一个新的 jsPDF 实例
            const doc = new jsPDF();

            // 添加标题
            doc.setFontSize(20);
             doc.text('Form Data', 10, 10);

            // 添加表格
            const data = [
                ['measurementPurpose', this.formState1.strategy.measurementPurpose],
                ['softwareBlockSize', this.formState1.strategy.softwareBlockSize],
                ['softwareBlockDecompositionLevel', this.formState1.strategy.softwareBlockDecompositionLevel],
                ['softwareBlockFunctionalUser', this.formState1.strategy.softwareBlockFunctionalUser],
                ['softwareArchitectureLevel', this.formState1.strategy.softwareArchitectureLevel],
                ['input', this.formState2.input.input],
                ['output', this.formState2.input.output],
                ['write', this.formState2.input.write],
                ['read', this.formState2.input.read],
                ['LocalFP', this.formState2.input.LocalFP],
                ['experience', this.formState2.input.experience],
            ];
            autoTable(doc,{
                startY: 20,
                head: [['Field', 'Value']],
                body: data,
            });

            // 保存 PDF 文件
            doc.save('Form Data.pdf');
        },
        // 在生成 PDF 之前预加载所有图片
preloadImages(images) {
  const promises = images.map((src) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = resolve;
      img.onerror = reject;
      img.src = src;
    });
  });

  return Promise.all(promises);
},
        generatePDF1() {
            // const content = this.$refs.content;
            // html2pdf().from(content).save('Form Data.pdf');
            // // 要转换为 PDF 的多个内容
            // const contents = [this.$refs.content1, this.$refs.content2, this.$refs.content3, this.$refs.content4, this.$refs.content5, this.$refs.content6, this.$refs.content7, this.$refs.content8];
            this.generatePDF();
            const content8 = this.$refs.content8;
            this.content.push(content8);

            // 创建一个空白的 HTML 元素，用于存储所有内容
            const container = document.createElement('div');

            /// 设置内容之间的间距
            const spacing = 10; // 间距大小，单位为像素
            let topOffset = 0; // 初始的上偏移量

            // 将所有内容追加到容器中，并设置间距
            this.content.forEach((content) => {
            // 创建一个包装元素用于设置间距
            const wrapper = document.createElement('div');
            wrapper.style.marginBottom = `${spacing}px`; // 设置下边距

            // 将内容添加到包装元素中
            wrapper.appendChild(content);

            // 设置包装元素的位置
            wrapper.style.position = 'relative';
            wrapper.style.top = `${topOffset}px`;

            // 更新上偏移量
            topOffset += spacing;

            // 将包装元素添加到容器中
            container.appendChild(wrapper);
            });

            html2pdf().from(container).set({ margin: [0, 20] }).save('Merged Content.pdf');
            // 在生成 PDF 之前预加载图片资源
// const imageUrls = ['./image/4-4.png']; // 将图片 URL 替换为实际的图片 URL
// this.preloadImages(imageUrls).then(() => {
//   // 所有图片加载完成后执行转换操作
//   html2pdf().from(container).set({ margin: [0, 20] }).save('Merged Content.pdf');
// });



            //使用 html2pdf.js 将容器内的内容转换为 PDF 文件
            // html2pdf().from(container).save('Merged Content.pdf');


            // // 获取要转换为 PDF 的内容
            // const content1 = this.$refs.content1;
            // const content2 = this.$refs.content2;
            // const content3 = this.$refs.content3;
            // const content4 = this.$refs.content4;
            // const content5 = this.$refs.content5;
            // const content6 = this.$refs.content6;
            // const content7 = this.$refs.content7;
            // const content8 = this.$refs.content8;
            // console.log("开始转换");

            // // 创建一个新的 jsPDF 实例
            // const doc = new jsPDF();

            // // 定义图像的位置和大小
            // const x = 10;
            // const y = 10;
            // const width = 180;
            // const height = 150;

            // // 将 HTML 元素转换为 Canvas，并将 Canvas 添加到 PDF 文件中
            // html2canvas(this.$refs.content1).then(canvas1 => {
            // doc.addImage(canvas1.toDataURL('image/png'), 'PNG', x, y, width, height);

            //     html2canvas(this.$refs.content2).then(canvas2 => {
            //     doc.addImage(canvas2.toDataURL('image/png'), 'PNG', x, y + height + 10, width, height);

            //     html2canvas(this.$refs.content3).then(canvas3 => {
            //         doc.addImage(canvas3.toDataURL('image/png'), 'PNG', x, y + height * 2 + 20, width, height);

            //         html2canvas(this.$refs.content4).then(canvas4 => {
            //         doc.addImage(canvas4.toDataURL('image/png'), 'PNG', x, y + height * 3 + 30, width, height);

            //         html2canvas(this.$refs.content5).then(canvas5 => {
            //             doc.addImage(canvas5.toDataURL('image/png'), 'PNG', x, y + height * 4 + 40, width, height);

            //             html2canvas(this.$refs.content6).then(canvas6 => {
            //             doc.addImage(canvas6.toDataURL('image/png'), 'PNG', x, y + height * 5 + 50, width, height);

            //             html2canvas(this.$refs.content7).then(canvas7 => {
            //                 doc.addImage(canvas7.toDataURL('image/png'), 'PNG', x, y + height * 6 + 60, width, height);

            //                 html2canvas(this.$refs.content8).then(canvas8 => {
            //                 doc.addImage(canvas8.toDataURL('image/png'), 'PNG', x, y + height * 7 + 70, width, height);

            //                 // 保存 PDF 文件
            //                 doc.save('images.pdf');
            //                 });
            //             });
            //             });
            //         });
            //         });
            //     });
            //     });
            // });
        },

    }
}
</script>

<style scoped>
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
.steps-content {
  margin-top: 16px;
  border: 1px dashed #e9e9e9;
  border-radius: 6px;
  background-color: #fafafa;
  min-height: 200px;
  text-align: left;
  padding-top: 10px;
}

.image-center {
  margin-top: 16px;
  border: 1px dashed #e9e9e9;
  border-radius: 16px;
  background-color: #fafafa;
  min-height: 200px;
  text-align: center;
  padding-top: 10px;
}

.steps-action {
  margin-top: 24px;
}

[data-theme='dark'] .steps-content {
  background-color: #2f2f2f;
  border: 1px dashed #404040;
}
</style>