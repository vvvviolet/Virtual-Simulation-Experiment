"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _fi_FI = _interopRequireDefault(require("../../vc-picker/locale/fi_FI"));
var _fi_FI2 = _interopRequireDefault(require("../../time-picker/locale/fi_FI"));
// Merge into a locale object
var locale = {
  lang: (0, _objectSpread2.default)({
    placeholder: 'Valitse päivä',
    rangePlaceholder: ['Alkamispäivä', 'Päättymispäivä']
  }, _fi_FI.default),
  timePickerLocale: (0, _objectSpread2.default)({}, _fi_FI2.default)
};
// All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
var _default = locale;
exports.default = _default;