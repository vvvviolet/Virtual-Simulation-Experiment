"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = require("vue");
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _classNames = _interopRequireDefault(require("../../_util/classNames"));
var _KeyCode = _interopRequireDefault(require("../../_util/KeyCode"));
var _propsUtil = require("../../_util/props-util");
var _util = require("./util");
var _KeywordTrigger = _interopRequireDefault(require("./KeywordTrigger"));
var _mentionsProps = require("./mentionsProps");
var _MentionsContext = _interopRequireDefault(require("./MentionsContext"));
var _antInputDirective = _interopRequireDefault(require("../../_util/antInputDirective"));
var _omit = _interopRequireDefault(require("../../_util/omit"));
var _excluded = ["prefixCls", "placement", "transitionName", "getPopupContainer", "direction"],
  _excluded2 = ["class", "style"];
function noop() {}
var _default2 = (0, _vue.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  name: 'Mentions',
  inheritAttrs: false,
  props: (0, _propsUtil.initDefaultProps)(_mentionsProps.vcMentionsProps, _mentionsProps.defaultProps),
  slots: ['notFoundContent', 'option'],
  emits: ['change', 'select', 'search', 'focus', 'blur', 'pressenter'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit,
      attrs = _ref.attrs,
      expose = _ref.expose,
      slots = _ref.slots;
    var measure = (0, _vue.ref)(null);
    var textarea = (0, _vue.ref)(null);
    var focusId = (0, _vue.ref)();
    var state = (0, _vue.reactive)({
      value: props.value || '',
      measuring: false,
      measureLocation: 0,
      measureText: null,
      measurePrefix: '',
      activeIndex: 0,
      isFocus: false
    });
    (0, _vue.watchEffect)(function () {
      state.value = props.value;
    });
    var triggerChange = function triggerChange(val) {
      emit('change', val);
    };
    var onChange = function onChange(_ref2) {
      var _ref2$target = _ref2.target,
        value = _ref2$target.value,
        composing = _ref2$target.composing,
        isComposing = _ref2.isComposing;
      if (isComposing || composing) return;
      triggerChange(value);
    };
    var startMeasure = function startMeasure(measureText, measurePrefix, measureLocation) {
      (0, _extends2.default)(state, {
        measuring: true,
        measureText: measureText,
        measurePrefix: measurePrefix,
        measureLocation: measureLocation,
        activeIndex: 0
      });
    };
    var stopMeasure = function stopMeasure(callback) {
      (0, _extends2.default)(state, {
        measuring: false,
        measureLocation: 0,
        measureText: null
      });
      callback === null || callback === void 0 ? void 0 : callback();
    };
    var onKeyDown = function onKeyDown(event) {
      var which = event.which;
      // Skip if not measuring
      if (!state.measuring) {
        return;
      }
      if (which === _KeyCode.default.UP || which === _KeyCode.default.DOWN) {
        // Control arrow function
        var optionLen = options.value.length;
        var offset = which === _KeyCode.default.UP ? -1 : 1;
        var newActiveIndex = (state.activeIndex + offset + optionLen) % optionLen;
        state.activeIndex = newActiveIndex;
        event.preventDefault();
      } else if (which === _KeyCode.default.ESC) {
        stopMeasure();
      } else if (which === _KeyCode.default.ENTER) {
        // Measure hit
        event.preventDefault();
        if (!options.value.length) {
          stopMeasure();
          return;
        }
        var option = options.value[state.activeIndex];
        selectOption(option);
      }
    };
    var onKeyUp = function onKeyUp(event) {
      var key = event.key,
        which = event.which;
      var prevMeasureText = state.measureText,
        measuring = state.measuring;
      var prefix = props.prefix,
        validateSearch = props.validateSearch;
      var target = event.target;
      if (target.composing) {
        return;
      }
      var selectionStartText = (0, _util.getBeforeSelectionText)(target);
      var _getLastMeasureIndex = (0, _util.getLastMeasureIndex)(selectionStartText, prefix),
        measureIndex = _getLastMeasureIndex.location,
        measurePrefix = _getLastMeasureIndex.prefix;
      // Skip if match the white key list
      if ([_KeyCode.default.ESC, _KeyCode.default.UP, _KeyCode.default.DOWN, _KeyCode.default.ENTER].indexOf(which) !== -1) {
        return;
      }
      if (measureIndex !== -1) {
        var measureText = selectionStartText.slice(measureIndex + measurePrefix.length);
        var validateMeasure = validateSearch(measureText, props);
        var matchOption = !!getOptions(measureText).length;
        if (validateMeasure) {
          if (key === measurePrefix || key === 'Shift' || measuring || measureText !== prevMeasureText && matchOption) {
            startMeasure(measureText, measurePrefix, measureIndex);
          }
        } else if (measuring) {
          // Stop if measureText is invalidate
          stopMeasure();
        }
        /**
         * We will trigger `onSearch` to developer since they may use for async update.
         * If met `space` means user finished searching.
         */
        if (validateMeasure) {
          emit('search', measureText, measurePrefix);
        }
      } else if (measuring) {
        stopMeasure();
      }
    };
    var onPressEnter = function onPressEnter(event) {
      if (!state.measuring) {
        emit('pressenter', event);
      }
    };
    var onInputFocus = function onInputFocus(event) {
      onFocus(event);
    };
    var onInputBlur = function onInputBlur(event) {
      onBlur(event);
    };
    var onFocus = function onFocus(event) {
      clearTimeout(focusId.value);
      var isFocus = state.isFocus;
      if (!isFocus && event) {
        emit('focus', event);
      }
      state.isFocus = true;
    };
    var onBlur = function onBlur(event) {
      focusId.value = setTimeout(function () {
        state.isFocus = false;
        stopMeasure();
        emit('blur', event);
      }, 100);
    };
    var selectOption = function selectOption(option) {
      var split = props.split;
      var _option$value = option.value,
        mentionValue = _option$value === void 0 ? '' : _option$value;
      var _replaceWithMeasure = (0, _util.replaceWithMeasure)(state.value, {
          measureLocation: state.measureLocation,
          targetText: mentionValue,
          prefix: state.measurePrefix,
          selectionStart: textarea.value.selectionStart,
          split: split
        }),
        text = _replaceWithMeasure.text,
        selectionLocation = _replaceWithMeasure.selectionLocation;
      triggerChange(text);
      stopMeasure(function () {
        // We need restore the selection position
        (0, _util.setInputSelection)(textarea.value, selectionLocation);
      });
      emit('select', option, state.measurePrefix);
    };
    var setActiveIndex = function setActiveIndex(activeIndex) {
      state.activeIndex = activeIndex;
    };
    var getOptions = function getOptions(measureText) {
      var targetMeasureText = measureText || state.measureText || '';
      var filterOption = props.filterOption;
      var list = props.options.filter(function (option) {
        /** Return all result if `filterOption` is false. */
        if (!!filterOption === false) {
          return true;
        }
        return filterOption(targetMeasureText, option);
      });
      return list;
    };
    var options = (0, _vue.computed)(function () {
      return getOptions();
    });
    var focus = function focus() {
      textarea.value.focus();
    };
    var blur = function blur() {
      textarea.value.blur();
    };
    expose({
      blur: blur,
      focus: focus
    });
    (0, _vue.provide)(_MentionsContext.default, {
      activeIndex: (0, _vue.toRef)(state, 'activeIndex'),
      setActiveIndex: setActiveIndex,
      selectOption: selectOption,
      onFocus: onFocus,
      onBlur: onBlur,
      loading: (0, _vue.toRef)(props, 'loading')
    });
    (0, _vue.onUpdated)(function () {
      (0, _vue.nextTick)(function () {
        if (state.measuring) {
          measure.value.scrollTop = textarea.value.scrollTop;
        }
      });
    });
    return function () {
      var measureLocation = state.measureLocation,
        measurePrefix = state.measurePrefix,
        measuring = state.measuring;
      var prefixCls = props.prefixCls,
        placement = props.placement,
        transitionName = props.transitionName,
        getPopupContainer = props.getPopupContainer,
        direction = props.direction,
        restProps = (0, _objectWithoutProperties2.default)(props, _excluded);
      var className = attrs.class,
        style = attrs.style,
        otherAttrs = (0, _objectWithoutProperties2.default)(attrs, _excluded2);
      var inputProps = (0, _omit.default)(restProps, ['value', 'prefix', 'split', 'validateSearch', 'filterOption', 'options', 'loading']);
      var textareaProps = (0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({}, inputProps), otherAttrs), {}, {
        onChange: noop,
        onSelect: noop,
        value: state.value,
        onInput: onChange,
        onBlur: onInputBlur,
        onKeydown: onKeyDown,
        onKeyup: onKeyUp,
        onFocus: onInputFocus,
        onPressenter: onPressEnter
      });
      return (0, _vue.createVNode)("div", {
        "class": (0, _classNames.default)(prefixCls, className),
        "style": style
      }, [(0, _vue.withDirectives)((0, _vue.createVNode)("textarea", (0, _objectSpread2.default)({
        "ref": textarea
      }, textareaProps), null), [[_antInputDirective.default]]), measuring && (0, _vue.createVNode)("div", {
        "ref": measure,
        "class": "".concat(prefixCls, "-measure")
      }, [state.value.slice(0, measureLocation), (0, _vue.createVNode)(_KeywordTrigger.default, {
        "prefixCls": prefixCls,
        "transitionName": transitionName,
        "placement": placement,
        "options": measuring ? options.value : [],
        "visible": true,
        "direction": direction,
        "getPopupContainer": getPopupContainer
      }, {
        default: function _default() {
          return [(0, _vue.createVNode)("span", null, [measurePrefix])];
        },
        notFoundContent: slots.notFoundContent,
        option: slots.option
      }), state.value.slice(measureLocation + measurePrefix.length)])]);
    };
  }
});
exports.default = _default2;