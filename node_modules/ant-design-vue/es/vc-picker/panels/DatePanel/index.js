import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { createVNode as _createVNode } from "vue";
import DateBody from './DateBody';
import DateHeader from './DateHeader';
import { WEEK_DAY_COUNT } from '../../utils/dateUtil';
import { createKeydownHandler } from '../../utils/uiUtil';
import classNames from '../../../_util/classNames';
import useMergeProps from '../../hooks/useMergeProps';
var DATE_ROW_COUNT = 6;
function DatePanel(_props) {
  var props = useMergeProps(_props);
  var prefixCls = props.prefixCls,
    _props$panelName = props.panelName,
    panelName = _props$panelName === void 0 ? 'date' : _props$panelName,
    keyboardConfig = props.keyboardConfig,
    active = props.active,
    operationRef = props.operationRef,
    generateConfig = props.generateConfig,
    value = props.value,
    viewDate = props.viewDate,
    onViewDateChange = props.onViewDateChange,
    onPanelChange = props.onPanelChange,
    _onSelect = props.onSelect;
  var panelPrefixCls = "".concat(prefixCls, "-").concat(panelName, "-panel");
  // ======================= Keyboard =======================
  operationRef.value = {
    onKeydown: function onKeydown(event) {
      return createKeydownHandler(event, _objectSpread({
        onLeftRight: function onLeftRight(diff) {
          _onSelect(generateConfig.addDate(value || viewDate, diff), 'key');
        },
        onCtrlLeftRight: function onCtrlLeftRight(diff) {
          _onSelect(generateConfig.addYear(value || viewDate, diff), 'key');
        },
        onUpDown: function onUpDown(diff) {
          _onSelect(generateConfig.addDate(value || viewDate, diff * WEEK_DAY_COUNT), 'key');
        },
        onPageUpDown: function onPageUpDown(diff) {
          _onSelect(generateConfig.addMonth(value || viewDate, diff), 'key');
        }
      }, keyboardConfig));
    }
  };
  // ==================== View Operation ====================
  var onYearChange = function onYearChange(diff) {
    var newDate = generateConfig.addYear(viewDate, diff);
    onViewDateChange(newDate);
    onPanelChange(null, newDate);
  };
  var onMonthChange = function onMonthChange(diff) {
    var newDate = generateConfig.addMonth(viewDate, diff);
    onViewDateChange(newDate);
    onPanelChange(null, newDate);
  };
  return _createVNode("div", {
    "class": classNames(panelPrefixCls, _defineProperty({}, "".concat(panelPrefixCls, "-active"), active))
  }, [_createVNode(DateHeader, _objectSpread(_objectSpread({}, props), {}, {
    "prefixCls": prefixCls,
    "value": value,
    "viewDate": viewDate,
    "onPrevYear": function onPrevYear() {
      onYearChange(-1);
    },
    "onNextYear": function onNextYear() {
      onYearChange(1);
    },
    "onPrevMonth": function onPrevMonth() {
      onMonthChange(-1);
    },
    "onNextMonth": function onNextMonth() {
      onMonthChange(1);
    },
    "onMonthClick": function onMonthClick() {
      onPanelChange('month', viewDate);
    },
    "onYearClick": function onYearClick() {
      onPanelChange('year', viewDate);
    }
  }), null), _createVNode(DateBody, _objectSpread(_objectSpread({}, props), {}, {
    "onSelect": function onSelect(date) {
      return _onSelect(date, 'mouse');
    },
    "prefixCls": prefixCls,
    "value": value,
    "viewDate": viewDate,
    "rowCount": DATE_ROW_COUNT
  }), null)]);
}
DatePanel.displayName = 'DatePanel';
DatePanel.inheritAttrs = false;
export default DatePanel;