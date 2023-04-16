import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["indeterminate", "skipGroup", "id"],
  _excluded2 = ["onMouseenter", "onMouseleave", "onInput", "class", "style"];
import { createVNode as _createVNode } from "vue";
import { watchEffect, onMounted, defineComponent, inject, onBeforeUnmount, ref } from 'vue';
import classNames from '../_util/classNames';
import VcCheckbox from '../vc-checkbox/Checkbox';
import { flattenChildren } from '../_util/props-util';
import warning from '../_util/warning';
import { useInjectFormItemContext } from '../form/FormItemContext';
import useConfigInject from '../_util/hooks/useConfigInject';
import { CheckboxGroupContextKey, checkboxProps } from './interface';
export default defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'ACheckbox',
  inheritAttrs: false,
  __ANT_CHECKBOX: true,
  props: checkboxProps(),
  // emits: ['change', 'update:checked'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit,
      attrs = _ref.attrs,
      slots = _ref.slots,
      expose = _ref.expose;
    var formItemContext = useInjectFormItemContext();
    var _useConfigInject = useConfigInject('checkbox', props),
      prefixCls = _useConfigInject.prefixCls,
      direction = _useConfigInject.direction;
    var checkboxGroup = inject(CheckboxGroupContextKey, undefined);
    var uniId = Symbol('checkboxUniId');
    watchEffect(function () {
      if (!props.skipGroup && checkboxGroup) {
        checkboxGroup.registerValue(uniId, props.value);
      }
    });
    onBeforeUnmount(function () {
      if (checkboxGroup) {
        checkboxGroup.cancelValue(uniId);
      }
    });
    onMounted(function () {
      warning(props.checked !== undefined || checkboxGroup || props.value === undefined, 'Checkbox', '`value` is not validate prop, do you mean `checked`?');
    });
    var handleChange = function handleChange(event) {
      var targetChecked = event.target.checked;
      emit('update:checked', targetChecked);
      emit('change', event);
    };
    var checkboxRef = ref();
    var focus = function focus() {
      var _checkboxRef$value;
      (_checkboxRef$value = checkboxRef.value) === null || _checkboxRef$value === void 0 ? void 0 : _checkboxRef$value.focus();
    };
    var blur = function blur() {
      var _checkboxRef$value2;
      (_checkboxRef$value2 = checkboxRef.value) === null || _checkboxRef$value2 === void 0 ? void 0 : _checkboxRef$value2.blur();
    };
    expose({
      focus: focus,
      blur: blur
    });
    return function () {
      var _slots$default, _classNames;
      var children = flattenChildren((_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots));
      var indeterminate = props.indeterminate,
        skipGroup = props.skipGroup,
        _props$id = props.id,
        id = _props$id === void 0 ? formItemContext.id.value : _props$id,
        restProps = _objectWithoutProperties(props, _excluded);
      var onMouseenter = attrs.onMouseenter,
        onMouseleave = attrs.onMouseleave,
        onInput = attrs.onInput,
        className = attrs.class,
        style = attrs.style,
        restAttrs = _objectWithoutProperties(attrs, _excluded2);
      var checkboxProps = _objectSpread(_objectSpread({}, restProps), {}, {
        id: id,
        prefixCls: prefixCls.value
      }, restAttrs);
      if (checkboxGroup && !skipGroup) {
        checkboxProps.onChange = function () {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          emit.apply(void 0, ['change'].concat(args));
          checkboxGroup.toggleOption({
            label: children,
            value: props.value
          });
        };
        checkboxProps.name = checkboxGroup.name.value;
        checkboxProps.checked = checkboxGroup.mergedValue.value.indexOf(props.value) !== -1;
        checkboxProps.disabled = props.disabled || checkboxGroup.disabled.value;
        checkboxProps.indeterminate = indeterminate;
      } else {
        checkboxProps.onChange = handleChange;
      }
      var classString = classNames((_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls.value, "-wrapper"), true), _defineProperty(_classNames, "".concat(prefixCls.value, "-rtl"), direction.value === 'rtl'), _defineProperty(_classNames, "".concat(prefixCls.value, "-wrapper-checked"), checkboxProps.checked), _defineProperty(_classNames, "".concat(prefixCls.value, "-wrapper-disabled"), checkboxProps.disabled), _classNames), className);
      var checkboxClass = classNames(_defineProperty({}, "".concat(prefixCls.value, "-indeterminate"), indeterminate));
      return _createVNode("label", {
        "class": classString,
        "style": style,
        "onMouseenter": onMouseenter,
        "onMouseleave": onMouseleave
      }, [_createVNode(VcCheckbox, _objectSpread(_objectSpread({}, checkboxProps), {}, {
        "class": checkboxClass,
        "ref": checkboxRef
      }), null), children.length ? _createVNode("span", null, [children]) : null]);
    };
  }
});