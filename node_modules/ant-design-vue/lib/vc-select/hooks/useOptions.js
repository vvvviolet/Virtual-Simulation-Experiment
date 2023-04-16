"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useOptions;
var _vue = require("vue");
var _legacyUtil = require("../utils/legacyUtil");
/**
 * Parse `children` to `options` if `options` is not provided.
 * Then flatten the `options`.
 */
function useOptions(options, children, fieldNames) {
  var mergedOptions = (0, _vue.shallowRef)();
  var valueOptions = (0, _vue.shallowRef)();
  var labelOptions = (0, _vue.shallowRef)();
  var tempMergedOptions = (0, _vue.shallowRef)([]);
  (0, _vue.watch)([options, children], function () {
    if (options.value) {
      tempMergedOptions.value = (0, _vue.toRaw)(options.value).slice();
    } else {
      tempMergedOptions.value = (0, _legacyUtil.convertChildrenToData)(children.value);
    }
  }, {
    immediate: true,
    deep: true
  });
  (0, _vue.watchEffect)(function () {
    var newOptions = tempMergedOptions.value;
    var newValueOptions = new Map();
    var newLabelOptions = new Map();
    var fieldNamesValue = fieldNames.value;
    function dig(optionList) {
      var isChildren = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      // for loop to speed up collection speed
      for (var i = 0; i < optionList.length; i += 1) {
        var option = optionList[i];
        if (!option[fieldNamesValue.options] || isChildren) {
          newValueOptions.set(option[fieldNamesValue.value], option);
          newLabelOptions.set(option[fieldNamesValue.label], option);
        } else {
          dig(option[fieldNamesValue.options], true);
        }
      }
    }
    dig(newOptions);
    mergedOptions.value = newOptions;
    valueOptions.value = newValueOptions;
    labelOptions.value = newLabelOptions;
  });
  return {
    options: mergedOptions,
    valueOptions: valueOptions,
    labelOptions: labelOptions
  };
}