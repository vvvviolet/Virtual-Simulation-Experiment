import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { createVNode as _createVNode } from "vue";
import { computed, defineComponent } from 'vue';
import classNames from '../_util/classNames';
import initDefaultProps from '../_util/props-util/initDefaultProps';
import useConfigInject from '../_util/hooks/useConfigInject';
import Element, { skeletonElementProps } from './Element';
export var avatarProps = function avatarProps() {
  return _objectSpread(_objectSpread({}, skeletonElementProps()), {}, {
    shape: String
  });
};
var SkeletonAvatar = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'ASkeletonAvatar',
  props: initDefaultProps(avatarProps(), {
    size: 'default',
    shape: 'circle'
  }),
  setup: function setup(props) {
    var _useConfigInject = useConfigInject('skeleton', props),
      prefixCls = _useConfigInject.prefixCls;
    var cls = computed(function () {
      return classNames(prefixCls.value, "".concat(prefixCls.value, "-element"), _defineProperty({}, "".concat(prefixCls.value, "-active"), props.active));
    });
    return function () {
      return _createVNode("div", {
        "class": cls.value
      }, [_createVNode(Element, _objectSpread(_objectSpread({}, props), {}, {
        "prefixCls": "".concat(prefixCls.value, "-avatar")
      }), null)]);
    };
  }
});
export default SkeletonAvatar;