"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertChildrenToColumns = convertChildrenToColumns;
exports.getColumnKey = getColumnKey;
exports.getColumnPos = getColumnPos;
exports.renderColumnTitle = renderColumnTitle;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _vue = require("vue");
var _propsUtil = require("../_util/props-util");
var _excluded = ["default"];
function getColumnKey(column, defaultKey) {
  if ('key' in column && column.key !== undefined && column.key !== null) {
    return column.key;
  }
  if (column.dataIndex) {
    return Array.isArray(column.dataIndex) ? column.dataIndex.join('.') : column.dataIndex;
  }
  return defaultKey;
}
function getColumnPos(index, pos) {
  return pos ? "".concat(pos, "-").concat(index) : "".concat(index);
}
function renderColumnTitle(title, props) {
  if (typeof title === 'function') {
    return title(props);
  }
  return title;
}
function convertChildrenToColumns() {
  var elements = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var flattenElements = (0, _propsUtil.flattenChildren)(elements);
  var columns = [];
  flattenElements.forEach(function (element) {
    var _element$props, _element$props2, _element$type;
    if (!element) {
      return;
    }
    var key = element.key;
    var style = ((_element$props = element.props) === null || _element$props === void 0 ? void 0 : _element$props.style) || {};
    var cls = ((_element$props2 = element.props) === null || _element$props2 === void 0 ? void 0 : _element$props2.class) || '';
    var props = element.props || {};
    for (var _i = 0, _Object$entries = Object.entries(props); _i < _Object$entries.length; _i++) {
      var _Object$entries$_i = (0, _slicedToArray2.default)(_Object$entries[_i], 2),
        k = _Object$entries$_i[0],
        v = _Object$entries$_i[1];
      props[(0, _vue.camelize)(k)] = v;
    }
    var _ref = element.children || {},
      children = _ref.default,
      restSlots = (0, _objectWithoutProperties2.default)(_ref, _excluded);
    var column = (0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({}, restSlots), props), {}, {
      style: style,
      class: cls
    });
    if (key) {
      column.key = key;
    }
    if ((_element$type = element.type) !== null && _element$type !== void 0 && _element$type.__ANT_TABLE_COLUMN_GROUP) {
      column.children = convertChildrenToColumns(typeof children === 'function' ? children() : children);
    } else {
      var _element$children;
      var customRender = (_element$children = element.children) === null || _element$children === void 0 ? void 0 : _element$children.default;
      column.customRender = column.customRender || customRender;
    }
    columns.push(column);
  });
  return columns;
}