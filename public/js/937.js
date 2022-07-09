"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[937,38],{4937:(e,t,r)=>{r.r(t),r.d(t,{default:()=>h});var s=r(3408),a=r(6944),o=r(5893),l=r(5255),n=r(7024),i=r(1819),c=r(7067),u=r(3240),m=r(7894),d=r(8885),p=r(1566),f=r(8269),v=r(9680);const g={layout:r(4038).default,props:["errors","user","imagePath"],data:function(){return{form:{name:this.user.name,email:this.user.email,image:null,role:this.user.role},processing:!1,color:null,timeout:null,roles:["USER","ADMIN"],loading:null,redirect:!1,text:null}},methods:{update:function(){var e=this;v.Inertia.post("/admin/user/".concat(this.user.id,"/update"),this.form,{forceFormData:!0,preserveScroll:!0,preserveState:!0,onStart:function(){e.loading=!0,e.processing=!0,e.color="yellow darken-1",e.timeout=100003663,e.text="Update in progress, please wait.."},onSuccess:function(){e.loading=!1,e.text="Update Success",e.processing=!1,e.color="green darken-1",e.timeout=4e3,e.redirect=!0},onError:function(){e.loading=!1,e.timeout=3e3,e.color="error",e.text="Failed, please check for any errors",e.processing=!1}})}}};const h=(0,r(1900).Z)(g,(function(){var e=this,t=e._self._c;return t(i.Z,{staticClass:"fill-height pb-12"},[t(m.Z,[t(n.Z,{attrs:{cols:"12",sm:"6"}},[t(o.Z,{staticClass:"mx-auto",attrs:{outlined:"","max-width":"500"}},[t(l.ZB,[t(u.Z,[t(m.Z,{attrs:{dense:""}},[t(n.Z,{attrs:{cols:"12"}},[t("div",{staticClass:"grid justify-center"},[t(s.Z,{staticClass:"mx-auto",attrs:{size:"170"}},[t("img",{attrs:{src:e.imagePath,alt:""}})])],1)]),e._v(" "),t(n.Z,{attrs:{cols:"12"}},[t("label",{attrs:{for:""}},[e._v("Full Name")]),e._v(" "),t(f.Z,{attrs:{placeholder:"Enter name","error-messages":e.errors.name,outlined:"",dense:""},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),t(n.Z,{attrs:{cols:"12"}},[t("label",{attrs:{for:""}},[e._v("Email")]),e._v(" "),t(f.Z,{attrs:{placeholder:"Enter email","error-messages":e.errors.email,outlined:"",dense:""},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),e._v(" "),t(n.Z,{attrs:{cols:"12"}},[t("label",{attrs:{for:""}},[e._v("Role")]),e._v(" "),t(d.Z,{attrs:{placeholder:"Enter email",items:e.roles,"error-messages":e.errors.email,outlined:"",dense:""},model:{value:e.form.role,callback:function(t){e.$set(e.form,"role",t)},expression:"form.role"}})],1),e._v(" "),t(n.Z,{attrs:{cols:"12"}},[t("label",{attrs:{for:""}},[e._v("Edit Avatar")]),e._v(" "),t(c.Z,{attrs:{placeholder:"Click Here","error-messages":e.errors.image,outlined:"","show-size":!0,dense:""},model:{value:e.form.image,callback:function(t){e.$set(e.form,"image",t)},expression:"form.image"}})],1),e._v(" "),t(n.Z,[t(a.Z,{attrs:{elevation:"",color:"primary"},on:{click:function(t){return e.update()}}},[e._v("\n                  Update\n                ")])],1)],1)],1)],1)],1)],1)],1),e._v(" "),t(m.Z,[t(p.Z,{staticClass:"white--text",attrs:{timeout:e.timeout,color:e.color,tile:"",absolute:"",right:"",transition:"slide-x-reverse-transition"},model:{value:e.processing,callback:function(t){e.processing=t},expression:"processing"}},[t("div",{staticClass:"font-sembold text-lg",domProps:{textContent:e._s(e.text)}})])],1)],1)}),[],!1,null,null,null).exports},4038:(e,t,r)=>{r.r(t),r.d(t,{default:()=>x});var s=r(1095),a=r(7960),o=r(5078),l=r(3408),n=r(6944),i=r(8176),c=r(2570),u=r(4786),m=r(7763),d=r(2545),p=r(3347),f=r(8208),v=r(5054),g=r(3560),h=r(5091),Z=r(8097),_=r(2515);const k={props:["shared"],data:function(){return{drawer:!1,userLinks:[{name:"All Articles",icon:"mdi-format-align-center",link:"/user/blog"},{name:"Create Article",icon:"mdi-format-annotation-plus",link:"/user/blog/create"},{name:"My Profile",icon:"mdi-account-circle",link:"/user/my-profile"},{name:"All Users",icon:"mdi-account-multiple",link:"/admin/users"},{name:"All Tags",icon:"mdi-brightness-auto",link:"/admin/tags"}]}}};const x=(0,r(1900).Z)(k,(function(){var e=this,t=e._self._c;return t(s.Z,[t(Z.Z,{attrs:{color:"drawer",permanent:e.$vuetify.breakpoint.lgAndUp,app:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[t(d.Z,[t(p.Z,{},[t(f.Z,[t(l.Z,[t(m.Z,{attrs:{src:"/images/logo.jpg"}})],1)],1),e._v(" "),t(v.km,[t(v.V9,[t("span",{staticClass:"white--text font-semibold text-xl"},[e._v(" Nia Media ")])])],1)],1),e._v(" "),t(i.Z,{}),e._v(" "),e._l(e.userLinks,(function(r,s){return t(p.Z,{key:s},[t("Link",{staticClass:"white--text",attrs:{href:r.link}},[t(g.Z,[t(u.Z,{attrs:{color:"white"},domProps:{textContent:e._s(r.icon)}})],1)],1),e._v(" "),t(v.km,[t("Link",{staticClass:"white--text no-underline",attrs:{href:r.link}},[t(v.V9,{staticClass:"white--text",domProps:{textContent:e._s(r.name)}})],1)],1)],1)}))],2)],1),e._v(" "),t(a.Z,{attrs:{app:"","hide-on-scroll":"",color:"nav"}},[e.$vuetify.breakpoint.lgAndUp?e._e():t(o.Z,{staticClass:"white--text",on:{click:function(t){e.drawer=!e.drawer}}}),e._v(" "),t(_.Z),e._v(" "),t("Link",{attrs:{href:"/auth/logout"}},[t(n.Z,{attrs:{elevation:"",icon:"",color:""}},[t(u.Z,{attrs:{color:"white"}},[e._v("mdi-logout")])],1)],1),e._v(" "),t(l.Z,[t("img",{attrs:{src:e.shared.user.auth.avatarPath,alt:""}})])],1),e._v(" "),t(h.Z,[e._t("default")],2),e._v(" "),t(c.Z,{attrs:{app:""}})],1)}),[],!1,null,null,null).exports}}]);