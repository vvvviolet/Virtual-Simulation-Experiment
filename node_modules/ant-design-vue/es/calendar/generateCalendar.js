import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { createVNode as _createVNode } from "vue";
import useMergedState from '../_util/hooks/useMergedState';
import padStart from 'lodash-es/padStart';
import { PickerPanel } from '../vc-picker';
import { useLocaleReceiver } from '../locale-provider/LocaleReceiver';
import enUS from './locale/en_US';
import CalendarHeader from './Header';
import { computed, defineComponent, toRef } from 'vue';
import useConfigInject from '../_util/hooks/useConfigInject';
import classNames from '../_util/classNames';
function generateCalendar(generateConfig) {
  function isSameYear(date1, date2) {
    return date1 && date2 && generateConfig.getYear(date1) === generateConfig.getYear(date2);
  }
  function isSameMonth(date1, date2) {
    return isSameYear(date1, date2) && generateConfig.getMonth(date1) === generateConfig.getMonth(date2);
  }
  function isSameDate(date1, date2) {
    return isSameMonth(date1, date2) && generateConfig.getDate(date1) === generateConfig.getDate(date2);
  }
  var Calendar = defineComponent({
    name: 'ACalendar',
    inheritAttrs: false,
    props: ['prefixCls', 'locale', 'validRange', 'disabledDate', 'dateFullCellRender', 'dateCellRender', 'monthFullCellRender', 'monthCellRender', 'headerRender', 'value', 'defaultValue', 'mode', 'fullscreen', 'onChange', 'onPanelChange', 'onSelect', 'valueFormat'],
    slots: ['dateFullCellRender', 'dateCellRender', 'monthFullCellRender', 'monthCellRender', 'headerRender'],
    setup: function setup(props, _ref) {
      var emit = _ref.emit,
        slots = _ref.slots,
        attrs = _ref.attrs;
      var _useConfigInject = useConfigInject('picker', props),
        prefixCls = _useConfigInject.prefixCls,
        direction = _useConfigInject.direction;
      var calendarPrefixCls = computed(function () {
        return "".concat(prefixCls.value, "-calendar");
      });
      var maybeToString = function maybeToString(date) {
        return props.valueFormat ? generateConfig.toString(date, props.valueFormat) : date;
      };
      var value = computed(function () {
        if (props.value) {
          return props.valueFormat ? generateConfig.toDate(props.value, props.valueFormat) : props.value;
        }
        return props.value === '' ? undefined : props.value;
      });
      var defaultValue = computed(function () {
        if (props.defaultValue) {
          return props.valueFormat ? generateConfig.toDate(props.defaultValue, props.valueFormat) : props.defaultValue;
        }
        return props.defaultValue === '' ? undefined : props.defaultValue;
      });
      // Value
      var _useMergedState = useMergedState(function () {
          return value.value || generateConfig.getNow();
        }, {
          defaultValue: defaultValue.value,
          value: value
        }),
        _useMergedState2 = _slicedToArray(_useMergedState, 2),
        mergedValue = _useMergedState2[0],
        setMergedValue = _useMergedState2[1];
      // Mode
      var _useMergedState3 = useMergedState('month', {
          value: toRef(props, 'mode')
        }),
        _useMergedState4 = _slicedToArray(_useMergedState3, 2),
        mergedMode = _useMergedState4[0],
        setMergedMode = _useMergedState4[1];
      var panelMode = computed(function () {
        return mergedMode.value === 'year' ? 'month' : 'date';
      });
      var mergedDisabledDate = computed(function () {
        return function (date) {
          var _props$disabledDate;
          var notInRange = props.validRange ? generateConfig.isAfter(props.validRange[0], date) || generateConfig.isAfter(date, props.validRange[1]) : false;
          return notInRange || !!((_props$disabledDate = props.disabledDate) !== null && _props$disabledDate !== void 0 && _props$disabledDate.call(props, date));
        };
      });
      // ====================== Events ======================
      var triggerPanelChange = function triggerPanelChange(date, newMode) {
        emit('panelChange', maybeToString(date), newMode);
      };
      var triggerChange = function triggerChange(date) {
        setMergedValue(date);
        if (!isSameDate(date, mergedValue.value)) {
          // Trigger when month panel switch month
          if (panelMode.value === 'date' && !isSameMonth(date, mergedValue.value) || panelMode.value === 'month' && !isSameYear(date, mergedValue.value)) {
            triggerPanelChange(date, mergedMode.value);
          }
          var val = maybeToString(date);
          emit('update:value', val);
          emit('change', val);
        }
      };
      var triggerModeChange = function triggerModeChange(newMode) {
        setMergedMode(newMode);
        triggerPanelChange(mergedValue.value, newMode);
      };
      var onInternalSelect = function onInternalSelect(date) {
        triggerChange(date);
        emit('select', maybeToString(date));
      };
      // ====================== Locale ======================
      var defaultLocale = computed(function () {
        var locale = props.locale;
        var result = _objectSpread(_objectSpread({}, enUS), locale);
        result.lang = _objectSpread(_objectSpread({}, result.lang), (locale || {}).lang);
        return result;
      });
      var _useLocaleReceiver = useLocaleReceiver('Calendar', defaultLocale),
        _useLocaleReceiver2 = _slicedToArray(_useLocaleReceiver, 1),
        mergedLocale = _useLocaleReceiver2[0];
      return function () {
        var _classNames3;
        var today = generateConfig.getNow();
        var _props$dateFullCellRe = props.dateFullCellRender,
          dateFullCellRender = _props$dateFullCellRe === void 0 ? slots === null || slots === void 0 ? void 0 : slots.dateFullCellRender : _props$dateFullCellRe,
          _props$dateCellRender = props.dateCellRender,
          dateCellRender = _props$dateCellRender === void 0 ? slots === null || slots === void 0 ? void 0 : slots.dateCellRender : _props$dateCellRender,
          _props$monthFullCellR = props.monthFullCellRender,
          monthFullCellRender = _props$monthFullCellR === void 0 ? slots === null || slots === void 0 ? void 0 : slots.monthFullCellRender : _props$monthFullCellR,
          _props$monthCellRende = props.monthCellRender,
          monthCellRender = _props$monthCellRende === void 0 ? slots === null || slots === void 0 ? void 0 : slots.monthCellRender : _props$monthCellRende,
          _props$headerRender = props.headerRender,
          headerRender = _props$headerRender === void 0 ? slots === null || slots === void 0 ? void 0 : slots.headerRender : _props$headerRender,
          _props$fullscreen = props.fullscreen,
          fullscreen = _props$fullscreen === void 0 ? true : _props$fullscreen,
          validRange = props.validRange;
        // ====================== Render ======================
        var dateRender = function dateRender(_ref2) {
          var date = _ref2.current;
          if (dateFullCellRender) {
            return dateFullCellRender({
              current: date
            });
          }
          return _createVNode("div", {
            "class": classNames("".concat(prefixCls.value, "-cell-inner"), "".concat(calendarPrefixCls.value, "-date"), _defineProperty({}, "".concat(calendarPrefixCls.value, "-date-today"), isSameDate(today, date)))
          }, [_createVNode("div", {
            "class": "".concat(calendarPrefixCls.value, "-date-value")
          }, [padStart(String(generateConfig.getDate(date)), 2, '0')]), _createVNode("div", {
            "class": "".concat(calendarPrefixCls.value, "-date-content")
          }, [dateCellRender && dateCellRender({
            current: date
          })])]);
        };
        var monthRender = function monthRender(_ref3, locale) {
          var date = _ref3.current;
          if (monthFullCellRender) {
            return monthFullCellRender({
              current: date
            });
          }
          var months = locale.shortMonths || generateConfig.locale.getShortMonths(locale.locale);
          return _createVNode("div", {
            "class": classNames("".concat(prefixCls.value, "-cell-inner"), "".concat(calendarPrefixCls.value, "-date"), _defineProperty({}, "".concat(calendarPrefixCls.value, "-date-today"), isSameMonth(today, date)))
          }, [_createVNode("div", {
            "class": "".concat(calendarPrefixCls.value, "-date-value")
          }, [months[generateConfig.getMonth(date)]]), _createVNode("div", {
            "class": "".concat(calendarPrefixCls.value, "-date-content")
          }, [monthCellRender && monthCellRender({
            current: date
          })])]);
        };
        return _createVNode("div", _objectSpread(_objectSpread({}, attrs), {}, {
          "class": classNames(calendarPrefixCls.value, (_classNames3 = {}, _defineProperty(_classNames3, "".concat(calendarPrefixCls.value, "-full"), fullscreen), _defineProperty(_classNames3, "".concat(calendarPrefixCls.value, "-mini"), !fullscreen), _defineProperty(_classNames3, "".concat(calendarPrefixCls.value, "-rtl"), direction.value === 'rtl'), _classNames3), attrs.class)
        }), [headerRender ? headerRender({
          value: mergedValue.value,
          type: mergedMode.value,
          onChange: onInternalSelect,
          onTypeChange: triggerModeChange
        }) : _createVNode(CalendarHeader, {
          "prefixCls": calendarPrefixCls.value,
          "value": mergedValue.value,
          "generateConfig": generateConfig,
          "mode": mergedMode.value,
          "fullscreen": fullscreen,
          "locale": mergedLocale.value.lang,
          "validRange": validRange,
          "onChange": onInternalSelect,
          "onModeChange": triggerModeChange
        }, null), _createVNode(PickerPanel, {
          "value": mergedValue.value,
          "prefixCls": prefixCls.value,
          "locale": mergedLocale.value.lang,
          "generateConfig": generateConfig,
          "dateRender": dateRender,
          "monthCellRender": function monthCellRender(obj) {
            return monthRender(obj, mergedLocale.value.lang);
          },
          "onSelect": onInternalSelect,
          "mode": panelMode.value,
          "picker": panelMode.value,
          "disabledDate": mergedDisabledDate.value,
          "hideHeader": true
        }, null)]);
      };
    }
  });
  Calendar.install = function (app) {
    app.component(Calendar.name, Calendar);
    return app;
  };
  return Calendar;
}
export default generateCalendar;