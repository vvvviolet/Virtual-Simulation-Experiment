"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useTouchMove;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _vue = require("vue");
var _useState9 = _interopRequireDefault(require("../../../_util/hooks/useState"));
var MIN_SWIPE_DISTANCE = 0.1;
var STOP_SWIPE_DISTANCE = 0.01;
var REFRESH_INTERVAL = 20;
var SPEED_OFF_MULTIPLE = Math.pow(0.995, REFRESH_INTERVAL);
// ================================= Hook =================================
function useTouchMove(domRef, onOffset) {
  var _useState = (0, _useState9.default)(),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    touchPosition = _useState2[0],
    setTouchPosition = _useState2[1];
  var _useState3 = (0, _useState9.default)(0),
    _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
    lastTimestamp = _useState4[0],
    setLastTimestamp = _useState4[1];
  var _useState5 = (0, _useState9.default)(0),
    _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
    lastTimeDiff = _useState6[0],
    setLastTimeDiff = _useState6[1];
  var _useState7 = (0, _useState9.default)(),
    _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
    lastOffset = _useState8[0],
    setLastOffset = _useState8[1];
  var motionInterval = (0, _vue.ref)();
  // ========================= Events =========================
  // >>> Touch events
  function onTouchStart(e) {
    var _e$touches$ = e.touches[0],
      screenX = _e$touches$.screenX,
      screenY = _e$touches$.screenY;
    setTouchPosition({
      x: screenX,
      y: screenY
    });
    clearInterval(motionInterval.value);
  }
  function onTouchMove(e) {
    if (!touchPosition.value) return;
    e.preventDefault();
    var _e$touches$2 = e.touches[0],
      screenX = _e$touches$2.screenX,
      screenY = _e$touches$2.screenY;
    var offsetX = screenX - touchPosition.value.x;
    var offsetY = screenY - touchPosition.value.y;
    onOffset(offsetX, offsetY);
    setTouchPosition({
      x: screenX,
      y: screenY
    });
    var now = Date.now();
    setLastTimeDiff(now - lastTimestamp.value);
    setLastTimestamp(now);
    setLastOffset({
      x: offsetX,
      y: offsetY
    });
  }
  function onTouchEnd() {
    if (!touchPosition.value) return;
    var lastOffsetValue = lastOffset.value;
    setTouchPosition(null);
    setLastOffset(null);
    // Swipe if needed
    if (lastOffsetValue) {
      var distanceX = lastOffsetValue.x / lastTimeDiff.value;
      var distanceY = lastOffsetValue.y / lastTimeDiff.value;
      var absX = Math.abs(distanceX);
      var absY = Math.abs(distanceY);
      // Skip swipe if low distance
      if (Math.max(absX, absY) < MIN_SWIPE_DISTANCE) return;
      var currentX = distanceX;
      var currentY = distanceY;
      motionInterval.value = setInterval(function () {
        if (Math.abs(currentX) < STOP_SWIPE_DISTANCE && Math.abs(currentY) < STOP_SWIPE_DISTANCE) {
          clearInterval(motionInterval.value);
          return;
        }
        currentX *= SPEED_OFF_MULTIPLE;
        currentY *= SPEED_OFF_MULTIPLE;
        onOffset(currentX * REFRESH_INTERVAL, currentY * REFRESH_INTERVAL);
      }, REFRESH_INTERVAL);
    }
  }
  // >>> Wheel event
  var lastWheelDirectionRef = (0, _vue.ref)();
  function onWheel(e) {
    var deltaX = e.deltaX,
      deltaY = e.deltaY;
    // Convert both to x & y since wheel only happened on PC
    var mixed = 0;
    var absX = Math.abs(deltaX);
    var absY = Math.abs(deltaY);
    if (absX === absY) {
      mixed = lastWheelDirectionRef.value === 'x' ? deltaX : deltaY;
    } else if (absX > absY) {
      mixed = deltaX;
      lastWheelDirectionRef.value = 'x';
    } else {
      mixed = deltaY;
      lastWheelDirectionRef.value = 'y';
    }
    if (onOffset(-mixed, -mixed)) {
      e.preventDefault();
    }
  }
  // ========================= Effect =========================
  var touchEventsRef = (0, _vue.ref)({
    onTouchStart: onTouchStart,
    onTouchMove: onTouchMove,
    onTouchEnd: onTouchEnd,
    onWheel: onWheel
  });
  function onProxyTouchStart(e) {
    touchEventsRef.value.onTouchStart(e);
  }
  function onProxyTouchMove(e) {
    touchEventsRef.value.onTouchMove(e);
  }
  function onProxyTouchEnd(e) {
    touchEventsRef.value.onTouchEnd(e);
  }
  function onProxyWheel(e) {
    touchEventsRef.value.onWheel(e);
  }
  (0, _vue.onMounted)(function () {
    var _domRef$value, _domRef$value2;
    document.addEventListener('touchmove', onProxyTouchMove, {
      passive: false
    });
    document.addEventListener('touchend', onProxyTouchEnd, {
      passive: false
    });
    // No need to clean up since element removed
    (_domRef$value = domRef.value) === null || _domRef$value === void 0 ? void 0 : _domRef$value.addEventListener('touchstart', onProxyTouchStart, {
      passive: false
    });
    (_domRef$value2 = domRef.value) === null || _domRef$value2 === void 0 ? void 0 : _domRef$value2.addEventListener('wheel', onProxyWheel, {
      passive: false
    });
  });
  (0, _vue.onBeforeUnmount)(function () {
    document.removeEventListener('touchmove', onProxyTouchMove);
    document.removeEventListener('touchend', onProxyTouchEnd);
  });
}