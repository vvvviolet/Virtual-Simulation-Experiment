"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useTitleColumns;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _util = require("../util");
function fillTitle(columns, columnTitleProps) {
  return columns.map(function (column) {
    var cloneColumn = (0, _objectSpread2.default)({}, column);
    cloneColumn.title = (0, _util.renderColumnTitle)(cloneColumn.title, columnTitleProps);
    if ('children' in cloneColumn) {
      cloneColumn.children = fillTitle(cloneColumn.children, columnTitleProps);
    }
    return cloneColumn;
  });
}
function useTitleColumns(columnTitleProps) {
  var filledColumns = function filledColumns(columns) {
    return fillTitle(columns, columnTitleProps.value);
  };
  return [filledColumns];
}