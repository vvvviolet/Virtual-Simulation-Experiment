"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = require("vue");
function Panel(_, _ref) {
  var _slots$default;
  var slots = _ref.slots;
  return (0, _vue.createVNode)("div", null, [(_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)]);
}
Panel.displayName = 'Panel';
var _default = Panel;
exports.default = _default;