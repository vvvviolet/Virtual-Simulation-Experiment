import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["prefixCls", "id"];
import { createVNode as _createVNode } from "vue";
import { defineComponent, inject, ref } from 'vue';
import PropTypes from '../_util/vue-types';
import VcCheckbox from '../vc-checkbox/Checkbox';
import classNames from '../_util/classNames';
import useConfigInject from '../_util/hooks/useConfigInject';
import { useInjectFormItemContext } from '../form/FormItemContext';
import omit from '../_util/omit';
export var radioProps = function radioProps() {
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
    value: PropTypes.any,
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
export default defineComponent({
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
    var formItemContext = useInjectFormItemContext();
    var vcCheckbox = ref();
    var radioGroupContext = inject('radioGroupContext', undefined);
    var _useConfigInject = useConfigInject('radio', props),
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
        restProps = _objectWithoutProperties(props, _excluded);
      var rProps = _objectSpread({
        prefixCls: prefixCls.value,
        id: id
      }, omit(restProps, ['onUpdate:checked', 'onUpdate:value']));
      if (radioGroup) {
        rProps.name = radioGroup.props.name;
        rProps.onChange = onChange;
        rProps.checked = props.value === radioGroup.stateValue.value;
        rProps.disabled = props.disabled || radioGroup.props.disabled;
      } else {
        rProps.onChange = handleChange;
      }
      var wrapperClassString = classNames((_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls.value, "-wrapper"), true), _defineProperty(_classNames, "".concat(prefixCls.value, "-wrapper-checked"), rProps.checked), _defineProperty(_classNames, "".concat(prefixCls.value, "-wrapper-disabled"), rProps.disabled), _defineProperty(_classNames, "".concat(prefixCls.value, "-wrapper-rtl"), direction.value === 'rtl'), _classNames));
      return _createVNode("label", {
        "class": wrapperClassString
      }, [_createVNode(VcCheckbox, _objectSpread(_objectSpread({}, rProps), {}, {
        "type": "radio",
        "ref": vcCheckbox
      }), null), slots.default && _createVNode("span", null, [slots.default()])]);
    };
  }
});