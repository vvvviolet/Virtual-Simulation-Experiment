import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
var _excluded = ["class", "bordered", "readonly", "style", "addonBefore", "addonAfter", "prefix", "valueModifiers"];
import { resolveDirective as _resolveDirective, createVNode as _createVNode } from "vue";
import { watch, defineComponent, ref } from 'vue';
import classNames from '../_util/classNames';
import UpOutlined from "@ant-design/icons-vue/es/icons/UpOutlined";
import DownOutlined from "@ant-design/icons-vue/es/icons/DownOutlined";
import VcInputNumber, { inputNumberProps as baseInputNumberProps } from './src/InputNumber';
import { useInjectFormItemContext } from '../form/FormItemContext';
import useConfigInject from '../_util/hooks/useConfigInject';
import { cloneElement } from '../_util/vnode';
import omit from '../_util/omit';
import PropTypes from '../_util/vue-types';
import isValidValue from '../_util/isValidValue';
var baseProps = baseInputNumberProps();
export var inputNumberProps = function inputNumberProps() {
  return _objectSpread(_objectSpread({}, baseProps), {}, {
    size: {
      type: String
    },
    bordered: {
      type: Boolean,
      default: true
    },
    placeholder: String,
    name: String,
    id: String,
    type: String,
    addonBefore: PropTypes.any,
    addonAfter: PropTypes.any,
    prefix: PropTypes.any,
    'onUpdate:value': baseProps.onChange,
    valueModifiers: Object
  });
};
var InputNumber = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'AInputNumber',
  inheritAttrs: false,
  props: inputNumberProps(),
  // emits: ['focus', 'blur', 'change', 'input', 'update:value'],
  slots: ['addonBefore', 'addonAfter', 'prefix'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit,
      expose = _ref.expose,
      attrs = _ref.attrs,
      slots = _ref.slots;
    var formItemContext = useInjectFormItemContext();
    var _useConfigInject = useConfigInject('input-number', props),
      prefixCls = _useConfigInject.prefixCls,
      size = _useConfigInject.size,
      direction = _useConfigInject.direction;
    var mergedValue = ref(props.value === undefined ? props.defaultValue : props.value);
    var focused = ref(false);
    watch(function () {
      return props.value;
    }, function () {
      mergedValue.value = props.value;
    });
    var inputNumberRef = ref(null);
    var focus = function focus() {
      var _inputNumberRef$value;
      (_inputNumberRef$value = inputNumberRef.value) === null || _inputNumberRef$value === void 0 ? void 0 : _inputNumberRef$value.focus();
    };
    var blur = function blur() {
      var _inputNumberRef$value2;
      (_inputNumberRef$value2 = inputNumberRef.value) === null || _inputNumberRef$value2 === void 0 ? void 0 : _inputNumberRef$value2.blur();
    };
    expose({
      focus: focus,
      blur: blur
    });
    var handleChange = function handleChange(val) {
      if (props.value === undefined) {
        mergedValue.value = val;
      }
      emit('update:value', val);
      emit('change', val);
      formItemContext.onFieldChange();
    };
    var handleBlur = function handleBlur(e) {
      focused.value = false;
      emit('blur', e);
      formItemContext.onFieldBlur();
    };
    var handleFocus = function handleFocus(e) {
      focused.value = true;
      emit('focus', e);
    };
    return function () {
      var _slots$addonBefore, _slots$addonAfter, _slots$prefix, _classNames;
      var _attrs$props = _objectSpread(_objectSpread({}, attrs), props),
        className = _attrs$props.class,
        bordered = _attrs$props.bordered,
        readonly = _attrs$props.readonly,
        style = _attrs$props.style,
        _attrs$props$addonBef = _attrs$props.addonBefore,
        addonBefore = _attrs$props$addonBef === void 0 ? (_slots$addonBefore = slots.addonBefore) === null || _slots$addonBefore === void 0 ? void 0 : _slots$addonBefore.call(slots) : _attrs$props$addonBef,
        _attrs$props$addonAft = _attrs$props.addonAfter,
        addonAfter = _attrs$props$addonAft === void 0 ? (_slots$addonAfter = slots.addonAfter) === null || _slots$addonAfter === void 0 ? void 0 : _slots$addonAfter.call(slots) : _attrs$props$addonAft,
        _attrs$props$prefix = _attrs$props.prefix,
        prefix = _attrs$props$prefix === void 0 ? (_slots$prefix = slots.prefix) === null || _slots$prefix === void 0 ? void 0 : _slots$prefix.call(slots) : _attrs$props$prefix,
        _attrs$props$valueMod = _attrs$props.valueModifiers,
        valueModifiers = _attrs$props$valueMod === void 0 ? {} : _attrs$props$valueMod,
        others = _objectWithoutProperties(_attrs$props, _excluded);
      var preCls = prefixCls.value;
      var mergeSize = size.value;
      var inputNumberClass = classNames((_classNames = {}, _defineProperty(_classNames, "".concat(preCls, "-lg"), mergeSize === 'large'), _defineProperty(_classNames, "".concat(preCls, "-sm"), mergeSize === 'small'), _defineProperty(_classNames, "".concat(preCls, "-rtl"), direction.value === 'rtl'), _defineProperty(_classNames, "".concat(preCls, "-readonly"), readonly), _defineProperty(_classNames, "".concat(preCls, "-borderless"), !bordered), _classNames), className);
      var element = _createVNode(VcInputNumber, _objectSpread(_objectSpread({}, omit(others, ['size', 'defaultValue'])), {}, {
        "ref": inputNumberRef,
        "lazy": !!valueModifiers.lazy,
        "value": mergedValue.value,
        "class": inputNumberClass,
        "prefixCls": preCls,
        "readonly": readonly,
        "onChange": handleChange,
        "onBlur": handleBlur,
        "onFocus": handleFocus
      }), {
        upHandler: function upHandler() {
          return _createVNode(UpOutlined, {
            "class": "".concat(preCls, "-handler-up-inner")
          }, null);
        },
        downHandler: function downHandler() {
          return _createVNode(DownOutlined, {
            "class": "".concat(preCls, "-handler-down-inner")
          }, null);
        }
      });
      var hasAddon = isValidValue(addonBefore) || isValidValue(addonAfter);
      if (isValidValue(prefix)) {
        var _classNames2;
        var affixWrapperCls = classNames("".concat(preCls, "-affix-wrapper"), (_classNames2 = {}, _defineProperty(_classNames2, "".concat(preCls, "-affix-wrapper-focused"), focused.value), _defineProperty(_classNames2, "".concat(preCls, "-affix-wrapper-disabled"), props.disabled), _defineProperty(_classNames2, "".concat(preCls, "-affix-wrapper-rtl"), direction.value === 'rtl'), _defineProperty(_classNames2, "".concat(preCls, "-affix-wrapper-readonly"), readonly), _defineProperty(_classNames2, "".concat(preCls, "-affix-wrapper-borderless"), !bordered), _defineProperty(_classNames2, "".concat(className), !hasAddon && className), _classNames2));
        element = _createVNode("div", {
          "class": affixWrapperCls,
          "style": style,
          "onMouseup": function onMouseup() {
            return inputNumberRef.value.focus();
          }
        }, [_createVNode("span", {
          "class": "".concat(preCls, "-prefix")
        }, [prefix]), element]);
      }
      if (hasAddon) {
        var _classNames4;
        var wrapperClassName = "".concat(preCls, "-group");
        var addonClassName = "".concat(wrapperClassName, "-addon");
        var addonBeforeNode = addonBefore ? _createVNode("div", {
          "class": addonClassName
        }, [addonBefore]) : null;
        var addonAfterNode = addonAfter ? _createVNode("div", {
          "class": addonClassName
        }, [addonAfter]) : null;
        var mergedWrapperClassName = classNames("".concat(preCls, "-wrapper"), wrapperClassName, _defineProperty({}, "".concat(wrapperClassName, "-rtl"), direction.value === 'rtl'));
        var mergedGroupClassName = classNames("".concat(preCls, "-group-wrapper"), (_classNames4 = {}, _defineProperty(_classNames4, "".concat(preCls, "-group-wrapper-sm"), mergeSize === 'small'), _defineProperty(_classNames4, "".concat(preCls, "-group-wrapper-lg"), mergeSize === 'large'), _defineProperty(_classNames4, "".concat(preCls, "-group-wrapper-rtl"), direction.value === 'rtl'), _classNames4), className);
        element = _createVNode("div", {
          "class": mergedGroupClassName,
          "style": style
        }, [_createVNode("div", {
          "class": mergedWrapperClassName
        }, [addonBeforeNode, element, addonAfterNode])]);
      }
      return cloneElement(element, {
        style: style
      });
    };
  }
});
export default _extends(InputNumber, {
  install: function install(app) {
    app.component(InputNumber.name, InputNumber);
    return app;
  }
});