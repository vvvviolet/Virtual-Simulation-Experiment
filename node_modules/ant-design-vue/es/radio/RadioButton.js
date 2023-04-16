import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { createVNode as _createVNode } from "vue";
import { defineComponent, inject } from 'vue';
import Radio, { radioProps } from './Radio';
import useConfigInject from '../_util/hooks/useConfigInject';
export default defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'ARadioButton',
  props: radioProps(),
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var _useConfigInject = useConfigInject('radio-button', props),
      prefixCls = _useConfigInject.prefixCls;
    var radioGroupContext = inject('radioGroupContext', undefined);
    return function () {
      var _slots$default;
      var rProps = _objectSpread(_objectSpread({}, props), {}, {
        prefixCls: prefixCls.value
      });
      if (radioGroupContext) {
        rProps.onChange = radioGroupContext.onRadioChange;
        rProps.checked = rProps.value === radioGroupContext.stateValue.value;
        rProps.disabled = rProps.disabled || radioGroupContext.props.disabled;
      }
      return _createVNode(Radio, rProps, {
        default: function _default() {
          return [(_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)];
        }
      });
    };
  }
});