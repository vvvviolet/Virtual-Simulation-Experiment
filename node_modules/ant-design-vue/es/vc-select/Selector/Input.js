import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _extends from "@babel/runtime/helpers/esm/extends";
import { createVNode as _createVNode } from "vue";
import { cloneElement } from '../../_util/vnode';
import { defineComponent, inject, withDirectives } from 'vue';
import PropTypes from '../../_util/vue-types';
import antInput from '../../_util/antInputDirective';
import classNames from '../../_util/classNames';
export var inputProps = {
  inputRef: PropTypes.any,
  prefixCls: String,
  id: String,
  inputElement: PropTypes.VueNode,
  disabled: {
    type: Boolean,
    default: undefined
  },
  autofocus: {
    type: Boolean,
    default: undefined
  },
  autocomplete: String,
  editable: {
    type: Boolean,
    default: undefined
  },
  activeDescendantId: String,
  value: String,
  open: {
    type: Boolean,
    default: undefined
  },
  tabindex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** Pass accessibility props to input */
  attrs: PropTypes.object,
  onKeydown: {
    type: Function
  },
  onMousedown: {
    type: Function
  },
  onChange: {
    type: Function
  },
  onPaste: {
    type: Function
  },
  onCompositionstart: {
    type: Function
  },
  onCompositionend: {
    type: Function
  },
  onFocus: {
    type: Function
  },
  onBlur: {
    type: Function
  }
};
var Input = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'Input',
  inheritAttrs: false,
  props: inputProps,
  setup: function setup(props) {
    var blurTimeout = null;
    var VCSelectContainerEvent = inject('VCSelectContainerEvent');
    return function () {
      var _inputNode, _inputNode$props;
      var prefixCls = props.prefixCls,
        id = props.id,
        inputElement = props.inputElement,
        disabled = props.disabled,
        tabindex = props.tabindex,
        autofocus = props.autofocus,
        autocomplete = props.autocomplete,
        editable = props.editable,
        activeDescendantId = props.activeDescendantId,
        value = props.value,
        _onKeydown = props.onKeydown,
        _onMousedown = props.onMousedown,
        onChange = props.onChange,
        onPaste = props.onPaste,
        _onCompositionstart = props.onCompositionstart,
        _onCompositionend = props.onCompositionend,
        _onFocus = props.onFocus,
        _onBlur = props.onBlur,
        open = props.open,
        inputRef = props.inputRef,
        attrs = props.attrs;
      var inputNode = inputElement || withDirectives(_createVNode("input", null, null), [[antInput]]);
      var inputProps = inputNode.props || {};
      var onOriginKeyDown = inputProps.onKeydown,
        onOriginInput = inputProps.onInput,
        onOriginFocus = inputProps.onFocus,
        onOriginBlur = inputProps.onBlur,
        onOriginMouseDown = inputProps.onMousedown,
        onOriginCompositionStart = inputProps.onCompositionstart,
        onOriginCompositionEnd = inputProps.onCompositionend,
        style = inputProps.style;
      inputNode = cloneElement(inputNode, _extends(_objectSpread(_objectSpread(_objectSpread({
        type: 'search'
      }, inputProps), {}, {
        id: id,
        ref: inputRef,
        disabled: disabled,
        tabindex: tabindex,
        autocomplete: autocomplete || 'off',
        autofocus: autofocus,
        class: classNames("".concat(prefixCls, "-selection-search-input"), (_inputNode = inputNode) === null || _inputNode === void 0 ? void 0 : (_inputNode$props = _inputNode.props) === null || _inputNode$props === void 0 ? void 0 : _inputNode$props.class),
        role: 'combobox',
        'aria-expanded': open,
        'aria-haspopup': 'listbox',
        'aria-owns': "".concat(id, "_list"),
        'aria-autocomplete': 'list',
        'aria-controls': "".concat(id, "_list"),
        'aria-activedescendant': activeDescendantId
      }, attrs), {}, {
        value: editable ? value : '',
        readonly: !editable,
        unselectable: !editable ? 'on' : null,
        style: _objectSpread(_objectSpread({}, style), {}, {
          opacity: editable ? null : 0
        }),
        onKeydown: function onKeydown(event) {
          _onKeydown(event);
          if (onOriginKeyDown) {
            onOriginKeyDown(event);
          }
        },
        onMousedown: function onMousedown(event) {
          _onMousedown(event);
          if (onOriginMouseDown) {
            onOriginMouseDown(event);
          }
        },
        onInput: function onInput(event) {
          onChange(event);
          if (onOriginInput) {
            onOriginInput(event);
          }
        },
        onCompositionstart: function onCompositionstart(event) {
          _onCompositionstart(event);
          if (onOriginCompositionStart) {
            onOriginCompositionStart(event);
          }
        },
        onCompositionend: function onCompositionend(event) {
          _onCompositionend(event);
          if (onOriginCompositionEnd) {
            onOriginCompositionEnd(event);
          }
        },
        onPaste: onPaste,
        onFocus: function onFocus() {
          clearTimeout(blurTimeout);
          onOriginFocus && onOriginFocus(arguments.length <= 0 ? undefined : arguments[0]);
          _onFocus && _onFocus(arguments.length <= 0 ? undefined : arguments[0]);
          VCSelectContainerEvent === null || VCSelectContainerEvent === void 0 ? void 0 : VCSelectContainerEvent.focus(arguments.length <= 0 ? undefined : arguments[0]);
        },
        onBlur: function onBlur() {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          blurTimeout = setTimeout(function () {
            onOriginBlur && onOriginBlur(args[0]);
            _onBlur && _onBlur(args[0]);
            VCSelectContainerEvent === null || VCSelectContainerEvent === void 0 ? void 0 : VCSelectContainerEvent.blur(args[0]);
          }, 100);
        }
      }), inputNode.type === 'textarea' ? {} : {
        type: 'search'
      }), true, true);
      return inputNode;
    };
  }
});
export default Input;