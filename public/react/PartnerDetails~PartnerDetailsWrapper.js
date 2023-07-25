(window["webpackJsonppartnernetwork_vtex_services_1_6_6"] = window["webpackJsonppartnernetwork_vtex_services_1_6_6"] || []).push([["PartnerDetails~PartnerDetailsWrapper"],{

/***/ "./react/PartnerDetails.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _usr_local_data_service_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../../../usr/local/data/service/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _usr_local_data_service_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_usr_local_data_service_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _usr_local_data_service_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../../../../usr/local/data/service/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _usr_local_data_service_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../../../../usr/local/data/service/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _usr_local_data_service_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../../../../usr/local/data/service/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vtex_styleguide_PageBlock__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("vtex.styleguide/PageBlock");
/* harmony import */ var vtex_styleguide_PageBlock__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vtex_styleguide_PageBlock__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var vtex_styleguide_Tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("vtex.styleguide/Tabs");
/* harmony import */ var vtex_styleguide_Tabs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(vtex_styleguide_Tabs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var vtex_styleguide_Tab__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("vtex.styleguide/Tab");
/* harmony import */ var vtex_styleguide_Tab__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(vtex_styleguide_Tab__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var vtex_styleguide_Spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("vtex.styleguide/Spinner");
/* harmony import */ var vtex_styleguide_Spinner__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(vtex_styleguide_Spinner__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var vtex_styleguide_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("vtex.styleguide/Button");
/* harmony import */ var vtex_styleguide_Button__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(vtex_styleguide_Button__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var vtex_styleguide_Alert__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("vtex.styleguide/Alert");
/* harmony import */ var vtex_styleguide_Alert__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(vtex_styleguide_Alert__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var vtex_styleguide_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("vtex.styleguide/utils");
/* harmony import */ var vtex_styleguide_utils__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(vtex_styleguide_utils__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("../../../../modules/e1557103147aa08bfffcf23b7167644bcfa2d66cc9ee448d8035e4828feab36a/dev/node_modules/@apollo/client/index.js");
/* harmony import */ var vtex_render_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("vtex.render-runtime");
/* harmony import */ var vtex_render_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(vtex_render_runtime__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("../../../../modules/e1557103147aa08bfffcf23b7167644bcfa2d66cc9ee448d8035e4828feab36a/dev/node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _containers_PartnerData__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./react/containers/PartnerData/index.tsx");
/* harmony import */ var _containers_PartnerClients__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./react/containers/PartnerClients/index.tsx");
/* harmony import */ var _containers_PartnerServices__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./react/containers/PartnerServices/index.tsx");
/* harmony import */ var _components_DenyModal__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./react/components/DenyModal/index.tsx");





function _templateObject() {
  var data = Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__["default"])(["\n  query getPartner($account: String) {\n    partner(account: $account)\n      @context(provider: \"partnernetwork.vtex-services@1.x\") {\n      id\n      name\n      email\n      status\n      imgURL\n      website\n      types\n      regions\n      description\n      categories {\n        id\n        name\n      }\n      subcategories {\n        categoryID\n        subcategories {\n          id\n          name\n        }\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

// Dependencies










 // Containers





var partnerQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_12__["gql"])(_templateObject());

var PartnerDetails = function PartnerDetails() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(),
      _useState2 = Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      status = _useState2[0],
      setStatus = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      _useState4 = Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState3, 2),
      statusButton = _useState4[0],
      setStatusButton = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(0),
      _useState6 = Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState5, 2),
      currentTab = _useState6[0],
      setCurrentTab = _useState6[1];

  var _useDisclosure = Object(vtex_styleguide_utils__WEBPACK_IMPORTED_MODULE_11__["useDisclosure"])(),
      isOpen = _useDisclosure.isOpen,
      onOpen = _useDisclosure.onOpen,
      onClose = _useDisclosure.onClose;

  var _useRuntime = Object(vtex_render_runtime__WEBPACK_IMPORTED_MODULE_13__["useRuntime"])(),
      params = _useRuntime.route.params;

  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_12__["useQuery"])(partnerQuery, {
    variables: {
      account: params.account
    }
  }),
      data = _useQuery.data,
      loading = _useQuery.loading;

  var handleRateButton = function handleRateButton(param) {
    onOpen();
    setStatusButton(param);
  };

  var handleDeny = /*#__PURE__*/function () {
    var _ref = Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_usr_local_data_service_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(reason, observation) {
      var partnerID;
      return _usr_local_data_service_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              partnerID = data.partner.id;

              if (!(statusButton === 'Deny')) {
                _context.next = 14;
                break;
              }

              _context.prev = 2;
              setStatus('DENYING');
              _context.next = 6;
              return axios__WEBPACK_IMPORTED_MODULE_14___default.a.patch("/api/dataentities/PN/documents/".concat(partnerID), {
                status: 'DENIED',
                reasonDeny: reason,
                observationDeny: observation
              });

            case 6:
              setStatus('DENIED');
              _context.next = 12;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](2);
              setStatus('ERROR');

            case 12:
              _context.next = 25;
              break;

            case 14:
              if (!(statusButton === 'Approve')) {
                _context.next = 25;
                break;
              }

              _context.prev = 15;
              setStatus('APPROVING');
              _context.next = 19;
              return axios__WEBPACK_IMPORTED_MODULE_14___default.a.patch("/api/dataentities/PN/documents/".concat(partnerID), {
                status: 'APPROVED',
                reasonDeny: reason,
                observationDeny: observation
              });

            case 19:
              setStatus('SUCCESS');
              _context.next = 25;
              break;

            case 22:
              _context.prev = 22;
              _context.t1 = _context["catch"](15);
              setStatus('ERROR');

            case 25:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 9], [15, 22]]);
    }));

    return function handleDeny(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();

  if (loading) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(vtex_styleguide_PageBlock__WEBPACK_IMPORTED_MODULE_5___default.a, {
      variation: "full"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "flex justify-center ma6"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(vtex_styleguide_Spinner__WEBPACK_IMPORTED_MODULE_8___default.a, {
      color: "#f71963",
      size: 50
    })));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(vtex_styleguide_Tabs__WEBPACK_IMPORTED_MODULE_6___default.a, {
    fullWidth: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(vtex_styleguide_Tab__WEBPACK_IMPORTED_MODULE_7___default.a, {
    label: "Partner",
    active: currentTab === 0,
    onClick: function onClick() {
      return setCurrentTab(0);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(vtex_styleguide_PageBlock__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variation: "full"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_containers_PartnerData__WEBPACK_IMPORTED_MODULE_15__["default"], {
    data: data.partner,
    currentStatus: status
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(vtex_styleguide_Tab__WEBPACK_IMPORTED_MODULE_7___default.a, {
    label: "Services",
    active: currentTab === 1,
    disabled: !data.partner.id,
    onClick: function onClick() {
      return setCurrentTab(1);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(vtex_styleguide_PageBlock__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variation: "full"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_containers_PartnerServices__WEBPACK_IMPORTED_MODULE_17__["default"], {
    partnerID: data.partner.id
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(vtex_styleguide_Tab__WEBPACK_IMPORTED_MODULE_7___default.a, {
    label: "Clients",
    active: currentTab === 2,
    disabled: !data.partner.id,
    onClick: function onClick() {
      return setCurrentTab(2);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(vtex_styleguide_PageBlock__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variation: "full"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_containers_PartnerClients__WEBPACK_IMPORTED_MODULE_16__["default"], {
    partnerID: data.partner.id
  })))), status && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "mb6"
  }, status === 'SUCCESS' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(vtex_styleguide_Alert__WEBPACK_IMPORTED_MODULE_10___default.a, {
    type: "success"
  }, "SUCCESS"), status === 'ERROR' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(vtex_styleguide_Alert__WEBPACK_IMPORTED_MODULE_10___default.a, {
    type: "warning"
  }, "ERROR"), status === 'DENIED' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(vtex_styleguide_Alert__WEBPACK_IMPORTED_MODULE_10___default.a, {
    type: "error"
  }, "DENIED")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "actions flex flex-column-reverse flex-row-l justify-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "mb3 mb0-l button-deny-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(vtex_styleguide_Button__WEBPACK_IMPORTED_MODULE_9___default.a, {
    variation: "danger",
    onClick: function onClick() {
      return handleRateButton('Deny');
    },
    disabled: !data.partner.id || status === 'APPROVING'
  }, status === 'APPROVING' || status === 'DENYING' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(vtex_styleguide_Spinner__WEBPACK_IMPORTED_MODULE_8___default.a, {
    color: "#FFF",
    size: 20
  }) : 'Deny')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "mb3 mb0-l button-save-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(vtex_styleguide_Button__WEBPACK_IMPORTED_MODULE_9___default.a, {
    onClick: function onClick() {
      return handleRateButton('Approve');
    },
    disabled: !data.partner.id || status === 'APPROVING'
  }, status === 'APPROVING' || status === 'DENYING' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(vtex_styleguide_Spinner__WEBPACK_IMPORTED_MODULE_8___default.a, {
    color: "#FFF",
    size: 20
  }) : 'Approve'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_DenyModal__WEBPACK_IMPORTED_MODULE_18__["default"], {
    show: isOpen,
    onClose: onClose,
    onDeny: handleDeny,
    statusButton: statusButton
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (PartnerDetails);

/***/ }),

/***/ "./react/components/DenyModal/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _usr_local_data_service_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../../../usr/local/data/service/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vtex_styleguide_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("vtex.styleguide/Button");
/* harmony import */ var vtex_styleguide_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vtex_styleguide_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vtex_styleguide_Dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("vtex.styleguide/Dropdown");
/* harmony import */ var vtex_styleguide_Dropdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vtex_styleguide_Dropdown__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vtex_styleguide_Modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("vtex.styleguide/Modal");
/* harmony import */ var vtex_styleguide_Modal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vtex_styleguide_Modal__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vtex_styleguide_Textarea__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("vtex.styleguide/Textarea");
/* harmony import */ var vtex_styleguide_Textarea__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vtex_styleguide_Textarea__WEBPACK_IMPORTED_MODULE_5__);






var options = [{
  value: '',
  label: 'Select'
}, {
  value: 'Dados incorretos',
  label: 'Incorrect Data'
}, {
  value: 'Dados incompletos',
  label: 'Incomplete Data'
}, {
  value: 'Logo enviada fora do padrão',
  label: 'Logo out of pattern'
}, {
  value: 'Categoria principal selecionada inadequada',
  label: 'Inappropriate selected main category'
}, {
  value: 'Case dos clientes deve ser revisado',
  label: 'Customer case must be reviewed'
}, {
  value: 'Serviços descritos não estão de acordo',
  label: 'Described services are not in agreement'
}];

var DenyModal = function DenyModal(_ref) {
  var show = _ref.show,
      onClose = _ref.onClose,
      onDeny = _ref.onDeny,
      statusButton = _ref.statusButton;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState2 = Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      reason = _useState2[0],
      setReason = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState4 = Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      observation = _useState4[0],
      setObservation = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState6 = Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState5, 2),
      error = _useState6[0],
      setError = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState8 = Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState7, 2),
      errorObservation = _useState8[0],
      setErrorObservation = _useState8[1];

  var denyMessage = statusButton === 'Deny';

  var handleDeny = function handleDeny() {
    var hasError = false;

    if (denyMessage && !reason) {
      setError(true);
      hasError = true;
    }

    if (denyMessage && !observation.length) {
      setErrorObservation(true);
      hasError = true;
    }

    if (hasError) return;
    onDeny(reason, observation);
    onClose();
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(vtex_styleguide_Modal__WEBPACK_IMPORTED_MODULE_4___default.a, {
    isOpen: show,
    title: denyMessage ? 'Are you sure you want to deny this partner?' : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "You are approving this partner. ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), "If you have some observation, please fill the fields below."),
    "aria-describedby": "modal-description",
    responsiveFullScreen: true,
    bottomBar: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "w-100 nowrap flex justify-between"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "mr4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(vtex_styleguide_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
      variation: "tertiary",
      onClick: onClose
    }, "Cancel")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(vtex_styleguide_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
      variation: "danger",
      onClick: handleDeny
    }, denyMessage ? 'Deny' : 'Approve'))),
    onClose: onClose
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "flex flex-column"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "w-100 w-50-ns"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(vtex_styleguide_Dropdown__WEBPACK_IMPORTED_MODULE_3___default.a, {
    label: denyMessage ? 'Select the deny reason' : 'Select the reason for observation',
    options: options,
    value: reason,
    required: !!denyMessage,
    error: error,
    onChange: function onChange(_, selected) {
      return setReason(selected);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "w-100 mt5 mb5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(vtex_styleguide_Textarea__WEBPACK_IMPORTED_MODULE_5___default.a, {
    required: true,
    error: errorObservation,
    label: denyMessage ? 'Write some observation.' : 'Write some observation if necessary.',
    onChange: function onChange(e) {
      return setObservation(e.target.value);
    },
    value: observation
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (DenyModal);

/***/ }),

/***/ "./react/components/ImageContainer/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
// Dependencies


var ImageContainer = function ImageContainer(_ref) {
  var title = _ref.title,
      imgURL = _ref.imgURL;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "image-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mr5 mr7-l"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("figure", {
    className: "image-container-figure"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: imgURL,
    alt: "preview"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-column justify-center w-100"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "ma0 mb3 image-container-title"
  }, title))));
};

/* harmony default export */ __webpack_exports__["default"] = (ImageContainer);

/***/ }),

/***/ "./react/components/Select/DropdownIndicator/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
// Dependencies


var DropdownIndicator = function DropdownIndicator() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ml4 flex items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    clipPath: "url(#clip0)"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M13.7262 4.39069L8.00211 10.1147L2.27804 4.39069C2.02657 4.14782 1.68977 4.01342 1.34017 4.01646C0.990566 4.0195 0.656145 4.15972 0.408931 4.40694C0.161717 4.65415 0.0214904 4.98856 0.0184525 5.33816C0.0154146 5.68775 0.149809 6.02456 0.392689 6.27603L7.05944 12.9427C7.30948 13.1927 7.64856 13.3331 8.00211 13.3331C8.35567 13.3331 8.69475 13.1927 8.94479 12.9427L15.6115 6.27603C15.7389 6.15303 15.8405 6.0059 15.9103 5.84323C15.9802 5.68056 16.017 5.5056 16.0185 5.32856C16.0201 5.15152 15.9863 4.97595 15.9193 4.81209C15.8523 4.64823 15.7533 4.49936 15.6281 4.37417C15.5029 4.24898 15.354 4.14997 15.1901 4.08293C15.0263 4.01589 14.8507 3.98215 14.6737 3.98369C14.4966 3.98523 14.3217 4.02201 14.159 4.09189C13.9963 4.16177 13.8492 4.26335 13.7262 4.39069Z",
    fill: "#142032"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("clipPath", {
    id: "clip0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    width: "16.0002",
    height: "16",
    fill: "white"
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (DropdownIndicator);

/***/ }),

/***/ "./react/components/Select/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vtex_styleguide_EXPERIMENTAL_Select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("vtex.styleguide/EXPERIMENTAL_Select");
/* harmony import */ var vtex_styleguide_EXPERIMENTAL_Select__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vtex_styleguide_EXPERIMENTAL_Select__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _DropdownIndicator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./react/components/Select/DropdownIndicator/index.tsx");
/* eslint-disable react/jsx-pascal-case */
// Dependencies

 // Components



var Select = function Select(_ref) {
  var value = _ref.value,
      options = _ref.options,
      onChange = _ref.onChange,
      disabled = _ref.disabled,
      errorMessage = _ref.errorMessage,
      _ref$multi = _ref.multi,
      multi = _ref$multi === void 0 ? true : _ref$multi,
      _ref$placeholder = _ref.placeholder,
      placeholder = _ref$placeholder === void 0 ? 'Select...' : _ref$placeholder;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "select-input-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(vtex_styleguide_EXPERIMENTAL_Select__WEBPACK_IMPORTED_MODULE_1___default.a, {
    value: value,
    multi: multi,
    options: options,
    disabled: disabled,
    onChange: onChange,
    placeholder: placeholder,
    errorMessage: errorMessage,
    components: {
      DropdownIndicator: _DropdownIndicator__WEBPACK_IMPORTED_MODULE_2__["default"]
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Select);

/***/ }),

/***/ "./react/components/Table/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
// Dependencies


var Table = function Table(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "table mb7 mb8-l"
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (Table);

/***/ }),

/***/ "./react/components/TableRow/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vtex_styleguide_Checkbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("vtex.styleguide/Checkbox");
/* harmony import */ var vtex_styleguide_Checkbox__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vtex_styleguide_Checkbox__WEBPACK_IMPORTED_MODULE_1__);
// Dependencies



var TableRow = function TableRow(_ref) {
  var name = _ref.name,
      imgURL = _ref.imgURL,
      id = _ref.id,
      handler = _ref.handler,
      isActive = _ref.isActive,
      description = _ref.description,
      _ref$showEmptyImage = _ref.showEmptyImage,
      showEmptyImage = _ref$showEmptyImage === void 0 ? true : _ref$showEmptyImage;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "table-row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mr5 mr7-l"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(vtex_styleguide_Checkbox__WEBPACK_IMPORTED_MODULE_1___default.a, {
    checked: isActive,
    name: name,
    id: id,
    onChange: function onChange() {
      return handler(id);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex w-100 items-center"
  }, !imgURL && showEmptyImage && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "table-row__empty-image mr5"
  }), imgURL && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "table-row__image-container mr5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: imgURL,
    alt: name,
    className: "table-row__image"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "table-row__group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "table-row__name"
  }, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "table-row__short-description"
  }, description))));
};

/* harmony default export */ __webpack_exports__["default"] = (TableRow);

/***/ }),

/***/ "./react/components/Title/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
// Dependencies


var Title = function Title(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "title"
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (Title);

/***/ }),

/***/ "./react/containers/PartnerClients/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _usr_local_data_service_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../../../usr/local/data/service/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vtex_styleguide_Spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("vtex.styleguide/Spinner");
/* harmony import */ var vtex_styleguide_Spinner__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vtex_styleguide_Spinner__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../../../modules/e1557103147aa08bfffcf23b7167644bcfa2d66cc9ee448d8035e4828feab36a/dev/node_modules/@apollo/client/index.js");
/* harmony import */ var _components_Title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./react/components/Title/index.tsx");
/* harmony import */ var _components_Table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./react/components/Table/index.tsx");
/* harmony import */ var _components_TableRow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./react/components/TableRow/index.tsx");


function _templateObject() {
  var data = Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  query getClients($partnerID: ID) {\n    clients(partnerID: $partnerID)\n      @context(provider: \"partnernetwork.vtex-services@1.x\") {\n      id\n      name\n      imgURL\n      isActive\n      description\n      accountName\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

// Dependencies


 // Components



 // Queries

var getClientsQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_3__["gql"])(_templateObject());

var PartnerClients = function PartnerClients(_ref) {
  var partnerID = _ref.partnerID;

  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_3__["useQuery"])(getClientsQuery, {
    variables: {
      partnerID: partnerID
    }
  }),
      data = _useQuery.data,
      getLoading = _useQuery.loading;

  if (getLoading) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "flex justify-center ma6"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(vtex_styleguide_Spinner__WEBPACK_IMPORTED_MODULE_2___default.a, {
      color: "#f71963",
      size: 50
    }));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Title__WEBPACK_IMPORTED_MODULE_4__["default"], null, "Clients"), data && data.clients.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Table__WEBPACK_IMPORTED_MODULE_5__["default"], null, data.clients.map(function (client) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_TableRow__WEBPACK_IMPORTED_MODULE_6__["default"], {
      id: client.id,
      handler: function handler() {},
      key: client.id,
      name: client.name,
      imgURL: client.imgURL,
      isActive: client.isActive,
      description: client.description
    });
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (PartnerClients);

/***/ }),

/***/ "./react/containers/PartnerData/categories.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "categories", function() { return categories; });
var categories = [{
  id: 'marketing',
  name: 'Marketing',
  subcategories: [{
    id: 'crm',
    name: 'CRM'
  }, {
    id: 'atendimento-ao-cliente',
    name: 'Atendimento ao cliente'
  }, {
    id: 'influenciador(a)',
    name: 'Influenciador(a)'
  }, {
    id: 'busca-e-sugestoes',
    name: 'Busca e sugestões'
  }, {
    id: 'fotos-e-videos',
    name: 'Fotos e Videos'
  }, {
    id: 'automacao-chatbot-ura',
    name: 'Automação (chatbot/URA)'
  }, {
    id: 'reviews',
    name: 'Reviews'
  }, {
    id: 'design-and-ux',
    name: 'Design & UX'
  }]
}, {
  id: 'operacoes-e-fulfillment',
  name: 'Operações e Fulfillment',
  subcategories: [{
    id: 'inventario-armazenamento',
    name: 'Inventário/Armazenamento'
  }, {
    id: 'logistica-transporte',
    name: 'Logística/Transporte'
  }, {
    id: 'erp-gestao-de-catalogo-inventario',
    name: 'ERP - gestão de catalogo/inventário'
  }]
}, {
  id: 'gestao-de-ecommerce',
  name: 'Gestão de Ecommerce',
  subcategories: [{
    id: 'consultoria',
    name: 'Consultoria'
  }, {
    id: 'treinamento-e-certificacao',
    name: 'Treinamento e Certificação'
  }, {
    id: 'inteligencia-de-dados',
    name: 'Inteligência de Dados'
  }, {
    id: 'servicos-juridicos',
    name: 'Serviços Jurídicos'
  }]
}, {
  id: 'servicos-financeiros',
  name: 'Serviços Financeiros',
  subcategories: [{
    id: 'antifraude',
    name: 'Antifraude'
  }, {
    id: 'servicos-de-fidelidade-cupons-clubes-devolucao',
    name: 'Serviços de fidelidade (cupons / clubes / devolução)'
  }, {
    id: 'seguro',
    name: 'Seguro'
  }, {
    id: 'contabilidade-e-impostos',
    name: 'Contabilidade e Impostos'
  }, {
    id: 'provedor-de-pagamento',
    name: 'Provedor de Pagamento'
  }]
}, {
  id: 'marketplaces',
  name: 'Marketplaces',
  subcategories: [{
    id: 'out',
    name: 'Out'
  }, {
    id: 'in',
    name: 'IN'
  }, {
    id: 'hub',
    name: 'HUB'
  }, {
    id: 'seller-center',
    name: 'Seller Center'
  }]
}, {
  id: 'implementacao-e-vendas',
  name: 'Implementação e Vendas',
  subcategories: [{
    id: 'full-commerce',
    name: 'Full Commerce'
  }, {
    id: 'integracao-b2b-b2c-custom-apps-mobile-apps',
    name: 'Integração (B2B/B2C/Custom apps/Mobile apps)'
  }, {
    id: 'implementador-desenvolvedor',
    name: 'Implementador / Desenvolvedor'
  }]
}];

/***/ }),

/***/ "./react/containers/PartnerData/countries.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (['Argentina', 'Brasil', 'Chile', 'Colômbia', 'Romênia', 'Estados Unidos']);

/***/ }),

/***/ "./react/containers/PartnerData/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _usr_local_data_service_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../../../usr/local/data/service/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _usr_local_data_service_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_usr_local_data_service_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _usr_local_data_service_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../../../../usr/local/data/service/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _usr_local_data_service_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../../../../usr/local/data/service/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _usr_local_data_service_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../../../../usr/local/data/service/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vtex_styleguide_Input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("vtex.styleguide/Input");
/* harmony import */ var vtex_styleguide_Input__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vtex_styleguide_Input__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var vtex_styleguide_Textarea__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("vtex.styleguide/Textarea");
/* harmony import */ var vtex_styleguide_Textarea__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(vtex_styleguide_Textarea__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var vtex_styleguide_CheckboxGroup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("vtex.styleguide/CheckboxGroup");
/* harmony import */ var vtex_styleguide_CheckboxGroup__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(vtex_styleguide_CheckboxGroup__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _countries__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./react/containers/PartnerData/countries.tsx");
/* harmony import */ var _partnerTypes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./react/containers/PartnerData/partnerTypes.tsx");
/* harmony import */ var _categories__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./react/containers/PartnerData/categories.ts");
/* harmony import */ var _components_Select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./react/components/Select/index.tsx");
/* harmony import */ var _components_ImageContainer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./react/components/ImageContainer/index.tsx");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("../../../../modules/e1557103147aa08bfffcf23b7167644bcfa2d66cc9ee448d8035e4828feab36a/dev/node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_13__);





/* eslint-disable @typescript-eslint/no-explicit-any */
// Dependencies



 // Data



 // Components




var countryOptions = _countries__WEBPACK_IMPORTED_MODULE_8__["default"].map(function (country) {
  return {
    label: country,
    value: country
  };
});
var categoriesInitialState = _categories__WEBPACK_IMPORTED_MODULE_10__["categories"].reduce(function (obj, category) {
  return Object.assign(Object.assign({}, obj), Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])({}, category.id, category.subcategories.reduce(function (obj2, subcategory) {
    return Object.assign(Object.assign({}, obj2), Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])({}, subcategory.id, {
      checked: false,
      label: subcategory.name
    }));
  }, {})));
}, {});

var PartnerData = function PartnerData(_ref) {
  var data = _ref.data,
      currentStatus = _ref.currentStatus;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(categoriesInitialState),
      _useState2 = Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      categoriesCheckboxes = _useState2[0],
      setCategoriesCheckboxes = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      _useState4 = Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState3, 2),
      denialReason = _useState4[0],
      setDenialReason = _useState4[1];

  var getDenialReason = /*#__PURE__*/function () {
    var _ref2 = Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_usr_local_data_service_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var denialResponse;
      return _usr_local_data_service_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_13___default.a.get("/api/dataentities/PN/documents/".concat(data.id, "?_fields=reasonDeny"));

            case 2:
              denialResponse = _context.sent;
              setDenialReason(denialResponse.data.reasonDeny);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getDenialReason() {
      return _ref2.apply(this, arguments);
    };
  }();

  var _categories = data.categories,
      subcategories = data.subcategories,
      status = data.status;
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    getDenialReason();
    setCategoriesCheckboxes(function (prevState) {
      var newCheckedMap = _categories.reduce(function (obj, category) {
        var subcategoryFinded = subcategories.find(function (_ref3) {
          var categoryID = _ref3.categoryID;
          return categoryID === category.id;
        });
        var prevSubCategories = categoriesCheckboxes[category.id];
        if (!subcategoryFinded) return obj;
        return Object.assign(Object.assign({}, obj), Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])({}, category.id, subcategoryFinded.subcategories.reduce(function (obj2, subcategory) {
          return Object.assign(Object.assign({}, obj2), Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])({}, subcategory.id, {
            checked: true,
            label: subcategory.name
          }));
        }, Object.assign({}, prevSubCategories))));
      }, {});

      return Object.assign(Object.assign({}, prevState), newCheckedMap);
    }); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentStatus, status]);
  var regionsValue = data.regions.map(function (region) {
    return countryOptions.find(function (country) {
      return country.value === region;
    });
  }).filter(Boolean);
  var typesValue = data.types.map(function (type) {
    return _partnerTypes__WEBPACK_IMPORTED_MODULE_9__["default"].find(function (partnerType) {
      return partnerType.value === type;
    });
  }).filter(Boolean);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "mb8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_ImageContainer__WEBPACK_IMPORTED_MODULE_12__["default"], {
    title: data.name,
    imgURL: data.imgURL
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "mb7 flex flex-column flex-row-l"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "w-100 mb7 mb0-l mr7-l"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(vtex_styleguide_Input__WEBPACK_IMPORTED_MODULE_5___default.a, {
    disabled: true,
    value: data.name
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "w-100"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "select-input-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_Select__WEBPACK_IMPORTED_MODULE_11__["default"], {
    multi: true,
    disabled: true,
    options: countryOptions,
    value: regionsValue
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "mb7 flex flex-column flex-row-l"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "w-100 mb7 mb0-l mr7-l"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "select-input-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_Select__WEBPACK_IMPORTED_MODULE_11__["default"], {
    multi: true,
    disabled: true,
    options: _partnerTypes__WEBPACK_IMPORTED_MODULE_9__["default"],
    value: typesValue
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "w-100"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(vtex_styleguide_Input__WEBPACK_IMPORTED_MODULE_5___default.a, {
    disabled: true,
    type: "url",
    value: data.website
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "mb7 mb8-l flex"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "w-100"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(vtex_styleguide_Input__WEBPACK_IMPORTED_MODULE_5___default.a, {
    disabled: true,
    type: "email",
    value: data.email
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "mb7 about-the-partner"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h3", {
    className: "t-heading-3"
  }, "About the partner"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(vtex_styleguide_Textarea__WEBPACK_IMPORTED_MODULE_6___default.a, {
    disabled: true,
    resize: "none",
    value: data.description
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "mb7 about-the-partner"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h3", {
    className: "t-heading-3"
  }, "Categorias anb Subcategories"), _categories__WEBPACK_IMPORTED_MODULE_10__["categories"].map(function (category) {
    var checkedMap = categoriesCheckboxes[category.id];
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "mb6",
      key: category.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(vtex_styleguide_CheckboxGroup__WEBPACK_IMPORTED_MODULE_7___default.a, {
      value: "simple",
      id: category.id,
      name: category.id,
      label: category.name,
      checkedMap: checkedMap
    }));
  })), denialReason && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "mb7 about-the-partner"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h3", {
    className: "t-heading-3"
  }, currentStatus !== undefined && currentStatus === 'DENIED' || status === 'DENIED' ? 'Denial reason' : 'Observation'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(vtex_styleguide_Input__WEBPACK_IMPORTED_MODULE_5___default.a, {
    disabled: true,
    type: "name",
    value: denialReason
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (PartnerData);

/***/ }),

/***/ "./react/containers/PartnerData/partnerTypes.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  value: 'ISV',
  label: 'ISV'
}, {
  value: 'Agencia / Reseller',
  label: 'Agencia / Reseller'
}]);

/***/ }),

/***/ "./react/containers/PartnerServices/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _usr_local_data_service_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../../../usr/local/data/service/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _usr_local_data_service_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_usr_local_data_service_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _usr_local_data_service_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../../../../usr/local/data/service/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _usr_local_data_service_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../../../../usr/local/data/service/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _usr_local_data_service_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../../../../usr/local/data/service/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vtex_styleguide_Spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("vtex.styleguide/Spinner");
/* harmony import */ var vtex_styleguide_Spinner__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vtex_styleguide_Spinner__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../../../../modules/e1557103147aa08bfffcf23b7167644bcfa2d66cc9ee448d8035e4828feab36a/dev/node_modules/@apollo/client/index.js");
/* harmony import */ var _components_Title__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./react/components/Title/index.tsx");
/* harmony import */ var _components_Table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./react/components/Table/index.tsx");
/* harmony import */ var _components_TableRow__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./react/components/TableRow/index.tsx");





function _templateObject2() {
  var data = Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__["default"])(["\n  mutation updateService($id: ID, $input: ServiceInput) {\n    updateService(id: $id, input: $input)\n      @context(provider: \"partnernetwork.vtex-services@0.x\") {\n      id\n      name\n      isActive\n      description\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__["default"])(["\n  query getServices($partnerID: ID) {\n    services(partnerID: $partnerID)\n      @context(provider: \"partnernetwork.vtex-services@1.x\") {\n      id\n      name\n      isActive\n      description\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

// Dependencies


 // Components



 // Queries

var getServicesQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_6__["gql"])(_templateObject());
var updateServiceQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_6__["gql"])(_templateObject2());

var PartnerServices = function PartnerServices(_ref) {
  var partnerID = _ref.partnerID;

  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_6__["useQuery"])(getServicesQuery, {
    variables: {
      partnerID: partnerID
    }
  }),
      data = _useQuery.data,
      getLoading = _useQuery.loading,
      refetch = _useQuery.refetch;

  var _useMutation = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_6__["useMutation"])(updateServiceQuery),
      _useMutation2 = Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useMutation, 2),
      updateServiceMutation = _useMutation2[0],
      updateLoading = _useMutation2[1].loading;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      _useState2 = Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      serviceItems = _useState2[0],
      setServiceItens = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    data && setServiceItens(data.services);
  }, [data, getLoading]);

  var handleOptionCheck = /*#__PURE__*/function () {
    var _ref2 = Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_usr_local_data_service_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(id) {
      var newServiceItems, item;
      return _usr_local_data_service_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              newServiceItems = serviceItems.map(function (item) {
                if (item.id === id) {
                  return Object.assign(Object.assign({}, item), {
                    isActive: !item.isActive
                  });
                } else {
                  return item;
                }
              });
              setServiceItens(newServiceItems);
              item = serviceItems.find(function (item) {
                return item.id === id;
              });
              _context.prev = 3;
              _context.next = 6;
              return updateServiceMutation({
                variables: {
                  id: item === null || item === void 0 ? void 0 : item.id,
                  input: {
                    description: item === null || item === void 0 ? void 0 : item.description,
                    isActive: !(item === null || item === void 0 ? void 0 : item.isActive),
                    name: item === null || item === void 0 ? void 0 : item.name
                  }
                }
              });

            case 6:
              _context.next = 8;
              return refetch();

            case 8:
              _context.next = 13;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](3);
              console.error(_context.t0);

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[3, 10]]);
    }));

    return function handleOptionCheck(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  if (getLoading || updateLoading) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "flex justify-center ma6"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(vtex_styleguide_Spinner__WEBPACK_IMPORTED_MODULE_5___default.a, {
      color: "#f71963",
      size: 50
    }));
  }

  if (serviceItems.length === 0) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "flex justify-center ma6"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_Title__WEBPACK_IMPORTED_MODULE_7__["default"], null, "No services available for this partner"));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_Title__WEBPACK_IMPORTED_MODULE_7__["default"], null, "Services"), serviceItems && serviceItems.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_Table__WEBPACK_IMPORTED_MODULE_8__["default"], null, serviceItems.map(function (service) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_TableRow__WEBPACK_IMPORTED_MODULE_9__["default"], {
      key: service.id,
      id: service.id,
      handler: handleOptionCheck,
      name: service.name,
      showEmptyImage: false,
      isActive: service.isActive,
      description: service.description
    });
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (PartnerServices);

/***/ })

}]);
//# sourceMappingURL=PartnerDetails~PartnerDetailsWrapper.js.map