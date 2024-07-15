import{_ as c}from"./CalendarItem-BG8TbGNe.js";import{d as e,e as s,o as d,c as u,b as t,a as l,x as o}from"./index-Cfcd8Iai.js";const m={class:"contents"},i=o(`<h2 class="guide-title">Calendar</h2><h3 class="guide-stitle">1. Basic</h3><div class="guide-info script"><pre><span class="comment">// 날짜 설정</span>
<span class="tag">const</span> <span class="evt">setDate</span> = <span class="func">ref</span><span class="mark">(</span><span class="func">{</span>
    <span class="props">year:</span> <span class="func">computed</span><span class="braket">(</span><span class="mark">()</span> <span class="tag">=&gt; new</span> <span class="type">Date</span><span class="mark">()</span>.<span class="func">getFullYear</span><span class="mark">()</span><span class="braket">)</span>,
    <span class="props">month:</span> <span class="func">computed</span><span class="braket">(</span><span class="mark">()</span> <span class="tag">=&gt; new</span> <span class="type">Date</span><span class="mark">()</span>.<span class="func">getMonth</span><span class="mark">()</span> + <span class="num">1</span><span class="braket">)</span>,
    <span class="props">date:</span> <span class="func">computed</span><span class="braket">(</span><span class="mark">()</span> <span class="tag">=&gt; new</span> <span class="type">Date</span><span class="mark">()</span>.<span class="func">getDate</span><span class="mark">()</span><span class="braket">)</span>
<span class="func">}</span><span class="mark">)</span>;

<span class="comment">// 날짜 선택 callback</span>
<span class="tag">const</span> <span class="func">selectDate</span> = <span class="mark">(<span class="props">obj</span>)</span> <span class="tab">=&gt;</span> <span class="mark">{</span>
    <span class="comment">// obj: 선택한 날짜 object</span>
    ...
<span class="mark">}</span>;
</pre></div><div class="guide-info html"><pre><span class="arrow">&lt;</span><span class="component">calendar-item</span>
    <span class="props">id</span>=<span class="val">&quot;CalSample1&quot;</span>
    :<span class="props">setup-date</span>=&quot;<span class="props">setDate</span>&quot;
    @<span class="props">cal-act</span>=&quot;<span class="func">selectDate</span>&quot;<span class="arrow">
&gt;&lt;/</span><span class="component">calendar-item</span><span class="arrow">&gt;</span>
</pre></div>`,4),k={class:"guide-cont"},g=o(`<h3 class="guide-stitle">2. Checked date (예: 2024-07-15)</h3><div class="guide-info script"><pre><span class="comment">// 선택한 날짜(예: 2024년 7월 15일)</span>
<span class="tag">const</span> <span class="evt">checkedDate</span> = <span class="func">ref</span><span class="mark">(</span><span class="func">{</span>
    <span class="props">year:</span> <span class="num">2024</span>,
    <span class="props">month:</span> <span class="num">7</span>,
    <span class="props">date:</span> <span class="num">15</span>
<span class="func">}</span><span class="mark">)</span>;
</pre></div><div class="guide-info html"><pre><span class="comment">// :checked-date 속성 추가</span>
<span class="arrow">&lt;</span><span class="component">calendar-item</span>
    <span class="props">id</span>=<span class="val">&quot;CalSample1&quot;</span>
    :<span class="props">setup-date</span>=&quot;<span class="props">setDate</span>&quot;
    :<span class="props">checked-date</span>=&quot;<span class="props">checkedDate</span>&quot;
    @<span class="props">cal-act</span>=&quot;<span class="func">selectDate</span>&quot;
<span class="arrow">&gt;&lt;/</span><span class="component">calendar-item</span><span class="arrow">&gt;</span>
</pre></div>`,3),h={class:"guide-cont"},q={__name:"GuideCalendar",setup(f){const a=e({year:s(()=>new Date().getFullYear()),month:s(()=>new Date().getMonth()+1),date:s(()=>new Date().getDate())}),n=p=>{console.log(p)},r=e({year:2024,month:7,date:15});return(p,_)=>(d(),u("div",m,[i,t("div",k,[l(c,{id:"CalSample1","setup-date":a.value,onCalAct:n},null,8,["setup-date"])]),g,t("div",h,[l(c,{id:"CalSample2","setup-date":a.value,"checked-date":r.value,onCalAct:n},null,8,["setup-date","checked-date"])])]))}};export{q as default};
