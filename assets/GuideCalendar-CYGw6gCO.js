import{_ as l}from"./CalendarItem-CfNPcS3q.js";import{d as b,c as w,m as e,a as o,b as r,e as i,o as h}from"./index-C5C7aT0q.js";const q={class:"contents"},M={class:"guide-cont"},S={class:"guide-cont"},_={class:"guide-cont"},B={__name:"GuideCalendar",setup(C){const u=i("2026-03-16"),p=a=>{console.log(a)},t=i({minDate:null,maxDate:null}),d=()=>{let a=365,s=365;const n=new Date,f=new Date(new Date(n).setDate(new Date(n).getDate()-a)),g=new Date(new Date(n).setDate(new Date(n).getDate()+s)),m=c=>{const v=c.getFullYear(),D=String(c.getMonth()+1).padStart(2,"0"),k=String(c.getDate()).padStart(2,"0");return`${v}-${D}-${k}`};t.value.minDate=m(f),t.value.maxDate=m(g)};return b(()=>{d()}),(a,s)=>(h(),w("div",q,[s[0]||(s[0]=e(`<h2 class="guide-title">Calendar</h2><h3 class="guide-stitle">Basic</h3><div class="guide-info script"><pre><span class="comment">// component import</span>
<span class="import">import</span> <span class="props">CalendarItem</span> <span class="import">from</span> <span class="val">&#39;@/components/CalendarItem.vue&#39;</span>;

<span class="comment">// 날짜 선택 callback</span>
<span class="tag">const</span> <span class="func">selectDate</span> = <span class="mark">(<span class="props">obj</span>)</span> <span class="tab">=&gt;</span> <span class="mark">{</span>
    <span class="comment">// obj: 선택한 날짜 object</span>
    ...
<span class="mark">}</span>;
</pre></div><div class="guide-info html"><pre><span class="arrow">&lt;</span><span class="component">calendar-item</span>
  <span class="props">id</span>=<span class="val">&quot;CalSample1&quot;</span>
  @<span class="props">cal-act</span>=&quot;<span class="func">selectDate</span>&quot;
<span class="arrow">/&gt;</span>
</pre></div>`,4)),o("div",M,[r(l,{id:"CalSample1",onCalAct:p})]),s[1]||(s[1]=e(`<h3 class="guide-stitle">Checked date (예: 2026-03-16)</h3><div class="guide-info script"><pre><span class="comment">// 날짜 지정 예시</span>
<span class="tag">const</span> <span class="evt">sampleDefineDate</span> = <span class="func">ref</span><span class="mark">(<span class="val">&#39;2026-03-16&#39;</span>)</span>;
</pre></div><div class="guide-info html"><pre><span class="comment">// define-date 속성에 선택 날짜 지정</span>
<span class="arrow">&lt;</span><span class="component">calendar-item</span>
  <span class="props">id</span>=<span class="val">&quot;CalSample1&quot;</span>
  :<span class="props">define-date</span>=&quot;<span class="props">sampleDefineDate</span>&quot;
  @<span class="props">cal-act</span>=&quot;<span class="func">selectDate</span>&quot;
<span class="arrow">/&gt;</span>
</pre></div>`,3)),o("div",S,[r(l,{id:"CalSample2","define-date":u.value,onCalAct:p},null,8,["define-date"])]),s[2]||(s[2]=e(`<h3 class="guide-stitle">날짜 제한 설정: minDate, maxDate</h3><div class="guide-info script"><pre><span class="import">import</span> <span class="mark">{</span> <span class="props">ref</span>, <span class="props">onBeforeMount</span> <span class="mark">}</span> = <span class="val">&#39;vue&#39;</span>;

<span class="comment">// 날짜 제한 예시</span>
<span class="tag">const</span> <span class="evt">sampleMinMax</span> = <span class="func">ref<span class="mark">(</span>{</span>
  <span class="props">minDate:</span> <span class="tag">null</span>,
  <span class="props">maxDate:</span> <span class="tag">null</span>,
<span class="func">}<span class="mark">)</span></span>;

<span class="comment">// 날짜 제한 설정하기</span>
<span class="tag">const</span> <span class="func">setLimitDate</span> = <span class="mark">()</span> <span class="tag">=&gt;</span> <span class="mark">{</span>
  <span class="tag">let</span> <span class="props">beforeVal</span> = <span class="num">365</span>; <span class="comment">// 오늘 기준 1년 전</span>
  <span class="tag">let</span> <span class="props">afterVal</span> = <span class="num">365</span>; <span class="comment">// 오늘 기준 1년 후</span>

  <span class="tag">const</span> <span class="evt">now</span> = <span class="tag">new</span> <span class="component">Date</span><span class="func">()</span>; <span class="comment">// 오늘</span>
  <span class="tag">const</span> <span class="evt">setPast</span> = <span class="tag">new</span> <span class="component">Date</span><span class="func">(</span><span class="tag">new</span> <span class="component">Date</span><span class="braket">(</span><span class="evt">now</span><span class="braket">)</span>.<span class="func">setDate</span><span class="braket">(</span><span class="tag">new</span> <span class="component">Date</span><span class="mark">(<span class="evt">now</span>)</span>.<span class="func">getDate<span class="mark">()</span></span> - <span class="props">beforeVal</span><span class="braket">)</span><span class="func">)</span>; <span class="comment">// 날짜 하한</span>
  <span class="tag">const</span> <span class="evt">setFuture</span> = <span class="tag">new</span> <span class="component">Date</span><span class="func">(</span><span class="tag">new</span> <span class="component">Date</span><span class="braket">(</span><span class="evt">now</span><span class="braket">)</span>.<span class="func">setDate</span><span class="braket">(</span><span class="tag">new</span> <span class="component">Date</span><span class="mark">(<span class="evt">now</span>)</span>.<span class="func">getDate<span class="mark">()</span></span> + <span class="props">afterVal</span><span class="braket">)</span><span class="func">)</span>; <span class="comment">// 널짜 상한</span>

  <span class="comment">// 날짜 구하기</span>
  <span class="tag">const</span> <span class="func">calDate</span> = <span class="func">(<span class="props">_date</span>)</span> <span class="tag">=&gt;</span> <span class="func">{</span>
    <span class="tag">const</span> <span class="evt">year</span> = <span class="props">_date</span>.<span class="func">getFullYear<span class="braket">()</span></span>;
    <span class="tag">const</span> <span class="evt">month</span> = <span class="component">String</span><span class="braket">(</span><span class="props">_date</span>.<span class="func">getMonth<span class="mark">()</span></span> + <span class="num">1</span><span class="braket">)</span>.<span class="func">padStart</span><span class="braket">(</span><span class="num">2</span>, <span class="val">&#39;0&#39;</span><span class="braket">)</span>;
    <span class="tag">const</span> <span class="evt">date</span> = <span class="component">String</span><span class="braket">(</span><span class="props">_date</span>.<span class="func">getDate<span class="mark">()</span></span><span class="braket">)</span>.<span class="func">padStart</span><span class="braket">(</span><span class="num">2</span>, <span class="val">&#39;0&#39;</span><span class="braket">)</span>;
    <span class="import">return</span> <span class="val">\`<span class="tag">\${<span class="evt">year</span>}</span>-<span class="tag">\${<span class="evt">month</span>}</span>-<span class="tag">\${<span class="evt">date</span>}</span>\`</span>;
  <span class="func">}</span>;

  <span class="comment">// 날짜 하한선</span>
  <span class="evt">sampleMinMax</span>.<span class="props">value</span>.<span class="props">minDate</span> = <span class="func">calDate(<span class="evt">setPast</span>)</span>;

  <span class="comment">// 날짜 상한선</span>
  <span class="evt">sampleMinMax</span>.<span class="props">value</span>.<span class="props">minDate</span> = <span class="func">calDate(<span class="evt">setFuture</span>)</span>;
<span class="mark">}</span>;

<span class="func">onBeforeMount<span class="mark">(</span><span class="func">()</span> <span class="tag">=&gt;</span> {</span>
  <span class="func">setLimitDate</span><span class="braket">()</span>;
<span class="func">}</span><span class="mark">)</span>;
</pre></div><div class="guide-info html"><pre><span class="comment">// limit-date 속성에 선택 날짜 지정</span>
<span class="arrow">&lt;</span><span class="component">calendar-item</span>
  <span class="props">id</span>=<span class="val">&quot;CalSample1&quot;</span>
  :<span class="props">limit-date</span>=&quot;<span class="props">sampleMinMax</span>&quot;
  @<span class="props">cal-act</span>=&quot;<span class="func">selectDate</span>&quot;
<span class="arrow">/&gt;</span>
</pre></div>`,3)),o("div",_,[r(l,{id:"CalSample3","limit-date":t.value,onCalAct:p},null,8,["limit-date"])])]))}};export{B as default};
