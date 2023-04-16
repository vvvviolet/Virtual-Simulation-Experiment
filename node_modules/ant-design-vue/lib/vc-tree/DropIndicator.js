"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DropIndicator;
var _vue = require("vue");
function DropIndicator(_ref) {
  var dropPosition = _ref.dropPosition,
    dropLevelOffset = _ref.dropLevelOffset,
    indent = _ref.indent;
  var style = {
    pointerEvents: 'none',
    position: 'absolute',
    right: 0,
    backgroundColor: 'red',
    height: "".concat(2, "px")
  };
  switch (dropPosition) {
    case -1:
      style.top = 0;
      style.left = "".concat(-dropLevelOffset * indent, "px");
      break;
    case 1:
      style.bottom = 0;
      style.left = "".concat(-dropLevelOffset * indent, "px");
      break;
    case 0:
      style.bottom = 0;
      style.left = "".concat(indent);
      break;
  }
  return (0, _vue.createVNode)("div", {
    "style": style
  }, null);
}