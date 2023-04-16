"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = function _default() {
  return {
    trigger: [String, Array],
    visible: {
      type: Boolean,
      default: undefined
    },
    defaultVisible: {
      type: Boolean,
      default: undefined
    },
    placement: String,
    color: String,
    transitionName: String,
    overlayStyle: {
      type: Object,
      default: undefined
    },
    overlayClassName: String,
    openClassName: String,
    prefixCls: String,
    mouseEnterDelay: Number,
    mouseLeaveDelay: Number,
    getPopupContainer: Function,
    arrowPointAtCenter: {
      type: Boolean,
      default: undefined
    },
    autoAdjustOverflow: {
      type: [Boolean, Object],
      default: undefined
    },
    destroyTooltipOnHide: {
      type: Boolean,
      default: undefined
    },
    align: {
      type: Object,
      default: undefined
    },
    builtinPlacements: {
      type: Object,
      default: undefined
    },
    children: Array,
    onVisibleChange: Function,
    'onUpdate:visible': Function
  };
};
exports.default = _default;