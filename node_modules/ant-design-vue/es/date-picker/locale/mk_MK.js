import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import CalendarLocale from '../../vc-picker/locale/mk_MK';
import TimePickerLocale from '../../time-picker/locale/mk_MK';
// Merge into a locale object
var locale = {
  lang: _objectSpread({
    placeholder: 'Избери датум',
    rangePlaceholder: ['Од датум', 'До датум']
  }, CalendarLocale),
  timePickerLocale: _objectSpread({}, TimePickerLocale)
};
// All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
export default locale;