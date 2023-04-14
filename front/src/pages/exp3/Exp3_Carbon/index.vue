<template>
  <h1 class="title" >实验3 碳排放需求与供给实验
      <span>  <el-button  class="guidance" type="primary" text  @click="pdfHandle" ><el-icon size="25px"><Document /></el-icon>实验指导书下载</el-button></span> 
  </h1>
  <hr />
  <h2>一、实验目的  </h2>
  <p class="content">1位同学</p>
  <h2>二、实验内容  </h2>
    <p class="content">4. 实施不同政策：通过实验，模拟不同政策下碳排放的需求和供给情况，如碳税、碳交易制度等。通过实施不同政策，并观察碳排放量和碳排放权价格的变化，可以更深入地理解碳排放需求和供给的关系，探究有效的碳排放管理措施。下面是列举出来的一些政策，我们的实验预计会采用其中一种政策应用到实验步骤中。</p>
      <li class="recontent">碳税：碳税是一种通过向碳排放行为征税的政策，可以提高碳排放成本，从而鼓励企业采取更环保的行为。在实验中，可以通过设定不同的碳税税率来模拟不同的碳税政策，然后观察碳排放量和碳排放权价格的变化情况。</li>
      <li class="recontent">碳排放交易制度：碳排放交易制度是一种将碳排放权交易引入市场机制的政策，可以通过设定碳排放权的数量和价格来控制碳排放量。在实验中，可以设置不同的碳排放权总量和初始价格，并观察市场中的碳排放量和碳排放权价格的变化。</li>
      <li class="recontent">能源效率政策：能源效率政策是一种通过提高能源利用效率来减少碳排放的政策，可以通过设定企业的能源利用效率目标、鼓励能源节约行为等方式来实施。在实验中，可以设定不同的能源效率政策，然后观察碳排放量和碳排放权价格的变化情况。</li>
      <li class="recontent">可再生能源政策：可再生能源政策是一种通过鼓励使用可再生能源来减少碳排放的政策，可以通过设定可再生能源的比例目标、提供补贴等方式来实施。在实验中，可以设定不同的可再生能源政策，然后观察碳排放量和碳排放权价格的变化情况。</li>
    <br>
    <p class="content" >5. 收集数据并分析：收集实验中的数据，如碳排放量、碳排放权价格等，并对数据进行统计和分析，以得出有关碳排放需求和供给变化的结论。以下是我们需要收集的数据部分。通过收集和分析这些数据，可以更好地理解碳排放需求和供给的关系，进而制定有效的碳排放管理措施。我们会在设计实验的部分专门设置一个模块用来展示所收集的数据。</p>
      <li class="recontent">碳排放量：需要记录市场中每个参与者的碳排放量，包括企业和政府等。可以通过对碳排放设备进行监测、对排放数据进行统计等方式来收集数据。然后可以分析不同政策下碳排放量的变化，以及市场上的碳排放量分布情况等。</li>
      <li class="recontent">碳排放权价格：需要记录市场中碳排放权的价格，可以通过市场交易数据来获得。可以分析不同政策下碳排放权价格的变化，以及市场上的碳排放权价格分布情况等。</li>
      <li class="recontent">市场结构：需要记录市场中参与者的数量和市场结构。可以分析不同市场结构对碳排放需求和供给的影响，以及市场结构变化对碳排放量和碳排放权价格的影响等。</li>
      <li class="recontent">经济指标：需要记录市场中的一些经济指标，如GDP、失业率等。可以分析不同经济环境下碳排放需求和供给的变化，以及碳排放对经济发展的影响等。</li>
      <li class="recontent">数据分析方法：可以采用统计学方法对收集到的数据进行分析，如回归分析、方差分析等。可以通过数据可视化工具，如图表、统计图等来呈现数据的变化趋势和关联关系。</li>
    <br>
    <p class="content" >6. 总结和讨论：总结实验结果，探讨不同政策和经济环境下碳排放需求和供给的变化情况，提出改进政策的建议。总结和讨论的内容可以有所不同，取决于实验的具体目的和研究者的关注点。总之，总结和讨论可以帮助研究者更好地理解实验结果、得出结论并提出改进措施，从而推动碳排放管理措施的进一步优化。我们将在我们实验进行的最后，进行结果的讨论分析。</p>
      <li class="recontent">实验结果总结：总结实验中不同政策下碳排放量、碳排放权价格和市场结构的变化情况，以及碳排放对经济指标的影响等。</li>
      <li class="recontent">结论讨论：探讨实验结果所反映的碳排放需求和供给的特点和关系，分析碳排放管理措施的有效性和局限性，进一步讨论如何制定更有效的碳排放政策等。</li>
      <li class="recontent">建议改进措施：根据实验结果和结论，提出改进碳排放管理措施的建议和方案，例如加强碳排放监测、提高碳税税率、增加可再生能源使用比例等。</li>
      <li class="recontent">实验的局限性：讨论实验的局限性，例如实验设计不足、实验样本不足等因素对实验结果的影响，以及未考虑到的其他可能影响碳排放的因素。</li>
      <li class="recontent">实验的应用前景：探讨实验的应用前景，例如实验结果对于碳排放政策的指导意义、对于碳排放市场的运作规则的启示等。</li>
    <br>
  <h2>三、实验原理  </h2>
  <p class="content">1位同学</p>
  <h2>四、实验步骤  </h2>
  <p class="content buttons" >1. 实验开始，分为买家和卖家，用户可以点击下面两个按钮进行买家信息和卖家信息的录入:</p>
    <a-button type="primary" ghost @click="maiform = true" class="buttons">我是买家</a-button>
    <a-modal v-model:visible="maiform" title="此次买方信息" @ok="maievent">
      <a-form :model="maiformtext" id="maiform">
        <a-form-item label="购买数量">
          <a-input clearable v-model:value="maiformtext.number" style="width: 180px" placeholder="请输入购买数量"></a-input>
        </a-form-item>
        <a-form-item label="购买价格">
          <a-input clearable v-model:value="maiformtext.cost" style="width: 180px" placeholder="请输入购买价格"></a-input>
        </a-form-item>
      </a-form>
    </a-modal>
    <a-button type="primary" ghost @click="sellform = true" class="buttons">我是卖家</a-button>
    <a-modal v-model:visible="sellform" title="此次卖方信息" @ok="sellevent">
      <a-form :model="sellformtext" id="sellform">
        <a-form-item label="卖出数量">
          <a-input clearable v-model:value="sellformtext.number" style="width: 180px" placeholder="请输入卖出数量"></a-input>
        </a-form-item>
        <a-form-item label="卖出价格">
          <a-input clearable v-model:value="sellformtext.cost" style="width: 180px" placeholder="请输入卖出价格"></a-input>
        </a-form-item>
      </a-form>
    </a-modal>
  <p class="content buttons">2. 在实验的过程中，统计买家数量和卖家数量和总的参与人数，以及当前的实验已经进行的时间等:</p>
    <a-button type="primary" ghost @click="restart" class="buttons">开始实验</a-button>
    <a-button type="primary" ghost @click="endtest" class="buttons">结束实验</a-button>
    <a-descriptions title="实验详情" class="content" :column="4" bordered>
      <a-descriptions-item label="实验进行情况"><a-tag color="blue">{{nowsitua}}</a-tag></a-descriptions-item>
      <a-descriptions-item label="总的参与人数">{{mainumberarray.length + sellnumberarray.length}}</a-descriptions-item>
      <a-descriptions-item label="买家数量">{{mainumberarray.length}}</a-descriptions-item>
      <a-descriptions-item label="卖家数量">{{sellnumberarray.length}}</a-descriptions-item>
    </a-descriptions>
  <h2>五、实验结果  </h2>
  <p class="content">暂时不写</p>
  <h2>六、实验思考  </h2>
  <p class="content">暂时不写</p>
</template>

<script lang="ts">
import { message } from 'ant-design-vue';
  export default {
  name: 'Exp3_carbon_emission',
  data() {
    return {
      nowsitua: "未开始",//实验进行时长
      maiform: false, //买家表格控制变量
      sellform: false, //卖家表格控制变量
      mainumberarray: [], //买家数量信息
      maicostarray: [], // 买家费用信息
      maiinfo: [], //买家全部信息
      sellnumberarray: [], //卖家数量信息
      sellcostarray: [], //卖家费用信息
      sellinfo: [], //卖家全部信息
      maiformtext: {
        number: 0,
        cost: 0,
      }, //买家表格
      sellformtext: {
        number: 0,
        cost: 0,
      }, //卖家表格
    };
  },
  methods: {
    mounted() { //页面加载即开始
      this.setTime(); // 页面加载完成后开始计时
    },
    pdfHandle() {
      window.open('/#/show',"_blank")
    },
    maievent() { //卖家事件
      this.maiform = false;
      this.mainumberarray.push(this.maiformtext.number);
      this.maicostarray.push(this.maiformtext.cost);
      let mai_obj = {
        num: this.maiformtext.number,
        cost: this.maiformtext.cost
      };
      this.maiinfo.push(mai_obj);
      // this.calc_balancePoint();
      this.maiformtext.number = 0;
      this.maiformtext.cost = 0;
      message.success('买家信息录入成功');
    },
    sellevent() { //买家事件
      this.sellform = false;
      this.sellnumberarray.push(this.sellformtext.number);
      this.sellcostarray.push(this.sellformtext.cost);
      let sell_obj = {
        num: this.sellformtext.number,
        cost: this.sellformtext.cost
      };
      this.sellinfo.push(sell_obj);
      // this.calc_balancePoint();
      this.sellformtext.number = 0;
      this.sellformtext.cost = 0;
      message.success('卖家信息录入成功');
    },
    setTime() {//设置定时器
      setInterval(() => {
        this.browseTime++;
      }, 1000);
    },
    restart() { //开始实验
        this.nowsitua = "已开始";
    },
    endtest() { //结束实验
        this.browseTime = 0;
        this.sellnumberarray = [];
        this.sellcostarray = [];
        this.mainumberarray = [];
        this.maicostarray = [];
        this.sellinfo = [];
        this.maiinfo = [];
        this.nowsitua = "未开始";
    }
  }
};
</script>

<style scoped>
.title{
  text-align:center;
  font-family: sans-serif;
  font-size:30px;
}
.content{
  text-indent: 2em;
  margin-left: 20px;
  margin-right: 20px;
}
.guidance{
  position:absolute;
  right:50px;
  font-weight: bold;
}
.buttons{
  text-indent: 0em;
  margin-right: 20px;
  display: inline-block;
}
.recontent{
  margin-left: 60px;
  margin-right: 20px;
}
</style>