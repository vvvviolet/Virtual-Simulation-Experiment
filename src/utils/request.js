import axios from 'axios'
import router from '../router'
import Vue from 'vue'

// 定义后台访问路径
const BASE_URL = "http://localhost:9999/"

// const BASE_URL = "http://47.92.33.205:9999/"

// create an axios instance
const API = axios.create({
    baseURL: BASE_URL, // url = base url
    timeout: 60000 // request timeout
});

// request 拦截器
// 可以自请求发送前对请求做一些处理
// 比如统一加token，对请求参数统一加密
API.interceptors.request.use(config => {
    config.headers['Content-Type'] = 'application/json;charset=utf-8';
    let user = sessionStorage.getItem("user") || '{}';
    user = JSON.parse(user);
    config.headers['token'] = user.token;
    return config
}, error => {
    return Promise.reject(error)
});

// response 拦截器
// 可以在接口响应后统一处理结果
API.interceptors.response.use(
    response => {
        let res = response.data;
        // 如果是返回的文件
        if (response.config.responseType === 'blob') {
            return res
        }
        // 兼容服务端返回的字符串数据
        if (typeof res === 'string') {
            res = res ? JSON.parse(res) : res
        }
        if (res.code === '401') {
            // 清除缓存
            sessionStorage.removeItem("user");
            router.push({path: '/front/home'});
            return res;
        }
        return res;
    },
    error => {
        console.log('err' + error) // for debug
        return Promise.reject(error)
    }
)


export default API
