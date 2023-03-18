<template>
    <h1 class="title">实验1 基于IFPUG的小型软件项目规模度量实验 </h1>
    <hr />
    <!-- <span> {{ test }}</span> -->
    <el-table :data="tableData" border style="width: 100%">
    <el-table-column prop="组件" label="component" width="180" />
    <el-table-column label="复杂度">
        <el-table-column label="简单">
            <el-table-column label="计数">
                <el-table-column prop="A" label="A"/>\
            </el-table-column>
            <el-table-column label="权重">
                <el-table-column prop="B" label="B"/>
            </el-table-column>
            <el-table-column label="功能点数">
                <el-table-column prop="C=A*B" label="C"/>
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
                <el-table-column prop="F=D*E" label="F"/>
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
                <el-table-column prop="I=G*H" label="I"/>
            </el-table-column>
        </el-table-column>
    </el-table-column>
    <!-- <el-table-column prop="name" label="Name" width="180" />
    <el-table-column prop="address" label="Address" /> -->
  </el-table>
</template>

<script>
export default {

    data() {
        return{
            test:'21111',
            tableData: []
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
</style>