import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _typeof from "@babel/runtime/helpers/esm/typeof";
import { createVNode as _createVNode, resolveDirective as _resolveDirective } from "vue";
import PropTypes from './vue-types';
import switchScrollingEffect from './switchScrollingEffect';
import setStyle from './setStyle';
import Portal from './Portal';
import { defineComponent, ref, watch, onMounted, onBeforeUnmount, onUpdated, getCurrentInstance, nextTick } from 'vue';
import canUseDom from './canUseDom';
import ScrollLocker from '../vc-util/Dom/scrollLocker';
import raf from './raf';
var openCount = 0;
var supportDom = canUseDom();
/** @private Test usage only */
export function getOpenCount() {
  return process.env.NODE_ENV === 'test' ? openCount : 0;
}
// https://github.com/ant-design/ant-design/issues/19340
// https://github.com/ant-design/ant-design/issues/19332
var cacheOverflow = {};
var getParent = function getParent(getContainer) {
  if (!supportDom) {
    return null;
  }
  if (getContainer) {
    if (typeof getContainer === 'string') {
      return document.querySelectorAll(getContainer)[0];
    }
    if (typeof getContainer === 'function') {
      return getContainer();
    }
    if (_typeof(getContainer) === 'object' && getContainer instanceof window.HTMLElement) {
      return getContainer;
    }
  }
  return document.body;
};
export default defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'PortalWrapper',
  inheritAttrs: false,
  props: {
    wrapperClassName: String,
    forceRender: {
      type: Boolean,
      default: undefined
    },
    getContainer: PropTypes.any,
    visible: {
      type: Boolean,
      default: undefined
    }
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var container = ref();
    var componentRef = ref();
    var rafId = ref();
    var scrollLocker = new ScrollLocker({
      container: getParent(props.getContainer)
    });
    var removeCurrentContainer = function removeCurrentContainer() {
      var _container$value, _container$value$pare;
      // Portal will remove from `parentNode`.
      // Let's handle this again to avoid refactor issue.
      (_container$value = container.value) === null || _container$value === void 0 ? void 0 : (_container$value$pare = _container$value.parentNode) === null || _container$value$pare === void 0 ? void 0 : _container$value$pare.removeChild(container.value);
    };
    var attachToParent = function attachToParent() {
      var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      if (force || container.value && !container.value.parentNode) {
        var parent = getParent(props.getContainer);
        if (parent) {
          parent.appendChild(container.value);
          return true;
        }
        return false;
      }
      return true;
    };
    // attachToParent();
    var getContainer = function getContainer() {
      if (!supportDom) {
        return null;
      }
      if (!container.value) {
        container.value = document.createElement('div');
        attachToParent(true);
      }
      setWrapperClassName();
      return container.value;
    };
    var setWrapperClassName = function setWrapperClassName() {
      var wrapperClassName = props.wrapperClassName;
      if (container.value && wrapperClassName && wrapperClassName !== container.value.className) {
        container.value.className = wrapperClassName;
      }
    };
    onUpdated(function () {
      setWrapperClassName();
      attachToParent();
    });
    /**
     * Enhance ./switchScrollingEffect
     * 1. Simulate document body scroll bar with
     * 2. Record body has overflow style and recover when all of PortalWrapper invisible
     * 3. Disable body scroll when PortalWrapper has open
     *
     * @memberof PortalWrapper
     */
    var switchScrolling = function switchScrolling() {
      if (openCount === 1 && !Object.keys(cacheOverflow).length) {
        switchScrollingEffect();
        // Must be set after switchScrollingEffect
        cacheOverflow = setStyle({
          overflow: 'hidden',
          overflowX: 'hidden',
          overflowY: 'hidden'
        });
      } else if (!openCount) {
        setStyle(cacheOverflow);
        cacheOverflow = {};
        switchScrollingEffect(true);
      }
    };
    var instance = getCurrentInstance();
    onMounted(function () {
      var init = false;
      watch([function () {
        return props.visible;
      }, function () {
        return props.getContainer;
      }], function (_ref2, _ref3) {
        var _ref4 = _slicedToArray(_ref2, 2),
          visible = _ref4[0],
          getContainer = _ref4[1];
        var _ref5 = _slicedToArray(_ref3, 2),
          prevVisible = _ref5[0],
          prevGetContainer = _ref5[1];
        // Update count
        if (supportDom && getParent(props.getContainer) === document.body) {
          if (visible && !prevVisible) {
            openCount += 1;
          } else if (init) {
            openCount -= 1;
          }
        }
        if (init) {
          // Clean up container if needed
          var getContainerIsFunc = typeof getContainer === 'function' && typeof prevGetContainer === 'function';
          if (getContainerIsFunc ? getContainer.toString() !== prevGetContainer.toString() : getContainer !== prevGetContainer) {
            removeCurrentContainer();
          }
          // updateScrollLocker
          if (visible && visible !== prevVisible && supportDom && getParent(getContainer) !== scrollLocker.getContainer()) {
            scrollLocker.reLock({
              container: getParent(getContainer)
            });
          }
        }
        init = true;
      }, {
        immediate: true,
        flush: 'post'
      });
      nextTick(function () {
        if (!attachToParent()) {
          rafId.value = raf(function () {
            instance.update();
          });
        }
      });
    });
    onBeforeUnmount(function () {
      var visible = props.visible,
        getContainer = props.getContainer;
      if (supportDom && getParent(getContainer) === document.body) {
        // 离开时不会 render， 导到离开时数值不变，改用 func 。。
        openCount = visible && openCount ? openCount - 1 : openCount;
      }
      removeCurrentContainer();
      raf.cancel(rafId.value);
    });
    return function () {
      var forceRender = props.forceRender,
        visible = props.visible;
      var portal = null;
      var childProps = {
        getOpenCount: function getOpenCount() {
          return openCount;
        },
        getContainer: getContainer,
        switchScrollingEffect: switchScrolling,
        scrollLocker: scrollLocker
      };
      if (forceRender || visible || componentRef.value) {
        portal = _createVNode(Portal, {
          "getContainer": getContainer,
          "ref": componentRef
        }, {
          default: function _default() {
            var _slots$default;
            return (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots, childProps);
          }
        });
      }
      return portal;
    };
  }
});