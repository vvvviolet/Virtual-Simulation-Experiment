"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.typographyProps = exports.default = void 0;
var _vue = require("vue");
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _useConfigInject2 = _interopRequireDefault(require("../_util/hooks/useConfigInject"));
var _classNames2 = _interopRequireDefault(require("../_util/classNames"));
var _excluded = ["prefixCls", "class", "direction", "component"];
var typographyProps = function typographyProps() {
  return {
    prefixCls: String,
    direction: String,
    // Form Internal use
    component: String
  };
};
exports.typographyProps = typographyProps;
var Typography = (0, _vue.defineComponent)({
  name: 'ATypography',
  inheritAttrs: false,
  props: typographyProps(),
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
      attrs = _ref.attrs;
    var _useConfigInject = (0, _useConfigInject2.default)('typography', props),
      prefixCls = _useConfigInject.prefixCls,
      direction = _useConfigInject.direction;
    return function () {
      var _slots$default;
      var _props$attrs = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, props), attrs),
        _prefixCls = _props$attrs.prefixCls,
        _className = _props$attrs.class,
        _direction = _props$attrs.direction,
        _props$attrs$componen = _props$attrs.component,
        Component = _props$attrs$componen === void 0 ? 'article' : _props$attrs$componen,
        restProps = (0, _objectWithoutProperties2.default)(_props$attrs, _excluded);
      return (0, _vue.createVNode)(Component, (0, _objectSpread2.default)({
        "class": (0, _classNames2.default)(prefixCls.value, (0, _defineProperty2.default)({}, "".concat(prefixCls.value, "-rtl"), direction.value === 'rtl'), attrs.class)
      }, restProps), {
        default: function _default() {
          return [(_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)];
        }
      });
    };
  }
});
var _default2 = Typography;
exports.default = _default2;