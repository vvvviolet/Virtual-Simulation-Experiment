"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = eagerComputed;
var _vue = require("vue");
function eagerComputed(fn) {
  var result = (0, _vue.shallowRef)();
  (0, _vue.watchEffect)(function () {
    result.value = fn();
  }, {
    flush: 'sync' // needed so updates are immediate.
  });

  return result;
}