"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useProvideTabs = exports.useInjectTabs = exports.default = void 0;
var _vue = require("vue");
var TabsContextKey = Symbol('tabsContextKey');
var useProvideTabs = function useProvideTabs(props) {
  (0, _vue.provide)(TabsContextKey, props);
};
exports.useProvideTabs = useProvideTabs;
var useInjectTabs = function useInjectTabs() {
  return (0, _vue.inject)(TabsContextKey, {
    tabs: (0, _vue.ref)([]),
    prefixCls: (0, _vue.ref)()
  });
};
exports.useInjectTabs = useInjectTabs;
var TabsContextProvider = (0, _vue.defineComponent)({
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
    useProvideTabs((0, _vue.toRefs)(props));
    return function () {
      var _slots$default;
      return (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots);
    };
  }
});
var _default = TabsContextProvider;
exports.default = _default;