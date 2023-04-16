"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getOpenCount = getOpenCount;
var _vue = require("vue");
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _vueTypes = _interopRequireDefault(require("./vue-types"));
var _switchScrollingEffect = _interopRequireDefault(require("./switchScrollingEffect"));
var _setStyle = _interopRequireDefault(require("./setStyle"));
var _Portal = _interopRequireDefault(require("./Portal"));
var _canUseDom = _interopRequireDefault(require("./canUseDom"));
var _scrollLocker = _interopRequireDefault(require("../vc-util/Dom/scrollLocker"));
var _raf = _interopRequireDefault(require("./raf"));
var openCount = 0;
var supportDom = (0, _canUseDom.default)();
/** @private Test usage only */
function getOpenCount() {
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
    if ((0, _typeof2.default)(getContainer) === 'object' && getContainer instanceof window.HTMLElement) {
      return getContainer;
    }
  }
  return document.body;
};
var _default2 = (0, _vue.defineComponent)({
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
    getContainer: _vueTypes.default.any,
    visible: {
      type: Boolean,
      default: undefined
    }
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var container = (0, _vue.ref)();
    var componentRef = (0, _vue.ref)();
    var rafId = (0, _vue.ref)();
    var scrollLocker = new _scrollLocker.default({
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
    (0, _vue.onUpdated)(function () {
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
        (0, _switchScrollingEffect.default)();
        // Must be set after switchScrollingEffect
        cacheOverflow = (0, _setStyle.default)({
          overflow: 'hidden',
          overflowX: 'hidden',
          overflowY: 'hidden'
        });
      } else if (!openCount) {
        (0, _setStyle.default)(cacheOverflow);
        cacheOverflow = {};
        (0, _switchScrollingEffect.default)(true);
      }
    };
    var instance = (0, _vue.getCurrentInstance)();
    (0, _vue.onMounted)(function () {
      var init = false;
      (0, _vue.watch)([function () {
        return props.visible;
      }, function () {
        return props.getContainer;
      }], function (_ref2, _ref3) {
        var _ref4 = (0, _slicedToArray2.default)(_ref2, 2),
          visible = _ref4[0],
          getContainer = _ref4[1];
        var _ref5 = (0, _slicedToArray2.default)(_ref3, 2),
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
      (0, _vue.nextTick)(function () {
        if (!attachToParent()) {
          rafId.value = (0, _raf.default)(function () {
            instance.update();
          });
        }
      });
    });
    (0, _vue.onBeforeUnmount)(function () {
      var visible = props.visible,
        getContainer = props.getContainer;
      if (supportDom && getParent(getContainer) === document.body) {
        // 离开时不会 render， 导到离开时数值不变，改用 func 。。
        openCount = visible && openCount ? openCount - 1 : openCount;
      }
      removeCurrentContainer();
      _raf.default.cancel(rafId.value);
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
        portal = (0, _vue.createVNode)(_Portal.default, {
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
exports.default = _default2;