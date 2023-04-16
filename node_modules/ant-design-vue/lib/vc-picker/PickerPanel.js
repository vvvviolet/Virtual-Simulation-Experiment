"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = require("vue");
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _TimePanel = _interopRequireDefault(require("./panels/TimePanel"));
var _DatetimePanel = _interopRequireDefault(require("./panels/DatetimePanel"));
var _DatePanel = _interopRequireDefault(require("./panels/DatePanel"));
var _WeekPanel = _interopRequireDefault(require("./panels/WeekPanel"));
var _MonthPanel = _interopRequireDefault(require("./panels/MonthPanel"));
var _QuarterPanel = _interopRequireDefault(require("./panels/QuarterPanel"));
var _YearPanel = _interopRequireDefault(require("./panels/YearPanel"));
var _DecadePanel = _interopRequireDefault(require("./panels/DecadePanel"));
var _dateUtil = require("./utils/dateUtil");
var _PanelContext = require("./PanelContext");
var _uiUtil = require("./utils/uiUtil");
var _RangeContext = require("./RangeContext");
var _getExtraFooter = _interopRequireDefault(require("./utils/getExtraFooter"));
var _getRanges = _interopRequireDefault(require("./utils/getRanges"));
var _timeUtil = require("./utils/timeUtil");
var _useMergedState7 = _interopRequireDefault(require("../_util/hooks/useMergedState"));
var _warning = require("../vc-util/warning");
var _KeyCode = _interopRequireDefault(require("../_util/KeyCode"));
var _classNames2 = _interopRequireDefault(require("../_util/classNames"));
function PickerPanel() {
  return (0, _vue.defineComponent)({
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
      var needConfirmButton = (0, _vue.computed)(function () {
        return props.picker === 'date' && !!props.showTime || props.picker === 'time';
      });
      var isHourStepValid = (0, _vue.computed)(function () {
        return 24 % props.hourStep === 0;
      });
      var isMinuteStepValid = (0, _vue.computed)(function () {
        return 60 % props.minuteStep === 0;
      });
      var isSecondStepValid = (0, _vue.computed)(function () {
        return 60 % props.secondStep === 0;
      });
      if (process.env.NODE_ENV !== 'production') {
        (0, _vue.watchEffect)(function () {
          var generateConfig = props.generateConfig,
            value = props.value,
            _props$hourStep = props.hourStep,
            hourStep = _props$hourStep === void 0 ? 1 : _props$hourStep,
            _props$minuteStep = props.minuteStep,
            minuteStep = _props$minuteStep === void 0 ? 1 : _props$minuteStep,
            _props$secondStep = props.secondStep,
            secondStep = _props$secondStep === void 0 ? 1 : _props$secondStep;
          (0, _warning.warning)(!value || generateConfig.isValidate(value), 'Invalidate date pass to `value`.');
          (0, _warning.warning)(!value || generateConfig.isValidate(value), 'Invalidate date pass to `defaultValue`.');
          (0, _warning.warning)(isHourStepValid.value, "`hourStep` ".concat(hourStep, " is invalid. It should be a factor of 24."));
          (0, _warning.warning)(isMinuteStepValid.value, "`minuteStep` ".concat(minuteStep, " is invalid. It should be a factor of 60."));
          (0, _warning.warning)(isSecondStepValid.value, "`secondStep` ".concat(secondStep, " is invalid. It should be a factor of 60."));
        });
      }
      var panelContext = (0, _PanelContext.useInjectPanel)();
      var operationRef = panelContext.operationRef,
        panelDivRef = panelContext.panelRef,
        onContextSelect = panelContext.onSelect,
        hideRanges = panelContext.hideRanges,
        defaultOpenValue = panelContext.defaultOpenValue;
      var _useInjectRange = (0, _RangeContext.useInjectRange)(),
        inRange = _useInjectRange.inRange,
        panelPosition = _useInjectRange.panelPosition,
        rangedValue = _useInjectRange.rangedValue,
        hoverRangedValue = _useInjectRange.hoverRangedValue;
      var panelRef = (0, _vue.ref)({});
      // Value
      var _useMergedState = (0, _useMergedState7.default)(null, {
          value: (0, _vue.toRef)(props, 'value'),
          defaultValue: props.defaultValue,
          postState: function postState(val) {
            if (!val && defaultOpenValue !== null && defaultOpenValue !== void 0 && defaultOpenValue.value && props.picker === 'time') {
              return defaultOpenValue.value;
            }
            return val;
          }
        }),
        _useMergedState2 = (0, _slicedToArray2.default)(_useMergedState, 2),
        mergedValue = _useMergedState2[0],
        setInnerValue = _useMergedState2[1];
      // View date control
      var _useMergedState3 = (0, _useMergedState7.default)(null, {
          value: (0, _vue.toRef)(props, 'pickerValue'),
          defaultValue: props.defaultPickerValue || mergedValue.value,
          postState: function postState(date) {
            var generateConfig = props.generateConfig,
              showTime = props.showTime,
              defaultValue = props.defaultValue;
            var now = generateConfig.getNow();
            if (!date) return now;
            // When value is null and set showTime
            if (!mergedValue.value && props.showTime) {
              if ((0, _typeof2.default)(showTime) === 'object') {
                return (0, _timeUtil.setDateTime)(generateConfig, Array.isArray(date) ? date[0] : date, showTime.defaultValue || now);
              }
              if (defaultValue) {
                return (0, _timeUtil.setDateTime)(generateConfig, Array.isArray(date) ? date[0] : date, defaultValue);
              }
              return (0, _timeUtil.setDateTime)(generateConfig, Array.isArray(date) ? date[0] : date, now);
            }
            return date;
          }
        }),
        _useMergedState4 = (0, _slicedToArray2.default)(_useMergedState3, 2),
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
        var getNextMode = _uiUtil.PickerModeMap[props.picker];
        if (getNextMode) {
          return getNextMode(nextMode);
        }
        return nextMode;
      };
      // Save panel is changed from which panel
      var _useMergedState5 = (0, _useMergedState7.default)(function () {
          if (props.picker === 'time') {
            return 'time';
          }
          return getInternalNextMode('date');
        }, {
          value: (0, _vue.toRef)(props, 'mode')
        }),
        _useMergedState6 = (0, _slicedToArray2.default)(_useMergedState5, 2),
        mergedMode = _useMergedState6[0],
        setInnerMode = _useMergedState6[1];
      (0, _vue.watch)(function () {
        return props.picker;
      }, function () {
        setInnerMode(props.picker);
      });
      var sourceMode = (0, _vue.ref)(mergedMode.value);
      var setSourceMode = function setSourceMode(val) {
        sourceMode.value = val;
      };
      var onInternalPanelChange = function onInternalPanelChange(newMode, viewValue) {
        var onPanelChange = props.onPanelChange,
          generateConfig = props.generateConfig;
        var nextMode = getInternalNextMode(newMode || mergedMode.value);
        setSourceMode(mergedMode.value);
        setInnerMode(nextMode);
        if (onPanelChange && (mergedMode.value !== nextMode || (0, _dateUtil.isEqual)(generateConfig, viewDate.value, viewDate.value))) {
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
          if (onChange && !(0, _dateUtil.isEqual)(generateConfig, date, mergedValue.value) && !(disabledDate !== null && disabledDate !== void 0 && disabledDate(date))) {
            onChange(date);
          }
        }
      };
      // ========================= Interactive ==========================
      var onInternalKeydown = function onInternalKeydown(e) {
        if (panelRef.value && panelRef.value.onKeydown) {
          if ([_KeyCode.default.LEFT, _KeyCode.default.RIGHT, _KeyCode.default.UP, _KeyCode.default.DOWN, _KeyCode.default.PAGE_UP, _KeyCode.default.PAGE_DOWN, _KeyCode.default.ENTER].includes(e.which)) {
            e.preventDefault();
          }
          return panelRef.value.onKeydown(e);
        }
        /* istanbul ignore next */
        /* eslint-disable no-lone-blocks */
        {
          (0, _warning.warning)(false, 'Panel not correct handle keyDown event. Please help to fire issue about this.');
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
        var lowerBoundTime = (0, _timeUtil.getLowerBoundTime)(generateConfig.getHour(now), generateConfig.getMinute(now), generateConfig.getSecond(now), isHourStepValid.value ? hourStep : 1, isMinuteStepValid.value ? minuteStep : 1, isSecondStepValid.value ? secondStep : 1);
        var adjustedNow = (0, _timeUtil.setTime)(generateConfig, now, lowerBoundTime[0],
        // hour
        lowerBoundTime[1],
        // minute
        lowerBoundTime[2]);
        triggerSelect(adjustedNow, 'submit');
      };
      var classString = (0, _vue.computed)(function () {
        var _classNames;
        var prefixCls = props.prefixCls,
          direction = props.direction;
        return (0, _classNames2.default)("".concat(prefixCls, "-panel"), (_classNames = {}, (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-panel-has-range"), rangedValue && rangedValue.value && rangedValue.value[0] && rangedValue.value[1]), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-panel-has-range-hover"), hoverRangedValue && hoverRangedValue.value && hoverRangedValue.value[0] && hoverRangedValue.value[1]), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-panel-rtl"), direction === 'rtl'), _classNames));
      });
      (0, _PanelContext.useProvidePanel)((0, _objectSpread2.default)((0, _objectSpread2.default)({}, panelContext), {}, {
        mode: mergedMode,
        hideHeader: (0, _vue.computed)(function () {
          var _panelContext$hideHea;
          return props.hideHeader !== undefined ? props.hideHeader : (_panelContext$hideHea = panelContext.hideHeader) === null || _panelContext$hideHea === void 0 ? void 0 : _panelContext$hideHea.value;
        }),
        hidePrevBtn: (0, _vue.computed)(function () {
          return inRange.value && panelPosition.value === 'right';
        }),
        hideNextBtn: (0, _vue.computed)(function () {
          return inRange.value && panelPosition.value === 'left';
        })
      }));
      (0, _vue.watch)(function () {
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
        var pickerProps = (0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({}, attrs), props), {}, {
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
            panelNode = (0, _vue.createVNode)(_DecadePanel.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, pickerProps), {}, {
              "onSelect": function onSelect(date, type) {
                setViewDate(date);
                triggerSelect(date, type);
              }
            }), null);
            break;
          case 'year':
            panelNode = (0, _vue.createVNode)(_YearPanel.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, pickerProps), {}, {
              "onSelect": function onSelect(date, type) {
                setViewDate(date);
                triggerSelect(date, type);
              }
            }), null);
            break;
          case 'month':
            panelNode = (0, _vue.createVNode)(_MonthPanel.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, pickerProps), {}, {
              "onSelect": function onSelect(date, type) {
                setViewDate(date);
                triggerSelect(date, type);
              }
            }), null);
            break;
          case 'quarter':
            panelNode = (0, _vue.createVNode)(_QuarterPanel.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, pickerProps), {}, {
              "onSelect": function onSelect(date, type) {
                setViewDate(date);
                triggerSelect(date, type);
              }
            }), null);
            break;
          case 'week':
            panelNode = (0, _vue.createVNode)(_WeekPanel.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, pickerProps), {}, {
              "onSelect": function onSelect(date, type) {
                setViewDate(date);
                triggerSelect(date, type);
              }
            }), null);
            break;
          case 'time':
            delete pickerProps.showTime;
            panelNode = (0, _vue.createVNode)(_TimePanel.default, (0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({}, pickerProps), (0, _typeof2.default)(showTime) === 'object' ? showTime : null), {}, {
              "onSelect": function onSelect(date, type) {
                setViewDate(date);
                triggerSelect(date, type);
              }
            }), null);
            break;
          default:
            if (showTime) {
              panelNode = (0, _vue.createVNode)(_DatetimePanel.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, pickerProps), {}, {
                "onSelect": function onSelect(date, type) {
                  setViewDate(date);
                  triggerSelect(date, type);
                }
              }), null);
            } else {
              panelNode = (0, _vue.createVNode)(_DatePanel.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, pickerProps), {}, {
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
          extraFooter = (0, _getExtraFooter.default)(prefixCls, mergedMode.value, renderExtraFooter);
          rangesNode = (0, _getRanges.default)({
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
          todayNode = (0, _vue.createVNode)("a", {
            "class": (0, _classNames2.default)(todayCls, disabled && "".concat(todayCls, "-disabled")),
            "aria-disabled": disabled,
            "onClick": function onClick() {
              if (!disabled) {
                triggerSelect(now, 'mouse', true);
              }
            }
          }, [locale.today]);
        }
        return (0, _vue.createVNode)("div", {
          "tabindex": tabindex,
          "class": (0, _classNames2.default)(classString.value, attrs.class),
          "style": attrs.style,
          "onKeydown": onInternalKeydown,
          "onBlur": onInternalBlur,
          "onMousedown": onMousedown,
          "ref": panelDivRef
        }, [panelNode, extraFooter || rangesNode || todayNode ? (0, _vue.createVNode)("div", {
          "class": "".concat(prefixCls, "-footer")
        }, [extraFooter, rangesNode, todayNode]) : null]);
      };
    }
  });
}
var InterPickerPanel = PickerPanel();
var _default = function _default(props) {
  return (0, _vue.createVNode)(InterPickerPanel, props);
};
exports.default = _default;