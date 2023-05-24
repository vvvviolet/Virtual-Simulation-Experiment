<!-- 2.软件开发成本估算实验
成本估算基础：软件工作量、effort来源于软件FP规模，采用GB国家标准 -->
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
      name: 'Exp2',
    };
  </script>
  
  <style scoped lang="less"></style>