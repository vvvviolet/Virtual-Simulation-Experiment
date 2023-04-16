"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = require("vue");
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _classNames = _interopRequireDefault(require("../../_util/classNames"));
var _getScrollBarSize = _interopRequireDefault(require("../../_util/getScrollBarSize"));
var _KeyCode = _interopRequireDefault(require("../../_util/KeyCode"));
var _omit = _interopRequireDefault(require("../../_util/omit"));
var _supportsPassive = _interopRequireDefault(require("../../_util/supportsPassive"));
var _IDrawerPropTypes = require("./IDrawerPropTypes");
var _utils = require("./utils");
var _excluded = ["width", "height", "open", "prefixCls", "placement", "level", "levelMove", "ease", "duration", "getContainer", "onChange", "afterVisibleChange", "showMask", "maskClosable", "maskStyle", "keyboard", "getOpenCount", "scrollLocker", "contentWrapperStyle", "style", "class"];
var currentDrawer = {};
var DrawerChild = (0, _vue.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  inheritAttrs: false,
  props: (0, _IDrawerPropTypes.drawerChildProps)(),
  emits: ['close', 'handleClick', 'change'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit,
      slots = _ref.slots;
    var state = (0, _vue.reactive)({
      startPos: {
        x: null,
        y: null
      }
    });
    var timeout;
    var contentWrapper = (0, _vue.ref)();
    var dom = (0, _vue.ref)();
    var maskDom = (0, _vue.ref)();
    var handlerDom = (0, _vue.ref)();
    var contentDom = (0, _vue.ref)();
    var levelDom = [];
    var drawerId = "drawer_id_".concat(Number((Date.now() + Math.random()).toString().replace('.', Math.round(Math.random() * 9).toString())).toString(16));
    var passive = !_utils.windowIsUndefined && _supportsPassive.default ? {
      passive: false
    } : false;
    (0, _vue.onMounted)(function () {
      (0, _vue.nextTick)(function () {
        var open = props.open,
          getContainer = props.getContainer,
          showMask = props.showMask,
          autofocus = props.autofocus;
        var container = getContainer === null || getContainer === void 0 ? void 0 : getContainer();
        getLevelDom(props);
        if (open) {
          if (container && container.parentNode === document.body) {
            currentDrawer[drawerId] = open;
          }
          // 默认打开状态时推出 level;
          openLevelTransition();
          (0, _vue.nextTick)(function () {
            if (autofocus) {
              domFocus();
            }
          });
          if (showMask) {
            var _props$scrollLocker;
            (_props$scrollLocker = props.scrollLocker) === null || _props$scrollLocker === void 0 ? void 0 : _props$scrollLocker.lock();
          }
        }
      });
    });
    (0, _vue.watch)(function () {
      return props.level;
    }, function () {
      getLevelDom(props);
    }, {
      flush: 'post'
    });
    (0, _vue.watch)(function () {
      return props.open;
    }, function () {
      var open = props.open,
        getContainer = props.getContainer,
        scrollLocker = props.scrollLocker,
        showMask = props.showMask,
        autofocus = props.autofocus;
      var container = getContainer === null || getContainer === void 0 ? void 0 : getContainer();
      if (container && container.parentNode === document.body) {
        currentDrawer[drawerId] = !!open;
      }
      openLevelTransition();
      if (open) {
        if (autofocus) {
          domFocus();
        }
        if (showMask) {
          scrollLocker === null || scrollLocker === void 0 ? void 0 : scrollLocker.lock();
        }
      } else {
        scrollLocker === null || scrollLocker === void 0 ? void 0 : scrollLocker.unLock();
      }
    }, {
      flush: 'post'
    });
    (0, _vue.onUnmounted)(function () {
      var _props$scrollLocker2;
      var open = props.open;
      delete currentDrawer[drawerId];
      if (open) {
        setLevelTransform(false);
        document.body.style.touchAction = '';
      }
      (_props$scrollLocker2 = props.scrollLocker) === null || _props$scrollLocker2 === void 0 ? void 0 : _props$scrollLocker2.unLock();
    });
    (0, _vue.watch)(function () {
      return props.placement;
    }, function (val) {
      if (val) {
        // test 的 bug, 有动画过场，删除 dom
        contentDom.value = null;
      }
    });
    var domFocus = function domFocus() {
      var _dom$value, _dom$value$focus;
      (_dom$value = dom.value) === null || _dom$value === void 0 ? void 0 : (_dom$value$focus = _dom$value.focus) === null || _dom$value$focus === void 0 ? void 0 : _dom$value$focus.call(_dom$value);
    };
    var removeStartHandler = function removeStartHandler(e) {
      if (e.touches.length > 1) {
        return;
      }
      state.startPos = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY
      };
    };
    var removeMoveHandler = function removeMoveHandler(e) {
      if (e.changedTouches.length > 1) {
        return;
      }
      var currentTarget = e.currentTarget;
      var differX = e.changedTouches[0].clientX - state.startPos.x;
      var differY = e.changedTouches[0].clientY - state.startPos.y;
      if ((currentTarget === maskDom.value || currentTarget === handlerDom.value || currentTarget === contentDom.value && (0, _utils.getTouchParentScroll)(currentTarget, e.target, differX, differY)) && e.cancelable) {
        e.preventDefault();
      }
    };
    var transitionEnd = function transitionEnd(e) {
      var dom = e.target;
      (0, _utils.removeEventListener)(dom, _utils.transitionEndFun, transitionEnd);
      dom.style.transition = '';
    };
    var onClose = function onClose(e) {
      emit('close', e);
    };
    var onKeyDown = function onKeyDown(e) {
      if (e.keyCode === _KeyCode.default.ESC) {
        e.stopPropagation();
        onClose(e);
      }
    };
    var onWrapperTransitionEnd = function onWrapperTransitionEnd(e) {
      var open = props.open,
        afterVisibleChange = props.afterVisibleChange;
      if (e.target === contentWrapper.value && e.propertyName.match(/transform$/)) {
        dom.value.style.transition = '';
        if (!open && getCurrentDrawerSome()) {
          document.body.style.overflowX = '';
          if (maskDom.value) {
            maskDom.value.style.left = '';
            maskDom.value.style.width = '';
          }
        }
        if (afterVisibleChange) {
          afterVisibleChange(!!open);
        }
      }
    };
    var horizontalBoolAndPlacementName = (0, _vue.computed)(function () {
      var placement = props.placement;
      var isHorizontal = placement === 'left' || placement === 'right';
      var placementName = "translate".concat(isHorizontal ? 'X' : 'Y');
      return {
        isHorizontal: isHorizontal,
        placementName: placementName
      };
    });
    var openLevelTransition = function openLevelTransition() {
      var open = props.open,
        width = props.width,
        height = props.height;
      var _horizontalBoolAndPla = horizontalBoolAndPlacementName.value,
        isHorizontal = _horizontalBoolAndPla.isHorizontal,
        placementName = _horizontalBoolAndPla.placementName;
      var contentValue = contentDom.value ? contentDom.value.getBoundingClientRect()[isHorizontal ? 'width' : 'height'] : 0;
      var value = (isHorizontal ? width : height) || contentValue;
      setLevelAndScrolling(open, placementName, value);
    };
    var setLevelTransform = function setLevelTransform(open, placementName, value, right) {
      var placement = props.placement,
        levelMove = props.levelMove,
        duration = props.duration,
        ease = props.ease,
        showMask = props.showMask;
      // router 切换时可能会导至页面失去滚动条，所以需要时时获取。
      levelDom.forEach(function (dom) {
        dom.style.transition = "transform ".concat(duration, " ").concat(ease);
        (0, _utils.addEventListener)(dom, _utils.transitionEndFun, transitionEnd);
        var levelValue = open ? value : 0;
        if (levelMove) {
          var $levelMove = (0, _utils.transformArguments)(levelMove, {
            target: dom,
            open: open
          });
          levelValue = open ? $levelMove[0] : $levelMove[1] || 0;
        }
        var $value = typeof levelValue === 'number' ? "".concat(levelValue, "px") : levelValue;
        var placementPos = placement === 'left' || placement === 'top' ? $value : "-".concat($value);
        placementPos = showMask && placement === 'right' && right ? "calc(".concat(placementPos, " + ").concat(right, "px)") : placementPos;
        dom.style.transform = levelValue ? "".concat(placementName, "(").concat(placementPos, ")") : '';
      });
    };
    var setLevelAndScrolling = function setLevelAndScrolling(open, placementName, value) {
      if (!_utils.windowIsUndefined) {
        var right = document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) && window.innerWidth > document.body.offsetWidth ? (0, _getScrollBarSize.default)(true) : 0;
        setLevelTransform(open, placementName, value, right);
        toggleScrollingToDrawerAndBody(right);
      }
      emit('change', open);
    };
    var toggleScrollingToDrawerAndBody = function toggleScrollingToDrawerAndBody(right) {
      var getContainer = props.getContainer,
        showMask = props.showMask,
        open = props.open;
      var container = getContainer === null || getContainer === void 0 ? void 0 : getContainer();
      // 处理 body 滚动
      if (container && container.parentNode === document.body && showMask) {
        var eventArray = ['touchstart'];
        var domArray = [document.body, maskDom.value, handlerDom.value, contentDom.value];
        if (open && document.body.style.overflow !== 'hidden') {
          if (right) {
            addScrollingEffect(right);
          }
          document.body.style.touchAction = 'none';
          // 手机禁滚
          domArray.forEach(function (item, i) {
            if (!item) {
              return;
            }
            (0, _utils.addEventListener)(item, eventArray[i] || 'touchmove', i ? removeMoveHandler : removeStartHandler, passive);
          });
        } else if (getCurrentDrawerSome()) {
          document.body.style.touchAction = '';
          if (right) {
            remScrollingEffect(right);
          }
          // 恢复事件
          domArray.forEach(function (item, i) {
            if (!item) {
              return;
            }
            (0, _utils.removeEventListener)(item, eventArray[i] || 'touchmove', i ? removeMoveHandler : removeStartHandler, passive);
          });
        }
      }
    };
    var addScrollingEffect = function addScrollingEffect(right) {
      var placement = props.placement,
        duration = props.duration,
        ease = props.ease;
      var widthTransition = "width ".concat(duration, " ").concat(ease);
      var transformTransition = "transform ".concat(duration, " ").concat(ease);
      dom.value.style.transition = 'none';
      switch (placement) {
        case 'right':
          dom.value.style.transform = "translateX(-".concat(right, "px)");
          break;
        case 'top':
        case 'bottom':
          dom.value.style.width = "calc(100% - ".concat(right, "px)");
          dom.value.style.transform = 'translateZ(0)';
          break;
        default:
          break;
      }
      clearTimeout(timeout);
      timeout = setTimeout(function () {
        if (dom.value) {
          dom.value.style.transition = "".concat(transformTransition, ",").concat(widthTransition);
          dom.value.style.width = '';
          dom.value.style.transform = '';
        }
      });
    };
    var remScrollingEffect = function remScrollingEffect(right) {
      var placement = props.placement,
        duration = props.duration,
        ease = props.ease;
      dom.value.style.transition = 'none';
      var heightTransition;
      var widthTransition = "width ".concat(duration, " ").concat(ease);
      var transformTransition = "transform ".concat(duration, " ").concat(ease);
      switch (placement) {
        case 'left':
          {
            dom.value.style.width = '100%';
            widthTransition = "width 0s ".concat(ease, " ").concat(duration);
            break;
          }
        case 'right':
          {
            dom.value.style.transform = "translateX(".concat(right, "px)");
            dom.value.style.width = '100%';
            widthTransition = "width 0s ".concat(ease, " ").concat(duration);
            if (maskDom.value) {
              maskDom.value.style.left = "-".concat(right, "px");
              maskDom.value.style.width = "calc(100% + ".concat(right, "px)");
            }
            break;
          }
        case 'top':
        case 'bottom':
          {
            dom.value.style.width = "calc(100% + ".concat(right, "px)");
            dom.value.style.height = '100%';
            dom.value.style.transform = 'translateZ(0)';
            heightTransition = "height 0s ".concat(ease, " ").concat(duration);
            break;
          }
        default:
          break;
      }
      clearTimeout(timeout);
      timeout = setTimeout(function () {
        if (dom.value) {
          dom.value.style.transition = "".concat(transformTransition, ",").concat(heightTransition ? "".concat(heightTransition, ",") : '').concat(widthTransition);
          dom.value.style.transform = '';
          dom.value.style.width = '';
          dom.value.style.height = '';
        }
      });
    };
    var getCurrentDrawerSome = function getCurrentDrawerSome() {
      return !Object.keys(currentDrawer).some(function (key) {
        return currentDrawer[key];
      });
    };
    var getLevelDom = function getLevelDom(_ref2) {
      var level = _ref2.level,
        getContainer = _ref2.getContainer;
      if (_utils.windowIsUndefined) {
        return;
      }
      var container = getContainer === null || getContainer === void 0 ? void 0 : getContainer();
      var parent = container ? container.parentNode : null;
      levelDom = [];
      if (level === 'all') {
        var children = parent ? Array.prototype.slice.call(parent.children) : [];
        children.forEach(function (child) {
          if (child.nodeName !== 'SCRIPT' && child.nodeName !== 'STYLE' && child.nodeName !== 'LINK' && child !== container) {
            levelDom.push(child);
          }
        });
      } else if (level) {
        (0, _utils.dataToArray)(level).forEach(function (key) {
          document.querySelectorAll(key).forEach(function (item) {
            levelDom.push(item);
          });
        });
      }
    };
    var onHandleClick = function onHandleClick(e) {
      emit('handleClick', e);
    };
    var canOpen = (0, _vue.ref)(false);
    (0, _vue.watch)(dom, function () {
      (0, _vue.nextTick)(function () {
        canOpen.value = true;
      });
    });
    return function () {
      var _classnames, _slots$default, _slots$handler;
      var width = props.width,
        height = props.height,
        $open = props.open,
        prefixCls = props.prefixCls,
        placement = props.placement,
        level = props.level,
        levelMove = props.levelMove,
        ease = props.ease,
        duration = props.duration,
        getContainer = props.getContainer,
        onChange = props.onChange,
        afterVisibleChange = props.afterVisibleChange,
        showMask = props.showMask,
        maskClosable = props.maskClosable,
        maskStyle = props.maskStyle,
        keyboard = props.keyboard,
        getOpenCount = props.getOpenCount,
        scrollLocker = props.scrollLocker,
        contentWrapperStyle = props.contentWrapperStyle,
        style = props.style,
        className = props.class,
        otherProps = (0, _objectWithoutProperties2.default)(props, _excluded);
      // 首次渲染都将是关闭状态。
      var open = $open && canOpen.value;
      var wrapperClassName = (0, _classNames.default)(prefixCls, (_classnames = {}, (0, _defineProperty2.default)(_classnames, "".concat(prefixCls, "-").concat(placement), true), (0, _defineProperty2.default)(_classnames, "".concat(prefixCls, "-open"), open), (0, _defineProperty2.default)(_classnames, className, !!className), (0, _defineProperty2.default)(_classnames, 'no-mask', !showMask), _classnames));
      var placementName = horizontalBoolAndPlacementName.value.placementName;
      // 百分比与像素动画不同步，第一次打用后全用像素动画。
      // const defaultValue = !this.contentDom || !level ? '100%' : `${value}px`;
      var placementPos = placement === 'left' || placement === 'top' ? '-100%' : '100%';
      var transform = open ? '' : "".concat(placementName, "(").concat(placementPos, ")");
      return (0, _vue.createVNode)("div", (0, _objectSpread2.default)((0, _objectSpread2.default)({}, (0, _omit.default)(otherProps, ['switchScrollingEffect', 'autofocus'])), {}, {
        "tabindex": -1,
        "class": wrapperClassName,
        "style": style,
        "ref": dom,
        "onKeydown": open && keyboard ? onKeyDown : undefined,
        "onTransitionend": onWrapperTransitionEnd
      }), [showMask && (0, _vue.createVNode)("div", {
        "class": "".concat(prefixCls, "-mask"),
        "onClick": maskClosable ? onClose : undefined,
        "style": maskStyle,
        "ref": maskDom
      }, null), (0, _vue.createVNode)("div", {
        "class": "".concat(prefixCls, "-content-wrapper"),
        "style": (0, _objectSpread2.default)({
          transform: transform,
          msTransform: transform,
          width: (0, _utils.isNumeric)(width) ? "".concat(width, "px") : width,
          height: (0, _utils.isNumeric)(height) ? "".concat(height, "px") : height
        }, contentWrapperStyle),
        "ref": contentWrapper
      }, [(0, _vue.createVNode)("div", {
        "class": "".concat(prefixCls, "-content"),
        "ref": contentDom
      }, [(_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)]), slots.handler ? (0, _vue.createVNode)("div", {
        "onClick": onHandleClick,
        "ref": handlerDom
      }, [(_slots$handler = slots.handler) === null || _slots$handler === void 0 ? void 0 : _slots$handler.call(slots)]) : null])]);
    };
  }
});
var _default = DrawerChild;
exports.default = _default;