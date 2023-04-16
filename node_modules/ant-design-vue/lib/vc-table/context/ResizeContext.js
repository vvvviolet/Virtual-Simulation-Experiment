"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useProvideResize = exports.useInjectResize = exports.ResizeContextKey = void 0;
var _vue = require("vue");
var ResizeContextKey = Symbol('ResizeContextProps');
exports.ResizeContextKey = ResizeContextKey;
var useProvideResize = function useProvideResize(props) {
  (0, _vue.provide)(ResizeContextKey, props);
};
exports.useProvideResize = useProvideResize;
var useInjectResize = function useInjectResize() {
  return (0, _vue.inject)(ResizeContextKey, {
    onColumnResize: function onColumnResize() {}
  });
};
exports.useInjectResize = useInjectResize;