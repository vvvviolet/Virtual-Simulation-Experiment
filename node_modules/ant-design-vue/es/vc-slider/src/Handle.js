import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { createVNode as _createVNode } from "vue";
import { computed, defineComponent, ref, onMounted, onBeforeUnmount } from 'vue';
import classNames from '../../_util/classNames';
import PropTypes from '../../_util/vue-types';
import addEventListener from '../../vc-util/Dom/addEventListener';
export default defineComponent({
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
    tabindex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
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
    var clickFocused = ref(false);
    var handle = ref();
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
    onMounted(function () {
      onMouseUpListener = addEventListener(document, 'mouseup', handleMouseUp);
    });
    onBeforeUnmount(function () {
      var _onMouseUpListener;
      (_onMouseUpListener = onMouseUpListener) === null || _onMouseUpListener === void 0 ? void 0 : _onMouseUpListener.remove();
    });
    var positionStyle = computed(function () {
      var _ref2, _ref3;
      var vertical = props.vertical,
        offset = props.offset,
        reverse = props.reverse;
      return vertical ? (_ref2 = {}, _defineProperty(_ref2, reverse ? 'top' : 'bottom', "".concat(offset, "%")), _defineProperty(_ref2, reverse ? 'bottom' : 'top', 'auto'), _defineProperty(_ref2, "transform", reverse ? null : "translateY(+50%)"), _ref2) : (_ref3 = {}, _defineProperty(_ref3, reverse ? 'right' : 'left', "".concat(offset, "%")), _defineProperty(_ref3, reverse ? 'left' : 'right', 'auto'), _defineProperty(_ref3, "transform", "translateX(".concat(reverse ? '+' : '-', "50%)")), _ref3);
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
      var className = classNames(attrs.class, _defineProperty({}, "".concat(prefixCls, "-handle-click-focused"), clickFocused.value));
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
      var handleProps = _objectSpread(_objectSpread(_objectSpread({}, attrs), {}, {
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
      return _createVNode("div", _objectSpread(_objectSpread({}, handleProps), {}, {
        "aria-label": ariaLabel,
        "aria-labelledby": ariaLabelledBy,
        "aria-valuetext": ariaValueText
      }), null);
    };
  }
});