import { defineStore } from 'pinia';
import http from './http';
import { ref } from 'vue';
import { Response } from '@/types';
import { RouteOption } from '@/router/interface';
import { addRoutes, removeRoute } from '@/router/dynamicRoutes';

export interface MenuProps {
  id?: number;
  name: string;
  path: string;
  title?: string;
  icon?: string;
  badge?: number | string;
  target?: '_self' | '_blank';
  link?: string;
  component: string;
  renderMenu?: boolean;
  permission?: string;
  parent?: string;
  children?: MenuProps[];
  cacheable: boolean;
}
 
export interface Experiment{
  id:number; // id 建议用十进制表示法 
  title:string; // 中文标题
  name:string; // 英文标题
  kind:string; // 大类名称
}

export const useMenuStore = defineStore('menu', () => {
  const menuList = ref<MenuProps[]>([]);
  const toRoutes = (list: MenuProps[]): RouteOption[] => {
    return list.map((item) => ({
      name: item.name,
      path: item.path,
      component: item.component,
      children: item.children && toRoutes(item.children),
      meta: {
        id: item.id,
        title: item.title,
        permission: item.permission,
        icon: item.icon,
        renderMenu: item.renderMenu,
        cacheable: item.cacheable,
        href: item.link,
        badge: /^(false|true)$/i.test(item.badge + '') ? JSON.parse(item.badge + '') : item.badge,
        target: item.target,
      },
    }));
  };
  const toMenu = (list: Experiment[]): MenuProps[] =>{
    let prevClass = 0
    const tmp = []
    list.map((item)=>{
      // prevClass=Math.round(item.id/10)
      // console.log(prevClass)
      // console.log('prev',prevClass)
      // console.log('(item.id/10)',(item.id/10))
      // console.log('Math.floor(item.id/10)',Math.floor(item.id/10))
      if(Math.floor(item.id/10)!=prevClass){
        prevClass = Math.floor(item.id/10)
        // console.log('now',prevClass)
        tmp.push({
          id: prevClass,
          name: `exp${prevClass}`,
          title: `${prevClass}-${item.kind}`,
          path:  `/exp${prevClass}`,
          component: `@/pages/exp${prevClass}`,
          target: '_blank',
          renderMenu: true,
          permission: null,
          children: [],
          cacheable: true,
        })    
      }
        tmp[tmp.length-1].children.push({
          id: item.id,
          name: item.name,
          title:item.title,
          path:  `/exp${prevClass}/${item.name}`,
          component: `@/pages/exp${prevClass}/${item.name.toUpperCase()}/index.vue`,
          target: '_self',
          renderMenu: true,
          cacheable: true,
        })
      })
    console.log('tmp',tmp)
    return tmp
  }
  async function getMenuList() {
    return http.request<Experiment, Response<Experiment[]>>('/menu/student_experiment', 'GET').then((res) => {
      const { data } = res;
      console.log(data)
      menuList.value = toMenu(data);
      // console.log(menuList.value)
      addRoutes(toRoutes(toMenu(data)));
      return data;
    });
  }
  // async function getMenuList() {
  //   return http.request<MenuProps, Response<MenuProps[]>>('/menu', 'GET').then((res) => {
  //     const { data } = res;
  //     console.log(res)
  //     menuList.value = data;
  //     addRoutes(toRoutes(data));
  //     return data;
  //   });
  // }

  async function addMenu(menu: MenuProps) {
    return http
      .request<any, Response<any>>('/menu', 'POST_JSON', menu)
      .then((res) => {
        return res.data;
      })
      .finally(getMenuList);
  }

  async function updateMenu(menu: MenuProps) {
    return http
      .request<any, Response<any>>('/menu', 'PUT_JSON', menu)
      .then((res) => {
        return res.data;
      })
      .finally(getMenuList);
  }

  async function removeMenu(id: number) {
    return http
      .request<any, Response<any>>('/menu', 'DELETE', { id })
      .then(async (res) => {
        if (res.code === 0) {
          removeRoute(res.data.name);
        }
      })
      .finally(getMenuList);
  }

  return {
    menuList,
    getMenuList,
    addMenu,
    updateMenu,
    removeMenu,
  };
});
