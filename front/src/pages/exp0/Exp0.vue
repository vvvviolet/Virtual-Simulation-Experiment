<!-- 0.实验报告模板 -->
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
  import { useMenuStore } from '@/store';
import { useExperimentStore } from '@/store/experiment';
  import { useRoute } from 'vue-router';
  const { getExperiment, getExperimentList } = useExperimentStore();
  const { getMenuList } = useMenuStore();
  export default {
    name: 'Exp0',
    mounted() {
      const rt = useRoute()
      console.log(rt.meta)
      // const d = getExperimentInfo(rt.meta)
      // console.log(d)
    },    
  };
  function getExperimentInfo(title:string) {
    getExperiment(1)
    .then((res) => {
        // console.log(res)
        return res.data
      })
    getExperimentList()
    .then((res) => {
        // console.log(res)
        return res.data
      })
  }
</script>

<style scoped lang="less">
  .title {
    text-align: center;
    font-family: sans-serif;
    font-size: 30px;
  }
</style>
