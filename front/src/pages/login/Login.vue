<template>
  <div class="login h-[800px] flex items-center justify-center">
    <login-box class="shadow-lg" @success="onLoginSuccess" />
  </div>
</template>
<script lang="ts" setup>
  import LoginBox from './LoginBox.vue';
  import { useRouter } from 'vue-router';
  import { reactive, ref } from 'vue';
  import { useAccountStore, useMenuStore, useSettingStore, storeToRefs } from '@/store';

  const { logout, profile } = useAccountStore();
  
  const router = useRouter();

  function onLoginSuccess() { 
    router.push('/system/menu');
    profile().then((response) => {
    const { account } = response;
    console.log('login',account)

    // TODO: 更新顶部菜单栏的状态信息，这一句没用
    user.name = account.name;
  }) 
  }
  const { navigation, useTabs, theme, contentClass } = storeToRefs(useSettingStore());
  const showSetting = ref(false);
  const user = reactive({
    name: '',
    // avatar: avatar,
    menuList: [
      // { title: '个人中心', key: 'personal', icon: 'UserOutlined', onClick: () => router.push('/profile') },
      { title: '设置', key: 'setting', icon: 'SettingOutlined', onClick: () => (showSetting.value = true) },
      { type: 'divider' },
      {
        title: '退出登录',
        key: 'logout',
        icon: 'LogoutOutlined',
        onClick: () => logout().then(() => router.push('/login')),
      },
    ],
  });
</script>
<style scoped lang="less">
  .login {
  }
</style>
