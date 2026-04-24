import{r as d,o as n,c,a as s,F as u,i as m,n as k,t as o,y as v,h as f,b as i,j as h,e as _,k as a}from"./index-CyHYsOlc.js";import{_ as w}from"./AccordionItem-BZSYx72r.js";const g={class:"treeview-wrap"},y={class:"treeview-list"},T=["onClick"],C={class:"sr-only"},x={key:1,class:"depth-ico","aria-hidden":"true"},$={class:"tree-label"},B={__name:"TreeviewItem",props:{treeData:{type:Array,required:!0}},setup(r){const t=p=>{p.children&&p.children.length>0&&(p.open=!p.open)};return(p,l)=>{const b=d("treeview-item",!0);return n(),c("div",g,[s("ul",y,[(n(!0),c(u,null,m(r.treeData,(e,D)=>(n(),c("li",{key:D,class:k(["depth",{open:e.open}])},[e.children&&e.children.length>0?(n(),c("button",{key:0,type:"button",class:"depth-trigger",onClick:A=>t(e)},[s("span",C,o(e.open?"닫기":"열기"),1)],8,T)):(n(),c("span",x,"-")),s("span",$,o(e.label),1),e.children&&e.children.length>0?(n(),v(b,{key:2,"tree-data":e.children,class:"treeview-sub"},null,8,["tree-data"])):f("",!0)],2))),128))])])}}},N={class:"contents"},V={class:"guide-cont"},q={__name:"GuideTreeview",setup(r){const t=_([{label:"1-Depth 1",children:[{label:"2-Depth 1"},{label:"2-Depth 2"},{label:"2-Depth 3"}],open:!0},{label:"1-Depth 2",children:[{label:"2-Depth 1",children:[{label:"3-Depth 1"},{label:"3-Depth 2"},{label:"3-Depth 3"}]},{label:"2-Depth 2",children:[{label:"3-Depth 1",children:[{label:"4-Depth 1"},{label:"4-Depth 2"},{label:"4-Depth 3"}]},{label:"3-Depth 2"},{label:"3-Depth 3"}]},{label:"2-Depth 3"}]},{label:"1-Depth 3",children:[{label:"2-Depth 1",children:[{label:"3-Depth 1"},{label:"3-Depth 2"},{label:"3-Depth 3"}]},{label:"2-Depth 2",children:[{label:"3-Depth 1",children:[{label:"4-Depth 1"},{label:"4-Depth 2"},{label:"4-Depth 3"}]},{label:"3-Depth 2"},{label:"3-Depth 3"}]},{label:"2-Depth 3"}]}]);return(p,l)=>(n(),c("div",N,[l[2]||(l[2]=s("h2",{class:"guide-title"},"Treeview",-1)),l[3]||(l[3]=s("h3",{class:"guide-stitle"},"Default",-1)),s("div",V,[i(B,{"tree-data":t.value},null,8,["tree-data"]),i(w,{id:"TreeAcco"},{accoTitle:h(()=>[...l[0]||(l[0]=[a("Code 보기",-1)])]),accoPanel:h(()=>[...l[1]||(l[1]=[s("div",{class:"guide-info script"},[s("pre",null,[a(""),s("span",{class:"comment"},"// treeview data"),a(`
`),s("span",{class:"tag"},"const"),a(),s("span",{class:"evt"},"sampleTreeData"),a(" = "),s("span",{class:"func"},[a("ref"),s("span",{class:"mark"},"("),a("[")]),a(`
  `),s("span",{class:"braket"},"{"),a(`
    `),s("span",{class:"props"},"label:"),a(),s("span",{class:"val"},'"1-Depth 1"'),a(`
    `),s("span",{class:"props"},"children:"),a(),s("span",{class:"mark"},"["),s("span",{class:"func"},"{"),a(),s("span",{class:"props"},"label:"),a(),s("span",{class:"val"},"2-Depth 1"),a(),s("span",{class:"func"},"}"),a(", "),s("span",{class:"func"},"{"),a(),s("span",{class:"props"},"label:"),a(),s("span",{class:"val"},"2-Depth 2"),a(),s("span",{class:"func"},"}"),a(", "),s("span",{class:"func"},"{"),a(),s("span",{class:"props"},"label:"),a(),s("span",{class:"val"},"2-Depth 3"),a(),s("span",{class:"func"},"}"),a(", "),s("span",{class:"arrow"},"...(생략)"),s("span",{class:"mark"},"]"),a(`,
    `),s("span",{class:"props"},"open:"),a(),s("span",{class:"boolean"},"true"),a(", "),s("span",{class:"comment"},"// 열려있는 상태일 경우 true/false"),a(`
  `),s("span",{class:"braket"},"}"),a(`,
  `),s("span",{class:"braket"},"{"),a(`
    `),s("span",{class:"props"},"label:"),a(),s("span",{class:"val"},'"1-Depth 2"'),a(`
    `),s("span",{class:"props"},"children:"),a(),s("span",{class:"mark"},"["),a(`
      `),s("span",{class:"func"},"{"),a(`
        `),s("span",{class:"props"},"label:"),a(),s("span",{class:"val"},"2-Depth 1"),a(`,
        `),s("span",{class:"props"},"children:"),a(),s("span",{class:"braket"},"["),s("span",{class:"mark"},"{"),a(),s("span",{class:"props"},"label:"),a(),s("span",{class:"val"},"3-Depth 1"),a(),s("span",{class:"mark"},"}"),a(", "),s("span",{class:"mark"},"{"),a(),s("span",{class:"props"},"label:"),a(),s("span",{class:"val"},"3-Depth 2"),a(),s("span",{class:"mark"},"}"),a(", "),s("span",{class:"mark"},"{"),a(),s("span",{class:"props"},"label:"),a(),s("span",{class:"val"},"3-Depth 3"),a(),s("span",{class:"mark"},"}"),a(", "),s("span",{class:"arrow"},"...(생략)"),s("span",{class:"braket"},"]"),a(`,
      `),s("span",{class:"func"},"}"),a(`,
      `),s("span",{class:"func"},"{"),a(`
        `),s("span",{class:"props"},"label:"),a(),s("span",{class:"val"},"2-Depth 2"),a(`,
        `),s("span",{class:"props"},"children:"),a(),s("span",{class:"braket"},"["),a(`
          `),s("span",{class:"mark"},"{"),a(`
            `),s("span",{class:"props"},"label:"),a(),s("span",{class:"val"},"3-Depth 1"),a(`,
            `),s("span",{class:"props"},"children:"),a(),s("span",{class:"func"},"["),s("span",{class:"braket"},"{"),a(),s("span",{class:"props"},"label:"),a(),s("span",{class:"val"},"4-Depth 1"),a(),s("span",{class:"braket"},"}"),a(", "),s("span",{class:"braket"},"{"),a(),s("span",{class:"props"},"label:"),a(),s("span",{class:"val"},"4-Depth 2"),a(),s("span",{class:"braket"},"}"),a(", "),s("span",{class:"braket"},"{"),a(),s("span",{class:"props"},"label:"),a(),s("span",{class:"val"},"4-Depth 3"),a(),s("span",{class:"braket"},"}"),a(", "),s("span",{class:"arrow"},"...(생략)"),s("span",{class:"func"},"]"),a(`,
          `),s("span",{class:"mark"},"}"),a(`,
          `),s("span",{class:"mark"},"{"),a(),s("span",{class:"props"},"label:"),a(),s("span",{class:"val"},"3-Depth 2"),a(),s("span",{class:"mark"},"}"),a(`,
          `),s("span",{class:"mark"},"{"),a(),s("span",{class:"props"},"label:"),a(),s("span",{class:"val"},"3-Depth 3"),a(),s("span",{class:"mark"},"}"),a(`,
          `),s("span",{class:"arrow"},"...(생략)"),a(`
        `),s("span",{class:"braket"},"]"),a(`,
      `),s("span",{class:"func"},"}"),a(`,
      `),s("span",{class:"func"},"{"),a(),s("span",{class:"props"},"label:"),a(),s("span",{class:"val"},"2-Depth 3"),a(),s("span",{class:"func"},"}"),a(`,
      `),s("span",{class:"arrow"},"...(생략)"),a(`
    `),s("span",{class:"mark"},"]"),a(`,
  `),s("span",{class:"braket"},"}"),a(`,
  `),s("span",{class:"arrow"},"...(생략)"),a(`
`),s("span",{class:"func"},[a("]"),s("span",{class:"mark"},")")]),a(`;
`)])],-1),s("div",{class:"guide-info html"},[s("pre",null,[a(""),s("span",{class:"arrow"},"<"),s("span",{class:"component"},"treeview-item"),a(" :"),s("span",{class:"props"},"tree-data"),a('="'),s("span",{class:"props"},"sampleTreeData"),a('" '),s("span",{class:"arrow"},"/>"),a(`
`)])],-1)])]),_:1})])]))}};export{q as default};
