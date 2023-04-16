import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import PropTypes from '../_util/vue-types';
export var abstractCheckboxGroupProps = function abstractCheckboxGroupProps() {
  return {
    name: String,
    prefixCls: String,
    options: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    disabled: Boolean,
    id: String
  };
};
export var checkboxGroupProps = function checkboxGroupProps() {
  return _objectSpread(_objectSpread({}, abstractCheckboxGroupProps()), {}, {
    defaultValue: {
      type: Array
    },
    value: {
      type: Array
    },
    onChange: {
      type: Function
    },
    'onUpdate:value': {
      type: Function
    }
  });
};
export var abstractCheckboxProps = function abstractCheckboxProps() {
  return {
    prefixCls: String,
    defaultChecked: {
      type: Boolean,
      default: undefined
    },
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
    value: PropTypes.any,
    name: String,
    id: String,
    indeterminate: {
      type: Boolean,
      default: undefined
    },
    type: {
      type: String,
      default: 'checkbox'
    },
    autofocus: {
      type: Boolean,
      default: undefined
    },
    onChange: Function,
    'onUpdate:checked': Function,
    onClick: Function,
    skipGroup: {
      type: Boolean,
      default: false
    }
  };
};
export var checkboxProps = function checkboxProps() {
  return _objectSpread(_objectSpread({}, abstractCheckboxProps()), {}, {
    indeterminate: {
      type: Boolean,
      default: false
    }
  });
};
export var CheckboxGroupContextKey = Symbol('CheckboxGroupContext');