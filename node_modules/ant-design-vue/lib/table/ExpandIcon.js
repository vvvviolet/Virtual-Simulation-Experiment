"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = require("vue");
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _classNames2 = _interopRequireDefault(require("../_util/classNames"));
function renderExpandIcon(locale) {
  return function expandIcon(_ref) {
    var _classNames;
    var prefixCls = _ref.prefixCls,
      onExpand = _ref.onExpand,
      record = _ref.record,
      expanded = _ref.expanded,
      expandable = _ref.expandable;
    var iconPrefix = "".concat(prefixCls, "-row-expand-icon");
    return (0, _vue.createVNode)("button", {
      "type": "button",
      "onClick": function onClick(e) {
        onExpand(record, e);
        e.stopPropagation();
      },
      "class": (0, _classNames2.default)(iconPrefix, (_classNames = {}, (0, _defineProperty2.default)(_classNames, "".concat(iconPrefix, "-spaced"), !expandable), (0, _defineProperty2.default)(_classNames, "".concat(iconPrefix, "-expanded"), expandable && expanded), (0, _defineProperty2.default)(_classNames, "".concat(iconPrefix, "-collapsed"), expandable && !expanded), _classNames)),
      "aria-label": expanded ? locale.collapse : locale.expand
    }, null);
  };
}
var _default = renderExpandIcon;
exports.default = _default;