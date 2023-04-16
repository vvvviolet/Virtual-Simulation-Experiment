import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _typeof from "@babel/runtime/helpers/esm/typeof";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
var _excluded = ["animating"];
import { createVNode as _createVNode } from "vue";
import debounce from 'lodash-es/debounce';
import ResizeObserver from 'resize-observer-polyfill';
import classnames from '../_util/classNames';
import BaseMixin from '../_util/BaseMixin';
import defaultProps from './default-props';
import initialState from './initial-state';
import { getOnDemandLazySlides, extractObject, initializedState, getHeight, canGoNext, slideHandler as _slideHandler, changeSlide as _changeSlide, keyHandler as _keyHandler, swipeStart as _swipeStart, swipeMove as _swipeMove, swipeEnd as _swipeEnd, getPreClones, getPostClones, getTrackLeft, getTrackCSS } from './utils/innerSliderUtils';
import Track from './track';
import Dots from './dots';
import { PrevArrow, NextArrow } from './arrows';
import supportsPassive from '../_util/supportsPassive';
function noop() {}
export default {
  name: 'InnerSlider',
  mixins: [BaseMixin],
  inheritAttrs: false,
  props: _objectSpread({}, defaultProps),
  data: function data() {
    this.preProps = _objectSpread({}, this.$props);
    this.list = null;
    this.track = null;
    this.callbackTimers = [];
    this.clickable = true;
    this.debouncedResize = null;
    var ssrState = this.ssrInit();
    return _objectSpread(_objectSpread({}, initialState), {}, {
      currentSlide: this.initialSlide,
      slideCount: this.children.length
    }, ssrState);
  },
  watch: {
    __propsSymbol__: function __propsSymbol__() {
      var _this = this;
      var nextProps = this.$props;
      var spec = _objectSpread(_objectSpread({
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
        if (_typeof(nextProps[key]) === 'object' || typeof nextProps[key] === 'function' || _typeof(nextProps[key]) === 'symbol') {
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
      this.preProps = _objectSpread({}, nextProps);
    }
  },
  mounted: function mounted() {
    var _this2 = this;
    this.__emit('init');
    if (this.lazyLoad) {
      var slidesToLoad = getOnDemandLazySlides(_objectSpread(_objectSpread({}, this.$props), this.$data));
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
      var spec = _objectSpread({
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
      _this2.ro = new ResizeObserver(function () {
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
      var slidesToLoad = getOnDemandLazySlides(_objectSpread(_objectSpread({}, this.$props), this.$data));
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
        this.list.style.height = getHeight(elem) + 'px';
      }
    },
    onWindowResized: function onWindowResized(setTrackStyle) {
      var _this3 = this;
      if (this.debouncedResize) this.debouncedResize.cancel();
      this.debouncedResize = debounce(function () {
        return _this3.resizeWindow(setTrackStyle);
      }, 50);
      this.debouncedResize();
    },
    resizeWindow: function resizeWindow() {
      var _this4 = this;
      var setTrackStyle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var isTrackMounted = Boolean(this.track);
      if (!isTrackMounted) return;
      var spec = _objectSpread(_objectSpread({
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
      var updatedState = initializedState(spec);
      spec = _objectSpread(_objectSpread(_objectSpread({}, spec), updatedState), {}, {
        slideIndex: updatedState.currentSlide
      });
      var targetLeft = getTrackLeft(spec);
      spec = _objectSpread(_objectSpread({}, spec), {}, {
        left: targetLeft
      });
      var trackStyle = getTrackCSS(spec);
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
        var preClones = getPreClones(_objectSpread(_objectSpread(_objectSpread({}, this.$props), this.$data), {}, {
          slideCount: children.length
        }));
        var postClones = getPostClones(_objectSpread(_objectSpread(_objectSpread({}, this.$props), this.$data), {}, {
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
      var spec = _objectSpread(_objectSpread(_objectSpread({}, this.$props), this.$data), {}, {
        slideCount: childrenCount
      });
      var slideCount = getPreClones(spec) + getPostClones(spec) + childrenCount;
      var trackWidth = 100 / this.slidesToShow * slideCount;
      var slideWidth = 100 / slideCount;
      var trackLeft = -slideWidth * (getPreClones(spec) + this.currentSlide) * trackWidth / 100;
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
      var spec = _objectSpread(_objectSpread({}, this.$props), this.$data);
      for (var index = this.currentSlide; index < this.slideCount + getPostClones(spec); index++) {
        if (this.lazyLoadedList.indexOf(index) < 0) {
          slidesToLoad.push(index);
          break;
        }
      }
      for (var _index = this.currentSlide - 1; _index >= -getPreClones(spec); _index--) {
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
      var _slideHandler2 = _slideHandler(_objectSpread(_objectSpread(_objectSpread({
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
            firstBatch = _objectWithoutProperties(nextState, _excluded);
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
      var spec = _objectSpread(_objectSpread({}, this.$props), this.$data);
      var targetSlide = _changeSlide(spec, options);
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
      var dir = _keyHandler(e, this.accessibility, this.rtl);
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
      var state = _swipeStart(e, this.swipe, this.draggable);
      state !== '' && this.setState(state);
    },
    swipeMove: function swipeMove(e) {
      var state = _swipeMove(e, _objectSpread(_objectSpread(_objectSpread({}, this.$props), this.$data), {}, {
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
      var state = _swipeEnd(e, _objectSpread(_objectSpread(_objectSpread({}, this.$props), this.$data), {}, {
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
        if (canGoNext(_objectSpread(_objectSpread({}, this.$props), this.$data))) {
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
      return _createVNode("button", null, [i + 1]);
    },
    appendDots: function appendDots(_ref2) {
      var dots = _ref2.dots;
      return _createVNode("ul", {
        "style": {
          display: 'block'
        }
      }, [dots]);
    }
  },
  render: function render() {
    var _listProps,
      _this10 = this;
    var className = classnames('slick-slider', this.$attrs.class, {
      'slick-vertical': this.vertical,
      'slick-initialized': true
    });
    var spec = _objectSpread(_objectSpread({}, this.$props), this.$data);
    var trackProps = extractObject(spec, ['fade', 'cssEase', 'speed', 'infinite', 'centerMode', 'focusOnSelect', 'currentSlide', 'lazyLoad', 'lazyLoadedList', 'rtl', 'slideWidth', 'slideHeight', 'listHeight', 'vertical', 'slidesToShow', 'slidesToScroll', 'slideCount', 'trackStyle', 'variableWidth', 'unslick', 'centerPadding', 'targetSlide', 'useCSS']);
    var pauseOnHover = this.$props.pauseOnHover;
    trackProps = _objectSpread(_objectSpread({}, trackProps), {}, {
      focusOnSelect: this.focusOnSelect && this.clickable ? this.selectHandler : null,
      ref: this.trackRefHandler,
      onMouseleave: pauseOnHover ? this.onTrackLeave : noop,
      onMouseover: pauseOnHover ? this.onTrackOver : noop
    });
    var dots;
    if (this.dots === true && this.slideCount >= this.slidesToShow) {
      var dotProps = extractObject(spec, ['dotsClass', 'slideCount', 'slidesToShow', 'currentSlide', 'slidesToScroll', 'clickHandler', 'children', 'infinite', 'appendDots']);
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
      dotProps = _objectSpread(_objectSpread({}, dotProps), {}, {
        clickHandler: this.changeSlide,
        onMouseover: pauseOnDotsHover ? this.onDotsOver : noop,
        onMouseleave: pauseOnDotsHover ? this.onDotsLeave : noop
      });
      dots = _createVNode(Dots, dotProps, null);
    }
    var prevArrow, nextArrow;
    var arrowProps = extractObject(spec, ['infinite', 'centerMode', 'currentSlide', 'slideCount', 'slidesToShow']);
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
      prevArrow = _createVNode(PrevArrow, arrowProps, null);
      nextArrow = _createVNode(NextArrow, arrowProps, null);
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
    var listStyle = _objectSpread(_objectSpread({}, verticalHeightStyle), centerPaddingStyle);
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
    }, _defineProperty(_listProps, supportsPassive ? 'onTouchstartPassive' : 'onTouchstart', touchMove ? this.swipeStart : noop), _defineProperty(_listProps, supportsPassive ? 'onTouchmovePassive' : 'onTouchmove', this.dragging && touchMove ? this.swipeMove : noop), _defineProperty(_listProps, "onTouchend", touchMove ? this.touchEnd : noop), _defineProperty(_listProps, "onTouchcancel", this.dragging && touchMove ? this.swipeEnd : noop), _defineProperty(_listProps, "onKeydown", this.accessibility ? this.keyHandler : noop), _listProps);
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
    return _createVNode("div", innerSliderProps, [!this.unslick ? prevArrow : '', _createVNode("div", listProps, [_createVNode(Track, trackProps, {
      default: function _default() {
        return [_this10.children];
      }
    })]), !this.unslick ? nextArrow : '', !this.unslick ? dots : '']);
  }
};