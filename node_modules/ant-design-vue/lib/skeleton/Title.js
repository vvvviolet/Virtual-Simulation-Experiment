"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.skeletonTitleProps = exports.default = void 0;
var _vue = require("vue");
var skeletonTitleProps = function skeletonTitleProps() {
  return {
    prefixCls: String,
    width: {
      type: [Number, String]
    }
  };
};
exports.skeletonTitleProps = skeletonTitleProps;
var SkeletonTitle = (0, _vue.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  name: 'SkeletonTitle',
  props: skeletonTitleProps(),
  setup: function setup(props) {
    return function () {
      var prefixCls = props.prefixCls,
        width = props.width;
      var zWidth = typeof width === 'number' ? "".concat(width, "px") : width;
      return (0, _vue.createVNode)("h3", {
        "class": prefixCls,
        "style": {
          width: zWidth
        }
      }, null);
    };
  }
});
var _default = SkeletonTitle;
exports.default = _default;