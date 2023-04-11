<template>
  <h1 class="title" >实验3 碳排放需求与供给实验
      <span>  <el-button  class="guidance" type="primary" text  @click="pdfHandle" ><el-icon size="25px"><Document /></el-icon>实验指导书下载</el-button></span> 
  </h1>
  <hr />
  <h2>一、实验目的  </h2>
  <p class="content">1位同学</p>
  <h2>二、实验内容  </h2>
  <p class="content">2位同学</p>
  <h2>三、实验原理  </h2>
  <p class="content">1位同学</p>
  <h2>四、实验步骤  </h2>
  <p class="content">这里写我们的从其他页面迁移过来的内容</p>
  <h2>五、实验结果  </h2>
  <p class="content">暂时不写</p>
  <h2>六、实验思考  </h2>
  <p class="content">暂时不写</p>
</template>

<script lang="ts">
  export default {
  name: 'Exp3_carbon_emission',
  methods: {
    pdfHandle() {
      window.open('/#/show',"_blank")
    },
  }
};
</script>

<style scoped>
.title{
  text-align:center;
  font-family: sans-serif;
  font-size:30px;
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