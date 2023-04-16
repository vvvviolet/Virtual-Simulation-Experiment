"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.flattenKeys = flattenKeys;
exports.getFilterData = getFilterData;
var _vue = require("vue");
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _devWarning = _interopRequireDefault(require("../../../vc-util/devWarning"));
var _useState3 = _interopRequireDefault(require("../../../_util/hooks/useState"));
var _util = require("../../util");
var _FilterDropdown = _interopRequireDefault(require("./FilterDropdown"));
function collectFilterStates(columns, init, pos) {
  var filterStates = [];
  (columns || []).forEach(function (column, index) {
    var _column$slots;
    var columnPos = (0, _util.getColumnPos)(index, pos);
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
          key: (0, _util.getColumnKey)(column, columnPos),
          filteredKeys: filteredValues,
          forceFiltered: column.filtered
        });
      } else {
        // Uncontrolled
        filterStates.push({
          column: column,
          key: (0, _util.getColumnKey)(column, columnPos),
          filteredKeys: init && column.defaultFilteredValue ? column.defaultFilteredValue : undefined,
          forceFiltered: column.filtered
        });
      }
    }
    if ('children' in column) {
      filterStates = [].concat((0, _toConsumableArray2.default)(filterStates), (0, _toConsumableArray2.default)(collectFilterStates(column.children, init, columnPos)));
    }
  });
  return filterStates;
}
function injectFilter(prefixCls, dropdownPrefixCls, columns, filterStates, triggerFilter, getPopupContainer, locale, pos) {
  return columns.map(function (column, index) {
    var _column$slots2;
    var columnPos = (0, _util.getColumnPos)(index, pos);
    var _column$filterMultipl = column.filterMultiple,
      filterMultiple = _column$filterMultipl === void 0 ? true : _column$filterMultipl,
      filterMode = column.filterMode,
      filterSearch = column.filterSearch;
    var newColumn = column;
    var hasFilterDropdown = column.filterDropdown || (column === null || column === void 0 ? void 0 : (_column$slots2 = column.slots) === null || _column$slots2 === void 0 ? void 0 : _column$slots2.filterDropdown) || column.customFilterDropdown;
    if (newColumn.filters || hasFilterDropdown) {
      var columnKey = (0, _util.getColumnKey)(newColumn, columnPos);
      var filterState = filterStates.find(function (_ref) {
        var key = _ref.key;
        return columnKey === key;
      });
      newColumn = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, newColumn), {}, {
        title: function title(renderProps) {
          return (0, _vue.createVNode)(_FilterDropdown.default, {
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
              return [(0, _util.renderColumnTitle)(column.title, renderProps)];
            }
          });
        }
      });
    }
    if ('children' in newColumn) {
      newColumn = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, newColumn), {}, {
        children: injectFilter(prefixCls, dropdownPrefixCls, newColumn.children, filterStates, triggerFilter, getPopupContainer, locale, columnPos)
      });
    }
    return newColumn;
  });
}
function flattenKeys(filters) {
  var keys = [];
  (filters || []).forEach(function (_ref2) {
    var value = _ref2.value,
      children = _ref2.children;
    keys.push(value);
    if (children) {
      keys = [].concat((0, _toConsumableArray2.default)(keys), (0, _toConsumableArray2.default)(flattenKeys(children)));
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
function getFilterData(data, filterStates) {
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
  var _useState = (0, _useState3.default)(collectFilterStates(mergedColumns.value, true)),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    filterStates = _useState2[0],
    setFilterStates = _useState2[1];
  var mergedFilterStates = (0, _vue.computed)(function () {
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
    (0, _devWarning.default)(filteredKeysIsNotControlled || filteredKeysIsAllControlled, 'Table', '`FilteredKeys` should all be controlled or not controlled.');
    return collectedStates;
  });
  var filters = (0, _vue.computed)(function () {
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
var _default2 = useFilter;
exports.default = _default2;