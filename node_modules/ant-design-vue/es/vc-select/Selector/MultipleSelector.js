import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { Fragment as _Fragment, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
import TransBtn from '../TransBtn';
import Input from './Input';
import { computed, defineComponent, onMounted, ref, watch } from 'vue';
import classNames from '../../_util/classNames';
import pickAttrs from '../../_util/pickAttrs';
import PropTypes from '../../_util/vue-types';
import Overflow from '../../vc-overflow';
import useInjectLegacySelectContext from '../../vc-tree-select/LegacyContext';
var props = {
  id: String,
  prefixCls: String,
  values: PropTypes.array,
  open: {
    type: Boolean,
    default: undefined
  },
  searchValue: String,
  inputRef: PropTypes.any,
  placeholder: PropTypes.any,
  disabled: {
    type: Boolean,
    default: undefined
  },
  mode: String,
  showSearch: {
    type: Boolean,
    default: undefined
  },
  autofocus: {
    type: Boolean,
    default: undefined
  },
  autocomplete: String,
  activeDescendantId: String,
  tabindex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  removeIcon: PropTypes.any,
  choiceTransitionName: String,
  maxTagCount: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  maxTagTextLength: Number,
  maxTagPlaceholder: PropTypes.any.def(function () {
    return function (omittedValues) {
      return "+ ".concat(omittedValues.length, " ...");
    };
  }),
  tagRender: Function,
  onToggleOpen: {
    type: Function
  },
  onRemove: Function,
  onInputChange: Function,
  onInputPaste: Function,
  onInputKeyDown: Function,
  onInputMouseDown: Function,
  onInputCompositionStart: Function,
  onInputCompositionEnd: Function
};
var onPreventMouseDown = function onPreventMouseDown(event) {
  event.preventDefault();
  event.stopPropagation();
};
var SelectSelector = defineComponent({
  name: 'MultipleSelectSelector',
  inheritAttrs: false,
  props: props,
  setup: function setup(props) {
    var measureRef = ref();
    var inputWidth = ref(0);
    var focused = ref(false);
    var legacyTreeSelectContext = useInjectLegacySelectContext();
    var selectionPrefixCls = computed(function () {
      return "".concat(props.prefixCls, "-selection");
    });
    // ===================== Search ======================
    var inputValue = computed(function () {
      return props.open || props.mode === 'tags' ? props.searchValue : '';
    });
    var inputEditable = computed(function () {
      return props.mode === 'tags' || props.showSearch && (props.open || focused.value);
    });
    // We measure width and set to the input immediately
    onMounted(function () {
      watch(inputValue, function () {
        inputWidth.value = measureRef.value.scrollWidth;
      }, {
        flush: 'post',
        immediate: true
      });
    });
    // ===================== Render ======================
    // >>> Render Selector Node. Includes Item & Rest
    function defaultRenderSelector(title, content, itemDisabled, closable, onClose) {
      return _createVNode("span", {
        "class": classNames("".concat(selectionPrefixCls.value, "-item"), _defineProperty({}, "".concat(selectionPrefixCls.value, "-item-disabled"), itemDisabled)),
        "title": typeof title === 'string' || typeof title === 'number' ? title.toString() : undefined
      }, [_createVNode("span", {
        "class": "".concat(selectionPrefixCls.value, "-item-content")
      }, [content]), closable && _createVNode(TransBtn, {
        "class": "".concat(selectionPrefixCls.value, "-item-remove"),
        "onMousedown": onPreventMouseDown,
        "onClick": onClose,
        "customizeIcon": props.removeIcon
      }, {
        default: function _default() {
          return [_createTextVNode("\xD7")];
        }
      })]);
    }
    function customizeRenderSelector(value, content, itemDisabled, closable, onClose, option) {
      var onMouseDown = function onMouseDown(e) {
        onPreventMouseDown(e);
        props.onToggleOpen(!open);
      };
      var originData = option;
      // For TreeSelect
      if (legacyTreeSelectContext.keyEntities) {
        var _legacyTreeSelectCont;
        originData = ((_legacyTreeSelectCont = legacyTreeSelectContext.keyEntities[value]) === null || _legacyTreeSelectCont === void 0 ? void 0 : _legacyTreeSelectCont.node) || {};
      }
      return _createVNode("span", {
        "key": value,
        "onMousedown": onMouseDown
      }, [props.tagRender({
        label: content,
        value: value,
        disabled: itemDisabled,
        closable: closable,
        onClose: onClose,
        option: originData
      })]);
    }
    function renderItem(valueItem) {
      var itemDisabled = valueItem.disabled,
        label = valueItem.label,
        value = valueItem.value,
        option = valueItem.option;
      var closable = !props.disabled && !itemDisabled;
      var displayLabel = label;
      if (typeof props.maxTagTextLength === 'number') {
        if (typeof label === 'string' || typeof label === 'number') {
          var strLabel = String(displayLabel);
          if (strLabel.length > props.maxTagTextLength) {
            displayLabel = "".concat(strLabel.slice(0, props.maxTagTextLength), "...");
          }
        }
      }
      var onClose = function onClose(event) {
        var _props$onRemove;
        if (event) event.stopPropagation();
        (_props$onRemove = props.onRemove) === null || _props$onRemove === void 0 ? void 0 : _props$onRemove.call(props, valueItem);
      };
      return typeof props.tagRender === 'function' ? customizeRenderSelector(value, displayLabel, itemDisabled, closable, onClose, option) : defaultRenderSelector(label, displayLabel, itemDisabled, closable, onClose);
    }
    function renderRest(omittedValues) {
      var _props$maxTagPlacehol = props.maxTagPlaceholder,
        maxTagPlaceholder = _props$maxTagPlacehol === void 0 ? function (omittedValues) {
          return "+ ".concat(omittedValues.length, " ...");
        } : _props$maxTagPlacehol;
      var content = typeof maxTagPlaceholder === 'function' ? maxTagPlaceholder(omittedValues) : maxTagPlaceholder;
      return defaultRenderSelector(content, content, false);
    }
    return function () {
      var id = props.id,
        prefixCls = props.prefixCls,
        values = props.values,
        open = props.open,
        inputRef = props.inputRef,
        placeholder = props.placeholder,
        disabled = props.disabled,
        autofocus = props.autofocus,
        autocomplete = props.autocomplete,
        activeDescendantId = props.activeDescendantId,
        tabindex = props.tabindex,
        onInputChange = props.onInputChange,
        onInputPaste = props.onInputPaste,
        onInputKeyDown = props.onInputKeyDown,
        onInputMouseDown = props.onInputMouseDown,
        onInputCompositionStart = props.onInputCompositionStart,
        onInputCompositionEnd = props.onInputCompositionEnd;
      // >>> Input Node
      var inputNode = _createVNode("div", {
        "class": "".concat(selectionPrefixCls.value, "-search"),
        "style": {
          width: inputWidth.value + 'px'
        },
        "key": "input"
      }, [_createVNode(Input, {
        "inputRef": inputRef,
        "open": open,
        "prefixCls": prefixCls,
        "id": id,
        "inputElement": null,
        "disabled": disabled,
        "autofocus": autofocus,
        "autocomplete": autocomplete,
        "editable": inputEditable.value,
        "activeDescendantId": activeDescendantId,
        "value": inputValue.value,
        "onKeydown": onInputKeyDown,
        "onMousedown": onInputMouseDown,
        "onChange": onInputChange,
        "onPaste": onInputPaste,
        "onCompositionstart": onInputCompositionStart,
        "onCompositionend": onInputCompositionEnd,
        "tabindex": tabindex,
        "attrs": pickAttrs(props, true),
        "onFocus": function onFocus() {
          return focused.value = true;
        },
        "onBlur": function onBlur() {
          return focused.value = false;
        }
      }, null), _createVNode("span", {
        "ref": measureRef,
        "class": "".concat(selectionPrefixCls.value, "-search-mirror"),
        "aria-hidden": true
      }, [inputValue.value, _createTextVNode("\xA0")])]);
      // >>> Selections
      var selectionNode = _createVNode(Overflow, {
        "prefixCls": "".concat(selectionPrefixCls.value, "-overflow"),
        "data": values,
        "renderItem": renderItem,
        "renderRest": renderRest,
        "suffix": inputNode,
        "itemKey": "key",
        "maxCount": props.maxTagCount,
        "key": "overflow"
      }, null);
      return _createVNode(_Fragment, null, [selectionNode, !values.length && !inputValue.value && _createVNode("span", {
        "class": "".concat(selectionPrefixCls.value, "-placeholder")
      }, [placeholder])]);
    };
  }
});
export default SelectSelector;