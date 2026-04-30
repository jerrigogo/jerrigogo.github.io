import{m as v,o as y,c as T,a as s,b as t,i as o,j as a,t as w,F as x,k as M,r as S}from"./index-CqQPMq-B.js";import{u as C}from"./dialog-B1zjyWhR.js";import{_ as f}from"./AccordionItem-CyDVLSYq.js";import{_ as g}from"./TooltipItem-CjIm1ISM.js";import{_ as b}from"./TextfieldItem-ubXVoYN7.js";import"./chkDevice-7tcmUum2.js";const O={class:"modal-header"},$=["id"],D=["id"],j={class:"modal-body-inner"},q={class:"form-wrap"},A={__name:"ModalSample",props:{modalId:{type:String},modalType:{type:String},modalData:{type:Object}},setup(p){const r=v(),{alert:e,confirm:m}=C(),i=async()=>{await m({modalType:"confirm",modalCont:"진행하시겠습니까?",modalOkText:"",modalCancelText:""})?await e({modalType:"alert",modalCont:"완료되었습니다.",modalOkText:"",modalOkAct:()=>{console.log("alert ok!!")}}):console.log("confirm cancel!!")};function d(){r.close()}function u(c){i()}return(c,l)=>(y(),T(x,null,[s("header",O,[s("h1",{id:`${p.modalId}_title`,class:"modal-title"},[t(g,{id:"TipSample1","tip-title":"Modal Test"},{default:o(()=>[...l[0]||(l[0]=[s("p",null,"개인정보 처리목적 : 보험계약 상담, 보험계약 인수여부 결정을 위한 판단 등",-1)])]),_:1})],8,$)]),s("div",{id:`${p.modalId}_desc`,class:"modal-body"},[s("div",j,[s("div",null,[a(" receive data : "+w(p.modalData)+" ",1),l[2]||(l[2]=s("br",null,null,-1)),l[3]||(l[3]=s("br",null,null,-1)),l[4]||(l[4]=a(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",-1)),l[5]||(l[5]=s("a",{href:"#"},"anchor",-1)),l[6]||(l[6]=s("br",null,null,-1)),l[7]||(l[7]=s("button",{type:"button"},"button",-1)),l[8]||(l[8]=s("br",null,null,-1)),t(g,{id:"TipSample2","tip-title":"개인정보 처리목적","tip-click":!0},{default:o(()=>[...l[1]||(l[1]=[s("p",null,"개인정보 처리목적 : 보험계약 상담, 보험계약 인수여부 결정을 위한 판단 등",-1)])]),_:1}),s("div",q,[t(b,{id:`${p.modalId}-inpName`,label:"Input Label",name:"name",placeholder:"example...",autocomplete:"off"},null,8,["id"]),t(b,{type:"textarea",id:`${p.modalId}-textfield`,label:"Textarea Label",name:"txtarea-name",placeholder:"Textarea example...",maxlength:"300"},null,8,["id"])]),l[9]||(l[9]=a(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",-1))])])],8,D),s("footer",{class:"modal-footer"},[s("button",{type:"button",class:"modal-btn-gray",onClick:d},[...l[10]||(l[10]=[s("span",null,"취소",-1)])]),s("button",{type:"button",class:"modal-btn-primary",onClick:u},[...l[11]||(l[11]=[s("span",null,"확인",-1)])])])],64))}},L={class:"guide-cont"},I={class:"guide-cont"},B={class:"guide-cont type-row"},N={class:"guide-cont"},z={__name:"GuideModal",setup(p){const r=v(),{alert:e,confirm:m}=C(),i=()=>{e({modalCont:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",modalOkText:"",modalOkAct:()=>{console.log("alert ok!!")}})},d=async()=>{await m({modalCont:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br /> Do you want to ... ?",modalOkText:"",modalCancelText:""})?await e({modalCont:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",modalOkText:"",modalOkAct:()=>{console.log("alert ok!!")}}):console.log("confirm cancel!!")},u=S([{label:"sample",value:"1"}]),c=l=>{r.open(A,{modalType:l.type,modalData:u})};return M(()=>{}),(l,n)=>(y(),T(x,null,[n[14]||(n[14]=s("h3",{class:"guide-stitle"},"Alert modal",-1)),s("div",{class:"guide-cont type-row"},[s("button",{type:"button",class:"btn-primary",onClick:i},[...n[3]||(n[3]=[s("span",null,"Alert dialog",-1)])])]),s("div",L,[t(f,{id:"ModalAlert"},{accoTitle:o(()=>[...n[4]||(n[4]=[a("Code 보기",-1)])]),accoPanel:o(()=>[...n[5]||(n[5]=[s("div",{class:"guide-info script"},[s("pre",null,[a(""),s("span",{class:"comment"},"// modal store 파일 및 alert/confirm 관련 util js 파일 import"),a(`
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
`)])],-1)])]),_:1})]),n[15]||(n[15]=s("h3",{class:"guide-stitle"},"Confirm modal",-1)),s("div",{class:"guide-cont type-row"},[s("button",{type:"button",class:"btn-primary",onClick:d},[...n[6]||(n[6]=[s("span",null,"Confirm dialog",-1)])])]),s("div",I,[t(f,{id:"ModalConfirm"},{accoTitle:o(()=>[...n[7]||(n[7]=[a("Code 보기",-1)])]),accoPanel:o(()=>[...n[8]||(n[8]=[s("div",{class:"guide-info script"},[s("pre",null,[a(""),s("span",{class:"comment"},"// modal store 파일 및 alert/confirm 관련 util js 파일 import"),a(`
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
`)])],-1)])]),_:1})]),n[16]||(n[16]=s("h3",{class:"guide-stitle"},"Normal modal",-1)),s("div",B,[s("button",{type:"button",class:"btn-primary","aria-haspopup":"dialog","aria-controls":"SampleModal",onClick:n[0]||(n[0]=k=>c({type:"full"}))},[...n[9]||(n[9]=[s("span",null,"Type: Full",-1)])]),s("button",{type:"button",class:"btn-primary","aria-haspopup":"dialog","aria-controls":"SampleTopModal",onClick:n[1]||(n[1]=k=>c({type:"top"}))},[...n[10]||(n[10]=[s("span",null,"Type: Top",-1)])]),s("button",{type:"button",class:"btn-primary","aria-haspopup":"dialog","aria-controls":"SampleBottomModal",onClick:n[2]||(n[2]=k=>c({type:"bottom"}))},[...n[11]||(n[11]=[s("span",null,"Type: Bottom",-1)])])]),s("div",N,[t(f,{id:"Modal"},{accoTitle:o(()=>[...n[12]||(n[12]=[a("Code 보기",-1)])]),accoPanel:o(()=>[...n[13]||(n[13]=[s("div",{class:"guide-info html"},[s("pre",null,[a(""),s("span",{class:"arrow"},"<"),s("span",{class:"tag"},"button"),a(`
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
`)])],-1)])]),_:1})])],64))}};export{z as default};
