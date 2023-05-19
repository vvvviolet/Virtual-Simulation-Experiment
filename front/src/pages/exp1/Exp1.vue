<!-- 1.软件规模估算实验（FP方法）
包括:IFPUG方法、NESMA方法、MARK II方法、COSMIC方法 -->
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
      <a-button class="button2" type="primary" shape="round">
        <template #icon>
          <DownloadOutlined />
        </template>实验报告模板下载
      </a-button>
    </div>
  </div>

  <hr />
  <RouterView />
</div>
</template>

<script lang="ts" setup>
import { useExperimentStore } from '@/store/experiment';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
const { getExperiment } = useExperimentStore();
const rt = useRoute()
onMounted(()=>{
  console.log(rt.meta)
})
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
  font-family: sans-serif;
  font-size: 30px;
}
</style>
