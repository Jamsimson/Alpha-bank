"use strict";(globalThis["webpackChunkalpha_app"]=globalThis["webpackChunkalpha_app"]||[]).push([[778],{9778:(a,e,t)=>{t.r(e),t.d(e,{default:()=>w});var n=t(9835),o=t(6970);const r={class:"q-pa-md"},s={key:0},c={key:1,class:"text-subtitle1"};function l(a,e,t,l,u,i){const m=(0,n.up)("qrcode-stream"),h=(0,n.up)("q-page");return(0,n.wg)(),(0,n.j4)(h,null,{default:(0,n.w5)((()=>[(0,n._)("div",r,[u.showCamera?((0,n.wg)(),(0,n.iD)("div",s,[(0,n.Wm)(m,{onInit:i.onInit,camera:u.camera,onDecode:i.onDecode},null,8,["onInit","camera","onDecode"])])):(0,n.kq)("",!0),u.result?((0,n.wg)(),(0,n.iD)("p",c,[(0,n.Uk)(" Last result: "),(0,n._)("b",null,(0,o.zw)(u.result),1)])):(0,n.kq)("",!0)])])),_:1})}t(9665);var u=t(1980);const i={name:"TestPage",components:{QrcodeStream:u.QrcodeStream},data(){return{isValid:void 0,camera:"auto",result:null,json:[],showCamera:!0}},methods:{async onDecode(a){var e;this.result=a,console.log(typeof this.result),e=JSON.parse(this.result),console.log(e.account_name),this.$router.push(`transfer/SCB/${e.account_name}/${e.account_number}`),this.turnCameraOff()},turnCameraOn(){this.camera="auto",this.showCamera=!0},turnCameraOff(){this.camera="off",this.showCamera=!1},async onInit(a){try{await a}catch(e){console.error(e)}finally{this.showScanConfirmation="off"===this.camera}}}};var m=t(1639),h=t(9885),p=t(9984),d=t.n(p);const f=(0,m.Z)(i,[["render",l]]),w=f;d()(i,"components",{QPage:h.Z})}}]);