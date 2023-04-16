import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import PropTypes from '../_util/vue-types';
import buttonTypes from '../button/buttonTypes';
var dropdownProps = function dropdownProps() {
  return {
    arrow: {
      type: [Boolean, Object],
      default: undefined
    },
    trigger: {
      type: [Array, String]
    },
    overlay: PropTypes.any,
    visible: {
      type: Boolean,
      default: undefined
    },
    disabled: {
      type: Boolean,
      default: undefined
    },
    align: {
      type: Object
    },
    getPopupContainer: Function,
    prefixCls: String,
    transitionName: String,
    placement: String,
    overlayClassName: String,
    overlayStyle: {
      type: Object,
      default: undefined
    },
    forceRender: {
      type: Boolean,
      default: undefined
    },
    mouseEnterDelay: Number,
    mouseLeaveDelay: Number,
    openClassName: String,
    minOverlayWidthMatchTrigger: {
      type: Boolean,
      default: undefined
    },
    destroyPopupOnHide: {
      type: Boolean,
      default: undefined
    },
    onVisibleChange: {
      type: Function
    },
    'onUpdate:visible': {
      type: Function
    }
  };
};
var buttonTypesProps = buttonTypes();
var dropdownButtonProps = function dropdownButtonProps() {
  return _objectSpread(_objectSpread({}, dropdownProps()), {}, {
    type: buttonTypesProps.type,
    size: String,
    htmlType: buttonTypesProps.htmlType,
    href: String,
    disabled: {
      type: Boolean,
      default: undefined
    },
    prefixCls: String,
    icon: PropTypes.any,
    title: String,
    loading: buttonTypesProps.loading,
    onClick: {
      type: Function
    }
  });
};
export { dropdownProps, dropdownButtonProps };
export default dropdownProps;