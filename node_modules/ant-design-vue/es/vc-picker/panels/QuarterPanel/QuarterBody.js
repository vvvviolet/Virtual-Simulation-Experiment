import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { createVNode as _createVNode } from "vue";
import { formatValue, isSameQuarter } from '../../utils/dateUtil';
import { useInjectRange } from '../../RangeContext';
import useCellClassName from '../../hooks/useCellClassName';
import PanelBody from '../PanelBody';
import useMergeProps from '../../hooks/useMergeProps';
export var QUARTER_COL_COUNT = 4;
var QUARTER_ROW_COUNT = 1;
function QuarterBody(_props) {
  var props = useMergeProps(_props);
  var prefixCls = props.prefixCls,
    locale = props.locale,
    value = props.value,
    viewDate = props.viewDate,
    generateConfig = props.generateConfig;
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
      return isSameQuarter(generateConfig, current, target);
    },
    isInView: function isInView() {
      return true;
    },
    offsetCell: function offsetCell(date, offset) {
      return generateConfig.addMonth(date, offset * 3);
    }
  });
  var baseQuarter = generateConfig.setDate(generateConfig.setMonth(viewDate, 0), 1);
  return _createVNode(PanelBody, _objectSpread(_objectSpread({}, props), {}, {
    "rowNum": QUARTER_ROW_COUNT,
    "colNum": QUARTER_COL_COUNT,
    "baseDate": baseQuarter,
    "getCellText": function getCellText(date) {
      return formatValue(date, {
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
      return formatValue(date, {
        locale: locale,
        format: 'YYYY-[Q]Q',
        generateConfig: generateConfig
      });
    }
  }), null);
}
QuarterBody.displayName = 'QuarterBody';
QuarterBody.inheritAttrs = false;
export default QuarterBody;