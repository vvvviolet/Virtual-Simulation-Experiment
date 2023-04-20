<!-- 1.软件规模估算实验（FP方法）
包括:IFPUG方法、NESMA方法、MARK II方法、COSMIC方法 -->
<template>
  <a-row  type="flex" justify-content="center" > 
    <a-col :span="10"><h1>{{ $route.meta.title }}</h1></a-col>   
    <a-col :span="10"></a-col>  
    <a-col :span="2">
      <a-button class="button1" type="primary" shape="round" >
            <template #icon>
                <DownloadOutlined />
            </template>指导书下载
        </a-button>
      </a-col>
    <a-col :span="2">
      <a-button class="button1" type="primary" shape="round" >
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
    name: 'Exp1',
    // mounted() {
    //   this.$router.afterEach((to) => {
    //     console.log(to);
    //     document.title = to.meta.title || '实验一';
    //   });
    // },
  };
</script>

<style scoped lang="less">
  .title {
    text-align: center;
    font-family: sans-serif;
    font-size: 30px;
  }
</style>
