"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = require("vue");
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _dateUtil = require("../../utils/dateUtil");
var _useCellClassName = _interopRequireDefault(require("../../hooks/useCellClassName"));
var _PanelBody = _interopRequireDefault(require("../PanelBody"));
var _RangeContext = require("../../RangeContext");
var _useMergeProps = _interopRequireDefault(require("../../hooks/useMergeProps"));
function DateBody(_props) {
  var props = (0, _useMergeProps.default)(_props);
  var prefixCls = props.prefixCls,
    generateConfig = props.generateConfig,
    prefixColumn = props.prefixColumn,
    locale = props.locale,
    rowCount = props.rowCount,
    viewDate = props.viewDate,
    value = props.value,
    dateRender = props.dateRender;
  var _useInjectRange = (0, _RangeContext.useInjectRange)(),
    rangedValue = _useInjectRange.rangedValue,
    hoverRangedValue = _useInjectRange.hoverRangedValue;
  var baseDate = (0, _dateUtil.getWeekStartDate)(locale.locale, generateConfig, viewDate);
  var cellPrefixCls = "".concat(prefixCls, "-cell");
  var weekFirstDay = generateConfig.locale.getWeekFirstDay(locale.locale);
  var today = generateConfig.getNow();
  // ============================== Header ==============================
  var headerCells = [];
  var weekDaysLocale = locale.shortWeekDays || (generateConfig.locale.getShortWeekDays ? generateConfig.locale.getShortWeekDays(locale.locale) : []);
  if (prefixColumn) {
    headerCells.push((0, _vue.createVNode)("th", {
      "key": "empty",
      "aria-label": "empty cell"
    }, null));
  }
  for (var i = 0; i < _dateUtil.WEEK_DAY_COUNT; i += 1) {
    headerCells.push((0, _vue.createVNode)("th", {
      "key": i
    }, [weekDaysLocale[(i + weekFirstDay) % _dateUtil.WEEK_DAY_COUNT]]));
  }
  // =============================== Body ===============================
  var getCellClassName = (0, _useCellClassName.default)({
    cellPrefixCls: cellPrefixCls,
    today: today,
    value: value,
    generateConfig: generateConfig,
    rangedValue: prefixColumn ? null : rangedValue.value,
    hoverRangedValue: prefixColumn ? null : hoverRangedValue.value,
    isSameCell: function isSameCell(current, target) {
      return (0, _dateUtil.isSameDate)(generateConfig, current, target);
    },
    isInView: function isInView(date) {
      return (0, _dateUtil.isSameMonth)(generateConfig, date, viewDate);
    },
    offsetCell: function offsetCell(date, offset) {
      return generateConfig.addDate(date, offset);
    }
  });
  var getCellNode = dateRender ? function (date) {
    return dateRender({
      current: date,
      today: today
    });
  } : undefined;
  return (0, _vue.createVNode)(_PanelBody.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, props), {}, {
    "rowNum": rowCount,
    "colNum": _dateUtil.WEEK_DAY_COUNT,
    "baseDate": baseDate,
    "getCellNode": getCellNode,
    "getCellText": generateConfig.getDate,
    "getCellClassName": getCellClassName,
    "getCellDate": generateConfig.addDate,
    "titleCell": function titleCell(date) {
      return (0, _dateUtil.formatValue)(date, {
        locale: locale,
        format: 'YYYY-MM-DD',
        generateConfig: generateConfig
      });
    },
    "headerCells": headerCells
  }), null);
}
DateBody.displayName = 'DateBody';
DateBody.inheritAttrs = false;
DateBody.props = ['prefixCls', 'generateConfig', 'value?', 'viewDate', 'locale', 'rowCount', 'onSelect', 'dateRender?', 'disabledDate?',
// Used for week panel
'prefixColumn?', 'rowClassName?'];
var _default = DateBody;
exports.default = _default;