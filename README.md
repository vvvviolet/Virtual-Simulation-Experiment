# 点颗⭐吧~
# 如果点的人足够多，到时候你面试的时候就可以说自己曾参与github上过百星的项目了【doge

## Virtual-Simulation-Experiment（VSE） 项目总规范
每个组一个分支，分支命名格式为组号_组名，例如第一组，小组名欢乐斗地组，那么分支名为1_huanledoudizu

讨论qq群：170106623


## 快速开始
git下载地址：https://git-scm.com/download/win

安装tyarn：npm install yarn tyarn -g

clone项目之后，进入到项目的front文件夹，然后运行tyarn命令安装依赖，最后tyarn dev运行项目


## 前端规范
统一采用Vue3，[AntdV](https://antdv.com/components/overview)和[Stepin Template](http://stepui.gitee.io/stepin-template-docs/page.html)

总体平台框架大致如下（每个组写自己实验的一个页面）：

![1](https://raw.githubusercontent.com/vvvviolet/Virtual-Simulation-Experiment/main/Images/1.png)

![2](https://raw.githubusercontent.com/vvvviolet/Virtual-Simulation-Experiment/main/Images/2.png)

![3](https://raw.githubusercontent.com/vvvviolet/Virtual-Simulation-Experiment/main/Images/4.png)


每个实验大类对应于src/pages/exp#文件夹

比如第一个实验大类， 1.软件规模估算实验（FP方法），对应的就是src/pages/exp1文件夹

exp1文件夹里面的Exp1.vue和index.ts为固定的，不用修改，具体开发是在exp1文件夹里面自建文件或者文件夹


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
