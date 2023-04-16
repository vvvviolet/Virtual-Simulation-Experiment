import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { createVNode as _createVNode } from "vue";
/**
 * Cursor rule:
 * 1. Only `showSearch` enabled
 * 2. Only `open` is `true`
 * 3. When typing, set `open` to `true` which hit rule of 2
 *
 * Accessibility:
 * - https://www.w3.org/TR/wai-aria-practices/examples/combobox/aria1.1pattern/listbox-combo.html
 */
import KeyCode from '../../_util/KeyCode';
import MultipleSelector from './MultipleSelector';
import SingleSelector from './SingleSelector';
import { isValidateOpenKey } from '../utils/keyUtil';
import useLock from '../hooks/useLock';
import { defineComponent } from 'vue';
import createRef from '../../_util/createRef';
import PropTypes from '../../_util/vue-types';
var Selector = defineComponent({
  name: 'Selector',
  inheritAttrs: false,
  props: {
    id: String,
    prefixCls: String,
    showSearch: {
      type: Boolean,
      default: undefined
    },
    open: {
      type: Boolean,
      default: undefined
    },
    /** Display in the Selector value, it's not same as `value` prop */
    values: PropTypes.array,
    multiple: {
      type: Boolean,
      default: undefined
    },
    mode: String,
    searchValue: String,
    activeValue: String,
    inputElement: PropTypes.any,
    autofocus: {
      type: Boolean,
      default: undefined
    },
    activeDescendantId: String,
    tabindex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    disabled: {
      type: Boolean,
      default: undefined
    },
    placeholder: PropTypes.any,
    removeIcon: PropTypes.any,
    // Tags
    maxTagCount: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    maxTagTextLength: Number,
    maxTagPlaceholder: PropTypes.any,
    tagRender: Function,
    optionLabelRender: Function,
    /** Check if `tokenSeparators` contains `\n` or `\r\n` */
    tokenWithEnter: {
      type: Boolean,
      default: undefined
    },
    // Motion
    choiceTransitionName: String,
    onToggleOpen: {
      type: Function
    },
    /** `onSearch` returns go next step boolean to check if need do toggle open */
    onSearch: Function,
    onSearchSubmit: Function,
    onRemove: Function,
    onInputKeyDown: {
      type: Function
    },
    /**
     * @private get real dom for trigger align.
     * This may be removed after React provides replacement of `findDOMNode`
     */
    domRef: Function
  },
  setup: function setup(props, _ref) {
    var expose = _ref.expose;
    var inputRef = createRef();
    var compositionStatus = false;
    // ====================== Input ======================
    var _useLock = useLock(0),
      _useLock2 = _slicedToArray(_useLock, 2),
      getInputMouseDown = _useLock2[0],
      setInputMouseDown = _useLock2[1];
    var onInternalInputKeyDown = function onInternalInputKeyDown(event) {
      var which = event.which;
      if (which === KeyCode.UP || which === KeyCode.DOWN) {
        event.preventDefault();
      }
      if (props.onInputKeyDown) {
        props.onInputKeyDown(event);
      }
      if (which === KeyCode.ENTER && props.mode === 'tags' && !compositionStatus && !props.open) {
        // When menu isn't open, OptionList won't trigger a value change
        // So when enter is pressed, the tag's input value should be emitted here to let selector know
        props.onSearchSubmit(event.target.value);
      }
      if (isValidateOpenKey(which)) {
        props.onToggleOpen(true);
      }
    };
    /**
     * We can not use `findDOMNode` sine it will get warning,
     * have to use timer to check if is input element.
     */
    var onInternalInputMouseDown = function onInternalInputMouseDown() {
      setInputMouseDown(true);
    };
    // When paste come, ignore next onChange
    var pastedText = null;
    var triggerOnSearch = function triggerOnSearch(value) {
      if (props.onSearch(value, true, compositionStatus) !== false) {
        props.onToggleOpen(true);
      }
    };
    var onInputCompositionStart = function onInputCompositionStart() {
      compositionStatus = true;
    };
    var onInputCompositionEnd = function onInputCompositionEnd(e) {
      compositionStatus = false;
      // Trigger search again to support `tokenSeparators` with typewriting
      if (props.mode !== 'combobox') {
        triggerOnSearch(e.target.value);
      }
    };
    var onInputChange = function onInputChange(event) {
      var value = event.target.value;
      // Pasted text should replace back to origin content
      if (props.tokenWithEnter && pastedText && /[\r\n]/.test(pastedText)) {
        // CRLF will be treated as a single space for input element
        var replacedText = pastedText.replace(/[\r\n]+$/, '').replace(/\r\n/g, ' ').replace(/[\r\n]/g, ' ');
        value = value.replace(replacedText, pastedText);
      }
      pastedText = null;
      triggerOnSearch(value);
    };
    var onInputPaste = function onInputPaste(e) {
      var clipboardData = e.clipboardData;
      var value = clipboardData.getData('text');
      pastedText = value;
    };
    var onClick = function onClick(_ref2) {
      var target = _ref2.target;
      if (target !== inputRef.current) {
        // Should focus input if click the selector
        var isIE = document.body.style.msTouchAction !== undefined;
        if (isIE) {
          setTimeout(function () {
            inputRef.current.focus();
          });
        } else {
          inputRef.current.focus();
        }
      }
    };
    var onMousedown = function onMousedown(event) {
      var inputMouseDown = getInputMouseDown();
      if (event.target !== inputRef.current && !inputMouseDown) {
        event.preventDefault();
      }
      if (props.mode !== 'combobox' && (!props.showSearch || !inputMouseDown) || !props.open) {
        if (props.open) {
          props.onSearch('', true, false);
        }
        props.onToggleOpen();
      }
    };
    expose({
      focus: function focus() {
        inputRef.current.focus();
      },
      blur: function blur() {
        inputRef.current.blur();
      }
    });
    return function () {
      var prefixCls = props.prefixCls,
        domRef = props.domRef,
        mode = props.mode;
      var sharedProps = {
        inputRef: inputRef,
        onInputKeyDown: onInternalInputKeyDown,
        onInputMouseDown: onInternalInputMouseDown,
        onInputChange: onInputChange,
        onInputPaste: onInputPaste,
        onInputCompositionStart: onInputCompositionStart,
        onInputCompositionEnd: onInputCompositionEnd
      };
      var selectNode = mode === 'multiple' || mode === 'tags' ? _createVNode(MultipleSelector, _objectSpread(_objectSpread({}, props), sharedProps), null) : _createVNode(SingleSelector, _objectSpread(_objectSpread({}, props), sharedProps), null);
      return _createVNode("div", {
        "ref": domRef,
        "class": "".concat(prefixCls, "-selector"),
        "onClick": onClick,
        "onMousedown": onMousedown
      }, [selectNode]);
    };
  }
});
export default Selector;