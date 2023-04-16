import _typeof from "@babel/runtime/helpers/esm/typeof";
import canUseDom from '../../_util/canUseDom';
import { computed } from 'vue';
// fix ssr render
var defaultContainer = canUseDom() ? window : null;
/** Sticky header hooks */
export default function useSticky(stickyRef, prefixClsRef) {
  return computed(function () {
    var _ref = _typeof(stickyRef.value) === 'object' ? stickyRef.value : {},
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