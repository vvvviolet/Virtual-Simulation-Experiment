import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import classNames from '../_util/classNames';
import { filterEmpty } from '../_util/props-util';
export function getInputClassName(prefixCls, bordered, size, disabled, direction) {
  var _classNames;
  return classNames(prefixCls, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-sm"), size === 'small'), _defineProperty(_classNames, "".concat(prefixCls, "-lg"), size === 'large'), _defineProperty(_classNames, "".concat(prefixCls, "-disabled"), disabled), _defineProperty(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _defineProperty(_classNames, "".concat(prefixCls, "-borderless"), !bordered), _classNames));
}
var isValid = function isValid(value) {
  return value !== undefined && value !== null && (Array.isArray(value) ? filterEmpty(value).length : true);
};
export function hasPrefixSuffix(propsAndSlots) {
  return isValid(propsAndSlots.prefix) || isValid(propsAndSlots.suffix) || isValid(propsAndSlots.allowClear);
}
export function hasAddon(propsAndSlots) {
  return isValid(propsAndSlots.addonBefore) || isValid(propsAndSlots.addonAfter);
}