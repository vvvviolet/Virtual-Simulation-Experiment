import { shallowRef, watchEffect } from 'vue';
export default function useDebounce(value) {
  var cacheValue = shallowRef(value.value.slice());
  var timeout = null;
  watchEffect(function () {
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      cacheValue.value = value.value;
    }, value.value.length ? 0 : 10);
  });
  return cacheValue;
}