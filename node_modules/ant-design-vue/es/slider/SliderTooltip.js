import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { createVNode as _createVNode, resolveDirective as _resolveDirective } from "vue";
import { onBeforeUnmount, watch, onActivated, defineComponent, ref } from 'vue';
import Tooltip, { tooltipProps } from '../tooltip';
import raf from '../_util/raf';
export default defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'SliderTooltip',
  inheritAttrs: false,
  props: tooltipProps(),
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs,
      slots = _ref.slots;
    var innerRef = ref(null);
    var rafRef = ref(null);
    function cancelKeepAlign() {
      raf.cancel(rafRef.value);
      rafRef.value = null;
    }
    function keepAlign() {
      rafRef.value = raf(function () {
        var _innerRef$value;
        (_innerRef$value = innerRef.value) === null || _innerRef$value === void 0 ? void 0 : _innerRef$value.forcePopupAlign();
        rafRef.value = null;
      });
    }
    var align = function align() {
      cancelKeepAlign();
      if (props.visible) {
        keepAlign();
      }
    };
    watch([function () {
      return props.visible;
    }, function () {
      return props.title;
    }], function () {
      align();
    }, {
      flush: 'post',
      immediate: true
    });
    onActivated(function () {
      align();
    });
    onBeforeUnmount(function () {
      cancelKeepAlign();
    });
    return function () {
      return _createVNode(Tooltip, _objectSpread(_objectSpread({
        "ref": innerRef
      }, props), attrs), slots);
    };
  }
});