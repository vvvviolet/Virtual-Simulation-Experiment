import Mock from 'mockjs';

const presetList = [
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
        name: 'IFPUG',
        title: 'IFPUG方法',
        target: '_self',
        path: '/exp1/ifpug',
        component: '@/pages/exp1/IFPUG/index.vue',
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
        component: '@/pages/exp1/NESMA/index.vue',
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
        component: '@/pages/exp1/MARKII/index.vue',
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
        component: '@/pages/exp1/COSMIC/index.vue',
        renderMenu: true,
        permission: null,
        cacheable: true,
      },
      {
        id: 15,
        name: 'TANPAIFANG',
        title: '碳排放交易配额优化算法',
        target: '_self',
        path: '/exp1/tanpaifang15',
        component: '@/pages/exp1/TANPAIFANG15/index.vue',
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
    id: 6,
    name: 'exp6',
    title: '碳排放权供需实验',
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
        name: '碳排放权供需实验',
        title: '碳排放权供需方法',
        target: '_self',
        path: '/exp6/tanpaifang',
        component: '@/pages/exp6/Exp6_TANPAIFANG/index.vue',
        renderMenu: true,
        permission: null,
        cacheable: true,
      }
    ]
  },
  {
    id: 10,
    name: 'exp10',
    title: '软件项目进度监督与控制实验',
    target: '_self',
    path: '/exp10',
    component: '@/pages/exp10/Exp10.vue',
    renderMenu: true,
    parent: null,
    permission: null,
    cacheable: true,
    children: [
      {
        id: 101,
        name: 'exp10_eva',
        title: 'Earned Value Analysis 挣值分析法',
        target: '_self',
        path: '/exp10/Exp10',
        component: '@/pages/exp10/Exp10',
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
