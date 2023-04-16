<template lang="">
  <a-back-top />
    <strong style="color: rgba(64, 64, 64, 0.6)"></strong>
  <div>
    <Layout>
      <!-- 头部 -->
      <Header>
        <a-card style="width: 100%" hoverable>
          <a-row type="flex" justify="space-around" align="middle">
            <a-col :span="8"></a-col>
            <a-col :span="8"><h1>动态投资回收期实验</h1></a-col>
            <a-col :span="4"><a-button type="primary">实验报告指导书下载</a-button></a-col>
            <a-col :span="4"><a-button type="primary">模版下载</a-button></a-col>
          </a-row>
        </a-card>
      </Header>
      <br>
      <!-- 内容部分 -->
      <Content>
        <a-card style="width: 100%" hoverable>
          <a-row>
            <a-col :span="20">
              <a-row>
                <a-col :span="24">
                  <h1>一、实验目的</h1>
                  <p>
                    本实验旨在通过动态投资回收期的计算方法，评估软件开发项目的投资回收期，并分析项目的经济效益和风险。
                  </p>
                </a-col>
              </a-row>
              <a-divider></a-divider>
              <a-row>
                <a-col :span="24">
                  <h1>二、实验内容</h1>
                  <p>
                    本实验旨在通过动态投资回收期的计算方法，评估软件开发项目的投资回收期，并分析项目的经济效益和风险。
                  </p>
                </a-col>
              </a-row>
              <a-divider></a-divider>
              <a-row>
                <a-col :span="24">
                  <h1>三、实验原理</h1>
                  <p>
                    本实验旨在通过动态投资回收期的计算方法，评估软件开发项目的投资回收期，并分析项目的经济效益和风险。
                  </p>
                </a-col>
              </a-row>
              <a-divider></a-divider>
              <a-row>
                <a-col :span="24">
                  <h1>四、实验步骤</h1>
                  <p>
                    本实验旨在通过动态投资回收期的计算方法，评估软件开发项目的投资回收期，并分析项目的经济效益和风险。
                  </p>
                </a-col>
              </a-row>
              <a-divider></a-divider>
              <a-row>   
                <a-col :span="24">
                  <h1>五、实验结果</h1>
                  <p>
                    本实验旨在通过动态投资回收期的计算方法，评估软件开发项目的投资回收期，并分析项目的经济效益和风险。
                  </p>
                </a-col>
              </a-row>
              <a-divider></a-divider>
              <a-row>   
                <a-col :span="24">
                  <h1>六、实验思考</h1>
                  <p>
                    本实验旨在通过动态投资回收期的计算方法，评估软件开发项目的投资回收期，并分析项目的经济效益和风险。
                  </p>
                </a-col>
              </a-row>
              <a-divider></a-divider>   
            </a-col> 
            <a-col :span="4">
              <a-anchor>
                <a-anchor-link href="#h1" title="Basic demo" />
                <a-anchor-link href="#components-anchor-demo-static" title="Static demo" />
                <a-anchor-link
                  href="#components-anchor-demo-basic"
                  title="Basic demo with Target"
                  target="_blank"/>
                <a-anchor-link href="#API" title="API">
                  <a-anchor-link href="#Anchor-Props" title="Anchor Props" />
                  <a-anchor-link href="#Link-Props" title="Link Props" />
                </a-anchor-link>
              </a-anchor>
            </a-col>
          </a-row>
        </a-card>
      </Content>
      <br>
      <!-- 页脚部分 -->
      <Footer>
        <a-card style="width: 100%" hoverable>
          <a-row type="flex" justify="center" align="top">
            <a-col :span="20"></a-col>
            <a-col :span="4">
              <a-button type="primary">提交</a-button>
            </a-col>
          </a-row>
        </a-card>
      </Footer>
    </Layout>
  </div>

</template>
<script lang="ts">
export default {
  name: "Exp5_dongtaitouzihuishou",
};
</script>

<style lang="less">

</style>