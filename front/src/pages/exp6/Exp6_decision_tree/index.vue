<template>
  <div>
    <a-button-group style="margin-bottom: 16px">
      <a-button @click="addNode">添加节点</a-button>
      <a-button @click="deleteNode">删除节点</a-button>
    </a-button-group>
    <HorizontalTree :data="treeData" />
  </div>
</template>

<script lang="ts">
  import HorizontalTree from '@/pages/exp6/Exp6_decision_tree/HorizontalTree.vue';
  export default {
    name: 'Exp6_decision_tree',
    components: {
      HorizontalTree,
    },
    data() {
      return {
        treeData: {
          value: 1,
          probability: '',
          netPresentValue: '',
          children: [
            {
              value: 2,
              probability: '90',
              netPresentValue: '100',
              children: [
                {
                  value: 3,
                  probability: '100',
                  netPresentValue: '200',
                },
                {
                  value: 4,
                  probability: '80',
                  netPresentValue: '-50',
                },
              ],
            },
            {
              value: 5,
              probability: '10',
              netPresentValue: '-300',
              children: [
                {
                  value: 6,
                  probability: '100',
                  netPresentValue: '500',
                },
              ],
            },
          ],
        },
      };
    },

    methods: {
      addNode() {
        const node = {
          value: this.treeData.children.length + 1,
          probability: '',
          netPresentValue: '',
        };
        this.treeData.children.push(node);
      },

      deleteNode() {
        if (this.treeData.children.length > 0) {
          this.treeData.children.pop();
        }
      },
    },
  };
</script>

<style scoped lang="less"></style>
