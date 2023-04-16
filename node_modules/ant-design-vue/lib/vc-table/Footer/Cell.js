"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = require("vue");
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _Cell = _interopRequireDefault(require("../Cell"));
var _SummaryContext = require("../context/SummaryContext");
var _TableContext = require("../context/TableContext");
var _fixUtil = require("../utils/fixUtil");
var _default = (0, _vue.defineComponent)({
  name: 'SummaryCell',
  props: ['index', 'colSpan', 'rowSpan', 'align'],
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs,
      slots = _ref.slots;
    var tableContext = (0, _TableContext.useInjectTable)();
    var summaryContext = (0, _SummaryContext.useInjectSummary)();
    return function () {
      var index = props.index,
        _props$colSpan = props.colSpan,
        colSpan = _props$colSpan === void 0 ? 1 : _props$colSpan,
        rowSpan = props.rowSpan,
        align = props.align;
      var prefixCls = tableContext.prefixCls,
        direction = tableContext.direction;
      var scrollColumnIndex = summaryContext.scrollColumnIndex,
        stickyOffsets = summaryContext.stickyOffsets,
        flattenColumns = summaryContext.flattenColumns;
      var lastIndex = index + colSpan - 1;
      var mergedColSpan = lastIndex + 1 === scrollColumnIndex ? colSpan + 1 : colSpan;
      var fixedInfo = (0, _fixUtil.getCellFixedInfo)(index, index + mergedColSpan - 1, flattenColumns, stickyOffsets, direction);
      return (0, _vue.createVNode)(_Cell.default, (0, _objectSpread2.default)({
        "class": attrs.class,
        "index": index,
        "component": "td",
        "prefixCls": prefixCls,
        "record": null,
        "dataIndex": null,
        "align": align,
        "colSpan": mergedColSpan,
        "rowSpan": rowSpan,
        "customRender": function customRender() {
          var _slots$default;
          return (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots);
        }
      }, fixedInfo), null);
    };
  }
});
exports.default = _default;