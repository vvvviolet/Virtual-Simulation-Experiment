import { ref, onBeforeUnmount } from 'vue';
import raf from '../../../_util/raf';
export default function useRaf(callback) {
  var rafRef = ref();
  var removedRef = ref(false);
  function trigger() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    if (!removedRef.value) {
      raf.cancel(rafRef.value);
      rafRef.value = raf(function () {
        callback.apply(void 0, args);
      });
    }
  }
  onBeforeUnmount(function () {
    removedRef.value = true;
    raf.cancel(rafRef.value);
  });
  return trigger;
}
export function useRafState(defaultState) {
  var batchRef = ref([]);
  var state = ref(typeof defaultState === 'function' ? defaultState() : defaultState);
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