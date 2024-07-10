import{q as p,o as t,c as o,b as s,v as c}from"./index-C7ElfL03.js";const l={class:"contents"},e=c(`<h2 class="guide-title">Toast</h2><h3 class="guide-stitle">1. Basic</h3><div class="guide-info script"><pre><span class="comment">// inject import</span>
<span class="import">import</span> <span class="mark">{</span> <span class="props">inject</span> <span class="mark">}</span> <span class="import">from</span> <span class="val">&#39;vue&#39;</span>;

<span class="comment">// ui.global.js의 toastModal 호출</span>
<span class="tag">const</span> <span class="evt">toastModal</span> = <span class="func">inject</span><span class="mark">(</span><span class="val">&#39;toastModal&#39;</span><span class="mark">)</span>;

<span class="comment">// toastModal 함수</span>
<span class="tag">const</span> <span class="func">popToast</span> = <span class="mark">()</span> <span class="tag">=&gt;</span> <span class="mark">{</span>
    <span class="comment">/** toast options
     * 1. id: Toast id
     * 2. cont: Toast 내용
     * 3. during: Toast 유지 시간(단위: ms) - optional: 없으면 기본 3000
     */</span>
    <span class="func">toastModal(</span><span class="braket">{</span>
        <span class="props">id:</span> <span class="val">&#39;ToastSample1&#39;</span>,
        <span class="props">cont:</span> <span class="val">&#39;Lorem ipsum dolor sit amet, consectetur adipisicing elit&#39;</span>,
        <span class="props">during:</span> <span class="num">3000</span>
    <span class="braket">}</span><span class="func">)</span>;
<span class="mark">}</span>;
</pre></div><div class="guide-info html"><pre><span class="arrow">&lt;</span><span class="tag">button</span> <span class="props">type</span>=<span class="val">&quot;button&quot;</span> <span class="props">class</span>=<span class="val">&quot;btn-secondary&quot;</span> @<span class="props">click</span>=&quot;<span class="func">popToast</span>&quot;<span class="arrow">&gt;</span>
    <span class="arrow">&lt;</span><span class="tag">span</span><span class="arrow">&gt;</span>toast<span class="arrow">&lt;/</span><span class="tag">span</span><span class="arrow">&gt;</span>
<span class="arrow">&lt;/</span><span class="tag">button</span><span class="arrow">&gt;</span>
</pre></div>`,4),r=s("span",null,"toast",-1),i=[r],_={__name:"GuideToast",setup(d){const a=p("toastModal"),n=()=>{a({id:"ToastSample1",cont:"Lorem ipsum dolor sit amet, consectetur adipisicing elit",during:3e3})};return(u,m)=>(t(),o("div",l,[e,s("div",{class:"guide-cont"},[s("button",{type:"button",class:"btn-secondary",onClick:n},i)])]))}};export{_ as default};
