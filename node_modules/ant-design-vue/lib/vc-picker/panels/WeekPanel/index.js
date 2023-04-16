"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = require("vue");
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _DatePanel = _interopRequireDefault(require("../DatePanel"));
var _dateUtil = require("../../utils/dateUtil");
var _classNames2 = _interopRequireDefault(require("../../../_util/classNames"));
var _useMergeProps = _interopRequireDefault(require("../../hooks/useMergeProps"));
function WeekPanel(_props) {
  var props = (0, _useMergeProps.default)(_props);
  var prefixCls = props.prefixCls,
    generateConfig = props.generateConfig,
    locale = props.locale,
    value = props.value;
  // Render additional column
  var cellPrefixCls = "".concat(prefixCls, "-cell");
  var prefixColumn = function prefixColumn(date) {
    return (0, _vue.createVNode)("td", {
      "key": "week",
      "class": (0, _classNames2.default)(cellPrefixCls, "".concat(cellPrefixCls, "-week"))
    }, [generateConfig.locale.getWeek(locale.locale, date)]);
  };
  // Add row className
  var rowPrefixCls = "".concat(prefixCls, "-week-panel-row");
  var rowClassName = function rowClassName(date) {
    return (0, _classNames2.default)(rowPrefixCls, (0, _defineProperty2.default)({}, "".concat(rowPrefixCls, "-selected"), (0, _dateUtil.isSameWeek)(generateConfig, locale.locale, value, date)));
  };
  return (0, _vue.createVNode)(_DatePanel.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, props), {}, {
    "panelName": "week",
    "prefixColumn": prefixColumn,
    "rowClassName": rowClassName,
    "keyboardConfig": {
      onLeftRight: null
    }
  }), null);
}
WeekPanel.displayName = 'WeekPanel';
WeekPanel.inheritAttrs = false;
var _default = WeekPanel;
exports.default = _default;