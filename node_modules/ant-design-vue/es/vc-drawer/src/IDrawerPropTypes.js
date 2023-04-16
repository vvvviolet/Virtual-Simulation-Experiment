import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import PropTypes from '../../_util/vue-types';
var props = function props() {
  return {
    prefixCls: String,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    style: {
      type: Object,
      default: undefined
    },
    class: String,
    placement: {
      type: String
    },
    wrapperClassName: String,
    level: {
      type: [String, Array]
    },
    levelMove: {
      type: [Number, Function, Array]
    },
    duration: String,
    ease: String,
    showMask: {
      type: Boolean,
      default: undefined
    },
    maskClosable: {
      type: Boolean,
      default: undefined
    },
    maskStyle: {
      type: Object,
      default: undefined
    },
    afterVisibleChange: Function,
    keyboard: {
      type: Boolean,
      default: undefined
    },
    contentWrapperStyle: {
      type: Object,
      default: undefined
    },
    autofocus: {
      type: Boolean,
      default: undefined
    },
    open: {
      type: Boolean,
      default: undefined
    }
  };
};
var drawerProps = function drawerProps() {
  return _objectSpread(_objectSpread({}, props()), {}, {
    forceRender: {
      type: Boolean,
      default: undefined
    },
    getContainer: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object, PropTypes.looseBool])
  });
};
var drawerChildProps = function drawerChildProps() {
  return _objectSpread(_objectSpread({}, props()), {}, {
    getContainer: Function,
    getOpenCount: Function,
    scrollLocker: PropTypes.any,
    switchScrollingEffect: Function
  });
};
export { drawerProps, drawerChildProps };