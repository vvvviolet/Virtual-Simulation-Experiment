import { tryOnMounted } from './tryOnMounted';
import { ref } from 'vue';
export function useSupported(callback) {
  var sync = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var isSupported = ref();
  var update = function update() {
    return isSupported.value = Boolean(callback());
  };
  update();
  tryOnMounted(update, sync);
  return isSupported;
}