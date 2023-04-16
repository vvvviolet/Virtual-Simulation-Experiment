import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { createVNode as _createVNode } from "vue";
import { useInjectCascader } from '../context';
export default function Checkbox(_ref) {
  var _ref2;
  var prefixCls = _ref.prefixCls,
    checked = _ref.checked,
    halfChecked = _ref.halfChecked,
    disabled = _ref.disabled,
    onClick = _ref.onClick;
  var _useInjectCascader = useInjectCascader(),
    customSlots = _useInjectCascader.customSlots,
    checkable = _useInjectCascader.checkable;
  var mergedCheckable = checkable.value !== false ? customSlots.value.checkable : checkable.value;
  var customCheckbox = typeof mergedCheckable === 'function' ? mergedCheckable() : typeof mergedCheckable === 'boolean' ? null : mergedCheckable;
  return _createVNode("span", {
    "class": (_ref2 = {}, _defineProperty(_ref2, prefixCls, true), _defineProperty(_ref2, "".concat(prefixCls, "-checked"), checked), _defineProperty(_ref2, "".concat(prefixCls, "-indeterminate"), !checked && halfChecked), _defineProperty(_ref2, "".concat(prefixCls, "-disabled"), disabled), _ref2),
    "onClick": onClick
  }, [customCheckbox]);
}
Checkbox.props = ['prefixCls', 'checked', 'halfChecked', 'disabled', 'onClick'];
Checkbox.displayName = 'Checkbox';
Checkbox.inheritAttrs = false;