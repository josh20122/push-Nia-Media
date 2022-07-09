"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[679,81,632],{2145:(t,e,n)=>{n.d(e,{Z:()=>d});var a=n(3645),i=n.n(a),s=n(1667),r=n.n(s),o=n(8997),l=i()((function(t){return t[1]})),c=r()(o.Z);l.push([t.id,".image[data-v-1a123159]{background-image:url("+c+")}",""]);const d=l},8997:(t,e,n)=>{n.d(e,{Z:()=>a});const a="/images/bg-7.jpg?b9b5f30bc68276636761e0785d52c234"},4081:(t,e,n)=>{n.r(e),n.d(e,{default:()=>i});const a={props:["blogs","title"]};const i=(0,n(1900).Z)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",[t.title?n("v-col",{attrs:{cols:"12"}},[n("div",{staticClass:"title",domProps:{textContent:t._s(t.title)}})]):t._e(),t._v(" "),t._l(t.blogs,(function(e,a){return n("v-col",{key:a,attrs:{cols:"12",sm:"6",md:t.title?6:4,lg:t.title?4:3}},[n("v-card",[n("v-img",{attrs:{src:e.thumbnail.path,height:(t.$vuetify.breakpoint.mdAndUp,200)},scopedSlots:t._u([{key:"placeholder",fn:function(){return[n("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[n("v-progress-circular",{attrs:{indeterminate:"",color:"orange lighten-1"}})],1)]},proxy:!0}],null,!0)},[n("div",{staticClass:"absolute bottom-2 left-2"})]),t._v(" "),n("v-card-text",{},[n("div",{staticClass:"grid space-y-2"},[e.tags?n("div",{staticClass:"inline-flex gap-x-3"},[n("div",{staticClass:"inline-flex gap-x-2 flex-wrap"},t._l(e.tags,(function(e,a){return n("Link",{key:a,staticClass:"no-underline",attrs:{href:"/tag/"+e.slug}},[n("v-btn",{attrs:{"x-small":"",rounded:"",outlined:"",elevation:"",color:"green"}},[n("span",{staticClass:"no-underline",domProps:{textContent:t._s("#"+e.name)}})])],1)})),1)]):t._e(),t._v(" "),n("Link",{staticClass:"no-underline",attrs:{href:"/blog/"+e.slug}},[n("div",{staticClass:"line-clamp-2 no-underline text-gray-900",domProps:{textContent:t._s(e.title)}})]),t._v(" "),n("div",{staticClass:"text-xs"},[t._v("\n            "+t._s(t._f("moment")(e.created_at,"calendar"))+"\n          ")])],1)])],1)],1)}))],2)}),[],!1,null,null,null).exports},4632:(t,e,n)=>{n.r(e),n.d(e,{default:()=>v});var a=n(3279),i=n.n(a),s=n(9680);const r={props:["title","shared","filter"],data:function(){return{drawer:!1,dialog:!1,search:this.filter,icons:["mdi-facebook","mdi-twitter","mdi-linkedin","mdi-instagram"],socialLinks:[{icon:"mdi-facebook",link:"https://www.facebook.com/Flojournalism.diaries/"},{icon:"mdi-twitter",link:"https://twitter.com/FlorentinahHiza?t=5YiEpFJawlc7bPQY5quE6A&s=08"},{icon:"mdi-linkedin",link:"https://www.linkedin.com/in/florentinah-hiza-a45ba8109"},{icon:"mdi-youtube",link:"https://youtube.com/channel/UCk0IYz5ANiia2xQahL0Dgmg"}]}},watch:{search:i()((function(t){s.Inertia.get("/",{search:t},{replace:!0,preserveScroll:!0})}),500)}};var o=n(3379),l=n.n(o),c=n(2145),d={insert:"head",singleton:!1};l()(c.Z,d);c.Z.locals;const v=(0,n(1900).Z)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-navigation-drawer",{attrs:{app:"",color:"drawer",temporary:"",hidden:t.$vuetify.breakpoint.smAndUp},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",[n("v-list-item",{},[n("v-list-item-avatar",[n("v-avatar",[n("v-img",{attrs:{src:"/images/logo.jpg"}})],1)],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[n("span",{staticClass:"white--text font-semibold text-xl"},[t._v(" Nia Media ")])])],1)],1),t._v(" "),n("div",{staticClass:"px-2 pb-4 grid space-y-2"},[t.shared.user.auth?t._e():n("Link",{staticClass:"no-underline",attrs:{href:"/auth/register"}},[n("v-btn",{staticClass:"no-underlne",attrs:{small:"",elevation:"",outlined:"",rounded:"",color:"white",block:""}},[n("span",{staticClass:"no-underline"},[t._v("sign up")])])],1),t._v(" "),t.shared.user.auth?t._e():n("Link",{staticClass:"no-underline",attrs:{href:"/auth/login"}},[n("v-btn",{staticClass:"no-underlne",attrs:{small:"",elevation:"",outlined:"",rounded:"",color:"white",block:""}},[n("span",{staticClass:"no-underline"},[t._v("sign in")])])],1),t._v(" "),t.shared.user.auth?n("Link",{staticClass:"no-underline",attrs:{href:"/auth/logout"}},[n("v-btn",{staticClass:"no-underlne",attrs:{small:"",elevation:"",outlined:"",rounded:"",color:"white",block:""}},[n("span",{staticClass:"no-underline"},[t._v("logout")])])],1):t._e(),t._v(" "),t.shared.user.auth?n("Link",{staticClass:"no-underline",attrs:{href:"/user/my-profile"}},[n("v-btn",{staticClass:"no-underlne",attrs:{small:"",elevation:"",outlined:"",rounded:"",color:"white",block:""}},[n("span",{staticClass:"no-underline"},[t._v("my account")])])],1):t._e(),t._v(" "),n("Link",{staticClass:"no-underline",attrs:{href:"/contact"}},[n("v-btn",{staticClass:"no-underlne",attrs:{small:"",elevation:"",outlined:"",rounded:"",color:"white",block:""}},[n("span",{staticClass:"no-underline"},[t._v("contact us")])])],1),t._v(" "),n("Link",{staticClass:"no-underline",attrs:{href:"/tv"}},[n("v-btn",{staticClass:"no-underlne",attrs:{small:"",elevation:"",outlined:"",rounded:"",color:"white",block:""}},[n("span",{staticClass:"no-underline"},[t._v("Podcast")])])],1)],1),t._v(" "),n("v-divider",{staticClass:"white mb-10"}),t._v(" "),n("v-subheader",[n("span",{staticClass:"text-white text-lg font-semibold"},[t._v("Tags")])]),t._v(" "),t._l(t.shared.tags,(function(e,a){return n("div",{key:a},[n("v-list-item",[n("v-list-item-content",[n("Link",{staticClass:"no-underline",attrs:{href:"/tag/"+e.slug}},[n("v-list-item-title",{staticClass:"grey--text text--lighten-4",domProps:{textContent:t._s(e.name)}})],1)],1)],1),t._v(" "),n("v-divider",{})],1)})),t._v(" "),n("v-list-group",{staticClass:"white--text",attrs:{color:"white","no-action":"","sub-group":""},scopedSlots:t._u([{key:"activator",fn:function(){return[n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:t._s("Others")}})],1)]},proxy:!0}])},[t._v(" "),t._l(t.shared.otherTags,(function(e,a){return n("div",{key:a,attrs:{"active-class":""}},[n("v-list-item",[n("v-list-item-content",[n("Link",{staticClass:"text-white no-underline",attrs:{href:"/tag/"+e.slug}},[n("v-list-item-title",[n("span",{staticClass:"text-white",domProps:{textContent:t._s(e.name)}})])],1)],1)],1)],1)}))],2)],2)],1),t._v(" "),n("v-app-bar",{attrs:{app:"",color:"nav",flat:"","hide-on-scroll":t.$vuetify.breakpoint.mdAndUp,dense:"",height:t.$vuetify.breakpoint.mdAndUp?80:""}},[n("v-container",{staticClass:"pa-0 fill-height"},[n("v-row",[n("v-col",[t.$vuetify.breakpoint.smAndDown?n("div",{staticClass:"flex justify-between"},[n("v-app-bar-nav-icon",{staticClass:"white--text",on:{click:function(e){t.drawer=!t.drawer}}}),t._v(" "),n("v-toolbar-title",[n("v-btn",{staticClass:"white--text",attrs:{elevation:"",depressed:"",color:"transparent"}},[t._v("nia media")])],1),t._v(" "),n("div",[n("v-btn",{attrs:{elevation:"",icon:"",color:""},on:{click:function(e){t.dialog=!t.dialog}}},[n("v-icon",{attrs:{color:"white"}},[t._v("mdi-magnify")])],1),t._v(" "),"/"!==t.$page.url?n("Link",{attrs:{href:"/"}},[n("v-btn",{attrs:{icon:"",elevation:"",color:""}},[n("v-icon",{attrs:{color:"white"}},[t._v("mdi-home")])],1)],1):t._e()],1)],1):t._e(),t._v(" "),t.$vuetify.breakpoint.mdAndUp?n("div",{staticClass:"flex justify-between"},[n("div",{staticClass:"inline-flex white--text"},[n("v-avatar",[n("img",{attrs:{src:"/images/logo.jpg",alt:""}})]),t._v(" "),n("v-divider",{staticClass:"white mx-3",attrs:{vertical:""}}),t._v(" "),t.$vuetify.breakpoint.mdAndUp?n("div",{staticClass:"flex space-x-4 justify-end mt-3"},[t._l(t.shared.tags,(function(e,a){return n("Link",{key:a,staticClass:"capitalize grey--text no-underline",attrs:{href:"/tag/"+e.slug}},[n("span",{staticClass:"text-white",domProps:{textContent:t._s(e.name)}})])})),t._v(" "),n("Link",{staticClass:"capitalize grey--text no-underline",attrs:{href:"/tv"}},[n("span",{staticClass:"text-white"},[t._v("Podcast ")])]),t._v(" "),n("div",[n("v-menu",{staticClass:"capitalize white--text",attrs:{"open-on-hover":"",top:"","offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,i=e.attrs;return[n("v-btn",t._g(t._b({staticClass:"capitalize white--text",attrs:{depressed:"",color:"transparent"}},"v-btn",i,!1),a),[n("span",[t._v("others")]),t._v(" "),n("v-icon",{attrs:{color:""}},[t._v("mdi-menu-down")])],1)]}}],null,!1,2172999707)},[t._v(" "),n("v-list",{attrs:{color:"nav"}},t._l(t.shared.otherTags,(function(e,a){return n("v-list-item",{key:a},[n("Link",{staticClass:"no-underline text-white",attrs:{href:"/tag/"+e.slug}},[n("v-list-item-title",[n("span",{staticClass:"no-underline text-white",domProps:{textContent:t._s(e.name)}})])],1)],1)})),1)],1)],1)],2):t._e()],1),t._v(" "),t.$vuetify.breakpoint.mdAndUp?n("div",{staticClass:"inline-flex justify-end"},[n("div",[n("v-btn",{attrs:{elevation:"",icon:"",color:""},on:{click:function(e){t.dialog=!t.dialog}}},[n("v-icon",{attrs:{color:"white"}},[t._v("mdi-magnify")])],1)],1),t._v(" "),"/"!==t.$page.url?n("Link",{attrs:{href:"/"}},[n("v-btn",{attrs:{elevation:"",icon:"",color:""}},[n("v-icon",{attrs:{color:"white"}},[t._v("mdi-home")])],1)],1):t._e(),t._v(" "),t.shared.user.auth?n("Link",{attrs:{href:"/user/my-profile"}},[n("v-btn",{attrs:{elevation:"",icon:"",color:""}},[n("v-icon",{attrs:{color:"white"}},[t._v("mdi-account")])],1)],1):t._e(),t._v(" "),n("Link",{attrs:{href:"/contact"}},[n("v-btn",{attrs:{elevation:"",icon:"",color:""}},[n("v-icon",{attrs:{color:"white"}},[t._v("mdi-phone")])],1)],1),t._v(" "),t.shared.user.auth?t._e():n("Link",{staticClass:"no-underline text-white mr-3 mt-3",attrs:{href:"/auth/register"}},[n("span",{staticClass:"text-white"},[t._v(" Sign Up")])]),t._v(" "),t.shared.user.auth?t._e():n("Link",{staticClass:"no-underline text-white mt-3",attrs:{href:"/auth/login"}},[n("span",{staticClass:"text-white"},[t._v("Log In")])]),t._v(" "),t.shared.user.auth?n("Link",{attrs:{href:"/auth/logout"}},[n("v-btn",{attrs:{icon:""}},[n("v-icon",{attrs:{color:"white"}},[t._v("mdi-logout")])],1)],1):t._e()],1):t._e()]):t._e()])],1)],1)],1),t._v(" "),n("v-dialog",{attrs:{"max-width":"400"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",{},[n("v-card-title",[t._v(" Search ")]),t._v(" "),n("v-card-text",[n("v-text-field",{attrs:{placeholder:"Search...",outlined:"",dense:""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),t._v(" "),n("div",{staticClass:"flex justify-end"},[n("v-btn",{attrs:{small:"",elevation:"",outlined:"",color:"error"},on:{click:function(e){t.dialog=!1}}},[t._v("cancel")])],1)],1)],1)],1),t._v(" "),n("v-main",{staticClass:"background pb-6"},[t.filter?n("v-container",{},[n("v-row",[n("v-col",[n("div",{staticClass:"title"},[t._v("Search results for "+t._s(t.filter))])])],1)],1):t._e(),t._v(" "),t._t("default")],2),t._v(" "),n("v-footer",{attrs:{dark:"",padless:""}},[n("v-card",{staticClass:"image indigo lighten-1 white--text text-center",attrs:{flat:"",tile:"",width:"100%","max-width":"100%"}},[n("v-card-text",t._l(t.socialLinks,(function(e,a){return n("v-btn",{key:a,staticClass:"mx-4 white--text",attrs:{href:e.link,icon:""}},[n("v-icon",{attrs:{size:"24px"}},[t._v("\n            "+t._s(e.icon)+"\n          ")])],1)})),1),t._v(" "),n("v-divider"),t._v(" "),n("v-card-text",{staticClass:"white--text"},[t._v("\n        "+t._s((new Date).getFullYear())+" — "),n("strong",[t._v("Nia Media")])])],1)],1)],1)}),[],!1,null,"1a123159",null).exports},8679:(t,e,n)=>{n.r(e),n.d(e,{default:()=>u});var a=n(6486),i=n(4632),s=n(4081);function r(t){return function(t){if(Array.isArray(t))return o(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){d(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const v={layout:i.default,props:["blogs"],components:{Navigation:i.default,Card:s.default},data:function(){return{loadedBlogs:this.blogs}},mounted:function(){var t=this;window.addEventListener("scroll",(0,a.debounce)((function(e){document.documentElement.offsetHeight-document.documentElement.scrollTop-window.innerHeight<500&&axios.get(t.loadedBlogs.next_page_url).then((function(e){t.loadedBlogs=c(c({},e.data),{},{data:[].concat(r(t.loadedBlogs.data),r(e.data.data))})}))}),100))}};const u=(0,n(1900).Z)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{},[n("Head",[n("title",[t._v(t._s("Nia Media - trending "))]),t._v(" "),n("meta",{attrs:{"http-equiv":"X-UA-Compatible",content:"ie=edge"}}),t._v(" "),n("link",{attrs:{rel:"shortcut icon",href:"/images/logo.jpg"}}),t._v(" "),n("link",{attrs:{rel:"stylesheet",href:""}}),t._v(" "),n("meta",{attrs:{name:"”robots”",content:"index, follow"}}),t._v(" "),n("meta",{attrs:{name:"keywords",content:"hot, news, money, riches, trending,  tags,  nia media, latest news,news, logs, articles,news kenya, florentinah hijah, sports news"}}),t._v(" "),n("meta",{attrs:{name:"description",content:" nia media - latest hot news and articles"}})]),t._v(" "),n("card",{attrs:{blogs:t.loadedBlogs.data}})],1)}),[],!1,null,null,null).exports}}]);