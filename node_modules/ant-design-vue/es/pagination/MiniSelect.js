import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { createVNode as _createVNode, resolveDirective as _resolveDirective } from "vue";
import { defineComponent } from 'vue';
import VcSelect, { selectProps } from '../select';
export default defineComponent({
  compatConfig: {
    MODE: 3
  },
  inheritAttrs: false,
  props: selectProps(),
  Option: VcSelect.Option,
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs,
      slots = _ref.slots;
    return function () {
      var selelctProps = _objectSpread(_objectSpread({}, props), {}, {
        size: 'small'
      }, attrs);
      return _createVNode(VcSelect, selelctProps, slots);
    };
  }
});