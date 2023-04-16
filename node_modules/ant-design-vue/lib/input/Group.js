"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = require("vue");
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _useConfigInject2 = _interopRequireDefault(require("../_util/hooks/useConfigInject"));
var _default = (0, _vue.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  name: 'AInputGroup',
  props: {
    prefixCls: String,
    size: {
      type: String
    },
    compact: {
      type: Boolean,
      default: undefined
    },
    onMouseenter: {
      type: Function
    },
    onMouseleave: {
      type: Function
    },
    onFocus: {
      type: Function
    },
    onBlur: {
      type: Function
    }
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var _useConfigInject = (0, _useConfigInject2.default)('input-group', props),
      prefixCls = _useConfigInject.prefixCls,
      direction = _useConfigInject.direction;
    var cls = (0, _vue.computed)(function () {
      var _ref2;
      var pre = prefixCls.value;
      return _ref2 = {}, (0, _defineProperty2.default)(_ref2, "".concat(pre), true), (0, _defineProperty2.default)(_ref2, "".concat(pre, "-lg"), props.size === 'large'), (0, _defineProperty2.default)(_ref2, "".concat(pre, "-sm"), props.size === 'small'), (0, _defineProperty2.default)(_ref2, "".concat(pre, "-compact"), props.compact), (0, _defineProperty2.default)(_ref2, "".concat(pre, "-rtl"), direction.value === 'rtl'), _ref2;
    });
    return function () {
      var _slots$default;
      return (0, _vue.createVNode)("span", {
        "class": cls.value,
        "onMouseenter": props.onMouseenter,
        "onMouseleave": props.onMouseleave,
        "onFocus": props.onFocus,
        "onBlur": props.onBlur
      }, [(_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)]);
    };
  }
});
exports.default = _default;