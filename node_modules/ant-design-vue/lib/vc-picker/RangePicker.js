"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof3 = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = require("vue");
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _PickerTrigger = _interopRequireDefault(require("./PickerTrigger"));
var _PickerPanel = _interopRequireDefault(require("./PickerPanel"));
var _usePickerInput5 = _interopRequireDefault(require("./hooks/usePickerInput"));
var _miscUtil = _interopRequireWildcard(require("./utils/miscUtil"));
var _uiUtil = require("./utils/uiUtil");
var _PanelContext = require("./PanelContext");
var _dateUtil = require("./utils/dateUtil");
var _useValueTexts5 = _interopRequireDefault(require("./hooks/useValueTexts"));
var _useTextValueMapping5 = _interopRequireDefault(require("./hooks/useTextValueMapping"));
var _RangeContext = require("./RangeContext");
var _useRangeDisabled3 = _interopRequireDefault(require("./hooks/useRangeDisabled"));
var _getExtraFooter = _interopRequireDefault(require("./utils/getExtraFooter"));
var _getRanges = _interopRequireDefault(require("./utils/getRanges"));
var _useRangeViewDates3 = _interopRequireDefault(require("./hooks/useRangeViewDates"));
var _useHoverValue5 = _interopRequireDefault(require("./hooks/useHoverValue"));
var _useMergedState11 = _interopRequireDefault(require("../_util/hooks/useMergedState"));
var _warning = require("../vc-util/warning");
var _useState5 = _interopRequireDefault(require("../_util/hooks/useState"));
var _classNames5 = _interopRequireDefault(require("../_util/classNames"));
var _context = require("../vc-trigger/context");
var _warnUtil = require("./utils/warnUtil");
var _useElementSize6 = require("../_util/hooks/_vueuse/useElementSize");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function reorderValues(values, generateConfig) {
  if (values && values[0] && values[1] && generateConfig.isAfter(values[0], values[1])) {
    return [values[1], values[0]];
  }
  return values;
}
function canValueTrigger(value, index, disabled, allowEmpty) {
  if (value) {
    return true;
  }
  if (allowEmpty && allowEmpty[index]) {
    return true;
  }
  if (disabled[(index + 1) % 2]) {
    return true;
  }
  return false;
}
function RangerPicker() {
  return (0, _vue.defineComponent)({
    name: 'RangerPicker',
    inheritAttrs: false,
    props: ['prefixCls', 'id', 'popupStyle', 'dropdownClassName', 'transitionName', 'dropdownAlign', 'getPopupContainer', 'generateConfig', 'locale', 'placeholder', 'autofocus', 'disabled', 'format', 'picker', 'showTime', 'showNow', 'showHour', 'showMinute', 'showSecond', 'use12Hours', 'separator', 'value', 'defaultValue', 'defaultPickerValue', 'open', 'defaultOpen', 'disabledDate', 'disabledTime', 'dateRender', 'panelRender', 'ranges', 'allowEmpty', 'allowClear', 'suffixIcon', 'clearIcon', 'pickerRef', 'inputReadOnly', 'mode', 'renderExtraFooter', 'onChange', 'onOpenChange', 'onPanelChange', 'onCalendarChange', 'onFocus', 'onBlur', 'onMousedown', 'onMouseup', 'onMouseenter', 'onMouseleave', 'onClick', 'onOk', 'onKeydown', 'components', 'order', 'direction', 'activePickerIndex', 'autocomplete', 'minuteStep', 'hourStep', 'secondStep', 'hideDisabledOptions', 'disabledMinutes'],
    setup: function setup(props, _ref) {
      var attrs = _ref.attrs,
        expose = _ref.expose;
      var needConfirmButton = (0, _vue.computed)(function () {
        return props.picker === 'date' && !!props.showTime || props.picker === 'time';
      });
      var getPortal = (0, _context.useProviderTrigger)();
      // We record opened status here in case repeat open with picker
      var openRecordsRef = (0, _vue.ref)({});
      var containerRef = (0, _vue.ref)(null);
      var panelDivRef = (0, _vue.ref)(null);
      var startInputDivRef = (0, _vue.ref)(null);
      var endInputDivRef = (0, _vue.ref)(null);
      var separatorRef = (0, _vue.ref)(null);
      var startInputRef = (0, _vue.ref)(null);
      var endInputRef = (0, _vue.ref)(null);
      var arrowRef = (0, _vue.ref)(null);
      // ============================ Warning ============================
      if (process.env.NODE_ENV !== 'production') {
        (0, _warnUtil.legacyPropsWarning)(props);
      }
      // ============================= Misc ==============================
      var formatList = (0, _vue.computed)(function () {
        return (0, _miscUtil.toArray)((0, _uiUtil.getDefaultFormat)(props.format, props.picker, props.showTime, props.use12Hours));
      });
      // Active picker
      var _useMergedState = (0, _useMergedState11.default)(0, {
          value: (0, _vue.toRef)(props, 'activePickerIndex')
        }),
        _useMergedState2 = (0, _slicedToArray2.default)(_useMergedState, 2),
        mergedActivePickerIndex = _useMergedState2[0],
        setMergedActivePickerIndex = _useMergedState2[1];
      // Operation ref
      var operationRef = (0, _vue.ref)(null);
      var mergedDisabled = (0, _vue.computed)(function () {
        var disabled = props.disabled;
        if (Array.isArray(disabled)) {
          return disabled;
        }
        return [disabled || false, disabled || false];
      });
      // ============================= Value =============================
      var _useMergedState3 = (0, _useMergedState11.default)(null, {
          value: (0, _vue.toRef)(props, 'value'),
          defaultValue: props.defaultValue,
          postState: function postState(values) {
            return props.picker === 'time' && !props.order ? values : reorderValues(values, props.generateConfig);
          }
        }),
        _useMergedState4 = (0, _slicedToArray2.default)(_useMergedState3, 2),
        mergedValue = _useMergedState4[0],
        setInnerValue = _useMergedState4[1];
      // =========================== View Date ===========================
      // Config view panel
      var _useRangeViewDates = (0, _useRangeViewDates3.default)({
          values: mergedValue,
          picker: (0, _vue.toRef)(props, 'picker'),
          defaultDates: props.defaultPickerValue,
          generateConfig: (0, _vue.toRef)(props, 'generateConfig')
        }),
        _useRangeViewDates2 = (0, _slicedToArray2.default)(_useRangeViewDates, 3),
        startViewDate = _useRangeViewDates2[0],
        endViewDate = _useRangeViewDates2[1],
        setViewDate = _useRangeViewDates2[2];
      // ========================= Select Values =========================
      var _useMergedState5 = (0, _useMergedState11.default)(mergedValue.value, {
          postState: function postState(values) {
            var postValues = values;
            if (mergedDisabled.value[0] && mergedDisabled.value[1]) {
              return postValues;
            }
            // Fill disabled unit
            for (var i = 0; i < 2; i += 1) {
              if (mergedDisabled[i] && !(0, _miscUtil.getValue)(postValues, i) && !(0, _miscUtil.getValue)(props.allowEmpty, i)) {
                postValues = (0, _miscUtil.updateValues)(postValues, props.generateConfig.getNow(), i);
              }
            }
            return postValues;
          }
        }),
        _useMergedState6 = (0, _slicedToArray2.default)(_useMergedState5, 2),
        selectedValue = _useMergedState6[0],
        setSelectedValue = _useMergedState6[1];
      // ============================= Modes =============================
      var _useMergedState7 = (0, _useMergedState11.default)([props.picker, props.picker], {
          value: (0, _vue.toRef)(props, 'mode')
        }),
        _useMergedState8 = (0, _slicedToArray2.default)(_useMergedState7, 2),
        mergedModes = _useMergedState8[0],
        setInnerModes = _useMergedState8[1];
      (0, _vue.watch)(function () {
        return props.picker;
      }, function () {
        setInnerModes([props.picker, props.picker]);
      });
      var triggerModesChange = function triggerModesChange(modes, values) {
        var _props$onPanelChange;
        setInnerModes(modes);
        (_props$onPanelChange = props.onPanelChange) === null || _props$onPanelChange === void 0 ? void 0 : _props$onPanelChange.call(props, values, modes);
      };
      // ========================= Disable Date ==========================
      var _useRangeDisabled = (0, _useRangeDisabled3.default)({
          picker: (0, _vue.toRef)(props, 'picker'),
          selectedValue: selectedValue,
          locale: (0, _vue.toRef)(props, 'locale'),
          disabled: mergedDisabled,
          disabledDate: (0, _vue.toRef)(props, 'disabledDate'),
          generateConfig: (0, _vue.toRef)(props, 'generateConfig')
        }, openRecordsRef),
        _useRangeDisabled2 = (0, _slicedToArray2.default)(_useRangeDisabled, 2),
        disabledStartDate = _useRangeDisabled2[0],
        disabledEndDate = _useRangeDisabled2[1];
      // ============================= Open ==============================
      var _useMergedState9 = (0, _useMergedState11.default)(false, {
          value: (0, _vue.toRef)(props, 'open'),
          defaultValue: props.defaultOpen,
          postState: function postState(postOpen) {
            return mergedDisabled.value[mergedActivePickerIndex.value] ? false : postOpen;
          },
          onChange: function onChange(newOpen) {
            var _props$onOpenChange;
            (_props$onOpenChange = props.onOpenChange) === null || _props$onOpenChange === void 0 ? void 0 : _props$onOpenChange.call(props, newOpen);
            if (!newOpen && operationRef.value && operationRef.value.onClose) {
              operationRef.value.onClose();
            }
          }
        }),
        _useMergedState10 = (0, _slicedToArray2.default)(_useMergedState9, 2),
        mergedOpen = _useMergedState10[0],
        triggerInnerOpen = _useMergedState10[1];
      var startOpen = (0, _vue.computed)(function () {
        return mergedOpen.value && mergedActivePickerIndex.value === 0;
      });
      var endOpen = (0, _vue.computed)(function () {
        return mergedOpen.value && mergedActivePickerIndex.value === 1;
      });
      var panelLeft = (0, _vue.ref)(0);
      var arrowLeft = (0, _vue.ref)(0);
      // ============================= Popup =============================
      // Popup min width
      var popupMinWidth = (0, _vue.ref)(0);
      var _useElementSize = (0, _useElementSize6.useElementSize)(containerRef),
        containerWidth = _useElementSize.width;
      (0, _vue.watch)([mergedOpen, containerWidth], function () {
        if (!mergedOpen.value && containerRef.value) {
          popupMinWidth.value = containerWidth.value;
        }
      });
      var _useElementSize2 = (0, _useElementSize6.useElementSize)(panelDivRef),
        panelDivWidth = _useElementSize2.width;
      var _useElementSize3 = (0, _useElementSize6.useElementSize)(arrowRef),
        arrowWidth = _useElementSize3.width;
      var _useElementSize4 = (0, _useElementSize6.useElementSize)(startInputDivRef),
        startInputDivWidth = _useElementSize4.width;
      var _useElementSize5 = (0, _useElementSize6.useElementSize)(separatorRef),
        separatorWidth = _useElementSize5.width;
      (0, _vue.watch)([mergedActivePickerIndex, mergedOpen, panelDivWidth, arrowWidth, startInputDivWidth, separatorWidth, function () {
        return props.direction;
      }], function () {
        arrowLeft.value = 0;
        if (mergedOpen.value && mergedActivePickerIndex.value) {
          if (startInputDivRef.value && separatorRef.value && panelDivRef.value) {
            arrowLeft.value = startInputDivWidth.value + separatorWidth.value;
            if (panelDivWidth.value && arrowWidth.value && arrowLeft.value > panelDivWidth.value - arrowWidth.value - (props.direction === 'rtl' || arrowRef.value.offsetLeft > arrowLeft.value ? 0 : arrowRef.value.offsetLeft)) {
              panelLeft.value = arrowLeft.value;
            }
          }
        } else if (mergedActivePickerIndex.value === 0) {
          panelLeft.value = 0;
        }
      }, {
        immediate: true
      });
      // ============================ Trigger ============================
      var triggerRef = (0, _vue.ref)();
      function _triggerOpen(newOpen, index) {
        if (newOpen) {
          clearTimeout(triggerRef.value);
          openRecordsRef.value[index] = true;
          setMergedActivePickerIndex(index);
          triggerInnerOpen(newOpen);
          // Open to reset view date
          if (!mergedOpen.value) {
            setViewDate(null, index);
          }
        } else if (mergedActivePickerIndex.value === index) {
          triggerInnerOpen(newOpen);
          // Clean up async
          // This makes ref not quick refresh in case user open another input with blur trigger
          var openRecords = openRecordsRef.value;
          triggerRef.value = setTimeout(function () {
            if (openRecords === openRecordsRef.value) {
              openRecordsRef.value = {};
            }
          });
        }
      }
      function triggerOpenAndFocus(index) {
        _triggerOpen(true, index);
        // Use setTimeout to make sure panel DOM exists
        setTimeout(function () {
          var inputRef = [startInputRef, endInputRef][index];
          if (inputRef.value) {
            inputRef.value.focus();
          }
        }, 0);
      }
      function triggerChange(newValue, sourceIndex) {
        var values = newValue;
        var startValue = (0, _miscUtil.getValue)(values, 0);
        var endValue = (0, _miscUtil.getValue)(values, 1);
        var generateConfig = props.generateConfig,
          locale = props.locale,
          picker = props.picker,
          order = props.order,
          onCalendarChange = props.onCalendarChange,
          allowEmpty = props.allowEmpty,
          onChange = props.onChange,
          showTime = props.showTime;
        // >>>>> Format start & end values
        if (startValue && endValue && generateConfig.isAfter(startValue, endValue)) {
          if (
          // WeekPicker only compare week
          picker === 'week' && !(0, _dateUtil.isSameWeek)(generateConfig, locale.locale, startValue, endValue) ||
          // QuotaPicker only compare week
          picker === 'quarter' && !(0, _dateUtil.isSameQuarter)(generateConfig, startValue, endValue) ||
          // Other non-TimePicker compare date
          picker !== 'week' && picker !== 'quarter' && picker !== 'time' && !(showTime ? (0, _dateUtil.isEqual)(generateConfig, startValue, endValue) : (0, _dateUtil.isSameDate)(generateConfig, startValue, endValue))) {
            // Clean up end date when start date is after end date
            if (sourceIndex === 0) {
              values = [startValue, null];
              endValue = null;
            } else {
              startValue = null;
              values = [null, endValue];
            }
            // Clean up cache since invalidate
            openRecordsRef.value = (0, _defineProperty2.default)({}, sourceIndex, true);
          } else if (picker !== 'time' || order !== false) {
            // Reorder when in same date
            values = reorderValues(values, generateConfig);
          }
        }
        setSelectedValue(values);
        var startStr = values && values[0] ? (0, _dateUtil.formatValue)(values[0], {
          generateConfig: generateConfig,
          locale: locale,
          format: formatList.value[0]
        }) : '';
        var endStr = values && values[1] ? (0, _dateUtil.formatValue)(values[1], {
          generateConfig: generateConfig,
          locale: locale,
          format: formatList.value[0]
        }) : '';
        if (onCalendarChange) {
          var info = {
            range: sourceIndex === 0 ? 'start' : 'end'
          };
          onCalendarChange(values, [startStr, endStr], info);
        }
        // >>>>> Trigger `onChange` event
        var canStartValueTrigger = canValueTrigger(startValue, 0, mergedDisabled.value, allowEmpty);
        var canEndValueTrigger = canValueTrigger(endValue, 1, mergedDisabled.value, allowEmpty);
        var canTrigger = values === null || canStartValueTrigger && canEndValueTrigger;
        if (canTrigger) {
          // Trigger onChange only when value is validate
          setInnerValue(values);
          if (onChange && (!(0, _dateUtil.isEqual)(generateConfig, (0, _miscUtil.getValue)(mergedValue.value, 0), startValue) || !(0, _dateUtil.isEqual)(generateConfig, (0, _miscUtil.getValue)(mergedValue.value, 1), endValue))) {
            onChange(values, [startStr, endStr]);
          }
        }
        // >>>>> Open picker when
        // Always open another picker if possible
        var nextOpenIndex = null;
        if (sourceIndex === 0 && !mergedDisabled.value[1]) {
          nextOpenIndex = 1;
        } else if (sourceIndex === 1 && !mergedDisabled.value[0]) {
          nextOpenIndex = 0;
        }
        if (nextOpenIndex !== null && nextOpenIndex !== mergedActivePickerIndex.value && (!openRecordsRef.value[nextOpenIndex] || !(0, _miscUtil.getValue)(values, nextOpenIndex)) && (0, _miscUtil.getValue)(values, sourceIndex)) {
          // Delay to focus to avoid input blur trigger expired selectedValues
          triggerOpenAndFocus(nextOpenIndex);
        } else {
          _triggerOpen(false, sourceIndex);
        }
      }
      var forwardKeydown = function forwardKeydown(e) {
        if (mergedOpen && operationRef.value && operationRef.value.onKeydown) {
          // Let popup panel handle keyboard
          return operationRef.value.onKeydown(e);
        }
        /* istanbul ignore next */
        /* eslint-disable no-lone-blocks */
        {
          (0, _warning.warning)(false, 'Picker not correct forward Keydown operation. Please help to fire issue about this.');
          return false;
        }
      };
      // ============================= Text ==============================
      var sharedTextHooksProps = {
        formatList: formatList,
        generateConfig: (0, _vue.toRef)(props, 'generateConfig'),
        locale: (0, _vue.toRef)(props, 'locale')
      };
      var _useValueTexts = (0, _useValueTexts5.default)((0, _vue.computed)(function () {
          return (0, _miscUtil.getValue)(selectedValue.value, 0);
        }), sharedTextHooksProps),
        _useValueTexts2 = (0, _slicedToArray2.default)(_useValueTexts, 2),
        startValueTexts = _useValueTexts2[0],
        firstStartValueText = _useValueTexts2[1];
      var _useValueTexts3 = (0, _useValueTexts5.default)((0, _vue.computed)(function () {
          return (0, _miscUtil.getValue)(selectedValue.value, 1);
        }), sharedTextHooksProps),
        _useValueTexts4 = (0, _slicedToArray2.default)(_useValueTexts3, 2),
        endValueTexts = _useValueTexts4[0],
        firstEndValueText = _useValueTexts4[1];
      var _onTextChange = function onTextChange(newText, index) {
        var inputDate = (0, _dateUtil.parseValue)(newText, {
          locale: props.locale,
          formatList: formatList.value,
          generateConfig: props.generateConfig
        });
        var disabledFunc = index === 0 ? disabledStartDate : disabledEndDate;
        if (inputDate && !disabledFunc(inputDate)) {
          setSelectedValue((0, _miscUtil.updateValues)(selectedValue.value, inputDate, index));
          setViewDate(inputDate, index);
        }
      };
      var _useTextValueMapping = (0, _useTextValueMapping5.default)({
          valueTexts: startValueTexts,
          onTextChange: function onTextChange(newText) {
            return _onTextChange(newText, 0);
          }
        }),
        _useTextValueMapping2 = (0, _slicedToArray2.default)(_useTextValueMapping, 3),
        startText = _useTextValueMapping2[0],
        triggerStartTextChange = _useTextValueMapping2[1],
        resetStartText = _useTextValueMapping2[2];
      var _useTextValueMapping3 = (0, _useTextValueMapping5.default)({
          valueTexts: endValueTexts,
          onTextChange: function onTextChange(newText) {
            return _onTextChange(newText, 1);
          }
        }),
        _useTextValueMapping4 = (0, _slicedToArray2.default)(_useTextValueMapping3, 3),
        endText = _useTextValueMapping4[0],
        triggerEndTextChange = _useTextValueMapping4[1],
        resetEndText = _useTextValueMapping4[2];
      var _useState = (0, _useState5.default)(null),
        _useState2 = (0, _slicedToArray2.default)(_useState, 2),
        rangeHoverValue = _useState2[0],
        setRangeHoverValue = _useState2[1];
      // ========================== Hover Range ==========================
      var _useState3 = (0, _useState5.default)(null),
        _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
        hoverRangedValue = _useState4[0],
        setHoverRangedValue = _useState4[1];
      var _useHoverValue = (0, _useHoverValue5.default)(startText, sharedTextHooksProps),
        _useHoverValue2 = (0, _slicedToArray2.default)(_useHoverValue, 3),
        startHoverValue = _useHoverValue2[0],
        onStartEnter = _useHoverValue2[1],
        onStartLeave = _useHoverValue2[2];
      var _useHoverValue3 = (0, _useHoverValue5.default)(endText, sharedTextHooksProps),
        _useHoverValue4 = (0, _slicedToArray2.default)(_useHoverValue3, 3),
        endHoverValue = _useHoverValue4[0],
        onEndEnter = _useHoverValue4[1],
        onEndLeave = _useHoverValue4[2];
      var onDateMouseenter = function onDateMouseenter(date) {
        setHoverRangedValue((0, _miscUtil.updateValues)(selectedValue.value, date, mergedActivePickerIndex.value));
        if (mergedActivePickerIndex.value === 0) {
          onStartEnter(date);
        } else {
          onEndEnter(date);
        }
      };
      var onDateMouseleave = function onDateMouseleave() {
        setHoverRangedValue((0, _miscUtil.updateValues)(selectedValue.value, null, mergedActivePickerIndex.value));
        if (mergedActivePickerIndex.value === 0) {
          onStartLeave();
        } else {
          onEndLeave();
        }
      };
      // ============================= Input =============================
      var getSharedInputHookProps = function getSharedInputHookProps(index, resetText) {
        return {
          forwardKeydown: forwardKeydown,
          onBlur: function onBlur(e) {
            var _props$onBlur;
            (_props$onBlur = props.onBlur) === null || _props$onBlur === void 0 ? void 0 : _props$onBlur.call(props, e);
          },
          isClickOutside: function isClickOutside(target) {
            return !(0, _uiUtil.elementsContains)([panelDivRef.value, startInputDivRef.value, endInputDivRef.value, containerRef.value], target);
          },
          onFocus: function onFocus(e) {
            var _props$onFocus;
            setMergedActivePickerIndex(index);
            (_props$onFocus = props.onFocus) === null || _props$onFocus === void 0 ? void 0 : _props$onFocus.call(props, e);
          },
          triggerOpen: function triggerOpen(newOpen) {
            _triggerOpen(newOpen, index);
          },
          onSubmit: function onSubmit() {
            if (
            // When user typing disabledDate with keyboard and enter, this value will be empty
            !selectedValue.value ||
            // Normal disabled check
            props.disabledDate && props.disabledDate(selectedValue.value[index])) {
              return false;
            }
            triggerChange(selectedValue.value, index);
            resetText();
          },
          onCancel: function onCancel() {
            _triggerOpen(false, index);
            setSelectedValue(mergedValue.value);
            resetText();
          }
        };
      };
      var _usePickerInput = (0, _usePickerInput5.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({}, getSharedInputHookProps(0, resetStartText)), {}, {
          blurToCancel: needConfirmButton,
          open: startOpen,
          value: startText,
          onKeydown: function onKeydown(e, preventDefault) {
            var _props$onKeydown;
            (_props$onKeydown = props.onKeydown) === null || _props$onKeydown === void 0 ? void 0 : _props$onKeydown.call(props, e, preventDefault);
          }
        })),
        _usePickerInput2 = (0, _slicedToArray2.default)(_usePickerInput, 2),
        startInputProps = _usePickerInput2[0],
        _usePickerInput2$ = _usePickerInput2[1],
        startFocused = _usePickerInput2$.focused,
        startTyping = _usePickerInput2$.typing;
      var _usePickerInput3 = (0, _usePickerInput5.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({}, getSharedInputHookProps(1, resetEndText)), {}, {
          blurToCancel: needConfirmButton,
          open: endOpen,
          value: endText,
          onKeydown: function onKeydown(e, preventDefault) {
            var _props$onKeydown2;
            (_props$onKeydown2 = props.onKeydown) === null || _props$onKeydown2 === void 0 ? void 0 : _props$onKeydown2.call(props, e, preventDefault);
          }
        })),
        _usePickerInput4 = (0, _slicedToArray2.default)(_usePickerInput3, 2),
        endInputProps = _usePickerInput4[0],
        _usePickerInput4$ = _usePickerInput4[1],
        endFocused = _usePickerInput4$.focused,
        endTyping = _usePickerInput4$.typing;
      // ========================== Click Picker ==========================
      var onPickerClick = function onPickerClick(e) {
        var _props$onClick;
        // When click inside the picker & outside the picker's input elements
        // the panel should still be opened
        (_props$onClick = props.onClick) === null || _props$onClick === void 0 ? void 0 : _props$onClick.call(props, e);
        if (!mergedOpen.value && !startInputRef.value.contains(e.target) && !endInputRef.value.contains(e.target)) {
          if (!mergedDisabled.value[0]) {
            triggerOpenAndFocus(0);
          } else if (!mergedDisabled.value[1]) {
            triggerOpenAndFocus(1);
          }
        }
      };
      var onPickerMousedown = function onPickerMousedown(e) {
        var _props$onMousedown;
        // shouldn't affect input elements if picker is active
        (_props$onMousedown = props.onMousedown) === null || _props$onMousedown === void 0 ? void 0 : _props$onMousedown.call(props, e);
        if (mergedOpen.value && (startFocused.value || endFocused.value) && !startInputRef.value.contains(e.target) && !endInputRef.value.contains(e.target)) {
          e.preventDefault();
        }
      };
      // ============================= Sync ==============================
      // Close should sync back with text value
      var startStr = (0, _vue.computed)(function () {
        var _mergedValue$value;
        return (_mergedValue$value = mergedValue.value) !== null && _mergedValue$value !== void 0 && _mergedValue$value[0] ? (0, _dateUtil.formatValue)(mergedValue.value[0], {
          locale: props.locale,
          format: 'YYYYMMDDHHmmss',
          generateConfig: props.generateConfig
        }) : '';
      });
      var endStr = (0, _vue.computed)(function () {
        var _mergedValue$value2;
        return (_mergedValue$value2 = mergedValue.value) !== null && _mergedValue$value2 !== void 0 && _mergedValue$value2[1] ? (0, _dateUtil.formatValue)(mergedValue.value[1], {
          locale: props.locale,
          format: 'YYYYMMDDHHmmss',
          generateConfig: props.generateConfig
        }) : '';
      });
      (0, _vue.watch)([mergedOpen, startValueTexts, endValueTexts], function () {
        if (!mergedOpen.value) {
          setSelectedValue(mergedValue.value);
          if (!startValueTexts.value.length || startValueTexts.value[0] === '') {
            triggerStartTextChange('');
          } else if (firstStartValueText.value !== startText.value) {
            resetStartText();
          }
          if (!endValueTexts.value.length || endValueTexts.value[0] === '') {
            triggerEndTextChange('');
          } else if (firstEndValueText.value !== endText.value) {
            resetEndText();
          }
        }
      });
      // Sync innerValue with control mode
      (0, _vue.watch)([startStr, endStr], function () {
        setSelectedValue(mergedValue.value);
      });
      // ============================ Warning ============================
      if (process.env.NODE_ENV !== 'production') {
        (0, _vue.watchEffect)(function () {
          var value = props.value,
            disabled = props.disabled;
          if (value && Array.isArray(disabled) && ((0, _miscUtil.getValue)(disabled, 0) && !(0, _miscUtil.getValue)(value, 0) || (0, _miscUtil.getValue)(disabled, 1) && !(0, _miscUtil.getValue)(value, 1))) {
            (0, _warning.warning)(false, '`disabled` should not set with empty `value`. You should set `allowEmpty` or `value` instead.');
          }
        });
      }
      expose({
        focus: function focus() {
          if (startInputRef.value) {
            startInputRef.value.focus();
          }
        },
        blur: function blur() {
          if (startInputRef.value) {
            startInputRef.value.blur();
          }
          if (endInputRef.value) {
            endInputRef.value.blur();
          }
        }
      });
      // ============================ Ranges =============================
      var rangeList = (0, _vue.computed)(function () {
        return Object.keys(props.ranges || {}).map(function (label) {
          var range = props.ranges[label];
          var newValues = typeof range === 'function' ? range() : range;
          return {
            label: label,
            onClick: function onClick() {
              triggerChange(newValues, null);
              _triggerOpen(false, mergedActivePickerIndex.value);
            },
            onMouseenter: function onMouseenter() {
              setRangeHoverValue(newValues);
            },
            onMouseleave: function onMouseleave() {
              setRangeHoverValue(null);
            }
          };
        });
      });
      // ============================= Panel =============================
      var panelHoverRangedValue = (0, _vue.computed)(function () {
        if (mergedOpen.value && hoverRangedValue.value && hoverRangedValue.value[0] && hoverRangedValue.value[1] && props.generateConfig.isAfter(hoverRangedValue.value[1], hoverRangedValue.value[0])) {
          return hoverRangedValue.value;
        } else {
          return null;
        }
      });
      function renderPanel() {
        var panelPosition = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var panelProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var generateConfig = props.generateConfig,
          showTime = props.showTime,
          dateRender = props.dateRender,
          direction = props.direction,
          _disabledTime = props.disabledTime,
          prefixCls = props.prefixCls,
          locale = props.locale;
        var panelShowTime = showTime;
        if (showTime && (0, _typeof2.default)(showTime) === 'object' && showTime.defaultValue) {
          var timeDefaultValues = showTime.defaultValue;
          panelShowTime = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, showTime), {}, {
            defaultValue: (0, _miscUtil.getValue)(timeDefaultValues, mergedActivePickerIndex.value) || undefined
          });
        }
        var panelDateRender = null;
        if (dateRender) {
          panelDateRender = function panelDateRender(_ref2) {
            var date = _ref2.current,
              today = _ref2.today;
            return dateRender({
              current: date,
              today: today,
              info: {
                range: mergedActivePickerIndex.value ? 'end' : 'start'
              }
            });
          };
        }
        return (0, _vue.createVNode)(_RangeContext.RangeContextProvider, {
          "value": {
            inRange: true,
            panelPosition: panelPosition,
            rangedValue: rangeHoverValue.value || selectedValue.value,
            hoverRangedValue: panelHoverRangedValue.value
          }
        }, {
          default: function _default() {
            return [(0, _vue.createVNode)(_PickerPanel.default, (0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({}, props), panelProps), {}, {
              "dateRender": panelDateRender,
              "showTime": panelShowTime,
              "mode": mergedModes.value[mergedActivePickerIndex.value],
              "generateConfig": generateConfig,
              "style": undefined,
              "direction": direction,
              "disabledDate": mergedActivePickerIndex.value === 0 ? disabledStartDate : disabledEndDate,
              "disabledTime": function disabledTime(date) {
                if (_disabledTime) {
                  return _disabledTime(date, mergedActivePickerIndex.value === 0 ? 'start' : 'end');
                }
                return false;
              },
              "class": (0, _classNames5.default)((0, _defineProperty2.default)({}, "".concat(prefixCls, "-panel-focused"), mergedActivePickerIndex.value === 0 ? !startTyping.value : !endTyping.value)),
              "value": (0, _miscUtil.getValue)(selectedValue.value, mergedActivePickerIndex.value),
              "locale": locale,
              "tabIndex": -1,
              "onPanelChange": function onPanelChange(date, newMode) {
                // clear hover value when panel change
                if (mergedActivePickerIndex.value === 0) {
                  onStartLeave(true);
                }
                if (mergedActivePickerIndex.value === 1) {
                  onEndLeave(true);
                }
                triggerModesChange((0, _miscUtil.updateValues)(mergedModes.value, newMode, mergedActivePickerIndex.value), (0, _miscUtil.updateValues)(selectedValue.value, date, mergedActivePickerIndex.value));
                var viewDate = date;
                if (panelPosition === 'right' && mergedModes.value[mergedActivePickerIndex.value] === newMode) {
                  viewDate = (0, _dateUtil.getClosingViewDate)(viewDate, newMode, generateConfig, -1);
                }
                setViewDate(viewDate, mergedActivePickerIndex.value);
              },
              "onOk": null,
              "onSelect": undefined,
              "onChange": undefined,
              "defaultValue": mergedActivePickerIndex.value === 0 ? (0, _miscUtil.getValue)(selectedValue.value, 1) : (0, _miscUtil.getValue)(selectedValue.value, 0)
            }), null)];
          }
        });
      }
      var onContextSelect = function onContextSelect(date, type) {
        var values = (0, _miscUtil.updateValues)(selectedValue.value, date, mergedActivePickerIndex.value);
        if (type === 'submit' || type !== 'key' && !needConfirmButton.value) {
          // triggerChange will also update selected values
          triggerChange(values, mergedActivePickerIndex.value);
          // clear hover value style
          if (mergedActivePickerIndex.value === 0) {
            onStartLeave();
          } else {
            onEndLeave();
          }
        } else {
          setSelectedValue(values);
        }
      };
      (0, _PanelContext.useProvidePanel)({
        operationRef: operationRef,
        hideHeader: (0, _vue.computed)(function () {
          return props.picker === 'time';
        }),
        onDateMouseenter: onDateMouseenter,
        onDateMouseleave: onDateMouseleave,
        hideRanges: (0, _vue.computed)(function () {
          return true;
        }),
        onSelect: onContextSelect,
        open: mergedOpen
      });
      return function () {
        var _classNames2, _classNames3, _classNames4;
        var _props$prefixCls = props.prefixCls,
          prefixCls = _props$prefixCls === void 0 ? 'rc-picker' : _props$prefixCls,
          id = props.id,
          popupStyle = props.popupStyle,
          dropdownClassName = props.dropdownClassName,
          transitionName = props.transitionName,
          dropdownAlign = props.dropdownAlign,
          getPopupContainer = props.getPopupContainer,
          generateConfig = props.generateConfig,
          locale = props.locale,
          placeholder = props.placeholder,
          autofocus = props.autofocus,
          _props$picker = props.picker,
          picker = _props$picker === void 0 ? 'date' : _props$picker,
          showTime = props.showTime,
          _props$separator = props.separator,
          separator = _props$separator === void 0 ? '~' : _props$separator,
          disabledDate = props.disabledDate,
          panelRender = props.panelRender,
          allowClear = props.allowClear,
          suffixIcon = props.suffixIcon,
          clearIcon = props.clearIcon,
          inputReadOnly = props.inputReadOnly,
          renderExtraFooter = props.renderExtraFooter,
          onMouseenter = props.onMouseenter,
          onMouseleave = props.onMouseleave,
          onMouseup = props.onMouseup,
          _onOk = props.onOk,
          components = props.components,
          direction = props.direction,
          _props$autocomplete = props.autocomplete,
          autocomplete = _props$autocomplete === void 0 ? 'off' : _props$autocomplete;
        var arrowPositionStyle = direction === 'rtl' ? {
          right: "".concat(arrowLeft.value, "px")
        } : {
          left: "".concat(arrowLeft.value, "px")
        };
        function renderPanels() {
          var panels;
          var extraNode = (0, _getExtraFooter.default)(prefixCls, mergedModes.value[mergedActivePickerIndex.value], renderExtraFooter);
          var rangesNode = (0, _getRanges.default)({
            prefixCls: prefixCls,
            components: components,
            needConfirmButton: needConfirmButton.value,
            okDisabled: !(0, _miscUtil.getValue)(selectedValue.value, mergedActivePickerIndex.value) || disabledDate && disabledDate(selectedValue.value[mergedActivePickerIndex.value]),
            locale: locale,
            rangeList: rangeList.value,
            onOk: function onOk() {
              if ((0, _miscUtil.getValue)(selectedValue.value, mergedActivePickerIndex.value)) {
                // triggerChangeOld(selectedValue.value);
                triggerChange(selectedValue.value, mergedActivePickerIndex.value);
                if (_onOk) {
                  _onOk(selectedValue.value);
                }
              }
            }
          });
          if (picker !== 'time' && !showTime) {
            var viewDate = mergedActivePickerIndex.value === 0 ? startViewDate.value : endViewDate.value;
            var nextViewDate = (0, _dateUtil.getClosingViewDate)(viewDate, picker, generateConfig);
            var currentMode = mergedModes.value[mergedActivePickerIndex.value];
            var showDoublePanel = currentMode === picker;
            var leftPanel = renderPanel(showDoublePanel ? 'left' : false, {
              pickerValue: viewDate,
              onPickerValueChange: function onPickerValueChange(newViewDate) {
                setViewDate(newViewDate, mergedActivePickerIndex.value);
              }
            });
            var rightPanel = renderPanel('right', {
              pickerValue: nextViewDate,
              onPickerValueChange: function onPickerValueChange(newViewDate) {
                setViewDate((0, _dateUtil.getClosingViewDate)(newViewDate, picker, generateConfig, -1), mergedActivePickerIndex.value);
              }
            });
            if (direction === 'rtl') {
              panels = (0, _vue.createVNode)(_vue.Fragment, null, [rightPanel, showDoublePanel && leftPanel]);
            } else {
              panels = (0, _vue.createVNode)(_vue.Fragment, null, [leftPanel, showDoublePanel && rightPanel]);
            }
          } else {
            panels = renderPanel();
          }
          var mergedNodes = (0, _vue.createVNode)(_vue.Fragment, null, [(0, _vue.createVNode)("div", {
            "class": "".concat(prefixCls, "-panels")
          }, [panels]), (extraNode || rangesNode) && (0, _vue.createVNode)("div", {
            "class": "".concat(prefixCls, "-footer")
          }, [extraNode, rangesNode])]);
          if (panelRender) {
            mergedNodes = panelRender(mergedNodes);
          }
          return (0, _vue.createVNode)("div", {
            "class": "".concat(prefixCls, "-panel-container"),
            "style": {
              marginLeft: "".concat(panelLeft.value, "px")
            },
            "ref": panelDivRef,
            "onMousedown": function onMousedown(e) {
              e.preventDefault();
            }
          }, [mergedNodes]);
        }
        var rangePanel = (0, _vue.createVNode)("div", {
          "class": (0, _classNames5.default)("".concat(prefixCls, "-range-wrapper"), "".concat(prefixCls, "-").concat(picker, "-range-wrapper")),
          "style": {
            minWidth: "".concat(popupMinWidth.value, "px")
          }
        }, [(0, _vue.createVNode)("div", {
          "ref": arrowRef,
          "class": "".concat(prefixCls, "-range-arrow"),
          "style": arrowPositionStyle
        }, null), renderPanels()]);
        // ============================= Icons =============================
        var suffixNode;
        if (suffixIcon) {
          suffixNode = (0, _vue.createVNode)("span", {
            "class": "".concat(prefixCls, "-suffix")
          }, [suffixIcon]);
        }
        var clearNode;
        if (allowClear && ((0, _miscUtil.getValue)(mergedValue.value, 0) && !mergedDisabled.value[0] || (0, _miscUtil.getValue)(mergedValue.value, 1) && !mergedDisabled.value[1])) {
          clearNode = (0, _vue.createVNode)("span", {
            "onMousedown": function onMousedown(e) {
              e.preventDefault();
              e.stopPropagation();
            },
            "onMouseup": function onMouseup(e) {
              e.preventDefault();
              e.stopPropagation();
              var values = mergedValue.value;
              if (!mergedDisabled.value[0]) {
                values = (0, _miscUtil.updateValues)(values, null, 0);
              }
              if (!mergedDisabled.value[1]) {
                values = (0, _miscUtil.updateValues)(values, null, 1);
              }
              triggerChange(values, null);
              _triggerOpen(false, mergedActivePickerIndex.value);
            },
            "class": "".concat(prefixCls, "-clear")
          }, [clearIcon || (0, _vue.createVNode)("span", {
            "class": "".concat(prefixCls, "-clear-btn")
          }, null)]);
        }
        var inputSharedProps = {
          size: (0, _uiUtil.getInputSize)(picker, formatList.value[0], generateConfig)
        };
        var activeBarLeft = 0;
        var activeBarWidth = 0;
        if (startInputDivRef.value && endInputDivRef.value && separatorRef.value) {
          if (mergedActivePickerIndex.value === 0) {
            activeBarWidth = startInputDivRef.value.offsetWidth;
          } else {
            activeBarLeft = arrowLeft.value;
            activeBarWidth = endInputDivRef.value.offsetWidth;
          }
        }
        var activeBarPositionStyle = direction === 'rtl' ? {
          right: "".concat(activeBarLeft, "px")
        } : {
          left: "".concat(activeBarLeft, "px")
        };
        // ============================ Return =============================
        return (0, _vue.createVNode)(_PickerTrigger.default, {
          "visible": mergedOpen.value,
          "popupStyle": popupStyle,
          "prefixCls": prefixCls,
          "dropdownClassName": dropdownClassName,
          "dropdownAlign": dropdownAlign,
          "getPopupContainer": getPopupContainer,
          "transitionName": transitionName,
          "range": true,
          "direction": direction
        }, {
          default: function _default() {
            return [(0, _vue.createVNode)("div", (0, _objectSpread2.default)({
              "ref": containerRef,
              "class": (0, _classNames5.default)(prefixCls, "".concat(prefixCls, "-range"), attrs.class, (_classNames2 = {}, (0, _defineProperty2.default)(_classNames2, "".concat(prefixCls, "-disabled"), mergedDisabled.value[0] && mergedDisabled.value[1]), (0, _defineProperty2.default)(_classNames2, "".concat(prefixCls, "-focused"), mergedActivePickerIndex.value === 0 ? startFocused.value : endFocused.value), (0, _defineProperty2.default)(_classNames2, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames2)),
              "style": attrs.style,
              "onClick": onPickerClick,
              "onMouseenter": onMouseenter,
              "onMouseleave": onMouseleave,
              "onMousedown": onPickerMousedown,
              "onMouseup": onMouseup
            }, (0, _miscUtil.default)(props)), [(0, _vue.createVNode)("div", {
              "class": (0, _classNames5.default)("".concat(prefixCls, "-input"), (_classNames3 = {}, (0, _defineProperty2.default)(_classNames3, "".concat(prefixCls, "-input-active"), mergedActivePickerIndex.value === 0), (0, _defineProperty2.default)(_classNames3, "".concat(prefixCls, "-input-placeholder"), !!startHoverValue.value), _classNames3)),
              "ref": startInputDivRef
            }, [(0, _vue.createVNode)("input", (0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({
              "id": id,
              "disabled": mergedDisabled.value[0],
              "readonly": inputReadOnly || typeof formatList.value[0] === 'function' || !startTyping.value,
              "value": startHoverValue.value || startText.value,
              "onInput": function onInput(e) {
                triggerStartTextChange(e.target.value);
              },
              "autofocus": autofocus,
              "placeholder": (0, _miscUtil.getValue)(placeholder, 0) || '',
              "ref": startInputRef
            }, startInputProps.value), inputSharedProps), {}, {
              "autocomplete": autocomplete
            }), null)]), (0, _vue.createVNode)("div", {
              "class": "".concat(prefixCls, "-range-separator"),
              "ref": separatorRef
            }, [separator]), (0, _vue.createVNode)("div", {
              "class": (0, _classNames5.default)("".concat(prefixCls, "-input"), (_classNames4 = {}, (0, _defineProperty2.default)(_classNames4, "".concat(prefixCls, "-input-active"), mergedActivePickerIndex.value === 1), (0, _defineProperty2.default)(_classNames4, "".concat(prefixCls, "-input-placeholder"), !!endHoverValue.value), _classNames4)),
              "ref": endInputDivRef
            }, [(0, _vue.createVNode)("input", (0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({
              "disabled": mergedDisabled.value[1],
              "readonly": inputReadOnly || typeof formatList.value[0] === 'function' || !endTyping.value,
              "value": endHoverValue.value || endText.value,
              "onInput": function onInput(e) {
                triggerEndTextChange(e.target.value);
              },
              "placeholder": (0, _miscUtil.getValue)(placeholder, 1) || '',
              "ref": endInputRef
            }, endInputProps.value), inputSharedProps), {}, {
              "autocomplete": autocomplete
            }), null)]), (0, _vue.createVNode)("div", {
              "class": "".concat(prefixCls, "-active-bar"),
              "style": (0, _objectSpread2.default)((0, _objectSpread2.default)({}, activeBarPositionStyle), {}, {
                width: "".concat(activeBarWidth, "px"),
                position: 'absolute'
              })
            }, null), suffixNode, clearNode, getPortal()])];
          },
          popupElement: function popupElement() {
            return rangePanel;
          }
        });
      };
    }
  });
}
var InterRangerPicker = RangerPicker();
var _default2 = InterRangerPicker;
exports.default = _default2;