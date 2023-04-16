"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = require("vue");
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _select = _interopRequireDefault(require("../select"));
var _radio = require("../radio");
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
  return (0, _vue.createVNode)(_select.default, {
    "size": fullscreen ? undefined : 'small',
    "options": options,
    "value": year,
    "class": "".concat(prefixCls, "-year-select"),
    "onChange": function onChange(numYear) {
      var newDate = generateConfig.setYear(value, numYear);
      if (validRange) {
        var _validRange = (0, _slicedToArray2.default)(validRange, 2),
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
    var _validRange2 = (0, _slicedToArray2.default)(validRange, 2),
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
  return (0, _vue.createVNode)(_select.default, {
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
  return (0, _vue.createVNode)(_radio.Group, {
    "onChange": function onChange(_ref) {
      var value = _ref.target.value;
      onModeChange(value);
    },
    "value": mode,
    "size": fullscreen ? undefined : 'small',
    "class": "".concat(prefixCls, "-mode-switch")
  }, {
    default: function _default() {
      return [(0, _vue.createVNode)(_radio.Button, {
        "value": "month"
      }, {
        default: function _default() {
          return [locale.month];
        }
      }), (0, _vue.createVNode)(_radio.Button, {
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
var _default2 = (0, _vue.defineComponent)({
  name: 'CalendarHeader',
  inheritAttrs: false,
  props: ['mode', 'prefixCls', 'value', 'validRange', 'generateConfig', 'locale', 'mode', 'fullscreen'],
  setup: function setup(_props, _ref2) {
    var attrs = _ref2.attrs;
    var divRef = (0, _vue.ref)(null);
    return function () {
      var props = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, _props), attrs);
      var prefixCls = props.prefixCls,
        fullscreen = props.fullscreen,
        mode = props.mode,
        onChange = props.onChange,
        onModeChange = props.onModeChange;
      var sharedProps = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, props), {}, {
        onChange: onChange,
        fullscreen: fullscreen,
        divRef: divRef
      });
      return (0, _vue.createVNode)("div", {
        "class": "".concat(prefixCls, "-header"),
        "ref": divRef
      }, [(0, _vue.createVNode)(YearSelect, sharedProps, null), mode === 'month' && (0, _vue.createVNode)(MonthSelect, sharedProps, null), (0, _vue.createVNode)(ModeSwitch, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, sharedProps), {}, {
        "onModeChange": onModeChange
      }), null)]);
    };
  }
});
exports.default = _default2;