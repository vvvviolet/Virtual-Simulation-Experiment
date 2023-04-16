import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { resolveDirective as _resolveDirective, createVNode as _createVNode } from "vue";
import { defineComponent } from 'vue';
import Cell from '../Cell';
import { useInjectTable } from '../context/TableContext';
import { getCellFixedInfo } from '../utils/fixUtil';
import { getColumnsKey } from '../utils/valueUtil';
import DragHandleVue from './DragHandle';
export default defineComponent({
  name: 'HeaderRow',
  props: ['cells', 'stickyOffsets', 'flattenColumns', 'rowComponent', 'cellComponent', 'index', 'customHeaderRow'],
  setup: function setup(props) {
    var tableContext = useInjectTable();
    return function () {
      var prefixCls = tableContext.prefixCls,
        direction = tableContext.direction;
      var cells = props.cells,
        stickyOffsets = props.stickyOffsets,
        flattenColumns = props.flattenColumns,
        RowComponent = props.rowComponent,
        CellComponent = props.cellComponent,
        customHeaderRow = props.customHeaderRow,
        index = props.index;
      var rowProps;
      if (customHeaderRow) {
        rowProps = customHeaderRow(cells.map(function (cell) {
          return cell.column;
        }), index);
      }
      var columnsKey = getColumnsKey(cells.map(function (cell) {
        return cell.column;
      }));
      return _createVNode(RowComponent, rowProps, {
        default: function _default() {
          return [cells.map(function (cell, cellIndex) {
            var column = cell.column;
            var fixedInfo = getCellFixedInfo(cell.colStart, cell.colEnd, flattenColumns, stickyOffsets, direction);
            var additionalProps;
            if (column && column.customHeaderCell) {
              additionalProps = cell.column.customHeaderCell(column);
            }
            var col = column;
            return _createVNode(Cell, _objectSpread(_objectSpread(_objectSpread({}, cell), {}, {
              "cellType": "header",
              "ellipsis": column.ellipsis,
              "align": column.align,
              "component": CellComponent,
              "prefixCls": prefixCls,
              "key": columnsKey[cellIndex]
            }, fixedInfo), {}, {
              "additionalProps": additionalProps,
              "rowType": "header",
              "column": column
            }), {
              default: function _default() {
                return column.title;
              },
              dragHandle: function dragHandle() {
                return col.resizable ? _createVNode(DragHandleVue, {
                  "prefixCls": prefixCls,
                  "width": col.width,
                  "minWidth": col.minWidth,
                  "maxWidth": col.maxWidth,
                  "column": col
                }, null) : null;
              }
            });
          })];
        }
      });
    };
  }
});