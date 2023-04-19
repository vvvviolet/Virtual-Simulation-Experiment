import Mock from 'mockjs';

const presetList = [
  // {
  //   id: 111,
  //   name: 'system',
  //   title: '系统配置',
  //   icon: 'SettingOutlined',
  //   badge: '',
  //   target: '_self',
  //   path: '/system',
  //   component: '@/components/layout/BlankView.vue',
  //   renderMenu: true,
  //   parent: null,
  //   permission: null,
  //   cacheable: true,
  //   children:[
  //     {
  //       id: 1111,
  //       name: 'menu',
  //       title: '菜单管理',
  //       badge: '12',
  //       target: '_self',
  //       path: '/system/menu',
  //       component: '@/pages/system',
  //       renderMenu: true,
  //       parent: 'system',
  //       permission: null,
  //       cacheable: true,
  //     }
  //   ]
  // },
  // {
  //   id: 222,
  //   name: 'bilibili',
  //   title: 'B站',
  //   icon: 'BoldOutlined',
  //   badge: 'iframe',
  //   target: '_self',
  //   path: '/bilibili',
  //   component: 'iframe',
  //   renderMenu: true,
  //   permission: 'edit',
  //   cacheable: true,
  //   link: 'https://www.bilibili.com',
  // },
  {
    id: 99990,
    name: 'exp0',
    title: '实验模板',
    target: '_self',
    path: '/exp0',
    component: '@/pages/exp0', 
    renderMenu: true,
    parent: null,
    permission: null,
    cacheable: true,
    children: [
      {
        id: 99991,
        name: 'exp0_TEST0',
        title: '测试实验0-子标题',
        target: '_self',
        path: '/exp0/test0',
        component: '@/pages/exp0/Exp0_TEST0/index.vue',
        renderMenu: true,
        permission: null,
        cacheable: true,
      },
      {
        id: 99992,
        name: 'exp0_TEST1',
        title: '测试实验1-子标题',
        target: '_self',
        path: '/exp0/test1',
        component: '@/pages/exp0/Exp0_TEST1/index.vue',
        renderMenu: true,
        permission: null,
        cacheable: true,
      }
    ]
  },
  {
    id: 1,
    name: 'exp1',
    // title: '软件规模估算实验(FP方法)',
    title: '软件规模估算实验(FP方法)',
    target: '_self',
    path: '/exp1',
    component: '@/pages/exp1',
    renderMenu: true,
    parent: null,
    permission: null,
    cacheable: true,
    children: [
      {
        id: 11,
        name: 'IFPUG',
        title: 'IFPUG方法',
        target: '_self',
        path: '/exp1/ifpug',
        component: '@/pages/exp1/Exp1_IFPUG/index.vue',
        renderMenu: true,
        permission: null,
        cacheable: true,
      },
      {
        id: 12,
        name: 'NESMA',
        title: 'NESMA方法',
        target: '_self',
        path: '/exp1/nesma',
        component: '@/pages/exp1/Exp1_NESMA/index.vue',
        renderMenu: true,
        permission: null,
        cacheable: true,
      },
      {
        id: 13,
        name: 'MARKII',
        title: 'MARKII方法',
        target: '_self',
        path: '/exp1/markii',
        component: '@/pages/exp1/Exp1_MARKII/index.vue',
        renderMenu: true,
        permission: null,
        cacheable: true,
      },
      {
        id: 14,
        name: 'COSMIC',
        title: 'COSMIC方法',
        target: '_self',
        path: '/exp1/cosmic',
        component: '@/pages/exp1/Exp1_COSMIC/index.vue',
        renderMenu: true,
        permission: null,
        cacheable: true,
      },
    ]
  },
  {
    id: 2,
    name: 'exp2',
    title: '软件开发成本估算实验',
    target: '_self',
    path: '/exp2',
    component: '@/pages/exp2',
    renderMenu: true,
    parent: null,
    permission: null,
    cacheable: true,
    children: [
      {
        id: 21,
        name: 'exp2_chengbengusuan',
        title: '开发成本估算实验1',
        target: '_self',
        path: '/exp2/chengbengusuan',
        component: '@/pages/exp6/Exp2_Chengbengusuan',
        renderMenu: true,
        permission: null,
        cacheable: true,
      }
    ]
  },
  
  {
    id:5,
    name: 'exp5',
      title: '软件工程经济学方法应用',
    target: '_self',
    path: '/exp5',
    component: '@/pages/exp5/Exp5.vue',
    renderMenu: true,
    parent: null,
    permission: null,
    cacheable: true,
    children: [
        {
            id: 51,
            name: 'exp5_single_scheme_economic_evaluation',
            title: '单方案经济评价实验',
            target: '_self',
            path: '/exp5/single_scheme_economic_evaluation',
            component: '@/pages/exp5/Exp5_SINGLE_SCHEME/index.vue',
            renderMenu: true,
            permission: null,
            cacheable: true,
        }
    ]
  },
  {
    id: 6,
    name: 'exp6',
    title: '软件项目/产品的风险影响与评价实验',
    target: '_self',
    path: '/exp6',
    component: '@/pages/exp6',
    renderMenu: true,
    parent: null,
    permission: null,
    cacheable: true,
    children: [
      {
        id: 61,
        name: 'exp6_decision_tree',
        title: '决策树实验',
        target: '_self',
        path: '/exp6/decision_tree',
        component: '@/pages/exp6/Exp6_decision_tree/index.vue',
        renderMenu: true,
        permission: null,
        cacheable: true,
      }
    ]

  },
  
];

function getMenuList() {
  const menuStr = localStorage.getItem('stepin-menu');
  let menuList = [];
  // if (!menuStr) {
    menuList = presetList;
    localStorage.setItem('stepin-menu', JSON.stringify(menuList));
  // } else {w
    // menuList = JSON.parse(menuStr);
  // }
  return menuList;
}

function saveMenu(menu) {
  const menuList = getMenuList();
  if (!menu.id) {
    menu.id = menuList.map((item) => item.id).reduce((p, c) => Math.max(p, parseInt(c)), 0) + 1;
  }
  const index = menuList.findIndex((item) => item.id === menu.id);
  if (index === -1) {
    menuList.push(menu);
  } else {
    menuList.splice(index, 1, menu);
  }
  localStorage.setItem('stepin-menu', JSON.stringify(menuList));
}

Mock.mock('api/menu', 'get', ({}) => {
  let menuList = getMenuList();
  const menuMap = menuList.reduce((p, c) => {
    p[c.name] = c;
    return p;
  }, {});
  menuList.forEach((menu) => {
    menu.renderMenu = !!menu.renderMenu;
    if (menu.parent) {
      const parent = menuMap[menu.parent];
      parent.children = parent.children ?? [];
      parent.children.push(menu);
    }
  });
  return {
    msg: 'success',
    code: 0,
    data: menuList.filter((menu) => !menu.parent),
  };
});

Mock.mock('api/menu', 'put', ({ body }) => {
  const menu = JSON.parse(body);
  saveMenu(menu);
  return {
    code: 0,
    msg: 'success',
  };
});

Mock.mock('api/menu', 'post', ({ body }) => {
  const menu = JSON.parse(body);
  saveMenu(menu);
  return {
    code: 0,
    msg: 'success',
  };
});

Mock.mock('api/menu', 'delete', ({ body }) => {
  const id = body.get('id')[0];
  let menuList = getMenuList();
  const index = menuList.findIndex((menu) => menu.id === id);
  const [removed] = menuList.splice(index, 1);
  localStorage.setItem('stepin-menu', JSON.stringify(menuList));
  return {
    code: 0,
    msg: 'success',
    data: removed,
  };
});
