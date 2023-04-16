"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = require("vue");
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _vcResizeObserver = _interopRequireDefault(require("../vc-resize-observer"));
var _classNames2 = _interopRequireDefault(require("../_util/classNames"));
var _calculateNodeHeight = _interopRequireDefault(require("./calculateNodeHeight"));
var _raf = _interopRequireDefault(require("../_util/raf"));
var _warning = _interopRequireDefault(require("../_util/warning"));
var _antInputDirective = _interopRequireDefault(require("../_util/antInputDirective"));
var _omit = _interopRequireDefault(require("../_util/omit"));
var _inputProps = require("./inputProps");
var RESIZE_STATUS_NONE = 0;
var RESIZE_STATUS_RESIZING = 1;
var RESIZE_STATUS_RESIZED = 2;
var ResizableTextArea = (0, _vue.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  name: 'ResizableTextArea',
  inheritAttrs: false,
  props: (0, _inputProps.textAreaProps)(),
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs,
      emit = _ref.emit,
      expose = _ref.expose;
    var nextFrameActionId;
    var resizeFrameId;
    var textAreaRef = (0, _vue.ref)();
    var textareaStyles = (0, _vue.ref)({});
    var resizeStatus = (0, _vue.ref)(RESIZE_STATUS_NONE);
    (0, _vue.onBeforeUnmount)(function () {
      _raf.default.cancel(nextFrameActionId);
      _raf.default.cancel(resizeFrameId);
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
      textareaStyles.value = (0, _calculateNodeHeight.default)(textAreaRef.value, false, minRows, maxRows);
      resizeStatus.value = RESIZE_STATUS_RESIZING;
      _raf.default.cancel(resizeFrameId);
      resizeFrameId = (0, _raf.default)(function () {
        resizeStatus.value = RESIZE_STATUS_RESIZED;
        resizeFrameId = (0, _raf.default)(function () {
          resizeStatus.value = RESIZE_STATUS_NONE;
          fixFirefoxAutoScroll();
        });
      });
    };
    var resizeOnNextFrame = function resizeOnNextFrame() {
      _raf.default.cancel(nextFrameActionId);
      nextFrameActionId = (0, _raf.default)(resizeTextarea);
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
    (0, _warning.default)(props.autosize === undefined, 'Input.TextArea', 'autosize is deprecated, please use autoSize instead.');
    var renderTextArea = function renderTextArea() {
      var prefixCls = props.prefixCls,
        autoSize = props.autoSize,
        autosize = props.autosize,
        disabled = props.disabled;
      var otherProps = (0, _omit.default)(props, ['prefixCls', 'onPressEnter', 'autoSize', 'autosize', 'defaultValue', 'allowClear', 'type', 'lazy', 'maxlength', 'valueModifiers']);
      var cls = (0, _classNames2.default)(prefixCls, attrs.class, (0, _defineProperty2.default)({}, "".concat(prefixCls, "-disabled"), disabled));
      var style = [attrs.style, textareaStyles.value, resizeStatus.value === RESIZE_STATUS_RESIZING ? {
        overflowX: 'hidden',
        overflowY: 'hidden'
      } : null];
      var textareaProps = (0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({}, otherProps), attrs), {}, {
        style: style,
        class: cls
      });
      if (!textareaProps.autofocus) {
        delete textareaProps.autofocus;
      }
      if (textareaProps.rows === 0) {
        delete textareaProps.rows;
      }
      return (0, _vue.createVNode)(_vcResizeObserver.default, {
        "onResize": handleResize,
        "disabled": !(autoSize || autosize)
      }, {
        default: function _default() {
          return [(0, _vue.withDirectives)((0, _vue.createVNode)("textarea", (0, _objectSpread2.default)((0, _objectSpread2.default)({}, textareaProps), {}, {
            "ref": textAreaRef
          }), null), [[_antInputDirective.default]])];
        }
      });
    };
    (0, _vue.watch)(function () {
      return props.value;
    }, function () {
      (0, _vue.nextTick)(function () {
        resizeTextarea();
      });
    });
    (0, _vue.onMounted)(function () {
      (0, _vue.nextTick)(function () {
        resizeTextarea();
      });
    });
    var instance = (0, _vue.getCurrentInstance)();
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
var _default2 = ResizableTextArea;
exports.default = _default2;