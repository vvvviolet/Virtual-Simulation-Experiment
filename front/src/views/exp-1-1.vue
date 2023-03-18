<template>
    <h1>实验一：软件规模估算实验</h1>
    <p>实验简介</p>
    <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="date" label="Date" width="180" />
    <el-table-column prop="name" label="Name" width="180" />
    <el-table-column prop="address" label="Address" />
  </el-table>
  <el-button type="primary" @click="pdfHandle">实验指导书</el-button>
</template>

<script>
export default {

    data() {
        return{
            test:'21111'
        }
    },
    methods:{
        pdfHandle(){
          
            window.open('/#/show',"_blank")
        }
    }
}

</script>