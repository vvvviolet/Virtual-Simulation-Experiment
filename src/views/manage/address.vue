<template>
  <div>
    <div style="padding: 5px 0">
      <el-input v-model="text" @keyup.enter.native="load" style="width: 200px"> <i slot="prefix" class="el-input__icon el-icon-search"></i></el-input>
      <el-button @click="add" type="primary" size="mini" style="margin: 10px">新增</el-button>
    </div>
    <el-table :data="tableData" border stripe style="width: 100%">
      <el-table-column prop="id" label="ID" width="100" sortable> </el-table-column>
      <el-table-column prop="linkUser" label="联系人"></el-table-column>
      <el-table-column prop="linkAddress" label="联系地址"></el-table-column>
      <el-table-column prop="linkPhone" label="联系电话"></el-table-column>
      <el-table-column prop="userId" label="关联用户id"></el-table-column>

      <el-table-column
          fixed="right"
          label="操作"
          width="200">
        <template slot-scope="scope">
          <el-button type="primary" icon="el-icon-edit" circle  @click="edit(scope.row)"></el-button>
          <el-popconfirm
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
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
    </div>

    <!-- 弹窗   -->
    <el-dialog title="信息" :visible.sync="dialogFormVisible" width="30%"
               :close-on-click-modal="false">
      <el-form :model="entity">
        <el-form-item label="联系人" label-width="150px">
          <el-input v-model="entity.linkUser" autocomplete="off" style="width: 80%"></el-input>
        </el-form-item>
        <el-form-item label="联系地址" label-width="150px">
          <el-input v-model="entity.linkAddress" autocomplete="off" style="width: 80%"></el-input>
        </el-form-item>
        <el-form-item label="联系电话" label-width="150px">
          <el-input v-model="entity.linkPhone" autocomplete="off" style="width: 80%"></el-input>
        </el-form-item>
        <el-form-item label="关联用户" label-width="150px">
          <el-select v-model="entity.userId" value-key="id" placeholder="请选择用户">
            <el-option
                v-for="item in users"
                :key="item.id"
                :label="item.nickName"
                :value="item.id">
            </el-option>
          </el-select>
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
const url = "/api/address/"

export default {
  name: "Address",
  data() {
    return {
      fileList: [],
      options: [],
      text: '',
      user: {},
      tableData: [],
      pageNum: 1,
      pageSize: 10,
      entity: {},
      total: 0,
      dialogFormVisible: false,
      users: []
    };
  },
  created() {
    this.user = sessionStorage.getItem("user") ? JSON.parse(sessionStorage.getItem("user")) : {}
    this.$emit('user', this.user);
    this.load()
    API.get("/api/user").then(res => {
      this.users = res.data
    })
  },
  methods: {
    fileSuccessUpload(res) {
      this.entity.file = "http://localhost:9999/files/" + res.data;
      this.fileList = [res.data]
      console.log(res)
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
    },
    add() {
      this.entity = {}
      this.fileList = []
      this.dialogFormVisible = true
    },
    edit(obj) {
      this.entity = JSON.parse(JSON.stringify(obj))
      this.fileList = []
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
        })
      }
    },
    del(id) {
      API.delete(url + id).then(res => {
        this.$message({
          type: "success",
          message: "操作成功"
        })
        this.load()
      })
    }
  },
};
</script>

<style scoped>
</style>
