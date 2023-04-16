import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _typeof from "@babel/runtime/helpers/esm/typeof";
import { createVNode as _createVNode } from "vue";
import DatePanel from '../DatePanel';
import TimePanel from '../TimePanel';
import { tuple } from '../../utils/miscUtil';
import { setDateTime as setTime } from '../../utils/timeUtil';
import KeyCode from '../../../_util/KeyCode';
import classNames from '../../../_util/classNames';
import { ref } from 'vue';
import useMergeProps from '../../hooks/useMergeProps';
var ACTIVE_PANEL = tuple('date', 'time');
function DatetimePanel(_props) {
  var props = useMergeProps(_props);
  var prefixCls = props.prefixCls,
    operationRef = props.operationRef,
    generateConfig = props.generateConfig,
    value = props.value,
    defaultValue = props.defaultValue,
    disabledTime = props.disabledTime,
    showTime = props.showTime,
    onSelect = props.onSelect;
  var panelPrefixCls = "".concat(prefixCls, "-datetime-panel");
  var activePanel = ref(null);
  var dateOperationRef = ref({});
  var timeOperationRef = ref({});
  var timeProps = _typeof(showTime) === 'object' ? _objectSpread({}, showTime) : {};
  // ======================= Keyboard =======================
  function getNextActive(offset) {
    var activeIndex = ACTIVE_PANEL.indexOf(activePanel.value) + offset;
    var nextActivePanel = ACTIVE_PANEL[activeIndex] || null;
    return nextActivePanel;
  }
  var onBlur = function onBlur(e) {
    if (timeOperationRef.value.onBlur) {
      timeOperationRef.value.onBlur(e);
    }
    activePanel.value = null;
  };
  operationRef.value = {
    onKeydown: function onKeydown(event) {
      // Switch active panel
      if (event.which === KeyCode.TAB) {
        var nextActivePanel = getNextActive(event.shiftKey ? -1 : 1);
        activePanel.value = nextActivePanel;
        if (nextActivePanel) {
          event.preventDefault();
        }
        return true;
      }
      // Operate on current active panel
      if (activePanel.value) {
        var _ref = activePanel.value === 'date' ? dateOperationRef : timeOperationRef;
        if (_ref.value && _ref.value.onKeydown) {
          _ref.value.onKeydown(event);
        }
        return true;
      }
      // Switch first active panel if operate without panel
      if ([KeyCode.LEFT, KeyCode.RIGHT, KeyCode.UP, KeyCode.DOWN].includes(event.which)) {
        activePanel.value = 'date';
        return true;
      }
      return false;
    },
    onBlur: onBlur,
    onClose: onBlur
  };
  // ======================== Events ========================
  var onInternalSelect = function onInternalSelect(date, source) {
    var selectedDate = date;
    if (source === 'date' && !value && timeProps.defaultValue) {
      // Date with time defaultValue
      selectedDate = generateConfig.setHour(selectedDate, generateConfig.getHour(timeProps.defaultValue));
      selectedDate = generateConfig.setMinute(selectedDate, generateConfig.getMinute(timeProps.defaultValue));
      selectedDate = generateConfig.setSecond(selectedDate, generateConfig.getSecond(timeProps.defaultValue));
    } else if (source === 'time' && !value && defaultValue) {
      selectedDate = generateConfig.setYear(selectedDate, generateConfig.getYear(defaultValue));
      selectedDate = generateConfig.setMonth(selectedDate, generateConfig.getMonth(defaultValue));
      selectedDate = generateConfig.setDate(selectedDate, generateConfig.getDate(defaultValue));
    }
    if (onSelect) {
      onSelect(selectedDate, 'mouse');
    }
  };
  // ======================== Render ========================
  var disabledTimes = disabledTime ? disabledTime(value || null) : {};
  return _createVNode("div", {
    "class": classNames(panelPrefixCls, _defineProperty({}, "".concat(panelPrefixCls, "-active"), activePanel.value))
  }, [_createVNode(DatePanel, _objectSpread(_objectSpread({}, props), {}, {
    "operationRef": dateOperationRef,
    "active": activePanel.value === 'date',
    "onSelect": function onSelect(date) {
      onInternalSelect(setTime(generateConfig, date, !value && _typeof(showTime) === 'object' ? showTime.defaultValue : null), 'date');
    }
  }), null), _createVNode(TimePanel, _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, props), {}, {
    "format": undefined
  }, timeProps), disabledTimes), {}, {
    "disabledTime": null,
    "defaultValue": undefined,
    "operationRef": timeOperationRef,
    "active": activePanel.value === 'time',
    "onSelect": function onSelect(date) {
      onInternalSelect(date, 'time');
    }
  }), null)]);
}
DatetimePanel.displayName = 'DatetimePanel';
DatetimePanel.inheritAttrs = false;
export default DatetimePanel;