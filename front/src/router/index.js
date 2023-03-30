import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Template.vue'
import exp1_1 from '../views/exp-1-1.vue'
import exp1_2 from '../views/exp-1-2.vue'
import exp3 from '../views/exp-3.vue'
import login from '../views/login'
import showpdf from '../views/showpdf.vue'

const routes = [
  {
    path: '/',
    redirect:'/home'
  },
  {
    path: '/home',
    component: Home,
    children: [
      { path:'/exp1_1',component:exp1_1 },
      { path:'/exp1_2', component: exp1_2 },
      { path:'/exp3',component:exp3 }
    ]
  },
  {
    path:'/show',
    component:showpdf
  },
  {
    path:'/login',
    component:login
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
