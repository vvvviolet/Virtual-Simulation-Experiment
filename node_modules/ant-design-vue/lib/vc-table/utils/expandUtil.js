"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findAllChildrenKeys = findAllChildrenKeys;
exports.renderExpandIcon = renderExpandIcon;
var _vue = require("vue");
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
function renderExpandIcon(_ref) {
  var _ref2;
  var prefixCls = _ref.prefixCls,
    record = _ref.record,
    onExpand = _ref.onExpand,
    expanded = _ref.expanded,
    expandable = _ref.expandable;
  var expandClassName = "".concat(prefixCls, "-row-expand-icon");
  if (!expandable) {
    return (0, _vue.createVNode)("span", {
      "class": [expandClassName, "".concat(prefixCls, "-row-spaced")]
    }, null);
  }
  var onClick = function onClick(event) {
    onExpand(record, event);
    event.stopPropagation();
  };
  return (0, _vue.createVNode)("span", {
    "class": (_ref2 = {}, (0, _defineProperty2.default)(_ref2, expandClassName, true), (0, _defineProperty2.default)(_ref2, "".concat(prefixCls, "-row-expanded"), expanded), (0, _defineProperty2.default)(_ref2, "".concat(prefixCls, "-row-collapsed"), !expanded), _ref2),
    "onClick": onClick
  }, null);
}
function findAllChildrenKeys(data, getRowKey, childrenColumnName) {
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