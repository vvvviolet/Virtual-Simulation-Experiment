import { cloneVNode } from 'vue';
import { flattenChildren } from '../_util/props-util';
var Item = function Item(_ref, _ref2) {
  var _slots$default;
  var setRef = _ref.setRef;
  var slots = _ref2.slots;
  var children = flattenChildren((_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots));
  return children && children.length ? cloneVNode(children[0], {
    ref: setRef
  }) : children;
};
Item.props = {
  setRef: {
    type: Function,
    default: function _default() {}
  }
};
export default Item;