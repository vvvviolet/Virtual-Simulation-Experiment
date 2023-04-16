"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = require("vue");
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _Cell = _interopRequireDefault(require("../Cell"));
var _valueUtil = require("../utils/valueUtil");
var _ExpandedRow = _interopRequireDefault(require("./ExpandedRow"));
var _TableContext = require("../context/TableContext");
var _BodyContext = require("../context/BodyContext");
var _classNames = _interopRequireDefault(require("../../_util/classNames"));
var _propsUtil = require("../../_util/props-util");
var _default2 = (0, _vue.defineComponent)({
  name: 'BodyRow',
  inheritAttrs: false,
  props: ['record', 'index', 'renderIndex', 'recordKey', 'expandedKeys', 'rowComponent', 'cellComponent', 'customRow', 'rowExpandable', 'indent', 'rowKey', 'getRowKey', 'childrenColumnName'],
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs;
    var tableContext = (0, _TableContext.useInjectTable)();
    var bodyContext = (0, _BodyContext.useInjectBody)();
    var expandRended = (0, _vue.ref)(false);
    var expanded = (0, _vue.computed)(function () {
      return props.expandedKeys && props.expandedKeys.has(props.recordKey);
    });
    (0, _vue.watchEffect)(function () {
      if (expanded.value) {
        expandRended.value = true;
      }
    });
    var rowSupportExpand = (0, _vue.computed)(function () {
      return bodyContext.expandableType === 'row' && (!props.rowExpandable || props.rowExpandable(props.record));
    });
    // Only when row is not expandable and `children` exist in record
    var nestExpandable = (0, _vue.computed)(function () {
      return bodyContext.expandableType === 'nest';
    });
    var hasNestChildren = (0, _vue.computed)(function () {
      return props.childrenColumnName && props.record && props.record[props.childrenColumnName];
    });
    var mergedExpandable = (0, _vue.computed)(function () {
      return rowSupportExpand.value || nestExpandable.value;
    });
    var onInternalTriggerExpand = function onInternalTriggerExpand(record, event) {
      bodyContext.onTriggerExpand(record, event);
    };
    // =========================== onRow ===========================
    var additionalProps = (0, _vue.computed)(function () {
      var _props$customRow;
      return ((_props$customRow = props.customRow) === null || _props$customRow === void 0 ? void 0 : _props$customRow.call(props, props.record, props.index)) || {};
    });
    var onClick = function onClick(event) {
      var _additionalProps$valu, _additionalProps$valu2;
      if (bodyContext.expandRowByClick && mergedExpandable.value) {
        onInternalTriggerExpand(props.record, event);
      }
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      (_additionalProps$valu = additionalProps.value) === null || _additionalProps$valu === void 0 ? void 0 : (_additionalProps$valu2 = _additionalProps$valu.onClick) === null || _additionalProps$valu2 === void 0 ? void 0 : _additionalProps$valu2.call.apply(_additionalProps$valu2, [_additionalProps$valu, event].concat(args));
    };
    var computeRowClassName = (0, _vue.computed)(function () {
      var record = props.record,
        index = props.index,
        indent = props.indent;
      var rowClassName = bodyContext.rowClassName;
      if (typeof rowClassName === 'string') {
        return rowClassName;
      } else if (typeof rowClassName === 'function') {
        return rowClassName(record, index, indent);
      }
      return '';
    });
    var columnsKey = (0, _vue.computed)(function () {
      return (0, _valueUtil.getColumnsKey)(bodyContext.flattenColumns);
    });
    return function () {
      var className = attrs.class,
        style = attrs.style;
      var record = props.record,
        index = props.index,
        rowKey = props.rowKey,
        _props$indent = props.indent,
        indent = _props$indent === void 0 ? 0 : _props$indent,
        RowComponent = props.rowComponent,
        cellComponent = props.cellComponent;
      var prefixCls = tableContext.prefixCls,
        fixedInfoList = tableContext.fixedInfoList,
        transformCellText = tableContext.transformCellText;
      var flattenColumns = bodyContext.flattenColumns,
        expandedRowClassName = bodyContext.expandedRowClassName,
        indentSize = bodyContext.indentSize,
        expandIcon = bodyContext.expandIcon,
        expandedRowRender = bodyContext.expandedRowRender,
        expandIconColumnIndex = bodyContext.expandIconColumnIndex;
      var baseRowNode = (0, _vue.createVNode)(RowComponent, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, additionalProps.value), {}, {
        "data-row-key": rowKey,
        "class": (0, _classNames.default)(className, "".concat(prefixCls, "-row"), "".concat(prefixCls, "-row-level-").concat(indent), computeRowClassName.value, additionalProps.value.class),
        "style": (0, _objectSpread2.default)((0, _objectSpread2.default)({}, style), (0, _propsUtil.parseStyleText)(additionalProps.value.style)),
        "onClick": onClick
      }), {
        default: function _default() {
          return [flattenColumns.map(function (column, colIndex) {
            var customRender = column.customRender,
              dataIndex = column.dataIndex,
              columnClassName = column.className;
            var key = columnsKey[colIndex];
            var fixedInfo = fixedInfoList[colIndex];
            var additionalCellProps;
            if (column.customCell) {
              additionalCellProps = column.customCell(record, index, column);
            }
            // not use slot to fix https://github.com/vueComponent/ant-design-vue/issues/5295
            var appendNode = colIndex === (expandIconColumnIndex || 0) && nestExpandable.value ? (0, _vue.createVNode)(_vue.Fragment, null, [(0, _vue.createVNode)("span", {
              "style": {
                paddingLeft: "".concat(indentSize * indent, "px")
              },
              "class": "".concat(prefixCls, "-row-indent indent-level-").concat(indent)
            }, null), expandIcon({
              prefixCls: prefixCls,
              expanded: expanded.value,
              expandable: hasNestChildren.value,
              record: record,
              onExpand: onInternalTriggerExpand
            })]) : null;
            return (0, _vue.createVNode)(_Cell.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({
              "cellType": "body",
              "class": columnClassName,
              "ellipsis": column.ellipsis,
              "align": column.align,
              "component": cellComponent,
              "prefixCls": prefixCls,
              "key": key,
              "record": record,
              "index": index,
              "renderIndex": props.renderIndex,
              "dataIndex": dataIndex,
              "customRender": customRender
            }, fixedInfo), {}, {
              "additionalProps": additionalCellProps,
              "column": column,
              "transformCellText": transformCellText,
              "appendNode": appendNode
            }), null);
          })];
        }
      });
      // ======================== Expand Row =========================
      var expandRowNode;
      if (rowSupportExpand.value && (expandRended.value || expanded.value)) {
        var expandContent = expandedRowRender({
          record: record,
          index: index,
          indent: indent + 1,
          expanded: expanded.value
        });
        var computedExpandedRowClassName = expandedRowClassName && expandedRowClassName(record, index, indent);
        expandRowNode = (0, _vue.createVNode)(_ExpandedRow.default, {
          "expanded": expanded.value,
          "class": (0, _classNames.default)("".concat(prefixCls, "-expanded-row"), "".concat(prefixCls, "-expanded-row-level-").concat(indent + 1), computedExpandedRowClassName),
          "prefixCls": prefixCls,
          "component": RowComponent,
          "cellComponent": cellComponent,
          "colSpan": flattenColumns.length,
          "isEmpty": false
        }, {
          default: function _default() {
            return [expandContent];
          }
        });
      }
      return (0, _vue.createVNode)(_vue.Fragment, null, [baseRowNode, expandRowNode]);
    };
  }
});
exports.default = _default2;