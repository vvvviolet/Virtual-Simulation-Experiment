"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = require("vue");
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _TimeHeader = _interopRequireDefault(require("./TimeHeader"));
var _TimeBody = _interopRequireDefault(require("./TimeBody"));
var _uiUtil = require("../../utils/uiUtil");
var _classNames2 = _interopRequireDefault(require("../../../_util/classNames"));
var _useMergeProps = _interopRequireDefault(require("../../hooks/useMergeProps"));
var countBoolean = function countBoolean(boolList) {
  return boolList.filter(function (bool) {
    return bool !== false;
  }).length;
};
function TimePanel(_props) {
  var props = (0, _useMergeProps.default)(_props);
  var generateConfig = props.generateConfig,
    _props$format = props.format,
    format = _props$format === void 0 ? 'HH:mm:ss' : _props$format,
    prefixCls = props.prefixCls,
    active = props.active,
    operationRef = props.operationRef,
    showHour = props.showHour,
    showMinute = props.showMinute,
    showSecond = props.showSecond,
    _props$use12Hours = props.use12Hours,
    use12Hours = _props$use12Hours === void 0 ? false : _props$use12Hours,
    onSelect = props.onSelect,
    value = props.value;
  var panelPrefixCls = "".concat(prefixCls, "-time-panel");
  var bodyOperationRef = (0, _vue.ref)();
  // ======================= Keyboard =======================
  var activeColumnIndex = (0, _vue.ref)(-1);
  var columnsCount = countBoolean([showHour, showMinute, showSecond, use12Hours]);
  operationRef.value = {
    onKeydown: function onKeydown(event) {
      return (0, _uiUtil.createKeydownHandler)(event, {
        onLeftRight: function onLeftRight(diff) {
          activeColumnIndex.value = (activeColumnIndex.value + diff + columnsCount) % columnsCount;
        },
        onUpDown: function onUpDown(diff) {
          if (activeColumnIndex.value === -1) {
            activeColumnIndex.value = 0;
          } else if (bodyOperationRef.value) {
            bodyOperationRef.value.onUpDown(diff);
          }
        },
        onEnter: function onEnter() {
          onSelect(value || generateConfig.getNow(), 'key');
          activeColumnIndex.value = -1;
        }
      });
    },
    onBlur: function onBlur() {
      activeColumnIndex.value = -1;
    }
  };
  return (0, _vue.createVNode)("div", {
    "class": (0, _classNames2.default)(panelPrefixCls, (0, _defineProperty2.default)({}, "".concat(panelPrefixCls, "-active"), active))
  }, [(0, _vue.createVNode)(_TimeHeader.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, props), {}, {
    "format": format,
    "prefixCls": prefixCls
  }), null), (0, _vue.createVNode)(_TimeBody.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, props), {}, {
    "prefixCls": prefixCls,
    "activeColumnIndex": activeColumnIndex.value,
    "operationRef": bodyOperationRef
  }), null)]);
}
TimePanel.displayName = 'TimePanel';
TimePanel.inheritAttrs = false;
var _default = TimePanel;
exports.default = _default;