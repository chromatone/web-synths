import{o as t,c as l,a,t as s,A as o,z as c,b as u,B as g,n as r,F as f,C as h,m as y}from"./framework.0bf753ad.js";const x={class:"flex flex-col gap-4 bg-light-300 dark-bg-dark-400 rounded-lg overflow-hidden"},k={class:"p-0"},m=["src"],v={class:"flex flex-col p-4 gap-4"},S={class:"text-4xl font-bold"},b=["href"],p={key:1,class:"flex-1 flex items-end flex flex-wrap gap-2"},_={key:2,class:"p-0"},B={class:"p-0"},N={__name:"SynthPage",props:{title:{type:String,default:""},description:{type:String,default:""},author:{type:String,default:""},author_link:{type:String,default:""},cover:{type:String,default:""},slug:{type:String,default:""},url:{type:String,default:""},tags:{type:Array,default:[]}},setup(e){return(i,w)=>{var n;return t(),l("div",x,[a("div",k,[a("img",{src:`/cover/${e.slug}.webp`},null,8,m)]),a("div",v,[a("div",S,s(e.title),1),e.author?(t(),o(g(e.author_link?"a":"div"),{key:0,class:"text-xl",href:e.author_link},{default:c(()=>[u("by "+s(e.author),1)]),_:1},8,["href"])):r("",!0),a("a",{href:e.url,target:"_blank"},s(e.url),9,b),((n=e.tags)==null?void 0:n.length)>0?(t(),l("div",p,[(t(!0),l(f,null,h(e.tags,d=>(t(),l("div",{class:"px-2 py-1 text-sm bg-light-800 dark-bg-dark-500 rounded-lg",key:d},s(d),1))),128))])):r("",!0),e.description?(t(),l("div",_,s(e.description),1)):r("",!0)]),a("div",B,[y(i.$slots,"default")])])}}};export{N as _};
