import { ref } from 'vue';
export default function useSyncState(defaultState, onChange) {
  var stateRef = ref(defaultState);
  function setState(updater) {
    var newValue = typeof updater === 'function' ? updater(stateRef.value) : updater;
    if (newValue !== stateRef.value) {
      onChange(newValue, stateRef.value);
    }
    stateRef.value = newValue;
  }
  return [stateRef, setState];
}