"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.radioGroupProps = exports.default = void 0;
var _vue = require("vue");
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _classNames2 = _interopRequireDefault(require("../_util/classNames"));
var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));
var _Radio = _interopRequireDefault(require("./Radio"));
var _useConfigInject2 = _interopRequireDefault(require("../_util/hooks/useConfigInject"));
var _type = require("../_util/type");
var _FormItemContext = require("../form/FormItemContext");
var RadioGroupSizeTypes = (0, _type.tuple)('large', 'default', 'small');
var radioGroupProps = function radioGroupProps() {
  return {
    prefixCls: String,
    value: _vueTypes.default.any,
    size: _vueTypes.default.oneOf(RadioGroupSizeTypes),
    options: {
      type: Array
    },
    disabled: {
      type: Boolean,
      default: undefined
    },
    name: String,
    buttonStyle: {
      type: String,
      default: 'outline'
    },
    id: String,
    optionType: {
      type: String,
      default: 'default'
    },
    onChange: Function,
    'onUpdate:value': Function
  };
};
exports.radioGroupProps = radioGroupProps;
var _default2 = (0, _vue.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  name: 'ARadioGroup',
  props: radioGroupProps(),
  // emits: ['update:value', 'change'],
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
      emit = _ref.emit;
    var formItemContext = (0, _FormItemContext.useInjectFormItemContext)();
    var _useConfigInject = (0, _useConfigInject2.default)('radio', props),
      prefixCls = _useConfigInject.prefixCls,
      direction = _useConfigInject.direction,
      size = _useConfigInject.size;
    var stateValue = (0, _vue.ref)(props.value);
    var updatingValue = (0, _vue.ref)(false);
    (0, _vue.watch)(function () {
      return props.value;
    }, function (val) {
      stateValue.value = val;
      updatingValue.value = false;
    });
    var onRadioChange = function onRadioChange(ev) {
      var lastValue = stateValue.value;
      var value = ev.target.value;
      if (!('value' in props)) {
        stateValue.value = value;
      }
      // nextTick for https://github.com/vueComponent/ant-design-vue/issues/1280
      if (!updatingValue.value && value !== lastValue) {
        updatingValue.value = true;
        emit('update:value', value);
        emit('change', ev);
        formItemContext.onFieldChange();
      }
      (0, _vue.nextTick)(function () {
        updatingValue.value = false;
      });
    };
    (0, _vue.provide)('radioGroupContext', {
      onRadioChange: onRadioChange,
      stateValue: stateValue,
      props: props
    });
    return function () {
      var _classNames;
      var options = props.options,
        optionType = props.optionType,
        buttonStyle = props.buttonStyle,
        _props$id = props.id,
        id = _props$id === void 0 ? formItemContext.id.value : _props$id;
      var groupPrefixCls = "".concat(prefixCls.value, "-group");
      var classString = (0, _classNames2.default)(groupPrefixCls, "".concat(groupPrefixCls, "-").concat(buttonStyle), (_classNames = {}, (0, _defineProperty2.default)(_classNames, "".concat(groupPrefixCls, "-").concat(size.value), size.value), (0, _defineProperty2.default)(_classNames, "".concat(groupPrefixCls, "-rtl"), direction.value === 'rtl'), _classNames));
      var children = null;
      if (options && options.length > 0) {
        var optionsPrefixCls = optionType === 'button' ? "".concat(prefixCls.value, "-button") : prefixCls.value;
        children = options.map(function (option) {
          if (typeof option === 'string' || typeof option === 'number') {
            return (0, _vue.createVNode)(_Radio.default, {
              "key": option,
              "prefixCls": optionsPrefixCls,
              "disabled": props.disabled,
              "value": option,
              "checked": stateValue.value === option
            }, {
              default: function _default() {
                return [option];
              }
            });
          }
          var value = option.value,
            disabled = option.disabled,
            label = option.label;
          return (0, _vue.createVNode)(_Radio.default, {
            "key": "radio-group-value-options-".concat(value),
            "prefixCls": optionsPrefixCls,
            "disabled": disabled || props.disabled,
            "value": value,
            "checked": stateValue.value === value
          }, {
            default: function _default() {
              return [label];
            }
          });
        });
      } else {
        var _slots$default;
        children = (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots);
      }
      return (0, _vue.createVNode)("div", {
        "class": classString,
        "id": id
      }, [children]);
    };
  }
});
exports.default = _default2;