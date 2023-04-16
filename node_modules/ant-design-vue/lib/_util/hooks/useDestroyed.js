"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = require("vue");
var useDestroyed = function useDestroyed() {
  var destroyed = (0, _vue.ref)(false);
  (0, _vue.onBeforeUnmount)(function () {
    destroyed.value = true;
  });
  return destroyed;
};
var _default = useDestroyed;
exports.default = _default;