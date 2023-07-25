(window["webpackJsonppartnernetwork_vtex_services_1_6_6"] = window["webpackJsonppartnernetwork_vtex_services_1_6_6"] || []).push([["apolloClient"],{

/***/ "../apolloClient.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _usr_local_data_service_src_node_build_react_3_x_entrypoints_shared_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../../../usr/local/data/service/src/node/build/react/3.x/entrypoints/shared.js");
/* harmony import */ var _usr_local_data_service_src_node_build_react_3_x_entrypoints_shared_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_usr_local_data_service_src_node_build_react_3_x_entrypoints_shared_js__WEBPACK_IMPORTED_MODULE_0__);


var requireEntry = function requireEntry() {
  return __webpack_require__("./react/apolloClient.ts");
};

__webpack_require__.p = Object(_usr_local_data_service_src_node_build_react_3_x_entrypoints_shared_js__WEBPACK_IMPORTED_MODULE_0__["getPublicPath"])('partnernetwork.vtex-services@1.6.6');

var _register = Object(_usr_local_data_service_src_node_build_react_3_x_entrypoints_shared_js__WEBPACK_IMPORTED_MODULE_0__["register"])(requireEntry, module, 'partnernetwork.vtex-services@1.6.6', 'partnernetwork.vtex-services@1.x', 'apolloClient'),
    renderHotReload = _register.renderHotReload,
    setupHMR = _register.setupHMR;

if (false) { var hotEmitter, hotLog; }
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../../../../../usr/local/data/service/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./react/apolloClient.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "client", function() { return client; });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../../modules/e1557103147aa08bfffcf23b7167644bcfa2d66cc9ee448d8035e4828feab36a/dev/node_modules/@apollo/client/index.js");

var client = new _apollo_client__WEBPACK_IMPORTED_MODULE_0__["ApolloClient"]({
  uri: '/_v/public/graphql/v1',
  cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__["InMemoryCache"]({
    addTypename: false
  })
});

/***/ }),

/***/ "graphql":
/***/ (function(module, exports) {

module.exports = GraphQL;

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = React;

/***/ })

},[["../apolloClient.js","common","vendors~AppWrapper~PartnerDetails~PartnerDetailsWrapper~PartnerList~PartnerListWrapper~apolloClient"]]]);
//# sourceMappingURL=apolloClient.js.map