"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.inputProps = exports.default = void 0;
var _vue = require("vue");
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _vnode = require("../../_util/vnode");
var _vueTypes = _interopRequireDefault(require("../../_util/vue-types"));
var _antInputDirective = _interopRequireDefault(require("../../_util/antInputDirective"));
var _classNames = _interopRequireDefault(require("../../_util/classNames"));
var inputProps = {
  inputRef: _vueTypes.default.any,
  prefixCls: String,
  id: String,
  inputElement: _vueTypes.default.VueNode,
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
  tabindex: _vueTypes.default.oneOfType([_vueTypes.default.number, _vueTypes.default.string]),
  /** Pass accessibility props to input */
  attrs: _vueTypes.default.object,
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
exports.inputProps = inputProps;
var Input = (0, _vue.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  name: 'Input',
  inheritAttrs: false,
  props: inputProps,
  setup: function setup(props) {
    var blurTimeout = null;
    var VCSelectContainerEvent = (0, _vue.inject)('VCSelectContainerEvent');
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
      var inputNode = inputElement || (0, _vue.withDirectives)((0, _vue.createVNode)("input", null, null), [[_antInputDirective.default]]);
      var inputProps = inputNode.props || {};
      var onOriginKeyDown = inputProps.onKeydown,
        onOriginInput = inputProps.onInput,
        onOriginFocus = inputProps.onFocus,
        onOriginBlur = inputProps.onBlur,
        onOriginMouseDown = inputProps.onMousedown,
        onOriginCompositionStart = inputProps.onCompositionstart,
        onOriginCompositionEnd = inputProps.onCompositionend,
        style = inputProps.style;
      inputNode = (0, _vnode.cloneElement)(inputNode, (0, _extends2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({
        type: 'search'
      }, inputProps), {}, {
        id: id,
        ref: inputRef,
        disabled: disabled,
        tabindex: tabindex,
        autocomplete: autocomplete || 'off',
        autofocus: autofocus,
        class: (0, _classNames.default)("".concat(prefixCls, "-selection-search-input"), (_inputNode = inputNode) === null || _inputNode === void 0 ? void 0 : (_inputNode$props = _inputNode.props) === null || _inputNode$props === void 0 ? void 0 : _inputNode$props.class),
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
        style: (0, _objectSpread2.default)((0, _objectSpread2.default)({}, style), {}, {
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
var _default = Input;
exports.default = _default;