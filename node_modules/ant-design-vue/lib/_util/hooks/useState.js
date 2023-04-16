"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useState;
var _vue = require("vue");
function useState(defaultStateValue) {
  var initValue = typeof defaultStateValue === 'function' ? defaultStateValue() : defaultStateValue;
  var innerValue = (0, _vue.ref)(initValue);
  function triggerChange(newValue) {
    innerValue.value = newValue;
  }
  return [innerValue, triggerChange];
}