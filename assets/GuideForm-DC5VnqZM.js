import{o as D,c as A,a as s,b as n,j as t,N as H,t as O,h as $,e as p,p as F,m as a}from"./index-BCeJJJtI.js";import{_ as d}from"./AccordionItem-CEFHjSbv.js";import{_ as o}from"./TextfieldItem-BhQblTYL.js";const G={class:"contents"},W={class:"guide-cont-wrap"},z={class:"guide-cont"},J={class:"form-wrap col2"},Q={class:"guide-cont"},X={class:"guide-cont"},Y={class:"form-wrap"},Z={class:"guide-cont"},_={class:"guide-cont"},ss={class:"guide-cont"},as={class:"guide-cont"},ls={class:"guide-cont-wrap"},es={class:"guide-cont"},ns={class:"guide-cont"},ps={class:"guide-cont"},os={class:"form-wrap col2"},ts={class:"guide-cont"},rs={key:0,class:"form-error-msg"},ms={__name:"GuideForm",setup(ds){const V=p(),y=p("텍스트 입력 완료"),I=p("텍스트 입력 완료"),w=p("텍스트 입력 완료"),T=p("텍스트 입력 완료"),h=p("텍스트 입력 완료"),K=p("Error Message"),U=p(),k=p("123456789"),E=p(),P=p("01012345678"),M=p("1000000000"),N=p("1000000000"),C=p(),b=p(),j=x=>{x?(b.value=null,console.log(x)):b.value="검색 키워드를 입력해 주세요."},S=p("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."),L=p(""),v=p([]),u=p({}),i=p({name:"",phone:"",email:""}),B=async()=>{if(u.value={},i.value.name||(u.value.name="이름을 입력해 주세요."),i.value.phone||(u.value.phone="연락처를 입력해 주세요."),Object.keys(u.value).length>0){await F();const e=["name","phone"].findIndex(g=>u.value[g]);e!==-1&&v.value[e]&&v.value[e].focus()}},f=p([]),q=p({id:"netive",pwd:"!netive1234"}),r=p({id:"",pwd:""}),c=p({}),m=p(),R=async()=>{if(c.value={},m.value="",r.value.id&&r.value.pwd?(r.value.id!==q.value.id||r.value.pwd!==q.value.pwd)&&(c.value.id="error",m.value="아이디와 비밀번호를 확인 후 다시 입력해 주세요."):r.value.id?r.value.pwd||(c.value.pwd="error",m.value="비밀번호를 입력해 주세요."):(c.value.id="error",m.value="아이디를 입력해 주세요."),Object.keys(c.value).length>0){await F();const e=["id","pwd"].findIndex(g=>c.value[g]);e!==-1&&f.value[e]&&f.value[e].focus()}};return(x,l)=>(D(),A("div",G,[l[48]||(l[48]=s("h2",{class:"guide-title"},"Forms",-1)),l[49]||(l[49]=s("h3",{class:"guide-stitle"},"Input box",-1)),s("div",W,[l[34]||(l[34]=s("h4",{class:"guide-sstitle"},'Default: type="text"',-1)),s("div",z,[s("div",J,[n(o,{modelValue:V.value,"onUpdate:modelValue":l[0]||(l[0]=e=>V.value=e),type:"text",id:"TextInp",label:"일반 텍스트(기본)",name:"text-inp",placeholder:"placeholder text"},null,8,["modelValue"]),n(o,{modelValue:y.value,"onUpdate:modelValue":l[1]||(l[1]=e=>y.value=e),type:"text",id:"TextInp2",label:"일반 텍스트: filled",name:"text-inp",placeholder:"placeholder text"},null,8,["modelValue"]),n(o,{modelValue:I.value,"onUpdate:modelValue":l[2]||(l[2]=e=>I.value=e),type:"text",id:"TextInp3",label:"일반 텍스트: required",name:"text-inp",placeholder:"placeholder text",required:""},null,8,["modelValue"]),n(o,{modelValue:w.value,"onUpdate:modelValue":l[3]||(l[3]=e=>w.value=e),type:"text",id:"TextInp4",label:"일반 텍스트: readonly",name:"text-inp",placeholder:"placeholder text",readonly:""},null,8,["modelValue"]),n(o,{modelValue:T.value,"onUpdate:modelValue":l[4]||(l[4]=e=>T.value=e),type:"text",id:"TextInp5",label:"일반 텍스트: disabled",name:"text-inp",placeholder:"placeholder text",disabled:""},null,8,["modelValue"]),n(o,{modelValue:h.value,"onUpdate:modelValue":l[5]||(l[5]=e=>h.value=e),type:"text",id:"TextInp6",label:"일반 텍스트: error상태",name:"text-inp",placeholder:"placeholder text",error:K.value},null,8,["modelValue","error"])]),n(d,{id:"InputDefault"},{accoTitle:t(()=>[...l[20]||(l[20]=[a("Code 보기",-1)])]),accoPanel:t(()=>[...l[21]||(l[21]=[s("div",{class:"guide-info script"},[s("pre",null,[a(""),s("span",{class:"import"},"import"),a(),s("span",{class:"mark"},[a("{ "),s("span",{class:"props"},"ref"),a(" }")]),a(),s("span",{class:"import"},"from"),a(),s("span",{class:"val"},"'vue'"),a(`;
`),s("span",{class:"import"},"import"),a(),s("span",{class:"props"},"TextfieldItem"),a(),s("span",{class:"import"},"from"),a(),s("span",{class:"val"},"'@/components/TextfieldItem.vue'"),a(`;

`),s("span",{class:"comment"},"// textfield 컴포넌트의 v-model에 연동될 값"),a(`
`),s("span",{class:"tag"},"const"),a(),s("span",{class:"evt"},"TextInp"),a(" = "),s("span",{class:"func"},"ref"),s("span",{class:"mark"},"()"),a(`;
`)])],-1),s("div",{class:"guide-info html"},[s("pre",null,[a(""),s("span",{class:"comment"},`/**
  1. property: HTML 'input'의 property와 동일하게 사용 가능
  2. a11y 관련 속성(WAI-ARIA): 'textfield-item' 컴포넌트에서 최대한 지원 중
  3. validate 결과, error 발생 시 ':error="에러 내용"' 추가
  4. 'type="hidden"'의 경우, HTML 'input type="hidden"' 그대로 사용
*/`),a(`
`),s("span",{class:"arrow"},"<"),s("span",{class:"component"},"textfield-item"),a(`
  `),s("span",{class:"props"},"v-model"),a('="'),s("span",{class:"props"},"textInp"),a(`"
  `),s("span",{class:"props"},"type"),a("="),s("span",{class:"val"},'"text"'),a(`
  `),s("span",{class:"props"},"id"),a("="),s("span",{class:"val"},'"TextInp"'),a(`
  `),s("span",{class:"props"},"label"),a("="),s("span",{class:"val"},'"일반 텍스트(기본)"'),a(`
  `),s("span",{class:"props"},"name"),a("="),s("span",{class:"val"},'"text-inp"'),a(`
  `),s("span",{class:"props"},"placeholder"),a("="),s("span",{class:"val"},'"placeholder text"'),a(),s("span",{class:"arrow"},"/>"),a(`
`)])],-1)])]),_:1})]),l[35]||(l[35]=s("h4",{class:"guide-sstitle"},"Label 없는 경우",-1)),s("div",Q,[n(o,{modelValue:U.value,"onUpdate:modelValue":l[6]||(l[6]=e=>U.value=e),type:"text",id:"NoLabel",label:"Label 없는 경우",name:"nolabel-inp",placeholder:"placeholder text","no-label":!0},null,8,["modelValue"]),n(d,{id:"AccoNolabel"},{accoTitle:t(()=>[...l[22]||(l[22]=[a("Code 보기",-1)])]),accoPanel:t(()=>[...l[23]||(l[23]=[s("div",{class:"guide-info html"},[s("pre",null,[a(""),s("span",{class:"comment"},'// :no-label="true" 추가'),a(`
`),s("span",{class:"arrow"},"<"),s("span",{class:"component"},"textfield-item"),a(`
  `),s("span",{class:"props"},"v-model"),a('="'),s("span",{class:"props"},"noLabel"),a(`"
  `),s("span",{class:"props"},"type"),a("="),s("span",{class:"val"},'"text"'),a(`
  `),s("span",{class:"props"},"id"),a("="),s("span",{class:"val"},'"NoLabel"'),a(`
  `),s("span",{class:"props"},"label"),a("="),s("span",{class:"val"},'"Label 없는 경우"'),a(`
  `),s("span",{class:"props"},"name"),a("="),s("span",{class:"val"},'"nolabel-inp"'),a(`
  `),s("span",{class:"props"},"placeholder"),a("="),s("span",{class:"val"},'"placeholder text"'),a(`
  :`),s("span",{class:"props"},"no-label"),a('="'),s("span",{class:"boolean"},"true"),a('" '),s("span",{class:"arrow"},"/>"),a(`
`)])],-1)])]),_:1})]),l[36]||(l[36]=s("h4",{class:"guide-sstitle"},'type="number": 숫자만 입력',-1)),s("div",X,[s("div",Y,[n(o,{modelValue:k.value,"onUpdate:modelValue":l[7]||(l[7]=e=>k.value=e),type:"number",id:"NumberInp",label:"숫자만 입력",name:"number-inp",placeholder:"숫자만 입력"},null,8,["modelValue"]),n(o,{modelValue:E.value,"onUpdate:modelValue":l[8]||(l[8]=e=>E.value=e),type:"number",id:"NumMaxInp",label:"숫자만 입력(자리수 제한)",name:"number-max",placeholder:"숫자만 입력",maxlength:"10"},null,8,["modelValue"])]),n(d,{id:"NumberInput"},{accoTitle:t(()=>[...l[24]||(l[24]=[a("Code 보기",-1)])]),accoPanel:t(()=>[...l[25]||(l[25]=[s("div",{class:"guide-info html"},[s("pre",null,[a(""),s("span",{class:"comment"},"// 글자 수 제한: maxlength 속성 사용"),a(`
`),s("span",{class:"arrow"},"<"),s("span",{class:"component"},"textfield-item"),a(`
  `),s("span",{class:"props"},"v-model"),a('="'),s("span",{class:"props"},"numberInp"),a(`"
  `),s("span",{class:"props"},"type"),a("="),s("span",{class:"val"},'"number"'),a(`
  `),s("span",{class:"props"},"id"),a("="),s("span",{class:"val"},'"NumberInp"'),a(`
  `),s("span",{class:"props"},"label"),a("="),s("span",{class:"val"},'"숫자만 입력"'),a(`
  `),s("span",{class:"props"},"name"),a("="),s("span",{class:"val"},'"number-inp"'),a(`
  `),s("span",{class:"props"},"placeholder"),a("="),s("span",{class:"val"},'"숫자만 입력"'),a(),s("span",{class:"arrow"},"/>"),a(`
`)])],-1)])]),_:1})]),l[37]||(l[37]=s("h4",{class:"guide-sstitle"},`type="tel": 숫자 세자리마다 ','(콤마) 추가`,-1)),s("div",Z,[n(o,{modelValue:M.value,"onUpdate:modelValue":l[9]||(l[9]=e=>M.value=e),type:"tel",id:"TelInp",label:"숫자 + 콤마",name:"tel-inp",placeholder:"숫자만 입력"},null,8,["modelValue"]),n(d,{id:"InputTel"},{accoTitle:t(()=>[...l[26]||(l[26]=[a("Code 보기",-1)])]),accoPanel:t(()=>[...l[27]||(l[27]=[s("div",{class:"guide-info html"},[s("pre",null,[a(""),s("span",{class:"comment"},`// type="tel"의 경우, 숫자만 입력 가능하며 ','(콤마)가 추가됨`),a(`
`),s("span",{class:"arrow"},"<"),s("span",{class:"component"},"textfield-item"),a(`
  `),s("span",{class:"props"},"v-model"),a('="'),s("span",{class:"props"},"tTelInp"),a(`"
  `),s("span",{class:"props"},"type"),a("="),s("span",{class:"val"},'"tel"'),a(`
  `),s("span",{class:"props"},"id"),a("="),s("span",{class:"val"},'"TelInp"'),a(`
  `),s("span",{class:"props"},"label"),a("="),s("span",{class:"val"},'"숫자 + 콤마"'),a(`
  `),s("span",{class:"props"},"name"),a("="),s("span",{class:"val"},'"tel-inp"'),a(`
  `),s("span",{class:"props"},"placeholder"),a("="),s("span",{class:"val"},'"숫자만 입력"'),a(),s("span",{class:"arrow"},"/>"),a(`
`)])],-1)])]),_:1})]),l[38]||(l[38]=s("h4",{class:"guide-sstitle"},'type="tel": 단위 표시',-1)),s("div",_,[n(o,{modelValue:N.value,"onUpdate:modelValue":l[10]||(l[10]=e=>N.value=e),type:"tel",id:"UnitInp",label:"단위 표시",name:"unit-inp",placeholder:"숫자만 입력",unit:"원"},null,8,["modelValue"]),n(d,{id:"InputUnit"},{accoTitle:t(()=>[...l[28]||(l[28]=[a("Code 보기",-1)])]),accoPanel:t(()=>[...l[29]||(l[29]=[s("div",{class:"guide-info html"},[s("pre",null,[a(""),s("span",{class:"comment"},`// 'unit="원" 추가'`),a(`
`),s("span",{class:"arrow"},"<"),s("span",{class:"component"},"textfield-item"),a(`
  `),s("span",{class:"props"},"v-model"),a('="'),s("span",{class:"props"},"unitInp"),a(`"
  `),s("span",{class:"props"},"type"),a("="),s("span",{class:"val"},'"tel"'),a(`
  `),s("span",{class:"props"},"id"),a("="),s("span",{class:"val"},'"UnitInp"'),a(`
  `),s("span",{class:"props"},"label"),a("="),s("span",{class:"val"},'"단위 표시"'),a(`
  `),s("span",{class:"props"},"name"),a("="),s("span",{class:"val"},'"unit-inp"'),a(`
  `),s("span",{class:"props"},"placeholder"),a("="),s("span",{class:"val"},'"숫자만 입력"'),a(`
  `),s("span",{class:"props"},"unit"),a("="),s("span",{class:"val"},'"원"'),a(),s("span",{class:"arrow"},"/>"),a(`
`)])],-1)])]),_:1})]),l[39]||(l[39]=s("h4",{class:"guide-sstitle"},'type="phone": 전화번호 입력',-1)),s("div",ss,[n(o,{modelValue:P.value,"onUpdate:modelValue":l[11]||(l[11]=e=>P.value=e),type:"phone",id:"PhoneInp",label:"전화번호",name:"phone-inp",placeholder:"'-'없이 숫자만 입력"},null,8,["modelValue"]),n(d,{id:"InputPhone"},{accoTitle:t(()=>[...l[30]||(l[30]=[a("Code 보기",-1)])]),accoPanel:t(()=>[...l[31]||(l[31]=[s("div",{class:"guide-info html"},[s("pre",null,[a(""),s("span",{class:"comment"},'// type="phone"'),a(`
`),s("span",{class:"arrow"},"<"),s("span",{class:"component"},"textfield-item"),a(`
  `),s("span",{class:"props"},"v-model"),a('="'),s("span",{class:"props"},"phoneInp"),a(`"
  `),s("span",{class:"props"},"type"),a("="),s("span",{class:"val"},'"phone"'),a(`
  `),s("span",{class:"props"},"id"),a("="),s("span",{class:"val"},'"PhoneInp"'),a(`
  `),s("span",{class:"props"},"label"),a("="),s("span",{class:"val"},'"전화번호"'),a(`
  `),s("span",{class:"props"},"name"),a("="),s("span",{class:"val"},'"phone-inp"'),a(`
  `),s("span",{class:"props"},"placeholder"),a("="),s("span",{class:"val"},`"'-'없이 숫자만 입력"`),a(),s("span",{class:"arrow"},"/>"),a(`
`)])],-1)])]),_:1})]),l[40]||(l[40]=s("h4",{class:"guide-sstitle"},"검색 input",-1)),s("div",as,[n(o,{modelValue:C.value,"onUpdate:modelValue":l[12]||(l[12]=e=>C.value=e),type:"search",id:"SearchInp",label:"키워드 검색",name:"search-inp",placeholder:"검색 키워드 입력",error:b.value||null,onSearchAct:j},null,8,["modelValue","error"]),n(d,{id:"SearchInp"},{accoTitle:t(()=>[...l[32]||(l[32]=[a("Code 보기",-1)])]),accoPanel:t(()=>[...l[33]||(l[33]=[s("div",{class:"guide-info script"},[s("pre",null,[a(""),s("span",{class:"comment"},"// 검색"),a(`
`),s("span",{class:"tag"},"const"),a(),s("span",{class:"evt"},"searchInp"),a(" = "),s("span",{class:"func"},[a("ref"),s("span",{class:"mark"},"()")]),a(`;
`),s("span",{class:"tag"},"const"),a(),s("span",{class:"evt"},"searchError"),a(" = "),s("span",{class:"func"},[a("ref"),s("span",{class:"mark"},"()")]),a(`;
`),s("span",{class:"tag"},"const"),a(),s("span",{class:"func"},"keywordSrch"),a(" = "),s("span",{class:"mark"},[a("("),s("span",{class:"props"},"val"),a(")")]),a(),s("span",{class:"tag"},"=>"),a(),s("span",{class:"mark"},"{"),a(`
  `),s("span",{class:"import"},"if"),a(),s("span",{class:"func"},"("),a("!"),s("span",{class:"props"},"val"),s("span",{class:"func"},")"),a(),s("span",{class:"func"},"{"),a(`
    `),s("span",{class:"evt"},"searchError"),a("."),s("span",{class:"props"},"value"),a(" = "),s("span",{class:"val"},"'검색 키워드를 입력해 주세요.'"),a(`;
  `),s("span",{class:"func"},[a("} "),s("span",{class:"import"},"else"),a(" {")]),a(`
    `),s("span",{class:"evt"},"searchError"),a("."),s("span",{class:"props"},"value"),a(" = "),s("span",{class:"tag"},"null"),a(`;

    `),s("span",{class:"comment"},"// 검색 flow 진행"),a(`
    `),s("span",{class:"props"},"console"),a("."),s("span",{class:"func"},[a("log"),s("span",{class:"braket"},[a("("),s("span",{class:"props"},"val"),a(")")])]),a(`;
  `),s("span",{class:"func"},"}"),a(`
};
`)])],-1),s("div",{class:"guide-info html"},[s("pre",null,[a(""),s("span",{class:"comment"},'// type="search"로 설정 및 :error와 @search-act 추가'),a(`
`),s("span",{class:"arrow"},"<"),s("span",{class:"component"},"textfield-item"),a(`
  `),s("span",{class:"props"},"v-model"),a('="'),s("span",{class:"props"},"searchInp"),a(`"
  `),s("span",{class:"props"},"type"),a("="),s("span",{class:"val"},'"search"'),a(`
  `),s("span",{class:"props"},"id"),a("="),s("span",{class:"val"},'"SearchInp"'),a(`
  `),s("span",{class:"props"},"label"),a("="),s("span",{class:"val"},'"키워드 검색"'),a(`
  `),s("span",{class:"props"},"name"),a("="),s("span",{class:"val"},'"search-inp"'),a(`
  `),s("span",{class:"props"},"placeholder"),a("="),s("span",{class:"val"},'"검색 키워드 입력"'),a(`
  :`),s("span",{class:"props"},"error"),a('="'),s("span",{class:"props"},"searchError"),a(`"
  @`),s("span",{class:"props"},"search-act"),a('="'),s("span",{class:"func"},"keywordSrch"),a('" '),s("span",{class:"arrow"},"/>"),a(`
`)])],-1)])]),_:1})])]),l[50]||(l[50]=s("h3",{class:"guide-stitle"},"Textarea",-1)),s("div",ls,[l[45]||(l[45]=s("h4",{class:"guide-sstitle"},"Default",-1)),s("div",es,[n(o,{modelValue:S.value,"onUpdate:modelValue":l[13]||(l[13]=e=>S.value=e),type:"textarea",id:"TextareaInp",label:"Textarea",name:"textarea-inp",placeholder:"텍스트 입력"},null,8,["modelValue"]),n(d,{id:"TextareaDefault"},{accoTitle:t(()=>[...l[41]||(l[41]=[a("Code 보기",-1)])]),accoPanel:t(()=>[...l[42]||(l[42]=[s("div",{class:"guide-info html"},[s("pre",null,[a(""),s("span",{class:"comment"},'// type="textarea"'),a(`
`),s("span",{class:"arrow"},"<"),s("span",{class:"component"},"textfield-item"),a(`
  `),s("span",{class:"props"},"v-model"),a('="'),s("span",{class:"props"},"textareaInp"),a(`"
  `),s("span",{class:"props"},"type"),a("="),s("span",{class:"val"},'"textarea"'),a(`
  `),s("span",{class:"props"},"id"),a("="),s("span",{class:"val"},'"TextareaInp"'),a(`
  `),s("span",{class:"props"},"label"),a("="),s("span",{class:"val"},'"Textarea"'),a(`
  `),s("span",{class:"props"},"name"),a("="),s("span",{class:"val"},'"textarea-inp"'),a(`
  `),s("span",{class:"props"},"placeholder"),a("="),s("span",{class:"val"},'"텍스트 입력"'),a(),s("span",{class:"arrow"},"/>"),a(`
`)])],-1)])]),_:1})]),l[46]||(l[46]=s("h4",{class:"guide-sstitle"},"글자 수 제한",-1)),s("div",ns,[n(o,{modelValue:L.value,"onUpdate:modelValue":l[14]||(l[14]=e=>L.value=e),type:"textarea",id:"TextareaMax",label:"Textarea(글자 수 제한)",name:"textarea-max",placeholder:"텍스트 입력",maxlength:"4000"},null,8,["modelValue"]),n(d,{id:"TextareaMaxinput"},{accoTitle:t(()=>[...l[43]||(l[43]=[a("Code 보기",-1)])]),accoPanel:t(()=>[...l[44]||(l[44]=[s("div",{class:"guide-info html"},[s("pre",null,[a(""),s("span",{class:"comment"},"// maxlength 속성 추가"),a(`
`),s("span",{class:"arrow"},"<"),s("span",{class:"component"},"textfield-item"),a(`
  `),s("span",{class:"props"},"v-model"),a('="'),s("span",{class:"props"},"textareaMax"),a(`"
  `),s("span",{class:"props"},"type"),a("="),s("span",{class:"val"},'"textarea"'),a(`
  `),s("span",{class:"props"},"id"),a("="),s("span",{class:"val"},'"TextareaMax"'),a(`
  `),s("span",{class:"props"},"label"),a("="),s("span",{class:"val"},'"Textarea(글자 수 제한)"'),a(`
  `),s("span",{class:"props"},"name"),a("="),s("span",{class:"val"},'"textarea-max"'),a(`
  `),s("span",{class:"props"},"placeholder"),a("="),s("span",{class:"val"},'"텍스트 입력"'),a(`
  `),s("span",{class:"props"},"maxlength"),a("="),s("span",{class:"val"},'"4000"'),a(),s("span",{class:"arrow"},"/>"),a(`
`)])],-1)])]),_:1})])]),l[51]||(l[51]=s("h3",{class:"guide-stitle"},"정보 입력 화면 예시",-1)),s("div",ps,[s("div",os,[n(o,{ref:e=>v.value[0]=e,modelValue:i.value.name,"onUpdate:modelValue":l[15]||(l[15]=e=>i.value.name=e),type:"text",id:"ExName",label:"이름",placeholder:"이름 입력",required:"",error:u.value.name},null,8,["modelValue","error"]),n(o,{ref:e=>v.value[1]=e,modelValue:i.value.phone,"onUpdate:modelValue":l[16]||(l[16]=e=>i.value.phone=e),type:"phone",id:"ExPhone",label:"연락처",placeholder:"'-'없이 숫자만 입력",required:"",error:u.value.phone},null,8,["modelValue","error"]),n(o,{ref:e=>v.value[2]=e,modelValue:i.value.email,"onUpdate:modelValue":l[17]||(l[17]=e=>i.value.email=e),type:"email",id:"ExEmail",label:"이메일",placeholder:"예) abcd@gmail.com"},null,8,["modelValue"]),s("div",{class:"form-btns-wrap"},[s("button",{type:"submit",class:"btn-primary",onClick:B},"확인")])])]),l[52]||(l[52]=s("h3",{class:"guide-stitle"},"로그인 형식",-1)),s("div",ts,[s("form",{class:"form-wrap login",onSubmit:H(R,["prevent"])},[n(o,{ref:e=>f.value[0]=e,modelValue:r.value.id,"onUpdate:modelValue":l[18]||(l[18]=e=>r.value.id=e),type:"text",id:"UserId",label:"아이디","no-label":!0,name:"user-id",placeholder:"아이디"},null,8,["modelValue"]),n(o,{ref:e=>f.value[1]=e,modelValue:r.value.pwd,"onUpdate:modelValue":l[19]||(l[19]=e=>r.value.pwd=e),type:"password",id:"UserPwd",label:"비밀번호","no-label":!0,name:"user-pwd",placeholder:"비밀번호"},null,8,["modelValue"]),m.value?(D(),A("div",rs,O(m.value),1)):$("",!0),l[47]||(l[47]=s("button",{type:"submit",class:"btn-primary"},[s("span",null,"로그인")],-1))],32)])]))}};export{ms as default};
