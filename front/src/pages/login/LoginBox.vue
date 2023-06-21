<template>
  <div class="login-box">
    <a-form :model="form" :wrapperCol="{ span: 24 }" @finish="login" class="login-form">
      <h1>虚拟仿真实验平台</h1>
      <a-form-item :required="true" name="username">
        <a-input
          v-model:value="form.username"
          autocomplete="new-username"
          placeholder="请输入用户名或邮箱"
          class="login-input"
        />
      </a-form-item>
      <a-form-item :required="true" name="password">
        <a-input
          v-model:value="form.password"
          autocomplete="new-password"
          placeholder="请输入登录密码"
          class="login-input"
          type="password"
        />
      </a-form-item>
      <a-button htmlType="submit" class="login-button bg-primary-600" type="primary" :loading="loading" @click="$event=>{login}">
        登录
      </a-button>
      <a-divider></a-divider>
      <div class="terms">
        登录即代表您同意我们的
        <span class="font-bold">用户条款 </span>、<span class="font-bold"> 数据使用协议 </span>、以及
        <span class="font-bold">Cookie使用协议</span>。
      </div>
    </a-form>
    <div>
    <a-modal v-model:visible="visible" title="重设密码" @ok="handleOk">
      <a-form :model="activateForm" :wrapperCol="{ span: 24 }" @finish="login" class="activate-form">
      <a-form-item :required="true" name="username">
        <a-input
          v-model:value="activateForm.username"
          autocomplete="new-username"
          placeholder="请输入用户名或邮箱"
          class="login-input"
        />
      </a-form-item>
      <a-form-item :required="true" name="password">
        <a-input
          v-model:value="activateForm.password"
          autocomplete="new-password"
          placeholder="请输入新密码"
          class="login-input"
          type="password"
        />
      </a-form-item>
      <a-form-item :required="true" name="code">
        <a-input
          v-model:value="activateForm.activateCode"
          autocomplete=""
          placeholder="请输入激活码"
          class="login-input"
          type="login-input"
        />
      </a-form-item>
    </a-form>
    </a-modal>
  </div>
  </div>
</template>
<script lang="ts" setup>
  import { reactive, ref, onMounted } from 'vue';
  import { useAccountStore } from '@/store';
  import useThemeStore from 'stepin/es/theme-editor/store';
  const visible = ref<boolean>(false);

  const showModal = () => {
      visible.value = true;
    };

  const hideModal = () => {
      visible.value = false;
    };

    const handleOk = (e) => {
      visible.value = false;
      console.log(activateForm);
      accountStore.activate(activateForm.username,activateForm.password,activateForm.activateCode)
      .then((res)=>{
        if(res.code===400){
          alert(res.msg)
        }
        else{
          alert(res.data)
        }
        console.log(res.data)
      })
    };
  export interface LoginFormProps {
      username: string;
      password: string;
    }

  const { setBgSeriesColors } = useThemeStore();

  onMounted(() => {
    setBgSeriesColors({ 'bg-base': '#fff' }, true, '.login-box');
  });

  const loading = ref(false);

  const form = reactive({
    username: undefined,
    password: undefined,
  });
  const activateForm = reactive({
    username: form.username,
    password: undefined,
    activateCode: undefined
  });

  const emit = defineEmits<{
    (e: 'success', fields: LoginFormProps): void;
    (e: 'failure', reason: string, fields: LoginFormProps): void;
  }>();

  const accountStore = useAccountStore();
  function login(params: LoginFormProps) {
    // console.log(params)
    loading.value = true;
    accountStore
      .login(params.username, params.password)
      .then((res) => {
        if (res.code === 0) {
          emit('success', params);
          } else if (res.code===1){
            alert(res.msg)
            showModal()
        }
      })
      .catch((e) => {
        
        emit('failure', e.message, params);
      })
      .finally(() => (loading.value = false));
  }


</script>
<style lang="less" scoped>
  .login-box {
    .login-form {
      width: 440px;
      @apply py-12 h-fit border-border px-10 rounded-sm text-text bg-container;
      .third-platform {
        .third-title {
          @apply text-left mb-md;
          font-size: 16px;
        }
        .third-list {
          @apply flex;
          .icon {
            @apply text-gray-400 flex-1 hover:text-primary-500 cursor-pointer;
            font-size: 28px;
            &.wechat {
              @apply hover:text-green-600;
            }
            &.twitter {
              @apply hover:text-blue-400;
            }
            &.qq {
              @apply hover:text-red-600;
            }
          }
        }
      }
      .login-input,
      .login-button {
        @apply rounded;
        margin-top: 16px;
        height: 40px;
        width: 100%;
      }
      .terms {
      }
    }
  }
</style>
