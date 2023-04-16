import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["separator", "class"];
import { createVNode as _createVNode } from "vue";
import { defineComponent } from 'vue';
import { flattenChildren } from '../_util/props-util';
import useConfigInject from '../_util/hooks/useConfigInject';
export var breadcrumbSeparatorProps = function breadcrumbSeparatorProps() {
  return {
    prefixCls: String
  };
};
export default defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'ABreadcrumbSeparator',
  __ANT_BREADCRUMB_SEPARATOR: true,
  inheritAttrs: false,
  props: breadcrumbSeparatorProps(),
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
      attrs = _ref.attrs;
    var _useConfigInject = useConfigInject('breadcrumb', props),
      prefixCls = _useConfigInject.prefixCls;
    return function () {
      var _slots$default;
      var separator = attrs.separator,
        className = attrs.class,
        restAttrs = _objectWithoutProperties(attrs, _excluded);
      var children = flattenChildren((_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots));
      return _createVNode("span", _objectSpread({
        "class": ["".concat(prefixCls.value, "-separator"), className]
      }, restAttrs), [children.length > 0 ? children : '/']);
    };
  }
});