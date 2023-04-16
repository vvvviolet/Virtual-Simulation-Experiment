"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.timelineItemProps = exports.default = void 0;
var _vue = require("vue");
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _classNames3 = _interopRequireDefault(require("../_util/classNames"));
var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));
var _initDefaultProps = _interopRequireDefault(require("../_util/props-util/initDefaultProps"));
var _type = require("../_util/type");
var _useConfigInject2 = _interopRequireDefault(require("../_util/hooks/useConfigInject"));
var timelineItemProps = function timelineItemProps() {
  return {
    prefixCls: String,
    color: String,
    dot: _vueTypes.default.any,
    pending: {
      type: Boolean,
      default: undefined
    },
    position: _vueTypes.default.oneOf((0, _type.tuple)('left', 'right', '')).def(''),
    label: _vueTypes.default.any
  };
};
exports.timelineItemProps = timelineItemProps;
var _default = (0, _vue.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  name: 'ATimelineItem',
  props: (0, _initDefaultProps.default)(timelineItemProps(), {
    color: 'blue',
    pending: false
  }),
  slots: ['dot', 'label'],
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var _useConfigInject = (0, _useConfigInject2.default)('timeline', props),
      prefixCls = _useConfigInject.prefixCls;
    return function () {
      var _slots$label, _slots$dot, _classNames, _classNames2, _slots$default;
      var _props$color = props.color,
        color = _props$color === void 0 ? '' : _props$color,
        pending = props.pending,
        _props$label = props.label,
        label = _props$label === void 0 ? (_slots$label = slots.label) === null || _slots$label === void 0 ? void 0 : _slots$label.call(slots) : _props$label,
        _props$dot = props.dot,
        dot = _props$dot === void 0 ? (_slots$dot = slots.dot) === null || _slots$dot === void 0 ? void 0 : _slots$dot.call(slots) : _props$dot;
      var itemClassName = (0, _classNames3.default)((_classNames = {}, (0, _defineProperty2.default)(_classNames, "".concat(prefixCls.value, "-item"), true), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls.value, "-item-pending"), pending), _classNames));
      var dotClassName = (0, _classNames3.default)((_classNames2 = {}, (0, _defineProperty2.default)(_classNames2, "".concat(prefixCls.value, "-item-head"), true), (0, _defineProperty2.default)(_classNames2, "".concat(prefixCls.value, "-item-head-custom"), dot), (0, _defineProperty2.default)(_classNames2, "".concat(prefixCls.value, "-item-head-").concat(color), true), _classNames2));
      var customColor = /blue|red|green|gray/.test(color || '') ? undefined : color;
      return (0, _vue.createVNode)("li", {
        "class": itemClassName
      }, [label && (0, _vue.createVNode)("div", {
        "class": "".concat(prefixCls.value, "-item-label")
      }, [label]), (0, _vue.createVNode)("div", {
        "class": "".concat(prefixCls.value, "-item-tail")
      }, null), (0, _vue.createVNode)("div", {
        "class": dotClassName,
        "style": {
          borderColor: customColor,
          color: customColor
        }
      }, [dot]), (0, _vue.createVNode)("div", {
        "class": "".concat(prefixCls.value, "-item-content")
      }, [(_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)])]);
    };
  }
});
exports.default = _default;