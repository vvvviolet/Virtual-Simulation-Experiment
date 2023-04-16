"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.YEAR_COL_COUNT = void 0;
var _vue = require("vue");
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _ = require(".");
var _useCellClassName = _interopRequireDefault(require("../../hooks/useCellClassName"));
var _dateUtil = require("../../utils/dateUtil");
var _RangeContext = require("../../RangeContext");
var _PanelBody = _interopRequireDefault(require("../PanelBody"));
var _useMergeProps = _interopRequireDefault(require("../../hooks/useMergeProps"));
var YEAR_COL_COUNT = 3;
exports.YEAR_COL_COUNT = YEAR_COL_COUNT;
var YEAR_ROW_COUNT = 4;
function YearBody(_props) {
  var props = (0, _useMergeProps.default)(_props);
  var prefixCls = props.prefixCls,
    value = props.value,
    viewDate = props.viewDate,
    locale = props.locale,
    generateConfig = props.generateConfig;
  var _useInjectRange = (0, _RangeContext.useInjectRange)(),
    rangedValue = _useInjectRange.rangedValue,
    hoverRangedValue = _useInjectRange.hoverRangedValue;
  var yearPrefixCls = "".concat(prefixCls, "-cell");
  // =============================== Year ===============================
  var yearNumber = generateConfig.getYear(viewDate);
  var startYear = Math.floor(yearNumber / _.YEAR_DECADE_COUNT) * _.YEAR_DECADE_COUNT;
  var endYear = startYear + _.YEAR_DECADE_COUNT - 1;
  var baseYear = generateConfig.setYear(viewDate, startYear - Math.ceil((YEAR_COL_COUNT * YEAR_ROW_COUNT - _.YEAR_DECADE_COUNT) / 2));
  var isInView = function isInView(date) {
    var currentYearNumber = generateConfig.getYear(date);
    return startYear <= currentYearNumber && currentYearNumber <= endYear;
  };
  var getCellClassName = (0, _useCellClassName.default)({
    cellPrefixCls: yearPrefixCls,
    value: value,
    generateConfig: generateConfig,
    rangedValue: rangedValue.value,
    hoverRangedValue: hoverRangedValue.value,
    isSameCell: function isSameCell(current, target) {
      return (0, _dateUtil.isSameYear)(generateConfig, current, target);
    },
    isInView: isInView,
    offsetCell: function offsetCell(date, offset) {
      return generateConfig.addYear(date, offset);
    }
  });
  return (0, _vue.createVNode)(_PanelBody.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, props), {}, {
    "rowNum": YEAR_ROW_COUNT,
    "colNum": YEAR_COL_COUNT,
    "baseDate": baseYear,
    "getCellText": generateConfig.getYear,
    "getCellClassName": getCellClassName,
    "getCellDate": generateConfig.addYear,
    "titleCell": function titleCell(date) {
      return (0, _dateUtil.formatValue)(date, {
        locale: locale,
        format: 'YYYY',
        generateConfig: generateConfig
      });
    }
  }), null);
}
YearBody.displayName = 'YearBody';
YearBody.inheritAttrs = false;
var _default = YearBody;
exports.default = _default;