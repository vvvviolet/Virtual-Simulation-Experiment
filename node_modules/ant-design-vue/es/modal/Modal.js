import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
var _excluded = ["prefixCls", "visible", "wrapClassName", "centered", "getContainer", "closeIcon", "focusTriggerAfterClose"];
import { resolveDirective as _resolveDirective, createVNode as _createVNode, Fragment as _Fragment } from "vue";
import { defineComponent } from 'vue';
import classNames from '../_util/classNames';
import Dialog from '../vc-dialog';
import PropTypes from '../_util/vue-types';
import addEventListener from '../vc-util/Dom/addEventListener';
import CloseOutlined from "@ant-design/icons-vue/es/icons/CloseOutlined";
import Button from '../button';
import { convertLegacyProps } from '../button/buttonTypes';
import { useLocaleReceiver } from '../locale-provider/LocaleReceiver';
import initDefaultProps from '../_util/props-util/initDefaultProps';
import { canUseDocElement } from '../_util/styleChecker';
import useConfigInject from '../_util/hooks/useConfigInject';
import { getTransitionName } from '../_util/transition';
var mousePosition = null;
// ref: https://github.com/ant-design/ant-design/issues/15795
var getClickPosition = function getClickPosition(e) {
  mousePosition = {
    x: e.pageX,
    y: e.pageY
  };
  // 100ms 内发生过点击事件，则从点击位置动画展示
  // 否则直接 zoom 展示
  // 这样可以兼容非点击方式展开
  setTimeout(function () {
    return mousePosition = null;
  }, 100);
};
// 只有点击事件支持从鼠标位置动画展开
if (canUseDocElement()) {
  addEventListener(document.documentElement, 'click', getClickPosition, true);
}
export var modalProps = function modalProps() {
  return {
    prefixCls: String,
    visible: {
      type: Boolean,
      default: undefined
    },
    confirmLoading: {
      type: Boolean,
      default: undefined
    },
    title: PropTypes.any,
    closable: {
      type: Boolean,
      default: undefined
    },
    closeIcon: PropTypes.any,
    onOk: Function,
    onCancel: Function,
    'onUpdate:visible': Function,
    onChange: Function,
    afterClose: Function,
    centered: {
      type: Boolean,
      default: undefined
    },
    width: [String, Number],
    footer: PropTypes.any,
    okText: PropTypes.any,
    okType: String,
    cancelText: PropTypes.any,
    icon: PropTypes.any,
    maskClosable: {
      type: Boolean,
      default: undefined
    },
    forceRender: {
      type: Boolean,
      default: undefined
    },
    okButtonProps: Object,
    cancelButtonProps: Object,
    destroyOnClose: {
      type: Boolean,
      default: undefined
    },
    wrapClassName: String,
    maskTransitionName: String,
    transitionName: String,
    getContainer: {
      type: [String, Function, Boolean, Object],
      default: undefined
    },
    zIndex: Number,
    bodyStyle: {
      type: Object,
      default: undefined
    },
    maskStyle: {
      type: Object,
      default: undefined
    },
    mask: {
      type: Boolean,
      default: undefined
    },
    keyboard: {
      type: Boolean,
      default: undefined
    },
    wrapProps: Object,
    focusTriggerAfterClose: {
      type: Boolean,
      default: undefined
    },
    modalRender: Function
  };
};
export var destroyFns = [];
export default defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'AModal',
  inheritAttrs: false,
  props: initDefaultProps(modalProps(), {
    width: 520,
    transitionName: 'zoom',
    maskTransitionName: 'fade',
    confirmLoading: false,
    visible: false,
    okType: 'primary'
  }),
  setup: function setup(props, _ref) {
    var emit = _ref.emit,
      slots = _ref.slots,
      attrs = _ref.attrs;
    var _useLocaleReceiver = useLocaleReceiver('Modal'),
      _useLocaleReceiver2 = _slicedToArray(_useLocaleReceiver, 1),
      locale = _useLocaleReceiver2[0];
    var _useConfigInject = useConfigInject('modal', props),
      prefixCls = _useConfigInject.prefixCls,
      rootPrefixCls = _useConfigInject.rootPrefixCls,
      direction = _useConfigInject.direction,
      getPopupContainer = _useConfigInject.getPopupContainer;
    var handleCancel = function handleCancel(e) {
      emit('update:visible', false);
      emit('cancel', e);
      emit('change', false);
    };
    var handleOk = function handleOk(e) {
      emit('ok', e);
    };
    var renderFooter = function renderFooter() {
      var _slots$okText, _slots$cancelText;
      var _props$okText = props.okText,
        okText = _props$okText === void 0 ? (_slots$okText = slots.okText) === null || _slots$okText === void 0 ? void 0 : _slots$okText.call(slots) : _props$okText,
        okType = props.okType,
        _props$cancelText = props.cancelText,
        cancelText = _props$cancelText === void 0 ? (_slots$cancelText = slots.cancelText) === null || _slots$cancelText === void 0 ? void 0 : _slots$cancelText.call(slots) : _props$cancelText,
        confirmLoading = props.confirmLoading;
      return _createVNode(_Fragment, null, [_createVNode(Button, _objectSpread({
        "onClick": handleCancel
      }, props.cancelButtonProps), {
        default: function _default() {
          return [cancelText || locale.value.cancelText];
        }
      }), _createVNode(Button, _objectSpread(_objectSpread({}, convertLegacyProps(okType)), {}, {
        "loading": confirmLoading,
        "onClick": handleOk
      }, props.okButtonProps), {
        default: function _default() {
          return [okText || locale.value.okText];
        }
      })]);
    };
    return function () {
      var _slots$closeIcon, _classNames;
      var customizePrefixCls = props.prefixCls,
        visible = props.visible,
        wrapClassName = props.wrapClassName,
        centered = props.centered,
        getContainer = props.getContainer,
        _props$closeIcon = props.closeIcon,
        _closeIcon = _props$closeIcon === void 0 ? (_slots$closeIcon = slots.closeIcon) === null || _slots$closeIcon === void 0 ? void 0 : _slots$closeIcon.call(slots) : _props$closeIcon,
        _props$focusTriggerAf = props.focusTriggerAfterClose,
        focusTriggerAfterClose = _props$focusTriggerAf === void 0 ? true : _props$focusTriggerAf,
        restProps = _objectWithoutProperties(props, _excluded);
      var wrapClassNameExtended = classNames(wrapClassName, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls.value, "-centered"), !!centered), _defineProperty(_classNames, "".concat(prefixCls.value, "-wrap-rtl"), direction.value === 'rtl'), _classNames));
      return _createVNode(Dialog, _objectSpread(_objectSpread(_objectSpread({}, restProps), attrs), {}, {
        "getContainer": getContainer || getPopupContainer.value,
        "prefixCls": prefixCls.value,
        "wrapClassName": wrapClassNameExtended,
        "visible": visible,
        "mousePosition": mousePosition,
        "onClose": handleCancel,
        "focusTriggerAfterClose": focusTriggerAfterClose,
        "transitionName": getTransitionName(rootPrefixCls.value, 'zoom', props.transitionName),
        "maskTransitionName": getTransitionName(rootPrefixCls.value, 'fade', props.maskTransitionName)
      }), _objectSpread(_objectSpread({}, slots), {}, {
        footer: slots.footer || renderFooter,
        closeIcon: function closeIcon() {
          return _createVNode("span", {
            "class": "".concat(prefixCls.value, "-close-x")
          }, [_closeIcon || _createVNode(CloseOutlined, {
            "class": "".concat(prefixCls.value, "-close-icon")
          }, null)]);
        }
      }));
    };
  }
});