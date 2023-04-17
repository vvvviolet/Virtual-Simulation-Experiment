<template>
    <div>
    <div>
      <span>
      <h1 class="title">实验五 单方案经济评价实验</h1>
        <a-space>
        <a-button class="upload" type="primary" >
    <template #icon>
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
</a-space>
      </span>
    </div>
      <hr/>
      <h2>一、实验目的  </h2>
      <p class="content">掌握独立方案评价的动态指标计算方法，并根据指标判断方案是否可行。本实验为课内设计性实验项目，实验学时 1 学时，完成实验报告 1 学时。
      </p>
      <h2>二、实验步骤</h2>
      <h3>第一步，用户选择计算的时点（年份）数，并输入每年的现金流入（独立方案年收入）和现金流出值。（单位：千元）</h3>
      <h3>第二步，根据独立方案年收入、现金流出和折现率（取0.1），计算净现值NPV、内部收益率IRR、动态投资回收期DPP三个指标的值。</h3>
      <a-typography-paragraph>
        <a-typography-text strong>·净现值(NPV):</a-typography-text>
        净现值是指按一定的折现率（一般采用基准收益率ic），将各年的净现金流量折现到同一时点（通常是初期时点）的现值之和。计算公式：
        <br>
        <img src="../../../assets/image/NPV.png">其中，(CI-CO)t是第t年的净现金流量。
      </a-typography-paragraph>
      <a-typography-paragraph>
        <a-typography-text strong>·内部收益率(IRR):</a-typography-text>
        内部收益率是指项目在整个计算期内净现值等于零时所对应的折现率。计算公式：
        <br>
        <img src="../../../assets/image/IRR.png">其中，(CI-CO)t是第t年的净现金流量，n为方案寿命周期。
      </a-typography-paragraph>
      <a-typography-paragraph>
        <a-typography-text strong>·动态投资回收期(DPP):</a-typography-text>
        动态投资回收期是指按照设定的基准收益率ic收回全部投资所需的时间。计算公式：
        <br>
        <img src="../../../assets/image/DPP.png">其中，(CI-CO)t是第t年的净现金流量，DPP为所求动态投资回收期。
      </a-typography-paragraph>
    </div>
      <a-button class="editable-add-btn" style="margin-bottom: 8px" @click="handleAdd">Add</a-button>
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
          <template v-if="column.dataIndex === 'npv'">
          <div>
            {{ text||'' }}
          </div>
        </template>
        <template v-if="column.dataIndex === 'irr'">
          <div>
            {{ text||'' }}
          </div>
        </template>
          <template v-else-if="column.dataIndex === 'operation'">
            <a-popconfirm
              v-if="dataSource.length"
              title="Sure to delete?"
              @confirm="onDelete(record.key)"
            >
              <a>Delete</a>
            </a-popconfirm>
          </template>
          
        </template>
      </a-table>
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
     
      <h2>三、实验心得</h2>
      <a-textarea :rows="5" v-model:value="feeling" placeholder="请输入实验心得" allow-clear />
      <br>
      <br>
      <a-button class="upload" type="primary" size="large">提交报告</a-button>
    </template>

    <script lang="ts">
    import { computed, defineComponent, reactive, ref } from 'vue';
    import type { Ref, UnwrapRef } from 'vue';
    import { CheckOutlined, EditOutlined } from '@ant-design/icons-vue';
    import { cloneDeep } from 'lodash-es';
    
    
    interface DataItem {
      key: string;
      year: number;
      income: number;
      outcome: number;
      npv:number;
    irr:number;
    dpp:number;
    }
    
    export default defineComponent({
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
         
          
          {
            title: '净现值',
            dataIndex: 'npv',
            //ellipsis: true
          },
          {
            title: '内部收益率',
            dataIndex: 'irr',
            //ellipsis: true
          },
          {
            title: '动态投资回归周期',
            dataIndex: 'dpp',
            //ellipsis: true
          },
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
        
        const ic=0.1//折现率
        const dataSource: Ref<DataItem[]> = ref([
          {
            key: '0',
            year: 0,
            income:500,
            outcome: 1000,
            npv:-500,
            irr:0,
            dpp:0
          },
          
        ]);
        const count = computed(() => dataSource.value.length );
        const editableData: UnwrapRef<Record<string, DataItem>> = reactive({});
    
        const calculateNpv =function(year,income,outcome,preNpv){
        return preNpv+(income-outcome)/Math.pow(1+ic,year)
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
          //类及现金流量和
          var leijixianjin=cashFlows;
          for(i=1;i<leijixianjin.length;i++)
          {
          leijixianjin[i]=leijixianjin[i-1]+cashFlows[i];
          }
          //xiancash
          var xiancash=cashFlows;
          for(i=1;i<xiancash.length;i++)
          {
            xiancash[i]=xiancash[i]/Math.pow(1.1,i);
          }
          //xianleiji
          var xianleiji=leijixianjin;
          var is=0;
          for(i=1;i<leijixianjin.length;i++)
          {
            leijixianjin[i]=leijixianjin[i]/Math.pow(1.1,i);
          }
          for(var num=1;num<xianleiji.length;num++){
            if(xianleiji[num]>0)
            {
             var is=3;
             break;
            } 
          }
          if(is==3)
          {var dpp1=num-1+Math.abs(xianleiji[i-1]/xiancash[1]);
          dataSource.value[dataSource.value.length-1].dpp = dpp1;}
          else{
           dataSource.value[dataSource.value.length-1].dpp = 0;
          }
          };
        const dataResults=[
          {
            key:'1',
            target:'净现值NPV',
            value:dataSource.value[dataSource.value.length-1].npv,
            standard:0,
            isAccepted:[],
            //description:'',
          },
          {
            key:'2',
            target:'内部收益率IRR',
            value:dataSource.value[dataSource.value.length-1].irr,
            standard:0.1,
            isAccepted:[],
            //description:'',
          },
        ];
      
      const compare = () =>{
        dataResults[0].value=dataSource.value[dataSource.value.length-1].npv;
        dataResults[1].value=dataSource.value[dataSource.value.length-1].irr;
        console.log('test');
        if(dataResults[0].value >=0){
          dataResults[0].isAccepted=['accepted'];
          //dataResults[0].description='净现值≥0，方案可接受';
        }else{
          dataResults[0].isAccepted=['not accepted'];
          //dataResults[0].description='净现值＜0，方案不可接受';
        }

        if(dataResults[1].value >=0.1){
          dataResults[1].isAccepted=['accepted'];
          //dataResults[1].description='内部收益率≥MARR，方案可接受';
        }else{
          dataResults[1].isAccepted=['not accepted'];
          //dataResults[1].description='内部收益率＜MARR，方案不可接受';
        }
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
        
        
        return {
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
          updateirr,
          updateDPP,
          
          
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
    .upload{
      float:right;
    }
    </style>
    