import{m as r,c as _,e as F,g as c,f as u,w as d,F as l,k as y,J as E,Q as C}from"./index-74898ef0.js";import{_ as i}from"./index-a749ebb9.js";import"./index-02cc34dd.js";import"./eagerComputed-a29f2f4d.js";import"./useBreakpoint-a031231d.js";const m="/assets/formula_31-07e1c201.png",B="/assets/formula_32-103b35e0.png",A="/assets/formula_33-966c7387.png",D={setup(){return{formula_3_1:m,formula_3_2:B,formula_3_3:A,dynamic_indicators:[{column1:"各年净现金流量（元）",column2:"-1M",column3:"50k",column4:"50k",column5:"208k",column6:"373k",column7:"547k",column8:"729k"}],dynamic_columns:[{title:"年",dataIndex:"column1",key:"column1"},{title:"0",dataIndex:"column2",key:"column2"},{title:"1",dataIndex:"column3",key:"column3"},{title:"2",dataIndex:"column4",key:"column4"},{title:"3",dataIndex:"column5",key:"column5"},{title:"4",dataIndex:"column6",key:"column6"},{title:"5",dataIndex:"column7",key:"column7"},{title:"6",dataIndex:"column8",key:"column8"}],dataSource:[{key:"1",number:"1",desc:"现金流入",year_0:0,year_1:550,year_2:550,year_3:708,year_4:873,year_5:1047,year_6:1229},{key:"2",number:"2",desc:"现金留出",year_0:1e3,year_1:500,year_2:500,year_3:500,year_4:500,year_5:500,year_6:500},{key:"3",number:"3",desc:"净现金流量",year_0:"",year_1:"",year_2:"",year_3:"",year_4:"",year_5:"",year_6:""},{key:"4",number:"4",desc:"累计净现金流量",year_0:"",year_1:"",year_2:"",year_3:"",year_4:"",year_5:"",year_6:""},{key:"5",number:"5",desc:"净现金流量(现值)",year_0:"",year_1:"",year_2:"",year_3:"",year_4:"",year_5:"",year_6:""},{key:"6",number:"6",desc:"累积净现金流量(现值)",year_0:"",year_1:"",year_2:"",year_3:"",year_4:"",year_5:"",year_6:""},{key:"7",number:"7",desc:"内部收益率IRR",year_0:""},{key:"8",number:"8",desc:"净现值NPV(10%)",year_0:""},{key:"9",number:"9",desc:"动态投资回收期(年)",year_0:""},{key:"10",number:"10",desc:"现值系数",year_0:"1.00",year_1:"0.9091",year_2:"0.8264",year_3:"0.7513",year_4:"0.583",year_5:"0.6209",year_6:"0.5645"}],columns:[{title:"序号",dataIndex:"number",key:"number"},{title:"时点年份",dataIndex:"desc",key:"desc"},{title:"0",dataIndex:"year_0",key:"year_0"},{title:"1",dataIndex:"year_1",key:"year_1"},{title:"2",dataIndex:"year_2",key:"year_2"},{title:"3",dataIndex:"year_3",key:"year_3"},{title:"4",dataIndex:"year_4",key:"year_4"},{title:"5",dataIndex:"year_5",key:"year_5"},{title:"6",dataIndex:"year_6",key:"year_6"}]}},beforeMount(){}};const k=u("p",{class:"FirstTitle"},"三、计算动态评价指标",-1),p=u("p",{class:"content"},"现给出某软件项目的现金流表， 请根据现金流表计算以下三个动态评价指标：",-1),x=u("p",{class:"SecondTitle"},"3.1 净现值(NPV)",-1),I=u("p",{class:"content"},"净现值是指按一定的折现率（一般采用基准收益率ic ），将各年的净现金流量折现到同一时点（通常是期初时点）的现值之和。",-1),h={class:"pictures"},b=["src"],f=u("p",{class:"content"},"其中，NPV为净现值，(CI - CO)t为第t年的净现金流量，n为方案寿命期，ic 为设定的折现率（基准收益率）。这里基准收益率的含义是项目建设方投资开发项目时 ，所期望的最低财务盈利水平，即对项目投资收益的期望水平，也称作最低期望收益率（MARR）。",-1),P=u("p",{class:"SecondTitle"},"3.2 内部收益率(IRR)",-1),S=u("p",{class:"content"},"内部收益率是指 项目在整个计算期内净现值等于零时所对应的折现率。",-1),g={class:"pictures"},R=["src"],v=u("p",{class:"content"},"其中，IRR为内部收益率，(CI - CO)t 为第t年净现金流量，n为方案寿命期。",-1),N=u("p",{class:"content"},"当IRR≥i0时，表明项目可行； 反之，则表明项目不可行。i0为基准收益率。",-1),V=u("p",{class:"SecondTitle"},"3.3 动态投资回收期(DPP)",-1),T=u("p",{class:"content"},"动态投资回收期是指按照 设定的基准收益率ic收回全部投资所需的时间。",-1),M={class:"pictures"},O=["src"],w=u("p",{class:"content"},"其中，DPP为动态投资回收期、(CI - CO)t 为第t年的净现金流量，ic为设定的基准收益率。",-1),H=u("p",{class:"content"},"评价指标：若DPP小于等于DPPb，则可以接受； 反之，则项目不可接受。基准动态投资回收期为DPPb",-1),U=u("p",{class:"SecondTitle"},"3.4 填写动态指标计算表",-1);function J(Q,j,q,e,z,G){const t=i,o=C;return _(),F(l,null,[k,p,c(t,{dataSource:e.dynamic_indicators,columns:e.dynamic_columns,bordered:""},null,8,["dataSource","columns"]),x,I,u("div",h,[u("img",{src:e.formula_3_1},null,8,b)]),f,P,S,u("div",g,[u("img",{src:e.formula_3_2},null,8,R)]),v,N,V,T,u("div",M,[u("img",{src:e.formula_3_3},null,8,O)]),w,H,U,c(t,{dataSource:e.dataSource,columns:e.columns,bordered:""},{bodyCell:d(({column:a,text:K,record:n})=>[a.dataIndex!="number"&&a.dataIndex!="desc"?(_(),y(o,{key:0,value:e.dataSource[n.key][a.dataIndex],"onUpdate:value":s=>e.dataSource[n.key][a.dataIndex]=s},null,8,["value","onUpdate:value"])):E("",!0)]),_:1},8,["dataSource","columns"])],64)}const $=r(D,[["render",J]]);export{$ as default};
//# sourceMappingURL=Head4-731da051.js.map
