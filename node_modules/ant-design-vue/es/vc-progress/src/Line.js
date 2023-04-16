import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
var _excluded = ["percent", "prefixCls", "strokeColor", "strokeLinecap", "strokeWidth", "trailColor", "trailWidth", "transition"];
import { createVNode as _createVNode } from "vue";
import useRefs from '../../_util/hooks/useRefs';
import { computed, defineComponent } from 'vue';
import initDefaultProps from '../../_util/props-util/initDefaultProps';
import { useTransitionDuration, defaultProps } from './common';
import { propTypes } from './types';
export default defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'Line',
  props: initDefaultProps(propTypes, defaultProps),
  setup: function setup(props) {
    var percentList = computed(function () {
      var percent = props.percent;
      return Array.isArray(percent) ? percent : [percent];
    });
    var percentListProps = computed(function () {
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
    var strokeColorList = computed(function () {
      var strokeColor = props.strokeColor;
      return Array.isArray(strokeColor) ? strokeColor : [strokeColor];
    });
    var _useRefs = useRefs(),
      _useRefs2 = _slicedToArray(_useRefs, 2),
      setRef = _useRefs2[0],
      paths = _useRefs2[1];
    useTransitionDuration(paths);
    var center = computed(function () {
      return props.strokeWidth / 2;
    });
    var right = computed(function () {
      return 100 - props.strokeWidth / 2;
    });
    var pathString = computed(function () {
      return "M ".concat(props.strokeLinecap === 'round' ? center.value : 0, ",").concat(center.value, "\n    L ").concat(props.strokeLinecap === 'round' ? right.value : 100, ",").concat(center.value);
    });
    var viewBoxString = computed(function () {
      return "0 0 100 ".concat(props.strokeWidth);
    });
    var pathFirst = computed(function () {
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
        restProps = _objectWithoutProperties(props, _excluded);
      delete restProps.gapPosition;
      return _createVNode("svg", _objectSpread({
        "class": "".concat(prefixCls, "-line"),
        "viewBox": viewBoxString.value,
        "preserveAspectRatio": "none"
      }, restProps), [_createVNode("path", pathFirst.value, null), percentListProps.value.map(function (pathProps, index) {
        return _createVNode("path", _objectSpread({
          "ref": setRef(index)
        }, pathProps), null);
      })]);
    };
  }
});