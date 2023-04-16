import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { createVNode as _createVNode } from "vue";
import useConfigInject from '../../_util/hooks/useConfigInject';
import { computed, defineComponent } from 'vue';
export var menuDividerProps = function menuDividerProps() {
  return {
    prefixCls: String,
    dashed: Boolean
  };
};
export default defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'AMenuDivider',
  props: menuDividerProps(),
  setup: function setup(props) {
    var _useConfigInject = useConfigInject('menu', props),
      prefixCls = _useConfigInject.prefixCls;
    var cls = computed(function () {
      var _ref;
      return _ref = {}, _defineProperty(_ref, "".concat(prefixCls.value, "-item-divider"), true), _defineProperty(_ref, "".concat(prefixCls.value, "-item-divider-dashed"), !!props.dashed), _ref;
    });
    return function () {
      return _createVNode("li", {
        "class": cls.value
      }, null);
    };
  }
});