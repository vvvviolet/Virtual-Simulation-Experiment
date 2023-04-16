"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useSupported = useSupported;
var _tryOnMounted = require("./tryOnMounted");
var _vue = require("vue");
function useSupported(callback) {
  var sync = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var isSupported = (0, _vue.ref)();
  var update = function update() {
    return isSupported.value = Boolean(callback());
  };
  update();
  (0, _tryOnMounted.tryOnMounted)(update, sync);
  return isSupported;
}