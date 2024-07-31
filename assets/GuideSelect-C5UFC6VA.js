import{r as s,c as b,a as n,e as l,d as e,h as d,o as f}from"./index-BwCZj-jW.js";const S={class:"main-contents"},O=e(`<h2 class="guide-title">Selects</h2><div class="guide-info"><strong>Vuetify3 Selects</strong><br><a href="https://vuetifyjs.com/en/components/selects/#usage" target="_blank"> https://vuetifyjs.com/en/components/selects/#usage </a></div><h3 class="guide-stitle">1. Basic</h3><div class="guide-info script"><pre><span class="tag">const</span> <span class="evt">selectOpt</span> = <span class="func">ref<span class="mark">(</span>[</span>
    <span class="val">&#39;Select Option1&#39;</span>,
    <span class="val">&#39;Select Option2&#39;</span>,
    <span class="val">&#39;Select Option3&#39;</span>,
    <span class="val">&#39;Select Option4&#39;</span>,
    <span class="val">&#39;Select Option5&#39;</span>,
    <span class="val">&#39;Select Option6&#39;</span>
<span class="func">ref<span class="mark">)</span>]</span>;
</pre></div><div class="guide-info html"><pre><span class="arrow">&lt;</span><span class="component">v-select</span>
    <span class="props">class</span>=<span class="val">&quot;select-box&quot;</span>
    <span class="props">label</span>=<span class="val">&quot;Basic Sample&quot;</span>
    :<span class="props">items</span>=&quot;<span class="props">selectOpt</span>&quot;
    <span class="comment">// selectbox의 list에 class값 추가</span>
    :<span class="props">menu-props</span>=&quot;<span class="func">{</span> <span class="props">contentClass:</span> <span class="val">&#39;select-box-list&#39;</span> <span class="func">}</span>&quot;
<span class="arrow">&gt;</span><span class="arrow">&lt;/</span><span class="component">v-select</span><span class="arrow">&gt;</span>
</pre></div>`,5),q={class:"guide-cont"},g=e(`<h3 class="guide-stitle">2. Multiple</h3><div class="guide-info script"><pre><span class="tag">const</span> <span class="evt">sampleselect</span> = <span class="func">ref<span class="mark">(<span class="func">[]</span>)</span></span>;
</pre></div><div class="guide-info html"><pre><span class="arrow">&lt;</span><span class="component">v-select</span>
    <span class="props">class</span>=<span class="val">&quot;select-box&quot;</span>
    <span class="props">label</span>=<span class="val">&quot;Multiple Sample&quot;</span>
    <span class="props">v-model</span>=&quot;<span class="props">sampleselect</span>&quot;
    :<span class="props">items</span>=&quot;<span class="props">selectOpt</span>&quot;
    <span class="comment">// selectbox의 list에 class값 추가</span>
    :<span class="props">menu-props</span>=&quot;<span class="func">{</span> <span class="props">contentClass:</span> <span class="val">&#39;select-box-list&#39;</span> <span class="func">}</span>&quot;
    <span class="props">multiple</span>
<span class="arrow">&gt;</span><span class="arrow">&lt;/</span><span class="component">v-select</span><span class="arrow">&gt;</span>
</pre></div>`,3),k={class:"guide-cont"},_=e(`<h3 class="guide-stitle">3. Selected</h3><div class="guide-info script"><pre><span class="comment">// 선택된 값 설정</span>
<span class="tag">const</span> <span class="evt">selectedsample</span> = <span class="func">ref</span><span class="mark">(</span><span class="func">{</span> <span class="props">label:</span> <span class="val">&#39;Select Option3&#39;</span>, <span class="props">value:</span> <span class="val">&#39;3&#39;</span> <span class="func">}</span><span class="mark">)</span>;
<span class="tag">const</span> <span class="evt">selectOpt2</span> = <span class="func">ref</span><span class="mark">(</span><span class="func">[</span>
    <span class="braket">{</span> <span class="props">label:</span> <span class="val">&#39;Select Option1&#39;</span>, <span class="props">value:</span> <span class="val">&#39;1&#39;</span> <span class="braket">}</span>,
    <span class="braket">{</span> <span class="props">label:</span> <span class="val">&#39;Select Option2&#39;</span>, <span class="props">value:</span> <span class="val">&#39;2&#39;</span> <span class="braket">}</span>,
    <span class="braket">{</span> <span class="props">label:</span> <span class="val">&#39;Select Option3&#39;</span>, <span class="props">value:</span> <span class="val">&#39;3&#39;</span> <span class="braket">}</span>,
    <span class="braket">{</span> <span class="props">label:</span> <span class="val">&#39;Select Option4&#39;</span>, <span class="props">value:</span> <span class="val">&#39;4&#39;</span> <span class="braket">}</span>,
    <span class="braket">{</span> <span class="props">label:</span> <span class="val">&#39;Select Option5&#39;</span>, <span class="props">value:</span> <span class="val">&#39;5&#39;</span> <span class="braket">}</span>,
    <span class="braket">{</span> <span class="props">label:</span> <span class="val">&#39;Select Option6&#39;</span>, <span class="props">value:</span> <span class="val">&#39;6&#39;</span> <span class="braket">}</span>
<span class="func">]</span><span class="mark">)</span>;
</pre></div><div class="guide-info html"><pre><span class="arrow">&lt;</span><span class="component">v-select</span>
    <span class="props">class</span>=<span class="val">&quot;select-box&quot;</span>
    <span class="props">label</span>=<span class="val">&quot;Selected value&quot;</span>
    <span class="props">v-model</span>=&quot;<span class="props">selectedsample</span>&quot;
    :<span class="props">items</span>=&quot;<span class="props">selectOpt2</span>&quot;
    <span class="comment">// selectbox의 list에 class값 추가</span>
    :<span class="props">menu-props</span>=&quot;<span class="func">{</span> <span class="props">contentClass:</span> <span class="val">&#39;select-box-list&#39;</span> <span class="func">}</span>&quot;
    <span class="props">item-title</span>=<span class="val">&quot;label&quot;</span>
    <span class="props">item-value</span>=<span class="val">&quot;value&quot;</span>
    <span class="props">return-object</span>
<span class="arrow">&gt;</span><span class="arrow">&lt;/</span><span class="component">v-select</span><span class="arrow">&gt;</span>
</pre></div>`,3),h={class:"guide-cont"},x=e(`<h3 class="guide-stitle">4. Custom item props</h3><div class="guide-info">※ selectbox 리스트의 항목을 두 줄로 표시</div><div class="guide-info script"><pre><span class="tag">const</span> <span class="evt">items</span> = <span class="func">ref<span class="mark">(</span>[</span>
    <span class="braket">{</span> <span class="props">title:</span> <span class="val">&#39;Select Option1&#39;</span>, <span class="props">subtitle:</span> <span class="val">&#39;sub-title of select option1&#39;</span> <span class="braket">}</span>,
    <span class="braket">{</span> <span class="props">title:</span> <span class="val">&#39;Select Option2&#39;</span>, <span class="props">subtitle:</span> <span class="val">&#39;sub-title of select option2&#39;</span> <span class="braket">}</span>,
    <span class="braket">{</span> <span class="props">title:</span> <span class="val">&#39;Select Option3&#39;</span>, <span class="props">subtitle:</span> <span class="val">&#39;sub-title of select option3&#39;</span> <span class="braket">}</span>,
    <span class="braket">{</span> <span class="props">title:</span> <span class="val">&#39;Select Option4&#39;</span>, <span class="props">subtitle:</span> <span class="val">&#39;sub-title of select option4&#39;</span> <span class="braket">}</span>,
    <span class="braket">{</span> <span class="props">title:</span> <span class="val">&#39;Select Option5&#39;</span>, <span class="props">subtitle:</span> <span class="val">&#39;sub-title of select option5&#39;</span> <span class="braket">}</span>,
    <span class="braket">{</span> <span class="props">title:</span> <span class="val">&#39;Select Option6&#39;</span>, <span class="props">subtitle:</span> <span class="val">&#39;sub-title of select option6&#39;</span> <span class="braket">}</span>
<span class="func"><span class="mark">]</span>)</span>;

<span class="tag">const</span> <span class="evt">itemProps</span> = <span class="mark">(<span class="props">item</span>)</span> <span class="tag">=&gt;</span> <span class="mark">{</span>
    <span class="import">return</span> <span class="func">{</span>
        <span class="props">title: item</span>.<span class="props">title</span>,
        <span class="props">subtitle: item</span>.<span class="props">subtitle</span>
    <span class="func">}</span>;
<span class="mark">}</span>;
</pre></div><div class="guide-info html"><pre><span class="arrow">&lt;</span><span class="component">v-select</span>
    <span class="props">class</span>=<span class="val">&quot;select-box&quot;</span>
    <span class="props">label</span>=<span class="val">&quot;Custom&quot;</span>
    :<span class="props">item-props</span>=&quot;<span class="func">itemProps</span>&quot;
    :<span class="props">items</span>=&quot;<span class="props">items</span>&quot;
    <span class="comment">// selectbox의 list에 class값 추가</span>
    :<span class="props">menu-props</span>=&quot;<span class="func">{</span> <span class="props">contentClass:</span> <span class="val">&#39;select-box-list&#39;</span> <span class="func">}</span>&quot;
<span class="arrow">&gt;</span><span class="arrow">&lt;/</span><span class="component">v-select</span><span class="arrow">&gt;</span>
</pre></div>`,4),w={class:"guide-cont"},B={__name:"GuideSelect",setup(C){const o=s(["Select Option1","Select Option2","Select Option3","Select Option4","Select Option5","Select Option6"]),i=s([]),r=s({label:"Select Option3",value:"3"}),u=s([{label:"Select Option1",value:"1"},{label:"Select Option2",value:"2"},{label:"Select Option3",value:"3"},{label:"Select Option4",value:"4"},{label:"Select Option5",value:"5"},{label:"Select Option6",value:"6"}]),v=s([{title:"Select Option1",subtitle:"sub-title of select option1"},{title:"Select Option2",subtitle:"sub-title of select option2"},{title:"Select Option3",subtitle:"sub-title of select option3"},{title:"Select Option4",subtitle:"sub-title of select option4"},{title:"Select Option5",subtitle:"sub-title of select option5"},{title:"Select Option6",subtitle:"sub-title of select option6"}]),m=t=>({title:t.title,subtitle:t.subtitle});return(t,a)=>{const p=d("v-select");return f(),b("div",S,[O,n("div",q,[l(p,{class:"select-box",label:"Basic Sample",items:o.value,"menu-props":{contentClass:"select-box-list"}},null,8,["items"])]),g,n("div",k,[l(p,{class:"select-box",label:"Multiple Sample",modelValue:i.value,"onUpdate:modelValue":a[0]||(a[0]=c=>i.value=c),items:o.value,"menu-props":{contentClass:"select-box-list"},multiple:""},null,8,["modelValue","items"])]),_,n("div",h,[l(p,{class:"select-box",label:"Selected value",modelValue:r.value,"onUpdate:modelValue":a[1]||(a[1]=c=>r.value=c),items:u.value,"menu-props":{contentClass:"select-box-list"},"item-title":"label","item-value":"value","return-object":""},null,8,["modelValue","items"])]),x,n("div",w,[l(p,{class:"select-box",label:"Custom","item-props":m,items:v.value,"menu-props":{contentClass:"select-box-list"}},null,8,["items"])])])}}};export{B as default};
