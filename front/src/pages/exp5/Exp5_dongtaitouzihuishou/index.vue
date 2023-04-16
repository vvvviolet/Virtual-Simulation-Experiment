<template lang="">
  <div> <Layout> 
    <Header>
  <a-row>
    <a-col :span="16"><h1>动态投资回收期实验</h1></a-col>
    <a-col :span="4"><a-button type="primary">实验报告指导书下载</a-button></a-col>
    <a-col :span="4"><a-button type="primary">模版下载</a-button></a-col>
  </a-row>
  </Header> 
  <Layout> 
    <Sider> 
      <div style="">
  </div> 
    </Sider> 
  <Content> 
    <h1>一、实验目的</h1> 
    <h1>二、实验原理</h1>
    <h1>三、实验步骤</h1> 
    <h1>四、实验结果</h1> </Content> 
    <Sider>right sidebar</Sider>
  </Layout> 
  <Footer>footer</Footer> 
  </Layout> </div>
</template>
<script lang="ts">
export default {
  name: "Exp5_dongtaitouzihuishou",
};
</script>

<style lang="less"></style>
