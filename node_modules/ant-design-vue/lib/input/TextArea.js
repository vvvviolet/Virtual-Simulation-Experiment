"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = require("vue");
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _ClearableLabeledInput = _interopRequireDefault(require("./ClearableLabeledInput"));
var _ResizableTextArea = _interopRequireDefault(require("./ResizableTextArea"));
var _inputProps = require("./inputProps");
var _Input = require("./Input");
var _classNames2 = _interopRequireDefault(require("../_util/classNames"));
var _FormItemContext = require("../form/FormItemContext");
var _useConfigInject2 = _interopRequireDefault(require("../_util/hooks/useConfigInject"));
var _omit = _interopRequireDefault(require("../_util/omit"));
function fixEmojiLength(value, maxLength) {
  return (0, _toConsumableArray2.default)(value || '').slice(0, maxLength).join('');
}
function setTriggerValue(isCursorInEnd, preValue, triggerValue, maxLength) {
  var newTriggerValue = triggerValue;
  if (isCursorInEnd) {
    // 光标在尾部，直接截断
    newTriggerValue = fixEmojiLength(triggerValue, maxLength);
  } else if ((0, _toConsumableArray2.default)(preValue || '').length < triggerValue.length && (0, _toConsumableArray2.default)(triggerValue || '').length > maxLength) {
    // 光标在中间，如果最后的值超过最大值，则采用原先的值
    newTriggerValue = preValue;
  }
  return newTriggerValue;
}
var _default = (0, _vue.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  name: 'ATextarea',
  inheritAttrs: false,
  props: (0, _inputProps.textAreaProps)(),
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs,
      expose = _ref.expose,
      emit = _ref.emit;
    var formItemContext = (0, _FormItemContext.useInjectFormItemContext)();
    var stateValue = (0, _vue.ref)(props.value === undefined ? props.defaultValue : props.value);
    var resizableTextArea = (0, _vue.ref)();
    var mergedValue = (0, _vue.ref)('');
    var _useConfigInject = (0, _useConfigInject2.default)('input', props),
      prefixCls = _useConfigInject.prefixCls,
      size = _useConfigInject.size,
      direction = _useConfigInject.direction;
    var showCount = (0, _vue.computed)(function () {
      return props.showCount === '' || props.showCount || false;
    });
    // Max length value
    var hasMaxLength = (0, _vue.computed)(function () {
      return Number(props.maxlength) > 0;
    });
    var compositing = (0, _vue.ref)(false);
    var oldCompositionValueRef = (0, _vue.ref)();
    var oldSelectionStartRef = (0, _vue.ref)(0);
    var onInternalCompositionStart = function onInternalCompositionStart(e) {
      compositing.value = true;
      // 拼音输入前保存一份旧值
      oldCompositionValueRef.value = mergedValue.value;
      // 保存旧的光标位置
      oldSelectionStartRef.value = e.currentTarget.selectionStart;
      emit('compositionstart', e);
    };
    var onInternalCompositionEnd = function onInternalCompositionEnd(e) {
      compositing.value = false;
      var triggerValue = e.currentTarget.value;
      if (hasMaxLength.value) {
        var _oldCompositionValueR;
        var isCursorInEnd = oldSelectionStartRef.value >= props.maxlength + 1 || oldSelectionStartRef.value === ((_oldCompositionValueR = oldCompositionValueRef.value) === null || _oldCompositionValueR === void 0 ? void 0 : _oldCompositionValueR.length);
        triggerValue = setTriggerValue(isCursorInEnd, oldCompositionValueRef.value, triggerValue, props.maxlength);
      }
      // Patch composition onChange when value changed
      if (triggerValue !== mergedValue.value) {
        setValue(triggerValue);
        (0, _Input.resolveOnChange)(e.currentTarget, e, triggerChange, triggerValue);
      }
      emit('compositionend', e);
    };
    var instance = (0, _vue.getCurrentInstance)();
    (0, _vue.watch)(function () {
      return props.value;
    }, function () {
      if ('value' in instance.vnode.props || {}) {
        var _props$value;
        stateValue.value = (_props$value = props.value) !== null && _props$value !== void 0 ? _props$value : '';
      }
    });
    var focus = function focus(option) {
      var _resizableTextArea$va;
      (0, _Input.triggerFocus)((_resizableTextArea$va = resizableTextArea.value) === null || _resizableTextArea$va === void 0 ? void 0 : _resizableTextArea$va.textArea, option);
    };
    var blur = function blur() {
      var _resizableTextArea$va2, _resizableTextArea$va3;
      (_resizableTextArea$va2 = resizableTextArea.value) === null || _resizableTextArea$va2 === void 0 ? void 0 : (_resizableTextArea$va3 = _resizableTextArea$va2.textArea) === null || _resizableTextArea$va3 === void 0 ? void 0 : _resizableTextArea$va3.blur();
    };
    var setValue = function setValue(value, callback) {
      if (stateValue.value === value) {
        return;
      }
      if (props.value === undefined) {
        stateValue.value = value;
      } else {
        (0, _vue.nextTick)(function () {
          if (resizableTextArea.value.textArea.value !== mergedValue.value) {
            var _resizableTextArea$va4, _resizableTextArea$va5, _resizableTextArea$va6;
            (_resizableTextArea$va4 = resizableTextArea.value) === null || _resizableTextArea$va4 === void 0 ? void 0 : (_resizableTextArea$va5 = (_resizableTextArea$va6 = _resizableTextArea$va4.instance).update) === null || _resizableTextArea$va5 === void 0 ? void 0 : _resizableTextArea$va5.call(_resizableTextArea$va6);
          }
        });
      }
      (0, _vue.nextTick)(function () {
        callback && callback();
      });
    };
    var handleKeyDown = function handleKeyDown(e) {
      if (e.keyCode === 13) {
        emit('pressEnter', e);
      }
      emit('keydown', e);
    };
    var onBlur = function onBlur(e) {
      var onBlur = props.onBlur;
      onBlur === null || onBlur === void 0 ? void 0 : onBlur(e);
      formItemContext.onFieldBlur();
    };
    var triggerChange = function triggerChange(e) {
      emit('update:value', e.target.value);
      emit('change', e);
      emit('input', e);
      formItemContext.onFieldChange();
    };
    var handleReset = function handleReset(e) {
      (0, _Input.resolveOnChange)(resizableTextArea.value.textArea, e, triggerChange);
      setValue('', function () {
        focus();
      });
    };
    var handleChange = function handleChange(e) {
      var composing = e.target.composing;
      var triggerValue = e.target.value;
      compositing.value = !!(e.isComposing || composing);
      if (compositing.value && props.lazy || stateValue.value === triggerValue) return;
      if (hasMaxLength.value) {
        // 1. 复制粘贴超过maxlength的情况 2.未超过maxlength的情况
        var target = e.target;
        var isCursorInEnd = target.selectionStart >= props.maxlength + 1 || target.selectionStart === triggerValue.length || !target.selectionStart;
        triggerValue = setTriggerValue(isCursorInEnd, mergedValue.value, triggerValue, props.maxlength);
      }
      (0, _Input.resolveOnChange)(e.currentTarget, e, triggerChange, triggerValue);
      setValue(triggerValue);
    };
    var renderTextArea = function renderTextArea() {
      var _class, _props$valueModifiers, _resizeProps$id;
      var style = attrs.style,
        customClass = attrs.class;
      var _props$bordered = props.bordered,
        bordered = _props$bordered === void 0 ? true : _props$bordered;
      var resizeProps = (0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({}, (0, _omit.default)(props, ['allowClear'])), attrs), {}, {
        style: showCount.value ? {} : style,
        class: (_class = {}, (0, _defineProperty2.default)(_class, "".concat(prefixCls.value, "-borderless"), !bordered), (0, _defineProperty2.default)(_class, "".concat(customClass), customClass && !showCount.value), (0, _defineProperty2.default)(_class, "".concat(prefixCls.value, "-sm"), size.value === 'small'), (0, _defineProperty2.default)(_class, "".concat(prefixCls.value, "-lg"), size.value === 'large'), _class),
        showCount: null,
        prefixCls: prefixCls.value,
        onInput: handleChange,
        onChange: handleChange,
        onBlur: onBlur,
        onKeydown: handleKeyDown,
        onCompositionstart: onInternalCompositionStart,
        onCompositionend: onInternalCompositionEnd
      });
      if ((_props$valueModifiers = props.valueModifiers) !== null && _props$valueModifiers !== void 0 && _props$valueModifiers.lazy) {
        delete resizeProps.onInput;
      }
      return (0, _vue.createVNode)(_ResizableTextArea.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, resizeProps), {}, {
        "id": (_resizeProps$id = resizeProps.id) !== null && _resizeProps$id !== void 0 ? _resizeProps$id : formItemContext.id.value,
        "ref": resizableTextArea,
        "maxlength": props.maxlength
      }), null);
    };
    expose({
      focus: focus,
      blur: blur,
      resizableTextArea: resizableTextArea
    });
    (0, _vue.watchEffect)(function () {
      var val = (0, _Input.fixControlledValue)(stateValue.value);
      if (!compositing.value && hasMaxLength.value && (props.value === null || props.value === undefined)) {
        // fix #27612 将value转为数组进行截取，解决 '😂'.length === 2 等emoji表情导致的截取乱码的问题
        val = fixEmojiLength(val, props.maxlength);
      }
      mergedValue.value = val;
    });
    return function () {
      var maxlength = props.maxlength,
        _props$bordered2 = props.bordered,
        bordered = _props$bordered2 === void 0 ? true : _props$bordered2,
        hidden = props.hidden;
      var style = attrs.style,
        customClass = attrs.class;
      var inputProps = (0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({}, props), attrs), {}, {
        prefixCls: prefixCls.value,
        inputType: 'text',
        handleReset: handleReset,
        direction: direction.value,
        bordered: bordered,
        style: showCount.value ? undefined : style
      });
      var textareaNode = (0, _vue.createVNode)(_ClearableLabeledInput.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, inputProps), {}, {
        "value": mergedValue.value
      }), {
        element: renderTextArea
      });
      if (showCount.value) {
        var valueLength = (0, _toConsumableArray2.default)(mergedValue.value).length;
        var dataCount = '';
        if ((0, _typeof2.default)(showCount.value) === 'object') {
          dataCount = showCount.value.formatter({
            count: valueLength,
            maxlength: maxlength
          });
        } else {
          dataCount = "".concat(valueLength).concat(hasMaxLength.value ? " / ".concat(maxlength) : '');
        }
        var _textareaNode = function () {
          return textareaNode;
        }();
        textareaNode = (0, _vue.createVNode)("div", {
          "hidden": hidden,
          "class": (0, _classNames2.default)("".concat(prefixCls.value, "-textarea"), (0, _defineProperty2.default)({}, "".concat(prefixCls.value, "-textarea-rtl"), direction.value === 'rtl'), "".concat(prefixCls.value, "-textarea-show-count"), customClass),
          "style": style,
          "data-count": (0, _typeof2.default)(dataCount) !== 'object' ? dataCount : undefined
        }, [textareaNode]);
      }
      return textareaNode;
    };
  }
});
exports.default = _default;