<template>
  <div>
    <el-card style="margin-top: 10px">
      <el-collapse v-model="activeNames" :accordion="true">
        <el-collapse-item :name="item.id" v-for="item in tableData" :key="item.id">
          <template slot="title">
            <div style="color: #666; font-size: 16px">
              <span>{{ item.title }}</span>
              <span style="margin-left: 20px">{{ item.time }}</span>
            </div>
          </template>
          <div style="padding: 10px">{{ item.content }}</div>
        </el-collapse-item>
      </el-collapse>

      <div style="margin-top: 10px">
        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="pageNum"
            :page-size="pageSize"
            :page-sizes="[5, 10, 15]"
            layout="prev, pager, next"
            :total="total"
        >
        </el-pagination>
      </div>
    </el-card>

  </div>
</template>

<script>
import API from "@/utils/request";

export default {
  name: "FrontNotice",
  data() {
    return {
      activeNames: 1,
      tableData: [],
      total: 0,
      pageNum: 1,
      pageSize: 10
    }
  },
  created() {
    this.load()
  },
  methods: {
    handleSizeChange(pageSize) {
      this.pageSize = pageSize
      this.load()
    },
    handleCurrentChange(pageNum) {
      this.pageNum = pageNum
      this.load()
    },
    load() {
      API.get( "/api/notice/page", {
        params: {
          pageNum: this.pageNum,
          pageSize: this.pageSize,
          name: ''
        }
      }).then(res => {
        this.tableData = res.data.records || []
        this.total = res.data.total
        if (this.total) {
          this.activeNames = this.tableData[0].id
        }
      })

    }
  }
}
</script>

<style scoped>

</style>
