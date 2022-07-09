"use strict";
(self["webpackChunkblog"] = self["webpackChunkblog"] || []).push([["resources_js_Pages_Views_Contact_vue"],{

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Layouts/Navigation.vue?vue&type=style&index=0&id=706ae5e3&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Layouts/Navigation.vue?vue&type=style&index=0&id=706ae5e3&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_images_bg_7_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../public/images/bg-7.jpg */ "./public/images/bg-7.jpg");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_images_bg_7_jpg__WEBPACK_IMPORTED_MODULE_2__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.image[data-v-706ae5e3] {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./public/images/bg-7.jpg":
/*!********************************!*\
  !*** ./public/images/bg-7.jpg ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/bg-7.jpg?b9b5f30bc68276636761e0785d52c234");

/***/ }),

/***/ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Layouts/Navigation.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Layouts/Navigation.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {},
  props: ["title", "shared", "filter"],
  data: function data() {
    return {
      drawer: false,
      dialog: false,
      search: this.filter,
      icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
      socialLinks: [{
        icon: "mdi-facebook",
        link: "https://www.facebook.com/Flojournalism.diaries/"
      }, {
        icon: "mdi-twitter",
        link: "https://twitter.com/FlorentinahHiza?t=5YiEpFJawlc7bPQY5quE6A&s=08"
      }, {
        icon: "mdi-linkedin",
        link: "https://www.linkedin.com/in/florentinah-hiza-a45ba8109"
      }, {
        icon: "mdi-youtube",
        link: "https://youtube.com/channel/UCk0IYz5ANiia2xQahL0Dgmg"
      }]
    };
  },
  watch: {
    search: lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(function (value) {
      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__.Inertia.get("/", {
        search: value
      }, {
        replace: true,
        preserveScroll: true
      });
    }, 500)
  }
});

/***/ }),

/***/ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Views/Contact.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Views/Contact.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _Layouts_Navigation_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Layouts/Navigation.vue */ "./resources/js/Pages/Layouts/Navigation.vue");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  layout: _Layouts_Navigation_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
  props: {
    errors: {
      required: false,
      type: Object
    }
  },
  data: function data() {
    return {
      loading: false,
      contactItems: [{
        name: "Call Anytime",
        number: "2547 2890 6584",
        image: "/images/contact.png"
      }, {
        name: "Write Email",
        number: "niameditech@gmail.com",
        image: "/images/mail.png"
      }, {
        name: "Visit Us",
        number: "Nairobi Kenya",
        image: "/images/location.png"
      }],
      contact: {
        name: null,
        email: null,
        subject: null,
        message: null,
        phone: null
      }
    };
  },
  methods: {
    submit: function submit() {
      var _this = this;

      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__.Inertia.post("/contact", this.contact, {
        preserveScroll: true,
        preserveState: true,
        onStart: function onStart() {
          _this.loading === true;
        },
        onFinish: function onFinish() {
          _this.loading === false;
        }
      });
    }
  },
  components: {
    Navigation: _Layouts_Navigation_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Layouts/Navigation.vue?vue&type=template&id=706ae5e3&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Layouts/Navigation.vue?vue&type=template&id=706ae5e3&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
/* harmony import */ var vuetify_lib_components_VApp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuetify/lib/components/VApp */ "./node_modules/vuetify/lib/components/VApp/VApp.js");
/* harmony import */ var vuetify_lib_components_VAppBar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuetify/lib/components/VAppBar */ "./node_modules/vuetify/lib/components/VAppBar/VAppBar.js");
/* harmony import */ var vuetify_lib_components_VAppBar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! vuetify/lib/components/VAppBar */ "./node_modules/vuetify/lib/components/VAppBar/VAppBarNavIcon.js");
/* harmony import */ var vuetify_lib_components_VAvatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VAvatar */ "./node_modules/vuetify/lib/components/VAvatar/VAvatar.js");
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/VBtn.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/VCard.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VCol.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VContainer.js");
/* harmony import */ var vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! vuetify/lib/components/VDialog */ "./node_modules/vuetify/lib/components/VDialog/VDialog.js");
/* harmony import */ var vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VDivider */ "./node_modules/vuetify/lib/components/VDivider/VDivider.js");
/* harmony import */ var vuetify_lib_components_VFooter__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! vuetify/lib/components/VFooter */ "./node_modules/vuetify/lib/components/VFooter/VFooter.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/VIcon.js");
/* harmony import */ var vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VImg */ "./node_modules/vuetify/lib/components/VImg/VImg.js");
/* harmony import */ var vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuetify/lib/components/VList */ "./node_modules/vuetify/lib/components/VList/VList.js");
/* harmony import */ var vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VList */ "./node_modules/vuetify/lib/components/VList/VListGroup.js");
/* harmony import */ var vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuetify/lib/components/VList */ "./node_modules/vuetify/lib/components/VList/VListItem.js");
/* harmony import */ var vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VList */ "./node_modules/vuetify/lib/components/VList/VListItemAvatar.js");
/* harmony import */ var vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VList */ "./node_modules/vuetify/lib/components/VList/index.js");
/* harmony import */ var vuetify_lib_components_VMain__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! vuetify/lib/components/VMain */ "./node_modules/vuetify/lib/components/VMain/VMain.js");
/* harmony import */ var vuetify_lib_components_VMenu__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! vuetify/lib/components/VMenu */ "./node_modules/vuetify/lib/components/VMenu/VMenu.js");
/* harmony import */ var vuetify_lib_components_VNavigationDrawer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuetify/lib/components/VNavigationDrawer */ "./node_modules/vuetify/lib/components/VNavigationDrawer/VNavigationDrawer.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VRow.js");
/* harmony import */ var vuetify_lib_components_VSubheader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VSubheader */ "./node_modules/vuetify/lib/components/VSubheader/VSubheader.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/VTextField.js");
/* harmony import */ var vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! vuetify/lib/components/VToolbar */ "./node_modules/vuetify/lib/components/VToolbar/index.js");





























var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c(vuetify_lib_components_VApp__WEBPACK_IMPORTED_MODULE_0__["default"], [_c(vuetify_lib_components_VNavigationDrawer__WEBPACK_IMPORTED_MODULE_1__["default"], {
    attrs: {
      app: "",
      color: "drawer",
      temporary: "",
      hidden: _vm.$vuetify.breakpoint.smAndUp
    },
    model: {
      value: _vm.drawer,
      callback: function callback($$v) {
        _vm.drawer = $$v;
      },
      expression: "drawer"
    }
  }, [_c(vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_2__["default"], [_c(vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_3__["default"], {}, [_c(vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_4__["default"], [_c(vuetify_lib_components_VAvatar__WEBPACK_IMPORTED_MODULE_5__["default"], [_c(vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_6__["default"], {
    attrs: {
      src: "/images/logo.jpg"
    }
  })], 1)], 1), _vm._v(" "), _c(vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_7__.VListItemContent, [_c(vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_7__.VListItemTitle, [_c("span", {
    staticClass: "white--text font-semibold text-xl"
  }, [_vm._v(" Nia Media ")])])], 1)], 1), _vm._v(" "), _c("div", {
    staticClass: "px-2 pb-4 grid space-y-2"
  }, [!_vm.shared.user.auth ? _c("Link", {
    staticClass: "no-underline",
    attrs: {
      href: "/auth/register"
    }
  }, [_c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_8__["default"], {
    staticClass: "no-underlne",
    attrs: {
      small: "",
      elevation: "",
      outlined: "",
      rounded: "",
      color: "white",
      block: ""
    }
  }, [_c("span", {
    staticClass: "no-underline"
  }, [_vm._v("sign up")])])], 1) : _vm._e(), _vm._v(" "), !_vm.shared.user.auth ? _c("Link", {
    staticClass: "no-underline",
    attrs: {
      href: "/auth/login"
    }
  }, [_c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_8__["default"], {
    staticClass: "no-underlne",
    attrs: {
      small: "",
      elevation: "",
      outlined: "",
      rounded: "",
      color: "white",
      block: ""
    }
  }, [_c("span", {
    staticClass: "no-underline"
  }, [_vm._v("sign in")])])], 1) : _vm._e(), _vm._v(" "), _vm.shared.user.auth ? _c("Link", {
    staticClass: "no-underline",
    attrs: {
      href: "/auth/logout"
    }
  }, [_c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_8__["default"], {
    staticClass: "no-underlne",
    attrs: {
      small: "",
      elevation: "",
      outlined: "",
      rounded: "",
      color: "white",
      block: ""
    }
  }, [_c("span", {
    staticClass: "no-underline"
  }, [_vm._v("logout")])])], 1) : _vm._e(), _vm._v(" "), _vm.shared.user.auth ? _c("Link", {
    staticClass: "no-underline",
    attrs: {
      href: "/user/my-profile"
    }
  }, [_c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_8__["default"], {
    staticClass: "no-underlne",
    attrs: {
      small: "",
      elevation: "",
      outlined: "",
      rounded: "",
      color: "white",
      block: ""
    }
  }, [_c("span", {
    staticClass: "no-underline"
  }, [_vm._v("my account")])])], 1) : _vm._e(), _vm._v(" "), _c("Link", {
    staticClass: "no-underline",
    attrs: {
      href: "/contact"
    }
  }, [_c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_8__["default"], {
    staticClass: "no-underlne",
    attrs: {
      small: "",
      elevation: "",
      outlined: "",
      rounded: "",
      color: "white",
      block: ""
    }
  }, [_c("span", {
    staticClass: "no-underline"
  }, [_vm._v("contact us")])])], 1), _vm._v(" "), _c("Link", {
    staticClass: "no-underline",
    attrs: {
      href: "/tv"
    }
  }, [_c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_8__["default"], {
    staticClass: "no-underlne",
    attrs: {
      small: "",
      elevation: "",
      outlined: "",
      rounded: "",
      color: "white",
      block: ""
    }
  }, [_c("span", {
    staticClass: "no-underline"
  }, [_vm._v("Podcast")])])], 1)], 1), _vm._v(" "), _c(vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_9__["default"], {
    staticClass: "white mb-10"
  }), _vm._v(" "), _c(vuetify_lib_components_VSubheader__WEBPACK_IMPORTED_MODULE_10__["default"], [_c("span", {
    staticClass: "text-white text-lg font-semibold"
  }, [_vm._v("Tags")])]), _vm._v(" "), _vm._l(_vm.shared.tags, function (tag, index) {
    return _c("div", {
      key: index
    }, [_c(vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_3__["default"], [_c(vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_7__.VListItemContent, [_c("Link", {
      staticClass: "no-underline",
      attrs: {
        href: "/tag/".concat(tag.slug)
      }
    }, [_c(vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_7__.VListItemTitle, {
      staticClass: "grey--text text--lighten-4",
      domProps: {
        textContent: _vm._s(tag.name)
      }
    })], 1)], 1)], 1), _vm._v(" "), _c(vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_9__["default"], {})], 1);
  }), _vm._v(" "), _c(vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_11__["default"], {
    staticClass: "white--text",
    attrs: {
      color: "white",
      "no-action": "",
      "sub-group": ""
    },
    scopedSlots: _vm._u([{
      key: "activator",
      fn: function fn() {
        return [_c(vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_7__.VListItemContent, [_c(vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_7__.VListItemTitle, {
          domProps: {
            textContent: _vm._s("Others")
          }
        })], 1)];
      },
      proxy: true
    }])
  }, [_vm._v(" "), _vm._l(_vm.shared.otherTags, function (tag, index) {
    return _c("div", {
      key: index,
      attrs: {
        "active-class": ""
      }
    }, [_c(vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_3__["default"], [_c(vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_7__.VListItemContent, [_c("Link", {
      staticClass: "text-white no-underline",
      attrs: {
        href: "/tag/".concat(tag.slug)
      }
    }, [_c(vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_7__.VListItemTitle, [_c("span", {
      staticClass: "text-white",
      domProps: {
        textContent: _vm._s(tag.name)
      }
    })])], 1)], 1)], 1)], 1);
  })], 2)], 2)], 1), _vm._v(" "), _c(vuetify_lib_components_VAppBar__WEBPACK_IMPORTED_MODULE_12__["default"], {
    attrs: {
      app: "",
      color: "nav",
      flat: "",
      "hide-on-scroll": _vm.$vuetify.breakpoint.mdAndUp,
      dense: "",
      height: _vm.$vuetify.breakpoint.mdAndUp ? 80 : ""
    }
  }, [_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_13__["default"], {
    staticClass: "pa-0 fill-height"
  }, [_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_14__["default"], [_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_15__["default"], [_vm.$vuetify.breakpoint.smAndDown ? _c("div", {
    staticClass: "flex justify-between"
  }, [_c(vuetify_lib_components_VAppBar__WEBPACK_IMPORTED_MODULE_16__["default"], {
    staticClass: "white--text",
    on: {
      click: function click($event) {
        _vm.drawer = !_vm.drawer;
      }
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_17__.VToolbarTitle, [_c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_8__["default"], {
    staticClass: "white--text",
    attrs: {
      elevation: "",
      depressed: "",
      color: "transparent"
    }
  }, [_vm._v("nia media")])], 1), _vm._v(" "), _c("div", [_c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_8__["default"], {
    attrs: {
      elevation: "",
      icon: "",
      color: ""
    },
    on: {
      click: function click($event) {
        _vm.dialog = !_vm.dialog;
      }
    }
  }, [_c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_18__["default"], {
    attrs: {
      color: "white"
    }
  }, [_vm._v("mdi-magnify")])], 1), _vm._v(" "), _vm.$page.url !== "/" ? _c("Link", {
    attrs: {
      href: "/"
    }
  }, [_c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_8__["default"], {
    attrs: {
      icon: "",
      elevation: "",
      color: ""
    }
  }, [_c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_18__["default"], {
    attrs: {
      color: "white"
    }
  }, [_vm._v("mdi-home")])], 1)], 1) : _vm._e()], 1)], 1) : _vm._e(), _vm._v(" "), _vm.$vuetify.breakpoint.mdAndUp ? _c("div", {
    staticClass: "flex justify-between"
  }, [_c("div", {
    staticClass: "inline-flex white--text"
  }, [_c(vuetify_lib_components_VAvatar__WEBPACK_IMPORTED_MODULE_5__["default"], [_c("img", {
    attrs: {
      src: "/images/logo.jpg",
      alt: ""
    }
  })]), _vm._v(" "), _c(vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_9__["default"], {
    staticClass: "white mx-3",
    attrs: {
      vertical: ""
    }
  }), _vm._v(" "), _vm.$vuetify.breakpoint.mdAndUp ? _c("div", {
    staticClass: "flex space-x-4 justify-end mt-3"
  }, [_vm._l(_vm.shared.tags, function (tag, index) {
    return _c("Link", {
      key: index,
      staticClass: "capitalize grey--text no-underline",
      attrs: {
        href: "/tag/".concat(tag.slug)
      }
    }, [_c("span", {
      staticClass: "text-white",
      domProps: {
        textContent: _vm._s(tag.name)
      }
    })]);
  }), _vm._v(" "), _c("Link", {
    staticClass: "capitalize grey--text no-underline",
    attrs: {
      href: "/tv"
    }
  }, [_c("span", {
    staticClass: "text-white"
  }, [_vm._v("Podcast ")])]), _vm._v(" "), _c("div", [_c(vuetify_lib_components_VMenu__WEBPACK_IMPORTED_MODULE_19__["default"], {
    staticClass: "capitalize white--text",
    attrs: {
      "open-on-hover": "",
      top: "",
      "offset-y": ""
    },
    scopedSlots: _vm._u([{
      key: "activator",
      fn: function fn(_ref) {
        var on = _ref.on,
            attrs = _ref.attrs;
        return [_c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_8__["default"], _vm._g(_vm._b({
          staticClass: "capitalize white--text",
          attrs: {
            depressed: "",
            color: "transparent"
          }
        }, "v-btn", attrs, false), on), [_c("span", [_vm._v("others")]), _vm._v(" "), _c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_18__["default"], {
          attrs: {
            color: ""
          }
        }, [_vm._v("mdi-menu-down")])], 1)];
      }
    }], null, false, 2172999707)
  }, [_vm._v(" "), _c(vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_2__["default"], {
    attrs: {
      color: "nav"
    }
  }, _vm._l(_vm.shared.otherTags, function (item, index) {
    return _c(vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: index
    }, [_c("Link", {
      staticClass: "no-underline text-white",
      attrs: {
        href: "/tag/".concat(item.slug)
      }
    }, [_c(vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_7__.VListItemTitle, [_c("span", {
      staticClass: "no-underline text-white",
      domProps: {
        textContent: _vm._s(item.name)
      }
    })])], 1)], 1);
  }), 1)], 1)], 1)], 2) : _vm._e()], 1), _vm._v(" "), _vm.$vuetify.breakpoint.mdAndUp ? _c("div", {
    staticClass: "inline-flex justify-end"
  }, [_c("div", [_c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_8__["default"], {
    attrs: {
      elevation: "",
      icon: "",
      color: ""
    },
    on: {
      click: function click($event) {
        _vm.dialog = !_vm.dialog;
      }
    }
  }, [_c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_18__["default"], {
    attrs: {
      color: "white"
    }
  }, [_vm._v("mdi-magnify")])], 1)], 1), _vm._v(" "), _vm.$page.url !== "/" ? _c("Link", {
    attrs: {
      href: "/"
    }
  }, [_c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_8__["default"], {
    attrs: {
      elevation: "",
      icon: "",
      color: ""
    }
  }, [_c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_18__["default"], {
    attrs: {
      color: "white"
    }
  }, [_vm._v("mdi-home")])], 1)], 1) : _vm._e(), _vm._v(" "), _vm.shared.user.auth ? _c("Link", {
    attrs: {
      href: "/user/my-profile"
    }
  }, [_c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_8__["default"], {
    attrs: {
      elevation: "",
      icon: "",
      color: ""
    }
  }, [_c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_18__["default"], {
    attrs: {
      color: "white"
    }
  }, [_vm._v("mdi-account")])], 1)], 1) : _vm._e(), _vm._v(" "), _c("Link", {
    attrs: {
      href: "/contact"
    }
  }, [_c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_8__["default"], {
    attrs: {
      elevation: "",
      icon: "",
      color: ""
    }
  }, [_c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_18__["default"], {
    attrs: {
      color: "white"
    }
  }, [_vm._v("mdi-phone")])], 1)], 1), _vm._v(" "), !_vm.shared.user.auth ? _c("Link", {
    staticClass: "no-underline text-white mr-3 mt-3",
    attrs: {
      href: "/auth/register"
    }
  }, [_c("span", {
    staticClass: "text-white"
  }, [_vm._v(" Sign Up")])]) : _vm._e(), _vm._v(" "), !_vm.shared.user.auth ? _c("Link", {
    staticClass: "no-underline text-white mt-3",
    attrs: {
      href: "/auth/login"
    }
  }, [_c("span", {
    staticClass: "text-white"
  }, [_vm._v("Log In")])]) : _vm._e(), _vm._v(" "), _vm.shared.user.auth ? _c("Link", {
    attrs: {
      href: "/auth/logout"
    }
  }, [_c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_8__["default"], {
    attrs: {
      icon: ""
    }
  }, [_c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_18__["default"], {
    attrs: {
      color: "white"
    }
  }, [_vm._v("mdi-logout")])], 1)], 1) : _vm._e()], 1) : _vm._e()]) : _vm._e()])], 1)], 1)], 1), _vm._v(" "), _c(vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_20__["default"], {
    attrs: {
      "max-width": "400"
    },
    model: {
      value: _vm.dialog,
      callback: function callback($$v) {
        _vm.dialog = $$v;
      },
      expression: "dialog"
    }
  }, [_c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_21__["default"], {}, [_c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_22__.VCardTitle, [_vm._v(" Search ")]), _vm._v(" "), _c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_22__.VCardText, [_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_23__["default"], {
    attrs: {
      placeholder: "Search...",
      outlined: "",
      dense: ""
    },
    model: {
      value: _vm.search,
      callback: function callback($$v) {
        _vm.search = $$v;
      },
      expression: "search"
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "flex justify-end"
  }, [_c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_8__["default"], {
    attrs: {
      small: "",
      elevation: "",
      outlined: "",
      color: "error"
    },
    on: {
      click: function click($event) {
        _vm.dialog = false;
      }
    }
  }, [_vm._v("cancel")])], 1)], 1)], 1)], 1), _vm._v(" "), _c(vuetify_lib_components_VMain__WEBPACK_IMPORTED_MODULE_24__["default"], {
    staticClass: "background pb-6"
  }, [_vm.filter ? _c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_13__["default"], {}, [_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_14__["default"], [_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_15__["default"], [_c("div", {
    staticClass: "title"
  }, [_vm._v("Search results for " + _vm._s(_vm.filter))])])], 1)], 1) : _vm._e(), _vm._v(" "), _vm._t("default")], 2), _vm._v(" "), _c(vuetify_lib_components_VFooter__WEBPACK_IMPORTED_MODULE_25__["default"], {
    attrs: {
      dark: "",
      padless: ""
    }
  }, [_c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_21__["default"], {
    staticClass: "image indigo lighten-1 white--text text-center",
    attrs: {
      flat: "",
      tile: "",
      width: "100%",
      "max-width": "100%"
    }
  }, [_c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_22__.VCardText, _vm._l(_vm.socialLinks, function (social, index) {
    return _c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_8__["default"], {
      key: index,
      staticClass: "mx-4 white--text",
      attrs: {
        href: social.link,
        icon: ""
      }
    }, [_c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_18__["default"], {
      attrs: {
        size: "24px"
      }
    }, [_vm._v("\n            " + _vm._s(social.icon) + "\n          ")])], 1);
  }), 1), _vm._v(" "), _c(vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_9__["default"]), _vm._v(" "), _c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_22__.VCardText, {
    staticClass: "white--text"
  }, [_vm._v("\n        " + _vm._s(new Date().getFullYear()) + " — "), _c("strong", [_vm._v("Nia Media")])])], 1)], 1)], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Views/Contact.vue?vue&type=template&id=16b17f06&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Views/Contact.vue?vue&type=template&id=16b17f06& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
/* harmony import */ var vuetify_lib_components_VAvatar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VAvatar */ "./node_modules/vuetify/lib/components/VAvatar/VAvatar.js");
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/VBtn.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/VCard.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VCol.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VContainer.js");
/* harmony import */ var vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VDivider */ "./node_modules/vuetify/lib/components/VDivider/VDivider.js");
/* harmony import */ var vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VForm */ "./node_modules/vuetify/lib/components/VForm/VForm.js");
/* harmony import */ var vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuetify/lib/components/VImg */ "./node_modules/vuetify/lib/components/VImg/VImg.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VRow.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/VTextField.js");
/* harmony import */ var vuetify_lib_components_VTextarea__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VTextarea */ "./node_modules/vuetify/lib/components/VTextarea/VTextarea.js");














var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", [_c("Head", [_c("title", [_vm._v(_vm._s("Nia Media - trending "))]), _vm._v(" "), _c("meta", {
    attrs: {
      "http-equiv": "X-UA-Compatible",
      content: "ie=edge"
    }
  }), _vm._v(" "), _c("link", {
    attrs: {
      rel: "shortcut icon",
      href: "/images/logo.jpg"
    }
  }), _vm._v(" "), _c("link", {
    attrs: {
      rel: "stylesheet",
      href: ""
    }
  }), _vm._v(" "), _c("meta", {
    attrs: {
      name: "”robots”",
      content: "index, follow"
    }
  }), _vm._v(" "), _c("meta", {
    attrs: {
      name: "keywords",
      content: "hot, news, money, riches, trending,  tags,  nia media, latest news,news, logs, articles,news kenya, florentinah hijah, sports news"
    }
  }), _vm._v(" "), _c("meta", {
    attrs: {
      name: "description",
      content: " nia media - contact"
    }
  })]), _vm._v(" "), _c("div", [_c(vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_0__["default"], {
    attrs: {
      src: "/images/about2.png",
      "max-height": "250"
    }
  }, [_c("div", {
    staticClass: "text-5xl font-bold text-center white--text mt-[100px]"
  }, [_vm._v("\n        Contact Us\n      ")])])], 1), _vm._v(" "), _c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_1__["default"], {}, [_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    attrs: {
      dense: ""
    }
  }, [_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_3__["default"], [_c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__["default"], [_c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__.VCardTitle, {
    staticClass: "pb-8"
  }, [_c("div", {
    staticClass: "text-3xl font-bold"
  }, [_vm._v("Ask for your query")])]), _vm._v(" "), _c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__.VCardText, [_c("div", {
    staticClass: "grid text-lg"
  }, _vm._l(_vm.contactItems, function (contact, index) {
    return _c("div", {
      key: index,
      staticClass: "grid"
    }, [_c("div", {
      staticClass: "flex space-x-3"
    }, [_c("div", [_c(vuetify_lib_components_VAvatar__WEBPACK_IMPORTED_MODULE_6__["default"], [_c("img", {
      attrs: {
        src: contact.image,
        alt: ""
      }
    })])], 1), _vm._v(" "), _c("div", {
      staticClass: "grid"
    }, [_c("div", {
      staticClass: "font-bold",
      domProps: {
        textContent: _vm._s(contact.name)
      }
    }), _vm._v(" "), _c("div", {
      staticClass: "font-light text-lg",
      domProps: {
        textContent: _vm._s(contact.number)
      }
    })])]), _vm._v(" "), index + 1 != _vm.contactItems.length ? _c(vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_7__["default"], {
      staticClass: "my-4"
    }) : _vm._e()], 1);
  }), 0)])], 1)], 1), _vm._v(" "), _c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    attrs: {
      cols: "12",
      sm: "6"
    }
  }, [_c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
    attrs: {
      flat: "",
      outlined: "",
      "max-width": "500",
      color: "mx-auto background2"
    }
  }, [_c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__.VCardText, [_c(vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_8__["default"], [_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_1__["default"], {}, [_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    attrs: {
      "no-gutters": ""
    }
  }, [_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    attrs: {
      cols: "12"
    }
  }, [_c("div", {
    staticClass: "py-4"
  }, [_c("span", [_vm._v(" Get in Touch with us ")])])]), _vm._v(" "), _c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    attrs: {
      cols: "12"
    }
  }, [_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["default"], {
    attrs: {
      color: "blue ",
      placeholder: "Your Name",
      outlined: "",
      flat: "",
      "error-messages": _vm.errors.name
    },
    model: {
      value: _vm.contact.name,
      callback: function callback($$v) {
        _vm.$set(_vm.contact, "name", $$v);
      },
      expression: "contact.name"
    }
  })], 1), _vm._v(" "), _c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    attrs: {
      cols: "12"
    }
  }, [_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["default"], {
    attrs: {
      color: "blue ",
      placeholder: "Your Email",
      outlined: "",
      flat: "",
      "error-messages": _vm.errors.email
    },
    model: {
      value: _vm.contact.email,
      callback: function callback($$v) {
        _vm.$set(_vm.contact, "email", $$v);
      },
      expression: "contact.email"
    }
  })], 1), _vm._v(" "), _c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    attrs: {
      cols: "12"
    }
  }, [_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["default"], {
    attrs: {
      color: "blue ",
      placeholder: "Phone Number",
      outlined: "",
      flat: "",
      "error-messages": _vm.errors.phone
    },
    model: {
      value: _vm.contact.phone,
      callback: function callback($$v) {
        _vm.$set(_vm.contact, "phone", $$v);
      },
      expression: "contact.phone"
    }
  })], 1), _vm._v(" "), _c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    attrs: {
      cols: "12"
    }
  }, [_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["default"], {
    attrs: {
      color: "blue ",
      placeholder: "Subject",
      outlined: "",
      "error-messages": _vm.errors.subject,
      flat: ""
    },
    model: {
      value: _vm.contact.subject,
      callback: function callback($$v) {
        _vm.$set(_vm.contact, "subject", $$v);
      },
      expression: "contact.subject"
    }
  })], 1), _vm._v(" "), _c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    attrs: {
      cols: "12"
    }
  }, [_c(vuetify_lib_components_VTextarea__WEBPACK_IMPORTED_MODULE_10__["default"], {
    attrs: {
      color: "blue ",
      placeholder: "Write Message",
      outlined: "",
      "error-messages": _vm.errors.message,
      flat: ""
    },
    model: {
      value: _vm.contact.message,
      callback: function callback($$v) {
        _vm.$set(_vm.contact, "message", $$v);
      },
      expression: "contact.message"
    }
  })], 1)], 1), _vm._v(" "), _c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_2__["default"], [_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    attrs: {
      cols: "12"
    }
  }, [_c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_11__["default"], {
    staticClass: "wait--text subtitle",
    attrs: {
      large: "",
      elevation: "",
      disabled: _vm.loading,
      color: "secondary"
    },
    on: {
      click: _vm.submit
    }
  }, [_vm._v("Send a message")])], 1)], 1)], 1)], 1)], 1)], 1)], 1)], 1)], 1)], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Layouts/Navigation.vue?vue&type=style&index=0&id=706ae5e3&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Layouts/Navigation.vue?vue&type=style&index=0&id=706ae5e3&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_id_706ae5e3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Navigation.vue?vue&type=style&index=0&id=706ae5e3&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Layouts/Navigation.vue?vue&type=style&index=0&id=706ae5e3&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_id_706ae5e3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_id_706ae5e3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/Pages/Layouts/Navigation.vue":
/*!***************************************************!*\
  !*** ./resources/js/Pages/Layouts/Navigation.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Navigation_vue_vue_type_template_id_706ae5e3_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Navigation.vue?vue&type=template&id=706ae5e3&scoped=true& */ "./resources/js/Pages/Layouts/Navigation.vue?vue&type=template&id=706ae5e3&scoped=true&");
/* harmony import */ var _Navigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navigation.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Layouts/Navigation.vue?vue&type=script&lang=js&");
/* harmony import */ var _Navigation_vue_vue_type_style_index_0_id_706ae5e3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Navigation.vue?vue&type=style&index=0&id=706ae5e3&scoped=true&lang=css& */ "./resources/js/Pages/Layouts/Navigation.vue?vue&type=style&index=0&id=706ae5e3&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Navigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Navigation_vue_vue_type_template_id_706ae5e3_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Navigation_vue_vue_type_template_id_706ae5e3_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "706ae5e3",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Layouts/Navigation.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Views/Contact.vue":
/*!**********************************************!*\
  !*** ./resources/js/Pages/Views/Contact.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Contact_vue_vue_type_template_id_16b17f06___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Contact.vue?vue&type=template&id=16b17f06& */ "./resources/js/Pages/Views/Contact.vue?vue&type=template&id=16b17f06&");
/* harmony import */ var _Contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Contact.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Views/Contact.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Contact_vue_vue_type_template_id_16b17f06___WEBPACK_IMPORTED_MODULE_0__.render,
  _Contact_vue_vue_type_template_id_16b17f06___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Views/Contact.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Layouts/Navigation.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/Pages/Layouts/Navigation.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Navigation.vue?vue&type=script&lang=js& */ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Layouts/Navigation.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Views/Contact.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/Pages/Views/Contact.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Contact.vue?vue&type=script&lang=js& */ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Views/Contact.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Layouts/Navigation.vue?vue&type=template&id=706ae5e3&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/Pages/Layouts/Navigation.vue?vue&type=template&id=706ae5e3&scoped=true& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_template_id_706ae5e3_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_template_id_706ae5e3_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_template_id_706ae5e3_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Navigation.vue?vue&type=template&id=706ae5e3&scoped=true& */ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Layouts/Navigation.vue?vue&type=template&id=706ae5e3&scoped=true&");


/***/ }),

/***/ "./resources/js/Pages/Views/Contact.vue?vue&type=template&id=16b17f06&":
/*!*****************************************************************************!*\
  !*** ./resources/js/Pages/Views/Contact.vue?vue&type=template&id=16b17f06& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_template_id_16b17f06___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_template_id_16b17f06___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_template_id_16b17f06___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Contact.vue?vue&type=template&id=16b17f06& */ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Views/Contact.vue?vue&type=template&id=16b17f06&");


/***/ }),

/***/ "./resources/js/Pages/Layouts/Navigation.vue?vue&type=style&index=0&id=706ae5e3&scoped=true&lang=css&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/Pages/Layouts/Navigation.vue?vue&type=style&index=0&id=706ae5e3&scoped=true&lang=css& ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_id_706ae5e3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Navigation.vue?vue&type=style&index=0&id=706ae5e3&scoped=true&lang=css& */ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Layouts/Navigation.vue?vue&type=style&index=0&id=706ae5e3&scoped=true&lang=css&");


/***/ })

}]);