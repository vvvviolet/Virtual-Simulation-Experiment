import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import CalendarLocale from '../../vc-picker/locale/gl_ES';
import TimePickerLocale from '../../time-picker/locale/gl_ES';
// Merge into a locale object
var locale = {
  lang: _objectSpread({
    placeholder: 'Escolla data',
    rangePlaceholder: ['Data inicial', 'Data final']
  }, CalendarLocale),
  timePickerLocale: _objectSpread({}, TimePickerLocale)
};
// All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
export default locale;