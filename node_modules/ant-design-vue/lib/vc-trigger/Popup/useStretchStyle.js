"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = require("vue");
var _default = function _default(stretch) {
  var targetSize = (0, _vue.ref)({
    width: 0,
    height: 0
  });
  function measureStretch(element) {
    targetSize.value = {
      width: element.offsetWidth,
      height: element.offsetHeight
    };
  }
  // Merge stretch style
  var style = (0, _vue.computed)(function () {
    var sizeStyle = {};
    if (stretch.value) {
      var _targetSize$value = targetSize.value,
        width = _targetSize$value.width,
        height = _targetSize$value.height;
      // Stretch with target
      if (stretch.value.indexOf('height') !== -1 && height) {
        sizeStyle.height = "".concat(height, "px");
      } else if (stretch.value.indexOf('minHeight') !== -1 && height) {
        sizeStyle.minHeight = "".concat(height, "px");
      }
      if (stretch.value.indexOf('width') !== -1 && width) {
        sizeStyle.width = "".concat(width, "px");
      } else if (stretch.value.indexOf('minWidth') !== -1 && width) {
        sizeStyle.minWidth = "".concat(width, "px");
      }
    }
    return sizeStyle;
  });
  return [style, measureStretch];
};
exports.default = _default;