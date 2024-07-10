import{_ as c}from"./CalendarItem-CvbtbjnS.js";import{d as e,e as s,o as t,c as l,b as o,a as r,v as m}from"./index-CNBIWtJP.js";const u={class:"contents"},d=m(`<h2 class="guide-title">Calendar</h2><h3 class="guide-stitle">1. Basic</h3><div class="guide-info script"><pre><span class="comment">// 날짜 설정</span>
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
</pre></div><div class="guide-info html"><pre><span class="arrow">&lt;</span><span class="component">calendar-item</span> <span class="props">id</span>=<span class="val">&quot;CalSample1&quot;</span> :<span class="props">setup-date</span>=&quot;<span class="props">setDate</span>&quot; @<span class="props">cal-act</span>=&quot;<span class="func">selectDate</span>&quot;<span class="arrow">&gt;&lt;/</span><span class="component">calendar-item</span><span class="arrow">&gt;</span>
</pre></div>`,4),i={class:"guide-cont"},D={__name:"GuideCalendar",setup(g){const n=e({year:s(()=>new Date().getFullYear()),month:s(()=>new Date().getMonth()+1),date:s(()=>new Date().getDate())}),p=a=>{console.log(a)};return(a,k)=>(t(),l("div",u,[d,o("div",i,[r(c,{id:"CalSample1","setup-date":n.value,onCalAct:p},null,8,["setup-date"])])]))}};export{D as default};
