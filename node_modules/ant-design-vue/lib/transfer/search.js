"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transferSearchProps = exports.default = void 0;
var _vue = require("vue");
var _initDefaultProps = _interopRequireDefault(require("../_util/props-util/initDefaultProps"));
var _SearchOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/SearchOutlined"));
var _input = _interopRequireDefault(require("../input"));
var transferSearchProps = {
  prefixCls: String,
  placeholder: String,
  value: String,
  handleClear: Function,
  disabled: {
    type: Boolean,
    default: undefined
  },
  onChange: Function
};
exports.transferSearchProps = transferSearchProps;
var _default = (0, _vue.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  name: 'Search',
  inheritAttrs: false,
  props: (0, _initDefaultProps.default)(transferSearchProps, {
    placeholder: ''
  }),
  emits: ['change'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit;
    var handleChange = function handleChange(e) {
      emit('change', e);
      if (e.target.value === '') {
        var _props$handleClear;
        (_props$handleClear = props.handleClear) === null || _props$handleClear === void 0 ? void 0 : _props$handleClear.call(props);
      }
    };
    return function () {
      var placeholder = props.placeholder,
        value = props.value,
        prefixCls = props.prefixCls,
        disabled = props.disabled;
      return (0, _vue.createVNode)(_input.default, {
        "placeholder": placeholder,
        "class": prefixCls,
        "value": value,
        "onChange": handleChange,
        "disabled": disabled,
        "allowClear": true
      }, {
        prefix: function prefix() {
          return (0, _vue.createVNode)(_SearchOutlined.default, null, null);
        }
      });
    };
  }
});
exports.default = _default;