import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { resolveDirective as _resolveDirective, createVNode as _createVNode } from "vue";
import json2mq from '../_util/json2mq';
import BaseMixin from '../_util/BaseMixin';
import { cloneElement } from '../_util/vnode';
import InnerSlider from './inner-slider';
import defaultProps from './default-props';
import { canUseDOM } from './utils/innerSliderUtils';
import { getSlot } from '../_util/props-util';
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Slider',
  mixins: [BaseMixin],
  inheritAttrs: false,
  props: _objectSpread({}, defaultProps),
  data: function data() {
    this._responsiveMediaHandlers = [];
    return {
      breakpoint: null
    };
  },
  // handles responsive breakpoints
  mounted: function mounted() {
    var _this = this;
    if (this.responsive) {
      var breakpoints = this.responsive.map(function (breakpt) {
        return breakpt.breakpoint;
      });
      // sort them in increasing order of their numerical value
      breakpoints.sort(function (x, y) {
        return x - y;
      });
      breakpoints.forEach(function (breakpoint, index) {
        // media query for each breakpoint
        var bQuery;
        if (index === 0) {
          bQuery = json2mq({
            minWidth: 0,
            maxWidth: breakpoint
          });
        } else {
          bQuery = json2mq({
            minWidth: breakpoints[index - 1] + 1,
            maxWidth: breakpoint
          });
        }
        // when not using server side rendering
        canUseDOM() && _this.media(bQuery, function () {
          _this.setState({
            breakpoint: breakpoint
          });
        });
      });
      // Register media query for full screen. Need to support resize from small to large
      // convert javascript object to media query string
      var query = json2mq({
        minWidth: breakpoints.slice(-1)[0]
      });
      canUseDOM() && this.media(query, function () {
        _this.setState({
          breakpoint: null
        });
      });
    }
  },
  beforeUnmount: function beforeUnmount() {
    this._responsiveMediaHandlers.forEach(function (obj) {
      obj.mql.removeListener(obj.listener);
    });
  },
  methods: {
    innerSliderRefHandler: function innerSliderRefHandler(ref) {
      this.innerSlider = ref;
    },
    media: function media(query, handler) {
      // javascript handler for  css media query
      var mql = window.matchMedia(query);
      var listener = function listener(_ref) {
        var matches = _ref.matches;
        if (matches) {
          handler();
        }
      };
      mql.addListener(listener);
      listener(mql);
      this._responsiveMediaHandlers.push({
        mql: mql,
        query: query,
        listener: listener
      });
    },
    slickPrev: function slickPrev() {
      var _this$innerSlider;
      (_this$innerSlider = this.innerSlider) === null || _this$innerSlider === void 0 ? void 0 : _this$innerSlider.slickPrev();
    },
    slickNext: function slickNext() {
      var _this$innerSlider2;
      (_this$innerSlider2 = this.innerSlider) === null || _this$innerSlider2 === void 0 ? void 0 : _this$innerSlider2.slickNext();
    },
    slickGoTo: function slickGoTo(slide) {
      var _this$innerSlider3;
      var dontAnimate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      (_this$innerSlider3 = this.innerSlider) === null || _this$innerSlider3 === void 0 ? void 0 : _this$innerSlider3.slickGoTo(slide, dontAnimate);
    },
    slickPause: function slickPause() {
      var _this$innerSlider4;
      (_this$innerSlider4 = this.innerSlider) === null || _this$innerSlider4 === void 0 ? void 0 : _this$innerSlider4.pause('paused');
    },
    slickPlay: function slickPlay() {
      var _this$innerSlider5;
      (_this$innerSlider5 = this.innerSlider) === null || _this$innerSlider5 === void 0 ? void 0 : _this$innerSlider5.handleAutoPlay('play');
    }
  },
  render: function render() {
    var _this2 = this;
    var settings;
    var newProps;
    if (this.breakpoint) {
      newProps = this.responsive.filter(function (resp) {
        return resp.breakpoint === _this2.breakpoint;
      });
      settings = newProps[0].settings === 'unslick' ? 'unslick' : _objectSpread(_objectSpread({}, this.$props), newProps[0].settings);
    } else {
      settings = _objectSpread({}, this.$props);
    }
    // force scrolling by one if centerMode is on
    if (settings.centerMode) {
      if (settings.slidesToScroll > 1 && process.env.NODE_ENV !== 'production') {
        console.warn("slidesToScroll should be equal to 1 in centerMode, you are using ".concat(settings.slidesToScroll));
      }
      settings.slidesToScroll = 1;
    }
    // force showing one slide and scrolling by one if the fade mode is on
    if (settings.fade) {
      if (settings.slidesToShow > 1 && process.env.NODE_ENV !== 'production') {
        console.warn("slidesToShow should be equal to 1 when fade is true, you're using ".concat(settings.slidesToShow));
      }
      if (settings.slidesToScroll > 1 && process.env.NODE_ENV !== 'production') {
        console.warn("slidesToScroll should be equal to 1 when fade is true, you're using ".concat(settings.slidesToScroll));
      }
      settings.slidesToShow = 1;
      settings.slidesToScroll = 1;
    }
    // makes sure that children is an array, even when there is only 1 child
    var children = getSlot(this) || [];
    // Children may contain false or null, so we should filter them
    // children may also contain string filled with spaces (in certain cases where we use jsx strings)
    children = children.filter(function (child) {
      if (typeof child === 'string') {
        return !!child.trim();
      }
      return !!child;
    });
    // rows and slidesPerRow logic is handled here
    if (settings.variableWidth && (settings.rows > 1 || settings.slidesPerRow > 1)) {
      console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1");
      settings.variableWidth = false;
    }
    var newChildren = [];
    var currentWidth = null;
    for (var i = 0; i < children.length; i += settings.rows * settings.slidesPerRow) {
      var newSlide = [];
      for (var j = i; j < i + settings.rows * settings.slidesPerRow; j += settings.slidesPerRow) {
        var row = [];
        for (var k = j; k < j + settings.slidesPerRow; k += 1) {
          var _children$k$props;
          if (settings.variableWidth && (_children$k$props = children[k].props) !== null && _children$k$props !== void 0 && _children$k$props.style) {
            currentWidth = children[k].props.style.width;
          }
          if (k >= children.length) break;
          row.push(cloneElement(children[k], {
            key: 100 * i + 10 * j + k,
            tabindex: -1,
            style: {
              width: "".concat(100 / settings.slidesPerRow, "%"),
              display: 'inline-block'
            }
          }));
        }
        newSlide.push(_createVNode("div", {
          "key": 10 * i + j
        }, [row]));
      }
      if (settings.variableWidth) {
        newChildren.push(_createVNode("div", {
          "key": i,
          "style": {
            width: currentWidth
          }
        }, [newSlide]));
      } else {
        newChildren.push(_createVNode("div", {
          "key": i
        }, [newSlide]));
      }
    }
    if (settings === 'unslick') {
      var className = 'regular slider ' + (this.className || '');
      return _createVNode("div", {
        "class": className
      }, [children]);
    } else if (newChildren.length <= settings.slidesToShow) {
      settings.unslick = true;
    }
    var sliderProps = _objectSpread(_objectSpread(_objectSpread({}, this.$attrs), settings), {}, {
      children: newChildren,
      ref: this.innerSliderRefHandler
    });
    return _createVNode(InnerSlider, _objectSpread(_objectSpread({}, sliderProps), {}, {
      "__propsSymbol__": []
    }), this.$slots);
  }
});