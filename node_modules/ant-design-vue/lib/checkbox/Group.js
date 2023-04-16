"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = require("vue");
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _createForOfIteratorHelper2 = _interopRequireDefault(require("@babel/runtime/helpers/createForOfIteratorHelper"));
var _Checkbox = _interopRequireDefault(require("./Checkbox"));
var _FormItemContext = require("../form/FormItemContext");
var _useConfigInject2 = _interopRequireDefault(require("../_util/hooks/useConfigInject"));
var _interface = require("./interface");
var _default2 = (0, _vue.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  name: 'ACheckboxGroup',
  props: (0, _interface.checkboxGroupProps)(),
  // emits: ['change', 'update:value'],
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
      emit = _ref.emit,
      expose = _ref.expose;
    var formItemContext = (0, _FormItemContext.useInjectFormItemContext)();
    var _useConfigInject = (0, _useConfigInject2.default)('checkbox', props),
      prefixCls = _useConfigInject.prefixCls,
      direction = _useConfigInject.direction;
    var mergedValue = (0, _vue.ref)((props.value === undefined ? props.defaultValue : props.value) || []);
    (0, _vue.watch)(function () {
      return props.value;
    }, function () {
      mergedValue.value = props.value || [];
    });
    var options = (0, _vue.computed)(function () {
      return props.options.map(function (option) {
        if (typeof option === 'string' || typeof option === 'number') {
          return {
            label: option,
            value: option
          };
        }
        return option;
      });
    });
    var triggerUpdate = (0, _vue.ref)(Symbol());
    var registeredValuesMap = (0, _vue.ref)(new Map());
    var cancelValue = function cancelValue(id) {
      registeredValuesMap.value.delete(id);
      triggerUpdate.value = Symbol();
    };
    var registerValue = function registerValue(id, value) {
      registeredValuesMap.value.set(id, value);
      triggerUpdate.value = Symbol();
    };
    var registeredValues = (0, _vue.ref)(new Map());
    (0, _vue.watch)(triggerUpdate, function () {
      var valuseMap = new Map();
      var _iterator = (0, _createForOfIteratorHelper2.default)(registeredValuesMap.value.values()),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var value = _step.value;
          valuseMap.set(value, true);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      registeredValues.value = valuseMap;
    });
    var toggleOption = function toggleOption(option) {
      var optionIndex = mergedValue.value.indexOf(option.value);
      var value = (0, _toConsumableArray2.default)(mergedValue.value);
      if (optionIndex === -1) {
        value.push(option.value);
      } else {
        value.splice(optionIndex, 1);
      }
      if (props.value === undefined) {
        mergedValue.value = value;
      }
      var val = value.filter(function (val) {
        return registeredValues.value.has(val);
      }).sort(function (a, b) {
        var indexA = options.value.findIndex(function (opt) {
          return opt.value === a;
        });
        var indexB = options.value.findIndex(function (opt) {
          return opt.value === b;
        });
        return indexA - indexB;
      });
      emit('update:value', val);
      emit('change', val);
      formItemContext.onFieldChange();
    };
    (0, _vue.provide)(_interface.CheckboxGroupContextKey, {
      cancelValue: cancelValue,
      registerValue: registerValue,
      toggleOption: toggleOption,
      mergedValue: mergedValue,
      name: (0, _vue.computed)(function () {
        return props.name;
      }),
      disabled: (0, _vue.computed)(function () {
        return props.disabled;
      })
    });
    expose({
      mergedValue: mergedValue
    });
    return function () {
      var _slots$default;
      var _props$id = props.id,
        id = _props$id === void 0 ? formItemContext.id.value : _props$id;
      var children = null;
      var groupPrefixCls = "".concat(prefixCls.value, "-group");
      if (options.value && options.value.length > 0) {
        children = options.value.map(function (option) {
          var _slots$label;
          return (0, _vue.createVNode)(_Checkbox.default, {
            "prefixCls": prefixCls.value,
            "key": option.value.toString(),
            "disabled": 'disabled' in option ? option.disabled : props.disabled,
            "indeterminate": option.indeterminate,
            "value": option.value,
            "checked": mergedValue.value.indexOf(option.value) !== -1,
            "onChange": option.onChange,
            "class": "".concat(groupPrefixCls, "-item")
          }, {
            default: function _default() {
              return [option.label === undefined ? (_slots$label = slots.label) === null || _slots$label === void 0 ? void 0 : _slots$label.call(slots, option) : option.label];
            }
          });
        });
      }
      return (0, _vue.createVNode)("div", {
        "class": [groupPrefixCls, (0, _defineProperty2.default)({}, "".concat(groupPrefixCls, "-rtl"), direction.value === 'rtl')],
        "id": id
      }, [children || ((_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots))]);
    };
  }
});
exports.default = _default2;