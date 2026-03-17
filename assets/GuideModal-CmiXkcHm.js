import{u as b,o as v,c as y,a,b as f,j as k,k as o,t as T,F as S,l as x,m as i,e as C}from"./index-_Pgh2iNb.js";import{u as M}from"./dialog-CMBHBOs4.js";import{_ as g}from"./TooltipItem-oNy69Xg4.js";import"./chkDevice-Xt3RnFRO.js";const w={class:"modal-header"},q=["id"],O=["id"],I={class:"modal-body-inner"},D=["for"],A=["id"],$={__name:"ModalSample",props:{modalId:{type:String},modalType:{type:String},modalData:{type:Object}},setup(d){const c=b(),{alert:t,confirm:r}=M(),n=d,e=async()=>{await r({modalId:"ConfirmModal",modalType:"confirm",modalCont:"진행하시겠습니까?",modalOkText:"",modalCancelText:""})?await t({modalId:"AlertModal",modalType:"alert",modalCont:"완료되었습니다.",modalOkText:"",modalOkAct:()=>{console.log("alert ok!!")}}):console.log("confirm cancel!!")};function m(){c.close()}function l(p){e()}return(p,s)=>(v(),y(S,null,[a("header",w,[a("h1",{id:`${n.modalId}_title`,class:"modal-title"},[f(g,{id:"TipSample1","tip-title":"Modal Test"},{default:k(()=>[...s[0]||(s[0]=[a("p",null,"개인정보 처리목적 : 보험계약 상담, 보험계약 인수여부 결정을 위한 판단 등",-1)])]),_:1})],8,q)]),a("div",{id:`${n.modalId}_desc`,class:"modal-body"},[a("div",I,[a("p",null,[o(" receive data : "+T(n.modalData),1),s[2]||(s[2]=a("br",null,null,-1)),s[3]||(s[3]=a("br",null,null,-1)),s[4]||(s[4]=o(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",-1)),s[5]||(s[5]=a("a",{href:"#"},"anchor",-1)),s[6]||(s[6]=a("br",null,null,-1)),s[7]||(s[7]=a("button",{type:"button"},"button",-1)),s[8]||(s[8]=a("br",null,null,-1)),f(g,{id:"TipSample2","tip-title":"개인정보 처리목적","tip-click":!0},{default:k(()=>[...s[1]||(s[1]=[a("p",null,"개인정보 처리목적 : 보험계약 상담, 보험계약 인수여부 결정을 위한 판단 등",-1)])]),_:1}),s[9]||(s[9]=o(" input ",-1)),a("label",{for:`${n.modalId}-inpName`},"Name",8,D),a("input",{type:"text",id:`${n.modalId}-inpName`,name:"name",placeholder:"example..",autocomplete:"off"},null,8,A),s[10]||(s[10]=a("br",null,null,-1)),s[11]||(s[11]=o(" textarea ",-1)),s[12]||(s[12]=a("textarea",{name:"textarea"},null,-1)),s[13]||(s[13]=a("br",null,null,-1)),s[14]||(s[14]=o(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",-1))])])],8,O),a("footer",{class:"modal-footer"},[a("button",{type:"button",class:"modal-btn-gray",onClick:m},[...s[15]||(s[15]=[a("span",null,"취소",-1)])]),a("button",{type:"button",class:"modal-btn-primary",onClick:l},[...s[16]||(s[16]=[a("span",null,"확인",-1)])])])],64))}},j={class:"contents"},N={class:"guide-cont type-row"},U={__name:"GuideModal",setup(d){const c=b(),{alert:t,confirm:r}=M(),n=()=>{t({modalId:"AlertModal",modalCont:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",modalOkText:"",modalOkAct:()=>{console.log("alert ok!!")}})},e=async()=>{await r({modalId:"ConfirmModal",modalCont:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br /> Do you want to ... ?",modalOkText:"",modalCancelText:""})?await t({modalId:"AlertModal",modalCont:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",modalOkText:"",modalOkAct:()=>{console.log("alert ok!!")}}):console.log("confirm cancel!!")},m=C([{label:"sample",value:"1"}]),l=p=>{c.open($,{modalId:p.id,modalType:p.type,modalData:m})};return x(()=>{}),(p,s)=>(v(),y("div",j,[s[8]||(s[8]=i(`<h2 class="guide-title">Modal</h2><h3 class="guide-stitle">Alert modal</h3><div class="guide-info script"><pre><span class="comment">// modal store 파일 및 alert/confirm 관련 util js 파일 import</span>
<span class="import">import</span> <span class="mark">{ <span class="props">useDialog</span> }</span> <span class="import">from</span> <span class="val">&#39;@/assets/js/dialog&#39;</span>;

<span class="comment">// alert/confirm 관련 util js 파일에서 alert과 confirm 험수 저장</span>
<span class="tag">const</span> <span class="mark">{</span> <span class="func">alert</span>, <span class="func">confirm</span> <span class="mark">}</span> = <span class="func">useDialog<span class="mark">()</span></span>;

<span class="comment">// alert modal</span>
<span class="tag">const</span> <span class="func">alertModal</span> = <span class="mark">()</span> <span class="tag">=&gt;</span> <span class="mark">{</span>
  <span class="func">alert(</span>
    <span class="braket">{</span>
      <span class="props">modalId:</span> <span class="val">&#39;AlertModal&#39;</span>,
      <span class="props">modalType:</span> <span class="val">&#39;alert&#39;</span>,
      <span class="props">modalCont:</span> <span class="val">&#39;진행이 완료되었습니다.&#39;&#39;</span>,
      <span class="props">modalOkText:</span> <span class="val">&#39;&#39;</span>,  <span class="comment">// alert의 버튼 텍스트, 기본 값 &#39;확인&#39;</span>
      <span class="func">modalOkAct<span class="props">:</span></span> <span class="func">()</span> <span class="tag">=&gt;</span> <span class="func">{</span>
        <span class="comment">// &#39;확인&#39; 버튼 눌렀을 때의 flow...</span>
        <span class="props">console</span>.<span class="func">log</span><span class="braket">(<span class="val">&#39;alert ok!!&#39;</span>)</span>;
      <span class="func">}</span>,
    <span class="braket">}</span>,
  <span class="func">)</span>;
<span class="mark">}</span>;
</pre></div>`,3)),a("p",{class:"guide-cont type-row"},[a("button",{type:"button",class:"btn-primary",onClick:n},[...s[3]||(s[3]=[a("span",null,"Alert dialog",-1)])])]),s[9]||(s[9]=i(`<h3 class="guide-stitle">Confirm modal</h3><div class="guide-info script"><pre><span class="comment">// modal store 파일 및 alert/confirm 관련 util js 파일 import</span>
<span class="import">import</span> <span class="mark">{ <span class="props">useDialog</span> }</span> <span class="import">from</span> <span class="val">&#39;@/assets/js/dialog&#39;</span>;

<span class="comment">// alert/confirm 관련 util js 파일에서 alert과 confirm 험수 저장</span>
<span class="tag">const</span> <span class="mark">{</span> <span class="func">alert</span>, <span class="func">confirm</span> <span class="mark">}</span> = <span class="func">useDialog<span class="mark">()</span></span>;

<span class="comment">// confirm modal</span>
<span class="tag">const</span> <span class="func">confirmModal</span> = <span class="tag">async <span class="mark">()</span> =&gt;</span> <span class="mark">{</span>
  <span class="comment">// confirm을 띄운 버튼 저장</span>
  <span class="tag">const</span> <span class="evt">ok</span> = <span class="import">await</span> <span class="func">confirm(</span>
    <span class="braket">{</span>
      <span class="props">modalId:</span> <span class="val">&#39;ConfirmModal&#39;</span>,
      <span class="props">modalType:</span> <span class="val">&#39;confirm&#39;</span>,
      <span class="props">modalCont:</span> <span class="val">&#39;진행하시겠습니까?&#39;</span>,
      <span class="props">modalOkText:</span> <span class="val">&#39;&#39;</span>,  <span class="comment">// confirm의 확인 버튼 텍스트, 기본 값 &#39;확인&#39;</span>
      <span class="props">modalCancelText:</span> <span class="val">&#39;&#39;</span>,  <span class="comment">// confirm의 취소 버튼 텍스트, 기본 값 &#39;취소&#39;</span>
    <span class="braket">}</span>,
  <span class="func">)</span>;

  <span class="comment">// confirm에서 &#39;확인&#39; 버튼 눌렀을 때</span>
  <span class="import">if</span> <span class="func">(<span class="evt">ok</span>) {</span>
    <span class="comment">// confirm 이후 진행되어야 하는 flow에 대한 script 넣을 곳</span>
    <span class="comment">// ex) alert modal 띄우기</span>
    <span class="import">await</span> <span class="func">alert</span><span class="braket">(</span>
      <span class="mark">{</span>
        <span class="props">modalId:</span> <span class="val">&#39;AlertModal&#39;</span>,
        <span class="props">modalType:</span> <span class="val">&#39;alert&#39;</span>,
        <span class="props">modalCont:</span> <span class="val">&#39;진행이 완료되었습니다.&#39;</span>,
        <span class="props">modalOkText:</span> <span class="val">&#39;&#39;</span>,
        <span class="func">modalOkAct<span class="props">:</span></span> <span class="func">() <span class="tag">=&gt;</span> {</span>
          <span class="comment">// &#39;확인&#39; 버튼 눌렀을 때 진행되는 flow...</span>
          <span class="props">console</span>.<span class="func">log</span><span class="braket">(<span class="val">&#39;alert ok!!&#39;</span>)</span>;
        <span class="func">}</span>,
      <span class="mark">}</span>,
    <span class="braket">)</span>;
  <span class="func">}</span>
  <span class="comment">// confirm에서 &#39;취소&#39; 버튼 눌렀을 때</span>
  <span class="import">else</span> <span class="func">{</span>
    <span class="props">console</span>.<span class="func">log</span><span class="braket">(<span class="val">&#39;confirm cancel!!&#39;</span>)</span>;
  <span class="func">}</span>
<span class="mark">}</span>;
</pre></div>`,2)),a("p",{class:"guide-cont type-row"},[a("button",{type:"button",class:"btn-primary",onClick:e},[...s[4]||(s[4]=[a("span",null,"Confirm dialog",-1)])])]),s[10]||(s[10]=i(`<h3 class="guide-stitle">Normal modal</h3><div class="guide-info html"><pre><span class="arrow">&lt;</span><span class="tag">button</span>
  <span class="props">type</span>=<span class="val">&quot;button&quot;</span>
  <span class="props">class</span>=<span class="val">&quot;btn-primary&quot;</span>
  <span class="props">aria-haspopup</span>=<span class="val">&quot;dialog&quot;</span>
  <span class="props">aria-controls</span>=<span class="val">&quot;SampleModal&quot;</span>
  @<span class="props">click</span>=&quot;<span class="func">modalOpen(</span><span class="import">{</span> <span class="props">id:</span> <span class="val">&#39;SampleModal&#39;</span>, <span class="props">type:</span> <span class="val">&#39;full&#39;</span> <span class="import">}</span><span class="func">)</span>&quot;<span class="arrow">&gt;</span>
  <span class="arrow">&lt;</span><span class="tag">span</span><span class="arrow">&gt;</span>Type: Full<span class="arrow">&lt;/</span><span class="tag">span</span><span class="arrow">&gt;</span>
<span class="arrow">&lt;/</span><span class="tag">button</span><span class="arrow">&gt;</span>
</pre></div><div class="guide-info script"><pre><span class="comment">// modal store 파일 및 modal component import</span>
<span class="import">import</span> <span class="mark">{ <span class="props">useModalStore</span> }</span> <span class="import">from</span> <span class="val">&#39;@/stores/modal&#39;</span>;
<span class="import">import</span> <span class="props">ModalSample</span> <span class="import">from</span> <span class="val">&#39;@/views/guide/ModalSample.vue&#39;</span>;

<span class="comment">// modal store 파일(/stores/modal.js)에서 useModalStore 저장</span>
<span class="tag">const</span> <span class="evt">modalStore</span> = <span class="func">useModalStore<span class="mark">()</span></span>;

<span class="comment">// modal에 전달할 data 예시</span>
<span class="tag">const</span> <span class="evt">sampleData</span> = <span class="func">ref</span><span class="mark">(</span><span class="func">[</span><span class="braket">{</span> <span class="props">label:</span> <span class="val">&#39;sample&#39;</span>, <span class="props">value:</span> <span class="val">&#39;1&#39;</span> <span class="braket">}</span><span class="func">]</span><span class="mark">)</span>; // send data

<span class="comment">// open modal</span>
<span class="tag">const</span> <span class="func">modalOpen</span> = <span class="mark">(<span class="props">_opt</span>)</span> <span class="tag">=&gt;</span> <span class="mark">{</span>
  <span class="evt">modalStore</span>.<span class="func">open(</span><span class="props">ModalSample</span>, <span class="braket">{</span>
    <span class="props">modalId: _opt.id</span>,
    <span class="props">modalType: _opt.type</span>,
    <span class="props">modalData:</span> <span class="evt">sampleData</span>,
  <span class="braket">}</span><span class="func">)</span>;
<span class="mark">}</span>;
</pre></div>`,3)),a("p",N,[a("button",{type:"button",class:"btn-primary","aria-haspopup":"dialog","aria-controls":"SampleModal",onClick:s[0]||(s[0]=u=>l({id:"SampleModal",type:"full"}))},[...s[5]||(s[5]=[a("span",null,"Type: Full",-1)])]),a("button",{type:"button",class:"btn-primary","aria-haspopup":"dialog","aria-controls":"SampleTopModal",onClick:s[1]||(s[1]=u=>l({id:"SampleTopModal",type:"top"}))},[...s[6]||(s[6]=[a("span",null,"Type: Top",-1)])]),a("button",{type:"button",class:"btn-primary","aria-haspopup":"dialog","aria-controls":"SampleBottomModal",onClick:s[2]||(s[2]=u=>l({id:"SampleBottomModal",type:"bottom"}))},[...s[7]||(s[7]=[a("span",null,"Type: Bottom",-1)])])])]))}};export{U as default};
