/**
 * Webpack has bug for import loop, which is not the same behavior as ES module.
 * When util.js imports the TreeNode for tree generate will cause treeContextTypes be empty.
 */
import { shallowRef, inject, computed, defineComponent, provide } from 'vue';
var TreeContextKey = Symbol('TreeContextKey');
export var TreeContext = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'TreeContext',
  props: {
    value: {
      type: Object
    }
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    provide(TreeContextKey, computed(function () {
      return props.value;
    }));
    return function () {
      var _slots$default;
      return (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots);
    };
  }
});
export var useInjectTreeContext = function useInjectTreeContext() {
  return inject(TreeContextKey, computed(function () {
    return {};
  }));
};
var KeysStateKey = Symbol('KeysStateKey');
export var useProvideKeysState = function useProvideKeysState(state) {
  provide(KeysStateKey, state);
};
export var useInjectKeysState = function useInjectKeysState() {
  return inject(KeysStateKey, {
    expandedKeys: shallowRef([]),
    selectedKeys: shallowRef([]),
    loadedKeys: shallowRef([]),
    loadingKeys: shallowRef([]),
    checkedKeys: shallowRef([]),
    halfCheckedKeys: shallowRef([]),
    expandedKeysSet: computed(function () {
      return new Set();
    }),
    selectedKeysSet: computed(function () {
      return new Set();
    }),
    loadedKeysSet: computed(function () {
      return new Set();
    }),
    loadingKeysSet: computed(function () {
      return new Set();
    }),
    checkedKeysSet: computed(function () {
      return new Set();
    }),
    halfCheckedKeysSet: computed(function () {
      return new Set();
    }),
    flattenNodes: shallowRef([])
  });
};