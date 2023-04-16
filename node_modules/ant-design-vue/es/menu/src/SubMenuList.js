import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { createVNode as _createVNode } from "vue";
import classNames from '../../_util/classNames';
import { useInjectMenu } from './hooks/useMenuContext';
var InternalSubMenuList = function InternalSubMenuList(_props, _ref) {
  var _slots$default;
  var slots = _ref.slots,
    attrs = _ref.attrs;
  var _useInjectMenu = useInjectMenu(),
    prefixCls = _useInjectMenu.prefixCls,
    mode = _useInjectMenu.mode;
  return _createVNode("ul", _objectSpread(_objectSpread({}, attrs), {}, {
    "class": classNames(prefixCls.value, "".concat(prefixCls.value, "-sub"), "".concat(prefixCls.value, "-").concat(mode.value === 'inline' ? 'inline' : 'vertical')),
    "data-menu-list": true
  }), [(_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)]);
};
InternalSubMenuList.displayName = 'SubMenuList';
export default InternalSubMenuList;