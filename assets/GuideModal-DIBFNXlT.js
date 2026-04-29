import{p as v,o as y,c as M,b as s,a as p,w as o,d as a,t as x,F as T,l as S,r as w}from"./index-I0azDRJO.js";import{u as C}from"./dialog-D000Ey7-.js";import{_ as f}from"./AccordionItem-B_79hf4e.js";import{_ as g}from"./TooltipItem-CcN6e77z.js";import{_ as b}from"./TextfieldItem-Ca7rDov0.js";import"./chkDevice-ChWy1LZg.js";const O={class:"modal-header"},I=["id"],$=["id"],D={class:"modal-body-inner"},A={class:"form-wrap"},j={__name:"ModalSample",props:{modalId:{type:String},modalType:{type:String},modalData:{type:Object}},setup(t){const r=v(),{alert:e,confirm:m}=C(),i=async()=>{await m({modalId:"ConfirmModal",modalType:"confirm",modalCont:"진행하시겠습니까?",modalOkText:"",modalCancelText:""})?await e({modalId:"AlertModal",modalType:"alert",modalCont:"완료되었습니다.",modalOkText:"",modalOkAct:()=>{console.log("alert ok!!")}}):console.log("confirm cancel!!")};function d(){r.close()}function u(c){i()}return(c,n)=>(y(),M(T,null,[s("header",O,[s("h1",{id:`${t.modalId}_title`,class:"modal-title"},[p(g,{id:"TipSample1","tip-title":"Modal Test"},{default:o(()=>[...n[0]||(n[0]=[s("p",null,"개인정보 처리목적 : 보험계약 상담, 보험계약 인수여부 결정을 위한 판단 등",-1)])]),_:1})],8,I)]),s("div",{id:`${t.modalId}_desc`,class:"modal-body"},[s("div",D,[s("div",null,[a(" receive data : "+x(t.modalData),1),n[2]||(n[2]=s("br",null,null,-1)),n[3]||(n[3]=s("br",null,null,-1)),n[4]||(n[4]=a(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",-1)),n[5]||(n[5]=s("a",{href:"#"},"anchor",-1)),n[6]||(n[6]=s("br",null,null,-1)),n[7]||(n[7]=s("button",{type:"button"},"button",-1)),n[8]||(n[8]=s("br",null,null,-1)),p(g,{id:"TipSample2","tip-title":"개인정보 처리목적","tip-click":!0},{default:o(()=>[...n[1]||(n[1]=[s("p",null,"개인정보 처리목적 : 보험계약 상담, 보험계약 인수여부 결정을 위한 판단 등",-1)])]),_:1}),s("div",A,[p(b,{id:`${t.modalId}-inpName`,label:"Input Label",name:"name",placeholder:"example...",autocomplete:"off"},null,8,["id"]),p(b,{type:"textarea",id:`${t.modalId}-textfield`,label:"Textarea Label",name:"txtarea-name",placeholder:"Textarea example...",maxlength:"300"},null,8,["id"])]),n[9]||(n[9]=a(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",-1))])])],8,$),s("footer",{class:"modal-footer"},[s("button",{type:"button",class:"modal-btn-gray",onClick:d},[...n[10]||(n[10]=[s("span",null,"취소",-1)])]),s("button",{type:"button",class:"modal-btn-primary",onClick:u},[...n[11]||(n[11]=[s("span",null,"확인",-1)])])])],64))}},q={class:"guide-cont"},L={class:"guide-cont"},B={class:"guide-cont type-row"},N={class:"guide-cont"},z={__name:"GuideModal",setup(t){const r=v(),{alert:e,confirm:m}=C(),i=()=>{e({modalId:"AlertModal",modalCont:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",modalOkText:"",modalOkAct:()=>{console.log("alert ok!!")}})},d=async()=>{await m({modalId:"ConfirmModal",modalCont:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br /> Do you want to ... ?",modalOkText:"",modalCancelText:""})?await e({modalId:"AlertModal",modalCont:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",modalOkText:"",modalOkAct:()=>{console.log("alert ok!!")}}):console.log("confirm cancel!!")},u=w([{label:"sample",value:"1"}]),c=n=>{r.open(j,{modalId:n.id,modalType:n.type,modalData:u})};return S(()=>{}),(n,l)=>(y(),M(T,null,[l[14]||(l[14]=s("h3",{class:"guide-stitle"},"Alert modal",-1)),s("div",{class:"guide-cont type-row"},[s("button",{type:"button",class:"btn-primary",onClick:i},[...l[3]||(l[3]=[s("span",null,"Alert dialog",-1)])])]),s("div",q,[p(f,{id:"ModalAlert"},{accoTitle:o(()=>[...l[4]||(l[4]=[a("Code 보기",-1)])]),accoPanel:o(()=>[...l[5]||(l[5]=[s("div",{class:"guide-info script"},[s("pre",null,[a(""),s("span",{class:"comment"},"// modal store 파일 및 alert/confirm 관련 util js 파일 import"),a(`
`),s("span",{class:"import"},"import"),a(),s("span",{class:"mark"},[a("{ "),s("span",{class:"props"},"useDialog"),a(" }")]),a(),s("span",{class:"import"},"from"),a(),s("span",{class:"val"},"'@/assets/js/dialog'"),a(`;

`),s("span",{class:"comment"},"// alert/confirm 관련 util js 파일에서 alert과 confirm 험수 저장"),a(`
`),s("span",{class:"tag"},"const"),a(),s("span",{class:"mark"},"{"),a(),s("span",{class:"func"},"alert"),a(", "),s("span",{class:"func"},"confirm"),a(),s("span",{class:"mark"},"}"),a(" = "),s("span",{class:"func"},[a("useDialog"),s("span",{class:"mark"},"()")]),a(`;

`),s("span",{class:"comment"},"// alert modal"),a(`
`),s("span",{class:"tag"},"const"),a(),s("span",{class:"func"},"alertModal"),a(" = "),s("span",{class:"mark"},"()"),a(),s("span",{class:"tag"},"=>"),a(),s("span",{class:"mark"},"{"),a(`
  `),s("span",{class:"func"},"alert("),a(`
    `),s("span",{class:"braket"},"{"),a(`
      `),s("span",{class:"props"},"modalId:"),a(),s("span",{class:"val"},"'AlertModal'"),a(`,
      `),s("span",{class:"props"},"modalType:"),a(),s("span",{class:"val"},"'alert'"),a(`,
      `),s("span",{class:"props"},"modalCont:"),a(),s("span",{class:"val"},"'진행이 완료되었습니다.''"),a(`,
      `),s("span",{class:"props"},"modalOkText:"),a(),s("span",{class:"val"},"''"),a(",  "),s("span",{class:"comment"},"// alert의 버튼 텍스트, 기본 값 '확인'"),a(`
      `),s("span",{class:"func"},[a("modalOkAct"),s("span",{class:"props"},":")]),a(),s("span",{class:"func"},"()"),a(),s("span",{class:"tag"},"=>"),a(),s("span",{class:"func"},"{"),a(`
        `),s("span",{class:"comment"},"// '확인' 버튼 눌렀을 때의 flow..."),a(`
        `),s("span",{class:"props"},"console"),a("."),s("span",{class:"func"},"log"),s("span",{class:"braket"},[a("("),s("span",{class:"val"},"'alert ok!!'"),a(")")]),a(`;
      `),s("span",{class:"func"},"}"),a(`,
    `),s("span",{class:"braket"},"}"),a(`,
  `),s("span",{class:"func"},")"),a(`;
`),s("span",{class:"mark"},"}"),a(`;
`)])],-1)])]),_:1})]),l[15]||(l[15]=s("h3",{class:"guide-stitle"},"Confirm modal",-1)),s("div",{class:"guide-cont type-row"},[s("button",{type:"button",class:"btn-primary",onClick:d},[...l[6]||(l[6]=[s("span",null,"Confirm dialog",-1)])])]),s("div",L,[p(f,{id:"ModalConfirm"},{accoTitle:o(()=>[...l[7]||(l[7]=[a("Code 보기",-1)])]),accoPanel:o(()=>[...l[8]||(l[8]=[s("div",{class:"guide-info script"},[s("pre",null,[a(""),s("span",{class:"comment"},"// modal store 파일 및 alert/confirm 관련 util js 파일 import"),a(`
`),s("span",{class:"import"},"import"),a(),s("span",{class:"mark"},[a("{ "),s("span",{class:"props"},"useDialog"),a(" }")]),a(),s("span",{class:"import"},"from"),a(),s("span",{class:"val"},"'@/assets/js/dialog'"),a(`;

`),s("span",{class:"comment"},"// alert/confirm 관련 util js 파일에서 alert과 confirm 험수 저장"),a(`
`),s("span",{class:"tag"},"const"),a(),s("span",{class:"mark"},"{"),a(),s("span",{class:"func"},"alert"),a(", "),s("span",{class:"func"},"confirm"),a(),s("span",{class:"mark"},"}"),a(" = "),s("span",{class:"func"},[a("useDialog"),s("span",{class:"mark"},"()")]),a(`;

`),s("span",{class:"comment"},"// confirm modal"),a(`
`),s("span",{class:"tag"},"const"),a(),s("span",{class:"func"},"confirmModal"),a(" = "),s("span",{class:"tag"},[a("async "),s("span",{class:"mark"},"()"),a(" =>")]),a(),s("span",{class:"mark"},"{"),a(`
  `),s("span",{class:"comment"},"// confirm을 띄운 버튼 저장"),a(`
  `),s("span",{class:"tag"},"const"),a(),s("span",{class:"evt"},"ok"),a(" = "),s("span",{class:"import"},"await"),a(),s("span",{class:"func"},"confirm("),a(`
    `),s("span",{class:"braket"},"{"),a(`
      `),s("span",{class:"props"},"modalId:"),a(),s("span",{class:"val"},"'ConfirmModal'"),a(`,
      `),s("span",{class:"props"},"modalType:"),a(),s("span",{class:"val"},"'confirm'"),a(`,
      `),s("span",{class:"props"},"modalCont:"),a(),s("span",{class:"val"},"'진행하시겠습니까?'"),a(`,
      `),s("span",{class:"props"},"modalOkText:"),a(),s("span",{class:"val"},"''"),a(",  "),s("span",{class:"comment"},"// confirm의 확인 버튼 텍스트, 기본 값 '확인'"),a(`
      `),s("span",{class:"props"},"modalCancelText:"),a(),s("span",{class:"val"},"''"),a(",  "),s("span",{class:"comment"},"// confirm의 취소 버튼 텍스트, 기본 값 '취소'"),a(`
    `),s("span",{class:"braket"},"}"),a(`,
  `),s("span",{class:"func"},")"),a(`;

  `),s("span",{class:"comment"},"// confirm에서 '확인' 버튼 눌렀을 때"),a(`
  `),s("span",{class:"import"},"if"),a(),s("span",{class:"func"},[a("("),s("span",{class:"evt"},"ok"),a(") {")]),a(`
    `),s("span",{class:"comment"},"// confirm 이후 진행되어야 하는 flow에 대한 script 넣을 곳"),a(`
    `),s("span",{class:"comment"},"// ex) alert modal 띄우기"),a(`
    `),s("span",{class:"import"},"await"),a(),s("span",{class:"func"},"alert"),s("span",{class:"braket"},"("),a(`
      `),s("span",{class:"mark"},"{"),a(`
        `),s("span",{class:"props"},"modalId:"),a(),s("span",{class:"val"},"'AlertModal'"),a(`,
        `),s("span",{class:"props"},"modalType:"),a(),s("span",{class:"val"},"'alert'"),a(`,
        `),s("span",{class:"props"},"modalCont:"),a(),s("span",{class:"val"},"'진행이 완료되었습니다.'"),a(`,
        `),s("span",{class:"props"},"modalOkText:"),a(),s("span",{class:"val"},"''"),a(`,
        `),s("span",{class:"func"},[a("modalOkAct"),s("span",{class:"props"},":")]),a(),s("span",{class:"func"},[a("() "),s("span",{class:"tag"},"=>"),a(" {")]),a(`
          `),s("span",{class:"comment"},"// '확인' 버튼 눌렀을 때 진행되는 flow..."),a(`
          `),s("span",{class:"props"},"console"),a("."),s("span",{class:"func"},"log"),s("span",{class:"braket"},[a("("),s("span",{class:"val"},"'alert ok!!'"),a(")")]),a(`;
        `),s("span",{class:"func"},"}"),a(`,
      `),s("span",{class:"mark"},"}"),a(`,
    `),s("span",{class:"braket"},")"),a(`;
  `),s("span",{class:"func"},"}"),a(`
  `),s("span",{class:"comment"},"// confirm에서 '취소' 버튼 눌렀을 때"),a(`
  `),s("span",{class:"import"},"else"),a(),s("span",{class:"func"},"{"),a(`
    `),s("span",{class:"props"},"console"),a("."),s("span",{class:"func"},"log"),s("span",{class:"braket"},[a("("),s("span",{class:"val"},"'confirm cancel!!'"),a(")")]),a(`;
  `),s("span",{class:"func"},"}"),a(`
`),s("span",{class:"mark"},"}"),a(`;
`)])],-1)])]),_:1})]),l[16]||(l[16]=s("h3",{class:"guide-stitle"},"Normal modal",-1)),s("div",B,[s("button",{type:"button",class:"btn-primary","aria-haspopup":"dialog","aria-controls":"SampleModal",onClick:l[0]||(l[0]=k=>c({id:"SampleModal",type:"full"}))},[...l[9]||(l[9]=[s("span",null,"Type: Full",-1)])]),s("button",{type:"button",class:"btn-primary","aria-haspopup":"dialog","aria-controls":"SampleTopModal",onClick:l[1]||(l[1]=k=>c({id:"SampleTopModal",type:"top"}))},[...l[10]||(l[10]=[s("span",null,"Type: Top",-1)])]),s("button",{type:"button",class:"btn-primary","aria-haspopup":"dialog","aria-controls":"SampleBottomModal",onClick:l[2]||(l[2]=k=>c({id:"SampleBottomModal",type:"bottom"}))},[...l[11]||(l[11]=[s("span",null,"Type: Bottom",-1)])])]),s("div",N,[p(f,{id:"Modal"},{accoTitle:o(()=>[...l[12]||(l[12]=[a("Code 보기",-1)])]),accoPanel:o(()=>[...l[13]||(l[13]=[s("div",{class:"guide-info html"},[s("pre",null,[a(""),s("span",{class:"arrow"},"<"),s("span",{class:"tag"},"button"),a(`
  `),s("span",{class:"props"},"type"),a("="),s("span",{class:"val"},'"button"'),a(`
  `),s("span",{class:"props"},"class"),a("="),s("span",{class:"val"},'"btn-primary"'),a(`
  `),s("span",{class:"props"},"aria-haspopup"),a("="),s("span",{class:"val"},'"dialog"'),a(`
  `),s("span",{class:"props"},"aria-controls"),a("="),s("span",{class:"val"},'"SampleModal"'),a(`
  @`),s("span",{class:"props"},"click"),a('="'),s("span",{class:"func"},"modalOpen("),s("span",{class:"import"},"{"),a(),s("span",{class:"props"},"id:"),a(),s("span",{class:"val"},"'SampleModal'"),a(", "),s("span",{class:"props"},"type:"),a(),s("span",{class:"val"},"'full'"),a(),s("span",{class:"import"},"}"),s("span",{class:"func"},")"),a('"'),s("span",{class:"arrow"},">"),a(`
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
    `),s("span",{class:"props"},"modalId: _opt.id"),a(`,
    `),s("span",{class:"props"},"modalType: _opt.type"),a(`,
    `),s("span",{class:"props"},"modalData:"),a(),s("span",{class:"evt"},"sampleData"),a(`,
  `),s("span",{class:"braket"},"}"),s("span",{class:"func"},")"),a(`;
`),s("span",{class:"mark"},"}"),a(`;
`)])],-1)])]),_:1})])],64))}};export{z as default};
