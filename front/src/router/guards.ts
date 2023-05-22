import { NavigationGuard, NavigationHookAfter } from 'vue-router';
import http from '@/store/http';
import { useAccountStore, useMenuStore } from '@/store';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
NProgress.configure({ showSpinner: false });

const loginGuard: NavigationGuard = async function (to, from) {
  const account = useAccountStore();
  if (!http.checkAuthorization() && !/^\/login?$/.test(to.fullPath)) {
    return '/login';
    // account.setLogged(false);
  } else {
    if (useMenuStore().menuList.length == 0 && !to.path.includes('/login')) {
      await useMenuStore().getMenuList();
      return to.path;
    }
  }
};

const progressStart: NavigationGuard = function (to, from) {
  NProgress.start();
};

const progressEnd: NavigationHookAfter = function (to, from) {
  NProgress.done();
};

export default {
  before: [progressStart, loginGuard],
  after: [progressEnd],
};
