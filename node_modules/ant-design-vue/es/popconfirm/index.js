import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
var _excluded = ["placement", "overlayClassName"];
import { resolveDirective as _resolveDirective, createVNode as _createVNode } from "vue";
import { computed, onMounted, ref, toRef, defineComponent } from 'vue';
import Tooltip from '../tooltip';
import abstractTooltipProps from '../tooltip/abstractTooltipProps';
import PropTypes from '../_util/vue-types';
import { initDefaultProps } from '../_util/props-util';
import { convertLegacyProps } from '../button/buttonTypes';
import ExclamationCircleFilled from "@ant-design/icons-vue/es/icons/ExclamationCircleFilled";
import Button from '../button';
import { useLocaleReceiver } from '../locale-provider/LocaleReceiver';
import defaultLocale from '../locale-provider/default';
import { withInstall } from '../_util/type';
import useMergedState from '../_util/hooks/useMergedState';
import devWarning from '../vc-util/devWarning';
import KeyCode from '../_util/KeyCode';
import useConfigInject from '../_util/hooks/useConfigInject';
import classNames from '../_util/classNames';
import { getTransitionName } from '../_util/transition';
import { cloneVNodes } from '../_util/vnode';
import omit from '../_util/omit';
import { tooltipDefaultProps } from '../tooltip/Tooltip';
import ActionButton from '../_util/ActionButton';
export var popconfirmProps = function popconfirmProps() {
  return _objectSpread(_objectSpread({}, abstractTooltipProps()), {}, {
    prefixCls: String,
    content: PropTypes.any,
    title: PropTypes.any,
    okType: {
      type: String,
      default: 'primary'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    okText: PropTypes.any,
    cancelText: PropTypes.any,
    icon: PropTypes.any,
    okButtonProps: {
      type: Object,
      default: undefined
    },
    cancelButtonProps: {
      type: Object,
      default: undefined
    },
    showCancel: {
      type: Boolean,
      default: true
    },
    onConfirm: Function,
    onCancel: Function
  });
};
var Popconfirm = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'APopconfirm',
  props: initDefaultProps(popconfirmProps(), _objectSpread(_objectSpread({}, tooltipDefaultProps()), {}, {
    trigger: 'click',
    transitionName: 'zoom-big',
    placement: 'top',
    mouseEnterDelay: 0.1,
    mouseLeaveDelay: 0.1,
    arrowPointAtCenter: false,
    autoAdjustOverflow: true,
    okType: 'primary',
    disabled: false
  })),
  slots: ['title', 'content', 'okText', 'icon', 'cancelText', 'cancelButton', 'okButton'],
  emits: ['update:visible', 'visibleChange'],
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
      emit = _ref.emit,
      expose = _ref.expose;
    onMounted(function () {
      devWarning(props.defaultVisible === undefined, 'Popconfirm', "'defaultVisible' is deprecated, please use 'v-model:visible'");
    });
    var tooltipRef = ref();
    expose({
      getPopupDomNode: function getPopupDomNode() {
        var _tooltipRef$value, _tooltipRef$value$get;
        return (_tooltipRef$value = tooltipRef.value) === null || _tooltipRef$value === void 0 ? void 0 : (_tooltipRef$value$get = _tooltipRef$value.getPopupDomNode) === null || _tooltipRef$value$get === void 0 ? void 0 : _tooltipRef$value$get.call(_tooltipRef$value);
      }
    });
    var _useMergedState = useMergedState(false, {
        value: toRef(props, 'visible'),
        defaultValue: props.defaultVisible
      }),
      _useMergedState2 = _slicedToArray(_useMergedState, 2),
      visible = _useMergedState2[0],
      setVisible = _useMergedState2[1];
    var settingVisible = function settingVisible(value, e) {
      if (props.visible === undefined) {
        setVisible(value);
      }
      emit('update:visible', value);
      emit('visibleChange', value, e);
    };
    var close = function close(e) {
      settingVisible(false, e);
    };
    var onConfirm = function onConfirm(e) {
      var _props$onConfirm;
      return (_props$onConfirm = props.onConfirm) === null || _props$onConfirm === void 0 ? void 0 : _props$onConfirm.call(props, e);
    };
    var onCancel = function onCancel(e) {
      var _props$onCancel;
      settingVisible(false, e);
      (_props$onCancel = props.onCancel) === null || _props$onCancel === void 0 ? void 0 : _props$onCancel.call(props, e);
    };
    var onKeyDown = function onKeyDown(e) {
      if (e.keyCode === KeyCode.ESC && visible) {
        settingVisible(false, e);
      }
    };
    var onVisibleChange = function onVisibleChange(value) {
      var disabled = props.disabled;
      if (disabled) {
        return;
      }
      settingVisible(value);
    };
    var _useConfigInject = useConfigInject('popconfirm', props),
      prefixClsConfirm = _useConfigInject.prefixCls,
      getPrefixCls = _useConfigInject.getPrefixCls;
    var rootPrefixCls = computed(function () {
      return getPrefixCls();
    });
    var popoverPrefixCls = computed(function () {
      return getPrefixCls('popover');
    });
    var btnPrefixCls = computed(function () {
      return getPrefixCls('btn');
    });
    var _useLocaleReceiver = useLocaleReceiver('Popconfirm', defaultLocale.Popconfirm),
      _useLocaleReceiver2 = _slicedToArray(_useLocaleReceiver, 1),
      popconfirmLocale = _useLocaleReceiver2[0];
    var renderOverlay = function renderOverlay() {
      var _slots$title, _slots$cancel, _slots$okText, _slots$icon;
      var okButtonProps = props.okButtonProps,
        cancelButtonProps = props.cancelButtonProps,
        _props$title = props.title,
        title = _props$title === void 0 ? (_slots$title = slots.title) === null || _slots$title === void 0 ? void 0 : _slots$title.call(slots) : _props$title,
        _props$cancelText = props.cancelText,
        cancelText = _props$cancelText === void 0 ? (_slots$cancel = slots.cancel) === null || _slots$cancel === void 0 ? void 0 : _slots$cancel.call(slots) : _props$cancelText,
        _props$okText = props.okText,
        okText = _props$okText === void 0 ? (_slots$okText = slots.okText) === null || _slots$okText === void 0 ? void 0 : _slots$okText.call(slots) : _props$okText,
        okType = props.okType,
        _props$icon = props.icon,
        icon = _props$icon === void 0 ? (_slots$icon = slots.icon) === null || _slots$icon === void 0 ? void 0 : _slots$icon.call(slots) : _props$icon,
        _props$showCancel = props.showCancel,
        showCancel = _props$showCancel === void 0 ? true : _props$showCancel;
      var cancelButton = slots.cancelButton,
        okButton = slots.okButton;
      var cancelProps = _objectSpread({
        onClick: onCancel,
        size: 'small'
      }, cancelButtonProps);
      var okProps = _objectSpread(_objectSpread({
        onClick: onConfirm
      }, convertLegacyProps(okType)), {}, {
        size: 'small'
      }, okButtonProps);
      return _createVNode("div", {
        "class": "".concat(popoverPrefixCls.value, "-inner-content")
      }, [_createVNode("div", {
        "class": "".concat(popoverPrefixCls.value, "-message")
      }, [icon || _createVNode(ExclamationCircleFilled, null, null), _createVNode("div", {
        "class": "".concat(popoverPrefixCls.value, "-message-title")
      }, [title])]), _createVNode("div", {
        "class": "".concat(popoverPrefixCls.value, "-buttons")
      }, [showCancel ? cancelButton ? cancelButton(cancelProps) : _createVNode(Button, cancelProps, {
        default: function _default() {
          return [cancelText || popconfirmLocale.value.cancelText];
        }
      }) : null, okButton ? okButton(okProps) : _createVNode(ActionButton, {
        "buttonProps": _objectSpread(_objectSpread({
          size: 'small'
        }, convertLegacyProps(okType)), okButtonProps),
        "actionFn": onConfirm,
        "close": close,
        "prefixCls": btnPrefixCls.value,
        "quitOnNullishReturnValue": true,
        "emitEvent": true
      }, {
        default: function _default() {
          return [okText || popconfirmLocale.value.okText];
        }
      })])]);
    };
    return function () {
      var _slots$default;
      var placement = props.placement,
        overlayClassName = props.overlayClassName,
        restProps = _objectWithoutProperties(props, _excluded);
      var otherProps = omit(restProps, ['title', 'content', 'cancelText', 'okText', 'onUpdate:visible', 'onConfirm', 'onCancel']);
      var overlayClassNames = classNames(prefixClsConfirm.value, overlayClassName);
      return _createVNode(Tooltip, _objectSpread(_objectSpread({}, otherProps), {}, {
        "prefixCls": popoverPrefixCls.value,
        "placement": placement,
        "onVisibleChange": onVisibleChange,
        "visible": visible.value,
        "overlayClassName": overlayClassNames,
        "transitionName": getTransitionName(rootPrefixCls.value, 'zoom-big', props.transitionName),
        "ref": tooltipRef
      }), {
        default: function _default() {
          return [cloneVNodes(((_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)) || [], {
            onKeydown: function onKeydown(e) {
              onKeyDown(e);
            }
          }, false)];
        },
        title: renderOverlay
      });
    };
  }
});
export default withInstall(Popconfirm);