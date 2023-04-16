<template lang="">
  <div>
    <Layout>
      <!-- 头部 -->
      <Header>
        <a-row>
          <a-col :span="16"> </a-col>
          <a-col :span="4"><a-button type="primary">实验报告指导书下载</a-button></a-col>
          <a-col :span="4"><a-button type="primary">模版下载</a-button></a-col>
        </a-row>
        <h1>动态投资回收期实验</h1>
      </Header>
      <!-- 内容部分 -->
      <Layout>
        <Content>
          <a-row>

          </a-row>
          <h1>一、实验目的</h1>
          <h1>二、实验原理</h1>
          <h1>三、实验步骤</h1>
          <h1>四、实验结果</h1>
          <h1>五、实验心得</h1>
        </Content>
        <Sider>
          
        </Sider>
      </Layout>
      <!-- 页脚部分 -->
      <Footer>。
        <a-card >
          <template #cover>
            <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
          </template>
          <a-card-meta title="Europe Street beat">
            <template #description>www.instagram.com</template>
          </a-card-meta>
        </a-card>
        <a-row type="flex" justify="center" align="top">
          <a-col :span="20"></a-col>
          <a-col :span="4">
            <a-card hoverable style="width: 100%">
              <a-button type="primary">提交</a-button>
            </a-card>
          </a-col>
        </a-row>
      </Footer>
    </Layout>
  </div>

</template>
<script lang="ts">
export default {
  name: "Exp5_dongtaitouzihuishou",
};
</script>

<style lang="less"></style>
