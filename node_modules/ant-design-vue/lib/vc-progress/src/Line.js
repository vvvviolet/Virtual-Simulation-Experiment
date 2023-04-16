"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = require("vue");
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _useRefs3 = _interopRequireDefault(require("../../_util/hooks/useRefs"));
var _initDefaultProps = _interopRequireDefault(require("../../_util/props-util/initDefaultProps"));
var _common = require("./common");
var _types = require("./types");
var _excluded = ["percent", "prefixCls", "strokeColor", "strokeLinecap", "strokeWidth", "trailColor", "trailWidth", "transition"];
var _default = (0, _vue.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  name: 'Line',
  props: (0, _initDefaultProps.default)(_types.propTypes, _common.defaultProps),
  setup: function setup(props) {
    var percentList = (0, _vue.computed)(function () {
      var percent = props.percent;
      return Array.isArray(percent) ? percent : [percent];
    });
    var percentListProps = (0, _vue.computed)(function () {
      var prefixCls = props.prefixCls,
        strokeLinecap = props.strokeLinecap,
        strokeWidth = props.strokeWidth,
        transition = props.transition;
      var stackPtg = 0;
      return percentList.value.map(function (ptg, index) {
        var dashPercent = 1;
        switch (strokeLinecap) {
          case 'round':
            dashPercent = 1 - strokeWidth / 100;
            break;
          case 'square':
            dashPercent = 1 - strokeWidth / 2 / 100;
            break;
          default:
            dashPercent = 1;
            break;
        }
        var pathStyle = {
          strokeDasharray: "".concat(ptg * dashPercent, "px, 100px"),
          strokeDashoffset: "-".concat(stackPtg, "px"),
          transition: transition || 'stroke-dashoffset 0.3s ease 0s, stroke-dasharray .3s ease 0s, stroke 0.3s linear'
        };
        var color = strokeColorList.value[index] || strokeColorList.value[strokeColorList.value.length - 1];
        stackPtg += ptg;
        var pathProps = {
          key: index,
          d: pathString.value,
          'stroke-linecap': strokeLinecap,
          stroke: color,
          'stroke-width': strokeWidth,
          'fill-opacity': '0',
          class: "".concat(prefixCls, "-line-path"),
          style: pathStyle
        };
        return pathProps;
      });
    });
    var strokeColorList = (0, _vue.computed)(function () {
      var strokeColor = props.strokeColor;
      return Array.isArray(strokeColor) ? strokeColor : [strokeColor];
    });
    var _useRefs = (0, _useRefs3.default)(),
      _useRefs2 = (0, _slicedToArray2.default)(_useRefs, 2),
      setRef = _useRefs2[0],
      paths = _useRefs2[1];
    (0, _common.useTransitionDuration)(paths);
    var center = (0, _vue.computed)(function () {
      return props.strokeWidth / 2;
    });
    var right = (0, _vue.computed)(function () {
      return 100 - props.strokeWidth / 2;
    });
    var pathString = (0, _vue.computed)(function () {
      return "M ".concat(props.strokeLinecap === 'round' ? center.value : 0, ",").concat(center.value, "\n    L ").concat(props.strokeLinecap === 'round' ? right.value : 100, ",").concat(center.value);
    });
    var viewBoxString = (0, _vue.computed)(function () {
      return "0 0 100 ".concat(props.strokeWidth);
    });
    var pathFirst = (0, _vue.computed)(function () {
      return {
        d: pathString.value,
        'stroke-linecap': props.strokeLinecap,
        stroke: props.trailColor,
        'stroke-width': props.trailWidth || props.strokeWidth,
        'fill-opacity': '0',
        class: "".concat(props.prefixCls, "-line-trail")
      };
    });
    return function () {
      var percent = props.percent,
        prefixCls = props.prefixCls,
        strokeColor = props.strokeColor,
        strokeLinecap = props.strokeLinecap,
        strokeWidth = props.strokeWidth,
        trailColor = props.trailColor,
        trailWidth = props.trailWidth,
        transition = props.transition,
        restProps = (0, _objectWithoutProperties2.default)(props, _excluded);
      delete restProps.gapPosition;
      return (0, _vue.createVNode)("svg", (0, _objectSpread2.default)({
        "class": "".concat(prefixCls, "-line"),
        "viewBox": viewBoxString.value,
        "preserveAspectRatio": "none"
      }, restProps), [(0, _vue.createVNode)("path", pathFirst.value, null), percentListProps.value.map(function (pathProps, index) {
        return (0, _vue.createVNode)("path", (0, _objectSpread2.default)({
          "ref": setRef(index)
        }, pathProps), null);
      })]);
    };
  }
});
exports.default = _default;