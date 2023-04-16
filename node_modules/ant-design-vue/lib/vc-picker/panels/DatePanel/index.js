"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = require("vue");
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _DateBody = _interopRequireDefault(require("./DateBody"));
var _DateHeader = _interopRequireDefault(require("./DateHeader"));
var _dateUtil = require("../../utils/dateUtil");
var _uiUtil = require("../../utils/uiUtil");
var _classNames2 = _interopRequireDefault(require("../../../_util/classNames"));
var _useMergeProps = _interopRequireDefault(require("../../hooks/useMergeProps"));
var DATE_ROW_COUNT = 6;
function DatePanel(_props) {
  var props = (0, _useMergeProps.default)(_props);
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
      return (0, _uiUtil.createKeydownHandler)(event, (0, _objectSpread2.default)({
        onLeftRight: function onLeftRight(diff) {
          _onSelect(generateConfig.addDate(value || viewDate, diff), 'key');
        },
        onCtrlLeftRight: function onCtrlLeftRight(diff) {
          _onSelect(generateConfig.addYear(value || viewDate, diff), 'key');
        },
        onUpDown: function onUpDown(diff) {
          _onSelect(generateConfig.addDate(value || viewDate, diff * _dateUtil.WEEK_DAY_COUNT), 'key');
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
  return (0, _vue.createVNode)("div", {
    "class": (0, _classNames2.default)(panelPrefixCls, (0, _defineProperty2.default)({}, "".concat(panelPrefixCls, "-active"), active))
  }, [(0, _vue.createVNode)(_DateHeader.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, props), {}, {
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
  }), null), (0, _vue.createVNode)(_DateBody.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, props), {}, {
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
var _default = DatePanel;
exports.default = _default;