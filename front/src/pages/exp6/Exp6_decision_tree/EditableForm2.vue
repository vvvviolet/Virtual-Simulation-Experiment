<template>
  <div class="container">
    <h1>
      <slot></slot>
    </h1>
    <a-table :columns="columns" :pagination="false" :data-source="dataSourceCopy" bordered>
      <template
        v-for="(col, index) in columns.map((item) => item.dataIndex).filter((item) => item != 'operation')"
        :key="index"
        #[col]="{ text, record }"
      >
        <div>
          <a-input
            v-if="editableData[record.key]"
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
            <a-popconfirm title="确定取消保存吗？" @confirm="cancel(record.key)">
              <a>取消</a>
            </a-popconfirm>
          </span>
          <!-- <span> -->
          <span v-else>
            <a @click="edit(record.key)" style="margin: 10px">编辑</a>
          </span>
        </div>
      </template>
    </a-table>
  </div>
</template>

<script>
// 可以编辑，但不能增减行列的表格
  import { cloneDeep } from 'lodash-es';
  import { Table } from 'ant-design-vue';

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
        Object.assign(this.dataSourceCopy.filter((item) => key === item.key)[0], this.editableData[key]);
        delete this.editableData[key];
        this.editingKey = '';
        this.update();
      },
      cancel(key) {
        delete this.editableData[key];
        this.editingKey = '';
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
<style lang="less" scoped></style>
