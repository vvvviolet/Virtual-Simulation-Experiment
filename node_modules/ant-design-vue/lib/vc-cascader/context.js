"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useProvideCascader = exports.useInjectCascader = void 0;
var _vue = require("vue");
var CascaderContextKey = Symbol('CascaderContextKey');
var useProvideCascader = function useProvideCascader(props) {
  (0, _vue.provide)(CascaderContextKey, props);
};
exports.useProvideCascader = useProvideCascader;
var useInjectCascader = function useInjectCascader() {
  return (0, _vue.inject)(CascaderContextKey);
};
exports.useInjectCascader = useInjectCascader;