import{E as p,G as v,r as m,o as i,c as l,t as b,j as g,f as w,N as k}from"./framework.-bv3xlTi.js";import{w as S,x,l as C,S as _}from"./chunk-GJVD322O._HyRhXFm.js";const c=p("favourites",{3:"default",29:"default",39:"default"}),j={key:0,class:"i-la-star"},N={key:1,class:"i-la-star-solid text-yellow"},T={key:2,class:"text-xs opacity-50 absolute -bottom-4",title:"Added to favourites since Dec 2023"},q={__name:"SynthFav",props:{id:{type:Number,default:0},stars:{type:Number,default:0}},setup(a){const e=a,s=v(()=>c.value[e.id]),o=m(e.stars);async function t(){if((c.value[e.id]===void 0||c.value[e.id]===null)&&h(e.id),c.value[e.id]==="default"){c.value[e.id]=null;return}c.value[e.id]=!c.value[e.id]}async function h(d){var n,u,f;try{const r=await fetch("https://dbs.chromatone.center/flows/trigger/f235dc43-5911-4a7a-8327-5a5c39beb3b2",{method:"POST",mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify({id:d})});o.value=await(r==null?void 0:r.json())}catch(r){console.error(r,(u=(n=r==null?void 0:r.errors)==null?void 0:n[0])==null?void 0:u.message,(f=r==null?void 0:r.response)==null?void 0:f.status)}}return(d,n)=>(i(),l("button",{class:"p-0 cursor-pointer flex items-center gap-1 justify-center relative",onClick:n[0]||(n[0]=w(u=>t(),["stop","prevent"])),title:"Toggle star"},[s.value?(i(),l("div",N)):(i(),l("div",j)),o.value||a.stars?(i(),l("div",T,b(o.value||a.stars),1)):g("",!0)]))}},y=S("https://dbs.chromatone.center/").with(x());async function B(a,e){try{return await y.request(_(a,e))}catch(s){console.log(s)}}async function D(a,e,s){try{return await y.request(C(a,e,s))}catch(o){console.log(o)}}async function F(a){var e,s,o;try{const t=await fetch("https://dbs.chromatone.center/flows/trigger/96844b2f-abd0-41ed-bfe1-c5bcf788a98d",{method:"POST",mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify({id:a})});return await(t==null?void 0:t.json())}catch(t){console.error(t,(s=(e=t==null?void 0:t.errors)==null?void 0:e[0])==null?void 0:s.message,(o=t==null?void 0:t.response)==null?void 0:o.status)}}function E(a,e=0){const s=m(e),o=k(F,1e4);async function t(){s.value=await o(a)}return{clicksCount:s,clickSynth:t}}export{q as _,B as a,D as b,c as f,E as u};