import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { createVNode as _createVNode } from "vue";
import { onMounted, getCurrentInstance, watch, onBeforeUnmount, ref, nextTick, defineComponent, withDirectives } from 'vue';
import ResizeObserver from '../vc-resize-observer';
import classNames from '../_util/classNames';
import calculateNodeHeight from './calculateNodeHeight';
import raf from '../_util/raf';
import warning from '../_util/warning';
import antInput from '../_util/antInputDirective';
import omit from '../_util/omit';
import { textAreaProps } from './inputProps';
var RESIZE_STATUS_NONE = 0;
var RESIZE_STATUS_RESIZING = 1;
var RESIZE_STATUS_RESIZED = 2;
var ResizableTextArea = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'ResizableTextArea',
  inheritAttrs: false,
  props: textAreaProps(),
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs,
      emit = _ref.emit,
      expose = _ref.expose;
    var nextFrameActionId;
    var resizeFrameId;
    var textAreaRef = ref();
    var textareaStyles = ref({});
    var resizeStatus = ref(RESIZE_STATUS_NONE);
    onBeforeUnmount(function () {
      raf.cancel(nextFrameActionId);
      raf.cancel(resizeFrameId);
    });
    // https://github.com/ant-design/ant-design/issues/21870
    var fixFirefoxAutoScroll = function fixFirefoxAutoScroll() {
      try {
        if (document.activeElement === textAreaRef.value) {
          var currentStart = textAreaRef.value.selectionStart;
          var currentEnd = textAreaRef.value.selectionEnd;
          textAreaRef.value.setSelectionRange(currentStart, currentEnd);
        }
      } catch (e) {
        // Fix error in Chrome:
        // Failed to read the 'selectionStart' property from 'HTMLInputElement'
        // http://stackoverflow.com/q/21177489/3040605
      }
    };
    var resizeTextarea = function resizeTextarea() {
      var autoSize = props.autoSize || props.autosize;
      if (!autoSize || !textAreaRef.value) {
        return;
      }
      var minRows = autoSize.minRows,
        maxRows = autoSize.maxRows;
      textareaStyles.value = calculateNodeHeight(textAreaRef.value, false, minRows, maxRows);
      resizeStatus.value = RESIZE_STATUS_RESIZING;
      raf.cancel(resizeFrameId);
      resizeFrameId = raf(function () {
        resizeStatus.value = RESIZE_STATUS_RESIZED;
        resizeFrameId = raf(function () {
          resizeStatus.value = RESIZE_STATUS_NONE;
          fixFirefoxAutoScroll();
        });
      });
    };
    var resizeOnNextFrame = function resizeOnNextFrame() {
      raf.cancel(nextFrameActionId);
      nextFrameActionId = raf(resizeTextarea);
    };
    var handleResize = function handleResize(size) {
      if (resizeStatus.value !== RESIZE_STATUS_NONE) {
        return;
      }
      emit('resize', size);
      var autoSize = props.autoSize || props.autosize;
      if (autoSize) {
        resizeOnNextFrame();
      }
    };
    warning(props.autosize === undefined, 'Input.TextArea', 'autosize is deprecated, please use autoSize instead.');
    var renderTextArea = function renderTextArea() {
      var prefixCls = props.prefixCls,
        autoSize = props.autoSize,
        autosize = props.autosize,
        disabled = props.disabled;
      var otherProps = omit(props, ['prefixCls', 'onPressEnter', 'autoSize', 'autosize', 'defaultValue', 'allowClear', 'type', 'lazy', 'maxlength', 'valueModifiers']);
      var cls = classNames(prefixCls, attrs.class, _defineProperty({}, "".concat(prefixCls, "-disabled"), disabled));
      var style = [attrs.style, textareaStyles.value, resizeStatus.value === RESIZE_STATUS_RESIZING ? {
        overflowX: 'hidden',
        overflowY: 'hidden'
      } : null];
      var textareaProps = _objectSpread(_objectSpread(_objectSpread({}, otherProps), attrs), {}, {
        style: style,
        class: cls
      });
      if (!textareaProps.autofocus) {
        delete textareaProps.autofocus;
      }
      if (textareaProps.rows === 0) {
        delete textareaProps.rows;
      }
      return _createVNode(ResizeObserver, {
        "onResize": handleResize,
        "disabled": !(autoSize || autosize)
      }, {
        default: function _default() {
          return [withDirectives(_createVNode("textarea", _objectSpread(_objectSpread({}, textareaProps), {}, {
            "ref": textAreaRef
          }), null), [[antInput]])];
        }
      });
    };
    watch(function () {
      return props.value;
    }, function () {
      nextTick(function () {
        resizeTextarea();
      });
    });
    onMounted(function () {
      nextTick(function () {
        resizeTextarea();
      });
    });
    var instance = getCurrentInstance();
    expose({
      resizeTextarea: resizeTextarea,
      textArea: textAreaRef,
      instance: instance
    });
    return function () {
      return renderTextArea();
    };
  }
});
export default ResizableTextArea;