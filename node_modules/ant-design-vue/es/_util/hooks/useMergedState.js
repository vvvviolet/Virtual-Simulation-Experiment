import { toRaw, watchEffect, unref, watch, ref } from 'vue';
export default function useMergedState(defaultStateValue, option) {
  var _ref = option || {},
    defaultValue = _ref.defaultValue,
    _ref$value = _ref.value,
    value = _ref$value === void 0 ? ref() : _ref$value;
  var initValue = typeof defaultStateValue === 'function' ? defaultStateValue() : defaultStateValue;
  if (value.value !== undefined) {
    initValue = unref(value);
  }
  if (defaultValue !== undefined) {
    initValue = typeof defaultValue === 'function' ? defaultValue() : defaultValue;
  }
  var innerValue = ref(initValue);
  var mergedValue = ref(initValue);
  watchEffect(function () {
    var val = value.value !== undefined ? value.value : innerValue.value;
    if (option.postState) {
      val = option.postState(val);
    }
    mergedValue.value = val;
  });
  function triggerChange(newValue) {
    var preVal = mergedValue.value;
    innerValue.value = newValue;
    if (toRaw(mergedValue.value) !== newValue && option.onChange) {
      option.onChange(newValue, preVal);
    }
  }
  // Effect of reset value to `undefined`
  watch(value, function () {
    innerValue.value = value.value;
  });
  return [mergedValue, triggerChange];
}