"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useProvideHover = exports.useInjectHover = exports.HoverContextKey = void 0;
var _vue = require("vue");
var HoverContextKey = Symbol('HoverContextProps');
exports.HoverContextKey = HoverContextKey;
var useProvideHover = function useProvideHover(props) {
  (0, _vue.provide)(HoverContextKey, props);
};
exports.useProvideHover = useProvideHover;
var useInjectHover = function useInjectHover() {
  return (0, _vue.inject)(HoverContextKey, {
    startRow: (0, _vue.ref)(-1),
    endRow: (0, _vue.ref)(-1),
    onHover: function onHover() {}
  });
};
exports.useInjectHover = useInjectHover;