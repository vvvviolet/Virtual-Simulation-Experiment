"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertChildrenToData = convertChildrenToData;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _propsUtil = require("../../_util/props-util");
var _excluded = ["value", "disabled"];
function convertNodeToOption(node) {
  var key = node.key,
    children = node.children,
    _node$props = node.props,
    value = _node$props.value,
    disabled = _node$props.disabled,
    restProps = (0, _objectWithoutProperties2.default)(_node$props, _excluded);
  var child = children === null || children === void 0 ? void 0 : children.default;
  return (0, _objectSpread2.default)({
    key: key,
    value: value !== undefined ? value : key,
    children: child,
    disabled: disabled || disabled === ''
  }, restProps);
}
function convertChildrenToData(nodes) {
  var optionOnly = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var dd = (0, _propsUtil.flattenChildren)(nodes).map(function (node, index) {
    var _children$label;
    if (!(0, _propsUtil.isValidElement)(node) || !node.type) {
      return null;
    }
    var isSelectOptGroup = node.type.isSelectOptGroup,
      key = node.key,
      children = node.children,
      props = node.props;
    if (optionOnly || !isSelectOptGroup) {
      return convertNodeToOption(node);
    }
    var child = children && children.default ? children.default() : undefined;
    var label = (props === null || props === void 0 ? void 0 : props.label) || ((_children$label = children.label) === null || _children$label === void 0 ? void 0 : _children$label.call(children)) || key;
    return (0, _objectSpread2.default)((0, _objectSpread2.default)({
      key: "__RC_SELECT_GRP__".concat(key === null ? index : String(key), "__")
    }, props), {}, {
      label: label,
      options: convertChildrenToData(child || [])
    });
  }).filter(function (data) {
    return data;
  });
  return dd;
}