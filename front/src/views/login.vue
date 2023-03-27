<template>
  <div class="login-container">
    <el-form ref="loginForm" :model="loginForm" class="login-form">
      <h1 style="text-align:center">虚拟仿真实验平台</h1>
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="loginForm.email" placeholder="请输入邮箱"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="loginForm.password" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item>
        <div class="login-button-wrapper">
          <el-button type="primary" @click="submitLoginForm">登录</el-button>

        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { ref } from 'vue';
import { ElForm, ElFormItem, ElInput, ElButton } from 'element-plus';

export default {
  components: {
    ElForm,
    ElFormItem,
    ElInput,
    ElButton,
  },
  setup() {
    const loginForm = ref({
      email: '',
      password: '',
    });

    const submitLoginForm = () => {
      // 处理登录逻辑
    };

    return {
      loginForm,
      submitLoginForm,
    };
  },
};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.login-form {
  width: 400px;
}

.login-button-wrapper {
  display: flex;
  justify-content: space-around;
  align-items: space-around;
}
::v-deep .el-form-item__content {
  display:block;
}
</style>
