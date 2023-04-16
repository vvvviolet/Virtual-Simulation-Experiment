"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = require("vue");
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var Indent = function Indent(_ref) {
  var prefixCls = _ref.prefixCls,
    level = _ref.level,
    isStart = _ref.isStart,
    isEnd = _ref.isEnd;
  var baseClassName = "".concat(prefixCls, "-indent-unit");
  var list = [];
  for (var i = 0; i < level; i += 1) {
    var _ref2;
    list.push((0, _vue.createVNode)("span", {
      "key": i,
      "class": (_ref2 = {}, (0, _defineProperty2.default)(_ref2, baseClassName, true), (0, _defineProperty2.default)(_ref2, "".concat(baseClassName, "-start"), isStart[i]), (0, _defineProperty2.default)(_ref2, "".concat(baseClassName, "-end"), isEnd[i]), _ref2)
    }, null));
  }
  return (0, _vue.createVNode)("span", {
    "aria-hidden": "true",
    "class": "".concat(prefixCls, "-indent")
  }, [list]);
};
var _default = Indent;
exports.default = _default;