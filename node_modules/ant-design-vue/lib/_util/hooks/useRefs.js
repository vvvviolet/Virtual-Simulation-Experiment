"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = require("vue");
var useRefs = function useRefs() {
  var refs = (0, _vue.ref)(new Map());
  var setRef = function setRef(key) {
    return function (el) {
      refs.value.set(key, el);
    };
  };
  (0, _vue.onBeforeUpdate)(function () {
    refs.value = new Map();
  });
  return [setRef, refs];
};
var _default = useRefs;
exports.default = _default;