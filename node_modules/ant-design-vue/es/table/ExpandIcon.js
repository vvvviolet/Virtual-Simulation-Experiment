import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { createVNode as _createVNode } from "vue";
import classNames from '../_util/classNames';
function renderExpandIcon(locale) {
  return function expandIcon(_ref) {
    var _classNames;
    var prefixCls = _ref.prefixCls,
      onExpand = _ref.onExpand,
      record = _ref.record,
      expanded = _ref.expanded,
      expandable = _ref.expandable;
    var iconPrefix = "".concat(prefixCls, "-row-expand-icon");
    return _createVNode("button", {
      "type": "button",
      "onClick": function onClick(e) {
        onExpand(record, e);
        e.stopPropagation();
      },
      "class": classNames(iconPrefix, (_classNames = {}, _defineProperty(_classNames, "".concat(iconPrefix, "-spaced"), !expandable), _defineProperty(_classNames, "".concat(iconPrefix, "-expanded"), expandable && expanded), _defineProperty(_classNames, "".concat(iconPrefix, "-collapsed"), expandable && !expanded), _classNames)),
      "aria-label": expanded ? locale.collapse : locale.expand
    }, null);
  };
}
export default renderExpandIcon;