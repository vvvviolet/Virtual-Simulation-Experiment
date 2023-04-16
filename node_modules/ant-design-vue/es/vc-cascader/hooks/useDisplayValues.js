import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _typeof from "@babel/runtime/helpers/esm/typeof";
import { toPathOptions } from '../utils/treeUtil';
import { toPathKey } from '../utils/commonUtil';
import { computed } from 'vue';
import { isValidElement } from '../../_util/props-util';
import { cloneElement } from '../../_util/vnode';
export default (function (rawValues, options, fieldNames, multiple, displayRender) {
  return computed(function () {
    var mergedDisplayRender = displayRender.value ||
    // Default displayRender
    function (_ref) {
      var labels = _ref.labels;
      var mergedLabels = multiple.value ? labels.slice(-1) : labels;
      var SPLIT = ' / ';
      if (mergedLabels.every(function (label) {
        return ['string', 'number'].includes(_typeof(label));
      })) {
        return mergedLabels.join(SPLIT);
      }
      // If exist non-string value, use VueNode instead
      return mergedLabels.reduce(function (list, label, index) {
        var keyedLabel = isValidElement(label) ? cloneElement(label, {
          key: index
        }) : label;
        if (index === 0) {
          return [keyedLabel];
        }
        return [].concat(_toConsumableArray(list), [SPLIT, keyedLabel]);
      }, []);
    };
    return rawValues.value.map(function (valueCells) {
      var valueOptions = toPathOptions(valueCells, options.value, fieldNames.value);
      var label = mergedDisplayRender({
        labels: valueOptions.map(function (_ref2) {
          var _option$fieldNames$va;
          var option = _ref2.option,
            value = _ref2.value;
          return (_option$fieldNames$va = option === null || option === void 0 ? void 0 : option[fieldNames.value.label]) !== null && _option$fieldNames$va !== void 0 ? _option$fieldNames$va : value;
        }),
        selectedOptions: valueOptions.map(function (_ref3) {
          var option = _ref3.option;
          return option;
        })
      });
      var value = toPathKey(valueCells);
      return {
        label: label,
        value: value,
        key: value,
        valueCells: valueCells
      };
    });
  });
});