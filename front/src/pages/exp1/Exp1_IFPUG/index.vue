<template>
    <!-- <h1 class="title">实验1 基于IFPUG的小型软件项目规模度量实验

        <a-button class="button1" type="primary" shape="round" >
            <template #icon>
                <DownloadOutlined />
            </template>实验指导书下载
        </a-button>
        <a-button class="button2" type="primary" shape="round" >
            <template #icon>
                <DownloadOutlined />
            </template>实验报告模板下载
        </a-button>


    </h1> -->
    <!-- <span> {{ test }}</span> -->
    <!-- <h2>一、实验目的  </h2>
    <p class="content">理解软件项目规模度量功能点法原理，通过实验操作掌握功能点法。 学生应以小组为单位，根据本小组“软件工程管理与经济”课程设计项目架构及组件等设计成果，以功能点方法测量该项目的规模(功能点数量)。 建议选用某一种功能点方法度量课程设计项目的功能点，并采用另外一种功能点方法或其他的软件规模度量方法对前一种方法的度量结果进行验证。 本实验为课内设计性实验项目，实验学时 1 学时，完成实验报告 1 学时。
    </p> -->
    <h2>一、实验步骤 </h2>
    <!-- <p class="content" > -->
    <p class="secondtitle">第一步：识别数据功能点和事务处理功能点</p>
    <p class="content">数据功能是指更新、引用和检索而储存的可用的逻辑数据。数据块及控制信
        息是逻辑上的并且用户可确认的。数据功能分为内部逻辑文件(ILF)和外部接口
        文件(EIF)。事务处理是指外部输入、外部输出、外部查询、完成更新、检索和输
        出等操作，分为外部输入(EI)、外部输出(EO)和外部查询(EQ)。
        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;请详细阅读文档中提供的系统设计模型。
    </p>

    <p class="secondtitle">第二步：测量内部逻辑文件(ILF)</p>
    <p class="content">内部逻辑文件(ILF)是用户可确认的，在应用程序内部维护、逻辑上相关的数
        据块或控制信息。内部逻辑文件(ILF)用来保存经由应用程序的一个或多个处理
        后的数据。一旦应用程序内部的一个数据块被标识为 ILF，即使它被另一个事务
        处理所引用，它也不能再被同一个应用程序当作 EIF。<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;实验操作：清点实验案例中 ILF 数量。</p>

    <p class="secondtitle">第三步：测量外部接口文件(EIF) </p>
    <p class="content">外部接口文件(EIF)是用户可确认的、由被测应用程序引用，但在其他应用程
        序内部维护的、逻辑上相关的数据块或控制信息。外部接口文件(EIF)用来存放被
        测应用程序中的一个或多个基本处理所引用的数据。数据或控制数据通过诸如增
        加、变更、更新等事务来维护，一个 EIF 可以被多个应用程序引用和计算，但是
        对于一个应用程序来讲，一个 EIF 只应被计算一次。 <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;实验操作：清点实验案例中 EIF 数量。</p>


    <p class="secondtitle">第四步：计算 ILF 和 EIF 复杂度</p>
    <p class="content">根据 IFPUG 功能点计算实践手册(4.1 版)，识别 ILF 和 EIF 组件的复杂程度，
        并按照下表的参数并赋值(简单、平均或复杂)。 <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;实验操作：复杂度为简单的 ILF 数量和复杂的 ILF 数量各占 50%。EIF 的复
        杂度均为复杂。填写下表。</p>


    <p class="secondtitle">第五步：测量外部输入(EI)</p>
    <p class="content">外部输入(EI)是应用程序处理来自系统边界以外的数据或控制信息的基本
        过程。EI 的作用是维护一个或多个 ILF 以及通过其处理逻辑来改变系统的行为。<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;实验操作：清点实验案例中 EI 数量。 </p>


    <p class="secondtitle">第五步：测量外部输入(EI)</p>
    <p class="content">外部输入(EI)是应用程序处理来自系统边界以外的数据或控制信息的基本
        过程。EI 的作用是维护一个或多个 ILF 以及通过其处理逻辑来改变系统的行为。<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;实验操作：清点实验案例中 EI 数量。 </p>


    <p class="secondtitle">第六步：测量外部输出(EO) </p>
    <p class="content">外部输出(EO)是应用程序向其边界之外提供数据或控制信息的基本处理。
        EO 的作用是向用户提供经过处理逻辑加工的，除了检索信息或控制信息之外的
        信息或附加信息。处理逻辑中必须至少包含一个数学公式或者计算，创建导出数
        据或者维护一个或多个 ILF，并且改变系统的行为。<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;实验操作：清点实验案例中 EO 数量。 </p>

    <p class="secondtitle">第七步：测量外部查询(EQ) </p>
    <p class="content">外部查询(EQ)是应用程序向其边界之外提供数据或控制信息查询的基本处
        理。EQ 的作用是通过查询数据或控制信息来为用户提供信息，处理逻辑中既不
        包含数学公式或计算，也不产生导出数据。处理过程中不维护 ILF，系统行为不
        受影响。<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;实验操作：清点实验案例中 EQ 数量。 </p>


    <p class="secondtitle">第八步：计算 EI、EO 和 EQ 复杂度 </p>
    <p class="content">根据 IFPUG 功能点计算实践手册(4.1 版)，分别识别 EI 以及 EO 和 EQ 组件
        的复杂程度，并按照以下两个表格的参数并赋值(简单、平均或复杂)。<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;实验操作：复杂度为简单的 EI 数量和复杂的 EI 数量各占 50%。复杂度为平
        均的 EO 数量占 2/3，复杂度为复杂的 EO 数量占 1/3。复杂度为简单、平均和复
        杂的 EQ 数量各占 1/3。</p>


    <p class="secondtitle">第九步：计算未调整功能点 </p>
    <p class="content"> 按照 IFPUG 功能点计算实践手册(4.1 版)组件复杂度等级与功能点数对应关
        系表 4，计算得到未调整功能点数(UFP)。 <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;实验操作：将上述各步得到的数据，填写在下面的“未调整功能点计算表”中
        的合适位置，计算本实验案例的未调整功能点。 </p>


    <p class="secondtitle">第十步：计算调整后功能点 </p>
    <p class="content">考虑本实验案例的非功能性，从表 6 采集相对复杂度调整因子(标红数值)，
        得到本实验案例的功能点调整因子(VAF)为 41。将 VAF 数值代入(IFPUG 法)功能
        点计算公式，计算得到本实验案例的功能点为_____________。 <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;实验操作：运用 IFPUG 标准规则，计算实验案例的调整后功能点。 </p>
    <br />




    <h2>二、实验参数 </h2>


    <a-table :columns="columns" :data-source="tableData" bordered size="middle" style="word-break: break-all;">
        <template #bodyCell="{ column,record,index}">
            <template v-if="column.dataIndex === 'A'">
                <a-input v-model:value="record.A" style="width:100px; "/>
            </template>
            <template v-if="column.dataIndex === 'D'">
                <a-input v-model:value="record.D" style="width:100px;"/>
            </template>
            <template v-if="column.dataIndex === 'G'">
                <a-input v-model:value="record.G" style="width:100px;"/>
            </template>
            <template v-if="column.dataIndex === 'C'">
                {{c(index)}}
            </template>
            <template v-if="column.dataIndex === 'F'">
                {{f(index)}}
            </template>
            <template v-if="column.dataIndex === 'I'">
                {{i(index)}}
            </template>
            <template v-if="column.dataIndex === 'number'">
                {{number(index)}}
            </template>
            <template v-if="column.dataIndex === 'unchanged'">
                {{unchanged(index)}}
            </template>
        </template> 
    </a-table>
    
    <!-- <div style="text-align : center;">
    <a-table class="maintable" :data-source="tableData" bordered style="title-color: #1890ff" >
        <a-table-column key="component" data-index="component">
        <template #title><span style="color: #1890ff">组件</span></template>
      </a-table-column>
      <a-table-column key="number" data-index="number">
        <template #title><span style="color: #1890ff">数量</span></template>
      </a-table-column>
        <a-table-column-group>
          <template #title><span style="color: #1890ff">复杂度</span></template>
         
            <a-table-column-group>
                <template #title><span style="color: #1890ff">简单</span></template>
                        
                        <a-table-column-group>              
                        <template #title><span style="color: #1890ff">计数</span></template>
                        <a-table-column key="A" title="A" data-index="A" />
                        </a-table-column-group>    
                                                              
                        <a-table-column-group>  
                        <template #title><span style="color: #1890ff">权重</span></template>
                        <a-table-column key="B" title="B" data-index="B" />
                        </a-table-column-group>
                     
                        <a-table-column-group>  
                        <template #title><span style="color: #1890ff">功能点数</span></template>
                        <a-table-column key="C" title="C=A*B" data-index="C" />
                        </a-table-column-group>
    
            </a-table-column-group>
            <a-table-column-group>
                <template #title><span style="color: #1890ff">平均</span></template>
                  
                        <a-table-column-group>              
                        <template #title><span style="color: #1890ff">计数</span></template>
                        <a-table-column key="A" title="A" data-index="A" />
                        </a-table-column-group>    
                                                         
                        <a-table-column-group>  
                        <template #title><span style="color: #1890ff">权重</span></template>
                        <a-table-column key="B" title="B" data-index="B" />
                        </a-table-column-group>
                     
                        <a-table-column-group>  
                        <template #title><span style="color: #1890ff">功能点数</span></template>
                        <a-table-column key="C" title="C=A*B" data-index="C" />
                        </a-table-column-group>
                       
            </a-table-column-group>
            <a-table-column-group>
                <template #title><span style="color: #1890ff">复杂</span></template>
    
                <a-table-column-group>              
                <template #title><span style="color: #1890ff">计数</span></template>
                <a-table-column key="A" title="A" data-index="A" />
                </a-table-column-group>                           
                                
                <a-table-column-group>  
                <template #title><span style="color: #1890ff">权重</span></template>
                <a-table-column key="B" title="B" data-index="B" />
                </a-table-column-group>
                                <a-table-column-group>  
                <template #title><span style="color: #1890ff">功能点数</span></template>
                <a-table-column key="C" title="C=A*B" data-index="C" />
                </a-table-column-group>
                    
            </a-table-column-group>
    
    
        </a-table-column-group>
        <a-table-column key="unconverted" data-index="unconverted">
        <template #title><span style="color: #1890ff">未调整功能点数</span></template>
      </a-table-column>
    </a-table>
    </div> -->
    <span class="secondtitle">系统特征因子为

        <a-button class="button4" type="primary" shape="round"  @click="count">
            计算
        </a-button>
    </span>
    <span class="secondtitle">本实验未调整功能点总计为：____________ </span>



    <a-button class="button3" type="primary" shape="round" >
        <template #icon>
            <DownloadOutlined />
        </template>实验报告提交
    </a-button>
</template>



<script>
import { Document } from '@element-plus/icons-vue'
import { defineComponent } from 'vue'
export default {

    setup()
    {
        return {
            value
        }
    },
    name: 'Exp1_MARKII',
    data() {
        return {
            test: '21111',
            sum: '',
            columns: [
                {
                    title: '组件',
                    dataIndex: 'component',
                    key: 'component',
                    align: 'center'
                    // width: 30,
                    // fixed: 'left',
                },
                {
                    title: '数量',
                    dataIndex: 'number',
                    key: 'number',
                    align: 'center'
                    // width: 30,
                    // fixed: 'left',
                },
                {
                    title: '复杂度',
                    children: [
                        {
                            title: '简单',
                            align: 'center',
                            children: [{
                                title: '计数',
                                align: 'center',
                                children: [{
                                    title: 'A',
                                    // width: 30,
                                    dataIndex: 'A',
                                    align: 'center'
                                }],
                            },
                            {
                                title: '权重',
                                align: 'center',
                                children: [{
                                    title: 'B',
                                    dataIndex: 'B',
                                    align: 'center',
                                    // width: 30,
                                }],
                            },
                            {
                                title: '功能点数',
                                align: 'center',
                                children: [{
                                    title: 'C=A*B',
                                    align: 'center',
                                    dataIndex: 'C',
                                    // width: 30,
                                }],
                            }
                            ],
                        },
                        {
                            title: '平均',
                            align: 'center',
                            children: [{
                                title: '计数', children: [{
                                    align: 'center',
                                    dataIndex: 'D',
                                    title: 'D',
                                    // width: 30,
                                }],
                            },
                            {
                                title: '权重',
                                align: 'center',
                                children: [{
                                    dataIndex: 'E',
                                    align: 'center',
                                    title: 'E',
                                    // width: 30,
                                }],
                            },
                            {
                                title: '功能点数',
                                align: 'center',
                                children: [{
                                    dataIndex: 'F',
                                    title: 'F=D*E',
                                    align: 'center',
                                    // width: 30,
                                }],
                            }],
                        },
                        {
                            title: '复杂',
                            align: 'center',
                            children: [{
                                title: '计数',
                                align: 'center',
                                children: [{
                                    dataIndex: 'G',
                                    align: 'center',
                                    title: 'G',
                                    // width: 30,
                                }],
                            },
                            {
                                title: '权重',
                                align: 'center',
                                children: [{
                                    dataIndex: 'H',
                                    align: 'center',
                                    title: 'H',
                                    // width: 30,
                                }],
                            },
                            {
                                title: '功能点数',
                                align: 'center',
                                children: [{
                                    dataIndex: 'I',
                                    title: 'I=G*H',
                                    align: 'center',
                                    // width: 30,
                                }],
                            }],
                        },

                    ]
                },
                {
                    title: '未调整功能点数',
                    dataIndex: 'unchanged',
                    key: 'unchanged',
                    align: 'center',
                    // width: 800,
                    // fixed: 'right',
                },
            ],
            tableData: [
                {
                    component: 'EI',
                    number: '',
                    A: '',
                    B: '3',
                    C: '',
                    D: '',
                    E: '4',
                    F: '',
                    G: '',
                    H: '6',
                    I: '',
                    unchanged: '',
                },
                {
                    component: 'EO',
                    number: '',
                    A: '',
                    B: '4',
                    C: '',
                    D: '',
                    E: '5',
                    F: '',
                    G: '',
                    H: '7',
                    I: '',
                    unchanged: '',
                },
                {
                    component: 'EQ',
                    number: '',
                    A: '',
                    B: '3',
                    C: '',
                    D: '',
                    E: '4',
                    F: '',
                    G: '',
                    H: '6',
                    I: '',
                    unchanged: '',
                },
                {
                    component: 'ILF',
                    number: '',
                    A: '',
                    B: '7',
                    C: '',
                    D: '',
                    E: '10',
                    F: '',
                    G: '',
                    H: '15',
                    I: '',
                    unchanged: '',
                },
                {
                    component: 'EIF',
                    number: '',
                    A: '',
                    B: '5',
                    C: '',
                    D: '',
                    E: '7',
                    F: '',
                    G: '',
                    H: '10',
                    I: '',
                    unchanged: '',
                },
            ]
        }
    },
    computed:{
        c(){
            return function(index)
            {
                this.tableData[index].C = (parseInt(this.tableData[index].A)? parseInt(this.tableData[index].A):0)*parseInt(this.tableData[index].B)
                return this.tableData[index].C
            }
        },
        f(){
            return function(index)
            {
                this.tableData[index].F = (parseInt(this.tableData[index].D)? parseInt(this.tableData[index].D):0)*parseInt(this.tableData[index].E)
                return this.tableData[index].F
            }
        },
        i(){
            return function(index)
            {
                this.tableData[index].I = (parseInt(this.tableData[index].G)? parseInt(this.tableData[index].G):0)*parseInt(this.tableData[index].H)
                return this.tableData[index].I
            }
        },
        number(){
            return function(index)
            {
                this.tableData[index].number = (parseInt(this.tableData[index].A)? parseInt(this.tableData[index].A):0)+(parseInt(this.tableData[index].D)? parseInt(this.tableData[index].D):0)+(parseInt(this.tableData[index].G)? parseInt(this.tableData[index].G):0)
                return this.tableData[index].number
            }
        },
        unchanged(){
            return function(index)
            {
                this.tableData[index].unchanged = (parseInt(this.tableData[index].C)? parseInt(this.tableData[index].C):0)+(parseInt(this.tableData[index].F)? parseInt(this.tableData[index].F):0)+(parseInt(this.tableData[index].I)? parseInt(this.tableData[index].I):0)
                return this.tableData[index].unchanged
            }
        },
    },
    methods: {
        created() {
            this.gettableData()
        },
        updated() {
            // 用于防止表格合计行不显示
            this.$nextTick(() => {
                this.$refs['detailTable'].doLayout();
            })
        },
        pdfHandle() {
            window.open('/#/show', "_blank")
        },
        pdfHandle2() {
            window.open('/#/show', "_blank")
        },
        getSummaries(param, val) {
            const { columns, data } = param;
            const sums = [];
            columns.forEach((column, index) => {
                if (index === 0) {
                    sums[index] = (() => {
                        // let el=<p>未调整功能点</p>
                    })();
                    return;
                }
                if (index === 11) {
                    sums[index] = (() => {
                        // let num=<p >￥{this.tableData[val].nonum.toFixed(2)}</p>
                        return num;
                    })();
                    return;
                }
            });
            return sums;
        },
        count() {
        },
    }
}
</script>

<style scoped>
.title {
    text-align: center;
    font-family: sans-serif;
    font-size: 30px;
}

.secondtitle {
    text-indent: 2em;
    font-weight: bold;
    margin-left: 30px;
    margin-right: 30px;
}

.maintable {
    text-align: center;
    font-family: sans-serif;
    font-size: 30px;
}

.button1 {
    margin-left: 25px;
}

.button2 {
    margin-left: 15px;
}

.button3 {

    float: right;
    margin-top: 10px;
    margin-right: 50px;

}

.button4 {

    margin-left: 250px;

}

.content {
    text-indent: 2em;
    margin-left: 20px;
    margin-right: 20px;
}

.guidance {
    position: absolute;
    right: 50px;
    font-weight: bold;
}

:deep(.ant-table .ant-table-thead > tr > th) {
    border-width: 1px;
}
</style> 
