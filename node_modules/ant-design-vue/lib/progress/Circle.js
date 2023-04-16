"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = require("vue");
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _colors = require("@ant-design/colors");
var _vcProgress = require("../vc-progress");
var _utils = require("./utils");
var _props = require("./props");
function getPercentage(_ref) {
  var percent = _ref.percent,
    success = _ref.success,
    successPercent = _ref.successPercent;
  var realSuccessPercent = (0, _utils.validProgress)((0, _utils.getSuccessPercent)({
    success: success,
    successPercent: successPercent
  }));
  return [realSuccessPercent, (0, _utils.validProgress)((0, _utils.validProgress)(percent) - realSuccessPercent)];
}
function getStrokeColor(_ref2) {
  var _ref2$success = _ref2.success,
    success = _ref2$success === void 0 ? {} : _ref2$success,
    strokeColor = _ref2.strokeColor;
  var successColor = success.strokeColor;
  return [successColor || _colors.presetPrimaryColors.green, strokeColor || null];
}
var _default = (0, _vue.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  name: 'Circle',
  inheritAttrs: false,
  props: (0, _props.progressProps)(),
  setup: function setup(props, _ref3) {
    var slots = _ref3.slots;
    var gapDeg = (0, _vue.computed)(function () {
      // Support gapDeg = 0 when type = 'dashboard'
      if (props.gapDegree || props.gapDegree === 0) {
        return props.gapDegree;
      }
      if (props.type === 'dashboard') {
        return 75;
      }
      return undefined;
    });
    var circleStyle = (0, _vue.computed)(function () {
      var circleSize = props.width || 120;
      return {
        width: typeof circleSize === 'number' ? "".concat(circleSize, "px") : circleSize,
        height: typeof circleSize === 'number' ? "".concat(circleSize, "px") : circleSize,
        fontSize: "".concat(circleSize * 0.15 + 6, "px")
      };
    });
    var circleWidth = (0, _vue.computed)(function () {
      return props.strokeWidth || 6;
    });
    var gapPos = (0, _vue.computed)(function () {
      return props.gapPosition || props.type === 'dashboard' && 'bottom' || 'top';
    });
    // using className to style stroke color
    var percent = (0, _vue.computed)(function () {
      return getPercentage(props);
    });
    var isGradient = (0, _vue.computed)(function () {
      return Object.prototype.toString.call(props.strokeColor) === '[object Object]';
    });
    var strokeColor = (0, _vue.computed)(function () {
      return getStrokeColor({
        success: props.success,
        strokeColor: props.strokeColor
      });
    });
    var wrapperClassName = (0, _vue.computed)(function () {
      var _ref4;
      return _ref4 = {}, (0, _defineProperty2.default)(_ref4, "".concat(props.prefixCls, "-inner"), true), (0, _defineProperty2.default)(_ref4, "".concat(props.prefixCls, "-circle-gradient"), isGradient.value), _ref4;
    });
    return function () {
      var _slots$default;
      return (0, _vue.createVNode)("div", {
        "class": wrapperClassName.value,
        "style": circleStyle.value
      }, [(0, _vue.createVNode)(_vcProgress.Circle, {
        "percent": percent.value,
        "strokeWidth": circleWidth.value,
        "trailWidth": circleWidth.value,
        "strokeColor": strokeColor.value,
        "strokeLinecap": props.strokeLinecap,
        "trailColor": props.trailColor,
        "prefixCls": props.prefixCls,
        "gapDegree": gapDeg.value,
        "gapPosition": gapPos.value
      }, null), (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)]);
    };
  }
});
exports.default = _default;