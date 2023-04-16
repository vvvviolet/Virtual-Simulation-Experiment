"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.breadcrumbSeparatorProps = void 0;
var _vue = require("vue");
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _propsUtil = require("../_util/props-util");
var _useConfigInject2 = _interopRequireDefault(require("../_util/hooks/useConfigInject"));
var _excluded = ["separator", "class"];
var breadcrumbSeparatorProps = function breadcrumbSeparatorProps() {
  return {
    prefixCls: String
  };
};
exports.breadcrumbSeparatorProps = breadcrumbSeparatorProps;
var _default = (0, _vue.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  name: 'ABreadcrumbSeparator',
  __ANT_BREADCRUMB_SEPARATOR: true,
  inheritAttrs: false,
  props: breadcrumbSeparatorProps(),
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
      attrs = _ref.attrs;
    var _useConfigInject = (0, _useConfigInject2.default)('breadcrumb', props),
      prefixCls = _useConfigInject.prefixCls;
    return function () {
      var _slots$default;
      var separator = attrs.separator,
        className = attrs.class,
        restAttrs = (0, _objectWithoutProperties2.default)(attrs, _excluded);
      var children = (0, _propsUtil.flattenChildren)((_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots));
      return (0, _vue.createVNode)("span", (0, _objectSpread2.default)({
        "class": ["".concat(prefixCls.value, "-separator"), className]
      }, restAttrs), [children.length > 0 ? children : '/']);
    };
  }
});
exports.default = _default;