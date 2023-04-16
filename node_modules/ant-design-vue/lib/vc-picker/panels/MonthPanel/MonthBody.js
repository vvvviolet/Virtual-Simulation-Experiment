"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.MONTH_COL_COUNT = void 0;
var _vue = require("vue");
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _dateUtil = require("../../utils/dateUtil");
var _RangeContext = require("../../RangeContext");
var _useCellClassName = _interopRequireDefault(require("../../hooks/useCellClassName"));
var _PanelBody = _interopRequireDefault(require("../PanelBody"));
var _useMergeProps = _interopRequireDefault(require("../../hooks/useMergeProps"));
var MONTH_COL_COUNT = 3;
exports.MONTH_COL_COUNT = MONTH_COL_COUNT;
var MONTH_ROW_COUNT = 4;
function MonthBody(_props) {
  var props = (0, _useMergeProps.default)(_props);
  var prefixCls = props.prefixCls,
    locale = props.locale,
    value = props.value,
    viewDate = props.viewDate,
    generateConfig = props.generateConfig,
    monthCellRender = props.monthCellRender;
  var _useInjectRange = (0, _RangeContext.useInjectRange)(),
    rangedValue = _useInjectRange.rangedValue,
    hoverRangedValue = _useInjectRange.hoverRangedValue;
  var cellPrefixCls = "".concat(prefixCls, "-cell");
  var getCellClassName = (0, _useCellClassName.default)({
    cellPrefixCls: cellPrefixCls,
    value: value,
    generateConfig: generateConfig,
    rangedValue: rangedValue.value,
    hoverRangedValue: hoverRangedValue.value,
    isSameCell: function isSameCell(current, target) {
      return (0, _dateUtil.isSameMonth)(generateConfig, current, target);
    },
    isInView: function isInView() {
      return true;
    },
    offsetCell: function offsetCell(date, offset) {
      return generateConfig.addMonth(date, offset);
    }
  });
  var monthsLocale = locale.shortMonths || (generateConfig.locale.getShortMonths ? generateConfig.locale.getShortMonths(locale.locale) : []);
  var baseMonth = generateConfig.setMonth(viewDate, 0);
  var getCellNode = monthCellRender ? function (date) {
    return monthCellRender({
      current: date,
      locale: locale
    });
  } : undefined;
  return (0, _vue.createVNode)(_PanelBody.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, props), {}, {
    "rowNum": MONTH_ROW_COUNT,
    "colNum": MONTH_COL_COUNT,
    "baseDate": baseMonth,
    "getCellNode": getCellNode,
    "getCellText": function getCellText(date) {
      return locale.monthFormat ? (0, _dateUtil.formatValue)(date, {
        locale: locale,
        format: locale.monthFormat,
        generateConfig: generateConfig
      }) : monthsLocale[generateConfig.getMonth(date)];
    },
    "getCellClassName": getCellClassName,
    "getCellDate": generateConfig.addMonth,
    "titleCell": function titleCell(date) {
      return (0, _dateUtil.formatValue)(date, {
        locale: locale,
        format: 'YYYY-MM',
        generateConfig: generateConfig
      });
    }
  }), null);
}
MonthBody.displayName = 'MonthBody';
MonthBody.inheritAttrs = false;
var _default = MonthBody;
exports.default = _default;