<template>
    <div>
       <div>
         <span>
         <!-- <h1 class="title">单方案经济评价实验</h1> -->
           <!-- <a-space>
           <a-button class="upload" type="primary" > -->
       <!-- <template #icon>
         <DownloadOutlined />
       </template>
       实验指导书下载
     </a-button>
     <a-button class="upload" type="primary" >
       <template #icon>
         <DownloadOutlined />
       </template>
       模板下载
     </a-button>
   </a-space> -->
         </span>
       </div>
    <div style="padding-top: 60px; padding-bottom: 20px">
         <p style="line-height:200%;font-size: 16px;">
             <a-row justify="center">
                 <a-col span="6">课程名称：软件工程经济学</a-col>
                 <a-col span="6">课号：420279</a-col>
                 <a-col span="6">实验项目名称：单方案经济评价实验</a-col>
             </a-row>
             <a-row justify="center">
                 <a-col span="6">实验时间：<span style="border-bottom: 1px solid grey;border-radius: none;"><a-date-picker
                             v-model:value="experimentdate" :bordered="false"
                             style="width:150px;padding-left:3px;padding-right:3px;"
                             placeholder="点击选择实验时间" /></span></a-col>
                 <a-col span="6">实验报告人： <span style="border-bottom: 1px solid grey;border-radius: none;"><a-input
                             v-model:value="reportername" placeholder="请输入报告人姓名" size="small" :bordered="false"
                             style="width:18vh;"></a-input></span>
                 </a-col>
                 <a-col span="6"></a-col>
             </a-row>
         </p>
        </div>
         <h2>一、实验目的  </h2>
         <p class="content">掌握独立方案评价的动态指标计算方法，并根据指标判断方案是否可行。本实验为课内设计性实验项目，实验学时 1 学时，完成实验报告 1 学时。
         </p>
         <h2>二、实验原理  </h2>
         <a-collapse v-model:activeKey="activeKey">
         <a-collapse-panel key="1" header="1.独立方案及评价">
           <p>在工程项目决策中，实践中将工程项目的决策方案分为三种类型：独立方案、互斥方案及相关方案。所谓独立方案，是指各工程项目方案的现金流是独立的、不相关的，并且任何一个方案的采用与否都不会对是否采纳其他方案的决策产生影响。独立方案的评价，主要是评价方案自身的经济性，即检验方案的绝对经济效果是否能够通过评价标准。</p>
         </a-collapse-panel>
         <a-collapse-panel key="2" header="2.动态评价指标" :disabled="false">
           <a-typography-paragraph>
           <a-typography-text strong>·净现值(NPV):</a-typography-text>
           净现值是指按一定的折现率（一般采用基准收益率ic），将各年的净现金流量折现到同一时点（通常是初期时点）的现值之和。计算公式：
           <br>
           <img src="./NPV.png">其中，(CI-CO)t是第t年的净现金流量。
         </a-typography-paragraph>
         <a-typography-paragraph>
           <a-typography-text strong>·内部收益率(IRR):</a-typography-text>
           内部收益率是指项目在整个计算期内净现值等于零时所对应的折现率。计算公式：
           <br>
           <img src="./IRR.png">其中，(CI-CO)t是第t年的净现金流量，n为方案寿命周期。
         </a-typography-paragraph>
         <a-typography-paragraph>
           <a-typography-text strong>·动态投资回收期(DPP):</a-typography-text>
           动态投资回收期是指按照设定的基准收益率ic收回全部投资所需的时间。计算公式：
           <br>
           <img src="./DPP.png">其中，(CI-CO)t是第t年的净现金流量，DPP为所求动态投资回收期。
         </a-typography-paragraph>
         </a-collapse-panel>
       </a-collapse>
         <h2>三、实验步骤</h2>
         <h3>第一步，用户输入折现率的值（0-1），选择计算的时点（年份）数，并输入每年的现金流入（独立方案年收入）和现金流出值。（单位：千元）</h3>
         <a-card title="现金流表" style="margin-bottom: 15px;">
         <div>
             请输入折现率ic的值:
             <a-input-number v-model:value="ic" :min="0" :max="1" :step="0.01"  />
             <a-button class="editable-add-btn" style="margin-bottom: 8px;float: right;" @click="handleAdd">新增年份</a-button>
         </div>
         <!--数据输入表格-->
         <a-table bordered :data-source="dataSource" :columns="columns">
           <template #bodyCell="{ column, text, record }">
             <template v-if="column.dataIndex === 'income'">
               <div class="editable-cell">
                 <div v-if="editableData[record.key]" class="editable-cell-input-wrapper">
                   <a-input v-model:value="editableData[record.key].income" @pressEnter="save(record.key)" />
                   <check-outlined class="editable-cell-icon-check" @click="save(record.key)" />
                 </div>
                 <div v-else class="editable-cell-text-wrapper">
                   {{ text || ' ' }}
                   <edit-outlined class="editable-cell-icon" @click="edit(record.key)" />
                 </div>
               </div>
             </template>
             <template v-if="column.dataIndex === 'outcome'">
               <div class="editable-cell">
                 <div v-if="editableData[record.key]" class="editable-cell-input-wrapper">
                   <a-input v-model:value="editableData[record.key].outcome" @pressEnter="save(record.key)" />
                   <check-outlined class="editable-cell-icon-check" @click="save(record.key)" />
                 </div>
                 <div v-else class="editable-cell-text-wrapper">
                   {{ text || ' ' }}
                   <edit-outlined class="editable-cell-icon" @click="edit(record.key)" />
                 </div>
               </div>
             </template>
             <!-- <template v-if="column.dataIndex === 'npv'">
             <div>
               {{ text||'' }}
             </div>
           </template>
           <template v-if="column.dataIndex === 'irr'">
             <div>
               {{ text||'' }}
             </div>
           </template> -->
             <template v-if="column.dataIndex === 'operation'">
               <!-- 编辑按钮 -->
               <!-- <div class="editable-row-operations"> -->
                 <span v-if="editableData[record.key]" class="editable-row-operations">
                   <a @click="save(record.key)">保存</a>
                   <a-popconfirm title="Sure to cancel?" @confirm="cancel(record.key)">
                     <a>取消</a>
                   </a-popconfirm>
                 </span>
                 <span v-else class="editable-row-operations">
                   <a @click="edit(record.key)">编辑</a>
                 </span>
               <!-- </div> -->
               <!-- 删除按钮 -->
               <a-popconfirm
                 v-if="dataSource.length"
                 title="Sure to delete?"
                 @confirm="onDelete(record.key)"
               >
                 <a>删除</a>
               </a-popconfirm>
             </template>
             
           </template>
         </a-table>
         <a-card-meta title="使用说明：">
         <template #description>1.点击“新增年份”按钮可以添加新的年份（时点）。
           <br>2.点击编辑按钮可以修改现金流入和流出的值，点击保存即可保存当前输入的值，点击取消退出编辑模式。
           <br>3.点击删除按钮则会删除该行数据
         </template>
         
       </a-card-meta>
       </a-card>
         <h3>第二步，根据独立方案年收入、现金流出和折现率，计算净现值NPV、内部收益率IRR、动态投资回收期DPP三个指标的值。</h3>
   
         
         
       </div>
       
         <br>
        <h3>
         第三步，将计算结果与标准值进行比对，判断该方案是否可行。
        </h3>
        <p class=content>·若NPV>=0，则方案可接受；反之不可接受。</p>
        <p class=content>·若IRR>=MARR，则方案可接受；反之不可接受。</p>
         <p class=content>·若DPP小于设定的基准动态投资回收期，则方案可接受。
        </p>
        
         <a-table :columns="results" :data-source="dataResults">
           <template #headerCell="{ column }">
           </template>
   
           <template #bodyCell="{column,record}">
             <template v-if="column.dataIndex === 'isAccepted'">
               <span>
                 <a-tag v-for="tag in record.isAccepted" :key="tag" :color="tag === 'not accepted' ? 'volcano' : 'green'">
                   {{ tag.toUpperCase() }}
                 </a-tag>
               </span>
             </template>
           </template>
         </a-table>
        
         <h2>四、实验心得</h2>
         <a-textarea :rows="5" v-model:value="feeling" placeholder="请输入实验心得" allow-clear />
         <br>
         <br>
         <div style="float:right">
       <a-upload
       :file-list="fileList"
       name="file"
       :before-upload="uploadFile"
       maxCount="1"
       action=""
       method="get"
       @change="handleChange"
       >
       <a-button>
         <upload-outlined/>
         提交报告
       </a-button>
     </a-upload>
   </div>
   
   </template>
   
   
   
   <script lang="ts">
   import { computed, defineComponent, reactive, ref } from 'vue';
   import type { Ref, UnwrapRef } from 'vue';
   import axios from 'axios';
   import Cookies from 'js-cookie';
   import { useRoute } from 'vue-router';
   import { CheckOutlined, EditOutlined } from '@ant-design/icons-vue';
   import { cloneDeep } from 'lodash-es';
   import { UploadProps } from 'ant-design-vue/lib/upload';
   import { UploadChangeParam } from 'ant-design-vue/es/upload/interface';
   import type { Dayjs } from 'dayjs';
   import message from 'ant-design-vue/es/message';
   
   const rt = useRoute()
   
   interface DataItem {
       key: string;
       year: number;
       income: number;
       outcome: number;
       npv:number;
       irr:number;
       dpp:number;
   }
   
   export default {
       components: {
           CheckOutlined,
           EditOutlined,
         },
         setup() {
           const feeling = ref<string>('');
           const columns = [
             {
               title: '年份',
               dataIndex: 'year',
               width: '5%',
             },
             {
               title: '现金流入',
               dataIndex: 'income',
             },
             {
               title: '现金流出',
               dataIndex: 'outcome',
             },
            
             
             // {
             //   title: '净现值',
             //   dataIndex: 'npv',
             //   //ellipsis: true
             // },
             // {
             //   title: '内部收益率',
             //   dataIndex: 'irr',
             //   //ellipsis: true
             // },
             // {
             //   title: '动态投资回归周期（年）',
             //   dataIndex: 'dpp',
             //   //ellipsis: true
             // },
             {
               title: '操作',
               dataIndex: 'operation',
             },
           ];
           const results=[
             {
               title:'指标',
               dataIndex:'target',
             },
             {
               title:'计算结果',
               dataIndex:'value',
             },
             {
               title:'标准值',
               dataIndex:'standard',
             },
             {
               title:'是否通过',
               dataIndex:'isAccepted',
             },
             // {
             //   title:'说明',
             //   dataIndex:'desciption',
             // },
           ];
           
           const activeKey=ref([]);
   
   
           const reportername = ref<string>('');//报告人姓名
           const experimentdate = ref<Dayjs>();//实验时间
   
           const ic=ref<number>()//折现率
           const dataSource: Ref<DataItem[]> = ref([
             {
               key: '0',
               year: 0,
               income:0,
               outcome: 0,
               npv:0,
               irr:0,
               dpp:0
             },
             
           ]);
           const count = computed(() => dataSource.value.length );
           const editableData: UnwrapRef<Record<string, DataItem>> = reactive({});
       
           const calculateNpv =function(year,income,outcome,preNpv){
             console.log(ic.value)
           return preNpv+(income-outcome)/Math.pow(1+ic.value,year)
         }
           const updateNpv=function(){
           dataSource.value.reduce((previous : Number,currentItem : DataItem,currentIndex : Number)=>{
             let re=calculateNpv(currentIndex,currentItem.income,currentItem.outcome,previous);
               currentItem.npv=re;
               console.log(re)
               return re
             },0)
         }
           const updateirr=function(){
             {
             const cashFlows = dataSource.value.map((item) => item.income - item.outcome);
             console.log(cashFlows)
             //计算IRR值
             let maxIterationCount = 2000;
             let absoluteAccuracy = 1.0E-007;
           
             let guess =0.1;
     
             let i = 0;
             while (i < maxIterationCount) {
             let fValue = 0;
             let fDerivative = 0;
             for (let k = 0; k < cashFlows.length; k++) {
               fValue += cashFlows[k] / Math.pow(1+ guess, k);
               fDerivative += -k * cashFlows[k] / Math.pow(1 + guess, k + 1);
             }
             let x1 = guess - fValue / fDerivative;
             if (Math.abs(x1 - guess) <= absoluteAccuracy) {
               dataSource.value[dataSource.value.length-1].irr = x1;
             }
             guess = x1;
             i++;
           }
     
            };
           }
   
           const updateDPP = () => {
             var i;
             //净现金流量
             const cashFlows = dataSource.value.map((item) => item.income - item.outcome);
   
             //累计现金流量和
             var leijixianjin=[];
             cashFlows.forEach((item)=>{leijixianjin.push(item)})
   
             for(i=1;i<leijixianjin.length;i++)
             {
             leijixianjin[i]=leijixianjin[i-1]+cashFlows[i];
             }
   
             //现值
             var xiancash=[];
             cashFlows.forEach((item)=>{xiancash.push(item)})
   
   
             for(i=1;i<xiancash.length;i++)
             {
               console.log(ic.value)
               let xianzhi = ic.value + 1;
               console.log(xianzhi)
               xiancash[i]=xiancash[i]/Math.pow(xianzhi,i);
             }
   
             //NPV
             var NPV=[];
             leijixianjin.forEach((item)=>{NPV.push(item)})
             let is=0;
             for(i=1;i<NPV.length;i++)
             {
               NPV[i]=NPV[i-1]+xiancash[i];
             }
             for(var num=1;num<NPV.length;num++){
               if(NPV[num]>0)
               {
                is=1;
                break;
               } 
             }
             console.log(leijixianjin)
             console.log(xiancash)
             console.log(NPV)
             if(is==1)
             {var dpp1=num-1+Math.abs(NPV[num-1]/xiancash[num]);
             dataSource.value[dataSource.value.length-1].dpp = dpp1;}
             else{
              dataSource.value[dataSource.value.length-1].dpp = 0;
             }
             };
           const dataResults=[
             {
               key:'1',
               target:'净现值NPV',
               value:'-',
               standard:0,
               isAccepted:[],
               //description:'',
             },
             {
               key:'2',
               target:'内部收益率IRR',
               value:'-',
               standard:ic.value,
               isAccepted:[],
               //description:'',
             },
             {
               key:'3',
               target:'动态投资回收期DPP（年）',
               value:'-',
               standard:'-',
               isAccepted:[],
             }
           ];
         
         const compare = () =>{
           dataResults[0].value=dataSource.value[dataSource.value.length-1].npv.toFixed(2);
           dataResults[1].value=dataSource.value[dataSource.value.length-1].irr.toFixed(2);
           dataResults[1].standard=ic.value;
           dataResults[2].value=dataSource.value[dataSource.value.length-1].dpp.toFixed(2);
           dataResults[2].standard=dataSource.value.length-1;
           console.log('test');
           if(dataSource.value[dataSource.value.length-1].npv >=0){
             dataResults[0].isAccepted=['accepted'];
             //dataResults[0].description='净现值≥0，方案可接受';
           }else{
             dataResults[0].isAccepted=['not accepted'];
             //dataResults[0].description='净现值＜0，方案不可接受';
           }
   
           if(dataSource.value[dataSource.value.length-1].irr >=ic.value){
             dataResults[1].isAccepted=['accepted'];
             //dataResults[1].description='内部收益率≥MARR，方案可接受';
           }else{
             dataResults[1].isAccepted=['not accepted'];
             //dataResults[1].description='内部收益率＜MARR，方案不可接受';
           }
           if(dataSource.value[dataSource.value.length-1].dpp<=dataResults[2].standard){
             dataResults[2].isAccepted=['accepted'];
           }else{
             dataResults[2].isAccepted=['not accepted'];
           }
         };
         
         const cancel = (key: string) => {
           delete editableData[key];
         };
         
         const edit = (key: string) => {
           editableData[key] = cloneDeep(dataSource.value.filter(item => key === item.key)[0]);
         };
         const save = (key: string) => {
           console.log("保存更新")
           //更新净现值
           
           Object.assign(dataSource.value.filter(item => key === item.key)[0], editableData[key]);
           updateNpv();
           updateirr();
           updateDPP();
           compare();
           delete editableData[key];
         };
   
           const onDelete = (key: string) => {
           
           dataSource.value = dataSource.value.filter(item => item.key !== key);
           for(var i=0;i<dataSource.value.length;i++){
             dataSource.value[i].key=i.toString();
             dataSource.value[i].year=i;
           }
           //更新净现值
           updateNpv();
           updateirr();
           updateDPP();
           compare();
         };
         const handleAdd = () => {
           const newData = {
             key: `${count.value}`,
             year: count.value,
             income: 0,
             outcome: 0,
             npv:0,
             irr:0,
             dpp:0
           };
           dataSource.value.push(newData);
         };
           
         const fileList = ref<UploadProps['fileList']>([])
           
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
         const uploadFile = (report)=>{
     // 生成一个表单文件
           let formData = new FormData();
   
           formData.append("experiment_id",rt.meta.id.toString())
           formData.append("report",report)
   
           const date = new Date();
           const formatDate = formatDateTime(date, 'yyyy-MM-dd HH:mm:ss');
   
           formData.append("submit_time",formatDate)
   
           new Promise(resolve => axios({
               method:"post",
               url:"api/report/submit",
               headers: {
                 "Content-Type": "multipart/form-data",
                 "Authorization":Cookies.get('Authorization'),
               },
               data:formData
             }).then((res)=>{
               // fileList.value=report
               message.success('上传成功')
             }));
             
         }
         const handleChange = (info: UploadChangeParam) => {      
               if (info.file.status !== 'uploading') {
                 // console.log('uploading')
               }
               if (info.file.status === 'done') {
                 // console.log(fileList)
                 fileList.value = [];
                 // message.success(`${info.file.name} 上传成功`);
               } else if (info.file.status === 'error') {
                 message.error(`${info.file.name} 上传失败`);
               }
             };
           
           return {
             activeKey,
             columns,
             feeling,
             results,
             onDelete,
             handleAdd,
             dataSource,
             dataResults,
             editableData,
             count,
             edit,
             save,
             cancel,
             updateirr,
             updateDPP,
             ic,
             experimentdate,
             reportername,
             fileList,
             uploadFile,
             handleChange,
           };
         },
   }
   </script >
   
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
           float: right;
         }
       }
       .editable-cell:hover .editable-cell-icon {
         display: inline-block;
       }
       .upload{
         float:right;
       }
       .editable-row-operations a {
         margin-right: 8px;
       }
       </style>