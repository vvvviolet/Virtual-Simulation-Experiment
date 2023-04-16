"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _conductUtil = require("../../vc-tree/utils/conductUtil");
var _vue = require("vue");
var _default = function _default(rawLabeledValues, rawHalfCheckedValues, treeConduction, keyEntities, maxLevel, levelEntities) {
  var newRawCheckedValues = (0, _vue.shallowRef)([]);
  var newRawHalfCheckedValues = (0, _vue.shallowRef)([]);
  (0, _vue.watchEffect)(function () {
    var checkedKeys = rawLabeledValues.value.map(function (_ref) {
      var value = _ref.value;
      return value;
    });
    var halfCheckedKeys = rawHalfCheckedValues.value.map(function (_ref2) {
      var value = _ref2.value;
      return value;
    });
    var missingValues = checkedKeys.filter(function (key) {
      return !keyEntities.value[key];
    });
    if (treeConduction.value) {
      var _conductCheck = (0, _conductUtil.conductCheck)(checkedKeys, true, keyEntities.value, maxLevel.value, levelEntities.value);
      checkedKeys = _conductCheck.checkedKeys;
      halfCheckedKeys = _conductCheck.halfCheckedKeys;
    }
    newRawCheckedValues.value = Array.from(new Set([].concat((0, _toConsumableArray2.default)(missingValues), (0, _toConsumableArray2.default)(checkedKeys))));
    newRawHalfCheckedValues.value = halfCheckedKeys;
  });
  return [newRawCheckedValues, newRawHalfCheckedValues];
};
exports.default = _default;