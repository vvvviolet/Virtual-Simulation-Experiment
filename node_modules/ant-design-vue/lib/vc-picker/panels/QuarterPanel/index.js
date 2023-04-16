"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = require("vue");
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _QuarterHeader = _interopRequireDefault(require("./QuarterHeader"));
var _QuarterBody = _interopRequireDefault(require("./QuarterBody"));
var _uiUtil = require("../../utils/uiUtil");
var _useMergeProps = _interopRequireDefault(require("../../hooks/useMergeProps"));
function QuarterPanel(_props) {
  var props = (0, _useMergeProps.default)(_props);
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
      return (0, _uiUtil.createKeydownHandler)(event, {
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
  return (0, _vue.createVNode)("div", {
    "class": panelPrefixCls
  }, [(0, _vue.createVNode)(_QuarterHeader.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, props), {}, {
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
  }), null), (0, _vue.createVNode)(_QuarterBody.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, props), {}, {
    "prefixCls": prefixCls,
    "onSelect": function onSelect(date) {
      _onSelect(date, 'mouse');
    }
  }), null)]);
}
QuarterPanel.displayName = 'QuarterPanel';
QuarterPanel.inheritAttrs = false;
var _default = QuarterPanel;
exports.default = _default;