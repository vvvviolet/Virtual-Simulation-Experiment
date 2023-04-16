"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = require("vue");
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _common = require("./common");
var _types = require("./types");
var _initDefaultProps = _interopRequireDefault(require("../../_util/props-util/initDefaultProps"));
var _useRefs3 = _interopRequireDefault(require("../../_util/hooks/useRefs"));
var _excluded = ["prefixCls", "strokeWidth", "trailWidth", "gapDegree", "gapPosition", "trailColor", "strokeLinecap", "strokeColor"];
var gradientSeed = 0;
function stripPercentToNumber(percent) {
  return +percent.replace('%', '');
}
function toArray(value) {
  return Array.isArray(value) ? value : [value];
}
function getPathStyles(offset, percent, strokeColor, strokeWidth) {
  var gapDegree = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
  var gapPosition = arguments.length > 5 ? arguments[5] : undefined;
  var radius = 50 - strokeWidth / 2;
  var beginPositionX = 0;
  var beginPositionY = -radius;
  var endPositionX = 0;
  var endPositionY = -2 * radius;
  switch (gapPosition) {
    case 'left':
      beginPositionX = -radius;
      beginPositionY = 0;
      endPositionX = 2 * radius;
      endPositionY = 0;
      break;
    case 'right':
      beginPositionX = radius;
      beginPositionY = 0;
      endPositionX = -2 * radius;
      endPositionY = 0;
      break;
    case 'bottom':
      beginPositionY = radius;
      endPositionY = 2 * radius;
      break;
    default:
  }
  var pathString = "M 50,50 m ".concat(beginPositionX, ",").concat(beginPositionY, "\n   a ").concat(radius, ",").concat(radius, " 0 1 1 ").concat(endPositionX, ",").concat(-endPositionY, "\n   a ").concat(radius, ",").concat(radius, " 0 1 1 ").concat(-endPositionX, ",").concat(endPositionY);
  var len = Math.PI * 2 * radius;
  var pathStyle = {
    stroke: strokeColor,
    strokeDasharray: "".concat(percent / 100 * (len - gapDegree), "px ").concat(len, "px"),
    strokeDashoffset: "-".concat(gapDegree / 2 + offset / 100 * (len - gapDegree), "px"),
    transition: 'stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s, opacity .3s ease 0s' // eslint-disable-line
  };

  return {
    pathString: pathString,
    pathStyle: pathStyle
  };
}
var _default = (0, _vue.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  name: 'VCCircle',
  props: (0, _initDefaultProps.default)(_types.propTypes, _common.defaultProps),
  setup: function setup(props) {
    gradientSeed += 1;
    var gradientId = (0, _vue.ref)(gradientSeed);
    var percentList = (0, _vue.computed)(function () {
      return toArray(props.percent);
    });
    var strokeColorList = (0, _vue.computed)(function () {
      return toArray(props.strokeColor);
    });
    var _useRefs = (0, _useRefs3.default)(),
      _useRefs2 = (0, _slicedToArray2.default)(_useRefs, 2),
      setRef = _useRefs2[0],
      paths = _useRefs2[1];
    (0, _common.useTransitionDuration)(paths);
    var getStokeList = function getStokeList() {
      var prefixCls = props.prefixCls,
        strokeWidth = props.strokeWidth,
        strokeLinecap = props.strokeLinecap,
        gapDegree = props.gapDegree,
        gapPosition = props.gapPosition;
      var stackPtg = 0;
      return percentList.value.map(function (ptg, index) {
        var color = strokeColorList.value[index] || strokeColorList.value[strokeColorList.value.length - 1];
        var stroke = Object.prototype.toString.call(color) === '[object Object]' ? "url(#".concat(prefixCls, "-gradient-").concat(gradientId.value, ")") : '';
        var _getPathStyles = getPathStyles(stackPtg, ptg, color, strokeWidth, gapDegree, gapPosition),
          pathString = _getPathStyles.pathString,
          pathStyle = _getPathStyles.pathStyle;
        stackPtg += ptg;
        var pathProps = {
          key: index,
          d: pathString,
          stroke: stroke,
          'stroke-linecap': strokeLinecap,
          'stroke-width': strokeWidth,
          opacity: ptg === 0 ? 0 : 1,
          'fill-opacity': '0',
          class: "".concat(prefixCls, "-circle-path"),
          style: pathStyle
        };
        return (0, _vue.createVNode)("path", (0, _objectSpread2.default)({
          "ref": setRef(index)
        }, pathProps), null);
      });
    };
    return function () {
      var prefixCls = props.prefixCls,
        strokeWidth = props.strokeWidth,
        trailWidth = props.trailWidth,
        gapDegree = props.gapDegree,
        gapPosition = props.gapPosition,
        trailColor = props.trailColor,
        strokeLinecap = props.strokeLinecap,
        strokeColor = props.strokeColor,
        restProps = (0, _objectWithoutProperties2.default)(props, _excluded);
      var _getPathStyles2 = getPathStyles(0, 100, trailColor, strokeWidth, gapDegree, gapPosition),
        pathString = _getPathStyles2.pathString,
        pathStyle = _getPathStyles2.pathStyle;
      delete restProps.percent;
      var gradient = strokeColorList.value.find(function (color) {
        return Object.prototype.toString.call(color) === '[object Object]';
      });
      var pathFirst = {
        d: pathString,
        stroke: trailColor,
        'stroke-linecap': strokeLinecap,
        'stroke-width': trailWidth || strokeWidth,
        'fill-opacity': '0',
        class: "".concat(prefixCls, "-circle-trail"),
        style: pathStyle
      };
      return (0, _vue.createVNode)("svg", (0, _objectSpread2.default)({
        "class": "".concat(prefixCls, "-circle"),
        "viewBox": "0 0 100 100"
      }, restProps), [gradient && (0, _vue.createVNode)("defs", null, [(0, _vue.createVNode)("linearGradient", {
        "id": "".concat(prefixCls, "-gradient-").concat(gradientId.value),
        "x1": "100%",
        "y1": "0%",
        "x2": "0%",
        "y2": "0%"
      }, [Object.keys(gradient).sort(function (a, b) {
        return stripPercentToNumber(a) - stripPercentToNumber(b);
      }).map(function (key, index) {
        return (0, _vue.createVNode)("stop", {
          "key": index,
          "offset": key,
          "stop-color": gradient[key]
        }, null);
      })])]), (0, _vue.createVNode)("path", pathFirst, null), getStokeList().reverse()]);
    };
  }
});
exports.default = _default;