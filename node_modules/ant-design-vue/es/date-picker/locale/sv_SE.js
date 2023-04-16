import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import CalendarLocale from '../../vc-picker/locale/sv_SE';
import TimePickerLocale from '../../time-picker/locale/sv_SE';
// Merge into a locale object
var locale = {
  lang: _objectSpread({
    placeholder: 'Välj datum',
    yearPlaceholder: 'Välj år',
    quarterPlaceholder: 'Välj kvartal',
    monthPlaceholder: 'Välj månad',
    weekPlaceholder: 'Välj vecka',
    rangePlaceholder: ['Startdatum', 'Slutdatum'],
    rangeYearPlaceholder: ['Startår', 'Slutår'],
    rangeMonthPlaceholder: ['Startmånad', 'Slutmånad'],
    rangeWeekPlaceholder: ['Startvecka', 'Slutvecka']
  }, CalendarLocale),
  timePickerLocale: _objectSpread({}, TimePickerLocale)
};
// All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
export default locale;