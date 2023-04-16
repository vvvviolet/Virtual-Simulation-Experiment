import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { watch, toRaw, computed, shallowRef } from 'vue';
/**
 * This function will try to call requestIdleCallback if available to save performance.
 * No need `getLabel` here since already fetch on `rawLabeledValue`.
 */
export default (function (values) {
  var cacheRef = shallowRef({
    valueLabels: new Map()
  });
  var mergedValues = shallowRef();
  watch(values, function () {
    mergedValues.value = toRaw(values.value);
  }, {
    immediate: true
  });
  var newFilledValues = computed(function () {
    var valueLabels = cacheRef.value.valueLabels;
    var valueLabelsCache = new Map();
    var filledValues = mergedValues.value.map(function (item) {
      var _item$label;
      var value = item.value;
      var mergedLabel = (_item$label = item.label) !== null && _item$label !== void 0 ? _item$label : valueLabels.get(value);
      // Save in cache
      valueLabelsCache.set(value, mergedLabel);
      return _objectSpread(_objectSpread({}, item), {}, {
        label: mergedLabel
      });
    });
    cacheRef.value.valueLabels = valueLabelsCache;
    return filledValues;
  });
  return [newFilledValues];
});