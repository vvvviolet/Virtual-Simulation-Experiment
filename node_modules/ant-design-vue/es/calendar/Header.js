import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { createVNode as _createVNode } from "vue";
import Select from '../select';
import { Group, Button } from '../radio';
import { defineComponent, ref } from 'vue';
var YearSelectOffset = 10;
var YearSelectTotal = 20;
function YearSelect(props) {
  var fullscreen = props.fullscreen,
    validRange = props.validRange,
    generateConfig = props.generateConfig,
    locale = props.locale,
    prefixCls = props.prefixCls,
    value = props.value,
    _onChange = props.onChange,
    divRef = props.divRef;
  var year = generateConfig.getYear(value || generateConfig.getNow());
  var start = year - YearSelectOffset;
  var end = start + YearSelectTotal;
  if (validRange) {
    start = generateConfig.getYear(validRange[0]);
    end = generateConfig.getYear(validRange[1]) + 1;
  }
  var suffix = locale && locale.year === '年' ? '年' : '';
  var options = [];
  for (var index = start; index < end; index++) {
    options.push({
      label: "".concat(index).concat(suffix),
      value: index
    });
  }
  return _createVNode(Select, {
    "size": fullscreen ? undefined : 'small',
    "options": options,
    "value": year,
    "class": "".concat(prefixCls, "-year-select"),
    "onChange": function onChange(numYear) {
      var newDate = generateConfig.setYear(value, numYear);
      if (validRange) {
        var _validRange = _slicedToArray(validRange, 2),
          startDate = _validRange[0],
          endDate = _validRange[1];
        var newYear = generateConfig.getYear(newDate);
        var newMonth = generateConfig.getMonth(newDate);
        if (newYear === generateConfig.getYear(endDate) && newMonth > generateConfig.getMonth(endDate)) {
          newDate = generateConfig.setMonth(newDate, generateConfig.getMonth(endDate));
        }
        if (newYear === generateConfig.getYear(startDate) && newMonth < generateConfig.getMonth(startDate)) {
          newDate = generateConfig.setMonth(newDate, generateConfig.getMonth(startDate));
        }
      }
      _onChange(newDate);
    },
    "getPopupContainer": function getPopupContainer() {
      return divRef.value;
    }
  }, null);
}
YearSelect.inheritAttrs = false;
function MonthSelect(props) {
  var prefixCls = props.prefixCls,
    fullscreen = props.fullscreen,
    validRange = props.validRange,
    value = props.value,
    generateConfig = props.generateConfig,
    locale = props.locale,
    _onChange2 = props.onChange,
    divRef = props.divRef;
  var month = generateConfig.getMonth(value || generateConfig.getNow());
  var start = 0;
  var end = 11;
  if (validRange) {
    var _validRange2 = _slicedToArray(validRange, 2),
      rangeStart = _validRange2[0],
      rangeEnd = _validRange2[1];
    var currentYear = generateConfig.getYear(value);
    if (generateConfig.getYear(rangeEnd) === currentYear) {
      end = generateConfig.getMonth(rangeEnd);
    }
    if (generateConfig.getYear(rangeStart) === currentYear) {
      start = generateConfig.getMonth(rangeStart);
    }
  }
  var months = locale.shortMonths || generateConfig.locale.getShortMonths(locale.locale);
  var options = [];
  for (var index = start; index <= end; index += 1) {
    options.push({
      label: months[index],
      value: index
    });
  }
  return _createVNode(Select, {
    "size": fullscreen ? undefined : 'small',
    "class": "".concat(prefixCls, "-month-select"),
    "value": month,
    "options": options,
    "onChange": function onChange(newMonth) {
      _onChange2(generateConfig.setMonth(value, newMonth));
    },
    "getPopupContainer": function getPopupContainer() {
      return divRef.value;
    }
  }, null);
}
MonthSelect.inheritAttrs = false;
function ModeSwitch(props) {
  var prefixCls = props.prefixCls,
    locale = props.locale,
    mode = props.mode,
    fullscreen = props.fullscreen,
    onModeChange = props.onModeChange;
  return _createVNode(Group, {
    "onChange": function onChange(_ref) {
      var value = _ref.target.value;
      onModeChange(value);
    },
    "value": mode,
    "size": fullscreen ? undefined : 'small',
    "class": "".concat(prefixCls, "-mode-switch")
  }, {
    default: function _default() {
      return [_createVNode(Button, {
        "value": "month"
      }, {
        default: function _default() {
          return [locale.month];
        }
      }), _createVNode(Button, {
        "value": "year"
      }, {
        default: function _default() {
          return [locale.year];
        }
      })];
    }
  });
}
ModeSwitch.inheritAttrs = false;
export default defineComponent({
  name: 'CalendarHeader',
  inheritAttrs: false,
  props: ['mode', 'prefixCls', 'value', 'validRange', 'generateConfig', 'locale', 'mode', 'fullscreen'],
  setup: function setup(_props, _ref2) {
    var attrs = _ref2.attrs;
    var divRef = ref(null);
    return function () {
      var props = _objectSpread(_objectSpread({}, _props), attrs);
      var prefixCls = props.prefixCls,
        fullscreen = props.fullscreen,
        mode = props.mode,
        onChange = props.onChange,
        onModeChange = props.onModeChange;
      var sharedProps = _objectSpread(_objectSpread({}, props), {}, {
        onChange: onChange,
        fullscreen: fullscreen,
        divRef: divRef
      });
      return _createVNode("div", {
        "class": "".concat(prefixCls, "-header"),
        "ref": divRef
      }, [_createVNode(YearSelect, sharedProps, null), mode === 'month' && _createVNode(MonthSelect, sharedProps, null), _createVNode(ModeSwitch, _objectSpread(_objectSpread({}, sharedProps), {}, {
        "onModeChange": onModeChange
      }), null)]);
    };
  }
});