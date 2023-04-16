import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["prefixCls", "class", "direction", "component"];
import { createVNode as _createVNode } from "vue";
import { defineComponent } from 'vue';
import useConfigInject from '../_util/hooks/useConfigInject';
import classNames from '../_util/classNames';
export var typographyProps = function typographyProps() {
  return {
    prefixCls: String,
    direction: String,
    // Form Internal use
    component: String
  };
};
var Typography = defineComponent({
  name: 'ATypography',
  inheritAttrs: false,
  props: typographyProps(),
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
      attrs = _ref.attrs;
    var _useConfigInject = useConfigInject('typography', props),
      prefixCls = _useConfigInject.prefixCls,
      direction = _useConfigInject.direction;
    return function () {
      var _slots$default;
      var _props$attrs = _objectSpread(_objectSpread({}, props), attrs),
        _prefixCls = _props$attrs.prefixCls,
        _className = _props$attrs.class,
        _direction = _props$attrs.direction,
        _props$attrs$componen = _props$attrs.component,
        Component = _props$attrs$componen === void 0 ? 'article' : _props$attrs$componen,
        restProps = _objectWithoutProperties(_props$attrs, _excluded);
      return _createVNode(Component, _objectSpread({
        "class": classNames(prefixCls.value, _defineProperty({}, "".concat(prefixCls.value, "-rtl"), direction.value === 'rtl'), attrs.class)
      }, restProps), {
        default: function _default() {
          return [(_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)];
        }
      });
    };
  }
});
export default Typography;