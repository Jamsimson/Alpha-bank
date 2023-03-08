(()=>{"use strict";var e={2840:(e,t,r)=>{var n=r(1957),o=r(1947),a=r(499),i=r(9835);function l(e,t,r,n,o,a){const l=(0,i.up)("router-view");return(0,i.wg)(),(0,i.j4)(l)}const s=(0,i.aZ)({name:"App"});var c=r(1639);const d=(0,c.Z)(s,[["render",l]]),p=d;var u=r(3340),h=r(1809);const f=(0,u.h)((()=>{const e=(0,h.WB)();return e}));var m=r(8339);const b=[{path:"",component:()=>Promise.all([r.e(736),r.e(992)]).then(r.bind(r,1992)),children:[{path:"",component:()=>Promise.all([r.e(736),r.e(596)]).then(r.bind(r,596))},{path:"home",component:()=>Promise.all([r.e(736),r.e(596)]).then(r.bind(r,596))},{path:"services",component:()=>Promise.all([r.e(736),r.e(963)]).then(r.bind(r,9963))},{path:"setting",component:()=>Promise.all([r.e(736),r.e(245)]).then(r.bind(r,8245))}]},{path:"/",component:()=>Promise.all([r.e(736),r.e(300)]).then(r.bind(r,4300)),children:[{path:"test",component:()=>Promise.all([r.e(736),r.e(353)]).then(r.bind(r,6353))},{path:"transfer",component:()=>Promise.all([r.e(736),r.e(465)]).then(r.bind(r,6465))},{path:"my-qrcode",component:()=>Promise.all([r.e(736),r.e(324)]).then(r.bind(r,3324))}]},{path:"/",component:()=>Promise.all([r.e(736),r.e(907)]).then(r.bind(r,8907)),children:[{path:"scan-qrcode",component:()=>Promise.all([r.e(736),r.e(236)]).then(r.bind(r,8236))}]},{path:"/",component:()=>Promise.all([r.e(736),r.e(166)]).then(r.bind(r,3166)),children:[{path:"account",component:()=>Promise.all([r.e(736),r.e(38)]).then(r.bind(r,4038))}]},{path:"/",component:()=>Promise.all([r.e(736),r.e(853)]).then(r.bind(r,9853)),children:[{path:"",component:()=>Promise.all([r.e(736),r.e(540)]).then(r.bind(r,7540))}]},{path:"",children:[{path:"start",component:()=>Promise.all([r.e(736),r.e(216)]).then(r.bind(r,216))},{path:"signin",component:()=>Promise.all([r.e(736),r.e(278)]).then(r.bind(r,1278))},{path:"otp",component:()=>Promise.all([r.e(736),r.e(420)]).then(r.bind(r,3420))}]},{path:"",children:[{path:"preview",component:()=>Promise.all([r.e(736),r.e(242)]).then(r.bind(r,6242))}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([r.e(736),r.e(65)]).then(r.bind(r,7065))}],g=b,v=(0,u.BC)((function(){const e=m.r5,t=(0,m.p7)({scrollBehavior:()=>({left:0,top:0}),routes:g,history:e("")});return t}));async function y(e,t){const r=e(p);r.use(o.Z,t);const n="function"===typeof f?await f({}):f;r.use(n);const i=(0,a.Xl)("function"===typeof v?await v({store:n}):v);return n.use((({store:e})=>{e.router=i})),{app:r,store:n,router:i}}var P=r(6950);const w={config:{loading:{}},plugins:{Loading:P.Z}};var O=r(368);(0,O.z)("service-worker.js",{ready(){},registered(){},cached(){},updatefound(){},updated(){},offline(){},error(){}}),/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&window.navigator.standalone&&r.e(736).then(r.t.bind(r,4848,23));const j="";async function k({app:e,router:t,store:r},n){let o=!1;const a=e=>{try{return t.resolve(e).href}catch(r){}return Object(e)===e?null:e},i=e=>{if(o=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const t=a(e);null!==t&&(window.location.href=t,window.location.reload())},l=window.location.href.replace(window.location.origin,"");for(let c=0;!1===o&&c<n.length;c++)try{await n[c]({app:e,router:t,store:r,ssrContext:null,redirect:i,urlPath:l,publicPath:j})}catch(s){return s&&s.url?void i(s.url):void console.error("[Quasar] boot error:",s)}!0!==o&&(e.use(t),e.mount("#q-app"))}y(n.ri,w).then((e=>{const[t,n]=void 0!==Promise.allSettled?["allSettled",e=>e.map((e=>{if("rejected"!==e.status)return e.value.default;console.error("[Quasar] boot error:",e.reason)}))]:["all",e=>e.map((e=>e.default))];return Promise[t]([Promise.resolve().then(r.bind(r,1569)),Promise.resolve().then(r.bind(r,4987))]).then((t=>{const r=n(t).filter((e=>"function"===typeof e));k(e,r)}))}))},1569:(e,t,r)=>{r.r(t),r.d(t,{api:()=>i,default:()=>l});var n=r(3340),o=r(9981),a=r.n(o);const i=a().create({baseURL:"https://api.example.com"}),l=(0,n.xr)((({app:e})=>{e.config.globalProperties.$axios=a(),e.config.globalProperties.$api=i}))},4987:(e,t,r)=>{r.r(t),r.d(t,{analytics:()=>d,auth:()=>u,db:()=>p,default:()=>h,firebase:()=>c});var n=r(3340),o=r(7141),a=r(4043),i=r(8109),l=r(220);const s={apiKey:"AIzaSyCHy9HdhJn8ZgAWfk25IPt12-xetDtGVoU",authDomain:"test-62ef1.firebaseapp.com",projectId:"test-62ef1",storageBucket:"test-62ef1.appspot.com",messagingSenderId:"392040850802",appId:"1:392040850802:web:96a832533f241c44d629eb",measurementId:"G-718YKE5BM2"},c=(0,o.ZF)(s),d=(0,a.IH)(c),p=(0,i.ad)(c),u=(0,l.v0)(c);console.log("Firebase initialized"),u.languageCode="th";const h=(0,n.xr)((({app:e})=>{e.config.globalProperties.$firebase=c,e.config.globalProperties.$analytics=d,e.config.globalProperties.$db=p,e.config.globalProperties.$auth=u}))}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n].call(a.exports,a,a.exports,r),a.exports}r.m=e,(()=>{var e=[];r.O=(t,n,o,a)=>{if(!n){var i=1/0;for(d=0;d<e.length;d++){for(var[n,o,a]=e[d],l=!0,s=0;s<n.length;s++)(!1&a||i>=a)&&Object.keys(r.O).every((e=>r.O[e](n[s])))?n.splice(s--,1):(l=!1,a<i&&(i=a));if(l){e.splice(d--,1);var c=o();void 0!==c&&(t=c)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[n,o,a]}})(),(()=>{r.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return r.d(t,{a:t}),t}})(),(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;r.t=function(n,o){if(1&o&&(n=this(n)),8&o)return n;if("object"===typeof n&&n){if(4&o&&n.__esModule)return n;if(16&o&&"function"===typeof n.then)return n}var a=Object.create(null);r.r(a);var i={};e=e||[null,t({}),t([]),t(t)];for(var l=2&o&&n;"object"==typeof l&&!~e.indexOf(l);l=t(l))Object.getOwnPropertyNames(l).forEach((e=>i[e]=()=>n[e]));return i["default"]=()=>n,r.d(a,i),a}})(),(()=>{r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}})(),(()=>{r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,n)=>(r.f[n](e,t),t)),[]))})(),(()=>{r.u=e=>"js/"+e+"."+{38:"6d434459",65:"10ca36d5",166:"1b03afb5",216:"c4fff762",236:"7681d9de",242:"a803a264",245:"ebbbd585",278:"27b42c1c",300:"08f01d7e",324:"ae69cc03",353:"fc051137",420:"195e7f34",465:"8cc24f0a",540:"e4c481c0",596:"cd439472",853:"b2a46917",907:"9fc6563f",963:"9284ab8e",992:"d3946db1"}[e]+".js"})(),(()=>{r.miniCssF=e=>"css/"+e+"."+{245:"5c515759",420:"7d7724b6",596:"57bd9745"}[e]+".css"})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="alpha-app:";r.l=(n,o,a,i)=>{if(e[n])e[n].push(o);else{var l,s;if(void 0!==a)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var p=c[d];if(p.getAttribute("src")==n||p.getAttribute("data-webpack")==t+a){l=p;break}}l||(s=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.setAttribute("data-webpack",t+a),l.src=n),e[n]=[o];var u=(t,r)=>{l.onerror=l.onload=null,clearTimeout(h);var o=e[n];if(delete e[n],l.parentNode&&l.parentNode.removeChild(l),o&&o.forEach((e=>e(r))),t)return t(r)},h=setTimeout(u.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=u.bind(null,l.onerror),l.onload=u.bind(null,l.onload),s&&document.head.appendChild(l)}}})(),(()=>{r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{r.p=""})(),(()=>{if("undefined"!==typeof document){var e=(e,t,r,n,o)=>{var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var i=r=>{if(a.onerror=a.onload=null,"load"===r.type)n();else{var i=r&&("load"===r.type?"missing":r.type),l=r&&r.target&&r.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=i,s.request=l,a.parentNode.removeChild(a),o(s)}};return a.onerror=a.onload=i,a.href=t,r?r.parentNode.insertBefore(a,r.nextSibling):document.head.appendChild(a),a},t=(e,t)=>{for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var o=r[n],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===t))return o}var i=document.getElementsByTagName("style");for(n=0;n<i.length;n++){o=i[n],a=o.getAttribute("data-href");if(a===e||a===t)return o}},n=n=>new Promise(((o,a)=>{var i=r.miniCssF(n),l=r.p+i;if(t(i,l))return o();e(n,l,null,o,a)})),o={143:0};r.f.miniCss=(e,t)=>{var r={245:1,420:1,596:1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=n(e).then((()=>{o[e]=0}),(t=>{throw delete o[e],t})))}}})(),(()=>{var e={143:0};r.f.j=(t,n)=>{var o=r.o(e,t)?e[t]:void 0;if(0!==o)if(o)n.push(o[2]);else{var a=new Promise(((r,n)=>o=e[t]=[r,n]));n.push(o[2]=a);var i=r.p+r.u(t),l=new Error,s=n=>{if(r.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var a=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",l.name="ChunkLoadError",l.type=a,l.request=i,o[1](l)}};r.l(i,s,"chunk-"+t,t)}},r.O.j=t=>0===e[t];var t=(t,n)=>{var o,a,[i,l,s]=n,c=0;if(i.some((t=>0!==e[t]))){for(o in l)r.o(l,o)&&(r.m[o]=l[o]);if(s)var d=s(r)}for(t&&t(n);c<i.length;c++)a=i[c],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(d)},n=globalThis["webpackChunkalpha_app"]=globalThis["webpackChunkalpha_app"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var n=r.O(void 0,[736],(()=>r(2840)));n=r.O(n)})();