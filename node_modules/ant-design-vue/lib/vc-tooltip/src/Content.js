"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = require("vue");
var _vueTypes = _interopRequireDefault(require("../../_util/vue-types"));
var tooltipContentProps = {
  prefixCls: String,
  id: String,
  overlayInnerStyle: _vueTypes.default.any
};
var _default = (0, _vue.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  name: 'Content',
  props: tooltipContentProps,
  slots: ['overlay'],
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    return function () {
      var _slots$overlay;
      return (0, _vue.createVNode)("div", {
        "class": "".concat(props.prefixCls, "-inner"),
        "id": props.id,
        "role": "tooltip",
        "style": props.overlayInnerStyle
      }, [(_slots$overlay = slots.overlay) === null || _slots$overlay === void 0 ? void 0 : _slots$overlay.call(slots)]);
    };
  }
});
exports.default = _default;