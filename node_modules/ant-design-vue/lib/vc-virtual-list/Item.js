"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = require("vue");
var _propsUtil = require("../_util/props-util");
var Item = function Item(_ref, _ref2) {
  var _slots$default;
  var setRef = _ref.setRef;
  var slots = _ref2.slots;
  var children = (0, _propsUtil.flattenChildren)((_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots));
  return children && children.length ? (0, _vue.cloneVNode)(children[0], {
    ref: setRef
  }) : children;
};
Item.props = {
  setRef: {
    type: Function,
    default: function _default() {}
  }
};
var _default2 = Item;
exports.default = _default2;