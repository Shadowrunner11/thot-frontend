import{j as r,L as E,a as L}from"./react-admin-47320ed0.js";import{d as _,r as m,b}from"./vendor-1a3567d7.js";import{b8 as k,b9 as v,ba as h,bb as A}from"./ra-data-graphql-simple-5fc26fa5.js";import{A as P,I as O,a as B}from"./@apollo/client-6a540b6b.js";import"./react-hook-form-3adb9e23.js";import"./graphql-422755b2.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const s of e.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function a(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerpolicy&&(e.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?e.credentials="include":t.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function l(t){if(t.ep)return;t.ep=!0;const e=a(t);fetch(t.href,e)}})();var d={},f=_;d.createRoot=f.createRoot,d.hydrateRoot=f.hydrateRoot;const C="modulepreload",S=function(o){return"/thot-frontend/"+o},p={},y=function(n,a,l){if(!a||a.length===0)return n();const t=document.getElementsByTagName("link");return Promise.all(a.map(e=>{if(e=S(e),e in p)return;p[e]=!0;const s=e.endsWith(".css"),g=s?'[rel="stylesheet"]':"";if(!!l)for(let c=t.length-1;c>=0;c--){const u=t[c];if(u.href===e&&(!s||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${g}`))return;const i=document.createElement("link");if(i.rel=s?"stylesheet":C,s||(i.as="script",i.crossOrigin=""),i.href=e,document.head.appendChild(i),s)return new Promise((c,u)=>{i.addEventListener("load",c),i.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>n())};function w(o){return({RouterCustom:n})=>r(n,{children:o})}function G(o){for(const n in o)Object.prototype.hasOwnProperty.call(o,n)||delete o[n];return o}const I={development:{thotBackendGraph:"https://thotgraphql.dev.com"},production:{thotBackendGraph:"https://thotgraphql.com"},test:{thotBackendGraph:"http://localhost:5000"}},T="production",x=G({thotBackendGraph:{}.VITE_THOT_GRAPHQL}),z={...I[T],...x},D=new P({cache:new O,uri:z.thotBackendGraph}),R=({LazyElement:o})=>r(m.Suspense,{fallback:r(E,{}),children:r(o,{})}),q=[{element:r(R,{LazyElement:m.lazy(()=>y(()=>import("./Kamban-d31649a8.js"),["assets/Kamban-d31649a8.js","assets/react-admin-47320ed0.js","assets/vendor-1a3567d7.js","assets/ra-data-graphql-simple-5fc26fa5.js","assets/react-hook-form-3adb9e23.js","assets/@apollo/client-6a540b6b.js","assets/graphql-422755b2.js"]))}),path:"/kamban"}];function M(){return k(q)}const N=w(L(v,{children:[r(h,{path:"/admin/*",element:r(R,{LazyElement:m.lazy(()=>y(()=>import("./StorageAdmin-39231152.js"),["assets/StorageAdmin-39231152.js","assets/react-admin-47320ed0.js","assets/vendor-1a3567d7.js","assets/ra-data-graphql-simple-5fc26fa5.js","assets/react-hook-form-3adb9e23.js","assets/@apollo/client-6a540b6b.js","assets/graphql-422755b2.js","assets/StorageAdmin-59191f95.css"]))})}),r(h,{path:"/other/*",element:r(M,{})})]}));function H(){return r(B,{client:D,children:r(N,{RouterCustom:A})})}d.createRoot(document.getElementById("root")).render(r(b.StrictMode,{children:r(H,{})}));export{D as A,M as C,R as D,y as _};