import { createApp } from 'vue'
import ElementPlus from 'element-plus';
import 'element-plus/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import './all.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'


const app = createApp(App)
app.use(ElementPlus).use(router)
app.mount('#app')


for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
app.component(key, component)
}