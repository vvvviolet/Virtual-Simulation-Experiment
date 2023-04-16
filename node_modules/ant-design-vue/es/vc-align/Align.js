import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _typeof from "@babel/runtime/helpers/esm/typeof";
import { nextTick, defineComponent, ref, computed, onMounted, onUpdated, watch, onUnmounted } from 'vue';
import { alignElement, alignPoint } from 'dom-align';
import addEventListener from '../vc-util/Dom/addEventListener';
import { cloneElement } from '../_util/vnode';
import isVisible from '../vc-util/Dom/isVisible';
import { isSamePoint, restoreFocus, monitorResize } from './util';
import useBuffer from './hooks/useBuffer';
import isEqual from 'lodash-es/isEqual';
export var alignProps = {
  align: Object,
  target: [Object, Function],
  onAlign: Function,
  monitorBufferTime: Number,
  monitorWindowResize: Boolean,
  disabled: Boolean
};
function getElement(func) {
  if (typeof func !== 'function') return null;
  return func();
}
function getPoint(point) {
  if (_typeof(point) !== 'object' || !point) return null;
  return point;
}
export default defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'Align',
  props: alignProps,
  emits: ['align'],
  setup: function setup(props, _ref) {
    var expose = _ref.expose,
      slots = _ref.slots;
    var cacheRef = ref({});
    var nodeRef = ref();
    var _useBuffer = useBuffer(function () {
        var latestDisabled = props.disabled,
          latestTarget = props.target,
          latestAlign = props.align,
          latestOnAlign = props.onAlign;
        if (!latestDisabled && latestTarget && nodeRef.value) {
          var source = nodeRef.value;
          var result;
          var element = getElement(latestTarget);
          var point = getPoint(latestTarget);
          cacheRef.value.element = element;
          cacheRef.value.point = point;
          cacheRef.value.align = latestAlign;
          // IE lose focus after element realign
          // We should record activeElement and restore later
          var _document = document,
            activeElement = _document.activeElement;
          // We only align when element is visible
          if (element && isVisible(element)) {
            result = alignElement(source, element, latestAlign);
          } else if (point) {
            result = alignPoint(source, point, latestAlign);
          }
          restoreFocus(activeElement, source);
          if (latestOnAlign && result) {
            latestOnAlign(source, result);
          }
          return true;
        }
        return false;
      }, computed(function () {
        return props.monitorBufferTime;
      })),
      _useBuffer2 = _slicedToArray(_useBuffer, 2),
      _forceAlign = _useBuffer2[0],
      cancelForceAlign = _useBuffer2[1];
    // ===================== Effect =====================
    // Listen for target updated
    var resizeMonitor = ref({
      cancel: function cancel() {}
    });
    // Listen for source updated
    var sourceResizeMonitor = ref({
      cancel: function cancel() {}
    });
    var goAlign = function goAlign() {
      var target = props.target;
      var element = getElement(target);
      var point = getPoint(target);
      if (nodeRef.value !== sourceResizeMonitor.value.element) {
        sourceResizeMonitor.value.cancel();
        sourceResizeMonitor.value.element = nodeRef.value;
        sourceResizeMonitor.value.cancel = monitorResize(nodeRef.value, _forceAlign);
      }
      if (cacheRef.value.element !== element || !isSamePoint(cacheRef.value.point, point) || !isEqual(cacheRef.value.align, props.align)) {
        _forceAlign();
        // Add resize observer
        if (resizeMonitor.value.element !== element) {
          resizeMonitor.value.cancel();
          resizeMonitor.value.element = element;
          resizeMonitor.value.cancel = monitorResize(element, _forceAlign);
        }
      }
    };
    onMounted(function () {
      nextTick(function () {
        goAlign();
      });
    });
    onUpdated(function () {
      nextTick(function () {
        goAlign();
      });
    });
    // Listen for disabled change
    watch(function () {
      return props.disabled;
    }, function (disabled) {
      if (!disabled) {
        _forceAlign();
      } else {
        cancelForceAlign();
      }
    }, {
      immediate: true,
      flush: 'post'
    });
    // Listen for window resize
    var winResizeRef = ref(null);
    watch(function () {
      return props.monitorWindowResize;
    }, function (monitorWindowResize) {
      if (monitorWindowResize) {
        if (!winResizeRef.value) {
          winResizeRef.value = addEventListener(window, 'resize', _forceAlign);
        }
      } else if (winResizeRef.value) {
        winResizeRef.value.remove();
        winResizeRef.value = null;
      }
    }, {
      flush: 'post'
    });
    onUnmounted(function () {
      resizeMonitor.value.cancel();
      sourceResizeMonitor.value.cancel();
      if (winResizeRef.value) winResizeRef.value.remove();
      cancelForceAlign();
    });
    expose({
      forceAlign: function forceAlign() {
        return _forceAlign(true);
      }
    });
    return function () {
      var child = slots === null || slots === void 0 ? void 0 : slots.default();
      if (child) {
        return cloneElement(child[0], {
          ref: nodeRef
        }, true, true);
      }
      return null;
    };
  }
});