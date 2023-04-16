import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { createVNode as _createVNode } from "vue";
import { provide, nextTick, defineComponent, ref, watch } from 'vue';
import classNames from '../_util/classNames';
import PropTypes from '../_util/vue-types';
import Radio from './Radio';
import useConfigInject from '../_util/hooks/useConfigInject';
import { tuple } from '../_util/type';
import { useInjectFormItemContext } from '../form/FormItemContext';
var RadioGroupSizeTypes = tuple('large', 'default', 'small');
export var radioGroupProps = function radioGroupProps() {
  return {
    prefixCls: String,
    value: PropTypes.any,
    size: PropTypes.oneOf(RadioGroupSizeTypes),
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
export default defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'ARadioGroup',
  props: radioGroupProps(),
  // emits: ['update:value', 'change'],
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
      emit = _ref.emit;
    var formItemContext = useInjectFormItemContext();
    var _useConfigInject = useConfigInject('radio', props),
      prefixCls = _useConfigInject.prefixCls,
      direction = _useConfigInject.direction,
      size = _useConfigInject.size;
    var stateValue = ref(props.value);
    var updatingValue = ref(false);
    watch(function () {
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
      nextTick(function () {
        updatingValue.value = false;
      });
    };
    provide('radioGroupContext', {
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
      var classString = classNames(groupPrefixCls, "".concat(groupPrefixCls, "-").concat(buttonStyle), (_classNames = {}, _defineProperty(_classNames, "".concat(groupPrefixCls, "-").concat(size.value), size.value), _defineProperty(_classNames, "".concat(groupPrefixCls, "-rtl"), direction.value === 'rtl'), _classNames));
      var children = null;
      if (options && options.length > 0) {
        var optionsPrefixCls = optionType === 'button' ? "".concat(prefixCls.value, "-button") : prefixCls.value;
        children = options.map(function (option) {
          if (typeof option === 'string' || typeof option === 'number') {
            return _createVNode(Radio, {
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
          return _createVNode(Radio, {
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
      return _createVNode("div", {
        "class": classString,
        "id": id
      }, [children]);
    };
  }
});