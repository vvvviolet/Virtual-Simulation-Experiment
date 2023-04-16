import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { renderColumnTitle } from '../util';
function fillTitle(columns, columnTitleProps) {
  return columns.map(function (column) {
    var cloneColumn = _objectSpread({}, column);
    cloneColumn.title = renderColumnTitle(cloneColumn.title, columnTitleProps);
    if ('children' in cloneColumn) {
      cloneColumn.children = fillTitle(cloneColumn.children, columnTitleProps);
    }
    return cloneColumn;
  });
}
export default function useTitleColumns(columnTitleProps) {
  var filledColumns = function filledColumns(columns) {
    return fillTitle(columns, columnTitleProps.value);
  };
  return [filledColumns];
}