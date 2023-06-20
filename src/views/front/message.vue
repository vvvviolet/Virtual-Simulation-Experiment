<template>
  <div style="margin-top: 10px; margin-bottom: 80px">
    <el-card>
      <div style="padding: 20px; color: #888">
        <div>
          <el-input type="textarea" :rows="3" v-model="entity.content"></el-input>
          <div style="text-align: right; padding: 10px"><el-button type="primary" @click="save">留言</el-button></div>
        </div>
      </div>

      <div style="display: flex; padding: 20px" v-for="item in messages">
        <div style="text-align: center; flex: 1">
          <el-image :src="item.avatar" style="width: 60px; height: 60px; border-radius: 50%"></el-image>
        </div>
        <div style="padding: 0 10px; flex: 5">
          <div><b style="font-size: 14px">{{ item.username }}</b></div>
          <div style="padding: 10px 0; color: #888">
            {{ item.content }}
            <el-button type="text" size="mini" @click="del(item.id)" v-if="item.username === user.username">删除</el-button>
          </div>
          <div style="background-color: #eee; padding: 10px" v-if="item.parentMessage">{{ item.username }}：{{ item.parentMessage.content }}</div>
          <div style="color: #888; font-size: 12px">
            <span>{{ item.time  }}</span>
            <el-button type="text" style="margin-left: 20px" @click="reReply(item.id)">回复</el-button>
          </div>
        </div>
      </div>

      <el-dialog title="回复信息" :visible.sync="dialogFormVisible" width="30%"
                 :close-on-click-modal="false">
        <el-form :model="entity">
          <el-form-item label="内容" label-width="100px">
            <el-input v-model="entity.reply" autocomplete="off" type="textarea" :rows="3"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="cancel">取 消</el-button>
          <el-button type="primary" @click="reply">确 定</el-button>
        </div>
      </el-dialog>
    </el-card>


  </div>
</template>

<script>
import API from "@/utils/request";

export default {
  name: "Message",
  data() {
    return {
      user: {},
      messages: [],
      dialogFormVisible: false,
      isCollapse: false,
      entity: {}
    }
  },
  created() {
    this.user = sessionStorage.getItem("user") ? JSON.parse(sessionStorage.getItem("user")) : {};
    this.loadMessage();


  },
  methods: {
    handleCollapse() {
      this.isCollapse = !this.isCollapse;
    },
    logout() {
      $.get("/api/user/logout");
      sessionStorage.removeItem("user");
      location.href = "/page/end/login.html";
    },

    loadMessage() {
      API.get("/api/message/foreign/").then(res => {
        this.messages = res.data;
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

    save() {
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
    del(id) {
      API.delete("/api/message/" + id).then(res => {
        this.$message({
          message: "删除成功",
          type: "success"
        });
        this.loadMessage()
      })
    }
  }
}
</script>
