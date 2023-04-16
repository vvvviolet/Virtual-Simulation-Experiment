"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = require("vue");
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _debounce = _interopRequireDefault(require("lodash/debounce"));
var _resizeObserverPolyfill = _interopRequireDefault(require("resize-observer-polyfill"));
var _classNames = _interopRequireDefault(require("../_util/classNames"));
var _BaseMixin = _interopRequireDefault(require("../_util/BaseMixin"));
var _defaultProps = _interopRequireDefault(require("./default-props"));
var _initialState = _interopRequireDefault(require("./initial-state"));
var _innerSliderUtils = require("./utils/innerSliderUtils");
var _track = _interopRequireDefault(require("./track"));
var _dots = _interopRequireDefault(require("./dots"));
var _arrows = require("./arrows");
var _supportsPassive = _interopRequireDefault(require("../_util/supportsPassive"));
var _excluded = ["animating"];
function noop() {}
var _default2 = {
  name: 'InnerSlider',
  mixins: [_BaseMixin.default],
  inheritAttrs: false,
  props: (0, _objectSpread2.default)({}, _defaultProps.default),
  data: function data() {
    this.preProps = (0, _objectSpread2.default)({}, this.$props);
    this.list = null;
    this.track = null;
    this.callbackTimers = [];
    this.clickable = true;
    this.debouncedResize = null;
    var ssrState = this.ssrInit();
    return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, _initialState.default), {}, {
      currentSlide: this.initialSlide,
      slideCount: this.children.length
    }, ssrState);
  },
  watch: {
    __propsSymbol__: function __propsSymbol__() {
      var _this = this;
      var nextProps = this.$props;
      var spec = (0, _objectSpread2.default)((0, _objectSpread2.default)({
        listRef: this.list,
        trackRef: this.track
      }, nextProps), this.$data);
      var setTrackStyle = false;
      for (var _i = 0, _Object$keys = Object.keys(this.preProps); _i < _Object$keys.length; _i++) {
        var key = _Object$keys[_i];
        if (!nextProps.hasOwnProperty(key)) {
          setTrackStyle = true;
          break;
        }
        if ((0, _typeof2.default)(nextProps[key]) === 'object' || typeof nextProps[key] === 'function' || (0, _typeof2.default)(nextProps[key]) === 'symbol') {
          continue;
        }
        if (nextProps[key] !== this.preProps[key]) {
          setTrackStyle = true;
          break;
        }
      }
      this.updateState(spec, setTrackStyle, function () {
        if (_this.currentSlide >= nextProps.children.length) {
          _this.changeSlide({
            message: 'index',
            index: nextProps.children.length - nextProps.slidesToShow,
            currentSlide: _this.currentSlide
          });
        }
        if (!_this.preProps.autoplay && nextProps.autoplay) {
          _this.handleAutoPlay('playing');
        } else if (nextProps.autoplay) {
          _this.handleAutoPlay('update');
        } else {
          _this.pause('paused');
        }
      });
      this.preProps = (0, _objectSpread2.default)({}, nextProps);
    }
  },
  mounted: function mounted() {
    var _this2 = this;
    this.__emit('init');
    if (this.lazyLoad) {
      var slidesToLoad = (0, _innerSliderUtils.getOnDemandLazySlides)((0, _objectSpread2.default)((0, _objectSpread2.default)({}, this.$props), this.$data));
      if (slidesToLoad.length > 0) {
        this.setState(function (prevState) {
          return {
            lazyLoadedList: prevState.lazyLoadedList.concat(slidesToLoad)
          };
        });
        this.__emit('lazyLoad', slidesToLoad);
      }
    }
    this.$nextTick(function () {
      var spec = (0, _objectSpread2.default)({
        listRef: _this2.list,
        trackRef: _this2.track,
        children: _this2.children
      }, _this2.$props);
      _this2.updateState(spec, true, function () {
        _this2.adaptHeight();
        _this2.autoplay && _this2.handleAutoPlay('playing');
      });
      if (_this2.lazyLoad === 'progressive') {
        _this2.lazyLoadTimer = setInterval(_this2.progressiveLazyLoad, 1000);
      }
      _this2.ro = new _resizeObserverPolyfill.default(function () {
        if (_this2.animating) {
          _this2.onWindowResized(false); // don't set trackStyle hence don't break animation
          _this2.callbackTimers.push(setTimeout(function () {
            return _this2.onWindowResized();
          }, _this2.speed));
        } else {
          _this2.onWindowResized();
        }
      });
      _this2.ro.observe(_this2.list);
      document.querySelectorAll && Array.prototype.forEach.call(document.querySelectorAll('.slick-slide'), function (slide) {
        slide.onfocus = _this2.$props.pauseOnFocus ? _this2.onSlideFocus : null;
        slide.onblur = _this2.$props.pauseOnFocus ? _this2.onSlideBlur : null;
      });
      if (window.addEventListener) {
        window.addEventListener('resize', _this2.onWindowResized);
      } else {
        window.attachEvent('onresize', _this2.onWindowResized);
      }
    });
  },
  beforeUnmount: function beforeUnmount() {
    var _this$ro;
    if (this.animationEndCallback) {
      clearTimeout(this.animationEndCallback);
    }
    if (this.lazyLoadTimer) {
      clearInterval(this.lazyLoadTimer);
    }
    if (this.callbackTimers.length) {
      this.callbackTimers.forEach(function (timer) {
        return clearTimeout(timer);
      });
      this.callbackTimers = [];
    }
    if (window.addEventListener) {
      window.removeEventListener('resize', this.onWindowResized);
    } else {
      window.detachEvent('onresize', this.onWindowResized);
    }
    if (this.autoplayTimer) {
      clearInterval(this.autoplayTimer);
    }
    (_this$ro = this.ro) === null || _this$ro === void 0 ? void 0 : _this$ro.disconnect();
  },
  updated: function updated() {
    this.checkImagesLoad();
    this.__emit('reInit');
    if (this.lazyLoad) {
      var slidesToLoad = (0, _innerSliderUtils.getOnDemandLazySlides)((0, _objectSpread2.default)((0, _objectSpread2.default)({}, this.$props), this.$data));
      if (slidesToLoad.length > 0) {
        this.setState(function (prevState) {
          return {
            lazyLoadedList: prevState.lazyLoadedList.concat(slidesToLoad)
          };
        });
        this.__emit('lazyLoad');
      }
    }
    // if (this.props.onLazyLoad) {
    //   this.props.onLazyLoad([leftMostSlide])
    // }
    this.adaptHeight();
  },
  methods: {
    listRefHandler: function listRefHandler(ref) {
      this.list = ref;
    },
    trackRefHandler: function trackRefHandler(ref) {
      this.track = ref;
    },
    adaptHeight: function adaptHeight() {
      if (this.adaptiveHeight && this.list) {
        var elem = this.list.querySelector("[data-index=\"".concat(this.currentSlide, "\"]"));
        this.list.style.height = (0, _innerSliderUtils.getHeight)(elem) + 'px';
      }
    },
    onWindowResized: function onWindowResized(setTrackStyle) {
      var _this3 = this;
      if (this.debouncedResize) this.debouncedResize.cancel();
      this.debouncedResize = (0, _debounce.default)(function () {
        return _this3.resizeWindow(setTrackStyle);
      }, 50);
      this.debouncedResize();
    },
    resizeWindow: function resizeWindow() {
      var _this4 = this;
      var setTrackStyle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var isTrackMounted = Boolean(this.track);
      if (!isTrackMounted) return;
      var spec = (0, _objectSpread2.default)((0, _objectSpread2.default)({
        listRef: this.list,
        trackRef: this.track,
        children: this.children
      }, this.$props), this.$data);
      this.updateState(spec, setTrackStyle, function () {
        if (_this4.autoplay) {
          _this4.handleAutoPlay('update');
        } else {
          _this4.pause('paused');
        }
      });
      // animating state should be cleared while resizing, otherwise autoplay stops working
      this.setState({
        animating: false
      });
      clearTimeout(this.animationEndCallback);
      delete this.animationEndCallback;
    },
    updateState: function updateState(spec, setTrackStyle, callback) {
      var updatedState = (0, _innerSliderUtils.initializedState)(spec);
      spec = (0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({}, spec), updatedState), {}, {
        slideIndex: updatedState.currentSlide
      });
      var targetLeft = (0, _innerSliderUtils.getTrackLeft)(spec);
      spec = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, spec), {}, {
        left: targetLeft
      });
      var trackStyle = (0, _innerSliderUtils.getTrackCSS)(spec);
      if (setTrackStyle || this.children.length !== spec.children.length) {
        updatedState['trackStyle'] = trackStyle;
      }
      this.setState(updatedState, callback);
    },
    ssrInit: function ssrInit() {
      var children = this.children;
      if (this.variableWidth) {
        var _trackWidth = 0;
        var _trackLeft = 0;
        var childrenWidths = [];
        var preClones = (0, _innerSliderUtils.getPreClones)((0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({}, this.$props), this.$data), {}, {
          slideCount: children.length
        }));
        var postClones = (0, _innerSliderUtils.getPostClones)((0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({}, this.$props), this.$data), {}, {
          slideCount: children.length
        }));
        children.forEach(function (child) {
          var _child$props$style, _child$props$style$wi;
          var childWidth = ((_child$props$style = child.props.style) === null || _child$props$style === void 0 ? void 0 : (_child$props$style$wi = _child$props$style.width) === null || _child$props$style$wi === void 0 ? void 0 : _child$props$style$wi.split('px')[0]) || 0;
          childrenWidths.push(childWidth);
          _trackWidth += childWidth;
        });
        for (var i = 0; i < preClones; i++) {
          _trackLeft += childrenWidths[childrenWidths.length - 1 - i];
          _trackWidth += childrenWidths[childrenWidths.length - 1 - i];
        }
        for (var _i2 = 0; _i2 < postClones; _i2++) {
          _trackWidth += childrenWidths[_i2];
        }
        for (var _i3 = 0; _i3 < this.currentSlide; _i3++) {
          _trackLeft += childrenWidths[_i3];
        }
        var _trackStyle = {
          width: _trackWidth + 'px',
          left: -_trackLeft + 'px'
        };
        if (this.centerMode) {
          var currentWidth = "".concat(childrenWidths[this.currentSlide], "px");
          _trackStyle.left = "calc(".concat(_trackStyle.left, " + (100% - ").concat(currentWidth, ") / 2 ) ");
        }
        return {
          trackStyle: _trackStyle
        };
      }
      var childrenCount = children.length;
      var spec = (0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({}, this.$props), this.$data), {}, {
        slideCount: childrenCount
      });
      var slideCount = (0, _innerSliderUtils.getPreClones)(spec) + (0, _innerSliderUtils.getPostClones)(spec) + childrenCount;
      var trackWidth = 100 / this.slidesToShow * slideCount;
      var slideWidth = 100 / slideCount;
      var trackLeft = -slideWidth * ((0, _innerSliderUtils.getPreClones)(spec) + this.currentSlide) * trackWidth / 100;
      if (this.centerMode) {
        trackLeft += (100 - slideWidth * trackWidth / 100) / 2;
      }
      var trackStyle = {
        width: trackWidth + '%',
        left: trackLeft + '%'
      };
      return {
        slideWidth: slideWidth + '%',
        trackStyle: trackStyle
      };
    },
    checkImagesLoad: function checkImagesLoad() {
      var _this5 = this;
      var images = this.list && this.list.querySelectorAll && this.list.querySelectorAll('.slick-slide img') || [];
      var imagesCount = images.length;
      var loadedCount = 0;
      Array.prototype.forEach.call(images, function (image) {
        var handler = function handler() {
          return ++loadedCount && loadedCount >= imagesCount && _this5.onWindowResized();
        };
        if (!image.onclick) {
          image.onclick = function () {
            return image.parentNode.focus();
          };
        } else {
          var prevClickHandler = image.onclick;
          image.onclick = function () {
            prevClickHandler();
            image.parentNode.focus();
          };
        }
        if (!image.onload) {
          if (_this5.$props.lazyLoad) {
            image.onload = function () {
              _this5.adaptHeight();
              _this5.callbackTimers.push(setTimeout(_this5.onWindowResized, _this5.speed));
            };
          } else {
            image.onload = handler;
            image.onerror = function () {
              handler();
              _this5.__emit('lazyLoadError');
            };
          }
        }
      });
    },
    progressiveLazyLoad: function progressiveLazyLoad() {
      var slidesToLoad = [];
      var spec = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, this.$props), this.$data);
      for (var index = this.currentSlide; index < this.slideCount + (0, _innerSliderUtils.getPostClones)(spec); index++) {
        if (this.lazyLoadedList.indexOf(index) < 0) {
          slidesToLoad.push(index);
          break;
        }
      }
      for (var _index = this.currentSlide - 1; _index >= -(0, _innerSliderUtils.getPreClones)(spec); _index--) {
        if (this.lazyLoadedList.indexOf(_index) < 0) {
          slidesToLoad.push(_index);
          break;
        }
      }
      if (slidesToLoad.length > 0) {
        this.setState(function (state) {
          return {
            lazyLoadedList: state.lazyLoadedList.concat(slidesToLoad)
          };
        });
        this.__emit('lazyLoad', slidesToLoad);
      } else {
        if (this.lazyLoadTimer) {
          clearInterval(this.lazyLoadTimer);
          delete this.lazyLoadTimer;
        }
      }
    },
    slideHandler: function slideHandler(index) {
      var _this6 = this;
      var dontAnimate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var _this$$props = this.$props,
        asNavFor = _this$$props.asNavFor,
        currentSlide = _this$$props.currentSlide,
        beforeChange = _this$$props.beforeChange,
        speed = _this$$props.speed,
        afterChange = _this$$props.afterChange;
      var _slideHandler2 = (0, _innerSliderUtils.slideHandler)((0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({
          index: index
        }, this.$props), this.$data), {}, {
          trackRef: this.track,
          useCSS: this.useCSS && !dontAnimate
        })),
        state = _slideHandler2.state,
        nextState = _slideHandler2.nextState;
      if (!state) return;
      beforeChange && beforeChange(currentSlide, state.currentSlide);
      var slidesToLoad = state.lazyLoadedList.filter(function (value) {
        return _this6.lazyLoadedList.indexOf(value) < 0;
      });
      if (this.$attrs.onLazyLoad && slidesToLoad.length > 0) {
        this.__emit('lazyLoad', slidesToLoad);
      }
      if (!this.$props.waitForAnimate && this.animationEndCallback) {
        clearTimeout(this.animationEndCallback);
        afterChange && afterChange(currentSlide);
        delete this.animationEndCallback;
      }
      this.setState(state, function () {
        if (asNavFor && _this6.asNavForIndex !== index) {
          _this6.asNavForIndex = index;
          asNavFor.innerSlider.slideHandler(index);
        }
        if (!nextState) return;
        _this6.animationEndCallback = setTimeout(function () {
          var animating = nextState.animating,
            firstBatch = (0, _objectWithoutProperties2.default)(nextState, _excluded);
          _this6.setState(firstBatch, function () {
            _this6.callbackTimers.push(setTimeout(function () {
              return _this6.setState({
                animating: animating
              });
            }, 10));
            afterChange && afterChange(state.currentSlide);
            delete _this6.animationEndCallback;
          });
        }, speed);
      });
    },
    changeSlide: function changeSlide(options) {
      var dontAnimate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var spec = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, this.$props), this.$data);
      var targetSlide = (0, _innerSliderUtils.changeSlide)(spec, options);
      if (targetSlide !== 0 && !targetSlide) return;
      if (dontAnimate === true) {
        this.slideHandler(targetSlide, dontAnimate);
      } else {
        this.slideHandler(targetSlide);
      }
      this.$props.autoplay && this.handleAutoPlay('update');
      if (this.$props.focusOnSelect) {
        var nodes = this.list.querySelectorAll('.slick-current');
        nodes[0] && nodes[0].focus();
      }
    },
    clickHandler: function clickHandler(e) {
      if (this.clickable === false) {
        e.stopPropagation();
        e.preventDefault();
      }
      this.clickable = true;
    },
    keyHandler: function keyHandler(e) {
      var dir = (0, _innerSliderUtils.keyHandler)(e, this.accessibility, this.rtl);
      dir !== '' && this.changeSlide({
        message: dir
      });
    },
    selectHandler: function selectHandler(options) {
      this.changeSlide(options);
    },
    disableBodyScroll: function disableBodyScroll() {
      var preventDefault = function preventDefault(e) {
        e = e || window.event;
        if (e.preventDefault) e.preventDefault();
        e.returnValue = false;
      };
      window.ontouchmove = preventDefault;
    },
    enableBodyScroll: function enableBodyScroll() {
      window.ontouchmove = null;
    },
    swipeStart: function swipeStart(e) {
      if (this.verticalSwiping) {
        this.disableBodyScroll();
      }
      var state = (0, _innerSliderUtils.swipeStart)(e, this.swipe, this.draggable);
      state !== '' && this.setState(state);
    },
    swipeMove: function swipeMove(e) {
      var state = (0, _innerSliderUtils.swipeMove)(e, (0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({}, this.$props), this.$data), {}, {
        trackRef: this.track,
        listRef: this.list,
        slideIndex: this.currentSlide
      }));
      if (!state) return;
      if (state['swiping']) {
        this.clickable = false;
      }
      this.setState(state);
    },
    swipeEnd: function swipeEnd(e) {
      var state = (0, _innerSliderUtils.swipeEnd)(e, (0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({}, this.$props), this.$data), {}, {
        trackRef: this.track,
        listRef: this.list,
        slideIndex: this.currentSlide
      }));
      if (!state) return;
      var triggerSlideHandler = state['triggerSlideHandler'];
      delete state['triggerSlideHandler'];
      this.setState(state);
      if (triggerSlideHandler === undefined) return;
      this.slideHandler(triggerSlideHandler);
      if (this.$props.verticalSwiping) {
        this.enableBodyScroll();
      }
    },
    touchEnd: function touchEnd(e) {
      this.swipeEnd(e);
      this.clickable = true;
    },
    slickPrev: function slickPrev() {
      var _this7 = this;
      // this and fellow methods are wrapped in setTimeout
      // to make sure initialize setState has happened before
      // any of such methods are called
      this.callbackTimers.push(setTimeout(function () {
        return _this7.changeSlide({
          message: 'previous'
        });
      }, 0));
    },
    slickNext: function slickNext() {
      var _this8 = this;
      this.callbackTimers.push(setTimeout(function () {
        return _this8.changeSlide({
          message: 'next'
        });
      }, 0));
    },
    slickGoTo: function slickGoTo(slide) {
      var _this9 = this;
      var dontAnimate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      slide = Number(slide);
      if (isNaN(slide)) return '';
      this.callbackTimers.push(setTimeout(function () {
        return _this9.changeSlide({
          message: 'index',
          index: slide,
          currentSlide: _this9.currentSlide
        }, dontAnimate);
      }, 0));
    },
    play: function play() {
      var nextIndex;
      if (this.rtl) {
        nextIndex = this.currentSlide - this.slidesToScroll;
      } else {
        if ((0, _innerSliderUtils.canGoNext)((0, _objectSpread2.default)((0, _objectSpread2.default)({}, this.$props), this.$data))) {
          nextIndex = this.currentSlide + this.slidesToScroll;
        } else {
          return false;
        }
      }
      this.slideHandler(nextIndex);
    },
    handleAutoPlay: function handleAutoPlay(playType) {
      if (this.autoplayTimer) {
        clearInterval(this.autoplayTimer);
      }
      var autoplaying = this.autoplaying;
      if (playType === 'update') {
        if (autoplaying === 'hovered' || autoplaying === 'focused' || autoplaying === 'paused') {
          return;
        }
      } else if (playType === 'leave') {
        if (autoplaying === 'paused' || autoplaying === 'focused') {
          return;
        }
      } else if (playType === 'blur') {
        if (autoplaying === 'paused' || autoplaying === 'hovered') {
          return;
        }
      }
      this.autoplayTimer = setInterval(this.play, this.autoplaySpeed + 50);
      this.setState({
        autoplaying: 'playing'
      });
    },
    pause: function pause(pauseType) {
      if (this.autoplayTimer) {
        clearInterval(this.autoplayTimer);
        this.autoplayTimer = null;
      }
      var autoplaying = this.autoplaying;
      if (pauseType === 'paused') {
        this.setState({
          autoplaying: 'paused'
        });
      } else if (pauseType === 'focused') {
        if (autoplaying === 'hovered' || autoplaying === 'playing') {
          this.setState({
            autoplaying: 'focused'
          });
        }
      } else {
        // pauseType  is 'hovered'
        if (autoplaying === 'playing') {
          this.setState({
            autoplaying: 'hovered'
          });
        }
      }
    },
    onDotsOver: function onDotsOver() {
      this.autoplay && this.pause('hovered');
    },
    onDotsLeave: function onDotsLeave() {
      this.autoplay && this.autoplaying === 'hovered' && this.handleAutoPlay('leave');
    },
    onTrackOver: function onTrackOver() {
      this.autoplay && this.pause('hovered');
    },
    onTrackLeave: function onTrackLeave() {
      this.autoplay && this.autoplaying === 'hovered' && this.handleAutoPlay('leave');
    },
    onSlideFocus: function onSlideFocus() {
      this.autoplay && this.pause('focused');
    },
    onSlideBlur: function onSlideBlur() {
      this.autoplay && this.autoplaying === 'focused' && this.handleAutoPlay('blur');
    },
    customPaging: function customPaging(_ref) {
      var i = _ref.i;
      return (0, _vue.createVNode)("button", null, [i + 1]);
    },
    appendDots: function appendDots(_ref2) {
      var dots = _ref2.dots;
      return (0, _vue.createVNode)("ul", {
        "style": {
          display: 'block'
        }
      }, [dots]);
    }
  },
  render: function render() {
    var _listProps,
      _this10 = this;
    var className = (0, _classNames.default)('slick-slider', this.$attrs.class, {
      'slick-vertical': this.vertical,
      'slick-initialized': true
    });
    var spec = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, this.$props), this.$data);
    var trackProps = (0, _innerSliderUtils.extractObject)(spec, ['fade', 'cssEase', 'speed', 'infinite', 'centerMode', 'focusOnSelect', 'currentSlide', 'lazyLoad', 'lazyLoadedList', 'rtl', 'slideWidth', 'slideHeight', 'listHeight', 'vertical', 'slidesToShow', 'slidesToScroll', 'slideCount', 'trackStyle', 'variableWidth', 'unslick', 'centerPadding', 'targetSlide', 'useCSS']);
    var pauseOnHover = this.$props.pauseOnHover;
    trackProps = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, trackProps), {}, {
      focusOnSelect: this.focusOnSelect && this.clickable ? this.selectHandler : null,
      ref: this.trackRefHandler,
      onMouseleave: pauseOnHover ? this.onTrackLeave : noop,
      onMouseover: pauseOnHover ? this.onTrackOver : noop
    });
    var dots;
    if (this.dots === true && this.slideCount >= this.slidesToShow) {
      var dotProps = (0, _innerSliderUtils.extractObject)(spec, ['dotsClass', 'slideCount', 'slidesToShow', 'currentSlide', 'slidesToScroll', 'clickHandler', 'children', 'infinite', 'appendDots']);
      dotProps.customPaging = this.customPaging;
      dotProps.appendDots = this.appendDots;
      var _this$$slots = this.$slots,
        customPaging = _this$$slots.customPaging,
        appendDots = _this$$slots.appendDots;
      if (customPaging) {
        dotProps.customPaging = customPaging;
      }
      if (appendDots) {
        dotProps.appendDots = appendDots;
      }
      var pauseOnDotsHover = this.$props.pauseOnDotsHover;
      dotProps = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, dotProps), {}, {
        clickHandler: this.changeSlide,
        onMouseover: pauseOnDotsHover ? this.onDotsOver : noop,
        onMouseleave: pauseOnDotsHover ? this.onDotsLeave : noop
      });
      dots = (0, _vue.createVNode)(_dots.default, dotProps, null);
    }
    var prevArrow, nextArrow;
    var arrowProps = (0, _innerSliderUtils.extractObject)(spec, ['infinite', 'centerMode', 'currentSlide', 'slideCount', 'slidesToShow']);
    arrowProps.clickHandler = this.changeSlide;
    var _this$$slots2 = this.$slots,
      prevArrowCustom = _this$$slots2.prevArrow,
      nextArrowCustom = _this$$slots2.nextArrow;
    if (prevArrowCustom) {
      arrowProps.prevArrow = prevArrowCustom;
    }
    if (nextArrowCustom) {
      arrowProps.nextArrow = nextArrowCustom;
    }
    if (this.arrows) {
      prevArrow = (0, _vue.createVNode)(_arrows.PrevArrow, arrowProps, null);
      nextArrow = (0, _vue.createVNode)(_arrows.NextArrow, arrowProps, null);
    }
    var verticalHeightStyle = null;
    if (this.vertical) {
      verticalHeightStyle = {
        height: typeof this.listHeight === 'number' ? "".concat(this.listHeight, "px") : this.listHeight
      };
    }
    var centerPaddingStyle = null;
    if (this.vertical === false) {
      if (this.centerMode === true) {
        centerPaddingStyle = {
          padding: '0px ' + this.centerPadding
        };
      }
    } else {
      if (this.centerMode === true) {
        centerPaddingStyle = {
          padding: this.centerPadding + ' 0px'
        };
      }
    }
    var listStyle = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, verticalHeightStyle), centerPaddingStyle);
    var touchMove = this.touchMove;
    var listProps = (_listProps = {
      ref: this.listRefHandler,
      class: 'slick-list',
      style: listStyle,
      onClick: this.clickHandler,
      onMousedown: touchMove ? this.swipeStart : noop,
      onMousemove: this.dragging && touchMove ? this.swipeMove : noop,
      onMouseup: touchMove ? this.swipeEnd : noop,
      onMouseleave: this.dragging && touchMove ? this.swipeEnd : noop
    }, (0, _defineProperty2.default)(_listProps, _supportsPassive.default ? 'onTouchstartPassive' : 'onTouchstart', touchMove ? this.swipeStart : noop), (0, _defineProperty2.default)(_listProps, _supportsPassive.default ? 'onTouchmovePassive' : 'onTouchmove', this.dragging && touchMove ? this.swipeMove : noop), (0, _defineProperty2.default)(_listProps, "onTouchend", touchMove ? this.touchEnd : noop), (0, _defineProperty2.default)(_listProps, "onTouchcancel", this.dragging && touchMove ? this.swipeEnd : noop), (0, _defineProperty2.default)(_listProps, "onKeydown", this.accessibility ? this.keyHandler : noop), _listProps);
    var innerSliderProps = {
      class: className,
      dir: 'ltr',
      style: this.$attrs.style
    };
    if (this.unslick) {
      listProps = {
        class: 'slick-list',
        ref: this.listRefHandler
      };
      innerSliderProps = {
        class: className
      };
    }
    return (0, _vue.createVNode)("div", innerSliderProps, [!this.unslick ? prevArrow : '', (0, _vue.createVNode)("div", listProps, [(0, _vue.createVNode)(_track.default, trackProps, {
      default: function _default() {
        return [_this10.children];
      }
    })]), !this.unslick ? nextArrow : '', !this.unslick ? dots : '']);
  }
};
exports.default = _default2;