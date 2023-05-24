<!-- 6.软件项目/产品的风险影响与评价实验(大类)
包括:加权平均实验、蒙特卡洛实验、决策树实验;以及博弈论实验项目: 纳什均衡实验、不完美信息下的博弈实验. -->

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
