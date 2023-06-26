<!-- 2.软件开发成本估算实验 
  实验主体表格部分
成本估算基础：软件工作量、effort来源于软件FP规模，采用GB国家标准 -->
<template>
  <div class="procession_title">第一步：进行软件规模估算</div>
  <br>
  <div>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在规模估算前，应根据项目范围明确系统边界。对于尚未确定的需求，应该在规模估算前确定估算原则。估算人员应根据已确定的系统边界和需求描述估算软件规模。
  </div>
  <div>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;规模估算所采用的方法，应根据项目特点和估算需求，选用已发布的SJ/T
    11617-2016、SJ/T 11618-2016、SJ/T
    11619-2016、SJ/11620-2016和ISO/IEC 20926：2009五种功能规模测量标准的一种。</div>
  <div>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;对于以非功能性需求为主，或包含大量复杂算法，或以创意为主的软件项目，在进行规模估算时，可采用前5种方法进行功能规模的估算，并利用GSC调整因子进行规模调整；也可不估算软件规模，直接估算软件项目的工作量及成本。
  </div>
  <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;实验操作：选择合适的方法进行软件规模估算，估算结果为
    S=<input
      v-model="method3.S"
      style="width: 40px;"
    >功能点。
  </div>
  <br>
  <div class="procession_title">第二步：进行工作量估算前的准备</div>
  <br>
  <div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在进行工作量估算前，应：</div>
    <div>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(a)对项目风险进行分析。风险分析时应考虑技术、管理、资源和商业等多方面因素。例如：需求变更、外部协作、时间或成本约束、人力资源、系统架构、用户接口、外购或复用以及采用新技术等；
    </div>
    <div>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(b)对实现功能复用情况进行分析，识别出复用的功能及可复用的程度；
    </div>
    <div>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(c)根据经验或相关性分析结果，确定影响工作量的主要属性；
    </div>
    <div class="content">实验操作：进行工作量估算前的准备。</div>
  </div>
  <br>
  <div class="procession_title">第三步：进行工作量估算与调整</div>
  <br>
  <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在进行工作量估算时，应：</div>
  <div>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(a)根据风险分析结果，对估算方法或模型进行合理调整，如调整估算模型中影响因子的权重值。
  </div>
  <div>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(b)根据客服用功能的规模及可复用成都对工作量估算进行调整。
  </div>
  <div>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(c)采用不同的工作量估算方法时，分别遵循以下原则：
  </div>
  <div>
    <div>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(1)在使用类推法时，参考的历史项目应和待估算项目有高度的相似性。在估算时应识别出待估算项目与参考历史项目的主要差异并对估算结果进行适当调整。
    </div>
    <div>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(2)在使用类比法时，应根据主要项目特征对基准数据进行筛选。当用于比对的项目数量过少时，宜按照不同项目属性分别筛选比对，综合考虑工作量估算结果。
    </div>
    <div>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(3)在使用方程法时，宜基于基准数据，并采用回归分析方法，建立回归方程。可根据完整的多元方程（包含所有工作量影响因子），直接计算出估算结果；也可根据较简单的方程（包含部分工作量影响因子），计算基础部分的工作量估算结果，再根据其他调整因子，对工作量估算结果进行调整。
    </div>
  </div>
  <div>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;宜采用不同的方法分别估算工作量并进行交叉验证。如果不同方法的估算结果产生较大差异，可采用专家评审方法确定估算结果，也可使用较简单的加权平均方法。
  </div>
  <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;实验操作：选择合适的方法对每类人群进行工作量估算和验证。
  </div>
  <br>
  <div class="procession_title">第四步：对直接人力成本进行估算</div>
  <br>
  <div class="content">
    应根据工作量估算结果和项目人员直接人力成本费率估算直接人力成本。直接人力成本费率是指每人月的直接人力成本金额，单位通常为元每人月。直接人力成本的计算宜采用以下两种方式之一：
  </div>
  <div class="content">
    &nbsp;(a)根据不同类别人员的直接人力成本费率和估算工作量分别计算每类人员的直接人力成本，将各类人员的直接人力成本相加得到该项目的直接人力成本；
  </div>
  <div class="content">&nbsp;(b)根据项目平均直接人力成本费率和估算的总工作量直接计算该项目的直接人力成本。</div>
  <div
    class="content"
    style="font-weight: bold;"
  >公式：DHC=∑(Ei×IFi)</div>
  <div class="content">式中：</div>
  <div class="content">&nbsp;DHC为直接人力成本,单位为元；</div>
  <div class="content">&nbsp;n为人员类别数量，取值为不小于1的自然数；</div>
  <div class="content">&nbsp;Ei为第i类人员的工作量，单位为人月；</div>
  <div class="content">&nbsp;IFi为第i类人员的直接人力成本费率，单位为元每人月。</div>
  <br>
  <div class="content">实验操作：请在下面表格中分别填写每类人员的工作量与人力成本费率，计算得到直接人力成本
    DHC=&nbsp;{{method1.DHC}}&nbsp;元。
  </div>
  <br>
  <!-- ant design vue 表格形式实现人力成本估算 -->
  <div>
    <!-- <a-button class="renli-table" -->
    <a-button
      class="editable-add-btn"
      style="margin-bottom: 15px;"
      @click="handleAdd"
    >添加人员类别</a-button>
    <a-table
      bordered
      :data-source="renliSource"
      :columns="renliColumns"
    >
      <template #bodyCell="{column,text,record}">
        <template
          v-if="['category','workLoad','costRate'].includes(column.dataIndex)"
        >
          <div>
            <a-input
              v-if="editableData[record.key]"
              v-model:value="editableData[record.key][column.dataIndex]"
              style="margin: -5px 0"
            />
            <template v-else>
              {{ text }}
            </template>
          </div>
        </template>
        <template v-else-if="column.dataIndex==='operation'">
          <div class="editable-row-operations">
            <span v-if="editableData[record.key]">
              <a-typography-link
                @click="save(record.key)">保存</a-typography-link>
              <a-popconfirm
                title="确定要取消修改吗？"
                @confirm="cancel(record.key)"
              >
                <a>取消</a></a-popconfirm>
            </span>
            <span v-else>
              <a @click="edit(record.key)">编辑</a>
              <a-popconfirm
                v-if="renliSource.length"
                title="确定要删除此行吗?"
                @confirm="onDelete(record.key)"
              >
                <a>删除</a>
              </a-popconfirm>
            </span>
          </div>
        </template>
      </template>
    </a-table>
  </div>
  <!-- 原来的 -->

  <br>
  <div class="procession_title">第五步：进行间接人力成本估算</div>
  <br>
  <div class="content">
    按照上述原理部分内容分项估算间接人力成本。间接人力成本宜按照工作量比例进行分摊。
    <div>实验操作：进行间接人力成本估算，估算结果为
      IHC=<input
        v-model="method1.IHC"
        style="width: 40px;"
      >元。</div>
  </div>
  <br>
  <div class="procession_title">第六步：进行直接非人力成本估算</div>
  <br>
  <div class="content">按照上述原理部分内容分项估算直接非人力成本，也可依据基准数据或经验估算。 <div>
      实验操作：进行直接非人力成本估算，估算结果为
      DNC=<input
        v-model="method1.DNC"
        style="width: 40px;"
      >元。</div>
  </div>
  <br>
  <div class="procession_title">第七步：进行间接非人力成本估算</div>
  <br>
  <div class="content">
    宜根据项目情况,按照上述原理部分内容分项估算间接非人力成本。间接非人力成本宜按照工作量比例进行分摊。
    <div>实验操作：进行间接非人力成本估算，估算结果为
      INC=<input
        v-model="method1.INC"
        style="width: 40px;"
      >元。</div>
  </div>
  <br>
  <div class="procession_title">下面将用三种方法来确定软件开发成本。</div>
  <br>
  <div>
    <p class="procession_title">第八步：利用四种成本估算结果直接相加</p>
    <div class="content">
      SDC表示软件开发成本，单位为元，它可以表示成如下4项加和。
    </div>
    <div class="content">
      (1)公式：SDC=DHC+DNC+IHC+INC
    </div>
    <div class="content">
      <span>(2)计算过程：SDC={{ method1.DHC }}+{{ method1.DNC }}+{{method1.IHC }}+{{ method1.INC }}
        =</span>
      {{ SDC1 = Number(method1.DHC) + Number(method1.DNC) + Number(method1.IHC) + Number(method1.INC) }}
    </div>
  </div>

  <div>
    <br>
    <p class="procession_title">第九步：利用工作量估算结果进行计算</p>
    <div class="content">
      如果已经获得了人力成本费率，就可以根据工作量估算结果和人力成本费率直接计算出直接人力成本和间接成本总和，再计算软件开发成本。
    </div>
    <div class="content">(1)公式：SDC=∑(Ei×Fi)+DNC=DHC+DNC</div>
    <div class="content">
      <span>(2)计算过程：SDC={{ method1.DHC }}+{{ method1.DNC }}
        =</span> {{ SDC2 = Number(method1.DHC) + Number(method1.DNC) }}
    </div>
  </div>
  <br>
  <div>
    <p class="procession_title">第十步：利用软件规模估算结果计算</p>
    <div class="content">
      如果已经确定了规模综合单价P=<input
        v-model="method3.P"
        style="width: 40px;"
      >元,则可以根据规模综合单价和估算出的规模直接计算出直接人力成本和间接成本的总和,然后计算软件开发成本。
    </div>
    <div class="content">(1)公式：SDC=P×S+DNC</div>
    <div class="content">
      <span
        onchange="calculate3">(2)计算过程：SDC={{ method3.P }}×{{ method3.S }}+{{ method1.DNC }}
        =</span>
      {{ SDC3=Number(method3.P)*Number(method3.S )+Number(method1.DNC)}}
    </div>
  </div>

  <br>
  <p class="procession_title">第十一步：将三种方法计算所得成本进行对比（单位：元） </p>
  <a-table
    :pagination="false"
    :columns="columns"
    :data-source="tableData"
    bordered
    size="middle"
    style="word-break: break-all;"
  />
  <br>
</template>
  
  <script lang="ts">
// import type { FormInstance, FormRules } from 'element-plus';
// import { ElSelect, ElOption, ElForm, ElFormItem, ElInput, ElButton, ElInputNumber } from 'element-plus';
import { computed, defineComponent, reactive, ref } from 'vue';
import type { Ref, UnwrapRef } from 'vue';
import { cloneDeep } from 'lodash-es';
// import { log } from 'console';
interface DataItem {
  key: string;
  category: string;
  workLoad: number;
  costRate: number;
}

export default {
  name: 'mainTable',
  components: {},

  setup() {
    const renliColumns = [
      {
        title: '人员类别',
        dataIndex: 'category',
        // width: '30%',
      },
      {
        title: '工作量',
        dataIndex: 'workLoad',
      },
      {
        title: '人力成本费率',
        dataIndex: 'costRate',
      },
      {
        title: '操作',
        dataIndex: 'operation',
      },
    ];
    const editableData: UnwrapRef<Record<string, DataItem>> = reactive({});
    const renliSource: Ref<DataItem[]> = ref([
      {
        key: '0',
        category: '第1类人员',
        workLoad: 0,
        costRate: 0,
      },
    ]);
    const edit = (key: string) => {
      editableData[key] = cloneDeep(renliSource.value.filter((item) => key === item.key)[0]);
    };
    const save = (key: string) => {
      Object.assign(renliSource.value.filter((item) => key === item.key)[0], editableData[key]);
      calculate2();
      delete editableData[key];
    };
    const onDelete = (key: string) => {
      renliSource.value = renliSource.value.filter((item) => item.key !== key);
      calculate2();
    };
    const count = computed(() => renliSource.value.length + 1);
    const handleAdd = () => {
      const newData = {
        key: `${count.value}`,
        category: `第${count.value}类人员`,
        workLoad: 0,
        costRate: 0,
      };
      renliSource.value.push(newData);
    };
    const cancel = (key: string) => {
      delete editableData[key];
    };
    const columns = reactive([
      {
        title: '方法一 ',
        dataIndex: 'result1',
        // key: 'type',
        align: 'center',
        width: 200,
        // fixed: 'left',
      },
      {
        title: '方法二',
        dataIndex: 'result2',
        // key: 'type',
        align: 'center',
        width: 200,
        // fixed: 'left',
      },
      {
        title: '方法三',
        dataIndex: 'result3',
        // key: 'type',
        align: 'center',
        width: 200,
        // fixed: 'left',
      },
    ]);
    const value = ref('');
    const labelPosition = ref('');
    const SDC = ref('');
    let SDC1 = ref<number>(0);
    const SDC2 = ref(0);
    const SDC3 = ref(0);
    const tableData = reactive([
      {
        result1: SDC1,
        result2: SDC2,
        result3: SDC3,
      },
    ]);
    const formRef1 = ref(null);
    const formRef2 = ref(null);
    const formRef3 = ref(null);
    const pNum = ref(0);
    const flag = ref(0);
    const method1 = reactive({
      DHC: 0,
      DNC: 0,
      IHC: 0,
      INC: 0,
    });
    const method2 = reactive({
      // DNC: '',
      workload: {},
      costRate: {},
    });
    const method3 = reactive({
      P: 0,
      S: 0,
      // DNC: '',
    });
    // const DHC = ref('');
    // const DNC = ref('');
    // const IHC = ref('');
    // const INC = ref('');
    const options = [
      {
        value: 'Option1',
        label: 'SDC=DHC+DNC+IHC+INC',
      },
      {
        value: 'Option2',
        label: 'SDC=∑(Ei×Fi)+DNC',
      },
      {
        value: 'Option3',
        label: 'SDC=P×S+DNC',
      },
    ];
    const method2Number = () => {
      flag.value = 1;
      console.log('pNum=', pNum);
      console.log('flag=', flag);
    };
    // const calculate = () => {
    //   if (value.value == 'Option1') {
    //     SDC.value = method1.DHC + method1.DNC + method1.IHC + method1.INC;
    //     SDC1.value = SDC.value;
    //   } else if (value.value == 'Option2') {
    //     SDC.value = 0;
    //     for (let i = 1; i <= pNum.value; i++) {
    //       SDC.value += method2.workload[i] * method2.costRate[i];
    //       console.log(SDC.value);
    //     }
    //     SDC.value += method2.DNC;
    //     SDC2.value = SDC.value;
    //   } else if (value.value == 'Option3') {
    //     SDC.value = method3.P * method3.S + method3.DNC;
    //     SDC3.value = SDC.value;
    //   }
    // };
    const calculate1 = () => {
      SDC1.value = Number(method1.DHC) + Number(method1.DNC) + Number(method1.IHC) + Number(method1.INC);
    };
    // const calculate2 = () => {
    //   SDC2.value = 0;
    //   for (let i = 1; i <= pNum.value; i++) {
    //     SDC2.value += Number(method2.workload[i]) * Number(method2.costRate[i]);
    //   }
    //   SDC2.value += Number(method1.DNC);
    // };
    const calculate2 = () => {
      method1.DHC = 0;
      for (let i = 0; i < renliSource.value.length; i++) {
        method1.DHC += renliSource.value[i].workLoad * renliSource.value[i].costRate;
      }
    };
    const calculate_ = () => {
      method1.DHC = 0;
      for (let i = 1; i <= pNum.value; i++) {
        method1.DHC += method2.workload[i] * method2.costRate[i];
      }
    };
    const calculate3 = () => {
      SDC3.value = method3.P * method3.S + method1.DNC;
    };

    const reset1 = () => {
      method1.DHC = 0;
      method1.DNC = 0;
      method1.IHC = 0;
      method1.INC = 0;
      SDC1.value = 0;
    };
    const reset2 = () => {
      pNum.value = 0;
      // method2.DNC = '';
      method2.costRate = {};
      method2.workload = {};
      SDC2.value = 0;
    };
    const reset_ = () => {
      pNum.value = 0;
      method2.costRate = {};
      method2.workload = {};
      method1.DHC = 0;
    };
    const reset3 = () => {
      method3.S = 0;
      method3.P = 0;
      // method3.DNC = '';
      SDC3.value = 0;
    };

    return {
      value,
      options,
      labelPosition,
      pNum,
      flag,
      formRef1,
      formRef2,
      formRef3,
      method1,
      method2,
      method3,
      method2Number,
      // calculate,
      calculate1,
      calculate2,
      calculate3,
      calculate_,
      reset_,
      // reset,
      reset1,
      reset2,
      reset3,
      SDC,
      SDC1,
      SDC2,
      SDC3,
      columns,
      tableData,
      renliSource,
      renliColumns,
      editableData,
      edit,
      save,
      onDelete,
      handleAdd,
      cancel,
      // DHC,
      // DNC,
      // IHC,
      // INC,
      // P,
      // S,
    };
  },
};
</script>
  
<style scoped lang="less">
.procession_title {
  font-weight: bold;
  // font-size: medium;
  text-indent: 2em;
  // margin-left: 30px;
  margin-right: 30px;
}
.third_title {
  font-weight: bold;
  text-indent: 2em;
  margin-right: 30px;
}
.content {
  text-indent: 2em;
  margin-right: 30px;
}
.description {
  color: darkgrey;
  font-size: 12px;
}
.button-group {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.button {
  width: 45%;
  display: flex;
  justify-content: center;
  align-content: center;
}
.editable-row-operations a {
  margin-right: 8px;
}
.preInput {
  width: 350px;
  height: 7vh;
  display: flex;
  justify-content: space-between;
  align-content: center;
  flex-direction: row;
}
</style>