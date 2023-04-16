"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = require("vue");
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _addEventListener = _interopRequireDefault(require("../vc-util/Dom/addEventListener"));
var _css = require("../vc-util/Dom/css");
var _classNames2 = _interopRequireDefault(require("../_util/classNames"));
var _getScrollBarSize = _interopRequireDefault(require("../_util/getScrollBarSize"));
var _TableContext = require("./context/TableContext");
var _useFrame = require("./hooks/useFrame");
var _default = (0, _vue.defineComponent)({
  name: 'StickyScrollBar',
  inheritAttrs: false,
  props: ['offsetScroll', 'container', 'scrollBodyRef', 'scrollBodySizeInfo'],
  emits: ['scroll'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit,
      expose = _ref.expose;
    var tableContext = (0, _TableContext.useInjectTable)();
    var bodyScrollWidth = (0, _vue.ref)(0);
    var bodyWidth = (0, _vue.ref)(0);
    var scrollBarWidth = (0, _vue.ref)(0);
    (0, _vue.watchEffect)(function () {
      bodyScrollWidth.value = props.scrollBodySizeInfo.scrollWidth || 0;
      bodyWidth.value = props.scrollBodySizeInfo.clientWidth || 0;
      scrollBarWidth.value = bodyScrollWidth.value && bodyWidth.value * (bodyWidth.value / bodyScrollWidth.value);
    }, {
      flush: 'post'
    });
    var scrollBarRef = (0, _vue.ref)();
    var _useLayoutState = (0, _useFrame.useLayoutState)({
        scrollLeft: 0,
        isHiddenScrollBar: true
      }),
      _useLayoutState2 = (0, _slicedToArray2.default)(_useLayoutState, 2),
      scrollState = _useLayoutState2[0],
      setScrollState = _useLayoutState2[1];
    var refState = (0, _vue.ref)({
      delta: 0,
      x: 0
    });
    var isActive = (0, _vue.ref)(false);
    var onMouseUp = function onMouseUp() {
      isActive.value = false;
    };
    var onMouseDown = function onMouseDown(event) {
      refState.value = {
        delta: event.pageX - scrollState.value.scrollLeft,
        x: 0
      };
      isActive.value = true;
      event.preventDefault();
    };
    var onMouseMove = function onMouseMove(event) {
      var _window;
      // https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/buttons
      var _ref2 = event || ((_window = window) === null || _window === void 0 ? void 0 : _window.event),
        buttons = _ref2.buttons;
      if (!isActive.value || buttons === 0) {
        // If out body mouse up, we can set isActive false when mouse move
        if (isActive.value) {
          isActive.value = false;
        }
        return;
      }
      var left = refState.value.x + event.pageX - refState.value.x - refState.value.delta;
      if (left <= 0) {
        left = 0;
      }
      if (left + scrollBarWidth.value >= bodyWidth.value) {
        left = bodyWidth.value - scrollBarWidth.value;
      }
      emit('scroll', {
        scrollLeft: left / bodyWidth.value * (bodyScrollWidth.value + 2)
      });
      refState.value.x = event.pageX;
    };
    var onContainerScroll = function onContainerScroll() {
      if (!props.scrollBodyRef.value) {
        return;
      }
      var tableOffsetTop = (0, _css.getOffset)(props.scrollBodyRef.value).top;
      var tableBottomOffset = tableOffsetTop + props.scrollBodyRef.value.offsetHeight;
      var currentClientOffset = props.container === window ? document.documentElement.scrollTop + window.innerHeight : (0, _css.getOffset)(props.container).top + props.container.clientHeight;
      if (tableBottomOffset - (0, _getScrollBarSize.default)() <= currentClientOffset || tableOffsetTop >= currentClientOffset - props.offsetScroll) {
        setScrollState(function (state) {
          return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, state), {}, {
            isHiddenScrollBar: true
          });
        });
      } else {
        setScrollState(function (state) {
          return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, state), {}, {
            isHiddenScrollBar: false
          });
        });
      }
    };
    var setScrollLeft = function setScrollLeft(left) {
      setScrollState(function (state) {
        return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, state), {}, {
          scrollLeft: left / bodyScrollWidth.value * bodyWidth.value || 0
        });
      });
    };
    expose({
      setScrollLeft: setScrollLeft
    });
    var onMouseUpListener = null;
    var onMouseMoveListener = null;
    var onResizeListener = null;
    var onScrollListener = null;
    (0, _vue.onMounted)(function () {
      onMouseUpListener = (0, _addEventListener.default)(document.body, 'mouseup', onMouseUp, false);
      onMouseMoveListener = (0, _addEventListener.default)(document.body, 'mousemove', onMouseMove, false);
      onResizeListener = (0, _addEventListener.default)(window, 'resize', onContainerScroll, false);
    });
    (0, _vue.onActivated)(function () {
      (0, _vue.nextTick)(function () {
        onContainerScroll();
      });
    });
    (0, _vue.onMounted)(function () {
      setTimeout(function () {
        (0, _vue.watch)([scrollBarWidth, isActive], function () {
          onContainerScroll();
        }, {
          immediate: true,
          flush: 'post'
        });
      });
    });
    (0, _vue.watch)(function () {
      return props.container;
    }, function () {
      var _onScrollListener;
      (_onScrollListener = onScrollListener) === null || _onScrollListener === void 0 ? void 0 : _onScrollListener.remove();
      onScrollListener = (0, _addEventListener.default)(props.container, 'scroll', onContainerScroll, false);
    }, {
      immediate: true,
      flush: 'post'
    });
    (0, _vue.onBeforeUnmount)(function () {
      var _onMouseUpListener, _onMouseMoveListener, _onScrollListener2, _onResizeListener;
      (_onMouseUpListener = onMouseUpListener) === null || _onMouseUpListener === void 0 ? void 0 : _onMouseUpListener.remove();
      (_onMouseMoveListener = onMouseMoveListener) === null || _onMouseMoveListener === void 0 ? void 0 : _onMouseMoveListener.remove();
      (_onScrollListener2 = onScrollListener) === null || _onScrollListener2 === void 0 ? void 0 : _onScrollListener2.remove();
      (_onResizeListener = onResizeListener) === null || _onResizeListener === void 0 ? void 0 : _onResizeListener.remove();
    });
    (0, _vue.watch)(function () {
      return (0, _objectSpread2.default)({}, scrollState.value);
    }, function (newState, preState) {
      if (newState.isHiddenScrollBar !== (preState === null || preState === void 0 ? void 0 : preState.isHiddenScrollBar) && !newState.isHiddenScrollBar) {
        setScrollState(function (state) {
          var bodyNode = props.scrollBodyRef.value;
          if (!bodyNode) {
            return state;
          }
          return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, state), {}, {
            scrollLeft: bodyNode.scrollLeft / bodyNode.scrollWidth * bodyNode.clientWidth
          });
        });
      }
    }, {
      immediate: true
    });
    var scrollbarSize = (0, _getScrollBarSize.default)();
    return function () {
      if (bodyScrollWidth.value <= bodyWidth.value || !scrollBarWidth.value || scrollState.value.isHiddenScrollBar) {
        return null;
      }
      var prefixCls = tableContext.prefixCls;
      return (0, _vue.createVNode)("div", {
        "style": {
          height: "".concat(scrollbarSize, "px"),
          width: "".concat(bodyWidth.value, "px"),
          bottom: "".concat(props.offsetScroll, "px")
        },
        "class": "".concat(prefixCls, "-sticky-scroll")
      }, [(0, _vue.createVNode)("div", {
        "onMousedown": onMouseDown,
        "ref": scrollBarRef,
        "class": (0, _classNames2.default)("".concat(prefixCls, "-sticky-scroll-bar"), (0, _defineProperty2.default)({}, "".concat(prefixCls, "-sticky-scroll-bar-active"), isActive.value)),
        "style": {
          width: "".concat(scrollBarWidth.value, "px"),
          transform: "translate3d(".concat(scrollState.value.scrollLeft, "px, 0, 0)")
        }
      }, null)]);
    };
  }
});
exports.default = _default;