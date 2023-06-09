<!-- 6.碳排放需求与供给实验
寻求碳排放权市场交易的供给与需求平衡点，以达成均衡价格，建议考虑交易的公平性 -->
<template>
  <div style="padding:2%">
  <div type="flex" justify-content="center" style="height:50px">
    <div style="float:left">
      <h1 class="title">{{ $route.meta.title }} </h1>
    </div>
    <div style="float:right">
      <a-button style="margin-right:20px" type="primary" shape="round" @click="downloadpdf">
        <template #icon>
          <DownloadOutlined />
        </template>实验指导书下载
      </a-button>
      <a-button class="button2" type="primary" shape="round" @click="downloaddoc">
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

<script lang="ts">
export default {
  name: 'Exp6',
  mounted() {
    const rt = useRoute()
    console.log(rt.meta)
    const d = getExperimentInfo(rt.meta.id)
    // console.log(d)
  },
  methods: {
    downloadpdf() {
      const url ="http://1.15.177.18:8080/碳排放权供给与需求实验指导书.pdf"
      const downloadWindow = window.open(url, "_blank");
      downloadWindow?.focus();
    },
    downloaddoc() {
      const url ="http://1.15.177.18:8080/碳排放权供给与需求实验报告模版.docx"
      const downloadWindow = window.open(url, "_blank");
      downloadWindow?.focus();
      setTimeout(() => {
        downloadWindow?.close();
      }, 2000);
    }
  }
};
import { useExperimentStore } from '@/store/experiment';
import { useMenuStore } from '@/store/menu';
import { useRoute } from 'vue-router';
const { getExperiment, getExperimentList } = useExperimentStore();
const { getMenuList } = useMenuStore();

function getExperimentInfo(id: number) {
  getExperiment(id)
    .then((res) => {
      console.log(res)
      return res.data
    })
}

</script>

<style scoped lang="less">
.title {
  font-family: sans-serif;
  font-size: 30px;
}
</style>
