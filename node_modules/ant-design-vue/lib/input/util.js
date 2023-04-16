"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getInputClassName = getInputClassName;
exports.hasAddon = hasAddon;
exports.hasPrefixSuffix = hasPrefixSuffix;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _classNames2 = _interopRequireDefault(require("../_util/classNames"));
var _propsUtil = require("../_util/props-util");
function getInputClassName(prefixCls, bordered, size, disabled, direction) {
  var _classNames;
  return (0, _classNames2.default)(prefixCls, (_classNames = {}, (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-sm"), size === 'small'), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-lg"), size === 'large'), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-disabled"), disabled), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-borderless"), !bordered), _classNames));
}
var isValid = function isValid(value) {
  return value !== undefined && value !== null && (Array.isArray(value) ? (0, _propsUtil.filterEmpty)(value).length : true);
};
function hasPrefixSuffix(propsAndSlots) {
  return isValid(propsAndSlots.prefix) || isValid(propsAndSlots.suffix) || isValid(propsAndSlots.allowClear);
}
function hasAddon(propsAndSlots) {
  return isValid(propsAndSlots.addonBefore) || isValid(propsAndSlots.addonAfter);
}