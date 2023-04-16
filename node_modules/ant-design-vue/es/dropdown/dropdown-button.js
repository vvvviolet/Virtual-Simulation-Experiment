import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["type", "disabled", "loading", "htmlType", "class", "overlay", "trigger", "align", "visible", "onVisibleChange", "placement", "href", "title", "icon", "mouseEnterDelay", "mouseLeaveDelay", "overlayClassName", "overlayStyle", "destroyPopupOnHide", "onClick", "onUpdate:visible"];
import { resolveDirective as _resolveDirective, createVNode as _createVNode } from "vue";
import { defineComponent } from 'vue';
import Button from '../button';
import classNames from '../_util/classNames';
import Dropdown from './dropdown';
import { initDefaultProps } from '../_util/props-util';
import { dropdownButtonProps } from './props';
import EllipsisOutlined from "@ant-design/icons-vue/es/icons/EllipsisOutlined";
import useConfigInject from '../_util/hooks/useConfigInject';
var ButtonGroup = Button.Group;
export default defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'ADropdownButton',
  inheritAttrs: false,
  __ANT_BUTTON: true,
  props: initDefaultProps(dropdownButtonProps(), {
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
    var _useConfigInject = useConfigInject('dropdown-button', props),
      prefixCls = _useConfigInject.prefixCls,
      direction = _useConfigInject.direction,
      getPopupContainer = _useConfigInject.getPopupContainer;
    return function () {
      var _slots$overlay, _slots$icon;
      var _props$attrs = _objectSpread(_objectSpread({}, props), attrs),
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
        icon = _props$attrs$icon === void 0 ? ((_slots$icon = slots.icon) === null || _slots$icon === void 0 ? void 0 : _slots$icon.call(slots)) || _createVNode(EllipsisOutlined, null, null) : _props$attrs$icon,
        mouseEnterDelay = _props$attrs.mouseEnterDelay,
        mouseLeaveDelay = _props$attrs.mouseLeaveDelay,
        overlayClassName = _props$attrs.overlayClassName,
        overlayStyle = _props$attrs.overlayStyle,
        destroyPopupOnHide = _props$attrs.destroyPopupOnHide,
        onClick = _props$attrs.onClick,
        _updateVisible = _props$attrs['onUpdate:visible'],
        restProps = _objectWithoutProperties(_props$attrs, _excluded);
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
      var leftButton = _createVNode(Button, {
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
      var rightButton = _createVNode(Button, {
        "type": type,
        "icon": icon
      }, null);
      return _createVNode(ButtonGroup, _objectSpread(_objectSpread({}, restProps), {}, {
        "class": classNames(prefixCls.value, className)
      }), {
        default: function _default() {
          return [slots.leftButton ? slots.leftButton({
            button: leftButton
          }) : leftButton, _createVNode(Dropdown, dropdownProps, {
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