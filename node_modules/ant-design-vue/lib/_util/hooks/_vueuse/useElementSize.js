"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useElementSize = useElementSize;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _vue = require("vue");
var _useResizeObserver = require("./useResizeObserver");
var _unrefElement = require("./unrefElement");
/**
 * Reactive size of an HTML element.
 *
 * @see https://vueuse.org/useElementSize
 * @param target
 * @param callback
 * @param options
 */
function useElementSize(target) {
  var initialSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    width: 0,
    height: 0
  };
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var _options$box = options.box,
    box = _options$box === void 0 ? 'content-box' : _options$box;
  var width = (0, _vue.ref)(initialSize.width);
  var height = (0, _vue.ref)(initialSize.height);
  (0, _useResizeObserver.useResizeObserver)(target, function (_ref) {
    var _ref2 = (0, _slicedToArray2.default)(_ref, 1),
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
  (0, _vue.watch)(function () {
    return (0, _unrefElement.unrefElement)(target);
  }, function (ele) {
    width.value = ele ? initialSize.width : 0;
    height.value = ele ? initialSize.height : 0;
  });
  return {
    width: width,
    height: height
  };
}