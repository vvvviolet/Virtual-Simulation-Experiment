"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.textAreaProps = exports.inputDefaultValue = exports.default = void 0;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));
var _omit = _interopRequireDefault(require("../_util/omit"));
var inputDefaultValue = Symbol();
exports.inputDefaultValue = inputDefaultValue;
var inputProps = function inputProps() {
  return {
    id: String,
    prefixCls: String,
    inputPrefixCls: String,
    defaultValue: _vueTypes.default.oneOfType([_vueTypes.default.string, _vueTypes.default.number]),
    value: {
      type: [String, Number, Symbol],
      default: undefined
    },
    placeholder: {
      type: [String, Number]
    },
    autocomplete: String,
    type: {
      type: String,
      default: 'text'
    },
    name: String,
    size: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: undefined
    },
    readonly: {
      type: Boolean,
      default: undefined
    },
    addonBefore: _vueTypes.default.any,
    addonAfter: _vueTypes.default.any,
    prefix: _vueTypes.default.any,
    suffix: _vueTypes.default.any,
    autofocus: {
      type: Boolean,
      default: undefined
    },
    allowClear: {
      type: Boolean,
      default: undefined
    },
    lazy: {
      type: Boolean,
      default: true
    },
    maxlength: Number,
    loading: {
      type: Boolean,
      default: undefined
    },
    bordered: {
      type: Boolean,
      default: undefined
    },
    showCount: {
      type: [Boolean, Object]
    },
    htmlSize: Number,
    onPressEnter: Function,
    onKeydown: Function,
    onKeyup: Function,
    onFocus: Function,
    onBlur: Function,
    onChange: Function,
    onInput: Function,
    'onUpdate:value': Function,
    valueModifiers: Object,
    hidden: Boolean
  };
};
var _default = inputProps;
exports.default = _default;
var textAreaProps = function textAreaProps() {
  return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, (0, _omit.default)(inputProps(), ['prefix', 'addonBefore', 'addonAfter', 'suffix'])), {}, {
    rows: Number,
    autosize: {
      type: [Boolean, Object],
      default: undefined
    },
    autoSize: {
      type: [Boolean, Object],
      default: undefined
    },
    onResize: {
      type: Function
    },
    onCompositionstart: Function,
    onCompositionend: Function,
    valueModifiers: Object
  });
};
exports.textAreaProps = textAreaProps;