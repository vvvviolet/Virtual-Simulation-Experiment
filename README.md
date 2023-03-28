## Virtual-Simulation-Experiment（VSE） 项目总规范
每个组一个分支，分支命名格式为组号_组名，例如第一组，小组名欢乐斗地组，那么分支名为1_huanledoudizu

讨论qq群：170106623
## 前端规范
统一采用Vue3，[ElementUI-plus](https://element-plus.gitee.io/zh-CN/)和[Stepin Template](http://stepui.gitee.io/stepin-template-docs/page.html)

总体平台框架大致如下（每个组写自己实验的一个页面）：
![layout](https://github.com/vvvviolet/Virtual-Simulation-Experiment/blob/main/Images/%E5%89%8D%E7%AB%AF%E5%B8%83%E5%B1%801.png?raw=true)

文件夹 src 中：

router（路由）：index.js 中将每个实验页面注册到主页面children中

views（各个具体实验页面）：写各个实验页面

components（组件）：需要自己写组件的话放这里

assets：图片等

main.js ：使用其他库注册进去

## Web API规范
#### 登录
POST /api/login/

前端发送 表单格式
```
{
    email:string;
    password:string;
} 
```
后端返回 
```
{
    success:boolean;
    errorMessage:string; 描述错误信息
    data:{
        token:string;
        id:number;
        name:string;
    }
}
```

#### 获取单个实验
GET /api/experiment/:id 

要获取的实验ID写在params中

后端返回
```
{
    success:boolean;
    errorMessage:string;
    data:{
        title:string;
        content:string; 链接 教师编写的实验内容 富文本=>url
        file:string; 链接 实验附件(获取教师提供的实验指导书) 文件=>url
    }
}
```

#### 提交报告
POST /api/experiment/

前端发送 表单格式
```
{
    id:number;
    experimentId:number;
    submitTime:number;
    report:file;
}
```
后端返回
```
{
    success:boolean;
    errorMessage:string;
}
```
#### 获取实验报告模板
GET /api/experiment_template/:id

后端返回
```
{
    success:boolean;
    errorMessage:string;
    data:{
        file:string; 链接
    }
}
```
