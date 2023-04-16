"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = require("vue");
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _KeyCode = _interopRequireDefault(require("./KeyCode"));
var _excluded = ["noStyle", "disabled"];
var inlineStyle = {
  border: 0,
  background: 'transparent',
  padding: 0,
  lineHeight: 'inherit',
  display: 'inline-block'
};
var TransButton = (0, _vue.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  name: 'TransButton',
  inheritAttrs: false,
  props: {
    noStyle: {
      type: Boolean,
      default: undefined
    },
    onClick: Function,
    disabled: {
      type: Boolean,
      default: undefined
    },
    autofocus: {
      type: Boolean,
      default: undefined
    }
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
      emit = _ref.emit,
      attrs = _ref.attrs,
      expose = _ref.expose;
    var domRef = (0, _vue.ref)();
    var onKeyDown = function onKeyDown(event) {
      var keyCode = event.keyCode;
      if (keyCode === _KeyCode.default.ENTER) {
        event.preventDefault();
      }
    };
    var onKeyUp = function onKeyUp(event) {
      var keyCode = event.keyCode;
      if (keyCode === _KeyCode.default.ENTER) {
        emit('click', event);
      }
    };
    var onClick = function onClick(e) {
      emit('click', e);
    };
    var focus = function focus() {
      if (domRef.value) {
        domRef.value.focus();
      }
    };
    var blur = function blur() {
      if (domRef.value) {
        domRef.value.blur();
      }
    };
    (0, _vue.onMounted)(function () {
      if (props.autofocus) {
        focus();
      }
    });
    expose({
      focus: focus,
      blur: blur
    });
    return function () {
      var _slots$default;
      var noStyle = props.noStyle,
        disabled = props.disabled,
        restProps = (0, _objectWithoutProperties2.default)(props, _excluded);
      var mergedStyle = {};
      if (!noStyle) {
        mergedStyle = (0, _objectSpread2.default)({}, inlineStyle);
      }
      if (disabled) {
        mergedStyle.pointerEvents = 'none';
      }
      return (0, _vue.createVNode)("div", (0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({
        "role": "button",
        "tabindex": 0,
        "ref": domRef
      }, restProps), attrs), {}, {
        "onClick": onClick,
        "onKeydown": onKeyDown,
        "onKeyup": onKeyUp,
        "style": (0, _objectSpread2.default)((0, _objectSpread2.default)({}, mergedStyle), attrs.style || {})
      }), [(_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)]);
    };
  }
});
var _default = TransButton;
exports.default = _default;