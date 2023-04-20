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
  import { useExperimentStore } from '@/store/experiment';
  import { useRoute } from 'vue-router';

  export default {
    name: 'Exp0',
    mounted() {
      const rt = useRoute()
      console.log(rt)
      const d = getExperimentInfo(1)
      
    },    
  };
  const exprimentStore = useExperimentStore();
  function getExperimentInfo(id:number) {
    // console.log(params)
    exprimentStore
    .getExperiment(id)
    .then((res) => {
        console.log(res)
      })
      .catch((e) => {
        // emit('failure', e.message, params);
      })
      .finally(() => (console.log('finish')));
  }
</script>

<style scoped lang="less">
  .title {
    text-align: center;
    font-family: sans-serif;
    font-size: 30px;
  }
</style>
