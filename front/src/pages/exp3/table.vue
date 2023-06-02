<!-- 3.碳排放需求与供给实验
寻求碳排放权市场交易的供给与需求平衡点，以达成均衡价格，建议考虑交易的公平性 -->
<template>
    <a-table bordered :data-source="dataSource" :columns="columns" style="width:100%">
      <template #bodyCell="{ column, text, record }">
        <template v-if="column.dataIndex === 'supply'">
          <div class="editable-cell">
            <div v-if="editableData[record.key]" class="editable-cell-input-wrapper">
              <a-input v-model:value="editableData[record.key].supply" @pressEnter="save(record.key)" />
              <check-outlined class="editable-cell-icon-check" @click="save(record.key)" />
            </div>
            <div v-else class="editable-cell-text-wrapper">
              {{ text || ' ' }}
              <edit-outlined class="editable-cell-icon" @click="edit(record.key)" />
            </div>
          </div>
        </template>
        <template v-if="column.dataIndex === 'price'">
          <div class="editable-cell">
            <div v-if="editableData[record.key]" class="editable-cell-input-wrapper">
              <a-input v-model:value="editableData[record.key].price" @pressEnter="save(record.key)" />
              <check-outlined class="editable-cell-icon-check" @click="save(record.key)" />
            </div>
            <div v-else class="editable-cell-text-wrapper">
              {{ text || ' ' }}
              <edit-outlined class="editable-cell-icon" @click="edit(record.key)" />
            </div>
          </div>
        </template>
        <template v-else-if="column.dataIndex === 'operation'">
            <a @click="edit(record.key)">edit</a>
          <a-popconfirm
            
            v-if="dataSource.length"
            title="Sure to delete?"
            @confirm="onDelete(record.key)"
          >
            <a style="margin-left:30px">Delete</a>
          </a-popconfirm>
        </template>
      </template>
      <template #title>
        <div style="text-align: center;">
          碳排放权{{title}}方
        </div>
      </template>
      <template #footer>
        <div style="text-align: center;">
          <a-button class="editable-add-btn" style="margin-bottom: 8px;" @click="handleAdd">增加一行数据</a-button>
        </div>
      </template>
    </a-table>
  </template>
  <script lang="ts">
  import { computed, defineComponent, onMounted, reactive, ref, toRefs,defineEmits } from 'vue';
  import type { Ref, UnwrapRef } from 'vue';
  import { CheckOutlined, EditOutlined } from '@ant-design/icons-vue';
  import { cloneDeep, forEach } from 'lodash-es';
  import * as echarts from 'echarts'
  interface DataItem {
    key: string;
    supply: number;
    price: number;
  }
  
  export default defineComponent({
    components: {
      CheckOutlined,
      EditOutlined,
    },
    
    props:{
        title:String
    },
    setup(props,ctx) {
      const {title}=toRefs(props)
      const columns = [
        {
          title:title.value+'方编号',
          dataIndex:'number',
        },
        {
          title: title.value+'量（吨）',
          dataIndex: 'supply',
        },
        {
          title: title.value+'价格（元/吨）',
          dataIndex: 'price',
        },
        {
          title: 'operation',
          dataIndex: 'operation',
        },
      ];
      const dataSource: Ref<DataItem[]> = ref([
        {
          key: '0',
          number: 1,
          supply: 1,
          price: 1,
        },
      ]);
      const count = computed(() => dataSource.value.length + 1);
      const editableData: UnwrapRef<Record<string, DataItem>> = reactive({});
      
      const edit = (key: string) => {
        editableData[key] = cloneDeep(dataSource.value.filter(item => key === item.key)[0]);
        
      };
      const save = (key: string) => {
        Object.assign(dataSource.value.filter(item => key === item.key)[0], editableData[key]);
        delete editableData[key];
        ctx.emit('drawLine')
      };
  
      const onDelete = (key: string) => {
        dataSource.value = dataSource.value.filter(item => item.key !== key);
        ctx.emit('drawLine')
      };
      const handleAdd = () => {
        const newData = {
          key: `${count.value}`,
          number:`${count.value+1}`,
          supply: 1,
          price: 1,
        };
        dataSource.value.push(newData);
      };

      const add=(data:JSON)=>{
        const newData = {
          key: `${count.value}`,
          number:data.id,
          supply:data.amount,
          price:data.price,
        };
        dataSource.value.push(newData);
      }

      const getDataSource=()=>{
        return dataSource.value
      }
  
      return {
        columns,
        onDelete,
        handleAdd,
        dataSource,
        editableData,
        count,
        edit,
        save,
        getDataSource,
        title,
        add
      };
    },
  });
  </script>
  <style lang="less">
  .editable-cell {
    position: relative;
    .editable-cell-input-wrapper,
    .editable-cell-text-wrapper {
      padding-right: 24px;
    }
  
    .editable-cell-text-wrapper {
      padding: 5px 24px 5px 5px;
    }
  
    .editable-cell-icon,
    .editable-cell-icon-check {
      position: absolute;
      right: 0;
      width: 20px;
      cursor: pointer;
    }
  
    .editable-cell-icon {
      margin-top: 4px;
      display: none;
    }
  
    .editable-cell-icon-check {
      line-height: 28px;
    }
  
    .editable-cell-icon:hover,
    .editable-cell-icon-check:hover {
      color: #108ee9;
    }
  
    .editable-add-btn {
      margin-bottom: 8px;
    }
  }
  .editable-cell:hover .editable-cell-icon {
    display: inline-block;
  }
  </style>
  