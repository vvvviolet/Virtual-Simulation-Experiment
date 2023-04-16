"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = require("vue");
var _treeUtil = require("../utils/treeUtil");
var _default = function _default(options, fieldNames, rawValues) {
  return (0, _vue.computed)(function () {
    var missingValues = [];
    var existsValues = [];
    rawValues.value.forEach(function (valueCell) {
      var pathOptions = (0, _treeUtil.toPathOptions)(valueCell, options.value, fieldNames.value);
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
};
exports.default = _default;