import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { createVNode as _createVNode } from "vue";
var Indent = function Indent(_ref) {
  var prefixCls = _ref.prefixCls,
    level = _ref.level,
    isStart = _ref.isStart,
    isEnd = _ref.isEnd;
  var baseClassName = "".concat(prefixCls, "-indent-unit");
  var list = [];
  for (var i = 0; i < level; i += 1) {
    var _ref2;
    list.push(_createVNode("span", {
      "key": i,
      "class": (_ref2 = {}, _defineProperty(_ref2, baseClassName, true), _defineProperty(_ref2, "".concat(baseClassName, "-start"), isStart[i]), _defineProperty(_ref2, "".concat(baseClassName, "-end"), isEnd[i]), _ref2)
    }, null));
  }
  return _createVNode("span", {
    "aria-hidden": "true",
    "class": "".concat(prefixCls, "-indent")
  }, [list]);
};
export default Indent;