"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[967],{967:(e,t,s)=>{s.r(t),s.d(t,{default:()=>v});var a=s(1095),n=s(6944),l=s(5893),i=s(5255),o=s(7024),r=s(1819),d=s(3240),u=s(4786),c=s(5091),m=s(7894),f=s(8269),g=s(9680);const p={props:{status:{required:!1,default:null},errors:{type:Object,required:!1,default:null}},data:function(){return{card:{text:"Enter the email address you use to sign in to your Nia Media Account and we'll send you a link to reset your password. "},loading:!1,form:{email:null},done:!1}},computed:{message:function(){return 1==this.done?"We have emailed your password reset link!":null}},methods:{submit:function(){var e=this;g.Inertia.post("/auth/forgot-password",this.form,{onStart:function(){e.loading=!0},onFinish:function(){e.loading=!1},onSuccess:function(){e.done=!0}})}}};const v=(0,s(1900).Z)(p,(function(){var e=this,t=e._self._c;return t(a.Z,[t(c.Z,[t(r.Z,{staticClass:"fill-height"},[t(m.Z,[t(o.Z,[t(l.Z,{staticClass:"mx-auto",attrs:{disabled:e.loading,loading:e.loading,outlined:"","max-width":"500px"}},[t(i.ZB,{staticClass:"text-center pb-0"},[t(u.Z,{attrs:{"x-large":"",color:""}},[e._v("mdi-lock")])],1),e._v(" "),t(i.ZB,{staticClass:"title text-center pb-0"},[e._v("\n              Forgot Password?\n            ")]),e._v(" "),t(i.Qq,{staticClass:"text-center subtitle"},[null==e.message?t("div",[e._v("\n                "+e._s(e.card.text)+"\n              ")]):t("div",{staticClass:"text-green-400"},[e._v("\n                "+e._s(e.message)+"\n              ")])]),e._v(" "),t(i.ZB,[t(d.Z,[t(f.Z,{attrs:{label:"E-mail",outlined:"",placeholder:"Enter a valid email adress","error-messages":e.errors.email,"prepend-inner-icon":"mdi-email",disabled:e.loading},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),e._v(" "),t(n.Z,{staticClass:"white--text",attrs:{block:"",elevation:"",color:"indigo",disabled:e.loading},on:{click:function(t){return e.submit()}}},[e._v("\n                Send My Password\n              ")])],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null).exports}}]);