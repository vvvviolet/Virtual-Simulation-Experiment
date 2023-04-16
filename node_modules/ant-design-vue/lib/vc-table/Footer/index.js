"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FooterComponents = void 0;
Object.defineProperty(exports, "SummaryCell", {
  enumerable: true,
  get: function get() {
    return _Cell.default;
  }
});
Object.defineProperty(exports, "SummaryRow", {
  enumerable: true,
  get: function get() {
    return _Row.default;
  }
});
exports.default = void 0;
var _vue = require("vue");
var _Summary = _interopRequireDefault(require("./Summary"));
var _Row = _interopRequireDefault(require("./Row"));
var _Cell = _interopRequireDefault(require("./Cell"));
var _SummaryContext = require("../context/SummaryContext");
var _TableContext = require("../context/TableContext");
var _default = (0, _vue.defineComponent)({
  name: 'Footer',
  inheritAttrs: false,
  props: ['stickyOffsets', 'flattenColumns'],
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var tableContext = (0, _TableContext.useInjectTable)();
    (0, _SummaryContext.useProvideSummary)((0, _vue.reactive)({
      stickyOffsets: (0, _vue.toRef)(props, 'stickyOffsets'),
      flattenColumns: (0, _vue.toRef)(props, 'flattenColumns'),
      scrollColumnIndex: (0, _vue.computed)(function () {
        var lastColumnIndex = props.flattenColumns.length - 1;
        var scrollColumn = props.flattenColumns[lastColumnIndex];
        return scrollColumn !== null && scrollColumn !== void 0 && scrollColumn.scrollbar ? lastColumnIndex : null;
      })
    }));
    return function () {
      var _slots$default;
      var prefixCls = tableContext.prefixCls;
      return (0, _vue.createVNode)("tfoot", {
        "class": "".concat(prefixCls, "-summary")
      }, [(_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)]);
    };
  }
});
exports.default = _default;
var FooterComponents = _Summary.default;
exports.FooterComponents = FooterComponents;