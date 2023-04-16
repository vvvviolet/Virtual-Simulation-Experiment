import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _typeof from "@babel/runtime/helpers/esm/typeof";
import { ref, watchEffect } from 'vue';
import { warning } from '../../vc-util/warning';
// Convert `showSearch` to unique config
export default function useSearchConfig(showSearch) {
  var mergedShowSearch = ref(false);
  var mergedSearchConfig = ref({});
  watchEffect(function () {
    if (!showSearch.value) {
      mergedShowSearch.value = false;
      mergedSearchConfig.value = {};
      return;
    }
    var searchConfig = {
      matchInputWidth: true,
      limit: 50
    };
    if (showSearch.value && _typeof(showSearch.value) === 'object') {
      searchConfig = _objectSpread(_objectSpread({}, searchConfig), showSearch.value);
    }
    if (searchConfig.limit <= 0) {
      delete searchConfig.limit;
      if (process.env.NODE_ENV !== 'production') {
        warning(false, "'limit' of showSearch should be positive number or false.");
      }
    }
    mergedShowSearch.value = true;
    mergedSearchConfig.value = searchConfig;
    return;
  });
  return {
    showSearch: mergedShowSearch,
    searchConfig: mergedSearchConfig
  };
}