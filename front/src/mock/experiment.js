import Mock from 'mockjs';

// Mock.mock('api/experiments', 'get', ({ body }) => {
//   // id:number; // id 建议用十进制表示法 
//   // title:string; // 中文标题
//   // name:string; // 英文标题
//   // class:string; // 大类名称
//     return {
//       code: 0,
//       msg: 'success',
//       data:[
//         {
//           id:11,
//           title: "IFPUG方法",
//           name:"ifpug",
//           class:"软件规模估算",
//           content: null,
//           file: "https://virtual-experiment-system.oss-cn-shanghai.aliyuncs.com/13-04-2023/8e5fea8ae0584f038534fd2c8e0430db/2023SEME_Slides%20Lesson12%20Contract%20management.pdf"
//         },
//         {
//           id:12,
//           title: "COSMIC方法",
//           name:"cosmic",
//           class:"软件规模估算",
//           content: null,
//           file: "https://virtual-experiment-system.oss-cn-shanghai.aliyuncs.com/13-04-2023/8e5fea8ae0584f038534fd2c8e0430db/2023SEME_Slides%20Lesson12%20Contract%20management.pdf"
//         },
//         {
//           id:13,
//           title: "MARKII方法",
//           name:"markii",
//           class:"软件规模估算",
//           content: null,
//           file: "https://virtual-experiment-system.oss-cn-shanghai.aliyuncs.com/13-04-2023/8e5fea8ae0584f038534fd2c8e0430db/2023SEME_Slides%20Lesson12%20Contract%20management.pdf"
//         },
//         {
//           id:14,
//           title: "NESMA方法",
//           name:"nesma",
//           class:"软件规模估算",
//           content: null,
//           file: "https://virtual-experiment-system.oss-cn-shanghai.aliyuncs.com/13-04-2023/8e5fea8ae0584f038534fd2c8e0430db/2023SEME_Slides%20Lesson12%20Contract%20management.pdf"
//         },
//         {
//           id:21,
//           title: "成本估算实验",
//           name:"chengbengusuan",
//           class:"软件成本估算",
//           content: null,
//           file: "https://virtual-experiment-system.oss-cn-shanghai.aliyuncs.com/13-04-2023/8e5fea8ae0584f038534fd2c8e0430db/2023SEME_Slides%20Lesson12%20Contract%20management.pdf"
//         },
//         {
//           id:31,
//           title: "碳排放需求与供给",
//           name:"tanpaifang",
//           class:"碳排放需求与供给",
//           content: null,
//           file: "https://virtual-experiment-system.oss-cn-shanghai.aliyuncs.com/13-04-2023/8e5fea8ae0584f038534fd2c8e0430db/2023SEME_Slides%20Lesson12%20Contract%20management.pdf"
//         },
//         {
//           id:41,
//           title: "软件测试成本估算",
//           name:"ceshichengben",
//           class:"软件测试成本估算",
//           content: null,
//           file: "https://virtual-experiment-system.oss-cn-shanghai.aliyuncs.com/13-04-2023/8e5fea8ae0584f038534fd2c8e0430db/2023SEME_Slides%20Lesson12%20Contract%20management.pdf"
//         },
//         {
//           id:61,
//           title: "决策树",
//           name:"jueceshu",
//           class:"风险影响与评价实验",
//           content: null,
//           file: "https://virtual-experiment-system.oss-cn-shanghai.aliyuncs.com/13-04-2023/8e5fea8ae0584f038534fd2c8e0430db/2023SEME_Slides%20Lesson12%20Contract%20management.pdf"
//         },
//         {
//           id:72,
//           title: "动态投资回收期计算-实验",
//           name:"jueceshu",
//           class:"软件工程经济学方法及应用",
//           content: null,
//           file: "https://virtual-experiment-system.oss-cn-shanghai.aliyuncs.com/13-04-2023/8e5fea8ae0584f038534fd2c8e0430db/2023SEME_Slides%20Lesson12%20Contract%20management.pdf"
//         },
       
//         ]
//     };
//   });
