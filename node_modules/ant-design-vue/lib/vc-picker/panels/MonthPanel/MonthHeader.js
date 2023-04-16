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
function MonthHeader(_props) {
  var props = (0, _useMergeProps.default)(_props);
  var prefixCls = props.prefixCls,
    generateConfig = props.generateConfig,
    locale = props.locale,
    viewDate = props.viewDate,
    onNextYear = props.onNextYear,
    onPrevYear = props.onPrevYear,
    onYearClick = props.onYearClick;
  var _useInjectPanel = (0, _PanelContext.useInjectPanel)(),
    hideHeader = _useInjectPanel.hideHeader;
  if (hideHeader.value) {
    return null;
  }
  var headerPrefixCls = "".concat(prefixCls, "-header");
  return (0, _vue.createVNode)(_Header.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, props), {}, {
    "prefixCls": headerPrefixCls,
    "onSuperPrev": onPrevYear,
    "onSuperNext": onNextYear
  }), {
    default: function _default() {
      return [(0, _vue.createVNode)("button", {
        "type": "button",
        "onClick": onYearClick,
        "class": "".concat(prefixCls, "-year-btn")
      }, [(0, _dateUtil.formatValue)(viewDate, {
        locale: locale,
        format: locale.yearFormat,
        generateConfig: generateConfig
      })])];
    }
  });
}
MonthHeader.displayName = 'MonthHeader';
MonthHeader.inheritAttrs = false;
var _default2 = MonthHeader;
exports.default = _default2;