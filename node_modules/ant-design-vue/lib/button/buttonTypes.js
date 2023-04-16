"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buttonProps = void 0;
exports.convertLegacyProps = convertLegacyProps;
exports.default = void 0;
var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));
function convertLegacyProps(type) {
  if (type === 'danger') {
    return {
      danger: true
    };
  }
  return {
    type: type
  };
}
var buttonProps = function buttonProps() {
  return {
    prefixCls: String,
    type: String,
    htmlType: {
      type: String,
      default: 'button'
    },
    shape: {
      type: String
    },
    size: {
      type: String
    },
    loading: {
      type: [Boolean, Object],
      default: function _default() {
        return false;
      }
    },
    disabled: {
      type: Boolean,
      default: undefined
    },
    ghost: {
      type: Boolean,
      default: undefined
    },
    block: {
      type: Boolean,
      default: undefined
    },
    danger: {
      type: Boolean,
      default: undefined
    },
    icon: _vueTypes.default.any,
    href: String,
    target: String,
    title: String,
    onClick: {
      type: Function
    },
    onMousedown: {
      type: Function
    }
  };
};
exports.buttonProps = buttonProps;
var _default2 = buttonProps;
exports.default = _default2;