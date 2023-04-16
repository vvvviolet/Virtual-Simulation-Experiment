import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { createVNode as _createVNode } from "vue";
export var offset = 4;
export default function dropIndicatorRender(props) {
  var _style;
  var dropPosition = props.dropPosition,
    dropLevelOffset = props.dropLevelOffset,
    prefixCls = props.prefixCls,
    indent = props.indent,
    _props$direction = props.direction,
    direction = _props$direction === void 0 ? 'ltr' : _props$direction;
  var startPosition = direction === 'ltr' ? 'left' : 'right';
  var endPosition = direction === 'ltr' ? 'right' : 'left';
  var style = (_style = {}, _defineProperty(_style, startPosition, "".concat(-dropLevelOffset * indent + offset, "px")), _defineProperty(_style, endPosition, 0), _style);
  switch (dropPosition) {
    case -1:
      style.top = "".concat(-3, "px");
      break;
    case 1:
      style.bottom = "".concat(-3, "px");
      break;
    default:
      // dropPosition === 0
      style.bottom = "".concat(-3, "px");
      style[startPosition] = "".concat(indent + offset, "px");
      break;
  }
  return _createVNode("div", {
    "style": style,
    "class": "".concat(prefixCls, "-drop-indicator")
  }, null);
}