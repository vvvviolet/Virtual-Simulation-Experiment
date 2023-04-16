"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.radioProps = exports.default = void 0;
var _vue = require("vue");
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));
var _Checkbox = _interopRequireDefault(require("../vc-checkbox/Checkbox"));
var _classNames2 = _interopRequireDefault(require("../_util/classNames"));
var _useConfigInject2 = _interopRequireDefault(require("../_util/hooks/useConfigInject"));
var _FormItemContext = require("../form/FormItemContext");
var _omit = _interopRequireDefault(require("../_util/omit"));
var _excluded = ["prefixCls", "id"];
var radioProps = function radioProps() {
  return {
    prefixCls: String,
    checked: {
      type: Boolean,
      default: undefined
    },
    disabled: {
      type: Boolean,
      default: undefined
    },
    isGroup: {
      type: Boolean,
      default: undefined
    },
    value: _vueTypes.default.any,
    name: String,
    id: String,
    autofocus: {
      type: Boolean,
      default: undefined
    },
    onChange: Function,
    onFocus: Function,
    onBlur: Function,
    onClick: Function,
    'onUpdate:checked': Function,
    'onUpdate:value': Function
  };
};
exports.radioProps = radioProps;
var _default = (0, _vue.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  name: 'ARadio',
  props: radioProps(),
  // emits: ['update:checked', 'update:value', 'change', 'blur', 'focus'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit,
      expose = _ref.expose,
      slots = _ref.slots;
    var formItemContext = (0, _FormItemContext.useInjectFormItemContext)();
    var vcCheckbox = (0, _vue.ref)();
    var radioGroupContext = (0, _vue.inject)('radioGroupContext', undefined);
    var _useConfigInject = (0, _useConfigInject2.default)('radio', props),
      prefixCls = _useConfigInject.prefixCls,
      direction = _useConfigInject.direction;
    var focus = function focus() {
      vcCheckbox.value.focus();
    };
    var blur = function blur() {
      vcCheckbox.value.blur();
    };
    expose({
      focus: focus,
      blur: blur
    });
    var handleChange = function handleChange(event) {
      var targetChecked = event.target.checked;
      emit('update:checked', targetChecked);
      emit('update:value', targetChecked);
      emit('change', event);
      formItemContext.onFieldChange();
    };
    var onChange = function onChange(e) {
      emit('change', e);
      if (radioGroupContext && radioGroupContext.onRadioChange) {
        radioGroupContext.onRadioChange(e);
      }
    };
    return function () {
      var _classNames;
      var radioGroup = radioGroupContext;
      var customizePrefixCls = props.prefixCls,
        _props$id = props.id,
        id = _props$id === void 0 ? formItemContext.id.value : _props$id,
        restProps = (0, _objectWithoutProperties2.default)(props, _excluded);
      var rProps = (0, _objectSpread2.default)({
        prefixCls: prefixCls.value,
        id: id
      }, (0, _omit.default)(restProps, ['onUpdate:checked', 'onUpdate:value']));
      if (radioGroup) {
        rProps.name = radioGroup.props.name;
        rProps.onChange = onChange;
        rProps.checked = props.value === radioGroup.stateValue.value;
        rProps.disabled = props.disabled || radioGroup.props.disabled;
      } else {
        rProps.onChange = handleChange;
      }
      var wrapperClassString = (0, _classNames2.default)((_classNames = {}, (0, _defineProperty2.default)(_classNames, "".concat(prefixCls.value, "-wrapper"), true), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls.value, "-wrapper-checked"), rProps.checked), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls.value, "-wrapper-disabled"), rProps.disabled), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls.value, "-wrapper-rtl"), direction.value === 'rtl'), _classNames));
      return (0, _vue.createVNode)("label", {
        "class": wrapperClassString
      }, [(0, _vue.createVNode)(_Checkbox.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, rProps), {}, {
        "type": "radio",
        "ref": vcCheckbox
      }), null), slots.default && (0, _vue.createVNode)("span", null, [slots.default()])]);
    };
  }
});
exports.default = _default;