import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _objectDestructuringEmpty from "@babel/runtime/helpers/esm/objectDestructuringEmpty";
import { withDirectives as _withDirectives, createVNode as _createVNode, vShow as _vShow } from "vue";
import { defineComponent } from 'vue';
import Transition, { getTransitionProps } from '../_util/transition';
export default defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'Mask',
  props: {
    prefixCls: String,
    visible: Boolean,
    motionName: String,
    maskProps: Object
  },
  setup: function setup(props, _ref) {
    _objectDestructuringEmpty(_ref);
    return function () {
      var prefixCls = props.prefixCls,
        visible = props.visible,
        maskProps = props.maskProps,
        motionName = props.motionName;
      var transitionProps = getTransitionProps(motionName);
      return _createVNode(Transition, transitionProps, {
        default: function _default() {
          return [_withDirectives(_createVNode("div", _objectSpread({
            "class": "".concat(prefixCls, "-mask")
          }, maskProps), null), [[_vShow, visible]])];
        }
      });
    };
  }
});