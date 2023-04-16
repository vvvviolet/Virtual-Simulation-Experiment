"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = dropIndicatorRender;
exports.offset = void 0;
var _vue = require("vue");
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var offset = 4;
exports.offset = offset;
function dropIndicatorRender(props) {
  var _style;
  var dropPosition = props.dropPosition,
    dropLevelOffset = props.dropLevelOffset,
    prefixCls = props.prefixCls,
    indent = props.indent,
    _props$direction = props.direction,
    direction = _props$direction === void 0 ? 'ltr' : _props$direction;
  var startPosition = direction === 'ltr' ? 'left' : 'right';
  var endPosition = direction === 'ltr' ? 'right' : 'left';
  var style = (_style = {}, (0, _defineProperty2.default)(_style, startPosition, "".concat(-dropLevelOffset * indent + offset, "px")), (0, _defineProperty2.default)(_style, endPosition, 0), _style);
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
  return (0, _vue.createVNode)("div", {
    "style": style,
    "class": "".concat(prefixCls, "-drop-indicator")
  }, null);
}