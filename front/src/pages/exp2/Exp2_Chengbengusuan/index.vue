<template>
<h1>成本估算基础</h1>

</template>

<script>
import { Document } from '@element-plus/icons-vue'
export default {
    // name: 'Exp1_IFPUG',
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
</style>