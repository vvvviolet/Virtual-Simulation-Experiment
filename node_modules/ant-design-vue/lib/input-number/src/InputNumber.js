"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof3 = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.inputNumberProps = exports.default = void 0;
var _vue = require("vue");
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _MiniDecimal = _interopRequireWildcard(require("./utils/MiniDecimal"));
var _StepHandler = _interopRequireDefault(require("./StepHandler"));
var _numberUtil = require("./utils/numberUtil");
var _useCursor3 = _interopRequireDefault(require("./hooks/useCursor"));
var _useFrame = _interopRequireDefault(require("./hooks/useFrame"));
var _KeyCode = _interopRequireDefault(require("../../_util/KeyCode"));
var _classNames2 = _interopRequireDefault(require("../../_util/classNames"));
var _excluded = ["prefixCls", "min", "max", "step", "defaultValue", "value", "disabled", "readonly", "keyboard", "controls", "autofocus", "stringMode", "parser", "formatter", "precision", "decimalSeparator", "onChange", "onInput", "onPressEnter", "onStep", "lazy", "class", "style"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
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
  var decimal = (0, _MiniDecimal.default)(value);
  return decimal.isInvalidate() ? null : decimal;
};
var inputNumberProps = function inputNumberProps() {
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
exports.inputNumberProps = inputNumberProps;
var _default = (0, _vue.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  name: 'InnerInputNumber',
  inheritAttrs: false,
  props: (0, _objectSpread2.default)((0, _objectSpread2.default)({}, inputNumberProps()), {}, {
    lazy: Boolean
  }),
  slots: ['upHandler', 'downHandler'],
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs,
      slots = _ref.slots,
      emit = _ref.emit,
      expose = _ref.expose;
    var inputRef = (0, _vue.ref)();
    var focus = (0, _vue.ref)(false);
    var userTypingRef = (0, _vue.ref)(false);
    var compositionRef = (0, _vue.ref)(false);
    var decimalValue = (0, _vue.ref)((0, _MiniDecimal.default)(props.value));
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
      return Math.max((0, _numberUtil.getNumberPrecision)(numStr), (0, _numberUtil.getNumberPrecision)(props.step));
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
    var inputValue = (0, _vue.ref)('');
    var mergedFormatter = function mergedFormatter(number, userTyping) {
      if (props.formatter) {
        return props.formatter(number, {
          userTyping: userTyping,
          input: String(inputValue.value)
        });
      }
      var str = typeof number === 'number' ? (0, _numberUtil.num2str)(number) : number;
      // User typing will not auto format with precision directly
      if (!userTyping) {
        var mergedPrecision = getPrecision(str, userTyping);
        if ((0, _numberUtil.validateNumber)(str) && (props.decimalSeparator || mergedPrecision >= 0)) {
          // Separator
          var separatorStr = props.decimalSeparator || '.';
          str = (0, _MiniDecimal.toFixed)(str, separatorStr, mergedPrecision);
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
      if (decimalValue.value.isInvalidate() && ['string', 'number'].includes((0, _typeof2.default)(initValue))) {
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
    var maxDecimal = (0, _vue.computed)(function () {
      return getDecimalIfValidate(props.max);
    });
    var minDecimal = (0, _vue.computed)(function () {
      return getDecimalIfValidate(props.min);
    });
    var upDisabled = (0, _vue.computed)(function () {
      if (!maxDecimal.value || !decimalValue.value || decimalValue.value.isInvalidate()) {
        return false;
      }
      return maxDecimal.value.lessEquals(decimalValue.value);
    });
    var downDisabled = (0, _vue.computed)(function () {
      if (!minDecimal.value || !decimalValue.value || decimalValue.value.isInvalidate()) {
        return false;
      }
      return decimalValue.value.lessEquals(minDecimal.value);
    });
    // Cursor controller
    var _useCursor = (0, _useCursor3.default)(inputRef, focus),
      _useCursor2 = (0, _slicedToArray2.default)(_useCursor, 2),
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
          updateValue = (0, _MiniDecimal.default)((0, _MiniDecimal.toFixed)(numStr, '.', mergedPrecision));
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
    var onNextPromise = (0, _useFrame.default)();
    // >>> Collect input value
    var collectInputValue = function collectInputValue(inputStr) {
      var _props$onInput;
      recordCursor();
      // Update inputValue incase input can not parse as number
      inputValue.value = inputStr;
      // Parse number
      if (!compositionRef.value) {
        var finalValue = mergedParser(inputStr);
        var finalDecimal = (0, _MiniDecimal.default)(finalValue);
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
      var stepDecimal = (0, _MiniDecimal.default)(props.step);
      if (!up) {
        stepDecimal = stepDecimal.negate();
      }
      var target = (decimalValue.value || (0, _MiniDecimal.default)(0)).add(stepDecimal.toString());
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
      var parsedValue = (0, _MiniDecimal.default)(mergedParser(inputValue.value));
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
      if (which === _KeyCode.default.ENTER) {
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
      if (!compositionRef.value && [_KeyCode.default.UP, _KeyCode.default.DOWN].includes(which)) {
        onInternalStep(_KeyCode.default.UP === which);
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
    (0, _vue.watch)(function () {
      return props.precision;
    }, function () {
      if (!decimalValue.value.isInvalidate()) {
        setInputValue(decimalValue.value, false);
      }
    }, {
      flush: 'post'
    });
    // Input by value
    (0, _vue.watch)(function () {
      return props.value;
    }, function () {
      var newValue = (0, _MiniDecimal.default)(props.value);
      decimalValue.value = newValue;
      var currentParsedValue = (0, _MiniDecimal.default)(mergedParser(inputValue.value));
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
    (0, _vue.watch)(inputValue, function () {
      if (props.formatter) {
        restoreCursor();
      }
    }, {
      flush: 'post'
    });
    (0, _vue.watch)(function () {
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
      var _attrs$props = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, attrs), props),
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
        inputProps = (0, _objectWithoutProperties2.default)(_attrs$props, _excluded);
      var upHandler = slots.upHandler,
        downHandler = slots.downHandler;
      var inputClassName = "".concat(prefixCls, "-input");
      var eventProps = {};
      if (lazy) {
        eventProps.onChange = onInternalInput;
      } else {
        eventProps.onInput = onInternalInput;
      }
      return (0, _vue.createVNode)("div", {
        "class": (0, _classNames2.default)(prefixCls, className, (_classNames = {}, (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-focused"), focus.value), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-disabled"), disabled), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-readonly"), readonly), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-not-a-number"), decimalValue.value.isNaN()), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-out-of-range"), !decimalValue.value.isInvalidate() && !isInRange(decimalValue.value)), _classNames)),
        "style": style,
        "onKeydown": onKeyDown,
        "onKeyup": onKeyUp
      }, [controls && (0, _vue.createVNode)(_StepHandler.default, {
        "prefixCls": prefixCls,
        "upDisabled": upDisabled.value,
        "downDisabled": downDisabled.value,
        "onStep": onInternalStep
      }, {
        upNode: upHandler,
        downNode: downHandler
      }), (0, _vue.createVNode)("div", {
        "class": "".concat(inputClassName, "-wrap")
      }, [(0, _vue.createVNode)("input", (0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({
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
exports.default = _default;