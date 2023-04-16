"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = require("vue");
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _TransBtn = _interopRequireDefault(require("../TransBtn"));
var _Input = _interopRequireDefault(require("./Input"));
var _classNames2 = _interopRequireDefault(require("../../_util/classNames"));
var _pickAttrs = _interopRequireDefault(require("../../_util/pickAttrs"));
var _vueTypes = _interopRequireDefault(require("../../_util/vue-types"));
var _vcOverflow = _interopRequireDefault(require("../../vc-overflow"));
var _LegacyContext = _interopRequireDefault(require("../../vc-tree-select/LegacyContext"));
var props = {
  id: String,
  prefixCls: String,
  values: _vueTypes.default.array,
  open: {
    type: Boolean,
    default: undefined
  },
  searchValue: String,
  inputRef: _vueTypes.default.any,
  placeholder: _vueTypes.default.any,
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
  tabindex: _vueTypes.default.oneOfType([_vueTypes.default.number, _vueTypes.default.string]),
  removeIcon: _vueTypes.default.any,
  choiceTransitionName: String,
  maxTagCount: _vueTypes.default.oneOfType([_vueTypes.default.number, _vueTypes.default.string]),
  maxTagTextLength: Number,
  maxTagPlaceholder: _vueTypes.default.any.def(function () {
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
var SelectSelector = (0, _vue.defineComponent)({
  name: 'MultipleSelectSelector',
  inheritAttrs: false,
  props: props,
  setup: function setup(props) {
    var measureRef = (0, _vue.ref)();
    var inputWidth = (0, _vue.ref)(0);
    var focused = (0, _vue.ref)(false);
    var legacyTreeSelectContext = (0, _LegacyContext.default)();
    var selectionPrefixCls = (0, _vue.computed)(function () {
      return "".concat(props.prefixCls, "-selection");
    });
    // ===================== Search ======================
    var inputValue = (0, _vue.computed)(function () {
      return props.open || props.mode === 'tags' ? props.searchValue : '';
    });
    var inputEditable = (0, _vue.computed)(function () {
      return props.mode === 'tags' || props.showSearch && (props.open || focused.value);
    });
    // We measure width and set to the input immediately
    (0, _vue.onMounted)(function () {
      (0, _vue.watch)(inputValue, function () {
        inputWidth.value = measureRef.value.scrollWidth;
      }, {
        flush: 'post',
        immediate: true
      });
    });
    // ===================== Render ======================
    // >>> Render Selector Node. Includes Item & Rest
    function defaultRenderSelector(title, content, itemDisabled, closable, onClose) {
      return (0, _vue.createVNode)("span", {
        "class": (0, _classNames2.default)("".concat(selectionPrefixCls.value, "-item"), (0, _defineProperty2.default)({}, "".concat(selectionPrefixCls.value, "-item-disabled"), itemDisabled)),
        "title": typeof title === 'string' || typeof title === 'number' ? title.toString() : undefined
      }, [(0, _vue.createVNode)("span", {
        "class": "".concat(selectionPrefixCls.value, "-item-content")
      }, [content]), closable && (0, _vue.createVNode)(_TransBtn.default, {
        "class": "".concat(selectionPrefixCls.value, "-item-remove"),
        "onMousedown": onPreventMouseDown,
        "onClick": onClose,
        "customizeIcon": props.removeIcon
      }, {
        default: function _default() {
          return [(0, _vue.createTextVNode)("\xD7")];
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
      return (0, _vue.createVNode)("span", {
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
      var inputNode = (0, _vue.createVNode)("div", {
        "class": "".concat(selectionPrefixCls.value, "-search"),
        "style": {
          width: inputWidth.value + 'px'
        },
        "key": "input"
      }, [(0, _vue.createVNode)(_Input.default, {
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
        "attrs": (0, _pickAttrs.default)(props, true),
        "onFocus": function onFocus() {
          return focused.value = true;
        },
        "onBlur": function onBlur() {
          return focused.value = false;
        }
      }, null), (0, _vue.createVNode)("span", {
        "ref": measureRef,
        "class": "".concat(selectionPrefixCls.value, "-search-mirror"),
        "aria-hidden": true
      }, [inputValue.value, (0, _vue.createTextVNode)("\xA0")])]);
      // >>> Selections
      var selectionNode = (0, _vue.createVNode)(_vcOverflow.default, {
        "prefixCls": "".concat(selectionPrefixCls.value, "-overflow"),
        "data": values,
        "renderItem": renderItem,
        "renderRest": renderRest,
        "suffix": inputNode,
        "itemKey": "key",
        "maxCount": props.maxTagCount,
        "key": "overflow"
      }, null);
      return (0, _vue.createVNode)(_vue.Fragment, null, [selectionNode, !values.length && !inputValue.value && (0, _vue.createVNode)("span", {
        "class": "".concat(selectionPrefixCls.value, "-placeholder")
      }, [placeholder])]);
    };
  }
});
var _default2 = SelectSelector;
exports.default = _default2;