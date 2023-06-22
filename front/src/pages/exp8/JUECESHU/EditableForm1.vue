<template>
  <div>
    <div style="text-align: center;">
      <h4>
        <slot></slot>
      </h4>
    </div>
    <a-table :columns="columns" :pagination="false" :data-source="dataSourceCopy" bordered>
      <template
        v-for="(col, index) in columns.map((item) => item.dataIndex).filter((item) => item != 'operation')"
        :key="index"
        #[col]="{ text, record }"
      >
        <div>
          <a-input
            v-if="editableData[record.key] && col !== 'cumulativeProbability'"
            v-model:value="editableData[record.key][col]"
            style="margin: -5px 0"
          />
          <template v-else>
            {{ text }}
          </template>
        </div>
      </template>
      <template #operation="{ record }">
        <div class="editable-row-operations">
          <!-- <span> -->
          <span v-if="editableData[record.key]">
            <a @click="save(record.key)" style="margin: 10px">保存</a>
            <a-popconfirm title="确定取消保存吗？" @confirm="cancel(record.key)" >
              <a>取消</a>
            </a-popconfirm>
          </span>
          <!-- <span> -->
          <span v-else>
            <a @click="edit(record.key)" style="margin: 10px">编辑</a>
            <a-popconfirm title="确定删除本行吗？" @confirm="deleteRow(record.key)">
              <a>删除</a>
            </a-popconfirm>
          </span>
        </div>
      </template>
    </a-table>
    <div class="add-button">
      <a-button type="primary" @click="addRow"><plus-circle-outlined />增加一行</a-button>
    </div>
  </div>
</template>

<script>
// 可以编辑，增减行列的表格
  import { cloneDeep } from 'lodash-es';
  import { Table } from 'ant-design-vue';
  import { message } from 'ant-design-vue';

  export default {
    components: {
      'a-table': Table,
    },
    props: {
      dataSource: {
        type: Array,
        required: true,
      },
      columns: {
        type: Array,
        required: true,
      },
    },
    data() {
      return {
        editingKey: '',
        editableData: {},
        dataSourceCopy: this.dataSource,
      };
    },
    computed: {
      groupedData () {
        return this.dataSourceCopy.reduce((result, item) => {
          const key = item.uncertainty;
          if (!result[key]) {
            result[key] = [];
          }
          result[key].push(item);
          return result;
        }, {});
      }
    },
    methods: {
      update() {
        this.$emit('updateData', this.dataSourceCopy);
      },
      edit(key) {
        this.editableData[key] = cloneDeep(this.dataSourceCopy.filter((item) => key === item.key)[0]);
        this.editingKey = key;
        this.update();
      },
      save(key) {
        const group = this.groupedData[this.editableData[key].uncertainty];
        let totalProbability = 0;
        for (let i = 0; i < group.length; i++) {
          if (group[i].key === key) {
            // 计算当前行的probability，加入到总数中
            totalProbability += parseFloat(this.editableData[key].probability);
            // 更新当前行
            Object.assign(group[i], this.editableData[key]);
          }
          else {
            // 更新同组中其它行的 start_year 和 end_year 属性
            group[i].start_year = this.editableData[key].start_year;
            group[i].end_year = this.editableData[key].end_year;
            // 将同组中其它行的probability加入到总数中
            totalProbability += parseFloat(group[i].probability);
          }
        }
        delete this.editableData[key];
        this.editingKey = '';
        this.update();
        if (totalProbability !== 1) {
         message.warning('同一种不确定因素的概率之和必须为1')
        }
      },
      cancel(key) {
        delete this.editableData[key];
        this.editingKey = '';
        this.update();
      },
      addRow() {
        const key = this.dataSourceCopy.length;
        const attributes = this.columns.map((item) => item.dataIndex);

        // 使用解构赋值和map方法动态生成对象，根据attributes数组的顺序依次添加属性
        const newObj = Object.fromEntries(
          attributes.map((attr) => [attr, '']) // 将每个属性名和空字符串组成一个键值对
        );

        newObj.key = key.toString(); // 添加key属性

        this.dataSourceCopy.push(newObj);

        this.update();
      },
      deleteRow(key) {
        this.dataSourceCopy = this.dataSourceCopy.filter((item) => key !== item.key);
        this.update();
      },
      handleDataSourceChange(data) {
        const attributes = this.columns.map((item) => item.dataIndex);

        // 遍历数据源中的每一项，根据attributes数组的顺序将每个属性值取出来，组成新的对象数组
        this.dataSourceCopy = data.map((item, index) => {
          return Object.fromEntries(
            attributes.map((attr) => [attr, item[attr]]) // 根据属性名取出属性值，组成键值对数组
          );
        });

        this.update();
      },
    },
  };
</script>
<style lang="less" scoped>
  .add-button {
    margin-top: 16px;
    text-align: right;
  }
</style>
