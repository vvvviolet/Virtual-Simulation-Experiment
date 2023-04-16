import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import CalendarLocale from '../../vc-picker/locale/it_IT';
import TimePickerLocale from '../../time-picker/locale/it_IT';
// Merge into a locale object
var locale = {
  lang: _objectSpread({
    placeholder: 'Selezionare la data',
    rangePlaceholder: ["Data d'inizio", 'Data di fine']
  }, CalendarLocale),
  timePickerLocale: _objectSpread({}, TimePickerLocale)
};
// All settings at:
// https://github.com/ant-design/ant-design/issues/424
export default locale;