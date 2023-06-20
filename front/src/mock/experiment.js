import Mock from 'mockjs';

Mock.mock('api/menu/student_experiment', 'get', ({ body }) => {
  // id:number; // id 建议用十进制表示法 
  // title:string; // 中文标题
  // name:string; // 英文标题
  // class:string; // 大类名称
    return {
        "success": true,
        "code": 0,
        "msg": "success",
        "data": [
            {
                "id": "11",
                "title": "国标GB标准-实验",
                "name": "gb11",
                "kind": "软件规模度量",
                "content": null,
                "file": null
            },
            {
                "id": "12",
                "title": "IFPUG-实验",
                "name": "ifpug",
                "kind": "软件规模度量",
                "content": null,
                "file": "https://virtual-experiment-system.oss-cn-shanghai.aliyuncs.com/09-05-2023/969fb6b73d9a4c6abf253cf3e9eeeab7/软件工程管理与经济-实验指导书-实验二_小型软件项目规模度量实验.pdf"
            },
            {
                "id": "13",
                "title": "NESMA-实验",
                "name": "nesma",
                "kind": "软件规模度量",
                "content": null,
                "file": null
            },
            {
                "id": "14",
                "title": "MARK II-实验",
                "name": "markii",
                "kind": "软件规模度量",
                "content": null,
                "file": null
            },
            {
                "id": "15",
                "title": "COSMIC-实验",
                "name": "cosmic",
                "kind": "软件规模度量",
                "content": null,
                "file": null
            },
            {
                "id": "21",
                "title": "国标GB标准-实验",
                "name": "gb21",
                "kind": "软件开发成本估算",
                "content": null,
                "file": null
            },
            {
                "id": "22",
                "title": "类比法-实验",
                "name": "leibi",
                "kind": "软件开发成本估算",
                "content": null,
                "file": null
            },
            {
                "id": "23",
                "title": "类推法-实验",
                "name": "leitui",
                "kind": "软件开发成本估算",
                "content": null,
                "file": null
            },
            {
                "id": "24",
                "title": "敏捷方法-实验",
                "name": "minjie",
                "kind": "软件开发成本估算",
                "content": null,
                "file": null
            },
            {
                "id": "31",
                "title": "国标GB标准-实验",
                "name": "gb31",
                "kind": "软件测试成本估算",
                "content": null,
                "file": null
            },
            {
                "id": "41",
                "title": "国标GB标准-实验",
                "name": "gb41",
                "kind": "软件运维成本估算",
                "content": null,
                "file": null
            },
            {
                "id": "51",
                "title": "国标GB标准-实验",
                "name": "xinxihuapinggu",
                "kind": "信息化项目绩效评估",
                "content": null,
                "file": null
            },
            {
                "id": "61",
                "title": "碳排放权供给与需求-实验",
                "name": "tanpaifang",
                "kind": "软件产品的供给与需求",
                "content": null,
                "file": null
            },
            {
                "id": "71",
                "title": "净现值NPV和内部收益率IRR计算-实验",
                "name": "jinxianzhi",
                "kind": "软件工程经济学方法及应用",
                "content": null,
                "file": null
            },
            {
                "id": "72",
                "title": "动态投资回收期计算-实验",
                "name": "dongtaitouzi",
                "kind": "软件工程经济学方法及应用",
                "content": null,
                "file": null
            },
            {
                "id": "73",
                "title": "软件经济生命周期计算-实验",
                "name": "shengmingzhouqi",
                "kind": "软件工程经济学方法及应用",
                "content": null,
                "file": null
            },
            {
                "id": "74",
                "title": "软件重置期计算-实验",
                "name": "chongzhiqi",
                "kind": "软件工程经济学方法及应用",
                "content": null,
                "file": null
            },
            {
                "id": "75",
                "title": "软件退役计算-实验",
                "name": "tuiyi",
                "kind": "软件工程经济学方法及应用",
                "content": null,
                "file": null
            },
            {
                "id": "81",
                "title": "盈亏平衡-实验",
                "name": "yinkuipingheng",
                "kind": "风险分析与评价",
                "content": null,
                "file": null
            },
            {
                "id": "82",
                "title": "期望净现值法-实验",
                "name": "qiwangjingxianzhi",
                "kind": "风险分析与评价",
                "content": null,
                "file": null
            },
            {
                "id": "83",
                "title": "敏感性分析-实验",
                "name": "minganxing",
                "kind": "风险分析与评价",
                "content": null,
                "file": null
            },
            {
                "id": "84",
                "title": "决策树法-实验",
                "name": "jueceshu",
                "kind": "风险分析与评价",
                "content": null,
                "file": null
            },
            {
                "id": "85",
                "title": "蒙特卡洛法-实验",
                "name": "mengtekaluo",
                "kind": "风险分析与评价",
                "content": null,
                "file": null
            },
            {
                "id": "86",
                "title": "博弈-实验",
                "name": "boyi",
                "kind": "风险分析与评价",
                "content": null,
                "file": null
            },
            {
                "id": "91",
                "title": "不确定性分析-实验",
                "name": "buqueding",
                "kind": "软件项目/产品不确定性分析",
                "content": null,
                "file": null
            },
            {
                "id": "101",
                "title": "简化计算模型-实验",
                "name": "jianhuajisuan",
                "kind": "软件项目/产品财务分析与评价",
                "content": null,
                "file": null
            },
            {
                "id": "102",
                "title": "盈利能力分析-实验",
                "name": "yingli",
                "kind": "软件项目/产品财务分析与评价",
                "content": null,
                "file": null
            },
            {
                "id": "103",
                "title": "偿债能力分析-实验",
                "name": "changzhai",
                "kind": "软件项目/产品财务分析与评价",
                "content": null,
                "file": null
            },
            {
                "id": "104",
                "title": "生存能力分析-实验",
                "name": "shengcun",
                "kind": "软件项目/产品财务分析与评价",
                "content": null,
                "file": null
            },
            {
                "id": "111",
                "title": "经济分析与评价-实验",
                "name": "fenxiyupingjia",
                "kind": "软件项目/产品财务分析与评价",
                "content": null,
                "file": null
            },
            {
                "id": "121",
                "title": "费用-效益分析与评价-实验",
                "name": "xiaoyi",
                "kind": "软件项目/产品费用-效益分析与评价",
                "content": null,
                "file": null
            },
            {
                "id": "131",
                "title": "费用-效果分析与评价-实验",
                "name": "xiaoguo",
                "kind": "软件项目/产品费用-效果分析与评价",
                "content": null,
                "file": null
            },
            {
                "id": "141",
                "title": "软件项目监督与控制-EVA法-实验",
                "name": "eva",
                "kind": "软件项目监督与控制",
                "content": null,
                "file": null
            }
        ]
    }
  });
