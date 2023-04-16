"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.inputNumberProps = exports.default = void 0;
var _vue = require("vue");
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _classNames5 = _interopRequireDefault(require("../_util/classNames"));
var _UpOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/UpOutlined"));
var _DownOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/DownOutlined"));
var _InputNumber = _interopRequireWildcard(require("./src/InputNumber"));
var _FormItemContext = require("../form/FormItemContext");
var _useConfigInject2 = _interopRequireDefault(require("../_util/hooks/useConfigInject"));
var _vnode = require("../_util/vnode");
var _omit = _interopRequireDefault(require("../_util/omit"));
var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));
var _isValidValue = _interopRequireDefault(require("../_util/isValidValue"));
var _excluded = ["class", "bordered", "readonly", "style", "addonBefore", "addonAfter", "prefix", "valueModifiers"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var baseProps = (0, _InputNumber.inputNumberProps)();
var inputNumberProps = function inputNumberProps() {
  return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, baseProps), {}, {
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
    addonBefore: _vueTypes.default.any,
    addonAfter: _vueTypes.default.any,
    prefix: _vueTypes.default.any,
    'onUpdate:value': baseProps.onChange,
    valueModifiers: Object
  });
};
exports.inputNumberProps = inputNumberProps;
var InputNumber = (0, _vue.defineComponent)({
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
    var formItemContext = (0, _FormItemContext.useInjectFormItemContext)();
    var _useConfigInject = (0, _useConfigInject2.default)('input-number', props),
      prefixCls = _useConfigInject.prefixCls,
      size = _useConfigInject.size,
      direction = _useConfigInject.direction;
    var mergedValue = (0, _vue.ref)(props.value === undefined ? props.defaultValue : props.value);
    var focused = (0, _vue.ref)(false);
    (0, _vue.watch)(function () {
      return props.value;
    }, function () {
      mergedValue.value = props.value;
    });
    var inputNumberRef = (0, _vue.ref)(null);
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
      var _attrs$props = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, attrs), props),
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
        others = (0, _objectWithoutProperties2.default)(_attrs$props, _excluded);
      var preCls = prefixCls.value;
      var mergeSize = size.value;
      var inputNumberClass = (0, _classNames5.default)((_classNames = {}, (0, _defineProperty2.default)(_classNames, "".concat(preCls, "-lg"), mergeSize === 'large'), (0, _defineProperty2.default)(_classNames, "".concat(preCls, "-sm"), mergeSize === 'small'), (0, _defineProperty2.default)(_classNames, "".concat(preCls, "-rtl"), direction.value === 'rtl'), (0, _defineProperty2.default)(_classNames, "".concat(preCls, "-readonly"), readonly), (0, _defineProperty2.default)(_classNames, "".concat(preCls, "-borderless"), !bordered), _classNames), className);
      var element = (0, _vue.createVNode)(_InputNumber.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, (0, _omit.default)(others, ['size', 'defaultValue'])), {}, {
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
          return (0, _vue.createVNode)(_UpOutlined.default, {
            "class": "".concat(preCls, "-handler-up-inner")
          }, null);
        },
        downHandler: function downHandler() {
          return (0, _vue.createVNode)(_DownOutlined.default, {
            "class": "".concat(preCls, "-handler-down-inner")
          }, null);
        }
      });
      var hasAddon = (0, _isValidValue.default)(addonBefore) || (0, _isValidValue.default)(addonAfter);
      if ((0, _isValidValue.default)(prefix)) {
        var _classNames2;
        var affixWrapperCls = (0, _classNames5.default)("".concat(preCls, "-affix-wrapper"), (_classNames2 = {}, (0, _defineProperty2.default)(_classNames2, "".concat(preCls, "-affix-wrapper-focused"), focused.value), (0, _defineProperty2.default)(_classNames2, "".concat(preCls, "-affix-wrapper-disabled"), props.disabled), (0, _defineProperty2.default)(_classNames2, "".concat(preCls, "-affix-wrapper-rtl"), direction.value === 'rtl'), (0, _defineProperty2.default)(_classNames2, "".concat(preCls, "-affix-wrapper-readonly"), readonly), (0, _defineProperty2.default)(_classNames2, "".concat(preCls, "-affix-wrapper-borderless"), !bordered), (0, _defineProperty2.default)(_classNames2, "".concat(className), !hasAddon && className), _classNames2));
        element = (0, _vue.createVNode)("div", {
          "class": affixWrapperCls,
          "style": style,
          "onMouseup": function onMouseup() {
            return inputNumberRef.value.focus();
          }
        }, [(0, _vue.createVNode)("span", {
          "class": "".concat(preCls, "-prefix")
        }, [prefix]), element]);
      }
      if (hasAddon) {
        var _classNames4;
        var wrapperClassName = "".concat(preCls, "-group");
        var addonClassName = "".concat(wrapperClassName, "-addon");
        var addonBeforeNode = addonBefore ? (0, _vue.createVNode)("div", {
          "class": addonClassName
        }, [addonBefore]) : null;
        var addonAfterNode = addonAfter ? (0, _vue.createVNode)("div", {
          "class": addonClassName
        }, [addonAfter]) : null;
        var mergedWrapperClassName = (0, _classNames5.default)("".concat(preCls, "-wrapper"), wrapperClassName, (0, _defineProperty2.default)({}, "".concat(wrapperClassName, "-rtl"), direction.value === 'rtl'));
        var mergedGroupClassName = (0, _classNames5.default)("".concat(preCls, "-group-wrapper"), (_classNames4 = {}, (0, _defineProperty2.default)(_classNames4, "".concat(preCls, "-group-wrapper-sm"), mergeSize === 'small'), (0, _defineProperty2.default)(_classNames4, "".concat(preCls, "-group-wrapper-lg"), mergeSize === 'large'), (0, _defineProperty2.default)(_classNames4, "".concat(preCls, "-group-wrapper-rtl"), direction.value === 'rtl'), _classNames4), className);
        element = (0, _vue.createVNode)("div", {
          "class": mergedGroupClassName,
          "style": style
        }, [(0, _vue.createVNode)("div", {
          "class": mergedWrapperClassName
        }, [addonBeforeNode, element, addonAfterNode])]);
      }
      return (0, _vnode.cloneElement)(element, {
        style: style
      });
    };
  }
});
var _default = (0, _extends2.default)(InputNumber, {
  install: function install(app) {
    app.component(InputNumber.name, InputNumber);
    return app;
  }
});
exports.default = _default;