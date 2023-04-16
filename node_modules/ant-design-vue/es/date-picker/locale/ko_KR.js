import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import CalendarLocale from '../../vc-picker/locale/ko_KR';
import TimePickerLocale from '../../time-picker/locale/ko_KR';
// Merge into a locale object
var locale = {
  lang: _objectSpread({
    placeholder: '날짜 선택',
    rangePlaceholder: ['시작일', '종료일']
  }, CalendarLocale),
  timePickerLocale: _objectSpread({}, TimePickerLocale)
};
// All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
export default locale;