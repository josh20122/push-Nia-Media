"use strict";
(self["webpackChunkblog"] = self["webpackChunkblog"] || []).push([["resources_js_Pages_Components_Newsletter_vue"],{

/***/ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Components/Newsletter.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Components/Newsletter.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {},
  data: function data() {
    return {
      form: {
        email: '',
        name: ''
      }
    };
  }
});

/***/ }),

/***/ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Components/Newsletter.vue?vue&type=template&id=314a02ce&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Components/Newsletter.vue?vue&type=template&id=314a02ce& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "bg-black pb-10 pt-8 text-white"
  }, [_vm._m(0), _vm._v(" "), _c("div", [_c("form", {
    staticClass: "grid space-y-5",
    attrs: {
      action: ""
    }
  }, [_c("div", {
    staticClass: "grid grid-cols-1 mx-10 space-y-2"
  }, [_c("label", {
    staticClass: "text-md",
    attrs: {
      "for": ""
    }
  }, [_vm._v("Email *")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.email,
      expression: "form.email"
    }],
    staticClass: "py-3 rounded-full placeholder:text-center pl-5 bg-black",
    attrs: {
      type: "text",
      placeholder: "Enter your Email ..."
    },
    domProps: {
      value: _vm.form.email
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.form, "email", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "grid grid-cols-1 mx-10 space-y-2"
  }, [_c("label", {
    staticClass: "text-md",
    attrs: {
      "for": ""
    }
  }, [_vm._v("Name ")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.name,
      expression: "form.name"
    }],
    staticClass: "py-3 rounded-full placeholder:pl-0 placeholder:text-center bg-black pl-5",
    attrs: {
      type: "text",
      placeholder: "Enter your Name ..."
    },
    domProps: {
      value: _vm.form.name
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.form, "name", $event.target.value);
      }
    }
  })]), _vm._v(" "), _vm._m(1), _vm._v(" "), _c("div", {
    staticClass: "grid mx-10 text-center mt-10 overflow-hidden gap-y-2",
    attrs: {
      "preserve-scroll": ""
    }
  }, [_c("Link", {
    staticClass: "text-green-400 hover:underline",
    attrs: {
      href: "/terms"
    }
  }, [_vm._v("Terms and Conditions")]), _vm._v(" "), _c("p", {
    staticClass: "font-medium mx-auto"
  }, [_vm._v("\n                 We've been around since 2011 and have helped thousands of \n                 people just like you. We are registered with the NCR and MFSA.\n                  You are in good, safe hands.\n             ")])], 1)])])]);
};

var staticRenderFns = [function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "text-center"
  }, [_c("p", {
    staticClass: "font-extrabold text-4xl"
  }, [_vm._v("\n            Subscribe to Ollie Group Newsletters\n        ")]), _vm._v(" "), _c("p", {
    staticClass: "text-lg mt-2 mb-4"
  }, [_vm._v("\n            Never miss updates. it's free\n        ")])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "grid mx-auto mt-10 overflow-hidden gap-y-2"
  }, [_c("button", {
    staticClass: "bg-blue-600 py-2 w-24 hover:border-blue-600 hover:border-2 px-4 rounded-full font-bold text-white hover:text-blue-600 hover:bg-white"
  }, [_vm._v("Submit")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/Pages/Components/Newsletter.vue":
/*!******************************************************!*\
  !*** ./resources/js/Pages/Components/Newsletter.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Newsletter_vue_vue_type_template_id_314a02ce___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Newsletter.vue?vue&type=template&id=314a02ce& */ "./resources/js/Pages/Components/Newsletter.vue?vue&type=template&id=314a02ce&");
/* harmony import */ var _Newsletter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Newsletter.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Components/Newsletter.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Newsletter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Newsletter_vue_vue_type_template_id_314a02ce___WEBPACK_IMPORTED_MODULE_0__.render,
  _Newsletter_vue_vue_type_template_id_314a02ce___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Components/Newsletter.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Components/Newsletter.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/Pages/Components/Newsletter.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Newsletter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Newsletter.vue?vue&type=script&lang=js& */ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Components/Newsletter.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Newsletter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Components/Newsletter.vue?vue&type=template&id=314a02ce&":
/*!*************************************************************************************!*\
  !*** ./resources/js/Pages/Components/Newsletter.vue?vue&type=template&id=314a02ce& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Newsletter_vue_vue_type_template_id_314a02ce___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Newsletter_vue_vue_type_template_id_314a02ce___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Newsletter_vue_vue_type_template_id_314a02ce___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Newsletter.vue?vue&type=template&id=314a02ce& */ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Components/Newsletter.vue?vue&type=template&id=314a02ce&");


/***/ })

}]);