"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = require("vue");
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _contains = _interopRequireDefault(require("../vc-util/Dom/contains"));
var _classNames = _interopRequireDefault(require("../_util/classNames"));
var _KeyCode = _interopRequireDefault(require("../_util/KeyCode"));
var _omit = _interopRequireDefault(require("../_util/omit"));
var _pickAttrs = _interopRequireDefault(require("../_util/pickAttrs"));
var _propsUtil = require("../_util/props-util");
var _Content = _interopRequireDefault(require("./Content"));
var _IDialogPropTypes = _interopRequireDefault(require("./IDialogPropTypes"));
var _Mask = _interopRequireDefault(require("./Mask"));
var _util = require("./util");
var _default = (0, _vue.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  name: 'Dialog',
  inheritAttrs: false,
  props: (0, _propsUtil.initDefaultProps)((0, _objectSpread2.default)((0, _objectSpread2.default)({}, (0, _IDialogPropTypes.default)()), {}, {
    getOpenCount: Function,
    scrollLocker: Object
  }), {
    mask: true,
    visible: false,
    keyboard: true,
    closable: true,
    maskClosable: true,
    destroyOnClose: false,
    prefixCls: 'rc-dialog',
    getOpenCount: function getOpenCount() {
      return null;
    },
    focusTriggerAfterClose: true
  }),
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs,
      slots = _ref.slots;
    var lastOutSideActiveElementRef = (0, _vue.ref)();
    var wrapperRef = (0, _vue.ref)();
    var contentRef = (0, _vue.ref)();
    var animatedVisible = (0, _vue.ref)(props.visible);
    var ariaIdRef = (0, _vue.ref)("vcDialogTitle".concat((0, _util.getUUID)()));
    // ========================= Events =========================
    var onDialogVisibleChanged = function onDialogVisibleChanged(newVisible) {
      if (newVisible) {
        // Try to focus
        if (!(0, _contains.default)(wrapperRef.value, document.activeElement)) {
          var _contentRef$value;
          lastOutSideActiveElementRef.value = document.activeElement;
          (_contentRef$value = contentRef.value) === null || _contentRef$value === void 0 ? void 0 : _contentRef$value.focus();
        }
      } else {
        var preAnimatedVisible = animatedVisible.value;
        // Clean up scroll bar & focus back
        animatedVisible.value = false;
        if (props.mask && lastOutSideActiveElementRef.value && props.focusTriggerAfterClose) {
          try {
            lastOutSideActiveElementRef.value.focus({
              preventScroll: true
            });
          } catch (e) {
            // Do nothing
          }
          lastOutSideActiveElementRef.value = null;
        }
        // Trigger afterClose only when change visible from true to false
        if (preAnimatedVisible) {
          var _props$afterClose;
          (_props$afterClose = props.afterClose) === null || _props$afterClose === void 0 ? void 0 : _props$afterClose.call(props);
        }
      }
    };
    var onInternalClose = function onInternalClose(e) {
      var _props$onClose;
      (_props$onClose = props.onClose) === null || _props$onClose === void 0 ? void 0 : _props$onClose.call(props, e);
    };
    // >>> Content
    var contentClickRef = (0, _vue.ref)(false);
    var contentTimeoutRef = (0, _vue.ref)();
    // We need record content click incase content popup out of dialog
    var onContentMouseDown = function onContentMouseDown() {
      clearTimeout(contentTimeoutRef.value);
      contentClickRef.value = true;
    };
    var onContentMouseUp = function onContentMouseUp() {
      contentTimeoutRef.value = setTimeout(function () {
        contentClickRef.value = false;
      });
    };
    var onWrapperClick = function onWrapperClick(e) {
      if (!props.maskClosable) return null;
      if (contentClickRef.value) {
        contentClickRef.value = false;
      } else if (wrapperRef.value === e.target) {
        onInternalClose(e);
      }
    };
    var onWrapperKeyDown = function onWrapperKeyDown(e) {
      if (props.keyboard && e.keyCode === _KeyCode.default.ESC) {
        e.stopPropagation();
        onInternalClose(e);
        return;
      }
      // keep focus inside dialog
      if (props.visible) {
        if (e.keyCode === _KeyCode.default.TAB) {
          contentRef.value.changeActive(!e.shiftKey);
        }
      }
    };
    (0, _vue.watch)(function () {
      return props.visible;
    }, function () {
      if (props.visible) {
        animatedVisible.value = true;
      }
    }, {
      flush: 'post'
    });
    (0, _vue.onBeforeUnmount)(function () {
      var _props$scrollLocker;
      clearTimeout(contentTimeoutRef.value);
      (_props$scrollLocker = props.scrollLocker) === null || _props$scrollLocker === void 0 ? void 0 : _props$scrollLocker.unLock();
    });
    (0, _vue.watchEffect)(function () {
      var _props$scrollLocker2;
      (_props$scrollLocker2 = props.scrollLocker) === null || _props$scrollLocker2 === void 0 ? void 0 : _props$scrollLocker2.unLock();
      if (animatedVisible.value) {
        var _props$scrollLocker3;
        (_props$scrollLocker3 = props.scrollLocker) === null || _props$scrollLocker3 === void 0 ? void 0 : _props$scrollLocker3.lock();
      }
    });
    return function () {
      var prefixCls = props.prefixCls,
        mask = props.mask,
        visible = props.visible,
        maskTransitionName = props.maskTransitionName,
        maskAnimation = props.maskAnimation,
        zIndex = props.zIndex,
        wrapClassName = props.wrapClassName,
        rootClassName = props.rootClassName,
        wrapStyle = props.wrapStyle,
        closable = props.closable,
        maskProps = props.maskProps,
        maskStyle = props.maskStyle,
        transitionName = props.transitionName,
        animation = props.animation,
        wrapProps = props.wrapProps,
        _props$title = props.title,
        title = _props$title === void 0 ? slots.title : _props$title;
      var style = attrs.style,
        className = attrs.class;
      return (0, _vue.createVNode)("div", (0, _objectSpread2.default)({
        "class": ["".concat(prefixCls, "-root"), rootClassName]
      }, (0, _pickAttrs.default)(props, {
        data: true
      })), [(0, _vue.createVNode)(_Mask.default, {
        "prefixCls": prefixCls,
        "visible": mask && visible,
        "motionName": (0, _util.getMotionName)(prefixCls, maskTransitionName, maskAnimation),
        "style": (0, _objectSpread2.default)({
          zIndex: zIndex
        }, maskStyle),
        "maskProps": maskProps
      }, null), (0, _vue.createVNode)("div", (0, _objectSpread2.default)({
        "tabIndex": -1,
        "onKeydown": onWrapperKeyDown,
        "class": (0, _classNames.default)("".concat(prefixCls, "-wrap"), wrapClassName),
        "ref": wrapperRef,
        "onClick": onWrapperClick,
        "role": "dialog",
        "aria-labelledby": title ? ariaIdRef.value : null,
        "style": (0, _objectSpread2.default)((0, _objectSpread2.default)({
          zIndex: zIndex
        }, wrapStyle), {}, {
          display: !animatedVisible.value ? 'none' : null
        })
      }, wrapProps), [(0, _vue.createVNode)(_Content.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, (0, _omit.default)(props, ['scrollLocker'])), {}, {
        "style": style,
        "class": className,
        "onMousedown": onContentMouseDown,
        "onMouseup": onContentMouseUp,
        "ref": contentRef,
        "closable": closable,
        "ariaId": ariaIdRef.value,
        "prefixCls": prefixCls,
        "visible": visible,
        "onClose": onInternalClose,
        "onVisibleChanged": onDialogVisibleChanged,
        "motionName": (0, _util.getMotionName)(prefixCls, transitionName, animation)
      }), slots)])]);
    };
  }
});
exports.default = _default;