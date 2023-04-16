import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { createVNode as _createVNode } from "vue";
import Header from '../Header';
import { useInjectPanel } from '../../PanelContext';
import { formatValue } from '../../utils/dateUtil';
import useMergeProps from '../../hooks/useMergeProps';
function MonthHeader(_props) {
  var props = useMergeProps(_props);
  var prefixCls = props.prefixCls,
    generateConfig = props.generateConfig,
    locale = props.locale,
    viewDate = props.viewDate,
    onNextYear = props.onNextYear,
    onPrevYear = props.onPrevYear,
    onYearClick = props.onYearClick;
  var _useInjectPanel = useInjectPanel(),
    hideHeader = _useInjectPanel.hideHeader;
  if (hideHeader.value) {
    return null;
  }
  var headerPrefixCls = "".concat(prefixCls, "-header");
  return _createVNode(Header, _objectSpread(_objectSpread({}, props), {}, {
    "prefixCls": headerPrefixCls,
    "onSuperPrev": onPrevYear,
    "onSuperNext": onNextYear
  }), {
    default: function _default() {
      return [_createVNode("button", {
        "type": "button",
        "onClick": onYearClick,
        "class": "".concat(prefixCls, "-year-btn")
      }, [formatValue(viewDate, {
        locale: locale,
        format: locale.yearFormat,
        generateConfig: generateConfig
      })])];
    }
  });
}
MonthHeader.displayName = 'MonthHeader';
MonthHeader.inheritAttrs = false;
export default MonthHeader;