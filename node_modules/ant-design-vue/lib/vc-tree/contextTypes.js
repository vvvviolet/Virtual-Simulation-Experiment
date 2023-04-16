"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useProvideKeysState = exports.useInjectTreeContext = exports.useInjectKeysState = exports.TreeContext = void 0;
var _vue = require("vue");
/**
 * Webpack has bug for import loop, which is not the same behavior as ES module.
 * When util.js imports the TreeNode for tree generate will cause treeContextTypes be empty.
 */

var TreeContextKey = Symbol('TreeContextKey');
var TreeContext = (0, _vue.defineComponent)({
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
    (0, _vue.provide)(TreeContextKey, (0, _vue.computed)(function () {
      return props.value;
    }));
    return function () {
      var _slots$default;
      return (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots);
    };
  }
});
exports.TreeContext = TreeContext;
var useInjectTreeContext = function useInjectTreeContext() {
  return (0, _vue.inject)(TreeContextKey, (0, _vue.computed)(function () {
    return {};
  }));
};
exports.useInjectTreeContext = useInjectTreeContext;
var KeysStateKey = Symbol('KeysStateKey');
var useProvideKeysState = function useProvideKeysState(state) {
  (0, _vue.provide)(KeysStateKey, state);
};
exports.useProvideKeysState = useProvideKeysState;
var useInjectKeysState = function useInjectKeysState() {
  return (0, _vue.inject)(KeysStateKey, {
    expandedKeys: (0, _vue.shallowRef)([]),
    selectedKeys: (0, _vue.shallowRef)([]),
    loadedKeys: (0, _vue.shallowRef)([]),
    loadingKeys: (0, _vue.shallowRef)([]),
    checkedKeys: (0, _vue.shallowRef)([]),
    halfCheckedKeys: (0, _vue.shallowRef)([]),
    expandedKeysSet: (0, _vue.computed)(function () {
      return new Set();
    }),
    selectedKeysSet: (0, _vue.computed)(function () {
      return new Set();
    }),
    loadedKeysSet: (0, _vue.computed)(function () {
      return new Set();
    }),
    loadingKeysSet: (0, _vue.computed)(function () {
      return new Set();
    }),
    checkedKeysSet: (0, _vue.computed)(function () {
      return new Set();
    }),
    halfCheckedKeysSet: (0, _vue.computed)(function () {
      return new Set();
    }),
    flattenNodes: (0, _vue.shallowRef)([])
  });
};
exports.useInjectKeysState = useInjectKeysState;