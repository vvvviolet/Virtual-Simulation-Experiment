import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { createVNode as _createVNode } from "vue";
import { WEEK_DAY_COUNT, getWeekStartDate, isSameDate, isSameMonth, formatValue } from '../../utils/dateUtil';
import useCellClassName from '../../hooks/useCellClassName';
import PanelBody from '../PanelBody';
import { useInjectRange } from '../../RangeContext';
import useMergeProps from '../../hooks/useMergeProps';
function DateBody(_props) {
  var props = useMergeProps(_props);
  var prefixCls = props.prefixCls,
    generateConfig = props.generateConfig,
    prefixColumn = props.prefixColumn,
    locale = props.locale,
    rowCount = props.rowCount,
    viewDate = props.viewDate,
    value = props.value,
    dateRender = props.dateRender;
  var _useInjectRange = useInjectRange(),
    rangedValue = _useInjectRange.rangedValue,
    hoverRangedValue = _useInjectRange.hoverRangedValue;
  var baseDate = getWeekStartDate(locale.locale, generateConfig, viewDate);
  var cellPrefixCls = "".concat(prefixCls, "-cell");
  var weekFirstDay = generateConfig.locale.getWeekFirstDay(locale.locale);
  var today = generateConfig.getNow();
  // ============================== Header ==============================
  var headerCells = [];
  var weekDaysLocale = locale.shortWeekDays || (generateConfig.locale.getShortWeekDays ? generateConfig.locale.getShortWeekDays(locale.locale) : []);
  if (prefixColumn) {
    headerCells.push(_createVNode("th", {
      "key": "empty",
      "aria-label": "empty cell"
    }, null));
  }
  for (var i = 0; i < WEEK_DAY_COUNT; i += 1) {
    headerCells.push(_createVNode("th", {
      "key": i
    }, [weekDaysLocale[(i + weekFirstDay) % WEEK_DAY_COUNT]]));
  }
  // =============================== Body ===============================
  var getCellClassName = useCellClassName({
    cellPrefixCls: cellPrefixCls,
    today: today,
    value: value,
    generateConfig: generateConfig,
    rangedValue: prefixColumn ? null : rangedValue.value,
    hoverRangedValue: prefixColumn ? null : hoverRangedValue.value,
    isSameCell: function isSameCell(current, target) {
      return isSameDate(generateConfig, current, target);
    },
    isInView: function isInView(date) {
      return isSameMonth(generateConfig, date, viewDate);
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
  return _createVNode(PanelBody, _objectSpread(_objectSpread({}, props), {}, {
    "rowNum": rowCount,
    "colNum": WEEK_DAY_COUNT,
    "baseDate": baseDate,
    "getCellNode": getCellNode,
    "getCellText": generateConfig.getDate,
    "getCellClassName": getCellClassName,
    "getCellDate": generateConfig.addDate,
    "titleCell": function titleCell(date) {
      return formatValue(date, {
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
export default DateBody;