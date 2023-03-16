import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Template.vue'
import exp1_1 from '../views/exp-1-1.vue'
import exp1_2 from '../views/exp-1-2.vue'

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
      { path:'/exp1_2',component:exp1_2 }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
