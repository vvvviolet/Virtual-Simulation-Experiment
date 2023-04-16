"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sortGradient = exports.lineProps = exports.handleGradient = exports.default = void 0;
var _vue = require("vue");
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _colors = require("@ant-design/colors");
var _props = require("./props");
var _utils = require("./utils");
var _excluded = ["from", "to", "direction"];
var lineProps = function lineProps() {
  return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, (0, _props.progressProps)()), {}, {
    prefixCls: String,
    direction: {
      type: String
    }
  });
};
/**
 * {
 *   '0%': '#afc163',
 *   '75%': '#009900',
 *   '50%': 'green',     ====>     '#afc163 0%, #66FF00 25%, #00CC00 50%, #009900 75%, #ffffff 100%'
 *   '25%': '#66FF00',
 *   '100%': '#ffffff'
 * }
 */
exports.lineProps = lineProps;
var sortGradient = function sortGradient(gradients) {
  var tempArr = [];
  Object.keys(gradients).forEach(function (key) {
    var formattedKey = parseFloat(key.replace(/%/g, ''));
    if (!isNaN(formattedKey)) {
      tempArr.push({
        key: formattedKey,
        value: gradients[key]
      });
    }
  });
  tempArr = tempArr.sort(function (a, b) {
    return a.key - b.key;
  });
  return tempArr.map(function (_ref) {
    var key = _ref.key,
      value = _ref.value;
    return "".concat(value, " ").concat(key, "%");
  }).join(', ');
};
/**
 * Then this man came to realize the truth: Besides six pence, there is the moon. Besides bread and
 * butter, there is the bug. And... Besides women, there is the code.
 *
 * @example
 *   {
 *     "0%": "#afc163",
 *     "25%": "#66FF00",
 *     "50%": "#00CC00", // ====>  linear-gradient(to right, #afc163 0%, #66FF00 25%,
 *     "75%": "#009900", //        #00CC00 50%, #009900 75%, #ffffff 100%)
 *     "100%": "#ffffff"
 *   }
 */
exports.sortGradient = sortGradient;
var handleGradient = function handleGradient(strokeColor, directionConfig) {
  var _strokeColor$from = strokeColor.from,
    from = _strokeColor$from === void 0 ? _colors.presetPrimaryColors.blue : _strokeColor$from,
    _strokeColor$to = strokeColor.to,
    to = _strokeColor$to === void 0 ? _colors.presetPrimaryColors.blue : _strokeColor$to,
    _strokeColor$directio = strokeColor.direction,
    direction = _strokeColor$directio === void 0 ? directionConfig === 'rtl' ? 'to left' : 'to right' : _strokeColor$directio,
    rest = (0, _objectWithoutProperties2.default)(strokeColor, _excluded);
  if (Object.keys(rest).length !== 0) {
    var sortedGradients = sortGradient(rest);
    return {
      backgroundImage: "linear-gradient(".concat(direction, ", ").concat(sortedGradients, ")")
    };
  }
  return {
    backgroundImage: "linear-gradient(".concat(direction, ", ").concat(from, ", ").concat(to, ")")
  };
};
exports.handleGradient = handleGradient;
var _default = (0, _vue.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  name: 'Line',
  props: lineProps(),
  setup: function setup(props, _ref2) {
    var slots = _ref2.slots;
    var backgroundProps = (0, _vue.computed)(function () {
      var strokeColor = props.strokeColor,
        direction = props.direction;
      return strokeColor && typeof strokeColor !== 'string' ? handleGradient(strokeColor, direction) : {
        background: strokeColor
      };
    });
    var trailStyle = (0, _vue.computed)(function () {
      return props.trailColor ? {
        backgroundColor: props.trailColor
      } : undefined;
    });
    var percentStyle = (0, _vue.computed)(function () {
      var percent = props.percent,
        strokeWidth = props.strokeWidth,
        strokeLinecap = props.strokeLinecap,
        size = props.size;
      return (0, _objectSpread2.default)({
        width: "".concat((0, _utils.validProgress)(percent), "%"),
        height: "".concat(strokeWidth || (size === 'small' ? 6 : 8), "px"),
        borderRadius: strokeLinecap === 'square' ? 0 : ''
      }, backgroundProps.value);
    });
    var successPercent = (0, _vue.computed)(function () {
      return (0, _utils.getSuccessPercent)(props);
    });
    var successPercentStyle = (0, _vue.computed)(function () {
      var strokeWidth = props.strokeWidth,
        size = props.size,
        strokeLinecap = props.strokeLinecap,
        success = props.success;
      return {
        width: "".concat((0, _utils.validProgress)(successPercent.value), "%"),
        height: "".concat(strokeWidth || (size === 'small' ? 6 : 8), "px"),
        borderRadius: strokeLinecap === 'square' ? 0 : '',
        backgroundColor: success === null || success === void 0 ? void 0 : success.strokeColor
      };
    });
    return function () {
      var _slots$default;
      return (0, _vue.createVNode)(_vue.Fragment, null, [(0, _vue.createVNode)("div", {
        "class": "".concat(props.prefixCls, "-outer")
      }, [(0, _vue.createVNode)("div", {
        "class": "".concat(props.prefixCls, "-inner"),
        "style": trailStyle.value
      }, [(0, _vue.createVNode)("div", {
        "class": "".concat(props.prefixCls, "-bg"),
        "style": percentStyle.value
      }, null), successPercent.value !== undefined ? (0, _vue.createVNode)("div", {
        "class": "".concat(props.prefixCls, "-success-bg"),
        "style": successPercentStyle.value
      }, null) : null])]), (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)]);
    };
  }
});
exports.default = _default;