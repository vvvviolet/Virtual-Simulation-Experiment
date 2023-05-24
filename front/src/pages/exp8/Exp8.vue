<!-- 8.软件项目/产品的财务评价实验
包括: 净现值法、IRR 法、投资回收期法等 -->
<template>
     <div style="padding:2%">

<div type="flex" justify-content="center" style="height:50px">
  <div style="float:left">
    <h1 class="title">{{ $route.meta.title }} </h1>
  </div>
  <div style="float:right">
    <a-button style="margin-right:20px" type="primary" shape="round" @click="downLoadFile">
      <template #icon >
        <DownloadOutlined  />
      </template>实验指导书下载 
    </a-button>
    
  </div>
</div>

<hr />
<RouterView />
    <a-button style="float:right" class="button3" type="primary" shape="round">
      <template >
          <DownloadOutlined />
      </template>实验报告提交
  </a-button>
</div>
  </template>
  
  <script lang="ts">
    export default {
      name: 'Exp6',
    };
  </script>
  
  <style scoped lang="less"></style>