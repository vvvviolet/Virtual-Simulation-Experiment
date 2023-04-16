import { onBeforeUnmount, watch, onMounted } from 'vue';
var SMOOTH_PTG = 14 / 15;
export default function useMobileTouchMove(inVirtual, listRef, callback) {
  var touched = false;
  var touchY = 0;
  var element = null;
  // Smooth scroll
  var interval = null;
  var cleanUpEvents = function cleanUpEvents() {
    if (element) {
      element.removeEventListener('touchmove', onTouchMove);
      element.removeEventListener('touchend', onTouchEnd);
    }
  };
  var onTouchMove = function onTouchMove(e) {
    if (touched) {
      var currentY = Math.ceil(e.touches[0].pageY);
      var offsetY = touchY - currentY;
      touchY = currentY;
      if (callback(offsetY)) {
        e.preventDefault();
      }
      // Smooth interval
      clearInterval(interval);
      interval = setInterval(function () {
        offsetY *= SMOOTH_PTG;
        if (!callback(offsetY, true) || Math.abs(offsetY) <= 0.1) {
          clearInterval(interval);
        }
      }, 16);
    }
  };
  var onTouchEnd = function onTouchEnd() {
    touched = false;
    cleanUpEvents();
  };
  var onTouchStart = function onTouchStart(e) {
    cleanUpEvents();
    if (e.touches.length === 1 && !touched) {
      touched = true;
      touchY = Math.ceil(e.touches[0].pageY);
      element = e.target;
      element.addEventListener('touchmove', onTouchMove, {
        passive: false
      });
      element.addEventListener('touchend', onTouchEnd);
    }
  };
  var noop = function noop() {};
  onMounted(function () {
    document.addEventListener('touchmove', noop, {
      passive: false
    });
    watch(inVirtual, function (val) {
      listRef.value.removeEventListener('touchstart', onTouchStart);
      cleanUpEvents();
      clearInterval(interval);
      if (val) {
        listRef.value.addEventListener('touchstart', onTouchStart, {
          passive: false
        });
      }
    }, {
      immediate: true
    });
  });
  onBeforeUnmount(function () {
    document.removeEventListener('touchmove', noop);
  });
}