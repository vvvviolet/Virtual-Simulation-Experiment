import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
var _excluded = ["prefixCls", "strokeWidth", "trailWidth", "gapDegree", "gapPosition", "trailColor", "strokeLinecap", "strokeColor"];
import { createVNode as _createVNode } from "vue";
import { useTransitionDuration, defaultProps } from './common';
import { propTypes } from './types';
import { computed, defineComponent, ref } from 'vue';
import initDefaultProps from '../../_util/props-util/initDefaultProps';
import useRefs from '../../_util/hooks/useRefs';
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
export default defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'VCCircle',
  props: initDefaultProps(propTypes, defaultProps),
  setup: function setup(props) {
    gradientSeed += 1;
    var gradientId = ref(gradientSeed);
    var percentList = computed(function () {
      return toArray(props.percent);
    });
    var strokeColorList = computed(function () {
      return toArray(props.strokeColor);
    });
    var _useRefs = useRefs(),
      _useRefs2 = _slicedToArray(_useRefs, 2),
      setRef = _useRefs2[0],
      paths = _useRefs2[1];
    useTransitionDuration(paths);
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
        return _createVNode("path", _objectSpread({
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
        restProps = _objectWithoutProperties(props, _excluded);
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
      return _createVNode("svg", _objectSpread({
        "class": "".concat(prefixCls, "-circle"),
        "viewBox": "0 0 100 100"
      }, restProps), [gradient && _createVNode("defs", null, [_createVNode("linearGradient", {
        "id": "".concat(prefixCls, "-gradient-").concat(gradientId.value),
        "x1": "100%",
        "y1": "0%",
        "x2": "0%",
        "y2": "0%"
      }, [Object.keys(gradient).sort(function (a, b) {
        return stripPercentToNumber(a) - stripPercentToNumber(b);
      }).map(function (key, index) {
        return _createVNode("stop", {
          "key": index,
          "offset": key,
          "stop-color": gradient[key]
        }, null);
      })])]), _createVNode("path", pathFirst, null), getStokeList().reverse()]);
    };
  }
});