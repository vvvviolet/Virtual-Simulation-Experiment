"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = require("vue");
var FilterDropdownMenuWrapper = function FilterDropdownMenuWrapper(_props, _ref) {
  var _slots$default;
  var slots = _ref.slots;
  return (0, _vue.createVNode)("div", {
    "onClick": function onClick(e) {
      return e.stopPropagation();
    }
  }, [(_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)]);
};
var _default = FilterDropdownMenuWrapper;
exports.default = _default;