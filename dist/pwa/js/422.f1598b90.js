"use strict";(globalThis["webpackChunkalpha_app"]=globalThis["webpackChunkalpha_app"]||[]).push([[422],{6422:(e,a,s)=>{s.r(a),s.d(a,{default:()=>w});var t=s(9835),r=s(6970);const o={class:"flex flex-center"},n={key:0},l={key:1,class:"text-subtitle1"};function c(e,a,s,c,u,i){const h=(0,t.up)("qrcode-stream"),m=(0,t.up)("q-page");return(0,t.wg)(),(0,t.j4)(m,null,{default:(0,t.w5)((()=>[(0,t._)("div",o,[u.showCamera?((0,t.wg)(),(0,t.iD)("div",n,[(0,t.Wm)(h,{camera:u.camera,onDecode:i.onDecode},null,8,["camera","onDecode"])])):(0,t.kq)("",!0),u.result?((0,t.wg)(),(0,t.iD)("p",l,[(0,t.Uk)(" Last result: "),(0,t._)("b",null,(0,r.zw)(u.result),1)])):(0,t.kq)("",!0)])])),_:1})}var u=s(1980);const i={name:"ScanPage",components:{QrcodeStream:u.QrcodeStream},data(){return{isValid:void 0,camera:"auto",result:null,json:[],showCamera:!0}},methods:{async onDecode(e){var a,s;this.result=e,console.log(typeof this.result),a=this.result.split("{"),s=a[1].split("}"),this.json=JSON.parse(`${s[0]}`),console.log(this.json),this.turnCameraOff()},turnCameraOn(){this.camera="auto",this.showCamera=!0},turnCameraOff(){this.camera="off",this.showCamera=!1}}};var h=s(1639),m=s(9885),p=s(9984),d=s.n(p);const f=(0,h.Z)(i,[["render",c]]),w=f;d()(i,"components",{QPage:m.Z})}}]);