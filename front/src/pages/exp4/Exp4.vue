<!-- 4软件测试成本估算实验
成本估算的基础: 软件测试工作量，effot 来源于软件规模。采用相关 GB 国家标准 -->
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
      name: 'Exp4',
    };
  </script>
  
  <style scoped lang="less"></style>