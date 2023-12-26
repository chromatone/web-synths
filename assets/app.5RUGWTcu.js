import{o as d,c as p,a as e,_ as W,r as D,p as j,m as g,u as a,P as B,w as v,t as y,b as _,s as E,C as R,i as S,Q as T,v as V,h as M,T as I,R as U,S as O,k as F,l as Y,g as h,U as w,V as z,W as G,X as H,Y as K,Z as J,$ as Q,a0 as X,a1 as Z,a2 as q,a3 as ee,a4 as te,e as ae,a5 as oe,a6 as se,a7 as ne,a8 as le,a9 as ie}from"./chunks/framework.94NFGJWp.js";import{u as L}from"./chunks/useForm.-Kvqw8oX.js";import"./chunks/index.8xYqPcTb.js";const re={class:"flex items-center gap-1 p-4 bg-light-100 bg-opacity-70 dark-bg-dark-400 dark-bg-opacity-40 w-full justify-center"},ce=e("div",{class:"p-0"},"Made with 🧡 by",-1),de=e("a",{href:"https://shop.playtronica.com",target:"_blank"},"Playtronica ",-1),pe=e("span",null,"&",-1),ue=e("a",{href:"https://chromatone.center",target:"_blank"},"Chromatone",-1),me=[ce,de,pe,ue];function _e(o,t){return d(),p("div",re,me)}const fe={},he=W(fe,[["render",_e]]),ge={key:0,class:"fixed z-1000 min-h-40dvh bottom-0 w-full bg-light-800 bg-opacity-80 backdrop-blur flex flex-col items-center gap-4 justify-center dark-bg-dark-200 dark-bg-opacity-80 p-8 shadow max-w-180 bottom-0 rounded-xl"},be={key:0,class:"flex flex-col gap-4 max-w-45ch text-center"},xe={class:"text-3xl font-bold"},ve=e("div",{class:"text-xl"},"You are part of web-musicians community",-1),ye={class:"text-sm flex gap-2 justify-center"},we={key:1,class:"flex flex-col gap-8 relative pt-8 items-center"},ke={class:"text-center max-w-55ch",for:"email"},$e={class:"flex gap-4 flex-col w-full"},Ce={class:"flex items-center gap-2"},Ae=e("div",{class:"p-2 w-24 font-bold text-right"},"E-mail *",-1),Pe=["maxlength"],Ee={class:"flex items-center gap-2"},Re=e("div",{class:"p-2 w-24 font-bold text-right"},"Name",-1),Se=["maxlength","placeholder"],Te=["disabled"],Ve={__name:"FormMain",setup(o){const{name:t,email:s,isValidEmail:n,isFormOpen:i,grantAccess:r,storedEmail:k,storedName:u,resetEmail:f,isAccessGranted:b,namePlaceholder:x,passwordPlaceholder:$,password:C,generatePassword:et,maxLength:A,claimInvite:tt,invited:at}=L();return D(),(P,l)=>(d(),j(I,{name:"panel"},{default:g(()=>[a(i)?(d(),p("div",ge,[v(e("button",{class:"i-la-times absolute top-4 right-4 text-2xl hover-opacity-90 opacity-50 transition",onClick:l[0]||(l[0]=c=>i.value=!1)},null,512),[[B,a(i)]]),a(b)?(d(),p("div",be,[e("div",xe,"Hello, "+y(a(u))+"!",1),ve,e("div",ye,[_(y(a(k)),1),e("span",{class:"opacity-20 hover-opacity-50 transition cursor-pointer",onClick:l[1]||(l[1]=(...c)=>a(f)&&a(f)(...c))},"Log out")])])):(d(),p("div",we,[e("label",ke,[E(P.$slots,"default")]),e("div",$e,[e("label",Ce,[Ae,v(e("input",{class:R(["flex-1 p-4 md-p-4 rounded-xl bg-light-200 shadow-md dark-bg-dark-400 flex-1 border-2 border-solid border-opacity-60 dark-border-opacity-40",{"border-red-700 dark-border-red-300":a(s)&&!a(n),"border-green-700 dark-border-green-800":a(s)&&a(n),"border-light-300":!a(s)}]),ref:"target",maxlength:a(A),"onUpdate:modelValue":l[2]||(l[2]=c=>S(s)?s.value=c:null),id:"email",name:"email",type:"email",onKeydown:l[3]||(l[3]=T(c=>a(r)(),["enter"])),placeholder:"your@gmail.com"},null,42,Pe),[[V,a(s)]])]),e("label",Ee,[Re,v(e("input",{class:"flex-1 p-4 md-p-4 rounded-xl bg-light-200 shadow-md dark-bg-dark-400","onUpdate:modelValue":l[4]||(l[4]=c=>S(t)?t.value=c:null),id:"name",maxlength:a(A),name:"name",type:"text",onKeydown:l[5]||(l[5]=T(c=>a(r)(),["enter"])),placeholder:a(x)},null,40,Se),[[V,a(t)]])])]),e("button",{class:R(["text-sm md-text-md p-4 font-bold md-p-4 rounded-xl shadow-xl hover-shadow-2xl transition -hover-translate-y-2px disabled-opacity-40 active-translate-y-0 active-shadow-md bg-green-400 dark-bg-green-700",{"grayscale-50":!a(n)}]),onClick:l[6]||(l[6]=c=>a(r)()),disabled:!a(n),title:"Your access status will be saved per device and you won't need to enter your e-mail again."},[E(P.$slots,"button",{},()=>[_("GET ACCESS")])],10,Te)]))])):M("",!0)]),_:3}))}},De={key:0,class:"pwa-toast",role:"alertdialog","aria-labelledby":"pwa-message"},Me=e("div",{class:"mb-3",id:"pwa-message"},"App ready to work offline",-1),Oe={__name:"RegisterSW",setup(o){const t=D(!1);function s(){t.value=!0}async function n(){t.value=!1}return U(async()=>{const{registerSW:i}=await O(()=>import("./chunks/virtual_pwa-register.MuLwnDy5.js"),__vite__mapDeps([0,1]));i({immediate:!0,onOfflineReady:s,onRegistered(){console.info("Service Worker registered")},onRegisterError(r){console.error("Service Worker registration error!",r)}})}),(i,r)=>t.value?(d(),p("div",De,[Me,e("button",{class:"pwa-cancel",type:"button",onClick:n},"Close")])):M("",!0)}},Fe={class:"flex flex-col noise items-center relative min-h-100svh"},Le={class:"w-full backdrop-blur-xl sticky top-0 z-100 bg-light-200 bg-opacity-60 dark-bg-dark-300 dark-bg-opacity-60"},Ne={class:"flex flex items-center w-full max-w-180 mx-auto gap-4 px-2"},We={class:"p-2 flex items-center gap-4",href:"/"},je=["src"],Be={class:"text-xl font-600"},Ie=e("div",{class:"flex-1"},null,-1),Ue={key:0,class:"i-la-sun"},Ye={key:1,class:"i-tabler-moon-2"},ze=e("div",{class:"i-ph-user-circle-duotone p-5"},null,-1),Ge=[ze],He={class:"flex flex-wrap w-full mx-auto flex-auto justify-center"},Ke={__name:"MainLayout",setup(o){const{isFormOpen:t,searchParams:s}=L(),{theme:n,site:i,isDark:r}=F();return(k,u)=>{const f=Oe,b=Y("content"),x=Ve,$=he;return d(),p("div",Fe,[h(f),e("div",Le,[e("div",Ne,[e("a",We,[e("img",{class:"w-12",src:a(n).logo,alt:"Web-synths collection logo"},null,8,je),e("div",Be,y(a(i).title),1)]),Ie,e("button",{class:"text-xl",onClick:u[0]||(u[0]=C=>r.value=!a(r)),"aria-label":"Dark mode toggle"},[a(r)?(d(),p("div",Ye)):(d(),p("div",Ue))]),e("button",{class:"p-4 z-2000 cursor-pointer","aria-label":"Player profile",onClick:u[1]||(u[1]=C=>t.value=!a(t))},Ge)])]),e("div",He,[h(b,{class:"w-full",id:"content"})]),h(x,null,{button:g(()=>[_("JOIN THE COMMUNITY")]),notice:g(()=>[_("Your access status will be saved per device and you won't need to enter your e-mail again.")]),default:g(()=>[_("We are building a community of web-based musicians. Type in your e-mail to instantly gain full access to the collection and receive occasional community updates from us. Stay tuned! ")]),_:1}),h($)])}}},Je={Layout:Ke,enhanceApp({app:o}){}};function N(o){if(o.extends){const t=N(o.extends);return{...t,...o,async enhanceApp(s){t.enhanceApp&&await t.enhanceApp(s),o.enhanceApp&&await o.enhanceApp(s)}}}return o}const m=N(Je),Qe=te({name:"VitePressApp",setup(){const{site:o}=F();return ae(()=>{oe(()=>{document.documentElement.lang=o.value.lang,document.documentElement.dir=o.value.dir})}),o.value.router.prefetchLinks&&se(),ne(),le(),m.setup&&m.setup(),()=>ie(m.Layout)}});async function Xe(){const o=qe(),t=Ze();t.provide(G,o);const s=H(o.route);return t.provide(K,s),t.component("Content",J),t.component("ClientOnly",Q),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return s.frontmatter.value}},$params:{get(){return s.page.value.params}}}),m.enhanceApp&&await m.enhanceApp({app:t,router:o,siteData:X}),{app:t,router:o,data:s}}function Ze(){return Z(Qe)}function qe(){let o=w,t;return q(s=>{let n=ee(s),i=null;return n&&(o&&(t=n),(o||t===n)&&(n=n.replace(/\.js$/,".lean.js")),i=O(()=>import(n),__vite__mapDeps([]))),w&&(o=!1),i},m.NotFound)}w&&Xe().then(({app:o,router:t,data:s})=>{t.go().then(()=>{z(t.route,s.site),o.mount("#app")})});export{Xe as createApp};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/chunks/virtual_pwa-register.MuLwnDy5.js","assets/chunks/framework.94NFGJWp.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}