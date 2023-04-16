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
function YearHeader(_props) {
  var props = (0, _useMergeProps.default)(_props);
  var prefixCls = props.prefixCls,
    generateConfig = props.generateConfig,
    viewDate = props.viewDate,
    onPrevDecade = props.onPrevDecade,
    onNextDecade = props.onNextDecade,
    onDecadeClick = props.onDecadeClick;
  var _useInjectPanel = (0, _PanelContext.useInjectPanel)(),
    hideHeader = _useInjectPanel.hideHeader;
  if (hideHeader.value) {
    return null;
  }
  var headerPrefixCls = "".concat(prefixCls, "-header");
  var yearNumber = generateConfig.getYear(viewDate);
  var startYear = Math.floor(yearNumber / _.YEAR_DECADE_COUNT) * _.YEAR_DECADE_COUNT;
  var endYear = startYear + _.YEAR_DECADE_COUNT - 1;
  return (0, _vue.createVNode)(_Header.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, props), {}, {
    "prefixCls": headerPrefixCls,
    "onSuperPrev": onPrevDecade,
    "onSuperNext": onNextDecade
  }), {
    default: function _default() {
      return [(0, _vue.createVNode)("button", {
        "type": "button",
        "onClick": onDecadeClick,
        "class": "".concat(prefixCls, "-decade-btn")
      }, [startYear, (0, _vue.createTextVNode)("-"), endYear])];
    }
  });
}
YearHeader.displayName = 'YearHeader';
YearHeader.inheritAttrs = false;
var _default2 = YearHeader;
exports.default = _default2;