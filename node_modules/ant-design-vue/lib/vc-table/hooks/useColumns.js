"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = require("vue");
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _warning = require("../../vc-util/warning");
var _legacyUtil = require("../utils/legacyUtil");
var _constant = require("../constant");
var _excluded = ["fixed"];
function flatColumns(columns) {
  return columns.reduce(function (list, column) {
    var fixed = column.fixed;
    // Convert `fixed='true'` to `fixed='left'` instead
    var parsedFixed = fixed === true ? 'left' : fixed;
    var subColumns = column.children;
    if (subColumns && subColumns.length > 0) {
      return [].concat((0, _toConsumableArray2.default)(list), (0, _toConsumableArray2.default)(flatColumns(subColumns).map(function (subColum) {
        return (0, _objectSpread2.default)({
          fixed: parsedFixed
        }, subColum);
      })));
    }
    return [].concat((0, _toConsumableArray2.default)(list), [(0, _objectSpread2.default)((0, _objectSpread2.default)({}, column), {}, {
      fixed: parsedFixed
    })]);
  }, []);
}
function warningFixed(flattenColumns) {
  var allFixLeft = true;
  for (var i = 0; i < flattenColumns.length; i += 1) {
    var col = flattenColumns[i];
    if (allFixLeft && col.fixed !== 'left') {
      allFixLeft = false;
    } else if (!allFixLeft && col.fixed === 'left') {
      (0, _warning.warning)(false, "Index ".concat(i - 1, " of `columns` missing `fixed='left'` prop."));
      break;
    }
  }
  var allFixRight = true;
  for (var _i = flattenColumns.length - 1; _i >= 0; _i -= 1) {
    var _col = flattenColumns[_i];
    if (allFixRight && _col.fixed !== 'right') {
      allFixRight = false;
    } else if (!allFixRight && _col.fixed === 'right') {
      (0, _warning.warning)(false, "Index ".concat(_i + 1, " of `columns` missing `fixed='right'` prop."));
      break;
    }
  }
}
function revertForRtl(columns) {
  return columns.map(function (column) {
    var fixed = column.fixed,
      restProps = (0, _objectWithoutProperties2.default)(column, _excluded);
    // Convert `fixed='left'` to `fixed='right'` instead
    var parsedFixed = fixed;
    if (fixed === 'left') {
      parsedFixed = 'right';
    } else if (fixed === 'right') {
      parsedFixed = 'left';
    }
    return (0, _objectSpread2.default)({
      fixed: parsedFixed
    }, restProps);
  });
}
/**
 * Parse `columns` & `children` into `columns`.
 */
function useColumns(_ref, transformColumns) {
  var prefixCls = _ref.prefixCls,
    baseColumns = _ref.columns,
    expandable = _ref.expandable,
    expandedKeys = _ref.expandedKeys,
    getRowKey = _ref.getRowKey,
    onTriggerExpand = _ref.onTriggerExpand,
    expandIcon = _ref.expandIcon,
    rowExpandable = _ref.rowExpandable,
    expandIconColumnIndex = _ref.expandIconColumnIndex,
    direction = _ref.direction,
    expandRowByClick = _ref.expandRowByClick,
    expandColumnWidth = _ref.expandColumnWidth,
    expandFixed = _ref.expandFixed;
  // Add expand column
  var withExpandColumns = (0, _vue.computed)(function () {
    if (expandable.value) {
      var _expandColumn;
      var cloneColumns = baseColumns.value.slice();
      // >>> Warning if use `expandIconColumnIndex`
      if (process.env.NODE_ENV !== 'production' && expandIconColumnIndex.value >= 0) {
        (0, _warning.warning)(false, '`expandIconColumnIndex` is deprecated. Please use `Table.EXPAND_COLUMN` in `columns` instead.');
      }
      // >>> Insert expand column if not exist
      if (!cloneColumns.includes(_constant.EXPAND_COLUMN)) {
        var expandColIndex = expandIconColumnIndex.value || 0;
        if (expandColIndex >= 0) {
          cloneColumns.splice(expandColIndex, 0, _constant.EXPAND_COLUMN);
        }
      }
      // >>> Deduplicate additional expand column
      if (process.env.NODE_ENV !== 'production' && cloneColumns.filter(function (c) {
        return c === _constant.EXPAND_COLUMN;
      }).length > 1) {
        (0, _warning.warning)(false, 'There exist more than one `EXPAND_COLUMN` in `columns`.');
      }
      var expandColumnIndex = cloneColumns.indexOf(_constant.EXPAND_COLUMN);
      cloneColumns = cloneColumns.filter(function (column, index) {
        return column !== _constant.EXPAND_COLUMN || index === expandColumnIndex;
      });
      // >>> Check if expand column need to fixed
      var prevColumn = baseColumns.value[expandColumnIndex];
      var fixedColumn;
      if ((expandFixed.value === 'left' || expandFixed.value) && !expandIconColumnIndex.value) {
        fixedColumn = 'left';
      } else if ((expandFixed.value === 'right' || expandFixed.value) && expandIconColumnIndex.value === baseColumns.value.length) {
        fixedColumn = 'right';
      } else {
        fixedColumn = prevColumn ? prevColumn.fixed : null;
      }
      var expandedKeysValue = expandedKeys.value;
      var rowExpandableValue = rowExpandable.value;
      var expandIconValue = expandIcon.value;
      var prefixClsValue = prefixCls.value;
      var expandRowByClickValue = expandRowByClick.value;
      // >>> Create expandable column
      var expandColumn = (_expandColumn = {}, (0, _defineProperty2.default)(_expandColumn, _legacyUtil.INTERNAL_COL_DEFINE, {
        class: "".concat(prefixCls.value, "-expand-icon-col"),
        columnType: 'EXPAND_COLUMN'
      }), (0, _defineProperty2.default)(_expandColumn, "title", ''), (0, _defineProperty2.default)(_expandColumn, "fixed", fixedColumn), (0, _defineProperty2.default)(_expandColumn, "class", "".concat(prefixCls.value, "-row-expand-icon-cell")), (0, _defineProperty2.default)(_expandColumn, "width", expandColumnWidth.value), (0, _defineProperty2.default)(_expandColumn, "customRender", function customRender(_ref2) {
        var record = _ref2.record,
          index = _ref2.index;
        var rowKey = getRowKey.value(record, index);
        var expanded = expandedKeysValue.has(rowKey);
        var recordExpandable = rowExpandableValue ? rowExpandableValue(record) : true;
        var icon = expandIconValue({
          prefixCls: prefixClsValue,
          expanded: expanded,
          expandable: recordExpandable,
          record: record,
          onExpand: onTriggerExpand
        });
        if (expandRowByClickValue) {
          return (0, _vue.createVNode)("span", {
            "onClick": function onClick(e) {
              return e.stopPropagation();
            }
          }, [icon]);
        }
        return icon;
      }), _expandColumn);
      return cloneColumns.map(function (col) {
        return col === _constant.EXPAND_COLUMN ? expandColumn : col;
      });
    }
    if (process.env.NODE_ENV !== 'production' && baseColumns.value.includes(_constant.EXPAND_COLUMN)) {
      (0, _warning.warning)(false, '`expandable` is not config but there exist `EXPAND_COLUMN` in `columns`.');
    }
    return baseColumns.value.filter(function (col) {
      return col !== _constant.EXPAND_COLUMN;
    });
  });
  var mergedColumns = (0, _vue.computed)(function () {
    var finalColumns = withExpandColumns.value;
    if (transformColumns.value) {
      finalColumns = transformColumns.value(finalColumns);
    }
    // Always provides at least one column for table display
    if (!finalColumns.length) {
      finalColumns = [{
        customRender: function customRender() {
          return null;
        }
      }];
    }
    return finalColumns;
  });
  var flattenColumns = (0, _vue.computed)(function () {
    if (direction.value === 'rtl') {
      return revertForRtl(flatColumns(mergedColumns.value));
    }
    return flatColumns(mergedColumns.value);
  });
  // Only check out of production since it's waste for each render
  if (process.env.NODE_ENV !== 'production') {
    (0, _vue.watchEffect)(function () {
      setTimeout(function () {
        warningFixed(flattenColumns.value);
      });
    });
  }
  return [mergedColumns, flattenColumns];
}
var _default = useColumns;
exports.default = _default;