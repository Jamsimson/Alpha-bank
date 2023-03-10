(()=>{"use strict";var e={8866:(e,t,n)=>{var r=n(1957),o=n(1947),a=n(499),i=n(9835);function s(e,t,n,r,o,a){const s=(0,i.up)("router-view");return(0,i.wg)(),(0,i.j4)(s)}n(9665);var l=n(6021),c=n(8109),d=n(435);const u=(0,i.aZ)({name:"App",async beforeCreate(){(0,d.Aj)(this.$auth,(async e=>{if(e){console.log("this is app page"),this.database.setSignedInUser(e);const n=e.email;var t=(0,c.IO)((0,c.hJ)(this.$db,"users"),(0,c.ar)("email","==",n));const r=await(0,c.PL)(t);r.forEach((async e=>{console.log(`${e.id} => ${e.data()}`),this.name=e.data().name,t=(0,c.IO)((0,c.hJ)(this.$db,"accounts"),(0,c.ar)("owner","==",e.id));const n=await(0,c.PL)(t);n.forEach((e=>{console.log(`${e.id} => ${e.data()}`),this.account.push(e.data()),this.balance+=e.data().balance,this.database.setUsername(this.name),this.database.setAccount(this.account)}))}))}else this.$router.push("start")}))},data(){return{database:(0,l.r)(),name:"",account:[],balance:0}},methods:{currentDate(){const e=new Date,t=`${e.getDate()}/${e.getMonth()+1}/${e.getFullYear()}`;return t}}});var p=n(1639);const h=(0,p.Z)(u,[["render",s]]),f=h;var m=n(3340),b=n(1809);const g=(0,m.h)((()=>{const e=(0,b.WB)();return e}));var v=n(8339);const y=[{path:"",component:()=>Promise.all([n.e(736),n.e(466)]).then(n.bind(n,9466)),children:[{path:"",component:()=>Promise.all([n.e(736),n.e(913)]).then(n.bind(n,1913))},{path:"home",component:()=>Promise.all([n.e(736),n.e(913)]).then(n.bind(n,1913))},{path:"services",component:()=>Promise.all([n.e(736),n.e(963)]).then(n.bind(n,9963))},{path:"setting",component:()=>Promise.all([n.e(736),n.e(817)]).then(n.bind(n,1817))}]},{path:"/",component:()=>Promise.all([n.e(736),n.e(97)]).then(n.bind(n,7097)),children:[{path:"test",component:()=>Promise.all([n.e(736),n.e(982)]).then(n.bind(n,982))},{path:"transfer/:bank/:account_name/:account_number",component:()=>Promise.all([n.e(736),n.e(653)]).then(n.bind(n,4653))},{path:"transfer",component:()=>Promise.all([n.e(736),n.e(653)]).then(n.bind(n,4653))},{path:"my-qrcode",component:()=>Promise.all([n.e(736),n.e(747)]).then(n.bind(n,3747))}]},{path:"/",component:()=>Promise.all([n.e(736),n.e(907)]).then(n.bind(n,8907)),children:[{path:"scan-qrcode",component:()=>Promise.all([n.e(736),n.e(439)]).then(n.bind(n,1223))}]},{path:"/",component:()=>Promise.all([n.e(736),n.e(166)]).then(n.bind(n,3166)),children:[{path:"account",component:()=>Promise.all([n.e(736),n.e(271)]).then(n.bind(n,271))}]},{path:"/",component:()=>Promise.all([n.e(736),n.e(853)]).then(n.bind(n,9853)),children:[{path:"",component:()=>Promise.all([n.e(736),n.e(540)]).then(n.bind(n,7540))}]},{path:"",children:[{path:"start",component:()=>Promise.all([n.e(736),n.e(216)]).then(n.bind(n,216))},{path:"signin",component:()=>Promise.all([n.e(736),n.e(278)]).then(n.bind(n,1278))},{path:"otp",component:()=>Promise.all([n.e(736),n.e(420)]).then(n.bind(n,3420))}]},{path:"",children:[{path:"preview/:bank/:account_name/:account_number/:amount",component:()=>Promise.all([n.e(736),n.e(302)]).then(n.bind(n,8302))}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([n.e(736),n.e(65)]).then(n.bind(n,7065))}],P=y,w=(0,m.BC)((function(){const e=v.r5,t=(0,v.p7)({scrollBehavior:()=>({left:0,top:0}),routes:P,history:e("")});return t}));async function O(e,t){const n=e(f);n.use(o.Z,t);const r="function"===typeof g?await g({}):g;n.use(r);const i=(0,a.Xl)("function"===typeof w?await w({store:r}):w);return r.use((({store:e})=>{e.router=i})),{app:n,store:r,router:i}}var j=n(6950);const $={config:{loading:{}},plugins:{Loading:j.Z}};var k=n(368);(0,k.z)("service-worker.js",{ready(){},registered(){},cached(){},updatefound(){},updated(){},offline(){},error(){}}),/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&window.navigator.standalone&&n.e(736).then(n.t.bind(n,4848,23));const _="";async function C({app:e,router:t,store:n},r){let o=!1;const a=e=>{try{return t.resolve(e).href}catch(n){}return Object(e)===e?null:e},i=e=>{if(o=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const t=a(e);null!==t&&(window.location.href=t,window.location.reload())},s=window.location.href.replace(window.location.origin,"");for(let c=0;!1===o&&c<r.length;c++)try{await r[c]({app:e,router:t,store:n,ssrContext:null,redirect:i,urlPath:s,publicPath:_})}catch(l){return l&&l.url?void i(l.url):void console.error("[Quasar] boot error:",l)}!0!==o&&(e.use(t),e.mount("#q-app"))}O(r.ri,$).then((e=>{const[t,r]=void 0!==Promise.allSettled?["allSettled",e=>e.map((e=>{if("rejected"!==e.status)return e.value.default;console.error("[Quasar] boot error:",e.reason)}))]:["all",e=>e.map((e=>e.default))];return Promise[t]([Promise.resolve().then(n.bind(n,1569)),Promise.resolve().then(n.bind(n,4987))]).then((t=>{const n=r(t).filter((e=>"function"===typeof e));C(e,n)}))}))},1569:(e,t,n)=>{n.r(t),n.d(t,{api:()=>i,default:()=>s});var r=n(3340),o=n(9981),a=n.n(o);const i=a().create({baseURL:"https://api.example.com"}),s=(0,r.xr)((({app:e})=>{e.config.globalProperties.$axios=a(),e.config.globalProperties.$api=i}))},4987:(e,t,n)=>{n.r(t),n.d(t,{analytics:()=>d,auth:()=>p,db:()=>u,default:()=>h,firebase:()=>c});var r=n(3340),o=n(7141),a=n(4043),i=n(8109),s=n(220);const l={apiKey:"AIzaSyCHy9HdhJn8ZgAWfk25IPt12-xetDtGVoU",authDomain:"test-62ef1.firebaseapp.com",projectId:"test-62ef1",storageBucket:"test-62ef1.appspot.com",messagingSenderId:"392040850802",appId:"1:392040850802:web:96a832533f241c44d629eb",measurementId:"G-718YKE5BM2"},c=(0,o.ZF)(l),d=(0,a.IH)(c),u=(0,i.ad)(c),p=(0,s.v0)(c);console.log("Firebase initialized"),p.languageCode="th";const h=(0,r.xr)((({app:e})=>{e.config.globalProperties.$firebase=c,e.config.globalProperties.$analytics=d,e.config.globalProperties.$db=u,e.config.globalProperties.$auth=p}))},6021:(e,t,n)=>{n.d(t,{r:()=>o});var r=n(1809);const o=(0,r.Q_)({id:"counter",state:()=>({username:null,accounts:[],counter:1,user:[]}),actions:{getDataById(e){for(var t=0;t<this.user.length;t++)if(e===this.user[t].id)return this.user[t];return"not found"},setUsername(e){this.username=e,console.log(`set username ${e}`)},setAccount(e){this.accounts=e;for(var t=0;t<this.accounts.length;t++)console.log(`set accounts ${e[t].id} ${e[t].balance}`)},setSignedInUser(e){this.user=e,console.log(`set user ${e}`)}}})}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r].call(a.exports,a,a.exports,n),a.exports}n.m=e,(()=>{var e=[];n.O=(t,r,o,a)=>{if(!r){var i=1/0;for(d=0;d<e.length;d++){for(var[r,o,a]=e[d],s=!0,l=0;l<r.length;l++)(!1&a||i>=a)&&Object.keys(n.O).every((e=>n.O[e](r[l])))?r.splice(l--,1):(s=!1,a<i&&(i=a));if(s){e.splice(d--,1);var c=o();void 0!==c&&(t=c)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[r,o,a]}})(),(()=>{n.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return n.d(t,{a:t}),t}})(),(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;n.t=function(r,o){if(1&o&&(r=this(r)),8&o)return r;if("object"===typeof r&&r){if(4&o&&r.__esModule)return r;if(16&o&&"function"===typeof r.then)return r}var a=Object.create(null);n.r(a);var i={};e=e||[null,t({}),t([]),t(t)];for(var s=2&o&&r;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((e=>i[e]=()=>r[e]));return i["default"]=()=>r,n.d(a,i),a}})(),(()=>{n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}})(),(()=>{n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,r)=>(n.f[r](e,t),t)),[]))})(),(()=>{n.u=e=>"js/"+e+"."+{65:"9fae620e",97:"d5de8374",166:"32822131",216:"f91327a4",271:"5165123b",278:"ee4ae903",302:"b5269dac",420:"bce46edf",439:"7cbbd405",466:"e284433c",540:"712218c7",653:"f5272a69",747:"e91d5dc8",817:"b87f1f9c",853:"8a3b2f8a",907:"b2ab09b2",913:"aaa15a5c",963:"5515f1b8",982:"6cf45a55"}[e]+".js"})(),(()=>{n.miniCssF=e=>"css/"+e+"."+{420:"7d7724b6",817:"5c515759",913:"57bd9745"}[e]+".css"})(),(()=>{n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="alpha-app:";n.l=(r,o,a,i)=>{if(e[r])e[r].push(o);else{var s,l;if(void 0!==a)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var u=c[d];if(u.getAttribute("src")==r||u.getAttribute("data-webpack")==t+a){s=u;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+a),s.src=r),e[r]=[o];var p=(t,n)=>{s.onerror=s.onload=null,clearTimeout(h);var o=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((e=>e(n))),t)return t(n)},h=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),l&&document.head.appendChild(s)}}})(),(()=>{n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{n.p=""})(),(()=>{if("undefined"!==typeof document){var e=(e,t,n,r,o)=>{var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var i=n=>{if(a.onerror=a.onload=null,"load"===n.type)r();else{var i=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=i,l.request=s,a.parentNode.removeChild(a),o(l)}};return a.onerror=a.onload=i,a.href=t,n?n.parentNode.insertBefore(a,n.nextSibling):document.head.appendChild(a),a},t=(e,t)=>{for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===t))return o}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){o=i[r],a=o.getAttribute("data-href");if(a===e||a===t)return o}},r=r=>new Promise(((o,a)=>{var i=n.miniCssF(r),s=n.p+i;if(t(i,s))return o();e(r,s,null,o,a)})),o={143:0};n.f.miniCss=(e,t)=>{var n={420:1,817:1,913:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((()=>{o[e]=0}),(t=>{throw delete o[e],t})))}}})(),(()=>{var e={143:0};n.f.j=(t,r)=>{var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise(((n,r)=>o=e[t]=[n,r]));r.push(o[2]=a);var i=n.p+n.u(t),s=new Error,l=r=>{if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,o[1](s)}};n.l(i,l,"chunk-"+t,t)}},n.O.j=t=>0===e[t];var t=(t,r)=>{var o,a,[i,s,l]=r,c=0;if(i.some((t=>0!==e[t]))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(l)var d=l(n)}for(t&&t(r);c<i.length;c++)a=i[c],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(d)},r=globalThis["webpackChunkalpha_app"]=globalThis["webpackChunkalpha_app"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var r=n.O(void 0,[736],(()=>n(8866)));r=n.O(r)})();