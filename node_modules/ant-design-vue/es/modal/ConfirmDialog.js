import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { createVNode as _createVNode } from "vue";
import classNames from '../_util/classNames';
import Dialog from './Modal';
import ActionButton from '../_util/ActionButton';
import { defineComponent } from 'vue';
import { useLocaleReceiver } from '../locale-provider/LocaleReceiver';
import { getTransitionName } from '../_util/transition';
function renderSomeContent(someContent) {
  if (typeof someContent === 'function') {
    return someContent();
  }
  return someContent;
}
export default defineComponent({
  name: 'ConfirmDialog',
  inheritAttrs: false,
  props: ['icon', 'onCancel', 'onOk', 'close', 'closable', 'zIndex', 'afterClose', 'visible', 'keyboard', 'centered', 'getContainer', 'maskStyle', 'okButtonProps', 'cancelButtonProps', 'okType', 'prefixCls', 'okCancel', 'width', 'mask', 'maskClosable', 'okText', 'cancelText', 'autoFocusButton', 'transitionName', 'maskTransitionName', 'type', 'title', 'content', 'direction', 'rootPrefixCls', 'bodyStyle', 'closeIcon', 'modalRender', 'focusTriggerAfterClose', 'wrapClassName'],
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs;
    var _useLocaleReceiver = useLocaleReceiver('Modal'),
      _useLocaleReceiver2 = _slicedToArray(_useLocaleReceiver, 1),
      locale = _useLocaleReceiver2[0];
    return function () {
      var icon = props.icon,
        onCancel = props.onCancel,
        onOk = props.onOk,
        close = props.close,
        _props$closable = props.closable,
        closable = _props$closable === void 0 ? false : _props$closable,
        zIndex = props.zIndex,
        afterClose = props.afterClose,
        visible = props.visible,
        keyboard = props.keyboard,
        centered = props.centered,
        getContainer = props.getContainer,
        maskStyle = props.maskStyle,
        okButtonProps = props.okButtonProps,
        cancelButtonProps = props.cancelButtonProps,
        _props$okCancel = props.okCancel,
        okCancel = _props$okCancel === void 0 ? true : _props$okCancel,
        _props$width = props.width,
        width = _props$width === void 0 ? 416 : _props$width,
        _props$mask = props.mask,
        mask = _props$mask === void 0 ? true : _props$mask,
        _props$maskClosable = props.maskClosable,
        maskClosable = _props$maskClosable === void 0 ? false : _props$maskClosable,
        type = props.type,
        title = props.title,
        content = props.content,
        direction = props.direction,
        closeIcon = props.closeIcon,
        modalRender = props.modalRender,
        focusTriggerAfterClose = props.focusTriggerAfterClose,
        rootPrefixCls = props.rootPrefixCls,
        bodyStyle = props.bodyStyle,
        wrapClassName = props.wrapClassName;
      var okType = props.okType || 'primary';
      var prefixCls = props.prefixCls || 'ant-modal';
      var contentPrefixCls = "".concat(prefixCls, "-confirm");
      var style = attrs.style || {};
      var okText = renderSomeContent(props.okText) || (okCancel ? locale.value.okText : locale.value.justOkText);
      var cancelText = renderSomeContent(props.cancelText) || locale.value.cancelText;
      var autoFocusButton = props.autoFocusButton === null ? false : props.autoFocusButton || 'ok';
      var classString = classNames(contentPrefixCls, "".concat(contentPrefixCls, "-").concat(type), "".concat(prefixCls, "-").concat(type), _defineProperty({}, "".concat(contentPrefixCls, "-rtl"), direction === 'rtl'), attrs.class);
      var cancelButton = okCancel && _createVNode(ActionButton, {
        "actionFn": onCancel,
        "close": close,
        "autofocus": autoFocusButton === 'cancel',
        "buttonProps": cancelButtonProps,
        "prefixCls": "".concat(rootPrefixCls, "-btn")
      }, {
        default: function _default() {
          return [cancelText];
        }
      });
      return _createVNode(Dialog, {
        "prefixCls": prefixCls,
        "class": classString,
        "wrapClassName": classNames(_defineProperty({}, "".concat(contentPrefixCls, "-centered"), !!centered), wrapClassName),
        "onCancel": function onCancel(e) {
          return close({
            triggerCancel: true
          }, e);
        },
        "visible": visible,
        "title": "",
        "footer": "",
        "transitionName": getTransitionName(rootPrefixCls, 'zoom', props.transitionName),
        "maskTransitionName": getTransitionName(rootPrefixCls, 'fade', props.maskTransitionName),
        "mask": mask,
        "maskClosable": maskClosable,
        "maskStyle": maskStyle,
        "style": style,
        "bodyStyle": bodyStyle,
        "width": width,
        "zIndex": zIndex,
        "afterClose": afterClose,
        "keyboard": keyboard,
        "centered": centered,
        "getContainer": getContainer,
        "closable": closable,
        "closeIcon": closeIcon,
        "modalRender": modalRender,
        "focusTriggerAfterClose": focusTriggerAfterClose
      }, {
        default: function _default() {
          return [_createVNode("div", {
            "class": "".concat(contentPrefixCls, "-body-wrapper")
          }, [_createVNode("div", {
            "class": "".concat(contentPrefixCls, "-body")
          }, [renderSomeContent(icon), title === undefined ? null : _createVNode("span", {
            "class": "".concat(contentPrefixCls, "-title")
          }, [renderSomeContent(title)]), _createVNode("div", {
            "class": "".concat(contentPrefixCls, "-content")
          }, [renderSomeContent(content)])]), _createVNode("div", {
            "class": "".concat(contentPrefixCls, "-btns")
          }, [cancelButton, _createVNode(ActionButton, {
            "type": okType,
            "actionFn": onOk,
            "close": close,
            "autofocus": autoFocusButton === 'ok',
            "buttonProps": okButtonProps,
            "prefixCls": "".concat(rootPrefixCls, "-btn")
          }, {
            default: function _default() {
              return [okText];
            }
          })])])];
        }
      });
    };
  }
});