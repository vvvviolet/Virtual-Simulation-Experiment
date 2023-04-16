"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = require("vue");
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _Cell = _interopRequireDefault(require("../Cell"));
var _TableContext = require("../context/TableContext");
var _fixUtil = require("../utils/fixUtil");
var _valueUtil = require("../utils/valueUtil");
var _DragHandle = _interopRequireDefault(require("./DragHandle"));
var _default2 = (0, _vue.defineComponent)({
  name: 'HeaderRow',
  props: ['cells', 'stickyOffsets', 'flattenColumns', 'rowComponent', 'cellComponent', 'index', 'customHeaderRow'],
  setup: function setup(props) {
    var tableContext = (0, _TableContext.useInjectTable)();
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
      var columnsKey = (0, _valueUtil.getColumnsKey)(cells.map(function (cell) {
        return cell.column;
      }));
      return (0, _vue.createVNode)(RowComponent, rowProps, {
        default: function _default() {
          return [cells.map(function (cell, cellIndex) {
            var column = cell.column;
            var fixedInfo = (0, _fixUtil.getCellFixedInfo)(cell.colStart, cell.colEnd, flattenColumns, stickyOffsets, direction);
            var additionalProps;
            if (column && column.customHeaderCell) {
              additionalProps = cell.column.customHeaderCell(column);
            }
            var col = column;
            return (0, _vue.createVNode)(_Cell.default, (0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({}, cell), {}, {
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
                return col.resizable ? (0, _vue.createVNode)(_DragHandle.default, {
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
exports.default = _default2;