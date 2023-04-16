"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _cs_CZ = _interopRequireDefault(require("../../vc-picker/locale/cs_CZ"));
var _cs_CZ2 = _interopRequireDefault(require("../../time-picker/locale/cs_CZ"));
// Merge into a locale object
var locale = {
  lang: (0, _objectSpread2.default)({
    placeholder: 'Vybrat datum',
    rangePlaceholder: ['Od', 'Do']
  }, _cs_CZ.default),
  timePickerLocale: (0, _objectSpread2.default)({}, _cs_CZ2.default)
};
// All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
var _default = locale;
exports.default = _default;