"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _pl_PL = _interopRequireDefault(require("../../vc-picker/locale/pl_PL"));
var _pl_PL2 = _interopRequireDefault(require("../../time-picker/locale/pl_PL"));
// Merge into a locale object
var locale = {
  lang: (0, _objectSpread2.default)({
    placeholder: 'Wybierz datę',
    rangePlaceholder: ['Data początkowa', 'Data końcowa']
  }, _pl_PL.default),
  timePickerLocale: (0, _objectSpread2.default)({}, _pl_PL2.default)
};
// All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
var _default = locale;
exports.default = _default;