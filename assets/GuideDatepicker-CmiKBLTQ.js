import{d as T,l as Q,o as S,c as P,a as p,F as A,I,J as C,K as W,n as K,k as L,t as H,b,E as X,h as Z,e as c,q as ss,m as _}from"./index-_Pgh2iNb.js";import{c as as}from"./chkDevice-Xt3RnFRO.js";import{u as ns}from"./dialog-CMBHBOs4.js";import{_ as es}from"./CalendarItem-BF2ib1zz.js";const ts={class:"form-item datepicker"},ps={class:"inp-box"},ls=["id","aria-label","name","title","placeholder","aria-describedby","readonly"],cs=["id"],os=["id"],is=["id","name"],rs=["id","name"],ds=["id","aria-expanded","aria-control"],us=["id","aria-label"],M={__name:"DatepickerItem",props:{id:{type:String},label:{type:String},name:{type:String},placeholder:{type:String},defineDate:{type:String},limitDate:{type:Object},range:{type:Object}},emits:["periodAct"],setup(B,{expose:m,emit:h}){const{isMobile:y,chkBrowser:$}=as(),{alert:g}=ns(),s=B,i=h,o=c(!1),e=c(null),t=c({}),r=c(),v=c(),u=c({start:null,end:null}),d=()=>{s.range?s.range.start&&s.range.end&&(r.value=s.range.start,v.value=s.range.end,e.value=`${r.value} ~ ${v.value}`):s.defineDate&&(e.value=s.defineDate)},k=a=>{let n=a.target.value,l=(""+n).replace(/\D/g,"");if(n.length>10)n=n.slice(0,10),e.value=n;else{let f=l.match(/^(\d{0,4})(\d{0,2})(\d{0,2})$/);if(f){let D=[f[1],f[2],f[3]].filter(Boolean).join("-");e.value=D}}},q=a=>{if(e.value){const n=e.value;if(n.length==10){const l=/^(?=\d)(?:(?:31(?!.(?:0?[2469]|11))|(?:30|29)(?!.0?2)|29(?=.0?2.(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00)))(?:\x20|$))|(?:2[0-8]|1\d|0?[1-9]))([-./])(?:1[012]|0?[1-9])\1(?:1[6-9]|[2-9]\d)?\d\d(?:(?=\x20\d)\x20|$))?(((0?[1-9]|1[012])(:[0-5]\d){0,2}(\x20[AP]M))|([01]\d|2[0-3])(:[0-5]\d){1,2})?$/,f=n.slice(0,4),D=n.slice(5,7),x=n.slice(8,10);l.test(x+"-"+D+"-"+f)?e.value=`${f}-${D}-${x}`:(e.value=null,w(a))}else e.value=null,w(a)}else e.value=null;i("periodAct",e.value)},w=a=>{g({modalId:"PickerAlert",modalCont:"<p>유효한 날짜가 아닙니다.<br />날짜 형식에 맞게 다시 입력해 주세요.</p>"},a.currentTarget)},R=c(!1),U=()=>{const a=window.innerHeight,n=document.querySelector(`#${s.id}-input`),l=n.getBoundingClientRect().height,f=n.getBoundingClientRect().top,D=document.querySelector(`#${s.id}-btn`);o.value=!o.value,E.value=D,ss(()=>{if(o.value){const x=document.querySelector(`#${s.id}-dialog-calendar`),G=f+l+410;if(!y.value)a>G?R.value=!1:R.value=!0;else{const J=document.querySelector("body");J.style.overflowY="hidden"}x.focus(),document.addEventListener("click",F),document.addEventListener("keydown",O)}})},E=c(),V=()=>{o.value=!1,E.value.focus(),y.value&&document.querySelector("body").removeAttribute("style"),document.removeEventListener("click",F),document.removeEventListener("keydown",O)},j=a=>{if(s.range)a.start&&a.end?(r.value=a.start,v.value=a.end,e.value=`${r.value} ~ ${v.value}`):(r.value=null,v.value=null,e.value=null),u.value.start=r.value,u.value.end=v.value,i("periodAct",u.value);else{const n=String(a.month).padStart(2,"0"),l=String(a.date).padStart(2,"0");e.value=`${a.year}-${n}-${l}`,t.value=a,i("periodAct",e.value),V()}},F=a=>{const n=a.target,l=document.querySelector(`#${s.id}-input`),f=document.querySelector(`#${s.id}-btn`),D=document.querySelector(`#${s.id}-calendar`);o.value&&n!==f&&!D.contains(n)&&(n==l&&(E.value=n),V())},O=a=>{if(a.key!=="Tab"&&a.key!=="Escape")return!1;if(a.key=="Tab"){const n=document.activeElement,l=document.querySelector(`#${s.id}-dialog-calendar`),f=l.querySelectorAll('.date-item:not([tabindex="-1"]), button[class*="prev-cal"], button[class*="next-cal"], button[class*="cal-btn"], .cal-close'),D=f[0],x=f[f.length-1];y.value?a.shiftKey&&(n==D||n==l)?(a.preventDefault(),x.focus()):!a.shiftKey&&n==x&&(a.preventDefault(),D.focus()):(a.shiftKey&&n==D||a.shiftKey&&n==l||!a.shiftKey&&n==x)&&(a.preventDefault(),V())}a.key=="Escape"&&(a.preventDefault(),V())},Y=c();return m({initDate:a=>{Y.value=a},compareDate:a=>{const n=document.querySelector(`#${s.id}-input`),l=a=="start"?"<p>시작일은 종료일 이전 날짜를 입력해 주세요.</p>":"<p>종료일은 시작일 이후 날짜를 입력해 주세요.</p>";e.value=null,g({modalId:"PeriodAlert",modalCont:l},n)}}),T(()=>{d()}),Q(()=>{$()}),(a,n)=>(S(),P("div",ts,[p("div",ps,[s.range?(S(),P("div",{key:1,id:`${s.id}-input`,class:K(["virtual-input",{range:r.value&&v.value}])},[I(p("input",{"onUpdate:modelValue":n[1]||(n[1]=l=>r.value=l),type:"hidden",id:`${s.id}-start`,name:`${s.id}-start`},null,8,is),[[C,r.value]]),I(p("input",{"onUpdate:modelValue":n[2]||(n[2]=l=>v.value=l),type:"hidden",id:`${s.id}-end`,name:`${s.id}-end`},null,8,rs),[[C,v.value]]),r.value&&v.value?(S(),P(A,{key:0},[L(H(`${r.value} ~ ${v.value}`),1)],64)):(S(),P(A,{key:1},[L(H(s.placeholder),1)],64))],10,os)):(S(),P(A,{key:0},[I(p("input",{type:"tel","onUpdate:modelValue":n[0]||(n[0]=l=>e.value=l),id:`${s.id}-input`,"aria-label":s.label,name:s.name,title:s.placeholder,placeholder:s.placeholder,autocomplete:"off","aria-describedby":`${s.id}-info`,readonly:s.range||null,onInput:k,onBlur:q,onKeydown:W(q,["enter"])},null,40,ls),[[C,e.value]]),p("span",{id:`${s.id}-info`,class:"sr-only"},"YYYYMMDD 형식으로 입력해 주세요",8,cs)],64)),p("button",{type:"button",id:`${s.id}-btn`,class:"cal-btn","aria-haspopup":"dialog","aria-expanded":o.value,"aria-control":`${s.id}-dialog-calendar`,onClick:U},[...n[3]||(n[3]=[p("span",{class:"sr-only"},"달력 보기",-1)])],8,ds),o.value?(S(),P("div",{key:2,id:`${s.id}-dialog-calendar`,class:K(["dialog-calendar",{top:R.value}]),role:"dialog","aria-modal":"true","aria-label":`${s.label} 달력`,tabindex:"-1"},[b(es,{id:`${s.id}-calendar`,"is-mobile":X(y),"setup-date":Y.value,"define-date":e.value,"limit-date":s.limitDate,range:s.range,onCalAct:j,onCalClose:V},null,8,["id","is-mobile","setup-date","define-date","limit-date","range"])],10,us)):Z("",!0)])]))}},ms=["id"],N={__name:"PeriodItem",props:{id:{type:String},definePeriod:{type:Object}},setup(B){const m=B,h=c(null),y=c(null),$=c(null),g=c({minDate:null}),s=c({maxDate:null}),i=c({year:null,month:null,date:null}),o=c({year:null,month:null,date:null}),e=()=>{m.definePeriod&&(g.value.minDate=m.definePeriod.minDate,s.value.maxDate=m.definePeriod.maxDate)},t=u=>{if(u){const d=u.split("-"),k=d[0],q=d[1],w=d[2];o.value.year=k,o.value.month=q,o.value.date=w,y.value.initDate(o.value),$.value=h.value,g.value.minDate=u,v()}else o.value.year=null,o.value.month=null,o.value.date=null,g.value.minDate=null},r=u=>{if(u){const d=u.split("-"),k=d[0],q=d[1],w=d[2];i.value.year=k,i.value.month=q,i.value.date=w,h.value.initDate(i.value),$.value=y.value,s.value.maxDate=u,v()}else i.value.year=null,i.value.month=null,i.value.date=null,s.value.maxDate=null},v=()=>{const u=`${o.value.year}-${o.value.month}-${o.value.date}`,d=`${i.value.year}-${i.value.month}-${i.value.date}`;if(u.indexOf("null")<0&&d.indexOf("null")<0&&new Date(u).getTime()>new Date(d).getTime()){const k=$.value==h.value?"start":"end";$.value.compareDate(k)}};return T(()=>{e()}),(u,d)=>(S(),P("div",{id:m.id,class:"form-wrap period"},[b(M,{ref_key:"startRef",ref:h,id:`${m.id}-Start`,label:"시작 날짜",name:`${m.id}-start-date`,"define-date":m.definePeriod&&m.definePeriod.minDate,"limit-date":s.value,placeholder:"예) 19901026",onPeriodAct:t},null,8,["id","name","define-date","limit-date"]),d[0]||(d[0]=p("span",{class:"dash"},"~",-1)),b(M,{ref_key:"endRef",ref:y,id:`${m.id}-End`,label:"종료 날짜",name:`${m.id}-end-date`,"define-date":m.definePeriod&&m.definePeriod.maxDate,"limit-date":g.value,placeholder:"예) 19901026",onPeriodAct:r},null,8,["id","name","define-date","limit-date"])],8,ms))}},vs={class:"contents"},fs={class:"guide-cont-wrap"},gs={class:"guide-cont"},Ds={class:"guide-cont"},ks={class:"guide-cont"},hs={class:"guide-cont-wrap"},ys={class:"guide-cont"},bs={class:"guide-cont"},$s={class:"guide-cont-wrap"},qs={class:"guide-cont"},ws={class:"guide-cont"},Vs={__name:"GuideDatepicker",setup(B){const m=c("2026-03-16"),h=c({minDate:null,maxDate:null}),y=()=>{let e=365,t=365;const r=new Date,v=new Date(new Date(r).setDate(new Date(r).getDate()-e)),u=new Date(new Date(r).setDate(new Date(r).getDate()+t)),d=k=>{const q=k.getFullYear(),w=String(k.getMonth()+1).padStart(2,"0"),R=String(k.getDate()).padStart(2,"0");return`${q}-${w}-${R}`};h.value.minDate=d(v),h.value.maxDate=d(u)},$=c({minDate:"2026-03-03",maxDate:"2026-03-28"}),g=c({start:null,end:null}),s=e=>{g.value.start=e.start,g.value.end=e.end,console.log(g.value)},i=c({start:"2026-02-15",end:"2026-04-15"}),o=e=>{i.value.start=e.start,i.value.end=e.end,console.log(i.value)};return T(()=>{y()}),(e,t)=>(S(),P("div",vs,[t[7]||(t[7]=p("h2",{class:"guide-title"},"Datepicker",-1)),t[8]||(t[8]=p("h3",{class:"guide-stitle"},"기본",-1)),p("div",fs,[t[0]||(t[0]=_(`<h4 class="guide-sstitle">Basic</h4><div class="guide-info script"><pre><span class="comment">// component import</span>
<span class="import">import</span> <span class="props">DatepickerItem</span> <span class="import">from</span> <span class="val">&#39;@/components/DatepickerItem.vue&#39;</span>;
</pre></div><div class="guide-info html"><pre><span class="comment">/**</span>
<span class="comment"> * id: datepicker의 ID</span>
<span class="comment"> * label: datepicker의 input box의 aria-label</span>
<span class="comment"> * name: datepicker의 input box의 name</span>
<span class="comment"> * placeholder: datepicker의 input box의 placeholder</span>
<span class="comment">*/</span>
<span class="arrow">&lt;</span><span class="component">datepicker-item</span>
  <span class="props">id</span>=<span class="val">&quot;PickerSample1&quot;</span>
  <span class="props">label</span>=<span class="val">&quot;날짜선택&quot;</span>
  <span class="props">name</span>=<span class="val">&quot;date&quot;</span>
  <span class="props">placeholder</span>=<span class="val">&quot;예) 19901026&quot;</span>
<span class="arrow">/&gt;</span>
</pre></div>`,3)),p("div",gs,[b(M,{id:"PickerSample1",label:"날짜선택",name:"date",placeholder:"예) 19901026"})]),t[1]||(t[1]=_(`<h4 class="guide-sstitle">날짜 지정</h4><div class="guide-info html"><pre><span class="comment">/**</span>
<span class="comment"> * 속성 :define-date: 지정할 날짜</span>
<span class="comment">*/</span>
<span class="arrow">&lt;</span><span class="component">datepicker-item</span>
  <span class="props">id</span>=<span class="val">&quot;PickerSample2&quot;</span>
  <span class="props">label</span>=<span class="val">&quot;날짜선택&quot;</span>
  <span class="props">name</span>=<span class="val">&quot;date&quot;</span>
  <span class="props">placeholder</span>=<span class="val">&quot;예) 19901026&quot;</span>
  :<span class="props">define-date</span>=&quot;<span class="props">sampleSetDate</span>&quot;
<span class="arrow">/&gt;</span>
</pre></div>`,2)),p("div",Ds,[b(M,{id:"PickerSample2",label:"날짜선택",name:"date2",placeholder:"예) 19901026","define-date":m.value},null,8,["define-date"])]),t[2]||(t[2]=_(`<h4 class="guide-sstitle">날짜 제한</h4><div class="guide-info script"><pre><span class="import">import</span> <span class="mark">{</span> <span class="props">ref</span>, <span class="props">onBeforeMount</span> <span class="mark">}</span> = <span class="val">&#39;vue&#39;</span>;

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
</pre></div><div class="guide-info html"><pre><span class="comment">/**</span>
<span class="comment"> * 속성 :limit-date: 날짜 제한(minDate, maxDate)</span>
<span class="comment">*/</span>
<span class="arrow">&lt;</span><span class="component">datepicker-item</span>
  <span class="props">id</span>=<span class="val">&quot;PickerSample3&quot;</span>
  <span class="props">label</span>=<span class="val">&quot;날짜선택&quot;</span>
  <span class="props">name</span>=<span class="val">&quot;date2&quot;</span>
  <span class="props">placeholder</span>=<span class="val">&quot;예) 19901026&quot;</span>
  :<span class="props">limit-date</span>=&quot;<span class="props">sampleMinMax</span>&quot;
<span class="arrow">/&gt;</span>
</pre></div>`,3)),p("div",ks,[b(M,{id:"PickerSample3",label:"날짜선택",name:"date3",placeholder:"예) 19901026","limit-date":h.value},null,8,["limit-date"])])]),t[9]||(t[9]=p("h3",{class:"guide-stitle"},"기간 입력/선택 : 각각의 datepicker에서 시작일과 종료일 별도 입력/선택",-1)),p("div",hs,[t[3]||(t[3]=_(`<h4 class="guide-sstitle">Basic</h4><div class="guide-info script"><pre><span class="comment">// 기간 설정 component import</span>
<span class="import">import</span> <span class="props">PeriodItem</span> <span class="import">from</span> <span class="val">&#39;@/components/PeriodItem.vue&#39;</span>;
</pre></div><div class="guide-info html"><pre><span class="arrow">&lt;</span><span class="component">period-item</span> <span class="props">id</span>=<span class="val">&quot;Period&quot;</span> <span class="arrow">/&gt;</span>
</pre></div>`,3)),p("div",ys,[b(N,{id:"Period"})]),t[4]||(t[4]=_(`<h4 class="guide-sstitle">기간 지정</h4><div class="guide-info html"><pre><span class="comment">// 예시</span>
<span class="tag">const</span> <span class="evt">sampleDefinePeriod</span> = <span class="func">ref<span class="mark">(</span>{</span>
  <span class="props">minDate:</span> <span class="val">&#39;2026-03-03&#39;</span>,
  <span class="props">maxDate:</span> <span class="val">&#39;2026-03-28&#39;</span>,
<span class="func"><span class="mark">}</span>)</span>;
</pre></div><div class="guide-info html"><pre><span class="comment">// define-period 속성 추가</span>
<span class="arrow">&lt;</span><span class="component">period-item</span> <span class="props">id</span>=<span class="val">&quot;Period2&quot;</span> :<span class="props">define-period</span>=&quot;<span class="props">sampleDefinePeriod</span>&quot; <span class="arrow">/&gt;</span>
</pre></div>`,3)),p("div",bs,[b(N,{id:"Period2","define-period":$.value},null,8,["define-period"])])]),t[10]||(t[10]=p("h3",{class:"guide-stitle"},"기간 선택 : 하나의 datepicker에서 시작일/종료일 모두 선택(입력 불가)",-1)),p("div",$s,[t[5]||(t[5]=_(`<h4 class="guide-sstitle">Basic</h4><div class="guide-info script"><pre><span class="comment">// 예시</span>
<span class="tag">const</span> <span class="evt">sampleRange</span> = <span class="func">ref<span class="mark">(</span>{</span>
  <span class="props">start:</span> <span class="tag">null</span>,
  <span class="props">end:</span> <span class="tag">null</span>,
<span class="func"><span class="mark">}</span>)</span>;

<span class="comment">// 설정된 기간 확인</span>
<span class="tag">const</span> <span class="func">setPeriod</span> = <span class="mark">(<span class="props">_obj</span>) <span class="tag">=&gt;</span> {</span>
  <span class="evt">sampleRange</span>.<span class="props">value</span>.<span class="props">start</span> = <span class="props">_obj</span>.<span class="props">start</span>;
  <span class="evt">sampleRange</span>.<span class="props">value</span>.<span class="props">end</span> = <span class="props">_obj</span>.<span class="props">end</span>;
<span class="mark">}</span>;
</pre></div><div class="guide-info html"><pre><span class="comment">/**</span>
<span class="comment"> * 속성 :range: 기간 설정</span>
<span class="comment">*/</span>
<span class="arrow">&lt;</span><span class="component">datepicker-item</span>
  <span class="props">id</span>=<span class="val">&quot;Range&quot;</span>
  <span class="props">placeholder</span>=<span class="val">&quot;기간을 선택헤 주세요.&quot;</span>
  :<span class="props">range</span>=&quot;<span class="props">sampleRange</span>&quot;
  :<span class="props">period-act</span>=&quot;<span class="func">setPeriod</span>&quot;
<span class="arrow">/&gt;</span>
</pre></div>`,3)),p("div",qs,[b(M,{id:"Range",placeholder:"기간을 선택헤 주세요.",range:g.value,onPeriodAct:s},null,8,["range"])]),t[6]||(t[6]=_(`<h4 class="guide-sstitle">기간 지정</h4><div class="guide-info script"><pre><span class="comment">// 예시</span>
<span class="tag">const</span> <span class="evt">sampleRange2</span> = <span class="func">ref<span class="mark">(</span>{</span>
  <span class="props">start:</span> <span class="val">&#39;2026-03-03&#39;</span>,
  <span class="props">end:</span> <span class="val">&#39;2026-03-28&#39;</span>,
<span class="func"><span class="mark">}</span>)</span>;
</pre></div>`,2)),p("div",ws,[b(M,{id:"Range2",placeholder:"기간을 선택헤 주세요.",range:i.value,onPeriodAct:o},null,8,["range"])])])]))}};export{Vs as default};
