"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  Components: true,
  getTimeProps: true
};
exports.default = exports.Components = void 0;
exports.getTimeProps = getTimeProps;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _PickerButton = _interopRequireDefault(require("../PickerButton"));
var _PickerTag = _interopRequireDefault(require("../PickerTag"));
var _generateSinglePicker2 = _interopRequireDefault(require("./generateSinglePicker"));
var _generateRangePicker = _interopRequireDefault(require("./generateRangePicker"));
var _interface = require("./interface");
Object.keys(_interface).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _interface[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _interface[key];
    }
  });
});
var Components = {
  button: _PickerButton.default,
  rangeItem: _PickerTag.default
};
exports.Components = Components;
function toArray(list) {
  if (!list) {
    return [];
  }
  return Array.isArray(list) ? list : [list];
}
function getTimeProps(props) {
  var format = props.format,
    picker = props.picker,
    showHour = props.showHour,
    showMinute = props.showMinute,
    showSecond = props.showSecond,
    use12Hours = props.use12Hours;
  var firstFormat = toArray(format)[0];
  var showTimeObj = (0, _objectSpread2.default)({}, props);
  if (firstFormat && typeof firstFormat === 'string') {
    if (!firstFormat.includes('s') && showSecond === undefined) {
      showTimeObj.showSecond = false;
    }
    if (!firstFormat.includes('m') && showMinute === undefined) {
      showTimeObj.showMinute = false;
    }
    if (!firstFormat.includes('H') && !firstFormat.includes('h') && showHour === undefined) {
      showTimeObj.showHour = false;
    }
    if ((firstFormat.includes('a') || firstFormat.includes('A')) && use12Hours === undefined) {
      showTimeObj.use12Hours = true;
    }
  }
  if (picker === 'time') {
    return showTimeObj;
  }
  if (typeof firstFormat === 'function') {
    // format of showTime should use default when format is custom format function
    delete showTimeObj.format;
  }
  return {
    showTime: showTimeObj
  };
}
function generatePicker(generateConfig, extraProps) {
  // =========================== Picker ===========================
  var _generateSinglePicker = (0, _generateSinglePicker2.default)(generateConfig, extraProps),
    DatePicker = _generateSinglePicker.DatePicker,
    WeekPicker = _generateSinglePicker.WeekPicker,
    MonthPicker = _generateSinglePicker.MonthPicker,
    YearPicker = _generateSinglePicker.YearPicker,
    TimePicker = _generateSinglePicker.TimePicker,
    QuarterPicker = _generateSinglePicker.QuarterPicker;
  // ======================== Range Picker ========================
  var RangePicker = (0, _generateRangePicker.default)(generateConfig, extraProps);
  return {
    DatePicker: DatePicker,
    WeekPicker: WeekPicker,
    MonthPicker: MonthPicker,
    YearPicker: YearPicker,
    TimePicker: TimePicker,
    QuarterPicker: QuarterPicker,
    RangePicker: RangePicker
  };
}
var _default = generatePicker;
exports.default = _default;