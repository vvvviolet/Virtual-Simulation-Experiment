"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useHoverValue;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _raf = _interopRequireDefault(require("../../_util/raf"));
var _vue = require("vue");
var _useValueTexts3 = _interopRequireDefault(require("./useValueTexts"));
function useHoverValue(valueText, _ref) {
  var formatList = _ref.formatList,
    generateConfig = _ref.generateConfig,
    locale = _ref.locale;
  var innerValue = (0, _vue.ref)(null);
  var rafId;
  function setValue(val) {
    var immediately = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    _raf.default.cancel(rafId);
    if (immediately) {
      innerValue.value = val;
      return;
    }
    rafId = (0, _raf.default)(function () {
      innerValue.value = val;
    });
  }
  var _useValueTexts = (0, _useValueTexts3.default)(innerValue, {
      formatList: formatList,
      generateConfig: generateConfig,
      locale: locale
    }),
    _useValueTexts2 = (0, _slicedToArray2.default)(_useValueTexts, 2),
    firstText = _useValueTexts2[1];
  function onEnter(date) {
    setValue(date);
  }
  function onLeave() {
    var immediately = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    setValue(null, immediately);
  }
  (0, _vue.watch)(valueText, function () {
    onLeave(true);
  });
  (0, _vue.onBeforeUnmount)(function () {
    _raf.default.cancel(rafId);
  });
  return [firstText, onEnter, onLeave];
}