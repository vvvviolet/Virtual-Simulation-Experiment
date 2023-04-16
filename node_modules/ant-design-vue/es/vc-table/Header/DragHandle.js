import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { createVNode as _createVNode } from "vue";
import addEventListenerWrap from '../../vc-util/Dom/addEventListener';
import raf from '../../_util/raf';
import { defineComponent, onUnmounted, computed, ref, watchEffect, getCurrentInstance } from 'vue';
import devWarning from '../../vc-util/devWarning';
import { useInjectTableContext } from '../../table/context';
import supportsPassive from '../../_util/supportsPassive';
var events = {
  mouse: {
    start: 'mousedown',
    move: 'mousemove',
    stop: 'mouseup'
  },
  touch: {
    start: 'touchstart',
    move: 'touchmove',
    stop: 'touchend'
  }
};
var defaultMinWidth = 50;
export default defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'DragHandle',
  props: {
    prefixCls: String,
    width: {
      type: Number,
      required: true
    },
    minWidth: {
      type: Number,
      default: defaultMinWidth
    },
    maxWidth: {
      type: Number,
      default: Infinity
    },
    column: {
      type: Object,
      default: undefined
    }
  },
  setup: function setup(props) {
    var startX = 0;
    var moveEvent = {
      remove: function remove() {}
    };
    var stopEvent = {
      remove: function remove() {}
    };
    var removeEvents = function removeEvents() {
      moveEvent.remove();
      stopEvent.remove();
    };
    onUnmounted(function () {
      removeEvents();
    });
    watchEffect(function () {
      devWarning(!isNaN(props.width), 'Table', 'width must be a number when use resizable');
    });
    var _useInjectTableContex = useInjectTableContext(),
      onResizeColumn = _useInjectTableContex.onResizeColumn;
    var minWidth = computed(function () {
      return typeof props.minWidth === 'number' && !isNaN(props.minWidth) ? props.minWidth : defaultMinWidth;
    });
    var maxWidth = computed(function () {
      return typeof props.maxWidth === 'number' && !isNaN(props.maxWidth) ? props.maxWidth : Infinity;
    });
    var instance = getCurrentInstance();
    var baseWidth = 0;
    var dragging = ref(false);
    var rafId;
    var updateWidth = function updateWidth(e) {
      var pageX = 0;
      if (e.touches) {
        if (e.touches.length) {
          // touchmove
          pageX = e.touches[0].pageX;
        } else {
          // touchend
          pageX = e.changedTouches[0].pageX;
        }
      } else {
        pageX = e.pageX;
      }
      var tmpDeltaX = startX - pageX;
      var w = Math.max(baseWidth - tmpDeltaX, minWidth.value);
      w = Math.min(w, maxWidth.value);
      raf.cancel(rafId);
      rafId = raf(function () {
        onResizeColumn(w, props.column.__originColumn__);
      });
    };
    var handleMove = function handleMove(e) {
      updateWidth(e);
    };
    var handleStop = function handleStop(e) {
      dragging.value = false;
      updateWidth(e);
      removeEvents();
    };
    var handleStart = function handleStart(e, eventsFor) {
      dragging.value = true;
      removeEvents();
      baseWidth = instance.vnode.el.parentNode.getBoundingClientRect().width;
      if (e instanceof MouseEvent && e.which !== 1) {
        return;
      }
      if (e.stopPropagation) e.stopPropagation();
      startX = e.touches ? e.touches[0].pageX : e.pageX;
      moveEvent = addEventListenerWrap(document.documentElement, eventsFor.move, handleMove);
      stopEvent = addEventListenerWrap(document.documentElement, eventsFor.stop, handleStop);
    };
    var handleDown = function handleDown(e) {
      e.stopPropagation();
      e.preventDefault();
      handleStart(e, events.mouse);
    };
    var handleTouchDown = function handleTouchDown(e) {
      e.stopPropagation();
      e.preventDefault();
      handleStart(e, events.touch);
    };
    var handleClick = function handleClick(e) {
      e.stopPropagation();
      e.preventDefault();
    };
    return function () {
      var prefixCls = props.prefixCls;
      var touchEvents = _defineProperty({}, supportsPassive ? 'onTouchstartPassive' : 'onTouchstart', function (e) {
        return handleTouchDown(e);
      });
      return _createVNode("div", _objectSpread(_objectSpread({
        "class": "".concat(prefixCls, "-resize-handle ").concat(dragging.value ? 'dragging' : ''),
        "onMousedown": handleDown
      }, touchEvents), {}, {
        "onClick": handleClick
      }), [_createVNode("div", {
        "class": "".concat(prefixCls, "-resize-handle-line")
      }, null)]);
    };
  }
});