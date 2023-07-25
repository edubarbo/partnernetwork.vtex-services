(window["webpackJsonppartnernetwork_vtex_services_1_6_6"] = window["webpackJsonppartnernetwork_vtex_services_1_6_6"] || []).push([["PartnerList~PartnerListWrapper"],{

/***/ "./react/PartnerList.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _usr_local_data_service_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../../../usr/local/data/service/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _usr_local_data_service_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../../../../usr/local/data/service/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _usr_local_data_service_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../../../../usr/local/data/service/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vtex_styleguide_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("vtex.styleguide/Button");
/* harmony import */ var vtex_styleguide_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vtex_styleguide_Button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vtex_styleguide_Checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("vtex.styleguide/Checkbox");
/* harmony import */ var vtex_styleguide_Checkbox__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vtex_styleguide_Checkbox__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var vtex_styleguide_Table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("vtex.styleguide/Table");
/* harmony import */ var vtex_styleguide_Table__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(vtex_styleguide_Table__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var vtex_styleguide_Tag__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("vtex.styleguide/Tag");
/* harmony import */ var vtex_styleguide_Tag__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(vtex_styleguide_Tag__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var vtex_styleguide_PageBlock__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("vtex.styleguide/PageBlock");
/* harmony import */ var vtex_styleguide_PageBlock__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(vtex_styleguide_PageBlock__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../../../../modules/e1557103147aa08bfffcf23b7167644bcfa2d66cc9ee448d8035e4828feab36a/dev/node_modules/@apollo/client/index.js");
/* harmony import */ var vtex_render_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("vtex.render-runtime");
/* harmony import */ var vtex_render_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(vtex_render_runtime__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _containers_PartnerData_categories__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./react/containers/PartnerData/categories.ts");
/* harmony import */ var _containers_PartnerData_countries__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./react/containers/PartnerData/countries.tsx");




function _templateObject() {
  var data = Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  query getPartnersWithPaginationInfo($page: Int, $pageSize: Int) {\n    partnersWithPaginationInfo(\n      page: $page\n      pageSize: $pageSize\n      status: PENDING\n    ) @context(provider: \"partnernetwork.vtex-services@1.x\") {\n      partners {\n        name\n        email\n        status\n        account\n        regions\n        categories {\n          name\n        }\n      }\n      pagination {\n        page\n        total\n        pageSize\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}











var getPartnersWithPaginationInfoQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_9__["gql"])(_templateObject());
var initialPaginationState = {
  currentPage: 1,
  currentItemFrom: 1,
  currentItemTo: 10,
  itemsPerPage: 10,
  totalItems: 0
};

var PartnerList = function PartnerList() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(initialPaginationState),
      _useState2 = Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      pagination = _useState2[0],
      setPagination = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      _useState4 = Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
      partners = _useState4[0],
      setPartners = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      _useState6 = Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState5, 2),
      searchTerm = _useState6[0],
      setSearchTerm = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      _useState8 = Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState7, 2),
      filterStatements = _useState8[0],
      setFilterStatements = _useState8[1];

  var _useRuntime = Object(vtex_render_runtime__WEBPACK_IMPORTED_MODULE_10__["useRuntime"])(),
      navigate = _useRuntime.navigate;

  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_9__["useQuery"])(getPartnersWithPaginationInfoQuery, {
    variables: {
      status: 'PENDING',
      page: pagination.currentPage,
      pageSize: pagination.itemsPerPage
    }
  }),
      data = _useQuery.data,
      loading = _useQuery.loading;

  var getSchema = function getSchema() {
    return {
      properties: {
        account: {
          title: 'Account'
        },
        name: {
          title: 'Name'
        },
        status: {
          title: 'Status',
          cellRenderer: function cellRenderer(_ref) {
            var cellData = _ref.cellData;
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(vtex_styleguide_Tag__WEBPACK_IMPORTED_MODULE_7___default.a, {
              bgColor: "#ffb100",
              color: "#fff"
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
              className: "nowrap"
            }, cellData));
          }
        }
      }
    };
  };

  var handleInputSearchOnChange = function handleInputSearchOnChange(_ref2) {
    var value = _ref2.target.value;
    return setSearchTerm(value);
  };

  var handleInputSearchOnClear = function handleInputSearchOnClear() {
    setSearchTerm('');

    if (data) {
      var newPartners = data.partnersWithPaginationInfo.partners;
      setPartners(newPartners);
    }
  };

  var handleInputSearchOnSubmit = function handleInputSearchOnSubmit() {
    var newPartners = partners.filter(function (partner) {
      return partner.account.includes(searchTerm);
    });
    setPartners(newPartners);
  };

  var selectObject = function selectObject(initialValue, _ref3) {
    var values = _ref3.values,
        onChangeObjectCallback = _ref3.onChangeObjectCallback;

    var toggleValueByKey = function toggleValueByKey(key) {
      return Object.assign(Object.assign({}, values || initialValue), Object(_usr_local_data_service_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, key, values ? !values[key] : false));
    };

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "partner-list-filters"
    }, Object.keys(initialValue).map(function (opt, index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "mb3",
        key: "class-statment-object-".concat(opt, "-").concat(index)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(vtex_styleguide_Checkbox__WEBPACK_IMPORTED_MODULE_5___default.a, {
        checked: values ? values[opt] : initialValue[opt],
        label: opt,
        name: "default-checkbox-group",
        onChange: function onChange() {
          var newValue = toggleValueByKey("".concat(opt));
          onChangeObjectCallback(newValue);
        },
        value: opt
      }));
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(vtex_styleguide_Button__WEBPACK_IMPORTED_MODULE_4___default.a, {
      size: "small",
      onClick: function onClick() {
        var clearFilter = Object.keys(initialValue).reduce(function (acc, curr) {
          acc[curr] = false;
          return acc;
        }, Object.assign({}, initialValue));
        onChangeObjectCallback(clearFilter);
      }
    }, "Unselect All"));
  };

  var categorySelectorObject = function categorySelectorObject(_ref4) {
    var values = _ref4.values,
        onChangeObjectCallback = _ref4.onChangeObjectCallback;
    var initialValue = Object.assign(Object.assign({}, _containers_PartnerData_categories__WEBPACK_IMPORTED_MODULE_11__["categories"].reduce(function (acc, cat) {
      acc[cat.name] = true;
      return acc;
    }, {})), values || {});
    return selectObject(initialValue, {
      values: values,
      onChangeObjectCallback: onChangeObjectCallback
    });
  };

  var countrySelectorObject = function countrySelectorObject(_ref5) {
    var values = _ref5.values,
        onChangeObjectCallback = _ref5.onChangeObjectCallback;
    var initialValue = Object.assign(Object.assign({}, _containers_PartnerData_countries__WEBPACK_IMPORTED_MODULE_12__["default"].reduce(function (acc, country) {
      acc[country] = true;
      return acc;
    }, {})), values || {});
    return selectObject(initialValue, {
      values: values,
      onChangeObjectCallback: onChangeObjectCallback
    });
  };

  var renderFilterLabel = function renderFilterLabel(st) {
    if (!st || !st.object) {
      // you should treat empty object cases only for alwaysVisibleFilters
      return 'All';
    }

    var keys = st.object ? Object.keys(st.object) : {};
    var isAllTrue = !keys.some(function (key) {
      return !st.object[key];
    });
    var isAllFalse = !keys.some(function (key) {
      return st.object[key];
    });
    var trueKeys = keys.filter(function (key) {
      return st.object[key];
    });
    var trueKeysLabel = '';
    trueKeys.forEach(function (key, index) {
      trueKeysLabel += "".concat(key).concat(index === trueKeys.length - 1 ? '' : ', ');
    });
    return "".concat(isAllTrue ? 'All' : isAllFalse ? 'None' : "".concat(trueKeysLabel));
  };

  var handleFiltersChange = function handleFiltersChange() {
    var statements = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    if (!statements.length && data) {
      var newPartners = data.partnersWithPaginationInfo.partners;
      setPartners(newPartners);
      setFilterStatements(statements);
      return;
    }

    var filteredPartners = partners.slice();

    if (data) {
      filteredPartners = data.partnersWithPaginationInfo.partners;
    }

    statements.forEach(function (st) {
      if (!st || !st.object) return;
      var subject = st.subject,
          object = st.object; // eslint-disable-next-line default-case

      switch (subject) {
        case 'category':
          if (!object) return;
          filteredPartners = filteredPartners.filter(function (partner) {
            return partner.categories.some(function (cat) {
              return object[cat.name];
            });
          });
          break;

        case 'country':
          if (!object) return;
          filteredPartners = filteredPartners.filter(function (partner) {
            return partner.regions.some(function (country) {
              return object[country];
            });
          });
          break;
      }
    });
    setPartners(filteredPartners);
    setFilterStatements(statements);
  };

  var handleOnRowClick = function handleOnRowClick(_ref6) {
    var rowData = _ref6.rowData;
    var account = rowData.account;
    navigate({
      page: 'admin.app.partner-details',
      params: {
        account: account
      }
    });
  };

  var handleNextClick = function handleNextClick() {
    var newPage = pagination.currentPage + 1;
    var itemFrom = pagination.currentItemTo + 1;
    var itemTo = pagination.itemsPerPage * newPage;
    setPagination(Object.assign(Object.assign({}, pagination), {
      currentPage: newPage,
      currentItemFrom: itemFrom,
      currentItemTo: itemTo
    }));
  };

  var handlePrevClick = function handlePrevClick() {
    if (pagination.currentPage === 0) return;
    var newPage = pagination.currentPage - 1;
    var itemFrom = pagination.currentItemFrom - pagination.itemsPerPage;
    var itemTo = pagination.currentItemFrom - 1;
    setPagination(Object.assign(Object.assign({}, pagination), {
      currentPage: newPage,
      currentItemFrom: itemFrom,
      currentItemTo: itemTo
    }));
  };

  var handleRowsChange = function handleRowsChange(_, value) {
    setPagination(Object.assign(Object.assign({}, pagination), {
      itemsPerPage: +value,
      currentItemTo: +value
    }));
  };

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (!data) return;
    setPartners(data.partnersWithPaginationInfo.partners);
    setPagination(Object.assign(Object.assign({}, pagination), {
      totalItems: data.partnersWithPaginationInfo.pagination.total
    })); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(vtex_styleguide_PageBlock__WEBPACK_IMPORTED_MODULE_8___default.a, {
    variation: "full"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(vtex_styleguide_Table__WEBPACK_IMPORTED_MODULE_6___default.a, {
    fullWidth: true,
    items: partners,
    loading: loading,
    onRowClick: handleOnRowClick,
    schema: getSchema(),
    emptyStateLabel: "Not found partners",
    toolbar: {
      inputSearch: {
        value: searchTerm,
        placeholder: 'Account...',
        onChange: handleInputSearchOnChange,
        onClear: handleInputSearchOnClear,
        onSubmit: handleInputSearchOnSubmit
      }
    },
    filters: {
      alwaysVisibleFilters: ['category', 'country'],
      statements: filterStatements,
      onChangeStatements: handleFiltersChange,
      clearAllFiltersButtonLabel: 'Clear Filters',
      collapseLeft: true,
      options: {
        category: {
          label: 'Category',
          renderFilterLabel: renderFilterLabel,
          verbs: [{
            label: 'includes',
            value: 'includes',
            object: {
              renderFn: categorySelectorObject,
              extraParams: {}
            }
          }]
        },
        country: {
          label: 'Country',
          renderFilterLabel: renderFilterLabel,
          verbs: [{
            label: 'includes',
            value: 'includes',
            object: {
              renderFn: countrySelectorObject,
              extraParams: {}
            }
          }]
        }
      }
    },
    pagination: {
      onNextClick: handleNextClick,
      onPrevClick: handlePrevClick,
      currentItemFrom: pagination.currentItemFrom,
      currentItemTo: pagination.currentItemTo,
      onRowsChange: handleRowsChange,
      textShowRows: 'Show rows',
      textOf: 'of',
      totalItems: pagination.totalItems,
      rowsOptions: [10, 20, 30]
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (PartnerList);

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

/***/ })

}]);
//# sourceMappingURL=PartnerList~PartnerListWrapper.js.map