import{_ as p}from"./TooltipItem-D27k5JjC.js";import{c as l,m as t,a,b as n,j as o,o as i}from"./index-DZsORtbK.js";import"./chkDevice-BFD4K8eC.js";const e={class:"contents"},c={class:"guide-cont"},r={class:"guide-cont"},q={__name:"GuideTooltip",setup(m){return(u,s)=>(i(),l("div",e,[s[2]||(s[2]=t(`<h2 class="guide-title">Tooltip</h2><h3 class="guide-stitle">Mouse over</h3><div class="guide-info script"><pre><span class="comment">// component import</span>
<span class="import">import</span> <span class="props">TooltipItem</span> <span class="import">from</span> <span class="val">&#39;@/components/TooltipItem.vue&#39;</span>;
</pre></div><div class="guide-info html"><pre><span class="comment">&lt;!-- tip-title: 스크린리더 용 title --&gt;</span>
<span class="arrow">&lt;</span><span class="component">tooltip-item</span> <span class="props">id</span>=<span class="val">&quot;TipSample1&quot;</span> <span class="props">tip-title</span>=&quot;<span class="val">개인정보 처리목적</span>&quot;<span class="arrow">&gt;</span>
  <span class="comment">// Tooltip contents</span>
  ...
<span class="arrow">&lt;/</span><span class="component">tooltip-item</span><span class="arrow">&gt;</span>
</pre></div>`,4)),a("div",c,[n(p,{id:"TipSample1","tip-title":"개인정보 처리목적"},{default:o(()=>[...s[0]||(s[0]=[a("p",null,"개인정보 처리목적 : 보험계약 상담, 보험계약 인수여부 결정을 위한 판단 등",-1)])]),_:1})]),s[3]||(s[3]=t(`<h3 class="guide-stitle">&#39;Enter&#39; keydown or mouse click</h3><div class="guide-info html"><pre><span class="comment">&lt;!-- :tip-click=&quot;true&quot; 추가 --&gt;</span>
<span class="arrow">&lt;</span><span class="component">tooltip-item</span> <span class="props">id</span>=<span class="val">&quot;TipSample2&quot;</span> <span class="props">tip-title</span>=&quot;<span class="val">개인정보 처리목적</span>&quot; :<span class="props">tip-click</span>=&quot;<span class="boolean">true</span>&quot; <span class="arrow">&gt;</span>
  <span class="comment">// Tooltip contents</span>
  ...
<span class="arrow">&lt;/</span><span class="component">tooltip-item</span><span class="arrow">&gt;</span>
</pre></div>`,2)),a("div",r,[n(p,{id:"TipSample2","tip-title":"개인정보 처리목적","tip-click":!0},{default:o(()=>[...s[1]||(s[1]=[a("p",null,"개인정보 처리목적 : 보험계약 상담, 보험계약 인수여부 결정을 위한 판단 등",-1)])]),_:1})])]))}};export{q as default};
