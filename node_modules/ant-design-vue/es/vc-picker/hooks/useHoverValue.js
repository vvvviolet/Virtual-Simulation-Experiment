import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import raf from '../../_util/raf';
import { ref, onBeforeUnmount, watch } from 'vue';
import useValueTexts from './useValueTexts';
export default function useHoverValue(valueText, _ref) {
  var formatList = _ref.formatList,
    generateConfig = _ref.generateConfig,
    locale = _ref.locale;
  var innerValue = ref(null);
  var rafId;
  function setValue(val) {
    var immediately = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    raf.cancel(rafId);
    if (immediately) {
      innerValue.value = val;
      return;
    }
    rafId = raf(function () {
      innerValue.value = val;
    });
  }
  var _useValueTexts = useValueTexts(innerValue, {
      formatList: formatList,
      generateConfig: generateConfig,
      locale: locale
    }),
    _useValueTexts2 = _slicedToArray(_useValueTexts, 2),
    firstText = _useValueTexts2[1];
  function onEnter(date) {
    setValue(date);
  }
  function onLeave() {
    var immediately = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    setValue(null, immediately);
  }
  watch(valueText, function () {
    onLeave(true);
  });
  onBeforeUnmount(function () {
    raf.cancel(rafId);
  });
  return [firstText, onEnter, onLeave];
}