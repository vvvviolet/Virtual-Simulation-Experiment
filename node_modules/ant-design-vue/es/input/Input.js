import _typeof from "@babel/runtime/helpers/esm/typeof";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { resolveDirective as _resolveDirective, Fragment as _Fragment, createVNode as _createVNode } from "vue";
import { getCurrentInstance, onBeforeUnmount, onMounted, watch, ref, defineComponent, nextTick, withDirectives } from 'vue';
import antInputDirective from '../_util/antInputDirective';
import classNames from '../_util/classNames';
import inputProps from './inputProps';
import { getInputClassName } from './util';
import ClearableLabeledInput from './ClearableLabeledInput';
import { useInjectFormItemContext } from '../form/FormItemContext';
import omit from '../_util/omit';
import useConfigInject from '../_util/hooks/useConfigInject';
export function fixControlledValue(value) {
  if (typeof value === 'undefined' || value === null) {
    return '';
  }
  return String(value);
}
export function resolveOnChange(target, e, onChange, targetValue) {
  if (!onChange) {
    return;
  }
  var event = e;
  if (e.type === 'click') {
    Object.defineProperty(event, 'target', {
      writable: true
    });
    Object.defineProperty(event, 'currentTarget', {
      writable: true
    });
    // click clear icon
    //event = Object.create(e);
    var currentTarget = target.cloneNode(true);
    event.target = currentTarget;
    event.currentTarget = currentTarget;
    // change target ref value cause e.target.value should be '' when clear input
    currentTarget.value = '';
    onChange(event);
    return;
  }
  // Trigger by composition event, this means we need force change the input value
  if (targetValue !== undefined) {
    Object.defineProperty(event, 'target', {
      writable: true
    });
    Object.defineProperty(event, 'currentTarget', {
      writable: true
    });
    event.target = target;
    event.currentTarget = target;
    target.value = targetValue;
    onChange(event);
    return;
  }
  onChange(event);
}
export function triggerFocus(element, option) {
  if (!element) return;
  element.focus(option);
  // Selection content
  var _ref = option || {},
    cursor = _ref.cursor;
  if (cursor) {
    var len = element.value.length;
    switch (cursor) {
      case 'start':
        element.setSelectionRange(0, 0);
        break;
      case 'end':
        element.setSelectionRange(len, len);
        break;
      default:
        element.setSelectionRange(0, len);
    }
  }
}
export default defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'AInput',
  inheritAttrs: false,
  props: inputProps(),
  setup: function setup(props, _ref2) {
    var slots = _ref2.slots,
      attrs = _ref2.attrs,
      expose = _ref2.expose,
      emit = _ref2.emit;
    var inputRef = ref();
    var clearableInputRef = ref();
    var removePasswordTimeout;
    var formItemContext = useInjectFormItemContext();
    var _useConfigInject = useConfigInject('input', props),
      direction = _useConfigInject.direction,
      prefixCls = _useConfigInject.prefixCls,
      size = _useConfigInject.size,
      autocomplete = _useConfigInject.autocomplete;
    var stateValue = ref(props.value === undefined ? props.defaultValue : props.value);
    var focused = ref(false);
    watch(function () {
      return props.value;
    }, function () {
      stateValue.value = props.value;
    });
    watch(function () {
      return props.disabled;
    }, function () {
      if (props.value !== undefined) {
        stateValue.value = props.value;
      }
      if (props.disabled) {
        focused.value = false;
      }
    });
    var clearPasswordValueAttribute = function clearPasswordValueAttribute() {
      // https://github.com/ant-design/ant-design/issues/20541
      removePasswordTimeout = setTimeout(function () {
        var _inputRef$value;
        if (((_inputRef$value = inputRef.value) === null || _inputRef$value === void 0 ? void 0 : _inputRef$value.getAttribute('type')) === 'password' && inputRef.value.hasAttribute('value')) {
          inputRef.value.removeAttribute('value');
        }
      });
    };
    var focus = function focus(option) {
      triggerFocus(inputRef.value, option);
    };
    var blur = function blur() {
      var _inputRef$value2;
      (_inputRef$value2 = inputRef.value) === null || _inputRef$value2 === void 0 ? void 0 : _inputRef$value2.blur();
    };
    var setSelectionRange = function setSelectionRange(start, end, direction) {
      var _inputRef$value3;
      (_inputRef$value3 = inputRef.value) === null || _inputRef$value3 === void 0 ? void 0 : _inputRef$value3.setSelectionRange(start, end, direction);
    };
    var select = function select() {
      var _inputRef$value4;
      (_inputRef$value4 = inputRef.value) === null || _inputRef$value4 === void 0 ? void 0 : _inputRef$value4.select();
    };
    expose({
      focus: focus,
      blur: blur,
      input: inputRef,
      stateValue: stateValue,
      setSelectionRange: setSelectionRange,
      select: select
    });
    var onFocus = function onFocus(e) {
      var onFocus = props.onFocus;
      focused.value = true;
      onFocus === null || onFocus === void 0 ? void 0 : onFocus(e);
      nextTick(function () {
        clearPasswordValueAttribute();
      });
    };
    var onBlur = function onBlur(e) {
      var onBlur = props.onBlur;
      focused.value = false;
      onBlur === null || onBlur === void 0 ? void 0 : onBlur(e);
      formItemContext.onFieldBlur();
      nextTick(function () {
        clearPasswordValueAttribute();
      });
    };
    var triggerChange = function triggerChange(e) {
      emit('update:value', e.target.value);
      emit('change', e);
      emit('input', e);
      formItemContext.onFieldChange();
    };
    var instance = getCurrentInstance();
    var setValue = function setValue(value, callback) {
      if (stateValue.value === value) {
        return;
      }
      if (props.value === undefined) {
        stateValue.value = value;
      } else {
        nextTick(function () {
          if (inputRef.value.value !== stateValue.value) {
            instance.update();
          }
        });
      }
      nextTick(function () {
        callback && callback();
      });
    };
    var handleReset = function handleReset(e) {
      resolveOnChange(inputRef.value, e, triggerChange);
      setValue('', function () {
        focus();
      });
    };
    var handleChange = function handleChange(e) {
      var _e$target = e.target,
        value = _e$target.value,
        composing = _e$target.composing;
      // https://github.com/vueComponent/ant-design-vue/issues/2203
      if ((e.isComposing || composing) && props.lazy || stateValue.value === value) return;
      var newVal = e.target.value;
      resolveOnChange(inputRef.value, e, triggerChange);
      setValue(newVal, function () {
        clearPasswordValueAttribute();
      });
    };
    var handleKeyDown = function handleKeyDown(e) {
      if (e.keyCode === 13) {
        emit('pressEnter', e);
      }
      emit('keydown', e);
    };
    onMounted(function () {
      clearPasswordValueAttribute();
    });
    onBeforeUnmount(function () {
      clearTimeout(removePasswordTimeout);
    });
    var renderInput = function renderInput() {
      var _otherProps$id;
      var _props$addonBefore = props.addonBefore,
        addonBefore = _props$addonBefore === void 0 ? slots.addonBefore : _props$addonBefore,
        _props$addonAfter = props.addonAfter,
        addonAfter = _props$addonAfter === void 0 ? slots.addonAfter : _props$addonAfter,
        disabled = props.disabled,
        _props$bordered = props.bordered,
        bordered = _props$bordered === void 0 ? true : _props$bordered,
        _props$valueModifiers = props.valueModifiers,
        valueModifiers = _props$valueModifiers === void 0 ? {} : _props$valueModifiers,
        htmlSize = props.htmlSize;
      var otherProps = omit(props, ['prefixCls', 'onPressEnter', 'addonBefore', 'addonAfter', 'prefix', 'suffix', 'allowClear',
      // Input elements must be either controlled or uncontrolled,
      // specify either the value prop, or the defaultValue prop, but not both.
      'defaultValue', 'size', 'bordered', 'htmlSize', 'lazy', 'showCount', 'valueModifiers']);
      var inputProps = _objectSpread(_objectSpread(_objectSpread({}, otherProps), attrs), {}, {
        autocomplete: autocomplete.value,
        onChange: handleChange,
        onInput: handleChange,
        onFocus: onFocus,
        onBlur: onBlur,
        onKeydown: handleKeyDown,
        class: classNames(getInputClassName(prefixCls.value, bordered, size.value, disabled, direction.value), _defineProperty({}, attrs.class, attrs.class && !addonBefore && !addonAfter)),
        ref: inputRef,
        key: 'ant-input',
        size: htmlSize,
        id: (_otherProps$id = otherProps.id) !== null && _otherProps$id !== void 0 ? _otherProps$id : formItemContext.id.value
      });
      if (valueModifiers.lazy) {
        delete inputProps.onInput;
      }
      if (!inputProps.autofocus) {
        delete inputProps.autofocus;
      }
      var inputNode = _createVNode("input", omit(inputProps, ['size']), null);
      return withDirectives(inputNode, [[antInputDirective]]);
    };
    var renderShowCountSuffix = function renderShowCountSuffix() {
      var _slots$suffix;
      var value = stateValue.value;
      var maxlength = props.maxlength,
        _props$suffix = props.suffix,
        suffix = _props$suffix === void 0 ? (_slots$suffix = slots.suffix) === null || _slots$suffix === void 0 ? void 0 : _slots$suffix.call(slots) : _props$suffix,
        showCount = props.showCount;
      // Max length value
      var hasMaxLength = Number(maxlength) > 0;
      if (suffix || showCount) {
        var valueLength = _toConsumableArray(fixControlledValue(value)).length;
        var dataCount = null;
        if (_typeof(showCount) === 'object') {
          dataCount = showCount.formatter({
            count: valueLength,
            maxlength: maxlength
          });
        } else {
          dataCount = "".concat(valueLength).concat(hasMaxLength ? " / ".concat(maxlength) : '');
        }
        return _createVNode(_Fragment, null, [!!showCount && _createVNode("span", {
          "class": classNames("".concat(prefixCls.value, "-show-count-suffix"), _defineProperty({}, "".concat(prefixCls.value, "-show-count-has-suffix"), !!suffix))
        }, [dataCount]), suffix]);
      }
      return null;
    };
    return function () {
      var inputProps = _objectSpread(_objectSpread(_objectSpread({}, attrs), props), {}, {
        prefixCls: prefixCls.value,
        inputType: 'input',
        value: fixControlledValue(stateValue.value),
        handleReset: handleReset,
        focused: focused.value && !props.disabled
      });
      return _createVNode(ClearableLabeledInput, _objectSpread(_objectSpread({}, omit(inputProps, ['element', 'valueModifiers', 'suffix', 'showCount'])), {}, {
        "ref": clearableInputRef
      }), _objectSpread(_objectSpread({}, slots), {}, {
        element: renderInput,
        suffix: renderShowCountSuffix
      }));
    };
  }
});