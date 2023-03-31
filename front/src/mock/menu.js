import Mock from 'mockjs';

const presetList = [
  {
    id: 111,
    name: 'system',
    title: '系统配置',
    icon: 'SettingOutlined',
    badge: '',
    target: '_self',
    path: '/system',
    component: '@/components/layout/BlankView.vue',
    renderMenu: true,
    parent: null,
    permission: null,
    cacheable: true,
    children:[
      {
        id: 1111,
        name: 'menu',
        title: '菜单管理',
        badge: '12',
        target: '_self',
        path: '/system/menu',
        component: '@/pages/system',
        renderMenu: true,
        parent: 'system',
        permission: null,
        cacheable: true,
      }
    ]
  },
  {
    id: 112,
    name: 'bilibili',
    title: 'B站',
    icon: 'BoldOutlined',
    badge: 'iframe',
    target: '_self',
    path: '/bilibili',
    component: 'iframe',
    renderMenu: true,
    permission: 'edit',
    cacheable: true,
    link: 'https://www.bilibili.com',
  },
  {
    id: 1,
    name: 'exp1',
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
        name: 'exp6_decision_tree',
        title: '决策树实验',
        target: '_self',
        path: '/exp6/decision_tree',
        component: '@/pages/exp6/Exp6_decision_tree',
        renderMenu: true,
        permission: null,
        cacheable: true,
      }
    ]
  },
  {
    id: 2,
    name: 'exp1',
    title: '软件开发成本估算实验',
    target: '_self',
    path: '/exp1',
    component: '@/pages/exp1',
    renderMenu: true,
    parent: null,
    permission: null,
    cacheable: true,
    children: [
      {
        id: 21,
        name: 'exp6_decision_tree',
        title: '决策树实验',
        target: '_self',
        path: '/exp6/decision_tree',
        component: '@/pages/exp6/Exp6_decision_tree',
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
    component: '@/pages/exp6/Exp6.vue',
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
        component: '@/pages/exp6/Exp6_decision_tree',
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
  // } else {
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
    message: 'success',
    code: 0,
    data: menuList.filter((menu) => !menu.parent),
  };
});

Mock.mock('api/menu', 'put', ({ body }) => {
  const menu = JSON.parse(body);
  saveMenu(menu);
  return {
    code: 0,
    message: 'success',
  };
});

Mock.mock('api/menu', 'post', ({ body }) => {
  const menu = JSON.parse(body);
  saveMenu(menu);
  return {
    code: 0,
    message: 'success',
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
    message: 'success',
    data: removed,
  };
});
