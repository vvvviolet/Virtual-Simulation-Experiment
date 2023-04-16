import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import CalendarLocale from '../../vc-picker/locale/ca_ES';
import TimePickerLocale from '../../time-picker/locale/ca_ES';
// Merge into a locale object
var locale = {
  lang: _objectSpread({
    placeholder: 'Seleccionar data',
    rangePlaceholder: ['Data inicial', 'Data final']
  }, CalendarLocale),
  timePickerLocale: _objectSpread({}, TimePickerLocale)
};
// All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
export default locale;