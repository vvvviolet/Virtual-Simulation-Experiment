<template>
    <h1 class="title">实验6 蒙特卡洛模拟实验

        <a-button class="button1" type="primary" shape="round" :size="size">
            <template #icon>
                <DownloadOutlined />
            </template>实验指导书下载
        </a-button>
        <a-button class="button2" type="primary" shape="round" :size="size">
            <template #icon>
                <DownloadOutlined />
            </template>实验报告模板下载
        </a-button>

        <!-- <span>  <a-button  class="guidance" type="primary" text  @click="pdfHandle" ><el-icon size="5px"><Document /></el-icon>实验指导书下载</a-button></span>  -->
        <!-- <span>  <a-button  class="guidance" type="primary" text  @click="pdfHandle2" ><el-icon size="5px"><Document /></el-icon>实验报告模板下载</a-button></span>  -->
    </h1>
    <!-- <span> {{ test }}</span> -->
    <h2>一、实验目的 </h2>
    <p class="content"> 蒙特卡洛模拟是一种基于随机事件模拟的计算方法，可以预测
        复杂系统的行为和结果。本实验使用蒙特卡洛模拟方法对项目进行定量风险分析，通过模拟大量实验
        并统计实验结果，最终得出概率与累积概率分布图，帮助合理规划项目进度。
    </p>

    <h2>二、实验步骤 </h2>
    <!-- <p class="content" > -->
    <p class="secondtitle">第一步：确定平均工期、标准差和估计工期</p>
    <p class="content">假设该软件项目共有三个WBS要素，分别是设计、建造和测试。假设这三个WBS要素的
        预估的工期概率分布都呈标准正态分布，请填写各自的平均工期、标准差以及最悲观、最可能和最乐观的
        估计工期。
        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;实验操作：将项目平均工期、标准差以及最悲观、最可能和最乐观的估计工期填入表中。
    </p>

    <p class="secondtitle">第二步：绘制工期的正态分布图</p>
    <p class="content">以三个WBS要素的工期的分布为输入，模拟得到整个项目的工期概率分布图。
        由于设计、建造和测试这三个要素都是呈标准正态分布，可以根据上面表格中的各自的均值
        和标准差数据大致画出三要素工期的正态分布图。<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;实验操作：绘制三阶段工期的概率分布图。</p>

    <p class="secondtitle">第三步：随机生成工期值 </p>
    <p class="content">蒙特卡洛模拟定量分析整个项目的工期进度风险，可以用计算机来模拟项目的实施。
        需要为每个WBS要素随机生成400次工期值，此工期值满足该工期规定均值、标准差的正态分布。模拟结束后，
        得到总计400*3=1200个呈正态分布的随机工期值，并计算出三个要素相加的总工期。
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;实验操作：随机生成每个要素的工期值并计算总工期。
    </p>


    <p class="secondtitle">第四步：统计总工期的概率和累积概率分布</p>
    <p class="content">计算得出总工期的最小值与最大值作为范围，统计该范围内每个总工期值的概率和累积概率。<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;实验操作：统计总工期值的概率和累积概率</p>


    <p class="secondtitle">第五步：绘制总工期的概率和累积概率分布图</p>
    <p class="content">结合上面表格的数据，以分组数据为X轴，出现概率和累积概率的值为Y轴，
        绘制总工期的概率和累积概率分布图。红色柱状图是整个项目估计刚好多少天完工的概率数据，
        蓝线是整个项目在多少天内完工的概率，也就是蒙特卡洛模拟的结果。<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;实验操作：绘制总工期的概率和累积概率分布图。 </p>


    <p class="secondtitle">第六步：合理规划项目进度</p>
    <p class="content">通过累积概率分布图，可以得出项目进度规划为x天时，项目按时完工的概率。
        (1)假设最低允许30%不能按时完工的风险，得出项目应规划为多少日内完成。
        (2)假设最低允许15%不能按时完工的风险，得出项目应规划为多少日内完成。<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;实验操作：计算项目进度规划。 </p>


    <h2>三、实验过程 </h2>
    <EditableForm2 :dataSource="dataSource1" :columns="columns1">工期估计表</EditableForm2>

    <h1>
        概率分布图
    </h1>
    <div id="container"></div>






    <a-button class="button3" type="primary" shape="round" :size="size">
        <template #icon>
            <DownloadOutlined />
        </template>实验报告提交
    </a-button>
</template>



<script>
import { Document } from '@element-plus/icons-vue'
import { defineComponent } from 'vue'
import EditableForm2 from '@/pages/exp6/Exp6_Monte_Carlo/EditableForm2.vue';
import * as G2 from '@antv/g2';
import { Chart } from '@antv/g2';
export default {
    components: {
        EditableForm2,
    },
    data() {
        return {
            test: '21111',
            sum: '',
            dataSource1: [
                {
                    key: '0',
                    stage: '设计',
                    optimistic: 8,
                    probably: 14,
                    pessimistic: 20,
                    average: 14,
                    standard: 2,
                    distribution: '正态分布',
                },
                {
                    key: '1',
                    stage: '开发',
                    optimistic: 14,
                    probably: 23,
                    pessimistic: 32,
                    average: 23,
                    standard: 3,
                    distribution: '正态分布',
                },
                {
                    key: '2',
                    stage: '测试',
                    optimistic: 10,
                    probably: 22,
                    pessimistic: 34,
                    average: 22,
                    standard: 4,
                    distribution: '正态分布',
                },

            ],
            columns1: [
                {
                    title: '',
                    dataIndex: 'stage',
                    slots: {
                        customRender: 'stage',
                    },
                },
                {
                    title: '最乐观',
                    dataIndex: 'optimistic',
                    slots: {
                        customRender: 'optimistic',
                    },
                },
                {
                    title: '最可能',
                    dataIndex: 'probably',
                    slots: {
                        customRender: 'probably',
                    },
                },
                {
                    title: '最悲观',
                    dataIndex: 'pessimistic',
                    slots: {
                        customRender: 'pessimistic',
                    },
                },
                {
                    title: '平均工期',
                    dataIndex: 'average',
                    slots: {
                        customRender: 'average',
                    },
                },
                {
                    title: '标准差',
                    dataIndex: 'standard',
                    slots: {
                        customRender: 'standard',
                    },
                },
                {
                    title: '分布',
                    dataIndex: 'distribution',
                    slots: {
                        customRender: 'distribution',
                    },
                },
            ],

        }
    },
    mounted() {
        const data = [
            { day: 45, call: 4, probability: 1, sum: 1 },
            { day: 46, call: 4, probability: 1, sum: 2 },
            { day: 47, call: 4, probability: 2, sum: 3 },
            { day: 48, call: 4, probability: 3, sum: 4 },
            { day: 49, call: 4, probability: 4, sum: 7 },
            { day: 50, call: 4, probability: 6, sum: 15 },
            { day: 51, call: 4, probability: 7, sum: 23 },
            { day: 52, call: 4, probability: 8, sum: 30 },
            { day: 53, call: 4, probability: 9, sum: 40 },
            { day: 54, call: 4, probability: 11, sum: 50 },
            { day: 55, call: 4, probability: 15, sum: 60 },
            { day: 56, call: 4, probability: 12, sum: 70 },
            { day: 57, call: 4, probability: 11, sum: 79 },
            { day: 58, call: 4, probability: 10, sum: 86 },
            { day: 59, call: 4, probability: 9, sum: 90 },
            { day: 60, call: 4, probability: 7, sum: 94 },
            { day: 61, call: 4, probability: 5, sum: 96 },
            { day: 62, call: 4, probability: 3, sum: 98 },
            { day: 63, call: 4, probability: 2, sum: 99 },
            { day: 64, call: 4, probability: 1, sum: 100 },
        ];
        
        const chart = new Chart({
            container: 'container',
            autoFit: true,
            weight:300,
            height: 500,
        });
        
        chart.data(data);
        chart.scale({
            sum: {
                min: 0,
                max: 100,
            },
            probability: {
                min: 0,
                max: 15
            }
        });
        chart.legend({
            custom: true,
            items: [
                { value: 'probability', name: 'probability', marker: { symbol: 'square', style: { fill: '#3182bd', r: 5 } } },
                { value: 'sum', name: 'sum', marker: { symbol: 'hyphen', style: { stroke: '#fdae6b', r: 5, lineWidth: 3 } } }
            ],
        });
        chart.axis('sum', {
            grid: null,
            title: {
                style: {
                    fill: '#fdae6b'
                }
            },
            label: {
                style: {
                    fill: '#fdae6b'
                }
            }
        });
        chart.axis('probability', {
            title: {}
        });
        chart.tooltip({
            shared: true,
        });
        chart.interval()
            .position('day*probability')
            .color('#3182bd');
        chart.line()
            .position('day*sum')
            .color('#fdae6b')
            .size(3)
            .shape('smooth');
        chart.point()
            .position('day*sum')
            .color('#fdae6b')
            .size(3)
            .shape('circle');

        chart.interaction('active-region');
        chart.removeInteraction('legend-filter'); // 自定义图例，移除默认的分类图例筛选交互
        
        chart.render();
        const e = document.createEvent('Event')
        e.initEvent('resize', true, true)
        window.dispatchEvent(e)
        
    },
    methods: {
        created() {
            this.gettableData()
        },

        updated() {
            // 用于防止表格合计行不显示
            this.$nextTick(() => {
                this.$refs['detailTable'].doLayout();
            })
        },
        pdfHandle() {
            window.open('/#/show', "_blank")
        },
        pdfHandle2() {
            window.open('/#/show', "_blank")
        },
        getSummaries(param, val) {
            const { columns, data } = param;
            const sums = [];
            columns.forEach((column, index) => {
                if (index === 0) {
                    sums[index] = (() => {
                        // let el=<p>未调整功能点</p>
                    })();
                    return;
                }
                if (index === 11) {
                    sums[index] = (() => {
                        // let num=<p >￥{this.tableData[val].nonum.toFixed(2)}</p>
                        return num;
                    })();
                    return;
                }
            });
            return sums;
        },
        count() {
        }
    }
}
</script>

<style scoped>
.title {
    text-align: center;
    font-family: sans-serif;
    font-size: 30px;
}

.secondtitle {
    text-indent: 2em;
    font-weight: bold;
    margin-left: 30px;
    margin-right: 30px;
}

.maintable {
    text-align: center;
    font-family: sans-serif;
    font-size: 30px;
}

.button1 {
    margin-left: 25px;
}

.button2 {
    margin-left: 15px;
}

.button3 {

    float: right;
    margin-top: 10px;
    margin-right: 50px;

}

.button4 {

    margin-left: 250px;

}

.content {
    text-indent: 2em;
    margin-left: 20px;
    margin-right: 20px;
}

.guidance {
    position: absolute;
    right: 50px;
    font-weight: bold;
}
</style> 
