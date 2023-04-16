import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["noStyle", "disabled"];
import { createVNode as _createVNode } from "vue";
import { defineComponent, ref, onMounted } from 'vue';
/**
 * Wrap of sub component which need use as Button capacity (like Icon component).
 * This helps accessibility reader to tread as a interactive button to operation.
 */
import KeyCode from './KeyCode';
var inlineStyle = {
  border: 0,
  background: 'transparent',
  padding: 0,
  lineHeight: 'inherit',
  display: 'inline-block'
};
var TransButton = defineComponent({
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
    var domRef = ref();
    var onKeyDown = function onKeyDown(event) {
      var keyCode = event.keyCode;
      if (keyCode === KeyCode.ENTER) {
        event.preventDefault();
      }
    };
    var onKeyUp = function onKeyUp(event) {
      var keyCode = event.keyCode;
      if (keyCode === KeyCode.ENTER) {
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
    onMounted(function () {
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
        restProps = _objectWithoutProperties(props, _excluded);
      var mergedStyle = {};
      if (!noStyle) {
        mergedStyle = _objectSpread({}, inlineStyle);
      }
      if (disabled) {
        mergedStyle.pointerEvents = 'none';
      }
      return _createVNode("div", _objectSpread(_objectSpread(_objectSpread({
        "role": "button",
        "tabindex": 0,
        "ref": domRef
      }, restProps), attrs), {}, {
        "onClick": onClick,
        "onKeydown": onKeyDown,
        "onKeyup": onKeyUp,
        "style": _objectSpread(_objectSpread({}, mergedStyle), attrs.style || {})
      }), [(_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)]);
    };
  }
});
export default TransButton;