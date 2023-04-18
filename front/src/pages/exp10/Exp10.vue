<!-- 10.软件项目进度监督与控制实验项目(EVA 法)Earned Value Analysis 挣值分析法 -->
<template>

<!--  <h1 class="title" >实验10 软件项目进度监督与控制实验-->
<!--    <span>  <el-button  class="guidance" type="primary" text  @click="pdfHandle" ><el-icon size="25px"><Document /></el-icon>实验指导书下载</el-button></span>-->
<!--  </h1>-->
<!--  <hr />-->
<!--  &lt;!&ndash; <span> {{ test }}</span> &ndash;&gt;-->
<!--  <h2>一、实验目的  </h2>-->
<!--  <p class="content">理解软件项目规模度量功能点法原理，通过实验操作掌握功能点法。 学生应以小组为单位，根据本小组“软件工程管理与经济”课程设计项目架构及组件等设计成果，以功能点方法测量该项目的规模(功能点数量)。 建议选用某一种功能点方法度量课程设计项目的功能点，并采用另外一种功能点方法或其他的软件规模度量方法对前一种方法的度量结果进行验证。 本实验为课内设计性实验项目，实验学时 1 学时，完成实验报告 1 学时。-->
<!--  </p>-->
<!--  <h2>二、实验参数  </h2>-->
  <div>
    <a-space direction="vertical">
      <div>
        请输入预算每日成本：
        <a-input-number v-model:value="value2">
          <template #addonAfter>
            <a-select v-model:value="addonAfterValue" style="width: 60px">
              <a-select-option value="CNY">¥</a-select-option>
              <a-select-option value="USD">$</a-select-option>
              <a-select-option value="EUR">€</a-select-option>
              <a-select-option value="GBP">£</a-select-option>
            </a-select>
          </template>
        </a-input-number>
      </div>
      <div>
      请输入估计开发时间：
      <a-input-number id="inputNumber" v-model:value="value" :min="1" :max="10" /> 天
      </div>
      <div>
        项目评估
        <a-form
            ref="formRef"
            name="dynamic_form_item"
            :model="dynamicValidateForm"
            v-bind="formItemLayoutWithOutLabel"
        >
          <a-form-item
              v-for="(domain, index) in dynamicValidateForm.domains"
              :key="domain.key"
              v-bind="index === 0 ? formItemLayout : {}"
              :label="index === 0 ? 'Domains' : ''"
              :name="['domains', index, 'value']"
              :rules="{
              required: true,
              message: 'domain can not be null',
              trigger: 'change',
            }"
          >
            <a-input
                v-model:value="domain.value"
                placeholder="please input domain"
                style="width: 60%; margin-right: 8px"
            />
            <MinusCircleOutlined
                v-if="dynamicValidateForm.domains.length > 1"
                class="dynamic-delete-button"
                :disabled="dynamicValidateForm.domains.length === 1"
                @click="removeDomain(domain)"
            />
          </a-form-item>
          <a-form-item v-bind="formItemLayoutWithOutLabel">
            <a-button type="dashed" style="width: 60%" @click="addDomain">
              <PlusOutlined />
              Add field
            </a-button>
          </a-form-item>
          <a-form-item v-bind="formItemLayoutWithOutLabel">
            <a-button type="primary" html-type="submit" @click="submitForm">Submit</a-button>
            <a-button style="margin-left: 10px" @click="resetForm">Reset</a-button>
          </a-form-item>
        </a-form>
      </div>
    </a-space>
    <div ref="myChart" style="width: 600px;height:400px;"></div>
  </div>
</template>


<script>
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons-vue';
import { defineComponent, reactive, ref, watch } from 'vue';
import { Document } from '@element-plus/icons-vue'
import { SettingOutlined } from '@ant-design/icons-vue';
import * as echarts from 'echarts';
export default defineComponent({
  name: 'Exp10',
  components: { SettingOutlined,MinusCircleOutlined, PlusOutlined},
  setup() {
    const value = ref<Number>(3);

    const formRef = ref();
    const formItemLayout = {
      labelCol: {
        xs: {
          span: 24,
        },
        sm: {
          span: 4,
        },
      },
      wrapperCol: {
        xs: {
          span: 24,
        },
        sm: {
          span: 20,
        },
      },
    };
    const formItemLayoutWithOutLabel = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 20,
          offset: 4,
        },
      },
    };
    const dynamicValidateForm = reactive({
      domains: [],
    });
    const submitForm = () => {
      formRef.value.validate().then(() => {
        console.log('values', dynamicValidateForm.domains);
      }).catch(error => {
        console.log('error', error);
      });
    };
    const resetForm = () => {
      formRef.value.resetFields();
    };
    const removeDomain = item => {
      let index = dynamicValidateForm.domains.indexOf(item);
      if (index !== -1) {
        dynamicValidateForm.domains.splice(index, 1);
      }
    };
    const addDomain = () => {
      dynamicValidateForm.domains.push({
        value: '',
        key: Date.now(),
      });
    };

    return{
      value: ref(10),
      value2: ref(100),
      addonAfterValue: ref('CNY'),

      formRef,
      formItemLayout,
      formItemLayoutWithOutLabel,
      dynamicValidateForm,
      submitForm,
      resetForm,
      removeDomain,
      addDomain,

      options: {
        xAxis: {
          data: ['A', 'B', 'C', 'D', 'E']
        },
        yAxis: {},
        series: [
          {
            data: [10, 22, 28, 23, 19],
            type: 'line',
            smooth: true
          }
        ]
      }
    }
  },
  mounted() {
      // 获取 DOM 节点，进行初始化
      const myChart = echarts.init(this.$refs.myChart);
      // 使用ECharts设置选项
      myChart.setOption(this.options);
    },
  methods: {

  },

})
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
.dynamic-delete-button {
  cursor: pointer;
  position: relative;
  top: 4px;
  font-size: 24px;
  color: #999;
  transition: all 0.3s;
}
.dynamic-delete-button:hover {
  color: #777;
}
.dynamic-delete-button[disabled] {
  cursor: not-allowed;
  opacity: 0.5;
}.
</style>
