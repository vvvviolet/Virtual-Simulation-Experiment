"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stepsProps = exports.default = void 0;
var _vue = require("vue");
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _props = require("./props");
var stepsProps = function stepsProps() {
  return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, (0, _props.progressProps)()), {}, {
    steps: Number,
    size: {
      type: String
    },
    strokeColor: String,
    trailColor: String
  });
};
exports.stepsProps = stepsProps;
var _default = (0, _vue.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  name: 'Steps',
  props: stepsProps(),
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var current = (0, _vue.computed)(function () {
      return Math.round(props.steps * ((props.percent || 0) / 100));
    });
    var stepWidth = (0, _vue.computed)(function () {
      return props.size === 'small' ? 2 : 14;
    });
    var styledSteps = (0, _vue.computed)(function () {
      var steps = props.steps,
        _props$strokeWidth = props.strokeWidth,
        strokeWidth = _props$strokeWidth === void 0 ? 8 : _props$strokeWidth,
        strokeColor = props.strokeColor,
        trailColor = props.trailColor,
        prefixCls = props.prefixCls;
      var temp = [];
      for (var i = 0; i < steps; i += 1) {
        var _cls;
        var cls = (_cls = {}, (0, _defineProperty2.default)(_cls, "".concat(prefixCls, "-steps-item"), true), (0, _defineProperty2.default)(_cls, "".concat(prefixCls, "-steps-item-active"), i <= current.value - 1), _cls);
        temp.push((0, _vue.createVNode)("div", {
          "key": i,
          "class": cls,
          "style": {
            backgroundColor: i <= current.value - 1 ? strokeColor : trailColor,
            width: "".concat(stepWidth.value, "px"),
            height: "".concat(strokeWidth, "px")
          }
        }, null));
      }
      return temp;
    });
    return function () {
      var _slots$default;
      return (0, _vue.createVNode)("div", {
        "class": "".concat(props.prefixCls, "-steps-outer")
      }, [styledSteps.value, (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)]);
    };
  }
});
exports.default = _default;