import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { createVNode as _createVNode } from "vue";
import QuarterHeader from './QuarterHeader';
import QuarterBody from './QuarterBody';
import { createKeydownHandler } from '../../utils/uiUtil';
import useMergeProps from '../../hooks/useMergeProps';
function QuarterPanel(_props) {
  var props = useMergeProps(_props);
  var prefixCls = props.prefixCls,
    operationRef = props.operationRef,
    onViewDateChange = props.onViewDateChange,
    generateConfig = props.generateConfig,
    value = props.value,
    viewDate = props.viewDate,
    onPanelChange = props.onPanelChange,
    _onSelect = props.onSelect;
  var panelPrefixCls = "".concat(prefixCls, "-quarter-panel");
  // ======================= Keyboard =======================
  operationRef.value = {
    onKeydown: function onKeydown(event) {
      return createKeydownHandler(event, {
        onLeftRight: function onLeftRight(diff) {
          _onSelect(generateConfig.addMonth(value || viewDate, diff * 3), 'key');
        },
        onCtrlLeftRight: function onCtrlLeftRight(diff) {
          _onSelect(generateConfig.addYear(value || viewDate, diff), 'key');
        },
        onUpDown: function onUpDown(diff) {
          _onSelect(generateConfig.addYear(value || viewDate, diff), 'key');
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
  }, [_createVNode(QuarterHeader, _objectSpread(_objectSpread({}, props), {}, {
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
  }), null), _createVNode(QuarterBody, _objectSpread(_objectSpread({}, props), {}, {
    "prefixCls": prefixCls,
    "onSelect": function onSelect(date) {
      _onSelect(date, 'mouse');
    }
  }), null)]);
}
QuarterPanel.displayName = 'QuarterPanel';
QuarterPanel.inheritAttrs = false;
export default QuarterPanel;