import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
// Tamil Locale added to rc-calendar
import CalendarLocale from '../../vc-picker/locale/ta_IN';
import TimePickerLocale from '../../time-picker/locale/ta_IN';
// Merge into a locale object
var locale = {
  lang: _objectSpread({
    placeholder: 'தேதியைத் தேர்ந்தெடுக்கவும்',
    rangePlaceholder: ['தொடக்க தேதி', 'கடைசி தேதி']
  }, CalendarLocale),
  timePickerLocale: _objectSpread({}, TimePickerLocale)
};
// All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
export default locale;