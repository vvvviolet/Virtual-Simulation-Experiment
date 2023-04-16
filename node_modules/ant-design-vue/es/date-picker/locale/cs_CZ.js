import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import CalendarLocale from '../../vc-picker/locale/cs_CZ';
import TimePickerLocale from '../../time-picker/locale/cs_CZ';
// Merge into a locale object
var locale = {
  lang: _objectSpread({
    placeholder: 'Vybrat datum',
    rangePlaceholder: ['Od', 'Do']
  }, CalendarLocale),
  timePickerLocale: _objectSpread({}, TimePickerLocale)
};
// All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
export default locale;