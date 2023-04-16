import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["width", "height", "open", "prefixCls", "placement", "level", "levelMove", "ease", "duration", "getContainer", "onChange", "afterVisibleChange", "showMask", "maskClosable", "maskStyle", "keyboard", "getOpenCount", "scrollLocker", "contentWrapperStyle", "style", "class"];
import { createVNode as _createVNode } from "vue";
import { defineComponent, reactive, onMounted, computed, onUnmounted, nextTick, watch, ref } from 'vue';
import classnames from '../../_util/classNames';
import getScrollBarSize from '../../_util/getScrollBarSize';
import KeyCode from '../../_util/KeyCode';
import omit from '../../_util/omit';
import supportsPassive from '../../_util/supportsPassive';
import { drawerChildProps } from './IDrawerPropTypes';
import { addEventListener, dataToArray, getTouchParentScroll, isNumeric, removeEventListener, transformArguments, transitionEndFun, windowIsUndefined } from './utils';
var currentDrawer = {};
var DrawerChild = defineComponent({
  compatConfig: {
    MODE: 3
  },
  inheritAttrs: false,
  props: drawerChildProps(),
  emits: ['close', 'handleClick', 'change'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit,
      slots = _ref.slots;
    var state = reactive({
      startPos: {
        x: null,
        y: null
      }
    });
    var timeout;
    var contentWrapper = ref();
    var dom = ref();
    var maskDom = ref();
    var handlerDom = ref();
    var contentDom = ref();
    var levelDom = [];
    var drawerId = "drawer_id_".concat(Number((Date.now() + Math.random()).toString().replace('.', Math.round(Math.random() * 9).toString())).toString(16));
    var passive = !windowIsUndefined && supportsPassive ? {
      passive: false
    } : false;
    onMounted(function () {
      nextTick(function () {
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
          nextTick(function () {
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
    watch(function () {
      return props.level;
    }, function () {
      getLevelDom(props);
    }, {
      flush: 'post'
    });
    watch(function () {
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
    onUnmounted(function () {
      var _props$scrollLocker2;
      var open = props.open;
      delete currentDrawer[drawerId];
      if (open) {
        setLevelTransform(false);
        document.body.style.touchAction = '';
      }
      (_props$scrollLocker2 = props.scrollLocker) === null || _props$scrollLocker2 === void 0 ? void 0 : _props$scrollLocker2.unLock();
    });
    watch(function () {
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
      if ((currentTarget === maskDom.value || currentTarget === handlerDom.value || currentTarget === contentDom.value && getTouchParentScroll(currentTarget, e.target, differX, differY)) && e.cancelable) {
        e.preventDefault();
      }
    };
    var transitionEnd = function transitionEnd(e) {
      var dom = e.target;
      removeEventListener(dom, transitionEndFun, transitionEnd);
      dom.style.transition = '';
    };
    var onClose = function onClose(e) {
      emit('close', e);
    };
    var onKeyDown = function onKeyDown(e) {
      if (e.keyCode === KeyCode.ESC) {
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
    var horizontalBoolAndPlacementName = computed(function () {
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
        addEventListener(dom, transitionEndFun, transitionEnd);
        var levelValue = open ? value : 0;
        if (levelMove) {
          var $levelMove = transformArguments(levelMove, {
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
      if (!windowIsUndefined) {
        var right = document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) && window.innerWidth > document.body.offsetWidth ? getScrollBarSize(true) : 0;
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
            addEventListener(item, eventArray[i] || 'touchmove', i ? removeMoveHandler : removeStartHandler, passive);
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
            removeEventListener(item, eventArray[i] || 'touchmove', i ? removeMoveHandler : removeStartHandler, passive);
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
      if (windowIsUndefined) {
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
        dataToArray(level).forEach(function (key) {
          document.querySelectorAll(key).forEach(function (item) {
            levelDom.push(item);
          });
        });
      }
    };
    var onHandleClick = function onHandleClick(e) {
      emit('handleClick', e);
    };
    var canOpen = ref(false);
    watch(dom, function () {
      nextTick(function () {
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
        otherProps = _objectWithoutProperties(props, _excluded);
      // 首次渲染都将是关闭状态。
      var open = $open && canOpen.value;
      var wrapperClassName = classnames(prefixCls, (_classnames = {}, _defineProperty(_classnames, "".concat(prefixCls, "-").concat(placement), true), _defineProperty(_classnames, "".concat(prefixCls, "-open"), open), _defineProperty(_classnames, className, !!className), _defineProperty(_classnames, 'no-mask', !showMask), _classnames));
      var placementName = horizontalBoolAndPlacementName.value.placementName;
      // 百分比与像素动画不同步，第一次打用后全用像素动画。
      // const defaultValue = !this.contentDom || !level ? '100%' : `${value}px`;
      var placementPos = placement === 'left' || placement === 'top' ? '-100%' : '100%';
      var transform = open ? '' : "".concat(placementName, "(").concat(placementPos, ")");
      return _createVNode("div", _objectSpread(_objectSpread({}, omit(otherProps, ['switchScrollingEffect', 'autofocus'])), {}, {
        "tabindex": -1,
        "class": wrapperClassName,
        "style": style,
        "ref": dom,
        "onKeydown": open && keyboard ? onKeyDown : undefined,
        "onTransitionend": onWrapperTransitionEnd
      }), [showMask && _createVNode("div", {
        "class": "".concat(prefixCls, "-mask"),
        "onClick": maskClosable ? onClose : undefined,
        "style": maskStyle,
        "ref": maskDom
      }, null), _createVNode("div", {
        "class": "".concat(prefixCls, "-content-wrapper"),
        "style": _objectSpread({
          transform: transform,
          msTransform: transform,
          width: isNumeric(width) ? "".concat(width, "px") : width,
          height: isNumeric(height) ? "".concat(height, "px") : height
        }, contentWrapperStyle),
        "ref": contentWrapper
      }, [_createVNode("div", {
        "class": "".concat(prefixCls, "-content"),
        "ref": contentDom
      }, [(_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)]), slots.handler ? _createVNode("div", {
        "onClick": onHandleClick,
        "ref": handlerDom
      }, [(_slots$handler = slots.handler) === null || _slots$handler === void 0 ? void 0 : _slots$handler.call(slots)]) : null])]);
    };
  }
});
export default DrawerChild;