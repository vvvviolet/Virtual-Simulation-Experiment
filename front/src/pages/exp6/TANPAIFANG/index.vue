<template>
    <div class="main" ref="main">
        <!-- 进入实验界面 -->
        <section v-if="sectionIndex === 0">
            <div class="header-wrapper">
                <a-button type="primary" style="float: right; margin-top: 16px; margin-right: 16px"
                    @click="showCreateDialog = true">
                    创建实验
                </a-button>
                <!-- 创建实验弹窗 -->
                <a-modal title="创建实验" v-model:visible="showCreateDialog" width="30%" @ok="createExperiment">
                    <a-form ref="createForm" :model="form" :label-col="{ span: 8 }">
                        <a-form-item label="实验名称">
                            <a-input v-model:value="form.name"></a-input>
                        </a-form-item>
                        <a-form-item label="实验时长（分钟）">
                            <a-input-number v-model:value="form.duration" :min="1"></a-input-number>
                        </a-form-item>
                        <a-form-item label="实验过期时间">
                            <a-date-picker v-model:value="form.expire_time" show-time
                                format="YYYY-MM-DD HH:mm:ss"></a-date-picker>
                        </a-form-item>
                    </a-form>
                </a-modal>
            </div>
            <div class="experiment-list">
                <a-card title="实验列表">
                    <a-card-grid style="width: 33%;" v-for="experiment in experiments" :key="experiment.id"
                        :class="experimentCardClass" hoverable>
                        <h3 :style="experimentTitleStyle">{{ experiment.name }}</h3>
                        <p>创建时间：{{ experiment.create_time }}</p>
                        <p>过期时间：{{ experiment.expire_time }}</p>
                        <p>实验时长：{{ experiment.duration }}分钟</p>
                        <p>状态：{{ experiment.status_str }}</p>
                        <div class="card-buttons" style="display: flex; justify-content: center;">
                            <a-button type="info" @click="enterExperiment(experiment.id)">进入实验</a-button>
                            <a-button type="danger" @click="endExperiment(experiment.id)">结束实验</a-button>
                            <a-button type="primary" @click="restartExperiment(experiment.id)">重启实验</a-button>
                        </div>
                    </a-card-grid>
                </a-card>
            </div>
        </section>




        <!-- 报价界面 -->
        <section v-if="sectionIndex == 1">
            <div class="experimentInfo">
                <!-- 使用Descriptions组件展示实验信息 -->
                <a-descriptions :bordered="true" :column="3">
                    <a-descriptions-item label="当前实验名称">
                        {{ experiments[currentExperimentId - 1].name }}
                    </a-descriptions-item>
                    <a-descriptions-item label="实验时长">
                        {{ experiments[currentExperimentId - 1].duration }}分钟
                    </a-descriptions-item>
                    <a-descriptions-item label="实验过期时间">
                        <!-- 需要处理一下格式 -->
                        <!-- 后端传来的格式是2023-05-31T11:02:48.824000 -->
                        <!-- 替换T为空格，取前19位 -->
                        <a-statistic
                            :value="experiments[currentExperimentId - 1].expire_time.replace('T', ' ').substring(0, 19)"
                            :precision="0"></a-statistic>
                    </a-descriptions-item>
                    <a-descriptions-item label="实验状态">
                        {{ experiments[currentExperimentId - 1].status_str }}
                    </a-descriptions-item>
                    <a-descriptions-item label="当前实验人数">
                        {{ experimentParticipantCount }}
                    </a-descriptions-item>
                    <a-descriptions-item label="当前时间">
                        <a-statistic :value="currentTime" :precision="0"></a-statistic>
                    </a-descriptions-item>
                </a-descriptions>
            </div>
            <div class="header-wrapper">
                <p class="title ml-2">实验内容-场景模拟</p>
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
                <a-input-number size="large" v-model:value="seller_price" addon-before="报价"
                    addon-after="元"></a-input-number>

                <p class="mr-5 mb-0" style="margin-left: 50px; font-size:18px">
                    需求方报价
                </p>
                <a-input-number size="large" v-model:value="buyer_price" addon-before="报价" addon-after="元"></a-input-number>

                <a-button style="margin-left: 50px;" type="primary" @click="submitData" shape="round">
                    <arrow-up-outlined />提交报价</a-button>
            </div>

        </section>

        <!-- 实验结果界面 -->
        <section v-if="sectionIndex == 2">
            <div class="header-wrapper">
                <p class="title ml-2">实验结果</p>
                <div>
                    <a-button class="mr-2" type="primary" @click="getData" shape="round">
                        <bar-chart-outlined />获取数据</a-button>
                    <a-button class="mr-2" type="primary" @click="drawChart" shape="round">
                        <area-chart-outlined />绘制图表</a-button>
                </div>
            </div>
            <div class="container">
                <div v-if="visibility.dataInfo == false">
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
        <section v-if="sectionIndex == 3">
            <!-- TODO: 在canvas上填入以下的内容 -->
            <div class="report-wrapper">
                <h2>实验原理</h2>
                <p>在这里填写实验原理的内容</p>

                <h2>实验目的</h2>
                <p>在这里填写实验目的的内容</p>

                <h2>实验步骤</h2>
                <p>在这里填写实验步骤的内容</p>

                <h2>实验内容</h2>
                <p>在这里填写实验内容的描述</p>

                <h2>图表</h2>
                <div class="chart-container">
                    <!-- 在这里引用上一页生成的图表 -->
                    <div class="chart-wrapper">
                        <div id="chart1" class="chart"></div>
                    </div>
                    <div class="chart-wrapper">
                        <div id="chart2" class="chart"></div>
                    </div>
                </div>

                <h2>实验心得</h2>
                <div class="feedback-wrapper">
                    <a-textarea v-model="experimentFeedback" :auto-size="{ minRows: 3 }" class="feedback-input"
                        placeholder="请输入实验心得，暂未支持 Markdown"></a-textarea>
                </div>
            </div>
            <a-button type="primary" @click="exportAsPDF" shape="round" class="pdf-download-btn">下载本页为PDF</a-button>
        </section>

    </div>
    <div class="bottom-wrapper">
        <a-button style="float: left;" size="large" type="link" @click="PgUp"
            v-if="sectionIndex > 0"><arrow-left-outlined />
            上一页</a-button>
        <a-button style="float: right;" size="large" type="link" @click="PgDn" v-if="sectionIndex < 3">
            下一页<arrow-right-outlined /></a-button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import * as echarts from "echarts";
import { Space, Table, Tag, message } from "ant-design-vue";
import axios from "axios";
import { count } from "console";
// 引入jsPDF
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import html2pdf from "html2pdf.js";

export default defineComponent({
    name: "CarbonEmission",
    components: {
        aTable: Table,
        aTag: Tag,
        aSpace: Space,
    },
    data() {
        return {
            // 创建实验弹窗
            showCreateDialog: false, // 控制创建实验弹窗的显示与隐藏
            form: {
                name: '', // 实验名称
                duration: 60, // 实验时长（分钟）
                expire_time: null // 实验过期时间
            },
            datePickerOptions: {
                disabledDate: (time) => {
                    return time.getTime() < Date.now(); // 禁止选择过去的日期和时间
                }
            },

            // 当前时间
            currentTime: '',

            // 实验心得
            experimentFeedback: '',

            // 实验列表卡片样式
            experimentCardClass: "experiment-card",
            experimentTitleStyle: {
                color: "#1890ff"
            },

            currentExperimentId: null, // 当前实验ID

            sectionIndex: 0,//取值为 0 1 2 3 共4页

            visibility: {
                dataInfo: false,
                chart: false,
            },

            experiments: [],    // 实验列表

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
                    slots: { customRender: "price" },
                },
                {
                    title: "数量",
                    dataIndex: "count",
                    key: "count",
                    slots: { customRender: "count" },
                },
                {
                    title: "累计数量",
                    dataIndex: "cum_count",
                    key: "cum_count",
                    slots: { customRender: "cum_count" },
                },
                {
                    title: "累计价格",
                    dataIndex: "cum_price",
                    key: "cum_price",
                    slots: { customRender: "cum_price" },
                },
            ],
            // 4. columns_seller
            columns_seller: [
                {
                    title: "出价",
                    dataIndex: "price",
                    key: "price",
                    slots: { customRender: "price" },
                },
                {
                    title: "数量",
                    dataIndex: "count",
                    key: "count",
                    slots: { customRender: "count" },
                },
                {
                    title: "累计数量",
                    dataIndex: "cum_count",
                    key: "cum_count",
                    slots: { customRender: "cum_count" },
                },
            ],
        }
    },
    methods: {
        // TODO: 导出实验报告为 PDF
        exportAsPDF() {
            // 获取实验报告的 HTML 元素
            const report = document.querySelector(".report-wrapper");

            // 获取main的宽度
            const width = this.$refs.main.clientWidth;

            // 设置导出选项
            const options = {
                margin: [10, 10], // PDF页面的边距
                filename: '实验报告.pdf', // 导出的PDF文件名
                image: { type: 'png', quality: 1 }, // 图片格式和质量
                html2canvas: { scale: 2 }, // html2canvas选项，可以调整缩放比例
                jsPDF: { format: 'a3', orientation: 'portrait' } // jsPDF选项，设置纸张格式和方向
            };
            // 输出日志
            console.log(report);    
            // 使用html2pdf库将HTML转换为PDF
            html2pdf().set(options).from(report).save();

        },
        PgUp() {
            if (this.sectionIndex > 0) {
                this.sectionIndex = this.sectionIndex - 1;
                // console.log(this.sectionIndex);
            }
        },
        PgDn() {
            if (this.sectionIndex < 3) {
                this.sectionIndex = this.sectionIndex + 1;
                // console.log(this.sectionIndex);
            }
        },

        submitData() {
            // 首先判断当前实验是否结束
            // 如果结束，提示用户
            // 如果未结束，提交数据
            if (this.experiments[this.currentExperimentId - 1].status === 1 || this.experiments[this.currentExperimentId - 1].status_str === "已结束(过期)" || this.experiments[this.currentExperimentId - 1].status_str === "已结束(教师设置)") {
                message.error('当前实验已结束')
                return;
            }
            axios({
                method: "post",
                url: `http://127.0.0.1:8000/experiments/${this.currentExperimentId}/bids`,
                data: {
                    student_id: 1, // FIXME: 改为真实的学生ID
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
        drawChart() {
            this.visibility.chart = true;
            this.$nextTick(() => {
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
                                    { type: 'max', name: '最大值' },
                                ]
                            }
                        }
                    ]
                };
                chart2.setOption(option2);
                console.log("drawChart end");
            });
        },
        //  获取数据 GET 127.0.0.1:8000/experiments/{experiment_id}/result
        async getData() {
            // 1. 获取数据
            return axios({
                method: "get",
                url: `http://127.0.0.1:8000/experiments/${this.currentExperimentId}/result`
            }).then((res) => {
                // 2. 将数据赋值给 buyer_info 和 seller_info
                this.buyer_info = res.data.buy;
                this.seller_info = res.data.sell;
                // console.log(this.buyer_info);
                // console.log(this.seller_info);
                this.visibility.dataInfo = true;

                // FIXME: 3. 绘制图表
                // this.drawChart();

            }).catch((err) => {
                console.log(err);
                if (this.currentExperimentId == null) {
                    message.error('请先进入实验, 0.5秒后跳转到实验列表界面')
                    // 提示用户0.5秒后跳转到实验界面
                    setTimeout(() => {
                        this.sectionIndex = 0;
                    }, 500);


                } else {
                    message.error('获取数据失败')
                }
            })
        },

        //获取实验人数
        getExperimentParticipantCount() {
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
        // 获取实验列表
        getExperiments() {
            axios({
                method: "get",
                url: "http://127.0.0.1:8000/experiments",
            }).then((res) => {
                this.experiments = res.data.experiments;
                // 前端判断时间是否过期
                // 如果status为1，表示实验被教师设置为结束，不考虑过期时间
                // 如果status为0，表示实验未被教师设置为结束，需要判断当前时间是否超过过期时间
                // 注意: item的expire_time是字符串类型，需要转换为时间戳
                // 教师设置结束的实验，status_str设置为已结束(教师设置)
                // 过期的实验，status_str设置为已结束(过期)
                this.experiments.forEach((item) => {
                    if (item.status === 0) {
                        // 未被教师设置为结束
                        const expireTime = new Date(item.expire_time).getTime();
                        const now = new Date().getTime();
                        if (now > expireTime) {
                            // 过期
                            item.status_str = "已结束(过期)";
                        } else {
                            // 未过期
                            item.status_str = "进行中";
                        }
                    } else {
                        // 被教师设置为结束
                        item.status_str = "已结束(教师设置)";
                    }
                });

                console.log(this.experiments);
            }).catch((err) => {
                console.log(err);
            })

        },

        // FIXME: 进入实验函数
        enterExperiment(experimentId) {
            // 设置当前实验ID
            // 跳转到实验界面
            this.currentExperimentId = experimentId;
            this.sectionIndex = 1;
        },

        // FIXME: 结束实验函数
        endExperiment(experimentId) {
            // 向后端发送请求，结束实验
            // 把实验状态设置为 1
            // PATCH experiments/{experiment_id}
            axios({
                method: "patch",
                url: `http://127.0.0.1:8000/experiments/${experimentId}`,
                data: {
                    status: 1
                }
            }).then((res) => {
                // 结束实验成功
                // 重新获取实验列表
                this.getExperiments();
                // 提示用户
                message.success('结束实验成功')
                // 刷新card
                this.$forceUpdate();
            }).catch((err) => {
                console.log(err);
            })
        },

        // FIXME: 重启实验函数
        restartExperiment(experimentId) {
            // 向后端发送请求，重启实验
            // 把实验状态设置为 0
            // PATCH experiments/{experiment_id}
            axios({
                method: "patch",
                url: `http://127.0.0.1:8000/experiments/${experimentId}`,
                data: {
                    status: 0,
                    // 重启实验时，需要重新设置过期时间
                    // 默认延长 1 小时
                    expire_time: new Date(new Date().getTime() + 60 * 60 * 1000),
                    duration: 60
                }
            }).then((res) => {
                // 重启实验成功
                // 重新获取实验列表
                this.getExperiments();
                // 提示用户
                message.success('重启实验成功');
                // 刷新 card
                this.$forceUpdate();
            }).catch((err) => {
                console.log(err);
            });
        },

        // FIXME: 创建实验函数
        createExperiment() {
            // 执行创建实验的操作，提交表单数据到后端
            // 可以使用 Axios 或其他方式发送请求
            // POST experiments
            axios({
                method: "post",
                url: "http://127.0.0.1:8000/experiments",
                data: this.form
            }).then((res) => {
                // 创建实验成功
                // 重新获取实验列表
                this.getExperiments();
                // 提示用户
                message.success('创建实验成功');
                // 关闭弹窗
                this.showCreateDialog = false;
            }).catch((err) => {
                console.log(err);
            })
            // 示例代码，输出表单数据到控制台
            console.log(this.form);

            // 提交成功后，关闭弹窗
            this.showCreateDialog = false;
        },


    },
    mounted() {
        // 1. 获取实验列表
        if (this.sectionIndex === 0) {
            this.getExperiments();
        }
        // this.getData();
        this.startPolling();
    },
    unmounted() {
        this.stopPolling();
    },
    created() {
        // 设置定时器，每秒更新时间数据
        setInterval(() => {
            // 需要处理时间的格式
            // 2021-05-31T11:02:48.824000
            // 替换T为空格，取前19位
            // 还需要处理时区问题，加上 8 小时
            let date = new Date();
            date.setTime(date.getTime() + 8 * 60 * 60 * 1000);
            this.currentTime = date.toISOString().replace('T', ' ').substring(0, 19);
        }, 1000);
    },
    watch: {
        sectionIndex: {
            async handler(newVal, oldVal) {
                // 输出所选择的实验id
                // message.info(`当前实验id为${this.currentExperimentId}`)
                // console.log('上一个页面索引：', oldVal);
                // console.log('当前所在页面索引：', newVal);
                if (newVal === 0) {
                    // 监视 sectionIndex
                    // 当 sectionIndex 为 0 时，获取实验列表
                    this.getExperiments();
                    // 将当前实验ID置空
                    this.currentExperimentId = null;
                } else {
                    // 其他页面, 检查当前实验ID是否为空
                    if (this.currentExperimentId == null) {
                        // 提示用户0.5秒后跳转到实验界面
                        message.error('请先进入实验, 0.5秒后跳转到实验列表界面')
                        setTimeout(() => {
                            this.sectionIndex = 0;
                        }, 500);
                    }
                    else if (newVal === 1) {
                        // 获取实验人数
                        this.getExperimentParticipantCount();
                        message.info(`当前实验id为${this.currentExperimentId}`)
                        message.info(`当前实验人数为${this.experimentParticipantCount}`)
                        message.info(`当前实验名称为: ${this.experiments[this.currentExperimentId - 1].name}`)
                        this.$forceUpdate();
                    }
                    // 假设在第三页
                    else if (newVal === 2) {
                        // 获取数据
                        this.getData().then(() => {
                            // 绘制图表
                            this.drawChart();
                        });
                    }
                    // 假设在第四页
                    else if (newVal === 3) {
                        // 获取数据
                        this.getData().then(() => {
                            // 绘制图表
                            this.drawChart();
                        });
                    }
                }
            }
        }
    }
});

</script>



<style scoped>
.main {
    min-height: 500px;
    position: relative;
}

section {
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

.chart {
    width: 100%;
    height: 500px;
}

.bottom-wrapper {
    margin: 16px;
    left: 0;
    width: 97%;
}

.content {
    text-indent: 2em;
    margin-left: 20px;
    margin-right: 20px;
    font-size: 16px;
}

.experiment-card {
    /* border: 1px solid #1890ff; */
    /* border-radius: 5px; */
    margin: 0 auto;
    overflow: auto;
}

.card-buttons {
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
}

/* 在屏幕很小的时候，调整按钮的排布为纵向 */
@media screen and (max-width: 960px) {
    .card-buttons {
        flex-direction: column;
    }
}

.feedback-wrapper {
    margin-bottom: 16px;
}

.feedback-input {
    margin-top: 8px;
}

</style>