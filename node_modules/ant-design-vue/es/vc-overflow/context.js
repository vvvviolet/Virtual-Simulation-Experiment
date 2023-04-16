import { computed, defineComponent, inject, provide } from 'vue';
var OverflowContextProviderKey = Symbol('OverflowContextProviderKey');
export var OverflowContextProvider = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'OverflowContextProvider',
  inheritAttrs: false,
  props: {
    value: {
      type: Object
    }
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    provide(OverflowContextProviderKey, computed(function () {
      return props.value;
    }));
    return function () {
      var _slots$default;
      return (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots);
    };
  }
});
export var useInjectOverflowContext = function useInjectOverflowContext() {
  return inject(OverflowContextProviderKey, computed(function () {
    return null;
  }));
};