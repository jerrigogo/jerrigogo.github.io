import{p as y,o as S,c as x,a as s,b as o,j as c,k as a,t as M,F as T,r as v,l as O}from"./index-CWx3Oa3O.js";import{u as C}from"./dialog-oRFPBoBR.js";import{_ as b}from"./CollapseComp-CO3-BEaq.js";import{_ as $}from"./SelectboxComp-_rWqMTE-.js";import{_ as k}from"./TooltipComp-BoKagn0v.js";import{_ as g}from"./TextfieldComp-DOzlWzlU.js";const D={class:"modal-header"},j=["id"],q=["id"],A={class:"modal-body-inner"},L={class:"form-wrap"},V={__name:"ModalSample",props:{modalId:{type:String},modalType:{type:String},modalData:{type:Object}},setup(t){const i=y(),{alert:r,confirm:d}=C(),u=async()=>{await d({modalType:"confirm",modalCont:"진행하시겠습니까?",modalOkText:"",modalCancelText:""})?await r({modalType:"alert",modalCont:"완료되었습니다.",modalOkText:"",modalOkAct:()=>{console.log("alert ok!!")}}):console.log("confirm cancel!!")},m=v(),f=v([{label:"Select option1",value:"1"},{label:"Select option2",value:"2"},{label:"Select option3",value:"3"},{label:"Select option4",value:"4"},{label:"Select option5",value:"5"},{label:"Select option6",value:"6"},{label:"Select option7",value:"7"},{label:"Select option8",value:"8"},{label:"Select option9",value:"9"},{label:"Select option10",value:"10"},{label:"Select option11",value:"11"},{label:"Select option12",value:"12"},{label:"Select option13",value:"13"},{label:"Select option14",value:"14"},{label:"Select option15",value:"15"},{label:"Select option16",value:"16"},{label:"Select option17",value:"17"},{label:"Select option18",value:"18"},{label:"Select option19",value:"19"},{label:"Select option20",value:"20"}]);function p(){i.close()}function e(l){u()}return(l,n)=>(S(),x(T,null,[s("header",D,[s("h1",{id:`${t.modalId}_title`,class:"modal-title"},[o(k,{id:"TipSample1","tip-title":"Modal Test"},{default:c(()=>[...n[1]||(n[1]=[s("p",null,"개인정보 처리목적 : 보험계약 상담, 보험계약 인수여부 결정을 위한 판단 등",-1)])]),_:1})],8,j)]),s("div",{id:`${t.modalId}_desc`,class:"modal-body"},[s("div",A,[a(" receive data : "+M(t.modalData)+" ",1),n[3]||(n[3]=s("br",null,null,-1)),n[4]||(n[4]=s("br",null,null,-1)),n[5]||(n[5]=a(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",-1)),n[6]||(n[6]=s("a",{href:"#"},"anchor",-1)),n[7]||(n[7]=s("br",null,null,-1)),n[8]||(n[8]=s("button",{type:"button"},"button",-1)),o($,{modelValue:m.value,"onUpdate:modelValue":n[0]||(n[0]=w=>m.value=w),id:"SelectExamle1",label:"Select Example1",title:"Select Exmaple1",placeholder:"선택하세요","opt-list":f.value},null,8,["modelValue","opt-list"]),n[9]||(n[9]=s("br",null,null,-1)),n[10]||(n[10]=s("br",null,null,-1)),o(k,{id:"TipSample2","tip-title":"개인정보 처리목적","tip-click":!0},{default:c(()=>[...n[2]||(n[2]=[s("p",null,"개인정보 처리목적 : 보험계약 상담, 보험계약 인수여부 결정을 위한 판단 등",-1)])]),_:1}),s("div",L,[o(g,{id:`${t.modalId}-inpName`,label:"Input Label",name:"name",placeholder:"example...",autocomplete:"off"},null,8,["id"]),o(g,{type:"textarea",id:`${t.modalId}-textfield`,label:"Textarea Label",name:"txtarea-name",placeholder:"Textarea example...",maxlength:"300"},null,8,["id"])]),n[11]||(n[11]=a(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",-1))])],8,q),s("footer",{class:"modal-footer"},[s("button",{type:"button",class:"modal-btn-gray",onClick:p},[...n[12]||(n[12]=[s("span",null,"취소",-1)])]),s("button",{type:"button",class:"modal-btn-primary",onClick:e},[...n[13]||(n[13]=[s("span",null,"확인",-1)])])])],64))}},I={class:"guide-cont"},B={class:"guide-cont"},E={class:"guide-cont type-row"},N={class:"guide-cont"},K={__name:"GuideModal",setup(t){const i=y(),{alert:r,confirm:d}=C(),u=()=>{r({modalCont:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",modalOkText:"",modalOkAct:()=>{console.log("alert ok!!")}})},m=async()=>{await d({modalCont:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br /> Do you want to ... ?",modalOkText:"",modalCancelText:""})?await r({modalCont:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",modalOkText:"",modalOkAct:()=>{console.log("alert ok!!")}}):console.log("confirm cancel!!")},f=v([{label:"sample",value:"1"}]),p=e=>{i.open(V,{modalType:e.type,modalData:f})};return O(()=>{}),(e,l)=>(S(),x(T,null,[l[11]||(l[11]=s("h3",{class:"guide-stitle"},"Alert modal",-1)),s("div",{class:"guide-cont type-row"},[s("button",{type:"button",class:"btn-primary",onClick:u},[...l[3]||(l[3]=[s("span",null,"Alert dialog",-1)])])]),s("div",I,[o(b,{id:"ModalAlert",title:"Code 보기"},{panel:c(()=>[...l[4]||(l[4]=[s("div",{class:"guide-info script"},[s("pre",null,[a(""),s("span",{class:"comment"},"// modal store 파일 및 alert/confirm 관련 util js 파일 import"),a(`
`),s("span",{class:"import"},"import"),a(),s("span",{class:"mark"},[a("{ "),s("span",{class:"props"},"useDialog"),a(" }")]),a(),s("span",{class:"import"},"from"),a(),s("span",{class:"val"},"'@/assets/js/dialog'"),a(`;

`),s("span",{class:"comment"},"// alert/confirm 관련 util js 파일에서 alert과 confirm 험수 저장"),a(`
`),s("span",{class:"tag"},"const"),a(),s("span",{class:"mark"},"{"),a(),s("span",{class:"func"},"alert"),a(", "),s("span",{class:"func"},"confirm"),a(),s("span",{class:"mark"},"}"),a(" = "),s("span",{class:"func"},[a("useDialog"),s("span",{class:"mark"},"()")]),a(`;

`),s("span",{class:"comment"},"// alert modal"),a(`
`),s("span",{class:"tag"},"const"),a(),s("span",{class:"func"},"alertModal"),a(" = "),s("span",{class:"mark"},"()"),a(),s("span",{class:"tag"},"=>"),a(),s("span",{class:"mark"},"{"),a(`
  `),s("span",{class:"func"},"alert("),s("span",{class:"braket"},"{"),a(`
    `),s("span",{class:"props"},"modalType:"),a(),s("span",{class:"val"},"'alert'"),a(`,
    `),s("span",{class:"props"},"modalCont:"),a(),s("span",{class:"val"},"'진행이 완료되었습니다.''"),a(`,
    `),s("span",{class:"props"},"modalOkText:"),a(),s("span",{class:"val"},"''"),a(",  "),s("span",{class:"comment"},"// alert의 버튼 텍스트, 기본 값 '확인'"),a(`
    `),s("span",{class:"func"},[a("modalOkAct"),s("span",{class:"props"},":")]),a(),s("span",{class:"func"},"()"),a(),s("span",{class:"tag"},"=>"),a(),s("span",{class:"func"},"{"),a(`
      `),s("span",{class:"comment"},"// '확인' 버튼 눌렀을 때의 flow..."),a(`
      `),s("span",{class:"props"},"console"),a("."),s("span",{class:"func"},"log"),s("span",{class:"braket"},[a("("),s("span",{class:"val"},"'alert ok!!'"),a(")")]),a(`;
    `),s("span",{class:"func"},"}"),a(`,
  `),s("span",{class:"braket"},"}"),s("span",{class:"func"},")"),a(`;
`),s("span",{class:"mark"},"}"),a(`;
`)])],-1)])]),_:1})]),l[12]||(l[12]=s("h3",{class:"guide-stitle"},"Confirm modal",-1)),s("div",{class:"guide-cont type-row"},[s("button",{type:"button",class:"btn-primary",onClick:m},[...l[5]||(l[5]=[s("span",null,"Confirm dialog",-1)])])]),s("div",B,[o(b,{id:"ModalConfirm",title:"Code 보기"},{panel:c(()=>[...l[6]||(l[6]=[s("div",{class:"guide-info script"},[s("pre",null,[a(""),s("span",{class:"comment"},"// modal store 파일 및 alert/confirm 관련 util js 파일 import"),a(`
`),s("span",{class:"import"},"import"),a(),s("span",{class:"mark"},[a("{ "),s("span",{class:"props"},"useDialog"),a(" }")]),a(),s("span",{class:"import"},"from"),a(),s("span",{class:"val"},"'@/assets/js/dialog'"),a(`;

`),s("span",{class:"comment"},"// alert/confirm 관련 util js 파일에서 alert과 confirm 험수 저장"),a(`
`),s("span",{class:"tag"},"const"),a(),s("span",{class:"mark"},"{"),a(),s("span",{class:"func"},"alert"),a(", "),s("span",{class:"func"},"confirm"),a(),s("span",{class:"mark"},"}"),a(" = "),s("span",{class:"func"},[a("useDialog"),s("span",{class:"mark"},"()")]),a(`;

`),s("span",{class:"comment"},"// confirm modal"),a(`
`),s("span",{class:"tag"},"const"),a(),s("span",{class:"func"},"confirmModal"),a(" = "),s("span",{class:"tag"},[a("async "),s("span",{class:"mark"},"()"),a(" =>")]),a(),s("span",{class:"mark"},"{"),a(`
  `),s("span",{class:"comment"},"// confirm을 띄운 버튼 저장"),a(`
  `),s("span",{class:"tag"},"const"),a(),s("span",{class:"evt"},"ok"),a(" = "),s("span",{class:"import"},"await"),a(),s("span",{class:"func"},"confirm("),s("span",{class:"braket"},"{"),a(`
    `),s("span",{class:"props"},"modalType:"),a(),s("span",{class:"val"},"'confirm'"),a(`,
    `),s("span",{class:"props"},"modalCont:"),a(),s("span",{class:"val"},"'진행하시겠습니까?'"),a(`,
    `),s("span",{class:"props"},"modalOkText:"),a(),s("span",{class:"val"},"''"),a(",  "),s("span",{class:"comment"},"// confirm의 확인 버튼 텍스트, 기본 값 '확인'"),a(`
    `),s("span",{class:"props"},"modalCancelText:"),a(),s("span",{class:"val"},"''"),a(",  "),s("span",{class:"comment"},"// confirm의 취소 버튼 텍스트, 기본 값 '취소'"),a(`
  `),s("span",{class:"braket"},"}"),s("span",{class:"func"},")"),a(`;

  `),s("span",{class:"comment"},"// confirm에서 '확인' 버튼 눌렀을 때"),a(`
  `),s("span",{class:"import"},"if"),a(),s("span",{class:"func"},[a("("),s("span",{class:"evt"},"ok"),a(") {")]),a(`
    `),s("span",{class:"comment"},"// confirm 이후 진행되어야 하는 flow에 대한 script 넣을 곳"),a(`
    `),s("span",{class:"comment"},"// ex) alert modal 띄우기"),a(`
    `),s("span",{class:"import"},"await"),a(),s("span",{class:"func"},"alert"),s("span",{class:"braket"},"("),s("span",{class:"mark"},"{"),a(`
      `),s("span",{class:"props"},"modalType:"),a(),s("span",{class:"val"},"'alert'"),a(`,
      `),s("span",{class:"props"},"modalCont:"),a(),s("span",{class:"val"},"'진행이 완료되었습니다.'"),a(`,
      `),s("span",{class:"props"},"modalOkText:"),a(),s("span",{class:"val"},"''"),a(`,
      `),s("span",{class:"func"},[a("modalOkAct"),s("span",{class:"props"},":")]),a(),s("span",{class:"func"},[a("() "),s("span",{class:"tag"},"=>"),a(" {")]),a(`
        `),s("span",{class:"comment"},"// '확인' 버튼 눌렀을 때 진행되는 flow..."),a(`
        `),s("span",{class:"props"},"console"),a("."),s("span",{class:"func"},"log"),s("span",{class:"braket"},[a("("),s("span",{class:"val"},"'alert ok!!'"),a(")")]),a(`;
      `),s("span",{class:"func"},"}"),a(`,
    `),s("span",{class:"mark"},"}"),s("span",{class:"braket"},")"),a(`;
  `),s("span",{class:"func"},"}"),a(`
  `),s("span",{class:"comment"},"// confirm에서 '취소' 버튼 눌렀을 때"),a(`
  `),s("span",{class:"import"},"else"),a(),s("span",{class:"func"},"{"),a(`
    `),s("span",{class:"props"},"console"),a("."),s("span",{class:"func"},"log"),s("span",{class:"braket"},[a("("),s("span",{class:"val"},"'confirm cancel!!'"),a(")")]),a(`;
  `),s("span",{class:"func"},"}"),a(`
`),s("span",{class:"mark"},"}"),a(`;
`)])],-1)])]),_:1})]),l[13]||(l[13]=s("h3",{class:"guide-stitle"},"Normal modal",-1)),s("div",E,[s("button",{type:"button",class:"btn-primary","aria-haspopup":"dialog","aria-controls":"SampleModal",onClick:l[0]||(l[0]=n=>p({type:"full"}))},[...l[7]||(l[7]=[s("span",null,"Type: Full",-1)])]),s("button",{type:"button",class:"btn-primary","aria-haspopup":"dialog","aria-controls":"SampleTopModal",onClick:l[1]||(l[1]=n=>p({type:"top"}))},[...l[8]||(l[8]=[s("span",null,"Type: Top",-1)])]),s("button",{type:"button",class:"btn-primary","aria-haspopup":"dialog","aria-controls":"SampleBottomModal",onClick:l[2]||(l[2]=n=>p({type:"bottom"}))},[...l[9]||(l[9]=[s("span",null,"Type: Bottom",-1)])])]),s("div",N,[o(b,{id:"Modal",title:"Code 보기"},{panel:c(()=>[...l[10]||(l[10]=[s("div",{class:"guide-info html"},[s("pre",null,[a(""),s("span",{class:"arrow"},"<"),s("span",{class:"tag"},"button"),a(`
  `),s("span",{class:"props"},"type"),a("="),s("span",{class:"val"},'"button"'),a(`
  `),s("span",{class:"props"},"class"),a("="),s("span",{class:"val"},'"btn-primary"'),a(`
  `),s("span",{class:"props"},"aria-haspopup"),a("="),s("span",{class:"val"},'"dialog"'),a(`
  `),s("span",{class:"props"},"aria-controls"),a("="),s("span",{class:"val"},'"SampleModal"'),a(`
  @`),s("span",{class:"props"},"click"),a('="'),s("span",{class:"func"},"modalOpen("),s("span",{class:"import"},"{"),a(),s("span",{class:"props"},"type:"),a(),s("span",{class:"val"},"'full'"),a(),s("span",{class:"import"},"}"),s("span",{class:"func"},")"),a('"'),s("span",{class:"arrow"},">"),a(`
  `),s("span",{class:"arrow"},"<"),s("span",{class:"tag"},"span"),s("span",{class:"arrow"},">"),a("Type: Full"),s("span",{class:"arrow"},"</"),s("span",{class:"tag"},"span"),s("span",{class:"arrow"},">"),a(`
`),s("span",{class:"arrow"},"</"),s("span",{class:"tag"},"button"),s("span",{class:"arrow"},">"),a(`
`)])],-1),s("div",{class:"guide-info script"},[s("pre",null,[a(""),s("span",{class:"comment"},"// modal store 파일 및 modal component import"),a(`
`),s("span",{class:"import"},"import"),a(),s("span",{class:"mark"},[a("{ "),s("span",{class:"props"},"useModalStore"),a(" }")]),a(),s("span",{class:"import"},"from"),a(),s("span",{class:"val"},"'@/stores/modal'"),a(`;
`),s("span",{class:"import"},"import"),a(),s("span",{class:"props"},"ModalSample"),a(),s("span",{class:"import"},"from"),a(),s("span",{class:"val"},"'@/views/guide/ModalSample.vue'"),a(`;

`),s("span",{class:"comment"},"// modal store 파일(/stores/modal.js)에서 useModalStore 저장"),a(`
`),s("span",{class:"tag"},"const"),a(),s("span",{class:"evt"},"modalStore"),a(" = "),s("span",{class:"func"},[a("useModalStore"),s("span",{class:"mark"},"()")]),a(`;

`),s("span",{class:"comment"},"// modal에 전달할 data 예시"),a(`
`),s("span",{class:"tag"},"const"),a(),s("span",{class:"evt"},"sampleData"),a(" = "),s("span",{class:"func"},"ref"),s("span",{class:"mark"},"("),s("span",{class:"func"},"["),s("span",{class:"braket"},"{"),a(),s("span",{class:"props"},"label:"),a(),s("span",{class:"val"},"'sample'"),a(", "),s("span",{class:"props"},"value:"),a(),s("span",{class:"val"},"'1'"),a(),s("span",{class:"braket"},"}"),s("span",{class:"func"},"]"),s("span",{class:"mark"},")"),a(`; // send data

`),s("span",{class:"comment"},"// open modal"),a(`
`),s("span",{class:"tag"},"const"),a(),s("span",{class:"func"},"modalOpen"),a(" = "),s("span",{class:"mark"},[a("("),s("span",{class:"props"},"_opt"),a(")")]),a(),s("span",{class:"tag"},"=>"),a(),s("span",{class:"mark"},"{"),a(`
  `),s("span",{class:"evt"},"modalStore"),a("."),s("span",{class:"func"},"open("),s("span",{class:"props"},"ModalSample"),a(", "),s("span",{class:"braket"},"{"),a(`
    `),s("span",{class:"props"},"modalType: _opt.type"),a(`,
    `),s("span",{class:"props"},"modalData:"),a(),s("span",{class:"evt"},"sampleData"),a(`,
  `),s("span",{class:"braket"},"}"),s("span",{class:"func"},")"),a(`;
`),s("span",{class:"mark"},"}"),a(`;
`)])],-1)])]),_:1})])],64))}};export{K as default};
