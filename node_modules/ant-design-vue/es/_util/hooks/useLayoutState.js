import { onBeforeUnmount, ref } from 'vue';
import raf from '../raf';
/**
 * Execute code before next frame but async
 */
export function useLayoutState(defaultState) {
  var stateRef = ref(defaultState);
  var tempState = stateRef.value;
  var updateBatchRef = [];
  var rafRef = ref();
  function setFrameState(updater) {
    raf.cancel(rafRef.value);
    updateBatchRef.push(updater);
    rafRef.value = raf(function () {
      var prevBatch = updateBatchRef;
      // const prevState = stateRef.value;
      updateBatchRef = [];
      prevBatch.forEach(function (batchUpdater) {
        tempState = batchUpdater(tempState);
      });
      // if (tempState !== stateRef.value) {
      stateRef.value = tempState;
      // }
    });
  }

  onBeforeUnmount(function () {
    raf.cancel(rafRef.value);
  });
  return [stateRef, setFrameState];
}