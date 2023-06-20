<template>
  <div style="margin-top: 10px">
    <!--    全部-->
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="全部订单" name="all">
        <el-table :data="tableData" stripe style="width: 100%">
          <el-table-column type="expand">
            <template slot-scope="props">
              <el-form label-position="left" inline class="demo-table-expand">
                <el-form-item label="联系人：">
                  <span>{{ props.row.linkUser }}</span>
                </el-form-item>
                <el-form-item label="联系地址：">
                  <span>{{ props.row.linkAddress }}</span>
                </el-form-item>
                <el-form-item label="联系电话：">
                  <span>{{ props.row.linkPhone }}</span>
                </el-form-item>
                <el-form-item label="创建时间：">
                  <span>{{ props.row.createTime }}</span>
                </el-form-item>
              </el-form>
            </template>
          </el-table-column>
          <el-table-column label="订单编号" prop="orderNo"></el-table-column>
          <el-table-column label="商品" width="300">
            <template slot-scope="scope">
              <div v-for="item in scope.row.carts" :key="item.id" style="display: flex">
                <div style="flex: 2"><a :href="['/front/goods?id=' + item.goods.id]">
                  <el-image :src="item.goods.imgs[0]" style="width: 100px; height: 100px;" fit="contain"></el-image>
                </a></div>
                <div style="flex: 2"><a style="color: #666"
                                        :href="['/front/goods?id=' + item.goods.id]">{{ item.goods.name }}</a></div>
                <div style="flex: 1; line-height: 100px; text-align: center">X {{ item.count }}</div>
              </div>
            </template>
          </el-table-column>
          <el-table-column label="总价格">
            <template slot-scope="scope">
              <span style="color: red">￥ {{ scope.row.totalPrice }}</span>
            </template>
          </el-table-column>
          <el-table-column label="状态" prop="state"></el-table-column>

          <el-table-column
              fixed="right"
              label="操作"
          >
            <template slot-scope="scope">
              <el-button type="primary" @click="pay(scope.row.id)" v-if="scope.row.state === '待付款'">付款</el-button>
              <el-button type="danger" @click="cancel(scope.row.id)" v-if="scope.row.state === '待付款'">取消</el-button>
              <el-button type="primary" @click="confirm(scope.row.id)" v-if="scope.row.state === '待收货'">确认收货</el-button>
              <el-popconfirm
                  v-if="scope.row.state === '已取消' || scope.row.state === '已完成'"
                  @confirm="del(scope.row.id)"
                  title="确定删除？"
              >
                <el-button type="danger" icon="el-icon-delete" circle slot="reference" style="margin-left: 10px"></el-button>
              </el-popconfirm>
            </template>
          </el-table-column>
        </el-table>
        <div style="margin-top: 10px">
          <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="pageNum"
              :page-size="pageSize"
              :page-sizes="[2, 5, 10]"
              layout="prev, pager, next"
              :total="total"
          >
          </el-pagination>
        </div>
      </el-tab-pane>

      <!--      待付款-->
      <el-tab-pane label="待付款" name="待付款">
        <el-table :data="tableData" stripe style="width: 100%">
          <el-table-column type="expand">
            <template slot-scope="props">
              <el-form label-position="left" inline class="demo-table-expand">
                <el-form-item label="联系人：">
                  <span>{{ props.row.linkUser }}</span>
                </el-form-item>
                <el-form-item label="联系地址：">
                  <span>{{ props.row.linkAddress }}</span>
                </el-form-item>
                <el-form-item label="联系电话：">
                  <span>{{ props.row.linkPhone }}</span>
                </el-form-item>
                <el-form-item label="创建时间：">
                  <span>{{ props.row.createTime }}</span>
                </el-form-item>
              </el-form>
            </template>
          </el-table-column>
          <el-table-column label="订单编号" prop="orderNo"></el-table-column>
          <el-table-column label="商品" width="300">
            <template slot-scope="scope">
              <div v-for="item in scope.row.carts" :key="item.id" style="display: flex">
                <div style="flex: 2"><a :href="['/front/goods?id=' + item.goods.id]">
                  <el-image :src="item.goods.imgs[0]" style="width: 100px; height: 100px;" fit="contain"></el-image>
                </a></div>
                <div style="flex: 2"><a style="color: #666"
                                        :href="['/front/goods?id=' + item.goods.id]">{{ item.goods.name }}</a></div>
                <div style="flex: 1; line-height: 100px; text-align: center">X {{ item.count }}</div>
              </div>
            </template>
          </el-table-column>
          <el-table-column label="总价格">
            <template slot-scope="scope">
              <span style="color: red">￥ {{ scope.row.totalPrice }}</span>
            </template>
          </el-table-column>
          <el-table-column label="状态" prop="state"></el-table-column>

          <el-table-column
              fixed="right"
              label="操作"
          >
            <template slot-scope="scope">
              <el-button type="primary" @click="pay(scope.row.id)" v-if="scope.row.state === '待付款'">付款</el-button>
              <el-button type="danger" @click="cancel(scope.row.id)" v-if="scope.row.state === '待付款'">取消</el-button>
              <el-button type="primary" @click="confirm(scope.row.id)" v-if="scope.row.state === '待收货'">确认收货</el-button>
              <el-popconfirm
                  v-if="scope.row.state === '已取消' || scope.row.state === '已完成'"
                  @confirm="del(scope.row.id)"
                  title="确定删除？"
              >
                <el-button type="danger" icon="el-icon-delete" circle slot="reference" style="margin-left: 10px"></el-button>
              </el-popconfirm>
            </template>
          </el-table-column>
        </el-table>
        <div style="margin-top: 10px">
          <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="pageNum"
              :page-size="pageSize"
              :page-sizes="[2, 5, 10]"
              layout="prev, pager, next"
              :total="total"
          >
          </el-pagination>
        </div>
      </el-tab-pane>

      <!--      待收货-->
      <el-tab-pane label="待收货" name="待收货">
        <el-table :data="tableData" stripe style="width: 100%">
          <el-table-column type="expand">
            <template slot-scope="props">
              <el-form label-position="left" inline class="demo-table-expand">
                <el-form-item label="联系人：">
                  <span>{{ props.row.linkUser }}</span>
                </el-form-item>
                <el-form-item label="联系地址：">
                  <span>{{ props.row.linkAddress }}</span>
                </el-form-item>
                <el-form-item label="联系电话：">
                  <span>{{ props.row.linkPhone }}</span>
                </el-form-item>
                <el-form-item label="创建时间：">
                  <span>{{ props.row.createTime }}</span>
                </el-form-item>
              </el-form>
            </template>
          </el-table-column>
          <el-table-column label="订单编号" prop="orderNo"></el-table-column>
          <el-table-column label="商品" width="300">
            <template slot-scope="scope">
              <div v-for="item in scope.row.carts" :key="item.id" style="display: flex">
                <div style="flex: 2"><a :href="['/front/goods?id=' + item.goods.id]">
                  <el-image :src="item.goods.imgs[0]" style="width: 100px; height: 100px;" fit="contain"></el-image>
                </a></div>
                <div style="flex: 2"><a style="color: #666"
                                        :href="['/front/goods?id=' + item.goods.id]">{{ item.goods.name }}</a></div>
                <div style="flex: 1; line-height: 100px; text-align: center">X {{ item.count }}</div>
              </div>
            </template>
          </el-table-column>
          <el-table-column label="总价格">
            <template slot-scope="scope">
              <span style="color: red">￥ {{ scope.row.totalPrice }}</span>
            </template>
          </el-table-column>
          <el-table-column label="状态" prop="state"></el-table-column>

          <el-table-column
              fixed="right"
              label="操作"
          >
            <template slot-scope="scope">
              <el-button type="primary" @click="pay(scope.row.id)" v-if="scope.row.state === '待付款'">付款</el-button>
              <el-button type="danger" @click="cancel(scope.row.id)" v-if="scope.row.state === '待付款'">取消</el-button>
              <el-button type="primary" @click="confirm(scope.row.id)" v-if="scope.row.state === '待收货'">确认收货</el-button>
              <el-popconfirm
                  v-if="scope.row.state === '已取消' || scope.row.state === '已完成'"
                  @confirm="del(scope.row.id)"
                  title="确定删除？"
              >
                <el-button type="danger" icon="el-icon-delete" circle slot="reference" style="margin-left: 10px"></el-button>
              </el-popconfirm>
            </template>
          </el-table-column>
        </el-table>
        <div style="margin-top: 10px">
          <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="pageNum"
              :page-size="pageSize"
              :page-sizes="[2, 5, 10]"
              layout="prev, pager, next"
              :total="total"
          >
          </el-pagination>
        </div>
      </el-tab-pane>

      <!--      待评价-->
      <el-tab-pane label="待评价" name="已完成">
        <el-table :data="commentData" stripe style="width: 100%">
          <el-table-column label="订单编号" prop="orderNo"></el-table-column>
          <el-table-column label="商品图片" width="300">
            <template slot-scope="scope">
              <a :href="['/front/goods?id=' + scope.row.id]">
                <el-image :src="scope.row.imgs[0]" style="width: 100px; height: 100px;" fit="contain"></el-image>
              </a>
            </template>
          </el-table-column>
          <el-table-column label="商品名称" prop="name"></el-table-column>

          <el-table-column
              fixed="right"
              label="操作"
          >
            <template slot-scope="scope">
              <el-button type="primary" @click="preComment(scope.row.id)">评价</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div style="margin-top: 10px">
          <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="pageNum"
              :page-size="pageSize"
              :page-sizes="[2, 5, 10]"
              layout="prev, pager, next"
              :total="total"
          >
          </el-pagination>
        </div>
      </el-tab-pane>
    </el-tabs>


    <!-- 弹窗   -->
    <el-dialog title="评价信息" :visible.sync="dialogFormVisible" width="30%"
               :close-on-click-modal="false" :close-on-press-escape="false" :show-close="false">
      <el-form :model="entity">
        <el-form-item label="评价" label-width="120px">
          <el-input type="textarea" v-model="entity.content" autocomplete="off" style="width: 80%"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="comment">确 定</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
import API from "@/utils/request";

export default {
  name: "cart",
  data() {
    return {
      user: {},
      pageNum: 1,
      pageSize: 10,
      total: 0,
      activeName: 'all',
      tableData: [],
      payData: [],
      commentData: [],
      entity: {},
      state: 'all',
      dialogFormVisible: false,
    }
  },
  created() {
    this.user = sessionStorage.getItem("user") ? JSON.parse(sessionStorage.getItem("user")) : {}
    if (!this.user.id) {
      this.$message({
        type: 'warning',
        message: '请登录！'
      })
      return
    }
    this.load()
  },
  methods: {
    preComment(id) {
      this.entity = {}
      this.entity.foreignId = id
      this.dialogFormVisible = true
    },
    comment() {
      if (!this.entity.content) {
        this.$message({
          type: 'warning',
          message: '请填写内容'
        })
        return
      }
      API.post("/api/message", this.entity).then(res => {
        if (res.code === '0') {
          this.$message({
            type: 'success',
            message: '评价成功'
          })
          this.dialogFormVisible = false
          this.load()
        }
      })
    },
    confirm(id) {
      API.put("/api/order", {id: id, state: '已完成'}).then(res => {
        if (res.code === '0') {
          this.$message({
            type: 'success',
            message: '操作成功'
          })
          this.load()
        }
      })
    },
    handleClick(tab, event) {
      console.log(tab.name);

      this.state = tab.name
      this.load()
    },
    handleSizeChange(pageSize) {
      this.pageSize = pageSize
      this.load()
    },
    handleCurrentChange(pageNum) {
      this.pageNum = pageNum
      this.load()
    },
    load() {
      this.commentData = []
      if(this.state === 'all') {this.state = ''}
      API.get("/api/order/page/front", {
        params: {
          pageNum: this.pageNum,
          pageSize: this.pageSize,
          state: this.state
        }
      }).then(res => {
        this.tableData = res.data.records

        this.tableData.forEach(v => {
          v.carts = JSON.parse(v.carts)

          v.carts.forEach(item => {
            // 处理下表格的图片显示
            if (!item.goods.imgs) {
              item.goods.imgs = ['']
            } else {
              item.goods.imgs = JSON.parse(item.goods.imgs)
            }

            if (this.state === '已完成') {
              item.goods.orderNo = v.orderNo
              this.commentData.push(item.goods)
            }
          })

        })
      })
    },
    pay(id) {
      API.put("/api/order/pay/" + id).then(res => {
        if (res.code === '0') {
          this.$message({
            type: 'success',
            message: '付款成功'
          })
          this.load()
        } else {
          this.$message({
            type: 'error',
            message: res.msg
          })
        }
      })
    },
    cancel(id) {
      API.put("/api/order", {id: id, state: '已取消'}).then(res => {
        if (res.code === '0') {
          this.$message({
            type: 'success',
            message: '操作成功'
          })
          this.load()
        }
      })
    },
    del(id) {
      API.delete("/api/order/" + id).then(res => {
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
  .demo-table-expand {
    font-size: 0;
  }

  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }

  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>
