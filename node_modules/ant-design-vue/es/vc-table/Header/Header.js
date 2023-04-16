import { createVNode as _createVNode } from "vue";
import classNames from '../../_util/classNames';
import { computed, defineComponent } from 'vue';
import { useInjectTable } from '../context/TableContext';
import HeaderRow from './HeaderRow';
function parseHeaderRows(rootColumns) {
  var rows = [];
  function fillRowCells(columns, colIndex) {
    var rowIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    // Init rows
    rows[rowIndex] = rows[rowIndex] || [];
    var currentColIndex = colIndex;
    var colSpans = columns.filter(Boolean).map(function (column) {
      var cell = {
        key: column.key,
        class: classNames(column.className, column.class),
        // children: column.title,
        column: column,
        colStart: currentColIndex
      };
      var colSpan = 1;
      var subColumns = column.children;
      if (subColumns && subColumns.length > 0) {
        colSpan = fillRowCells(subColumns, currentColIndex, rowIndex + 1).reduce(function (total, count) {
          return total + count;
        }, 0);
        cell.hasSubColumns = true;
      }
      if ('colSpan' in column) {
        colSpan = column.colSpan;
      }
      if ('rowSpan' in column) {
        cell.rowSpan = column.rowSpan;
      }
      cell.colSpan = colSpan;
      cell.colEnd = cell.colStart + colSpan - 1;
      rows[rowIndex].push(cell);
      currentColIndex += colSpan;
      return colSpan;
    });
    return colSpans;
  }
  // Generate `rows` cell data
  fillRowCells(rootColumns, 0);
  // Handle `rowSpan`
  var rowCount = rows.length;
  var _loop = function _loop(rowIndex) {
    rows[rowIndex].forEach(function (cell) {
      if (!('rowSpan' in cell) && !cell.hasSubColumns) {
        // eslint-disable-next-line no-param-reassign
        cell.rowSpan = rowCount - rowIndex;
      }
    });
  };
  for (var rowIndex = 0; rowIndex < rowCount; rowIndex += 1) {
    _loop(rowIndex);
  }
  return rows;
}
export default defineComponent({
  name: 'Header',
  inheritAttrs: false,
  props: ['columns', 'flattenColumns', 'stickyOffsets', 'customHeaderRow'],
  setup: function setup(props) {
    var tableContext = useInjectTable();
    var rows = computed(function () {
      return parseHeaderRows(props.columns);
    });
    return function () {
      var prefixCls = tableContext.prefixCls,
        getComponent = tableContext.getComponent;
      var stickyOffsets = props.stickyOffsets,
        flattenColumns = props.flattenColumns,
        customHeaderRow = props.customHeaderRow;
      var WrapperComponent = getComponent(['header', 'wrapper'], 'thead');
      var trComponent = getComponent(['header', 'row'], 'tr');
      var thComponent = getComponent(['header', 'cell'], 'th');
      return _createVNode(WrapperComponent, {
        "class": "".concat(prefixCls, "-thead")
      }, {
        default: function _default() {
          return [rows.value.map(function (row, rowIndex) {
            var rowNode = _createVNode(HeaderRow, {
              "key": rowIndex,
              "flattenColumns": flattenColumns,
              "cells": row,
              "stickyOffsets": stickyOffsets,
              "rowComponent": trComponent,
              "cellComponent": thComponent,
              "customHeaderRow": customHeaderRow,
              "index": rowIndex
            }, null);
            return rowNode;
          })];
        }
      });
    };
  }
});