"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useSticky;
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _canUseDom = _interopRequireDefault(require("../../_util/canUseDom"));
var _vue = require("vue");
// fix ssr render
var defaultContainer = (0, _canUseDom.default)() ? window : null;
/** Sticky header hooks */
function useSticky(stickyRef, prefixClsRef) {
  return (0, _vue.computed)(function () {
    var _ref = (0, _typeof2.default)(stickyRef.value) === 'object' ? stickyRef.value : {},
      _ref$offsetHeader = _ref.offsetHeader,
      offsetHeader = _ref$offsetHeader === void 0 ? 0 : _ref$offsetHeader,
      _ref$offsetSummary = _ref.offsetSummary,
      offsetSummary = _ref$offsetSummary === void 0 ? 0 : _ref$offsetSummary,
      _ref$offsetScroll = _ref.offsetScroll,
      offsetScroll = _ref$offsetScroll === void 0 ? 0 : _ref$offsetScroll,
      _ref$getContainer = _ref.getContainer,
      getContainer = _ref$getContainer === void 0 ? function () {
        return defaultContainer;
      } : _ref$getContainer;
    var container = getContainer() || defaultContainer;
    var isSticky = !!stickyRef.value;
    return {
      isSticky: isSticky,
      stickyClassName: isSticky ? "".concat(prefixClsRef.value, "-sticky-holder") : '',
      offsetHeader: offsetHeader,
      offsetSummary: offsetSummary,
      offsetScroll: offsetScroll,
      container: container
    };
  });
}