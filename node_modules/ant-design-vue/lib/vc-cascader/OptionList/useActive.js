"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _context = require("../context");
var _vue = require("vue");
var _vcSelect = require("../../vc-select");
var _useState3 = _interopRequireDefault(require("../../_util/hooks/useState"));
/**
 * Control the active open options path.
 */
var _default = function _default() {
  var baseProps = (0, _vcSelect.useBaseProps)();
  var _useInjectCascader = (0, _context.useInjectCascader)(),
    values = _useInjectCascader.values;
  // Record current dropdown active options
  // This also control the open status
  var _useState = (0, _useState3.default)([]),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    activeValueCells = _useState2[0],
    setActiveValueCells = _useState2[1];
  (0, _vue.watch)(function () {
    return baseProps.open;
  }, function () {
    if (baseProps.open && !baseProps.multiple) {
      var firstValueCells = values.value[0];
      setActiveValueCells(firstValueCells || []);
    }
  }, {
    immediate: true
  });
  return [activeValueCells, setActiveValueCells];
};
exports.default = _default;