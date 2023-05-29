<template>
    <div class="main">
        <!-- 进入实验界面 -->
        <section v-if="sectionIndex==0">

        </section>

        <!-- 报价界面 -->
        <section v-if="sectionIndex==1">
            <div class="header-wrapper">
                <p class="title ml-2">二、实验内容-场景模拟</p>
            </div>

            <p class="secondtitle">第一步：实验背景说明</p>
            <p class="content">
                碳排放交易是一种政府或国际机构采用的一项政策工具，旨在减少温室气体（特别是二氧化碳）的排放量，以应对气候变化问题。它基于碳排放的经济原理，通过设立一个碳市场来约束和规范企业、组织或国家的碳排放行为。
                <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                本实验中，教师将讲解市场上正常的碳排放市场交易的情况。注：一个单位碳排放权的定价只是一个名义价格，并非真实的市场交易价格。
            </p>

            <p class="secondtitle">第二步：实验场景说明</p>
            <p class="content">
                了解维克里拍卖法原理，参与本实验的学生先后将扮演两种角色(即市场供给
                者和需求者)，可以按照本人对于此一个单位的碳排放权的真实需求报价。参与实验学生不得串通报价信息，否则将影响正常的供需价格关系的平衡。
                <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <strong>
                    第一次填写的报价是作为供给者，根据你心目中的碳排放权的最低单位价格来进行报价出售，若市场定价高于你的报价，将自动视为你愿意出售；
                    <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    第二次填写的报价是作为需求者，请根据你心目中的碳排放权的最高单位价格来进行报价购买，若市场定价低于于你的报价，将自动视为你愿意购买。                
                </strong>
            </p>

            <p class="secondtitle">第三步：模拟报价</p>
            <div style="display: flex;align-items:center">
                <p class="mr-5 mb-0" style="margin-left: 50px; font-size:18px">
                    供给方报价
                </p>
                <a-input-number size="large"  v-model:value="seller_price" addon-before="报价" addon-after="元"></a-input-number>

                <p class="mr-5 mb-0" style="margin-left: 50px; font-size:18px">
                    需求方报价
                </p>
                <a-input-number size="large"  v-model:value="buyer_price" addon-before="报价" addon-after="元"></a-input-number>

                <a-button style="margin-left: 50px;" type="primary" @click="submitData" shape="round"> <arrow-up-outlined />提交报价</a-button>
            </div>
            
            <p class="content mt-5">
                在线实验人数为：{{ experimentParticipantCount }}
            </p>
            
        </section>

        <!-- 实验结果界面 -->
        <section v-if="sectionIndex==2">
            <div class="header-wrapper">
                <p class="title ml-2">三、实验结果</p>
                <div>
                    <a-button class="mr-2" type="primary" @click="getData" shape="round"> <bar-chart-outlined />获取数据</a-button>
                    <a-button class="mr-2" type="primary" @click="drawChart" shape="round"> <area-chart-outlined />绘制图表</a-button>
                </div>
            </div>
            <div class="container" >
                <div v-if="visibility.dataInfo==false">
                    <h2>还没有数据，点击按钮获取数据吧🤖</h2>
                </div>
                <div class="table-container" v-if="visibility.dataInfo">
                    <div class="table-wrapper">
                        <h2>买方出价</h2>
                        <a-table :columns="columns_buyer" :data-source="buyer_info"></a-table>
                    </div>
                    <div class="table-wrapper">
                        <h2>卖方出价</h2>
                        <a-table :columns="columns_seller" :data-source="seller_info"></a-table>
                    </div>
                </div>
                <!-- 使用 echarts 绘制图表 -->
                <div class="chart-container" v-if="visibility.chart">
                    <div class="chart-wrapper">
                        <div id="chart1" class="chart"></div>
                    </div>
                    <div class="chart-wrapper">
                        <div id="chart2" class="chart"></div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 实验报告界面 -->
        <section v-if="sectionIndex==3">
            
        </section>
    </div>
    <div class="bottom-wrapper" >
        <a-button style="float: left;" size="large" type="link" @click="PgUp" v-if="sectionIndex>0"><arrow-left-outlined /> 上一页</a-button>
        <a-button style="float: right;" size="large" type="link" @click="PgDn" v-if="sectionIndex<3"> 下一页<arrow-right-outlined /></a-button>
    </div>
</template>


<script lang="ts">
import {defineComponent} from "vue";
import * as echarts from "echarts";
import {Space, Table, Tag, message } from "ant-design-vue";
import axios from "axios";

export default defineComponent({
    name: "CarbonEmission",
    components: {
        aTable: Table,
        aTag: Tag,
        aSpace: Space,
    },
    data() {
        return {
            sectionIndex: 2,//取值为 0 1 2 3 共4页

            visibility:{
                dataInfo: false,
                chart: false,
            },

            buyer_price: null, //买方报价
            seller_price: null, //卖方报价

            experimentParticipantCount: null,//在线实验人数
            // 1. 买方出价信息
            // price, count, cum_count, cum_price
            buyer_info: [],
            // 2. 卖方出价信息
            // price, count, cum_count
            seller_info: [],
            // 3. columns_buyer
            columns_buyer: [
                {
                    title: "出价",
                    dataIndex: "price",
                    key: "price",
                    slots: {customRender: "price"},
                },
                {
                    title: "数量",
                    dataIndex: "count",
                    key: "count",
                    slots: {customRender: "count"},
                },
                {
                    title: "累计数量",
                    dataIndex: "cum_count",
                    key: "cum_count",
                    slots: {customRender: "cum_count"},
                },
                {
                    title: "累计价格",
                    dataIndex: "cum_price",
                    key: "cum_price",
                    slots: {customRender: "cum_price"},
                },
            ],
            // 4. columns_seller
            columns_seller: [
                {
                    title: "出价",
                    dataIndex: "price",
                    key: "price",
                    slots: {customRender: "price"},
                },
                {
                    title: "数量",
                    dataIndex: "count",
                    key: "count",
                    slots: {customRender: "count"},
                },
                {
                    title: "累计数量",
                    dataIndex: "cum_count",
                    key: "cum_count",
                    slots: {customRender: "cum_count"},
                },
            ],
        }
    },
    methods: {
        PgUp(){
            if(this.sectionIndex >0 ){
                this.sectionIndex=this.sectionIndex-1;
                console.log(this.sectionIndex);              
            }
        },
        PgDn(){
            if(this.sectionIndex <3 ){
                this.sectionIndex=this.sectionIndex+1;
                console.log(this.sectionIndex);
            }
        },

        submitData(){
            axios({
                method: "post",
                url: "http://127.0.0.1:8000/experiments/1/bids",
                data:{
                    student_id: 1,
                    buyer_price: this.buyer_price,
                    seller_price: this.seller_price,
                }
            }).then((res) => {
                
                message.success('提交成功')
            }).catch((err) => {
                console.log(err);
            })

        },
        // 使用 echarts 绘制图表
        drawChart(){
            this.visibility.chart = true;
            this.$nextTick(()=>{
                // 如果页面上已经存在实例化的图表，先销毁
                echarts.dispose(document.getElementById("chart1"));
                echarts.dispose(document.getElementById("chart2"));

                console.log("drawChart");
                // 画出买卖双方出价分布图, 折线图
                const chart1 = echarts.init(document.getElementById("chart1"));

                const option1 = {
                    title: {
                        text: "买卖双方出价分布",
                        left: "center"
                    },
                    tooltip: {},
                    legend: {
                        data: ["买家", "卖家"],
                        // 放在图表下方
                        bottom: 0
                    },
                    xAxis: {
                        name: "出价",
                        type: "value",
                        splitLine: {
                            show: false
                        }
                    },
                    yAxis: {
                        name: "累计数量",
                        type: "value",
                        splitLine: {
                            show: false
                        }
                    },
                    series: [
                        {
                            name: "买家",
                            type: "line",
                            data: this.buyer_info.map((item) => [item.price, item.cum_count])
                        },
                        {
                            name: "卖家",
                            type: "line",
                            data: this.seller_info.map((item) => [item.price, item.cum_count])
                        }
                    ]
                };
                chart1.setOption(option1);

                // 画出买家的累计价格曲线图，标记出最大值
                const chart2 = echarts.init(document.getElementById("chart2"));

                const option2 = {
                    title: {
                        text: "买家累计价格曲线",
                        left: "center"
                    },
                    tooltip: {
                        trigger: "axis"
                    },
                    xAxis: {
                        name: "数量",
                        type: "value",
                        splitLine: {
                            show: false
                        }
                    },
                    yAxis: {
                        name: "价格",
                        type: "value",
                        splitLine: {
                            show: false
                        }
                    },
                    series: [
                        {
                            name: "买家",
                            type: "line",
                            data: this.buyer_info.map((item) => [item.cum_count, item.cum_price]),
                            markPoint: {
                                data: [
                                    {type: 'max', name: '最大值'},
                                ]
                            }
                        }
                    ]
                };
                chart2.setOption(option2);
                console.log("drawChart end");
            });
        },
        //  获取数据 GET 127.0.0.1:8000/experiments/1/result
        getData(){
            // 1. 获取数据
            axios({
                method: "get",
                url: "http://127.0.0.1:8000/experiments/1/result",
            }).then((res) => {
                // 2. 将数据赋值给 buyer_info 和 seller_info
                this.buyer_info = res.data.buy;
                this.seller_info = res.data.sell;
                // console.log(this.buyer_info);
                // console.log(this.seller_info);
               this.visibility.dataInfo=true;
            }).catch((err) => {
                console.log(err);
            })
        },

        //获取实验人数
        getExperimentParticipantCount(){
            axios({
                method: "get",
                url: "http://127.0.0.1:8000/online-count",
            }).then((res) => {
                this.experimentParticipantCount = res.data.count;
            }).catch((err) => {
                console.log(err);
            })
        },
        startPolling() {
            this.pollingInterval = setInterval(() => {
                this.getExperimentParticipantCount()//轮询获取实验人数
            }, 3000); // Polling interval of 3 seconds (3000 milliseconds)
        },
        stopPolling() {
            clearInterval(this.pollingInterval);
        },
    },
    mounted() {
        // 1. 获取数据
        // this.getData();
        this.startPolling();
    },
    unmounted(){
        this.stopPolling();
    },
})

</script>



<style scoped>
.main{
    min-height: 500px;
    position: relative;
}
section{
    position: relative;
}
.container {
    margin: 0 auto;
    padding: 24px;
}

.header-wrapper {
    display: flex;
    justify-content: space-between;
    margin: 10px;
}

.table-container {
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;
}

.table-wrapper {
    width: 48%;
}

.chart-container {
    display: flex;
    justify-content: center;
    margin-top: 24px;
}

.chart-wrapper {
    width: 50%;
}
.title {
    text-align: center;
    font-family: sans-serif;
    font-size: 30px;
    margin-bottom: 0px;
}
.secondtitle {
    text-indent: 2em;
    font-weight: bold;
    font-size: 20px;
}
.chart{
    width: 100%;
    height: 500px;
}

.bottom-wrapper{
    margin: 16px;
    left:0;
    width: 97%;
}
.content {
    text-indent: 2em;
    margin-left: 20px;
    margin-right: 20px;
    font-size: 16px;
}

</style>