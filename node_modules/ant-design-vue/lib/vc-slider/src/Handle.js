"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = require("vue");
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _classNames2 = _interopRequireDefault(require("../../_util/classNames"));
var _vueTypes = _interopRequireDefault(require("../../_util/vue-types"));
var _addEventListener = _interopRequireDefault(require("../../vc-util/Dom/addEventListener"));
var _default = (0, _vue.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  name: 'Handle',
  inheritAttrs: false,
  props: {
    prefixCls: String,
    vertical: {
      type: Boolean,
      default: undefined
    },
    offset: Number,
    disabled: {
      type: Boolean,
      default: undefined
    },
    min: Number,
    max: Number,
    value: Number,
    tabindex: _vueTypes.default.oneOfType([_vueTypes.default.number, _vueTypes.default.string]),
    reverse: {
      type: Boolean,
      default: undefined
    },
    ariaLabel: String,
    ariaLabelledBy: String,
    ariaValueTextFormatter: Function,
    onMouseenter: {
      type: Function
    },
    onMouseleave: {
      type: Function
    },
    onMousedown: {
      type: Function
    }
  },
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs,
      emit = _ref.emit,
      expose = _ref.expose;
    var clickFocused = (0, _vue.ref)(false);
    var handle = (0, _vue.ref)();
    var handleMouseUp = function handleMouseUp() {
      if (document.activeElement === handle.value) {
        clickFocused.value = true;
      }
    };
    var handleBlur = function handleBlur(e) {
      clickFocused.value = false;
      emit('blur', e);
    };
    var handleKeyDown = function handleKeyDown() {
      clickFocused.value = false;
    };
    var focus = function focus() {
      var _handle$value;
      (_handle$value = handle.value) === null || _handle$value === void 0 ? void 0 : _handle$value.focus();
    };
    var blur = function blur() {
      var _handle$value2;
      (_handle$value2 = handle.value) === null || _handle$value2 === void 0 ? void 0 : _handle$value2.blur();
    };
    var clickFocus = function clickFocus() {
      clickFocused.value = true;
      focus();
    };
    // when click can not focus in vue, use mousedown trigger focus
    var handleMousedown = function handleMousedown(e) {
      e.preventDefault();
      focus();
      emit('mousedown', e);
    };
    expose({
      focus: focus,
      blur: blur,
      clickFocus: clickFocus,
      ref: handle
    });
    var onMouseUpListener = null;
    (0, _vue.onMounted)(function () {
      onMouseUpListener = (0, _addEventListener.default)(document, 'mouseup', handleMouseUp);
    });
    (0, _vue.onBeforeUnmount)(function () {
      var _onMouseUpListener;
      (_onMouseUpListener = onMouseUpListener) === null || _onMouseUpListener === void 0 ? void 0 : _onMouseUpListener.remove();
    });
    var positionStyle = (0, _vue.computed)(function () {
      var _ref2, _ref3;
      var vertical = props.vertical,
        offset = props.offset,
        reverse = props.reverse;
      return vertical ? (_ref2 = {}, (0, _defineProperty2.default)(_ref2, reverse ? 'top' : 'bottom', "".concat(offset, "%")), (0, _defineProperty2.default)(_ref2, reverse ? 'bottom' : 'top', 'auto'), (0, _defineProperty2.default)(_ref2, "transform", reverse ? null : "translateY(+50%)"), _ref2) : (_ref3 = {}, (0, _defineProperty2.default)(_ref3, reverse ? 'right' : 'left', "".concat(offset, "%")), (0, _defineProperty2.default)(_ref3, reverse ? 'left' : 'right', 'auto'), (0, _defineProperty2.default)(_ref3, "transform", "translateX(".concat(reverse ? '+' : '-', "50%)")), _ref3);
    });
    return function () {
      var prefixCls = props.prefixCls,
        disabled = props.disabled,
        min = props.min,
        max = props.max,
        value = props.value,
        tabindex = props.tabindex,
        ariaLabel = props.ariaLabel,
        ariaLabelledBy = props.ariaLabelledBy,
        ariaValueTextFormatter = props.ariaValueTextFormatter,
        onMouseenter = props.onMouseenter,
        onMouseleave = props.onMouseleave;
      var className = (0, _classNames2.default)(attrs.class, (0, _defineProperty2.default)({}, "".concat(prefixCls, "-handle-click-focused"), clickFocused.value));
      var ariaProps = {
        'aria-valuemin': min,
        'aria-valuemax': max,
        'aria-valuenow': value,
        'aria-disabled': !!disabled
      };
      var elStyle = [attrs.style, positionStyle.value];
      var mergedTabIndex = tabindex || 0;
      if (disabled || tabindex === null) {
        mergedTabIndex = null;
      }
      var ariaValueText;
      if (ariaValueTextFormatter) {
        ariaValueText = ariaValueTextFormatter(value);
      }
      var handleProps = (0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({}, attrs), {}, {
        role: 'slider',
        tabindex: mergedTabIndex
      }, ariaProps), {}, {
        class: className,
        onBlur: handleBlur,
        onKeydown: handleKeyDown,
        onMousedown: handleMousedown,
        onMouseenter: onMouseenter,
        onMouseleave: onMouseleave,
        ref: handle,
        style: elStyle
      });
      return (0, _vue.createVNode)("div", (0, _objectSpread2.default)((0, _objectSpread2.default)({}, handleProps), {}, {
        "aria-label": ariaLabel,
        "aria-labelledby": ariaLabelledBy,
        "aria-valuetext": ariaValueText
      }), null);
    };
  }
});
exports.default = _default;