"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = require("vue");
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _addEventListener = _interopRequireDefault(require("../../vc-util/Dom/addEventListener"));
var _raf = _interopRequireDefault(require("../../_util/raf"));
var _devWarning = _interopRequireDefault(require("../../vc-util/devWarning"));
var _context = require("../../table/context");
var _supportsPassive = _interopRequireDefault(require("../../_util/supportsPassive"));
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
var _default = (0, _vue.defineComponent)({
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
    (0, _vue.onUnmounted)(function () {
      removeEvents();
    });
    (0, _vue.watchEffect)(function () {
      (0, _devWarning.default)(!isNaN(props.width), 'Table', 'width must be a number when use resizable');
    });
    var _useInjectTableContex = (0, _context.useInjectTableContext)(),
      onResizeColumn = _useInjectTableContex.onResizeColumn;
    var minWidth = (0, _vue.computed)(function () {
      return typeof props.minWidth === 'number' && !isNaN(props.minWidth) ? props.minWidth : defaultMinWidth;
    });
    var maxWidth = (0, _vue.computed)(function () {
      return typeof props.maxWidth === 'number' && !isNaN(props.maxWidth) ? props.maxWidth : Infinity;
    });
    var instance = (0, _vue.getCurrentInstance)();
    var baseWidth = 0;
    var dragging = (0, _vue.ref)(false);
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
      _raf.default.cancel(rafId);
      rafId = (0, _raf.default)(function () {
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
      moveEvent = (0, _addEventListener.default)(document.documentElement, eventsFor.move, handleMove);
      stopEvent = (0, _addEventListener.default)(document.documentElement, eventsFor.stop, handleStop);
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
      var touchEvents = (0, _defineProperty2.default)({}, _supportsPassive.default ? 'onTouchstartPassive' : 'onTouchstart', function (e) {
        return handleTouchDown(e);
      });
      return (0, _vue.createVNode)("div", (0, _objectSpread2.default)((0, _objectSpread2.default)({
        "class": "".concat(prefixCls, "-resize-handle ").concat(dragging.value ? 'dragging' : ''),
        "onMousedown": handleDown
      }, touchEvents), {}, {
        "onClick": handleClick
      }), [(0, _vue.createVNode)("div", {
        "class": "".concat(prefixCls, "-resize-handle-line")
      }, null)]);
    };
  }
});
exports.default = _default;