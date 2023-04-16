"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectSpread3 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _commonUtil = require("../utils/commonUtil");
var _valueUtil = require("../utils/valueUtil");
var _vue = require("vue");
function includes(test, search) {
  return (0, _commonUtil.toArray)(test).join('').toUpperCase().includes(search);
}
var _default = function _default(options, fieldNames, searchValue, filterOption, optionFilterProp) {
  return (0, _vue.computed)(function () {
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
      return (0, _valueUtil.injectPropsWithOption)(opt);
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
            filteredOptions.push((0, _objectSpread3.default)((0, _objectSpread3.default)({}, item), {}, (0, _defineProperty2.default)({}, fieldOptions, subOptions)));
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
};
exports.default = _default;