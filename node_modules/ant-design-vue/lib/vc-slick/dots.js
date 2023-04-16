"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = require("vue");
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _classNames = _interopRequireDefault(require("../_util/classNames"));
var _vnode = require("../_util/vnode");
var _innerSliderUtils = require("./utils/innerSliderUtils");
var getDotCount = function getDotCount(spec) {
  var dots;
  if (spec.infinite) {
    dots = Math.ceil(spec.slideCount / spec.slidesToScroll);
  } else {
    dots = Math.ceil((spec.slideCount - spec.slidesToShow) / spec.slidesToScroll) + 1;
  }
  return dots;
};
var Dots = function Dots(_, _ref) {
  var attrs = _ref.attrs;
  var slideCount = attrs.slideCount,
    slidesToScroll = attrs.slidesToScroll,
    slidesToShow = attrs.slidesToShow,
    infinite = attrs.infinite,
    currentSlide = attrs.currentSlide,
    appendDots = attrs.appendDots,
    customPaging = attrs.customPaging,
    clickHandler = attrs.clickHandler,
    dotsClass = attrs.dotsClass,
    onMouseenter = attrs.onMouseenter,
    onMouseover = attrs.onMouseover,
    onMouseleave = attrs.onMouseleave;
  var dotCount = getDotCount({
    slideCount: slideCount,
    slidesToScroll: slidesToScroll,
    slidesToShow: slidesToShow,
    infinite: infinite
  });
  // Apply join & split to Array to pre-fill it for IE8
  //
  // Credit: http://stackoverflow.com/a/13735425/1849458
  var mouseEvents = {
    onMouseenter: onMouseenter,
    onMouseover: onMouseover,
    onMouseleave: onMouseleave
  };
  var dots = [];
  var _loop = function _loop() {
    var _rightBound = (i + 1) * slidesToScroll - 1;
    var rightBound = infinite ? _rightBound : (0, _innerSliderUtils.clamp)(_rightBound, 0, slideCount - 1);
    var _leftBound = rightBound - (slidesToScroll - 1);
    var leftBound = infinite ? _leftBound : (0, _innerSliderUtils.clamp)(_leftBound, 0, slideCount - 1);
    var className = (0, _classNames.default)({
      'slick-active': infinite ? currentSlide >= leftBound && currentSlide <= rightBound : currentSlide === leftBound
    });
    var dotOptions = {
      message: 'dots',
      index: i,
      slidesToScroll: slidesToScroll,
      currentSlide: currentSlide
    };
    function onClick(e) {
      // In Autoplay the focus stays on clicked button even after transition
      // to next slide. That only goes away by click somewhere outside
      if (e) {
        e.preventDefault();
      }
      clickHandler(dotOptions);
    }
    dots = dots.concat((0, _vue.createVNode)("li", {
      "key": i,
      "class": className
    }, [(0, _vnode.cloneElement)(customPaging({
      i: i
    }), {
      onClick: onClick
    })]));
  };
  for (var i = 0; i < dotCount; i++) {
    _loop();
  }
  return (0, _vnode.cloneElement)(appendDots({
    dots: dots
  }), (0, _objectSpread2.default)({
    class: dotsClass
  }, mouseEvents));
};
Dots.inheritAttrs = false;
var _default = Dots;
exports.default = _default;