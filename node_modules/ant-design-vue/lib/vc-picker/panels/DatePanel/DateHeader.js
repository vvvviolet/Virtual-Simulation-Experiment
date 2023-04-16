"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = require("vue");
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _Header = _interopRequireDefault(require("../Header"));
var _PanelContext = require("../../PanelContext");
var _dateUtil = require("../../utils/dateUtil");
var _useMergeProps = _interopRequireDefault(require("../../hooks/useMergeProps"));
function DateHeader(_props) {
  var props = (0, _useMergeProps.default)(_props);
  var prefixCls = props.prefixCls,
    generateConfig = props.generateConfig,
    locale = props.locale,
    viewDate = props.viewDate,
    onNextMonth = props.onNextMonth,
    onPrevMonth = props.onPrevMonth,
    onNextYear = props.onNextYear,
    onPrevYear = props.onPrevYear,
    onYearClick = props.onYearClick,
    onMonthClick = props.onMonthClick;
  var _useInjectPanel = (0, _PanelContext.useInjectPanel)(),
    hideHeader = _useInjectPanel.hideHeader;
  if (hideHeader.value) {
    return null;
  }
  var headerPrefixCls = "".concat(prefixCls, "-header");
  var monthsLocale = locale.shortMonths || (generateConfig.locale.getShortMonths ? generateConfig.locale.getShortMonths(locale.locale) : []);
  var month = generateConfig.getMonth(viewDate);
  // =================== Month & Year ===================
  var yearNode = (0, _vue.createVNode)("button", {
    "type": "button",
    "key": "year",
    "onClick": onYearClick,
    "tabindex": -1,
    "class": "".concat(prefixCls, "-year-btn")
  }, [(0, _dateUtil.formatValue)(viewDate, {
    locale: locale,
    format: locale.yearFormat,
    generateConfig: generateConfig
  })]);
  var monthNode = (0, _vue.createVNode)("button", {
    "type": "button",
    "key": "month",
    "onClick": onMonthClick,
    "tabindex": -1,
    "class": "".concat(prefixCls, "-month-btn")
  }, [locale.monthFormat ? (0, _dateUtil.formatValue)(viewDate, {
    locale: locale,
    format: locale.monthFormat,
    generateConfig: generateConfig
  }) : monthsLocale[month]]);
  var monthYearNodes = locale.monthBeforeYear ? [monthNode, yearNode] : [yearNode, monthNode];
  return (0, _vue.createVNode)(_Header.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, props), {}, {
    "prefixCls": headerPrefixCls,
    "onSuperPrev": onPrevYear,
    "onPrev": onPrevMonth,
    "onNext": onNextMonth,
    "onSuperNext": onNextYear
  }), {
    default: function _default() {
      return [monthYearNodes];
    }
  });
}
DateHeader.displayName = 'DateHeader';
DateHeader.inheritAttrs = false;
var _default2 = DateHeader;
exports.default = _default2;