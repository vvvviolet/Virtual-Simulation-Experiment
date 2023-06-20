<template>
  <div style="margin-top: 10px">
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column label="商品图片">
        <template slot-scope="scope">
          <a :href="['/front/goods?id=' + scope.row.goods.id]"><el-image :src="scope.row.goods.imgs[0]" style="width: 100px; height: 100px;" fit="contain"></el-image></a>
        </template>
      </el-table-column>
      <el-table-column prop="goods.name" label="商品名称"></el-table-column>
      <el-table-column prop="goods.realPrice" label="商品单价"></el-table-column>
      <el-table-column prop="count" label="购买数量">
        <template slot-scope="scope">
          <el-input-number v-model="scope.row.count" :min="1" :max="10" label="购买数量" style="width: 100px" @change="changeCount(scope.row)"></el-input-number>
        </template>
      </el-table-column>
      <el-table-column prop="createTime" label="加入时间"></el-table-column>
      <el-table-column
          fixed="right"
          label="操作"
          width="200">
        <template slot-scope="scope">
          <el-button type="danger" icon="el-icon-delete" circle @click="del(scope.row.id)"></el-button>
        </template>
      </el-table-column>
    </el-table>

    <div style="margin-top: 10px">
      <div style="display: flex; background-color: white; padding: 10px">
        <div style="flex: 1; padding-left: 20px; color: #999; font-size: 12px">
          <div>共 <span style="color: red; font-size: 20px">{{ count }}</span> 件商品</div>
          <div style="color: orange; padding-top: 5px">立即下单，享超值优惠！</div>
        </div>
        <div style="flex: 1;color: red; text-align: right">
          <div>
            <span>总价：</span>
            <span>￥ {{ totalPrice }}</span>
            <el-button style="background-color: red; color: white; margin-left: 20px" @click="submitOrder">去结算</el-button>
          </div>
          <div style="text-align: right; color: #999; font-size: 12px; margin-right: 85px">
            优惠： - ￥{{ discount }}
          </div>
        </div>
      </div>



    </div>
  </div>
</template>

<script>
import API from "@/utils/request";

export default {
  name: "FrontCart",
  data() {
    return {
      user: {},
      count: 0,
      tableData: [],
      totalPrice: 0,
      discount: 0
    }
  },
  created() {
    this.user = sessionStorage.getItem("user") ? JSON.parse(sessionStorage.getItem("user")) : {}
    if (!this.user) {
      this.$message({
        type: "warning",
        message: '请登录！'
      })
      return
    }
    this.load()
  },
  methods: {
    submitOrder() {
      if (!this.tableData.length) {
        this.$message({
          type: 'warning',
          message: '您还未选择商品'
        })
        return
      }
      this.$store.commit('setCarts', this.tableData)
      this.$store.commit('setType', 1)
      this.$router.replace("/front/preOrder")
    },
    load() {
      API.get("/api/cart").then(res => {
        this.tableData = res.data.list
        if (this.tableData) {
          this.count = this.tableData.map(v => v.count).reduce((a, b) => a + b)
          this.tableData.forEach(item => {
            // 处理下表格的图片显示
            if (!item.goods.imgs) {
              item.goods.imgs = ['']
            } else {
              item.goods.imgs = JSON.parse(item.goods.imgs)
            }
          })

          this.totalPrice = res.data.totalPrice
          this.discount = res.data.discount
        }
      })
    },
    changeCount(obj) {
      let param = JSON.parse(JSON.stringify(obj))
      delete param.goods  // 删除多余的属性
      API.put("/api/cart/", param).then(res => {
        if (res.code === '0') {
          this.load()
        }
      })
    },
    del(id) {
      API.delete("/api/cart/" + id).then(res => {
        if (res.code === '0') {
          this.$message({
            type: 'success',
            message: '操作成功'
          })
          this.load()
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
