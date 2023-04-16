"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _pt_BR = _interopRequireDefault(require("../../vc-picker/locale/pt_BR"));
var _pt_BR2 = _interopRequireDefault(require("../../time-picker/locale/pt_BR"));
// Merge into a locale object
var locale = {
  lang: (0, _objectSpread2.default)({
    placeholder: 'Selecionar data',
    rangePlaceholder: ['Data inicial', 'Data final']
  }, _pt_BR.default),
  timePickerLocale: (0, _objectSpread2.default)({}, _pt_BR2.default)
};
// All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
var _default = locale;
exports.default = _default;