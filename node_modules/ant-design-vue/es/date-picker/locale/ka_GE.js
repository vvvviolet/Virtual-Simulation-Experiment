import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import CalendarLocale from '../../vc-picker/locale/ka_GE';
import TimePickerLocale from '../../time-picker/locale/ka_GE';
var locale = {
  lang: _objectSpread({
    placeholder: 'აირჩიეთ თარიღი',
    yearPlaceholder: 'აირჩიეთ წელი',
    quarterPlaceholder: 'აირჩიეთ მეოთხედი',
    monthPlaceholder: 'აირჩიეთ თვე',
    weekPlaceholder: 'აირჩიეთ კვირა',
    rangePlaceholder: ['საწყისი თარიღი', 'საბოლოო თარიღი'],
    rangeYearPlaceholder: ['საწყისი წელი', 'საბოლოო წელი'],
    rangeMonthPlaceholder: ['საწყისი თვე', 'საბოლოო თვე'],
    rangeWeekPlaceholder: ['საწყისი კვირა', 'საბოლოო კვირა']
  }, CalendarLocale),
  timePickerLocale: _objectSpread({}, TimePickerLocale)
};
export default locale;