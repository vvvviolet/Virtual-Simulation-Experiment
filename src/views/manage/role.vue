<template>
  <div>
    <div style="padding: 5px 0">
      <el-input v-model="text" @keyup.enter.native="load" style="width: 200px"><i slot="prefix"
                                                                                  class="el-input__icon el-icon-search"></i>
      </el-input>
      <el-button @click="add" type="primary" size="mini" style="margin: 10px">新增</el-button>
    </div>
    <el-table
        :data="tableData"
        border
        style="width: 100%">
      <el-table-column prop="id" label="ID"></el-table-column>
      <el-table-column prop="name" label="角色名称"></el-table-column>
      <el-table-column prop="description" label="描述"></el-table-column>
      <el-table-column
          label="权限">
        <template slot-scope="scope">
          <el-select v-model="scope.row.permission" value-key="id" multiple placeholder="请选择"
                     @change="changePer(scope.row)">
            <el-option
                v-for="item in options"
                :key="item.id"
                :label="item.name"
                :value="item.id">
            </el-option>
          </el-select>
        </template>
      </el-table-column>
      <el-table-column
          fixed="right"
          label="操作"
          width="150">
        <template slot-scope="scope">
          <el-button @click="edit(scope.row)" type="text" size='mini'>编辑</el-button>
          <el-popconfirm
              @confirm="del(scope.row.id)"
              title="确定删除？"
          >
            <el-button style="margin-left: 10px" size='mini' type="text" slot="reference">删除</el-button>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <div style="background-color: white">
      <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="pageNum"
          :page-sizes="[5, 10, 20, 40]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total">
      </el-pagination>
    </div>

    <!-- 弹窗   -->
    <el-dialog title="角色信息" :visible.sync="dialogFormVisible" width="30%"
               :close-on-click-modal="false" :close-on-press-escape="false" :show-close="false">
      <el-form :model="entity">
        <el-form-item label="角色名称" label-width="150px">
          <el-input v-model="entity.name" autocomplete="off" style="width: 80%"></el-input>
        </el-form-item>
        <el-form-item label="描述" label-width="150px">
          <el-input v-model="entity.description" autocomplete="off" style="width: 80%"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="save">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import API from '../../utils/request'
import {resetRouter} from "@/router";
import {setMenu} from "@/utils/manage";

const url = "/api/role/"

export default {
  name: "Role",
  data() {
    return {
      options: [],
      text: '',
      user: {},
      tableData: [],
      pageNum: 1,
      pageSize: 10,
      total: 0,
      entity: {},
      dialogFormVisible: false
    };
  },
  created() {
    this.user = sessionStorage.getItem("user") ? JSON.parse(sessionStorage.getItem("user")) : {}
    this.load()
  },
  methods: {
    changePer(obj) {
      this.entity = JSON.parse(JSON.stringify(obj));
      this.save();
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
      API.get(url + "/page", {
        params: {
          pageNum: this.pageNum,
          pageSize: this.pageSize,
          name: this.text
        }
      }).then(res => {
        this.tableData = res.data.records || []
        this.total = res.data.total
      })

      API.get("/api/permission").then(res => {
        this.options = res.data
      })
    },
    add() {
      this.entity = {}
      this.dialogFormVisible = true
    },
    edit(obj) {
      this.entity = JSON.parse(JSON.stringify(obj))
      this.dialogFormVisible = true
    },
    save() {
      if (!this.entity.id) {
        API.post(url, this.entity).then(res => {
          if (res.code === '0') {
            this.$message({
              type: "success",
              message: "操作成功"
            })
          } else {
            this.$message({
              type: "error",
              message: res.msg
            })
          }
          this.load()
          this.dialogFormVisible = false

          // 重新请求用户基础数据
          API.get("/api/user/" + this.user.id).then(res => {
            let token = this.user.token
            this.user = res.data
            this.user.token = token
            sessionStorage.setItem("user", JSON.stringify(this.user))
            // 重置路由
            resetRouter(JSON.parse(JSON.stringify(res.data.permission)))
            /// 设置菜单
            this.$emit('call');
          })
        })
      } else {
        API.put(url, this.entity).then(res => {
          if (res.code === '0') {
            this.$message({
              type: "success",
              message: "操作成功"
            })
          } else {
            this.$message({
              type: "error",
              message: res.msg
            })
          }
          this.load()
          this.dialogFormVisible = false

          // 重新请求用户基础数据
          API.get("/api/user/" + this.user.id).then(res => {
            let token = this.user.token
            this.user = res.data
            this.user.token = token
            sessionStorage.setItem("user", JSON.stringify(this.user))
            // 重置路由
            resetRouter(JSON.parse(JSON.stringify(res.data.permission)))
            /// 设置菜单
            this.$emit('call');
          })
        })
      }
    },
    del(id) {
      API.delete(url + id).then(res => {
        if (res.code === '0') {
          this.$message({
            type: "success",
            message: "操作成功"
          })
        } else {
          this.$message({
            type: "error",
            message: res.msg
          })
        }
        this.load()
      })
    }
  },
};
</script>

<style scoped>
</style>
