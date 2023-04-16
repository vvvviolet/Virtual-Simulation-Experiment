"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useProvideBody = exports.useInjectBody = exports.BodyContextKey = void 0;
var _vue = require("vue");
var BodyContextKey = Symbol('BodyContextProps');
exports.BodyContextKey = BodyContextKey;
var useProvideBody = function useProvideBody(props) {
  (0, _vue.provide)(BodyContextKey, props);
};
exports.useProvideBody = useProvideBody;
var useInjectBody = function useInjectBody() {
  return (0, _vue.inject)(BodyContextKey, {});
};
exports.useInjectBody = useInjectBody;