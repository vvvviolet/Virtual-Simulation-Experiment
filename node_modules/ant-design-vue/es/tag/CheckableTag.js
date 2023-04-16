import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { createVNode as _createVNode } from "vue";
import { defineComponent, computed } from 'vue';
import classNames from '../_util/classNames';
import useConfigInject from '../_util/hooks/useConfigInject';
var checkableTagProps = function checkableTagProps() {
  return {
    prefixCls: String,
    checked: {
      type: Boolean,
      default: undefined
    },
    onChange: {
      type: Function
    },
    onClick: {
      type: Function
    },
    'onUpdate:checked': Function
  };
};
var CheckableTag = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'ACheckableTag',
  props: checkableTagProps(),
  // emits: ['update:checked', 'change', 'click'],
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
      emit = _ref.emit;
    var _useConfigInject = useConfigInject('tag', props),
      prefixCls = _useConfigInject.prefixCls;
    var handleClick = function handleClick(e) {
      var checked = props.checked;
      emit('update:checked', !checked);
      emit('change', !checked);
      emit('click', e);
    };
    var cls = computed(function () {
      var _classNames;
      return classNames(prefixCls.value, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls.value, "-checkable"), true), _defineProperty(_classNames, "".concat(prefixCls.value, "-checkable-checked"), props.checked), _classNames));
    });
    return function () {
      var _slots$default;
      return _createVNode("span", {
        "class": cls.value,
        "onClick": handleClick
      }, [(_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)]);
    };
  }
});
export default CheckableTag;