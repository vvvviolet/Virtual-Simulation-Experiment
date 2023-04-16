import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { createVNode as _createVNode } from "vue";
import { computed, defineComponent } from 'vue';
import { flattenChildren } from '../_util/props-util';
import useConfigInject from '../_util/hooks/useConfigInject';
import UnreachableException from '../_util/unreachableException';
export var buttonGroupProps = function buttonGroupProps() {
  return {
    prefixCls: String,
    size: {
      type: String
    }
  };
};
export default defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'AButtonGroup',
  props: buttonGroupProps(),
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var _useConfigInject = useConfigInject('btn-group', props),
      prefixCls = _useConfigInject.prefixCls,
      direction = _useConfigInject.direction;
    var classes = computed(function () {
      var _ref2;
      var size = props.size;
      // large => lg
      // small => sm
      var sizeCls = '';
      switch (size) {
        case 'large':
          sizeCls = 'lg';
          break;
        case 'small':
          sizeCls = 'sm';
          break;
        case 'middle':
        case undefined:
          break;
        default:
          // eslint-disable-next-line no-console
          console.warn(new UnreachableException(size).error);
      }
      return _ref2 = {}, _defineProperty(_ref2, "".concat(prefixCls.value), true), _defineProperty(_ref2, "".concat(prefixCls.value, "-").concat(sizeCls), sizeCls), _defineProperty(_ref2, "".concat(prefixCls.value, "-rtl"), direction.value === 'rtl'), _ref2;
    });
    return function () {
      var _slots$default;
      return _createVNode("div", {
        "class": classes.value
      }, [flattenChildren((_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots))]);
    };
  }
});