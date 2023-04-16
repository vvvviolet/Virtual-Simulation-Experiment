"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkboxProps = exports.checkboxGroupProps = exports.abstractCheckboxProps = exports.abstractCheckboxGroupProps = exports.CheckboxGroupContextKey = void 0;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));
var abstractCheckboxGroupProps = function abstractCheckboxGroupProps() {
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
exports.abstractCheckboxGroupProps = abstractCheckboxGroupProps;
var checkboxGroupProps = function checkboxGroupProps() {
  return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, abstractCheckboxGroupProps()), {}, {
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
exports.checkboxGroupProps = checkboxGroupProps;
var abstractCheckboxProps = function abstractCheckboxProps() {
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
    value: _vueTypes.default.any,
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
exports.abstractCheckboxProps = abstractCheckboxProps;
var checkboxProps = function checkboxProps() {
  return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, abstractCheckboxProps()), {}, {
    indeterminate: {
      type: Boolean,
      default: false
    }
  });
};
exports.checkboxProps = checkboxProps;
var CheckboxGroupContextKey = Symbol('CheckboxGroupContext');
exports.CheckboxGroupContextKey = CheckboxGroupContextKey;