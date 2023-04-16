import { computed } from 'vue';
import useMemo from '../../_util/hooks/useMemo';
import shallowequal from '../../_util/shallowequal';
import { formatValue } from '../utils/dateUtil';
export default function useValueTexts(value, _ref) {
  var formatList = _ref.formatList,
    generateConfig = _ref.generateConfig,
    locale = _ref.locale;
  var texts = useMemo(function () {
    if (!value.value) {
      return [[''], ''];
    }
    // We will convert data format back to first format
    var firstValueText = '';
    var fullValueTexts = [];
    for (var i = 0; i < formatList.value.length; i += 1) {
      var format = formatList.value[i];
      var formatStr = formatValue(value.value, {
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
    return prev[0] !== next[0] || !shallowequal(prev[1], next[1]);
  });
  var fullValueTexts = computed(function () {
    return texts.value[0];
  });
  var firstValueText = computed(function () {
    return texts.value[1];
  });
  return [fullValueTexts, firstValueText];
}