import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { createVNode as _createVNode, createTextVNode as _createTextVNode } from "vue";
import Header from '../Header';
import { DECADE_DISTANCE_COUNT } from '.';
import { useInjectPanel } from '../../PanelContext';
import useMergeProps from '../../hooks/useMergeProps';
function DecadeHeader(_props) {
  var props = useMergeProps(_props);
  var prefixCls = props.prefixCls,
    generateConfig = props.generateConfig,
    viewDate = props.viewDate,
    onPrevDecades = props.onPrevDecades,
    onNextDecades = props.onNextDecades;
  var _useInjectPanel = useInjectPanel(),
    hideHeader = _useInjectPanel.hideHeader;
  if (hideHeader) {
    return null;
  }
  var headerPrefixCls = "".concat(prefixCls, "-header");
  var yearNumber = generateConfig.getYear(viewDate);
  var startYear = Math.floor(yearNumber / DECADE_DISTANCE_COUNT) * DECADE_DISTANCE_COUNT;
  var endYear = startYear + DECADE_DISTANCE_COUNT - 1;
  return _createVNode(Header, _objectSpread(_objectSpread({}, props), {}, {
    "prefixCls": headerPrefixCls,
    "onSuperPrev": onPrevDecades,
    "onSuperNext": onNextDecades
  }), {
    default: function _default() {
      return [startYear, _createTextVNode("-"), endYear];
    }
  });
}
DecadeHeader.displayName = 'DecadeHeader';
DecadeHeader.inheritAttrs = false;
export default DecadeHeader;