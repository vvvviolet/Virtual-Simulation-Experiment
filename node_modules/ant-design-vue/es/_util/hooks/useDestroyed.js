import { onBeforeUnmount, ref } from 'vue';
var useDestroyed = function useDestroyed() {
  var destroyed = ref(false);
  onBeforeUnmount(function () {
    destroyed.value = true;
  });
  return destroyed;
};
export default useDestroyed;