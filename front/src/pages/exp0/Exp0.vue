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
  </a-row>
  <hr />
  <RouterView />
  <a-button  type="primary" shape="round">
            <template #icon>
                <DownloadOutlined />
            </template>报告模板下载
  </a-button>
</template>

<script lang="ts" setup>
import { useExperimentStore } from '@/store/experiment';
import { useRoute } from 'vue-router';
const { getExperiment } = useExperimentStore();
const rt = useRoute()

function downLoadFile(){
  getExperiment(rt.meta.id)
    .then((res) => {
      console.log(res.file)
      const fileName = res.file
      if (!fileName) {
        return;
      }
      let url = window.URL.createObjectURL(new Blob([fileName]));
      let link = document.createElement('a');
      link.style.display = 'none';
      link.href = url;
      link.setAttribute('download', fileName);
      document.body.appendChild(link);
      link.click();
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
