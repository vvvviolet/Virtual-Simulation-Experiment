import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
var _excluded = ["prefixCls", "name", "id", "type", "disabled", "readonly", "tabindex", "autofocus", "value", "required"];
import { createVNode as _createVNode } from "vue";
import { defineComponent, ref, watch } from 'vue';
import classNames from '../_util/classNames';
import PropTypes from '../_util/vue-types';
import { initDefaultProps } from '../_util/props-util';
export var checkboxProps = {
  prefixCls: String,
  name: String,
  id: String,
  type: String,
  defaultChecked: {
    type: [Boolean, Number],
    default: undefined
  },
  checked: {
    type: [Boolean, Number],
    default: undefined
  },
  disabled: Boolean,
  tabindex: {
    type: [Number, String]
  },
  readonly: Boolean,
  autofocus: Boolean,
  value: PropTypes.any,
  required: Boolean
};
export default defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'Checkbox',
  inheritAttrs: false,
  props: initDefaultProps(checkboxProps, {
    prefixCls: 'rc-checkbox',
    type: 'checkbox',
    defaultChecked: false
  }),
  emits: ['click', 'change'],
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs,
      emit = _ref.emit,
      expose = _ref.expose;
    var checked = ref(props.checked === undefined ? props.defaultChecked : props.checked);
    var inputRef = ref();
    watch(function () {
      return props.checked;
    }, function () {
      checked.value = props.checked;
    });
    expose({
      focus: function focus() {
        var _inputRef$value;
        (_inputRef$value = inputRef.value) === null || _inputRef$value === void 0 ? void 0 : _inputRef$value.focus();
      },
      blur: function blur() {
        var _inputRef$value2;
        (_inputRef$value2 = inputRef.value) === null || _inputRef$value2 === void 0 ? void 0 : _inputRef$value2.blur();
      }
    });
    var eventShiftKey = ref();
    var handleChange = function handleChange(e) {
      if (props.disabled) {
        return;
      }
      if (props.checked === undefined) {
        checked.value = e.target.checked;
      }
      e.shiftKey = eventShiftKey.value;
      var eventObj = {
        target: _objectSpread(_objectSpread({}, props), {}, {
          checked: e.target.checked
        }),
        stopPropagation: function stopPropagation() {
          e.stopPropagation();
        },
        preventDefault: function preventDefault() {
          e.preventDefault();
        },
        nativeEvent: e
      };
      // fix https://github.com/vueComponent/ant-design-vue/issues/3047
      // 受控模式下维持现有状态
      if (props.checked !== undefined) {
        inputRef.value.checked = !!props.checked;
      }
      emit('change', eventObj);
      eventShiftKey.value = false;
    };
    var onClick = function onClick(e) {
      emit('click', e);
      // onChange没能获取到shiftKey，使用onClick hack
      eventShiftKey.value = e.shiftKey;
    };
    return function () {
      var _classNames;
      var prefixCls = props.prefixCls,
        name = props.name,
        id = props.id,
        type = props.type,
        disabled = props.disabled,
        readonly = props.readonly,
        tabindex = props.tabindex,
        autofocus = props.autofocus,
        value = props.value,
        required = props.required,
        others = _objectWithoutProperties(props, _excluded);
      var className = attrs.class,
        onFocus = attrs.onFocus,
        onBlur = attrs.onBlur,
        onKeydown = attrs.onKeydown,
        onKeypress = attrs.onKeypress,
        onKeyup = attrs.onKeyup;
      var othersAndAttrs = _objectSpread(_objectSpread({}, others), attrs);
      var globalProps = Object.keys(othersAndAttrs).reduce(function (prev, key) {
        if (key.substr(0, 5) === 'aria-' || key.substr(0, 5) === 'data-' || key === 'role') {
          prev[key] = othersAndAttrs[key];
        }
        return prev;
      }, {});
      var classString = classNames(prefixCls, className, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-checked"), checked.value), _defineProperty(_classNames, "".concat(prefixCls, "-disabled"), disabled), _classNames));
      var inputProps = _objectSpread(_objectSpread({
        name: name,
        id: id,
        type: type,
        readonly: readonly,
        disabled: disabled,
        tabindex: tabindex,
        class: "".concat(prefixCls, "-input"),
        checked: !!checked.value,
        autofocus: autofocus,
        value: value
      }, globalProps), {}, {
        onChange: handleChange,
        onClick: onClick,
        onFocus: onFocus,
        onBlur: onBlur,
        onKeydown: onKeydown,
        onKeypress: onKeypress,
        onKeyup: onKeyup,
        required: required
      });
      return _createVNode("span", {
        "class": classString
      }, [_createVNode("input", _objectSpread({
        "ref": inputRef
      }, inputProps), null), _createVNode("span", {
        "class": "".concat(prefixCls, "-inner")
      }, null)]);
    };
  }
});