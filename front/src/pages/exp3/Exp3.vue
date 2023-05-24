<!-- 3.碳排放需求与供给实验
寻求碳排放权市场交易的供给与需求平衡点，以达成均衡价格，建议考虑交易的公平性 -->
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
      name: 'Exp3',
    };
  </script>
  
  <style scoped lang="less"></style>