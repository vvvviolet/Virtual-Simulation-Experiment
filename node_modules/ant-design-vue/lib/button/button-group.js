"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.buttonGroupProps = void 0;
var _vue = require("vue");
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _propsUtil = require("../_util/props-util");
var _useConfigInject2 = _interopRequireDefault(require("../_util/hooks/useConfigInject"));
var _unreachableException = _interopRequireDefault(require("../_util/unreachableException"));
var buttonGroupProps = function buttonGroupProps() {
  return {
    prefixCls: String,
    size: {
      type: String
    }
  };
};
exports.buttonGroupProps = buttonGroupProps;
var _default = (0, _vue.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  name: 'AButtonGroup',
  props: buttonGroupProps(),
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var _useConfigInject = (0, _useConfigInject2.default)('btn-group', props),
      prefixCls = _useConfigInject.prefixCls,
      direction = _useConfigInject.direction;
    var classes = (0, _vue.computed)(function () {
      var _ref2;
      var size = props.size;
      // large => lg
      // small => sm
      var sizeCls = '';
      switch (size) {
        case 'large':
          sizeCls = 'lg';
          break;
        case 'small':
          sizeCls = 'sm';
          break;
        case 'middle':
        case undefined:
          break;
        default:
          // eslint-disable-next-line no-console
          console.warn(new _unreachableException.default(size).error);
      }
      return _ref2 = {}, (0, _defineProperty2.default)(_ref2, "".concat(prefixCls.value), true), (0, _defineProperty2.default)(_ref2, "".concat(prefixCls.value, "-").concat(sizeCls), sizeCls), (0, _defineProperty2.default)(_ref2, "".concat(prefixCls.value, "-rtl"), direction.value === 'rtl'), _ref2;
    });
    return function () {
      var _slots$default;
      return (0, _vue.createVNode)("div", {
        "class": classes.value
      }, [(0, _propsUtil.flattenChildren)((_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots))]);
    };
  }
});
exports.default = _default;