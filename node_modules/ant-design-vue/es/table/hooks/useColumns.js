import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import devWarning from '../../vc-util/devWarning';
import { renderSlot } from 'vue';
import { SELECTION_COLUMN } from './useSelection';
import { EXPAND_COLUMN } from '../../vc-table';
function fillSlots(columns, contextSlots) {
  var $slots = contextSlots.value;
  return columns.map(function (column) {
    var _column$slots;
    if (column === SELECTION_COLUMN || column === EXPAND_COLUMN) return column;
    var cloneColumn = _objectSpread({}, column);
    var _cloneColumn$slots = cloneColumn.slots,
      slots = _cloneColumn$slots === void 0 ? {} : _cloneColumn$slots;
    cloneColumn.__originColumn__ = column;
    devWarning(!('slots' in cloneColumn), 'Table', '`column.slots` is deprecated. Please use `v-slot:headerCell` `v-slot:bodyCell` instead.');
    Object.keys(slots).forEach(function (key) {
      var name = slots[key];
      if (cloneColumn[key] === undefined && $slots[name]) {
        cloneColumn[key] = $slots[name];
      }
    });
    if (contextSlots.value.headerCell && !((_column$slots = column.slots) !== null && _column$slots !== void 0 && _column$slots.title)) {
      cloneColumn.title = renderSlot(contextSlots.value, 'headerCell', {
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
export default function useColumns(contextSlots) {
  var filledColumns = function filledColumns(columns) {
    return fillSlots(columns, contextSlots);
  };
  return [filledColumns];
}