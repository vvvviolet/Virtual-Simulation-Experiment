"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _raf = _interopRequireDefault(require("../../../_util/raf"));
var _vue = require("vue");
/**
 * Always trigger latest once when call multiple time
 */
var _default = function _default() {
  var idRef = (0, _vue.ref)(0);
  var cleanUp = function cleanUp() {
    _raf.default.cancel(idRef.value);
  };
  (0, _vue.onBeforeUnmount)(function () {
    cleanUp();
  });
  return function (callback) {
    cleanUp();
    idRef.value = (0, _raf.default)(function () {
      callback();
    });
  };
};
exports.default = _default;