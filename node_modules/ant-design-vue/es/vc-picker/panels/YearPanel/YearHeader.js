import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { createVNode as _createVNode, createTextVNode as _createTextVNode } from "vue";
import Header from '../Header';
import { YEAR_DECADE_COUNT } from '.';
import { useInjectPanel } from '../../PanelContext';
import useMergeProps from '../../hooks/useMergeProps';
function YearHeader(_props) {
  var props = useMergeProps(_props);
  var prefixCls = props.prefixCls,
    generateConfig = props.generateConfig,
    viewDate = props.viewDate,
    onPrevDecade = props.onPrevDecade,
    onNextDecade = props.onNextDecade,
    onDecadeClick = props.onDecadeClick;
  var _useInjectPanel = useInjectPanel(),
    hideHeader = _useInjectPanel.hideHeader;
  if (hideHeader.value) {
    return null;
  }
  var headerPrefixCls = "".concat(prefixCls, "-header");
  var yearNumber = generateConfig.getYear(viewDate);
  var startYear = Math.floor(yearNumber / YEAR_DECADE_COUNT) * YEAR_DECADE_COUNT;
  var endYear = startYear + YEAR_DECADE_COUNT - 1;
  return _createVNode(Header, _objectSpread(_objectSpread({}, props), {}, {
    "prefixCls": headerPrefixCls,
    "onSuperPrev": onPrevDecade,
    "onSuperNext": onNextDecade
  }), {
    default: function _default() {
      return [_createVNode("button", {
        "type": "button",
        "onClick": onDecadeClick,
        "class": "".concat(prefixCls, "-decade-btn")
      }, [startYear, _createTextVNode("-"), endYear])];
    }
  });
}
YearHeader.displayName = 'YearHeader';
YearHeader.inheritAttrs = false;
export default YearHeader;