import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { toArray } from '../utils/commonUtil';
import { injectPropsWithOption } from '../utils/valueUtil';
import { computed } from 'vue';
function includes(test, search) {
  return toArray(test).join('').toUpperCase().includes(search);
}
export default (function (options, fieldNames, searchValue, filterOption, optionFilterProp) {
  return computed(function () {
    var searchValueVal = searchValue.value;
    var optionFilterPropValue = optionFilterProp === null || optionFilterProp === void 0 ? void 0 : optionFilterProp.value;
    var filterOptionValue = filterOption === null || filterOption === void 0 ? void 0 : filterOption.value;
    if (!searchValueVal || filterOptionValue === false) {
      return options.value;
    }
    var _fieldNames$value = fieldNames.value,
      fieldOptions = _fieldNames$value.options,
      fieldLabel = _fieldNames$value.label,
      fieldValue = _fieldNames$value.value;
    var filteredOptions = [];
    var customizeFilter = typeof filterOptionValue === 'function';
    var upperSearch = searchValueVal.toUpperCase();
    var filterFunc = customizeFilter ? filterOptionValue : function (_, option) {
      // Use provided `optionFilterProp`
      if (optionFilterPropValue) {
        return includes(option[optionFilterPropValue], upperSearch);
      }
      // Auto select `label` or `value` by option type
      if (option[fieldOptions]) {
        // hack `fieldLabel` since `OptionGroup` children is not `label`
        return includes(option[fieldLabel !== 'children' ? fieldLabel : 'label'], upperSearch);
      }
      return includes(option[fieldValue], upperSearch);
    };
    var wrapOption = customizeFilter ? function (opt) {
      return injectPropsWithOption(opt);
    } : function (opt) {
      return opt;
    };
    options.value.forEach(function (item) {
      // Group should check child options
      if (item[fieldOptions]) {
        // Check group first
        var matchGroup = filterFunc(searchValueVal, wrapOption(item));
        if (matchGroup) {
          filteredOptions.push(item);
        } else {
          // Check option
          var subOptions = item[fieldOptions].filter(function (subItem) {
            return filterFunc(searchValueVal, wrapOption(subItem));
          });
          if (subOptions.length) {
            filteredOptions.push(_objectSpread(_objectSpread({}, item), {}, _defineProperty({}, fieldOptions, subOptions)));
          }
        }
        return;
      }
      if (filterFunc(searchValueVal, wrapOption(item))) {
        filteredOptions.push(item);
      }
    });
    return filteredOptions;
  });
});