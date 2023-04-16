"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _vue = require("vue");
/**
 * This function will try to call requestIdleCallback if available to save performance.
 * No need `getLabel` here since already fetch on `rawLabeledValue`.
 */
var _default = function _default(values) {
  var cacheRef = (0, _vue.shallowRef)({
    valueLabels: new Map()
  });
  var mergedValues = (0, _vue.shallowRef)();
  (0, _vue.watch)(values, function () {
    mergedValues.value = (0, _vue.toRaw)(values.value);
  }, {
    immediate: true
  });
  var newFilledValues = (0, _vue.computed)(function () {
    var valueLabels = cacheRef.value.valueLabels;
    var valueLabelsCache = new Map();
    var filledValues = mergedValues.value.map(function (item) {
      var _item$label;
      var value = item.value;
      var mergedLabel = (_item$label = item.label) !== null && _item$label !== void 0 ? _item$label : valueLabels.get(value);
      // Save in cache
      valueLabelsCache.set(value, mergedLabel);
      return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, item), {}, {
        label: mergedLabel
      });
    });
    cacheRef.value.valueLabels = valueLabelsCache;
    return filledValues;
  });
  return [newFilledValues];
};
exports.default = _default;