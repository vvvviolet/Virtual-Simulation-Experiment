"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = require("vue");
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _legacyUtil = require("./utils/legacyUtil");
var _excluded = ["columnType"];
function ColGroup(_ref) {
  var colWidths = _ref.colWidths,
    columns = _ref.columns,
    columCount = _ref.columCount;
  var cols = [];
  var len = columCount || columns.length;
  // Only insert col with width & additional props
  // Skip if rest col do not have any useful info
  var mustInsert = false;
  for (var i = len - 1; i >= 0; i -= 1) {
    var width = colWidths[i];
    var column = columns && columns[i];
    var additionalProps = column && column[_legacyUtil.INTERNAL_COL_DEFINE];
    if (width || additionalProps || mustInsert) {
      var _ref2 = additionalProps || {},
        columnType = _ref2.columnType,
        restAdditionalProps = (0, _objectWithoutProperties2.default)(_ref2, _excluded);
      cols.unshift((0, _vue.createVNode)("col", (0, _objectSpread2.default)({
        "key": i,
        "style": {
          width: typeof width === 'number' ? "".concat(width, "px") : width
        }
      }, restAdditionalProps), null));
      mustInsert = true;
    }
  }
  return (0, _vue.createVNode)("colgroup", null, [cols]);
}
var _default = ColGroup;
exports.default = _default;