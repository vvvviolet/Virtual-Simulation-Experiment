import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import CalendarLocale from '../../vc-picker/locale/fi_FI';
import TimePickerLocale from '../../time-picker/locale/fi_FI';
// Merge into a locale object
var locale = {
  lang: _objectSpread({
    placeholder: 'Valitse päivä',
    rangePlaceholder: ['Alkamispäivä', 'Päättymispäivä']
  }, CalendarLocale),
  timePickerLocale: _objectSpread({}, TimePickerLocale)
};
// All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
export default locale;