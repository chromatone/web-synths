import{L as l,o as n,c,f as u,r as f}from"./framework.b851927c.js";import{d,e as p}from"./index.7817d4ac.js";import{E as h,$ as m,Y as y}from"./chunk-42TA54KX.78cd0766.js";const a=d("favourites",{}),v={key:0,class:"i-la-star"},k={key:1,class:"i-la-star-solid text-yellow"},x={__name:"SynthFav",props:{id:{type:Number,default:0}},setup(o){const e=o,s=l(()=>a.value[e.id]);function r(){a.value[e.id]=!a.value[e.id]}return(t,i)=>(n(),c("div",{class:"p-0 cursor-pointer",onClick:i[0]||(i[0]=u(g=>r(),["stop","prevent"]))},[s.value?(n(),c("div",k)):(n(),c("div",v))]))}},w=h("https://db.synth.chromatone.center/").with(m());async function F(o,e){try{return await w.request(y(o,e))}catch(s){console.log(s)}}async function _(o){var e,s,r;try{console.log(o);const t=await fetch("https://db.synth.chromatone.center/flows/trigger/c4e39986-cc31-423b-8218-69a620f46215",{method:"POST",mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify({id:o})});return await(t==null?void 0:t.json())}catch(t){console.error(t,(s=(e=t==null?void 0:t.errors)==null?void 0:e[0])==null?void 0:s.message,(r=t==null?void 0:t.response)==null?void 0:r.status)}}function T(o,e=0){const s=f(e),r=p(_,1e4);async function t(){s.value=await r(o)}return{clicksCount:s,clickSynth:t}}export{x as _,F as a,a as f,T as u};
