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
    mounted() {
      const rt = useRoute()
      console.log(rt.meta)
      const d = getExperimentInfo(rt.meta.id)
      // console.log(d)
    },    
  };
  import { useExperimentStore } from '@/store/experiment';
  import { useMenuStore } from '@/store/menu';
  import { useRoute } from 'vue-router';
  const { getExperiment, getExperimentList } = useExperimentStore();
  const { getMenuList } = useMenuStore();
  
  function getExperimentInfo(id:number) {
    getExperiment(id)
    .then((res) => {
        console.log(res)
        return res.data
      })
    // getExperimentList()
    // .then((res) => {
    //     // console.log(res)
    //     return res.data
    //   })
  }
</script>

<style scoped lang="less">
  .title {
    text-align: center;
    font-family: sans-serif;
    font-size: 30px;
  }
</style>
