import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import CalendarLocale from '../../vc-picker/locale/az_AZ';
import TimePickerLocale from '../../time-picker/locale/az_AZ';
var locale = {
  lang: _objectSpread({
    placeholder: 'Tarix seçin',
    rangePlaceholder: ['Başlama tarixi', 'Bitmə tarixi']
  }, CalendarLocale),
  timePickerLocale: _objectSpread({}, TimePickerLocale)
};
export default locale;