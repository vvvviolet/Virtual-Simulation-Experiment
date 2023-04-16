import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _createForOfIteratorHelper from "@babel/runtime/helpers/esm/createForOfIteratorHelper";
import { createVNode as _createVNode } from "vue";
import { computed, ref, watch, defineComponent, provide } from 'vue';
import Checkbox from './Checkbox';
import { useInjectFormItemContext } from '../form/FormItemContext';
import useConfigInject from '../_util/hooks/useConfigInject';
import { CheckboxGroupContextKey, checkboxGroupProps } from './interface';
export default defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'ACheckboxGroup',
  props: checkboxGroupProps(),
  // emits: ['change', 'update:value'],
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
      emit = _ref.emit,
      expose = _ref.expose;
    var formItemContext = useInjectFormItemContext();
    var _useConfigInject = useConfigInject('checkbox', props),
      prefixCls = _useConfigInject.prefixCls,
      direction = _useConfigInject.direction;
    var mergedValue = ref((props.value === undefined ? props.defaultValue : props.value) || []);
    watch(function () {
      return props.value;
    }, function () {
      mergedValue.value = props.value || [];
    });
    var options = computed(function () {
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
    var triggerUpdate = ref(Symbol());
    var registeredValuesMap = ref(new Map());
    var cancelValue = function cancelValue(id) {
      registeredValuesMap.value.delete(id);
      triggerUpdate.value = Symbol();
    };
    var registerValue = function registerValue(id, value) {
      registeredValuesMap.value.set(id, value);
      triggerUpdate.value = Symbol();
    };
    var registeredValues = ref(new Map());
    watch(triggerUpdate, function () {
      var valuseMap = new Map();
      var _iterator = _createForOfIteratorHelper(registeredValuesMap.value.values()),
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
      var value = _toConsumableArray(mergedValue.value);
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
    provide(CheckboxGroupContextKey, {
      cancelValue: cancelValue,
      registerValue: registerValue,
      toggleOption: toggleOption,
      mergedValue: mergedValue,
      name: computed(function () {
        return props.name;
      }),
      disabled: computed(function () {
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
          return _createVNode(Checkbox, {
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
      return _createVNode("div", {
        "class": [groupPrefixCls, _defineProperty({}, "".concat(groupPrefixCls, "-rtl"), direction.value === 'rtl')],
        "id": id
      }, [children || ((_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots))]);
    };
  }
});