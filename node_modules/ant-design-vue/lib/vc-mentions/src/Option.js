"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.optionProps = exports.default = void 0;
var _vue = require("vue");
var optionProps = {
  value: String,
  disabled: Boolean,
  label: [String, Number, Function]
};
exports.optionProps = optionProps;
var _default = (0, _vue.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  name: 'Option',
  props: optionProps,
  render: function render(_props, _ref) {
    var _slots$default;
    var slots = _ref.slots;
    return (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots);
  }
});
exports.default = _default;