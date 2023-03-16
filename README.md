## Virtual-Simulation-Experiment（VSE） 项目总规范
每个组一个分支，分支命名格式为组号_组名，例如第一组，小组名欢乐斗地组，那么分支名为1_huanledoudizu

## 前端规范
统一采用Vue3+ElementUI-plus（https://element-plus.gitee.io/zh-CN/）
总体平台框架大致如下（每个组写自己实验的一个页面）：
![layout](https://raw.githubusercontent.com/vvvviolet/Virtual-Simulation-Experiment/main/Images/%E5%89%8D%E7%AB%AF%E5%B8%83%E5%B1%80.png)

文件夹 src 中：

router（路由）：index.js 中将每个实验页面注册到主页面children中

views（各个具体实验页面）：写各个实验页面

components（组件）：需要自己写组件的话放这里

assets：图片等

main.js ：使用其他库注册进去
