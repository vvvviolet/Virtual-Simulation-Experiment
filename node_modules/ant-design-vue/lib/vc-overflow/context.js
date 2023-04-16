"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useInjectOverflowContext = exports.OverflowContextProvider = void 0;
var _vue = require("vue");
var OverflowContextProviderKey = Symbol('OverflowContextProviderKey');
var OverflowContextProvider = (0, _vue.defineComponent)({
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
    (0, _vue.provide)(OverflowContextProviderKey, (0, _vue.computed)(function () {
      return props.value;
    }));
    return function () {
      var _slots$default;
      return (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots);
    };
  }
});
exports.OverflowContextProvider = OverflowContextProvider;
var useInjectOverflowContext = function useInjectOverflowContext() {
  return (0, _vue.inject)(OverflowContextProviderKey, (0, _vue.computed)(function () {
    return null;
  }));
};
exports.useInjectOverflowContext = useInjectOverflowContext;