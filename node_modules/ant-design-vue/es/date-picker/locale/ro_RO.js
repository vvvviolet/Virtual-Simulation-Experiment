import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import CalendarLocale from '../../vc-picker/locale/ro_RO';
import TimePickerLocale from '../../time-picker/locale/ro_RO';
// Merge into a locale object
var locale = {
  lang: _objectSpread({
    placeholder: 'Selectează data',
    rangePlaceholder: ['Data start', 'Data sfârșit']
  }, CalendarLocale),
  timePickerLocale: _objectSpread({}, TimePickerLocale)
};
// All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
export default locale;