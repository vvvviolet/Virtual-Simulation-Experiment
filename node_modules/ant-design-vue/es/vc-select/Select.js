import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _typeof from "@babel/runtime/helpers/esm/typeof";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { createVNode as _createVNode, resolveDirective as _resolveDirective } from "vue";
/**
 * To match accessibility requirement, we always provide an input in the component.
 * Other element will not set `tabindex` to avoid `onBlur` sequence problem.
 * For focused select, we set `aria-live="polite"` to update the accessibility content.
 *
 * ref:
 * - keyboard: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/listbox_role#Keyboard_interactions
 *
 * New api:
 * - listHeight
 * - listItemHeight
 * - component
 *
 * Remove deprecated api:
 * - multiple
 * - tags
 * - combobox
 * - firstActiveValue
 * - dropdownMenuStyle
 * - openClassName (Not list in api)
 *
 * Update:
 * - `backfill` only support `combobox` mode
 * - `combobox` mode not support `labelInValue` since it's meaningless
 * - `getInputElement` only support `combobox` mode
 * - `onChange` return OptionData instead of ReactNode
 * - `filterOption` `onChange` `onSelect` accept OptionData instead of ReactNode
 * - `combobox` mode trigger `onChange` will get `undefined` if no `value` match in Option
 * - `combobox` mode not support `optionLabelProp`
 */
import BaseSelect, { baseSelectPropsWithoutPrivate, isMultiple } from './BaseSelect';
import OptionList from './OptionList';
import useOptions from './hooks/useOptions';
import { useProvideSelectProps } from './SelectContext';
import useId from './hooks/useId';
import { fillFieldNames, flattenOptions, injectPropsWithOption } from './utils/valueUtil';
import warningProps from './utils/warningPropsUtil';
import { toArray } from './utils/commonUtil';
import useFilterOptions from './hooks/useFilterOptions';
import useCache from './hooks/useCache';
import { computed, defineComponent, ref, shallowRef, toRef, watchEffect } from 'vue';
import PropTypes from '../_util/vue-types';
import { initDefaultProps } from '../_util/props-util';
import useMergedState from '../_util/hooks/useMergedState';
import useState from '../_util/hooks/useState';
import { toReactive } from '../_util/toReactive';
import omit from '../_util/omit';
var OMIT_DOM_PROPS = ['inputValue'];
export function selectProps() {
  return _objectSpread(_objectSpread({}, baseSelectPropsWithoutPrivate()), {}, {
    prefixCls: String,
    id: String,
    backfill: {
      type: Boolean,
      default: undefined
    },
    // >>> Field Names
    fieldNames: Object,
    // >>> Search
    /** @deprecated Use `searchValue` instead */
    inputValue: String,
    searchValue: String,
    onSearch: Function,
    autoClearSearchValue: {
      type: Boolean,
      default: undefined
    },
    // >>> Select
    onSelect: Function,
    onDeselect: Function,
    // >>> Options
    /**
     * In Select, `false` means do nothing.
     * In TreeSelect, `false` will highlight match item.
     * It's by design.
     */
    filterOption: {
      type: [Boolean, Function],
      default: undefined
    },
    filterSort: Function,
    optionFilterProp: String,
    optionLabelProp: String,
    options: Array,
    defaultActiveFirstOption: {
      type: Boolean,
      default: undefined
    },
    virtual: {
      type: Boolean,
      default: undefined
    },
    listHeight: Number,
    listItemHeight: Number,
    // >>> Icon
    menuItemSelectedIcon: PropTypes.any,
    mode: String,
    labelInValue: {
      type: Boolean,
      default: undefined
    },
    value: PropTypes.any,
    defaultValue: PropTypes.any,
    onChange: Function,
    children: Array
  });
}
function isRawValue(value) {
  return !value || _typeof(value) !== 'object';
}
export default defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'Select',
  inheritAttrs: false,
  props: initDefaultProps(selectProps(), {
    prefixCls: 'vc-select',
    autoClearSearchValue: true,
    listHeight: 200,
    listItemHeight: 20,
    dropdownMatchSelectWidth: true
  }),
  setup: function setup(props, _ref) {
    var expose = _ref.expose,
      attrs = _ref.attrs,
      slots = _ref.slots;
    var mergedId = useId(toRef(props, 'id'));
    var multiple = computed(function () {
      return isMultiple(props.mode);
    });
    var childrenAsData = computed(function () {
      return !!(!props.options && props.children);
    });
    var mergedFilterOption = computed(function () {
      if (props.filterOption === undefined && props.mode === 'combobox') {
        return false;
      }
      return props.filterOption;
    });
    // ========================= FieldNames =========================
    var mergedFieldNames = computed(function () {
      return fillFieldNames(props.fieldNames, childrenAsData.value);
    });
    // =========================== Search ===========================
    var _useMergedState = useMergedState('', {
        value: computed(function () {
          return props.searchValue !== undefined ? props.searchValue : props.inputValue;
        }),
        postState: function postState(search) {
          return search || '';
        }
      }),
      _useMergedState2 = _slicedToArray(_useMergedState, 2),
      mergedSearchValue = _useMergedState2[0],
      setSearchValue = _useMergedState2[1];
    // =========================== Option ===========================
    var parsedOptions = useOptions(toRef(props, 'options'), toRef(props, 'children'), mergedFieldNames);
    var valueOptions = parsedOptions.valueOptions,
      labelOptions = parsedOptions.labelOptions,
      mergedOptions = parsedOptions.options;
    // ========================= Wrap Value =========================
    var convert2LabelValues = function convert2LabelValues(draftValues) {
      // Convert to array
      var valueList = toArray(draftValues);
      // Convert to labelInValue type
      return valueList.map(function (val) {
        var rawValue;
        var rawLabel;
        var rawKey;
        var rawDisabled;
        // Fill label & value
        if (isRawValue(val)) {
          rawValue = val;
        } else {
          var _val$value;
          rawKey = val.key;
          rawLabel = val.label;
          rawValue = (_val$value = val.value) !== null && _val$value !== void 0 ? _val$value : rawKey;
        }
        var option = valueOptions.value.get(rawValue);
        if (option) {
          var _option$key;
          // Fill missing props
          if (rawLabel === undefined) rawLabel = option === null || option === void 0 ? void 0 : option[props.optionLabelProp || mergedFieldNames.value.label];
          if (rawKey === undefined) rawKey = (_option$key = option === null || option === void 0 ? void 0 : option.key) !== null && _option$key !== void 0 ? _option$key : rawValue;
          rawDisabled = option === null || option === void 0 ? void 0 : option.disabled;
          // Warning if label not same as provided
          // if (process.env.NODE_ENV !== 'production' && !isRawValue(val)) {
          //   const optionLabel = option?.[mergedFieldNames.value.label];
          //   if (optionLabel !== undefined && optionLabel !== rawLabel) {
          //     warning(false, '`label` of `value` is not same as `label` in Select options.');
          //   }
          // }
        }

        return {
          label: rawLabel,
          value: rawValue,
          key: rawKey,
          disabled: rawDisabled,
          option: option
        };
      });
    };
    // =========================== Values ===========================
    var _useMergedState3 = useMergedState(props.defaultValue, {
        value: toRef(props, 'value')
      }),
      _useMergedState4 = _slicedToArray(_useMergedState3, 2),
      internalValue = _useMergedState4[0],
      setInternalValue = _useMergedState4[1];
    // Merged value with LabelValueType
    var rawLabeledValues = computed(function () {
      var _values$;
      var values = convert2LabelValues(internalValue.value);
      // combobox no need save value when it's empty
      if (props.mode === 'combobox' && !((_values$ = values[0]) !== null && _values$ !== void 0 && _values$.value)) {
        return [];
      }
      return values;
    });
    // Fill label with cache to avoid option remove
    var _useCache = useCache(rawLabeledValues, valueOptions),
      _useCache2 = _slicedToArray(_useCache, 2),
      mergedValues = _useCache2[0],
      getMixedOption = _useCache2[1];
    var displayValues = computed(function () {
      // `null` need show as placeholder instead
      // https://github.com/ant-design/ant-design/issues/25057
      if (!props.mode && mergedValues.value.length === 1) {
        var firstValue = mergedValues.value[0];
        if (firstValue.value === null && (firstValue.label === null || firstValue.label === undefined)) {
          return [];
        }
      }
      return mergedValues.value.map(function (item) {
        var _ref2;
        return _objectSpread(_objectSpread({}, item), {}, {
          label: (_ref2 = typeof item.label === 'function' ? item.label() : item.label) !== null && _ref2 !== void 0 ? _ref2 : item.value
        });
      });
    });
    /** Convert `displayValues` to raw value type set */
    var rawValues = computed(function () {
      return new Set(mergedValues.value.map(function (val) {
        return val.value;
      }));
    });
    watchEffect(function () {
      if (props.mode === 'combobox') {
        var _mergedValues$value$;
        var strValue = (_mergedValues$value$ = mergedValues.value[0]) === null || _mergedValues$value$ === void 0 ? void 0 : _mergedValues$value$.value;
        if (strValue !== undefined && strValue !== null) {
          setSearchValue(String(strValue));
        }
      }
    }, {
      flush: 'post'
    });
    // ======================= Display Option =======================
    // Create a placeholder item if not exist in `options`
    var createTagOption = function createTagOption(val, label) {
      var _ref3;
      var mergedLabel = label !== null && label !== void 0 ? label : val;
      return _ref3 = {}, _defineProperty(_ref3, mergedFieldNames.value.value, val), _defineProperty(_ref3, mergedFieldNames.value.label, mergedLabel), _ref3;
    };
    // Fill tag as option if mode is `tags`
    var filledTagOptions = shallowRef();
    watchEffect(function () {
      if (props.mode !== 'tags') {
        filledTagOptions.value = mergedOptions.value;
        return;
      }
      // >>> Tag mode
      var cloneOptions = mergedOptions.value.slice();
      // Check if value exist in options (include new patch item)
      var existOptions = function existOptions(val) {
        return valueOptions.value.has(val);
      };
      // Fill current value as option
      _toConsumableArray(mergedValues.value).sort(function (a, b) {
        return a.value < b.value ? -1 : 1;
      }).forEach(function (item) {
        var val = item.value;
        if (!existOptions(val)) {
          cloneOptions.push(createTagOption(val, item.label));
        }
      });
      filledTagOptions.value = cloneOptions;
    });
    var filteredOptions = useFilterOptions(filledTagOptions, mergedFieldNames, mergedSearchValue, mergedFilterOption, toRef(props, 'optionFilterProp'));
    // Fill options with search value if needed
    var filledSearchOptions = computed(function () {
      if (props.mode !== 'tags' || !mergedSearchValue.value || filteredOptions.value.some(function (item) {
        return item[props.optionFilterProp || 'value'] === mergedSearchValue.value;
      })) {
        return filteredOptions.value;
      }
      // Fill search value as option
      return [createTagOption(mergedSearchValue.value)].concat(_toConsumableArray(filteredOptions.value));
    });
    var orderedFilteredOptions = computed(function () {
      if (!props.filterSort) {
        return filledSearchOptions.value;
      }
      return _toConsumableArray(filledSearchOptions.value).sort(function (a, b) {
        return props.filterSort(a, b);
      });
    });
    var displayOptions = computed(function () {
      return flattenOptions(orderedFilteredOptions.value, {
        fieldNames: mergedFieldNames.value,
        childrenAsData: childrenAsData.value
      });
    });
    // =========================== Change ===========================
    var triggerChange = function triggerChange(values) {
      var labeledValues = convert2LabelValues(values);
      setInternalValue(labeledValues);
      if (props.onChange && (
      // Trigger event only when value changed
      labeledValues.length !== mergedValues.value.length || labeledValues.some(function (newVal, index) {
        var _mergedValues$value$i;
        return ((_mergedValues$value$i = mergedValues.value[index]) === null || _mergedValues$value$i === void 0 ? void 0 : _mergedValues$value$i.value) !== (newVal === null || newVal === void 0 ? void 0 : newVal.value);
      }))) {
        var returnValues = props.labelInValue ? labeledValues.map(function (v) {
          return _objectSpread(_objectSpread({}, v), {}, {
            originLabel: v.label,
            label: typeof v.label === 'function' ? v.label() : v.label
          });
        }) : labeledValues.map(function (v) {
          return v.value;
        });
        var returnOptions = labeledValues.map(function (v) {
          return injectPropsWithOption(getMixedOption(v.value));
        });
        props.onChange(
        // Value
        multiple.value ? returnValues : returnValues[0],
        // Option
        multiple.value ? returnOptions : returnOptions[0]);
      }
    };
    // ======================= Accessibility ========================
    var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      activeValue = _useState2[0],
      setActiveValue = _useState2[1];
    var _useState3 = useState(0),
      _useState4 = _slicedToArray(_useState3, 2),
      accessibilityIndex = _useState4[0],
      setAccessibilityIndex = _useState4[1];
    var mergedDefaultActiveFirstOption = computed(function () {
      return props.defaultActiveFirstOption !== undefined ? props.defaultActiveFirstOption : props.mode !== 'combobox';
    });
    var onActiveValue = function onActiveValue(active, index) {
      var _ref4 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
        _ref4$source = _ref4.source,
        source = _ref4$source === void 0 ? 'keyboard' : _ref4$source;
      setAccessibilityIndex(index);
      if (props.backfill && props.mode === 'combobox' && active !== null && source === 'keyboard') {
        setActiveValue(String(active));
      }
    };
    // ========================= OptionList =========================
    var triggerSelect = function triggerSelect(val, selected) {
      var getSelectEnt = function getSelectEnt() {
        var _option$key2;
        var option = getMixedOption(val);
        var originLabel = option === null || option === void 0 ? void 0 : option[mergedFieldNames.value.label];
        return [props.labelInValue ? {
          label: typeof originLabel === 'function' ? originLabel() : originLabel,
          originLabel: originLabel,
          value: val,
          key: (_option$key2 = option === null || option === void 0 ? void 0 : option.key) !== null && _option$key2 !== void 0 ? _option$key2 : val
        } : val, injectPropsWithOption(option)];
      };
      if (selected && props.onSelect) {
        var _getSelectEnt = getSelectEnt(),
          _getSelectEnt2 = _slicedToArray(_getSelectEnt, 2),
          wrappedValue = _getSelectEnt2[0],
          option = _getSelectEnt2[1];
        props.onSelect(wrappedValue, option);
      } else if (!selected && props.onDeselect) {
        var _getSelectEnt3 = getSelectEnt(),
          _getSelectEnt4 = _slicedToArray(_getSelectEnt3, 2),
          _wrappedValue = _getSelectEnt4[0],
          _option = _getSelectEnt4[1];
        props.onDeselect(_wrappedValue, _option);
      }
    };
    // Used for OptionList selection
    var onInternalSelect = function onInternalSelect(val, info) {
      var cloneValues;
      // Single mode always trigger select only with option list
      var mergedSelect = multiple.value ? info.selected : true;
      if (mergedSelect) {
        cloneValues = multiple.value ? [].concat(_toConsumableArray(mergedValues.value), [val]) : [val];
      } else {
        cloneValues = mergedValues.value.filter(function (v) {
          return v.value !== val;
        });
      }
      triggerChange(cloneValues);
      triggerSelect(val, mergedSelect);
      // Clean search value if single or configured
      if (props.mode === 'combobox') {
        // setSearchValue(String(val));
        setActiveValue('');
      } else if (!multiple.value || props.autoClearSearchValue) {
        setSearchValue('');
        setActiveValue('');
      }
    };
    // ======================= Display Change =======================
    // BaseSelect display values change
    var onDisplayValuesChange = function onDisplayValuesChange(nextValues, info) {
      triggerChange(nextValues);
      if (info.type === 'remove' || info.type === 'clear') {
        info.values.forEach(function (item) {
          triggerSelect(item.value, false);
        });
      }
    };
    // =========================== Search ===========================
    var onInternalSearch = function onInternalSearch(searchText, info) {
      setSearchValue(searchText);
      setActiveValue(null);
      // [Submit] Tag mode should flush input
      if (info.source === 'submit') {
        var formatted = (searchText || '').trim();
        // prevent empty tags from appearing when you click the Enter button
        if (formatted) {
          var newRawValues = Array.from(new Set([].concat(_toConsumableArray(rawValues.value), [formatted])));
          triggerChange(newRawValues);
          triggerSelect(formatted, true);
          setSearchValue('');
        }
        return;
      }
      if (info.source !== 'blur') {
        var _props$onSearch;
        if (props.mode === 'combobox') {
          triggerChange(searchText);
        }
        (_props$onSearch = props.onSearch) === null || _props$onSearch === void 0 ? void 0 : _props$onSearch.call(props, searchText);
      }
    };
    var onInternalSearchSplit = function onInternalSearchSplit(words) {
      var patchValues = words;
      if (props.mode !== 'tags') {
        patchValues = words.map(function (word) {
          var opt = labelOptions.value.get(word);
          return opt === null || opt === void 0 ? void 0 : opt.value;
        }).filter(function (val) {
          return val !== undefined;
        });
      }
      var newRawValues = Array.from(new Set([].concat(_toConsumableArray(rawValues.value), _toConsumableArray(patchValues))));
      triggerChange(newRawValues);
      newRawValues.forEach(function (newRawValue) {
        triggerSelect(newRawValue, true);
      });
    };
    var realVirtual = computed(function () {
      return props.virtual !== false && props.dropdownMatchSelectWidth !== false;
    });
    useProvideSelectProps(toReactive(_objectSpread(_objectSpread({}, parsedOptions), {}, {
      flattenOptions: displayOptions,
      onActiveValue: onActiveValue,
      defaultActiveFirstOption: mergedDefaultActiveFirstOption,
      onSelect: onInternalSelect,
      menuItemSelectedIcon: toRef(props, 'menuItemSelectedIcon'),
      rawValues: rawValues,
      fieldNames: mergedFieldNames,
      virtual: realVirtual,
      listHeight: toRef(props, 'listHeight'),
      listItemHeight: toRef(props, 'listItemHeight'),
      childrenAsData: childrenAsData
    })));
    // ========================== Warning ===========================
    if (process.env.NODE_ENV !== 'production') {
      watchEffect(function () {
        warningProps(props);
      }, {
        flush: 'post'
      });
    }
    var selectRef = ref();
    expose({
      focus: function focus() {
        var _selectRef$value;
        (_selectRef$value = selectRef.value) === null || _selectRef$value === void 0 ? void 0 : _selectRef$value.focus();
      },
      blur: function blur() {
        var _selectRef$value2;
        (_selectRef$value2 = selectRef.value) === null || _selectRef$value2 === void 0 ? void 0 : _selectRef$value2.blur();
      },
      scrollTo: function scrollTo(arg) {
        var _selectRef$value3;
        (_selectRef$value3 = selectRef.value) === null || _selectRef$value3 === void 0 ? void 0 : _selectRef$value3.scrollTo(arg);
      }
    });
    var pickProps = computed(function () {
      return omit(props, ['id', 'mode', 'prefixCls', 'backfill', 'fieldNames',
      // Search
      'inputValue', 'searchValue', 'onSearch', 'autoClearSearchValue',
      // Select
      'onSelect', 'onDeselect', 'dropdownMatchSelectWidth',
      // Options
      'filterOption', 'filterSort', 'optionFilterProp', 'optionLabelProp', 'options', 'children', 'defaultActiveFirstOption', 'menuItemSelectedIcon', 'virtual', 'listHeight', 'listItemHeight',
      // Value
      'value', 'defaultValue', 'labelInValue', 'onChange']);
    });
    return function () {
      return _createVNode(BaseSelect, _objectSpread(_objectSpread(_objectSpread({}, pickProps.value), attrs), {}, {
        "id": mergedId,
        "prefixCls": props.prefixCls,
        "ref": selectRef,
        "omitDomProps": OMIT_DOM_PROPS,
        "mode": props.mode,
        "displayValues": displayValues.value,
        "onDisplayValuesChange": onDisplayValuesChange,
        "searchValue": mergedSearchValue.value,
        "onSearch": onInternalSearch,
        "onSearchSplit": onInternalSearchSplit,
        "dropdownMatchSelectWidth": props.dropdownMatchSelectWidth,
        "OptionList": OptionList,
        "emptyOptions": !displayOptions.value.length,
        "activeValue": activeValue.value,
        "activeDescendantId": "".concat(mergedId, "_list_").concat(accessibilityIndex.value)
      }), slots);
    };
  }
});