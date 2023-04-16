import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
var _excluded = ["default"];
import { camelize } from 'vue';
import { flattenChildren } from '../_util/props-util';
export function getColumnKey(column, defaultKey) {
  if ('key' in column && column.key !== undefined && column.key !== null) {
    return column.key;
  }
  if (column.dataIndex) {
    return Array.isArray(column.dataIndex) ? column.dataIndex.join('.') : column.dataIndex;
  }
  return defaultKey;
}
export function getColumnPos(index, pos) {
  return pos ? "".concat(pos, "-").concat(index) : "".concat(index);
}
export function renderColumnTitle(title, props) {
  if (typeof title === 'function') {
    return title(props);
  }
  return title;
}
export function convertChildrenToColumns() {
  var elements = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var flattenElements = flattenChildren(elements);
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
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
        k = _Object$entries$_i[0],
        v = _Object$entries$_i[1];
      props[camelize(k)] = v;
    }
    var _ref = element.children || {},
      children = _ref.default,
      restSlots = _objectWithoutProperties(_ref, _excluded);
    var column = _objectSpread(_objectSpread(_objectSpread({}, restSlots), props), {}, {
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