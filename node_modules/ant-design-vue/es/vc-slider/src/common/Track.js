import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { createVNode as _createVNode } from "vue";
/* eslint-disable */
var Track = function Track(_, _ref) {
  var _ref2, _ref3;
  var attrs = _ref.attrs;
  var included = attrs.included,
    vertical = attrs.vertical,
    style = attrs.style,
    className = attrs.class;
  var length = attrs.length,
    offset = attrs.offset,
    reverse = attrs.reverse;
  if (length < 0) {
    reverse = !reverse;
    length = Math.abs(length);
    offset = 100 - offset;
  }
  var positonStyle = vertical ? (_ref2 = {}, _defineProperty(_ref2, reverse ? 'top' : 'bottom', "".concat(offset, "%")), _defineProperty(_ref2, reverse ? 'bottom' : 'top', 'auto'), _defineProperty(_ref2, "height", "".concat(length, "%")), _ref2) : (_ref3 = {}, _defineProperty(_ref3, reverse ? 'right' : 'left', "".concat(offset, "%")), _defineProperty(_ref3, reverse ? 'left' : 'right', 'auto'), _defineProperty(_ref3, "width", "".concat(length, "%")), _ref3);
  var elStyle = _objectSpread(_objectSpread({}, style), positonStyle);
  return included ? _createVNode("div", {
    "class": className,
    "style": elStyle
  }, null) : null;
};
Track.inheritAttrs = false;
export default Track;