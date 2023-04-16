"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "TableColumn", {
  enumerable: true,
  get: function get() {
    return _Column.default;
  }
});
Object.defineProperty(exports, "TableColumnGroup", {
  enumerable: true,
  get: function get() {
    return _ColumnGroup.default;
  }
});
exports.default = exports.TableSummaryRow = exports.TableSummaryCell = exports.TableSummary = void 0;
Object.defineProperty(exports, "tableProps", {
  enumerable: true,
  get: function get() {
    return _Table.tableProps;
  }
});
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _Table = _interopRequireWildcard(require("./Table"));
var _Column = _interopRequireDefault(require("./Column"));
var _ColumnGroup = _interopRequireDefault(require("./ColumnGroup"));
var _vue = require("vue");
var _vcTable = require("../vc-table");
var _useSelection = require("./hooks/useSelection");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var TableSummaryRow = (0, _vue.defineComponent)((0, _objectSpread2.default)((0, _objectSpread2.default)({}, _vcTable.SummaryRow), {}, {
  name: 'ATableSummaryRow'
}));
exports.TableSummaryRow = TableSummaryRow;
var TableSummaryCell = (0, _vue.defineComponent)((0, _objectSpread2.default)((0, _objectSpread2.default)({}, _vcTable.SummaryCell), {}, {
  name: 'ATableSummaryCell'
}));
exports.TableSummaryCell = TableSummaryCell;
var TableSummary = (0, _extends2.default)(_vcTable.Summary, {
  Cell: TableSummaryCell,
  Row: TableSummaryRow,
  name: 'ATableSummary'
});
/* istanbul ignore next */
exports.TableSummary = TableSummary;
var _default = (0, _extends2.default)(_Table.default, {
  SELECTION_ALL: _useSelection.SELECTION_ALL,
  SELECTION_INVERT: _useSelection.SELECTION_INVERT,
  SELECTION_NONE: _useSelection.SELECTION_NONE,
  SELECTION_COLUMN: _useSelection.SELECTION_COLUMN,
  EXPAND_COLUMN: _vcTable.EXPAND_COLUMN,
  Column: _Column.default,
  ColumnGroup: _ColumnGroup.default,
  Summary: TableSummary,
  install: function install(app) {
    app.component(TableSummary.name, TableSummary);
    app.component(TableSummaryCell.name, TableSummaryCell);
    app.component(TableSummaryRow.name, TableSummaryRow);
    app.component(_Table.default.name, _Table.default);
    app.component(_Column.default.name, _Column.default);
    app.component(_ColumnGroup.default.name, _ColumnGroup.default);
    return app;
  }
});
exports.default = _default;