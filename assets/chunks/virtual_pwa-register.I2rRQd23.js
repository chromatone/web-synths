import{p as w}from"./framework.5dgMT4wJ.js";function v(c={}){const{immediate:d=!1,onNeedRefresh:_,onOfflineReady:i,onRegistered:r,onRegisteredSW:a,onRegisterError:s}=c;let t,o;const l=async(n=!0)=>{await o};async function p(){if("serviceWorker"in navigator){const{Workbox:n}=await w(()=>import("./workbox-window.prod.es5.prqDwDSL.js"),__vite__mapDeps([]));t=new n("/sw.js",{scope:"/",type:"classic"}),t.addEventListener("activated",e=>{(e.isUpdate||e.isExternal)&&window.location.reload()}),t.addEventListener("installed",e=>{e.isUpdate||i==null||i()}),t.register({immediate:d}).then(e=>{a?a("/sw.js",e):r==null||r(e)}).catch(e=>{s==null||s(e)})}}return o=p(),l}export{v as registerSW};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
