"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _de_DE = _interopRequireDefault(require("../../vc-picker/locale/de_DE"));
var _de_DE2 = _interopRequireDefault(require("../../time-picker/locale/de_DE"));
// Merge into a locale object
var locale = {
  lang: (0, _objectSpread2.default)({
    placeholder: 'Datum auswählen',
    rangePlaceholder: ['Startdatum', 'Enddatum']
  }, _de_DE.default),
  timePickerLocale: (0, _objectSpread2.default)({}, _de_DE2.default)
};
// All settings at:
// https://github.com/ant-design/ant-design/issues/424
var _default = locale;
exports.default = _default;