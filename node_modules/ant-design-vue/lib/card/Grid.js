"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.cardGridProps = void 0;
var _vue = require("vue");
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _useConfigInject2 = _interopRequireDefault(require("../_util/hooks/useConfigInject"));
var cardGridProps = function cardGridProps() {
  return {
    prefixCls: String,
    hoverable: {
      type: Boolean,
      default: true
    }
  };
};
exports.cardGridProps = cardGridProps;
var _default = (0, _vue.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  name: 'ACardGrid',
  __ANT_CARD_GRID: true,
  props: cardGridProps(),
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var _useConfigInject = (0, _useConfigInject2.default)('card', props),
      prefixCls = _useConfigInject.prefixCls;
    var classNames = (0, _vue.computed)(function () {
      var _ref2;
      return _ref2 = {}, (0, _defineProperty2.default)(_ref2, "".concat(prefixCls.value, "-grid"), true), (0, _defineProperty2.default)(_ref2, "".concat(prefixCls.value, "-grid-hoverable"), props.hoverable), _ref2;
    });
    return function () {
      var _slots$default;
      return (0, _vue.createVNode)("div", {
        "class": classNames.value
      }, [(_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)]);
    };
  }
});
exports.default = _default;