<!-- 0.实验报告模板 -->
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
