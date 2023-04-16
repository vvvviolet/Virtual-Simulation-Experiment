import _typeof from "@babel/runtime/helpers/esm/typeof";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
var _excluded = ["ellipsis", "rel"];
import { createVNode as _createVNode, resolveDirective as _resolveDirective } from "vue";
import warning from '../_util/warning';
import Base, { baseProps } from './Base';
import omit from '../_util/omit';
export var linkProps = function linkProps() {
  return omit(_objectSpread(_objectSpread({}, baseProps()), {}, {
    ellipsis: {
      type: Boolean,
      default: undefined
    }
  }), ['component']);
};
var Link = function Link(props, _ref) {
  var slots = _ref.slots,
    attrs = _ref.attrs;
  var _props$attrs = _objectSpread(_objectSpread({}, props), attrs),
    ellipsis = _props$attrs.ellipsis,
    rel = _props$attrs.rel,
    restProps = _objectWithoutProperties(_props$attrs, _excluded);
  warning(_typeof(ellipsis) !== 'object', 'Typography.Link', '`ellipsis` only supports boolean value.');
  var mergedProps = _objectSpread(_objectSpread({}, restProps), {}, {
    rel: rel === undefined && restProps.target === '_blank' ? 'noopener noreferrer' : rel,
    ellipsis: !!ellipsis,
    component: 'a'
  });
  // https://github.com/ant-design/ant-design/issues/26622
  // @ts-ignore
  delete mergedProps.navigate;
  return _createVNode(Base, mergedProps, slots);
};
Link.displayName = 'ATypographyLink';
Link.inheritAttrs = false;
Link.props = linkProps();
export default Link;