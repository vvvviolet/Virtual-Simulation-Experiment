import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { withDirectives as _withDirectives, vShow as _vShow, createVNode as _createVNode } from "vue";
import { defineComponent, ref } from 'vue';
import CloseOutlined from "@ant-design/icons-vue/es/icons/CloseOutlined";
import CheckCircleOutlined from "@ant-design/icons-vue/es/icons/CheckCircleOutlined";
import ExclamationCircleOutlined from "@ant-design/icons-vue/es/icons/ExclamationCircleOutlined";
import InfoCircleOutlined from "@ant-design/icons-vue/es/icons/InfoCircleOutlined";
import CloseCircleOutlined from "@ant-design/icons-vue/es/icons/CloseCircleOutlined";
import CheckCircleFilled from "@ant-design/icons-vue/es/icons/CheckCircleFilled";
import ExclamationCircleFilled from "@ant-design/icons-vue/es/icons/ExclamationCircleFilled";
import InfoCircleFilled from "@ant-design/icons-vue/es/icons/InfoCircleFilled";
import CloseCircleFilled from "@ant-design/icons-vue/es/icons/CloseCircleFilled";
import classNames from '../_util/classNames';
import PropTypes from '../_util/vue-types';
import { getTransitionProps, Transition } from '../_util/transition';
import { isValidElement, getPropsSlot } from '../_util/props-util';
import { tuple, withInstall } from '../_util/type';
import { cloneElement } from '../_util/vnode';
import useConfigInject from '../_util/hooks/useConfigInject';
var iconMapFilled = {
  success: CheckCircleFilled,
  info: InfoCircleFilled,
  error: CloseCircleFilled,
  warning: ExclamationCircleFilled
};
var iconMapOutlined = {
  success: CheckCircleOutlined,
  info: InfoCircleOutlined,
  error: CloseCircleOutlined,
  warning: ExclamationCircleOutlined
};
var AlertTypes = tuple('success', 'info', 'warning', 'error');
export var alertProps = function alertProps() {
  return {
    /**
     * Type of Alert styles, options: `success`, `info`, `warning`, `error`
     */
    type: PropTypes.oneOf(AlertTypes),
    /** Whether Alert can be closed */
    closable: {
      type: Boolean,
      default: undefined
    },
    /** Close text to show */
    closeText: PropTypes.any,
    /** Content of Alert */
    message: PropTypes.any,
    /** Additional content of Alert */
    description: PropTypes.any,
    /** Trigger when animation ending of Alert */
    afterClose: Function,
    /** Whether to show icon */
    showIcon: {
      type: Boolean,
      default: undefined
    },
    prefixCls: String,
    banner: {
      type: Boolean,
      default: undefined
    },
    icon: PropTypes.any,
    closeIcon: PropTypes.any,
    onClose: Function
  };
};
var Alert = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'AAlert',
  inheritAttrs: false,
  props: alertProps(),
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
      emit = _ref.emit,
      attrs = _ref.attrs,
      expose = _ref.expose;
    var _useConfigInject = useConfigInject('alert', props),
      prefixCls = _useConfigInject.prefixCls,
      direction = _useConfigInject.direction;
    var closing = ref(false);
    var closed = ref(false);
    var alertNode = ref();
    var handleClose = function handleClose(e) {
      e.preventDefault();
      var dom = alertNode.value;
      dom.style.height = "".concat(dom.offsetHeight, "px");
      // Magic code
      // 重复一次后才能正确设置 height
      dom.style.height = "".concat(dom.offsetHeight, "px");
      closing.value = true;
      emit('close', e);
    };
    var animationEnd = function animationEnd() {
      var _props$afterClose;
      closing.value = false;
      closed.value = true;
      (_props$afterClose = props.afterClose) === null || _props$afterClose === void 0 ? void 0 : _props$afterClose.call(props);
    };
    expose({
      animationEnd: animationEnd
    });
    var motionStyle = ref({});
    return function () {
      var _slots$closeIcon, _classNames;
      var banner = props.banner,
        _props$closeIcon = props.closeIcon,
        customCloseIcon = _props$closeIcon === void 0 ? (_slots$closeIcon = slots.closeIcon) === null || _slots$closeIcon === void 0 ? void 0 : _slots$closeIcon.call(slots) : _props$closeIcon;
      var closable = props.closable,
        type = props.type,
        showIcon = props.showIcon;
      var closeText = getPropsSlot(slots, props, 'closeText');
      var description = getPropsSlot(slots, props, 'description');
      var message = getPropsSlot(slots, props, 'message');
      var icon = getPropsSlot(slots, props, 'icon');
      // banner模式默认有 Icon
      showIcon = banner && showIcon === undefined ? true : showIcon;
      // banner模式默认为警告
      type = banner && type === undefined ? 'warning' : type || 'info';
      var IconType = (description ? iconMapOutlined : iconMapFilled)[type] || null;
      // closeable when closeText is assigned
      if (closeText) {
        closable = true;
      }
      var prefixClsValue = prefixCls.value;
      var alertCls = classNames(prefixClsValue, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixClsValue, "-").concat(type), true), _defineProperty(_classNames, "".concat(prefixClsValue, "-closing"), closing.value), _defineProperty(_classNames, "".concat(prefixClsValue, "-with-description"), !!description), _defineProperty(_classNames, "".concat(prefixClsValue, "-no-icon"), !showIcon), _defineProperty(_classNames, "".concat(prefixClsValue, "-banner"), !!banner), _defineProperty(_classNames, "".concat(prefixClsValue, "-closable"), closable), _defineProperty(_classNames, "".concat(prefixClsValue, "-rtl"), direction.value === 'rtl'), _classNames));
      var closeIcon = closable ? _createVNode("button", {
        "type": "button",
        "onClick": handleClose,
        "class": "".concat(prefixClsValue, "-close-icon"),
        "tabindex": 0
      }, [closeText ? _createVNode("span", {
        "class": "".concat(prefixClsValue, "-close-text")
      }, [closeText]) : customCloseIcon === undefined ? _createVNode(CloseOutlined, null, null) : customCloseIcon]) : null;
      var iconNode = icon && (isValidElement(icon) ? cloneElement(icon, {
        class: "".concat(prefixClsValue, "-icon")
      }) : _createVNode("span", {
        "class": "".concat(prefixClsValue, "-icon")
      }, [icon])) || _createVNode(IconType, {
        "class": "".concat(prefixClsValue, "-icon")
      }, null);
      var transitionProps = getTransitionProps("".concat(prefixClsValue, "-motion"), {
        appear: false,
        css: true,
        onAfterLeave: animationEnd,
        onBeforeLeave: function onBeforeLeave(node) {
          node.style.maxHeight = "".concat(node.offsetHeight, "px");
        },
        onLeave: function onLeave(node) {
          node.style.maxHeight = '0px';
        }
      });
      return closed.value ? null : _createVNode(Transition, transitionProps, {
        default: function _default() {
          return [_withDirectives(_createVNode("div", _objectSpread(_objectSpread({
            "role": "alert"
          }, attrs), {}, {
            "style": [attrs.style, motionStyle.value],
            "class": [attrs.class, alertCls],
            "data-show": !closing.value,
            "ref": alertNode
          }), [showIcon ? iconNode : null, _createVNode("div", {
            "class": "".concat(prefixClsValue, "-content")
          }, [message ? _createVNode("div", {
            "class": "".concat(prefixClsValue, "-message")
          }, [message]) : null, description ? _createVNode("div", {
            "class": "".concat(prefixClsValue, "-description")
          }, [description]) : null]), closeIcon]), [[_vShow, !closing.value]])];
        }
      });
    };
  }
});
export default withInstall(Alert);