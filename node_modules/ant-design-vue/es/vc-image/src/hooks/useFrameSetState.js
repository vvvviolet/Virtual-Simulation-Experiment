import _extends from "@babel/runtime/helpers/esm/extends";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import raf from '../../../_util/raf';
import { onMounted, reactive, ref } from 'vue';
export default function useFrameSetState(initial) {
  var frame = ref(null);
  var state = reactive(_objectSpread({}, initial));
  var queue = ref([]);
  var setFrameState = function setFrameState(newState) {
    if (frame.value === null) {
      queue.value = [];
      frame.value = raf(function () {
        var memoState;
        queue.value.forEach(function (queueState) {
          memoState = _objectSpread(_objectSpread({}, memoState), queueState);
        });
        _extends(state, memoState);
        frame.value = null;
      });
    }
    queue.value.push(newState);
  };
  onMounted(function () {
    frame.value && raf.cancel(frame.value);
  });
  return [state, setFrameState];
}