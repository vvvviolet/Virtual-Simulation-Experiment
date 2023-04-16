"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = require("vue");
var _ExpandedRow = _interopRequireDefault(require("./ExpandedRow"));
var _valueUtil = require("../utils/valueUtil");
var _MeasureCell = _interopRequireDefault(require("./MeasureCell"));
var _BodyRow = _interopRequireDefault(require("./BodyRow"));
var _useFlattenRecords = _interopRequireDefault(require("../hooks/useFlattenRecords"));
var _ResizeContext = require("../context/ResizeContext");
var _TableContext = require("../context/TableContext");
var _BodyContext = require("../context/BodyContext");
var _HoverContext = require("../context/HoverContext");
var _default2 = (0, _vue.defineComponent)({
  name: 'Body',
  props: ['data', 'getRowKey', 'measureColumnWidth', 'expandedKeys', 'customRow', 'rowExpandable', 'childrenColumnName'],
  slots: ['emptyNode'],
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var resizeContext = (0, _ResizeContext.useInjectResize)();
    var tableContext = (0, _TableContext.useInjectTable)();
    var bodyContext = (0, _BodyContext.useInjectBody)();
    var flattenData = (0, _useFlattenRecords.default)((0, _vue.toRef)(props, 'data'), (0, _vue.toRef)(props, 'childrenColumnName'), (0, _vue.toRef)(props, 'expandedKeys'), (0, _vue.toRef)(props, 'getRowKey'));
    var startRow = (0, _vue.ref)(-1);
    var endRow = (0, _vue.ref)(-1);
    var timeoutId;
    (0, _HoverContext.useProvideHover)({
      startRow: startRow,
      endRow: endRow,
      onHover: function onHover(start, end) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(function () {
          startRow.value = start;
          endRow.value = end;
        }, 100);
      }
    });
    return function () {
      var data = props.data,
        getRowKey = props.getRowKey,
        measureColumnWidth = props.measureColumnWidth,
        expandedKeys = props.expandedKeys,
        customRow = props.customRow,
        rowExpandable = props.rowExpandable,
        childrenColumnName = props.childrenColumnName;
      var onColumnResize = resizeContext.onColumnResize;
      var prefixCls = tableContext.prefixCls,
        getComponent = tableContext.getComponent;
      var flattenColumns = bodyContext.flattenColumns;
      var WrapperComponent = getComponent(['body', 'wrapper'], 'tbody');
      var trComponent = getComponent(['body', 'row'], 'tr');
      var tdComponent = getComponent(['body', 'cell'], 'td');
      var rows;
      if (data.length) {
        rows = flattenData.value.map(function (item, idx) {
          var record = item.record,
            indent = item.indent,
            renderIndex = item.index;
          var key = getRowKey(record, idx);
          return (0, _vue.createVNode)(_BodyRow.default, {
            "key": key,
            "rowKey": key,
            "record": record,
            "recordKey": key,
            "index": idx,
            "renderIndex": renderIndex,
            "rowComponent": trComponent,
            "cellComponent": tdComponent,
            "expandedKeys": expandedKeys,
            "customRow": customRow,
            "getRowKey": getRowKey,
            "rowExpandable": rowExpandable,
            "childrenColumnName": childrenColumnName,
            "indent": indent
          }, null);
        });
      } else {
        var _slots$emptyNode;
        rows = (0, _vue.createVNode)(_ExpandedRow.default, {
          "expanded": true,
          "class": "".concat(prefixCls, "-placeholder"),
          "prefixCls": prefixCls,
          "component": trComponent,
          "cellComponent": tdComponent,
          "colSpan": flattenColumns.length,
          "isEmpty": true
        }, {
          default: function _default() {
            return [(_slots$emptyNode = slots.emptyNode) === null || _slots$emptyNode === void 0 ? void 0 : _slots$emptyNode.call(slots)];
          }
        });
      }
      var columnsKey = (0, _valueUtil.getColumnsKey)(flattenColumns);
      return (0, _vue.createVNode)(WrapperComponent, {
        "class": "".concat(prefixCls, "-tbody")
      }, {
        default: function _default() {
          return [measureColumnWidth && (0, _vue.createVNode)("tr", {
            "aria-hidden": "true",
            "class": "".concat(prefixCls, "-measure-row"),
            "style": {
              height: 0,
              fontSize: 0
            }
          }, [columnsKey.map(function (columnKey) {
            return (0, _vue.createVNode)(_MeasureCell.default, {
              "key": columnKey,
              "columnKey": columnKey,
              "onColumnResize": onColumnResize
            }, null);
          })]), rows];
        }
      });
    };
  }
});
exports.default = _default2;