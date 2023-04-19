<template>

    
    <!-- <span> {{ test }}</span> -->
    <h2>一、实验目的  </h2>
    <p class="content">理解软件项目规模度量功能点法原理，通过实验操作掌握功能点法。 学生应以小组为单位，根据本小组“软件工程管理与经济”课程设计项目架构及组件等设计成果，以功能点方法测量该项目的规模(功能点数量)。 建议选用某一种功能点方法度量课程设计项目的功能点，并采用另外一种功能点方法或其他的软件规模度量方法对前一种方法的度量结果进行验证。 本实验为课内设计性实验项目，实验学时 1 学时，完成实验报告 1 学时。
    </p>
    <h2>二、实验参数  </h2>
    
    <el-table :data="tableData" border style="width: 100%"  :summary-method="data=>getSummaries(data,index)" show-summary ref="detailTable">
    <el-table-column prop="component" label="组件" width="80" />
    <el-table-column prop="number" label="数量" width="80" />
    <el-table-column label="复杂度">
        <el-table-column label="简单">
            <el-table-column label="计数">
                <el-table-column prop="A" label="A"/>\
            </el-table-column>
            <el-table-column label="权重">
                <el-table-column prop="B" label="B"/>
            </el-table-column>
            <el-table-column label="功能点数">
                <el-table-column prop="C" label="C=A*B"/>
            </el-table-column>
        </el-table-column>
        <el-table-column label="平均">
            <el-table-column label="计数">
                <el-table-column prop="D" label="D"/>
            </el-table-column>
            <el-table-column label="权重">
                <el-table-column prop="E" label="E"/>
            </el-table-column>
            <el-table-column label="功能点数">
                <el-table-column prop="F" label="F=D*E"/>
            </el-table-column>
        </el-table-column>
        <el-table-column label="复杂">
            <el-table-column label="计数">
                <el-table-column prop="G" label="G"/>
            </el-table-column>
            <el-table-column label="权重">
                <el-table-column prop="H" label="H"/>
            </el-table-column>
            <el-table-column label="功能点数">
                <el-table-column prop="I" label="I=G*H"/>
            </el-table-column>
        </el-table-column>
    </el-table-column>
    <el-table-column prop="nonum" label="未调整功能点数" width="80" />
    <!-- <el-table-column prop="name" label="Name" width="180" />
    <el-table-column prop="address" label="Address" /> -->
    </el-table>

</template>

<script lang="ts">
import { Document } from '@element-plus/icons-vue'
export default {
    name: 'Exp1_COSMIC',
    data() {
        return{     
            test:'21111',
            sum:'',
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
                        // return num;
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
</style>