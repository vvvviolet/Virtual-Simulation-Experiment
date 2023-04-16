import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { createVNode as _createVNode } from "vue";
import Header from '../Header';
import { useInjectPanel } from '../../PanelContext';
import { formatValue } from '../../utils/dateUtil';
import useMergeProps from '../../hooks/useMergeProps';
function DateHeader(_props) {
  var props = useMergeProps(_props);
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
  var _useInjectPanel = useInjectPanel(),
    hideHeader = _useInjectPanel.hideHeader;
  if (hideHeader.value) {
    return null;
  }
  var headerPrefixCls = "".concat(prefixCls, "-header");
  var monthsLocale = locale.shortMonths || (generateConfig.locale.getShortMonths ? generateConfig.locale.getShortMonths(locale.locale) : []);
  var month = generateConfig.getMonth(viewDate);
  // =================== Month & Year ===================
  var yearNode = _createVNode("button", {
    "type": "button",
    "key": "year",
    "onClick": onYearClick,
    "tabindex": -1,
    "class": "".concat(prefixCls, "-year-btn")
  }, [formatValue(viewDate, {
    locale: locale,
    format: locale.yearFormat,
    generateConfig: generateConfig
  })]);
  var monthNode = _createVNode("button", {
    "type": "button",
    "key": "month",
    "onClick": onMonthClick,
    "tabindex": -1,
    "class": "".concat(prefixCls, "-month-btn")
  }, [locale.monthFormat ? formatValue(viewDate, {
    locale: locale,
    format: locale.monthFormat,
    generateConfig: generateConfig
  }) : monthsLocale[month]]);
  var monthYearNodes = locale.monthBeforeYear ? [monthNode, yearNode] : [yearNode, monthNode];
  return _createVNode(Header, _objectSpread(_objectSpread({}, props), {}, {
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
export default DateHeader;