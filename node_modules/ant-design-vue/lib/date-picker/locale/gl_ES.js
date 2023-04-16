"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _gl_ES = _interopRequireDefault(require("../../vc-picker/locale/gl_ES"));
var _gl_ES2 = _interopRequireDefault(require("../../time-picker/locale/gl_ES"));
// Merge into a locale object
var locale = {
  lang: (0, _objectSpread2.default)({
    placeholder: 'Escolla data',
    rangePlaceholder: ['Data inicial', 'Data final']
  }, _gl_ES.default),
  timePickerLocale: (0, _objectSpread2.default)({}, _gl_ES2.default)
};
// All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
var _default = locale;
exports.default = _default;