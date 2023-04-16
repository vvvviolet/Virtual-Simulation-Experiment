"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectSpread3 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _vue = require("vue");
var _legacyUtil = require("../utils/legacyUtil");
var _default = function _default(treeData, searchValue, _ref) {
  var treeNodeFilterProp = _ref.treeNodeFilterProp,
    filterTreeNode = _ref.filterTreeNode,
    fieldNames = _ref.fieldNames;
  return (0, _vue.computed)(function () {
    var fieldChildren = fieldNames.value.children;
    var searchValueVal = searchValue.value;
    var treeNodeFilterPropValue = treeNodeFilterProp === null || treeNodeFilterProp === void 0 ? void 0 : treeNodeFilterProp.value;
    if (!searchValueVal || filterTreeNode.value === false) {
      return treeData.value;
    }
    var filterOptionFunc;
    if (typeof filterTreeNode.value === 'function') {
      filterOptionFunc = filterTreeNode.value;
    } else {
      var upperStr = searchValueVal.toUpperCase();
      filterOptionFunc = function filterOptionFunc(_, dataNode) {
        var value = dataNode[treeNodeFilterPropValue];
        return String(value).toUpperCase().includes(upperStr);
      };
    }
    function dig(list) {
      var keepAll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var res = [];
      for (var index = 0, len = list.length; index < len; index++) {
        var dataNode = list[index];
        var children = dataNode[fieldChildren];
        var match = keepAll || filterOptionFunc(searchValueVal, (0, _legacyUtil.fillLegacyProps)(dataNode));
        var childList = dig(children || [], match);
        if (match || childList.length) {
          res.push((0, _objectSpread3.default)((0, _objectSpread3.default)({}, dataNode), {}, (0, _defineProperty2.default)({}, fieldChildren, childList)));
        }
      }
      return res;
    }
    return dig(treeData.value);
  });
};
exports.default = _default;