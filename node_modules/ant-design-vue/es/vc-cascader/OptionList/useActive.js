import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { useInjectCascader } from '../context';
import { watch } from 'vue';
import { useBaseProps } from '../../vc-select';
import useState from '../../_util/hooks/useState';
/**
 * Control the active open options path.
 */
export default (function () {
  var baseProps = useBaseProps();
  var _useInjectCascader = useInjectCascader(),
    values = _useInjectCascader.values;
  // Record current dropdown active options
  // This also control the open status
  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    activeValueCells = _useState2[0],
    setActiveValueCells = _useState2[1];
  watch(function () {
    return baseProps.open;
  }, function () {
    if (baseProps.open && !baseProps.multiple) {
      var firstValueCells = values.value[0];
      setActiveValueCells(firstValueCells || []);
    }
  }, {
    immediate: true
  });
  return [activeValueCells, setActiveValueCells];
});