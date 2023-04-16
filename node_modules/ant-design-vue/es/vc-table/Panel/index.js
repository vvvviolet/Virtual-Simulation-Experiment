import { createVNode as _createVNode } from "vue";
function Panel(_, _ref) {
  var _slots$default;
  var slots = _ref.slots;
  return _createVNode("div", null, [(_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)]);
}
Panel.displayName = 'Panel';
export default Panel;