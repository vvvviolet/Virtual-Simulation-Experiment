import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { useAttrs } from 'vue';
// 仅用在函数式组件中，不用考虑响应式问题
export default function useMergeProps(props) {
  var attrs = useAttrs();
  return _objectSpread(_objectSpread({}, props), attrs);
}