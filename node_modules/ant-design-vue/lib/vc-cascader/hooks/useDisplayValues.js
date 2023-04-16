"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _treeUtil = require("../utils/treeUtil");
var _commonUtil = require("../utils/commonUtil");
var _vue = require("vue");
var _propsUtil = require("../../_util/props-util");
var _vnode = require("../../_util/vnode");
var _default = function _default(rawValues, options, fieldNames, multiple, displayRender) {
  return (0, _vue.computed)(function () {
    var mergedDisplayRender = displayRender.value ||
    // Default displayRender
    function (_ref) {
      var labels = _ref.labels;
      var mergedLabels = multiple.value ? labels.slice(-1) : labels;
      var SPLIT = ' / ';
      if (mergedLabels.every(function (label) {
        return ['string', 'number'].includes((0, _typeof2.default)(label));
      })) {
        return mergedLabels.join(SPLIT);
      }
      // If exist non-string value, use VueNode instead
      return mergedLabels.reduce(function (list, label, index) {
        var keyedLabel = (0, _propsUtil.isValidElement)(label) ? (0, _vnode.cloneElement)(label, {
          key: index
        }) : label;
        if (index === 0) {
          return [keyedLabel];
        }
        return [].concat((0, _toConsumableArray2.default)(list), [SPLIT, keyedLabel]);
      }, []);
    };
    return rawValues.value.map(function (valueCells) {
      var valueOptions = (0, _treeUtil.toPathOptions)(valueCells, options.value, fieldNames.value);
      var label = mergedDisplayRender({
        labels: valueOptions.map(function (_ref2) {
          var _option$fieldNames$va;
          var option = _ref2.option,
            value = _ref2.value;
          return (_option$fieldNames$va = option === null || option === void 0 ? void 0 : option[fieldNames.value.label]) !== null && _option$fieldNames$va !== void 0 ? _option$fieldNames$va : value;
        }),
        selectedOptions: valueOptions.map(function (_ref3) {
          var option = _ref3.option;
          return option;
        })
      });
      var value = (0, _commonUtil.toPathKey)(valueCells);
      return {
        label: label,
        value: value,
        key: value,
        valueCells: valueCells
      };
    });
  });
};
exports.default = _default;