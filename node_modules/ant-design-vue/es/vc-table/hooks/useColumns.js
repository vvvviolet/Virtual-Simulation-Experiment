import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
var _excluded = ["fixed"];
import { createVNode as _createVNode } from "vue";
import { warning } from '../../vc-util/warning';
import { computed, watchEffect } from 'vue';
import { INTERNAL_COL_DEFINE } from '../utils/legacyUtil';
import { EXPAND_COLUMN } from '../constant';
function flatColumns(columns) {
  return columns.reduce(function (list, column) {
    var fixed = column.fixed;
    // Convert `fixed='true'` to `fixed='left'` instead
    var parsedFixed = fixed === true ? 'left' : fixed;
    var subColumns = column.children;
    if (subColumns && subColumns.length > 0) {
      return [].concat(_toConsumableArray(list), _toConsumableArray(flatColumns(subColumns).map(function (subColum) {
        return _objectSpread({
          fixed: parsedFixed
        }, subColum);
      })));
    }
    return [].concat(_toConsumableArray(list), [_objectSpread(_objectSpread({}, column), {}, {
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
      warning(false, "Index ".concat(i - 1, " of `columns` missing `fixed='left'` prop."));
      break;
    }
  }
  var allFixRight = true;
  for (var _i = flattenColumns.length - 1; _i >= 0; _i -= 1) {
    var _col = flattenColumns[_i];
    if (allFixRight && _col.fixed !== 'right') {
      allFixRight = false;
    } else if (!allFixRight && _col.fixed === 'right') {
      warning(false, "Index ".concat(_i + 1, " of `columns` missing `fixed='right'` prop."));
      break;
    }
  }
}
function revertForRtl(columns) {
  return columns.map(function (column) {
    var fixed = column.fixed,
      restProps = _objectWithoutProperties(column, _excluded);
    // Convert `fixed='left'` to `fixed='right'` instead
    var parsedFixed = fixed;
    if (fixed === 'left') {
      parsedFixed = 'right';
    } else if (fixed === 'right') {
      parsedFixed = 'left';
    }
    return _objectSpread({
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
  var withExpandColumns = computed(function () {
    if (expandable.value) {
      var _expandColumn;
      var cloneColumns = baseColumns.value.slice();
      // >>> Warning if use `expandIconColumnIndex`
      if (process.env.NODE_ENV !== 'production' && expandIconColumnIndex.value >= 0) {
        warning(false, '`expandIconColumnIndex` is deprecated. Please use `Table.EXPAND_COLUMN` in `columns` instead.');
      }
      // >>> Insert expand column if not exist
      if (!cloneColumns.includes(EXPAND_COLUMN)) {
        var expandColIndex = expandIconColumnIndex.value || 0;
        if (expandColIndex >= 0) {
          cloneColumns.splice(expandColIndex, 0, EXPAND_COLUMN);
        }
      }
      // >>> Deduplicate additional expand column
      if (process.env.NODE_ENV !== 'production' && cloneColumns.filter(function (c) {
        return c === EXPAND_COLUMN;
      }).length > 1) {
        warning(false, 'There exist more than one `EXPAND_COLUMN` in `columns`.');
      }
      var expandColumnIndex = cloneColumns.indexOf(EXPAND_COLUMN);
      cloneColumns = cloneColumns.filter(function (column, index) {
        return column !== EXPAND_COLUMN || index === expandColumnIndex;
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
      var expandColumn = (_expandColumn = {}, _defineProperty(_expandColumn, INTERNAL_COL_DEFINE, {
        class: "".concat(prefixCls.value, "-expand-icon-col"),
        columnType: 'EXPAND_COLUMN'
      }), _defineProperty(_expandColumn, "title", ''), _defineProperty(_expandColumn, "fixed", fixedColumn), _defineProperty(_expandColumn, "class", "".concat(prefixCls.value, "-row-expand-icon-cell")), _defineProperty(_expandColumn, "width", expandColumnWidth.value), _defineProperty(_expandColumn, "customRender", function customRender(_ref2) {
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
          return _createVNode("span", {
            "onClick": function onClick(e) {
              return e.stopPropagation();
            }
          }, [icon]);
        }
        return icon;
      }), _expandColumn);
      return cloneColumns.map(function (col) {
        return col === EXPAND_COLUMN ? expandColumn : col;
      });
    }
    if (process.env.NODE_ENV !== 'production' && baseColumns.value.includes(EXPAND_COLUMN)) {
      warning(false, '`expandable` is not config but there exist `EXPAND_COLUMN` in `columns`.');
    }
    return baseColumns.value.filter(function (col) {
      return col !== EXPAND_COLUMN;
    });
  });
  var mergedColumns = computed(function () {
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
  var flattenColumns = computed(function () {
    if (direction.value === 'rtl') {
      return revertForRtl(flatColumns(mergedColumns.value));
    }
    return flatColumns(mergedColumns.value);
  });
  // Only check out of production since it's waste for each render
  if (process.env.NODE_ENV !== 'production') {
    watchEffect(function () {
      setTimeout(function () {
        warningFixed(flattenColumns.value);
      });
    });
  }
  return [mergedColumns, flattenColumns];
}
export default useColumns;