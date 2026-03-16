import{_ as c}from"./CalendarItem-khh1Wwr3.js";import{d as w,c as h,m as r,a,b as l,e as m,o as q}from"./index-ku59ml2R.js";const C={class:"contents"},S={class:"guide-cont"},M={class:"guide-cont"},_={class:"guide-cont"},x={class:"guide-cont"},F={__name:"GuideCalendar",setup(V){const u=m("2026-03-16"),n=p=>{console.log(p)},e=m({minDate:null,maxDate:null}),d=()=>{let p=20,s=24;const t=new Date,f=new Date(new Date(t).setDate(new Date(t).getDate()-p)),v=new Date(new Date(t).setDate(new Date(t).getDate()+s)),i=o=>{const D=o.getFullYear(),k=String(o.getMonth()+1).padStart(2,"0"),b=String(o.getDate()).padStart(2,"0");return`${D}-${k}-${b}`};e.value.minDate=i(f),e.value.maxDate=i(v)},g=m({start:"2026-02-14",end:"2026-03-15"});return w(()=>{d()}),(p,s)=>(q(),h("div",C,[s[0]||(s[0]=r(`<h2 class="guide-title">Calendar</h2><h3 class="guide-stitle">Basic</h3><div class="guide-info script"><pre><span class="comment">// component import</span>
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
</pre></div>`,4)),a("div",S,[l(c,{id:"CalSample1",onCalAct:n})]),s[1]||(s[1]=r(`<h3 class="guide-stitle">Checked date (예: 2026-03-16)</h3><div class="guide-info script"><pre><span class="comment">// 날짜 지정 예시</span>
<span class="tag">const</span> <span class="evt">sampleDefineDate</span> = <span class="func">ref</span><span class="mark">(<span class="val">&#39;2026-03-16&#39;</span>)</span>;
</pre></div><div class="guide-info html"><pre><span class="comment">// define-date 속성에 선택 날짜 지정</span>
<span class="arrow">&lt;</span><span class="component">calendar-item</span>
  <span class="props">id</span>=<span class="val">&quot;CalSample1&quot;</span>
  :<span class="props">define-date</span>=&quot;<span class="props">sampleDefineDate</span>&quot;
  @<span class="props">cal-act</span>=&quot;<span class="func">selectDate</span>&quot;
<span class="arrow">/&gt;</span>
</pre></div>`,3)),a("div",M,[l(c,{id:"CalSample2","define-date":u.value,onCalAct:n},null,8,["define-date"])]),s[2]||(s[2]=r(`<h3 class="guide-stitle">날짜 제한 설정: minDate, maxDate</h3><div class="guide-info script"><pre><span class="import">import</span> <span class="mark">{</span> <span class="props">ref</span>, <span class="props">onBeforeMount</span> <span class="mark">}</span> = <span class="val">&#39;vue&#39;</span>;

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
</pre></div>`,3)),a("div",_,[l(c,{id:"CalSample3","limit-date":e.value,onCalAct:n},null,8,["limit-date"])]),s[3]||(s[3]=a("h3",{class:"guide-stitle"},"날짜 영역(기간) 선택",-1)),a("div",x,[l(c,{id:"CalSample4",range:g.value,onCalAct:n},null,8,["range"])])]))}};export{F as default};
