"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useMergeProps;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _vue = require("vue");
// 仅用在函数式组件中，不用考虑响应式问题
function useMergeProps(props) {
  var attrs = (0, _vue.useAttrs)();
  return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, props), attrs);
}