import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { ref, watch } from 'vue';
import { useResizeObserver } from './useResizeObserver';
import { unrefElement } from './unrefElement';
/**
 * Reactive size of an HTML element.
 *
 * @see https://vueuse.org/useElementSize
 * @param target
 * @param callback
 * @param options
 */
export function useElementSize(target) {
  var initialSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    width: 0,
    height: 0
  };
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var _options$box = options.box,
    box = _options$box === void 0 ? 'content-box' : _options$box;
  var width = ref(initialSize.width);
  var height = ref(initialSize.height);
  useResizeObserver(target, function (_ref) {
    var _ref2 = _slicedToArray(_ref, 1),
      entry = _ref2[0];
    var boxSize = box === 'border-box' ? entry.borderBoxSize : box === 'content-box' ? entry.contentBoxSize : entry.devicePixelContentBoxSize;
    if (boxSize) {
      width.value = boxSize.reduce(function (acc, _ref3) {
        var inlineSize = _ref3.inlineSize;
        return acc + inlineSize;
      }, 0);
      height.value = boxSize.reduce(function (acc, _ref4) {
        var blockSize = _ref4.blockSize;
        return acc + blockSize;
      }, 0);
    } else {
      // fallback
      width.value = entry.contentRect.width;
      height.value = entry.contentRect.height;
    }
  }, options);
  watch(function () {
    return unrefElement(target);
  }, function (ele) {
    width.value = ele ? initialSize.width : 0;
    height.value = ele ? initialSize.height : 0;
  });
  return {
    width: width,
    height: height
  };
}