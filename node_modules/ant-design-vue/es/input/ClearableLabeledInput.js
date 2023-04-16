import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { createVNode as _createVNode } from "vue";
import classNames from '../_util/classNames';
import CloseCircleFilled from "@ant-design/icons-vue/es/icons/CloseCircleFilled";
import PropTypes from '../_util/vue-types';
import { cloneElement } from '../_util/vnode';
import { ref, defineComponent } from 'vue';
import { tuple } from '../_util/type';
import { getInputClassName, hasAddon, hasPrefixSuffix } from './util';
var ClearableInputType = ['text', 'input'];
export default defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'ClearableLabeledInput',
  inheritAttrs: false,
  props: {
    prefixCls: String,
    inputType: PropTypes.oneOf(tuple('text', 'input')),
    value: PropTypes.any,
    defaultValue: PropTypes.any,
    allowClear: {
      type: Boolean,
      default: undefined
    },
    element: PropTypes.any,
    handleReset: Function,
    disabled: {
      type: Boolean,
      default: undefined
    },
    direction: {
      type: String
    },
    size: {
      type: String
    },
    suffix: PropTypes.any,
    prefix: PropTypes.any,
    addonBefore: PropTypes.any,
    addonAfter: PropTypes.any,
    readonly: {
      type: Boolean,
      default: undefined
    },
    focused: {
      type: Boolean,
      default: undefined
    },
    bordered: {
      type: Boolean,
      default: true
    },
    triggerFocus: {
      type: Function
    },
    hidden: Boolean
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
      attrs = _ref.attrs;
    var containerRef = ref();
    var onInputMouseUp = function onInputMouseUp(e) {
      var _containerRef$value;
      if ((_containerRef$value = containerRef.value) !== null && _containerRef$value !== void 0 && _containerRef$value.contains(e.target)) {
        var triggerFocus = props.triggerFocus;
        triggerFocus === null || triggerFocus === void 0 ? void 0 : triggerFocus();
      }
    };
    var renderClearIcon = function renderClearIcon(prefixCls) {
      var _classNames;
      var allowClear = props.allowClear,
        value = props.value,
        disabled = props.disabled,
        readonly = props.readonly,
        handleReset = props.handleReset,
        _props$suffix = props.suffix,
        suffix = _props$suffix === void 0 ? slots.suffix : _props$suffix;
      if (!allowClear) {
        return null;
      }
      var needClear = !disabled && !readonly && value;
      var className = "".concat(prefixCls, "-clear-icon");
      return _createVNode(CloseCircleFilled, {
        "onClick": handleReset,
        "onMousedown": function onMousedown(e) {
          return e.preventDefault();
        },
        "class": classNames((_classNames = {}, _defineProperty(_classNames, "".concat(className, "-hidden"), !needClear), _defineProperty(_classNames, "".concat(className, "-has-suffix"), !!suffix), _classNames), className),
        "role": "button"
      }, null);
    };
    var renderSuffix = function renderSuffix(prefixCls) {
      var _slots$suffix;
      var _props$suffix2 = props.suffix,
        suffix = _props$suffix2 === void 0 ? (_slots$suffix = slots.suffix) === null || _slots$suffix === void 0 ? void 0 : _slots$suffix.call(slots) : _props$suffix2,
        allowClear = props.allowClear;
      if (suffix || allowClear) {
        return _createVNode("span", {
          "class": "".concat(prefixCls, "-suffix")
        }, [renderClearIcon(prefixCls), suffix]);
      }
      return null;
    };
    var renderLabeledIcon = function renderLabeledIcon(prefixCls, element) {
      var _slots$prefix, _slots$suffix2, _classNames2;
      var focused = props.focused,
        value = props.value,
        _props$prefix = props.prefix,
        prefix = _props$prefix === void 0 ? (_slots$prefix = slots.prefix) === null || _slots$prefix === void 0 ? void 0 : _slots$prefix.call(slots) : _props$prefix,
        size = props.size,
        _props$suffix3 = props.suffix,
        suffix = _props$suffix3 === void 0 ? (_slots$suffix2 = slots.suffix) === null || _slots$suffix2 === void 0 ? void 0 : _slots$suffix2.call(slots) : _props$suffix3,
        disabled = props.disabled,
        allowClear = props.allowClear,
        direction = props.direction,
        readonly = props.readonly,
        bordered = props.bordered,
        hidden = props.hidden,
        _props$addonAfter = props.addonAfter,
        addonAfter = _props$addonAfter === void 0 ? slots.addonAfter : _props$addonAfter,
        _props$addonBefore = props.addonBefore,
        addonBefore = _props$addonBefore === void 0 ? slots.addonBefore : _props$addonBefore;
      var suffixNode = renderSuffix(prefixCls);
      if (!hasPrefixSuffix({
        prefix: prefix,
        suffix: suffix,
        allowClear: allowClear
      })) {
        return cloneElement(element, {
          value: value
        });
      }
      var prefixNode = prefix ? _createVNode("span", {
        "class": "".concat(prefixCls, "-prefix")
      }, [prefix]) : null;
      var affixWrapperCls = classNames("".concat(prefixCls, "-affix-wrapper"), (_classNames2 = {}, _defineProperty(_classNames2, "".concat(prefixCls, "-affix-wrapper-focused"), focused), _defineProperty(_classNames2, "".concat(prefixCls, "-affix-wrapper-disabled"), disabled), _defineProperty(_classNames2, "".concat(prefixCls, "-affix-wrapper-sm"), size === 'small'), _defineProperty(_classNames2, "".concat(prefixCls, "-affix-wrapper-lg"), size === 'large'), _defineProperty(_classNames2, "".concat(prefixCls, "-affix-wrapper-input-with-clear-btn"), suffix && allowClear && value), _defineProperty(_classNames2, "".concat(prefixCls, "-affix-wrapper-rtl"), direction === 'rtl'), _defineProperty(_classNames2, "".concat(prefixCls, "-affix-wrapper-readonly"), readonly), _defineProperty(_classNames2, "".concat(prefixCls, "-affix-wrapper-borderless"), !bordered), _defineProperty(_classNames2, "".concat(attrs.class), !hasAddon({
        addonAfter: addonAfter,
        addonBefore: addonBefore
      }) && attrs.class), _classNames2));
      return _createVNode("span", {
        "ref": containerRef,
        "class": affixWrapperCls,
        "style": attrs.style,
        "onMouseup": onInputMouseUp,
        "hidden": hidden
      }, [prefixNode, cloneElement(element, {
        style: null,
        value: value,
        class: getInputClassName(prefixCls, bordered, size, disabled)
      }), suffixNode]);
    };
    var renderInputWithLabel = function renderInputWithLabel(prefixCls, labeledElement) {
      var _slots$addonBefore, _slots$addonAfter, _classNames4;
      var _props$addonBefore2 = props.addonBefore,
        addonBefore = _props$addonBefore2 === void 0 ? (_slots$addonBefore = slots.addonBefore) === null || _slots$addonBefore === void 0 ? void 0 : _slots$addonBefore.call(slots) : _props$addonBefore2,
        _props$addonAfter2 = props.addonAfter,
        addonAfter = _props$addonAfter2 === void 0 ? (_slots$addonAfter = slots.addonAfter) === null || _slots$addonAfter === void 0 ? void 0 : _slots$addonAfter.call(slots) : _props$addonAfter2,
        size = props.size,
        direction = props.direction,
        hidden = props.hidden;
      // Not wrap when there is not addons
      if (!hasAddon({
        addonBefore: addonBefore,
        addonAfter: addonAfter
      })) {
        return labeledElement;
      }
      var wrapperClassName = "".concat(prefixCls, "-group");
      var addonClassName = "".concat(wrapperClassName, "-addon");
      var addonBeforeNode = addonBefore ? _createVNode("span", {
        "class": addonClassName
      }, [addonBefore]) : null;
      var addonAfterNode = addonAfter ? _createVNode("span", {
        "class": addonClassName
      }, [addonAfter]) : null;
      var mergedWrapperClassName = classNames("".concat(prefixCls, "-wrapper"), wrapperClassName, _defineProperty({}, "".concat(wrapperClassName, "-rtl"), direction === 'rtl'));
      var mergedGroupClassName = classNames("".concat(prefixCls, "-group-wrapper"), (_classNames4 = {}, _defineProperty(_classNames4, "".concat(prefixCls, "-group-wrapper-sm"), size === 'small'), _defineProperty(_classNames4, "".concat(prefixCls, "-group-wrapper-lg"), size === 'large'), _defineProperty(_classNames4, "".concat(prefixCls, "-group-wrapper-rtl"), direction === 'rtl'), _classNames4), attrs.class);
      // Need another wrapper for changing display:table to display:inline-block
      // and put style prop in wrapper
      return _createVNode("span", {
        "class": mergedGroupClassName,
        "style": attrs.style,
        "hidden": hidden
      }, [_createVNode("span", {
        "class": mergedWrapperClassName
      }, [addonBeforeNode, cloneElement(labeledElement, {
        style: null
      }), addonAfterNode])]);
    };
    var renderTextAreaWithClearIcon = function renderTextAreaWithClearIcon(prefixCls, element) {
      var _classNames5;
      var value = props.value,
        allowClear = props.allowClear,
        direction = props.direction,
        bordered = props.bordered,
        hidden = props.hidden,
        _props$addonAfter3 = props.addonAfter,
        addonAfter = _props$addonAfter3 === void 0 ? slots.addonAfter : _props$addonAfter3,
        _props$addonBefore3 = props.addonBefore,
        addonBefore = _props$addonBefore3 === void 0 ? slots.addonBefore : _props$addonBefore3;
      if (!allowClear) {
        return cloneElement(element, {
          value: value
        });
      }
      var affixWrapperCls = classNames("".concat(prefixCls, "-affix-wrapper"), "".concat(prefixCls, "-affix-wrapper-textarea-with-clear-btn"), (_classNames5 = {}, _defineProperty(_classNames5, "".concat(prefixCls, "-affix-wrapper-rtl"), direction === 'rtl'), _defineProperty(_classNames5, "".concat(prefixCls, "-affix-wrapper-borderless"), !bordered), _defineProperty(_classNames5, "".concat(attrs.class), !hasAddon({
        addonAfter: addonAfter,
        addonBefore: addonBefore
      }) && attrs.class), _classNames5));
      return _createVNode("span", {
        "class": affixWrapperCls,
        "style": attrs.style,
        "hidden": hidden
      }, [cloneElement(element, {
        style: null,
        value: value
      }), renderClearIcon(prefixCls)]);
    };
    return function () {
      var _slots$element;
      var prefixCls = props.prefixCls,
        inputType = props.inputType,
        _props$element = props.element,
        element = _props$element === void 0 ? (_slots$element = slots.element) === null || _slots$element === void 0 ? void 0 : _slots$element.call(slots) : _props$element;
      if (inputType === ClearableInputType[0]) {
        return renderTextAreaWithClearIcon(prefixCls, element);
      }
      return renderInputWithLabel(prefixCls, renderLabeledIcon(prefixCls, element));
    };
  }
});