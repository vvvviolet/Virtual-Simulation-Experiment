import { createVNode as _createVNode } from "vue";
import ExpandedRow from './ExpandedRow';
import { getColumnsKey } from '../utils/valueUtil';
import MeasureCell from './MeasureCell';
import BodyRow from './BodyRow';
import useFlattenRecords from '../hooks/useFlattenRecords';
import { defineComponent, ref, toRef } from 'vue';
import { useInjectResize } from '../context/ResizeContext';
import { useInjectTable } from '../context/TableContext';
import { useInjectBody } from '../context/BodyContext';
import { useProvideHover } from '../context/HoverContext';
export default defineComponent({
  name: 'Body',
  props: ['data', 'getRowKey', 'measureColumnWidth', 'expandedKeys', 'customRow', 'rowExpandable', 'childrenColumnName'],
  slots: ['emptyNode'],
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var resizeContext = useInjectResize();
    var tableContext = useInjectTable();
    var bodyContext = useInjectBody();
    var flattenData = useFlattenRecords(toRef(props, 'data'), toRef(props, 'childrenColumnName'), toRef(props, 'expandedKeys'), toRef(props, 'getRowKey'));
    var startRow = ref(-1);
    var endRow = ref(-1);
    var timeoutId;
    useProvideHover({
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
          return _createVNode(BodyRow, {
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
        rows = _createVNode(ExpandedRow, {
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
      var columnsKey = getColumnsKey(flattenColumns);
      return _createVNode(WrapperComponent, {
        "class": "".concat(prefixCls, "-tbody")
      }, {
        default: function _default() {
          return [measureColumnWidth && _createVNode("tr", {
            "aria-hidden": "true",
            "class": "".concat(prefixCls, "-measure-row"),
            "style": {
              height: 0,
              fontSize: 0
            }
          }, [columnsKey.map(function (columnKey) {
            return _createVNode(MeasureCell, {
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