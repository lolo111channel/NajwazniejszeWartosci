if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let o={};const d=e=>n(e,t),f={module:{uri:t},exports:o,require:d};i[t]=Promise.all(s.map((e=>f[e]||d(e)))).then((e=>(r(...e),o)))}}define(["./workbox-2b403519"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"34366d2d00957712e60e.png",revision:null},{url:"index.html",revision:"1198aeb783d95bfe7bec53c89254d862"},{url:"main.css",revision:"9be1d1468eab25e0c080b932f3f6b9da"},{url:"main.js",revision:"c4fadf07a7fb5d40c0159f00f9fea0a0"},{url:"main.js.LICENSE.txt",revision:"e77fd67dd85b79d55a425c55420525b6"}],{})}));
