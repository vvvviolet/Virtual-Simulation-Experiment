import Mock from 'mockjs';
Mock.mock('api/experiments', 'get', ({ body }) => {
  // id:number; // id 建议用十进制表示法 
  // title:string; // 中文标题
  // name:string; // 英文标题
  // class:string; // 大类名称
    return {
      code: 0,
      msg: 'success',
      data:[
        {
          id:11,
          title: "软件规模估算实验——IFPUG方法",
          name:"ifpug",
          class:"软件规模估算",
          content: null,
          file: "https://virtual-experiment-system.oss-cn-shanghai.aliyuncs.com/13-04-2023/8e5fea8ae0584f038534fd2c8e0430db/2023SEME_Slides%20Lesson12%20Contract%20management.pdf"
        },
        {
          id:12,
          title: "软件规模估算实验——COSMIC方法",
          name:"cosmic",
          class:"软件规模估算",
          content: null,
          file: "https://virtual-experiment-system.oss-cn-shanghai.aliyuncs.com/13-04-2023/8e5fea8ae0584f038534fd2c8e0430db/2023SEME_Slides%20Lesson12%20Contract%20management.pdf"
        },
        {
          id:13,
          title: "软件规模估算实验——MARKII方法",
          name:"markii",
          class:"软件规模估算",
          content: null,
          file: "https://virtual-experiment-system.oss-cn-shanghai.aliyuncs.com/13-04-2023/8e5fea8ae0584f038534fd2c8e0430db/2023SEME_Slides%20Lesson12%20Contract%20management.pdf"
        },
        {
          id:21,
          title: "软件成本估算实验——1",
          name:"ifpug",
          class:"软件成本估算",
          content: null,
          file: "https://virtual-experiment-system.oss-cn-shanghai.aliyuncs.com/13-04-2023/8e5fea8ae0584f038534fd2c8e0430db/2023SEME_Slides%20Lesson12%20Contract%20management.pdf"
        },
        {
          id:22,
          title: "软件成本估算实验——2",
          name:"cosmic",
          class:"软件成本估算",
          content: null,
          file: "https://virtual-experiment-system.oss-cn-shanghai.aliyuncs.com/13-04-2023/8e5fea8ae0584f038534fd2c8e0430db/2023SEME_Slides%20Lesson12%20Contract%20management.pdf"
        },
        {
          id:23,
          title: "软件成本估算实验——3",
          name:"markii",
          class:"软件成本估算",
          content: null,
          file: "https://virtual-experiment-system.oss-cn-shanghai.aliyuncs.com/13-04-2023/8e5fea8ae0584f038534fd2c8e0430db/2023SEME_Slides%20Lesson12%20Contract%20management.pdf"
        },
       
        ]
    };
  });
  
Mock.mock(`api/experiment/`, 'get', ({ url }) => {
    return url
});
  