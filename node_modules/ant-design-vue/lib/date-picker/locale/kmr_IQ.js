"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _kmr_IQ = _interopRequireDefault(require("../../vc-picker/locale/kmr_IQ"));
var _kmr_IQ2 = _interopRequireDefault(require("../../time-picker/locale/kmr_IQ"));
// Merge into a locale object
var locale = {
  lang: (0, _objectSpread2.default)({
    placeholder: 'Dîrok hilbijêre',
    rangePlaceholder: ['Dîroka destpêkê', 'Dîroka dawîn']
  }, _kmr_IQ.default),
  timePickerLocale: (0, _objectSpread2.default)({}, _kmr_IQ2.default)
};
// All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
var _default = locale;
exports.default = _default;