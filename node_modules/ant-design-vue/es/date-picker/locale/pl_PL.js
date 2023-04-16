import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import CalendarLocale from '../../vc-picker/locale/pl_PL';
import TimePickerLocale from '../../time-picker/locale/pl_PL';
// Merge into a locale object
var locale = {
  lang: _objectSpread({
    placeholder: 'Wybierz datę',
    rangePlaceholder: ['Data początkowa', 'Data końcowa']
  }, CalendarLocale),
  timePickerLocale: _objectSpread({}, TimePickerLocale)
};
// All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
export default locale;