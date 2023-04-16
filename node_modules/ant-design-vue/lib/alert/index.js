"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.alertProps = void 0;
var _vue = require("vue");
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _CloseOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/CloseOutlined"));
var _CheckCircleOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/CheckCircleOutlined"));
var _ExclamationCircleOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/ExclamationCircleOutlined"));
var _InfoCircleOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/InfoCircleOutlined"));
var _CloseCircleOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/CloseCircleOutlined"));
var _CheckCircleFilled = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/CheckCircleFilled"));
var _ExclamationCircleFilled = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/ExclamationCircleFilled"));
var _InfoCircleFilled = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/InfoCircleFilled"));
var _CloseCircleFilled = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/CloseCircleFilled"));
var _classNames2 = _interopRequireDefault(require("../_util/classNames"));
var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));
var _transition = require("../_util/transition");
var _propsUtil = require("../_util/props-util");
var _type = require("../_util/type");
var _vnode = require("../_util/vnode");
var _useConfigInject2 = _interopRequireDefault(require("../_util/hooks/useConfigInject"));
var iconMapFilled = {
  success: _CheckCircleFilled.default,
  info: _InfoCircleFilled.default,
  error: _CloseCircleFilled.default,
  warning: _ExclamationCircleFilled.default
};
var iconMapOutlined = {
  success: _CheckCircleOutlined.default,
  info: _InfoCircleOutlined.default,
  error: _CloseCircleOutlined.default,
  warning: _ExclamationCircleOutlined.default
};
var AlertTypes = (0, _type.tuple)('success', 'info', 'warning', 'error');
var alertProps = function alertProps() {
  return {
    /**
     * Type of Alert styles, options: `success`, `info`, `warning`, `error`
     */
    type: _vueTypes.default.oneOf(AlertTypes),
    /** Whether Alert can be closed */
    closable: {
      type: Boolean,
      default: undefined
    },
    /** Close text to show */
    closeText: _vueTypes.default.any,
    /** Content of Alert */
    message: _vueTypes.default.any,
    /** Additional content of Alert */
    description: _vueTypes.default.any,
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
    icon: _vueTypes.default.any,
    closeIcon: _vueTypes.default.any,
    onClose: Function
  };
};
exports.alertProps = alertProps;
var Alert = (0, _vue.defineComponent)({
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
    var _useConfigInject = (0, _useConfigInject2.default)('alert', props),
      prefixCls = _useConfigInject.prefixCls,
      direction = _useConfigInject.direction;
    var closing = (0, _vue.ref)(false);
    var closed = (0, _vue.ref)(false);
    var alertNode = (0, _vue.ref)();
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
    var motionStyle = (0, _vue.ref)({});
    return function () {
      var _slots$closeIcon, _classNames;
      var banner = props.banner,
        _props$closeIcon = props.closeIcon,
        customCloseIcon = _props$closeIcon === void 0 ? (_slots$closeIcon = slots.closeIcon) === null || _slots$closeIcon === void 0 ? void 0 : _slots$closeIcon.call(slots) : _props$closeIcon;
      var closable = props.closable,
        type = props.type,
        showIcon = props.showIcon;
      var closeText = (0, _propsUtil.getPropsSlot)(slots, props, 'closeText');
      var description = (0, _propsUtil.getPropsSlot)(slots, props, 'description');
      var message = (0, _propsUtil.getPropsSlot)(slots, props, 'message');
      var icon = (0, _propsUtil.getPropsSlot)(slots, props, 'icon');
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
      var alertCls = (0, _classNames2.default)(prefixClsValue, (_classNames = {}, (0, _defineProperty2.default)(_classNames, "".concat(prefixClsValue, "-").concat(type), true), (0, _defineProperty2.default)(_classNames, "".concat(prefixClsValue, "-closing"), closing.value), (0, _defineProperty2.default)(_classNames, "".concat(prefixClsValue, "-with-description"), !!description), (0, _defineProperty2.default)(_classNames, "".concat(prefixClsValue, "-no-icon"), !showIcon), (0, _defineProperty2.default)(_classNames, "".concat(prefixClsValue, "-banner"), !!banner), (0, _defineProperty2.default)(_classNames, "".concat(prefixClsValue, "-closable"), closable), (0, _defineProperty2.default)(_classNames, "".concat(prefixClsValue, "-rtl"), direction.value === 'rtl'), _classNames));
      var closeIcon = closable ? (0, _vue.createVNode)("button", {
        "type": "button",
        "onClick": handleClose,
        "class": "".concat(prefixClsValue, "-close-icon"),
        "tabindex": 0
      }, [closeText ? (0, _vue.createVNode)("span", {
        "class": "".concat(prefixClsValue, "-close-text")
      }, [closeText]) : customCloseIcon === undefined ? (0, _vue.createVNode)(_CloseOutlined.default, null, null) : customCloseIcon]) : null;
      var iconNode = icon && ((0, _propsUtil.isValidElement)(icon) ? (0, _vnode.cloneElement)(icon, {
        class: "".concat(prefixClsValue, "-icon")
      }) : (0, _vue.createVNode)("span", {
        "class": "".concat(prefixClsValue, "-icon")
      }, [icon])) || (0, _vue.createVNode)(IconType, {
        "class": "".concat(prefixClsValue, "-icon")
      }, null);
      var transitionProps = (0, _transition.getTransitionProps)("".concat(prefixClsValue, "-motion"), {
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
      return closed.value ? null : (0, _vue.createVNode)(_transition.Transition, transitionProps, {
        default: function _default() {
          return [(0, _vue.withDirectives)((0, _vue.createVNode)("div", (0, _objectSpread2.default)((0, _objectSpread2.default)({
            "role": "alert"
          }, attrs), {}, {
            "style": [attrs.style, motionStyle.value],
            "class": [attrs.class, alertCls],
            "data-show": !closing.value,
            "ref": alertNode
          }), [showIcon ? iconNode : null, (0, _vue.createVNode)("div", {
            "class": "".concat(prefixClsValue, "-content")
          }, [message ? (0, _vue.createVNode)("div", {
            "class": "".concat(prefixClsValue, "-message")
          }, [message]) : null, description ? (0, _vue.createVNode)("div", {
            "class": "".concat(prefixClsValue, "-description")
          }, [description]) : null]), closeIcon]), [[_vue.vShow, !closing.value]])];
        }
      });
    };
  }
});
var _default2 = (0, _type.withInstall)(Alert);
exports.default = _default2;