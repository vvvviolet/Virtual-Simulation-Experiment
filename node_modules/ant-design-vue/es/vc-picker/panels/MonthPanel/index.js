import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { createVNode as _createVNode } from "vue";
import MonthHeader from './MonthHeader';
import MonthBody, { MONTH_COL_COUNT } from './MonthBody';
import { createKeydownHandler } from '../../utils/uiUtil';
import useMergeProps from '../../hooks/useMergeProps';
function MonthPanel(_props) {
  var props = useMergeProps(_props);
  var prefixCls = props.prefixCls,
    operationRef = props.operationRef,
    onViewDateChange = props.onViewDateChange,
    generateConfig = props.generateConfig,
    value = props.value,
    viewDate = props.viewDate,
    onPanelChange = props.onPanelChange,
    _onSelect = props.onSelect;
  var panelPrefixCls = "".concat(prefixCls, "-month-panel");
  // ======================= Keyboard =======================
  operationRef.value = {
    onKeydown: function onKeydown(event) {
      return createKeydownHandler(event, {
        onLeftRight: function onLeftRight(diff) {
          _onSelect(generateConfig.addMonth(value || viewDate, diff), 'key');
        },
        onCtrlLeftRight: function onCtrlLeftRight(diff) {
          _onSelect(generateConfig.addYear(value || viewDate, diff), 'key');
        },
        onUpDown: function onUpDown(diff) {
          _onSelect(generateConfig.addMonth(value || viewDate, diff * MONTH_COL_COUNT), 'key');
        },
        onEnter: function onEnter() {
          onPanelChange('date', value || viewDate);
        }
      });
    }
  };
  // ==================== View Operation ====================
  var onYearChange = function onYearChange(diff) {
    var newDate = generateConfig.addYear(viewDate, diff);
    onViewDateChange(newDate);
    onPanelChange(null, newDate);
  };
  return _createVNode("div", {
    "class": panelPrefixCls
  }, [_createVNode(MonthHeader, _objectSpread(_objectSpread({}, props), {}, {
    "prefixCls": prefixCls,
    "onPrevYear": function onPrevYear() {
      onYearChange(-1);
    },
    "onNextYear": function onNextYear() {
      onYearChange(1);
    },
    "onYearClick": function onYearClick() {
      onPanelChange('year', viewDate);
    }
  }), null), _createVNode(MonthBody, _objectSpread(_objectSpread({}, props), {}, {
    "prefixCls": prefixCls,
    "onSelect": function onSelect(date) {
      _onSelect(date, 'mouse');
      onPanelChange('date', date);
    }
  }), null)]);
}
MonthPanel.displayName = 'MonthPanel';
MonthPanel.inheritAttrs = false;
export default MonthPanel;