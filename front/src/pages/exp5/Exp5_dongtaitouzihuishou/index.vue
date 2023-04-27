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
            <!-- 正文部分 -->
            <a-col :span="19">
              <a-row>
                <a-col :span="24">
                  <h1 id="one">一、实验目的</h1>
                  <p>
                    本实验旨在通过动态投资回收期的计算方法，评估软件开发项目的投资回收期，并分析项目的经济效益和风险。
                  </p>
                </a-col>
              </a-row>
              <a-divider></a-divider>
              <a-row>
                <a-col :span="24">
                  <h1 id="two">二、实验原理</h1>
                  <p>
                    动态投资回收期（Dynamic Payback Period）是一种用于评估投资回报率的方法，其基本原理是将投资成本与现金流量相比较，计算出从投资开始到投资收回的时间，即投资回收期。动态投资回收期相较于传统的投资回收期更加精细，能够考虑现金流量的时间价值因素，能够更准确地评估投资的回报率和风险。
                  </p>
                </a-col>
              </a-row>
              <a-divider></a-divider>
              <a-row>
                <a-col :span="24">
                  <h1>三、实验步骤</h1>
                  <h2>3.1 制定项目计划和预算</h2>
                  <p>根据市场调研和项目需求，公司制定了详细的项目计划和预算，包括项目的开发周期、人力资源投入、硬件和软件设备购置、运营成本等。</p>
                  <p>根据项目计划和预算，计算出项目的总投资成本，包括项目开发过程中的各种成本和运营成本。</p>
                  <h2>3.2 计算项目现金流</h2>
                  <p>根据项目计划和预算，计算出项目的现金流量，包括项目开发过程中的各种收益和运营收益。</p>
                  <p>时点0表示项目开始的时间，时点1-时点6代表各年终止时点。单位：千元。</p>
                  <a-row justify="left">
                    <a-col :span="5">项目/年份</a-col>
                    <a-col :span="3">0</a-col>
                    <a-col :span="3">1</a-col>
                    <a-col :span="3">2</a-col>
                    <a-col :span="3">3</a-col>
                    <a-col :span="3">4</a-col>
                    <a-col :span="3">5</a-col>
                  </a-row>
                      
                  <a-row justify="left">
                    <a-col :span="4">1. 现金流入</a-col>
                    <a-col :span="20">
                      <a-input-group compact>
                        <a-input v-model:value="cash_flow0" style="width: 15%" />
                        <a-input v-model:value="cash_flow1" style="width: 15%" />
                        <a-input v-model:value="cash_flow2" style="width: 15%" />
                        <a-input v-model:value="cash_flow3" style="width: 15%" />
                        <a-input v-model:value="cash_flow4" style="width: 15%" />
                        <a-input v-model:value="cash_flow5" style="width: 15%" />
                      </a-input-group>
                    </a-col>
                  </a-row>
                  <a-row justify="left">
                        <a-col :span="4">1.1 营业收入</a-col>
                        <a-col :span="20"><a-input-group compact>
                          <a-input v-model:value="cash_flow0" style="width: 15%" />
                          <a-input v-model:value="cash_flow1" style="width: 15%" />
                          <a-input v-model:value="cash_flow2" style="width: 15%" />
                          <a-input v-model:value="cash_flow3" style="width: 15%" />
                          <a-input v-model:value="cash_flow4" style="width: 15%" />
                          <a-input v-model:value="cash_flow5" style="width: 15%" />
                        </a-input-group>
                        </a-col>
                      </a-row>
                      <a-row justify="left">
                        <a-col :span="4">1.2 回收固定资产余值</a-col>
                        <a-col :span="20"><a-input-group compact>
                          <a-input v-model:value="cash_flow0" style="width: 15%" />
                          <a-input v-model:value="cash_flow1" style="width: 15%" />
                          <a-input v-model:value="cash_flow2" style="width: 15%" />
                          <a-input v-model:value="cash_flow3" style="width: 15%" />
                          <a-input v-model:value="cash_flow4" style="width: 15%" />
                          <a-input v-model:value="cash_flow5" style="width: 15%" />
                        </a-input-group>
                        </a-col>
                      </a-row>
                       <a-row justify="left">
                        <a-col :span="4">1.3 回收无形资产余值</a-col>
                        <a-col :span="20"><a-input-group compact>
                          <a-input v-model:value="cash_flow0" style="width: 15%" />
                          <a-input v-model:value="cash_flow1" style="width: 15%" />
                          <a-input v-model:value="cash_flow2" style="width: 15%" />
                          <a-input v-model:value="cash_flow3" style="width: 15%" />
                          <a-input v-model:value="cash_flow4" style="width: 15%" />
                          <a-input v-model:value="cash_flow5" style="width: 15%" />
                        </a-input-group>
                        </a-col>
                      </a-row>
                      <a-row justify="left">
                        <a-col :span="4">1.4 回收流动资金</a-col>
                        <a-col :span="20"><a-input-group compact>
                          <a-input v-model:value="cash_flow0" style="width: 15%" />
                          <a-input v-model:value="cash_flow1" style="width: 15%" />
                          <a-input v-model:value="cash_flow2" style="width: 15%" />
                          <a-input v-model:value="cash_flow3" style="width: 15%" />
                          <a-input v-model:value="cash_flow4" style="width: 15%" />
                          <a-input v-model:value="cash_flow5" style="width: 15%" />
                        </a-input-group>
                        </a-col>
                      </a-row>
                    <a-divider></a-divider>
                     <a-row justify="left">
                    <a-col :span="5">项目/年份</a-col>
                    <a-col :span="3">0</a-col>
                    <a-col :span="3">1</a-col>
                    <a-col :span="3">2</a-col>
                    <a-col :span="3">3</a-col>
                    <a-col :span="3">4</a-col>
                    <a-col :span="3">5</a-col>
                  </a-row>
                      
                  <a-row justify="left">
                    <a-col :span="4">2. 现金流出</a-col>
                    <a-col :span="20">
                      <a-input-group compact>
                        <a-input v-model:value="cash_flow0" style="width: 15%" />
                        <a-input v-model:value="cash_flow1" style="width: 15%" />
                        <a-input v-model:value="cash_flow2" style="width: 15%" />
                        <a-input v-model:value="cash_flow3" style="width: 15%" />
                        <a-input v-model:value="cash_flow4" style="width: 15%" />
                        <a-input v-model:value="cash_flow5" style="width: 15%" />
                      </a-input-group>
                    </a-col>
                  </a-row>
                  <a-row justify="left">
                        <a-col :span="4">2.1 建设投资</a-col>
                        <a-col :span="20"><a-input-group compact>
                          <a-input v-model:value="cash_flow0" style="width: 15%" />
                          <a-input v-model:value="cash_flow1" style="width: 15%" />
                          <a-input v-model:value="cash_flow2" style="width: 15%" />
                          <a-input v-model:value="cash_flow3" style="width: 15%" />
                          <a-input v-model:value="cash_flow4" style="width: 15%" />
                          <a-input v-model:value="cash_flow5" style="width: 15%" />
                        </a-input-group>
                        </a-col>
                      </a-row>
                      <a-row justify="left">
                        <a-col :span="4">2.2 流动资金</a-col>
                        <a-col :span="20"><a-input-group compact>
                          <a-input v-model:value="cash_flow0" style="width: 15%" />
                          <a-input v-model:value="cash_flow1" style="width: 15%" />
                          <a-input v-model:value="cash_flow2" style="width: 15%" />
                          <a-input v-model:value="cash_flow3" style="width: 15%" />
                          <a-input v-model:value="cash_flow4" style="width: 15%" />
                          <a-input v-model:value="cash_flow5" style="width: 15%" />
                        </a-input-group>
                        </a-col>
                      </a-row>
                       <a-row justify="left">
                        <a-col :span="4">2.3 经营成本</a-col>
                        <a-col :span="20"><a-input-group compact>
                          <a-input v-model:value="cash_flow0" style="width: 15%" />
                          <a-input v-model:value="cash_flow1" style="width: 15%" />
                          <a-input v-model:value="cash_flow2" style="width: 15%" />
                          <a-input v-model:value="cash_flow3" style="width: 15%" />
                          <a-input v-model:value="cash_flow4" style="width: 15%" />
                          <a-input v-model:value="cash_flow5" style="width: 15%" />
                        </a-input-group>
                        </a-col>
                      </a-row>
                      <a-row justify="left">
                        <a-col :span="4">2.4 维持运营投资</a-col>
                        <a-col :span="20"><a-input-group compact>
                          <a-input v-model:value="cash_flow0" style="width: 15%" />
                          <a-input v-model:value="cash_flow1" style="width: 15%" />
                          <a-input v-model:value="cash_flow2" style="width: 15%" />
                          <a-input v-model:value="cash_flow3" style="width: 15%" />
                          <a-input v-model:value="cash_flow4" style="width: 15%" />
                          <a-input v-model:value="cash_flow5" style="width: 15%" />
                        </a-input-group>
                        </a-col>
                      </a-row>
                      <a-row justify="left">
                        <a-col :span="4">2.5 营业税金及附加</a-col>
                        <a-col :span="20"><a-input-group compact>
                          <a-input v-model:value="cash_flow0" style="width: 15%" />
                          <a-input v-model:value="cash_flow1" style="width: 15%" />
                          <a-input v-model:value="cash_flow2" style="width: 15%" />
                          <a-input v-model:value="cash_flow3" style="width: 15%" />
                          <a-input v-model:value="cash_flow4" style="width: 15%" />
                          <a-input v-model:value="cash_flow5" style="width: 15%" />
                        </a-input-group>
                        </a-col>
                      </a-row>
                  <a-divider></a-divider>
                  <h2>3.3 计算净现金流量</h2>
                  <p>根据现金流入和现金流出，</p>
                  <p>净现金流量=现金流入-现金流出。</p>
                  <p>累计净现金流量=年初净现金流量+当年产生的净现金流量。</p>
                  <a-row justify="left">
                    <a-col :span="5">项目/年份</a-col>
                    <a-col :span="3">0</a-col>
                    <a-col :span="3">1</a-col>
                    <a-col :span="3">2</a-col>
                    <a-col :span="3">3</a-col>
                    <a-col :span="3">4</a-col>
                    <a-col :span="3">5</a-col>
                  </a-row>
                  <a-row justify="left">
                    <a-col :span="4">净现金流量</a-col>
                    <a-col :span="20">
                      <a-input-group compact>
                        <a-input v-model:value="cash_flow0" style="width: 15%" />
                        <a-input v-model:value="cash_flow1" style="width: 15%" />
                        <a-input v-model:value="cash_flow2" style="width: 15%" />
                        <a-input v-model:value="cash_flow3" style="width: 15%" />
                        <a-input v-model:value="cash_flow4" style="width: 15%" />
                        <a-input v-model:value="cash_flow5" style="width: 15%" />
                      </a-input-group>
                    </a-col>
                  </a-row>
                  <a-row justify="left">
                    <a-col :span="4">累计净现金流量</a-col>
                    <a-col :span="20">
                      <a-input-group compact>
                        <a-input v-model:value="cash_flow0" style="width: 15%" />
                        <a-input v-model:value="cash_flow1" style="width: 15%" />
                        <a-input v-model:value="cash_flow2" style="width: 15%" />
                        <a-input v-model:value="cash_flow3" style="width: 15%" />
                        <a-input v-model:value="cash_flow4" style="width: 15%" />
                        <a-input v-model:value="cash_flow5" style="width: 15%" />
                      </a-input-group>
                    </a-col>
                  </a-row>
                  <a-divider></a-divider>
                  <h2>3.4 计算净现金流量现值</h2>
                  <p>根据净现金流量和现值系数，</p>
                  <p>净现金流量现值=各时点净现金流量✖️现值系数。</p>
                  <p>累计净现金流量现值=年初净现金流量现值+当年产生的净现金流量现值。</p>
                  <a-row justify="left">
                    <a-col :span="5">项目/年份</a-col>
                    <a-col :span="3">0</a-col>
                    <a-col :span="3">1</a-col>
                    <a-col :span="3">2</a-col>
                    <a-col :span="3">3</a-col>
                    <a-col :span="3">4</a-col>
                    <a-col :span="3">5</a-col>
                  </a-row>
                  <a-row justify="left">
                    <a-col :span="4">现值系数</a-col>
                    <a-col :span="20">
                      <a-input-group compact>
                        <a-input v-model:value="cash_flow0" style="width: 15%" />
                        <a-input v-model:value="cash_flow1" style="width: 15%" />
                        <a-input v-model:value="cash_flow2" style="width: 15%" />
                        <a-input v-model:value="cash_flow3" style="width: 15%" />
                        <a-input v-model:value="cash_flow4" style="width: 15%" />
                        <a-input v-model:value="cash_flow5" style="width: 15%" />
                      </a-input-group>
                    </a-col>
                  </a-row>
                  <a-row justify="left">
                    <a-col :span="4">净现金流量(现值)</a-col>
                    <a-col :span="20">
                      <a-input-group compact>
                        <a-input v-model:value="cash_flow0" style="width: 15%" />
                        <a-input v-model:value="cash_flow1" style="width: 15%" />
                        <a-input v-model:value="cash_flow2" style="width: 15%" />
                        <a-input v-model:value="cash_flow3" style="width: 15%" />
                        <a-input v-model:value="cash_flow4" style="width: 15%" />
                        <a-input v-model:value="cash_flow5" style="width: 15%" />
                      </a-input-group>
                    </a-col>
                  </a-row>
                  <a-row justify="left">
                    <a-col :span="4">累计净现金流量(现值)</a-col>
                    <a-col :span="20">
                      <a-input-group compact>
                        <a-input v-model:value="cash_flow0" style="width: 15%" />
                        <a-input v-model:value="cash_flow1" style="width: 15%" />
                        <a-input v-model:value="cash_flow2" style="width: 15%" />
                        <a-input v-model:value="cash_flow3" style="width: 15%" />
                        <a-input v-model:value="cash_flow4" style="width: 15%" />
                        <a-input v-model:value="cash_flow5" style="width: 15%" />
                      </a-input-group>
                    </a-col>
                  </a-row>
                </a-col>
              </a-row>
              
              <a-divider></a-divider>
              <a-row>
                <a-col :span="24">
                  <h1 id="four">四、实验内容</h1>
                  <h2>4.1 完成数据统计计算</h2>
                  <p>依照实验步骤，计算得出累计净现值现值。</p>
                <a-row justify="left">
                    <a-col :span="5">项目/年份</a-col>
                    <a-col :span="3">0</a-col>
                    <a-col :span="3">1</a-col>
                    <a-col :span="3">2</a-col>
                    <a-col :span="3">3</a-col>
                    <a-col :span="3">4</a-col>
                    <a-col :span="3">5</a-col>
                  </a-row>
                  <a-row justify="left">
                    <a-col :span="5">1. 现金流入</a-col>
                    <a-col :span="3">0</a-col>
                    <a-col :span="3">1</a-col>
                    <a-col :span="3">2</a-col>
                    <a-col :span="3">3</a-col>
                    <a-col :span="3">4</a-col>
                    <a-col :span="3">5</a-col>
                  </a-row>
                  <a-row justify="left">
                    <a-col :span="5">1.1 营业收入</a-col>
                    <a-col :span="3">0</a-col>
                    <a-col :span="3">1</a-col>
                    <a-col :span="3">2</a-col>
                    <a-col :span="3">3</a-col>
                    <a-col :span="3">4</a-col>
                    <a-col :span="3">5</a-col>
                  </a-row>
                  <a-row justify="left">
                    <a-col :span="5">1.2 回收固定资产余值</a-col>
                    <a-col :span="3">0</a-col>
                    <a-col :span="3">1</a-col>
                    <a-col :span="3">2</a-col>
                    <a-col :span="3">3</a-col>
                    <a-col :span="3">4</a-col>
                    <a-col :span="3">5</a-col>
                  </a-row>
                  <a-row justify="left">
                    <a-col :span="5">1.3 回收无形资产余值</a-col>
                    <a-col :span="3">0</a-col>
                    <a-col :span="3">1</a-col>
                    <a-col :span="3">2</a-col>
                    <a-col :span="3">3</a-col>
                    <a-col :span="3">4</a-col>
                    <a-col :span="3">5</a-col>
                  </a-row>
                  <a-row justify="left">
                    <a-col :span="5">1.4 回收流动资金</a-col>
                    <a-col :span="3">0</a-col>
                    <a-col :span="3">1</a-col>
                    <a-col :span="3">2</a-col>
                    <a-col :span="3">3</a-col>
                    <a-col :span="3">4</a-col>
                    <a-col :span="3">5</a-col>
                  </a-row>
                  <a-row justify="left">
                    <a-col :span="5">2. 现金流出</a-col>
                    <a-col :span="3">0</a-col>
                    <a-col :span="3">1</a-col>
                    <a-col :span="3">2</a-col>
                    <a-col :span="3">3</a-col>
                    <a-col :span="3">4</a-col>
                    <a-col :span="3">5</a-col>
                  </a-row>
                  <a-row justify="left">
                    <a-col :span="5">2.1 建设投资</a-col>
                    <a-col :span="3">0</a-col>
                    <a-col :span="3">1</a-col>
                    <a-col :span="3">2</a-col>
                    <a-col :span="3">3</a-col>
                    <a-col :span="3">4</a-col>
                    <a-col :span="3">5</a-col>
                  </a-row>
                  <a-row justify="left">
                    <a-col :span="5">2.2 流动资金</a-col>
                    <a-col :span="3">0</a-col>
                    <a-col :span="3">1</a-col>
                    <a-col :span="3">2</a-col>
                    <a-col :span="3">3</a-col>
                    <a-col :span="3">4</a-col>
                    <a-col :span="3">5</a-col>
                  </a-row>
                  <a-row justify="left">
                    <a-col :span="5">2.3 经营成本</a-col>
                    <a-col :span="3">0</a-col>
                    <a-col :span="3">1</a-col>
                    <a-col :span="3">2</a-col>
                    <a-col :span="3">3</a-col>
                    <a-col :span="3">4</a-col>
                    <a-col :span="3">5</a-col>
                  </a-row>
                  <a-row justify="left">
                    <a-col :span="5">2.3 经营成本</a-col>
                    <a-col :span="3">0</a-col>
                    <a-col :span="3">1</a-col>
                    <a-col :span="3">2</a-col>
                    <a-col :span="3">3</a-col>
                    <a-col :span="3">4</a-col>
                    <a-col :span="3">5</a-col>
                  </a-row>
                  <a-row justify="left">
                    <a-col :span="5">2.4 维持运营投资</a-col>
                    <a-col :span="3">0</a-col>
                    <a-col :span="3">1</a-col>
                    <a-col :span="3">2</a-col>
                    <a-col :span="3">3</a-col>
                    <a-col :span="3">4</a-col>
                    <a-col :span="3">5</a-col>
                  </a-row>
                  <a-row justify="left">
                    <a-col :span="5">2.5 营业税金及附加</a-col>
                    <a-col :span="3">0</a-col>
                    <a-col :span="3">1</a-col>
                    <a-col :span="3">2</a-col>
                    <a-col :span="3">3</a-col>
                    <a-col :span="3">4</a-col>
                    <a-col :span="3">5</a-col>
                  </a-row>
                  <a-row justify="left">
                    <a-col :span="5">净现金流量</a-col>
                    <a-col :span="3">0</a-col>
                    <a-col :span="3">1</a-col>
                    <a-col :span="3">2</a-col>
                    <a-col :span="3">3</a-col>
                    <a-col :span="3">4</a-col>
                    <a-col :span="3">5</a-col>
                  </a-row>
                  <a-row justify="left">
                    <a-col :span="5">累计净现金流量</a-col>
                    <a-col :span="3">0</a-col>
                    <a-col :span="3">1</a-col>
                    <a-col :span="3">2</a-col>
                    <a-col :span="3">3</a-col>
                    <a-col :span="3">4</a-col>
                    <a-col :span="3">5</a-col>
                  </a-row>
                  <a-row justify="left">
                    <a-col :span="5">现值系数</a-col>
                    <a-col :span="3">0</a-col>
                    <a-col :span="3">1</a-col>
                    <a-col :span="3">2</a-col>
                    <a-col :span="3">3</a-col>
                    <a-col :span="3">4</a-col>
                    <a-col :span="3">5</a-col>
                  </a-row>
                  <a-row justify="left">
                    <a-col :span="5">净现金流量(现值)</a-col>
                    <a-col :span="3">0</a-col>
                    <a-col :span="3">1</a-col>
                    <a-col :span="3">2</a-col>
                    <a-col :span="3">3</a-col>
                    <a-col :span="3">4</a-col>
                    <a-col :span="3">5</a-col>
                  </a-row>
                  <a-row justify="left">
                    <a-col :span="5">累计净现金流量(现值)</a-col>
                    <a-col :span="3">0</a-col>
                    <a-col :span="3">1</a-col>
                    <a-col :span="3">2</a-col>
                    <a-col :span="3">3</a-col>
                    <a-col :span="3">4</a-col>
                    <a-col :span="3">5</a-col>
                  </a-row>
                  <a-divider></a-divider>
                  <h2>4.2 根据公式计算动态投资回收期</h2>
                  <div style="display: flex">
                  <p style="white-space: nowrap">累计净现金流量现值由负值转变到正值的年份是：</p>
                 <a-input-number id="inputNumber" v-model:value="year" :min="1" :max="6" />
                  </div>
                  <p>动态投资回收期计算公式：DPP=（累计折现值出现正值的年数-1）+上年累计折现值的绝对值/当年净现金流量的折现值。</p>
                   <div style="display: flex">
                  <p style="white-space: nowrap">DPP=</p>
                 <a-input-number id="inputNumber" v-model:value="dpp" :min="1" :max="6" />
                  </div>
             
                </a-col>
              </a-row>
              <a-divider></a-divider>
              <a-row>   
                <a-col :span="24">
                  <h1 id="five">五、实验结果</h1>
                  <p>
                    本实验旨在通过动态投资回收期的计算方法，评估软件开发项目的投资回收期，并分析项目的经济效益和风险。
                  </p>  
                  <template>
                  <a-table :columns="columns" :data-source="data" :scroll="{ x: 1500, y: 300 }">
                    <template #bodyCell="{ column }">
                      <template v-if="column.key === 'operation'">
                        <a>action</a>
                      </template>
                    </template>
                  </a-table>
                </template>
                </a-col>
              </a-row>
              <a-divider></a-divider>
              <a-row>   
                <a-col :span="24">
                  <h1 id="six">六、实验思考</h1>
                  <p>
                    本实验旨在通过动态投资回收期的计算方法，评估软件开发项目的投资回收期，并分析项目的经济效益和风险。
                  </p>
                </a-col>
              </a-row>
              <a-divider></a-divider>   
            </a-col> 
            <a-col :span="1"></a-col>
            <!-- 侧边栏锚点 -->
            <a-col :span="4">
              <a-anchor @click="handleAnchorClick">
                <a-anchor-link href="#one" title="Basic demo" />
                <a-anchor-link href="#components-anchor-demo-static" title="Static demo" />
                <a-anchor-link
                  href="#components-anchor-demo-basic"
                  title="Basic demo with Target"/>
                <a-anchor-link href="#six" title="六、实验思考" />
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
import { ref } from 'vue';

export default {
  setup() {
    const year = ref<number>(3);
    const dpp = ref<number>(3);

    return {
      year,
      dpp
    };
  },
  name: "Exp5_dongtaitouzihuishou",
  method: {
    handleAnchorClick(e, link) {
      // 阻止点击的默认事件修改路由
      e.preventDefault();
      var srcolls = document.getElementById(link.href);
      srcolls.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }
  },
};
</script>

<style lang="less"></style>