(window["webpackJsonppartnernetwork_vtex_services_1_6_6"] = window["webpackJsonppartnernetwork_vtex_services_1_6_6"] || []).push([["PartnerDetailsWrapper"],{

/***/ "../PartnerDetailsWrapper.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _usr_local_data_service_src_node_build_react_3_x_entrypoints_shared_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../../../usr/local/data/service/src/node/build/react/3.x/entrypoints/shared.js");
/* harmony import */ var _usr_local_data_service_src_node_build_react_3_x_entrypoints_shared_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_usr_local_data_service_src_node_build_react_3_x_entrypoints_shared_js__WEBPACK_IMPORTED_MODULE_0__);


var requireEntry = function requireEntry() {
  return __webpack_require__("./react/PartnerDetailsWrapper.tsx");
};

__webpack_require__.p = Object(_usr_local_data_service_src_node_build_react_3_x_entrypoints_shared_js__WEBPACK_IMPORTED_MODULE_0__["getPublicPath"])('partnernetwork.vtex-services@1.6.6');

var _register = Object(_usr_local_data_service_src_node_build_react_3_x_entrypoints_shared_js__WEBPACK_IMPORTED_MODULE_0__["register"])(requireEntry, module, 'partnernetwork.vtex-services@1.6.6', 'partnernetwork.vtex-services@1.x', 'PartnerDetailsWrapper'),
    renderHotReload = _register.renderHotReload,
    setupHMR = _register.setupHMR;

if (false) { var hotEmitter, hotLog; }
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../../../../../usr/local/data/service/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./react/PartnerDetailsWrapper.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vtex_render_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("vtex.render-runtime");
/* harmony import */ var vtex_render_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vtex_render_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AppWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./react/AppWrapper.tsx");
/* harmony import */ var _PartnerDetails__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./react/PartnerDetails.tsx");
// Dependencies

 // AppWrapper

 // PartnerDetails



var PartnerDetailsWrapper = function PartnerDetailsWrapper() {
  var _useRuntime = Object(vtex_render_runtime__WEBPACK_IMPORTED_MODULE_1__["useRuntime"])(),
      navigate = _useRuntime.navigate;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AppWrapper__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Partner Details",
    linkLabel: "Partners",
    onLinkClick: function onLinkClick() {
      navigate({
        page: 'admin.app.partner-list',
        fallbackToWindowLocation: true,
        fetchPage: true
      });
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PartnerDetails__WEBPACK_IMPORTED_MODULE_3__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (PartnerDetailsWrapper);

/***/ }),

/***/ "graphql":
/***/ (function(module, exports) {

module.exports = GraphQL;

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ "regenerator-runtime":
/***/ (function(module, exports) {

module.exports = regeneratorRuntime;

/***/ }),

/***/ "vtex.render-runtime":
/***/ (function(module, exports) {

module.exports = __RENDER_8_RUNTIME__;

/***/ }),

/***/ "vtex.styleguide/Alert":
/***/ (function(module, exports) {

module.exports = __RENDER_8_COMPONENTS__['vtex.styleguide@9.x/Alert'];

/***/ }),

/***/ "vtex.styleguide/Button":
/***/ (function(module, exports) {

module.exports = __RENDER_8_COMPONENTS__['vtex.styleguide@9.x/Button'];

/***/ }),

/***/ "vtex.styleguide/Checkbox":
/***/ (function(module, exports) {

module.exports = __RENDER_8_COMPONENTS__['vtex.styleguide@9.x/Checkbox'];

/***/ }),

/***/ "vtex.styleguide/CheckboxGroup":
/***/ (function(module, exports) {

module.exports = __RENDER_8_COMPONENTS__['vtex.styleguide@9.x/CheckboxGroup'];

/***/ }),

/***/ "vtex.styleguide/Dropdown":
/***/ (function(module, exports) {

module.exports = __RENDER_8_COMPONENTS__['vtex.styleguide@9.x/Dropdown'];

/***/ }),

/***/ "vtex.styleguide/EXPERIMENTAL_Select":
/***/ (function(module, exports) {

module.exports = __RENDER_8_COMPONENTS__['vtex.styleguide@9.x/EXPERIMENTAL_Select'];

/***/ }),

/***/ "vtex.styleguide/Input":
/***/ (function(module, exports) {

module.exports = __RENDER_8_COMPONENTS__['vtex.styleguide@9.x/Input'];

/***/ }),

/***/ "vtex.styleguide/Layout":
/***/ (function(module, exports) {

module.exports = __RENDER_8_COMPONENTS__['vtex.styleguide@9.x/Layout'];

/***/ }),

/***/ "vtex.styleguide/Modal":
/***/ (function(module, exports) {

module.exports = __RENDER_8_COMPONENTS__['vtex.styleguide@9.x/Modal'];

/***/ }),

/***/ "vtex.styleguide/PageBlock":
/***/ (function(module, exports) {

module.exports = __RENDER_8_COMPONENTS__['vtex.styleguide@9.x/PageBlock'];

/***/ }),

/***/ "vtex.styleguide/PageHeader":
/***/ (function(module, exports) {

module.exports = __RENDER_8_COMPONENTS__['vtex.styleguide@9.x/PageHeader'];

/***/ }),

/***/ "vtex.styleguide/Spinner":
/***/ (function(module, exports) {

module.exports = __RENDER_8_COMPONENTS__['vtex.styleguide@9.x/Spinner'];

/***/ }),

/***/ "vtex.styleguide/Tab":
/***/ (function(module, exports) {

module.exports = __RENDER_8_COMPONENTS__['vtex.styleguide@9.x/Tab'];

/***/ }),

/***/ "vtex.styleguide/Tabs":
/***/ (function(module, exports) {

module.exports = __RENDER_8_COMPONENTS__['vtex.styleguide@9.x/Tabs'];

/***/ }),

/***/ "vtex.styleguide/Textarea":
/***/ (function(module, exports) {

module.exports = __RENDER_8_COMPONENTS__['vtex.styleguide@9.x/Textarea'];

/***/ }),

/***/ "vtex.styleguide/utils":
/***/ (function(module, exports) {

module.exports = __RENDER_8_COMPONENTS__['vtex.styleguide@9.x/utils'];

/***/ })

},[["../PartnerDetailsWrapper.js","common","vendors~AppWrapper~PartnerDetails~PartnerDetailsWrapper~PartnerList~PartnerListWrapper~apolloClient","vendors~AppWrapper~PartnerDetailsWrapper~PartnerListWrapper","vendors~PartnerDetails~PartnerDetailsWrapper","AppWrapper~PartnerDetailsWrapper~PartnerListWrapper","PartnerDetails~PartnerDetailsWrapper"]]]);
//# sourceMappingURL=PartnerDetailsWrapper.js.map