import { createVNode as _createVNode } from "vue";
import Header from '../Header';
import { useInjectPanel } from '../../PanelContext';
import { formatValue } from '../../utils/dateUtil';
import useMergeProps from '../../hooks/useMergeProps';
function TimeHeader(_props) {
  var props = useMergeProps(_props);
  var _useInjectPanel = useInjectPanel(),
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
  return _createVNode(Header, {
    "prefixCls": headerPrefixCls
  }, {
    default: function _default() {
      return [value ? formatValue(value, {
        locale: locale,
        format: format,
        generateConfig: generateConfig
      }) : "\xA0"];
    }
  });
}
TimeHeader.displayName = 'TimeHeader';
TimeHeader.inheritAttrs = false;
export default TimeHeader;