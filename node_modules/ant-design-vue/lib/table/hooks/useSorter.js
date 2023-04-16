"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useFilterSorter;
exports.getSortData = getSortData;
var _vue = require("vue");
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectSpread3 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _CaretDownOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/CaretDownOutlined"));
var _CaretUpOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/CaretUpOutlined"));
var _tooltip = _interopRequireDefault(require("../../tooltip"));
var _util = require("../util");
var _classNames3 = _interopRequireDefault(require("../../_util/classNames"));
var _useState3 = _interopRequireDefault(require("../../_util/hooks/useState"));
var ASCEND = 'ascend';
var DESCEND = 'descend';
function getMultiplePriority(column) {
  if ((0, _typeof2.default)(column.sorter) === 'object' && typeof column.sorter.multiple === 'number') {
    return column.sorter.multiple;
  }
  return false;
}
function getSortFunction(sorter) {
  if (typeof sorter === 'function') {
    return sorter;
  }
  if (sorter && (0, _typeof2.default)(sorter) === 'object' && sorter.compare) {
    return sorter.compare;
  }
  return false;
}
function nextSortDirection(sortDirections, current) {
  if (!current) {
    return sortDirections[0];
  }
  return sortDirections[sortDirections.indexOf(current) + 1];
}
function collectSortStates(columns, init, pos) {
  var sortStates = [];
  function pushState(column, columnPos) {
    sortStates.push({
      column: column,
      key: (0, _util.getColumnKey)(column, columnPos),
      multiplePriority: getMultiplePriority(column),
      sortOrder: column.sortOrder
    });
  }
  (columns || []).forEach(function (column, index) {
    var columnPos = (0, _util.getColumnPos)(index, pos);
    if (column.children) {
      if ('sortOrder' in column) {
        // Controlled
        pushState(column, columnPos);
      }
      sortStates = [].concat((0, _toConsumableArray2.default)(sortStates), (0, _toConsumableArray2.default)(collectSortStates(column.children, init, columnPos)));
    } else if (column.sorter) {
      if ('sortOrder' in column) {
        // Controlled
        pushState(column, columnPos);
      } else if (init && column.defaultSortOrder) {
        // Default sorter
        sortStates.push({
          column: column,
          key: (0, _util.getColumnKey)(column, columnPos),
          multiplePriority: getMultiplePriority(column),
          sortOrder: column.defaultSortOrder
        });
      }
    }
  });
  return sortStates;
}
function injectSorter(prefixCls, columns, sorterSates, triggerSorter, defaultSortDirections, tableLocale, tableShowSorterTooltip, pos) {
  return (columns || []).map(function (column, index) {
    var columnPos = (0, _util.getColumnPos)(index, pos);
    var newColumn = column;
    if (newColumn.sorter) {
      var sortDirections = newColumn.sortDirections || defaultSortDirections;
      var showSorterTooltip = newColumn.showSorterTooltip === undefined ? tableShowSorterTooltip : newColumn.showSorterTooltip;
      var columnKey = (0, _util.getColumnKey)(newColumn, columnPos);
      var sorterState = sorterSates.find(function (_ref) {
        var key = _ref.key;
        return key === columnKey;
      });
      var sorterOrder = sorterState ? sorterState.sortOrder : null;
      var nextSortOrder = nextSortDirection(sortDirections, sorterOrder);
      var upNode = sortDirections.includes(ASCEND) && (0, _vue.createVNode)(_CaretUpOutlined.default, {
        "class": (0, _classNames3.default)("".concat(prefixCls, "-column-sorter-up"), {
          active: sorterOrder === ASCEND
        })
      }, null);
      var downNode = sortDirections.includes(DESCEND) && (0, _vue.createVNode)(_CaretDownOutlined.default, {
        "class": (0, _classNames3.default)("".concat(prefixCls, "-column-sorter-down"), {
          active: sorterOrder === DESCEND
        })
      }, null);
      var _ref2 = tableLocale || {},
        cancelSort = _ref2.cancelSort,
        triggerAsc = _ref2.triggerAsc,
        triggerDesc = _ref2.triggerDesc;
      var sortTip = cancelSort;
      if (nextSortOrder === DESCEND) {
        sortTip = triggerDesc;
      } else if (nextSortOrder === ASCEND) {
        sortTip = triggerAsc;
      }
      var tooltipProps = (0, _typeof2.default)(showSorterTooltip) === 'object' ? showSorterTooltip : {
        title: sortTip
      };
      newColumn = (0, _objectSpread3.default)((0, _objectSpread3.default)({}, newColumn), {}, {
        className: (0, _classNames3.default)(newColumn.className, (0, _defineProperty2.default)({}, "".concat(prefixCls, "-column-sort"), sorterOrder)),
        title: function title(renderProps) {
          var renderSortTitle = (0, _vue.createVNode)("div", {
            "class": "".concat(prefixCls, "-column-sorters")
          }, [(0, _vue.createVNode)("span", {
            "class": "".concat(prefixCls, "-column-title")
          }, [(0, _util.renderColumnTitle)(column.title, renderProps)]), (0, _vue.createVNode)("span", {
            "class": (0, _classNames3.default)("".concat(prefixCls, "-column-sorter"), (0, _defineProperty2.default)({}, "".concat(prefixCls, "-column-sorter-full"), !!(upNode && downNode)))
          }, [(0, _vue.createVNode)("span", {
            "class": "".concat(prefixCls, "-column-sorter-inner")
          }, [upNode, downNode])])]);
          return showSorterTooltip ? (0, _vue.createVNode)(_tooltip.default, tooltipProps, {
            default: function _default() {
              return [renderSortTitle];
            }
          }) : renderSortTitle;
        },
        customHeaderCell: function customHeaderCell(col) {
          var cell = column.customHeaderCell && column.customHeaderCell(col) || {};
          var originOnClick = cell.onClick;
          cell.onClick = function (event) {
            triggerSorter({
              column: column,
              key: columnKey,
              sortOrder: nextSortOrder,
              multiplePriority: getMultiplePriority(column)
            });
            if (originOnClick) {
              originOnClick(event);
            }
          };
          cell.class = (0, _classNames3.default)(cell.class, "".concat(prefixCls, "-column-has-sorters"));
          return cell;
        }
      });
    }
    if ('children' in newColumn) {
      newColumn = (0, _objectSpread3.default)((0, _objectSpread3.default)({}, newColumn), {}, {
        children: injectSorter(prefixCls, newColumn.children, sorterSates, triggerSorter, defaultSortDirections, tableLocale, tableShowSorterTooltip, columnPos)
      });
    }
    return newColumn;
  });
}
function stateToInfo(sorterStates) {
  var column = sorterStates.column,
    sortOrder = sorterStates.sortOrder;
  return {
    column: column,
    order: sortOrder,
    field: column.dataIndex,
    columnKey: column.key
  };
}
function generateSorterInfo(sorterStates) {
  var list = sorterStates.filter(function (_ref3) {
    var sortOrder = _ref3.sortOrder;
    return sortOrder;
  }).map(stateToInfo);
  // =========== Legacy compatible support ===========
  // https://github.com/ant-design/ant-design/pull/19226
  if (list.length === 0 && sorterStates.length) {
    return (0, _objectSpread3.default)((0, _objectSpread3.default)({}, stateToInfo(sorterStates[sorterStates.length - 1])), {}, {
      column: undefined
    });
  }
  if (list.length <= 1) {
    return list[0] || {};
  }
  return list;
}
function getSortData(data, sortStates, childrenColumnName) {
  var innerSorterStates = sortStates.slice().sort(function (a, b) {
    return b.multiplePriority - a.multiplePriority;
  });
  var cloneData = data.slice();
  var runningSorters = innerSorterStates.filter(function (_ref4) {
    var sorter = _ref4.column.sorter,
      sortOrder = _ref4.sortOrder;
    return getSortFunction(sorter) && sortOrder;
  });
  // Skip if no sorter needed
  if (!runningSorters.length) {
    return cloneData;
  }
  return cloneData.sort(function (record1, record2) {
    for (var i = 0; i < runningSorters.length; i += 1) {
      var sorterState = runningSorters[i];
      var sorter = sorterState.column.sorter,
        sortOrder = sorterState.sortOrder;
      var compareFn = getSortFunction(sorter);
      if (compareFn && sortOrder) {
        var compareResult = compareFn(record1, record2, sortOrder);
        if (compareResult !== 0) {
          return sortOrder === ASCEND ? compareResult : -compareResult;
        }
      }
    }
    return 0;
  }).map(function (record) {
    var subRecords = record[childrenColumnName];
    if (subRecords) {
      return (0, _objectSpread3.default)((0, _objectSpread3.default)({}, record), {}, (0, _defineProperty2.default)({}, childrenColumnName, getSortData(subRecords, sortStates, childrenColumnName)));
    }
    return record;
  });
}
function useFilterSorter(_ref5) {
  var prefixCls = _ref5.prefixCls,
    mergedColumns = _ref5.mergedColumns,
    onSorterChange = _ref5.onSorterChange,
    sortDirections = _ref5.sortDirections,
    tableLocale = _ref5.tableLocale,
    showSorterTooltip = _ref5.showSorterTooltip;
  var _useState = (0, _useState3.default)(collectSortStates(mergedColumns.value, true)),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    sortStates = _useState2[0],
    setSortStates = _useState2[1];
  var mergedSorterStates = (0, _vue.computed)(function () {
    var validate = true;
    var collectedStates = collectSortStates(mergedColumns.value, false);
    // Return if not controlled
    if (!collectedStates.length) {
      return sortStates.value;
    }
    var validateStates = [];
    function patchStates(state) {
      if (validate) {
        validateStates.push(state);
      } else {
        validateStates.push((0, _objectSpread3.default)((0, _objectSpread3.default)({}, state), {}, {
          sortOrder: null
        }));
      }
    }
    var multipleMode = null;
    collectedStates.forEach(function (state) {
      if (multipleMode === null) {
        patchStates(state);
        if (state.sortOrder) {
          if (state.multiplePriority === false) {
            validate = false;
          } else {
            multipleMode = true;
          }
        }
      } else if (multipleMode && state.multiplePriority !== false) {
        patchStates(state);
      } else {
        validate = false;
        patchStates(state);
      }
    });
    return validateStates;
  });
  // Get render columns title required props
  var columnTitleSorterProps = (0, _vue.computed)(function () {
    var sortColumns = mergedSorterStates.value.map(function (_ref6) {
      var column = _ref6.column,
        sortOrder = _ref6.sortOrder;
      return {
        column: column,
        order: sortOrder
      };
    });
    return {
      sortColumns: sortColumns,
      // Legacy
      sortColumn: sortColumns[0] && sortColumns[0].column,
      sortOrder: sortColumns[0] && sortColumns[0].order
    };
  });
  function triggerSorter(sortState) {
    var newSorterStates;
    if (sortState.multiplePriority === false || !mergedSorterStates.value.length || mergedSorterStates.value[0].multiplePriority === false) {
      newSorterStates = [sortState];
    } else {
      newSorterStates = [].concat((0, _toConsumableArray2.default)(mergedSorterStates.value.filter(function (_ref7) {
        var key = _ref7.key;
        return key !== sortState.key;
      })), [sortState]);
    }
    setSortStates(newSorterStates);
    onSorterChange(generateSorterInfo(newSorterStates), newSorterStates);
  }
  var transformColumns = function transformColumns(innerColumns) {
    return injectSorter(prefixCls.value, innerColumns, mergedSorterStates.value, triggerSorter, sortDirections.value, tableLocale.value, showSorterTooltip.value);
  };
  var sorters = (0, _vue.computed)(function () {
    return generateSorterInfo(mergedSorterStates.value);
  });
  return [transformColumns, mergedSorterStates, columnTitleSorterProps, sorters];
}