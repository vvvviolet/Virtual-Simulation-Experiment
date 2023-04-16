"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useRaf;
exports.useRafState = useRafState;
var _vue = require("vue");
var _raf = _interopRequireDefault(require("../../../_util/raf"));
function useRaf(callback) {
  var rafRef = (0, _vue.ref)();
  var removedRef = (0, _vue.ref)(false);
  function trigger() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    if (!removedRef.value) {
      _raf.default.cancel(rafRef.value);
      rafRef.value = (0, _raf.default)(function () {
        callback.apply(void 0, args);
      });
    }
  }
  (0, _vue.onBeforeUnmount)(function () {
    removedRef.value = true;
    _raf.default.cancel(rafRef.value);
  });
  return trigger;
}
function useRafState(defaultState) {
  var batchRef = (0, _vue.ref)([]);
  var state = (0, _vue.ref)(typeof defaultState === 'function' ? defaultState() : defaultState);
  var flushUpdate = useRaf(function () {
    var value = state.value;
    batchRef.value.forEach(function (callback) {
      value = callback(value);
    });
    batchRef.value = [];
    state.value = value;
  });
  function updater(callback) {
    batchRef.value.push(callback);
    flushUpdate();
  }
  return [state, updater];
}