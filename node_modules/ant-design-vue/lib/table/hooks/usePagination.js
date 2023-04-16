"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DEFAULT_PAGE_SIZE = void 0;
exports.default = usePagination;
exports.getPaginationParam = getPaginationParam;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _useState3 = _interopRequireDefault(require("../../_util/hooks/useState"));
var _vue = require("vue");
var DEFAULT_PAGE_SIZE = 10;
exports.DEFAULT_PAGE_SIZE = DEFAULT_PAGE_SIZE;
function getPaginationParam(pagination, mergedPagination) {
  var param = {
    current: mergedPagination.current,
    pageSize: mergedPagination.pageSize
  };
  var paginationObj = pagination && (0, _typeof2.default)(pagination) === 'object' ? pagination : {};
  Object.keys(paginationObj).forEach(function (pageProp) {
    var value = mergedPagination[pageProp];
    if (typeof value !== 'function') {
      param[pageProp] = value;
    }
  });
  return param;
}
function extendsObject() {
  var result = {};
  for (var _len = arguments.length, list = new Array(_len), _key = 0; _key < _len; _key++) {
    list[_key] = arguments[_key];
  }
  list.forEach(function (obj) {
    if (obj) {
      Object.keys(obj).forEach(function (key) {
        var val = obj[key];
        if (val !== undefined) {
          result[key] = val;
        }
      });
    }
  });
  return result;
}
function usePagination(totalRef, paginationRef, onChange) {
  var pagination = (0, _vue.computed)(function () {
    return paginationRef.value && (0, _typeof2.default)(paginationRef.value) === 'object' ? paginationRef.value : {};
  });
  var paginationTotal = (0, _vue.computed)(function () {
    return pagination.value.total || 0;
  });
  var _useState = (0, _useState3.default)(function () {
      return {
        current: 'defaultCurrent' in pagination.value ? pagination.value.defaultCurrent : 1,
        pageSize: 'defaultPageSize' in pagination.value ? pagination.value.defaultPageSize : DEFAULT_PAGE_SIZE
      };
    }),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    innerPagination = _useState2[0],
    setInnerPagination = _useState2[1];
  // ============ Basic Pagination Config ============
  var mergedPagination = (0, _vue.computed)(function () {
    var mP = extendsObject(innerPagination.value, pagination.value, {
      total: paginationTotal.value > 0 ? paginationTotal.value : totalRef.value
    });
    // Reset `current` if data length or pageSize changed
    var maxPage = Math.ceil((paginationTotal.value || totalRef.value) / mP.pageSize);
    if (mP.current > maxPage) {
      // Prevent a maximum page count of 0
      mP.current = maxPage || 1;
    }
    return mP;
  });
  var refreshPagination = function refreshPagination(current, pageSize) {
    if (pagination.value === false) return;
    setInnerPagination({
      current: current !== null && current !== void 0 ? current : 1,
      pageSize: pageSize || mergedPagination.value.pageSize
    });
  };
  var onInternalChange = function onInternalChange(current, pageSize) {
    if (pagination.value) {
      var _pagination$value$onC, _pagination$value;
      (_pagination$value$onC = (_pagination$value = pagination.value).onChange) === null || _pagination$value$onC === void 0 ? void 0 : _pagination$value$onC.call(_pagination$value, current, pageSize);
    }
    refreshPagination(current, pageSize);
    onChange(current, pageSize || mergedPagination.value.pageSize);
  };
  return [(0, _vue.computed)(function () {
    return pagination.value === false ? {} : (0, _objectSpread2.default)((0, _objectSpread2.default)({}, mergedPagination.value), {}, {
      onChange: onInternalChange
    });
  }), refreshPagination];
}