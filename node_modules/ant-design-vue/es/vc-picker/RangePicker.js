import _typeof from "@babel/runtime/helpers/esm/typeof";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { resolveDirective as _resolveDirective, Fragment as _Fragment, createVNode as _createVNode } from "vue";
import PickerTrigger from './PickerTrigger';
import PickerPanel from './PickerPanel';
import usePickerInput from './hooks/usePickerInput';
import getDataOrAriaProps, { toArray, getValue, updateValues } from './utils/miscUtil';
import { getDefaultFormat, getInputSize, elementsContains } from './utils/uiUtil';
import { useProvidePanel } from './PanelContext';
import { isEqual, getClosingViewDate, isSameDate, isSameWeek, isSameQuarter, formatValue, parseValue } from './utils/dateUtil';
import useValueTexts from './hooks/useValueTexts';
import useTextValueMapping from './hooks/useTextValueMapping';
import { RangeContextProvider } from './RangeContext';
import useRangeDisabled from './hooks/useRangeDisabled';
import getExtraFooter from './utils/getExtraFooter';
import getRanges from './utils/getRanges';
import useRangeViewDates from './hooks/useRangeViewDates';
import useHoverValue from './hooks/useHoverValue';
import { computed, defineComponent, ref, toRef, watch, watchEffect } from 'vue';
import useMergedState from '../_util/hooks/useMergedState';
import { warning } from '../vc-util/warning';
import useState from '../_util/hooks/useState';
import classNames from '../_util/classNames';
import { useProviderTrigger } from '../vc-trigger/context';
import { legacyPropsWarning } from './utils/warnUtil';
import { useElementSize } from '../_util/hooks/_vueuse/useElementSize';
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
  return defineComponent({
    name: 'RangerPicker',
    inheritAttrs: false,
    props: ['prefixCls', 'id', 'popupStyle', 'dropdownClassName', 'transitionName', 'dropdownAlign', 'getPopupContainer', 'generateConfig', 'locale', 'placeholder', 'autofocus', 'disabled', 'format', 'picker', 'showTime', 'showNow', 'showHour', 'showMinute', 'showSecond', 'use12Hours', 'separator', 'value', 'defaultValue', 'defaultPickerValue', 'open', 'defaultOpen', 'disabledDate', 'disabledTime', 'dateRender', 'panelRender', 'ranges', 'allowEmpty', 'allowClear', 'suffixIcon', 'clearIcon', 'pickerRef', 'inputReadOnly', 'mode', 'renderExtraFooter', 'onChange', 'onOpenChange', 'onPanelChange', 'onCalendarChange', 'onFocus', 'onBlur', 'onMousedown', 'onMouseup', 'onMouseenter', 'onMouseleave', 'onClick', 'onOk', 'onKeydown', 'components', 'order', 'direction', 'activePickerIndex', 'autocomplete', 'minuteStep', 'hourStep', 'secondStep', 'hideDisabledOptions', 'disabledMinutes'],
    setup: function setup(props, _ref) {
      var attrs = _ref.attrs,
        expose = _ref.expose;
      var needConfirmButton = computed(function () {
        return props.picker === 'date' && !!props.showTime || props.picker === 'time';
      });
      var getPortal = useProviderTrigger();
      // We record opened status here in case repeat open with picker
      var openRecordsRef = ref({});
      var containerRef = ref(null);
      var panelDivRef = ref(null);
      var startInputDivRef = ref(null);
      var endInputDivRef = ref(null);
      var separatorRef = ref(null);
      var startInputRef = ref(null);
      var endInputRef = ref(null);
      var arrowRef = ref(null);
      // ============================ Warning ============================
      if (process.env.NODE_ENV !== 'production') {
        legacyPropsWarning(props);
      }
      // ============================= Misc ==============================
      var formatList = computed(function () {
        return toArray(getDefaultFormat(props.format, props.picker, props.showTime, props.use12Hours));
      });
      // Active picker
      var _useMergedState = useMergedState(0, {
          value: toRef(props, 'activePickerIndex')
        }),
        _useMergedState2 = _slicedToArray(_useMergedState, 2),
        mergedActivePickerIndex = _useMergedState2[0],
        setMergedActivePickerIndex = _useMergedState2[1];
      // Operation ref
      var operationRef = ref(null);
      var mergedDisabled = computed(function () {
        var disabled = props.disabled;
        if (Array.isArray(disabled)) {
          return disabled;
        }
        return [disabled || false, disabled || false];
      });
      // ============================= Value =============================
      var _useMergedState3 = useMergedState(null, {
          value: toRef(props, 'value'),
          defaultValue: props.defaultValue,
          postState: function postState(values) {
            return props.picker === 'time' && !props.order ? values : reorderValues(values, props.generateConfig);
          }
        }),
        _useMergedState4 = _slicedToArray(_useMergedState3, 2),
        mergedValue = _useMergedState4[0],
        setInnerValue = _useMergedState4[1];
      // =========================== View Date ===========================
      // Config view panel
      var _useRangeViewDates = useRangeViewDates({
          values: mergedValue,
          picker: toRef(props, 'picker'),
          defaultDates: props.defaultPickerValue,
          generateConfig: toRef(props, 'generateConfig')
        }),
        _useRangeViewDates2 = _slicedToArray(_useRangeViewDates, 3),
        startViewDate = _useRangeViewDates2[0],
        endViewDate = _useRangeViewDates2[1],
        setViewDate = _useRangeViewDates2[2];
      // ========================= Select Values =========================
      var _useMergedState5 = useMergedState(mergedValue.value, {
          postState: function postState(values) {
            var postValues = values;
            if (mergedDisabled.value[0] && mergedDisabled.value[1]) {
              return postValues;
            }
            // Fill disabled unit
            for (var i = 0; i < 2; i += 1) {
              if (mergedDisabled[i] && !getValue(postValues, i) && !getValue(props.allowEmpty, i)) {
                postValues = updateValues(postValues, props.generateConfig.getNow(), i);
              }
            }
            return postValues;
          }
        }),
        _useMergedState6 = _slicedToArray(_useMergedState5, 2),
        selectedValue = _useMergedState6[0],
        setSelectedValue = _useMergedState6[1];
      // ============================= Modes =============================
      var _useMergedState7 = useMergedState([props.picker, props.picker], {
          value: toRef(props, 'mode')
        }),
        _useMergedState8 = _slicedToArray(_useMergedState7, 2),
        mergedModes = _useMergedState8[0],
        setInnerModes = _useMergedState8[1];
      watch(function () {
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
      var _useRangeDisabled = useRangeDisabled({
          picker: toRef(props, 'picker'),
          selectedValue: selectedValue,
          locale: toRef(props, 'locale'),
          disabled: mergedDisabled,
          disabledDate: toRef(props, 'disabledDate'),
          generateConfig: toRef(props, 'generateConfig')
        }, openRecordsRef),
        _useRangeDisabled2 = _slicedToArray(_useRangeDisabled, 2),
        disabledStartDate = _useRangeDisabled2[0],
        disabledEndDate = _useRangeDisabled2[1];
      // ============================= Open ==============================
      var _useMergedState9 = useMergedState(false, {
          value: toRef(props, 'open'),
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
        _useMergedState10 = _slicedToArray(_useMergedState9, 2),
        mergedOpen = _useMergedState10[0],
        triggerInnerOpen = _useMergedState10[1];
      var startOpen = computed(function () {
        return mergedOpen.value && mergedActivePickerIndex.value === 0;
      });
      var endOpen = computed(function () {
        return mergedOpen.value && mergedActivePickerIndex.value === 1;
      });
      var panelLeft = ref(0);
      var arrowLeft = ref(0);
      // ============================= Popup =============================
      // Popup min width
      var popupMinWidth = ref(0);
      var _useElementSize = useElementSize(containerRef),
        containerWidth = _useElementSize.width;
      watch([mergedOpen, containerWidth], function () {
        if (!mergedOpen.value && containerRef.value) {
          popupMinWidth.value = containerWidth.value;
        }
      });
      var _useElementSize2 = useElementSize(panelDivRef),
        panelDivWidth = _useElementSize2.width;
      var _useElementSize3 = useElementSize(arrowRef),
        arrowWidth = _useElementSize3.width;
      var _useElementSize4 = useElementSize(startInputDivRef),
        startInputDivWidth = _useElementSize4.width;
      var _useElementSize5 = useElementSize(separatorRef),
        separatorWidth = _useElementSize5.width;
      watch([mergedActivePickerIndex, mergedOpen, panelDivWidth, arrowWidth, startInputDivWidth, separatorWidth, function () {
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
      var triggerRef = ref();
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
        var startValue = getValue(values, 0);
        var endValue = getValue(values, 1);
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
          picker === 'week' && !isSameWeek(generateConfig, locale.locale, startValue, endValue) ||
          // QuotaPicker only compare week
          picker === 'quarter' && !isSameQuarter(generateConfig, startValue, endValue) ||
          // Other non-TimePicker compare date
          picker !== 'week' && picker !== 'quarter' && picker !== 'time' && !(showTime ? isEqual(generateConfig, startValue, endValue) : isSameDate(generateConfig, startValue, endValue))) {
            // Clean up end date when start date is after end date
            if (sourceIndex === 0) {
              values = [startValue, null];
              endValue = null;
            } else {
              startValue = null;
              values = [null, endValue];
            }
            // Clean up cache since invalidate
            openRecordsRef.value = _defineProperty({}, sourceIndex, true);
          } else if (picker !== 'time' || order !== false) {
            // Reorder when in same date
            values = reorderValues(values, generateConfig);
          }
        }
        setSelectedValue(values);
        var startStr = values && values[0] ? formatValue(values[0], {
          generateConfig: generateConfig,
          locale: locale,
          format: formatList.value[0]
        }) : '';
        var endStr = values && values[1] ? formatValue(values[1], {
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
          if (onChange && (!isEqual(generateConfig, getValue(mergedValue.value, 0), startValue) || !isEqual(generateConfig, getValue(mergedValue.value, 1), endValue))) {
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
        if (nextOpenIndex !== null && nextOpenIndex !== mergedActivePickerIndex.value && (!openRecordsRef.value[nextOpenIndex] || !getValue(values, nextOpenIndex)) && getValue(values, sourceIndex)) {
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
          warning(false, 'Picker not correct forward Keydown operation. Please help to fire issue about this.');
          return false;
        }
      };
      // ============================= Text ==============================
      var sharedTextHooksProps = {
        formatList: formatList,
        generateConfig: toRef(props, 'generateConfig'),
        locale: toRef(props, 'locale')
      };
      var _useValueTexts = useValueTexts(computed(function () {
          return getValue(selectedValue.value, 0);
        }), sharedTextHooksProps),
        _useValueTexts2 = _slicedToArray(_useValueTexts, 2),
        startValueTexts = _useValueTexts2[0],
        firstStartValueText = _useValueTexts2[1];
      var _useValueTexts3 = useValueTexts(computed(function () {
          return getValue(selectedValue.value, 1);
        }), sharedTextHooksProps),
        _useValueTexts4 = _slicedToArray(_useValueTexts3, 2),
        endValueTexts = _useValueTexts4[0],
        firstEndValueText = _useValueTexts4[1];
      var _onTextChange = function onTextChange(newText, index) {
        var inputDate = parseValue(newText, {
          locale: props.locale,
          formatList: formatList.value,
          generateConfig: props.generateConfig
        });
        var disabledFunc = index === 0 ? disabledStartDate : disabledEndDate;
        if (inputDate && !disabledFunc(inputDate)) {
          setSelectedValue(updateValues(selectedValue.value, inputDate, index));
          setViewDate(inputDate, index);
        }
      };
      var _useTextValueMapping = useTextValueMapping({
          valueTexts: startValueTexts,
          onTextChange: function onTextChange(newText) {
            return _onTextChange(newText, 0);
          }
        }),
        _useTextValueMapping2 = _slicedToArray(_useTextValueMapping, 3),
        startText = _useTextValueMapping2[0],
        triggerStartTextChange = _useTextValueMapping2[1],
        resetStartText = _useTextValueMapping2[2];
      var _useTextValueMapping3 = useTextValueMapping({
          valueTexts: endValueTexts,
          onTextChange: function onTextChange(newText) {
            return _onTextChange(newText, 1);
          }
        }),
        _useTextValueMapping4 = _slicedToArray(_useTextValueMapping3, 3),
        endText = _useTextValueMapping4[0],
        triggerEndTextChange = _useTextValueMapping4[1],
        resetEndText = _useTextValueMapping4[2];
      var _useState = useState(null),
        _useState2 = _slicedToArray(_useState, 2),
        rangeHoverValue = _useState2[0],
        setRangeHoverValue = _useState2[1];
      // ========================== Hover Range ==========================
      var _useState3 = useState(null),
        _useState4 = _slicedToArray(_useState3, 2),
        hoverRangedValue = _useState4[0],
        setHoverRangedValue = _useState4[1];
      var _useHoverValue = useHoverValue(startText, sharedTextHooksProps),
        _useHoverValue2 = _slicedToArray(_useHoverValue, 3),
        startHoverValue = _useHoverValue2[0],
        onStartEnter = _useHoverValue2[1],
        onStartLeave = _useHoverValue2[2];
      var _useHoverValue3 = useHoverValue(endText, sharedTextHooksProps),
        _useHoverValue4 = _slicedToArray(_useHoverValue3, 3),
        endHoverValue = _useHoverValue4[0],
        onEndEnter = _useHoverValue4[1],
        onEndLeave = _useHoverValue4[2];
      var onDateMouseenter = function onDateMouseenter(date) {
        setHoverRangedValue(updateValues(selectedValue.value, date, mergedActivePickerIndex.value));
        if (mergedActivePickerIndex.value === 0) {
          onStartEnter(date);
        } else {
          onEndEnter(date);
        }
      };
      var onDateMouseleave = function onDateMouseleave() {
        setHoverRangedValue(updateValues(selectedValue.value, null, mergedActivePickerIndex.value));
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
            return !elementsContains([panelDivRef.value, startInputDivRef.value, endInputDivRef.value, containerRef.value], target);
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
      var _usePickerInput = usePickerInput(_objectSpread(_objectSpread({}, getSharedInputHookProps(0, resetStartText)), {}, {
          blurToCancel: needConfirmButton,
          open: startOpen,
          value: startText,
          onKeydown: function onKeydown(e, preventDefault) {
            var _props$onKeydown;
            (_props$onKeydown = props.onKeydown) === null || _props$onKeydown === void 0 ? void 0 : _props$onKeydown.call(props, e, preventDefault);
          }
        })),
        _usePickerInput2 = _slicedToArray(_usePickerInput, 2),
        startInputProps = _usePickerInput2[0],
        _usePickerInput2$ = _usePickerInput2[1],
        startFocused = _usePickerInput2$.focused,
        startTyping = _usePickerInput2$.typing;
      var _usePickerInput3 = usePickerInput(_objectSpread(_objectSpread({}, getSharedInputHookProps(1, resetEndText)), {}, {
          blurToCancel: needConfirmButton,
          open: endOpen,
          value: endText,
          onKeydown: function onKeydown(e, preventDefault) {
            var _props$onKeydown2;
            (_props$onKeydown2 = props.onKeydown) === null || _props$onKeydown2 === void 0 ? void 0 : _props$onKeydown2.call(props, e, preventDefault);
          }
        })),
        _usePickerInput4 = _slicedToArray(_usePickerInput3, 2),
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
      var startStr = computed(function () {
        var _mergedValue$value;
        return (_mergedValue$value = mergedValue.value) !== null && _mergedValue$value !== void 0 && _mergedValue$value[0] ? formatValue(mergedValue.value[0], {
          locale: props.locale,
          format: 'YYYYMMDDHHmmss',
          generateConfig: props.generateConfig
        }) : '';
      });
      var endStr = computed(function () {
        var _mergedValue$value2;
        return (_mergedValue$value2 = mergedValue.value) !== null && _mergedValue$value2 !== void 0 && _mergedValue$value2[1] ? formatValue(mergedValue.value[1], {
          locale: props.locale,
          format: 'YYYYMMDDHHmmss',
          generateConfig: props.generateConfig
        }) : '';
      });
      watch([mergedOpen, startValueTexts, endValueTexts], function () {
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
      watch([startStr, endStr], function () {
        setSelectedValue(mergedValue.value);
      });
      // ============================ Warning ============================
      if (process.env.NODE_ENV !== 'production') {
        watchEffect(function () {
          var value = props.value,
            disabled = props.disabled;
          if (value && Array.isArray(disabled) && (getValue(disabled, 0) && !getValue(value, 0) || getValue(disabled, 1) && !getValue(value, 1))) {
            warning(false, '`disabled` should not set with empty `value`. You should set `allowEmpty` or `value` instead.');
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
      var rangeList = computed(function () {
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
      var panelHoverRangedValue = computed(function () {
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
        if (showTime && _typeof(showTime) === 'object' && showTime.defaultValue) {
          var timeDefaultValues = showTime.defaultValue;
          panelShowTime = _objectSpread(_objectSpread({}, showTime), {}, {
            defaultValue: getValue(timeDefaultValues, mergedActivePickerIndex.value) || undefined
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
        return _createVNode(RangeContextProvider, {
          "value": {
            inRange: true,
            panelPosition: panelPosition,
            rangedValue: rangeHoverValue.value || selectedValue.value,
            hoverRangedValue: panelHoverRangedValue.value
          }
        }, {
          default: function _default() {
            return [_createVNode(PickerPanel, _objectSpread(_objectSpread(_objectSpread({}, props), panelProps), {}, {
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
              "class": classNames(_defineProperty({}, "".concat(prefixCls, "-panel-focused"), mergedActivePickerIndex.value === 0 ? !startTyping.value : !endTyping.value)),
              "value": getValue(selectedValue.value, mergedActivePickerIndex.value),
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
                triggerModesChange(updateValues(mergedModes.value, newMode, mergedActivePickerIndex.value), updateValues(selectedValue.value, date, mergedActivePickerIndex.value));
                var viewDate = date;
                if (panelPosition === 'right' && mergedModes.value[mergedActivePickerIndex.value] === newMode) {
                  viewDate = getClosingViewDate(viewDate, newMode, generateConfig, -1);
                }
                setViewDate(viewDate, mergedActivePickerIndex.value);
              },
              "onOk": null,
              "onSelect": undefined,
              "onChange": undefined,
              "defaultValue": mergedActivePickerIndex.value === 0 ? getValue(selectedValue.value, 1) : getValue(selectedValue.value, 0)
            }), null)];
          }
        });
      }
      var onContextSelect = function onContextSelect(date, type) {
        var values = updateValues(selectedValue.value, date, mergedActivePickerIndex.value);
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
      useProvidePanel({
        operationRef: operationRef,
        hideHeader: computed(function () {
          return props.picker === 'time';
        }),
        onDateMouseenter: onDateMouseenter,
        onDateMouseleave: onDateMouseleave,
        hideRanges: computed(function () {
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
          var extraNode = getExtraFooter(prefixCls, mergedModes.value[mergedActivePickerIndex.value], renderExtraFooter);
          var rangesNode = getRanges({
            prefixCls: prefixCls,
            components: components,
            needConfirmButton: needConfirmButton.value,
            okDisabled: !getValue(selectedValue.value, mergedActivePickerIndex.value) || disabledDate && disabledDate(selectedValue.value[mergedActivePickerIndex.value]),
            locale: locale,
            rangeList: rangeList.value,
            onOk: function onOk() {
              if (getValue(selectedValue.value, mergedActivePickerIndex.value)) {
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
            var nextViewDate = getClosingViewDate(viewDate, picker, generateConfig);
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
                setViewDate(getClosingViewDate(newViewDate, picker, generateConfig, -1), mergedActivePickerIndex.value);
              }
            });
            if (direction === 'rtl') {
              panels = _createVNode(_Fragment, null, [rightPanel, showDoublePanel && leftPanel]);
            } else {
              panels = _createVNode(_Fragment, null, [leftPanel, showDoublePanel && rightPanel]);
            }
          } else {
            panels = renderPanel();
          }
          var mergedNodes = _createVNode(_Fragment, null, [_createVNode("div", {
            "class": "".concat(prefixCls, "-panels")
          }, [panels]), (extraNode || rangesNode) && _createVNode("div", {
            "class": "".concat(prefixCls, "-footer")
          }, [extraNode, rangesNode])]);
          if (panelRender) {
            mergedNodes = panelRender(mergedNodes);
          }
          return _createVNode("div", {
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
        var rangePanel = _createVNode("div", {
          "class": classNames("".concat(prefixCls, "-range-wrapper"), "".concat(prefixCls, "-").concat(picker, "-range-wrapper")),
          "style": {
            minWidth: "".concat(popupMinWidth.value, "px")
          }
        }, [_createVNode("div", {
          "ref": arrowRef,
          "class": "".concat(prefixCls, "-range-arrow"),
          "style": arrowPositionStyle
        }, null), renderPanels()]);
        // ============================= Icons =============================
        var suffixNode;
        if (suffixIcon) {
          suffixNode = _createVNode("span", {
            "class": "".concat(prefixCls, "-suffix")
          }, [suffixIcon]);
        }
        var clearNode;
        if (allowClear && (getValue(mergedValue.value, 0) && !mergedDisabled.value[0] || getValue(mergedValue.value, 1) && !mergedDisabled.value[1])) {
          clearNode = _createVNode("span", {
            "onMousedown": function onMousedown(e) {
              e.preventDefault();
              e.stopPropagation();
            },
            "onMouseup": function onMouseup(e) {
              e.preventDefault();
              e.stopPropagation();
              var values = mergedValue.value;
              if (!mergedDisabled.value[0]) {
                values = updateValues(values, null, 0);
              }
              if (!mergedDisabled.value[1]) {
                values = updateValues(values, null, 1);
              }
              triggerChange(values, null);
              _triggerOpen(false, mergedActivePickerIndex.value);
            },
            "class": "".concat(prefixCls, "-clear")
          }, [clearIcon || _createVNode("span", {
            "class": "".concat(prefixCls, "-clear-btn")
          }, null)]);
        }
        var inputSharedProps = {
          size: getInputSize(picker, formatList.value[0], generateConfig)
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
        return _createVNode(PickerTrigger, {
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
            return [_createVNode("div", _objectSpread({
              "ref": containerRef,
              "class": classNames(prefixCls, "".concat(prefixCls, "-range"), attrs.class, (_classNames2 = {}, _defineProperty(_classNames2, "".concat(prefixCls, "-disabled"), mergedDisabled.value[0] && mergedDisabled.value[1]), _defineProperty(_classNames2, "".concat(prefixCls, "-focused"), mergedActivePickerIndex.value === 0 ? startFocused.value : endFocused.value), _defineProperty(_classNames2, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames2)),
              "style": attrs.style,
              "onClick": onPickerClick,
              "onMouseenter": onMouseenter,
              "onMouseleave": onMouseleave,
              "onMousedown": onPickerMousedown,
              "onMouseup": onMouseup
            }, getDataOrAriaProps(props)), [_createVNode("div", {
              "class": classNames("".concat(prefixCls, "-input"), (_classNames3 = {}, _defineProperty(_classNames3, "".concat(prefixCls, "-input-active"), mergedActivePickerIndex.value === 0), _defineProperty(_classNames3, "".concat(prefixCls, "-input-placeholder"), !!startHoverValue.value), _classNames3)),
              "ref": startInputDivRef
            }, [_createVNode("input", _objectSpread(_objectSpread(_objectSpread({
              "id": id,
              "disabled": mergedDisabled.value[0],
              "readonly": inputReadOnly || typeof formatList.value[0] === 'function' || !startTyping.value,
              "value": startHoverValue.value || startText.value,
              "onInput": function onInput(e) {
                triggerStartTextChange(e.target.value);
              },
              "autofocus": autofocus,
              "placeholder": getValue(placeholder, 0) || '',
              "ref": startInputRef
            }, startInputProps.value), inputSharedProps), {}, {
              "autocomplete": autocomplete
            }), null)]), _createVNode("div", {
              "class": "".concat(prefixCls, "-range-separator"),
              "ref": separatorRef
            }, [separator]), _createVNode("div", {
              "class": classNames("".concat(prefixCls, "-input"), (_classNames4 = {}, _defineProperty(_classNames4, "".concat(prefixCls, "-input-active"), mergedActivePickerIndex.value === 1), _defineProperty(_classNames4, "".concat(prefixCls, "-input-placeholder"), !!endHoverValue.value), _classNames4)),
              "ref": endInputDivRef
            }, [_createVNode("input", _objectSpread(_objectSpread(_objectSpread({
              "disabled": mergedDisabled.value[1],
              "readonly": inputReadOnly || typeof formatList.value[0] === 'function' || !endTyping.value,
              "value": endHoverValue.value || endText.value,
              "onInput": function onInput(e) {
                triggerEndTextChange(e.target.value);
              },
              "placeholder": getValue(placeholder, 1) || '',
              "ref": endInputRef
            }, endInputProps.value), inputSharedProps), {}, {
              "autocomplete": autocomplete
            }), null)]), _createVNode("div", {
              "class": "".concat(prefixCls, "-active-bar"),
              "style": _objectSpread(_objectSpread({}, activeBarPositionStyle), {}, {
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
export default InterRangerPicker;