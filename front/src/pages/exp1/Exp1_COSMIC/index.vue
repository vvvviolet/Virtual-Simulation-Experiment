<template>

    <h1 class="title" >实验1 基于COSMIC的小型软件项目规模度量实验
      
        <span>  <el-button  class="guidance" type="primary" text  @click="pdfHandle" ><el-icon size="25px"><Document /></el-icon>实验指导书下载</el-button></span> 
    </h1>
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
    <p class="content">软件规模度量是软件项目成本估算以及软件项目经济评价的基础。软件规模估算的方法主要有代码行法、功能点法、对象点法和用例点法等。其中的功能点法测量的即是软件项目的功能规模。
    </p>
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
    </a-drawer>

    

    <h2 class="title">  实验内容  </h2>

    <div>
        <a-steps v-model:current="current" size="small">
        <a-step v-for="item in steps" :key="item.title" :title="item.title" />
        </a-steps>
        <div class="steps-content">
        <!-- {{ steps[current].content }} -->
        <div v-if="current == 0">
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
              <a-form-item :name="['user', 'name']" label="测量目的" :rules="[{ required: true }]">
                <a-input v-model:value="formState.user.name" />
              </a-form-item>
              <a-form-item :name="['user', 'name']" label="软件块规模" :rules="[{ required: true }]">
                <a-input v-model:value="formState.user.name" />
              </a-form-item>
              <a-form-item :name="['user', 'name']" label="软件块的分解级别" :rules="[{ required: true }]">
                <a-input v-model:value="formState.user.name" />
              </a-form-item>
              <a-form-item :name="['user', 'name']" label="软件块的功能用户" :rules="[{ required: true }]">
                <a-input v-model:value="formState.user.name" />
              </a-form-item>
              <a-form-item :name="['user', 'name']" label="所处软件架构中的层次" :rules="[{ required: true }]">
                <a-input v-model:value="formState.user.name" />
              </a-form-item>
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
            <div v-if="current==1">
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
              <a-form-item :name="['user', 'introduction']" label="输入分析得到的功能处理（每行输入一个功能处理项）：">
                <a-textarea v-model:value="formState.user.introduction" />
              </a-form-item>
              <a-form-item :wrapper-col="{ ...layout.wrapperCol, offset: 8 }">
                <a-button type="primary" html-type="submit">Submit</a-button>
              </a-form-item>
            </div>

            <div v-if="current==2">
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
                    :model="formState"
                    v-bind="layout"
                    name="nest-messages"
                    :validate-messages="validateMessages"
                >
                    <a-form-item :name="['user', 'shujuxiang']" label="识别到的数据项">
                    <a-textarea v-model:value="formState.user.shujuxiang" />
                    </a-form-item>
                </a-form>
            </div>
            <div v-if="current==3">
                <p>步骤二中识别的每个功能处理应该分解成部件，即数据移动（包括输入、输出、读、写）。
                </p>
                <p class="content">对于任何一个功能处理，按照功能用户需求（FUR）的要求，输入的描述了同一个兴趣对象的所有数据都应该被识别并计算为一个单独的输入，除非FUR明确要求同一个兴趣对象的数据在同一个功能处理中被多次输入。相似地，对于按照功能用户需求（FUR）描述某个兴趣对象的输出、读或写数据移动都应该被一样地识别和计数，除非在FUR中明确表示，在同一个功能处理中，需要多次输出、读或写同一个兴趣对象的数据。
                </p>
                <div class="image-center">
                    <a-image
                        src="http://blog.nsfocus.net/wp-content/uploads/2018/06/4-4.png"
                    />
                </div>
                <p class="content">数据输入个数分别为：
                    <a-form
                    :model="formState"
                    v-bind="layout"
                    name="nest-messages"
                    :validate-messages="validateMessages"
                    >
                    <a-form-item :name="['user', 'input']" label="输入" :rules="[{ type: 'number', min: 0, max: 99 }]">
                    <a-input-number v-model:value="formState.user.input" />
                    </a-form-item>
                    <a-form-item :name="['user', 'output']" label="输出" :rules="[{ type: 'number', min: 0, max: 99 }]">
                    <a-input-number v-model:value="formState.user.output" />
                    </a-form-item>
                    <a-form-item :name="['user', 'write']" label="写" :rules="[{ type: 'number', min: 0, max: 99 }]">
                    <a-input-number v-model:value="formState.user.write" />
                    </a-form-item>
                    <a-form-item :name="['user', 'read']" label="读" :rules="[{ type: 'number', min: 0, max: 99 }]">
                    <a-input-number v-model:value="formState.user.read" />
                    </a-form-item>
                </a-form>
                </p>
            </div>

            <div v-if="current==4">
                <p class="content"> 对于并非以数据移动为主的软件，如果觉得基本的COSMIC方法有所不足，可以可以为例外的功能（如为了解决复杂算法的度量问题时）设置一个本地化标准。
                </p>
                <p class="content"> ----示例：“在我们组织中，诸如《算法示例列表》的数学算法计作1个本地FP。《另一个算法示例列表》计作2个本地FP。”
                </p>
                <p class="content"> 可给出一个可加行的列表，每行有三列：本土化规模类别名称、FP记数、出现次数
                </p>
                <p class="content"> 得到软件块的功能规模（拓展）为：y LocalFP
                </p>
                <a-form-item :name="['user', 'LocalFP']" label="LocalFP" :rules="[{ type: 'LocalFP' }]">
                    <a-input v-model:value="formState.user.email" />
                 </a-form-item>
            </div>

            <div v-if="current==5">
                <p class="content"> 基于上述实验过程，得到最终度量结果为：x CFP(5.0)+y LocalFP
                </p>
                <a-form-item :name="['user', 'SumFP']" label="CFP + LocalFP" :rules="[{ type: 'SumFP' }]">
                    <a-input v-model:value="formState.user.email" />
                </a-form-item>
            </div>

            <div v-if="current==6">
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

            <div v-if="current==7">
                <h2>
                    实验心得
                    <a-form
                    :model="formState"
                    v-bind="layout"
                    name="nest-messages"
                    :validate-messages="validateMessages"
                >
                    <a-form-item :name="['user', 'experience']" label="实验心得" :rules="[{ required: true }]">
                    <a-textarea v-model:value="formState.user.experience" />
                    </a-form-item>

                </a-form>
                </h2>
            </div>
        </div>
        <div class="steps-action">
        <a-button v-if="current < steps.length - 1" type="primary" style="float: right;" @click="next"><step-forward-outlined />Next</a-button>
        <a-button
            v-if="current == steps.length - 1"
            type="primary"
            style="float: right;"
            @click="message.success('Processing complete!')"
        >
            Done
        </a-button>
        <a-button v-if="current > 0" style="margin-left: 8px" @click="prev"><step-backward-outlined />Previous</a-button>
        </div>
    </div>


</template>

<script>
import { Document } from '@element-plus/icons-vue'
import { ref } from 'vue';
import { message } from 'ant-design-vue';
//import type { FormInstance } from 'ant-design-vue';
//import type { Rule } from 'ant-design-vue/es/form';
import { reactive } from 'vue';

export default {
    name: 'Exp1_IFPUG',
    data() {
        return{     
            test:'21111',
            sum:'',
            visible: true,
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
            tableData: [
                {
                    component: 'EI',
                    number: '2',
                    A: '',
                    B: '3',
                    C: '',
                    D: '',
                    E: '4',
                    F: '',
                    G: '',
                    H: '6',
                    I: '',
                    nonum:'',
                },
                {
                    component: 'EO',
                    number: '2',
                    A: '',
                    B: '4',
                    C: '',
                    D: '',
                    E: '5',
                    F: '',
                    G: '',
                    H: '7',
                    I: '',
                    nonum:'',
                },
                {
                    component: 'EQ',
                    number: '2',
                    A: '',
                    B: '3',
                    C: '',
                    D: '',
                    E: '4',
                    F: '',
                    G: '',
                    H: '6',
                    I: '',
                    nonum:'',
                },
                {
                    component: 'ILF',
                    number: '2',
                    A: '',
                    B: '7',
                    C: '',
                    D: '',
                    E: '10',
                    F: '',
                    G: '',
                    H: '15',
                    I: '',
                    nonum:'',
                },
                {
                    component: 'EIF',
                    number: '2',
                    A: '',
                    B: '5',
                    C: '',
                    D: '',
                    E: '7',
                    F: '',
                    G: '',
                    H: '10',
                    I: '',
                    nonum:'',
                },
            ],
        }
    },
    methods:{
        showDrawer() {
            this.visible = true;
        },
        next() {
            this.current++;
        },
        prev() {
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
        created() {
        	this.gettableData()
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
                        return num;
                    })();
                    return;
                }
            });
            return sums;
        },
        count(){
        }
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