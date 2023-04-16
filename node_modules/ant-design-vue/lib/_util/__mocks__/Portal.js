"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = require("vue");
var _default = (0, _vue.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  name: 'Portal',
  inheritAttrs: false,
  props: ['getContainer'],
  setup: function setup(_props, _ref) {
    var slots = _ref.slots;
    return function () {
      var _slots$default;
      return (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots);
    };
  }
});
exports.default = _default;