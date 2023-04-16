import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { createVNode as _createVNode } from "vue";
import DatePanel from '../DatePanel';
import { isSameWeek } from '../../utils/dateUtil';
import classNames from '../../../_util/classNames';
import useMergeProps from '../../hooks/useMergeProps';
function WeekPanel(_props) {
  var props = useMergeProps(_props);
  var prefixCls = props.prefixCls,
    generateConfig = props.generateConfig,
    locale = props.locale,
    value = props.value;
  // Render additional column
  var cellPrefixCls = "".concat(prefixCls, "-cell");
  var prefixColumn = function prefixColumn(date) {
    return _createVNode("td", {
      "key": "week",
      "class": classNames(cellPrefixCls, "".concat(cellPrefixCls, "-week"))
    }, [generateConfig.locale.getWeek(locale.locale, date)]);
  };
  // Add row className
  var rowPrefixCls = "".concat(prefixCls, "-week-panel-row");
  var rowClassName = function rowClassName(date) {
    return classNames(rowPrefixCls, _defineProperty({}, "".concat(rowPrefixCls, "-selected"), isSameWeek(generateConfig, locale.locale, value, date)));
  };
  return _createVNode(DatePanel, _objectSpread(_objectSpread({}, props), {}, {
    "panelName": "week",
    "prefixColumn": prefixColumn,
    "rowClassName": rowClassName,
    "keyboardConfig": {
      onLeftRight: null
    }
  }), null);
}
WeekPanel.displayName = 'WeekPanel';
WeekPanel.inheritAttrs = false;
export default WeekPanel;