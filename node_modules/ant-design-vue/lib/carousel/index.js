"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.carouselProps = void 0;
var _vue = require("vue");
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));
var _warning = _interopRequireDefault(require("../_util/warning"));
var _classNames3 = _interopRequireDefault(require("../_util/classNames"));
var _vcSlick = _interopRequireDefault(require("../vc-slick"));
var _type = require("../_util/type");
var _useConfigInject2 = _interopRequireDefault(require("../_util/hooks/useConfigInject"));
var _excluded = ["class", "style"];
// Carousel
var carouselProps = function carouselProps() {
  return {
    effect: String,
    dots: {
      type: Boolean,
      default: true
    },
    vertical: {
      type: Boolean,
      default: undefined
    },
    autoplay: {
      type: Boolean,
      default: undefined
    },
    easing: String,
    beforeChange: Function,
    afterChange: Function,
    // style: PropTypes.React.CSSProperties,
    prefixCls: String,
    accessibility: {
      type: Boolean,
      default: undefined
    },
    nextArrow: _vueTypes.default.any,
    prevArrow: _vueTypes.default.any,
    pauseOnHover: {
      type: Boolean,
      default: undefined
    },
    // className: String,
    adaptiveHeight: {
      type: Boolean,
      default: undefined
    },
    arrows: {
      type: Boolean,
      default: false
    },
    autoplaySpeed: Number,
    centerMode: {
      type: Boolean,
      default: undefined
    },
    centerPadding: String,
    cssEase: String,
    dotsClass: String,
    draggable: {
      type: Boolean,
      default: false
    },
    fade: {
      type: Boolean,
      default: undefined
    },
    focusOnSelect: {
      type: Boolean,
      default: undefined
    },
    infinite: {
      type: Boolean,
      default: undefined
    },
    initialSlide: Number,
    lazyLoad: String,
    rtl: {
      type: Boolean,
      default: undefined
    },
    slide: String,
    slidesToShow: Number,
    slidesToScroll: Number,
    speed: Number,
    swipe: {
      type: Boolean,
      default: undefined
    },
    swipeToSlide: {
      type: Boolean,
      default: undefined
    },
    swipeEvent: Function,
    touchMove: {
      type: Boolean,
      default: undefined
    },
    touchThreshold: Number,
    variableWidth: {
      type: Boolean,
      default: undefined
    },
    useCSS: {
      type: Boolean,
      default: undefined
    },
    slickGoTo: Number,
    responsive: Array,
    dotPosition: {
      type: String,
      default: undefined
    },
    verticalSwiping: {
      type: Boolean,
      default: false
    }
  };
};
exports.carouselProps = carouselProps;
var Carousel = (0, _vue.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  name: 'ACarousel',
  inheritAttrs: false,
  props: carouselProps(),
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
      attrs = _ref.attrs,
      expose = _ref.expose;
    var slickRef = (0, _vue.ref)();
    var goTo = function goTo(slide) {
      var _slickRef$value;
      var dontAnimate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      (_slickRef$value = slickRef.value) === null || _slickRef$value === void 0 ? void 0 : _slickRef$value.slickGoTo(slide, dontAnimate);
    };
    expose({
      goTo: goTo,
      autoplay: function autoplay(palyType) {
        var _slickRef$value2, _slickRef$value2$inne;
        (_slickRef$value2 = slickRef.value) === null || _slickRef$value2 === void 0 ? void 0 : (_slickRef$value2$inne = _slickRef$value2.innerSlider) === null || _slickRef$value2$inne === void 0 ? void 0 : _slickRef$value2$inne.handleAutoPlay(palyType);
      },
      prev: function prev() {
        var _slickRef$value3;
        (_slickRef$value3 = slickRef.value) === null || _slickRef$value3 === void 0 ? void 0 : _slickRef$value3.slickPrev();
      },
      next: function next() {
        var _slickRef$value4;
        (_slickRef$value4 = slickRef.value) === null || _slickRef$value4 === void 0 ? void 0 : _slickRef$value4.slickNext();
      },
      innerSlider: (0, _vue.computed)(function () {
        var _slickRef$value5;
        return (_slickRef$value5 = slickRef.value) === null || _slickRef$value5 === void 0 ? void 0 : _slickRef$value5.innerSlider;
      })
    });
    (0, _vue.watchEffect)(function () {
      (0, _warning.default)(props.vertical === undefined, 'Carousel', '`vertical` is deprecated, please use `dotPosition` instead.');
    });
    var _useConfigInject = (0, _useConfigInject2.default)('carousel', props),
      prefixCls = _useConfigInject.prefixCls,
      direction = _useConfigInject.direction;
    var dotPosition = (0, _vue.computed)(function () {
      if (props.dotPosition) return props.dotPosition;
      if (props.vertical !== undefined) return props.vertical ? 'right' : 'bottom';
      return 'bottom';
    });
    var vertical = (0, _vue.computed)(function () {
      return dotPosition.value === 'left' || dotPosition.value === 'right';
    });
    var dsClass = (0, _vue.computed)(function () {
      var _classNames;
      var dotsClass = 'slick-dots';
      return (0, _classNames3.default)((_classNames = {}, (0, _defineProperty2.default)(_classNames, dotsClass, true), (0, _defineProperty2.default)(_classNames, "".concat(dotsClass, "-").concat(dotPosition.value), true), (0, _defineProperty2.default)(_classNames, "".concat(props.dotsClass), !!props.dotsClass), _classNames));
    });
    return function () {
      var _classNames2;
      var dots = props.dots,
        arrows = props.arrows,
        draggable = props.draggable,
        effect = props.effect;
      var cls = attrs.class,
        style = attrs.style,
        restAttrs = (0, _objectWithoutProperties2.default)(attrs, _excluded);
      var fade = effect === 'fade' ? true : props.fade;
      var className = (0, _classNames3.default)(prefixCls.value, (_classNames2 = {}, (0, _defineProperty2.default)(_classNames2, "".concat(prefixCls.value, "-rtl"), direction.value === 'rtl'), (0, _defineProperty2.default)(_classNames2, "".concat(prefixCls.value, "-vertical"), vertical.value), (0, _defineProperty2.default)(_classNames2, "".concat(cls), !!cls), _classNames2));
      return (0, _vue.createVNode)("div", {
        "class": className,
        "style": style
      }, [(0, _vue.createVNode)(_vcSlick.default, (0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({
        "ref": slickRef
      }, props), restAttrs), {}, {
        "dots": !!dots,
        "dotsClass": dsClass.value,
        "arrows": arrows,
        "draggable": draggable,
        "fade": fade,
        "vertical": vertical.value
      }), slots)]);
    };
  }
});
var _default = (0, _type.withInstall)(Carousel);
exports.default = _default;