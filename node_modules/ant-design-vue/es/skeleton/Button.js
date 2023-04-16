import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { createVNode as _createVNode } from "vue";
import { computed, defineComponent } from 'vue';
import classNames from '../_util/classNames';
import useConfigInject from '../_util/hooks/useConfigInject';
import { initDefaultProps } from '../_util/props-util';
import Element, { skeletonElementProps } from './Element';
export var skeletonButtonProps = function skeletonButtonProps() {
  return _objectSpread(_objectSpread({}, skeletonElementProps()), {}, {
    size: String,
    block: Boolean
  });
};
var SkeletonButton = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'ASkeletonButton',
  props: initDefaultProps(skeletonButtonProps(), {
    size: 'default'
  }),
  setup: function setup(props) {
    var _useConfigInject = useConfigInject('skeleton', props),
      prefixCls = _useConfigInject.prefixCls;
    var cls = computed(function () {
      var _classNames;
      return classNames(prefixCls.value, "".concat(prefixCls.value, "-element"), (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls.value, "-active"), props.active), _defineProperty(_classNames, "".concat(prefixCls.value, "-block"), props.block), _classNames));
    });
    return function () {
      return _createVNode("div", {
        "class": cls.value
      }, [_createVNode(Element, _objectSpread(_objectSpread({}, props), {}, {
        "prefixCls": "".concat(prefixCls.value, "-button")
      }), null)]);
    };
  }
});
export default SkeletonButton;