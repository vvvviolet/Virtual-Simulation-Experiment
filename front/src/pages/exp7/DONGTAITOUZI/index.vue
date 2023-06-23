<template lang="">
  <div style="padding-top:60px;padding-bottom:20px">
    <a-config-provider  >
        <p style="line-height:200%;font-size: 16px;">
            <a-row justify="center">
                <a-col span="6">课程名称：软件工程经济学</a-col>
                <a-col span="6">课号：420279</a-col>
                <a-col span="6">实验项目名称：动态投资回收期实验</a-col>
            </a-row>
            <a-row justify="center">
                <a-col span="6">实验时间：<span style="border-bottom: 1px solid grey;border-radius: none;"><a-date-picker
                            v-model="experimentdate" :bordered="false"
                            style="width:150px;padding-left:3px;padding-right:3px;"
                            placeholder="点击选择实验时间" /></span></a-col>
                <a-col span="6">实验报告人： <span style="border-bottom: 1px solid grey;border-radius: none;"><a-input
                            v-model="reportername" placeholder="请输入报告人姓名" size="small" :bordered="false"
                            style="width:18vh;"></a-input></span>
                </a-col>
                <a-col span="6"></a-col>
            </a-row>
        </p>
    </a-config-provider>
  </div>
  <div>
    <Layout>
      <!-- 头部 -->
      <br>
      <!-- 内容部分 -->
      <Content>
        <a-card style="width: 100%" hoverable>
          <a-row>
            <!-- 正文部分 -->
            <a-col :span="24">
              <a-row>
                <a-col :span="24">
                  <h1 id="one">一、实验目的</h1>
                  <p>1. 理解国家标准《软件测试成本度量规范》中软件测试成本度量原理，通过实验操作，掌握软件测试成本度量过程</p>
                  <p>2. 以小组为单位，根据本小组“软件工程管理与经济”课程设计项目架构及组件等设计成果，使用《软件测试成本度量规范》中的方法，估算该项目的测试成本</p>
                  <p>3. 本实验为课内设计性实验项目，实验学时1小时，完成实验报告1学时</p>
                  <p>4. 本实验旨在通过动态投资回收期的计算方法，评估软件开发项目的投资回收期，并分析项目的经济效益和风险。</p>
                </a-col>
              </a-row>
              <a-divider></a-divider>
              <!-- 步骤二 -->
              <a-row>
                <a-col :span="24">
                  <h1 id="two">二、实验原理</h1>
                  <p>
                    动态投资回收期（Dynamic Payback Period）是一种用于评估投资回报率的方法，其基本原理是将投资成本与现金流量相比较，计算出从投资开始到投资收回的时间，即投资回收期。动态投资回收期相较于传统的投资回收期更加精细，能够考虑现金流量的时间价值因素，能够更准确地评估投资的回报率和风险。
                  </p>
                </a-col>
              </a-row>
              <a-divider></a-divider>
              <!-- 步骤三 -->
              <a-row>
                <a-col :span="24">
                  <h1 id="three">三、实验步骤</h1>
                  <h2>3.1 制定项目计划和预算</h2>
                  <p>根据市场调研和项目需求，公司制定了详细的项目计划和预算，包括项目的开发周期、人力资源投入、硬件和软件设备购置、运营成本等。</p>
                  <p>确定回收期的时间范围，决定要计算的投资回收期的时间范围。实验中假设投资回收期的时间范围为5年。</p>
                  <p>根据项目计划和预算，计算出项目的总投资成本，包括项目开发过程中的各种成本和运营成本。</p>
                   <a-divider></a-divider>
                  <h2>3.2 计算项目现金流</h2>
                  <p>根据项目计划和预算，计算出项目的现金流量，包括项目开发过程中的各种收益和运营收益。</p>
                  <p>时点0表示项目开始的时间，时点1-时点6代表各年终止时点。单位：千元。</p>
                  <a-divider></a-divider>
                  <h2>3.3 计算净现金流量</h2>
                  <p>根据现金流入和现金流出，</p>
                  <p>净现金流量=现金流入-现金流出。</p>
                  <p>累计净现金流量=年初净现金流量+当年产生的净现金流量。</p>
                  <a-divider></a-divider>
                  <h2>3.4 计算净现金流量现值</h2>
                  <p>根据净现金流量和现值系数，</p>
                  <p>净现金流量现值=各时点净现金流量✖️现值系数。</p>
                  <p>累计净现金流量现值=年初净现金流量现值+当年产生的净现金流量现值。</p>
                  <a-divider></a-divider>
                  <h2>3.5 确定投资回收点</h2>
                  <p>找到累计净现金流量现值变为正值的时间点，即投资开始后第一个时间点的累计净现金流量现值为正。</p>
                  <a-divider></a-divider>
                  <h2>3.6 计算动态投资回收期</h2>
                  <p>动态投资回收期计算公式：DPP=（累计折现值出现正值的年数-1）+上年累计折现值的绝对值/当年净现金流量的折现值。</p>
              <a-divider></a-divider>
              <!-- 步骤四 -->
              <a-row>
                <a-col :span="24">
                  <h1 id="four">四、实验内容</h1>
                  <h2>4.1 计算项目现金流</h2>
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
                        <a-col :span="3">{{cash_flow0}}</a-col>
                        <a-col :span="3">{{cash_flow1}}</a-col>
                        <a-col :span="3">{{cash_flow2}}</a-col>
                        <a-col :span="3">{{cash_flow3}}</a-col>
                        <a-col :span="3">{{cash_flow4}}</a-col>
                        <a-col :span="3">{{cash_flow5}}</a-col>
                  </a-row>
                  <a-row justify="left">
                        <a-col :span="4">1.1 营业收入</a-col>
                        <a-col :span="20"><a-input-group compact>
                          <a-input v-model:value="operating_revenue0" style="width: 15%" />
                          <a-input v-model:value="operating_revenue1" style="width: 15%" />
                          <a-input v-model:value="operating_revenue2" style="width: 15%" />
                          <a-input v-model:value="operating_revenue3" style="width: 15%" />
                          <a-input v-model:value="operating_revenue4" style="width: 15%" />
                          <a-input v-model:value="operating_revenue5" style="width: 15%" />
                        </a-input-group>
                        </a-col>
                      </a-row>
                      <a-row justify="left">
                        <a-col :span="4">1.2 回收固定资产余值</a-col>
                        <a-col :span="20"><a-input-group compact>
                          <a-input v-model:value="recovery_of_residual_value_of_fixed_assets0" style="width: 15%" />
                          <a-input v-model:value="recovery_of_residual_value_of_fixed_assets1" style="width: 15%" />
                          <a-input v-model:value="recovery_of_residual_value_of_fixed_assets2" style="width: 15%" />
                          <a-input v-model:value="recovery_of_residual_value_of_fixed_assets3" style="width: 15%" />
                          <a-input v-model:value="recovery_of_residual_value_of_fixed_assets4" style="width: 15%" />
                          <a-input v-model:value="recovery_of_residual_value_of_fixed_assets5" style="width: 15%" />
                        </a-input-group>
                        </a-col>
                      </a-row>
                       <a-row justify="left">
                        <a-col :span="4">1.3 回收无形资产余值</a-col>
                        <a-col :span="20"><a-input-group compact>
                          <a-input v-model:value="recovery_of_residual_value_of_intangible_assets0" style="width: 15%" />
                          <a-input v-model:value="recovery_of_residual_value_of_intangible_assets1" style="width: 15%" />
                          <a-input v-model:value="recovery_of_residual_value_of_intangible_assets2" style="width: 15%" />
                          <a-input v-model:value="recovery_of_residual_value_of_intangible_assets3" style="width: 15%" />
                          <a-input v-model:value="recovery_of_residual_value_of_intangible_assets4" style="width: 15%" />
                          <a-input v-model:value="recovery_of_residual_value_of_intangible_assets5" style="width: 15%" />
                        </a-input-group>
                        </a-col>
                      </a-row>
                      <a-row justify="left">
                        <a-col :span="4">1.4 回收流动资金</a-col>
                        <a-col :span="20"><a-input-group compact>
                          <a-input v-model:value="working_capital0" style="width: 15%" />
                          <a-input v-model:value="working_capital1" style="width: 15%" />
                          <a-input v-model:value="working_capital2" style="width: 15%" />
                          <a-input v-model:value="working_capital3" style="width: 15%" />
                          <a-input v-model:value="working_capital4" style="width: 15%" />
                          <a-input v-model:value="working_capital5" style="width: 15%" />
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
                    <a-col :span="5">2. 现金流出</a-col>
                        <a-col :span="3">{{cash_outflow0}}</a-col>
                        <a-col :span="3">{{cash_outflow1}}</a-col>
                        <a-col :span="3">{{cash_outflow2}}</a-col>
                        <a-col :span="3">{{cash_outflow3}}</a-col>
                        <a-col :span="3">{{cash_outflow4}}</a-col>
                        <a-col :span="3">{{cash_outflow5}}</a-col>
                  </a-row>    
                  <a-row justify="left">
                        <a-col :span="4">2.1 建设投资</a-col>
                        <a-col :span="20"><a-input-group compact>
                          <a-input v-model:value="construction_investment0" style="width: 15%" />
                          <a-input v-model:value="construction_investment1" style="width: 15%" />
                          <a-input v-model:value="construction_investment2" style="width: 15%" />
                          <a-input v-model:value="construction_investment3" style="width: 15%" />
                          <a-input v-model:value="construction_investment4" style="width: 15%" />
                          <a-input v-model:value="construction_investment5" style="width: 15%" />
                        </a-input-group>
                        </a-col>
                      </a-row>
                      <a-row justify="left">
                        <a-col :span="4">2.2 流动资金</a-col>
                        <a-col :span="20"><a-input-group compact>
                          <a-input v-model:value="liudong_money0" style="width: 15%" />
                          <a-input v-model:value="liudong_money1" style="width: 15%" />
                          <a-input v-model:value="liudong_money2" style="width: 15%" />
                          <a-input v-model:value="liudong_money3" style="width: 15%" />
                          <a-input v-model:value="liudong_money4" style="width: 15%" />
                          <a-input v-model:value="liudong_money5" style="width: 15%" />
                        </a-input-group>
                        </a-col>
                      </a-row>
                       <a-row justify="left">
                        <a-col :span="4">2.3 经营成本</a-col>
                        <a-col :span="20"><a-input-group compact>
                          <a-input v-model:value="operation_cost0" style="width: 15%" />
                          <a-input v-model:value="operation_cost1" style="width: 15%" />
                          <a-input v-model:value="operation_cost2" style="width: 15%" />
                          <a-input v-model:value="operation_cost3" style="width: 15%" />
                          <a-input v-model:value="operation_cost4" style="width: 15%" />
                          <a-input v-model:value="operation_cost5" style="width: 15%" />
                        </a-input-group>
                        </a-col>
                      </a-row>
                      <a-row justify="left">
                        <a-col :span="4">2.4 维持运营投资</a-col>
                        <a-col :span="20"><a-input-group compact>
                          <a-input v-model:value="maintain_operational_investment0" style="width: 15%" />
                          <a-input v-model:value="maintain_operational_investment1" style="width: 15%" />
                          <a-input v-model:value="maintain_operational_investment2" style="width: 15%" />
                          <a-input v-model:value="maintain_operational_investment3" style="width: 15%" />
                          <a-input v-model:value="maintain_operational_investment4" style="width: 15%" />
                          <a-input v-model:value="maintain_operational_investment5" style="width: 15%" />
                        </a-input-group>
                        </a-col>
                      </a-row>
                      <a-row justify="left">
                        <a-col :span="4">2.5 营业税金及附加</a-col>
                        <a-col :span="20"><a-input-group compact>
                          <a-input v-model:value="taxes_and_surcharges0" style="width: 15%" />
                          <a-input v-model:value="taxes_and_surcharges1" style="width: 15%" />
                          <a-input v-model:value="taxes_and_surcharges2" style="width: 15%" />
                          <a-input v-model:value="taxes_and_surcharges3" style="width: 15%" />
                          <a-input v-model:value="taxes_and_surcharges4" style="width: 15%" />
                          <a-input v-model:value="taxes_and_surcharges5" style="width: 15%" />
                        </a-input-group>
                        </a-col>
                      </a-row>
                      <a-divider></a-divider>
                    <h2>4.2 计算净现金流量</h2>
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
                    <a-col :span="5">净现金流量</a-col>
                        <a-col :span="3">{{net_cash_flow0}}</a-col>
                        <a-col :span="3">{{net_cash_flow1}}</a-col>
                        <a-col :span="3">{{net_cash_flow2}}</a-col>
                        <a-col :span="3">{{net_cash_flow3}}</a-col>
                        <a-col :span="3">{{net_cash_flow4}}</a-col>
                        <a-col :span="3">{{net_cash_flow5}}</a-col>
                  </a-row>
                   <a-row justify="left">
                    <a-col :span="5">累计净现金流量</a-col>
                        <a-col :span="3">{{accumulated_net_cash_flow0}}</a-col>
                        <a-col :span="3">{{accumulated_net_cash_flow1}}</a-col>
                        <a-col :span="3">{{accumulated_net_cash_flow2}}</a-col>
                        <a-col :span="3">{{accumulated_net_cash_flow3}}</a-col>
                        <a-col :span="3">{{accumulated_net_cash_flow4}}</a-col>
                        <a-col :span="3">{{accumulated_net_cash_flow5}}</a-col>
                  </a-row>
                   <a-divider></a-divider>
                    <h2>4.3 计算净现金流量现值</h2>
                    <div style="display: flex">
                  <p style="white-space: nowrap">折现率=</p>&nbsp;
                 <a-input-number id="inputNumber" v-model:value="discount_rate"/>                
                  </div>
                  <p>现值系数 = 1 / (1 + 折现率)^n</p>
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
                    <a-col :span="5">现值系数</a-col>
                    <a-col :span="3">{{present_value_factor0}}</a-col>
                    <a-col :span="3">{{present_value_factor1}}</a-col>
                    <a-col :span="3">{{present_value_factor2}}</a-col>
                    <a-col :span="3">{{present_value_factor3}}</a-col>
                    <a-col :span="3">{{present_value_factor4}}</a-col>
                    <a-col :span="3">{{present_value_factor5}}</a-col>
                  </a-row>
                  <a-row justify="left">
                    <a-col :span="5">净现金流量(现值)</a-col>
                    <a-col :span="3">{{present_net_cash_flow0}}</a-col>
                    <a-col :span="3">{{present_net_cash_flow1}}</a-col>
                    <a-col :span="3">{{present_net_cash_flow2}}</a-col>
                    <a-col :span="3">{{present_net_cash_flow3}}</a-col>
                    <a-col :span="3">{{present_net_cash_flow4}}</a-col>
                    <a-col :span="3">{{present_net_cash_flow5}}</a-col>
                  </a-row>
                  <a-row justify="left">
                    <a-col :span="5">累计净现金流量(现值)</a-col>
                    <a-col :span="3">{{pre_accumulated_net_cash_flow0}}</a-col>
                    <a-col :span="3">{{pre_accumulated_net_cash_flow1}}</a-col>
                    <a-col :span="3">{{pre_accumulated_net_cash_flow2}}</a-col>
                    <a-col :span="3">{{pre_accumulated_net_cash_flow3}}</a-col>
                    <a-col :span="3">{{pre_accumulated_net_cash_flow4}}</a-col>
                    <a-col :span="3">{{pre_accumulated_net_cash_flow5}}</a-col>
                  </a-row>
                </a-col>
              </a-row>
              <a-divider></a-divider>
                  <h2>4.4 完成数据统计</h2>
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
                    <a-col :span="3">{{cash_flow0}}</a-col>
                    <a-col :span="3">{{cash_flow1}}</a-col>
                    <a-col :span="3">{{cash_flow2}}</a-col>
                    <a-col :span="3">{{cash_flow3}}</a-col>
                    <a-col :span="3">{{cash_flow4}}</a-col>
                    <a-col :span="3">{{cash_flow5}}</a-col>
                  </a-row>
                  <a-row justify="left">
                    <a-col :span="5">1.1 营业收入</a-col>
                    <a-col :span="3">{{operating_revenue0}}</a-col>
                    <a-col :span="3">{{operating_revenue1}}</a-col>
                    <a-col :span="3">{{operating_revenue2}}</a-col>
                    <a-col :span="3">{{operating_revenue3}}</a-col>
                    <a-col :span="3">{{operating_revenue4}}</a-col>
                    <a-col :span="3">{{operating_revenue5}}</a-col>
                  </a-row>
                  <a-row justify="left">
                    <a-col :span="5">1.2 回收固定资产余值</a-col>
                    <a-col :span="3">{{recovery_of_residual_value_of_fixed_assets0}}</a-col>
                    <a-col :span="3">{{recovery_of_residual_value_of_fixed_assets1}}</a-col>
                    <a-col :span="3">{{recovery_of_residual_value_of_fixed_assets2}}</a-col>
                    <a-col :span="3">{{recovery_of_residual_value_of_fixed_assets3}}</a-col>
                    <a-col :span="3">{{recovery_of_residual_value_of_fixed_assets4}}</a-col>
                    <a-col :span="3">{{recovery_of_residual_value_of_fixed_assets5}}</a-col>
                  </a-row>
                  <a-row justify="left">
                    <a-col :span="5">1.3 回收无形资产余值</a-col>
                    <a-col :span="3">{{recovery_of_residual_value_of_intangible_assets0}}</a-col>
                    <a-col :span="3">{{recovery_of_residual_value_of_intangible_assets1}}</a-col>
                    <a-col :span="3">{{recovery_of_residual_value_of_intangible_assets2}}</a-col>
                    <a-col :span="3">{{recovery_of_residual_value_of_intangible_assets3}}</a-col>
                    <a-col :span="3">{{recovery_of_residual_value_of_intangible_assets4}}</a-col>
                    <a-col :span="3">{{recovery_of_residual_value_of_intangible_assets5}}</a-col>
                  </a-row>
                  <a-row justify="left">
                    <a-col :span="5">1.4 回收流动资金</a-col>
                    <a-col :span="3">{{working_capital0}}</a-col>
                    <a-col :span="3">{{working_capital1}}</a-col>
                    <a-col :span="3">{{working_capital2}}</a-col>
                    <a-col :span="3">{{working_capital3}}</a-col>
                    <a-col :span="3">{{working_capital4}}</a-col>
                    <a-col :span="3">{{working_capital5}}</a-col>
                  </a-row>
                  <a-row justify="left">
                    <a-col :span="5">2. 现金流出</a-col>
                    <a-col :span="3">{{cash_outflow0}}</a-col>
                    <a-col :span="3">{{cash_outflow1}}</a-col>
                    <a-col :span="3">{{cash_outflow2}}</a-col>
                    <a-col :span="3">{{cash_outflow3}}</a-col>
                    <a-col :span="3">{{cash_outflow4}}</a-col>
                    <a-col :span="3">{{cash_outflow5}}</a-col>
                  </a-row>
                  <a-row justify="left">
                    <a-col :span="5">2.1 建设投资</a-col>
                    <a-col :span="3">{{construction_investment0}}</a-col>
                    <a-col :span="3">{{construction_investment1}}</a-col>
                    <a-col :span="3">{{construction_investment2}}</a-col>
                    <a-col :span="3">{{construction_investment3}}</a-col>
                    <a-col :span="3">{{construction_investment4}}</a-col>
                    <a-col :span="3">{{construction_investment5}}</a-col>
                  </a-row>
                  <a-row justify="left">
                    <a-col :span="5">2.2 流动资金</a-col>
                    <a-col :span="3">{{liudong_money0}}</a-col>
                    <a-col :span="3">{{liudong_money1}}</a-col>
                    <a-col :span="3">{{liudong_money2}}</a-col>
                    <a-col :span="3">{{liudong_money3}}</a-col>
                    <a-col :span="3">{{liudong_money4}}</a-col>
                    <a-col :span="3">{{liudong_money5}}</a-col>
                  </a-row>
                  <a-row justify="left">
                    <a-col :span="5">2.3 经营成本</a-col>
                    <a-col :span="3">{{operation_cost0}}</a-col>
                    <a-col :span="3">{{operation_cost1}}</a-col>
                    <a-col :span="3">{{operation_cost2}}</a-col>
                    <a-col :span="3">{{operation_cost3}}</a-col>
                    <a-col :span="3">{{operation_cost4}}</a-col>
                    <a-col :span="3">{{operation_cost5}}</a-col>
                  </a-row>
                  <a-row justify="left">
                    <a-col :span="5">2.4 维持运营投资</a-col>
                    <a-col :span="3">{{maintain_operational_investment0}}</a-col>
                    <a-col :span="3">{{maintain_operational_investment1}}</a-col>
                    <a-col :span="3">{{maintain_operational_investment2}}</a-col>
                    <a-col :span="3">{{maintain_operational_investment3}}</a-col>
                    <a-col :span="3">{{maintain_operational_investment4}}</a-col>
                    <a-col :span="3">{{maintain_operational_investment5}}</a-col>
                  </a-row>
                  <a-row justify="left">
                    <a-col :span="5">2.5 营业税金及附加</a-col>
                    <a-col :span="3">{{taxes_and_surcharges0}}</a-col>
                    <a-col :span="3">{{taxes_and_surcharges1}}</a-col>
                    <a-col :span="3">{{taxes_and_surcharges2}}</a-col>
                    <a-col :span="3">{{taxes_and_surcharges3}}</a-col>
                    <a-col :span="3">{{taxes_and_surcharges4}}</a-col>
                    <a-col :span="3">{{taxes_and_surcharges5}}</a-col>
                  </a-row>
                  <a-row justify="left">
                    <a-col :span="5">净现金流量</a-col>
                    <a-col :span="3">{{net_cash_flow0}}</a-col>
                    <a-col :span="3">{{net_cash_flow1}}</a-col>
                    <a-col :span="3">{{net_cash_flow2}}</a-col>
                    <a-col :span="3">{{net_cash_flow3}}</a-col>
                    <a-col :span="3">{{net_cash_flow4}}</a-col>
                    <a-col :span="3">{{net_cash_flow5}}</a-col>
                  </a-row>
                  <a-row justify="left">
                    <a-col :span="5">累计净现金流量</a-col>
                    <a-col :span="3">{{accumulated_net_cash_flow0}}</a-col>
                    <a-col :span="3">{{accumulated_net_cash_flow1}}</a-col>
                    <a-col :span="3">{{accumulated_net_cash_flow2}}</a-col>
                    <a-col :span="3">{{accumulated_net_cash_flow3}}</a-col>
                    <a-col :span="3">{{accumulated_net_cash_flow4}}</a-col>
                    <a-col :span="3">{{accumulated_net_cash_flow5}}</a-col>
                  </a-row>
                  <a-row justify="left">
                    <a-col :span="5">现值系数</a-col>
                    <a-col :span="3">{{present_value_factor0}}</a-col>
                    <a-col :span="3">{{present_value_factor1}}</a-col>
                    <a-col :span="3">{{present_value_factor2}}</a-col>
                    <a-col :span="3">{{present_value_factor3}}</a-col>
                    <a-col :span="3">{{present_value_factor4}}</a-col>
                    <a-col :span="3">{{present_value_factor5}}</a-col>
                  </a-row>
                  <a-row justify="left">
                    <a-col :span="5">净现金流量(现值)</a-col>
                    <a-col :span="3">{{present_net_cash_flow0}}</a-col>
                    <a-col :span="3">{{present_net_cash_flow1}}</a-col>
                    <a-col :span="3">{{present_net_cash_flow2}}</a-col>
                    <a-col :span="3">{{present_net_cash_flow3}}</a-col>
                    <a-col :span="3">{{present_net_cash_flow4}}</a-col>
                    <a-col :span="3">{{present_net_cash_flow5}}</a-col>
                  </a-row>
                  <a-row justify="left">
                    <a-col :span="5">累计净现金流量(现值)</a-col>
                    <a-col :span="3">{{pre_accumulated_net_cash_flow0}}</a-col>
                    <a-col :span="3">{{pre_accumulated_net_cash_flow1}}</a-col>
                    <a-col :span="3">{{pre_accumulated_net_cash_flow2}}</a-col>
                    <a-col :span="3">{{pre_accumulated_net_cash_flow3}}</a-col>
                    <a-col :span="3">{{pre_accumulated_net_cash_flow4}}</a-col>
                    <a-col :span="3">{{pre_accumulated_net_cash_flow5}}</a-col>
                  </a-row>
                  <a-divider></a-divider>
                  <h2>4.5 根据公式计算动态投资回收期</h2>
                  <div style="display: flex">
                  <p style="white-space: nowrap">累计净现金流量现值由负值转变到正值的年份是：</p>
                 <a-input-number id="inputNumber" v-model:value="year" :min="1" :max="6" />
                  </div>
                  <p>动态投资回收期计算公式：DPP=（累计折现值出现正值的年数-1）+上年累计折现值的绝对值/当年净现金流量的折现值。</p>
                   <div style="display: flex">
                  <p style="white-space: nowrap">DPP=</p>
                 <a-input-number id="inputNumber" v-model:value="dpp"/>
                  </div>
             
                </a-col>
              </a-row>
              <a-divider></a-divider>
              <!-- 步骤五 -->
              <a-row>   
                <a-col :span="24">
                  <h1 id="five">五、实验结果</h1>
                  <a-textarea v-model:value="thoughts" placeholder="请输入..." :rows="4" />
                </a-col>
              </a-row>
              <a-divider></a-divider>
              <!-- 步骤六 -->
              <a-row>   
                <a-col :span="24">
                  <h1 id="six">六、实验思考</h1>
                  <a-textarea v-model:value="thoughts" placeholder="请输入..." :rows="4" />
                </a-col>
              </a-row>
              <a-divider></a-divider>   
            </a-col> 
            <a-col :span="1"></a-col>
          </a-row>
        </a-card>
      </Content>
      <br>
    </Layout>
  </div>

</template>
<script lang="ts">
import { ref } from 'vue';

export default {
  name: 'DONGTAITOUZI',
  setup() {
    const year = ref<number>(3);
    const dpp = ref<number>(3);
    const thoughts = ref<string>('');

    const onChange = (link: string) => {
      console.log('Anchor:OnChange', link);
    };
    return {
      year,
      dpp,
      thoughts,
      onChange,
    };
  },
  data() {
    return {
      // 这些值由其他值推导而来，不需要在此申明
      // 现金流入
      // cash_flow0: 0,
      // cash_flow1: 0,
      // cash_flow2: 0,
      // cash_flow3: 0,
      // cash_flow4: 0,
      // cash_flow5: 0,

      // 现金流出
      // cash_outflow0: 0,
      // cash_outflow1: 0,
      // cash_outflow2: 0,
      // cash_outflow3: 0,
      // cash_outflow4: 0,
      // cash_outflow5: 0,

      // 折现率
      discount_rate: 0,

      // // 净现金流量
      // net_cash_flow0: 0,
      // net_cash_flow1: 0,
      // net_cash_flow2: 0,
      // net_cash_flow3: 0,
      // net_cash_flow4: 0,
      // net_cash_flow5: 0,

      // // 累计净现金流量
      // accumulated_net_cash_flow0: 0,
      // accumulated_net_cash_flow1: 0,
      // accumulated_net_cash_flow2: 0,
      // accumulated_net_cash_flow3: 0,
      // accumulated_net_cash_flow4: 0,
      // accumulated_net_cash_flow5: 0,

      // 现值系数
      // present_value_factor0: 0,
      // present_value_factor1: 0,
      // present_value_factor2: 0,
      // present_value_factor3: 0,
      // present_value_factor4: 0,
      // present_value_factor5: 0,

      // 营业收入
      operating_revenue0: 0,
      operating_revenue1: 0,
      operating_revenue2: 0,
      operating_revenue3: 0,
      operating_revenue4: 0,
      operating_revenue5: 0,

      // 回收固定资产余值
      recovery_of_residual_value_of_fixed_assets0: 0,
      recovery_of_residual_value_of_fixed_assets1: 0,
      recovery_of_residual_value_of_fixed_assets2: 0,
      recovery_of_residual_value_of_fixed_assets3: 0,
      recovery_of_residual_value_of_fixed_assets4: 0,
      recovery_of_residual_value_of_fixed_assets5: 0,

      // 回收无形资产余值
      recovery_of_residual_value_of_intangible_assets0: 0,
      recovery_of_residual_value_of_intangible_assets1: 0,
      recovery_of_residual_value_of_intangible_assets2: 0,
      recovery_of_residual_value_of_intangible_assets3: 0,
      recovery_of_residual_value_of_intangible_assets4: 0,
      recovery_of_residual_value_of_intangible_assets5: 0,

      // 回收流动资金
      working_capital0: 0,
      working_capital1: 0,
      working_capital2: 0,
      working_capital3: 0,
      working_capital4: 0,
      working_capital5: 0,

      // 建设投资
      construction_investment0: 0,
      construction_investment1: 0,
      construction_investment2: 0,
      construction_investment3: 0,
      construction_investment4: 0,
      construction_investment5: 0,

      // 流动资金
      liudong_money0: 0,
      liudong_money1: 0,
      liudong_money2: 0,
      liudong_money3: 0,
      liudong_money4: 0,
      liudong_money5: 0,

      // 经营成本
      operation_cost0: 0,
      operation_cost1: 0,
      operation_cost2: 0,
      operation_cost3: 0,
      operation_cost4: 0,
      operation_cost5: 0,

      // 维持运营投资
      maintain_operational_investment0: 0,
      maintain_operational_investment1: 0,
      maintain_operational_investment2: 0,
      maintain_operational_investment3: 0,
      maintain_operational_investment4: 0,
      maintain_operational_investment5: 0,

      // 营业税金及附加
      taxes_and_surcharges0: 0,
      taxes_and_surcharges1: 0,
      taxes_and_surcharges2: 0,
      taxes_and_surcharges3: 0,
      taxes_and_surcharges4: 0,
      taxes_and_surcharges5: 0,

      // 累计净现金流量现值由负值转变到正值的年份
      // year: 1,
      // dpp
      // dpp:1,
    };
  },
  method: {
    handleAnchorClick(e, link) {
      // 阻止点击的默认事件修改路由
      e.preventDefault();
      var srcolls = document.getElementById(link.href);
      srcolls.scrollIntoView({ block: 'start', behavior: 'smooth' });
    },
  },
  computed: {
    dpp() {
      var pre_accumulated_net_cash_flow0 = this.present_net_cash_flow0;
      var pre_accumulated_net_cash_flow1 = this.present_net_cash_flow1 + pre_accumulated_net_cash_flow0;
      var pre_accumulated_net_cash_flow2 = this.present_net_cash_flow2 + pre_accumulated_net_cash_flow1;
      var pre_accumulated_net_cash_flow3 = this.present_net_cash_flow3 + pre_accumulated_net_cash_flow2;
      var pre_accumulated_net_cash_flow4 = this.present_net_cash_flow4 + pre_accumulated_net_cash_flow3;
      var pre_accumulated_net_cash_flow5 = this.present_net_cash_flow5 + pre_accumulated_net_cash_flow4;
      if (pre_accumulated_net_cash_flow0 >= 0) {
        return 0;
      } else if (pre_accumulated_net_cash_flow1 >= 0) {
        return parseFloat((Math.abs(pre_accumulated_net_cash_flow0 / this.present_net_cash_flow1)).toFixed(4));
      } else if (pre_accumulated_net_cash_flow2 >= 0) {
        return 1 + parseFloat((Math.abs(pre_accumulated_net_cash_flow1 / this.present_net_cash_flow2)).toFixed(4));
      } else if (pre_accumulated_net_cash_flow3 >= 0) {
        return 2 + parseFloat((Math.abs(pre_accumulated_net_cash_flow2 / this.present_net_cash_flow3)).toFixed(4));
      } else if (pre_accumulated_net_cash_flow4 >= 0) {
        return 3 + parseFloat((Math.abs(pre_accumulated_net_cash_flow3 / this.present_net_cash_flow4)).toFixed(4));
      } else if (pre_accumulated_net_cash_flow5 >= 0) {
        return 4 + parseFloat((Math.abs(pre_accumulated_net_cash_flow4 / this.present_net_cash_flow5)).toFixed(4));
      }
      return -1;
    },
    year() {
      var pre_accumulated_net_cash_flow0 = this.present_net_cash_flow0;
      var pre_accumulated_net_cash_flow1 = this.present_net_cash_flow1 + pre_accumulated_net_cash_flow0;
      var pre_accumulated_net_cash_flow2 = this.present_net_cash_flow2 + pre_accumulated_net_cash_flow1;
      var pre_accumulated_net_cash_flow3 = this.present_net_cash_flow3 + pre_accumulated_net_cash_flow2;
      var pre_accumulated_net_cash_flow4 = this.present_net_cash_flow4 + pre_accumulated_net_cash_flow3;
      var pre_accumulated_net_cash_flow5 = this.present_net_cash_flow5 + pre_accumulated_net_cash_flow4;
      if (pre_accumulated_net_cash_flow0 >= 0) {
        return 0;
      } else if (pre_accumulated_net_cash_flow1 >= 0) {
        return 1;
      } else if (pre_accumulated_net_cash_flow2 >= 0) {
        return 2;
      } else if (pre_accumulated_net_cash_flow3 >= 0) {
        return 3;
      } else if (pre_accumulated_net_cash_flow4 >= 0) {
        return 4;
      } else if (pre_accumulated_net_cash_flow5 >= 0) {
        return 5;
      }
      return -1;
    },
    net_cash_flow0() {
      return this.cash_flow0 - this.cash_outflow0;
    },
    net_cash_flow1() {
      return this.cash_flow1 - this.cash_outflow1;
    },
    net_cash_flow2() {
      return this.cash_flow2 - this.cash_outflow2;
    },
    net_cash_flow3() {
      return this.cash_flow3 - this.cash_outflow3;
    },
    net_cash_flow4() {
      return this.cash_flow4 - this.cash_outflow4;
    },
    net_cash_flow5() {
      return this.cash_flow5 - this.cash_outflow5;
    },
    accumulated_net_cash_flow0() {
      return this.cash_flow0 - this.cash_outflow0;
    },
    accumulated_net_cash_flow1() {
      let accumulated_net_cash_flow0 = this.cash_flow0 - this.cash_outflow0;
      let accumulated_net_cash_flow1 = this.cash_flow1 - this.cash_outflow1;
      return accumulated_net_cash_flow0 + accumulated_net_cash_flow1;
    },
    accumulated_net_cash_flow2() {
      let accumulated_net_cash_flow0 = this.cash_flow0 - this.cash_outflow0;
      let accumulated_net_cash_flow1 = this.cash_flow1 - this.cash_outflow1;
      let accumulated_net_cash_flow2 = this.cash_flow2 - this.cash_outflow2;
      return accumulated_net_cash_flow0 + accumulated_net_cash_flow1 + accumulated_net_cash_flow2;
    },
    accumulated_net_cash_flow3() {
      let accumulated_net_cash_flow0 = this.cash_flow0 - this.cash_outflow0;
      let accumulated_net_cash_flow1 = this.cash_flow1 - this.cash_outflow1;
      let accumulated_net_cash_flow2 = this.cash_flow2 - this.cash_outflow2;
      let accumulated_net_cash_flow3 = this.cash_flow3 - this.cash_outflow3;
      return accumulated_net_cash_flow0 + accumulated_net_cash_flow1 + accumulated_net_cash_flow2 + accumulated_net_cash_flow3;
    },
    accumulated_net_cash_flow4() {
      let accumulated_net_cash_flow0 = this.cash_flow0 - this.cash_outflow0;
      let accumulated_net_cash_flow1 = this.cash_flow1 - this.cash_outflow1;
      let accumulated_net_cash_flow2 = this.cash_flow2 - this.cash_outflow2;
      let accumulated_net_cash_flow3 = this.cash_flow3 - this.cash_outflow3;
      let accumulated_net_cash_flow4 = this.cash_flow4 - this.cash_outflow4;
      return accumulated_net_cash_flow0 + accumulated_net_cash_flow1 + accumulated_net_cash_flow2 + accumulated_net_cash_flow3 + accumulated_net_cash_flow4;
    },
    accumulated_net_cash_flow5() {
      let accumulated_net_cash_flow0 = this.cash_flow0 - this.cash_outflow0;
      let accumulated_net_cash_flow1 = this.cash_flow1 - this.cash_outflow1;
      let accumulated_net_cash_flow2 = this.cash_flow2 - this.cash_outflow2;
      let accumulated_net_cash_flow3 = this.cash_flow3 - this.cash_outflow3;
      let accumulated_net_cash_flow4 = this.cash_flow4 - this.cash_outflow4;
      let accumulated_net_cash_flow5 = this.cash_flow5 - this.cash_outflow5;
      return accumulated_net_cash_flow0 + accumulated_net_cash_flow1 + accumulated_net_cash_flow2 + accumulated_net_cash_flow3 + accumulated_net_cash_flow4 + accumulated_net_cash_flow5;
    },
    present_value_factor0(){
      return Number(1);
    },
    present_value_factor1() {
      return parseFloat((1 / Math.pow(1 + this.discount_rate, 1)).toFixed(4));
    },
    present_value_factor2() {
      return parseFloat((1 / Math.pow(1 + this.discount_rate, 2)).toFixed(4));
    },
    present_value_factor3() {
      return parseFloat((1 / Math.pow(1 + this.discount_rate, 3)).toFixed(4));
    },
    present_value_factor4() {
      return parseFloat((1 / Math.pow(1 + this.discount_rate, 4)).toFixed(4));
    },
    present_value_factor5() {
      return parseFloat((1 / Math.pow(1 + this.discount_rate, 5)).toFixed(4));
    },
    present_net_cash_flow0() {
      var net_cash_flow0 = this.cash_flow0 - this.cash_outflow0;
      return parseFloat((this.present_value_factor0 * net_cash_flow0).toFixed(4));
    },
    present_net_cash_flow1() {
      var net_cash_flow1 = this.cash_flow1 - this.cash_outflow1;
      return parseFloat((this.present_value_factor1 * net_cash_flow1).toFixed(4));
    },
    present_net_cash_flow2() {
      var net_cash_flow2 = this.cash_flow2 - this.cash_outflow2;
      return parseFloat((this.present_value_factor2 * net_cash_flow2).toFixed(4));
    },
    present_net_cash_flow3() {
      var net_cash_flow3 = this.cash_flow3 - this.cash_outflow3;
      return parseFloat((this.present_value_factor3 * net_cash_flow3).toFixed(4));
    },
    present_net_cash_flow4() {
      var net_cash_flow4 = this.cash_flow4 - this.cash_outflow4;
      return parseFloat((this.present_value_factor4 * net_cash_flow4).toFixed(4));
    },
    present_net_cash_flow5() {
      var net_cash_flow5 = this.cash_flow5 - this.cash_outflow5;
      return parseFloat((this.present_value_factor5 * net_cash_flow5).toFixed(4));
    },
    pre_accumulated_net_cash_flow0() {
      var net_cash_flow0 = this.cash_flow0 - this.cash_outflow0;
      return parseFloat((this.present_value_factor0 * net_cash_flow0).toFixed(4));
    },
    pre_accumulated_net_cash_flow1() {
      var pre_accumulated_net_cash_flow0 = this.present_value_factor0 * (this.cash_flow0 - this.cash_outflow0);
      let pre_accumulated_net_cash_flow1 = this.present_value_factor1 * (this.cash_flow1 - this.cash_outflow1);
      return parseFloat((pre_accumulated_net_cash_flow0 + pre_accumulated_net_cash_flow1).toFixed(4));
    },
    pre_accumulated_net_cash_flow2() {
      var pre_accumulated_net_cash_flow0 = this.present_value_factor0 * (this.cash_flow0 - this.cash_outflow0);
      let pre_accumulated_net_cash_flow1 = this.present_value_factor1 * (this.cash_flow1 - this.cash_outflow1);
      var pre_accumulated_net_cash_flow2 = this.present_value_factor2 * (this.cash_flow2 - this.cash_outflow2);
      return parseFloat((pre_accumulated_net_cash_flow0 + pre_accumulated_net_cash_flow1 + pre_accumulated_net_cash_flow2).toFixed(4)); 
    },
    pre_accumulated_net_cash_flow3() {
      var pre_accumulated_net_cash_flow0 = this.present_value_factor0 * (this.cash_flow0 - this.cash_outflow0);
      let pre_accumulated_net_cash_flow1 = this.present_value_factor1 * (this.cash_flow1 - this.cash_outflow1);
      var pre_accumulated_net_cash_flow2 = this.present_value_factor2 * (this.cash_flow2 - this.cash_outflow2);
      var pre_accumulated_net_cash_flow3 = this.present_value_factor3 * (this.cash_flow3 - this.cash_outflow3);
      return parseFloat((pre_accumulated_net_cash_flow0 + pre_accumulated_net_cash_flow1 + pre_accumulated_net_cash_flow2 + pre_accumulated_net_cash_flow3).toFixed(4));
    },
    pre_accumulated_net_cash_flow4() {
      var pre_accumulated_net_cash_flow0 = this.present_value_factor0 * (this.cash_flow0 - this.cash_outflow0);
      let pre_accumulated_net_cash_flow1 = this.present_value_factor1 * (this.cash_flow1 - this.cash_outflow1);
      var pre_accumulated_net_cash_flow2 = this.present_value_factor2 * (this.cash_flow2 - this.cash_outflow2);
      var pre_accumulated_net_cash_flow3 = this.present_value_factor3 * (this.cash_flow3 - this.cash_outflow3);
      var pre_accumulated_net_cash_flow4 = this.present_value_factor4 * (this.cash_flow4 - this.cash_outflow4);
      return parseFloat((pre_accumulated_net_cash_flow0 + pre_accumulated_net_cash_flow1 + pre_accumulated_net_cash_flow2 + pre_accumulated_net_cash_flow3 + pre_accumulated_net_cash_flow4).toFixed(4));
    },
    pre_accumulated_net_cash_flow5() {
      var pre_accumulated_net_cash_flow0 = this.present_value_factor0 * (this.cash_flow0 - this.cash_outflow0);
      let pre_accumulated_net_cash_flow1 = this.present_value_factor1 * (this.cash_flow1 - this.cash_outflow1);
      var pre_accumulated_net_cash_flow2 = this.present_value_factor2 * (this.cash_flow2 - this.cash_outflow2);
      var pre_accumulated_net_cash_flow3 = this.present_value_factor3 * (this.cash_flow3 - this.cash_outflow3);
      var pre_accumulated_net_cash_flow4 = this.present_value_factor4 * (this.cash_flow4 - this.cash_outflow4);
      var pre_accumulated_net_cash_flow5 = this.present_value_factor5 * (this.cash_flow5 - this.cash_outflow5);
      return parseFloat((pre_accumulated_net_cash_flow0 + pre_accumulated_net_cash_flow1 + pre_accumulated_net_cash_flow2 + pre_accumulated_net_cash_flow3 + pre_accumulated_net_cash_flow4 + pre_accumulated_net_cash_flow5).toFixed(4));
    },
    cash_flow0() {
      return 1*this.operating_revenue0 + 1*this.recovery_of_residual_value_of_fixed_assets0 + 1 * this.recovery_of_residual_value_of_intangible_assets0 + 1 * this.working_capital0;
    },
    cash_outflow0() {
      return 1 * this.construction_investment0 + 1 * this.liudong_money0 + 1 * this.operation_cost0 + 1 * this.maintain_operational_investment0 + 1 * this.taxes_and_surcharges0;
    },
    cash_flow1() {
      return 1 * this.operating_revenue1 + 1 * this.recovery_of_residual_value_of_fixed_assets1 + 1 * this.recovery_of_residual_value_of_intangible_assets1 + 1 * this.working_capital1;
    },
    cash_outflow1() {
      return 1 * this.construction_investment1 + 1 * this.liudong_money1 + 1 * this.operation_cost1 + 1 * this.maintain_operational_investment1 + 1 * this.taxes_and_surcharges1;
    },
    cash_flow2() {
      return 1 * this.operating_revenue2 + 1 * this.recovery_of_residual_value_of_fixed_assets2 + 1 * this.recovery_of_residual_value_of_intangible_assets2 + 1 * this.working_capital2;
    },
    cash_outflow2() {
      return 1 * this.construction_investment2 + 1 * this.liudong_money2 + 1 * this.operation_cost2 + 1 * this.maintain_operational_investment2 + 1 * this.taxes_and_surcharges2;
    },
    cash_flow3() {
      return 1 * this.operating_revenue3 + 1 * this.recovery_of_residual_value_of_fixed_assets3 + 1 * this.recovery_of_residual_value_of_intangible_assets3 + 1 * this.working_capital3;
    },
    cash_outflow3() {
      return 1 * this.construction_investment3 + 1 * this.liudong_money3 + 1 * this.operation_cost3 + 1 * this.maintain_operational_investment3 + 1 * this.taxes_and_surcharges3;
    },
    cash_flow4() {
      return 1 * this.operating_revenue4 + 1 * this.recovery_of_residual_value_of_fixed_assets4 + 1 * this.recovery_of_residual_value_of_intangible_assets4 + 1 * this.working_capital4;
    },
    cash_outflow4() {
      return 1 * this.construction_investment4 + 1 * this.liudong_money4 + 1 * this.operation_cost4 + 1 * this.maintain_operational_investment4 + 1 * this.taxes_and_surcharges4;
    },
    cash_flow5() {
      return 1 * this.operating_revenue5 + 1 * this.recovery_of_residual_value_of_fixed_assets5 + 1 * this.recovery_of_residual_value_of_intangible_assets5 + 1 * this.working_capital5;
    },
    cash_outflow5() {
      return 1 * this.construction_investment5 + 1 * this.liudong_money5 + 1 * this.operation_cost5 + 1 * this.maintain_operational_investment5 + 1 * this.taxes_and_surcharges5;
    },
  },
};
</script>

<style scoped></style>