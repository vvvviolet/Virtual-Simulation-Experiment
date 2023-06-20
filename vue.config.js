'use strict'
// vue.config.js 配置说明
//官方vue.config.js 参考文档 https://cli.vuejs.org/zh/config/#css-loaderoptions
module.exports = {
    publicPath: process.env.NODE_ENV === "production" ? "/" : "/",
    // 在npm run build 或 yarn build 时 ，生成文件的目录名称（要和baseUrl的生产环境路径一致）（默认dist）
    outputDir: 'dist',
    devServer: {
        host: '0.0.0.0',
        port: 8001,
        open: true,
        proxy: {
            "/api": {
                target: 'http://localhost:9999',
                secure: false,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                },
            }
        },
        disableHostCheck: true
    },
}
