import{_ as u}from"./AccordionComp-yubwh0wW.js";import{_ as v}from"./SelectboxComp-DhGPcZ5Z.js";import{c as r,a as s,b as e,t as b,g as m,j as S,F as x,r as p,o as i,k as a}from"./index-_T-uBsW5.js";const g={class:"guide-cont"},E={class:"form-wrap"},V={key:0,class:"result"},_={class:"guide-cont"},C={class:"form-wrap"},w={key:0,class:"result"},B={class:"guide-cont"},G={class:"form-wrap"},y={key:0,class:"result"},F={__name:"GuideSelectBox",setup(N){const c=p(),d=p([{label:"Select option1",value:"1"},{label:"Select option2",value:"2"},{label:"Select option3",value:"3"},{label:"Select option4",value:"4"},{label:"Select option5",value:"5"},{label:"Select option6",value:"6"},{label:"Select option7",value:"7"},{label:"Select option8",value:"8"},{label:"Select option9",value:"9"},{label:"Select option10",value:"10"},{label:"Select option11",value:"11"},{label:"Select option12",value:"12"},{label:"Select option13",value:"13"},{label:"Select option14",value:"14"},{label:"Select option15",value:"15"},{label:"Select option16",value:"16"},{label:"Select option17",value:"17"},{label:"Select option18",value:"18"},{label:"Select option19",value:"19"},{label:"Select option20",value:"20"}]),o=p("2"),k=p([{label:"Select option1",value:"1"},{label:"Select option2",value:"2"},{label:"Select option3",value:"3"},{label:"Select option4",value:"4"},{label:"Select option5",value:"5"}]),t=p(),f=p([{group:"Group1",options:[{label:"Select option1",value:"1"},{label:"Select option2",value:"2"},{label:"Select option3",value:"3"}]},{group:"Group2",options:[{label:"Select option4",value:"4"},{label:"Select option5",value:"5"},{label:"Select option10",value:"10"}]}]);return(P,l)=>(i(),r(x,null,[l[6]||(l[6]=s("h3",{class:"guide-stitle"},"Default",-1)),s("div",g,[s("div",E,[e(v,{modelValue:c.value,"onUpdate:modelValue":l[0]||(l[0]=n=>c.value=n),id:"SelectExamle1",label:"Select Example1",title:"Select Exmaple1",placeholder:"선택하세요","opt-list":d.value},null,8,["modelValue","opt-list"]),c.value?(i(),r("div",V,"선택한 값: "+b(c.value),1)):m("",!0)]),e(u,{id:"SelectBasic","acco-title":"Code 보기"},{accoPanel:S(()=>[...l[3]||(l[3]=[s("div",{class:"guide-info script"},[s("pre",null,[a(""),s("span",{class:"comment"},"// component import"),a(`
`),s("span",{class:"import"},"import"),a(),s("span",{class:"props"},"SelectboxComp"),a(),s("span",{class:"import"},"from"),a(),s("span",{class:"val"},"'@/components/SelectboxComp.vue'"),a(`;

`),s("span",{class:"comment"},"// 'SelectExamle1' 선택 값 및 option list"),a(`
`),s("span",{class:"tag"},"const"),a(),s("span",{class:"evt"},"selValEx1"),a(" = "),s("span",{class:"func"},[a("ref"),s("span",{class:"mark"},"()")]),a(`;
`),s("span",{class:"tag"},"const"),a(),s("span",{class:"evt"},"options"),a(" = "),s("span",{class:"func"},"ref"),s("span",{class:"mark"},"("),s("span",{class:"func"},"["),a(`
  `),s("span",{class:"braket"},"{"),a(),s("span",{class:"props"},"label:"),a(),s("span",{class:"val"},"'Select option1'"),a(", "),s("span",{class:"props"},"value:"),a(),s("span",{class:"val"},"'1'"),a(),s("span",{class:"braket"},"}"),a(`,
  `),s("span",{class:"braket"},"{"),a(),s("span",{class:"props"},"label:"),a(),s("span",{class:"val"},"'Select option2'"),a(", "),s("span",{class:"props"},"value:"),a(),s("span",{class:"val"},"'2'"),a(),s("span",{class:"braket"},"}"),a(`,
  `),s("span",{class:"braket"},"{"),a(),s("span",{class:"props"},"label:"),a(),s("span",{class:"val"},"'Select option3'"),a(", "),s("span",{class:"props"},"value:"),a(),s("span",{class:"val"},"'3'"),a(),s("span",{class:"braket"},"}"),a(`,
  `),s("span",{class:"braket"},"{"),a(),s("span",{class:"props"},"label:"),a(),s("span",{class:"val"},"'Select option4'"),a(", "),s("span",{class:"props"},"value:"),a(),s("span",{class:"val"},"'4'"),a(),s("span",{class:"braket"},"}"),a(`,
  `),s("span",{class:"braket"},"{"),a(),s("span",{class:"props"},"label:"),a(),s("span",{class:"val"},"'Select option5'"),a(", "),s("span",{class:"props"},"value:"),a(),s("span",{class:"val"},"'5'"),a(),s("span",{class:"braket"},"}"),a(`,
  `),s("span",{class:"braket"},"{"),a(),s("span",{class:"props"},"label:"),a(),s("span",{class:"val"},"'Select option6'"),a(", "),s("span",{class:"props"},"value:"),a(),s("span",{class:"val"},"'6'"),a(),s("span",{class:"braket"},"}"),a(`,
  `),s("span",{class:"braket"},"{"),a(),s("span",{class:"props"},"label:"),a(),s("span",{class:"val"},"'Select option7'"),a(", "),s("span",{class:"props"},"value:"),a(),s("span",{class:"val"},"'7'"),a(),s("span",{class:"braket"},"}"),a(`,
  `),s("span",{class:"braket"},"{"),a(),s("span",{class:"props"},"label:"),a(),s("span",{class:"val"},"'Select option8'"),a(", "),s("span",{class:"props"},"value:"),a(),s("span",{class:"val"},"'8'"),a(),s("span",{class:"braket"},"}"),a(`,
  `),s("span",{class:"braket"},"{"),a(),s("span",{class:"props"},"label:"),a(),s("span",{class:"val"},"'Select option9'"),a(", "),s("span",{class:"props"},"value:"),a(),s("span",{class:"val"},"'9'"),a(),s("span",{class:"braket"},"}"),a(`,
  `),s("span",{class:"braket"},"{"),a(),s("span",{class:"props"},"label:"),a(),s("span",{class:"val"},"'Select option10'"),a(", "),s("span",{class:"props"},"value:"),a(),s("span",{class:"val"},"'10'"),a(),s("span",{class:"braket"},"}"),a(`
`),s("span",{class:"func"},"]"),s("span",{class:"mark"},")"),a(`;
`)])],-1),s("div",{class:"guide-info html"},[s("pre",null,[a(""),s("span",{class:"comment"},"// 웹접근성을 위해 id와 title은 반드시 입력해야 함"),a(`
`),s("span",{class:"comment"},"// label을 없애려면 label 속성 삭제"),a(`
`),s("span",{class:"comment"},"// opt-list 속성: select box의 list 배열"),a(`
`),s("span",{class:"comment"},"// select-act 이벤트: select box의 list 선택 시 선택한 값(object) call-back"),a(`
`),s("span",{class:"arrow"},"<"),s("span",{class:"component"},"selectbox-comp"),a(`
  :`),s("span",{class:"props"},"v-model"),a("="),s("span",{class:"props"},'"selValEx1"'),a(`
  `),s("span",{class:"props"},"id"),a('="'),s("span",{class:"val"},"comboExamle1"),a(`"
  `),s("span",{class:"props"},"label"),a('="'),s("span",{class:"val"},"Select Exmaple"),a(`"
  `),s("span",{class:"props"},"title"),a('="'),s("span",{class:"val"},"Select Exmaple1"),a(`"
  `),s("span",{class:"props"},"placeholder"),a('="'),s("span",{class:"val"},"선택하세요"),a(`"
  :`),s("span",{class:"props"},"opt-list"),a('="'),s("span",{class:"props"},"options"),a(`"
`),s("span",{class:"arrow"},"/>"),a(`
`)])],-1)])]),_:1})]),l[7]||(l[7]=s("h3",{class:"guide-stitle"},"Selected",-1)),s("div",_,[s("div",C,[e(v,{modelValue:o.value,"onUpdate:modelValue":l[1]||(l[1]=n=>o.value=n),id:"SelectExamle2",label:"Select Example2",title:"Select Exmaple2",placeholder:"선택하세요","opt-list":k.value},null,8,["modelValue","opt-list"]),o.value?(i(),r("div",w,"선택한 값: "+b(o.value),1)):m("",!0)]),e(u,{id:"SelectSelected","acco-title":"Code 보기"},{accoPanel:S(()=>[...l[4]||(l[4]=[s("div",{class:"guide-info script"},[s("pre",null,[a(""),s("span",{class:"comment"},"// 'SelectExamle2' 선택 값 및 option list"),a(`
`),s("span",{class:"tag"},"const"),a(),s("span",{class:"evt"},"selValEx2"),a(" = "),s("span",{class:"func"},"ref"),s("span",{class:"mark"},[a("("),s("span",{class:"val"},"'2'"),a(")")]),a(`;
`),s("span",{class:"tag"},"const"),a(),s("span",{class:"evt"},"options2"),a(" = "),s("span",{class:"func"},"ref"),s("span",{class:"mark"},"("),s("span",{class:"func"},"["),a(`
  `),s("span",{class:"braket"},"{"),a(),s("span",{class:"props"},"label:"),a(),s("span",{class:"val"},"'Select option1'"),a(", "),s("span",{class:"props"},"value:"),a(),s("span",{class:"val"},"'1'"),a(),s("span",{class:"braket"},"}"),a(`,
  `),s("span",{class:"braket"},"{"),a(),s("span",{class:"props"},"label:"),a(),s("span",{class:"val"},"'Select option2'"),a(", "),s("span",{class:"props"},"value:"),a(),s("span",{class:"val"},"'2'"),a(),s("span",{class:"braket"},"}"),a(`,
  `),s("span",{class:"braket"},"{"),a(),s("span",{class:"props"},"label:"),a(),s("span",{class:"val"},"'Select option3'"),a(", "),s("span",{class:"props"},"value:"),a(),s("span",{class:"val"},"'3'"),a(),s("span",{class:"braket"},"}"),a(`,
  `),s("span",{class:"braket"},"{"),a(),s("span",{class:"props"},"label:"),a(),s("span",{class:"val"},"'Select option4'"),a(", "),s("span",{class:"props"},"value:"),a(),s("span",{class:"val"},"'4'"),a(),s("span",{class:"braket"},"}"),a(`,
  `),s("span",{class:"braket"},"{"),a(),s("span",{class:"props"},"label:"),a(),s("span",{class:"val"},"'Select option5'"),a(", "),s("span",{class:"props"},"value:"),a(),s("span",{class:"val"},"'5'"),a(),s("span",{class:"braket"},"}"),a(`,
`),s("span",{class:"func"},"]"),s("span",{class:"mark"},")"),a(`;
`)])],-1)])]),_:1})]),l[8]||(l[8]=s("h3",{class:"guide-stitle"},"Option group",-1)),s("div",B,[s("div",G,[e(v,{modelValue:t.value,"onUpdate:modelValue":l[2]||(l[2]=n=>t.value=n),id:"SelectExamle3",label:"Select Example3",title:"Select Exmaple3",placeholder:"선택하세요","opt-list":f.value},null,8,["modelValue","opt-list"]),t.value?(i(),r("div",y,"선택한 값: "+b(t.value),1)):m("",!0)]),e(u,{id:"OptiongroupAcco","acco-title":"Code 보기"},{accoPanel:S(()=>[...l[5]||(l[5]=[s("div",{class:"guide-info script"},[s("pre",null,[a(""),s("span",{class:"comment"},"// 'SelectExamle3' 선택 값 및 option list"),a(`
`),s("span",{class:"tag"},"const"),a(),s("span",{class:"evt"},"selValEx3"),a(" = "),s("span",{class:"func"},"ref"),s("span",{class:"mark"},[a("("),s("span",{class:"val"},"'2'"),a(")")]),a(`;
`),s("span",{class:"tag"},"const"),a(),s("span",{class:"evt"},"options3"),a(" = "),s("span",{class:"func"},"ref"),s("span",{class:"mark"},"("),s("span",{class:"func"},"["),a(`
  `),s("span",{class:"braket"},"{"),a(`
    `),s("span",{class:"props"},"group"),a(": "),s("span",{class:"val"},"'Group 1'"),a(`,
    `),s("span",{class:"props"},"options"),a(": "),s("span",{class:"mark"},"["),a(`
      `),s("span",{class:"func"},"{"),a(),s("span",{class:"props"},"label:"),a(),s("span",{class:"val"},"'Select option1'"),a(", "),s("span",{class:"props"},"value:"),a(),s("span",{class:"val"},"'1'"),a(),s("span",{class:"func"},"}"),a(`,
      `),s("span",{class:"func"},"{"),a(),s("span",{class:"props"},"label:"),a(),s("span",{class:"val"},"'Select option2'"),a(", "),s("span",{class:"props"},"value:"),a(),s("span",{class:"val"},"'2'"),a(),s("span",{class:"func"},"}"),a(`,
      `),s("span",{class:"func"},"{"),a(),s("span",{class:"props"},"label:"),a(),s("span",{class:"val"},"'Select option3'"),a(", "),s("span",{class:"props"},"value:"),a(),s("span",{class:"val"},"'3'"),a(),s("span",{class:"func"},"}"),a(`,
    `),s("span",{class:"mark"},"]"),a(`
  `),s("span",{class:"braket"},"}"),a(`,
  `),s("span",{class:"braket"},"{"),a(`
    `),s("span",{class:"props"},"group"),a(": "),s("span",{class:"val"},"'Group 2'"),a(`,
    `),s("span",{class:"props"},"options"),a(": "),s("span",{class:"mark"},"["),a(`
      `),s("span",{class:"func"},"{"),a(),s("span",{class:"props"},"label:"),a(),s("span",{class:"val"},"'Select option4'"),a(", "),s("span",{class:"props"},"value:"),a(),s("span",{class:"val"},"'4'"),a(),s("span",{class:"func"},"}"),a(`,
      `),s("span",{class:"func"},"{"),a(),s("span",{class:"props"},"label:"),a(),s("span",{class:"val"},"'Select option5'"),a(", "),s("span",{class:"props"},"value:"),a(),s("span",{class:"val"},"'5'"),a(),s("span",{class:"func"},"}"),a(`,
      `),s("span",{class:"func"},"{"),a(),s("span",{class:"props"},"label:"),a(),s("span",{class:"val"},"'Select option6'"),a(", "),s("span",{class:"props"},"value:"),a(),s("span",{class:"val"},"'6'"),a(),s("span",{class:"func"},"}"),a(`,
    `),s("span",{class:"mark"},"]"),a(`
  `),s("span",{class:"braket"},"}"),a(`,
`),s("span",{class:"func"},"]"),s("span",{class:"mark"},")"),a(`;
`)])],-1)])]),_:1})])],64))}};export{F as default};
