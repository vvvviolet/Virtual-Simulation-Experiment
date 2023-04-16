import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import CalendarLocale from '../../vc-picker/locale/tr_TR';
import TimePickerLocale from '../../time-picker/locale/tr_TR';
// Merge into a locale object
var locale = {
  lang: _objectSpread({
    placeholder: 'Tarih seç',
    yearPlaceholder: 'Yıl seç',
    quarterPlaceholder: 'Çeyrek seç',
    monthPlaceholder: 'Ay seç',
    weekPlaceholder: 'Hafta seç',
    rangePlaceholder: ['Başlangıç tarihi', 'Bitiş tarihi'],
    rangeYearPlaceholder: ['Başlangıç yılı', 'Bitiş yılı'],
    rangeMonthPlaceholder: ['Başlangıç ayı', 'Bitiş ayı'],
    rangeWeekPlaceholder: ['Başlangıç haftası', 'Bitiş haftası']
  }, CalendarLocale),
  timePickerLocale: _objectSpread({}, TimePickerLocale)
};
// All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
export default locale;