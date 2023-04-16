import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
var _excluded = ["size", "visibilityToggle"];
import { resolveDirective as _resolveDirective, createVNode as _createVNode } from "vue";
import classNames from '../_util/classNames';
import { isValidElement } from '../_util/props-util';
import { cloneElement } from '../_util/vnode';
import Input from './Input';
import EyeOutlined from "@ant-design/icons-vue/es/icons/EyeOutlined";
import EyeInvisibleOutlined from "@ant-design/icons-vue/es/icons/EyeInvisibleOutlined";
import inputProps from './inputProps';
import { computed, defineComponent, ref } from 'vue';
import useConfigInject from '../_util/hooks/useConfigInject';
import omit from '../_util/omit';
var ActionMap = {
  click: 'onClick',
  hover: 'onMouseover'
};
var defaultIconRender = function defaultIconRender(visible) {
  return visible ? _createVNode(EyeOutlined, null, null) : _createVNode(EyeInvisibleOutlined, null, null);
};
export default defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'AInputPassword',
  inheritAttrs: false,
  props: _objectSpread(_objectSpread({}, inputProps()), {}, {
    prefixCls: String,
    inputPrefixCls: String,
    action: {
      type: String,
      default: 'click'
    },
    visibilityToggle: {
      type: Boolean,
      default: true
    },
    iconRender: Function
  }),
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
      attrs = _ref.attrs,
      expose = _ref.expose;
    var visible = ref(false);
    var onVisibleChange = function onVisibleChange() {
      var disabled = props.disabled;
      if (disabled) {
        return;
      }
      visible.value = !visible.value;
    };
    var inputRef = ref();
    var focus = function focus() {
      var _inputRef$value;
      (_inputRef$value = inputRef.value) === null || _inputRef$value === void 0 ? void 0 : _inputRef$value.focus();
    };
    var blur = function blur() {
      var _inputRef$value2;
      (_inputRef$value2 = inputRef.value) === null || _inputRef$value2 === void 0 ? void 0 : _inputRef$value2.blur();
    };
    expose({
      focus: focus,
      blur: blur
    });
    var getIcon = function getIcon(prefixCls) {
      var _iconProps;
      var action = props.action,
        _props$iconRender = props.iconRender,
        iconRender = _props$iconRender === void 0 ? slots.iconRender || defaultIconRender : _props$iconRender;
      var iconTrigger = ActionMap[action] || '';
      var icon = iconRender(visible.value);
      var iconProps = (_iconProps = {}, _defineProperty(_iconProps, iconTrigger, onVisibleChange), _defineProperty(_iconProps, "class", "".concat(prefixCls, "-icon")), _defineProperty(_iconProps, "key", 'passwordIcon'), _defineProperty(_iconProps, "onMousedown", function onMousedown(e) {
        // Prevent focused state lost
        // https://github.com/ant-design/ant-design/issues/15173
        e.preventDefault();
      }), _defineProperty(_iconProps, "onMouseup", function onMouseup(e) {
        // Prevent caret position change
        // https://github.com/ant-design/ant-design/issues/23524
        e.preventDefault();
      }), _iconProps);
      return cloneElement(isValidElement(icon) ? icon : _createVNode("span", null, [icon]), iconProps);
    };
    var _useConfigInject = useConfigInject('input-password', props),
      prefixCls = _useConfigInject.prefixCls,
      getPrefixCls = _useConfigInject.getPrefixCls;
    var inputPrefixCls = computed(function () {
      return getPrefixCls('input', props.inputPrefixCls);
    });
    var renderPassword = function renderPassword() {
      var size = props.size,
        visibilityToggle = props.visibilityToggle,
        restProps = _objectWithoutProperties(props, _excluded);
      var suffixIcon = visibilityToggle && getIcon(prefixCls.value);
      var inputClassName = classNames(prefixCls.value, attrs.class, _defineProperty({}, "".concat(prefixCls.value, "-").concat(size), !!size));
      var omittedProps = _objectSpread(_objectSpread(_objectSpread({}, omit(restProps, ['suffix', 'iconRender', 'action'])), attrs), {}, {
        type: visible.value ? 'text' : 'password',
        class: inputClassName,
        prefixCls: inputPrefixCls.value,
        suffix: suffixIcon
      });
      if (size) {
        omittedProps.size = size;
      }
      return _createVNode(Input, _objectSpread({
        "ref": inputRef
      }, omittedProps), slots);
    };
    return function () {
      return renderPassword();
    };
  }
});