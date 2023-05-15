<template>
    <div class="button-wrapper">
        <a-button type="primary" @click="getData">获取数据</a-button>
    </div>
    <div class="container">
        <div class="table-container">
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
        <div class="chart-container">
            <div class="chart-wrapper">
                <div id="chart1" class="chart"></div>
            </div>
            <div class="chart-wrapper">
                <div id="chart2" class="chart"></div>
            </div>
        </div>
    </div>
</template>


<script lang="ts">
import {defineComponent} from "vue";
import * as echarts from "echarts";
import {Space, Table, Tag } from "ant-design-vue";
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
        // 使用 echarts 绘制图表
        drawChart(){
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
                this.drawChart();
            }).catch((err) => {
                console.log(err);
            })
        },
    },
    mounted() {
        // 1. 获取数据
        // this.getData();
    }
})

</script>



<style scoped>
.container {
    margin: 0 auto;
    padding: 24px;
}

.button-wrapper {
    display: flex;
    justify-content: center;
    margin-bottom: 16px;
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

.chart{
    width: 100%;
    height: 500px;
}
</style>