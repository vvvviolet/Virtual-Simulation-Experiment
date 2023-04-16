import { resolveDirective as _resolveDirective, createVNode as _createVNode } from "vue";
import Cell from '../Cell';
import { defineComponent } from 'vue';
import { useInjectTable } from '../context/TableContext';
import { useInjectExpandedRow } from '../context/ExpandedRowContext';
export default defineComponent({
  name: 'ExpandedRow',
  inheritAttrs: false,
  props: ['prefixCls', 'component', 'cellComponent', 'expanded', 'colSpan', 'isEmpty'],
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
      attrs = _ref.attrs;
    var tableContext = useInjectTable();
    var expandedRowContext = useInjectExpandedRow();
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
      return _createVNode(Component, {
        "class": attrs.class,
        "style": {
          display: expanded ? null : 'none'
        }
      }, {
        default: function _default() {
          return [_createVNode(Cell, {
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
                contentNode = _createVNode("div", {
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