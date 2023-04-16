"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _hr_HR = _interopRequireDefault(require("../../vc-picker/locale/hr_HR"));
var _hr_HR2 = _interopRequireDefault(require("../../time-picker/locale/hr_HR"));
// Merge into a locale object
var locale = {
  lang: (0, _objectSpread2.default)({
    placeholder: 'Odaberite datum',
    yearPlaceholder: 'Odaberite godinu',
    quarterPlaceholder: 'Odaberite četvrtinu',
    monthPlaceholder: 'Odaberite mjesec',
    weekPlaceholder: 'Odaberite tjedan',
    rangePlaceholder: ['Početni datum', 'Završni datum'],
    rangeYearPlaceholder: ['Početna godina', 'Završna godina'],
    rangeMonthPlaceholder: ['Početni mjesec', 'Završni mjesec'],
    rangeWeekPlaceholder: ['Početni tjedan', 'Završni tjedan']
  }, _hr_HR.default),
  timePickerLocale: (0, _objectSpread2.default)({}, _hr_HR2.default)
};
// All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
var _default = locale;
exports.default = _default;