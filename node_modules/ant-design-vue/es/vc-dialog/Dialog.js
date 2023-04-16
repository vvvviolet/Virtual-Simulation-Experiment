import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { resolveDirective as _resolveDirective, createVNode as _createVNode } from "vue";
import { defineComponent, onBeforeUnmount, ref, watch, watchEffect } from 'vue';
import contains from '../vc-util/Dom/contains';
import classNames from '../_util/classNames';
import KeyCode from '../_util/KeyCode';
import omit from '../_util/omit';
import pickAttrs from '../_util/pickAttrs';
import { initDefaultProps } from '../_util/props-util';
import Content from './Content';
import dialogPropTypes from './IDialogPropTypes';
import Mask from './Mask';
import { getMotionName, getUUID } from './util';
export default defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'Dialog',
  inheritAttrs: false,
  props: initDefaultProps(_objectSpread(_objectSpread({}, dialogPropTypes()), {}, {
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
    var lastOutSideActiveElementRef = ref();
    var wrapperRef = ref();
    var contentRef = ref();
    var animatedVisible = ref(props.visible);
    var ariaIdRef = ref("vcDialogTitle".concat(getUUID()));
    // ========================= Events =========================
    var onDialogVisibleChanged = function onDialogVisibleChanged(newVisible) {
      if (newVisible) {
        // Try to focus
        if (!contains(wrapperRef.value, document.activeElement)) {
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
    var contentClickRef = ref(false);
    var contentTimeoutRef = ref();
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
      if (props.keyboard && e.keyCode === KeyCode.ESC) {
        e.stopPropagation();
        onInternalClose(e);
        return;
      }
      // keep focus inside dialog
      if (props.visible) {
        if (e.keyCode === KeyCode.TAB) {
          contentRef.value.changeActive(!e.shiftKey);
        }
      }
    };
    watch(function () {
      return props.visible;
    }, function () {
      if (props.visible) {
        animatedVisible.value = true;
      }
    }, {
      flush: 'post'
    });
    onBeforeUnmount(function () {
      var _props$scrollLocker;
      clearTimeout(contentTimeoutRef.value);
      (_props$scrollLocker = props.scrollLocker) === null || _props$scrollLocker === void 0 ? void 0 : _props$scrollLocker.unLock();
    });
    watchEffect(function () {
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
      return _createVNode("div", _objectSpread({
        "class": ["".concat(prefixCls, "-root"), rootClassName]
      }, pickAttrs(props, {
        data: true
      })), [_createVNode(Mask, {
        "prefixCls": prefixCls,
        "visible": mask && visible,
        "motionName": getMotionName(prefixCls, maskTransitionName, maskAnimation),
        "style": _objectSpread({
          zIndex: zIndex
        }, maskStyle),
        "maskProps": maskProps
      }, null), _createVNode("div", _objectSpread({
        "tabIndex": -1,
        "onKeydown": onWrapperKeyDown,
        "class": classNames("".concat(prefixCls, "-wrap"), wrapClassName),
        "ref": wrapperRef,
        "onClick": onWrapperClick,
        "role": "dialog",
        "aria-labelledby": title ? ariaIdRef.value : null,
        "style": _objectSpread(_objectSpread({
          zIndex: zIndex
        }, wrapStyle), {}, {
          display: !animatedVisible.value ? 'none' : null
        })
      }, wrapProps), [_createVNode(Content, _objectSpread(_objectSpread({}, omit(props, ['scrollLocker'])), {}, {
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
        "motionName": getMotionName(prefixCls, transitionName, animation)
      }), slots)])]);
    };
  }
});