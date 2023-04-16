"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.TimeRangePicker = exports.TimePicker = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _timePicker = _interopRequireDefault(require("./time-picker"));
var _moment = _interopRequireDefault(require("../vc-picker/generate/moment"));
var _createTimePicker = (0, _timePicker.default)(_moment.default),
  TimePicker = _createTimePicker.TimePicker,
  TimeRangePicker = _createTimePicker.TimeRangePicker;
/* istanbul ignore next */
exports.TimeRangePicker = TimeRangePicker;
exports.TimePicker = TimePicker;
var _default = (0, _extends2.default)(TimePicker, {
  TimePicker: TimePicker,
  TimeRangePicker: TimeRangePicker,
  install: function install(app) {
    app.component(TimePicker.name, TimePicker);
    app.component(TimeRangePicker.name, TimeRangePicker);
    return app;
  }
});
exports.default = _default;