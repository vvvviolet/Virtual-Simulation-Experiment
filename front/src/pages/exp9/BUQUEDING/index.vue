<template>
  <a-typography>
    <a-typography-title :level="3">方法介绍</a-typography-title>
    <a-typography-paragraph>
      不确定性决策方法，适用于决策者在不知晓每种可能结果发生概率的情况下做出决策。也就是说，这些方法适合用来进行不确定性条件下的投资决策，而非
      风险条件下的投资决策。
    </a-typography-paragraph>
    <a-typography-title :level="3">实验目的</a-typography-title>
    <a-typography-paragraph>
      通过进行不确定性实验，学生可以分析实验结果并检验其假设。从而能够深入了解不确定性分析的基本概念和技术，并且将能够将它们应用到实际的项目设计和运行中。
    </a-typography-paragraph>

    <a-typography-paragraph> 常用的不确定决策方法有五种： </a-typography-paragraph>
  </a-typography>

  <a-menu v-model:selectedKeys="current" mode="horizontal">
    <a-menu-item key="f1">最大最小法</a-menu-item>
    <a-menu-item key="f2"> 最大最大法 </a-menu-item>
    <a-menu-item key="f3"> 赫維斯基法 </a-menu-item>
    <a-menu-item key="f4"> 拉普拉斯法 </a-menu-item>
    <a-menu-item key="f5"> 最小最大后悔值法 </a-menu-item>
  </a-menu>
  <div v-if="current[0] === 'f1'">
    <a-typography>
      <a-typography-title :level="4">最大最小法(Wald法) 实验原理：</a-typography-title>
      <a-typography-paragraph>
        最大最小法是决策者从最不利结果着眼，将在最不利结果中取得的最有利结果之行动作为最优行动方案
      </a-typography-paragraph>
    </a-typography>
    <div>
      <a-input-number v-model="rowCount" :min="1" @change="handleRowCountChange" />
      <a-input-number v-model="columnCount" :min="1" @change="handleColumnCountChange" />
      <a-button type="primary" @click="generateTable(1)">生成表格</a-button>
      <a-button type="primary" @click="clear">清除</a-button>

      <a-table
        v-if="tableGenerated == 1"
        :pagination="false"
        :columns="columns"
        :data-source="tabledata"
        bordered
        size="middle"
        style="word-break: break-all"
      >
        <template #bodyCell="{ column, record }">
          <template v-for="columnIndex in columnIndexes">
            <template v-if="columnIndex === column.dataIndex">
              <a-input v-model:value="record[columnIndex]" allowClear />
            </template>
          </template>
        </template>
      </a-table>
    </div>
    <p>最不利结果中的最好结果出现的方案: {{ getMinMethod() }}</p>
  </div>
  <div v-if="current[0] === 'f2'">
    <a-typography>
      <a-typography-title :level="4">最大最大法 实验原理：</a-typography-title>
      <a-typography-paragraph>
        最大最大法是决策者抱着最乐观的想法，从各方案中最有利的结果中选取最大值，该数值所对应的行动作为最优行动方案
      </a-typography-paragraph>
    </a-typography>
    <div>
      <a-input-number v-model="rowCount" :min="1" @change="handleRowCountChange" />
      <a-input-number v-model="columnCount" :min="1" @change="handleColumnCountChange" />
      <a-button type="primary" @click="generateTable(2)">生成表格</a-button>
      <a-button type="primary" @click="clear">清除</a-button>

      <a-table
        v-if="tableGenerated == 2"
        :pagination="false"
        :columns="columns"
        :data-source="tabledata"
        bordered
        size="middle"
        style="word-break: break-all"
      >
        <template #bodyCell="{ column, record }">
          <template v-for="columnIndex in columnIndexes">
            <template v-if="columnIndex === column.dataIndex">
              <a-input v-model:value="record[columnIndex]" allowClear />
            </template>
          </template>
        </template>
      </a-table>
    </div>
    <p>最有利结果中的最好结果出现的方案: {{ getMaxMethod() }}</p>
  </div>
  <div v-if="current[0] === 'f3'">
    <a-typography>
      <a-typography-title :level="4">赫维斯基法 实验原理：</a-typography-title>
      <a-typography-paragraph>
        赫维斯基法是对最大最小法和最大最大法两个方法进行折中的方法。决策者同时抱有乐观和悲观的态度，对每个方案的最好结果和最差结果进行加权平均计算，然后选取加权平均收益最大的方案作为最
        优行动方案。采用该方法时，需要选取一个乐观系数入，该系数取值在0和1之间。如，风险厌恶型决策者会给与最好结果
        0.3的权重，而给予最差结果 0.7的权重。
      </a-typography-paragraph>
    </a-typography>
    <div>
      <div style="display: flex; flex-direction: row">
        <p>请输入乐观系数lambada的值（0~1间的小数）</p>
        <a-input-number v-model="lambada" :min="0" :max="1" @change="handleLambadaChange" />
      </div>
      <br />
      <a-input-number v-model="rowCount" :min="1" @change="handleRowCountChange" />
      <a-input-number v-model="columnCount" :min="1" @change="handleColumnCountChange" />
      <a-button type="primary" @click="generateTable(3)">生成表格</a-button>
      <a-button type="primary" @click="clear">清除</a-button>

      <a-table
        v-if="tableGenerated == 3"
        :pagination="false"
        :columns="columns"
        :data-source="tabledata"
        bordered
        size="middle"
        style="word-break: break-all"
      >
        <template #bodyCell="{ column, record }">
          <template v-for="columnIndex in columnIndexes">
            <template v-if="columnIndex === column.dataIndex">
              <a-input v-model:value="record[columnIndex]" allowClear />
            </template>
          </template>
        </template>
      </a-table>
    </div>
    <p>{{ hurwicz(lambada) }}</p>
  </div>
  <div v-if="current[0] === 'f4'">
    <a-typography>
      <a-typography-title :level="4">拉普拉斯法(Laplace法) 实验原理：</a-typography-title>
      <a-typography-paragraph>
        该方法的出发点是，既然不能肯定哪一种状态比另一种状态更可能出现，只好认为所有状态出现的概率是相等的。每个状态的权重值1/n。
      </a-typography-paragraph>
    </a-typography>
    <div>
      <a-input-number v-model="rowCount" :min="1" @change="handleRowCountChange" />
      <a-input-number v-model="columnCount" :min="1" @change="handleColumnCountChange" />
      <a-button type="primary" @click="generateTable(2)">生成表格</a-button>
      <a-button type="primary" @click="clear">清除</a-button>

      <a-table
        v-if="tableGenerated == 2"
        :pagination="false"
        :columns="columns"
        :data-source="tabledata"
        bordered
        size="middle"
        style="word-break: break-all"
      >
        <template #bodyCell="{ column, record }">
          <template v-for="columnIndex in columnIndexes">
            <template v-if="columnIndex === column.dataIndex">
              <a-input v-model:value="record[columnIndex]" allowClear />
            </template>
          </template>
        </template>
      </a-table>
    </div>
    <p>{{ laplace() }}</p>
  </div>
  <div v-if="current[0] === 'f5'">
    <a-typography>
      <a-typography-title :level="4">最小最大后悔值法 实验原理：</a-typography-title>
      <a-typography-paragraph>
        该方法考虑了决策者在做完决定，知道实际结果时的态度，考虑到没有选取最优方案作为行动方案时的机会成本。
        该方法计算过程是:先计算各方案在各种状态下的后悔值，选出各0-方案的最大后悔值，然后从各方案最大后悔值中选取最小值，该数值对应的方案就是决策者没有选择最优方案时后悔值最小的方案。
      </a-typography-paragraph>
    </a-typography>
    <div>
      <a-input-number v-model="rowCount" :min="1" @change="handleRowCountChange" />
      <a-input-number v-model="columnCount" :min="1" @change="handleColumnCountChange" />
      <a-button type="primary" @click="generateTable(2)">生成表格</a-button>
      <a-button type="primary" @click="clear">清除</a-button>

      <a-table
        v-if="tableGenerated == 2"
        :pagination="false"
        :columns="columns"
        :data-source="tabledata"
        bordered
        size="middle"
        style="word-break: break-all"
      >
        <template #bodyCell="{ column, record }">
          <template v-for="columnIndex in columnIndexes">
            <template v-if="columnIndex === column.dataIndex">
              <a-input v-model:value="record[columnIndex]" allowClear />
            </template>
          </template>
        </template>
      </a-table>
    </div>
    <p>{{ houhuizhi() }}</p>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  export default {
    data() {
      return {
        current: ref<string[]>(['mail']),
        rowCount: 1,
        columnCount: 1,
        tableGenerated: 0,
        columns: [],
        columnIndexes: [],
        tabledata: [],
        lambada: 0,
      };
    },
    methods: {
      created() {
        this.gettableData();
      },
      generateTable(num) {
        this.columns = [];
        this.columnIndexes = [];
        this.tabledata = [];
        this.columns = [
          {
            title: '方案',
            dataIndex: 'method',
            key: 'method',
            align: 'center',
          },
        ];

        for (let j = 1; j <= this.columnCount; j++) {
          const columnIndex = `a${j.toString().padStart(2, '0')}`;
          this.columns.push({
            title: j.toString(),
            align: 'center',
            dataIndex: columnIndex,
          });
          this.columnIndexes.push(columnIndex);
        }

        this.tabledata = [];
        for (let i = 1; i <= this.rowCount; i++) {
          const rowData = {
            key: i.toString(),
            method: String.fromCharCode(64 + i),
          };

          for (let j = 1; j <= this.columnCount; j++) {
            const columnIndex = `a${j.toString().padStart(2, '0')}`;
            rowData[columnIndex] = '';
          }

          this.tabledata.push(rowData);
        }

        this.tableGenerated = num;
      },
      handleRowCountChange(value) {
        this.rowCount = value;
      },
      handleLambadaChange(value) {
        this.lambada = value;
      },
      handleColumnCountChange(value) {
        this.columnCount = value;
      },
      getMinMethod() {
        if (this.tabledata.length === 0) {
          return null;
        }

        let min = -Infinity;
        let minMethod = null;

        for (const item of this.tabledata) {
          const values = Object.values(item).slice(2) as number[]; // 获取 a01 到 a05 的属性值
          const minValue = Math.min(...values);

          if (minValue > min) {
            min = minValue;
            minMethod = item.method;
          }
        }

        return minMethod;
      },
      getMaxMethod() {
        if (this.tabledata.length === 0) {
          return null;
        }

        let max = -Infinity;
        let maxMethod = null;

        for (const item of this.tabledata) {
          const values = Object.values(item).slice(2) as number[]; // 获取 a01 到 a05 的属性值
          const maxValue = Math.max(...values);

          if (maxValue > max) {
            max = maxValue;
            maxMethod = item.method;
          }
        }

        return maxMethod;
      },
      hurwicz(lambada) {
        if (this.tabledata.length === 0) {
          return null;
        }

        let min = -Infinity;
        let maxMethod = null;

        for (const item of this.tabledata) {
          const values = Object.values(item).slice(2) as number[]; // 获取 a01 到 a05 的属性值
          const minValue = Math.min(...values);
          const maxValue = Math.max(...values);
          let afterWeighting = lambada * maxValue + (1 - lambada) * minValue;

          if (afterWeighting > min) {
            min = afterWeighting;
            maxMethod = item.method;
          }
        }
        let result = '经过加权计算后的最大期望值为：' + min + ';该最大期望值所属的方案为：' + maxMethod;

        //return maxMethod;
        return result;
      },
      laplace() {
        if (this.tabledata.length === 0) {
          return null;
        }

        let max = -Infinity;
        let maxMethod = null;

        for (const item of this.tabledata) {
          const values = Object.values(item).slice(2) as number[]; // 获取 a01 到 a05 的属性值
          const minValue = Math.min(...values);
          const maxValue = Math.max(...values);
          var sum = 0;
          for (var i = 0; i < values.length; i++) {
            //console.log(values[i]);
            sum += Number(values[i]);
          }
          let _average = sum / values.length;
          console.log(sum);
          console.log(values.length);

          if (_average > max) {
            max = _average;
            maxMethod = item.method;
          }
        }
        let result = '经过加权计算后的最大期望值为：' + max + ';该最大期望值所属的方案为：' + maxMethod;

        return result;
      },
      houhuizhi() {
        if (this.tabledata.length === 0) {
          return null;
        }
        const columnValues: { [key: string]: number[] } = {};

        // Loop through each row in the table data
        for (const item of this.tabledata) {
          // Loop through each property in the row
          for (const [key, value] of Object.entries(item)) {
            // Check if the property is a01 to a05
            if (key.startsWith('a') && parseInt(key.slice(1), 10) >= 1 && parseInt(key.slice(1), 10) <= 5) {
              // Add the value to the corresponding array in columnValues object
              if (!columnValues[key]) {
                columnValues[key] = [];
              }
              columnValues[key].push(value);
            }
          }
        }
        const columnMax: { [key: string]: number } = {};
        for (const key in columnValues) {
          if (columnValues.hasOwnProperty(key)) {
            const values = columnValues[key];
            columnMax[key] = Math.max(...values);
          }
        }
        const newTableData = this.tabledata.map((item) => {
          const newItem = { ...item };
          for (const [key, value] of Object.entries(item)) {
            if (key.startsWith('a') && parseInt(key.slice(1), 10) >= 1 && parseInt(key.slice(1), 10) <= 5) {
              const columnMaxValue = columnMax[key];
              newItem[key] = columnMaxValue - value;
            }
          }
          return newItem;
        });
        // console.log(newTableData)
        let max = Infinity;
        let minMethod = null;
        console.log(newTableData);
        for (const item of newTableData) {
          const values = Object.values(item).slice(2) as number[]; // 获取 a01 到 a05 的属性值
          const minValue = Math.max(...values);
          console.log(item);
          if (minValue < max) {
            max = minValue;
            minMethod = item.method;
          }
        }
        let result = '计算得出各方案中的最大后悔值为：' + max + ';拥有最小的最大后悔值的方案为：' + minMethod;
        return result;
      },
      clear() {
        this.rowCount = 0;
        this.columnCount = 0;
        this.tableGenerated = false;
        this.columns = [];
        this.columnIndexes = [];
        this.tabledata = [];
      },
    },
  };
</script>

<style scoped></style>
