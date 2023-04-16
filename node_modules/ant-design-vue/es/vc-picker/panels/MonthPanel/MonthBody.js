import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { createVNode as _createVNode } from "vue";
import { formatValue, isSameMonth } from '../../utils/dateUtil';
import { useInjectRange } from '../../RangeContext';
import useCellClassName from '../../hooks/useCellClassName';
import PanelBody from '../PanelBody';
import useMergeProps from '../../hooks/useMergeProps';
export var MONTH_COL_COUNT = 3;
var MONTH_ROW_COUNT = 4;
function MonthBody(_props) {
  var props = useMergeProps(_props);
  var prefixCls = props.prefixCls,
    locale = props.locale,
    value = props.value,
    viewDate = props.viewDate,
    generateConfig = props.generateConfig,
    monthCellRender = props.monthCellRender;
  var _useInjectRange = useInjectRange(),
    rangedValue = _useInjectRange.rangedValue,
    hoverRangedValue = _useInjectRange.hoverRangedValue;
  var cellPrefixCls = "".concat(prefixCls, "-cell");
  var getCellClassName = useCellClassName({
    cellPrefixCls: cellPrefixCls,
    value: value,
    generateConfig: generateConfig,
    rangedValue: rangedValue.value,
    hoverRangedValue: hoverRangedValue.value,
    isSameCell: function isSameCell(current, target) {
      return isSameMonth(generateConfig, current, target);
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
  return _createVNode(PanelBody, _objectSpread(_objectSpread({}, props), {}, {
    "rowNum": MONTH_ROW_COUNT,
    "colNum": MONTH_COL_COUNT,
    "baseDate": baseMonth,
    "getCellNode": getCellNode,
    "getCellText": function getCellText(date) {
      return locale.monthFormat ? formatValue(date, {
        locale: locale,
        format: locale.monthFormat,
        generateConfig: generateConfig
      }) : monthsLocale[generateConfig.getMonth(date)];
    },
    "getCellClassName": getCellClassName,
    "getCellDate": generateConfig.addMonth,
    "titleCell": function titleCell(date) {
      return formatValue(date, {
        locale: locale,
        format: 'YYYY-MM',
        generateConfig: generateConfig
      });
    }
  }), null);
}
MonthBody.displayName = 'MonthBody';
MonthBody.inheritAttrs = false;
export default MonthBody;