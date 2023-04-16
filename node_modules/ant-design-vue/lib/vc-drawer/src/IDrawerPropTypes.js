"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.drawerProps = exports.drawerChildProps = void 0;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _vueTypes = _interopRequireDefault(require("../../_util/vue-types"));
var props = function props() {
  return {
    prefixCls: String,
    width: _vueTypes.default.oneOfType([_vueTypes.default.string, _vueTypes.default.number]),
    height: _vueTypes.default.oneOfType([_vueTypes.default.string, _vueTypes.default.number]),
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
  return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, props()), {}, {
    forceRender: {
      type: Boolean,
      default: undefined
    },
    getContainer: _vueTypes.default.oneOfType([_vueTypes.default.string, _vueTypes.default.func, _vueTypes.default.object, _vueTypes.default.looseBool])
  });
};
exports.drawerProps = drawerProps;
var drawerChildProps = function drawerChildProps() {
  return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, props()), {}, {
    getContainer: Function,
    getOpenCount: Function,
    scrollLocker: _vueTypes.default.any,
    switchScrollingEffect: Function
  });
};
exports.drawerChildProps = drawerChildProps;