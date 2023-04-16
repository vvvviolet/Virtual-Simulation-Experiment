import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["value", "disabled"];
import { flattenChildren, isValidElement } from '../../_util/props-util';
function convertNodeToOption(node) {
  var key = node.key,
    children = node.children,
    _node$props = node.props,
    value = _node$props.value,
    disabled = _node$props.disabled,
    restProps = _objectWithoutProperties(_node$props, _excluded);
  var child = children === null || children === void 0 ? void 0 : children.default;
  return _objectSpread({
    key: key,
    value: value !== undefined ? value : key,
    children: child,
    disabled: disabled || disabled === ''
  }, restProps);
}
export function convertChildrenToData(nodes) {
  var optionOnly = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var dd = flattenChildren(nodes).map(function (node, index) {
    var _children$label;
    if (!isValidElement(node) || !node.type) {
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
    return _objectSpread(_objectSpread({
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