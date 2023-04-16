"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useValueTexts;
var _vue = require("vue");
var _useMemo = _interopRequireDefault(require("../../_util/hooks/useMemo"));
var _shallowequal = _interopRequireDefault(require("../../_util/shallowequal"));
var _dateUtil = require("../utils/dateUtil");
function useValueTexts(value, _ref) {
  var formatList = _ref.formatList,
    generateConfig = _ref.generateConfig,
    locale = _ref.locale;
  var texts = (0, _useMemo.default)(function () {
    if (!value.value) {
      return [[''], ''];
    }
    // We will convert data format back to first format
    var firstValueText = '';
    var fullValueTexts = [];
    for (var i = 0; i < formatList.value.length; i += 1) {
      var format = formatList.value[i];
      var formatStr = (0, _dateUtil.formatValue)(value.value, {
        generateConfig: generateConfig.value,
        locale: locale.value,
        format: format
      });
      fullValueTexts.push(formatStr);
      if (i === 0) {
        firstValueText = formatStr;
      }
    }
    return [fullValueTexts, firstValueText];
  }, [value, formatList], function (next, prev) {
    return prev[0] !== next[0] || !(0, _shallowequal.default)(prev[1], next[1]);
  });
  var fullValueTexts = (0, _vue.computed)(function () {
    return texts.value[0];
  });
  var firstValueText = (0, _vue.computed)(function () {
    return texts.value[1];
  });
  return [fullValueTexts, firstValueText];
}