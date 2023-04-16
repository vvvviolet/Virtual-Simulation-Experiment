"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.WeekPicker = exports.RangePicker = exports.QuarterPicker = exports.MonthPicker = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _dateFns = _interopRequireDefault(require("../vc-picker/generate/dateFns"));
var _generatePicker2 = _interopRequireDefault(require("./generatePicker"));
var _generatePicker = (0, _generatePicker2.default)(_dateFns.default),
  DatePicker = _generatePicker.DatePicker,
  WeekPicker = _generatePicker.WeekPicker,
  MonthPicker = _generatePicker.MonthPicker,
  YearPicker = _generatePicker.YearPicker,
  TimePicker = _generatePicker.TimePicker,
  QuarterPicker = _generatePicker.QuarterPicker,
  RangePicker = _generatePicker.RangePicker;
/* istanbul ignore next */
exports.RangePicker = RangePicker;
exports.QuarterPicker = QuarterPicker;
exports.MonthPicker = MonthPicker;
exports.WeekPicker = WeekPicker;
var _default = (0, _extends2.default)(DatePicker, {
  WeekPicker: WeekPicker,
  MonthPicker: MonthPicker,
  YearPicker: YearPicker,
  RangePicker: RangePicker,
  TimePicker: TimePicker,
  QuarterPicker: QuarterPicker,
  install: function install(app) {
    app.component(DatePicker.name, DatePicker);
    app.component(RangePicker.name, RangePicker);
    app.component(MonthPicker.name, MonthPicker);
    app.component(WeekPicker.name, WeekPicker);
    app.component(QuarterPicker.name, QuarterPicker);
    return app;
  }
});
exports.default = _default;