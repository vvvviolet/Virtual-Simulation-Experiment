<template>
        <a-layout>
          <a-layout-header class="title">实验5 单方案经济评价实验 </a-layout-header>
          <a-layout-header style="border-bottom:2px solid #CCC " >
          <a-button type="primary" size='large' shape="round" :style="{ position: 'relative',float: 'right',left:'10px'}">
            <template #icon>
            <DownloadOutlined />
            </template>
              实验报告书
          </a-button>
         <a-button type="primary" size='large' shape="round" :style="{ position: 'relative',float: 'right'}">
            <template #icon>
           <DownloadOutlined />
           </template>
             实验模板
          </a-button>
          </a-layout-header>
        </a-layout>
      <a-layout>
      <a-layout-header :style="{ position: 'relative', zIndex: 1, width: '100%'}">
        <div class="logo"/>
        <a-menu
          v-model:selectedKeys="selectedKeys"
          mode="horizontal"
          :style="{ lineHeight: '64px' }"
        >
        <a-menu-item key="1">实验目的和原理</a-menu-item>
        <a-menu-item key="2">实验内容与步骤</a-menu-item>
        <a-menu-item key="3">静态评价指标</a-menu-item>
        <a-menu-item key="4">动态评价指标</a-menu-item>
        <a-menu-item key="5">实验心得</a-menu-item>
        </a-menu>

      </a-layout-header>
      <a-layout-content :style="{ padding: '0 50px', marginTop: '64px' ,height:'100%'}">
        <div :style="{ background: '#fff', padding: '24px',minHeight:'600px'}">
            <div v-if="selectedKeys=='1'">
                <Head1/>
            </div>
            <div v-else-if="selectedKeys=='2'">
                <Head2/>
            </div>
            <div v-else-if="selectedKeys=='3'">
                <Head3/>
            </div>
            <div v-else-if="selectedKeys=='4'">
                <Head4/>
            </div>
        </div> 
      </a-layout-content>
      <a-layout-footer>
        By 41_pgdg
      </a-layout-footer>
    </a-layout>
  </template>
  <script lang="ts" >
  import Head1 from './Head1.vue';
  import Head2 from './Head2.vue';
  import Head3 from './Head3.vue';
  import Head4 from './Head4.vue';
  import { defineComponent, ref } from 'vue';
  export default defineComponent({
    setup() {
        return {
            selectedKeys: ref<string>("1"),
            

        };
    },
    components: { Head1, Head2, Head3, Head4 }
});
  </script>
  <style>
  .title{
    text-align:center;
    font-family: sans-serif;
    font-size:30px;
  }
  #components-layout-demo-fixed .logo {
    width: 120px;
    height: 31px;
    margin: 16px 24px 16px 0;
    float: left;
  }
  .site-layout .site-layout-background {
    background: #fff;
  }
  
  [data-theme='dark'] .site-layout .site-layout-background {
    background: #141414;
  }
  </style>
  