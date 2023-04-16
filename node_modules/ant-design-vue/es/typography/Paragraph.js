import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { createVNode as _createVNode, resolveDirective as _resolveDirective } from "vue";
import omit from '../_util/omit';
import Base, { baseProps } from './Base';
export var paragraphProps = function paragraphProps() {
  return omit(baseProps(), ['component']);
};
var Paragraph = function Paragraph(props, _ref) {
  var slots = _ref.slots,
    attrs = _ref.attrs;
  var paragraphProps = _objectSpread(_objectSpread({}, props), {}, {
    component: 'div'
  }, attrs);
  return _createVNode(Base, paragraphProps, slots);
};
Paragraph.displayName = 'ATypographyParagraph';
Paragraph.inheritAttrs = false;
Paragraph.props = paragraphProps();
export default Paragraph;