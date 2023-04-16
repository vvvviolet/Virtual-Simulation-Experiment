"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dropdownProps = exports.dropdownButtonProps = exports.default = void 0;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));
var _buttonTypes = _interopRequireDefault(require("../button/buttonTypes"));
var dropdownProps = function dropdownProps() {
  return {
    arrow: {
      type: [Boolean, Object],
      default: undefined
    },
    trigger: {
      type: [Array, String]
    },
    overlay: _vueTypes.default.any,
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
exports.dropdownProps = dropdownProps;
var buttonTypesProps = (0, _buttonTypes.default)();
var dropdownButtonProps = function dropdownButtonProps() {
  return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, dropdownProps()), {}, {
    type: buttonTypesProps.type,
    size: String,
    htmlType: buttonTypesProps.htmlType,
    href: String,
    disabled: {
      type: Boolean,
      default: undefined
    },
    prefixCls: String,
    icon: _vueTypes.default.any,
    title: String,
    loading: buttonTypesProps.loading,
    onClick: {
      type: Function
    }
  });
};
exports.dropdownButtonProps = dropdownButtonProps;
var _default = dropdownProps;
exports.default = _default;