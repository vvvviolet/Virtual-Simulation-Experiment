import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import { createVNode as _createVNode } from "vue";
import devWarning from '../../../vc-util/devWarning';
import useState from '../../../_util/hooks/useState';
import { computed } from 'vue';
import { getColumnPos, renderColumnTitle, getColumnKey } from '../../util';
import FilterDropdown from './FilterDropdown';
function collectFilterStates(columns, init, pos) {
  var filterStates = [];
  (columns || []).forEach(function (column, index) {
    var _column$slots;
    var columnPos = getColumnPos(index, pos);
    var hasFilterDropdown = column.filterDropdown || (column === null || column === void 0 ? void 0 : (_column$slots = column.slots) === null || _column$slots === void 0 ? void 0 : _column$slots.filterDropdown) || column.customFilterDropdown;
    if (column.filters || hasFilterDropdown || 'onFilter' in column) {
      if ('filteredValue' in column) {
        // Controlled
        var filteredValues = column.filteredValue;
        if (!hasFilterDropdown) {
          var _filteredValues$map, _filteredValues;
          filteredValues = (_filteredValues$map = (_filteredValues = filteredValues) === null || _filteredValues === void 0 ? void 0 : _filteredValues.map(String)) !== null && _filteredValues$map !== void 0 ? _filteredValues$map : filteredValues;
        }
        filterStates.push({
          column: column,
          key: getColumnKey(column, columnPos),
          filteredKeys: filteredValues,
          forceFiltered: column.filtered
        });
      } else {
        // Uncontrolled
        filterStates.push({
          column: column,
          key: getColumnKey(column, columnPos),
          filteredKeys: init && column.defaultFilteredValue ? column.defaultFilteredValue : undefined,
          forceFiltered: column.filtered
        });
      }
    }
    if ('children' in column) {
      filterStates = [].concat(_toConsumableArray(filterStates), _toConsumableArray(collectFilterStates(column.children, init, columnPos)));
    }
  });
  return filterStates;
}
function injectFilter(prefixCls, dropdownPrefixCls, columns, filterStates, triggerFilter, getPopupContainer, locale, pos) {
  return columns.map(function (column, index) {
    var _column$slots2;
    var columnPos = getColumnPos(index, pos);
    var _column$filterMultipl = column.filterMultiple,
      filterMultiple = _column$filterMultipl === void 0 ? true : _column$filterMultipl,
      filterMode = column.filterMode,
      filterSearch = column.filterSearch;
    var newColumn = column;
    var hasFilterDropdown = column.filterDropdown || (column === null || column === void 0 ? void 0 : (_column$slots2 = column.slots) === null || _column$slots2 === void 0 ? void 0 : _column$slots2.filterDropdown) || column.customFilterDropdown;
    if (newColumn.filters || hasFilterDropdown) {
      var columnKey = getColumnKey(newColumn, columnPos);
      var filterState = filterStates.find(function (_ref) {
        var key = _ref.key;
        return columnKey === key;
      });
      newColumn = _objectSpread(_objectSpread({}, newColumn), {}, {
        title: function title(renderProps) {
          return _createVNode(FilterDropdown, {
            "tablePrefixCls": prefixCls,
            "prefixCls": "".concat(prefixCls, "-filter"),
            "dropdownPrefixCls": dropdownPrefixCls,
            "column": newColumn,
            "columnKey": columnKey,
            "filterState": filterState,
            "filterMultiple": filterMultiple,
            "filterMode": filterMode,
            "filterSearch": filterSearch,
            "triggerFilter": triggerFilter,
            "locale": locale,
            "getPopupContainer": getPopupContainer
          }, {
            default: function _default() {
              return [renderColumnTitle(column.title, renderProps)];
            }
          });
        }
      });
    }
    if ('children' in newColumn) {
      newColumn = _objectSpread(_objectSpread({}, newColumn), {}, {
        children: injectFilter(prefixCls, dropdownPrefixCls, newColumn.children, filterStates, triggerFilter, getPopupContainer, locale, columnPos)
      });
    }
    return newColumn;
  });
}
export function flattenKeys(filters) {
  var keys = [];
  (filters || []).forEach(function (_ref2) {
    var value = _ref2.value,
      children = _ref2.children;
    keys.push(value);
    if (children) {
      keys = [].concat(_toConsumableArray(keys), _toConsumableArray(flattenKeys(children)));
    }
  });
  return keys;
}
function generateFilterInfo(filterStates) {
  var currentFilters = {};
  filterStates.forEach(function (_ref3) {
    var _column$slots3;
    var key = _ref3.key,
      filteredKeys = _ref3.filteredKeys,
      column = _ref3.column;
    var hasFilterDropdown = column.filterDropdown || (column === null || column === void 0 ? void 0 : (_column$slots3 = column.slots) === null || _column$slots3 === void 0 ? void 0 : _column$slots3.filterDropdown) || column.customFilterDropdown;
    var filters = column.filters;
    if (hasFilterDropdown) {
      currentFilters[key] = filteredKeys || null;
    } else if (Array.isArray(filteredKeys)) {
      var keys = flattenKeys(filters);
      currentFilters[key] = keys.filter(function (originKey) {
        return filteredKeys.includes(String(originKey));
      });
    } else {
      currentFilters[key] = null;
    }
  });
  return currentFilters;
}
export function getFilterData(data, filterStates) {
  return filterStates.reduce(function (currentData, filterState) {
    var _filterState$column = filterState.column,
      onFilter = _filterState$column.onFilter,
      filters = _filterState$column.filters,
      filteredKeys = filterState.filteredKeys;
    if (onFilter && filteredKeys && filteredKeys.length) {
      return currentData.filter(function (record) {
        return filteredKeys.some(function (key) {
          var keys = flattenKeys(filters);
          var keyIndex = keys.findIndex(function (k) {
            return String(k) === String(key);
          });
          var realKey = keyIndex !== -1 ? keys[keyIndex] : key;
          return onFilter(realKey, record);
        });
      });
    }
    return currentData;
  }, data);
}
function useFilter(_ref4) {
  var prefixCls = _ref4.prefixCls,
    dropdownPrefixCls = _ref4.dropdownPrefixCls,
    mergedColumns = _ref4.mergedColumns,
    locale = _ref4.locale,
    onFilterChange = _ref4.onFilterChange,
    getPopupContainer = _ref4.getPopupContainer;
  var _useState = useState(collectFilterStates(mergedColumns.value, true)),
    _useState2 = _slicedToArray(_useState, 2),
    filterStates = _useState2[0],
    setFilterStates = _useState2[1];
  var mergedFilterStates = computed(function () {
    var collectedStates = collectFilterStates(mergedColumns.value, false);
    var filteredKeysIsNotControlled = collectedStates.every(function (_ref5) {
      var filteredKeys = _ref5.filteredKeys;
      return filteredKeys === undefined;
    });
    // Return if not controlled
    if (filteredKeysIsNotControlled) {
      return filterStates.value;
    }
    var filteredKeysIsAllControlled = collectedStates.every(function (_ref6) {
      var filteredKeys = _ref6.filteredKeys;
      return filteredKeys !== undefined;
    });
    devWarning(filteredKeysIsNotControlled || filteredKeysIsAllControlled, 'Table', '`FilteredKeys` should all be controlled or not controlled.');
    return collectedStates;
  });
  var filters = computed(function () {
    return generateFilterInfo(mergedFilterStates.value);
  });
  var triggerFilter = function triggerFilter(filterState) {
    var newFilterStates = mergedFilterStates.value.filter(function (_ref7) {
      var key = _ref7.key;
      return key !== filterState.key;
    });
    newFilterStates.push(filterState);
    setFilterStates(newFilterStates);
    onFilterChange(generateFilterInfo(newFilterStates), newFilterStates);
  };
  var transformColumns = function transformColumns(innerColumns) {
    return injectFilter(prefixCls.value, dropdownPrefixCls.value, innerColumns, mergedFilterStates.value, triggerFilter, getPopupContainer.value, locale.value);
  };
  return [transformColumns, mergedFilterStates, filters];
}
export default useFilter;