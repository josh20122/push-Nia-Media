"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[354,295],{2295:(e,t,r)=>{r.r(t),r.d(t,{default:()=>o});const s={props:["shared"],data:function(){return{drawer:!1,userLinks:[{name:"All Articles",icon:"mdi-format-align-center",link:"/user/blog"},{name:"Create Article",icon:"mdi-format-annotation-plus",link:"/user/blog/create"},{name:"My Profile",icon:"mdi-account-circle",link:"/user/my-profile"},{name:"All Users",icon:"mdi-account-multiple",link:"/admin/users"},{name:"All Tags",icon:"mdi-brightness-auto",link:"/admin/tags"}]}}};const o=(0,r(1900).Z)(s,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("v-navigation-drawer",{attrs:{color:"drawer",permanent:e.$vuetify.breakpoint.lgAndUp,app:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[r("v-list",[r("v-list-item",{},[r("v-list-item-avatar",[r("v-avatar",[r("v-img",{attrs:{src:"/images/logo.jpg"}})],1)],1),e._v(" "),r("v-list-item-content",[r("v-list-item-title",[r("span",{staticClass:"white--text font-semibold text-xl"},[e._v(" Nia Media ")])])],1)],1),e._v(" "),r("v-divider",{}),e._v(" "),e._l(e.userLinks,(function(t,s){return r("v-list-item",{key:s},[r("Link",{staticClass:"white--text",attrs:{href:t.link}},[r("v-list-item-icon",[r("v-icon",{attrs:{color:"white"},domProps:{textContent:e._s(t.icon)}})],1)],1),e._v(" "),r("v-list-item-content",[r("Link",{staticClass:"white--text no-underline",attrs:{href:t.link}},[r("v-list-item-title",{staticClass:"white--text",domProps:{textContent:e._s(t.name)}})],1)],1)],1)}))],2)],1),e._v(" "),r("v-app-bar",{attrs:{app:"","hide-on-scroll":"",color:"nav"}},[e.$vuetify.breakpoint.lgAndUp?e._e():r("v-app-bar-nav-icon",{staticClass:"white--text",on:{click:function(t){e.drawer=!e.drawer}}}),e._v(" "),r("v-spacer"),e._v(" "),r("Link",{attrs:{href:"/auth/logout"}},[r("v-btn",{attrs:{elevation:"",icon:"",color:""}},[r("v-icon",{attrs:{color:"white"}},[e._v("mdi-logout")])],1)],1),e._v(" "),r("v-avatar",[r("img",{attrs:{src:e.shared.user.auth.avatarPath,alt:""}})])],1),e._v(" "),r("v-main",[e._t("default")],2),e._v(" "),r("v-footer",{attrs:{app:""}})],1)}),[],!1,null,null,null).exports},1354:(e,t,r)=>{r.r(t),r.d(t,{default:()=>i});var s=r(2295),o=r(2739),l=r(9680);const a={props:["errors","tags"],layout:s.default,components:{VueEditor:o.bR},data:function(){return{valid:!1,required:[function(e){return!!e||"This field is required"}],file:[function(e){return!e||!e.some((function(e){return e.size>2e6}))||"Avatar size should be less than 2 MB!"}],form:{content:null,image:null,title:null,published:null,tags:null},color:null,text:null,published:[{status:"Published",value:!0},{status:"Not Published",value:!1}],processing:!1,timeout:null,loading:!1,redirect:!1}},watch:{redirect:function(){l.Inertia.get("/user/blog")}},methods:{upload:function(){var e=this;l.Inertia.post("/user/blog",this.form,{forceFormData:!0,preserveScroll:!0,preserveState:!0,onStart:function(){e.loading=!0,e.processing=!0,e.color="yellow darken-1",e.timeout=1e4,e.text="Upload in progress, please wait.."},onSuccess:function(){e.loading=!1,e.text="Upload Success",e.processing=!1,e.color="green darken-1",e.timeout=4e3,e.redirect=!0},onError:function(){e.loading=!1,e.timeout=3e3,e.color="error",e.text="Failed, please check for any errors",e.processing=!1}})}}};const i=(0,r(1900).Z)(a,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{},[r("v-row",[r("v-col",[r("div",{staticClass:"display-1"},[e._v("Create A new Blog")])])],1),e._v(" "),r("v-row",[r("v-col",[r("v-form",{model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[r("v-container",{staticClass:"pa-0"},[r("v-row",{attrs:{dense:""}},[r("v-col",{attrs:{cols:"12",sm:"6"}},[r("label",{attrs:{for:""}},[e._v("Title")]),e._v(" "),r("v-text-field",{attrs:{placeholder:"Enter Title",outlined:"",rules:e.required,dense:"","error-messages":e.errors.title,disabled:e.processing,loading:e.processing},model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"6"}},[r("label",{attrs:{for:""}},[e._v("Cover Image")]),e._v(" "),r("v-file-input",{attrs:{placeholder:"Enter Cover Image","show-size":!0,"counter-size-string":"2042",rules:e.required,outlined:"","small-chips":"",disabled:e.processing,loading:e.processing,"error-messages":e.errors.image,dense:""},model:{value:e.form.image,callback:function(t){e.$set(e.form,"image",t)},expression:"form.image"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12"}},[r("label",{attrs:{for:""}},[e._v("Tags")]),e._v(" "),r("v-select",{attrs:{items:e.tags,"item-text":"name",outlined:"",dense:"","deletable-chips":"","item-value":"id",multiple:"","error-messages":e.errors.tags,placeholder:"Select",rules:e.required,"small-chips":""},model:{value:e.form.tags,callback:function(t){e.$set(e.form,"tags",t)},expression:"form.tags"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12"}},[r("label",{attrs:{for:""}},[e._v("Status")]),e._v(" "),r("v-select",{attrs:{items:e.published,"item-text":"status",outlined:"",dense:"","deletable-chips":"","item-value":"value","error-messages":e.errors.status,placeholder:"Select",rules:e.required},model:{value:e.form.status,callback:function(t){e.$set(e.form,"status",t)},expression:"form.status"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12"}},[r("label",{attrs:{for:""}},[e._v("Blog Content")]),e._v(" "),r("VueEditor",{attrs:{placeholder:"Type here..","error-messages":e.errors.content,disabled:e.processing},model:{value:e.form.content,callback:function(t){e.$set(e.form,"content",t)},expression:"form.content"}}),e._v(" "),e.errors.content?r("div",{staticClass:"error--text text-xs pt-2",domProps:{textContent:e._s(e.errors.content)}},[e._v("\n                hhfhfhf\n              ")]):e._e()],1),e._v(" "),r("v-col",{attrs:{cols:"12"}},[r("div",{staticClass:"grid justify-end"},[r("v-btn",{staticClass:"white--text",attrs:{elevation:"",left:"",color:" blue"},on:{click:e.upload}},[r("v-icon",{attrs:{color:"white"}},[e._v("mdi-upload")]),e._v("\n                  Upload Blog\n                ")],1)],1)])],1)],1)],1)],1)],1),e._v(" "),r("v-row",[r("v-snackbar",{staticClass:"white--text",attrs:{timeout:e.timeout,color:e.color,tile:"",absolute:"",right:"",transition:"slide-x-reverse-transition"},model:{value:e.processing,callback:function(t){e.processing=t},expression:"processing"}},[r("div",{staticClass:"font-sembold text-lg",domProps:{textContent:e._s(e.text)}})])],1)],1)}),[],!1,null,null,null).exports}}]);