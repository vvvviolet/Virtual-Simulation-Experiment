import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { createVNode as _createVNode } from "vue";
import { defineComponent, computed } from 'vue';
import useConfigInject from '../_util/hooks/useConfigInject';
export var cardGridProps = function cardGridProps() {
  return {
    prefixCls: String,
    hoverable: {
      type: Boolean,
      default: true
    }
  };
};
export default defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'ACardGrid',
  __ANT_CARD_GRID: true,
  props: cardGridProps(),
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var _useConfigInject = useConfigInject('card', props),
      prefixCls = _useConfigInject.prefixCls;
    var classNames = computed(function () {
      var _ref2;
      return _ref2 = {}, _defineProperty(_ref2, "".concat(prefixCls.value, "-grid"), true), _defineProperty(_ref2, "".concat(prefixCls.value, "-grid-hoverable"), props.hoverable), _ref2;
    });
    return function () {
      var _slots$default;
      return _createVNode("div", {
        "class": classNames.value
      }, [(_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)]);
    };
  }
});