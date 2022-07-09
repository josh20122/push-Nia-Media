"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[597,295],{5597:(t,e,r)=>{r.r(e),r.d(e,{default:()=>o});var a=r(9680);const s={props:["errors","user","imagePath","role"],layout:r(2295).default,data:function(){return{form:{name:this.user.name,email:this.user.email,image:null,old_password:null,password:null,password_confirmation:null},processing:!1,color:null,timeout:null,loading:null,redirect:!1,text:null}},methods:{update:function(){var t=this;a.Inertia.post("/user/profile/update",this.form,{forceFormData:!0,preserveScroll:!0,preserveState:!0,onStart:function(){t.loading=!0,t.processing=!0,t.color="yellow darken-1",t.timeout=100003663,t.text="Update in progress, please wait.."},onSuccess:function(){t.loading=!1,t.text="Update Success",t.processing=!1,t.color="green darken-1",t.timeout=4e3,t.redirect=!0},onError:function(){t.loading=!1,t.timeout=3e3,t.color="error",t.text="Failed, please check for any errors",t.processing=!1}})}}};const o=(0,r(1900).Z)(s,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{staticClass:"fill-height pb-12"},[r("v-row",[r("v-col",{attrs:{cols:"12",sm:"6"}},[r("v-card",{staticClass:"mx-auto",attrs:{outlined:"","max-width":"500"}},[r("v-card-text",[r("v-form",[r("v-row",{attrs:{dense:""}},[r("v-col",{attrs:{cols:"12"}},[r("div",{staticClass:"grid justify-center"},[r("v-avatar",{staticClass:"mx-auto",attrs:{size:"170"}},[r("img",{attrs:{src:t.imagePath,alt:""}})])],1)]),t._v(" "),r("v-col",{attrs:{cols:"12"}},[r("label",{attrs:{for:""}},[t._v("Full Name")]),t._v(" "),r("v-text-field",{attrs:{placeholder:"Enter name","error-messages":t.errors.name,outlined:"",dense:""},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12"}},[r("label",{attrs:{for:""}},[t._v("Email")]),t._v(" "),r("v-text-field",{attrs:{placeholder:"Enter email","error-messages":t.errors.email,outlined:"",dense:""},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12"}},[r("label",{attrs:{for:""}},[t._v("Edit Avatar")]),t._v(" "),r("v-file-input",{attrs:{placeholder:"Click Here","error-messages":t.errors.image,outlined:"","show-size":!0,dense:""},model:{value:t.form.image,callback:function(e){t.$set(t.form,"image",e)},expression:"form.image"}})],1),t._v(" "),r("v-col",[r("v-btn",{attrs:{elevation:"",color:"primary"},on:{click:function(e){return t.update()}}},[t._v("\n                  Update\n                ")])],1)],1)],1)],1)],1)],1),t._v(" "),r("v-col",{attrs:{cols:"12",sm:"6"}},[r("v-card",[r("v-card-title",[t._v(" Personal Details ")]),t._v(" "),r("v-card-text",[r("v-form",[r("v-row",{attrs:{dense:""}},[r("v-col",{attrs:{cols:"12"}},[r("label",{attrs:{for:""}},[t._v("Old Password")]),t._v(" "),r("v-text-field",{attrs:{dense:"","error-messages":t.errors.old_password,placeholder:"Enter Old password",outlined:""},model:{value:t.form.old_password,callback:function(e){t.$set(t.form,"old_password",e)},expression:"form.old_password"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12"}},[r("label",{attrs:{for:""}},[t._v("New Password")]),t._v(" "),r("v-text-field",{attrs:{dense:"","error-messages":t.errors.password,placeholder:"Enter new password",outlined:""},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12"}},[r("label",{attrs:{for:""}},[t._v("Confirm Password")]),t._v(" "),r("v-text-field",{attrs:{dense:"","error-messages":t.errors.password_confirmation,placeholder:"Enter new password",outlined:""},model:{value:t.form.password_confirmation,callback:function(e){t.$set(t.form,"password_confirmation",e)},expression:"form.password_confirmation"}})],1),t._v(" "),r("v-col",[r("v-btn",{attrs:{small:"",elevation:"",color:"primary"},on:{click:function(e){return t.update()}}},[t._v("\n                  Update Password\n                ")])],1)],1)],1)],1)],1)],1)],1),t._v(" "),r("v-row",[r("v-snackbar",{staticClass:"white--text",attrs:{timeout:t.timeout,color:t.color,tile:"",absolute:"",right:"",transition:"slide-x-reverse-transition"},model:{value:t.processing,callback:function(e){t.processing=e},expression:"processing"}},[r("div",{staticClass:"font-sembold text-lg",domProps:{textContent:t._s(t.text)}})])],1)],1)}),[],!1,null,null,null).exports},2295:(t,e,r)=>{r.r(e),r.d(e,{default:()=>s});const a={props:["shared"],data:function(){return{drawer:!1,userLinks:[{name:"All Articles",icon:"mdi-format-align-center",link:"/user/blog"},{name:"Create Article",icon:"mdi-format-annotation-plus",link:"/user/blog/create"},{name:"My Profile",icon:"mdi-account-circle",link:"/user/my-profile"},{name:"All Users",icon:"mdi-account-multiple",link:"/admin/users"},{name:"All Tags",icon:"mdi-brightness-auto",link:"/admin/tags"}]}}};const s=(0,r(1900).Z)(a,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("v-navigation-drawer",{attrs:{color:"drawer",permanent:t.$vuetify.breakpoint.lgAndUp,app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[r("v-list",[r("v-list-item",{},[r("v-list-item-avatar",[r("v-avatar",[r("v-img",{attrs:{src:"/images/logo.jpg"}})],1)],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",[r("span",{staticClass:"white--text font-semibold text-xl"},[t._v(" Nia Media ")])])],1)],1),t._v(" "),r("v-divider",{}),t._v(" "),t._l(t.userLinks,(function(e,a){return r("v-list-item",{key:a},[r("Link",{staticClass:"white--text",attrs:{href:e.link}},[r("v-list-item-icon",[r("v-icon",{attrs:{color:"white"},domProps:{textContent:t._s(e.icon)}})],1)],1),t._v(" "),r("v-list-item-content",[r("Link",{staticClass:"white--text no-underline",attrs:{href:e.link}},[r("v-list-item-title",{staticClass:"white--text",domProps:{textContent:t._s(e.name)}})],1)],1)],1)}))],2)],1),t._v(" "),r("v-app-bar",{attrs:{app:"","hide-on-scroll":"",color:"nav"}},[t.$vuetify.breakpoint.lgAndUp?t._e():r("v-app-bar-nav-icon",{staticClass:"white--text",on:{click:function(e){t.drawer=!t.drawer}}}),t._v(" "),r("v-spacer"),t._v(" "),r("Link",{attrs:{href:"/auth/logout"}},[r("v-btn",{attrs:{elevation:"",icon:"",color:""}},[r("v-icon",{attrs:{color:"white"}},[t._v("mdi-logout")])],1)],1),t._v(" "),r("v-avatar",[r("img",{attrs:{src:t.shared.user.auth.avatarPath,alt:""}})])],1),t._v(" "),r("v-main",[t._t("default")],2),t._v(" "),r("v-footer",{attrs:{app:""}})],1)}),[],!1,null,null,null).exports}}]);