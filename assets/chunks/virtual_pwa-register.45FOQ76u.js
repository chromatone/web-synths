function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{p}from"./framework.HWRfC0Fd.js";function v(c={}){const{immediate:d=!1,onNeedRefresh:u,onOfflineReady:a,onRegistered:r,onRegisteredSW:s,onRegisterError:t}=c;let i,n;const o=async(e=!0)=>{await n};async function l(){if("serviceWorker"in navigator){if(i=await p(()=>import("./workbox-window.prod.es5.prqDwDSL.js"),__vite__mapDeps([])).then(({Workbox:e})=>new e("/sw.js",{scope:"/",type:"classic"})).catch(e=>{t==null||t(e)}),!i)return;i.addEventListener("activated",e=>{(e.isUpdate||e.isExternal)&&window.location.reload()}),i.addEventListener("installed",e=>{e.isUpdate||a==null||a()}),i.register({immediate:d}).then(e=>{s?s("/sw.js",e):r==null||r(e)}).catch(e=>{t==null||t(e)})}}return n=l(),o}export{v as registerSW};
