import raf from '../../_util/raf';
import { onBeforeUnmount, ref, shallowRef } from 'vue';
export function useLayoutState(defaultState) {
  var stateRef = shallowRef(defaultState);
  var rafId;
  var updateBatchRef = shallowRef([]);
  function setFrameState(updater) {
    updateBatchRef.value.push(updater);
    raf.cancel(rafId);
    rafId = raf(function () {
      var prevBatch = updateBatchRef.value;
      // const prevState = stateRef.value;
      updateBatchRef.value = [];
      prevBatch.forEach(function (batchUpdater) {
        stateRef.value = batchUpdater(stateRef.value);
      });
    });
  }
  onBeforeUnmount(function () {
    raf.cancel(rafId);
  });
  return [stateRef, setFrameState];
}
/** Lock frame, when frame pass reset the lock. */
export function useTimeoutLock(defaultState) {
  var frameRef = ref(defaultState || null);
  var timeoutRef = ref();
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
  onBeforeUnmount(function () {
    cleanUp();
  });
  return [setState, getState];
}