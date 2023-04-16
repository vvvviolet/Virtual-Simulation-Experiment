import { watchEffect, shallowRef } from 'vue';
export default function eagerComputed(fn) {
  var result = shallowRef();
  watchEffect(function () {
    result.value = fn();
  }, {
    flush: 'sync' // needed so updates are immediate.
  });

  return result;
}