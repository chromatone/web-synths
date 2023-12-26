import{w as G,j as H,a as K,u as X,S as z}from"./chunks/chunk-LDFD35JM.27RXxW-q.js";import{r as S,e as F,o as O,c as L,a as c,t as $,u as f,w as D,v as J,i as U,f as Q,g as I,_ as Y}from"./chunks/framework.94NFGJWp.js";function M(e){return JSON.stringify({...e,type:"auth"})}var Z=()=>JSON.stringify({type:"pong"}),C=(e,n=1e3)=>new Promise((s,y)=>{let h=g=>{try{let w=JSON.parse(g.data);typeof w=="object"&&!Array.isArray(w)&&w!==null?(p(),s(w)):(p(),i())}catch{p(),s(g)}},i=()=>y(),p=()=>{clearTimeout(m),e.removeEventListener("message",h),e.removeEventListener("error",i),e.removeEventListener("close",i)};e.addEventListener("message",h),e.addEventListener("error",i),e.addEventListener("close",i);let m=setTimeout(()=>{p(),s(void 0)},n)});function*R(){let e=1;for(;;)yield String(e),e++}var ee={authMode:"handshake",heartbeat:!0,reconnect:{delay:1e3,retries:10}},v={OPEN:1,CLOSED:3};function te(e={}){return n=>{e={...ee,...e};let s=null,y=R(),h=0,i=!1,p=t=>"getToken"in t,m=async(t,r)=>{if(e.authMode==="strict"&&p(r)){let a=await r.getToken();a&&t.searchParams.set("access_token",a)}return t},g=async t=>{if("url"in e)return await m(new n.globals.URL(e.url),t);if(["ws:","wss:"].includes(n.url.protocol))return await m(n.url,t);let r=new n.globals.URL(n.url.toString());return r.protocol=n.url.protocol==="https:"?"wss:":"ws:",r.pathname="/websocket",await m(r,t)},w=()=>{s=null,y=R()};function T(){e.reconnect&&!i&&h<e.reconnect.retries?(i=!0,setTimeout(()=>{h+=1,this.connect().then(()=>{h=0,i=!1}).catch(()=>{})},Math.max(1,e.reconnect.delay))):i=!1}let b={open:new Set([]),error:new Set([]),close:new Set([]),message:new Set([])},d=async(t,r)=>{for(;t.readyState!==v.CLOSED;){let a=await C(t).catch(()=>{});if(a){if("type"in a){if(a.type==="auth"&&"status"in a&&a.status==="error"&&"error"in a){if(a.error==="TOKEN_EXPIRED"&&p(r)){let l=await r.getToken();if(l){t.send(M({access_token:l}));continue}}if(a.error==="AUTH_TIMEOUT"){t.close();continue}}if(e.heartbeat&&a.type==="ping"){t.send(Z());continue}}b.message.forEach(l=>l.call(t,a))}}};return{async connect(){let t=this,r=await g(t);return new Promise((a,l)=>{let _=!1,u=new n.globals.WebSocket(r);u.addEventListener("open",async o=>{if(e.authMode==="handshake"&&p(t)){let k=await t.getToken();k&&u.send(M({access_token:k}))}_=!0,b.open.forEach(k=>k.call(u,o)),d(u,t),a()}),u.addEventListener("error",o=>{b.error.forEach(k=>k.call(u,o)),u.close(),_||l(o)}),u.addEventListener("close",o=>{b.close.forEach(k=>k.call(u,o)),w(),T.call(this),_||l(o)}),s=u})},disconnect(){s&&(s==null?void 0:s.readyState)===v.OPEN&&s.close(),s=null},onWebSocket(t,r){if(t==="message"){let a=function(l){if(typeof l.data!="string")return r.call(this,l);try{return r.call(this,JSON.parse(l.data))}catch{return r.call(this,l)}};return b[t].add(a),()=>b[t].delete(a)}return b[t].add(r),()=>b[t].delete(r)},sendMessage(t){if(!s||(s==null?void 0:s.readyState)!==v.OPEN)throw new Error("websocket connection not OPEN");if(typeof t=="string"){s.send(t);return}"uid"in t||(t.uid=y.next().value),s==null||s.send(JSON.stringify(t))},async subscribe(t,r={}){(!s||s.readyState!==v.OPEN)&&await this.connect(),"uid"in r||(r.uid=y.next().value);let a=!0,l=s,_=o=>l.send(JSON.stringify(o));_({...r,collection:t,type:"subscribe"});async function*u(){for(;a&&l&&l.readyState===v.OPEN;){let o=await C(l).catch(()=>{});if(o){if("type"in o&&"status"in o&&o.type==="subscribe"&&o.status==="error")throw o;"type"in o&&"uid"in o&&o.type==="subscription"&&o.uid===r.uid&&(yield o)}}if(e.reconnect&&i){for(;i;)await re(10);s&&s.readyState===v.OPEN&&(s.send(JSON.stringify({...r,collection:t,type:"subscribe"})),yield*u())}}return{subscription:u(),unsubscribe(){_({uid:r.uid,type:"unsubscribe"}),a=!1}}}}}}var re=e=>new Promise(n=>setTimeout(()=>n(),e));class se{get(){return JSON.parse(localStorage.getItem("directus-data"))}set(n){localStorage.setItem("directus-data",JSON.stringify(n))}}const x=G("https://dbs.chromatone.center/").with(H({credentials:"include"})).with(K("json",{credentials:"include",storage:new se})).with(te({credentials:"include"})),E=S(),V=S(""),W=S(""),N=S({}),P=S("");let A=!1;function q(){return A||(F(async()=>{await j(),await B()}),A=!0),{access_token:P,email:V,password:W,authData:N,user:E,userDB:x,userCreate:oe,userRead:B,refreshToken:j,submitLogin:ae,logoutUser:ne}}async function j(){try{let e=await x.refresh();P.value=e.access_token,delete e.access_token,N.value=e}catch(e){console.log(e.errors[0])}}async function ae(){try{let e=await x.login(V.value,W.value);P.value=e.access_token,delete e.access_token,N.value={...e}}catch(e){console.log(e.errors[0])}}async function B(){try{return E.value=await x.request(X()),E.value.players=await x.request(z("players",{fields:["*",{synths:["*",{synths_id:["*"]}]}]})),E.value}catch(e){console.log(e)}}async function oe({email:e}){}async function ne(){await x.logout(),P.value="",N.value=""}const ie={class:"flex flex-col gap-4 p-4"},le=c("div",{class:"text-xl"},"Profile",-1),de={class:"text-sm"},ce={__name:"AuthProfile",setup(e){const{user:n}=q();return(s,y)=>(O(),L("div",ie,[le,c("pre",de,$(f(n)),1)]))}},ue=c("div",{class:"text-4xl"},"Login to your account",-1),fe=c("label",{class:"text-xl",for:"email"},"E-mail*:",-1),pe=c("label",{class:"text-xl",for:"email"},"Password:",-1),he={key:1,class:"flex flex-col gap-2"},ge={class:"font-mono text-xs"},be={class:"text-sm"},ye={class:"flex"},me={__name:"AuthLogin",setup(e){const{userRead:n,user:s,userDB:y,email:h,password:i,authData:p,access_token:m,submitLogin:g,refreshToken:w,logoutUser:T}=q();return(b,d)=>{const t=ce;return f(m)?(O(),L("div",he,[c("p",ge,"."+$(f(m).split(".")[2]),1),c("pre",be,$(f(p)),1),c("div",ye,[c("button",{class:"text-xl font-bold rounded-lg p-4 border-2 border-solid dark-border-light-300 border-dark-800 shadow-lg dark-bg-dark-200",type:"submit",onClick:d[4]||(d[4]=r=>f(w)())},"Refresh"),c("button",{class:"text-xl font-bold rounded-lg p-4 border-2 border-solid dark-border-light-300 border-dark-800 shadow-lg dark-bg-dark-200",type:"submit",onClick:d[5]||(d[5]=r=>f(T)())},"Log out")]),c("button",{class:"text-xl font-bold rounded-lg p-4 border-2 border-solid dark-border-light-300 border-dark-800 shadow-lg dark-bg-dark-200",type:"submit",onClick:d[6]||(d[6]=r=>f(n)())},"Read user"),I(t)])):(O(),L("form",{key:0,class:"flex flex-col gap-4",onSubmit:d[3]||(d[3]=Q((...r)=>f(g)&&f(g)(...r),["prevent"]))},[ue,fe,D(c("input",{class:"text-lg rounded-lg p-4 border-2 border-solid dark-border-light-300 border-dark-800 shadow-inner dark-bg-dark-200",id:"email",type:"text","onUpdate:modelValue":d[0]||(d[0]=r=>U(h)?h.value=r:null)},null,512),[[J,f(h)]]),pe,D(c("input",{class:"rounded-lg p-4 border-2 border-solid dark-border-light-300 border-dark-800 shadow-inner dark-bg-dark-200",type:"password","onUpdate:modelValue":d[1]||(d[1]=r=>U(i)?i.value=r:null)},null,512),[[J,f(i)]]),c("button",{class:"text-xl font-bold rounded-lg p-4 border-2 border-solid dark-border-light-300 border-dark-800 shadow-lg dark-bg-dark-200",type:"submit",onClick:d[2]||(d[2]=(...r)=>f(g)&&f(g)(...r))},"Sign In")],32))}}},xe=JSON.parse('{"title":"Login","description":"","frontmatter":{"title":"Login","desctiption":"Get in touch with community through contributions"},"headers":[],"relativePath":"auth/index.md","filePath":"auth/index.md","lastUpdated":1703606668000}'),we={name:"auth/index.md"};function ke(e,n,s,y,h,i){const p=me;return O(),L("div",null,[I(p)])}const Se=Y(we,[["render",ke]]);export{xe as __pageData,Se as default};