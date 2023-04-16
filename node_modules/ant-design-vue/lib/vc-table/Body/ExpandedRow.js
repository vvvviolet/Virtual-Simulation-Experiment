"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = require("vue");
var _Cell = _interopRequireDefault(require("../Cell"));
var _TableContext = require("../context/TableContext");
var _ExpandedRowContext = require("../context/ExpandedRowContext");
var _default2 = (0, _vue.defineComponent)({
  name: 'ExpandedRow',
  inheritAttrs: false,
  props: ['prefixCls', 'component', 'cellComponent', 'expanded', 'colSpan', 'isEmpty'],
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
      attrs = _ref.attrs;
    var tableContext = (0, _TableContext.useInjectTable)();
    var expandedRowContext = (0, _ExpandedRowContext.useInjectExpandedRow)();
    var fixHeader = expandedRowContext.fixHeader,
      fixColumn = expandedRowContext.fixColumn,
      componentWidth = expandedRowContext.componentWidth,
      horizonScroll = expandedRowContext.horizonScroll;
    return function () {
      var prefixCls = props.prefixCls,
        Component = props.component,
        cellComponent = props.cellComponent,
        expanded = props.expanded,
        colSpan = props.colSpan,
        isEmpty = props.isEmpty;
      return (0, _vue.createVNode)(Component, {
        "class": attrs.class,
        "style": {
          display: expanded ? null : 'none'
        }
      }, {
        default: function _default() {
          return [(0, _vue.createVNode)(_Cell.default, {
            "component": cellComponent,
            "prefixCls": prefixCls,
            "colSpan": colSpan
          }, {
            default: function _default() {
              var _slots$default;
              var contentNode = (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots);
              if (isEmpty ? horizonScroll.value : fixColumn.value) {
                var _contentNode = function () {
                  return contentNode;
                }();
                contentNode = (0, _vue.createVNode)("div", {
                  "style": {
                    width: "".concat(componentWidth.value - (fixHeader.value ? tableContext.scrollbarSize : 0), "px"),
                    position: 'sticky',
                    left: 0,
                    overflow: 'hidden'
                  },
                  "class": "".concat(prefixCls, "-expanded-row-fixed")
                }, [contentNode]);
              }
              return contentNode;
            }
          })];
        }
      });
    };
  }
});
exports.default = _default2;