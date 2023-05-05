import { log } from 'console'
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useExp1Store = defineStore(
  'Exp1',
  () => {
    const tableData5 = ref([
      {
        component: 'EI',
        A: '',
        B: '3',
        C: '',
        D: '',
        E: '4',
        F: '',
        G: '',
        H: '6',
        I: '',
        unchanged: '',
      },
      {
        component: 'EO',
        A: '',
        B: '4',
        C: '',
        D: '',
        E: '5',
        F: '',
        G: '',
        H: '7',
        I: '',
        unchanged: '',
      },
      {
        component: 'EQ',
        A: '',
        B: '3',
        C: '',
        D: '',
        E: '4',
        F: '',
        G: '',
        H: '6',
        I: '',
        unchanged: '',
      },
      {
        component: 'ILF',
        A: '',
        B: '7',
        C: '',
        D: '',
        E: '10',
        F: '',
        G: '',
        H: '15',
        I: '',
        unchanged: '',
      },
      {
        component: 'EIF',
        A: '',
        B: '5',
        C: '',
        D: '',
        E: '7',
        F: '',
        G: '',
        H: '10',
        I: '',
        unchanged: '',
      },
    ])
    const tableData6 = ref([
      {
        index: '1',
        title: 'Requirement for reliable backup and recovery ',
        grade: '0',
      },
      {
        index: '2',
        title: 'Requirement for data communication',
        grade: '0',
      },
      {
        index: '3',
        title: 'Extent of distributed processing ',
        grade: '0',
      },
      {
        index: '4',
        title: 'Performance requirements ',
        grade: '0',
      },
      {
        index: '5',
        title: 'Expected operational environment ',
        grade: '0',
      },
      {
        index: '6',
        title: 'Extent of online data entries ',
        grade: '0',
      },
      {
        index: '7',
        title: 'Extent of multi-screen or multi-operation online data input ',
        grade: '0',
      },
      {
        index: '8',
        title: 'Extent of online updating of master files ',
        grade: '0',
      },
      {
        index: '9',
        title: 'Extent of complex inputs, outputs, online queries and files ',
        grade: '0',
      },
      {
        index: '10',
        title: 'Extent of complex data processing ',
        grade: '0',
      },
      {
        index: '11',
        title: 'Extent that currently developed code can be designed for reuse ',
        grade: '0',
      },
      {
        index: '12',
        title: 'Extent of conversion and installation included in the design ',
        grade: '0',
      },
      {
        index: '13',
        title: 'Extent of multiple installations in an organization and variety of customer organizations ',
        grade: '0',
      },
      {
        index: '14',
        title: 'Extent of change and focus on ease of use ',
        grade: '0',
      },
    ])
    // 简单功能点数
    const c = computed(() =>
      (index) => tableData5.value[index].C = (tableData5.value[index].A ? parseInt(tableData5.value[index].A) : 0) * parseInt(tableData5.value[index].B) + ''
    )
    // 平均功能点数
    const f = computed(() =>
      (index) => tableData5.value[index].F = (tableData5.value[index].D ? parseInt(tableData5.value[index].D) : 0) * parseInt(tableData5.value[index].E) + '')
    // 复杂功能点数
    const i = computed(() =>
      (index) => tableData5.value[index].I = (tableData5.value[index].G ? parseInt(tableData5.value[index].G) : 0) * parseInt(tableData5.value[index].H) + '')
    // 未调整功能点数(是上面三个功能点数的加和)
    const unchanged = computed(() =>
      (index) => tableData5.value[index].unchanged = (tableData5.value[index].C ? parseInt(tableData5.value[index].C) : 0) +
        (tableData5.value[index].F ? parseInt(tableData5.value[index].F) : 0) +
        (tableData5.value[index].I ? parseInt(tableData5.value[index].I) : 0) + ''
    )
    // 总的未调整功能点数
    const SUM = computed(() => {
      return tableData5.value.reduce((amt, item) => amt + parseInt(item.unchanged), 0)
    })
    // 功能点调整因子
    const VAF = computed(() => {
      let vaf = tableData6.value.reduce((amt, item) => amt + (item.grade ? parseInt(item.grade) : 0), 0)
      // VAF = 0.65 + 0.01 × 14个数据的加和 
      vaf = vaf * 0.01 + 0.65
      return vaf
    })
    // 功能点数
    const ALL = computed(() => (SUM.value * VAF.value).toFixed(2))

    // 清空数据
    const clear = () => {
      tableData5.value = [
        {
          component: 'EI',
          A: '',
          B: '3',
          C: '',
          D: '',
          E: '4',
          F: '',
          G: '',
          H: '6',
          I: '',
          unchanged: '',
        },
        {
          component: 'EO',
          A: '',
          B: '4',
          C: '',
          D: '',
          E: '5',
          F: '',
          G: '',
          H: '7',
          I: '',
          unchanged: '',
        },
        {
          component: 'EQ',
          A: '',
          B: '3',
          C: '',
          D: '',
          E: '4',
          F: '',
          G: '',
          H: '6',
          I: '',
          unchanged: '',
        },
        {
          component: 'ILF',
          A: '',
          B: '7',
          C: '',
          D: '',
          E: '10',
          F: '',
          G: '',
          H: '15',
          I: '',
          unchanged: '',
        },
        {
          component: 'EIF',
          A: '',
          B: '5',
          C: '',
          D: '',
          E: '7',
          F: '',
          G: '',
          H: '10',
          I: '',
          unchanged: '',
        },
      ]
      tableData6.value = [
        {
          index: '1',
          title: 'Requirement for reliable backup and recovery ',
          grade: '0',
        },
        {
          index: '2',
          title: 'Requirement for data communication',
          grade: '0',
        },
        {
          index: '3',
          title: 'Extent of distributed processing ',
          grade: '0',
        },
        {
          index: '4',
          title: 'Performance requirements ',
          grade: '0',
        },
        {
          index: '5',
          title: 'Expected operational environment ',
          grade: '0',
        },
        {
          index: '6',
          title: 'Extent of online data entries ',
          grade: '0',
        },
        {
          index: '7',
          title: 'Extent of multi-screen or multi-operation online data input ',
          grade: '0',
        },
        {
          index: '8',
          title: 'Extent of online updating of master files ',
          grade: '0',
        },
        {
          index: '9',
          title: 'Extent of complex inputs, outputs, online queries and files ',
          grade: '0',
        },
        {
          index: '10',
          title: 'Extent of complex data processing ',
          grade: '0',
        },
        {
          index: '11',
          title: 'Extent that currently developed code can be designed for reuse ',
          grade: '0',
        },
        {
          index: '12',
          title: 'Extent of conversion and installation included in the design ',
          grade: '0',
        },
        {
          index: '13',
          title: 'Extent of multiple installations in an organization and variety of customer organizations ',
          grade: '0',
        },
        {
          index: '14',
          title: 'Extent of change and focus on ease of use ',
          grade: '0',
        },
      ]
    }

    return { tableData5, tableData6, c, f, i, unchanged, SUM, VAF, ALL, clear }
  })


