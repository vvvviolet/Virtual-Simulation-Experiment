"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useLayoutState = useLayoutState;
exports.useTimeoutLock = useTimeoutLock;
var _raf = _interopRequireDefault(require("../../_util/raf"));
var _vue = require("vue");
function useLayoutState(defaultState) {
  var stateRef = (0, _vue.shallowRef)(defaultState);
  var rafId;
  var updateBatchRef = (0, _vue.shallowRef)([]);
  function setFrameState(updater) {
    updateBatchRef.value.push(updater);
    _raf.default.cancel(rafId);
    rafId = (0, _raf.default)(function () {
      var prevBatch = updateBatchRef.value;
      // const prevState = stateRef.value;
      updateBatchRef.value = [];
      prevBatch.forEach(function (batchUpdater) {
        stateRef.value = batchUpdater(stateRef.value);
      });
    });
  }
  (0, _vue.onBeforeUnmount)(function () {
    _raf.default.cancel(rafId);
  });
  return [stateRef, setFrameState];
}
/** Lock frame, when frame pass reset the lock. */
function useTimeoutLock(defaultState) {
  var frameRef = (0, _vue.ref)(defaultState || null);
  var timeoutRef = (0, _vue.ref)();
  function cleanUp() {
    clearTimeout(timeoutRef.value);
  }
  function setState(newState) {
    frameRef.value = newState;
    cleanUp();
    timeoutRef.value = setTimeout(function () {
      frameRef.value = null;
      timeoutRef.value = undefined;
    }, 100);
  }
  function getState() {
    return frameRef.value;
  }
  (0, _vue.onBeforeUnmount)(function () {
    cleanUp();
  });
  return [setState, getState];
}