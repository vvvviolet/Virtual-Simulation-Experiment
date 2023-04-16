"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = require("vue");
var _Header = _interopRequireDefault(require("../Header"));
var _PanelContext = require("../../PanelContext");
var _dateUtil = require("../../utils/dateUtil");
var _useMergeProps = _interopRequireDefault(require("../../hooks/useMergeProps"));
function TimeHeader(_props) {
  var props = (0, _useMergeProps.default)(_props);
  var _useInjectPanel = (0, _PanelContext.useInjectPanel)(),
    hideHeader = _useInjectPanel.hideHeader;
  if (hideHeader.value) {
    return null;
  }
  var prefixCls = props.prefixCls,
    generateConfig = props.generateConfig,
    locale = props.locale,
    value = props.value,
    format = props.format;
  var headerPrefixCls = "".concat(prefixCls, "-header");
  return (0, _vue.createVNode)(_Header.default, {
    "prefixCls": headerPrefixCls
  }, {
    default: function _default() {
      return [value ? (0, _dateUtil.formatValue)(value, {
        locale: locale,
        format: format,
        generateConfig: generateConfig
      }) : "\xA0"];
    }
  });
}
TimeHeader.displayName = 'TimeHeader';
TimeHeader.inheritAttrs = false;
var _default2 = TimeHeader;
exports.default = _default2;