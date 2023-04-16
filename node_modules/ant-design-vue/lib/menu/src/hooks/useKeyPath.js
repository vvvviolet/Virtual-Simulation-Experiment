"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useProvideKeyPath = exports.useMeasure = exports.useInjectKeyPath = exports.default = exports.PathContext = exports.OVERFLOW_KEY = exports.KeyPathContext = void 0;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _vue = require("vue");
var OVERFLOW_KEY = '$$__vc-menu-more__key';
exports.OVERFLOW_KEY = OVERFLOW_KEY;
var KeyPathContext = Symbol('KeyPathContext');
exports.KeyPathContext = KeyPathContext;
var useInjectKeyPath = function useInjectKeyPath() {
  return (0, _vue.inject)(KeyPathContext, {
    parentEventKeys: (0, _vue.computed)(function () {
      return [];
    }),
    parentKeys: (0, _vue.computed)(function () {
      return [];
    }),
    parentInfo: {}
  });
};
exports.useInjectKeyPath = useInjectKeyPath;
var useProvideKeyPath = function useProvideKeyPath(eventKey, key, menuInfo) {
  var _useInjectKeyPath = useInjectKeyPath(),
    parentEventKeys = _useInjectKeyPath.parentEventKeys,
    parentKeys = _useInjectKeyPath.parentKeys;
  var eventKeys = (0, _vue.computed)(function () {
    return [].concat((0, _toConsumableArray2.default)(parentEventKeys.value), [eventKey]);
  });
  var keys = (0, _vue.computed)(function () {
    return [].concat((0, _toConsumableArray2.default)(parentKeys.value), [key]);
  });
  (0, _vue.provide)(KeyPathContext, {
    parentEventKeys: eventKeys,
    parentKeys: keys,
    parentInfo: menuInfo
  });
  return keys;
};
exports.useProvideKeyPath = useProvideKeyPath;
var measure = Symbol('measure');
var PathContext = (0, _vue.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  setup: function setup(_props, _ref) {
    var slots = _ref.slots;
    // 不需要响应式
    (0, _vue.provide)(measure, true);
    return function () {
      var _slots$default;
      return (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots);
    };
  }
});
exports.PathContext = PathContext;
var useMeasure = function useMeasure() {
  return (0, _vue.inject)(measure, false);
};
exports.useMeasure = useMeasure;
var _default = useProvideKeyPath;
exports.default = _default;