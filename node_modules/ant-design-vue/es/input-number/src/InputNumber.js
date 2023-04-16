import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _typeof from "@babel/runtime/helpers/esm/typeof";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
var _excluded = ["prefixCls", "min", "max", "step", "defaultValue", "value", "disabled", "readonly", "keyboard", "controls", "autofocus", "stringMode", "parser", "formatter", "precision", "decimalSeparator", "onChange", "onInput", "onPressEnter", "onStep", "lazy", "class", "style"];
import { createVNode as _createVNode, resolveDirective as _resolveDirective } from "vue";
import getMiniDecimal, { toFixed } from './utils/MiniDecimal';
import StepHandler from './StepHandler';
import { getNumberPrecision, num2str, validateNumber } from './utils/numberUtil';
import useCursor from './hooks/useCursor';
import useFrame from './hooks/useFrame';
import { watch, computed, ref, defineComponent } from 'vue';
import KeyCode from '../../_util/KeyCode';
import classNames from '../../_util/classNames';
/**
 * We support `stringMode` which need handle correct type when user call in onChange
 * format max or min value
 * 1. if isInvalid return null
 * 2. if precision is undefined, return decimal
 * 3. format with precision
 *    I. if max > 0, round down with precision. Example: max= 3.5, precision=0  afterFormat: 3
 *    II. if max < 0, round up with precision. Example: max= -3.5, precision=0  afterFormat: -4
 *    III. if min > 0, round up with precision. Example: min= 3.5, precision=0  afterFormat: 4
 *    IV. if min < 0, round down with precision. Example: max= -3.5, precision=0  afterFormat: -3
 */
var getDecimalValue = function getDecimalValue(stringMode, decimalValue) {
  if (stringMode || decimalValue.isEmpty()) {
    return decimalValue.toString();
  }
  return decimalValue.toNumber();
};
var getDecimalIfValidate = function getDecimalIfValidate(value) {
  var decimal = getMiniDecimal(value);
  return decimal.isInvalidate() ? null : decimal;
};
export var inputNumberProps = function inputNumberProps() {
  return {
    /** value will show as string */
    stringMode: {
      type: Boolean
    },
    defaultValue: {
      type: [String, Number]
    },
    value: {
      type: [String, Number]
    },
    prefixCls: {
      type: String
    },
    min: {
      type: [String, Number]
    },
    max: {
      type: [String, Number]
    },
    step: {
      type: [String, Number],
      default: 1
    },
    tabindex: {
      type: Number
    },
    controls: {
      type: Boolean,
      default: true
    },
    readonly: {
      type: Boolean
    },
    disabled: {
      type: Boolean
    },
    autofocus: {
      type: Boolean
    },
    keyboard: {
      type: Boolean,
      default: true
    },
    /** Parse display value to validate number */
    parser: {
      type: Function
    },
    /** Transform `value` to display value show in input */
    formatter: {
      type: Function
    },
    /** Syntactic sugar of `formatter`. Config precision of display. */
    precision: {
      type: Number
    },
    /** Syntactic sugar of `formatter`. Config decimal separator of display. */
    decimalSeparator: {
      type: String
    },
    onInput: {
      type: Function
    },
    onChange: {
      type: Function
    },
    onPressEnter: {
      type: Function
    },
    onStep: {
      type: Function
    },
    onBlur: {
      type: Function
    },
    onFocus: {
      type: Function
    }
  };
};
export default defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'InnerInputNumber',
  inheritAttrs: false,
  props: _objectSpread(_objectSpread({}, inputNumberProps()), {}, {
    lazy: Boolean
  }),
  slots: ['upHandler', 'downHandler'],
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs,
      slots = _ref.slots,
      emit = _ref.emit,
      expose = _ref.expose;
    var inputRef = ref();
    var focus = ref(false);
    var userTypingRef = ref(false);
    var compositionRef = ref(false);
    var decimalValue = ref(getMiniDecimal(props.value));
    function setUncontrolledDecimalValue(newDecimal) {
      if (props.value === undefined) {
        decimalValue.value = newDecimal;
      }
    }
    // ====================== Parser & Formatter ======================
    /**
     * `precision` is used for formatter & onChange.
     * It will auto generate by `value` & `step`.
     * But it will not block user typing.
     *
     * Note: Auto generate `precision` is used for legacy logic.
     * We should remove this since we already support high precision with BigInt.
     *
     * @param number  Provide which number should calculate precision
     * @param userTyping  Change by user typing
     */
    var getPrecision = function getPrecision(numStr, userTyping) {
      if (userTyping) {
        return undefined;
      }
      if (props.precision >= 0) {
        return props.precision;
      }
      return Math.max(getNumberPrecision(numStr), getNumberPrecision(props.step));
    };
    // >>> Parser
    var mergedParser = function mergedParser(num) {
      var numStr = String(num);
      if (props.parser) {
        return props.parser(numStr);
      }
      var parsedStr = numStr;
      if (props.decimalSeparator) {
        parsedStr = parsedStr.replace(props.decimalSeparator, '.');
      }
      // [Legacy] We still support auto convert `$ 123,456` to `123456`
      return parsedStr.replace(/[^\w.-]+/g, '');
    };
    // >>> Formatter
    var inputValue = ref('');
    var mergedFormatter = function mergedFormatter(number, userTyping) {
      if (props.formatter) {
        return props.formatter(number, {
          userTyping: userTyping,
          input: String(inputValue.value)
        });
      }
      var str = typeof number === 'number' ? num2str(number) : number;
      // User typing will not auto format with precision directly
      if (!userTyping) {
        var mergedPrecision = getPrecision(str, userTyping);
        if (validateNumber(str) && (props.decimalSeparator || mergedPrecision >= 0)) {
          // Separator
          var separatorStr = props.decimalSeparator || '.';
          str = toFixed(str, separatorStr, mergedPrecision);
        }
      }
      return str;
    };
    // ========================== InputValue ==========================
    /**
     * Input text value control
     *
     * User can not update input content directly. It update with follow rules by priority:
     *  1. controlled `value` changed
     *    * [SPECIAL] Typing like `1.` should not immediately convert to `1`
     *  2. User typing with format (not precision)
     *  3. Blur or Enter trigger revalidate
     */
    var initValue = function () {
      var initValue = props.value;
      if (decimalValue.value.isInvalidate() && ['string', 'number'].includes(_typeof(initValue))) {
        return Number.isNaN(initValue) ? '' : initValue;
      }
      return mergedFormatter(decimalValue.value.toString(), false);
    }();
    inputValue.value = initValue;
    // Should always be string
    function setInputValue(newValue, userTyping) {
      inputValue.value = mergedFormatter(
      // Invalidate number is sometime passed by external control, we should let it go
      // Otherwise is controlled by internal interactive logic which check by userTyping
      // You can ref 'show limited value when input is not focused' test for more info.
      newValue.isInvalidate() ? newValue.toString(false) : newValue.toString(!userTyping), userTyping);
    }
    // >>> Max & Min limit
    var maxDecimal = computed(function () {
      return getDecimalIfValidate(props.max);
    });
    var minDecimal = computed(function () {
      return getDecimalIfValidate(props.min);
    });
    var upDisabled = computed(function () {
      if (!maxDecimal.value || !decimalValue.value || decimalValue.value.isInvalidate()) {
        return false;
      }
      return maxDecimal.value.lessEquals(decimalValue.value);
    });
    var downDisabled = computed(function () {
      if (!minDecimal.value || !decimalValue.value || decimalValue.value.isInvalidate()) {
        return false;
      }
      return decimalValue.value.lessEquals(minDecimal.value);
    });
    // Cursor controller
    var _useCursor = useCursor(inputRef, focus),
      _useCursor2 = _slicedToArray(_useCursor, 2),
      recordCursor = _useCursor2[0],
      restoreCursor = _useCursor2[1];
    // ============================= Data =============================
    /**
     * Find target value closet within range.
     * e.g. [11, 28]:
     *    3  => 11
     *    23 => 23
     *    99 => 28
     */
    var getRangeValue = function getRangeValue(target) {
      // target > max
      if (maxDecimal.value && !target.lessEquals(maxDecimal.value)) {
        return maxDecimal.value;
      }
      // target < min
      if (minDecimal.value && !minDecimal.value.lessEquals(target)) {
        return minDecimal.value;
      }
      return null;
    };
    /**
     * Check value is in [min, max] range
     */
    var isInRange = function isInRange(target) {
      return !getRangeValue(target);
    };
    /**
     * Trigger `onChange` if value validated and not equals of origin.
     * Return the value that re-align in range.
     */
    var triggerValueUpdate = function triggerValueUpdate(newValue, userTyping) {
      var updateValue = newValue;
      var isRangeValidate = isInRange(updateValue) || updateValue.isEmpty();
      // Skip align value when trigger value is empty.
      // We just trigger onChange(null)
      // This should not block user typing
      if (!updateValue.isEmpty() && !userTyping) {
        // Revert value in range if needed
        updateValue = getRangeValue(updateValue) || updateValue;
        isRangeValidate = true;
      }
      if (!props.readonly && !props.disabled && isRangeValidate) {
        var numStr = updateValue.toString();
        var mergedPrecision = getPrecision(numStr, userTyping);
        if (mergedPrecision >= 0) {
          updateValue = getMiniDecimal(toFixed(numStr, '.', mergedPrecision));
        }
        // Trigger event
        if (!updateValue.equals(decimalValue.value)) {
          var _props$onChange;
          setUncontrolledDecimalValue(updateValue);
          (_props$onChange = props.onChange) === null || _props$onChange === void 0 ? void 0 : _props$onChange.call(props, updateValue.isEmpty() ? null : getDecimalValue(props.stringMode, updateValue));
          // Reformat input if value is not controlled
          if (props.value === undefined) {
            setInputValue(updateValue, userTyping);
          }
        }
        return updateValue;
      }
      return decimalValue.value;
    };
    // ========================== User Input ==========================
    var onNextPromise = useFrame();
    // >>> Collect input value
    var collectInputValue = function collectInputValue(inputStr) {
      var _props$onInput;
      recordCursor();
      // Update inputValue incase input can not parse as number
      inputValue.value = inputStr;
      // Parse number
      if (!compositionRef.value) {
        var finalValue = mergedParser(inputStr);
        var finalDecimal = getMiniDecimal(finalValue);
        if (!finalDecimal.isNaN()) {
          triggerValueUpdate(finalDecimal, true);
        }
      }
      // Trigger onInput later to let user customize value if they want do handle something after onChange
      (_props$onInput = props.onInput) === null || _props$onInput === void 0 ? void 0 : _props$onInput.call(props, inputStr);
      // optimize for chinese input experience
      // https://github.com/ant-design/ant-design/issues/8196
      onNextPromise(function () {
        var nextInputStr = inputStr;
        if (!props.parser) {
          nextInputStr = inputStr.replace(/。/g, '.');
        }
        if (nextInputStr !== inputStr) {
          collectInputValue(nextInputStr);
        }
      });
    };
    // >>> Composition
    var onCompositionStart = function onCompositionStart() {
      compositionRef.value = true;
    };
    var onCompositionEnd = function onCompositionEnd() {
      compositionRef.value = false;
      collectInputValue(inputRef.value.value);
    };
    // >>> Input
    var onInternalInput = function onInternalInput(e) {
      collectInputValue(e.target.value);
    };
    // ============================= Step =============================
    var onInternalStep = function onInternalStep(up) {
      var _props$onStep, _inputRef$value;
      // Ignore step since out of range
      if (up && upDisabled.value || !up && downDisabled.value) {
        return;
      }
      // Clear typing status since it may caused by up & down key.
      // We should sync with input value.
      userTypingRef.value = false;
      var stepDecimal = getMiniDecimal(props.step);
      if (!up) {
        stepDecimal = stepDecimal.negate();
      }
      var target = (decimalValue.value || getMiniDecimal(0)).add(stepDecimal.toString());
      var updatedValue = triggerValueUpdate(target, false);
      (_props$onStep = props.onStep) === null || _props$onStep === void 0 ? void 0 : _props$onStep.call(props, getDecimalValue(props.stringMode, updatedValue), {
        offset: props.step,
        type: up ? 'up' : 'down'
      });
      (_inputRef$value = inputRef.value) === null || _inputRef$value === void 0 ? void 0 : _inputRef$value.focus();
    };
    // ============================ Flush =============================
    /**
     * Flush current input content to trigger value change & re-formatter input if needed
     */
    var flushInputValue = function flushInputValue(userTyping) {
      var parsedValue = getMiniDecimal(mergedParser(inputValue.value));
      var formatValue = parsedValue;
      if (!parsedValue.isNaN()) {
        // Only validate value or empty value can be re-fill to inputValue
        // Reassign the formatValue within ranged of trigger control
        formatValue = triggerValueUpdate(parsedValue, userTyping);
      } else {
        formatValue = decimalValue.value;
      }
      if (props.value !== undefined) {
        // Reset back with controlled value first
        setInputValue(decimalValue.value, false);
      } else if (!formatValue.isNaN()) {
        // Reset input back since no validate value
        setInputValue(formatValue, false);
      }
    };
    var onKeyDown = function onKeyDown(event) {
      var which = event.which;
      userTypingRef.value = true;
      if (which === KeyCode.ENTER) {
        var _props$onPressEnter;
        if (!compositionRef.value) {
          userTypingRef.value = false;
        }
        flushInputValue(false);
        (_props$onPressEnter = props.onPressEnter) === null || _props$onPressEnter === void 0 ? void 0 : _props$onPressEnter.call(props, event);
      }
      if (props.keyboard === false) {
        return;
      }
      // Do step
      if (!compositionRef.value && [KeyCode.UP, KeyCode.DOWN].includes(which)) {
        onInternalStep(KeyCode.UP === which);
        event.preventDefault();
      }
    };
    var onKeyUp = function onKeyUp() {
      userTypingRef.value = false;
    };
    // >>> Focus & Blur
    var onBlur = function onBlur(e) {
      flushInputValue(false);
      focus.value = false;
      userTypingRef.value = false;
      emit('blur', e);
    };
    // ========================== Controlled ==========================
    // Input by precision
    watch(function () {
      return props.precision;
    }, function () {
      if (!decimalValue.value.isInvalidate()) {
        setInputValue(decimalValue.value, false);
      }
    }, {
      flush: 'post'
    });
    // Input by value
    watch(function () {
      return props.value;
    }, function () {
      var newValue = getMiniDecimal(props.value);
      decimalValue.value = newValue;
      var currentParsedValue = getMiniDecimal(mergedParser(inputValue.value));
      // When user typing from `1.2` to `1.`, we should not convert to `1` immediately.
      // But let it go if user set `formatter`
      if (!newValue.equals(currentParsedValue) || !userTypingRef.value || props.formatter) {
        // Update value as effect
        setInputValue(newValue, userTypingRef.value);
      }
    }, {
      flush: 'post'
    });
    // ============================ Cursor ============================
    watch(inputValue, function () {
      if (props.formatter) {
        restoreCursor();
      }
    }, {
      flush: 'post'
    });
    watch(function () {
      return props.disabled;
    }, function (val) {
      if (val) {
        focus.value = false;
      }
    });
    expose({
      focus: function focus() {
        var _inputRef$value2;
        (_inputRef$value2 = inputRef.value) === null || _inputRef$value2 === void 0 ? void 0 : _inputRef$value2.focus();
      },
      blur: function blur() {
        var _inputRef$value3;
        (_inputRef$value3 = inputRef.value) === null || _inputRef$value3 === void 0 ? void 0 : _inputRef$value3.blur();
      }
    });
    return function () {
      var _classNames;
      var _attrs$props = _objectSpread(_objectSpread({}, attrs), props),
        _attrs$props$prefixCl = _attrs$props.prefixCls,
        prefixCls = _attrs$props$prefixCl === void 0 ? 'rc-input-number' : _attrs$props$prefixCl,
        min = _attrs$props.min,
        max = _attrs$props.max,
        _attrs$props$step = _attrs$props.step,
        step = _attrs$props$step === void 0 ? 1 : _attrs$props$step,
        defaultValue = _attrs$props.defaultValue,
        value = _attrs$props.value,
        disabled = _attrs$props.disabled,
        readonly = _attrs$props.readonly,
        keyboard = _attrs$props.keyboard,
        _attrs$props$controls = _attrs$props.controls,
        controls = _attrs$props$controls === void 0 ? true : _attrs$props$controls,
        autofocus = _attrs$props.autofocus,
        stringMode = _attrs$props.stringMode,
        parser = _attrs$props.parser,
        formatter = _attrs$props.formatter,
        precision = _attrs$props.precision,
        decimalSeparator = _attrs$props.decimalSeparator,
        onChange = _attrs$props.onChange,
        onInput = _attrs$props.onInput,
        onPressEnter = _attrs$props.onPressEnter,
        onStep = _attrs$props.onStep,
        lazy = _attrs$props.lazy,
        className = _attrs$props.class,
        style = _attrs$props.style,
        inputProps = _objectWithoutProperties(_attrs$props, _excluded);
      var upHandler = slots.upHandler,
        downHandler = slots.downHandler;
      var inputClassName = "".concat(prefixCls, "-input");
      var eventProps = {};
      if (lazy) {
        eventProps.onChange = onInternalInput;
      } else {
        eventProps.onInput = onInternalInput;
      }
      return _createVNode("div", {
        "class": classNames(prefixCls, className, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-focused"), focus.value), _defineProperty(_classNames, "".concat(prefixCls, "-disabled"), disabled), _defineProperty(_classNames, "".concat(prefixCls, "-readonly"), readonly), _defineProperty(_classNames, "".concat(prefixCls, "-not-a-number"), decimalValue.value.isNaN()), _defineProperty(_classNames, "".concat(prefixCls, "-out-of-range"), !decimalValue.value.isInvalidate() && !isInRange(decimalValue.value)), _classNames)),
        "style": style,
        "onKeydown": onKeyDown,
        "onKeyup": onKeyUp
      }, [controls && _createVNode(StepHandler, {
        "prefixCls": prefixCls,
        "upDisabled": upDisabled.value,
        "downDisabled": downDisabled.value,
        "onStep": onInternalStep
      }, {
        upNode: upHandler,
        downNode: downHandler
      }), _createVNode("div", {
        "class": "".concat(inputClassName, "-wrap")
      }, [_createVNode("input", _objectSpread(_objectSpread(_objectSpread({
        "autofocus": autofocus,
        "autocomplete": "off",
        "role": "spinbutton",
        "aria-valuemin": min,
        "aria-valuemax": max,
        "aria-valuenow": decimalValue.value.isInvalidate() ? null : decimalValue.value.toString(),
        "step": step
      }, inputProps), {}, {
        "ref": inputRef,
        "class": inputClassName,
        "value": inputValue.value,
        "disabled": disabled,
        "readonly": readonly,
        "onFocus": function onFocus(e) {
          focus.value = true;
          emit('focus', e);
        }
      }, eventProps), {}, {
        "onBlur": onBlur,
        "onCompositionstart": onCompositionStart,
        "onCompositionend": onCompositionEnd
      }), null)])]);
    };
  }
});