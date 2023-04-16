import { computed, defineComponent, onBeforeUnmount, watchEffect } from 'vue';
import { useInjectTable } from '../context/TableContext';
var indexGuid = 0;
var Summary = defineComponent({
  name: 'Summary',
  props: ['fixed'],
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var tableContext = useInjectTable();
    var uniKey = "table-summary-uni-key-".concat(++indexGuid);
    var fixed = computed(function () {
      return props.fixed === '' || props.fixed;
    });
    watchEffect(function () {
      tableContext.summaryCollect(uniKey, fixed.value);
    });
    onBeforeUnmount(function () {
      tableContext.summaryCollect(uniKey, false);
    });
    return function () {
      var _slots$default;
      return (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots);
    };
  }
});
export default Summary;