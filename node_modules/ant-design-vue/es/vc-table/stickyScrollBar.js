import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { createVNode as _createVNode } from "vue";
import { nextTick, onActivated, watchEffect, defineComponent, onBeforeUnmount, onMounted, ref, watch } from 'vue';
import addEventListenerWrap from '../vc-util/Dom/addEventListener';
import { getOffset } from '../vc-util/Dom/css';
import classNames from '../_util/classNames';
import getScrollBarSize from '../_util/getScrollBarSize';
import { useInjectTable } from './context/TableContext';
import { useLayoutState } from './hooks/useFrame';
export default defineComponent({
  name: 'StickyScrollBar',
  inheritAttrs: false,
  props: ['offsetScroll', 'container', 'scrollBodyRef', 'scrollBodySizeInfo'],
  emits: ['scroll'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit,
      expose = _ref.expose;
    var tableContext = useInjectTable();
    var bodyScrollWidth = ref(0);
    var bodyWidth = ref(0);
    var scrollBarWidth = ref(0);
    watchEffect(function () {
      bodyScrollWidth.value = props.scrollBodySizeInfo.scrollWidth || 0;
      bodyWidth.value = props.scrollBodySizeInfo.clientWidth || 0;
      scrollBarWidth.value = bodyScrollWidth.value && bodyWidth.value * (bodyWidth.value / bodyScrollWidth.value);
    }, {
      flush: 'post'
    });
    var scrollBarRef = ref();
    var _useLayoutState = useLayoutState({
        scrollLeft: 0,
        isHiddenScrollBar: true
      }),
      _useLayoutState2 = _slicedToArray(_useLayoutState, 2),
      scrollState = _useLayoutState2[0],
      setScrollState = _useLayoutState2[1];
    var refState = ref({
      delta: 0,
      x: 0
    });
    var isActive = ref(false);
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
      var tableOffsetTop = getOffset(props.scrollBodyRef.value).top;
      var tableBottomOffset = tableOffsetTop + props.scrollBodyRef.value.offsetHeight;
      var currentClientOffset = props.container === window ? document.documentElement.scrollTop + window.innerHeight : getOffset(props.container).top + props.container.clientHeight;
      if (tableBottomOffset - getScrollBarSize() <= currentClientOffset || tableOffsetTop >= currentClientOffset - props.offsetScroll) {
        setScrollState(function (state) {
          return _objectSpread(_objectSpread({}, state), {}, {
            isHiddenScrollBar: true
          });
        });
      } else {
        setScrollState(function (state) {
          return _objectSpread(_objectSpread({}, state), {}, {
            isHiddenScrollBar: false
          });
        });
      }
    };
    var setScrollLeft = function setScrollLeft(left) {
      setScrollState(function (state) {
        return _objectSpread(_objectSpread({}, state), {}, {
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
    onMounted(function () {
      onMouseUpListener = addEventListenerWrap(document.body, 'mouseup', onMouseUp, false);
      onMouseMoveListener = addEventListenerWrap(document.body, 'mousemove', onMouseMove, false);
      onResizeListener = addEventListenerWrap(window, 'resize', onContainerScroll, false);
    });
    onActivated(function () {
      nextTick(function () {
        onContainerScroll();
      });
    });
    onMounted(function () {
      setTimeout(function () {
        watch([scrollBarWidth, isActive], function () {
          onContainerScroll();
        }, {
          immediate: true,
          flush: 'post'
        });
      });
    });
    watch(function () {
      return props.container;
    }, function () {
      var _onScrollListener;
      (_onScrollListener = onScrollListener) === null || _onScrollListener === void 0 ? void 0 : _onScrollListener.remove();
      onScrollListener = addEventListenerWrap(props.container, 'scroll', onContainerScroll, false);
    }, {
      immediate: true,
      flush: 'post'
    });
    onBeforeUnmount(function () {
      var _onMouseUpListener, _onMouseMoveListener, _onScrollListener2, _onResizeListener;
      (_onMouseUpListener = onMouseUpListener) === null || _onMouseUpListener === void 0 ? void 0 : _onMouseUpListener.remove();
      (_onMouseMoveListener = onMouseMoveListener) === null || _onMouseMoveListener === void 0 ? void 0 : _onMouseMoveListener.remove();
      (_onScrollListener2 = onScrollListener) === null || _onScrollListener2 === void 0 ? void 0 : _onScrollListener2.remove();
      (_onResizeListener = onResizeListener) === null || _onResizeListener === void 0 ? void 0 : _onResizeListener.remove();
    });
    watch(function () {
      return _objectSpread({}, scrollState.value);
    }, function (newState, preState) {
      if (newState.isHiddenScrollBar !== (preState === null || preState === void 0 ? void 0 : preState.isHiddenScrollBar) && !newState.isHiddenScrollBar) {
        setScrollState(function (state) {
          var bodyNode = props.scrollBodyRef.value;
          if (!bodyNode) {
            return state;
          }
          return _objectSpread(_objectSpread({}, state), {}, {
            scrollLeft: bodyNode.scrollLeft / bodyNode.scrollWidth * bodyNode.clientWidth
          });
        });
      }
    }, {
      immediate: true
    });
    var scrollbarSize = getScrollBarSize();
    return function () {
      if (bodyScrollWidth.value <= bodyWidth.value || !scrollBarWidth.value || scrollState.value.isHiddenScrollBar) {
        return null;
      }
      var prefixCls = tableContext.prefixCls;
      return _createVNode("div", {
        "style": {
          height: "".concat(scrollbarSize, "px"),
          width: "".concat(bodyWidth.value, "px"),
          bottom: "".concat(props.offsetScroll, "px")
        },
        "class": "".concat(prefixCls, "-sticky-scroll")
      }, [_createVNode("div", {
        "onMousedown": onMouseDown,
        "ref": scrollBarRef,
        "class": classNames("".concat(prefixCls, "-sticky-scroll-bar"), _defineProperty({}, "".concat(prefixCls, "-sticky-scroll-bar-active"), isActive.value)),
        "style": {
          width: "".concat(scrollBarWidth.value, "px"),
          transform: "translate3d(".concat(scrollState.value.scrollLeft, "px, 0, 0)")
        }
      }, null)]);
    };
  }
});