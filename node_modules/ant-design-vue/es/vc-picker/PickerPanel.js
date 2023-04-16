import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _typeof from "@babel/runtime/helpers/esm/typeof";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { createVNode as _createVNode } from "vue";
import TimePanel from './panels/TimePanel';
import DatetimePanel from './panels/DatetimePanel';
import DatePanel from './panels/DatePanel';
import WeekPanel from './panels/WeekPanel';
import MonthPanel from './panels/MonthPanel';
import QuarterPanel from './panels/QuarterPanel';
import YearPanel from './panels/YearPanel';
import DecadePanel from './panels/DecadePanel';
import { isEqual } from './utils/dateUtil';
import { useInjectPanel, useProvidePanel } from './PanelContext';
import { PickerModeMap } from './utils/uiUtil';
import { useInjectRange } from './RangeContext';
import getExtraFooter from './utils/getExtraFooter';
import getRanges from './utils/getRanges';
import { getLowerBoundTime, setDateTime, setTime } from './utils/timeUtil';
import { computed, createVNode, defineComponent, ref, toRef, watch, watchEffect } from 'vue';
import useMergedState from '../_util/hooks/useMergedState';
import { warning } from '../vc-util/warning';
import KeyCode from '../_util/KeyCode';
import classNames from '../_util/classNames';
function PickerPanel() {
  return defineComponent({
    name: 'PickerPanel',
    inheritAttrs: false,
    props: {
      prefixCls: String,
      locale: Object,
      generateConfig: Object,
      value: Object,
      defaultValue: Object,
      pickerValue: Object,
      defaultPickerValue: Object,
      disabledDate: Function,
      mode: String,
      picker: {
        type: String,
        default: 'date'
      },
      tabindex: {
        type: [Number, String],
        default: 0
      },
      showNow: {
        type: Boolean,
        default: undefined
      },
      showTime: [Boolean, Object],
      showToday: Boolean,
      renderExtraFooter: Function,
      dateRender: Function,
      hideHeader: {
        type: Boolean,
        default: undefined
      },
      onSelect: Function,
      onChange: Function,
      onPanelChange: Function,
      onMousedown: Function,
      onPickerValueChange: Function,
      onOk: Function,
      components: Object,
      direction: String,
      hourStep: {
        type: Number,
        default: 1
      },
      minuteStep: {
        type: Number,
        default: 1
      },
      secondStep: {
        type: Number,
        default: 1
      }
    },
    setup: function setup(props, _ref) {
      var attrs = _ref.attrs;
      var needConfirmButton = computed(function () {
        return props.picker === 'date' && !!props.showTime || props.picker === 'time';
      });
      var isHourStepValid = computed(function () {
        return 24 % props.hourStep === 0;
      });
      var isMinuteStepValid = computed(function () {
        return 60 % props.minuteStep === 0;
      });
      var isSecondStepValid = computed(function () {
        return 60 % props.secondStep === 0;
      });
      if (process.env.NODE_ENV !== 'production') {
        watchEffect(function () {
          var generateConfig = props.generateConfig,
            value = props.value,
            _props$hourStep = props.hourStep,
            hourStep = _props$hourStep === void 0 ? 1 : _props$hourStep,
            _props$minuteStep = props.minuteStep,
            minuteStep = _props$minuteStep === void 0 ? 1 : _props$minuteStep,
            _props$secondStep = props.secondStep,
            secondStep = _props$secondStep === void 0 ? 1 : _props$secondStep;
          warning(!value || generateConfig.isValidate(value), 'Invalidate date pass to `value`.');
          warning(!value || generateConfig.isValidate(value), 'Invalidate date pass to `defaultValue`.');
          warning(isHourStepValid.value, "`hourStep` ".concat(hourStep, " is invalid. It should be a factor of 24."));
          warning(isMinuteStepValid.value, "`minuteStep` ".concat(minuteStep, " is invalid. It should be a factor of 60."));
          warning(isSecondStepValid.value, "`secondStep` ".concat(secondStep, " is invalid. It should be a factor of 60."));
        });
      }
      var panelContext = useInjectPanel();
      var operationRef = panelContext.operationRef,
        panelDivRef = panelContext.panelRef,
        onContextSelect = panelContext.onSelect,
        hideRanges = panelContext.hideRanges,
        defaultOpenValue = panelContext.defaultOpenValue;
      var _useInjectRange = useInjectRange(),
        inRange = _useInjectRange.inRange,
        panelPosition = _useInjectRange.panelPosition,
        rangedValue = _useInjectRange.rangedValue,
        hoverRangedValue = _useInjectRange.hoverRangedValue;
      var panelRef = ref({});
      // Value
      var _useMergedState = useMergedState(null, {
          value: toRef(props, 'value'),
          defaultValue: props.defaultValue,
          postState: function postState(val) {
            if (!val && defaultOpenValue !== null && defaultOpenValue !== void 0 && defaultOpenValue.value && props.picker === 'time') {
              return defaultOpenValue.value;
            }
            return val;
          }
        }),
        _useMergedState2 = _slicedToArray(_useMergedState, 2),
        mergedValue = _useMergedState2[0],
        setInnerValue = _useMergedState2[1];
      // View date control
      var _useMergedState3 = useMergedState(null, {
          value: toRef(props, 'pickerValue'),
          defaultValue: props.defaultPickerValue || mergedValue.value,
          postState: function postState(date) {
            var generateConfig = props.generateConfig,
              showTime = props.showTime,
              defaultValue = props.defaultValue;
            var now = generateConfig.getNow();
            if (!date) return now;
            // When value is null and set showTime
            if (!mergedValue.value && props.showTime) {
              if (_typeof(showTime) === 'object') {
                return setDateTime(generateConfig, Array.isArray(date) ? date[0] : date, showTime.defaultValue || now);
              }
              if (defaultValue) {
                return setDateTime(generateConfig, Array.isArray(date) ? date[0] : date, defaultValue);
              }
              return setDateTime(generateConfig, Array.isArray(date) ? date[0] : date, now);
            }
            return date;
          }
        }),
        _useMergedState4 = _slicedToArray(_useMergedState3, 2),
        viewDate = _useMergedState4[0],
        setInnerViewDate = _useMergedState4[1];
      var setViewDate = function setViewDate(date) {
        setInnerViewDate(date);
        if (props.onPickerValueChange) {
          props.onPickerValueChange(date);
        }
      };
      // Panel control
      var getInternalNextMode = function getInternalNextMode(nextMode) {
        var getNextMode = PickerModeMap[props.picker];
        if (getNextMode) {
          return getNextMode(nextMode);
        }
        return nextMode;
      };
      // Save panel is changed from which panel
      var _useMergedState5 = useMergedState(function () {
          if (props.picker === 'time') {
            return 'time';
          }
          return getInternalNextMode('date');
        }, {
          value: toRef(props, 'mode')
        }),
        _useMergedState6 = _slicedToArray(_useMergedState5, 2),
        mergedMode = _useMergedState6[0],
        setInnerMode = _useMergedState6[1];
      watch(function () {
        return props.picker;
      }, function () {
        setInnerMode(props.picker);
      });
      var sourceMode = ref(mergedMode.value);
      var setSourceMode = function setSourceMode(val) {
        sourceMode.value = val;
      };
      var onInternalPanelChange = function onInternalPanelChange(newMode, viewValue) {
        var onPanelChange = props.onPanelChange,
          generateConfig = props.generateConfig;
        var nextMode = getInternalNextMode(newMode || mergedMode.value);
        setSourceMode(mergedMode.value);
        setInnerMode(nextMode);
        if (onPanelChange && (mergedMode.value !== nextMode || isEqual(generateConfig, viewDate.value, viewDate.value))) {
          onPanelChange(viewValue, nextMode);
        }
      };
      var triggerSelect = function triggerSelect(date, type) {
        var forceTriggerSelect = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var picker = props.picker,
          generateConfig = props.generateConfig,
          onSelect = props.onSelect,
          onChange = props.onChange,
          disabledDate = props.disabledDate;
        if (mergedMode.value === picker || forceTriggerSelect) {
          setInnerValue(date);
          if (onSelect) {
            onSelect(date);
          }
          if (onContextSelect) {
            onContextSelect(date, type);
          }
          if (onChange && !isEqual(generateConfig, date, mergedValue.value) && !(disabledDate !== null && disabledDate !== void 0 && disabledDate(date))) {
            onChange(date);
          }
        }
      };
      // ========================= Interactive ==========================
      var onInternalKeydown = function onInternalKeydown(e) {
        if (panelRef.value && panelRef.value.onKeydown) {
          if ([KeyCode.LEFT, KeyCode.RIGHT, KeyCode.UP, KeyCode.DOWN, KeyCode.PAGE_UP, KeyCode.PAGE_DOWN, KeyCode.ENTER].includes(e.which)) {
            e.preventDefault();
          }
          return panelRef.value.onKeydown(e);
        }
        /* istanbul ignore next */
        /* eslint-disable no-lone-blocks */
        {
          warning(false, 'Panel not correct handle keyDown event. Please help to fire issue about this.');
          return false;
        }
        /* eslint-enable no-lone-blocks */
      };

      var onInternalBlur = function onInternalBlur(e) {
        if (panelRef.value && panelRef.value.onBlur) {
          panelRef.value.onBlur(e);
        }
      };
      var onNow = function onNow() {
        var generateConfig = props.generateConfig,
          hourStep = props.hourStep,
          minuteStep = props.minuteStep,
          secondStep = props.secondStep;
        var now = generateConfig.getNow();
        var lowerBoundTime = getLowerBoundTime(generateConfig.getHour(now), generateConfig.getMinute(now), generateConfig.getSecond(now), isHourStepValid.value ? hourStep : 1, isMinuteStepValid.value ? minuteStep : 1, isSecondStepValid.value ? secondStep : 1);
        var adjustedNow = setTime(generateConfig, now, lowerBoundTime[0],
        // hour
        lowerBoundTime[1],
        // minute
        lowerBoundTime[2]);
        triggerSelect(adjustedNow, 'submit');
      };
      var classString = computed(function () {
        var _classNames;
        var prefixCls = props.prefixCls,
          direction = props.direction;
        return classNames("".concat(prefixCls, "-panel"), (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-panel-has-range"), rangedValue && rangedValue.value && rangedValue.value[0] && rangedValue.value[1]), _defineProperty(_classNames, "".concat(prefixCls, "-panel-has-range-hover"), hoverRangedValue && hoverRangedValue.value && hoverRangedValue.value[0] && hoverRangedValue.value[1]), _defineProperty(_classNames, "".concat(prefixCls, "-panel-rtl"), direction === 'rtl'), _classNames));
      });
      useProvidePanel(_objectSpread(_objectSpread({}, panelContext), {}, {
        mode: mergedMode,
        hideHeader: computed(function () {
          var _panelContext$hideHea;
          return props.hideHeader !== undefined ? props.hideHeader : (_panelContext$hideHea = panelContext.hideHeader) === null || _panelContext$hideHea === void 0 ? void 0 : _panelContext$hideHea.value;
        }),
        hidePrevBtn: computed(function () {
          return inRange.value && panelPosition.value === 'right';
        }),
        hideNextBtn: computed(function () {
          return inRange.value && panelPosition.value === 'left';
        })
      }));
      watch(function () {
        return props.value;
      }, function () {
        if (props.value) {
          setInnerViewDate(props.value);
        }
      });
      return function () {
        var _props$prefixCls = props.prefixCls,
          prefixCls = _props$prefixCls === void 0 ? 'ant-picker' : _props$prefixCls,
          locale = props.locale,
          generateConfig = props.generateConfig,
          disabledDate = props.disabledDate,
          _props$picker = props.picker,
          picker = _props$picker === void 0 ? 'date' : _props$picker,
          _props$tabindex = props.tabindex,
          tabindex = _props$tabindex === void 0 ? 0 : _props$tabindex,
          showNow = props.showNow,
          showTime = props.showTime,
          showToday = props.showToday,
          renderExtraFooter = props.renderExtraFooter,
          onMousedown = props.onMousedown,
          _onOk = props.onOk,
          components = props.components;
        if (operationRef && panelPosition.value !== 'right') {
          operationRef.value = {
            onKeydown: onInternalKeydown,
            onClose: function onClose() {
              if (panelRef.value && panelRef.value.onClose) {
                panelRef.value.onClose();
              }
            }
          };
        }
        // ============================ Panels ============================
        var panelNode;
        var pickerProps = _objectSpread(_objectSpread(_objectSpread({}, attrs), props), {}, {
          operationRef: panelRef,
          prefixCls: prefixCls,
          viewDate: viewDate.value,
          value: mergedValue.value,
          onViewDateChange: setViewDate,
          sourceMode: sourceMode.value,
          onPanelChange: onInternalPanelChange,
          disabledDate: disabledDate
        });
        delete pickerProps.onChange;
        delete pickerProps.onSelect;
        switch (mergedMode.value) {
          case 'decade':
            panelNode = _createVNode(DecadePanel, _objectSpread(_objectSpread({}, pickerProps), {}, {
              "onSelect": function onSelect(date, type) {
                setViewDate(date);
                triggerSelect(date, type);
              }
            }), null);
            break;
          case 'year':
            panelNode = _createVNode(YearPanel, _objectSpread(_objectSpread({}, pickerProps), {}, {
              "onSelect": function onSelect(date, type) {
                setViewDate(date);
                triggerSelect(date, type);
              }
            }), null);
            break;
          case 'month':
            panelNode = _createVNode(MonthPanel, _objectSpread(_objectSpread({}, pickerProps), {}, {
              "onSelect": function onSelect(date, type) {
                setViewDate(date);
                triggerSelect(date, type);
              }
            }), null);
            break;
          case 'quarter':
            panelNode = _createVNode(QuarterPanel, _objectSpread(_objectSpread({}, pickerProps), {}, {
              "onSelect": function onSelect(date, type) {
                setViewDate(date);
                triggerSelect(date, type);
              }
            }), null);
            break;
          case 'week':
            panelNode = _createVNode(WeekPanel, _objectSpread(_objectSpread({}, pickerProps), {}, {
              "onSelect": function onSelect(date, type) {
                setViewDate(date);
                triggerSelect(date, type);
              }
            }), null);
            break;
          case 'time':
            delete pickerProps.showTime;
            panelNode = _createVNode(TimePanel, _objectSpread(_objectSpread(_objectSpread({}, pickerProps), _typeof(showTime) === 'object' ? showTime : null), {}, {
              "onSelect": function onSelect(date, type) {
                setViewDate(date);
                triggerSelect(date, type);
              }
            }), null);
            break;
          default:
            if (showTime) {
              panelNode = _createVNode(DatetimePanel, _objectSpread(_objectSpread({}, pickerProps), {}, {
                "onSelect": function onSelect(date, type) {
                  setViewDate(date);
                  triggerSelect(date, type);
                }
              }), null);
            } else {
              panelNode = _createVNode(DatePanel, _objectSpread(_objectSpread({}, pickerProps), {}, {
                "onSelect": function onSelect(date, type) {
                  setViewDate(date);
                  triggerSelect(date, type);
                }
              }), null);
            }
        }
        // ============================ Footer ============================
        var extraFooter;
        var rangesNode;
        if (!(hideRanges !== null && hideRanges !== void 0 && hideRanges.value)) {
          extraFooter = getExtraFooter(prefixCls, mergedMode.value, renderExtraFooter);
          rangesNode = getRanges({
            prefixCls: prefixCls,
            components: components,
            needConfirmButton: needConfirmButton.value,
            okDisabled: !mergedValue.value || disabledDate && disabledDate(mergedValue.value),
            locale: locale,
            showNow: showNow,
            onNow: needConfirmButton.value && onNow,
            onOk: function onOk() {
              if (mergedValue.value) {
                triggerSelect(mergedValue.value, 'submit', true);
                if (_onOk) {
                  _onOk(mergedValue.value);
                }
              }
            }
          });
        }
        var todayNode;
        if (showToday && mergedMode.value === 'date' && picker === 'date' && !showTime) {
          var now = generateConfig.getNow();
          var todayCls = "".concat(prefixCls, "-today-btn");
          var disabled = disabledDate && disabledDate(now);
          todayNode = _createVNode("a", {
            "class": classNames(todayCls, disabled && "".concat(todayCls, "-disabled")),
            "aria-disabled": disabled,
            "onClick": function onClick() {
              if (!disabled) {
                triggerSelect(now, 'mouse', true);
              }
            }
          }, [locale.today]);
        }
        return _createVNode("div", {
          "tabindex": tabindex,
          "class": classNames(classString.value, attrs.class),
          "style": attrs.style,
          "onKeydown": onInternalKeydown,
          "onBlur": onInternalBlur,
          "onMousedown": onMousedown,
          "ref": panelDivRef
        }, [panelNode, extraFooter || rangesNode || todayNode ? _createVNode("div", {
          "class": "".concat(prefixCls, "-footer")
        }, [extraFooter, rangesNode, todayNode]) : null]);
      };
    }
  });
}
var InterPickerPanel = PickerPanel();
export default (function (props) {
  return createVNode(InterPickerPanel, props);
});