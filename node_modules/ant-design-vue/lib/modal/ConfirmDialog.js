"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = require("vue");
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _classNames3 = _interopRequireDefault(require("../_util/classNames"));
var _Modal = _interopRequireDefault(require("./Modal"));
var _ActionButton = _interopRequireDefault(require("../_util/ActionButton"));
var _LocaleReceiver = require("../locale-provider/LocaleReceiver");
var _transition = require("../_util/transition");
function renderSomeContent(someContent) {
  if (typeof someContent === 'function') {
    return someContent();
  }
  return someContent;
}
var _default2 = (0, _vue.defineComponent)({
  name: 'ConfirmDialog',
  inheritAttrs: false,
  props: ['icon', 'onCancel', 'onOk', 'close', 'closable', 'zIndex', 'afterClose', 'visible', 'keyboard', 'centered', 'getContainer', 'maskStyle', 'okButtonProps', 'cancelButtonProps', 'okType', 'prefixCls', 'okCancel', 'width', 'mask', 'maskClosable', 'okText', 'cancelText', 'autoFocusButton', 'transitionName', 'maskTransitionName', 'type', 'title', 'content', 'direction', 'rootPrefixCls', 'bodyStyle', 'closeIcon', 'modalRender', 'focusTriggerAfterClose', 'wrapClassName'],
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs;
    var _useLocaleReceiver = (0, _LocaleReceiver.useLocaleReceiver)('Modal'),
      _useLocaleReceiver2 = (0, _slicedToArray2.default)(_useLocaleReceiver, 1),
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
      var classString = (0, _classNames3.default)(contentPrefixCls, "".concat(contentPrefixCls, "-").concat(type), "".concat(prefixCls, "-").concat(type), (0, _defineProperty2.default)({}, "".concat(contentPrefixCls, "-rtl"), direction === 'rtl'), attrs.class);
      var cancelButton = okCancel && (0, _vue.createVNode)(_ActionButton.default, {
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
      return (0, _vue.createVNode)(_Modal.default, {
        "prefixCls": prefixCls,
        "class": classString,
        "wrapClassName": (0, _classNames3.default)((0, _defineProperty2.default)({}, "".concat(contentPrefixCls, "-centered"), !!centered), wrapClassName),
        "onCancel": function onCancel(e) {
          return close({
            triggerCancel: true
          }, e);
        },
        "visible": visible,
        "title": "",
        "footer": "",
        "transitionName": (0, _transition.getTransitionName)(rootPrefixCls, 'zoom', props.transitionName),
        "maskTransitionName": (0, _transition.getTransitionName)(rootPrefixCls, 'fade', props.maskTransitionName),
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
          return [(0, _vue.createVNode)("div", {
            "class": "".concat(contentPrefixCls, "-body-wrapper")
          }, [(0, _vue.createVNode)("div", {
            "class": "".concat(contentPrefixCls, "-body")
          }, [renderSomeContent(icon), title === undefined ? null : (0, _vue.createVNode)("span", {
            "class": "".concat(contentPrefixCls, "-title")
          }, [renderSomeContent(title)]), (0, _vue.createVNode)("div", {
            "class": "".concat(contentPrefixCls, "-content")
          }, [renderSomeContent(content)])]), (0, _vue.createVNode)("div", {
            "class": "".concat(contentPrefixCls, "-btns")
          }, [cancelButton, (0, _vue.createVNode)(_ActionButton.default, {
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
exports.default = _default2;