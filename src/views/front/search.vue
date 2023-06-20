<template>
  <div style="color: #8A5433">

    <div style="margin-top: 10px">
      <el-row>
        <!--    推荐商品-->
        <el-col :span="24">
          <el-card>

            <div style="padding: 10px 0">
              <div style="margin-bottom: 20px">
                <el-input placeholder="输入古董名称搜索" style="width: 30%" v-model="searchText"></el-input>
                <el-button style="margin-left: 5px" @click="loadTable">搜索</el-button>
              </div>
              <el-row :gutter="10">
                <el-col :span="6" v-for="item in tableData" :key="item.id" style="margin-bottom: 10px">
                  <div style="border: 1px solid #ccc; padding: 10px; cursor: pointer" @click="goodsDetail(item.id)">
                    <el-image :src="item.imgs[0]" style="width: 100%; height: 100px" fit="contain"></el-image>
                    <div style="padding: 5px; height: 20px; text-align: center; font-size: 12px; overflow: hidden">
                      <el-tooltip :content="item.name" placement="bottom" effect="light">
                        <span class="item-title">{{ item.name }}</span>
                      </el-tooltip>
                    </div>
                    <div style="padding: 5px; text-align: center; color: red; font-size: 12px">
                      ￥ {{ item.price }}
                    </div>
                  </div>

                </el-col>
              </el-row>
            </div>

            <!--      分页-->
            <div style="margin-top: 20px">
              <el-pagination
                  small
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page="pageNum"
                  :page-size="pageSize"
                  :page-sizes="[4, 8, 12]"
                  layout=" prev, pager, next"
                  :total="total"
              >
              </el-pagination>
            </div>

          </el-card>
        </el-col>
      </el-row>

    </div>

  </div>
</template>

<script>
import API from "@/utils/request";

const url = "/api/video/"

export default {
  name: "Search",
  data() {
    return {
      searchText: '',
      tableData: [],
      user: {},
      pageNum: 1,
      pageSize: 8,
      total: 0
    };
  },
  created() {
    this.user = sessionStorage.getItem("user") ? JSON.parse(sessionStorage.getItem("user")) : {}
    this.searchText = this.$route.query.searchText || ''
    this.loadTable()
  },
  methods: {
    goodsDetail(id) {
      this.$router.replace({path: '/front/goods', query: {id: id}})
    },
    loadTable() {
      API.get("/api/goods/page", {
        params: {
          name: this.searchText,
          pageNum: this.pageNum,
          pageSize: this.pageSize
        }
      }).then(res => {
        this.tableData = res.data.records
        this.total = res.data.total

        this.tableData.forEach(item => {
          // 处理下表格的图片显示
          if (!item.imgs) {
            item.imgs = ['']
          } else {
            item.imgs = JSON.parse(item.imgs)
          }
        })
      })
    },
    handleSizeChange(pageNum) {
      this.pageNum = pageNum;
      this.loadTable()
    },
    handleCurrentChange(pageSize) {
      this.pageSize = pageSize;
      this.loadTable()
    }
  },
};
</script>

<style scoped>

</style>
