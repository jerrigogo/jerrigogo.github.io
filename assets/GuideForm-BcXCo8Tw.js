import{_ as r}from"./AccordionItem-BWPJbBwH.js";import{_ as t}from"./TextfieldItem-DhH8uGow.js";import{c as M,a as s,b as n,j as p,e as o,o as C,k as a}from"./index-DqbSkxop.js";const L={class:"contents"},N={class:"guide-cont-wrap"},S={class:"guide-cont"},E={class:"form-wrap col2"},q={class:"guide-cont"},A={class:"guide-cont"},D={class:"form-wrap"},B={class:"guide-cont"},F={class:"guide-cont"},H={class:"guide-cont"},$={class:"guide-cont"},j={class:"guide-cont-wrap"},G={class:"guide-cont"},R={class:"guide-cont"},O={__name:"GuideForm",setup(W){const i=o(),u=o("텍스트 입력 완료"),m=o("텍스트 입력 완료"),v=o("텍스트 입력 완료"),x=o("텍스트 입력 완료"),f=o("텍스트 입력 완료"),k=o("Error Message"),b=o(),I=o("123456789"),g=o(),V=o("01012345678"),y=o("1000000000"),T=o("1000000000"),w=o(),d=o(),P=c=>{c?(d.value=null,console.log(c)):d.value="검색 키워드를 입력해 주세요."},h=o("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."),U=o("");return(c,l)=>(C(),M("div",L,[l[42]||(l[42]=s("h2",{class:"guide-title"},"Forms",-1)),l[43]||(l[43]=s("h3",{class:"guide-stitle"},"Input box",-1)),s("div",N,[l[29]||(l[29]=s("h4",{class:"guide-sstitle"},'Default: type="text"',-1)),s("div",S,[s("div",E,[n(t,{modelValue:i.value,"onUpdate:modelValue":l[0]||(l[0]=e=>i.value=e),type:"text",id:"TextInp",label:"일반 텍스트(기본)",name:"text-inp",placeholder:"placeholder text"},null,8,["modelValue"]),n(t,{modelValue:u.value,"onUpdate:modelValue":l[1]||(l[1]=e=>u.value=e),type:"text",id:"TextInp2",label:"일반 텍스트: filled",name:"text-inp",placeholder:"placeholder text"},null,8,["modelValue"]),n(t,{modelValue:m.value,"onUpdate:modelValue":l[2]||(l[2]=e=>m.value=e),type:"text",id:"TextInp3",label:"일반 텍스트: required",name:"text-inp",placeholder:"placeholder text",required:""},null,8,["modelValue"]),n(t,{modelValue:v.value,"onUpdate:modelValue":l[3]||(l[3]=e=>v.value=e),type:"text",id:"TextInp4",label:"일반 텍스트: readonly",name:"text-inp",placeholder:"placeholder text",readonly:""},null,8,["modelValue"]),n(t,{modelValue:x.value,"onUpdate:modelValue":l[4]||(l[4]=e=>x.value=e),type:"text",id:"TextInp5",label:"일반 텍스트: disabled",name:"text-inp",placeholder:"placeholder text",disabled:""},null,8,["modelValue"]),n(t,{modelValue:f.value,"onUpdate:modelValue":l[5]||(l[5]=e=>f.value=e),type:"text",id:"TextInp6",label:"일반 텍스트: error상태",name:"text-inp",placeholder:"placeholder text",error:k.value},null,8,["modelValue","error"])]),n(r,{id:"InputDefault"},{accoTitle:p(()=>[...l[15]||(l[15]=[a("Code 보기",-1)])]),accoPanel:p(()=>[...l[16]||(l[16]=[s("div",{class:"guide-info script"},[s("pre",null,[a(""),s("span",{class:"import"},"import"),a(),s("span",{class:"mark"},[a("{ "),s("span",{class:"props"},"ref"),a(" }")]),a(),s("span",{class:"import"},"from"),a(),s("span",{class:"val"},"'vue'"),a(`;
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
`)])],-1)])]),_:1})]),l[30]||(l[30]=s("h4",{class:"guide-sstitle"},"Label 없는 경우",-1)),s("div",q,[n(t,{modelValue:b.value,"onUpdate:modelValue":l[6]||(l[6]=e=>b.value=e),type:"text",id:"NoLabel",label:"Label 없는 경우",name:"nolabel-inp",placeholder:"placeholder text","no-label":!0},null,8,["modelValue"]),n(r,{id:"AccoNolabel"},{accoTitle:p(()=>[...l[17]||(l[17]=[a("Code 보기",-1)])]),accoPanel:p(()=>[...l[18]||(l[18]=[s("div",{class:"guide-info html"},[s("pre",null,[a(""),s("span",{class:"comment"},'// :no-label="true" 추가'),a(`
`),s("span",{class:"arrow"},"<"),s("span",{class:"component"},"textfield-item"),a(`
  `),s("span",{class:"props"},"v-model"),a('="'),s("span",{class:"props"},"noLabel"),a(`"
  `),s("span",{class:"props"},"type"),a("="),s("span",{class:"val"},'"text"'),a(`
  `),s("span",{class:"props"},"id"),a("="),s("span",{class:"val"},'"NoLabel"'),a(`
  `),s("span",{class:"props"},"label"),a("="),s("span",{class:"val"},'"Label 없는 경우"'),a(`
  `),s("span",{class:"props"},"name"),a("="),s("span",{class:"val"},'"nolabel-inp"'),a(`
  `),s("span",{class:"props"},"placeholder"),a("="),s("span",{class:"val"},'"placeholder text"'),a(`
  :`),s("span",{class:"props"},"no-label"),a('="'),s("span",{class:"boolean"},"true"),a('" '),s("span",{class:"arrow"},"/>"),a(`
`)])],-1)])]),_:1})]),l[31]||(l[31]=s("h4",{class:"guide-sstitle"},'type="number": 숫자만 입력',-1)),s("div",A,[s("div",D,[n(t,{modelValue:I.value,"onUpdate:modelValue":l[7]||(l[7]=e=>I.value=e),type:"number",id:"NumberInp",label:"숫자만 입력",name:"number-inp",placeholder:"숫자만 입력"},null,8,["modelValue"]),n(t,{modelValue:g.value,"onUpdate:modelValue":l[8]||(l[8]=e=>g.value=e),type:"number",id:"NumMaxInp",label:"숫자만 입력(자리수 제한)",name:"number-max",placeholder:"숫자만 입력",maxlength:"10"},null,8,["modelValue"])]),n(r,{id:"NumberInput"},{accoTitle:p(()=>[...l[19]||(l[19]=[a("Code 보기",-1)])]),accoPanel:p(()=>[...l[20]||(l[20]=[s("div",{class:"guide-info html"},[s("pre",null,[a(""),s("span",{class:"comment"},"// 글자 수 제한: maxlength 속성 사용"),a(`
`),s("span",{class:"arrow"},"<"),s("span",{class:"component"},"textfield-item"),a(`
  `),s("span",{class:"props"},"v-model"),a('="'),s("span",{class:"props"},"numberInp"),a(`"
  `),s("span",{class:"props"},"type"),a("="),s("span",{class:"val"},'"number"'),a(`
  `),s("span",{class:"props"},"id"),a("="),s("span",{class:"val"},'"NumberInp"'),a(`
  `),s("span",{class:"props"},"label"),a("="),s("span",{class:"val"},'"숫자만 입력"'),a(`
  `),s("span",{class:"props"},"name"),a("="),s("span",{class:"val"},'"number-inp"'),a(`
  `),s("span",{class:"props"},"placeholder"),a("="),s("span",{class:"val"},'"숫자만 입력"'),a(),s("span",{class:"arrow"},"/>"),a(`
`)])],-1)])]),_:1})]),l[32]||(l[32]=s("h4",{class:"guide-sstitle"},`type="tel": 숫자 세자리마다 ','(콤마) 추가`,-1)),s("div",B,[n(t,{modelValue:y.value,"onUpdate:modelValue":l[9]||(l[9]=e=>y.value=e),type:"tel",id:"TelInp",label:"숫자 + 콤마",name:"tel-inp",placeholder:"숫자만 입력"},null,8,["modelValue"]),n(r,{id:"InputTel"},{accoTitle:p(()=>[...l[21]||(l[21]=[a("Code 보기",-1)])]),accoPanel:p(()=>[...l[22]||(l[22]=[s("div",{class:"guide-info html"},[s("pre",null,[a(""),s("span",{class:"comment"},`// type="tel"의 경우, 숫자만 입력 가능하며 ','(콤마)가 추가됨`),a(`
`),s("span",{class:"arrow"},"<"),s("span",{class:"component"},"textfield-item"),a(`
  `),s("span",{class:"props"},"v-model"),a('="'),s("span",{class:"props"},"tTelInp"),a(`"
  `),s("span",{class:"props"},"type"),a("="),s("span",{class:"val"},'"tel"'),a(`
  `),s("span",{class:"props"},"id"),a("="),s("span",{class:"val"},'"TelInp"'),a(`
  `),s("span",{class:"props"},"label"),a("="),s("span",{class:"val"},'"숫자 + 콤마"'),a(`
  `),s("span",{class:"props"},"name"),a("="),s("span",{class:"val"},'"tel-inp"'),a(`
  `),s("span",{class:"props"},"placeholder"),a("="),s("span",{class:"val"},'"숫자만 입력"'),a(),s("span",{class:"arrow"},"/>"),a(`
`)])],-1)])]),_:1})]),l[33]||(l[33]=s("h4",{class:"guide-sstitle"},'type="tel": 단위 표시',-1)),s("div",F,[n(t,{modelValue:T.value,"onUpdate:modelValue":l[10]||(l[10]=e=>T.value=e),type:"tel",id:"UnitInp",label:"단위 표시",name:"unit-inp",placeholder:"숫자만 입력",unit:"원"},null,8,["modelValue"]),n(r,{id:"InputUnit"},{accoTitle:p(()=>[...l[23]||(l[23]=[a("Code 보기",-1)])]),accoPanel:p(()=>[...l[24]||(l[24]=[s("div",{class:"guide-info html"},[s("pre",null,[a(""),s("span",{class:"comment"},`// 'unit="원" 추가'`),a(`
`),s("span",{class:"arrow"},"<"),s("span",{class:"component"},"textfield-item"),a(`
  `),s("span",{class:"props"},"v-model"),a('="'),s("span",{class:"props"},"unitInp"),a(`"
  `),s("span",{class:"props"},"type"),a("="),s("span",{class:"val"},'"tel"'),a(`
  `),s("span",{class:"props"},"id"),a("="),s("span",{class:"val"},'"UnitInp"'),a(`
  `),s("span",{class:"props"},"label"),a("="),s("span",{class:"val"},'"단위 표시"'),a(`
  `),s("span",{class:"props"},"name"),a("="),s("span",{class:"val"},'"unit-inp"'),a(`
  `),s("span",{class:"props"},"placeholder"),a("="),s("span",{class:"val"},'"숫자만 입력"'),a(`
  `),s("span",{class:"props"},"unit"),a("="),s("span",{class:"val"},'"원"'),a(),s("span",{class:"arrow"},"/>"),a(`
`)])],-1)])]),_:1})]),l[34]||(l[34]=s("h4",{class:"guide-sstitle"},'type="phone": 전화번호 입력',-1)),s("div",H,[n(t,{modelValue:V.value,"onUpdate:modelValue":l[11]||(l[11]=e=>V.value=e),type:"phone",id:"PhoneInp",label:"전화번호",name:"phone-inp",placeholder:"'-'없이 숫자만 입력"},null,8,["modelValue"]),n(r,{id:"InputPhone"},{accoTitle:p(()=>[...l[25]||(l[25]=[a("Code 보기",-1)])]),accoPanel:p(()=>[...l[26]||(l[26]=[s("div",{class:"guide-info html"},[s("pre",null,[a(""),s("span",{class:"comment"},'// type="phone"'),a(`
`),s("span",{class:"arrow"},"<"),s("span",{class:"component"},"textfield-item"),a(`
  `),s("span",{class:"props"},"v-model"),a('="'),s("span",{class:"props"},"phoneInp"),a(`"
  `),s("span",{class:"props"},"type"),a("="),s("span",{class:"val"},'"phone"'),a(`
  `),s("span",{class:"props"},"id"),a("="),s("span",{class:"val"},'"PhoneInp"'),a(`
  `),s("span",{class:"props"},"label"),a("="),s("span",{class:"val"},'"전화번호"'),a(`
  `),s("span",{class:"props"},"name"),a("="),s("span",{class:"val"},'"phone-inp"'),a(`
  `),s("span",{class:"props"},"placeholder"),a("="),s("span",{class:"val"},`"'-'없이 숫자만 입력"`),a(),s("span",{class:"arrow"},"/>"),a(`
`)])],-1)])]),_:1})]),l[35]||(l[35]=s("h4",{class:"guide-sstitle"},"검색 input",-1)),s("div",$,[n(t,{modelValue:w.value,"onUpdate:modelValue":l[12]||(l[12]=e=>w.value=e),type:"search",id:"SearchInp",label:"키워드 검색",name:"search-inp",placeholder:"검색 키워드 입력",error:d.value||null,onSearchAct:P},null,8,["modelValue","error"]),n(r,{id:"SearchInp"},{accoTitle:p(()=>[...l[27]||(l[27]=[a("Code 보기",-1)])]),accoPanel:p(()=>[...l[28]||(l[28]=[s("div",{class:"guide-info script"},[s("pre",null,[a(""),s("span",{class:"comment"},"// 검색"),a(`
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
`)])],-1)])]),_:1})])]),l[44]||(l[44]=s("h3",{class:"guide-stitle"},"Textarea",-1)),s("div",j,[l[40]||(l[40]=s("h4",{class:"guide-sstitle"},"Default",-1)),s("div",G,[n(t,{modelValue:h.value,"onUpdate:modelValue":l[13]||(l[13]=e=>h.value=e),type:"textarea",id:"TextareaInp",label:"Textarea",name:"textarea-inp",placeholder:"텍스트 입력"},null,8,["modelValue"]),n(r,{id:"TextareaDefault"},{accoTitle:p(()=>[...l[36]||(l[36]=[a("Code 보기",-1)])]),accoPanel:p(()=>[...l[37]||(l[37]=[s("div",{class:"guide-info html"},[s("pre",null,[a(""),s("span",{class:"comment"},'// type="textarea"'),a(`
`),s("span",{class:"arrow"},"<"),s("span",{class:"component"},"textfield-item"),a(`
  `),s("span",{class:"props"},"v-model"),a('="'),s("span",{class:"props"},"textareaInp"),a(`"
  `),s("span",{class:"props"},"type"),a("="),s("span",{class:"val"},'"textarea"'),a(`
  `),s("span",{class:"props"},"id"),a("="),s("span",{class:"val"},'"TextareaInp"'),a(`
  `),s("span",{class:"props"},"label"),a("="),s("span",{class:"val"},'"Textarea"'),a(`
  `),s("span",{class:"props"},"name"),a("="),s("span",{class:"val"},'"textarea-inp"'),a(`
  `),s("span",{class:"props"},"placeholder"),a("="),s("span",{class:"val"},'"텍스트 입력"'),a(),s("span",{class:"arrow"},"/>"),a(`
`)])],-1)])]),_:1})]),l[41]||(l[41]=s("h4",{class:"guide-sstitle"},"글자 수 제한",-1)),s("div",R,[n(t,{modelValue:U.value,"onUpdate:modelValue":l[14]||(l[14]=e=>U.value=e),type:"textarea",id:"TextareaMax",label:"Textarea(글자 수 제한)",name:"textarea-max",placeholder:"텍스트 입력",maxlength:"4000"},null,8,["modelValue"]),n(r,{id:"TextareaMaxinput"},{accoTitle:p(()=>[...l[38]||(l[38]=[a("Code 보기",-1)])]),accoPanel:p(()=>[...l[39]||(l[39]=[s("div",{class:"guide-info html"},[s("pre",null,[a(""),s("span",{class:"comment"},"// maxlength 속성 추가"),a(`
`),s("span",{class:"arrow"},"<"),s("span",{class:"component"},"textfield-item"),a(`
  `),s("span",{class:"props"},"v-model"),a('="'),s("span",{class:"props"},"textareaMax"),a(`"
  `),s("span",{class:"props"},"type"),a("="),s("span",{class:"val"},'"textarea"'),a(`
  `),s("span",{class:"props"},"id"),a("="),s("span",{class:"val"},'"TextareaMax"'),a(`
  `),s("span",{class:"props"},"label"),a("="),s("span",{class:"val"},'"Textarea(글자 수 제한)"'),a(`
  `),s("span",{class:"props"},"name"),a("="),s("span",{class:"val"},'"textarea-max"'),a(`
  `),s("span",{class:"props"},"placeholder"),a("="),s("span",{class:"val"},'"텍스트 입력"'),a(`
  `),s("span",{class:"props"},"maxlength"),a("="),s("span",{class:"val"},'"4000"'),a(),s("span",{class:"arrow"},"/>"),a(`
`)])],-1)])]),_:1})])])]))}};export{O as default};
