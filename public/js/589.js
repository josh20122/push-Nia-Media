"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[589,632],{2145:(t,e,a)=>{a.d(e,{Z:()=>v});var i=a(3645),s=a.n(i),n=a(1667),r=a.n(n),o=a(8997),l=s()((function(t){return t[1]})),c=r()(o.Z);l.push([t.id,".image[data-v-1a123159]{background-image:url("+c+")}",""]);const v=l},2755:(t,e,a)=>{a.d(e,{Z:()=>n});var i=a(3645),s=a.n(i)()((function(t){return t[1]}));s.push([t.id,".video-container{height:0;padding-bottom:56.25%;position:relative}.video-container iframe{height:100%;left:0;position:absolute;top:0;width:100%}",""]);const n=s},8997:(t,e,a)=>{a.d(e,{Z:()=>i});const i="/images/bg-7.jpg?b9b5f30bc68276636761e0785d52c234"},4632:(t,e,a)=>{a.r(e),a.d(e,{default:()=>d});var i=a(3279),s=a.n(i),n=a(9680);const r={props:["title","shared","filter"],data:function(){return{drawer:!1,dialog:!1,search:this.filter,icons:["mdi-facebook","mdi-twitter","mdi-linkedin","mdi-instagram"],socialLinks:[{icon:"mdi-facebook",link:"https://www.facebook.com/Flojournalism.diaries/"},{icon:"mdi-twitter",link:"https://twitter.com/FlorentinahHiza?t=5YiEpFJawlc7bPQY5quE6A&s=08"},{icon:"mdi-linkedin",link:"https://www.linkedin.com/in/florentinah-hiza-a45ba8109"},{icon:"mdi-youtube",link:"https://youtube.com/channel/UCk0IYz5ANiia2xQahL0Dgmg"}]}},watch:{search:s()((function(t){n.Inertia.get("/",{search:t},{replace:!0,preserveScroll:!0})}),500)}};var o=a(3379),l=a.n(o),c=a(2145),v={insert:"head",singleton:!1};l()(c.Z,v);c.Z.locals;const d=(0,a(1900).Z)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-navigation-drawer",{attrs:{app:"",color:"drawer",temporary:"",hidden:t.$vuetify.breakpoint.smAndUp},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list",[a("v-list-item",{},[a("v-list-item-avatar",[a("v-avatar",[a("v-img",{attrs:{src:"/images/logo.jpg"}})],1)],1),t._v(" "),a("v-list-item-content",[a("v-list-item-title",[a("span",{staticClass:"white--text font-semibold text-xl"},[t._v(" Nia Media ")])])],1)],1),t._v(" "),a("div",{staticClass:"px-2 pb-4 grid space-y-2"},[t.shared.user.auth?t._e():a("Link",{staticClass:"no-underline",attrs:{href:"/auth/register"}},[a("v-btn",{staticClass:"no-underlne",attrs:{small:"",elevation:"",outlined:"",rounded:"",color:"white",block:""}},[a("span",{staticClass:"no-underline"},[t._v("sign up")])])],1),t._v(" "),t.shared.user.auth?t._e():a("Link",{staticClass:"no-underline",attrs:{href:"/auth/login"}},[a("v-btn",{staticClass:"no-underlne",attrs:{small:"",elevation:"",outlined:"",rounded:"",color:"white",block:""}},[a("span",{staticClass:"no-underline"},[t._v("sign in")])])],1),t._v(" "),t.shared.user.auth?a("Link",{staticClass:"no-underline",attrs:{href:"/auth/logout"}},[a("v-btn",{staticClass:"no-underlne",attrs:{small:"",elevation:"",outlined:"",rounded:"",color:"white",block:""}},[a("span",{staticClass:"no-underline"},[t._v("logout")])])],1):t._e(),t._v(" "),t.shared.user.auth?a("Link",{staticClass:"no-underline",attrs:{href:"/user/my-profile"}},[a("v-btn",{staticClass:"no-underlne",attrs:{small:"",elevation:"",outlined:"",rounded:"",color:"white",block:""}},[a("span",{staticClass:"no-underline"},[t._v("my account")])])],1):t._e(),t._v(" "),a("Link",{staticClass:"no-underline",attrs:{href:"/contact"}},[a("v-btn",{staticClass:"no-underlne",attrs:{small:"",elevation:"",outlined:"",rounded:"",color:"white",block:""}},[a("span",{staticClass:"no-underline"},[t._v("contact us")])])],1),t._v(" "),a("Link",{staticClass:"no-underline",attrs:{href:"/tv"}},[a("v-btn",{staticClass:"no-underlne",attrs:{small:"",elevation:"",outlined:"",rounded:"",color:"white",block:""}},[a("span",{staticClass:"no-underline"},[t._v("Podcast")])])],1)],1),t._v(" "),a("v-divider",{staticClass:"white mb-10"}),t._v(" "),a("v-subheader",[a("span",{staticClass:"text-white text-lg font-semibold"},[t._v("Tags")])]),t._v(" "),t._l(t.shared.tags,(function(e,i){return a("div",{key:i},[a("v-list-item",[a("v-list-item-content",[a("Link",{staticClass:"no-underline",attrs:{href:"/tag/"+e.slug}},[a("v-list-item-title",{staticClass:"grey--text text--lighten-4",domProps:{textContent:t._s(e.name)}})],1)],1)],1),t._v(" "),a("v-divider",{})],1)})),t._v(" "),a("v-list-group",{staticClass:"white--text",attrs:{color:"white","no-action":"","sub-group":""},scopedSlots:t._u([{key:"activator",fn:function(){return[a("v-list-item-content",[a("v-list-item-title",{domProps:{textContent:t._s("Others")}})],1)]},proxy:!0}])},[t._v(" "),t._l(t.shared.otherTags,(function(e,i){return a("div",{key:i,attrs:{"active-class":""}},[a("v-list-item",[a("v-list-item-content",[a("Link",{staticClass:"text-white no-underline",attrs:{href:"/tag/"+e.slug}},[a("v-list-item-title",[a("span",{staticClass:"text-white",domProps:{textContent:t._s(e.name)}})])],1)],1)],1)],1)}))],2)],2)],1),t._v(" "),a("v-app-bar",{attrs:{app:"",color:"nav",flat:"","hide-on-scroll":t.$vuetify.breakpoint.mdAndUp,dense:"",height:t.$vuetify.breakpoint.mdAndUp?80:""}},[a("v-container",{staticClass:"pa-0 fill-height"},[a("v-row",[a("v-col",[t.$vuetify.breakpoint.smAndDown?a("div",{staticClass:"flex justify-between"},[a("v-app-bar-nav-icon",{staticClass:"white--text",on:{click:function(e){t.drawer=!t.drawer}}}),t._v(" "),a("v-toolbar-title",[a("v-btn",{staticClass:"white--text",attrs:{elevation:"",depressed:"",color:"transparent"}},[t._v("nia media")])],1),t._v(" "),a("div",[a("v-btn",{attrs:{elevation:"",icon:"",color:""},on:{click:function(e){t.dialog=!t.dialog}}},[a("v-icon",{attrs:{color:"white"}},[t._v("mdi-magnify")])],1),t._v(" "),"/"!==t.$page.url?a("Link",{attrs:{href:"/"}},[a("v-btn",{attrs:{icon:"",elevation:"",color:""}},[a("v-icon",{attrs:{color:"white"}},[t._v("mdi-home")])],1)],1):t._e()],1)],1):t._e(),t._v(" "),t.$vuetify.breakpoint.mdAndUp?a("div",{staticClass:"flex justify-between"},[a("div",{staticClass:"inline-flex white--text"},[a("v-avatar",[a("img",{attrs:{src:"/images/logo.jpg",alt:""}})]),t._v(" "),a("v-divider",{staticClass:"white mx-3",attrs:{vertical:""}}),t._v(" "),t.$vuetify.breakpoint.mdAndUp?a("div",{staticClass:"flex space-x-4 justify-end mt-3"},[t._l(t.shared.tags,(function(e,i){return a("Link",{key:i,staticClass:"capitalize grey--text no-underline",attrs:{href:"/tag/"+e.slug}},[a("span",{staticClass:"text-white",domProps:{textContent:t._s(e.name)}})])})),t._v(" "),a("Link",{staticClass:"capitalize grey--text no-underline",attrs:{href:"/tv"}},[a("span",{staticClass:"text-white"},[t._v("Podcast ")])]),t._v(" "),a("div",[a("v-menu",{staticClass:"capitalize white--text",attrs:{"open-on-hover":"",top:"","offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,s=e.attrs;return[a("v-btn",t._g(t._b({staticClass:"capitalize white--text",attrs:{depressed:"",color:"transparent"}},"v-btn",s,!1),i),[a("span",[t._v("others")]),t._v(" "),a("v-icon",{attrs:{color:""}},[t._v("mdi-menu-down")])],1)]}}],null,!1,2172999707)},[t._v(" "),a("v-list",{attrs:{color:"nav"}},t._l(t.shared.otherTags,(function(e,i){return a("v-list-item",{key:i},[a("Link",{staticClass:"no-underline text-white",attrs:{href:"/tag/"+e.slug}},[a("v-list-item-title",[a("span",{staticClass:"no-underline text-white",domProps:{textContent:t._s(e.name)}})])],1)],1)})),1)],1)],1)],2):t._e()],1),t._v(" "),t.$vuetify.breakpoint.mdAndUp?a("div",{staticClass:"inline-flex justify-end"},[a("div",[a("v-btn",{attrs:{elevation:"",icon:"",color:""},on:{click:function(e){t.dialog=!t.dialog}}},[a("v-icon",{attrs:{color:"white"}},[t._v("mdi-magnify")])],1)],1),t._v(" "),"/"!==t.$page.url?a("Link",{attrs:{href:"/"}},[a("v-btn",{attrs:{elevation:"",icon:"",color:""}},[a("v-icon",{attrs:{color:"white"}},[t._v("mdi-home")])],1)],1):t._e(),t._v(" "),t.shared.user.auth?a("Link",{attrs:{href:"/user/my-profile"}},[a("v-btn",{attrs:{elevation:"",icon:"",color:""}},[a("v-icon",{attrs:{color:"white"}},[t._v("mdi-account")])],1)],1):t._e(),t._v(" "),a("Link",{attrs:{href:"/contact"}},[a("v-btn",{attrs:{elevation:"",icon:"",color:""}},[a("v-icon",{attrs:{color:"white"}},[t._v("mdi-phone")])],1)],1),t._v(" "),t.shared.user.auth?t._e():a("Link",{staticClass:"no-underline text-white mr-3 mt-3",attrs:{href:"/auth/register"}},[a("span",{staticClass:"text-white"},[t._v(" Sign Up")])]),t._v(" "),t.shared.user.auth?t._e():a("Link",{staticClass:"no-underline text-white mt-3",attrs:{href:"/auth/login"}},[a("span",{staticClass:"text-white"},[t._v("Log In")])]),t._v(" "),t.shared.user.auth?a("Link",{attrs:{href:"/auth/logout"}},[a("v-btn",{attrs:{icon:""}},[a("v-icon",{attrs:{color:"white"}},[t._v("mdi-logout")])],1)],1):t._e()],1):t._e()]):t._e()])],1)],1)],1),t._v(" "),a("v-dialog",{attrs:{"max-width":"400"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",{},[a("v-card-title",[t._v(" Search ")]),t._v(" "),a("v-card-text",[a("v-text-field",{attrs:{placeholder:"Search...",outlined:"",dense:""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),t._v(" "),a("div",{staticClass:"flex justify-end"},[a("v-btn",{attrs:{small:"",elevation:"",outlined:"",color:"error"},on:{click:function(e){t.dialog=!1}}},[t._v("cancel")])],1)],1)],1)],1),t._v(" "),a("v-main",{staticClass:"background pb-6"},[t.filter?a("v-container",{},[a("v-row",[a("v-col",[a("div",{staticClass:"title"},[t._v("Search results for "+t._s(t.filter))])])],1)],1):t._e(),t._v(" "),t._t("default")],2),t._v(" "),a("v-footer",{attrs:{dark:"",padless:""}},[a("v-card",{staticClass:"image indigo lighten-1 white--text text-center",attrs:{flat:"",tile:"",width:"100%","max-width":"100%"}},[a("v-card-text",t._l(t.socialLinks,(function(e,i){return a("v-btn",{key:i,staticClass:"mx-4 white--text",attrs:{href:e.link,icon:""}},[a("v-icon",{attrs:{size:"24px"}},[t._v("\n            "+t._s(e.icon)+"\n          ")])],1)})),1),t._v(" "),a("v-divider"),t._v(" "),a("v-card-text",{staticClass:"white--text"},[t._v("\n        "+t._s((new Date).getFullYear())+" — "),a("strong",[t._v("Nia Media")])])],1)],1)],1)}),[],!1,null,"1a123159",null).exports},6589:(t,e,a)=>{a.r(e),a.d(e,{default:()=>c});var i=a(4632);a(1652);const s={props:["videos"],data:function(){return{playerVars:{autoplay:1}}},layout:i.default};var n=a(3379),r=a.n(n),o=a(2755),l={insert:"head",singleton:!1};r()(o.Z,l);o.Z.locals;const c=(0,a(1900).Z)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{},[a("Head",[a("title",[t._v(t._s("Nia Media - trending "))]),t._v(" "),a("meta",{attrs:{"http-equiv":"X-UA-Compatible",content:"ie=edge"}}),t._v(" "),a("link",{attrs:{rel:"shortcut icon",href:"/images/logo.jpg"}}),t._v(" "),a("link",{attrs:{rel:"stylesheet",href:""}}),t._v(" "),a("meta",{attrs:{name:"”robots”",content:"index, follow"}}),t._v(" "),a("meta",{attrs:{name:"keywords",content:"hot, news, money, riches, trending,  tags,  nia media, latest news,news, logs, articles,news kenya, florentinah hijah, sports news"}}),t._v(" "),a("meta",{attrs:{name:"description",content:" nia media - podcast"}})]),t._v(" "),a("v-row",[a("v-col",[a("div",{staticClass:"display-1"},[t._v("Podcasts")]),t._v(" "),t.videos.length<1?a("div",{staticClass:"title"},[t._v("No Podcasts found")]):t._e()])],1),t._v(" "),a("v-row",t._l(t.videos,(function(e,i){return a("v-col",{key:i,attrs:{cols:"12",lg:"4",sm:"6"}},[a("div",{staticClass:"video-container"},[a("iframe",{staticClass:"rounded-md",attrs:{width:"560",height:"315",src:"https://www.youtube.com/embed/"+e.id.videoId,frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]),t._v(" "),a("div",{staticClass:"text-lg"},[t._v("\n        "+t._s(e.snippet.title)+"\n      ")]),t._v(" "),a("div",{staticClass:"text-sm text-gray-400"},[t._v("\n        "+t._s(t._f("moment")(e.snippet.publishTime,"calendar"))+"\n      ")])])})),1)],1)}),[],!1,null,null,null).exports}}]);