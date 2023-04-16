"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _vue = require("vue");
/**
 * Cache `value` related LabeledValue & options.
 */
var _default = function _default(labeledValues, valueOptions) {
  var cacheRef = (0, _vue.shallowRef)({
    values: new Map(),
    options: new Map()
  });
  var filledLabeledValues = (0, _vue.computed)(function () {
    var _cacheRef$value = cacheRef.value,
      prevValueCache = _cacheRef$value.values,
      prevOptionCache = _cacheRef$value.options;
    // Fill label by cache
    var patchedValues = labeledValues.value.map(function (item) {
      if (item.label === undefined) {
        var _prevValueCache$get;
        return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, item), {}, {
          label: (_prevValueCache$get = prevValueCache.get(item.value)) === null || _prevValueCache$get === void 0 ? void 0 : _prevValueCache$get.label
        });
      }
      return item;
    });
    // Refresh cache
    var valueCache = new Map();
    var optionCache = new Map();
    patchedValues.forEach(function (item) {
      valueCache.set(item.value, item);
      optionCache.set(item.value, valueOptions.value.get(item.value) || prevOptionCache.get(item.value));
    });
    cacheRef.value.values = valueCache;
    cacheRef.value.options = optionCache;
    return patchedValues;
  });
  var getOption = function getOption(val) {
    return valueOptions.value.get(val) || cacheRef.value.options.get(val);
  };
  return [filledLabeledValues, getOption];
};
exports.default = _default;