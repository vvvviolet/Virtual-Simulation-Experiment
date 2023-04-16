import { createVNode as _createVNode } from "vue";
import Empty from '../empty';
import useConfigInject from '../_util/hooks/useConfigInject';
var RenderEmpty = function RenderEmpty(props) {
  var _useConfigInject = useConfigInject('empty', props),
    prefixCls = _useConfigInject.prefixCls;
  var renderHtml = function renderHtml(componentName) {
    switch (componentName) {
      case 'Table':
      case 'List':
        return _createVNode(Empty, {
          "image": Empty.PRESENTED_IMAGE_SIMPLE
        }, null);
      case 'Select':
      case 'TreeSelect':
      case 'Cascader':
      case 'Transfer':
      case 'Mentions':
        return _createVNode(Empty, {
          "image": Empty.PRESENTED_IMAGE_SIMPLE,
          "class": "".concat(prefixCls.value, "-small")
        }, null);
      default:
        return _createVNode(Empty, null, null);
    }
  };
  return renderHtml(props.componentName);
};
function renderEmpty(componentName) {
  return _createVNode(RenderEmpty, {
    "componentName": componentName
  }, null);
}
export default renderEmpty;