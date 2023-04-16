"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Checkbox;
var _vue = require("vue");
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _context = require("../context");
function Checkbox(_ref) {
  var _ref2;
  var prefixCls = _ref.prefixCls,
    checked = _ref.checked,
    halfChecked = _ref.halfChecked,
    disabled = _ref.disabled,
    onClick = _ref.onClick;
  var _useInjectCascader = (0, _context.useInjectCascader)(),
    customSlots = _useInjectCascader.customSlots,
    checkable = _useInjectCascader.checkable;
  var mergedCheckable = checkable.value !== false ? customSlots.value.checkable : checkable.value;
  var customCheckbox = typeof mergedCheckable === 'function' ? mergedCheckable() : typeof mergedCheckable === 'boolean' ? null : mergedCheckable;
  return (0, _vue.createVNode)("span", {
    "class": (_ref2 = {}, (0, _defineProperty2.default)(_ref2, prefixCls, true), (0, _defineProperty2.default)(_ref2, "".concat(prefixCls, "-checked"), checked), (0, _defineProperty2.default)(_ref2, "".concat(prefixCls, "-indeterminate"), !checked && halfChecked), (0, _defineProperty2.default)(_ref2, "".concat(prefixCls, "-disabled"), disabled), _ref2),
    "onClick": onClick
  }, [customCheckbox]);
}
Checkbox.props = ['prefixCls', 'checked', 'halfChecked', 'disabled', 'onClick'];
Checkbox.displayName = 'Checkbox';
Checkbox.inheritAttrs = false;