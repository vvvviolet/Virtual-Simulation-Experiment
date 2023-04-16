import { Fragment as _Fragment, createVNode as _createVNode } from "vue";
import pickAttrs from '../../_util/pickAttrs';
import Input from './Input';
import { Fragment, computed, defineComponent, ref, watch } from 'vue';
import PropTypes from '../../_util/vue-types';
import useInjectLegacySelectContext from '../../vc-tree-select/LegacyContext';
var props = {
  inputElement: PropTypes.any,
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
  activeValue: String,
  backfill: {
    type: Boolean,
    default: undefined
  },
  optionLabelRender: Function,
  onInputChange: Function,
  onInputPaste: Function,
  onInputKeyDown: Function,
  onInputMouseDown: Function,
  onInputCompositionStart: Function,
  onInputCompositionEnd: Function
};
var SingleSelector = defineComponent({
  name: 'SingleSelector',
  setup: function setup(props) {
    var inputChanged = ref(false);
    var combobox = computed(function () {
      return props.mode === 'combobox';
    });
    var inputEditable = computed(function () {
      return combobox.value || props.showSearch;
    });
    var inputValue = computed(function () {
      var inputValue = props.searchValue || '';
      if (combobox.value && props.activeValue && !inputChanged.value) {
        inputValue = props.activeValue;
      }
      return inputValue;
    });
    var legacyTreeSelectContext = useInjectLegacySelectContext();
    watch([combobox, function () {
      return props.activeValue;
    }], function () {
      if (combobox.value) {
        inputChanged.value = false;
      }
    }, {
      immediate: true
    });
    // Not show text when closed expect combobox mode
    var hasTextInput = computed(function () {
      return props.mode !== 'combobox' && !props.open && !props.showSearch ? false : !!inputValue.value;
    });
    var title = computed(function () {
      var item = props.values[0];
      return item && (typeof item.label === 'string' || typeof item.label === 'number') ? item.label.toString() : undefined;
    });
    var renderPlaceholder = function renderPlaceholder() {
      if (props.values[0]) {
        return null;
      }
      var hiddenStyle = hasTextInput.value ? {
        visibility: 'hidden'
      } : undefined;
      return _createVNode("span", {
        "class": "".concat(props.prefixCls, "-selection-placeholder"),
        "style": hiddenStyle
      }, [props.placeholder]);
    };
    return function () {
      var _item$key2;
      var inputElement = props.inputElement,
        prefixCls = props.prefixCls,
        id = props.id,
        values = props.values,
        inputRef = props.inputRef,
        disabled = props.disabled,
        autofocus = props.autofocus,
        autocomplete = props.autocomplete,
        activeDescendantId = props.activeDescendantId,
        open = props.open,
        tabindex = props.tabindex,
        optionLabelRender = props.optionLabelRender,
        onInputKeyDown = props.onInputKeyDown,
        onInputMouseDown = props.onInputMouseDown,
        onInputChange = props.onInputChange,
        onInputPaste = props.onInputPaste,
        onInputCompositionStart = props.onInputCompositionStart,
        onInputCompositionEnd = props.onInputCompositionEnd;
      var item = values[0];
      var titleNode = null;
      // custom tree-select title by slot
      // For TreeSelect
      if (item && legacyTreeSelectContext.customSlots) {
        var _item$key, _legacyTreeSelectCont, _originData$slots;
        var key = (_item$key = item.key) !== null && _item$key !== void 0 ? _item$key : item.value;
        var originData = ((_legacyTreeSelectCont = legacyTreeSelectContext.keyEntities[key]) === null || _legacyTreeSelectCont === void 0 ? void 0 : _legacyTreeSelectCont.node) || {};
        titleNode = legacyTreeSelectContext.customSlots[(_originData$slots = originData.slots) === null || _originData$slots === void 0 ? void 0 : _originData$slots.title] || legacyTreeSelectContext.customSlots.title || item.label;
        if (typeof titleNode === 'function') {
          titleNode = titleNode(originData);
        }
        //  else if (treeSelectContext.value.slots.titleRender) {
        //   // 因历史 title 是覆盖逻辑，新增 titleRender，所有的 title 都走一遍 titleRender
        //   titleNode = treeSelectContext.value.slots.titleRender(item.option?.data || {});
        // }
      } else {
        titleNode = optionLabelRender && item ? optionLabelRender(item.option) : item === null || item === void 0 ? void 0 : item.label;
      }
      return _createVNode(_Fragment, null, [_createVNode("span", {
        "class": "".concat(prefixCls, "-selection-search")
      }, [_createVNode(Input, {
        "inputRef": inputRef,
        "prefixCls": prefixCls,
        "id": id,
        "open": open,
        "inputElement": inputElement,
        "disabled": disabled,
        "autofocus": autofocus,
        "autocomplete": autocomplete,
        "editable": inputEditable.value,
        "activeDescendantId": activeDescendantId,
        "value": inputValue.value,
        "onKeydown": onInputKeyDown,
        "onMousedown": onInputMouseDown,
        "onChange": function onChange(e) {
          inputChanged.value = true;
          onInputChange(e);
        },
        "onPaste": onInputPaste,
        "onCompositionstart": onInputCompositionStart,
        "onCompositionend": onInputCompositionEnd,
        "tabindex": tabindex,
        "attrs": pickAttrs(props, true)
      }, null)]), !combobox.value && item && !hasTextInput.value && _createVNode("span", {
        "class": "".concat(prefixCls, "-selection-item"),
        "title": title.value
      }, [_createVNode(_Fragment, {
        "key": (_item$key2 = item.key) !== null && _item$key2 !== void 0 ? _item$key2 : item.value
      }, [titleNode])]), renderPlaceholder()]);
    };
  }
});
SingleSelector.props = props;
SingleSelector.inheritAttrs = false;
export default SingleSelector;