"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useTextValueMapping;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _vue = require("vue");
function useTextValueMapping(_ref) {
  var valueTexts = _ref.valueTexts,
    onTextChange = _ref.onTextChange;
  var text = (0, _vue.ref)('');
  function triggerTextChange(value) {
    text.value = value;
    onTextChange(value);
  }
  function resetText() {
    text.value = valueTexts.value[0];
  }
  (0, _vue.watch)(function () {
    return (0, _toConsumableArray2.default)(valueTexts.value);
  }, function (cur) {
    var pre = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    if (cur.join('||') !== pre.join('||') && valueTexts.value.every(function (valText) {
      return valText !== text.value;
    })) {
      resetText();
    }
  }, {
    immediate: true
  });
  return [text, triggerTextChange, resetText];
}