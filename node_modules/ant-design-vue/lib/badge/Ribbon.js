"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ribbonProps = exports.default = void 0;
var _vue = require("vue");
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _utils = require("./utils");
var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));
var _useConfigInject2 = _interopRequireDefault(require("../_util/hooks/useConfigInject"));
var _excluded = ["class", "style"];
var ribbonProps = function ribbonProps() {
  return {
    prefix: String,
    color: {
      type: String
    },
    text: _vueTypes.default.any,
    placement: {
      type: String,
      default: 'end'
    }
  };
};
exports.ribbonProps = ribbonProps;
var _default = (0, _vue.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  name: 'ABadgeRibbon',
  inheritAttrs: false,
  props: ribbonProps(),
  slots: ['text'],
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs,
      slots = _ref.slots;
    var _useConfigInject = (0, _useConfigInject2.default)('ribbon', props),
      prefixCls = _useConfigInject.prefixCls,
      direction = _useConfigInject.direction;
    var colorInPreset = (0, _vue.computed)(function () {
      return (0, _utils.isPresetColor)(props.color);
    });
    var ribbonCls = (0, _vue.computed)(function () {
      var _ref2;
      return [prefixCls.value, "".concat(prefixCls.value, "-placement-").concat(props.placement), (_ref2 = {}, (0, _defineProperty2.default)(_ref2, "".concat(prefixCls.value, "-rtl"), direction.value === 'rtl'), (0, _defineProperty2.default)(_ref2, "".concat(prefixCls.value, "-color-").concat(props.color), colorInPreset.value), _ref2)];
    });
    return function () {
      var _slots$default, _slots$text;
      var className = attrs.class,
        style = attrs.style,
        restAttrs = (0, _objectWithoutProperties2.default)(attrs, _excluded);
      var colorStyle = {};
      var cornerColorStyle = {};
      if (props.color && !colorInPreset.value) {
        colorStyle.background = props.color;
        cornerColorStyle.color = props.color;
      }
      return (0, _vue.createVNode)("div", (0, _objectSpread2.default)({
        "class": "".concat(prefixCls.value, "-wrapper")
      }, restAttrs), [(_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots), (0, _vue.createVNode)("div", {
        "class": [ribbonCls.value, className],
        "style": (0, _objectSpread2.default)((0, _objectSpread2.default)({}, colorStyle), style)
      }, [(0, _vue.createVNode)("span", {
        "class": "".concat(prefixCls.value, "-text")
      }, [props.text || ((_slots$text = slots.text) === null || _slots$text === void 0 ? void 0 : _slots$text.call(slots))]), (0, _vue.createVNode)("div", {
        "class": "".concat(prefixCls.value, "-corner"),
        "style": cornerColorStyle
      }, null)])]);
    };
  }
});
exports.default = _default;