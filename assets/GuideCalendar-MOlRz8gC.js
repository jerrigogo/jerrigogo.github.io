import{_ as o}from"./AccordionItem-BgOTU5Z0.js";import{_ as r}from"./CalendarItem-BbNCBqfs.js";import{r as m,f as M,d as x,o as $,c as P,a as s,b as l,j as p,F as V,k as a}from"./index-DGxEfZnS.js";const B={class:"guide-cont"},F={class:"guide-cont"},R={class:"guide-cont"},T={class:"guide-cont"},y={__name:"GuideCalendar",setup(j){const g=m("2026-03-16"),c=e=>{console.log(e)},i=m({minDate:null,maxDate:null}),v=()=>{let e=20,n=24;const t=new Date,k=new Date(new Date(t).setDate(new Date(t).getDate()-e)),w=new Date(new Date(t).setDate(new Date(t).getDate()+n)),f=d=>{const b=d.getFullYear(),C=String(d.getMonth()+1).padStart(2,"0"),S=String(d.getDate()).padStart(2,"0");return`${b}-${C}-${S}`};i.value.minDate=f(k),i.value.maxDate=f(w)},u=m({start:"2026-02-14",end:"2026-03-15"}),D=m(M(()=>`${u.value.start} ~ ${u.value.end}`));return x(()=>{v()}),(e,n)=>($(),P(V,null,[n[8]||(n[8]=s("h3",{class:"guide-stitle"},"Default",-1)),s("div",B,[l(r,{id:"CalSample1",onCalAct:c}),l(o,{id:"CalendarBasic"},{accoTitle:p(()=>[...n[0]||(n[0]=[a("Code 보기",-1)])]),accoPanel:p(()=>[...n[1]||(n[1]=[s("div",{class:"guide-info script"},[s("pre",null,[a(""),s("span",{class:"comment"},"// component import"),a(`
`),s("span",{class:"import"},"import"),a(),s("span",{class:"props"},"CalendarItem"),a(),s("span",{class:"import"},"from"),a(),s("span",{class:"val"},"'@/components/CalendarItem.vue'"),a(`;

`),s("span",{class:"comment"},"// 날짜 선택 callback"),a(`
`),s("span",{class:"tag"},"const"),a(),s("span",{class:"func"},"selectDate"),a(" = "),s("span",{class:"mark"},[a("("),s("span",{class:"props"},"obj"),a(")")]),a(),s("span",{class:"tab"},"=>"),a(),s("span",{class:"mark"},"{"),a(`
    `),s("span",{class:"comment"},"// obj: 선택한 날짜 object"),a(`
    ...
`),s("span",{class:"mark"},"}"),a(`;
`)])],-1),s("div",{class:"guide-info html"},[s("pre",null,[a(""),s("span",{class:"arrow"},"<"),s("span",{class:"component"},"calendar-item"),a(`
  `),s("span",{class:"props"},"id"),a("="),s("span",{class:"val"},'"CalSample1"'),a(`
  @`),s("span",{class:"props"},"cal-act"),a('="'),s("span",{class:"func"},"selectDate"),a(`"
`),s("span",{class:"arrow"},"/>"),a(`
`)])],-1)])]),_:1})]),n[9]||(n[9]=s("h3",{class:"guide-stitle"},"Checked date (예: 2026-03-16)",-1)),s("div",F,[l(r,{id:"CalSample2","define-date":g.value,onCalAct:c},null,8,["define-date"]),l(o,{id:"CalendarChecked"},{accoTitle:p(()=>[...n[2]||(n[2]=[a("Code 보기",-1)])]),accoPanel:p(()=>[...n[3]||(n[3]=[s("div",{class:"guide-info script"},[s("pre",null,[a(""),s("span",{class:"comment"},"// 날짜 지정 예시"),a(`
`),s("span",{class:"tag"},"const"),a(),s("span",{class:"evt"},"sampleDefineDate"),a(" = "),s("span",{class:"func"},"ref"),s("span",{class:"mark"},[a("("),s("span",{class:"val"},"'2026-03-16'"),a(")")]),a(`;
`)])],-1),s("div",{class:"guide-info html"},[s("pre",null,[a(""),s("span",{class:"comment"},"// define-date 속성에 선택 날짜 지정"),a(`
`),s("span",{class:"arrow"},"<"),s("span",{class:"component"},"calendar-item"),a(`
  `),s("span",{class:"props"},"id"),a("="),s("span",{class:"val"},'"CalSample1"'),a(`
  :`),s("span",{class:"props"},"define-date"),a('="'),s("span",{class:"props"},"sampleDefineDate"),a(`"
  @`),s("span",{class:"props"},"cal-act"),a('="'),s("span",{class:"func"},"selectDate"),a(`"
`),s("span",{class:"arrow"},"/>"),a(`
`)])],-1)])]),_:1})]),n[10]||(n[10]=s("h3",{class:"guide-stitle"},"날짜 제한 설정: minDate, maxDate",-1)),s("div",R,[l(r,{id:"CalSample3","limit-date":i.value,onCalAct:c},null,8,["limit-date"]),l(o,{id:"CalendarLimit"},{accoTitle:p(()=>[...n[4]||(n[4]=[a("Code 보기",-1)])]),accoPanel:p(()=>[...n[5]||(n[5]=[s("div",{class:"guide-info script"},[s("pre",null,[a(""),s("span",{class:"import"},"import"),a(),s("span",{class:"mark"},"{"),a(),s("span",{class:"props"},"ref"),a(", "),s("span",{class:"props"},"onBeforeMount"),a(),s("span",{class:"mark"},"}"),a(" = "),s("span",{class:"val"},"'vue'"),a(`;

`),s("span",{class:"comment"},"// 날짜 제한 예시"),a(`
`),s("span",{class:"tag"},"const"),a(),s("span",{class:"evt"},"sampleMinMax"),a(" = "),s("span",{class:"func"},[a("ref"),s("span",{class:"mark"},"("),a("{")]),a(`
  `),s("span",{class:"props"},"minDate:"),a(),s("span",{class:"tag"},"null"),a(`,
  `),s("span",{class:"props"},"maxDate:"),a(),s("span",{class:"tag"},"null"),a(`,
`),s("span",{class:"func"},[a("}"),s("span",{class:"mark"},")")]),a(`;

`),s("span",{class:"comment"},"// 날짜 제한 설정하기"),a(`
`),s("span",{class:"tag"},"const"),a(),s("span",{class:"func"},"setLimitDate"),a(" = "),s("span",{class:"mark"},"()"),a(),s("span",{class:"tag"},"=>"),a(),s("span",{class:"mark"},"{"),a(`
  `),s("span",{class:"tag"},"let"),a(),s("span",{class:"props"},"beforeVal"),a(" = "),s("span",{class:"num"},"365"),a("; "),s("span",{class:"comment"},"// 오늘 기준 1년 전"),a(`
  `),s("span",{class:"tag"},"let"),a(),s("span",{class:"props"},"afterVal"),a(" = "),s("span",{class:"num"},"365"),a("; "),s("span",{class:"comment"},"// 오늘 기준 1년 후"),a(`

  `),s("span",{class:"tag"},"const"),a(),s("span",{class:"evt"},"now"),a(" = "),s("span",{class:"tag"},"new"),a(),s("span",{class:"component"},"Date"),s("span",{class:"func"},"()"),a("; "),s("span",{class:"comment"},"// 오늘"),a(`
  `),s("span",{class:"tag"},"const"),a(),s("span",{class:"evt"},"setPast"),a(" = "),s("span",{class:"tag"},"new"),a(),s("span",{class:"component"},"Date"),s("span",{class:"func"},"("),s("span",{class:"tag"},"new"),a(),s("span",{class:"component"},"Date"),s("span",{class:"braket"},"("),s("span",{class:"evt"},"now"),s("span",{class:"braket"},")"),a("."),s("span",{class:"func"},"setDate"),s("span",{class:"braket"},"("),s("span",{class:"tag"},"new"),a(),s("span",{class:"component"},"Date"),s("span",{class:"mark"},[a("("),s("span",{class:"evt"},"now"),a(")")]),a("."),s("span",{class:"func"},[a("getDate"),s("span",{class:"mark"},"()")]),a(" - "),s("span",{class:"props"},"beforeVal"),s("span",{class:"braket"},")"),s("span",{class:"func"},")"),a("; "),s("span",{class:"comment"},"// 날짜 하한"),a(`
  `),s("span",{class:"tag"},"const"),a(),s("span",{class:"evt"},"setFuture"),a(" = "),s("span",{class:"tag"},"new"),a(),s("span",{class:"component"},"Date"),s("span",{class:"func"},"("),s("span",{class:"tag"},"new"),a(),s("span",{class:"component"},"Date"),s("span",{class:"braket"},"("),s("span",{class:"evt"},"now"),s("span",{class:"braket"},")"),a("."),s("span",{class:"func"},"setDate"),s("span",{class:"braket"},"("),s("span",{class:"tag"},"new"),a(),s("span",{class:"component"},"Date"),s("span",{class:"mark"},[a("("),s("span",{class:"evt"},"now"),a(")")]),a("."),s("span",{class:"func"},[a("getDate"),s("span",{class:"mark"},"()")]),a(" + "),s("span",{class:"props"},"afterVal"),s("span",{class:"braket"},")"),s("span",{class:"func"},")"),a("; "),s("span",{class:"comment"},"// 널짜 상한"),a(`

  `),s("span",{class:"comment"},"// 날짜 구하기"),a(`
  `),s("span",{class:"tag"},"const"),a(),s("span",{class:"func"},"calDate"),a(" = "),s("span",{class:"func"},[a("("),s("span",{class:"props"},"_date"),a(")")]),a(),s("span",{class:"tag"},"=>"),a(),s("span",{class:"func"},"{"),a(`
    `),s("span",{class:"tag"},"const"),a(),s("span",{class:"evt"},"year"),a(" = "),s("span",{class:"props"},"_date"),a("."),s("span",{class:"func"},[a("getFullYear"),s("span",{class:"braket"},"()")]),a(`;
    `),s("span",{class:"tag"},"const"),a(),s("span",{class:"evt"},"month"),a(" = "),s("span",{class:"component"},"String"),s("span",{class:"braket"},"("),s("span",{class:"props"},"_date"),a("."),s("span",{class:"func"},[a("getMonth"),s("span",{class:"mark"},"()")]),a(" + "),s("span",{class:"num"},"1"),s("span",{class:"braket"},")"),a("."),s("span",{class:"func"},"padStart"),s("span",{class:"braket"},"("),s("span",{class:"num"},"2"),a(", "),s("span",{class:"val"},"'0'"),s("span",{class:"braket"},")"),a(`;
    `),s("span",{class:"tag"},"const"),a(),s("span",{class:"evt"},"date"),a(" = "),s("span",{class:"component"},"String"),s("span",{class:"braket"},"("),s("span",{class:"props"},"_date"),a("."),s("span",{class:"func"},[a("getDate"),s("span",{class:"mark"},"()")]),s("span",{class:"braket"},")"),a("."),s("span",{class:"func"},"padStart"),s("span",{class:"braket"},"("),s("span",{class:"num"},"2"),a(", "),s("span",{class:"val"},"'0'"),s("span",{class:"braket"},")"),a(`;
    `),s("span",{class:"import"},"return"),a(),s("span",{class:"val"},[a("`"),s("span",{class:"tag"},[a("${"),s("span",{class:"evt"},"year"),a("}")]),a("-"),s("span",{class:"tag"},[a("${"),s("span",{class:"evt"},"month"),a("}")]),a("-"),s("span",{class:"tag"},[a("${"),s("span",{class:"evt"},"date"),a("}")]),a("`")]),a(`;
  `),s("span",{class:"func"},"}"),a(`;

  `),s("span",{class:"comment"},"// 날짜 하한선"),a(`
  `),s("span",{class:"evt"},"sampleMinMax"),a("."),s("span",{class:"props"},"value"),a("."),s("span",{class:"props"},"minDate"),a(" = "),s("span",{class:"func"},[a("calDate("),s("span",{class:"evt"},"setPast"),a(")")]),a(`;

  `),s("span",{class:"comment"},"// 날짜 상한선"),a(`
  `),s("span",{class:"evt"},"sampleMinMax"),a("."),s("span",{class:"props"},"value"),a("."),s("span",{class:"props"},"minDate"),a(" = "),s("span",{class:"func"},[a("calDate("),s("span",{class:"evt"},"setFuture"),a(")")]),a(`;
`),s("span",{class:"mark"},"}"),a(`;

`),s("span",{class:"func"},[a("onBeforeMount"),s("span",{class:"mark"},"("),s("span",{class:"func"},"()"),a(),s("span",{class:"tag"},"=>"),a(" {")]),a(`
  `),s("span",{class:"func"},"setLimitDate"),s("span",{class:"braket"},"()"),a(`;
`),s("span",{class:"func"},"}"),s("span",{class:"mark"},")"),a(`;
`)])],-1),s("div",{class:"guide-info html"},[s("pre",null,[a(""),s("span",{class:"comment"},"// limit-date 속성에 선택 날짜 지정"),a(`
`),s("span",{class:"arrow"},"<"),s("span",{class:"component"},"calendar-item"),a(`
  `),s("span",{class:"props"},"id"),a("="),s("span",{class:"val"},'"CalSample1"'),a(`
  :`),s("span",{class:"props"},"limit-date"),a('="'),s("span",{class:"props"},"sampleMinMax"),a(`"
  @`),s("span",{class:"props"},"cal-act"),a('="'),s("span",{class:"func"},"selectDate"),a(`"
`),s("span",{class:"arrow"},"/>"),a(`
`)])],-1)])]),_:1})]),n[11]||(n[11]=s("h3",{class:"guide-stitle"},"날짜 영역(기간) 선택",-1)),s("div",T,[l(r,{id:"CalSample4",range:u.value,"define-date":D.value,onCalAct:c},null,8,["range","define-date"]),l(o,{id:"CalendarPeriod"},{accoTitle:p(()=>[...n[6]||(n[6]=[a("Code 보기",-1)])]),accoPanel:p(()=>[...n[7]||(n[7]=[s("div",{class:"guide-info script"},[s("pre",null,[a(""),s("span",{class:"comment"},"// 날짜 범위 샘플"),a(`
`),s("span",{class:"props"},"const"),a(),s("span",{class:"evt"},"sampleRange"),a(" = "),s("span",{class:"func"},[a("ref"),s("span",{class:"mark"},"("),a("{")]),a(`
  `),s("span",{class:"props"},"start:"),a(),s("span",{class:"val"},"'2026-02-14'"),a(`,
  `),s("span",{class:"props"},"end:"),a(),s("span",{class:"val"},"'2026-03-15'"),a(`,
`),s("span",{class:"func"},"}"),s("span",{class:"mark"},")"),a(`;

`),s("span",{class:"comment"},"// 기간 지정"),a(`
`),s("span",{class:"props"},"const"),a(),s("span",{class:"evt"},"samplePeriod"),a(" = "),s("span",{class:"func"},[a("ref"),s("span",{class:"mark"},"("),a("computed(")]),s("span",{class:"braket"},"()"),a(),s("span",{class:"tag"},"=>"),a(),s("span",{class:"val"},"`"),s("span",{class:"tag"},"${"),s("span",{class:"evt"},"sampleRange"),a("."),s("span",{class:"props"},"value"),a("."),s("span",{class:"props"},"start"),s("span",{class:"tag"},"}"),a(),s("span",{class:"val"},"~"),a(),s("span",{class:"tag"},"${"),s("span",{class:"evt"},"sampleRange"),a("."),s("span",{class:"props"},"value"),a("."),s("span",{class:"props"},"end"),s("span",{class:"tag"},"}"),s("span",{class:"val"},"`"),s("span",{class:"func"},")"),s("span",{class:"mark"},")"),a(`;
`)])],-1),s("div",{class:"guide-info html"},[s("pre",null,[a(""),s("span",{class:"arrow"},"<"),s("span",{class:"component"},"calendar-item"),a(`
  `),s("span",{class:"props"},"id"),a("="),s("span",{class:"val"},'"CalSample4"'),a(`
  :`),s("span",{class:"props"},"range"),a('="'),s("span",{class:"props"},"sampleRange"),a(`"
  :`),s("span",{class:"props"},"define-date"),a('="'),s("span",{class:"props"},"samplePeriod"),a(`"
  @`),s("span",{class:"props"},"cal-act"),a('="'),s("span",{class:"func"},"selectDate"),a(`"
`),s("span",{class:"arrow"},"/>"),a(`
`)])],-1)])]),_:1})])],64))}};export{y as default};
