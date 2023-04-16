"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useColumns;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _devWarning = _interopRequireDefault(require("../../vc-util/devWarning"));
var _vue = require("vue");
var _useSelection = require("./useSelection");
var _vcTable = require("../../vc-table");
function fillSlots(columns, contextSlots) {
  var $slots = contextSlots.value;
  return columns.map(function (column) {
    var _column$slots;
    if (column === _useSelection.SELECTION_COLUMN || column === _vcTable.EXPAND_COLUMN) return column;
    var cloneColumn = (0, _objectSpread2.default)({}, column);
    var _cloneColumn$slots = cloneColumn.slots,
      slots = _cloneColumn$slots === void 0 ? {} : _cloneColumn$slots;
    cloneColumn.__originColumn__ = column;
    (0, _devWarning.default)(!('slots' in cloneColumn), 'Table', '`column.slots` is deprecated. Please use `v-slot:headerCell` `v-slot:bodyCell` instead.');
    Object.keys(slots).forEach(function (key) {
      var name = slots[key];
      if (cloneColumn[key] === undefined && $slots[name]) {
        cloneColumn[key] = $slots[name];
      }
    });
    if (contextSlots.value.headerCell && !((_column$slots = column.slots) !== null && _column$slots !== void 0 && _column$slots.title)) {
      cloneColumn.title = (0, _vue.renderSlot)(contextSlots.value, 'headerCell', {
        title: column.title,
        column: column
      }, function () {
        return [column.title];
      });
    }
    if ('children' in cloneColumn) {
      cloneColumn.children = fillSlots(cloneColumn.children, contextSlots);
    }
    return cloneColumn;
  });
}
function useColumns(contextSlots) {
  var filledColumns = function filledColumns(columns) {
    return fillSlots(columns, contextSlots);
  };
  return [filledColumns];
}