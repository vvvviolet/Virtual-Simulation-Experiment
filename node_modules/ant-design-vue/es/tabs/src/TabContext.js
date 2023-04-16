import { provide, inject, defineComponent, toRefs, ref } from 'vue';
var TabsContextKey = Symbol('tabsContextKey');
export var useProvideTabs = function useProvideTabs(props) {
  provide(TabsContextKey, props);
};
export var useInjectTabs = function useInjectTabs() {
  return inject(TabsContextKey, {
    tabs: ref([]),
    prefixCls: ref()
  });
};
var TabsContextProvider = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'TabsContextProvider',
  inheritAttrs: false,
  props: {
    tabs: {
      type: Object,
      default: undefined
    },
    prefixCls: {
      type: String,
      default: undefined
    }
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    useProvideTabs(toRefs(props));
    return function () {
      var _slots$default;
      return (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots);
    };
  }
});
export default TabsContextProvider;