"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.alignProps = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _vue = require("vue");
var _domAlign = require("dom-align");
var _addEventListener = _interopRequireDefault(require("../vc-util/Dom/addEventListener"));
var _vnode = require("../_util/vnode");
var _isVisible = _interopRequireDefault(require("../vc-util/Dom/isVisible"));
var _util = require("./util");
var _useBuffer3 = _interopRequireDefault(require("./hooks/useBuffer"));
var _isEqual = _interopRequireDefault(require("lodash/isEqual"));
var alignProps = {
  align: Object,
  target: [Object, Function],
  onAlign: Function,
  monitorBufferTime: Number,
  monitorWindowResize: Boolean,
  disabled: Boolean
};
exports.alignProps = alignProps;
function getElement(func) {
  if (typeof func !== 'function') return null;
  return func();
}
function getPoint(point) {
  if ((0, _typeof2.default)(point) !== 'object' || !point) return null;
  return point;
}
var _default = (0, _vue.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  name: 'Align',
  props: alignProps,
  emits: ['align'],
  setup: function setup(props, _ref) {
    var expose = _ref.expose,
      slots = _ref.slots;
    var cacheRef = (0, _vue.ref)({});
    var nodeRef = (0, _vue.ref)();
    var _useBuffer = (0, _useBuffer3.default)(function () {
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
          if (element && (0, _isVisible.default)(element)) {
            result = (0, _domAlign.alignElement)(source, element, latestAlign);
          } else if (point) {
            result = (0, _domAlign.alignPoint)(source, point, latestAlign);
          }
          (0, _util.restoreFocus)(activeElement, source);
          if (latestOnAlign && result) {
            latestOnAlign(source, result);
          }
          return true;
        }
        return false;
      }, (0, _vue.computed)(function () {
        return props.monitorBufferTime;
      })),
      _useBuffer2 = (0, _slicedToArray2.default)(_useBuffer, 2),
      _forceAlign = _useBuffer2[0],
      cancelForceAlign = _useBuffer2[1];
    // ===================== Effect =====================
    // Listen for target updated
    var resizeMonitor = (0, _vue.ref)({
      cancel: function cancel() {}
    });
    // Listen for source updated
    var sourceResizeMonitor = (0, _vue.ref)({
      cancel: function cancel() {}
    });
    var goAlign = function goAlign() {
      var target = props.target;
      var element = getElement(target);
      var point = getPoint(target);
      if (nodeRef.value !== sourceResizeMonitor.value.element) {
        sourceResizeMonitor.value.cancel();
        sourceResizeMonitor.value.element = nodeRef.value;
        sourceResizeMonitor.value.cancel = (0, _util.monitorResize)(nodeRef.value, _forceAlign);
      }
      if (cacheRef.value.element !== element || !(0, _util.isSamePoint)(cacheRef.value.point, point) || !(0, _isEqual.default)(cacheRef.value.align, props.align)) {
        _forceAlign();
        // Add resize observer
        if (resizeMonitor.value.element !== element) {
          resizeMonitor.value.cancel();
          resizeMonitor.value.element = element;
          resizeMonitor.value.cancel = (0, _util.monitorResize)(element, _forceAlign);
        }
      }
    };
    (0, _vue.onMounted)(function () {
      (0, _vue.nextTick)(function () {
        goAlign();
      });
    });
    (0, _vue.onUpdated)(function () {
      (0, _vue.nextTick)(function () {
        goAlign();
      });
    });
    // Listen for disabled change
    (0, _vue.watch)(function () {
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
    var winResizeRef = (0, _vue.ref)(null);
    (0, _vue.watch)(function () {
      return props.monitorWindowResize;
    }, function (monitorWindowResize) {
      if (monitorWindowResize) {
        if (!winResizeRef.value) {
          winResizeRef.value = (0, _addEventListener.default)(window, 'resize', _forceAlign);
        }
      } else if (winResizeRef.value) {
        winResizeRef.value.remove();
        winResizeRef.value = null;
      }
    }, {
      flush: 'post'
    });
    (0, _vue.onUnmounted)(function () {
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
        return (0, _vnode.cloneElement)(child[0], {
          ref: nodeRef
        }, true, true);
      }
      return null;
    };
  }
});
exports.default = _default;