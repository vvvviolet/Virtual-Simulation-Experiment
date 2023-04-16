import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { createVNode as _createVNode } from "vue";
import classnames from '../_util/classNames';
import { cloneElement } from '../_util/vnode';
import { clamp } from './utils/innerSliderUtils';
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
    var rightBound = infinite ? _rightBound : clamp(_rightBound, 0, slideCount - 1);
    var _leftBound = rightBound - (slidesToScroll - 1);
    var leftBound = infinite ? _leftBound : clamp(_leftBound, 0, slideCount - 1);
    var className = classnames({
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
    dots = dots.concat(_createVNode("li", {
      "key": i,
      "class": className
    }, [cloneElement(customPaging({
      i: i
    }), {
      onClick: onClick
    })]));
  };
  for (var i = 0; i < dotCount; i++) {
    _loop();
  }
  return cloneElement(appendDots({
    dots: dots
  }), _objectSpread({
    class: dotsClass
  }, mouseEvents));
};
Dots.inheritAttrs = false;
export default Dots;