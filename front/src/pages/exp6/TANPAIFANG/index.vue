<!-- 3.碳排放需求与供给实验
寻求碳排放权市场交易的供给与需求平衡点，以达成均衡价格，建议考虑交易的公平性 -->

<template>
    <a-tabs v-model:activeKey="activeKey" @change="updateChat">
      <a-tab-pane key="1" tab="实验说明">
        <div class="header-wrapper">
            <p class="title ml-2">实验内容-碳排放权供需模拟</p>
        </div>
        <p class="secondtitle">一、实验背景</p>
        <p class="content">
           碳排放交易，是指运用市场经济来促进环境保护的重要机制，允许企业在碳排放交易规定的排放总量不突破的前提下，可以用这些减少的碳排放量，使用或交易企业内部以及国内外的能源。
            <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            本实验中，教师将讲解市场上正常的碳排放市场交易的情况。注：一个单位碳排放权的定价只是一个名义价格，并非真实的市场交易价格。
        </p>
        <p class="secondtitle">二、实验目的</p>
        <p class="content">
          本实验将模拟一个完全竞争的碳排放权供需市场，学生作为供给者或需求者的角色参与市场中的碳排放权拍卖，在竞价过程中理解完全竞争市场上的供给方和需求方，如何通过自发行为、在竞争中促使市场合理价格的形成。
        </p>
        <p class="secondtitle">三、实验原理</p>
        <p class="content">
          (1)供给者面临的问题是：他不知道在哪种价格下，能出售多少数量。假设他将价格定得过高，销售量就可能太少，从而失去盈利机
          会；假如他将价格设定得很低，可能就会有很多实验参与者有意购买，但是过低的价格又会造成他的利润可能少于必要的水平。
          需求者面临的问题与供给方正好相反，若出价过高，则成本过大；若出价过低，则很有可能不能成功购买。
          <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          (2)考虑到市场交易的公平性，当前市场的供需价格需要公开透明，从而供给者和需求者才能更好地根据当前市场进行出价，也可以防止
          由于隐瞒价格导致的幕后操纵拍卖结果的情况。
        </p>
        <p class="secondtitle">四、实验步骤</p>
        <p class="content">
          1.进入在线实验，选择成为供给方或需求方。
          <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          2.输入拍卖者ID（本人学号），供给或需求数量及价格。
          <strong>（注：一个ID只能作为供给或需求一方，且只能报价一次）</strong>
          <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          3.等待所有学生完成报价，根据折线图以及自动计算的当前均衡价格，完成实验报告。
        </p>
      </a-tab-pane>
      <a-tab-pane key="2" tab="在线实验" :force-render="true" style="text-align:left">
        <div >
          <div>
            <div class="secondtitle">
            第一步 &nbsp;&nbsp;选择角色
            </div>
            <a-button @click="showModal" :disabled="myrole!=null" type="primary" style="margin-top:20px;margin-bottom:20px;margin-left:50px">选择角色</a-button>
            <a-modal v-model:visible="visible" title="选择你的角色" :footer="null">
              <div style="text-align:center">
                <a-button style="height:80px;width:200px;font-size: large;" @click="chooseRole('supply')" >供给者</a-button>
                <a-button style="height:80px;width:200px;font-size: large;" @click="chooseRole('demand')">需求者</a-button>
              </div>
            </a-modal>
          </div>
          <div>
            <div class="secondtitle" >
            第二步 &nbsp;&nbsp;输入个人学号，购买数量以及报价
            </div>
            <a-button @click="showModal2" type="primary" style="margin-top:20px;margin-bottom:20px;margin-left:50px" :disabled="myrole==null||disable">输入报价</a-button>
            <a-modal v-model:visible="visible2" title="输入你的报价" :footer="null" :width="1000">
              <a-form
                :model="formState"
                name="horizontal_login"
                layout="inline"
                autocomplete="off"
              >
                <a-form-item
                  label="id"
                  name="id"
                  :rules="[{ required: true, message: 'Please input your id!' }]"
                >
                  <a-input v-model:value="formState.id">
                  </a-input>
                </a-form-item>
  
                <a-form-item
                  label="amount"
                  name="amount"
                  :rules="[{ required: true, message: 'Please input amount!' }]"
                >
                  <a-input v-model:value="formState.amount">
                  </a-input>
                </a-form-item>
  
                <a-form-item
                  label="price"
                  name="price"
                  :rules="[{ required: true, message: 'Please input price!' }]"
                >
                  <a-input v-model:value="formState.price">
                  </a-input>
                </a-form-item>
  
                <a-form-item>
                  <a-button :disabled="disabled" type="primary" @click="handleSendBtnClick">确定</a-button>
                </a-form-item>
              </a-form>
            </a-modal>
          </div>
          
        </div>
        <div  class="secondtitle" style="margin-bottom:20px">
          第三步 &nbsp;&nbsp;查看当前供给/需求表格
        </div>
        <Table v-show="myrole=='supply'" ref="supply" :title='`供给`' @drawLine="updateChat"/>
        <Table v-show="myrole=='demand'" ref="demand" :title='`需求`' @drawLine="updateChat"/>
        <div class="secondtitle" style="margin-bottom:20px">
          第四步 &nbsp;&nbsp;查看当前供需折线图
        </div>
        <div id="myChart123" :style="{width: '1350px', height: '550px'}"></div>
        <div v-if="intersectionPoint.length==0" style="text-align: center;font-weight: bold;font-size: 15px;" >暂无均衡价格</div>
        <div v-if="intersectionPoint.length>0" style="text-align: center;font-weight: bold;font-size: 15px;">均衡价格为{{ intersectionPoint[0][1] }}元/吨</div>
      </a-tab-pane>
      <a-tab-pane key="3" tab="实验报告">
        <div class="report-wrapper">
          <h1 class="title" style="text-align: center;">碳排放权供给与需求-实验 </h1>
          <div style="padding-top:60px;padding-bottom:20px">
              <a-config-provider :locale="locale">
                  <p style="line-height:200%;font-size: 16px;">
                      <a-row justify="center">
                          <a-col span="6">课程名称：软件工程经济学</a-col>
                          <a-col span="6">课号：420279</a-col>
                          <a-col span="6">实验项目名称：软件规模度量实验</a-col>
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
          <p class="secondtitle">一、实验目的</p>
          <p class="content">
          了解碳排放权和碳排放交易的概念，并通过实验理解供给、需求与市场价格之间的关系，掌握计算供需平衡点的方法。在实验过程中，学生应被分成买家和卖家两组，各自给出报价，并观察报价变化带来的供需曲线变化。本实验学时1学时，完成实验报告1学时。
          </p>
          <p class="secondtitle">二、实验原理</p>
          <p class="content">
            供给：供给表示市场中卖方愿意提供的商品或服务的数量。供给的数量通常随着商品价格的上升而增加，随着价格的下降而减少。这是因为供应商在高价格下有更大的利润潜力，因此愿意提供更多的商品。
            <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            需求：需求表示市场中买方愿意购买的商品或服务的数量。需求的数量通常随着商品价格的上升而减少，随着价格的下降而增加。这是因为消费者在低价格下更有购买的能力和意愿，因此愿意购买更多的商品。
            <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            均衡价格：供给和需求的交汇点称为均衡价格。在市场均衡点上，商品的供给量等于需求量，即市场上的商品数量和价格达到了相对稳定的状态。在市场均衡点上，没有压力来改变价格或交易量，市场处于相对平衡的状态。
          </p>
          <p class="secondtitle">三、实验步骤</p>
          <p class="content">
            1.进入在线实验，选择成为供给方或需求方。
            <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            2.输入拍卖者ID（本人学号），供给或需求数量及价格。
            <strong>（注：一个ID只能作为供给或需求一方，且只能报价一次）</strong>
            <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            3.等待所有学生完成报价，根据折线图以及自动计算的当前均衡价格，完成实验报告。
          </p>
          <p class="secondtitle">四、实验内容</p>
          <p class="content">
            我是{{ myrole=="demand"?"需求者":"供给者" }}，我报的数量是{{ formState.amount }}吨，我报的价格是{{ formState.price }}元/吨
            <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            请输入最终均衡价格：<a-input-number v-model:value="value1" addon-after="元/吨" style="width:200px"></a-input-number>
          </p>
          <p class="secondtitle">五、实验小结与心得</p>
          <div class="feedback-wrapper">
              <a-textarea v-model="experimentFeedback" :auto-size="{ minRows: 3 }" 
                  placeholder="请输入实验心得"></a-textarea>
          </div>
        </div>
        <a-button type="primary" @click="exportAsPDF" shape="round" style="margin-top:10px">下载本页为PDF</a-button>
      </a-tab-pane>
    </a-tabs>
    
    
  </template>
  <script lang="ts">
  import { computed, defineComponent, onMounted, reactive, ref, toRefs } from 'vue';
  import type { Ref, UnwrapRef } from 'vue';
  import { CheckOutlined, EditOutlined } from '@ant-design/icons-vue';
  import { cloneDeep, forEach } from 'lodash-es';
  import * as echarts from 'echarts'
  import Table from './table.vue'
  import { useExperimentStore } from '@/store/experiment';
  import { useRoute } from 'vue-router';
  import { UploadOutlined } from '@ant-design/icons-vue';
  import message from 'ant-design-vue/es/message';
  import axios from 'axios';
  import html2pdf from "html2pdf.js";
  interface DataItem {
    key: string;
    supply: number;
    price: number;
  }
  
  interface Point {
    x:number;
    y:number;
  }
  
  interface FormState {
    id: string;
    amount: number;
    price:number
  }
  
  export default defineComponent({
    name:'Exp6_TANPAIFANG33',
    components: {
      CheckOutlined,
      EditOutlined,
      Table
    },
    
    setup() {
      const ws = new WebSocket('ws://101.43.28.205:8000');
      const handleWsOpen=(e)=>{
        console.log('FE:WebSocket open',e);
      }
      const handleWsClose=(e)=>{
        console.log('FE:WebSocket close',e);
      }
      const handleWsError=(e)=>{
        console.log('FE:WebSocket error',e);
      }
      const handleWsMessage=(e)=>{
        // console.log(e);
        // console.log('FE:WebSocket message',e.data);
        var reader = new FileReader();
        reader.readAsText(e.data, 'utf-8');
        reader.onload = function (e) {
            console.log(reader.result);
            var data=JSON.parse(reader.result)
            console.log(data)
            if(data.role=="demand"){
              demand.value.add(data)
            }
            else{
              supply.value.add(data)
            }
            updateChat()
        }
      }
      const disable = ref<boolean>(false);
      ws.addEventListener('open',handleWsOpen.bind(this),false);
      ws.addEventListener('close',handleWsClose.bind(this),false);
      ws.addEventListener('error',handleWsError.bind(this),false);
      ws.addEventListener('message',handleWsMessage.bind(this),false);
      const handleSendBtnClick=()=>{
        ws.send(JSON.stringify({
          id: formState.id,
          role:myrole.value,
          amount:formState.amount,
          price:formState.price
        }))
        disable.value=true
        visible.value = false;
      }
      // 求两条线段交点，a,b 为第一条线段的始末点，c,d 为第二条线段的始末点。x，y 为点的横纵坐标
      const segmentsIntr=(a, b, c, d)=>{
        var denominator = (b.y - a.y) * (d.x - c.x) - (a.x - b.x) * (c.y - d.y)
        var x = ((b.x - a.x) * (d.x - c.x) * (c.y - a.y) +
          (b.y - a.y) * (d.x - c.x) * a.x -
          (d.y - c.y) * (b.x - a.x) * c.x) / denominator
        var y = -((b.y - a.y) * (d.y - c.y) * (c.x - a.x) +
          (b.x - a.x) * (d.y - c.y) * a.y -
          (d.x - c.x) * (b.y - a.y) * c.y) / denominator
        return [x,y]
      }
  
      // 判断两条线段是否有交点, a1、b1 为两条线在 x1 处的值；a2、b2 为两条线在 x2 处的值；
      // 只要不是一条线段的两个点都高于另一个点就会有交点；
      const ifHaveIntersectionPoint=(a1, b1, a2, b2)=> {
        return (+a1 > +b1) != (+a2 > +b2) || (+a1 < +b1) != (+a2 < +b2)
      }
  
      // 获取两线所有交点
      const getIntersectionPoint=(line1,line2)=> {
        // 交点数组
        var intersectionPointList = []
        for(let i=0;i<line1.length-1;++i){
          for(let j=0;j<line2.length-1;++j){
            if(line1[i+1][0]<line2[j][0]){
              break;
            }
            else if(line1[i][0]>line2[j+1][0]){
              continue;
            }
            else{
              if(ifHaveIntersectionPoint(line1[i][1],line2[j][1],line1[i+1][1],line2[j+1][1])){
                var a:Point={
                  x:line1[i][0],
                  y:line1[i][1]
                }
                var b:Point={
                  x:line1[i+1][0],
                  y:line1[i+1][1]
                }
                var c:Point={
                  x:line2[j][0],
                  y:line2[j][1]
                }
                var d:Point={
                  x:line2[j+1][0],
                  y:line2[j+1][1]
                }
                // 计算交点的位置
                var intersectionPoint = segmentsIntr(a,b,c,d)
                intersectionPointList.push(intersectionPoint)
              }
            }
          }
        }
        return intersectionPointList;
      }
  
      const exportAsPDF=()=> {
          // 获取实验报告的 HTML 元素
          const report = document.querySelector(".report-wrapper");
  
          // 设置导出选项
          const options = {
              margin: [10, 10], // PDF页面的边距
              filename: '实验报告.pdf', // 导出的PDF文件名
              image: { type: 'png', quality: 1 }, // 图片格式和质量
              html2canvas: { scale: 2 }, // html2canvas选项，可以调整缩放比例
              jsPDF: { format: 'a3', orientation: 'portrait' } // jsPDF选项，设置纸张格式和方向
          };
          // 使用html2pdf库将HTML转换为PDF
          html2pdf().set(options).from(report).save();
  
      }
  
  
      const dataSource: Ref<DataItem[]> = ref([
        {
          key: '0',
          supply: 100,
          price: 32,
        },
        {
          key: '1',
          supply: 200,
          price: 35,
        },
      ]);
      
      const supply = ref(null)
      const demand = ref(null)
      const intersectionPoint=ref([])
      const activeKey=ref('1')
      const draw=(supplyData:DataItem[],demandData:DataItem[])=>{
        let myChart = echarts.init(document.getElementById("myChart123"));
        let xdata=[],ydata=[]
        let drawData1=[]
        let drawData2=[]
        supplyData.sort((a, b) => a.supply - b.supply)
        for(let i=0;i<supplyData.length;++i){
          ydata.push(supplyData[i].price)
          xdata.push(supplyData[i].supply)
          drawData1.push([Number(supplyData[i].supply),Number(supplyData[i].price)])
        }
        demandData.sort((a, b) => a.supply - b.supply)
        for(let i=0;i<demandData.length;++i){
          ydata.push(demandData[i].price)
          xdata.push(demandData[i].supply)
          drawData2.push([Number(demandData[i].supply),Number(demandData[i].price)])
        }
        console.log(getIntersectionPoint(drawData1,drawData2))
        intersectionPoint.value=getIntersectionPoint(drawData1,drawData2)
        
        // 绘制图表
        myChart.setOption({
          title:{
            text: '碳排放权供给与需求折线图',
            x: 'center'
          },
          legend: {
            data: ["供给","需求"],
            x: 'left',
          },
          xAxis: {
            min:0,
            name:"数量(吨)"
          },
          yAxis: {
            min:0,
            name:"价格(元/吨)"
          },
          tooltip: {
            trigger: 'axis', // 设置提示框为：坐标轴触发。此项主要用于柱图、折线图的配置。
          },
          series: [
            {
              name: "供给",
              type: "line",
              data: drawData1
            },
            {
              name: "需求",
              type: "line",
              data: drawData2
            },
            {
              name:"交点",
              type: 'effectScatter',
              itemStyle:{
                color: function(){
                  return 'red'
                }
              },
              symbolSize: function () {   //计算大小
                  return 10;
              },
              data:intersectionPoint.value
            }
          ]
        });
        window.onresize = function () { // 自适应大小
          myChart.resize();
        };
      }
      //输入的均衡价格
      const value1=ref(0)
      //实验心得
      const experimentFeedback=ref(null)
      const visible = ref<boolean>(false);
  
      const showModal = () => {
        visible.value = true;
      };
  
      const visible2 = ref<boolean>(false);
      const showModal2 = () => {
        visible2.value = true;
      };
  
      const myrole=ref<string>(null)
      const isInput=ref<boolean>(false)
      const chooseRole = (role:string) => {
        console.log(role)
        myrole.value=role
        visible.value = false;
      };
  
      const updateChat=()=>{
          draw(supply.value.getDataSource(),demand.value.getDataSource())
      }
  
      const { getExperiment,uploadReport } = useExperimentStore();
      const rt = useRoute()
  
  
      function formatDateTime(date, format) {
        const o = {
          'M+': date.getMonth() + 1, // 月份
          'd+': date.getDate(), // 日
          'h+': date.getHours() % 12 === 0 ? 12 : date.getHours() % 12, // 小时
          'H+': date.getHours(), // 小时
          'm+': date.getMinutes(), // 分
          's+': date.getSeconds(), // 秒
          'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
          S: date.getMilliseconds(), // 毫秒
          a: date.getHours() < 12 ? '上午' : '下午', // 上午/下午
          A: date.getHours() < 12 ? 'AM' : 'PM', // AM/PM
        };
        if (/(y+)/.test(format)) {
          format = format.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
        }
        for (let k in o) {
          if (new RegExp('(' + k + ')').test(format)) {
            format = format.replace(
              RegExp.$1,
              RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length)
            );
          }
        }
        return format;
      }
  
      function uploadFile(report:Blob){
        // 生成一个表单文件
        let formData = new FormData();
        // formData.append("course_id","1")
        formData.append("experiment_id",rt.meta.id.toString())
        formData.append("report",report)
        const date = new Date();
        const formatDate = formatDateTime(date, 'yyyy-MM-dd HH:mm:ss');
        console.log(formatDate);
        formData.append("submit_time",formatDate)
        axios({
            method:"post",
            url:"/report/submit",
            headers: {
            "Content-Type": "multipart/form-data"
            },
            withCredentials:true,
            data:formData
          }).then((res)=>{
                  console.log(res);
                  message.success("上传成功")
          });
      }
      function downLoadFile(){
        getExperiment(rt.meta.id)
          .then((res) => {
            console.log(res.file)
            const filePath = res.file
            if (!filePath) {
              return;
            }
            // let url = window.URL.createObjectURL(new Blob(filePath));
            let link = document.createElement('a');
            link.style.display = 'none';
            link.href = filePath;
            link.setAttribute('download', filePath);
            document.body.appendChild(link);
            // link.click();
            window.open(filePath)
          })
      }
  
      const formState = reactive<FormState>({
        id: '',
        amount: null,
        price:null,
      });
      const experimentdate=ref(null)
      const reportername=ref(null)
      const disabled = computed(() => {
        return !(formState.id && formState.amount&&formState.price);
      });
  
      onMounted(() => { // 需要获取到element,所以是onMounted的Hook
        updateChat()
      });
  
      return {
        dataSource,
        draw,
        supply,
        demand,
        updateChat,
        intersectionPoint,
        activeKey,
        disable,
        value1,
        experimentFeedback,
        exportAsPDF,
        experimentdate,
        reportername,
        uploadFile,
        downLoadFile,
        visible,
        visible2,
        showModal,
        showModal2,
        chooseRole,
        myrole,
        formState,
        disabled,
        handleSendBtnClick
      };
    },
  });
  </script>
  <style lang="less">
  .editable-cell {
    position: relative;
    .editable-cell-input-wrapper,
    .editable-cell-text-wrapper {
      padding-right: 24px;
    }
  
    .editable-cell-text-wrapper {
      padding: 5px 24px 5px 5px;
    }
  
    .editable-cell-icon,
    .editable-cell-icon-check {
      position: absolute;
      right: 0;
      width: 20px;
      cursor: pointer;
    }
  
    .editable-cell-icon {
      margin-top: 4px;
      display: none;
    }
  
    .editable-cell-icon-check {
      line-height: 28px;
    }
  
    .editable-cell-icon:hover,
    .editable-cell-icon-check:hover {
      color: #108ee9;
    }
  
    .editable-add-btn {
      margin-bottom: 8px;
    }
  }
  .editable-cell:hover .editable-cell-icon {
    display: inline-block;
  }
  .title {
    font-family: sans-serif;
    font-size: 30px;
  }
  
  .secondtitle {
      text-indent: 2em;
      font-weight: bold;
      font-size: 20px;
  }
  
  .content {
      text-indent: 2em;
      margin-left: 20px;
      margin-right: 20px;
      font-size: 16px;
  }
  </style>
  
  
  