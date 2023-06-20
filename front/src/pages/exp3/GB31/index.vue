<template>
  <div>
    <!-- <a-button type="primary" shape="circle">
    </a-button>
    <div class="top-button-container">
        <a-button type="primary" class="custom-button" shape="round">
          <template #icon>
            <ExperimentOutlined />
          </template>
          在线浏览实验指导书
        </a-button>
    </div> -->
    <div style="padding-top:60px;padding-bottom:20px">
        <a-config-provider>
            <p style="line-height:200%;font-size: 16px;">
                <a-row justify="center">
                    <a-col span="6">课程名称：软件工程经济学</a-col>
                    <a-col span="6">课号：420279</a-col>
                    <a-col span="6">实验项目名称：软件测试成本估算国家GB标准</a-col>
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
    <!-- <span> {{ test }}</span> -->
    <h2>一、实验目的  </h2>
    <p class="content">理解软件项目测试成本估算原理，掌握国家GB标准软件项目测试成本估算方法。 学生应以小组为单位，根据本小组“软件工程管理与经济”课程设计项目架构及组件等设计成果，以GB国家标准方法测量该项目的测试成本。 本实验为课内设计性实验项目，实验学时 1 学时，完成实验报告 1 学时。
    </p>
    <!-- <span> {{ test }}</span> -->
    <h2>二、实验内容  </h2>
    <p class="content">学生应首先阅读教师下发的课程实验材料并阅读其中的关于国家GB标准软件项目测试成本估算方法的相关文件，并按照实验指导书上的内容按步骤在网站上完成相应实验参数的填写和计算，最后将所得的内容汇总为实验报告文件进行上传。
    </p>
    <!-- <span> {{ test }}</span> -->
    <h2>三、实验原理  </h2>
    <p class="content">理解软件项目测试成本估算原理，掌握软件项目测试成本估算方法。 学生应以小组为单位，根据本小组“软件工程管理与经济”课程设计项目架构及组件等设计成果，以GB国家标准方法测量该项目的测试成本。 本实验为课内设计性实验项目，实验学时 1 学时，完成实验报告 1 学时。
    </p>
    <p class="content">第一步：计算直接成本</p>
    <p class="content">直接成本由测试环境成本、测试工具成本以及测试人工成本三个部分组成。
      <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;测试环境成本包括测试所需要的硬件环境成本、测试所需要的软件环境成本、
      开发测试所需要的硬件环境成本、开发测试所需要的软件环境成本等。
      <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;测试工具成本是为测试而购买的测试软件和测试设备的费用以及在测试过程中
      使用已有设备的折旧费用和维护费用。
      <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;测试人工成本包括测试项目组成员的工资、奖金、福利等人力资源费用。其中，
      项目组成员包括参与该项目测试过程的所有测试或支持人员，如项目经理、需求分析人员、设计人员、测试人员、部署人员等。对于非全
      职投入该项目测试工作的人员，按照项目工作量所占其总工作量比例折算其人力资源费用。测试人工成本由产品说明评审、用户文档集评审
      以及软件测试3部分组成。
    </p>
    <p class="content">第二步：计算间接成本</p>
    <p class="content">软件测试间接成本包括办公成本和管理成本。其中，办公成本是测试人员为了测试某个项目而产生的行政办公费用，
      管理成本是确保测试在软件生存周期内得到顺利实施，并达到预期的效果产生的费用。该两项的具体数值也请参考由教师下发的实验指导书
      中的内容
    </p>
    <p class="content">第三步：计算测试成本调整因子</p>
    <p class="content">软件测试成本调整因子的计算包括以下几个部分：
      <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;i. 软件复杂性——软件复杂性可以从软件规模、难度和结构等方面进行度量。软件复杂性
      的调整因子的取值范围如表1所示。被测软件的复杂性可按照以下特性来进行度量：
      <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. 存在大量的控制或者安全措施；
      <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. 系统规模较大，子模块较多且相互影响关联，或需与其他系统对接使用；
      <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. 非简体中文软件；
      <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4. 存在大量的逻辑处理或处理过程复杂；
      <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5. 存在大量的数学处理或算法复杂。
    </p>
    <h2 class="firsttitle">四、实验步骤 </h2>
    <!-- <p class="content" > -->
    <p class="secondtitle">第一步：计算直接成本</p>
    <p class="content">直接成本由测试环境成本、测试工具成本以及测试人工成本三个部分组成。
      <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;测试环境成本包括测试所需要的硬件环境成本、测试所需要的软件环境成本、
      开发测试所需要的硬件环境成本、开发测试所需要的软件环境成本等，该值请参考由教师下发的实验指导书中的相关内容。
      <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;测试工具成本是为测试而购买的测试软件和测试设备的费用以及在测试过程中
      使用已有设备的折旧费用和维护费用。该值也请参考由教师下发的实验指导书中的相关内容。
      <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;测试人工成本包括测试项目组成员的工资、奖金、福利等人力资源费用。其中，
      项目组成员包括参与该项目测试过程的所有测试或支持人员，如项目经理、需求分析人员、设计人员、测试人员、部署人员等。对于非全
      职投入该项目测试工作的人员，按照项目工作量所占其总工作量比例折算其人力资源费用。测试人工成本由产品说明评审、用户文档集评审
      以及软件测试3部分组成，这三部分的具体数值也请参考由教师下发的实验指导书中的相关内容。
      <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;请填写以下直接成本(DC)表:
    </p>
    <h2 style="text-align: center; margin-top: 3%;">表1: 直接成本(DC)表 </h2>
    <a-table bordered size="middle" style="word-break: break-all;" :data-source="dataSource1" :columns="columns"
      :pagination="false">
      <template #bodyCell="{ column, record }">
        <template v-if="column.dataIndex === 'value' && (record.key === 'IC' || record.key === 'EC')">
          <a-input-number placeholder="请输入正整数 (单位: 元)" v-model:value="record.value" :min="0"
            style="text-align: center; width:200px; " />
        </template>
        <template v-if="column.dataIndex === 'value' && record.key !== 'IC' && record.key !== 'EC'">
          <a-input-number placeholder="请输入正整数 (单位: 人日)" v-model:value="record.value" :min="0"
            style="text-align: center; width:200px; " />
        </template>
      </template>
    </a-table>
    
    <h2 style="font-size: 20px; margin-top: 3%;">实验平台根据输入的数据为您实时计算:
      <p class="text">UW = TW + SR + DR = {{ UWCalculator }} (人日)<br>
      </p>
    </h2>

    <p class="secondtitle">第二步：计算间接成本</p>
    <p class="content">软件测试间接成本包括办公成本和管理成本。其中，办公成本是测试人员为了测试某个项目而产生的行政办公费用，
      管理成本是确保测试在软件生存周期内得到顺利实施，并达到预期的效果产生的费用。该两项的具体数值也请参考由教师下发的实验指导书
      中的内容
      <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;请填写以下间接成本(IDC)表:
    </p>
    <h2 style="text-align: center;margin-top: 3%;">表2: 间接成本(IDC)表 </h2>
    <a-table bordered size="middle" style="word-break: break-all;" :data-source="dataSource2" :columns="columns"
      :pagination="false">
      <template #bodyCell="{ column, record }">
        <template v-if="column.dataIndex === 'value'">
          <a-input-number placeholder="请输入正整数 (单位: 元)" v-model:value="record.value" :min="0"
            style="text-align: center; width:200px; " />
        </template>
      </template>
    </a-table>
    <h2 style="font-size: 20px; margin-top: 3%;">实验平台根据输入的数据为您实时计算:
      <p class="text">LDC = BC + MC = {{ LDCCalculator }} (人日)<br>
      </p>
    </h2>

    <p class="secondtitle">第三步：计算测试成本调整因子</p>
    <p class="content">软件测试成本调整因子的计算包括以下几个部分：
      <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;i. 软件复杂性——软件复杂性可以从软件规模、难度和结构等方面进行度量。软件复杂性
      的调整因子的取值范围如表1所示。被测软件的复杂性可按照以下特性来进行度量：
      <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. 存在大量的控制或者安全措施；
      <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. 系统规模较大，子模块较多且相互影响关联，或需与其他系统对接使用；
      <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. 非简体中文软件；
      <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4. 存在大量的逻辑处理或处理过程复杂；
      <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5. 存在大量的数学处理或算法复杂。
    </p>
    <h2 style="text-align: center;margin-top: 3%;">表 1: 软件复杂性调整因子 </h2>
    <a-table bordered size="middle" style="word-break: break-all; margin-bottom: 1%;" :data-source="dataSource_fzyz"
      :columns="columns_fzyz" :pagination="false">
    </a-table>
    <p class="content">ii. 软件完整性——软件完整性级别是系统完整性级别在包含软件部件或仅包含软件部件或仅包含软件部件的子系统上的分配，
      具体如表2所示。
    </p>
    <h2 style="text-align: center;margin-top: 3%;">表 2: 软件完整性调整因子 </h2>
    <a-table bordered size="middle" style="word-break: break-all; margin-bottom: 1%;" :data-source="dataSource_wzyz"
      :columns="columns_wzyz" :pagination="false">
    </a-table>
    <p class="content">iii. 测试风险度——软件本身的复杂性以及测试的特点决定了测试活动中大量的风险存在，可能的测试风险由以下几部分组成：
      <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a）被测软件的领域有特殊需求；
      <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;b）测试需求不明确；
      <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;c）被测软件与测试文档不一致；
      <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;d）测试过程中测试方与开发方因沟通等而导致不可预计的风险。
      <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;根据上述测试风险，表3给出测试风险调整因子。
    </p>
    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;请填写测试风险调整因子表:
    <h2 style="text-align: center;margin-top: 3%;">表 3: 测试风险调整因子 </h2>
    <a-table bordered size="middle" style="word-break: break-all; margin-bottom: 1%;" :data-source="dataSource_fxyz"
      :columns="columns_fxyz" :pagination="false">
    </a-table>
    <p class="content">iv. 回归测试——回归测试是指修改了旧代码以后，重新进行测试以确认修改没有引入新的错误或导致其他代码发生错误。回归
      测试的调整因子范围为 0.6 ~ 0.8 。
    </p>
    <p class="content">v. 加急测试——加急测试可能引发增加测试人员或测试人员加班等现象，从而导致测试成本增加。加急测试的调整因子范围为 1.2 ~ 3.0 。
    </p>
    <p class="content">vi. 现场测试——现场测试由于测试环境离开了测试实验室而导致测试成本增加。现场测试的调整因子范围为 1.0 ~ 1.3 。
    </p>
    <p class="content">vii. 评测机构资质——依据评测机构所获得的国家、行业、地方授权的权威资质等进行调整。评测机构资质的调整因子范围为 1.0 ~ 1.2 。
    </p>
    <h2 style="text-align: center;margin-top: 3%;">表3: 测试成本调整因子及工作量单位表 </h2>
    <a-table :columns="columns" :pagination="false" :data-source="dataSource3" bordered size="middle"
      style="word-break: break-all;">
      <template #bodyCell="{ column, record }">
        <template v-if="column.dataIndex === 'value' && record.key == 'C'">
          <a-input-group compact>
            <a-select v-model:value="record.value">
              <a-select-option value="1.0">1.0</a-select-option>
              <a-select-option value="1.1">1.1</a-select-option>
              <a-select-option value="1.2">1.2</a-select-option>
              <a-select-option value="1.3">1.3</a-select-option>
              <a-select-option value="1.4">1.4</a-select-option>
              <a-select-option value="1.5">1.5</a-select-option>
            </a-select>
          </a-input-group>
        </template>
        <template v-if="column.dataIndex === 'value' && record.key == 'I'">
          <a-input-group compact>
            <a-select v-model:value="record.value">
              <a-select-option value="1.0">1.0</a-select-option>
              <a-select-option value="1.1">1.1</a-select-option>
              <a-select-option value="1.2">1.2</a-select-option>
              <a-select-option value="1.3">1.3</a-select-option>
              <a-select-option value="1.4">1.4</a-select-option>
              <a-select-option value="1.5">1.5</a-select-option>
              <a-select-option value="1.6">1.6</a-select-option>
              <a-select-option value="1.7">1.7</a-select-option>
              <a-select-option value="1.8">1.8</a-select-option>
            </a-select>
          </a-input-group>
        </template>
        <template v-if="column.dataIndex === 'value' && record.key == 'R'">
          <a-input-group compact>
            <a-select v-model:value="record.value">
              <a-select-option value="1.0">1.0</a-select-option>
              <a-select-option value="1.1">1.1</a-select-option>
              <a-select-option value="1.2">1.2</a-select-option>
              <a-select-option value="1.3">1.3</a-select-option>
              <a-select-option value="1.4">1.4</a-select-option>
              <a-select-option value="1.5">1.5</a-select-option>
            </a-select>
          </a-input-group>
        </template>
        <template v-if="column.dataIndex === 'value' && record.key == 'U'">
          <a-input-group compact>
            <a-select v-model:value="record.value">
              <a-select-option value="1.0">1.0</a-select-option>
              <a-select-option value="1.1">1.1</a-select-option>
              <a-select-option value="1.2">1.2</a-select-option>
              <a-select-option value="1.3">1.3</a-select-option>
              <a-select-option value="1.4">1.4</a-select-option>
              <a-select-option value="1.5">1.5</a-select-option>
              <a-select-option value="1.6">1.6</a-select-option>
              <a-select-option value="1.7">1.7</a-select-option>
              <a-select-option value="1.8">1.8</a-select-option>
              <a-select-option value="1.9">1.9</a-select-option>
              <a-select-option value="2.0">2.0</a-select-option>
              <a-select-option value="2.1">2,1</a-select-option>
              <a-select-option value="2.2">2.2</a-select-option>
              <a-select-option value="2.3">2.3</a-select-option>
              <a-select-option value="2.4">2.4</a-select-option>
              <a-select-option value="2.5">2.5</a-select-option>
              <a-select-option value="2.6">2.6</a-select-option>
              <a-select-option value="2.7">2.7</a-select-option>
              <a-select-option value="2.8">2.8</a-select-option>
              <a-select-option value="2.9">2.9</a-select-option>
              <a-select-option value="3.0">3.0</a-select-option>
            </a-select>
          </a-input-group>
        </template>
        <template v-if="column.dataIndex === 'value' && record.key == 'X'">
          <a-input-group compact>
            <a-select v-model:value="record.value">
              <a-select-option value="1.0">1.0</a-select-option>
              <a-select-option value="1.1">1.1</a-select-option>
              <a-select-option value="1.2">1.2</a-select-option>
              <a-select-option value="1.3">1.3</a-select-option>
            </a-select>
          </a-input-group>
        </template>
        <template v-if="column.dataIndex === 'value' && record.key == 'A'">
          <a-input-group compact>
            <a-select v-model:value="record.value">
              <a-select-option value="1.0">1.0</a-select-option>
              <a-select-option value="1.1">1.1</a-select-option>
              <a-select-option value="1.2">1.2</a-select-option>
            </a-select>
          </a-input-group>
        </template>
        <template v-if="column.dataIndex === 'value' && record.key == 'Tr'">
          <a-input-group compact>
            <a-select v-model:value="record.value">
              <a-select-option value="0.6">0.6</a-select-option>
              <a-select-option value="0.7">0.7</a-select-option>
              <a-select-option value="0.8">0.8</a-select-option>
            </a-select>
          </a-input-group>
        </template>
        <template v-if="column.dataIndex === 'value' && record.key === 'n'">
          <a-input-number placeholder="请输入正整数 (单位: 次)" v-model:value="record.value" :min="0"
            style="text-align: center; width:200px; " />
        </template>
        <template v-if="column.dataIndex === 'value' && record.key === 'S'">
          <a-input-number placeholder="请输入正整数 (单位: 元)" v-model:value="record.value" :min="0"
            style="text-align: center; width:200px; " />
        </template>
      </template>
    </a-table>

    <h2 style="font-size: 20px; margin-top: 3%;">实验平台根据输入的数据为您实时计算:
      <p class="text">DF = C * I * R * U * X * A * (1 + Tr * n)= {{ DFCalculator }}<br>
        LC = UW * DF * S = {{ LCCalculator }} (元)<br>
        DC = LC + EC + IC = {{ DCCalculator }} (元)<br>
        STC = DC + IDC ={{ STCCalculator }} (元)<br>
      </p>
    </h2>
  </div>
   <!-- <span> {{ test }}</span> -->
    <h2>五、实验结果  </h2>
    <p class="content">将上述数据代入以上软件成本计算公式，计算得到本实验案例的测试成本(STC)为
        {{ STCCalculator }}
        元
    </p>
  <!-- <span> {{ test }}</span> -->
    <h2>六、实验心得  </h2>
    <a-textarea v-model="xinde" placeholder="请输入实验心得"  :auto-size="{ minRows: 3, maxRows: 5 }" :bordered="true" style="width:100vh;"/>
  
  <div class="bottom-button-container">
    <!-- <a-button class="custom-bottom-button1" type="primary" shape="round">
        <template #icon>
          <EyeOutlined />
        </template>预览实验报告
      </a-button> -->
    <a-button class="custom-bottom-button2" type="primary" shape="round" @click="downloadPDF">
      <template #icon>
        <SendOutlined />
      </template>生成并下载实验报告
    </a-button>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, reactive, ref } from 'vue';
import type { Ref, UnwrapRef } from 'vue';
import { CheckOutlined, EditOutlined, EyeOutlined } from '@ant-design/icons-vue';
import { cloneDeep } from 'lodash-es';
import { valueEquals } from 'element-plus';
import { onMounted } from 'vue';
import useThemeStore from 'stepin/es/theme-editor/store';
import jsPDF from "jspdf";
import html2canvas from "html2canvas";


interface DataItem {
  key: string;
  name: string;
  value: number;
}

interface FZYinzi {
  grade: string;
  description: string;
  range: string;
}

interface FXYinzi {
  grade: string;
  description: string;
  range: string;
}

interface WZYinzi {
  grade: string;
  range: string;
}

export default defineComponent({
  components: {
    CheckOutlined,
    EditOutlined,
    EyeOutlined
  },
  mounted() {
    const { setBgSeriesColors, setPrimaryColor } = useThemeStore();
    setPrimaryColor({ DEFAULT: '#1896ff' });
    // setBgSeriesColors({ 'bg-base': '#ffffff' }, true, '.front-main');
  },

  setup() {
    const columns = [
      {
        title: '序号',
        dataIndex: 'index',
        key: 'component',
        align: 'center',
        width: 100
      },
      {
        title: '参数名称',
        dataIndex: 'name',
        key: 'component',
        align: 'center',
        width: 900
      },
      {
        title: '值',
        dataIndex: 'value',
        key: 'component',
        align: 'center'
      },
    ];

    const columns_fzyz = [
      {
        title: '复杂性程度',
        dataIndex: 'grade',
        key: 'component',
        align: 'center',
        width: 100
      },
      {
        title: '描述',
        dataIndex: 'description',
        key: 'component',
        align: 'center',
        width: 900
      },
      {
        title: '调整因子范围',
        dataIndex: 'range',
        key: 'component',
        align: 'center'
      },
    ];

    const columns_wzyz = [
      {
        title: '软件完整性级别',
        dataIndex: 'grade',
        key: 'component',
        align: 'center',
        width: 700
      },
      {
        title: '调整因子取值范围',
        dataIndex: 'range',
        key: 'component',
        align: 'center'
      },
    ];

    const columns_fxyz = [
      {
        title: '复杂性程度',
        dataIndex: 'grade',
        key: 'component',
        align: 'center',
        width: 100
      },
      {
        title: '描述',
        dataIndex: 'description',
        key: 'component',
        align: 'center',
        width: 900
      },
      {
        title: '调整因子范围',
        dataIndex: 'range',
        key: 'component',
        align: 'center'
      },
    ];


    const dataSource1: Ref<DataItem[]> = ref([
      {
        key: 'EC',
        index: 1,
        name: '测试环境成本EC',
        value: 0,
      },
      {
        key: 'IC',
        index: 2,
        name: '测试工具成本IC',
        value: 0,
      },
      {
        key: 'TW',
        index: 3,
        name: '软件测试人工作量TW',
        value: 0,
      },
      {
        key: 'SR',
        index: 4,
        name: '产品说明评审SR',
        value: 0,
      },
      {
        key: 'DR',
        index: 5,
        name: '用户文档集评审DR',
        value: 0,
      },
    ]);
    const dataSource2: Ref<DataItem[]> = ref([
      {
        key: 'BC',
        index: 1,
        name: '办公成本',
        value: 0,
      },
      {
        key: 'MC',
        index: 2,
        name: '管理成本',
        value: 0,
      },
    ]);
    const dataSource3: Ref<DataItem[]> = ref([
      {
        key: 'C',
        index: 1,
        name: '软件复杂性调整因子G',
        value: 0,
      },
      {
        key: 'I',
        index: 2,
        name: '软件完整性调整因子I',
        value: 0,
      },
      {
        key: 'R',
        index: 3,
        name: '测试风险调整因子R',
        value: 0,
      },
      {
        key: 'Tr',
        index: 4,
        name: '回归测试调整因子Tr',
        value: 0,
      },
      {
        key: 'X',
        index: 5,
        name: '现场测试调整因子X',
        value: 0,
      },
      {
        key: 'U',
        index: 6,
        name: '加急测试调整因子U',
        value: 0,
      },
      {
        key: 'A',
        index: 7,
        name: '评测机构资质调整因子A',
        value: 0,
      },
      {
        key: 'n',
        index: 8,
        name: '回归次数n',
        value: 0,
      },
      {
        key: 'S',
        index: 9,
        name: '工作量单价S',
        value: 0,
      },
    ]);

    const dataSource_fzyz: Ref<FZYinzi[]> = ref([
      {
        'grade': '低',
        'description': '没有出现上述任何一个特性',
        'range': '1.0',
      },
      {
        'grade': '中',
        'description': '出现上述特性中的一个',
        'range': '1.1 ~ 1.2',
      },
      {
        'grade': '高',
        'description': '出现上述特性中的两个或两个以上',
        'range': '1.3 ~ 1.5',
      },
    ]);
    const dataSource_wzyz: Ref<WZYinzi[]> = ref([
      {
        'grade': 'A级',
        'range': '1.6 ~ 1.8',
      },
      {
        'grade': 'B级',
        'range': '1.3 ~ 1.5',
      },
      {
        'grade': 'C级',
        'range': '1.1 ~ 1.2',
      },
      {
        'grade': 'D级',
        'range': '1.0',
      },
    ]);
    const dataSource_fxyz: Ref<FXYinzi[]> = ref([
      {
        'grade': '低',
        'description': '没有出现上述任何一个特性',
        'range': '1.0',
      },
      {
        'grade': '中',
        'description': '出现上述特性b)、c)、d) 中的一个',
        'range': '1.1 ~ 1.2',
      },
      {
        'grade': '高',
        'description': '出现上述特性a)，或者b)、c)、d)中的两个或两个以上',
        'range': '1.3 ~ 1.5',
      },
    ]);

    const STC = ref<number>(0);
    const xinde = ref<String>('');

    return {
      columns,
      columns_fzyz,
      columns_wzyz,
      columns_fxyz,
      dataSource1,
      dataSource2,
      dataSource3,
      dataSource_fzyz,
      dataSource_wzyz,
      dataSource_fxyz,
      STC,
      xinde,
    };
  },

  computed: {
    UWCalculator() {
      return Number(this.dataSource1.find(obj => obj.key === 'TW').value)
        + Number(this.dataSource1.find(obj => obj.key === 'SR').value)
        + Number(this.dataSource1.find(obj => obj.key === 'DR').value);
    },

    DFCalculator() {
      return Number(this.dataSource3.find(obj => obj.key === 'C').value)
        * Number(this.dataSource3.find(obj => obj.key === 'I').value)
        * Number(this.dataSource3.find(obj => obj.key === 'U').value)
        * Number(this.dataSource3.find(obj => obj.key === 'X').value)
        * Number(this.dataSource3.find(obj => obj.key === 'R').value)
        * Number(this.dataSource3.find(obj => obj.key === 'A').value)
        * (1 + Number(this.dataSource3.find(obj => obj.key === 'n').value) * Number(this.dataSource3.find(obj => obj.key === 'Tr').value));
    },

    LCCalculator() {
      return this.UWCalculator * this.DFCalculator * Number(this.dataSource3.find(obj => obj.key === 'S').value);
    },

    DCCalculator() {
      return this.LCCalculator + Number(this.dataSource1.find(obj => obj.key === 'EC').value) + Number(this.dataSource1.find(obj => obj.key === 'IC').value);
    },

    STCCalculator() {
      return this.DCCalculator + this.LDCCalculator;
    },

    LDCCalculator() {
      return Number(this.dataSource2.find(obj => obj.key === 'BC').value) + Number(this.dataSource2.find(obj => obj.key === 'MC').value);
    }

  },

  methods: {
    async downloadPDF() {
      const pdf = new jsPDF();
      const page1 = this.$refs.page1;
      const canvas1 = await html2canvas(page1);
      const imgData1 = canvas1.toDataURL('image/png');
      pdf.addImage(imgData1, 'PNG', 0, 0, 207, 285);
      pdf.addPage();
      const page2 = this.$refs.page2;
      const canvas2 = await html2canvas(page2);
      const imgData2 = canvas2.toDataURL('image/png');
      pdf.addImage(imgData2, 'PNG', 0, 0, 207, 205);
      pdf.addPage();
      const page3 = this.$refs.page3;
      const canvas3 = await html2canvas(page3);
      const imgData3 = canvas3.toDataURL('image/png');
      pdf.addImage(imgData3, 'PNG', 0, 0, 207, 170);
      pdf.save('实验报告.pdf');
      // console.log(page1.clientWidth);
      // console.log(page1.clientHeight);
      // console.log(page2.clientWidth);
      // console.log(page2.clientHeight);
      // console.log(page3.clientWidth);
      // console.log(page3.clientHeight);
    }
  },

});
</script>

<style lang="less">
.title {
  font-family: sans-serif;
  font-size: 35px;
}

.firsttitle {
  font-family: sans-serif;
}

.content {
  text-indent: 2em;
  margin-left: 20px;
  margin-right: 20px;
}

.secondtitle {
  text-indent: 2em;
  font-weight: bold;
  margin-left: 30px;
  margin-right: 30px;
  font-size: 25px;
}

.text {
  font-family: sans-serif;
  font-size: 20px;
}

.top-button-container {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.bottom-button-container {
  display: flex;
  justify-content: flex-end;
}

.custom-bottom-button1 {
  color: white;
  background-color: #A09E9E;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
}

.custom-bottom-button2 {
  color: white;
  // background-color: #1ACD72;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
}

.custom-button {
  /* 设置按钮的宽度 */
  float: right;
  margin-right: 20px;
  /* 可选，用于设置按钮之间的间距 */
}
</style>
