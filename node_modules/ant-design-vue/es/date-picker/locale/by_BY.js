import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import CalendarLocale from '../../vc-picker/locale/by_BY';
import TimePickerLocale from '../../time-picker/locale/by_BY';
var locale = {
  lang: _objectSpread({
    placeholder: 'Выберыце дату',
    yearPlaceholder: 'Выберыце год',
    quarterPlaceholder: 'Выберыце квартал',
    monthPlaceholder: 'Выберыце месяц',
    weekPlaceholder: 'Выберыце тыдзень',
    rangePlaceholder: ['Пачатковая дата', 'Канчатковая дата'],
    rangeYearPlaceholder: ['Пачатковы год', 'Год заканчэння'],
    rangeMonthPlaceholder: ['Пачатковы месяц', 'Канчатковы месяц'],
    rangeWeekPlaceholder: ['Пачатковы тыдзень', 'Канчатковы тыдзень']
  }, CalendarLocale),
  timePickerLocale: _objectSpread({}, TimePickerLocale)
};
export default locale;