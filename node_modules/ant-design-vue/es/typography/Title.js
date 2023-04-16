import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
var _excluded = ["level"];
import { createVNode as _createVNode, resolveDirective as _resolveDirective } from "vue";
import omit from '../_util/omit';
import { tupleNum } from '../_util/type';
import warning from '../_util/warning';
import Base, { baseProps } from './Base';
var TITLE_ELE_LIST = tupleNum(1, 2, 3, 4, 5);
export var titleProps = function titleProps() {
  return _objectSpread(_objectSpread({}, omit(baseProps(), ['component', 'strong'])), {}, {
    level: Number
  });
};
var Title = function Title(props, _ref) {
  var slots = _ref.slots,
    attrs = _ref.attrs;
  var _props$level = props.level,
    level = _props$level === void 0 ? 1 : _props$level,
    restProps = _objectWithoutProperties(props, _excluded);
  var component;
  if (TITLE_ELE_LIST.indexOf(level) !== -1) {
    component = "h".concat(level);
  } else {
    warning(false, 'Typography', 'Title only accept `1 | 2 | 3 | 4 | 5` as `level` value.');
    component = 'h1';
  }
  var titleProps = _objectSpread(_objectSpread({}, restProps), {}, {
    component: component
  }, attrs);
  return _createVNode(Base, titleProps, slots);
};
Title.displayName = 'ATypographyTitle';
Title.inheritAttrs = false;
Title.props = titleProps();
export default Title;