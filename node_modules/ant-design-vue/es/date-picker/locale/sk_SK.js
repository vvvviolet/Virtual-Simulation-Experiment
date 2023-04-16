import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import CalendarLocale from '../../vc-picker/locale/sk_SK';
import TimePickerLocale from '../../time-picker/locale/sk_SK';
// 统一合并为完整的 Locale
var locale = {
  lang: _objectSpread({
    placeholder: 'Vybrať dátum',
    rangePlaceholder: ['Od', 'Do']
  }, CalendarLocale),
  timePickerLocale: _objectSpread({}, TimePickerLocale)
};
// All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
export default locale;