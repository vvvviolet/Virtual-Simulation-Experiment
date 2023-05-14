import{d as y,b as h,c as o,e as l,f as n,g as a,w as s,bG as x,D as S,j as c,t as I,k as i,J as w,bH as C,m as B}from"./index-74898ef0.js";import{_ as z}from"./index-a749ebb9.js";import"./index-02cc34dd.js";import{_ as N}from"./index-d388b4cd.js";import{_ as V}from"./OverviewTitle-cf920aea.js";import{A as P}from"./AvatarList-67869676.js";import{f as A}from"./formatter-c603a8d9.js";import"./eagerComputed-a29f2f4d.js";import"./useBreakpoint-a031231d.js";const D={class:"projects card"},T={class:"flex items-baseline justify-between"},E={class:"extra"},G={key:0,class:"flex items-center"},H=["src"],J={class:"ml-sm"},L=y({__name:"Projects",setup(R){function _(t,p){switch(t){case"normal":return p<1?"active":"success";case"canceled":return"exception";default:return"normal"}}const u=[{title:"企业",dataIndex:"company"},{title:"成员",dataIndex:"members"},{title:"预算",dataIndex:"budget",customRender:({text:t})=>"￥"+A(t),customCell:()=>({style:"color: #9e9e9e;font-weight: 700;font-size:12px;"})},{title:"进度",dataIndex:"progress"}],d=[{company:{logo:"/src/assets/logo/shopify.svg",name:"Shopify"},members:[{avatar:"/src/assets/avatar/face-1.jpg",nickname:"jock"},{avatar:"/src/assets/avatar/face-2.jpg",nickname:"jock"},{avatar:"/src/assets/avatar/face-3.jpg",nickname:"jock"},{avatar:"/src/assets/avatar/face-4.jpg",nickname:"jock"}],budget:3200.23,status:"normal",progress:.23},{company:{logo:"/src/assets/logo/slack.svg",name:"Shopify"},members:[{avatar:"/src/assets/avatar/face-3.jpg",nickname:"jock"},{avatar:"/src/assets/avatar/face-4.jpg",nickname:"jock"}],budget:1200,status:"normal",progress:.23},{company:{logo:"/src/assets/logo/invision.svg",name:"Shopify"},members:[{avatar:"/src/assets/avatar/face-4.jpg",nickname:"jock"},{avatar:"/src/assets/avatar/face-2.jpg",nickname:"jock"},{avatar:"/src/assets/avatar/face-3.jpg",nickname:"jock"}],budget:1200,status:"normal",progress:.83},{company:{logo:"/src/assets/logo/jira.svg",name:"Shopify"},members:[{avatar:"/src/assets/avatar/face-1.jpg",nickname:"jock"},{avatar:"/src/assets/avatar/face-4.jpg",nickname:"jock"}],budget:1200,status:"normal",progress:1},{company:{logo:"/src/assets/logo/atlassian.svg",name:"Shopify"},members:[{avatar:"/src/assets/avatar/face-1.jpg",nickname:"jock"}],budget:1200,status:"normal",progress:.47},{company:{logo:"/src/assets/logo/spotify.svg",name:"Shopify"},members:[{avatar:"/src/assets/avatar/face-1.jpg",nickname:"jock"},{avatar:"/src/assets/avatar/face-2.jpg",nickname:"jock"},{avatar:"/src/assets/avatar/face-3.jpg",nickname:"jock"},{avatar:"/src/assets/avatar/face-4.jpg",nickname:"jock"}],budget:1200,status:"canceled",progress:1}];return(t,p)=>{const r=C,g=x,f=N,v=z,k=h("upload-outlined"),j=S;return o(),l("div",D,[n("div",T,[a(V,{title:"工程项目",subtitle:"本月进度",change:"+40%"}),n("div",E,[a(g,null,{default:s(()=>[a(r,null,{default:s(()=>[c("全部")]),_:1}),a(r,null,{default:s(()=>[c("在线")]),_:1}),a(r,null,{default:s(()=>[c("商店")]),_:1})]),_:1})])]),a(v,{columns:u,dataSource:d,pagination:!1},{bodyCell:s(({record:b,text:e,column:m})=>[m.dataIndex==="company"?(o(),l("div",G,[n("img",{class:"w-6",src:e.logo},null,8,H),n("span",J,I(e.name),1)])):m.dataIndex==="progress"?(o(),i(f,{key:1,size:"small",percent:e*100,status:_(b.status,e)},null,8,["percent","status"])):m.dataIndex==="members"?(o(),i(P,{key:2,size:28,source:e},null,8,["source"])):w("",!0)]),_:1}),a(j,{size:"large",class:"add-btn",type:"dashed"},{icon:s(()=>[a(k)]),default:s(()=>[c(" 添加新项目 ")]),_:1})])}}});const X=B(L,[["__scopeId","data-v-0640cb26"]]);export{X as default};
//# sourceMappingURL=Projects-16b7d8ad.js.map
