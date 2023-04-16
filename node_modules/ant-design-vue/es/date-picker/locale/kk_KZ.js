import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import CalendarLocale from '../../vc-picker/locale/kk_KZ';
import TimePickerLocale from '../../time-picker/locale/kk_KZ';
// Merge into a locale object
var locale = {
  lang: _objectSpread({
    placeholder: 'Күнді таңдаңыз',
    yearPlaceholder: 'Жылды таңдаңыз',
    quarterPlaceholder: 'Тоқсанды таңдаңыз',
    monthPlaceholder: 'Айды таңдаңыз',
    weekPlaceholder: 'Аптаны таңдаңыз',
    rangePlaceholder: ['Бастау күні', 'Аяқталу күні'],
    rangeYearPlaceholder: ['Бастау жылы', 'Аяқталу жылы'],
    rangeMonthPlaceholder: ['Бастау айы', 'Аяқталу айы'],
    rangeWeekPlaceholder: ['Бастау апта', 'Аяқталу апта']
  }, CalendarLocale),
  timePickerLocale: _objectSpread({}, TimePickerLocale)
};
// All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
export default locale;