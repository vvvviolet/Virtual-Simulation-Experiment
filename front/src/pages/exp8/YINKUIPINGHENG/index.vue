<template >
    <div id="pdfDom" style="margin-left: 10px;">
        <h2><b>一、实验目的 </b></h2>
        <!-- <p class = "secondtitle">1. 风险与不确定性</p>
        <p class = "content">决策分析通常分为有风险的选择和无风险的选择。
          风险是在将来某个时期发生不良事件或危险有不良结果状况的可能性。
          在项目投资决策时，项目现金流是不确定的。虽然在对项目计算期现金流量折现时考虑了资金时间价值，但折现并没有解决现金流量不确定的问题。
          软件项目现金流量的不确定源于软件需求、业务环境、投融资方案等因素在项目计算期内时空上的变化，即决策者在决策时点拥有的信息不充分。
          信息不充分可分为两种状态，即风险和不确定性。
          风险是指决策者有足够信息用以确定每个可能结果所发生概率的状态。
          不确定性是指决策者虽然可以识别每种可能结果，但是没有足够信息用以确定每种可能结果所发生概率的状态。</p>
        <p class = "secondtitle">2. 风险与不确定性来源</p>
        <p class = "content">系统风险：影响经济体系内所有企业的风险，如税收、利率、最低工资。</p>
        <p class = "content">项目风险：仅针对项目产生不利影响的特殊风险，如软件研发成功与否、项目需求变更、竞争对手策略变化等。</p>
        <p class = "secondtitle">3. 风险分析方法</p>
        <p class = "content">当决策者能为项目可能的不同结果估计概率时，可以采用风险分析方法,识别、估算和分析项目风险。
          主要风险分析方法： -->
          <p class = "content">1. 理解盈亏平衡分析的意义</p>
          <p class = "content">2. 掌握盈亏平衡分析的基本程序</p>
          <p class = "content">3. 掌握盈亏平衡分析的一般方法，为企业预测和决策提供依据</p>
    
        <h2><b>二、实验原理 </b></h2>
        <p class = "secondtitle">1. 简介</p>
        <p class = "content">
          盈亏平衡法是基于“成本-销量-利润”相互关系的一种分析方法。
          该方法首先将项目成本分成固定成本和变动成本两部分，固定成本是指在一定业务范围和一定时间范围内，
          不随业务总量变化而发生变化的成本，例如资产的折旧和摊销、软件项目间接的人力成本。变动成本是指一定
          业务范围和一定时间范围内，随着业务总量变化成比例相应变化的成本，如软件项目直接人力成本、直接非人力成本等。
        </p>
        <p class = "secondtitle">2. 计算方法</p>
        <p class = "content">盈亏平衡法的计算关系式：</p>
        <p class = "content">总成本=变动成本＋固定成本=单位变动成本×销量+固定成本</p>
        <p class = "content">利润=销售收入-总成本=单价×销量-单位变动成本×销量-固定成本</p>
        <p class = "content">上式中，令利润定于“零”，此时的销量称为盈亏平衡点销量。即：盈亏平衡点销量=固定成本÷(单价-单位变动成本)</p>
        <p class = "content">实践中，常用销售金额表示盈亏平衡点，则整理成上述公式得到：盈亏平衡点销售额=固定成本÷(1-(单位变动成本/单价))</p>
    
        <p class = "secondtitle">3. 风险分析</p>
        <p class = "content">盈亏平衡法定义了盈亏平衡点作业率、安全边际和安全边际率三个指标，可用于项目法人风险分析。指标定义:</p>
        <p class = "content">盈亏平衡点作业率=盈亏平衡点销量÷正常销量×100%</p>
        <p class = "content">安全边际=正常销量-盈亏平衡点销量</p>
        <p class = "content">安全边际率=安全边际÷正常销量×100%</p>
        <p class = "content">盈亏平衡点作业率是企业保本销量中所占的比重，也是企业在不亏本情况下生产经营能力利用率的百分比。
          安全边际率越大，企业发生亏损可能性越小。</p>
    
        <h2><b>三、实验步骤</b></h2>
    
    <div>
      <p style="margin-right: 20px;margin-left: 20px;text-indent: 2em;">项目不同阶段的成本、单价、销量、单位变动成本不同，该阶段的盈亏平衡点与安全边际率也不相同，
        计算不同阶段项目的盈亏平衡点与安全边际率可用于项目的风险分析。</p>
        <a-form>
          <p class="content_procedure">步骤一、选择实验阶段，本实验阶段以月为单位</p>
        <a-form-item has-feedback label="阶段名称" name="phase" >
          <a-date-picker v-model:value="month" 
                          picker="month"
                          style="margin-left: 30px;"
                          format='YYYY-MM' 
                          placeholder="选择阶段" />
        
        </a-form-item>
        <p class="content_procedure">步骤二、填写固定成本</p>
        <a-form-item has-feedback label="固定成本" name="fixed_cost">
          <a-input-number class = "inputItem" v-model:value="fixed_cost" />
        </a-form-item>
        <p class="content_procedure">步骤三、填写产品单价</p>
        <a-form-item has-feedback label="单&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;价" name="single_price">
          <a-input-number style="width:150px;margin-left: 31px;" v-model:value="single_price" />
        </a-form-item>
        <p class="content_procedure">步骤四、填写此阶段的销量</p>
        <a-form-item has-feedback label="阶段销量" name="sales">
          <a-input-number class = "inputItem" v-model:value="sales" />
        </a-form-item>
        <p class="content_procedure">步骤五、填写产品单位变动成本</p>
        <a-form-item has-feedback label="单位变动成本" name="variable_cost">
          <a-input-number style="width:150px;margin-left: 2px;" v-model:value="variable_cost" />
        </a-form-item>
        <p class="content_procedure" style="margin-bottom:20px">步骤六、计算盈亏平衡点</p>
        <a-form-item>
          <a-button type="primary" style="margin-left: 0px" @click= calculate>计算盈亏平衡点</a-button>
          <a-button style="margin-left: 54px" @click= clear>重置</a-button>
        </a-form-item>
        </a-form>
    
      <a-table :data-source="tableData" :columns="columns" bordered>
        <template #bodyCell="{ column, text, record }">
          <template v-if="column.dataIndex === 'phase'">
            <a>{{ text }}</a>
          </template>
          <template v-if="column.dataIndex === 'delete'">
            <a-popconfirm
              v-if="tableData.length"
              title="确认删除？"
              @confirm="onDelete(record.key)"
            >
              <a>删除</a>
            </a-popconfirm>
            <a>&nbsp;|&nbsp;</a>
            <a @click="drawChart(record.key)">生成图表</a>
          </template>
        </template>
        <template #title>实验结果</template>
      </a-table>
      <div class = "avg_rate" >
          
          <b>平均安全边际率:&nbsp;</b><b>{{ avg_safety_rate }}</b>
      </div>
      <div id="chart" style="width: 550px;height:400px;margin-top: 10px;">
        
      </div>
      <div style="margin-top: 30px;">
        <a-table :columns="column_safety" :data-source="dataSource" bordered>
          <template #bodyCell="{ column, text }">
          <template v-if="column.dataIndex === 'safety_rate'">
            <a>{{ text }}</a>
          </template>
          </template>
          <template #title>安全边际率经验值表</template>
        </a-table>
      </div>
    
    <div id ="feeling" style="margin-top: 10px;margin-bottom: 10px;">
      <h2><b>四、实验小结 & 心得</b></h2>
      <form-outlined></form-outlined> <b style="margin-left: 10px;margin-top: 5px;">编辑</b>
      <br>
      <a-textarea style="margin-top: 5px;" v-model:value="feelings" placeholder="写下你的实验心得" :rows="8" show-count: maxlength="1000"/>
      <!-- <input v-model="feelings" style="height: 100px;width: 800px;" placeholder="写下你的实验心得"/> -->
    </div>
    </div>
        <div id = "feeling_new" style="display: none;">
          <h2><b>四、实验小结 & 心得</b></h2>
          <form-outlined @click="editFeeling"></form-outlined> <b style="margin-left: 10px;margin-top: 5px;">编辑</b>
          <br>
          <p style="margin-top: 5px;">{{ feelings }}</p>
        </div>
    </div>
    <a-button type="primary" class="right-button" @click="exportReport">
        <template #icon>
          <DownloadOutlined />
        </template>
        下载实验报告
      </a-button>
    </template>
    
    <script lang="ts">
    
    import {ref } from 'vue';
    import type { Dayjs } from 'dayjs';
    import * as echarts from 'echarts';
    import moment from 'moment'
    import 'moment/locale/zh-cn'
    moment.locale('zh-cn')
    // 导出页面为PDF格式
    import html2Canvas from 'html2canvas'
    import JsPDF from 'jspdf'
    import $ from 'jquery';
    
    
    export default {
        name:"yinkuipingheng",
        data(){
            return{
                phase: '',
                month:ref<Dayjs>(),
                fixed_cost: '',
                single_price: '',
                sales: '',
                variable_cost: '',
                safety_rate:'',//安全边际率
                feelings:'',//实验心得
                avg_safety_rate:'',//平均安全边际率
                tableData: [],
    
                columns: [
                  {
                    title: '阶段',
                    dataIndex: 'phase',
                    key: 'phase',
                  },
                  {
                    title: '固定成本',
                    dataIndex: 'fixed_cost',
                    key: 'fixed_cost',
                  },
                  {
                    title: '单价',
                    dataIndex: 'single_price',
                    key: 'single_price',
                  },
                  {
                    title: '阶段销量',
                    dataIndex: 'sales',
                    key: 'sales',
                  },
                  {
                    title: '单价变动成本',
                    dataIndex: 'variable_cost',
                    key: 'variable_cost',
                  },
                  {
                    title: '盈亏平衡点',
                    dataIndex: 'result',
                    key: 'result',
                  },
                  {
                    title: '安全边际率',
                    dataIndex: 'safety_rate',
                    key: 'safety_rate',
                  },
                  {
                    title: '操作',
                    dataIndex: 'delete',
                    key: 'delete',
                  },
    
                ],
    
                column_safety:[
                  {
                    title: '安全边际率',
                    dataIndex: 'safety_rate',
                    key: 'safety_rate',
                  },
                  {
                    title: '>40%',
                    dataIndex: 'phase1',
                    key: '>40%',
                  },
                  {
                    title: '30%~40%',
                    dataIndex: 'phase2',
                    key: '30%~40%',
                  },
                  {
                    title: '20%~30%',
                    dataIndex: 'phase3',
                    key: '20%~30%',
                  },
                  {
                    title: '10%~20%',
                    dataIndex: 'phase4',
                    key: '10%~20%',
                  },
                  {
                    title: '<10%',
                    dataIndex: 'phase5',
                    key: '<10%',
                  },
                  
                ],
    
                dataSource:[
                  {
                    safety_rate:'安全等级',
                    phase1:'很安全',
                    phase2:'安全',
                    phase3:'较安全',
                    phase4:'需要关注',
                    phase5:'危险',
                  }
                ]
            }
        },
        computed:{
          avg_safety_rate(){
            var i = 0
            var temp = 0
            if(this.tableData.length>=1){
              for(i = 0; i<this.tableData.length;i++){
                const percentage = parseFloat(this.tableData[i].safety_rate.replace("%", "")) / 100;
                temp += percentage
              }
              var result = temp/this.tableData.length
              return  (result*100).toFixed(2)+"%"
            }
            else{
              return "0"
            }
          },
        },
        methods:{
            calculate() {
    
              if (this.month && this.fixed_cost && this.single_price && this.sales&&this.variable_cost) {
                
                //盈亏平衡点（销售额）= 固定成本/(1-单位变动成本/单价)
                const breakeven_point = parseInt(this.fixed_cost)/(1-(parseInt(this.variable_cost)/parseInt(this.single_price)))
                const _breakeven_point = breakeven_point.toFixed(2)
                //盈亏平衡点销量 = 固定成本/(单价-单位变动成本)
                const breakeven_sales = parseInt(this.fixed_cost)/(parseInt(this.single_price)-parseInt(this.variable_cost))
                
                //安全边际率 = (正常销量-盈亏平衡点销量)/正常销量
                const _safety_rate = (parseInt(this.sales)-breakeven_sales)/parseInt(this.sales)
                const percentage = (_safety_rate * 100).toFixed(2) + '%';
                console.log(this.month)
                this.tableData.push({
                  key:this.tableData.length+1,
                  phase: this.month.format('YYYY-MM'),
                  fixed_cost: this.fixed_cost,
                  single_price: this.single_price,
                  sales: this.sales,
                  variable_cost: this.variable_cost,
                  result: _breakeven_point,
                  safety_rate:percentage
                });
              }
              console.log(this.tableData.length) 
            },
    
            drawChart(index){
              console.log(index)
              // 基于准备好的dom，初始化echarts实例
              var myChart = echarts.init(document.getElementById('chart'));
                  // 配置图表选项
              const options = {
                tooltip: {
                  trigger: 'axis',
                  axisPointer: { type: 'cross' }
                },
                title: {
                  text: this.tableData[parseInt(index)-1].phase, // 设置标题文本
                  left: 'center' // 设置标题位置（居中）
                },
    
                xAxis: {
                  type: 'value',
                  name: '销量',
                  scale: true,
                  axisLabel: {
                    formatter: '{value}', // 设置 X 轴刻度格式
                  },
                  axisLine: {
                    onZero: true, // 将 X 轴的原点位置设置为 0
                  },
                },
                yAxis: {
                  type: 'value',
                  name: '金额',
                  scale: true,
                  min: 0,
                  max: parseInt(this.tableData[parseInt(index)-1].result)*2,
                  axisLabel: {
                    formatter: '{value}', // 设置 Y 轴刻度格式
                  },
                  axisLine: {
                    onZero: true, // 将 Y 轴的原点位置设置为 0
                  },
                },
                legend: {
                  top: 30, // 设置图例位置在上方
                  right: 50, // 设置图例位置在右侧
                  data: ['销售额', '变动成本', '固定成本'] // 指定每个系列的名称
                },
                series: [
                  {
                    type: 'line',
                    name: '销售额',
                    data: [],
                    symbol: 'none', // 设置无数据点的样式
                    smooth: true, // 设置平滑曲线
                    lineStyle: {
                      width: 2,
                    },
                    markLine: {
                      silent: true,
                      data: [{ yAxis: { type: 'average', value: 0 }, label: { show: false } }],
                    },
                    emphasis: {
                      label: {
                        show: true,
                        formatter: '销售额', // 设置强调样式的标签文本
                      },
                    },
                  },
                  {
                    type: 'line',
                    name: '变动成本',
                    data: [],
                    symbol: 'none', // 设置无数据点的样式
                    smooth: true, // 设置平滑曲线
                    lineStyle: {
                      width: 2,
                    },
                    markLine: {
                      silent: true,
                      data: [{ yAxis: { type: 'average', value: 0 }, label: { show: false } }],
                    },
                    emphasis: {
                      label: {
                        show: true,
                        formatter: '变动成本', // 设置强调样式的标签文本
                      },
                    },
                  },
                  {
                    type: 'line',
                    name: '固定成本',
                    data: [],
                    symbol: 'none', // 设置无数据点的样式
                    smooth: true, // 设置平滑曲线
                    lineStyle: {
                      width: 2,
                    },
                    // markLine: {
                    //   silent: true,
                    //   data: [{ yAxis: 5000, label: { show: false } }],
                    // },
                    emphasis: {
                      label: {
                        show: true,
                        formatter: '固定成本', // 设置强调样式的标签文本
                      },
                    },
                  },
                ],
              };
              // 填充数据
              const sales = [];
              const variable_cost = [];
              const fixed_cost = [];
              const key = parseInt(index)-1
              console.log(this.tableData[key])
              const _sales= parseInt(this.tableData[key].sales)
              const _single_price = parseInt(this.tableData[key].single_price)
              const _variable_price = parseInt(this.tableData[key].variable_cost)
              const _fixed_cost = parseInt(this.tableData[key].fixed_cost)
              //盈亏平衡点销量 = 固定成本/(单价-单位变动成本)
              const breakeven_sales = parseInt(this.tableData[key].fixed_cost)/(parseInt(this.tableData[key].single_price)-parseInt(this.tableData[key].variable_cost))
              for (let x = 0; x <= breakeven_sales*2; x++) {
                const y1 = _single_price * x;//销售额
                const y2 = _variable_price * x+_fixed_cost;//变动成本
                const y3 = _fixed_cost;//固定成本
                sales.push([x,y1]);
                variable_cost.push([x,y2]);
                fixed_cost.push([x,y3])
              }
              options.series[0].data = sales; 
              options.series[1].data = variable_cost;
              options.series[2].data = fixed_cost;
              // 使用配置项显示图表
              myChart.setOption(options);
            },
    
            clear() {
              this.month='';
              this.phase = '';
              this.fixed_cost = '';
              this.single_price = '';
              this.sales = '';
              this.variable_cost=''
            },
    
            onDelete(key:string){
              this.tableData.splice(parseInt(key)-1, 1); // 删除下标为key的元素
    
            },
            
            getPDF(title,dom,emptyDomId){
                /*
                title: 导出文件名
                dom: 需要导出dom的id
                 */
                 return new Promise((resolve, reject) => {
                    html2Canvas(dom, {
                        useCORS: true, // 由于打印时，会访问dom上的一些图片等资源，解决跨域问题！！重要
                        allowTaint: true, // 允许跨域
                    }).then(canvas => {
                        const contentWidth = canvas.width
                        const contentHeight = canvas.height
                        // 根据A4纸的大小，计算出dom相应比例的尺寸
                        const pageHeight = contentWidth / 592.28 * 841.89
                        let leftHeight = contentHeight
                        let position = 0
                        const imgWidth = 575.28
                        // 根据a4比例计算出需要分割的实际dom位置
                        const imgHeight = 592.28 / contentWidth * contentHeight
                        // canvas绘图生成image数据，1.0是质量参数
                        const pageData = canvas.toDataURL('image/jpeg', 1.0)
                        // a4大小
                        const PDF = new JsPDF('p', 'pt', 'a4')
                      
                        // 当内容达到a4纸的高度时，分割，将一整块画幅分割出一页页的a4大小，导出pdf
                        if (leftHeight < pageHeight) {
                            PDF.addImage(pageData, 'JPEG', 10, 10, imgWidth, imgHeight)
                        } else {
                            while (leftHeight > 0) {
                                PDF.addImage(pageData, 'JPEG', 10, position+10, imgWidth, imgHeight)
                                leftHeight -= pageHeight
                                position -= 841.89
                                if (leftHeight > 0) {
                                    PDF.addPage()
                                }
                            }
                        }
                        // 导出
                        PDF.save(title + '.pdf')
                        // 删除添加的空div
    
                        const emptyDom = document.getElementById(emptyDomId)
                        emptyDom.remove()
                        resolve(true)
                    })
                        .catch(() => {
                            reject(false)
                        })
                })
            },
    
            exportReport() {
              $('#feeling').hide();
              $('#feeling_new').show();
              const target = document.getElementById('pdfDom')
              this.outPutPdfFn('盈亏平衡实验', target, 'item')
              // $('#feeling').show();
              // $('#feeling_new').hide();
            },
    
            editFeeling(){
              $('#feeling').show();
              $('#feeling_new').hide();
            },
    
            outPutPdfFn(title, target, itemClass) {
                const vm = this
                const A4_WIDTH = 592.28
                const A4_HEIGHT = 841.89
    
                vm.$nextTick(() => {
                    // dom的id。
    
                    const pageHeight = target.scrollWidth / A4_WIDTH * A4_HEIGHT
                    // 获取分割dom，此处为class类名为item的dom
                    const lableListID = document.getElementsByClassName(itemClass)
                    // 进行分割操作，当dom内容已超出a4的高度，则将该dom前插入一个空dom，把他挤下去，分割
                    for (let i = 0; i < lableListID.length; i++) {
                        const multiple = Math.ceil(((lableListID[i] as HTMLElement).offsetTop + (lableListID[i] as HTMLElement).offsetHeight) / pageHeight)
                        if (this.isSplit(lableListID, i, multiple * pageHeight)) {
                            const divParent = lableListID[i].parentNode // 获取该div的父节点
                            const newNode = document.createElement('div')
                            newNode.className = 'emptyDiv'
                            newNode.id = 'emptyDiv'
                            newNode.style.background = '#ffffff'
                            const _H = multiple * pageHeight - ((lableListID[i] as HTMLElement).offsetTop + (lableListID[i] as HTMLElement).offsetHeight)
                            newNode.style.height = _H + 30 + 'px'
                            newNode.style.width = '100%'
                            const next = lableListID[i].nextSibling // 获取div的下一个兄弟节点
                            // 判断兄弟节点是否存在
                            console.log(next)
                            if (next) {
                                // 存在则将新节点插入到div的下一个兄弟节点之前，即div之后
                                divParent.insertBefore(newNode, next)
                            } else {
                                // 不存在则直接添加到最后,appendChild默认添加到divParent的最后
                                divParent.appendChild(newNode)
                            }
                        }
                    }
                    // 传入title和dom标签，此处是 #content
                    // 异步函数，导出成功后处理交互
                    this.getPDF(title, target, 'emptyDiv').then(() => {
                        // 自定义等待动画关闭
                        this.$message({
                            type: 'success',
                            message: '导出成功'
                        })
                        this.detailSHow = false
                    })
                    this.$nextTick(() => {
                        const emptyDom = document.getElementById('emptyDiv')
                        emptyDom.remove()
                    })
    
    
                })
            },
    
            isSplit(nodes, index, pageHeight) {
                // 计算当前这块dom是否跨越了a4大小，以此分割
                if (nodes[index].offsetTop + nodes[index].offsetHeight < pageHeight && nodes[index + 1] && nodes[index + 1].offsetTop + nodes[index + 1].offsetHeight > pageHeight) {
                    return true
                }
                return false
            },
    
        }
    }
    
    </script>
      
    <style lang="less">
    
    .secondtitle {
        text-indent: 2em;
        font-weight: bold;
        margin-left: 10px;
        margin-right: 30px;
        font-size: 15px;
    }
    
    .inputItem{
      width:150px;
      margin-left: 30px;
    }
    
    .content_procedure{
      font-weight: bold;
    
    }
    
    .content {
        text-indent: 2em;
        margin-left: 20px;
        margin-right: 20px;
    }
    
    .right-button {
        float: right;
        margin-left:30px;
      }
    
    .avg_rate{
      float: right;
      margin-top:10px;
      margin-bottom: 10px;
      font-size: medium;
    }
    </style>