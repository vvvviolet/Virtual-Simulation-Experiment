"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.QUARTER_COL_COUNT = void 0;
var _vue = require("vue");
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _dateUtil = require("../../utils/dateUtil");
var _RangeContext = require("../../RangeContext");
var _useCellClassName = _interopRequireDefault(require("../../hooks/useCellClassName"));
var _PanelBody = _interopRequireDefault(require("../PanelBody"));
var _useMergeProps = _interopRequireDefault(require("../../hooks/useMergeProps"));
var QUARTER_COL_COUNT = 4;
exports.QUARTER_COL_COUNT = QUARTER_COL_COUNT;
var QUARTER_ROW_COUNT = 1;
function QuarterBody(_props) {
  var props = (0, _useMergeProps.default)(_props);
  var prefixCls = props.prefixCls,
    locale = props.locale,
    value = props.value,
    viewDate = props.viewDate,
    generateConfig = props.generateConfig;
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
      return (0, _dateUtil.isSameQuarter)(generateConfig, current, target);
    },
    isInView: function isInView() {
      return true;
    },
    offsetCell: function offsetCell(date, offset) {
      return generateConfig.addMonth(date, offset * 3);
    }
  });
  var baseQuarter = generateConfig.setDate(generateConfig.setMonth(viewDate, 0), 1);
  return (0, _vue.createVNode)(_PanelBody.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, props), {}, {
    "rowNum": QUARTER_ROW_COUNT,
    "colNum": QUARTER_COL_COUNT,
    "baseDate": baseQuarter,
    "getCellText": function getCellText(date) {
      return (0, _dateUtil.formatValue)(date, {
        locale: locale,
        format: locale.quarterFormat || '[Q]Q',
        generateConfig: generateConfig
      });
    },
    "getCellClassName": getCellClassName,
    "getCellDate": function getCellDate(date, offset) {
      return generateConfig.addMonth(date, offset * 3);
    },
    "titleCell": function titleCell(date) {
      return (0, _dateUtil.formatValue)(date, {
        locale: locale,
        format: 'YYYY-[Q]Q',
        generateConfig: generateConfig
      });
    }
  }), null);
}
QuarterBody.displayName = 'QuarterBody';
QuarterBody.inheritAttrs = false;
var _default = QuarterBody;
exports.default = _default;