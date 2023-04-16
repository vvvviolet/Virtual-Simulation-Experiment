import { ref } from 'vue';
export default function useState(defaultStateValue) {
  var initValue = typeof defaultStateValue === 'function' ? defaultStateValue() : defaultStateValue;
  var innerValue = ref(initValue);
  function triggerChange(newValue) {
    innerValue.value = newValue;
  }
  return [innerValue, triggerChange];
}