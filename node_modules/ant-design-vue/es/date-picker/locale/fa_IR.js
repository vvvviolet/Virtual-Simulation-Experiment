import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import CalendarLocale from '../../vc-picker/locale/fa_IR';
import TimePickerLocale from '../../time-picker/locale/fa_IR';
// Merge into a locale object
var locale = {
  lang: _objectSpread({
    placeholder: 'انتخاب تاریخ',
    yearPlaceholder: 'انتخاب سال',
    quarterPlaceholder: 'انتخاب فصل',
    monthPlaceholder: 'انتخاب ماه',
    weekPlaceholder: 'انتخاب هفته',
    rangePlaceholder: ['تاریخ شروع', 'تاریخ پایان'],
    rangeYearPlaceholder: ['سال شروع', 'سال پایان'],
    rangeMonthPlaceholder: ['ماه شروع', 'ماه پایان'],
    rangeWeekPlaceholder: ['هفته شروع', 'هفته پایان']
  }, CalendarLocale),
  timePickerLocale: _objectSpread({}, TimePickerLocale)
};
// All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
export default locale;