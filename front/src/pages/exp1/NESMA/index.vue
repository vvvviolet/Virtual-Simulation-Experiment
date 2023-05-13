<template>
  <a-tabs v-model:activeKey="activeKey" :tabBarGutter="100">
    <a-tab-pane key="1" tab="预估功能点分析方法"><One></One></a-tab-pane>
    <a-tab-pane key="2" tab="估算功能点分析方法" force-render><Two></Two></a-tab-pane>
    <a-tab-pane key="3" tab="详细功能点分析方法"><Three></Three></a-tab-pane>
  </a-tabs>
</template>

<script setup lang="ts">
  import { ref, watch } from 'vue';
  import './styles/main.css';
  import One from './views/1.vue';
  import Two from './views/2.vue';
  import Three from './views/3.vue';
  import { useExp1Store } from './stores';

  const activeKey = ref('1');
  const store = useExp1Store();
  watch(activeKey, () => {
    store.clear();
  });
</script>

<style scoped></style>