import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { createVNode as _createVNode, resolveDirective as _resolveDirective } from "vue";
import Tag from '../tag';
export default function PickerTag(props, _ref) {
  var slots = _ref.slots,
    attrs = _ref.attrs;
  return _createVNode(Tag, _objectSpread(_objectSpread({
    "color": "blue"
  }, props), attrs), slots);
}