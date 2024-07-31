import{r as v,c as o,a as n,e as l,l as s,d as m,h as a,o as t,p as w,F as g,k as _,g as b,q as f,t as q}from"./index-IN-5UTd3.js";const k={class:"main-contents"},h=m(`<h2 class="guide-title">Dropdowns</h2><div class="guide-info"><strong>Vuetify3 Menus</strong><br><a href="https://vuetifyjs.com/en/components/menus/#usage" target="_blank"> https://vuetifyjs.com/en/components/menus/#usage </a></div><h3 class="guide-stitle">1. Basic</h3><div class="guide-info script"><pre><span class="tag">const</span> <span class="evt">items</span> = <span class="func">ref<span class="mark">(</span>[</span>
    <span class="braket">{</span> <span class="props">label:</span> <span class="val">&#39;Menu 1&#39;</span> <span class="braket">}</span>,
    <span class="braket">{</span> <span class="props">label:</span> <span class="val">&#39;Menu 2&#39;</span> <span class="braket">}</span>,
    <span class="braket">{</span> <span class="props">label:</span> <span class="val">&#39;Menu 3&#39;</span> <span class="braket">}</span>,
    <span class="braket">{</span> <span class="props">label:</span> <span class="val">&#39;Menu 4&#39;</span> <span class="braket">}</span>,
    <span class="braket">{</span> <span class="props">label:</span> <span class="val">&#39;Menu 5&#39;</span> <span class="braket">}</span>,
    <span class="braket">{</span> <span class="props">label:</span> <span class="val">&#39;Menu 6&#39;</span> <span class="braket">}</span>
<span class="func">]</span><span class="mark">)</span>;
</pre></div><div class="guide-info html"><pre><span class="arrow">&lt;</span><span class="tag">div</span> <span class="props">class</span>=<span class="val">&quot;dropdown&quot;</span><span class="arrow">&gt;</span>
    <span class="arrow">&lt;</span><span class="component">v-menu</span> <span class="props">class</span>=<span class="val">&quot;dropdown-layer&quot;</span><span class="arrow">&gt;</span>
        <span class="arrow">&lt;</span><span class="tag">template</span> <span class="props">v-slot</span>:<span class="props">activator</span>=&quot;<span class="func">{ <span class="evt">props</span> }</span>&quot;<span class="arrow">&gt;</span>
            <span class="arrow">&lt;</span><span class="tag">button</span> <span class="props">type</span>=<span class="val">&quot;button&quot;</span> <span class="props">class</span>=<span class="val">&quot;dropdown-trigger&quot;</span> <span class="props">v-bind</span>=&quot;<span class="evt">props</span>&quot;<span class="arrow">&gt;</span>
                <span class="arrow">&lt;</span><span class="tag">span</span><span class="arrow">&gt;</span>Sample<span class="arrow">&lt;/</span><span class="tag">span</span><span class="arrow">&gt;</span>
            <span class="arrow">&lt;/</span><span class="tag">button</span><span class="arrow">&gt;</span>
        <span class="arrow">&lt;/</span><span class="tag">template</span><span class="arrow">&gt;</span>

        <span class="arrow">&lt;</span><span class="component">v-list</span> <span class="props">class</span>=<span class="val">&quot;dropdown-list&quot;</span><span class="arrow">&gt;</span>
            <span class="arrow">&lt;</span><span class="component">v-list-item</span>
                <span class="props">class</span>=<span class="val">&quot;dropdown-item&quot;</span>
                <span class="import">v-for</span>=&quot;<span class="func">(<span class="evt">item</span>, <span class="evt">index</span>)</span> <span class="tag">in</span> <span class="props">items</span>&quot;
                :<span class="props">key</span>=&quot;<span class="evt">index</span>&quot;
                :<span class="props">value</span>=&quot;<span class="evt">index</span>&quot;
            <span class="arrow">&gt;</span>
                <span class="arrow">&lt;</span><span class="component">v-list-item-title</span><span class="arrow">&gt;</span><span class="func">{{</span> <span class="evt">item</span>.<span class="props">label</span> <span class="func">}}</span><span class="arrow">&lt;/</span><span class="component">v-list-item-title</span><span class="arrow">&gt;</span>
            <span class="arrow">&lt;/</span><span class="component">v-list-item</span><span class="arrow">&gt;</span>
        <span class="arrow">&lt;/</span><span class="component">v-list</span><span class="arrow">&gt;</span>
    <span class="arrow">&lt;/</span><span class="component">v-menu</span><span class="arrow">&gt;</span>
<span class="arrow">&lt;/<span class="arrow">&lt;</span><span class="tag">div</span></span><span class="arrow">&gt;</span>
</pre></div>`,5),M={class:"guide-cont"},y={class:"dropdown"},x=n("span",null,"Sample",-1),B=[x],j={__name:"GuideDropDown",setup(V){const e=v([{label:"Menu 1"},{label:"Menu 2"},{label:"Menu 3"},{label:"Menu 4"},{label:"Menu 5"},{label:"Menu 6"}]);return(D,N)=>{const r=a("v-list-item-title"),i=a("v-list-item"),u=a("v-list"),d=a("v-menu");return t(),o("div",k,[h,n("div",M,[n("div",y,[l(d,{class:"dropdown-layer"},{activator:s(({props:p})=>[n("button",w({type:"button",class:"dropdown-trigger"},p),B,16)]),default:s(()=>[l(u,{class:"dropdown-list"},{default:s(()=>[(t(!0),o(g,null,_(e.value,(p,c)=>(t(),b(i,{class:"dropdown-item",key:c,value:c},{default:s(()=>[l(r,null,{default:s(()=>[f(q(p.label),1)]),_:2},1024)]),_:2},1032,["value"]))),128))]),_:1})]),_:1})])])])}}};export{j as default};
