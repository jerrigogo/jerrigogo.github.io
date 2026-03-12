import{x as t,c as o,m as c,a,o as l}from"./index-C5C7aT0q.js";const r={class:"contents"},m={__name:"GuideToast",setup(e){const n=t(),p=()=>{n.showToast("Lorem ipsum dolor sit amet, consectetur adipisicing elit")};return(i,s)=>(l(),o("div",r,[s[1]||(s[1]=c(`<h2 class="guide-title">Toast</h2><h3 class="guide-stitle">Basic</h3><div class="guide-info script"><pre><span class="comment">// useToastStore import</span>
<span class="import">import</span> <span class="mark">{</span> <span class="props">useToastStore</span> <span class="mark">}</span> <span class="import">from</span> <span class="val">&#39;@/store/modal&#39;</span>;
<span class="tag">const</span> <span class="evt">toastStore</span> = <span class="func">useToastStore</span><span class="mark">()</span>;

<span class="comment">// toastModal 함수</span>
<span class="tag">const</span> <span class="func">popToast</span> = <span class="mark">()</span> <span class="tag">=&gt;</span> <span class="mark">{</span>
  <span class="comment">// showToast의 value: toast 내용</span>
  <span class="evt">toastStore</span>.<span class="func">showToast(<span class="val">&#39;Lorem ipsum dolor sit amet, consectetur adipisicing elit&#39;</span>)</span>;
<span class="mark">}</span>;
</pre></div><div class="guide-info html"><pre><span class="arrow">&lt;</span><span class="tag">button</span> <span class="props">type</span>=<span class="val">&quot;button&quot;</span> <span class="props">class</span>=<span class="val">&quot;btn-secondary&quot;</span> @<span class="props">click</span>=&quot;<span class="func">popToast</span>&quot;<span class="arrow">&gt;</span>
  <span class="arrow">&lt;</span><span class="tag">span</span><span class="arrow">&gt;</span>toast<span class="arrow">&lt;/</span><span class="tag">span</span><span class="arrow">&gt;</span>
<span class="arrow">&lt;/</span><span class="tag">button</span><span class="arrow">&gt;</span>
</pre></div>`,4)),a("div",{class:"guide-cont"},[a("button",{type:"button",class:"btn-secondary",onClick:p},[...s[0]||(s[0]=[a("span",null,"toast",-1)])])])]))}};export{m as default};
