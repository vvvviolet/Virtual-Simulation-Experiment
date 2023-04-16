"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useProvideRange = exports.useInjectRange = exports.default = exports.RangeContextProvider = void 0;
var _vue = require("vue");
var RangeContextKey = Symbol('RangeContextProps');
var useProvideRange = function useProvideRange(props) {
  (0, _vue.provide)(RangeContextKey, props);
};
exports.useProvideRange = useProvideRange;
var useInjectRange = function useInjectRange() {
  return (0, _vue.inject)(RangeContextKey, {
    rangedValue: (0, _vue.ref)(),
    hoverRangedValue: (0, _vue.ref)(),
    inRange: (0, _vue.ref)(),
    panelPosition: (0, _vue.ref)()
  });
};
exports.useInjectRange = useInjectRange;
var RangeContextProvider = (0, _vue.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  name: 'PanelContextProvider',
  inheritAttrs: false,
  props: {
    value: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var value = {
      rangedValue: (0, _vue.ref)(props.value.rangedValue),
      hoverRangedValue: (0, _vue.ref)(props.value.hoverRangedValue),
      inRange: (0, _vue.ref)(props.value.inRange),
      panelPosition: (0, _vue.ref)(props.value.panelPosition)
    };
    useProvideRange(value);
    _vue.toRef;
    (0, _vue.watch)(function () {
      return props.value;
    }, function () {
      Object.keys(props.value).forEach(function (key) {
        if (value[key]) {
          value[key].value = props.value[key];
        }
      });
    });
    return function () {
      var _slots$default;
      return (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots);
    };
  }
});
exports.RangeContextProvider = RangeContextProvider;
var _default2 = RangeContextKey;
exports.default = _default2;