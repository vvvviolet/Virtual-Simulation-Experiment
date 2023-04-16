"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = require("vue");
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _Header = _interopRequireDefault(require("../Header"));
var _ = require(".");
var _PanelContext = require("../../PanelContext");
var _useMergeProps = _interopRequireDefault(require("../../hooks/useMergeProps"));
function DecadeHeader(_props) {
  var props = (0, _useMergeProps.default)(_props);
  var prefixCls = props.prefixCls,
    generateConfig = props.generateConfig,
    viewDate = props.viewDate,
    onPrevDecades = props.onPrevDecades,
    onNextDecades = props.onNextDecades;
  var _useInjectPanel = (0, _PanelContext.useInjectPanel)(),
    hideHeader = _useInjectPanel.hideHeader;
  if (hideHeader) {
    return null;
  }
  var headerPrefixCls = "".concat(prefixCls, "-header");
  var yearNumber = generateConfig.getYear(viewDate);
  var startYear = Math.floor(yearNumber / _.DECADE_DISTANCE_COUNT) * _.DECADE_DISTANCE_COUNT;
  var endYear = startYear + _.DECADE_DISTANCE_COUNT - 1;
  return (0, _vue.createVNode)(_Header.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, props), {}, {
    "prefixCls": headerPrefixCls,
    "onSuperPrev": onPrevDecades,
    "onSuperNext": onNextDecades
  }), {
    default: function _default() {
      return [startYear, (0, _vue.createTextVNode)("-"), endYear];
    }
  });
}
DecadeHeader.displayName = 'DecadeHeader';
DecadeHeader.inheritAttrs = false;
var _default2 = DecadeHeader;
exports.default = _default2;