"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = require("vue");
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _classNames = _interopRequireDefault(require("../_util/classNames"));
var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));
var _context = require("./context");
var _Item = _interopRequireDefault(require("./Item"));
var _excluded = ["component"],
  _excluded2 = ["className"],
  _excluded3 = ["class"];
var _default2 = (0, _vue.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  name: 'RawItem',
  inheritAttrs: false,
  props: {
    component: _vueTypes.default.any,
    title: _vueTypes.default.any,
    id: String,
    onMouseenter: {
      type: Function
    },
    onMouseleave: {
      type: Function
    },
    onClick: {
      type: Function
    },
    onKeydown: {
      type: Function
    },
    onFocus: {
      type: Function
    }
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
      attrs = _ref.attrs;
    var context = (0, _context.useInjectOverflowContext)();
    return function () {
      // Render directly when context not provided
      if (!context.value) {
        var _slots$default;
        var _props$component = props.component,
          Component = _props$component === void 0 ? 'div' : _props$component,
          _restProps = (0, _objectWithoutProperties2.default)(props, _excluded);
        return (0, _vue.createVNode)(Component, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, _restProps), attrs), {
          default: function _default() {
            return [(_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)];
          }
        });
      }
      var _context$value = context.value,
        contextClassName = _context$value.className,
        restContext = (0, _objectWithoutProperties2.default)(_context$value, _excluded2);
      var className = attrs.class,
        restProps = (0, _objectWithoutProperties2.default)(attrs, _excluded3);
      // Do not pass context to sub item to avoid multiple measure
      return (0, _vue.createVNode)(_context.OverflowContextProvider, {
        "value": null
      }, {
        default: function _default() {
          return [(0, _vue.createVNode)(_Item.default, (0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({
            "class": (0, _classNames.default)(contextClassName, className)
          }, restContext), restProps), props), slots)];
        }
      });
    };
  }
});
exports.default = _default2;