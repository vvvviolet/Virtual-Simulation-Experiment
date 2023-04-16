import { computed } from 'vue';
import { toPathOptions } from '../utils/treeUtil';
export default (function (options, fieldNames, rawValues) {
  return computed(function () {
    var missingValues = [];
    var existsValues = [];
    rawValues.value.forEach(function (valueCell) {
      var pathOptions = toPathOptions(valueCell, options.value, fieldNames.value);
      if (pathOptions.every(function (opt) {
        return opt.option;
      })) {
        existsValues.push(valueCell);
      } else {
        missingValues.push(valueCell);
      }
    });
    return [existsValues, missingValues];
  });
});