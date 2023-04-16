import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import { ref, watch } from 'vue';
export default function useTextValueMapping(_ref) {
  var valueTexts = _ref.valueTexts,
    onTextChange = _ref.onTextChange;
  var text = ref('');
  function triggerTextChange(value) {
    text.value = value;
    onTextChange(value);
  }
  function resetText() {
    text.value = valueTexts.value[0];
  }
  watch(function () {
    return _toConsumableArray(valueTexts.value);
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