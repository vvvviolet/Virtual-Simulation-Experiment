<!-- 1.软件规模估算实验（FP方法）
包括:IFPUG方法、NESMA方法、MARK II方法、COSMIC方法 -->
<template>
  <h1 class="title">
    {{ $route.meta.title }}
    <a-button class="button1" type="primary" shape="round">
      <template #icon> <DownloadOutlined /> </template>实验指导书下载
    </a-button>
    <a-button class="button2" type="primary" shape="round">
      <template #icon> <DownloadOutlined /> </template>实验报告模板下载
    </a-button>
    </h1>
  <RouterView />
</template>

<script lang="ts">
  export default {
    name: 'Exp1',
    mounted() {
      this.$router.afterEach((to) => {
        console.log(to);
        document.title = to.title || '实验一';
      });
    },
  };
</script>

<style scoped lang="less">
  .title {
    text-align: center;
    font-family: sans-serif;
    font-size: 30px;
  }
</style>
