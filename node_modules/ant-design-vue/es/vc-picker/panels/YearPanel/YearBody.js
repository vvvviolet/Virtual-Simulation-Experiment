import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { createVNode as _createVNode } from "vue";
import { YEAR_DECADE_COUNT } from '.';
import useCellClassName from '../../hooks/useCellClassName';
import { formatValue, isSameYear } from '../../utils/dateUtil';
import { useInjectRange } from '../../RangeContext';
import PanelBody from '../PanelBody';
import useMergeProps from '../../hooks/useMergeProps';
export var YEAR_COL_COUNT = 3;
var YEAR_ROW_COUNT = 4;
function YearBody(_props) {
  var props = useMergeProps(_props);
  var prefixCls = props.prefixCls,
    value = props.value,
    viewDate = props.viewDate,
    locale = props.locale,
    generateConfig = props.generateConfig;
  var _useInjectRange = useInjectRange(),
    rangedValue = _useInjectRange.rangedValue,
    hoverRangedValue = _useInjectRange.hoverRangedValue;
  var yearPrefixCls = "".concat(prefixCls, "-cell");
  // =============================== Year ===============================
  var yearNumber = generateConfig.getYear(viewDate);
  var startYear = Math.floor(yearNumber / YEAR_DECADE_COUNT) * YEAR_DECADE_COUNT;
  var endYear = startYear + YEAR_DECADE_COUNT - 1;
  var baseYear = generateConfig.setYear(viewDate, startYear - Math.ceil((YEAR_COL_COUNT * YEAR_ROW_COUNT - YEAR_DECADE_COUNT) / 2));
  var isInView = function isInView(date) {
    var currentYearNumber = generateConfig.getYear(date);
    return startYear <= currentYearNumber && currentYearNumber <= endYear;
  };
  var getCellClassName = useCellClassName({
    cellPrefixCls: yearPrefixCls,
    value: value,
    generateConfig: generateConfig,
    rangedValue: rangedValue.value,
    hoverRangedValue: hoverRangedValue.value,
    isSameCell: function isSameCell(current, target) {
      return isSameYear(generateConfig, current, target);
    },
    isInView: isInView,
    offsetCell: function offsetCell(date, offset) {
      return generateConfig.addYear(date, offset);
    }
  });
  return _createVNode(PanelBody, _objectSpread(_objectSpread({}, props), {}, {
    "rowNum": YEAR_ROW_COUNT,
    "colNum": YEAR_COL_COUNT,
    "baseDate": baseYear,
    "getCellText": generateConfig.getYear,
    "getCellClassName": getCellClassName,
    "getCellDate": generateConfig.addYear,
    "titleCell": function titleCell(date) {
      return formatValue(date, {
        locale: locale,
        format: 'YYYY',
        generateConfig: generateConfig
      });
    }
  }), null);
}
YearBody.displayName = 'YearBody';
YearBody.inheritAttrs = false;
export default YearBody;