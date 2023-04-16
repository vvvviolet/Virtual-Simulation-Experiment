import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["columnType"];
import { createVNode as _createVNode } from "vue";
import { INTERNAL_COL_DEFINE } from './utils/legacyUtil';
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
    var additionalProps = column && column[INTERNAL_COL_DEFINE];
    if (width || additionalProps || mustInsert) {
      var _ref2 = additionalProps || {},
        columnType = _ref2.columnType,
        restAdditionalProps = _objectWithoutProperties(_ref2, _excluded);
      cols.unshift(_createVNode("col", _objectSpread({
        "key": i,
        "style": {
          width: typeof width === 'number' ? "".concat(width, "px") : width
        }
      }, restAdditionalProps), null));
      mustInsert = true;
    }
  }
  return _createVNode("colgroup", null, [cols]);
}
export default ColGroup;