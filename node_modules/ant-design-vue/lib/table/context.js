"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useProvideTableContext = exports.useProvideSlots = exports.useInjectTableContext = exports.useInjectSlots = void 0;
var _vue = require("vue");
var SlotsContextKey = Symbol('SlotsContextProps');
var useProvideSlots = function useProvideSlots(props) {
  (0, _vue.provide)(SlotsContextKey, props);
};
exports.useProvideSlots = useProvideSlots;
var useInjectSlots = function useInjectSlots() {
  return (0, _vue.inject)(SlotsContextKey, (0, _vue.computed)(function () {
    return {};
  }));
};
exports.useInjectSlots = useInjectSlots;
var ContextKey = Symbol('ContextProps');
var useProvideTableContext = function useProvideTableContext(props) {
  (0, _vue.provide)(ContextKey, props);
};
exports.useProvideTableContext = useProvideTableContext;
var useInjectTableContext = function useInjectTableContext() {
  return (0, _vue.inject)(ContextKey, {
    onResizeColumn: function onResizeColumn() {}
  });
};
exports.useInjectTableContext = useInjectTableContext;