"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = require("vue");
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _button = _interopRequireDefault(require("../button"));
var _classNames = _interopRequireDefault(require("../_util/classNames"));
var _dropdown = _interopRequireDefault(require("./dropdown"));
var _propsUtil = require("../_util/props-util");
var _props = require("./props");
var _EllipsisOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/EllipsisOutlined"));
var _useConfigInject2 = _interopRequireDefault(require("../_util/hooks/useConfigInject"));
var _excluded = ["type", "disabled", "loading", "htmlType", "class", "overlay", "trigger", "align", "visible", "onVisibleChange", "placement", "href", "title", "icon", "mouseEnterDelay", "mouseLeaveDelay", "overlayClassName", "overlayStyle", "destroyPopupOnHide", "onClick", "onUpdate:visible"];
var ButtonGroup = _button.default.Group;
var _default2 = (0, _vue.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  name: 'ADropdownButton',
  inheritAttrs: false,
  __ANT_BUTTON: true,
  props: (0, _propsUtil.initDefaultProps)((0, _props.dropdownButtonProps)(), {
    trigger: 'hover',
    placement: 'bottomRight',
    type: 'default'
  }),
  // emits: ['click', 'visibleChange', 'update:visible'],
  slots: ['icon', 'leftButton', 'rightButton', 'overlay'],
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
      attrs = _ref.attrs,
      emit = _ref.emit;
    var handleVisibleChange = function handleVisibleChange(val) {
      emit('update:visible', val);
      emit('visibleChange', val);
    };
    var _useConfigInject = (0, _useConfigInject2.default)('dropdown-button', props),
      prefixCls = _useConfigInject.prefixCls,
      direction = _useConfigInject.direction,
      getPopupContainer = _useConfigInject.getPopupContainer;
    return function () {
      var _slots$overlay, _slots$icon;
      var _props$attrs = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, props), attrs),
        _props$attrs$type = _props$attrs.type,
        type = _props$attrs$type === void 0 ? 'default' : _props$attrs$type,
        disabled = _props$attrs.disabled,
        loading = _props$attrs.loading,
        htmlType = _props$attrs.htmlType,
        _props$attrs$class = _props$attrs.class,
        className = _props$attrs$class === void 0 ? '' : _props$attrs$class,
        _props$attrs$overlay = _props$attrs.overlay,
        _overlay = _props$attrs$overlay === void 0 ? (_slots$overlay = slots.overlay) === null || _slots$overlay === void 0 ? void 0 : _slots$overlay.call(slots) : _props$attrs$overlay,
        trigger = _props$attrs.trigger,
        align = _props$attrs.align,
        visible = _props$attrs.visible,
        _onVisibleChange = _props$attrs.onVisibleChange,
        _props$attrs$placemen = _props$attrs.placement,
        placement = _props$attrs$placemen === void 0 ? direction.value === 'rtl' ? 'bottomLeft' : 'bottomRight' : _props$attrs$placemen,
        href = _props$attrs.href,
        title = _props$attrs.title,
        _props$attrs$icon = _props$attrs.icon,
        icon = _props$attrs$icon === void 0 ? ((_slots$icon = slots.icon) === null || _slots$icon === void 0 ? void 0 : _slots$icon.call(slots)) || (0, _vue.createVNode)(_EllipsisOutlined.default, null, null) : _props$attrs$icon,
        mouseEnterDelay = _props$attrs.mouseEnterDelay,
        mouseLeaveDelay = _props$attrs.mouseLeaveDelay,
        overlayClassName = _props$attrs.overlayClassName,
        overlayStyle = _props$attrs.overlayStyle,
        destroyPopupOnHide = _props$attrs.destroyPopupOnHide,
        onClick = _props$attrs.onClick,
        _updateVisible = _props$attrs['onUpdate:visible'],
        restProps = (0, _objectWithoutProperties2.default)(_props$attrs, _excluded);
      var dropdownProps = {
        align: align,
        disabled: disabled,
        trigger: disabled ? [] : trigger,
        placement: placement,
        getPopupContainer: getPopupContainer.value,
        onVisibleChange: handleVisibleChange,
        mouseEnterDelay: mouseEnterDelay,
        mouseLeaveDelay: mouseLeaveDelay,
        visible: visible,
        overlayClassName: overlayClassName,
        overlayStyle: overlayStyle,
        destroyPopupOnHide: destroyPopupOnHide
      };
      var leftButton = (0, _vue.createVNode)(_button.default, {
        "type": type,
        "disabled": disabled,
        "loading": loading,
        "onClick": onClick,
        "htmlType": htmlType,
        "href": href,
        "title": title
      }, {
        default: slots.default
      });
      var rightButton = (0, _vue.createVNode)(_button.default, {
        "type": type,
        "icon": icon
      }, null);
      return (0, _vue.createVNode)(ButtonGroup, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, restProps), {}, {
        "class": (0, _classNames.default)(prefixCls.value, className)
      }), {
        default: function _default() {
          return [slots.leftButton ? slots.leftButton({
            button: leftButton
          }) : leftButton, (0, _vue.createVNode)(_dropdown.default, dropdownProps, {
            default: function _default() {
              return [slots.rightButton ? slots.rightButton({
                button: rightButton
              }) : rightButton];
            },
            overlay: function overlay() {
              return _overlay;
            }
          })];
        }
      });
    };
  }
});
exports.default = _default2;