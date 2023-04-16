import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { createVNode as _createVNode } from "vue";
import YearHeader from './YearHeader';
import YearBody, { YEAR_COL_COUNT } from './YearBody';
import { createKeydownHandler } from '../../utils/uiUtil';
import useMergeProps from '../../hooks/useMergeProps';
export var YEAR_DECADE_COUNT = 10;
function YearPanel(_props) {
  var props = useMergeProps(_props);
  var prefixCls = props.prefixCls,
    operationRef = props.operationRef,
    onViewDateChange = props.onViewDateChange,
    generateConfig = props.generateConfig,
    value = props.value,
    viewDate = props.viewDate,
    sourceMode = props.sourceMode,
    _onSelect = props.onSelect,
    onPanelChange = props.onPanelChange;
  var panelPrefixCls = "".concat(prefixCls, "-year-panel");
  // ======================= Keyboard =======================
  operationRef.value = {
    onKeydown: function onKeydown(event) {
      return createKeydownHandler(event, {
        onLeftRight: function onLeftRight(diff) {
          _onSelect(generateConfig.addYear(value || viewDate, diff), 'key');
        },
        onCtrlLeftRight: function onCtrlLeftRight(diff) {
          _onSelect(generateConfig.addYear(value || viewDate, diff * YEAR_DECADE_COUNT), 'key');
        },
        onUpDown: function onUpDown(diff) {
          _onSelect(generateConfig.addYear(value || viewDate, diff * YEAR_COL_COUNT), 'key');
        },
        onEnter: function onEnter() {
          onPanelChange(sourceMode === 'date' ? 'date' : 'month', value || viewDate);
        }
      });
    }
  };
  // ==================== View Operation ====================
  var onDecadeChange = function onDecadeChange(diff) {
    var newDate = generateConfig.addYear(viewDate, diff * 10);
    onViewDateChange(newDate);
    onPanelChange(null, newDate);
  };
  return _createVNode("div", {
    "class": panelPrefixCls
  }, [_createVNode(YearHeader, _objectSpread(_objectSpread({}, props), {}, {
    "prefixCls": prefixCls,
    "onPrevDecade": function onPrevDecade() {
      onDecadeChange(-1);
    },
    "onNextDecade": function onNextDecade() {
      onDecadeChange(1);
    },
    "onDecadeClick": function onDecadeClick() {
      onPanelChange('decade', viewDate);
    }
  }), null), _createVNode(YearBody, _objectSpread(_objectSpread({}, props), {}, {
    "prefixCls": prefixCls,
    "onSelect": function onSelect(date) {
      onPanelChange(sourceMode === 'date' ? 'date' : 'month', date);
      _onSelect(date, 'mouse');
    }
  }), null)]);
}
YearPanel.displayName = 'YearPanel';
YearPanel.inheritAttrs = false;
export default YearPanel;