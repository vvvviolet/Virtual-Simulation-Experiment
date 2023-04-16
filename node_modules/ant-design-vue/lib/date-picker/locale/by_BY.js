"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _by_BY = _interopRequireDefault(require("../../vc-picker/locale/by_BY"));
var _by_BY2 = _interopRequireDefault(require("../../time-picker/locale/by_BY"));
var locale = {
  lang: (0, _objectSpread2.default)({
    placeholder: 'Выберыце дату',
    yearPlaceholder: 'Выберыце год',
    quarterPlaceholder: 'Выберыце квартал',
    monthPlaceholder: 'Выберыце месяц',
    weekPlaceholder: 'Выберыце тыдзень',
    rangePlaceholder: ['Пачатковая дата', 'Канчатковая дата'],
    rangeYearPlaceholder: ['Пачатковы год', 'Год заканчэння'],
    rangeMonthPlaceholder: ['Пачатковы месяц', 'Канчатковы месяц'],
    rangeWeekPlaceholder: ['Пачатковы тыдзень', 'Канчатковы тыдзень']
  }, _by_BY.default),
  timePickerLocale: (0, _objectSpread2.default)({}, _by_BY2.default)
};
var _default = locale;
exports.default = _default;