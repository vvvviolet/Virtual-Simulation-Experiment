import { createVNode as _createVNode } from "vue";
var FilterDropdownMenuWrapper = function FilterDropdownMenuWrapper(_props, _ref) {
  var _slots$default;
  var slots = _ref.slots;
  return _createVNode("div", {
    "onClick": function onClick(e) {
      return e.stopPropagation();
    }
  }, [(_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)]);
};
export default FilterDropdownMenuWrapper;