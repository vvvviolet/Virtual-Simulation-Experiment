"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.checkboxProps = void 0;
var _vue = require("vue");
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _classNames2 = _interopRequireDefault(require("../_util/classNames"));
var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));
var _propsUtil = require("../_util/props-util");
var _excluded = ["prefixCls", "name", "id", "type", "disabled", "readonly", "tabindex", "autofocus", "value", "required"];
var checkboxProps = {
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
  value: _vueTypes.default.any,
  required: Boolean
};
exports.checkboxProps = checkboxProps;
var _default = (0, _vue.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  name: 'Checkbox',
  inheritAttrs: false,
  props: (0, _propsUtil.initDefaultProps)(checkboxProps, {
    prefixCls: 'rc-checkbox',
    type: 'checkbox',
    defaultChecked: false
  }),
  emits: ['click', 'change'],
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs,
      emit = _ref.emit,
      expose = _ref.expose;
    var checked = (0, _vue.ref)(props.checked === undefined ? props.defaultChecked : props.checked);
    var inputRef = (0, _vue.ref)();
    (0, _vue.watch)(function () {
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
    var eventShiftKey = (0, _vue.ref)();
    var handleChange = function handleChange(e) {
      if (props.disabled) {
        return;
      }
      if (props.checked === undefined) {
        checked.value = e.target.checked;
      }
      e.shiftKey = eventShiftKey.value;
      var eventObj = {
        target: (0, _objectSpread2.default)((0, _objectSpread2.default)({}, props), {}, {
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
        others = (0, _objectWithoutProperties2.default)(props, _excluded);
      var className = attrs.class,
        onFocus = attrs.onFocus,
        onBlur = attrs.onBlur,
        onKeydown = attrs.onKeydown,
        onKeypress = attrs.onKeypress,
        onKeyup = attrs.onKeyup;
      var othersAndAttrs = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, others), attrs);
      var globalProps = Object.keys(othersAndAttrs).reduce(function (prev, key) {
        if (key.substr(0, 5) === 'aria-' || key.substr(0, 5) === 'data-' || key === 'role') {
          prev[key] = othersAndAttrs[key];
        }
        return prev;
      }, {});
      var classString = (0, _classNames2.default)(prefixCls, className, (_classNames = {}, (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-checked"), checked.value), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-disabled"), disabled), _classNames));
      var inputProps = (0, _objectSpread2.default)((0, _objectSpread2.default)({
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
      return (0, _vue.createVNode)("span", {
        "class": classString
      }, [(0, _vue.createVNode)("input", (0, _objectSpread2.default)({
        "ref": inputRef
      }, inputProps), null), (0, _vue.createVNode)("span", {
        "class": "".concat(prefixCls, "-inner")
      }, null)]);
    };
  }
});
exports.default = _default;