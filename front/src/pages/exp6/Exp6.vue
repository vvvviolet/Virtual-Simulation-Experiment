<!-- 6.软件项目/产品的风险影响与评价实验(大类)
包括:加权平均实验、蒙特卡洛实验、决策树实验;以及博弈论实验项目: 纳什均衡实验、不完美信息下的博弈实验. -->

<template>
  <a-row  type="flex" justify-content="center" > 
    <a-col :span="12"><h1>{{ $route.meta.title }}</h1></a-col>   
    <a-col :span="8"></a-col>  
    <a-col :span="2">
      <a-button   type="primary" shape="round">
            <template #icon>
                <DownloadOutlined />
            </template>指导书下载
        </a-button>
      </a-col>
    <a-col :span="2">
      <a-button  type="primary" shape="round">
            <template #icon>
                <DownloadOutlined />
            </template>报告模板下载
        </a-button>
      </a-col>
  </a-row>
  <hr />
  <RouterView />
</template>

<script lang="ts">
  export default {
    name: 'Exp6',
  };
</script>

<style scoped lang="less"></style>
