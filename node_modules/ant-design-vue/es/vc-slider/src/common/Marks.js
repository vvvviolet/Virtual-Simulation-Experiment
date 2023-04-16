import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _typeof from "@babel/runtime/helpers/esm/typeof";
import { createVNode as _createVNode } from "vue";
import supportsPassive from '../../../_util/supportsPassive';
import classNames from '../../../_util/classNames';
import { isValidElement } from '../../../_util/props-util';
var Marks = function Marks(_, _ref) {
  var attrs = _ref.attrs,
    slots = _ref.slots;
  var className = attrs.class,
    vertical = attrs.vertical,
    reverse = attrs.reverse,
    marks = attrs.marks,
    included = attrs.included,
    upperBound = attrs.upperBound,
    lowerBound = attrs.lowerBound,
    max = attrs.max,
    min = attrs.min,
    onClickLabel = attrs.onClickLabel;
  var marksKeys = Object.keys(marks);
  var customMark = slots.mark;
  var range = max - min;
  var elements = marksKeys.map(parseFloat).sort(function (a, b) {
    return a - b;
  }).map(function (point) {
    var _classNames;
    var markPoint = typeof marks[point] === 'function' ? marks[point]() : marks[point];
    var markPointIsObject = _typeof(markPoint) === 'object' && !isValidElement(markPoint);
    var markLabel = markPointIsObject ? markPoint.label : markPoint;
    if (!markLabel && markLabel !== 0) {
      return null;
    }
    if (customMark) {
      markLabel = customMark({
        point: point,
        label: markLabel
      });
    }
    var isActive = !included && point === upperBound || included && point <= upperBound && point >= lowerBound;
    var markClassName = classNames((_classNames = {}, _defineProperty(_classNames, "".concat(className, "-text"), true), _defineProperty(_classNames, "".concat(className, "-text-active"), isActive), _classNames));
    var bottomStyle = _defineProperty({
      marginBottom: '-50%'
    }, reverse ? 'top' : 'bottom', "".concat((point - min) / range * 100, "%"));
    var leftStyle = _defineProperty({
      transform: "translateX(".concat(reverse ? "50%" : "-50%", ")"),
      msTransform: "translateX(".concat(reverse ? "50%" : "-50%", ")")
    }, reverse ? 'right' : 'left', "".concat((point - min) / range * 100, "%"));
    var style = vertical ? bottomStyle : leftStyle;
    var markStyle = markPointIsObject ? _objectSpread(_objectSpread({}, style), markPoint.style) : style;
    var touchEvents = _defineProperty({}, supportsPassive ? 'onTouchstartPassive' : 'onTouchstart', function (e) {
      return onClickLabel(e, point);
    });
    return _createVNode("span", _objectSpread({
      "class": markClassName,
      "style": markStyle,
      "key": point,
      "onMousedown": function onMousedown(e) {
        return onClickLabel(e, point);
      }
    }, touchEvents), [markLabel]);
  });
  return _createVNode("div", {
    "class": className
  }, [elements]);
};
Marks.inheritAttrs = false;
export default Marks;