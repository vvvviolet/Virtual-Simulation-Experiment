"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.popupProps = exports.mobileProps = exports.innerProps = void 0;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var innerProps = {
  visible: Boolean,
  prefixCls: String,
  zIndex: Number,
  destroyPopupOnHide: Boolean,
  forceRender: Boolean,
  // Legacy Motion
  animation: [String, Object],
  transitionName: String,
  // Measure
  stretch: {
    type: String
  },
  // Align
  align: {
    type: Object
  },
  point: {
    type: Object
  },
  getRootDomNode: {
    type: Function
  },
  getClassNameFromAlign: {
    type: Function
  },
  onMouseenter: {
    type: Function
  },
  onMouseleave: {
    type: Function
  },
  onMousedown: {
    type: Function
  },
  onTouchstart: {
    type: Function
  }
};
exports.innerProps = innerProps;
var mobileProps = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, innerProps), {}, {
  mobile: {
    type: Object
  }
});
exports.mobileProps = mobileProps;
var popupProps = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, innerProps), {}, {
  mask: Boolean,
  mobile: {
    type: Object
  },
  maskAnimation: String,
  maskTransitionName: String
});
exports.popupProps = popupProps;