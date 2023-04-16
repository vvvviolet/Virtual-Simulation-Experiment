import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { shallowRef, computed } from 'vue';
/**
 * Cache `value` related LabeledValue & options.
 */
export default (function (labeledValues, valueOptions) {
  var cacheRef = shallowRef({
    values: new Map(),
    options: new Map()
  });
  var filledLabeledValues = computed(function () {
    var _cacheRef$value = cacheRef.value,
      prevValueCache = _cacheRef$value.values,
      prevOptionCache = _cacheRef$value.options;
    // Fill label by cache
    var patchedValues = labeledValues.value.map(function (item) {
      if (item.label === undefined) {
        var _prevValueCache$get;
        return _objectSpread(_objectSpread({}, item), {}, {
          label: (_prevValueCache$get = prevValueCache.get(item.value)) === null || _prevValueCache$get === void 0 ? void 0 : _prevValueCache$get.label
        });
      }
      return item;
    });
    // Refresh cache
    var valueCache = new Map();
    var optionCache = new Map();
    patchedValues.forEach(function (item) {
      valueCache.set(item.value, item);
      optionCache.set(item.value, valueOptions.value.get(item.value) || prevOptionCache.get(item.value));
    });
    cacheRef.value.values = valueCache;
    cacheRef.value.options = optionCache;
    return patchedValues;
  });
  var getOption = function getOption(val) {
    return valueOptions.value.get(val) || cacheRef.value.options.get(val);
  };
  return [filledLabeledValues, getOption];
});