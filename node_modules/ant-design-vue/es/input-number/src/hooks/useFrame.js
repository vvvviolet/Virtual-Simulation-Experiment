import raf from '../../../_util/raf';
import { onBeforeUnmount, ref } from 'vue';
/**
 * Always trigger latest once when call multiple time
 */
export default (function () {
  var idRef = ref(0);
  var cleanUp = function cleanUp() {
    raf.cancel(idRef.value);
  };
  onBeforeUnmount(function () {
    cleanUp();
  });
  return function (callback) {
    cleanUp();
    idRef.value = raf(function () {
      callback();
    });
  };
});