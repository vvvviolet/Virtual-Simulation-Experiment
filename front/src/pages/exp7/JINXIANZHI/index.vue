

<template>
    <br/>
    <a-config-provider  >
        <p style="line-height:200%;font-size: 16px;">
            <a-row justify="center">
                <a-col span="6">课程名称：软件工程经济学</a-col>
                <a-col span="6">课号：420279</a-col>
                <a-col span="6">实验项目名称：净现值和内部收益率计算实验</a-col>
            </a-row>
            <a-row justify="center">
                <a-col span="6">实验时间：<span style="border-bottom: 1px solid grey;border-radius: none;"><a-date-picker
                             :bordered="false"
                            style="width:150px;padding-left:3px;padding-right:3px;" placeholder="点击选择实验时间" /></span></a-col>
                <a-col span="6">实验报告人： <span style="border-bottom: 1px solid grey;border-radius: none;"><a-input
                              placeholder="请输入报告人姓名" size="small" :bordered="false"
                            style="width:18vh;"></a-input></span>
                </a-col>
                <a-col span="6"></a-col>
            </a-row>
        </p>
    </a-config-provider>
    <div class="container">

        <div class="report-item">
            <h3>一、实验目的</h3>
            <p>这个实验的目的是通过实践理解和应用两种重要的金融分析工具 -
                净现值（NPV）和内部回报率（IRR）。这两种工具被广泛应用于金融领域，是对投资项目进行评估的关键指标。通过深入学习并实践这两种工具的使用，学习者将能够掌握评估投资项目的基本技能，学会如何从数据的角度来理解和判断一个投资项目的价值。
            </p>
            <p>在这个实验中，我们不仅希望学习者能理解和应用NPV和IRR这两种工具，更希望他们能够学会如何将理论知识应用到实际的金融分析中。这对于学习者来说，不仅能够提升他们的金融分析能力，同时也能提高他们的问题解决能力和决策能力。
            </p>
        </div>
        <div class="report-item">
            <h3>二、实验原理</h3>
            <p>1. <b>净现值</b>（Net Present Value,
                NPV）是一种投资决策工具，它的主要作用是评估和比较投资项目的经济效益。它是通过将预期的现金流按照某个折现率折现到现在，然后减去初始投资来计算的。NPV是一个十分重要的指标，它能够量化未来收益的当前价值，帮助我们更好地评估和选择投资项目。
            </p>

            <p>公式表示为：<vue-latex expression="NPV=\sum_{t=1}^{n}{\frac{C_t}{(1+r)^t}-C_0}"></vue-latex>，其中<vue-latex
                    expression="C_t" />代表第 <vue-latex expression="t" /> 期的现金流，<vue-latex expression="r" /> 是折现率，<vue-latex
                    expression="C_0" /> 是初始投资。</p>

            <p>2. <b>内部回报率</b>（Internal Rate of Return, IRR）也是一种重要的投资决策工具，它是使投资项目的NPV为零的折现率。换句话说，IRR 是投资者实际得到的年回报率，如果一个项目的 IRR
                高于投资者的期望回报率，那么投资者通常会选择投资，反之则会放弃。</p>

            <p>IRR的计算公式是：<vue-latex expression="IRR=\arg_{r}{\sum_{t=1}^{n}{\frac{C_t}{(1+r)^t}-C_0}=0}" /></p>


        </div>
        <div class="report-item">
            <h3>三、实验内容</h3>
            <p><strong>一：输入实验参数</strong></p>
            <p>首先，您需要在“投资期间”、“折现率”和“现金流”输入框中分别输入投资的持续期间、您对未来现金流的预估折现率以及每个期间的现金流。请您按照从早期到晚期的顺序输入现金流，以确保数据的正确性。</p>
            <p><strong>二：核实输入参数的准确性</strong></p>
            <p>在完成所有必要的输入后，我们的系统将自动对输入的数据进行核实。如果您输入的数据无法被我们的系统识别，或者有某个输入框留空，系统将提醒您修改相关数据。请您仔细检查这些提示，并根据系统的反馈对输入数据进行相应的调整。
            </p>
            <p><strong>三：计算投资的内部收益率和净现值</strong></p>
            <p>现在，您可以点击“计算”按钮，我们的系统将基于您的输入计算投资的内部收益率和净现值。在这个过程中，我们使用了科学的计算方法，保证了结果的准确性和公正性。</p>
            <p><strong>四：检查计算结果</strong></p>
            <p>计算完成后，我们的系统将对结果进行检查。如果计算过程中出现了错误，例如内部收益率的计算无法收敛，系统将提醒您并建议您使用其他投资评估方法，例如修正内部收益率（MIRR）或净现值（NPV）。</p>
            <p><strong>五：创建并查看结果图表</strong></p>
            <p>您可以点击“创建图表”按钮，我们的系统将为您创建一个图表，直观地展示出投资的内部收益率和净现值随折现率变化的趋势。这可以帮助您更直观地理解投资的收益情况，从而做出更明智的投资决策。</p>
            <p><strong>六：理解并分析实验结果</strong></p>
            <p>在查看了计算结果和图表之后，您需要对这些结果进行分析。内部收益率和净现值是投资决策的重要依据，它们反映了投资的盈利能力和价值。您需要根据这些结果，分析投资的盈利情况，预估未来的现金流，并据此调整您的投资策略。</p>
        </div>
    </div>
    <div class="container">
        <div class="report-item">
            <h3>四、实验步骤</h3>
            <p><strong>步骤一：输入计算期数</strong></p>
            <div class="input-section">
                <div class="input-group">
                    <label for="inputNumber">当前计算期数为：</label>
                    <a-input-number id="inputNumber" v-model:value="periodvalue" :min="1" :max="50" />
                    <a-button type="primary" @click="refreshcomp()" style="margin-left: 10px;">确认</a-button>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="report-item">
            <p><strong>步骤二：输入计算现金流</strong></p>
            <div class="table-container">
                <a-table :columns="columns" :data-source="dataSource" bordered>
                    <template #bodyCell="{ column, text, record }">
                        <template v-if="['cashflow'].includes(column.dataIndex)">
                            <div>
                                <a-input v-if="editableData[record.key]"
                                    v-model:value="editableData[record.key][column.dataIndex]" style="margin: -5px 0" />
                                <template v-else>
                                    {{ text }}
                                </template>
                            </div>
                        </template>
                        <template v-else-if="column.dataIndex === 'operation'">
                            <div class="editable-row-operations">
                                <span v-if="editableData[record.key]">
                                    <a-button type="primary" size="small" @click="save(record.key)"
                                        class="operation-btn">保存</a-button>
                                    <a-popconfirm title="Sure to cancel?" @confirm="cancel(record.key)">
                                        <a-button type="default" size="small" class="operation-btn">取消</a-button>
                                    </a-popconfirm>
                                </span>
                                <span v-else>
                                    <a-button type="primary" size="small" @click="edit(record.key)"
                                        class="operation-btn">净现金流数据输入</a-button>
                                </span>
                            </div>
                        </template>
                    </template>
                </a-table>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="report-item">
            <p><strong>步骤三：设定折现率</strong></p>
            <div class="input-section">
                <div class="input-group">
                    <label for="discountRate">设定折现率为：</label>
                    <a-input-number id="discountRate" v-model:value="discount_rate1" :min="0" :max="100"
                        :formatter="value => `${value}%`" :parser="value => value.replace('%', '')" />
                </div>
            </div>
        </div>
    </div>

    <div class="container">
        <div class="report-item">
            <p><strong>步骤四：根据步骤二输入的实验数据计算年现金流量</strong></p>
            <a-button type="primary" @click="calanddraw1();" class="calculate-result">计算折现后每年现金流量并绘制相应图表</a-button>
        </div>
    </div>


    <div v-show="ifshow_npv">
        <div class="chart1-container">
            <div id="chart1" style="width: 600px;height:400px;"></div>
        </div>
    </div>

    <div class="container">
        <div class="report-item">
            <p><strong>步骤五：计算NPV和IRR指标</strong></p>
            <a-button type="primary" @click="calculateNPV()" class="calculate-result">计算NPV和IRR</a-button>
            <div class="result-item">
                <span class="result-label">当折现率为</span>
                <label>{{ discount_rate1 }}</label>
                <span class="result-label">%时的净现值（NPV）:</span>
                <span class="result-value"> {{ npv.toFixed(2) }} </span>
                <span class="result-label"> &nbsp万元</span>
            </div>
            <div class="result-item">
                <span class="result-label">内部收益率（IRR）：</span>
                <span class="result-value">{{ irr.toFixed(2) }}%</span>
            </div>
        </div>
    </div>

    <div class="container">
        <div class="report-item">
            <p><strong>步骤六：画出 NPV-折现率 图</strong></p>
            <a-button type="primary" @click="draw2()" class="calculate-result">
                画出 NPV-折现率 图
            </a-button>
        </div>
    </div>


    <div v-show="ifshow_irr">

        <div class="chart2-container">
            <div id="chart2" style="width: 600px;height:400px;"></div>
        </div>
    </div>
    <!-- <div ref="chart" style="width: 100%; height: 400px;"></div> -->
</template>



<script lang="ts">
import { cloneDeep } from 'lodash-es';
import { reactive, ref } from 'vue';
import type { UnwrapRef } from 'vue';
import * as echarts from 'echarts';
import { onMounted } from 'vue';
import type { TableColumnType } from 'ant-design-vue';
import { VueLatex } from 'vatex';

interface DataItem {
    key: string;
    period: string;
    cashflow: number;
    cashflow_discounted: number;
    attentioninfo: string;
}

export default {
    name: 'JINXIANZHI',
    components: {
        VueLatex
    },
    setup() {
        //期数  
        const periodvalue = ref<number>(5);
        const discount_rate1 = ref<number>(10);
        const final_rate = ref<number>(10);
        const npv = ref<number>(0);
        let tmpnpv = 0;
        let npv_init = 0;
        var npv_show: number[] = [0, 0];
        const irr = ref<number>(0);
        const ifshow_npv = ref<boolean>(false);
        const ifshow_irr = ref<boolean>(false);

        const columns: TableColumnType[] = [
            {
                title: 'Time Point 时间点',
                dataIndex: 'period',
                width: '15%',
            },
            {
                title: 'Net Cashflow 净现金流/万元',
                dataIndex: 'cashflow',
                width: '15%',
            },
            {
                title: 'Operation 操作',
                dataIndex: 'operation',
                width: '15%',
            },
            {
                title: 'Cashflow_discounted 折现后现金流/万元',
                dataIndex: 'cashflow_discounted',
                width: '15%',
            },
            {
                title: '输入注意事项',
                dataIndex: 'attentioninfo',
                customCell: (_, index) => {
                    if (index === 0) {
                        return { rowSpan: 5 };
                    }
                    if (index > 0) {
                        return { rowSpan: 0 };
                    }
                },
            }
        ];
        const data: DataItem[] = [];
        for (let i = 0; i <= periodvalue.value; i++) {
            //console.log("111" + periodvalue.value);
            data.push({
                key: i.toString(),
                period: `${i}`,
                cashflow: 0,
                cashflow_discounted: 0,
                attentioninfo: '为符合标准现金流要求，请注意时间点0时的净现金流输入需要为负，其余时间点净现金流输入需要为非负数',
            });
        }

        //下方table
        const dataSource = ref(data);
        const editableData: UnwrapRef<Record<string, DataItem>> = reactive({});

        const edit = (key: string) => {
            editableData[key] = cloneDeep(dataSource.value.filter(item => key === item.key)[0]);
        };
        const validateCashFlow = (value: any): boolean => {
            return !isNaN(parseFloat(value)) && isFinite(value);
        };
        const validateNumber = (time: any, value: any): boolean => {
            if ((time == 0 && value < 0) || (time > 0 && value >= 0)) {
                return true;
            }
            else {
                return false;
            }
        }
        const save = (key: string) => {
            if (!validateCashFlow(editableData[key].cashflow)) {
                alert('请输入有效的现金流数据！');
                return;
            }
            if (!validateNumber(editableData[key].period, editableData[key].cashflow)) {
                if (editableData[key].cashflow < 0) {
                    alert('请输入非负数');
                }
                else {
                    alert('请输入负数');
                }
                return;
            }
            Object.assign(dataSource.value.filter(item => key === item.key)[0], editableData[key]);
            delete editableData[key];
        };
        const cancel = (key: string) => {
            delete editableData[key];
        };
        const refreshcomp = () => {
            const newData: DataItem[] = [];
            for (let i = 0; i <= periodvalue.value; i++) {
                newData.push({
                    key: i.toString(),
                    period: `${i}`,
                    cashflow: 0,
                    cashflow_discounted: 0,
                    attentioninfo: '为符合标准现金流要求，请注意时间点0时的现金流输入需要为负，其余时间点现金流输入需要为非负数',
                });
            }
            irr.value = 0;
            dataSource.value = newData;
        };

        //下方图表
        onMounted(() => {
            var mychart = echarts.init(document.getElementById('chart1'));
            // 模拟数据
            var options = {
                title: {
                    text: '折现后年现金流量'
                },
            };
            mychart.setOption(options);

            //IRR表
            var mychart2 = echarts.init(document.getElementById('chart2'));
            // 模拟数据
            var options2 = {
                title: {
                    text: 'NPV-折现率'
                },
            };
            mychart2.setOption(options2);
        });

        const calanddraw1 = () => {
            // Calculate NPV
            ifshow_npv.value = true;
            let npvSum = 0;
            let discount_rate = discount_rate1.value;
            let graph1data = [];
            let graph1x = [];
            dataSource.value.forEach((item, index) => {
                const discountedCashFlow = item.cashflow / Math.pow(1 + discount_rate / 100, index);
                npv_init += item.cashflow / 1;
                item.cashflow_discounted = Math.round(discountedCashFlow * 100) / 100;
                console.log(discountedCashFlow);
                graph1data.push(discountedCashFlow.toFixed(2));
                graph1x.push(index);
                npvSum += discountedCashFlow;
            });
            tmpnpv = npvSum;
            //npv.value = npvSum;

            var mychart = echarts.getInstanceByDom(document.getElementById('chart1'));
            var options = {
                title: {
                    text: '折现后年现金流量',
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross'
                    }
                },
                xAxis: {
                    //data:[-2,-1,0,1,2],
                    data: graph1x,
                    name: '时间点',
                },
                yAxis: {
                    type: 'value',
                    name: '折现后年现金流量/万元',
                },
                series: [
                    {
                        data: graph1data,
                        type: 'line',
                        smooth: true
                    }
                ]
            };
            mychart.setOption(options);
        }

        const calculateNPV = () => {
            npv.value = tmpnpv;
            // Calculate IRR using bisection method
            const cashflows = dataSource.value.map(item => item.cashflow);
            const maxIter = 1000;
            const tol = 0.0001;
            let lower = -0.9999; // Lower bound, can't be -1 because it will cause a division by zero
            let upper = 5;
            let mid = 0;
            let npvMid = 0;
            let iter = 0;

            while (iter < maxIter) {
                mid = (lower + upper) / 2;
                npvMid = cashflows.reduce((acc, cf, i) => acc + cf / Math.pow(1 + mid, i), 0);

                if (Math.abs(npvMid) < tol) {
                    break;
                } else if (npvMid > 0) {
                    lower = mid;
                } else {
                    upper = mid;
                }
                iter++;
            }

            if (isFinite(mid)) {
                irr.value = mid * 100;
            } else {
                irr.value = NaN;
                alert('IRR 计算出现问题，请尝试使用其他投资评估指标，如 MIRR 或 NPV。');
            }
        }

        const draw2 = () => {
            ifshow_irr.value = true;
            let npvSum = 0;
            let discount_rate = final_rate.value;
            dataSource.value.forEach((item, index) => {
                const discountedCashFlow = item.cashflow / Math.pow(1 + discount_rate / 100, index);
                npv_init += item.cashflow / 1;
                item.cashflow_discounted = discountedCashFlow;
                console.log(discountedCashFlow);
                npvSum += discountedCashFlow;
            });

            //draw graph
            var mychart2 = echarts.getInstanceByDom(document.getElementById('chart2'));
            var data = [[0, npv_init], { value: [(irr.value / 100).toFixed(4), 0], itemStyle: { color: 'red' } }, [discount_rate1.value / 100, npv.value.toFixed(4)]];

            if (irr.value > discount_rate1.value) {
                var tmp = data[1];
                data[1] = data[2];
                data[2] = tmp;
            }

            var options2 = {
                title: {
                    text: 'NPV-折现率',
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross'
                    }
                },
                xAxis: {
                    name: "折现率",
                    boundaryGap: true,
                },
                yAxis: {
                    type: 'value',
                    name: '净现值',
                },
                series: [
                    {
                        data: data,
                        type: 'line',
                        smooth: true
                    }
                ]
            };
            mychart2.setOption(options2);

        }

        return {
            discount_rate1,
            final_rate,
            periodvalue,
            dataSource,
            columns,
            editingKey: '',
            editableData,
            edit,
            save,
            cancel,
            refreshcomp,
            calanddraw1,
            draw2,
            calculateNPV,
            npv,
            irr,
            npv_show,
            ifshow_irr,
            ifshow_npv,
        };
    },
}
</script>

<style scoped>
.container {
    max-width: 100%;
    margin: 0 auto;
    font-family: 'Arial', sans-serif;
}

h2 {
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 40px;
}

.report-section {
    margin-bottom: 40px;
}

.report-item {
    text-align: left;
    text-indent: 2em;
}

.report-item h3 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
}

.report-item p {
    font-size: 18px;
    margin-bottom: 20px;
}

.report-item span {
    font-size: 20px;
}

.report-item label {
    font-size: 20px;
}

.input-section {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

.input-group {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
}

.input-group label {
    font-size: 16px;
    font-weight: bold;
    margin-right: 10px;
}

.confirm-button {
    margin-left: 20px;
}

.calculate-result {
    text-align: center;
    margin: 20px 25px;
}

.table-container {
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
}

.chart1-container {
    display: flex;
    justify-content: center;
}

.chart2-container {
    display: flex;
    justify-content: center;
}

.result-section {
    display: flex;
    justify-content: center;
}

.result-card {
    background-color: #f0f2f5;
    padding: 20px;
    border-radius: 4px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
    width: 50%;
    text-align: center;
}

.result-card p {
    font-size: 18px;
    font-weight: bold;
}

.editable-row-operations {
    display: flex;
    justify-content: space-between;
    width: 150px;
}

.operation-btn {
    margin-right: 10px;
}

.a-table {
    width: 100%;
    background-color: #fff;
    border-collapse: collapse;
}

.a-table thead th {
    background-color: #f0f2f5;
    padding: 10px;
    text-align: left;
    font-weight: bold;
}

.a-table tbody tr:nth-child(even) {
    background-color: #f0f2f5;
}

.a-table tbody tr:hover {
    background-color: #e6f7ff;
}

.a-table tbody td {
    padding: 10px;
}

.result-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 18px;
    margin-top: 30px;
}

.result-item {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}

.result-label {
    font-weight: bold;
    margin-right: 5px;
}

.result-value {
    color: #1890ff;
}
</style>