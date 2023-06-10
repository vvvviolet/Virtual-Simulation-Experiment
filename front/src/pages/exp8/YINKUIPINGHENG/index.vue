<template>
	<div>
		<h2>一、实验目的</h2>
		<p class='content'>1. 学会使用公式计算在给定成本、销量、利润下的盈亏平衡点</p>
		<p class='content'>2. 学会将盈亏平衡法计算相应指标，运用于项目法人风险分析</p>
	</div>

	<div>
		<h2>二、实验原理 </h2>
		<a-collapse>
			<a-collapse-panel header='1. 盈亏平衡法' style='font-size: medium'>
				<p class='content'>
					盈亏平衡法是基于“成本-销量-利润”相互关系的一种分析方法。
					<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 该方法首先将项目成本分为
					<b>固定成本</b>和<b>变动成本</b>两部分，
					其中，固定成本是指在一定业务范围与时间范围内，随着业务总量变化成<b>等比例变化</b>的成本，
					如软件项目直接人力成本、直接非人力成本等。
				</p>
			</a-collapse-panel>

			<a-collapse-panel header='2. 计算关系式' style='font-size: medium;'>
				<a-collapse>
					<a-collapse-panel header='2.1 总成本' style='font-weight: bold;'>
						<p style='text-align:center; line-height: 200%; font-weight: normal;'>
							<b style='font-size:large'>总成本</b> = 变动成本 + 固定成本
							<br>
							= 单位变动成本 &times; 销量 + 固定成本
						</p>
					</a-collapse-panel>
					<a-collapse-panel header='2.2 利润' style='font-weight: bold;'>
						<p style='text-align:center; line-height: 200%; font-weight: normal;'>
							<b style='font-size:large'>利润</b> = 销售收入 - 总成本
							<br>
							= 单价 &times; 销量 - 单位变动成本 &times; 销量 + 固定成本
						</p>
					</a-collapse-panel>
					<a-collapse-panel header='2.3 盈亏平衡点' style='font-weight: bold;'>
						<p style='text-align:center; line-height: 200%; font-weight: normal;'>
							<b style='font-size:large'>令 利润 &equals; 0</b>
							<br>
							<b style='font-size:large'>盈亏平衡点销量</b>
							= 固定成本 &divide; ( 单价 - 单位变动成本 )
							<br>
							<b style='font-size:large'>盈亏平衡点销售额</b>
							= 固定成本 &divide; ( 1 - ( 单位变动成本 &divide; 单价 ) )
						</p>
					</a-collapse-panel>
				</a-collapse>
			</a-collapse-panel>

			<a-collapse-panel header='3. 风险分析' style='font-size: medium'>
				<p class='content'>盈亏平衡法定义了
					<b>盈亏平衡点作业率</b>、
					<b>安全边际</b>和
					<b>安全边际率</b>三个指标，可用于项目法人分析
				</p>
				<a-collapse>
					<a-collapse-panel header='盈亏平衡点作业率' style='font-weight: bold;'>
						<p style='text-align:center; line-height: 200%; font-weight: normal;'>
							<b style='font-size:large'>盈亏平衡点作业率</b>
							<br>
							= 盈亏平衡点销量 &divide; 正常销量 &times; 100 &percnt;
						</p>
					</a-collapse-panel>
					<a-collapse-panel header='安全边际' style='font-weight: bold;'>
						<p style='text-align:center; line-height: 200%; font-weight: normal;'>
							<b style='font-size:large'>安全边际</b>
							<br>
							= 正常销量 - 盈亏平衡点销量
						</p>
					</a-collapse-panel>
					<a-collapse-panel header='安全边际率' style='font-weight: bold;'>
						<a-row align='center'>
							<a-space direction='vertical' align='center'>
								<p style='text-align:center; line-height: 200%; font-weight: normal;'>
									<b style='font-size:large'>安全边际率</b>
									<br>
									= 安全边际 &divide; 正常销量 &times; 100 &percnt;
									<br>
								</p>
								<a-table :dataSource='tabledata' :columns='tablecolumn' :pagination='false' bordered size='medium'>
									<template #title>安全边际率经验值</template>
									<template #headerCell='{ column }'>
										<b style='font-size: medium;'>{{ column.title }}</b>
									</template>
									<template #bodyCell='{ text }'>
										<p style='text-align: center; font-weight: normal;'>{{ text }}</p>
									</template>
								</a-table>
							</a-space>
						</a-row>
					</a-collapse-panel>
				</a-collapse>
			</a-collapse-panel>
		</a-collapse>
	</div>

	<br>

	<div>
		<h2>三、实验参数</h2>

		<a-row type="flex" align="center" justify="center">
			<a-col :span="15">
				<a-table :columns='columns' :data-source='dataSource' bordered :pagination='false'>
					<template #title>实验数据</template>
					<template #headerCell='{ column }'>
						<b style='font-size: medium;'>{{ column.title }}</b>
					</template>
					<template #bodyCell='{ column, text, record }'>
						<template v-if="column.dataIndex === 'val'">
							<template v-if='record.key !== 4'>
								<a-input v-if='editableData[record.key]' prefix='￥'
									v-model:value='editableData[record.key][column.dataIndex]' style='margin: -5px 0' />
								<template v-else>
									<a>￥{{ text }}</a>
								</template>
							</template>
							<template v-else>
								<a-input v-if='editableData[record.key]' v-model:value='editableData[record.key][column.dataIndex]'
									style='margin: -5px 0' />
								<template v-else>
									<a>{{ text }}</a>
								</template>
							</template>
						</template>
						<template v-else-if="column.dataIndex === 'operation'">
							<div class='editable-row-operations'>
								<span v-if='editableData[record.key]'>
									<a-typography-link @click='save(record.key)'>Save </a-typography-link>
									<a-popconfirm title='Sure to cancel?' @confirm='cancel(record.key)'>
										<a>Cancel</a>
									</a-popconfirm>
								</span>
								<span v-else>
									<a @click='edit(record.key)'>Edit</a>
								</span>
							</div>
						</template>
					</template>
				</a-table>
			</a-col>
			<a-col :span="9">
				<div id='result'>
					<a-row align="center" style="margin-top: 40px; margin-bottom: 25px;">
						<a-statistic title='盈亏平衡点销量' :precision='0'
							:value='dataSource[0].val / (dataSource[2].val - dataSource[1].val)' style='text-align: center;' />
					</a-row>
					<a-row align="center" style="margin-bottom: 25px;">
						<a-statistic title='盈亏平衡点销售额' :precision='2' :value='dataSource[0].val / (dataSource[2].val -
							dataSource[1].val) * dataSource[2].val' style='text-align: center;' />
					</a-row>
					<a-row align="center" style="margin-bottom: 30px;">
						<a-statistic title='安全边际率' :precision='2' suffix="%" :value='(dataSource[3].val - dataSource[0].val / (dataSource[2].val -
							dataSource[1].val)) / dataSource[3].val * 100' style='text-align: center;' />
					</a-row>
					<a-row align="center">
						<a-button type='primary' shape='round' @click='draw'>可视化结果</a-button>
					</a-row>
				</div>
			</a-col>
		</a-row>

		<a-row align="center" style="margin-top: 50px;">
			<div id='chart' style='width: 800px; height: 600px' />
		</a-row>
	</div>
</template>

<script lang='ts'>
import { cloneDeep } from 'lodash-es';
import * as echarts from 'echarts';
import { defineComponent, reactive, ref } from 'vue';
import type { UnwrapRef } from 'vue';

const tabledata = [
	{
		key: '1',
		val1: '很安全',
		val2: '安全',
		val3: '较安全',
		val4: '需要关注',
		val5: '危险',
	},
];

const tablecolumn = [
	{
		title: '> 40%',
		dataIndex: 'val1',
		key: 'val1',
	},
	{
		title: '30% ~ 40%',
		dataIndex: 'val2',
		key: 'val2',
	},
	{
		title: '20% ~ 30%',
		dataIndex: 'val3',
		key: 'val3',
	},
	{
		title: '10% ~ 20%',
		dataIndex: 'val4',
		key: 'val4',
	},
	{
		title: '< 10%',
		dataIndex: 'val5',
		key: 'val5',
	},
];

const columns = [
	{
		title: '数据项',
		dataIndex: 'name',
		width: '40%',
	},
	{
		title: '值',
		className: 'column-money',
		dataIndex: 'val',
		width: '40%',
	},
	{
		title: '操作',
		dataIndex: 'operation',
	},
];

interface DataItem {
	key: number;
	name: string;
	val: number;
}

let data: DataItem[] = [];
data = [
	{
		key: 1,
		name: '固定成本',
		val: 50000.00,
	},
	{
		key: 2,
		name: '单位变动成本',
		val: 60.00,
	},
	{
		key: 3,
		name: '单价',
		val: 100.00,
	},
	{
		key: 4,
		name: '月度正常销售额',
		val: 5000,
	},
];

let X = 1250;
let Y = 125000;

export default defineComponent({
	name: 'Exp8_yinkuipingheng',

	setup() {
		// datasource
		const dataSource = ref(data);
		const editableData: UnwrapRef<Record<string, DataItem>> = reactive({});

		const edit = (key: number) => {
			editableData[key] = cloneDeep(dataSource.value.filter(item => key === item.key)[0]);
		};
		const save = (key: number) => {
			Object.assign(dataSource.value.filter(item => key === item.key)[0], editableData[key]);
			dataSource.value.filter(item => key === item.key)[0].val = Number(editableData[key].val);
			delete editableData[key];
		};
		const cancel = (key: number) => {
			delete editableData[key];
		};

		return {
			dataSource,
			editingKey: '',
			editableData,
			edit,
			save,
			cancel,
			columns,

			tabledata,
			tablecolumn,
		};
	},

	methods: {
		draw() {
			const chart = echarts.init(document.getElementById('chart'));

			let cost = [];
			let income = [];

			for (let i = 0; (data[1].val * i + data[0].val) * 1.20 >= data[2].val * i; ++i) {
				cost.push([i, data[1].val * i + data[0].val]);
				income.push([i, data[2].val * i]);
			}

			X = data[0].val / (data[2].val - data[1].val);
			Y = X * data[2].val;
			console.log(data);

			const option = {
				title: {
					text: '盈亏平衡法',
				},
				animation: false,
				tooltip: {
					trigger: 'axis',
					axisPointer: {
						type: 'cross',
					},
				},
				legend: {
					data: ['销售收入', '变动成本'],
				},
				xAxis: {
					name: '销量',
					type: 'value',
				},
				yAxis: {
					name: '金额',
					type: 'value',
				},
				series: [
					{
						name: '盈亏平衡点',
						type: 'line',
						markLine: {
							data: [{
								yAxis: Y,
							}],
						},
						markPoint: {
							label: {
								show: true,
								position: 'top',
							},
							symbolSize: 20,
							data: [{
								value: X,
								coord: [X, Y],
							}],
						},
					},
					{
						name: '销售收入',
						showSymbol: false,
						data: income,
						type: 'line',
					},
					{
						name: '变动成本',
						showSymbol: false,
						data: cost,
						type: 'line',
					},
				],
			};

			chart.setOption(option);
		},
	},
});
</script>

<style scoped>
.secondtitle {
	text-indent: 1em;
	font-weight: bold;
	font-size: medium;
	margin-top: 20px;
	margin-bottom: 15px;
}

.content {
	text-indent: 2em;
	margin-left: 20px;
	margin-right: 20px;
	line-height: 200%;
	font-size: medium;
}
</style>