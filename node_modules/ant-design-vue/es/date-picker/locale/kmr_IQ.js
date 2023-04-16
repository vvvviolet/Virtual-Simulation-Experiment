import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import CalendarLocale from '../../vc-picker/locale/kmr_IQ';
import TimePickerLocale from '../../time-picker/locale/kmr_IQ';
// Merge into a locale object
var locale = {
  lang: _objectSpread({
    placeholder: 'Dîrok hilbijêre',
    rangePlaceholder: ['Dîroka destpêkê', 'Dîroka dawîn']
  }, CalendarLocale),
  timePickerLocale: _objectSpread({}, TimePickerLocale)
};
// All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
export default locale;