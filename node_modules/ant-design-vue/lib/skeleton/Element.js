"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.skeletonElementProps = exports.default = void 0;
var _vue = require("vue");
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _classNames3 = _interopRequireDefault(require("../_util/classNames"));
var skeletonElementProps = function skeletonElementProps() {
  return {
    prefixCls: String,
    size: [String, Number],
    shape: String,
    active: {
      type: Boolean,
      default: undefined
    }
  };
};
exports.skeletonElementProps = skeletonElementProps;
var Element = function Element(props) {
  var _classNames, _classNames2;
  var prefixCls = props.prefixCls,
    size = props.size,
    shape = props.shape;
  var sizeCls = (0, _classNames3.default)((_classNames = {}, (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-lg"), size === 'large'), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-sm"), size === 'small'), _classNames));
  var shapeCls = (0, _classNames3.default)((_classNames2 = {}, (0, _defineProperty2.default)(_classNames2, "".concat(prefixCls, "-circle"), shape === 'circle'), (0, _defineProperty2.default)(_classNames2, "".concat(prefixCls, "-square"), shape === 'square'), (0, _defineProperty2.default)(_classNames2, "".concat(prefixCls, "-round"), shape === 'round'), _classNames2));
  var sizeStyle = typeof size === 'number' ? {
    width: "".concat(size, "px"),
    height: "".concat(size, "px"),
    lineHeight: "".concat(size, "px")
  } : {};
  return (0, _vue.createVNode)("span", {
    "class": (0, _classNames3.default)(prefixCls, sizeCls, shapeCls),
    "style": sizeStyle
  }, null);
};
Element.displayName = 'SkeletonElement';
var _default = Element;
exports.default = _default;