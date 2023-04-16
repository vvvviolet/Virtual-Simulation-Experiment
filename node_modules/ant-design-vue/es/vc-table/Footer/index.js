import { createVNode as _createVNode } from "vue";
import Summary from './Summary';
import SummaryRow from './Row';
import SummaryCell from './Cell';
import { computed, defineComponent, reactive, toRef } from 'vue';
import { useProvideSummary } from '../context/SummaryContext';
import { useInjectTable } from '../context/TableContext';
export default defineComponent({
  name: 'Footer',
  inheritAttrs: false,
  props: ['stickyOffsets', 'flattenColumns'],
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var tableContext = useInjectTable();
    useProvideSummary(reactive({
      stickyOffsets: toRef(props, 'stickyOffsets'),
      flattenColumns: toRef(props, 'flattenColumns'),
      scrollColumnIndex: computed(function () {
        var lastColumnIndex = props.flattenColumns.length - 1;
        var scrollColumn = props.flattenColumns[lastColumnIndex];
        return scrollColumn !== null && scrollColumn !== void 0 && scrollColumn.scrollbar ? lastColumnIndex : null;
      })
    }));
    return function () {
      var _slots$default;
      var prefixCls = tableContext.prefixCls;
      return _createVNode("tfoot", {
        "class": "".concat(prefixCls, "-summary")
      }, [(_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)]);
    };
  }
});
export { SummaryRow, SummaryCell };
export var FooterComponents = Summary;