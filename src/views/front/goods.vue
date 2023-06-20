<template>
  <div>

    <div style="margin-top: 10px">
      <!-- 商品 -->
      <el-row :gutter="10">
        <!-- 图片 -->
        <el-col :span="8">
          <el-card>
            <div>
              <el-image :src="mainImg" style="border-radius: 5px;"></el-image>
            </div>
            <div
                style="margin-top: 20px; display: flex;  flex-wrap: wrap; flex-direction: row; justify-content: flex-start">
              <div style="flex: 1; padding: 5px" v-for="(item, index) in goods.imgs" :key="item">
                <el-image style="width: 60px; height: 60px; border-radius: 3px;" fit="contain" :src="item"
                          @mouseover="show(item)"></el-image>
              </div>
            </div>
          </el-card>
        </el-col>

        <!-- 商品细节 -->
        <el-col :span="16">
          <el-card>
            <div style="padding: 10px 0; font-size: 24px; font-weight: bold; font-family: '楷体'; color: #5D4C46">{{ goods.name }}</div>
            <div style="padding: 10px 0; font-size: 16px; font-family: '宋体'; color: #8A5433">{{ goods.description }}</div>
            <div style="padding: 10px 0; font-size: 16px; font-family: '宋体'; color: #8A5433;">
              <span>拍卖时间</span>
              <span style="margin-left: 20px; color: #8A5433">{{ goods.createTime }}</span>
            </div>

            <div style="padding: 10px 0">
              <span style="font-size: 16px; font-family: '宋体'; color: #8A5433">拍卖价格</span>
              <span style="margin-left: 10px; color: #8A5433; font-size: 24px; font-weight: bold; font-family: '宋体'">￥ {{ goods.realPrice }}</span>
            </div>

            <div style="padding: 10px 0; font-size: 16px; font-family: '宋体'; color: #8A5433">
              市场库存：{{ goods.store }}
            </div>
            <div style="padding: 20px 0; font-size: 16px; font-family: '宋体'; color: #5D4C46; text-align: justify; line-height: 1.5em;">
              这件古董拍卖品源自清朝，经过岁月沉淀，历史底蕴丰富。其工艺精湛，雕刻细腻，是古董收藏界的瑰宝。古董收藏不仅能够领略古人的智慧结晶，还具有很高的投资价值。收藏这件古董，您将拥有一段难忘的历史记忆，成为独具鉴赏力的藏家。拍卖会上，众多收藏家竞相出价，展现了这件古董的无尽魅力。此次拍卖会的成功举办，为古董拍卖市场注入了新的活力，更让藏家们领略了古董艺术的独特韵味。
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
  name: "Goods",
  data() {
    return {
      messages: [],
      dialogFormVisible: false,
      entity: {},
      address: '',
      mainImg: '',
      cartIcon: require('../../assets/购物车-23.png'),
      praiseActiveIcon: require("../../assets/点赞-激活.png"),
      collectActiveIcon: require("../../assets/收藏-激活.png"),
      num: 1,
      id: 1,
      user: {},
      goods: {imgs: []},
      praiseFlag: false
    };
  },
  created() {
    this.user = sessionStorage.getItem("user") ? JSON.parse(sessionStorage.getItem("user")) : {}
    this.id = this.$route.query.id
    this.load()
  },
  methods: {
    collect() {
      API.post("/api/collect", {
        goodsName: this.goods.name,
        goodsImg: this.goods.imgs[0],
        goodsId: this.goods.id,
        userId: this.user.id
      }).then(res => {
        if (res.code === '0') {
          this.$message({
            message: "收藏成功",
            type: "success"
          });
        } else {
          this.$message({
            message: res.msg,
            type: "error"
          });
        }
        this.load();
      })
    },
    praise() {
      if (this.praiseFlag) {
        this.$message({
          message: "您已点过赞",
          type: "warning"
        });
        return
      }
      this.praiseFlag = true
      this.entity = JSON.parse(JSON.stringify(this.goods))
      this.entity.praise += 1
      this.entity.imgs = null
      API.put("/api/goods", this.entity).then(res => {
        if (res.code === '0') {
          this.$message({
            message: "点赞成功",
            type: "success"
          });
        } else {
          this.$message({
            message: res.msg,
            type: "error"
          });
        }
        this.load();
      })
    },
    loadMessage() {
      API.get("/api/message/foreign/" + this.goods.id).then(res => {
        this.messages = res.data;
      })
    },
    buyNow() {
      if ((this.goods.store - this.num) < 0) {
        this.$message({
          type: 'warning',
          message: '商品库存不足！'
        })
        return
      }
      let cart = []
      cart.push({count: this.num, goods: this.goods, goodsId: this.goods.id})
      this.$store.commit("setCarts", cart)
      this.$router.replace("/front/preOrder")
    },
    save() {  // 新增评论
      if (!this.user.username) {
        this.$message({
          message: "请登录",
          type: "warning"
        });
        return;
      }
      if (!this.entity.content) {
        this.$message({
          message: "请填写内容",
          type: "warning"
        });
        return;
      }
      API.post("/api/message", this.entity).then(res => {
        if (res.code === '0') {
          this.$message({
            message: "评论成功",
            type: "success"
          });
        } else {
          this.$message({
            message: res.msg,
            type: "error"
          });
        }
        this.entity = {}
        this.loadMessage();
        this.dialogFormVisible = false;
      })
    },
    cancel() {
      this.dialogFormVisible = false;
      this.entity = {};
    },
    reReply(id) {
      this.dialogFormVisible = true;
      this.entity.parentId = id;
    },
    reply() {
      this.entity.content = this.entity.reply;
      this.save();
    },
    del(id) {
      API.delete("/api/message/" + id).then(res => {
        this.$message({
          message: "删除成功",
          type: "success"
        });
        this.loadMessage()
      })
    },
    addCart() {
      if (!this.user.id) {
        this.$message({
          type: 'warning',
          message: '请登录！'
        })
        return
      }
      if ((this.goods.store - this.num) < 0) {
        this.$message({
          type: 'warning',
          message: '商品库存不足！'
        })
        return
      }
      API.post("/api/cart", {goodsId: this.goods.id, count: this.num, userId: this.user.id}).then(res => {
        if (res.code === '0') {
          this.$message({
            type: 'success',
            message: '加入成功！'
          })
        } else {
          this.$message({
            type: 'error',
            message: res.msg
          })
        }
      })
    },
    show(img) {
      this.mainImg = img
      console.log(img)
    },
    load() {
      API.get("/api/goods/" + this.id).then(res => {
        this.goods = res.data

        this.loadMessage()

        // 处理图片
        if (!this.goods.imgs) {
          this.goods.imgs = ['']
        } else {
          this.goods.imgs = JSON.parse(this.goods.imgs)
        }
        this.mainImg = this.goods.imgs[0]
      })
    },
  },
};
</script>

<style scoped>
.el-card {
  border-radius: 8px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  background-color: #F4F1E9;
}

.el-image {
  cursor: pointer;
}
</style>
