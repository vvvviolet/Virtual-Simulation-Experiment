"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _warning = require("../../vc-util/warning");
var _valueUtil = require("./valueUtil");
function warningProps(props) {
  var searchPlaceholder = props.searchPlaceholder,
    treeCheckStrictly = props.treeCheckStrictly,
    treeCheckable = props.treeCheckable,
    labelInValue = props.labelInValue,
    value = props.value,
    multiple = props.multiple;
  (0, _warning.warning)(!searchPlaceholder, '`searchPlaceholder` has been removed, please use `placeholder` instead');
  if (treeCheckStrictly && labelInValue === false) {
    (0, _warning.warning)(false, '`treeCheckStrictly` will force set `labelInValue` to `true`.');
  }
  if (labelInValue || treeCheckStrictly) {
    (0, _warning.warning)((0, _valueUtil.toArray)(value).every(function (val) {
      return val && (0, _typeof2.default)(val) === 'object' && 'value' in val;
    }), 'Invalid prop `value` supplied to `TreeSelect`. You should use { label: string, value: string | number } or [{ label: string, value: string | number }] instead.');
  }
  if (treeCheckStrictly || multiple || treeCheckable) {
    (0, _warning.warning)(!value || Array.isArray(value), '`value` should be an array when `TreeSelect` is checkable or multiple.');
  } else {
    (0, _warning.warning)(!Array.isArray(value), '`value` should not be array when `TreeSelect` is single mode.');
  }
}
var _default = warningProps;
exports.default = _default;