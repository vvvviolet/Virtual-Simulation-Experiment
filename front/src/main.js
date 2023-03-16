import { createApp } from 'vue'
import ElementPlus from 'element-plus';
import 'element-plus/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import './all.css'

const app = createApp(App)
app.use(ElementPlus).use(router)
app.mount('#app')
