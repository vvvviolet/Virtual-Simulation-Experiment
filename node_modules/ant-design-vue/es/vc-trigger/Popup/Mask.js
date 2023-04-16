import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { withDirectives as _withDirectives, createVNode as _createVNode, resolveDirective as _resolveDirective } from "vue";
import { Transition } from 'vue';
import { getMotion } from '../utils/motionUtil';
export default function Mask(props) {
  var prefixCls = props.prefixCls,
    visible = props.visible,
    zIndex = props.zIndex,
    mask = props.mask,
    maskAnimation = props.maskAnimation,
    maskTransitionName = props.maskTransitionName;
  if (!mask) {
    return null;
  }
  var motion = {};
  if (maskTransitionName || maskAnimation) {
    motion = getMotion({
      prefixCls: prefixCls,
      transitionName: maskTransitionName,
      animation: maskAnimation
    });
  }
  return _createVNode(Transition, _objectSpread({
    "appear": true
  }, motion), {
    default: function _default() {
      return [_withDirectives(_createVNode("div", {
        "style": {
          zIndex: zIndex
        },
        "class": "".concat(prefixCls, "-mask")
      }, null), [[_resolveDirective("if"), visible]])];
    }
  });
}
Mask.displayName = 'Mask';