<template>
    <!-- <span> {{ test }}</span> -->
    <!-- <h2>一、实验目的  </h2>
    <p class="content">理解软件项目规模度量功能点法原理，通过实验操作掌握功能点法。 学生应以小组为单位，根据本小组“软件工程管理与经济”课程设计项目架构及组件等设计成果，以功能点方法测量该项目的规模(功能点数量)。 建议选用某一种功能点方法度量课程设计项目的功能点，并采用另外一种功能点方法或其他的软件规模度量方法对前一种方法的度量结果进行验证。 本实验为课内设计性实验项目，实验学时 1 学时，完成实验报告 1 学时。
    </p> -->
    <p class="content">敏感性分析是一种重要的统计分析方法，用于评估模型对输入参数变化的敏感性，以确定哪些参数最为重要。
    它主要是通过不同输入参数的变化来观察该模型的输出结果发生的变化程度，以便更深入地理解模型的行为方式。
    </p>
    <p class="content">在本实验中,我们主要专注于单变量敏感性分析：该方法用于评估单个变量对输出结果
    的影响程度。通过逐个变化一个变量，观察输出结果的变化情况，可以确定该变量对输出结果的敏感程度。</p>
    <h2>一、实验过程 </h2>
    <!-- <p class="content" > -->
    <p class="secondtitle"  style="font-weight: bold;">第一步:确定模型的输入参数以及模型的输出指标</p>
    <p class="content">
        确定输入因素：首先确定你要分析的系统或模型的输入因素。这些因素可以是各种影响输出结果的变量，例如参数、变量、假设等。
    </p>
    <p class="content">确定变化范围：对于每个输入因素，确定其变化范围。这可以是一个具体的数值范围，或者是一个离散的取值集合。
    </p>
    <p class="content">设定评估指标：确定用于评估输出结果的指标或指标集合。这些指标应该能够量化输出结果的变化程度或影响程度。
    </p>
    <p class="content">设定基准情景：选择一个基准情景作为比较的参照点。这可以是系统的当前状态或默认设置。
    </p>
    <p class="secondtitle"  style="font-weight: bold;">第二步:选择敏感性分析的方法和技术</p>
    <p class="content">可选的技术如单元变化、全局变化、Morris敏感度分析、Sobol敏感度分析等。</p>
    <p class="secondtitle"  style="font-weight: bold;">第三步:执行模型运算并分析输出结果</p>
    <p class="content">使用基准情景作为起点，逐个变化输入因素，并运行模型或系统以获取相应的输出结果。
    </p>
    <p class="content">对于每个变化的输入因素，分析相应的输出结果并记录。可以计算指标的变化幅度、相对变化比例等，以评估输入因素对输出结果的敏感程度。将分析结果可视化，例如绘制敏感性曲线、散点图或其他图表。
    </p>
    <p class="secondtitle"  style="font-weight: bold;">注意事项</p>
    <p class="content">进行敏感性分析时，需要注意参数选择和分析方法的选择，以免造成分析结果不准确或过分复杂的问题。</p>


    <h2>二、实验操作步骤 </h2>
    <p class="content">在本实验中，我们探究单因素的变化对于项目的可行性影响。在本实验中选择净现值为分析指标。净现值指未来资金（现金）流入（收入）现值与未来资金（现金）流出（支出）现值的差额，
      是项目评估中净现值法的基本指标。未来的资金流入与资金流出均按预计折现率各个时期的现值系数换算为现值后，再确定其净现值。这种预计折现率是按企业的最低的投资收益率来确定的.是企业投资可以接
      受的最低界限。在本实验中，我们提供基础的六个影响因素作为输入因素，它们分别是：</p>
      <p class="content">1.基准折现率ic。基准收益率也称为基准折现率，是企业或行业或投资者以动态的观点所确定的、可接受的投资方案最低标准的收益水平(一般情况下范围为6%~12%)。
    </p>
    <p class="content">2.售价price(单位：件/元)。
    </p>
    <p class="content">3.销售额sale(单位：元/年)。
    </p>
    <p class="content">4.成本cost(单位：元/年)。
    </p>
    <p class="content">5.增长率r.当年净现金流量与上一年净现金流量的比值（>=1)
    </p>
    <p class="content">6.方案生命周期n(单位：年)。
    </p>
    <h2 style="text-align: center;">定义模型输入</h2>
    <p class="content">模型的输入参数包括了三部分，分别是参数名称，参数变化范围和分析方法。用户需要在下面的表格中填入参数的名称和变化起止范围，有一些参数本身具有一些范围限制，比如基准折现率只能在0-1之间变动。
    </p>
    <p class="content">对于单因素敏感性分析的模型计算，我们提供了两种分析方法，分别是sobol和fast，用户可以自由选择任意一种进行分析。
    </p>

    <!-- <div class="custom-container">
    <div class="container">
    <input type="text" v-model="inputValue" placeholder="请输入参数数量" class="input-field">
   </div>

   <div class="container">
    <button @click="addInput" class="submit-button">添加输入框</button>
    </div>
   <div class="container">
    <div v-for="(input, index) in inputList" :key="index" class="input-field">
      <input type="text" v-model="input.value" :placeholder="'输入框 ' + (index + 1)" class="input-field">
    </div>
  </div>
<div class="container">
    <button @click="submit" class="submit-button">提交</button>
    </div>
</div> -->
<div class="custom-container">
<div>
    <table class="table-container">
      <thead>
        <tr>
          <th>Name</th>
          <th>StartRange</th>
          <th>EndRange</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in formItems" :key="index">
          <td class="wide-cell" > {{this.constname[index]}} </td>
          <!-- <td><input v-model="item.name" type="text" class="wide-cellinput"/></td> -->
          <td><input v-model="item.startrange" type="email" class="wide-cellinput" /></td>
          <td><input v-model="item.endrange" type="tel" class="wide-cellinput" /></td>
        </tr>
      </tbody>
    </table>
    <!-- <table class="table-container">
      <thead>
        <tr>
          <th>Name</th>
          <th>ST</th>
          <th>ST_conf</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="index in rowCount" :key="index">
         <td class="wide-cell" > {{ linename[index-1] }} </td>
          <td class="wide-cell" > {{this.dictionary.S1[index-1] }} </td>
          <td class="wide-cell" > {{ this.dictionary.S1[index-1]}}</td>
        </tr>
      </tbody>
      <br>
    </table> -->
    <div class="container">
    <button @click="addRow" class="submit-button">Add Row</button>
    <button @click="removeRow" class="submit-button">Remove Row</button>
    <select v-model="selectedOption" class="submit-button">
      <option value="">choose your method</option>
      <option value="sobol">sobol</option>
      <option value="fast">fast</option>
    </select>
    <button @click="submit" class="submit-button">Submit</button>
    </div>
  </div>
</div>
    <!-- </template> -->
    <br>
    <h2 style="text-align: center;">敏感性指数</h2>
    <br>
    <div class="custom-container">
    <table class="table-container" v-if="isTable1Visible">
      <thead>
        <tr>
          <th>Name</th>
          <th>S1</th>
          <th>S1_conf</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="index in rowCount" :key="index">
          <td class="wide-cell" > {{ linename[index-1] }} </td>
          <td class="wide-cell" > {{  this.dictionary.S1[index-1]}} </td>
          <td class="wide-cell" >{{  this.dictionary.S1_conf[index-1]}} </td>
        </tr>
      </tbody>
    </table>

    <table class="table-container" v-if="isTableTVisible">
      <thead>
        <tr>
          <th>Name</th>
          <th>ST</th>
          <th>ST_conf</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="index in rowCount" :key="index">
         <td class="wide-cell" > {{ linename[index-1] }} </td>
          <td class="wide-cell" > {{ this.dictionary.ST[index-1]}} </td>
          <td class="wide-cell" > {{ this.dictionary.ST_conf[index-1]}}</td>
        </tr>
      </tbody>
      <br>
    </table>

    </div>
    <br>
    <h2 style="text-align: center;">绘图展示</h2>
    <br>
    <div class="image-container">
      <!-- <div class="custom-container">
                <p class="content">{{ this.myimage }}
    </p>
      </div> -->
        <img v-if="isImageVisible" :src="myimage" alt="Image" class="forimage" />
        <!-- <p class="content">{{ this.myimage }}
    </p> -->
    </div>
    <br /><br />
</template>


<style>
.forimage{
    max-width: 100%;
  max-height: 100%;
}
.image-container{
    display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh; /* 或者根据需要设置容器的高度 */
}
.wide-cellinput {
    border-collapse: collapse; /* 将表格边框合并为一个统一的边框 */
    width: 100%; 
    border-color: rgb(255, 255, 255);
    height: 5vh;
  /* border-radius: 5px; 设置圆角半径为10像素 */
  background-color: white;
  /* width: 300px; 设置宽度为 250px 的单元格 */
}
.wide-cell {
    border-collapse: collapse; /* 将表格边框合并为一个统一的边框 */
    width: calc(100%/3); 
    border-color: rgb(255, 255, 255);
    height: 5vh;
  /* border-radius: 5px; 设置圆角半径为10像素 */
  background-color: white;
  /* width: 300px; 设置宽度为 250px 的单元格 */
}
.table-container {
    border-collapse: collapse; /* 将表格边框合并为一个统一的边框 */
  width: 100%; 
  margin: 0 auto;
  justify-content: center;
  align-items: center;
}
.table-container th{
    height: 5vh;
}
.table-container td {
  border: 1px solid rgb(156, 155, 155);
}
.container {
  border-color: rgb(171, 170, 170);
  border-radius: 10px; /* 设置圆角半径为10像素 */
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
  margin-bottom: 10px;
}
.custom-container {
  background-color: #ffffff; /* 设置背景颜色 */
  border: 1px solid #ccc; /* 设置边框 */
  border-radius: 5px; /* 设置圆角 */
  padding: 10px; /* 设置内边距 */
}
.input-field {
    border-color: rgb(171, 170, 170);
    height: 6vh;
 border-radius: 5px; /* 设置圆角半径为10像素 */
  background-color: white;
  /* margin-right: 16px; */
  /* margin-bottom: 10px; */
}

.submit-button {
    width: 200px;
    margin: 0 auto;
    justify-content: center;
  align-items: center;
    height: 5vh;
    border-color: rgb(221, 220, 220); /* 移除按钮的边框 */
  outline: none;
    border-radius: 5px; 
    background-color: rgb(255, 255, 255);
  padding: 5px 16px;
}
</style>


<script lang="ts">
import { reactive } from 'vue';
import { Item } from 'ant-design-vue/lib/menu';
import { SHOW_ALL } from 'ant-design-vue/lib/vc-tree-select/utils/strategyUtil';
import axios from 'axios';
import { formItemValidateStates } from 'element-plus';
import { result } from 'lodash';
// import { getType } from 'vue-types/dist/utils';
export default {
  setup() {
    const dictionary = reactive({
      S1: [1,2,3,43,1,2],
      ST: [1,2,3,4,5,6],
      S1_conf: [1,2,3,4,5,6],
      ST_conf:[1,2,3,4,5,6]
    });

    return {
      dictionary
    };
  },
  data() {
    return {
       constname:['ic','price', 'sale','cost','r','n'],
       myimage:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUg',
       jsonData: {
        model_name: "sobol",
        num_vars:2,
        name_vars:['1','2'],
        bound_vars:[[1,2],[3,4]]
         },
        mydata:[],
        // rowCount: 1,
        selectedOption: '',
        myString:'',
        namelist:[],
        rangelist:[],
        temp:[],
        isTableTVisible:false,
        isTable1Visible:false,
        isImageVisible: false,
        params48:[],
        formItems: [
        { name: '', startrange: '', endrange: '' } // 初始表格行 // 初始表格行
      ],
      formItemsResult: [
        { name: '', S2: '', S2_conf: '' }],
      inputValue: '',
       // 绑定输入框的值
      inputList: [
        { value: '' }, // 初始的输入框
      ],
    }
  },
  methods: {
    show(){
    console.log(this.selectedOption)
    console.log(this.rowCount)
    console.log(this.namelist)
    console.log(this.rangelist)
    },
    
    postEvent() {
      
  axios
    .post("/api48", JSON.stringify(this.jsonData), {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      console.log(res.data)
      // console.log(res.data.image)
      this.myimage=res.data.image;
      // console.log(this.myimage)
      this.dictionary.S1=res.data.S1;
      this.dictionary.S1_conf=res.data.S1_conf;
      this.dictionary.ST=res.data.ST;
      this.dictionary.ST_conf=res.data.ST_conf;

    })
    .catch(function (error) {
      console.log(error);
    });
},
    showImage() {
      this.isImageVisible = true; // 点击按钮后将图片显示
    },
    addRow() {
      this.formItems.push({ name: '', email: '', phone: '' });
    },
    removeRow() {
      this.formItems.pop();
    },
    submit() {
      // 在这里可以处理输入框的值
      if(this.namelist.length<=1){
        for(let i=0;i<this.formItems.length;i++){
        this.namelist=this.namelist.concat(this.formItems[i].name);
        this.temp=[parseFloat(this.formItems[i].startrange),parseFloat(this.formItems[i].endrange)];
        this.rangelist.push(this.temp);
      }
      }
      this.jsonData.num_vars=this.rowCount;
      this.jsonData.name_vars=this.namelist;
      this.jsonData.bound_vars=this.rangelist;
      this.jsonData.num_vars=6;

      const constrange=[[0.06,0.12],
            [300,600],
            [2000,3000],
            [200000,220000],
            [1.15,1.2],
            [3,5]];
      this.jsonData.model_name=this.selectedOption;
      this.isTable1Visible=true;
      this.isImageVisible = true; // 点击按钮后将图片显示
      this.show();
      this.postEvent();
      if(this.selectedOption=='sobol')
      {
        this.isTableTVisible=true;
      }
    },
    addInput() {
      this.inputList.push({ value: '' }); // 在数组末尾添加一个新的输入框
    },
  },
  computed: {
    rowCount() {
      return this.formItems.length;
    },
    linename(){
        return this.formItems.map(item=>item.name);
    },
    myS1() {
      return this.dictionary.key1; // 从字典中提取特定的数据（这里以key1为例）
    }
  },

}
</script>






