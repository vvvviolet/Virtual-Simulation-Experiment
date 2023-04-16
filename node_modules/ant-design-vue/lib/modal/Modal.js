"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.modalProps = exports.destroyFns = exports.default = void 0;
var _vue = require("vue");
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _classNames2 = _interopRequireDefault(require("../_util/classNames"));
var _vcDialog = _interopRequireDefault(require("../vc-dialog"));
var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));
var _addEventListener = _interopRequireDefault(require("../vc-util/Dom/addEventListener"));
var _CloseOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/CloseOutlined"));
var _button = _interopRequireDefault(require("../button"));
var _buttonTypes = require("../button/buttonTypes");
var _LocaleReceiver = require("../locale-provider/LocaleReceiver");
var _initDefaultProps = _interopRequireDefault(require("../_util/props-util/initDefaultProps"));
var _styleChecker = require("../_util/styleChecker");
var _useConfigInject2 = _interopRequireDefault(require("../_util/hooks/useConfigInject"));
var _transition = require("../_util/transition");
var _excluded = ["prefixCls", "visible", "wrapClassName", "centered", "getContainer", "closeIcon", "focusTriggerAfterClose"];
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
if ((0, _styleChecker.canUseDocElement)()) {
  (0, _addEventListener.default)(document.documentElement, 'click', getClickPosition, true);
}
var modalProps = function modalProps() {
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
    title: _vueTypes.default.any,
    closable: {
      type: Boolean,
      default: undefined
    },
    closeIcon: _vueTypes.default.any,
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
    footer: _vueTypes.default.any,
    okText: _vueTypes.default.any,
    okType: String,
    cancelText: _vueTypes.default.any,
    icon: _vueTypes.default.any,
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
exports.modalProps = modalProps;
var destroyFns = [];
exports.destroyFns = destroyFns;
var _default2 = (0, _vue.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  name: 'AModal',
  inheritAttrs: false,
  props: (0, _initDefaultProps.default)(modalProps(), {
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
    var _useLocaleReceiver = (0, _LocaleReceiver.useLocaleReceiver)('Modal'),
      _useLocaleReceiver2 = (0, _slicedToArray2.default)(_useLocaleReceiver, 1),
      locale = _useLocaleReceiver2[0];
    var _useConfigInject = (0, _useConfigInject2.default)('modal', props),
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
      return (0, _vue.createVNode)(_vue.Fragment, null, [(0, _vue.createVNode)(_button.default, (0, _objectSpread2.default)({
        "onClick": handleCancel
      }, props.cancelButtonProps), {
        default: function _default() {
          return [cancelText || locale.value.cancelText];
        }
      }), (0, _vue.createVNode)(_button.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, (0, _buttonTypes.convertLegacyProps)(okType)), {}, {
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
        restProps = (0, _objectWithoutProperties2.default)(props, _excluded);
      var wrapClassNameExtended = (0, _classNames2.default)(wrapClassName, (_classNames = {}, (0, _defineProperty2.default)(_classNames, "".concat(prefixCls.value, "-centered"), !!centered), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls.value, "-wrap-rtl"), direction.value === 'rtl'), _classNames));
      return (0, _vue.createVNode)(_vcDialog.default, (0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({}, restProps), attrs), {}, {
        "getContainer": getContainer || getPopupContainer.value,
        "prefixCls": prefixCls.value,
        "wrapClassName": wrapClassNameExtended,
        "visible": visible,
        "mousePosition": mousePosition,
        "onClose": handleCancel,
        "focusTriggerAfterClose": focusTriggerAfterClose,
        "transitionName": (0, _transition.getTransitionName)(rootPrefixCls.value, 'zoom', props.transitionName),
        "maskTransitionName": (0, _transition.getTransitionName)(rootPrefixCls.value, 'fade', props.maskTransitionName)
      }), (0, _objectSpread2.default)((0, _objectSpread2.default)({}, slots), {}, {
        footer: slots.footer || renderFooter,
        closeIcon: function closeIcon() {
          return (0, _vue.createVNode)("span", {
            "class": "".concat(prefixCls.value, "-close-x")
          }, [_closeIcon || (0, _vue.createVNode)(_CloseOutlined.default, {
            "class": "".concat(prefixCls.value, "-close-icon")
          }, null)]);
        }
      }));
    };
  }
});
exports.default = _default2;