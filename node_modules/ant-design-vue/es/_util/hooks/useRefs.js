import { onBeforeUpdate, ref } from 'vue';
var useRefs = function useRefs() {
  var refs = ref(new Map());
  var setRef = function setRef(key) {
    return function (el) {
      refs.value.set(key, el);
    };
  };
  onBeforeUpdate(function () {
    refs.value = new Map();
  });
  return [setRef, refs];
};
export default useRefs;