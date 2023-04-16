import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { computed } from 'vue';
import { fillLegacyProps } from '../utils/legacyUtil';
export default (function (treeData, searchValue, _ref) {
  var treeNodeFilterProp = _ref.treeNodeFilterProp,
    filterTreeNode = _ref.filterTreeNode,
    fieldNames = _ref.fieldNames;
  return computed(function () {
    var fieldChildren = fieldNames.value.children;
    var searchValueVal = searchValue.value;
    var treeNodeFilterPropValue = treeNodeFilterProp === null || treeNodeFilterProp === void 0 ? void 0 : treeNodeFilterProp.value;
    if (!searchValueVal || filterTreeNode.value === false) {
      return treeData.value;
    }
    var filterOptionFunc;
    if (typeof filterTreeNode.value === 'function') {
      filterOptionFunc = filterTreeNode.value;
    } else {
      var upperStr = searchValueVal.toUpperCase();
      filterOptionFunc = function filterOptionFunc(_, dataNode) {
        var value = dataNode[treeNodeFilterPropValue];
        return String(value).toUpperCase().includes(upperStr);
      };
    }
    function dig(list) {
      var keepAll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var res = [];
      for (var index = 0, len = list.length; index < len; index++) {
        var dataNode = list[index];
        var children = dataNode[fieldChildren];
        var match = keepAll || filterOptionFunc(searchValueVal, fillLegacyProps(dataNode));
        var childList = dig(children || [], match);
        if (match || childList.length) {
          res.push(_objectSpread(_objectSpread({}, dataNode), {}, _defineProperty({}, fieldChildren, childList)));
        }
      }
      return res;
    }
    return dig(treeData.value);
  });
});