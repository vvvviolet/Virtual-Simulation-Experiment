import { toRaw, shallowRef, watchEffect, watch } from 'vue';
import { convertChildrenToData } from '../utils/legacyUtil';
/**
 * Parse `children` to `options` if `options` is not provided.
 * Then flatten the `options`.
 */
export default function useOptions(options, children, fieldNames) {
  var mergedOptions = shallowRef();
  var valueOptions = shallowRef();
  var labelOptions = shallowRef();
  var tempMergedOptions = shallowRef([]);
  watch([options, children], function () {
    if (options.value) {
      tempMergedOptions.value = toRaw(options.value).slice();
    } else {
      tempMergedOptions.value = convertChildrenToData(children.value);
    }
  }, {
    immediate: true,
    deep: true
  });
  watchEffect(function () {
    var newOptions = tempMergedOptions.value;
    var newValueOptions = new Map();
    var newLabelOptions = new Map();
    var fieldNamesValue = fieldNames.value;
    function dig(optionList) {
      var isChildren = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      // for loop to speed up collection speed
      for (var i = 0; i < optionList.length; i += 1) {
        var option = optionList[i];
        if (!option[fieldNamesValue.options] || isChildren) {
          newValueOptions.set(option[fieldNamesValue.value], option);
          newLabelOptions.set(option[fieldNamesValue.label], option);
        } else {
          dig(option[fieldNamesValue.options], true);
        }
      }
    }
    dig(newOptions);
    mergedOptions.value = newOptions;
    valueOptions.value = newValueOptions;
    labelOptions.value = newLabelOptions;
  });
  return {
    options: mergedOptions,
    valueOptions: valueOptions,
    labelOptions: labelOptions
  };
}