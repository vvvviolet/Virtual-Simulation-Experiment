"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useDebounce;
var _vue = require("vue");
function useDebounce(value) {
  var cacheValue = (0, _vue.shallowRef)(value.value.slice());
  var timeout = null;
  (0, _vue.watchEffect)(function () {
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      cacheValue.value = value.value;
    }, value.value.length ? 0 : 10);
  });
  return cacheValue;
}