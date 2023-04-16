import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import PropTypes from '../_util/vue-types';
import omit from '../_util/omit';
export var inputDefaultValue = Symbol();
var inputProps = function inputProps() {
  return {
    id: String,
    prefixCls: String,
    inputPrefixCls: String,
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
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
    addonBefore: PropTypes.any,
    addonAfter: PropTypes.any,
    prefix: PropTypes.any,
    suffix: PropTypes.any,
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
export default inputProps;
var textAreaProps = function textAreaProps() {
  return _objectSpread(_objectSpread({}, omit(inputProps(), ['prefix', 'addonBefore', 'addonAfter', 'suffix'])), {}, {
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
export { textAreaProps };