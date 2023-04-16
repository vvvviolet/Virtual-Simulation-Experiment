import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { createVNode as _createVNode } from "vue";
import DecadeHeader from './DecadeHeader';
import DecadeBody, { DECADE_COL_COUNT } from './DecadeBody';
import { createKeydownHandler } from '../../utils/uiUtil';
import useMergeProps from '../../hooks/useMergeProps';
export var DECADE_UNIT_DIFF = 10;
export var DECADE_DISTANCE_COUNT = DECADE_UNIT_DIFF * 10;
function DecadePanel(_props) {
  var props = useMergeProps(_props);
  var prefixCls = props.prefixCls,
    onViewDateChange = props.onViewDateChange,
    generateConfig = props.generateConfig,
    viewDate = props.viewDate,
    operationRef = props.operationRef,
    onSelect = props.onSelect,
    onPanelChange = props.onPanelChange;
  var panelPrefixCls = "".concat(prefixCls, "-decade-panel");
  // ======================= Keyboard =======================
  operationRef.value = {
    onKeydown: function onKeydown(event) {
      return createKeydownHandler(event, {
        onLeftRight: function onLeftRight(diff) {
          onSelect(generateConfig.addYear(viewDate, diff * DECADE_UNIT_DIFF), 'key');
        },
        onCtrlLeftRight: function onCtrlLeftRight(diff) {
          onSelect(generateConfig.addYear(viewDate, diff * DECADE_DISTANCE_COUNT), 'key');
        },
        onUpDown: function onUpDown(diff) {
          onSelect(generateConfig.addYear(viewDate, diff * DECADE_UNIT_DIFF * DECADE_COL_COUNT), 'key');
        },
        onEnter: function onEnter() {
          onPanelChange('year', viewDate);
        }
      });
    }
  };
  // ==================== View Operation ====================
  var onDecadesChange = function onDecadesChange(diff) {
    var newDate = generateConfig.addYear(viewDate, diff * DECADE_DISTANCE_COUNT);
    onViewDateChange(newDate);
    onPanelChange(null, newDate);
  };
  var onInternalSelect = function onInternalSelect(date) {
    onSelect(date, 'mouse');
    onPanelChange('year', date);
  };
  return _createVNode("div", {
    "class": panelPrefixCls
  }, [_createVNode(DecadeHeader, _objectSpread(_objectSpread({}, props), {}, {
    "prefixCls": prefixCls,
    "onPrevDecades": function onPrevDecades() {
      onDecadesChange(-1);
    },
    "onNextDecades": function onNextDecades() {
      onDecadesChange(1);
    }
  }), null), _createVNode(DecadeBody, _objectSpread(_objectSpread({}, props), {}, {
    "prefixCls": prefixCls,
    "onSelect": onInternalSelect
  }), null)]);
}
DecadePanel.displayName = 'DecadePanel';
DecadePanel.inheritAttrs = false;
export default DecadePanel;