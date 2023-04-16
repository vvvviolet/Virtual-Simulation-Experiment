'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var datePicker = require('./src/date-picker.js');
var constants = require('./src/constants.js');

const _DatePicker = datePicker["default"];
_DatePicker.install = (app) => {
  app.component(_DatePicker.name, _DatePicker);
};
const ElDatePicker = _DatePicker;

exports.ROOT_PICKER_INJECTION_KEY = constants.ROOT_PICKER_INJECTION_KEY;
exports.ElDatePicker = ElDatePicker;
exports["default"] = _DatePicker;
//# sourceMappingURL=index.js.map
