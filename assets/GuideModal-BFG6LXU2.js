import{g as w,o as m,s as M,b as s,c as k,u as b,h,n as C,T as $,v as u,p as g,q as a,t as q,d as S,a as y,F as O,x as f}from"./index-DETIen2Z.js";const x=["id","aria-labelledby","aria-describedby"],T={key:0,class:"modal-header"},j=["id"],A={key:1,class:"modal-footer"},D=s("span",{class:"sr-only"},"닫기",-1),I=[D],N={__name:"ModalLayer",props:{modalId:{type:String},modalType:{type:String},labelId:{type:String}},emits:["close"],setup(e,{emit:c}){const l=e,n=c,r=()=>{document.querySelector(`#${l.modalId}`).querySelectorAll('[href], button, select, input, textarea, [tabindex]:not([tabindex="-1"])').forEach(d=>{d.setAttribute("tabindex",-1)})};return w(()=>{r()}),(p,t)=>(m(),M($,{to:".modal-layout"},[s("div",{id:l.modalId,class:C(`modal-wrap ${e.modalType}`),role:"dialog","aria-modal":"true","aria-labelledby":e.labelId,"aria-describedby":`${l.modalId}_desc`,tabindex:"-1"},[p.$slots.header?(m(),k("div",T,[b(p.$slots,"header")])):h("",!0),s("div",{id:`${l.modalId}_desc`,class:"modal-body"},[b(p.$slots,"body")],8,j),p.$slots.footer?(m(),k("div",A,[b(p.$slots,"footer")])):h("",!0),s("button",{type:"button",class:"modal-close",onClick:t[0]||(t[0]=d=>n("close"))},I)],10,x)]))}},B=["id"],V=s("br",null,null,-1),E=s("br",null,null,-1),L=s("br",null,null,-1),F=s("br",null,null,-1),z=s("a",{href:"#"},"anchor",-1),G=s("button",{type:"button"},"button",-1),P=s("br",null,null,-1),H=["for"],J=["id"],K=s("br",null,null,-1),Q=s("textarea",{name:"textarea"},null,-1),R=s("br",null,null,-1),U=s("br",null,null,-1),W=s("br",null,null,-1),X=s("br",null,null,-1),Y=s("br",null,null,-1),Z=s("br",null,null,-1),ss=s("br",null,null,-1),as=s("br",null,null,-1),ns=s("br",null,null,-1),ps=s("br",null,null,-1),ls=s("span",null,"취소",-1),os=[ls],ts=s("span",null,"확인",-1),cs=[ts],_={__name:"ModalSample",props:{modalOption:{type:Object},modalData:{type:Object}},setup(e){const c=u("systemModal"),l=u("layerModal"),n=e,r=()=>{c.open({id:"AlertSample",type:"alert",label:"알림 창",cont:"확인하였습니다.",okText:"확인",okCallback:()=>{console.log("alert ok!!")}})},p=()=>{c.open({id:"ConfirmSample",type:"confirm",label:"확인 창",cont:"진행하시겠습니까?",okText:"확인",cancelText:"취소",cancelCallback:()=>{console.log("confirm cancel!!")},okCallback:()=>{console.log("confirm ok!!"),r()}})},t=()=>{l.close({id:n.modalOption.id})};return(d,v)=>(m(),M(N,{"modal-id":n.modalOption.id,"modal-type":n.modalOption.type,"label-id":`${n.modalOption.id}_label`,onClose:t},{header:g(()=>[s("h1",{id:`${n.modalOption.id}_label`,class:"modal-title"},"Modal Test",8,B)]),body:g(()=>[s("p",null,[a(" receive data : "+q(n.modalData),1),V,E,a(" Modal Contents..."),L,a(" Modal Contents..."),F,z,G,P,a(" input "),s("label",{for:`${n.modalOption.id}-inpName`},"Name",8,H),s("input",{type:"text",id:`${n.modalOption.id}-inpName`,name:"name",placeholder:"example..",autocomplete:"off"},null,8,J),K,a(" textarea "),Q,R,a(" Modal Contents..."),U,a(" Modal Contents..."),W,a(" Modal Contents..."),X,a(" Modal Contents..."),Y,a(" Modal Contents..."),Z,a(" Modal Contents..."),ss,a(" Modal Contents..."),as,a(" Modal Contents..."),ns,a(" Modal Contents..."),ps,a(" Modal Contents... ")])]),footer:g(()=>[s("button",{type:"button",class:"modal-btn-gray",onClick:t},os),s("button",{type:"button",class:"modal-btn-primary",onClick:p},cs)]),_:1},8,["modal-id","modal-type","label-id"]))}},es={class:"contents"},rs=f(`<h2 class="guide-title">Modal</h2><h3 class="guide-stitle">1. System Modal</h3><div class="guide-info script"><pre><span class="comment">// &#39;inject&#39; import</span>
<span class="import">import</span> <span class="mark">{</span> <span class="props">inject</span> <span class="mark">}</span> <span class="import">from</span> <span class="val">&#39;vue&#39;</span>;

<span class="comment">// ui.modal.js의 함수 호출</span>
<span class="tag">const</span> <span class="evt">systemModal</span> = <span class="func">inject<span class="mark">(</span><span class="val">&#39;systemModal&#39;</span><span class="mark">)</span></span>;

<span class="comment">/* modal options
    id: modal ID
    type: modal type(alert/confirm)
    label: modal의 제목(aria-label)
    cont: modal 내용, html 작성 가능
    okText: modal 확인 버튼에 해당하는 버튼 텍스트, default: &#39;확인&#39;
    cancelText: modal 취소 버튼에 해당하는 버튼 텍스트, default: &#39;취소&#39;
    okCallback: modal 확인 버튼의 callback
    cancelCallback: modal 취소 버튼의 callback
*/</span>
<span class="evt">systemModal</span>.<span class="func">open(</span><span class="braket">{</span>
    <span class="props">id:</span> <span class="val">&#39;ConfirmSample&#39;</span>,
    <span class="props">type:</span> <span class="val">&#39;confirm&#39;</span>,
    <span class="props">label:</span> <span class="val">&#39;확인 창&#39;</span>,
    <span class="props">cont:</span> <span class="val">&#39;진행하시겠습니까?&#39;</span>,
    <span class="props">okText:</span> <span class="val">&#39;확인&#39;</span>,
    <span class="props">cancelText:</span> <span class="val">&#39;취소&#39;</span>,
    <span class="props">okCallback:</span> <span class="mark">()</span> <span class="tag">=&gt;</span> <span class="mark">{</span>
        <span class="props">console</span>.<span class="func">log(</span><span class="val">&#39;confirm ok!!&#39;</span><span class="func">)</span>;
    <span class="mark">}</span>,
    <span class="props">cancelCallback:</span> <span class="mark">()</span> <span class="tag">=&gt;</span> <span class="mark">{</span>
        <span class="props">console</span>.<span class="func">log(</span><span class="val">&#39;confirm cancel!!&#39;</span><span class="func">)</span>;
    <span class="mark">}</span>
<span class="braket">}</span><span class="func">)</span>;
</pre></div>`,3),ds={class:"guide-cont type-row"},ms=f(`<h3 class="guide-stitle">2. Modal</h3><div class="guide-info script"><pre><span class="comment">// &#39;inject&#39; import</span>
<span class="import">import</span> <span class="mark">{</span> <span class="props">inject</span> <span class="mark">}</span> <span class="import">from</span> <span class="val">&#39;vue&#39;</span>;

<span class="comment">// modal component import</span>
<span class="import">import</span> <span class="props">ModalSample</span> <span class="import">from</span> <span class="val">&#39;<i>component 경로</i>&#39;</span>

<span class="comment">// 일반 modal 함수 호출</span>
<span class="tag">const</span> <span class="evt">layerModal</span> = <span class="func">inject</span><span class="mark">(</span><span class="val">&#39;layerModal&#39;</span><span class="mark">)</span>;

<span class="comment">// modal에 전달할 data</span>
<span class="tag">const</span> <span class="evt">sampleData</span> = <span class="func">ref</span><span class="mark">(</span><span class="func">[</span><span class="braket">{</span> <span class="props">label:</span> <span class="val">&#39;sample&#39;</span>, <span class="props">value:</span> <span class="val">&#39;1&#39;</span> <span class="braket">}</span><span class="func">]</span><span class="mark">)</span>;

<span class="comment">// modal open function</span>
<span class="tag">const</span> <span class="func">modalOpen</span> = <span class="mark">()</span> <span class="tag">=&gt;</span> <span class="mark">{</span>
    <span class="comment">// id: modal id</span>
    <span class="evt">layerModal</span>.<span class="func">open(</span><span class="braket">{</span> <span class="props">id:</span> <span class="val">&#39;SampleModal&#39;</span> <span class="braket">}</span><span class="func">)</span>;
<span class="mark">}</span>;
</pre></div><div class="guide-info html"><pre><span class="arrow">&lt;</span><span class="component">modal-sample</span>
    <span class="props">:modal-option</span>=&quot;<span class="func">{</span> <span class="props">id:</span> <span class="val">&#39;SampleModal&#39;</span>, <span class="props">type:</span> <span class="val">&#39;full&#39;</span> <span class="func">}</span>&quot;
    <span class="props">:modal-data</span>=&quot;<span class="props">sampleData</span>&quot;
<span class="arrow">&gt;&lt;/</span><span class="component">modal-sample</span><span class="arrow">&gt;</span>
</pre></div>`,3),is={class:"guide-cont type-row"},us=s("span",null,"Type: Full",-1),bs=[us],gs=s("span",null,"Type: top",-1),ys=[gs],_s=s("span",null,"Type: bottom",-1),ks=[_s],fs=f(`<h3 class="guide-stitle">2-1. Modal Sample</h3><div class="guide-info script"><pre><span class="comment">// &#39;inject&#39; import</span>
<span class="import">import</span> <span class="mark">{</span> <span class="props">inject</span> <span class="mark">}</span> <span class="import">from</span> <span class="val">&#39;vue&#39;</span>;
<span class="comment">// &#39;ModalLayer&#39; 공통 component import</span>
<span class="import">import</span> <span class="props">ModalLayer</span> <span class="import">from</span> <span class="val">&#39;@/components/ModalLayer.vue&#39;</span>;

<span class="comment">// 일반 modal 함수 호출</span>
<span class="tag">const</span> <span class="evt">layerModal</span> = <span class="func">inject</span><span class="mark">(</span><span class="val">&#39;layerModal&#39;</span><span class="mark">)</span>;

<span class="comment">// 전달받은 data</span>
<span class="tag">const</span> <span class="evt">props</span> = <span class="func">defineProps</span><span class="mark">(</span><span class="func">{</span>
    <span class="props">modalOption:</span> <span class="braket">{</span> <span class="type">type: Object</span> <span class="braket">}</span>,
    <span class="props">modalData:</span> <span class="braket">{</span> <span class="type">type: Object</span> <span class="braket">}</span>
<span class="func">}</span><span class="mark">)</span>;

<span class="comment">// modal close</span>
<span class="tag">const</span> <span class="func">modalClose</span> = <span class="mark">()</span> <span class="tag">=&gt;</span> <span class="mark">{</span>
    <span class="evt">layerModal</span>.<span class="func">close(</span><span class="braket">{</span> <span class="props">id:</span> <span class="evt">props</span>.<span class="props">modalOption.id</span> <span class="braket">}</span><span class="func">)</span>;
<span class="mark">}</span>;

<span class="comment">// modal ok</span>
<span class="tag">const</span> <span class="func">modalOk</span> = <span class="mark">()</span> <span class="tag">=&gt;</span> <span class="mark">{</span>
    <span class="comment">// modal &#39;확인&#39; 버튼 클릭 시 실행될 내용</span>
<span class="mark">}</span>;
</pre></div><div class="guide-info html"><pre><span class="arrow">&lt;</span><span class="component">modal-layer</span>
    <span class="props">:modal-id</span>=&quot;<span class="evt">props</span>.<span class="props">modalOption</span>.<span class="props">id</span>&quot;
    <span class="props">:modal-type</span>=&quot;<span class="evt">props</span>.<span class="props">modalOption</span>.<span class="props">type</span>&quot;
    <span class="props">:label-id</span>=&quot;<span class="val">\`</span><span class="tag">\${</span><span class="evt">props</span>.<span class="props">modalOption</span>.<span class="props">id</span><span class="tag">}</span><span class="val">_label\`</span>&quot;
    @<span class="props">close</span>=&quot;<span class="func">modalClose</span>&quot;
<span class="arrow">&gt;</span>
    <span class="comment">&lt;!-- 팝업 header --&gt;</span>
    <span class="arrow">&lt;</span><span class="tag">template</span> #<span class="props">header</span><span class="arrow">&gt;</span>
        <span class="comment">&lt;!-- 팝업 제목 --&gt;</span>
        <span class="arrow">&lt;</span><span class="tag">h1</span> :<span class="props">id</span>=&quot;<span class="val">\`</span><span class="tag">\${</span><span class="evt">props</span>.<span class="props">modalOption</span>.<span class="props">id</span><span class="tag">}</span><span class="val">_label\`</span>&quot; <span class="props">class</span>=&quot;<span class="val">modal-title</span>&quot;<span class="arrow">&gt;</span>Modal Sample<span class="arrow">&lt;/</span><span class="tag">h1</span><span class="arrow">&gt;</span>
    <span class="arrow">&lt;/</span><span class="tag">template</span><span class="arrow">&gt;</span>

    <span class="comment">&lt;!-- 팝업 body --&gt;</span>
    <span class="arrow">&lt;</span><span class="tag">template</span> #<span class="props">body</span><span class="arrow">&gt;</span>
        <span class="comment">&lt;!-- 팝업 내용 --&gt;</span>
        Modal contents<span class="arrow">&lt;</span><span class="tag">br</span> <span class="arrow">/&gt;</span>
        Modal contents<span class="arrow">&lt;</span><span class="tag">br</span> <span class="arrow">/&gt;</span>
        Modal contents<span class="arrow">&lt;</span><span class="tag">br</span> <span class="arrow">/&gt;</span>
        Modal contents<span class="arrow">&lt;</span><span class="tag">br</span> <span class="arrow">/&gt;</span>
        Modal contents<span class="arrow">&lt;</span><span class="tag">br</span> <span class="arrow">/&gt;</span>
        Modal contents
    <span class="arrow">&lt;/</span><span class="tag">template</span><span class="arrow">&gt;</span>

    <span class="comment">&lt;!-- 팝업 footer --&gt;</span>
    <span class="arrow">&lt;</span><span class="tag">template</span> #<span class="props">footer</span><span class="arrow">&gt;</span>
        <span class="arrow">&lt;</span><span class="tag">button</span> <span class="props">type</span>=&quot;<span class="val">button</span>&quot; <span class="props">class</span>=&quot;<span class="val">modal-btn-gray</span>&quot; @<span class="props">click</span>=&quot;<span class="func">modalClose</span>&quot;<span class="arrow">&gt;</span>
            <span class="arrow">&lt;</span><span class="tag">span</span><span class="arrow">&gt;</span>취소<span class="arrow">&lt;/</span><span class="tag">span</span><span class="arrow">&gt;</span>
        <span class="arrow">&lt;/</span><span class="tag">button</span><span class="arrow">&gt;</span>
        <span class="arrow">&lt;</span><span class="tag">button</span> <span class="props">type</span>=&quot;<span class="val">button</span>&quot; <span class="props">class</span>=&quot;<span class="val">modal-btn-primary</span>&quot; @<span class="props">click</span>=&quot;<span class="func">modalOk</span>&quot;<span class="arrow">&gt;</span>
            <span class="arrow">&lt;</span><span class="tag">span</span><span class="arrow">&gt;</span>확인<span class="arrow">&lt;/</span><span class="tag">span</span><span class="arrow">&gt;</span>
        <span class="arrow">&lt;/</span><span class="tag">button</span><span class="arrow">&gt;</span>
    <span class="arrow">&lt;/</span><span class="tag">template</span><span class="arrow">&gt;</span>
<span class="arrow">&lt;/</span><span class="component">modal-layer</span><span class="arrow">&gt;</span>
</pre></div>`,3),Ms={__name:"GuideModal",setup(e){const c=u("systemModal"),l=u("layerModal"),n=()=>{c.open({id:"AlertSample",type:"alert",label:"알림 창",cont:"확인하였습니다.",okText:"확인",okCallback:()=>{console.log("alert ok!!")}})},r=()=>{c.open({id:"ConfirmSample",type:"confirm",label:"확인 창",cont:"진행하시겠습니까?",okText:"확인",cancelText:"취소",okCallback:()=>{console.log("confirm ok!!"),n()},cancelCallback:()=>{console.log("confirm cancel!!")}})},p=S([{label:"sample",value:"1"}]),t=()=>{l.open({id:"SampleModal"})},d=()=>{l.open({id:"SampleModal2"})},v=()=>{l.open({id:"SampleModal3"})};return(vs,o)=>(m(),k(O,null,[s("div",es,[rs,s("p",ds,[s("button",{type:"button",class:"btn-secondary","aria-haspopup":"dialog","aria-controls":"AlertSample",onClick:o[0]||(o[0]=i=>n())}," Alert "),s("button",{type:"button",class:"btn-secondary","aria-haspopup":"dialog","aria-controls":"ConfirmSample",onClick:o[1]||(o[1]=i=>r())}," Confirm ")]),ms,s("div",is,[s("button",{type:"button",class:"btn-secondary","aria-haspopup":"dialog","aria-controls":"SampleModal",onClick:o[2]||(o[2]=i=>t())},bs),s("button",{type:"button",class:"btn-secondary","aria-haspopup":"dialog","aria-controls":"SampleModal2",onClick:o[3]||(o[3]=i=>d())},ys),s("button",{type:"button",class:"btn-secondary","aria-haspopup":"dialog","aria-controls":"SampleModal3",onClick:o[4]||(o[4]=i=>v())},ks)]),fs]),y(_,{"modal-option":{id:"SampleModal",type:"full"},"modal-data":p.value},null,8,["modal-data"]),y(_,{"modal-option":{id:"SampleModal2",type:"top"},"modal-data":p.value},null,8,["modal-data"]),y(_,{"modal-option":{id:"SampleModal3",type:"bottom"},"modal-data":p.value},null,8,["modal-data"])],64))}};export{Ms as default};
