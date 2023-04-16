import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { createVNode as _createVNode } from "vue";
import { computed, defineComponent } from 'vue';
import useConfigInject from '../_util/hooks/useConfigInject';
export default defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'AInputGroup',
  props: {
    prefixCls: String,
    size: {
      type: String
    },
    compact: {
      type: Boolean,
      default: undefined
    },
    onMouseenter: {
      type: Function
    },
    onMouseleave: {
      type: Function
    },
    onFocus: {
      type: Function
    },
    onBlur: {
      type: Function
    }
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var _useConfigInject = useConfigInject('input-group', props),
      prefixCls = _useConfigInject.prefixCls,
      direction = _useConfigInject.direction;
    var cls = computed(function () {
      var _ref2;
      var pre = prefixCls.value;
      return _ref2 = {}, _defineProperty(_ref2, "".concat(pre), true), _defineProperty(_ref2, "".concat(pre, "-lg"), props.size === 'large'), _defineProperty(_ref2, "".concat(pre, "-sm"), props.size === 'small'), _defineProperty(_ref2, "".concat(pre, "-compact"), props.compact), _defineProperty(_ref2, "".concat(pre, "-rtl"), direction.value === 'rtl'), _ref2;
    });
    return function () {
      var _slots$default;
      return _createVNode("span", {
        "class": cls.value,
        "onMouseenter": props.onMouseenter,
        "onMouseleave": props.onMouseleave,
        "onFocus": props.onFocus,
        "onBlur": props.onBlur
      }, [(_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)]);
    };
  }
});