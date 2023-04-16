import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { createVNode as _createVNode, resolveDirective as _resolveDirective } from "vue";
import Button from '../button';
var PickerButton = function PickerButton(props, _ref) {
  var attrs = _ref.attrs,
    slots = _ref.slots;
  return _createVNode(Button, _objectSpread(_objectSpread({
    "size": "small",
    "type": "primary"
  }, props), attrs), slots);
};
export default PickerButton;