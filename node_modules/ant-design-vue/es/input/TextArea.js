import _typeof from "@babel/runtime/helpers/esm/typeof";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import { resolveDirective as _resolveDirective, createVNode as _createVNode } from "vue";
import { computed, defineComponent, getCurrentInstance, nextTick, ref, watch, watchEffect } from 'vue';
import ClearableLabeledInput from './ClearableLabeledInput';
import ResizableTextArea from './ResizableTextArea';
import { textAreaProps } from './inputProps';
import { fixControlledValue, resolveOnChange, triggerFocus } from './Input';
import classNames from '../_util/classNames';
import { useInjectFormItemContext } from '../form/FormItemContext';
import useConfigInject from '../_util/hooks/useConfigInject';
import omit from '../_util/omit';
function fixEmojiLength(value, maxLength) {
  return _toConsumableArray(value || '').slice(0, maxLength).join('');
}
function setTriggerValue(isCursorInEnd, preValue, triggerValue, maxLength) {
  var newTriggerValue = triggerValue;
  if (isCursorInEnd) {
    // 光标在尾部，直接截断
    newTriggerValue = fixEmojiLength(triggerValue, maxLength);
  } else if (_toConsumableArray(preValue || '').length < triggerValue.length && _toConsumableArray(triggerValue || '').length > maxLength) {
    // 光标在中间，如果最后的值超过最大值，则采用原先的值
    newTriggerValue = preValue;
  }
  return newTriggerValue;
}
export default defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'ATextarea',
  inheritAttrs: false,
  props: textAreaProps(),
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs,
      expose = _ref.expose,
      emit = _ref.emit;
    var formItemContext = useInjectFormItemContext();
    var stateValue = ref(props.value === undefined ? props.defaultValue : props.value);
    var resizableTextArea = ref();
    var mergedValue = ref('');
    var _useConfigInject = useConfigInject('input', props),
      prefixCls = _useConfigInject.prefixCls,
      size = _useConfigInject.size,
      direction = _useConfigInject.direction;
    var showCount = computed(function () {
      return props.showCount === '' || props.showCount || false;
    });
    // Max length value
    var hasMaxLength = computed(function () {
      return Number(props.maxlength) > 0;
    });
    var compositing = ref(false);
    var oldCompositionValueRef = ref();
    var oldSelectionStartRef = ref(0);
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
        resolveOnChange(e.currentTarget, e, triggerChange, triggerValue);
      }
      emit('compositionend', e);
    };
    var instance = getCurrentInstance();
    watch(function () {
      return props.value;
    }, function () {
      if ('value' in instance.vnode.props || {}) {
        var _props$value;
        stateValue.value = (_props$value = props.value) !== null && _props$value !== void 0 ? _props$value : '';
      }
    });
    var focus = function focus(option) {
      var _resizableTextArea$va;
      triggerFocus((_resizableTextArea$va = resizableTextArea.value) === null || _resizableTextArea$va === void 0 ? void 0 : _resizableTextArea$va.textArea, option);
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
        nextTick(function () {
          if (resizableTextArea.value.textArea.value !== mergedValue.value) {
            var _resizableTextArea$va4, _resizableTextArea$va5, _resizableTextArea$va6;
            (_resizableTextArea$va4 = resizableTextArea.value) === null || _resizableTextArea$va4 === void 0 ? void 0 : (_resizableTextArea$va5 = (_resizableTextArea$va6 = _resizableTextArea$va4.instance).update) === null || _resizableTextArea$va5 === void 0 ? void 0 : _resizableTextArea$va5.call(_resizableTextArea$va6);
          }
        });
      }
      nextTick(function () {
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
      resolveOnChange(resizableTextArea.value.textArea, e, triggerChange);
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
      resolveOnChange(e.currentTarget, e, triggerChange, triggerValue);
      setValue(triggerValue);
    };
    var renderTextArea = function renderTextArea() {
      var _class, _props$valueModifiers, _resizeProps$id;
      var style = attrs.style,
        customClass = attrs.class;
      var _props$bordered = props.bordered,
        bordered = _props$bordered === void 0 ? true : _props$bordered;
      var resizeProps = _objectSpread(_objectSpread(_objectSpread({}, omit(props, ['allowClear'])), attrs), {}, {
        style: showCount.value ? {} : style,
        class: (_class = {}, _defineProperty(_class, "".concat(prefixCls.value, "-borderless"), !bordered), _defineProperty(_class, "".concat(customClass), customClass && !showCount.value), _defineProperty(_class, "".concat(prefixCls.value, "-sm"), size.value === 'small'), _defineProperty(_class, "".concat(prefixCls.value, "-lg"), size.value === 'large'), _class),
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
      return _createVNode(ResizableTextArea, _objectSpread(_objectSpread({}, resizeProps), {}, {
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
    watchEffect(function () {
      var val = fixControlledValue(stateValue.value);
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
      var inputProps = _objectSpread(_objectSpread(_objectSpread({}, props), attrs), {}, {
        prefixCls: prefixCls.value,
        inputType: 'text',
        handleReset: handleReset,
        direction: direction.value,
        bordered: bordered,
        style: showCount.value ? undefined : style
      });
      var textareaNode = _createVNode(ClearableLabeledInput, _objectSpread(_objectSpread({}, inputProps), {}, {
        "value": mergedValue.value
      }), {
        element: renderTextArea
      });
      if (showCount.value) {
        var valueLength = _toConsumableArray(mergedValue.value).length;
        var dataCount = '';
        if (_typeof(showCount.value) === 'object') {
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
        textareaNode = _createVNode("div", {
          "hidden": hidden,
          "class": classNames("".concat(prefixCls.value, "-textarea"), _defineProperty({}, "".concat(prefixCls.value, "-textarea-rtl"), direction.value === 'rtl'), "".concat(prefixCls.value, "-textarea-show-count"), customClass),
          "style": style,
          "data-count": _typeof(dataCount) !== 'object' ? dataCount : undefined
        }, [textareaNode]);
      }
      return textareaNode;
    };
  }
});