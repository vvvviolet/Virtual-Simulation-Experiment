import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import { computed, inject, provide, defineComponent } from 'vue';
export var OVERFLOW_KEY = '$$__vc-menu-more__key';
var KeyPathContext = Symbol('KeyPathContext');
var useInjectKeyPath = function useInjectKeyPath() {
  return inject(KeyPathContext, {
    parentEventKeys: computed(function () {
      return [];
    }),
    parentKeys: computed(function () {
      return [];
    }),
    parentInfo: {}
  });
};
var useProvideKeyPath = function useProvideKeyPath(eventKey, key, menuInfo) {
  var _useInjectKeyPath = useInjectKeyPath(),
    parentEventKeys = _useInjectKeyPath.parentEventKeys,
    parentKeys = _useInjectKeyPath.parentKeys;
  var eventKeys = computed(function () {
    return [].concat(_toConsumableArray(parentEventKeys.value), [eventKey]);
  });
  var keys = computed(function () {
    return [].concat(_toConsumableArray(parentKeys.value), [key]);
  });
  provide(KeyPathContext, {
    parentEventKeys: eventKeys,
    parentKeys: keys,
    parentInfo: menuInfo
  });
  return keys;
};
var measure = Symbol('measure');
export var PathContext = defineComponent({
  compatConfig: {
    MODE: 3
  },
  setup: function setup(_props, _ref) {
    var slots = _ref.slots;
    // 不需要响应式
    provide(measure, true);
    return function () {
      var _slots$default;
      return (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots);
    };
  }
});
export var useMeasure = function useMeasure() {
  return inject(measure, false);
};
export { useProvideKeyPath, useInjectKeyPath, KeyPathContext };
export default useProvideKeyPath;