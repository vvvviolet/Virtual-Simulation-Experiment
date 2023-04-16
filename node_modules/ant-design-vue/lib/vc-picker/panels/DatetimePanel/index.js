"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = require("vue");
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _DatePanel = _interopRequireDefault(require("../DatePanel"));
var _TimePanel = _interopRequireDefault(require("../TimePanel"));
var _miscUtil = require("../../utils/miscUtil");
var _timeUtil = require("../../utils/timeUtil");
var _KeyCode = _interopRequireDefault(require("../../../_util/KeyCode"));
var _classNames2 = _interopRequireDefault(require("../../../_util/classNames"));
var _useMergeProps = _interopRequireDefault(require("../../hooks/useMergeProps"));
var ACTIVE_PANEL = (0, _miscUtil.tuple)('date', 'time');
function DatetimePanel(_props) {
  var props = (0, _useMergeProps.default)(_props);
  var prefixCls = props.prefixCls,
    operationRef = props.operationRef,
    generateConfig = props.generateConfig,
    value = props.value,
    defaultValue = props.defaultValue,
    disabledTime = props.disabledTime,
    showTime = props.showTime,
    onSelect = props.onSelect;
  var panelPrefixCls = "".concat(prefixCls, "-datetime-panel");
  var activePanel = (0, _vue.ref)(null);
  var dateOperationRef = (0, _vue.ref)({});
  var timeOperationRef = (0, _vue.ref)({});
  var timeProps = (0, _typeof2.default)(showTime) === 'object' ? (0, _objectSpread2.default)({}, showTime) : {};
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
      if (event.which === _KeyCode.default.TAB) {
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
      if ([_KeyCode.default.LEFT, _KeyCode.default.RIGHT, _KeyCode.default.UP, _KeyCode.default.DOWN].includes(event.which)) {
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
  return (0, _vue.createVNode)("div", {
    "class": (0, _classNames2.default)(panelPrefixCls, (0, _defineProperty2.default)({}, "".concat(panelPrefixCls, "-active"), activePanel.value))
  }, [(0, _vue.createVNode)(_DatePanel.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, props), {}, {
    "operationRef": dateOperationRef,
    "active": activePanel.value === 'date',
    "onSelect": function onSelect(date) {
      onInternalSelect((0, _timeUtil.setDateTime)(generateConfig, date, !value && (0, _typeof2.default)(showTime) === 'object' ? showTime.defaultValue : null), 'date');
    }
  }), null), (0, _vue.createVNode)(_TimePanel.default, (0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({}, props), {}, {
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
var _default = DatetimePanel;
exports.default = _default;