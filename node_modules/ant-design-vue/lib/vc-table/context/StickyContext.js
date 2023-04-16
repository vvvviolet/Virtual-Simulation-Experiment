"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useProvideSticky = exports.useInjectSticky = void 0;
var _styleChecker = _interopRequireDefault(require("../../_util/styleChecker"));
var _vue = require("vue");
var supportSticky = (0, _vue.ref)(false);
var useProvideSticky = function useProvideSticky() {
  (0, _vue.onMounted)(function () {
    supportSticky.value = supportSticky.value || (0, _styleChecker.default)('position', 'sticky');
  });
};
exports.useProvideSticky = useProvideSticky;
var useInjectSticky = function useInjectSticky() {
  return supportSticky;
};
exports.useInjectSticky = useInjectSticky;