import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { createVNode as _createVNode } from "vue";
export function renderExpandIcon(_ref) {
  var _ref2;
  var prefixCls = _ref.prefixCls,
    record = _ref.record,
    onExpand = _ref.onExpand,
    expanded = _ref.expanded,
    expandable = _ref.expandable;
  var expandClassName = "".concat(prefixCls, "-row-expand-icon");
  if (!expandable) {
    return _createVNode("span", {
      "class": [expandClassName, "".concat(prefixCls, "-row-spaced")]
    }, null);
  }
  var onClick = function onClick(event) {
    onExpand(record, event);
    event.stopPropagation();
  };
  return _createVNode("span", {
    "class": (_ref2 = {}, _defineProperty(_ref2, expandClassName, true), _defineProperty(_ref2, "".concat(prefixCls, "-row-expanded"), expanded), _defineProperty(_ref2, "".concat(prefixCls, "-row-collapsed"), !expanded), _ref2),
    "onClick": onClick
  }, null);
}
export function findAllChildrenKeys(data, getRowKey, childrenColumnName) {
  var keys = [];
  function dig(list) {
    (list || []).forEach(function (item, index) {
      keys.push(getRowKey(item, index));
      dig(item[childrenColumnName]);
    });
  }
  dig(data);
  return keys;
}