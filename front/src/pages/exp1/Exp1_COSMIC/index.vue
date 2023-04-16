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
        <a-steps v-model:current="current">
        <a-step v-for="item in steps" :key="item.title" :title="item.title" />
        </a-steps>
        <div class="steps-content">
        <!-- {{ steps[current].content }} -->
            <div v-if="current == 0">
                <p>1. 确定 FSM 的目的和范围 
                </p>
                <p> - ● - 规则 2：目的和范围：
                </p>
                <p class="content">目的和范围  FSM 的目的和范围应该在进行特定的度量活动前确定。 
                </p>
                <p>2. 从软件制品中识别 FUR 
                </p>
                <p> - ● - 规则 3：识别 FUR：
                </p>
                <p class="content">  在 FSM 的范围内识别的 FUR 应该作为待度量软件功能规模的唯一来源。 
                </p>
                <p>3. 非功能性需求 
                </p> 
                <p>4. 识别层  
                </p>
                <p> - ● - 规则 4：如果度量活动需要，则每一层级都应识别。 
                </p>
                <p> - ● - 规则 5：待度量的软件块的范围不应该跨层。
                </p>
                <p> - ● - 规则 6：层的特点 在 FSM 范围内识别的层级应该具有以下特点： 
                </p>
                <p class="content"> a) 软件的各个层级应向其功能用户交付功能。
                </p>
                <p class="content"> b) 下层软件应向使用其服务的软件层ᨀ供功能服务。 
                </p>
                <p class="content"> c) 共享数据的软件，如果它们对共享数据的数据属性进行了相同的解释，则不应被识 别不同层级的软件。 
                </p>
                <p>5. 识别功能用户  
                </p>
                <p> - ● - 规则 7：功能用户 在 FSM 范围内的软件 FUR 中，应该识别所有触发功能处理的功能用户（向功能处理提供信息或从功能处理接收信息）。
                </p>
                <p>6. 识别软件边界
                </p>
                <p> - ● - 规则 8：应该识别在 FSM 范围内的每个层级的每个软件块的边界。 
                </p>
                <p> - ● - 规则 9：识别边界后，FSM 范围内的每个 FUR 应对应至某个软件块。 
                </p>
                <p>7. 分解层级 
                </p>
                <p class="content">软件块的规模度量只能直接与处于相同分解层级的组件进行对比。这一点很重要，因为根 据第五章的规则，在不同分解层级的软件块的规模不能简单的叠加。因此，在比较开发不同软 件块的项目性能（如：生产率=规模/工作量）时，必须是这些软件块都位于同一分解的层次上 才有可比性。此外，不同软件项目的性能（如生产力=规模/工作量）也只有在处于相同分解层 级时才能比较。
                </p>
                <p>8. 环境图 
                </p>
                <p class="content">在定义 FSM 的范围和功能用户时，为待度量软件绘制环境图很有帮助。环境图展示了软件 块和功能用户（人类，硬件设备或其他软件）之间的数据流，并展示了软件块和持久性存储介 质之间的数据流。
                </p>
                <div class="image-center">
                    <a-image
                    src="http://blog.nsfocus.net/wp-content/uploads/2018/06/1-3.png"
                    /> 
                </div>
                <p>9. 识别颗粒度级别
                </p>
                <p class="content">COSMIC 方法要求 FUR 以足够详细的程度表示，以便建立 COSMIC 度量模型，这被称为颗粒 度级别。 根据 ISO19761 的规则，使用 COSMIC FSM 方法得到功能规模，需要需求达到可以识别功能 处理和其数据移动的程度。当需求模糊时，可以使用“早期软件规模度量方法：实践者指 南”，进行近似规模度量
                </p>
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
                <p>1. 识别功能处理 
                </p>
                <p> - ● - 规则 10：识别功能处理 FSM 范围内识别的每个功能处理应该具备以下特点：
                </p>
                <p class="content">  a) 源自至少一个可识别的 FUR。 
                </p>
                <p class="content">  b) 由功能用户的输入数据移动触发，以通知功能处理它已检测到触发事件。  
                </p>
                <p class="content">  c) 至少包含两个数据移动，通常是一个输入加一个输出或写。  
                </p>
                <p class="content">  d) 属于且仅属于一个层级。 
                </p>
                <p class="content">  e) 根据其 FUR，当需要达到某个时间点时是已结束的状态。 
                </p>
                <div class="image-center">
                    <a-image
                        src="http://blog.nsfocus.net/wp-content/uploads/2018/06/3-4.png"
                    />
                </div>
                <p>2. 识别兴趣对象和数据组  
                </p>
                <p> - ● -  规则 11：识别兴趣对象和数据组  FSM 范围中识别的每个数据组应该：
                </p>
                <p class="content">  a) 通过其独一无二的数据属性的集合而具有唯一性和可区分性 
                </p>
                <p class="content">b) 直接关联到软件 FUR 中描述的某个兴趣对象。
                </p>
                <p>3. 识别数据移动   
                </p>
                <p class="content">此步骤包括识别每个功能处理的数据移动（输入、输出、读、写）。下图展示了四个数据移动类型之间的总体关系，它们所属的功能处理以及待度量软件的边界。
                </p>
                <p> - ● - 规则 12：识别数据移动
                </p>
                <div class="image-center">
                    <a-image
                        src="http://blog.nsfocus.net/wp-content/uploads/2018/06/4-4.png"
                    />
                </div>
                <p> - ● - 规则 13：功能处理，一个输入对于任何一个功能处理，按照 FUR 的要求，输入的描述了同一个兴趣对象的所有数据都应该被识别并计算为一个单独的输入，除非 FUR 明确要求同一个兴趣对象的数据在同一个功能处 理中被多次输入。
                </p>
                <p> - ● - 规则 14：功能处理 ， 一个输出、读或写。相似地，对于按照 FUR描述某个兴趣对象的输出、读或写数据移动都应该被识别和计数，除非在 FUR 中明确表示，在同一个功能处理中，需要多次输出、读或写同一个兴趣对象的数据。
                </p>
                <p> - ● - 规则 15：功能处理 - 实例  如果一个数据移动类型（输入、输出、读、写），在功能处理执行时多次发生（值不同），在该功能处理中应该只被识别和计数 1 次。
                </p>
                <p>4. 数据移动的分类   
                </p>
                <p> - ● -  规则 16：输入应该： 
                </p>
                <p class="content"> a) 接受来自边界外的功能用户发送的单个数据组。 
                </p>
                <p class="content">  b) 在不涉及其他数据移动类型的情况下，包括所有必须的格式化和展示运算，以及与 验证输入数据属性相关的运算。 
                </p>
                <p class="content"> c) 包括所有“请求接收输入数据”的功能，无需指定输入什么数据。 
                </p>
                <p> - ● -  规则 17：输出应该：
                </p>
                <p class="content">    a) 从一个单一数据组向边界外的功能用户发送数据属性。 
                </p>
                <p class="content">    b) 在不涉及其他数据移动类型的情况下，包括所有必须的格式化和展示运算，以及需 要向功能用户发送数据属性所需的数据运算。 
                </p>
                <p> - ● - 规则 18：读应该：  
                </p>
                <p class="content">     a) 从持久性存储介质检索一个单一的数据组。 
                </p>
                <p class="content">  b) 在不涉及其他数据移动类型的情况下，包括读取数据所需的所有逻辑处理和/或数 学计算
                </p>
                <p class="content">     c) 包括所有“读请求”的功能。 
                </p>
                <p> - ● -  规则 19：写应该： 
                </p>
                <p class="content">        a) 从一个独立的数据组向持久性存储介质移动数据属性。 
                </p>
                <p class="content">        b) 在不涉及其他数据移动类型的情况下，包括所有为了要建立“写”数据属性的逻辑 处理和/或数学计算。
                </p>
                <p> - ● - 规则 20：写 - 删除  需要从持久性存储介质中删除一个数据组的需求应被识别为一个写数据移动。
                </p>
                <p>5. 度量分布式软件系统的组件
                </p>
                <p>6. 软件的复用
                </p>
                <p>7. 度量软件变更的规模
                </p>
            </div>
            <div v-if="current==2">
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
                </a-form>
            </div>
        </div>
        <div class="steps-action">
        <a-button v-if="current < steps.length - 1" type="primary" @click="next"><step-forward-outlined />Next</a-button>
        <a-button
            v-if="current == steps.length - 1"
            type="primary"
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
                },
            }),
            steps: [{
                title: '度量策略阶段',
                content: 'First-content',
            }, {
                title: '映射阶段',
                content: 'Second-content',
            }, {
                title: '度量阶段',
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