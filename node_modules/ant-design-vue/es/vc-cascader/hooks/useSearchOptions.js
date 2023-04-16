import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import { computed } from 'vue';
export var SEARCH_MARK = '__rc_cascader_search_mark__';
var defaultFilter = function defaultFilter(search, options, _ref) {
  var label = _ref.label;
  return options.some(function (opt) {
    return String(opt[label]).toLowerCase().includes(search.toLowerCase());
  });
};
var defaultRender = function defaultRender(_ref2) {
  var path = _ref2.path,
    fieldNames = _ref2.fieldNames;
  return path.map(function (opt) {
    return opt[fieldNames.label];
  }).join(' / ');
};
export default (function (search, options, fieldNames, prefixCls, config, changeOnSelect) {
  return computed(function () {
    var _config$value = config.value,
      _config$value$filter = _config$value.filter,
      filter = _config$value$filter === void 0 ? defaultFilter : _config$value$filter,
      _config$value$render = _config$value.render,
      render = _config$value$render === void 0 ? defaultRender : _config$value$render,
      _config$value$limit = _config$value.limit,
      limit = _config$value$limit === void 0 ? 50 : _config$value$limit,
      sort = _config$value.sort;
    var filteredOptions = [];
    if (!search.value) {
      return [];
    }
    function dig(list, pathOptions) {
      list.forEach(function (option) {
        // Perf saving when `sort` is disabled and `limit` is provided
        if (!sort && limit > 0 && filteredOptions.length >= limit) {
          return;
        }
        var connectedPathOptions = [].concat(_toConsumableArray(pathOptions), [option]);
        var children = option[fieldNames.value.children];
        // If current option is filterable
        if (
        // If is leaf option
        !children || children.length === 0 ||
        // If is changeOnSelect
        changeOnSelect.value) {
          if (filter(search.value, connectedPathOptions, {
            label: fieldNames.value.label
          })) {
            var _objectSpread2;
            filteredOptions.push(_objectSpread(_objectSpread({}, option), {}, (_objectSpread2 = {}, _defineProperty(_objectSpread2, fieldNames.value.label, render({
              inputValue: search.value,
              path: connectedPathOptions,
              prefixCls: prefixCls.value,
              fieldNames: fieldNames.value
            })), _defineProperty(_objectSpread2, SEARCH_MARK, connectedPathOptions), _objectSpread2)));
          }
        }
        if (children) {
          dig(option[fieldNames.value.children], connectedPathOptions);
        }
      });
    }
    dig(options.value, []);
    // Do sort
    if (sort) {
      filteredOptions.sort(function (a, b) {
        return sort(a[SEARCH_MARK], b[SEARCH_MARK], search.value, fieldNames.value);
      });
    }
    return limit > 0 ? filteredOptions.slice(0, limit) : filteredOptions;
  });
});