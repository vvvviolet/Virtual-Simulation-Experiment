import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { createVNode as _createVNode, resolveDirective as _resolveDirective } from "vue";
import { computed, defineComponent, ref, toRef, toRefs, watchEffect } from 'vue';
import { baseSelectPropsWithoutPrivate } from '../vc-select/BaseSelect';
import omit from '../_util/omit';
import PropTypes from '../_util/vue-types';
import { initDefaultProps } from '../_util/props-util';
import useId from '../vc-select/hooks/useId';
import useMergedState from '../_util/hooks/useMergedState';
import { fillFieldNames, toPathKey, toPathKeys, SHOW_PARENT, SHOW_CHILD } from './utils/commonUtil';
import useEntities from './hooks/useEntities';
import useSearchConfig from './hooks/useSearchConfig';
import useSearchOptions from './hooks/useSearchOptions';
import useMissingValues from './hooks/useMissingValues';
import { formatStrategyValues, toPathOptions } from './utils/treeUtil';
import { conductCheck } from '../vc-tree/utils/conductUtil';
import useDisplayValues from './hooks/useDisplayValues';
import { useProvideCascader } from './context';
import OptionList from './OptionList';
import { BaseSelect } from '../vc-select';
import devWarning from '../vc-util/devWarning';
import useMaxLevel from '../vc-tree/useMaxLevel';
export { SHOW_PARENT, SHOW_CHILD };
function baseCascaderProps() {
  return _objectSpread(_objectSpread({}, omit(baseSelectPropsWithoutPrivate(), ['tokenSeparators', 'mode', 'showSearch'])), {}, {
    // MISC
    id: String,
    prefixCls: String,
    fieldNames: Object,
    children: Array,
    // Value
    value: {
      type: [String, Number, Array]
    },
    defaultValue: {
      type: [String, Number, Array]
    },
    changeOnSelect: {
      type: Boolean,
      default: undefined
    },
    displayRender: Function,
    checkable: {
      type: Boolean,
      default: undefined
    },
    showCheckedStrategy: {
      type: String,
      default: SHOW_PARENT
    },
    // Search
    showSearch: {
      type: [Boolean, Object],
      default: undefined
    },
    searchValue: String,
    onSearch: Function,
    // Trigger
    expandTrigger: String,
    // Options
    options: Array,
    /** @private Internal usage. Do not use in your production. */
    dropdownPrefixCls: String,
    loadData: Function,
    // Open
    /** @deprecated Use `open` instead */
    popupVisible: {
      type: Boolean,
      default: undefined
    },
    /** @deprecated Use `dropdownClassName` instead */
    popupClassName: String,
    dropdownClassName: String,
    dropdownMenuColumnStyle: {
      type: Object,
      default: undefined
    },
    /** @deprecated Use `dropdownStyle` instead */
    popupStyle: {
      type: Object,
      default: undefined
    },
    dropdownStyle: {
      type: Object,
      default: undefined
    },
    /** @deprecated Use `placement` instead */
    popupPlacement: String,
    placement: String,
    /** @deprecated Use `onDropdownVisibleChange` instead */
    onPopupVisibleChange: Function,
    onDropdownVisibleChange: Function,
    // Icon
    expandIcon: PropTypes.any,
    loadingIcon: PropTypes.any
  });
}
export function singleCascaderProps() {
  return _objectSpread(_objectSpread({}, baseCascaderProps()), {}, {
    checkable: Boolean,
    onChange: Function
  });
}
export function multipleCascaderProps() {
  return _objectSpread(_objectSpread({}, baseCascaderProps()), {}, {
    checkable: Boolean,
    onChange: Function
  });
}
export function internalCascaderProps() {
  return _objectSpread(_objectSpread({}, baseCascaderProps()), {}, {
    onChange: Function,
    customSlots: Object
  });
}
function isMultipleValue(value) {
  return Array.isArray(value) && Array.isArray(value[0]);
}
function toRawValues(value) {
  if (!value) {
    return [];
  }
  if (isMultipleValue(value)) {
    return value;
  }
  return (value.length === 0 ? [] : [value]).map(function (val) {
    return Array.isArray(val) ? val : [val];
  });
}
export default defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'Cascader',
  inheritAttrs: false,
  props: initDefaultProps(internalCascaderProps(), {}),
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs,
      expose = _ref.expose,
      slots = _ref.slots;
    var mergedId = useId(toRef(props, 'id'));
    var multiple = computed(function () {
      return !!props.checkable;
    });
    // =========================== Values ===========================
    var _useMergedState = useMergedState(props.defaultValue, {
        value: computed(function () {
          return props.value;
        }),
        postState: toRawValues
      }),
      _useMergedState2 = _slicedToArray(_useMergedState, 2),
      rawValues = _useMergedState2[0],
      setRawValues = _useMergedState2[1];
    // ========================= FieldNames =========================
    var mergedFieldNames = computed(function () {
      return fillFieldNames(props.fieldNames);
    });
    // =========================== Option ===========================
    var mergedOptions = computed(function () {
      return props.options || [];
    });
    // Only used in multiple mode, this fn will not call in single mode
    var pathKeyEntities = useEntities(mergedOptions, mergedFieldNames);
    /** Convert path key back to value format */
    var getValueByKeyPath = function getValueByKeyPath(pathKeys) {
      var keyPathEntities = pathKeyEntities.value;
      return pathKeys.map(function (pathKey) {
        var nodes = keyPathEntities[pathKey].nodes;
        return nodes.map(function (node) {
          return node[mergedFieldNames.value.value];
        });
      });
    };
    // =========================== Search ===========================
    var _useMergedState3 = useMergedState('', {
        value: computed(function () {
          return props.searchValue;
        }),
        postState: function postState(search) {
          return search || '';
        }
      }),
      _useMergedState4 = _slicedToArray(_useMergedState3, 2),
      mergedSearchValue = _useMergedState4[0],
      setSearchValue = _useMergedState4[1];
    var onInternalSearch = function onInternalSearch(searchText, info) {
      setSearchValue(searchText);
      if (info.source !== 'blur' && props.onSearch) {
        props.onSearch(searchText);
      }
    };
    var _useSearchConfig = useSearchConfig(toRef(props, 'showSearch')),
      mergedShowSearch = _useSearchConfig.showSearch,
      mergedSearchConfig = _useSearchConfig.searchConfig;
    var searchOptions = useSearchOptions(mergedSearchValue, mergedOptions, mergedFieldNames, computed(function () {
      return props.dropdownPrefixCls || props.prefixCls;
    }), mergedSearchConfig, toRef(props, 'changeOnSelect'));
    // =========================== Values ===========================
    var missingValuesInfo = useMissingValues(mergedOptions, mergedFieldNames, rawValues);
    // Fill `rawValues` with checked conduction values
    var _ref2 = [ref([]), ref([]), ref([])],
      checkedValues = _ref2[0],
      halfCheckedValues = _ref2[1],
      missingCheckedValues = _ref2[2];
    var _useMaxLevel = useMaxLevel(pathKeyEntities),
      maxLevel = _useMaxLevel.maxLevel,
      levelEntities = _useMaxLevel.levelEntities;
    watchEffect(function () {
      var _missingValuesInfo$va = _slicedToArray(missingValuesInfo.value, 2),
        existValues = _missingValuesInfo$va[0],
        missingValues = _missingValuesInfo$va[1];
      if (!multiple.value || !rawValues.value.length) {
        var _ref3 = [existValues, [], missingValues];
        checkedValues.value = _ref3[0];
        halfCheckedValues.value = _ref3[1];
        missingCheckedValues.value = _ref3[2];
        return;
      }
      var keyPathValues = toPathKeys(existValues);
      var keyPathEntities = pathKeyEntities.value;
      var _conductCheck = conductCheck(keyPathValues, true, keyPathEntities, maxLevel.value, levelEntities.value),
        checkedKeys = _conductCheck.checkedKeys,
        halfCheckedKeys = _conductCheck.halfCheckedKeys;
      // Convert key back to value cells
      var _ref4 = [getValueByKeyPath(checkedKeys), getValueByKeyPath(halfCheckedKeys), missingValues];
      checkedValues.value = _ref4[0];
      halfCheckedValues.value = _ref4[1];
      missingCheckedValues.value = _ref4[2];
    });
    var deDuplicatedValues = computed(function () {
      var checkedKeys = toPathKeys(checkedValues.value);
      var deduplicateKeys = formatStrategyValues(checkedKeys, pathKeyEntities.value, props.showCheckedStrategy);
      return [].concat(_toConsumableArray(missingCheckedValues.value), _toConsumableArray(getValueByKeyPath(deduplicateKeys)));
    });
    var displayValues = useDisplayValues(deDuplicatedValues, mergedOptions, mergedFieldNames, multiple, toRef(props, 'displayRender'));
    // =========================== Change ===========================
    var triggerChange = function triggerChange(nextValues) {
      setRawValues(nextValues);
      // Save perf if no need trigger event
      if (props.onChange) {
        var nextRawValues = toRawValues(nextValues);
        var valueOptions = nextRawValues.map(function (valueCells) {
          return toPathOptions(valueCells, mergedOptions.value, mergedFieldNames.value).map(function (valueOpt) {
            return valueOpt.option;
          });
        });
        var triggerValues = multiple.value ? nextRawValues : nextRawValues[0];
        var triggerOptions = multiple.value ? valueOptions : valueOptions[0];
        props.onChange(triggerValues, triggerOptions);
      }
    };
    // =========================== Select ===========================
    var onInternalSelect = function onInternalSelect(valuePath) {
      setSearchValue('');
      if (!multiple.value) {
        triggerChange(valuePath);
      } else {
        // Prepare conduct required info
        var pathKey = toPathKey(valuePath);
        var checkedPathKeys = toPathKeys(checkedValues.value);
        var halfCheckedPathKeys = toPathKeys(halfCheckedValues.value);
        var existInChecked = checkedPathKeys.includes(pathKey);
        var existInMissing = missingCheckedValues.value.some(function (valueCells) {
          return toPathKey(valueCells) === pathKey;
        });
        // Do update
        var nextCheckedValues = checkedValues.value;
        var nextMissingValues = missingCheckedValues.value;
        if (existInMissing && !existInChecked) {
          // Missing value only do filter
          nextMissingValues = missingCheckedValues.value.filter(function (valueCells) {
            return toPathKey(valueCells) !== pathKey;
          });
        } else {
          // Update checked key first
          var nextRawCheckedKeys = existInChecked ? checkedPathKeys.filter(function (key) {
            return key !== pathKey;
          }) : [].concat(_toConsumableArray(checkedPathKeys), [pathKey]);
          // Conduction by selected or not
          var checkedKeys;
          if (existInChecked) {
            var _conductCheck2 = conductCheck(nextRawCheckedKeys, {
              checked: false,
              halfCheckedKeys: halfCheckedPathKeys
            }, pathKeyEntities.value, maxLevel.value, levelEntities.value);
            checkedKeys = _conductCheck2.checkedKeys;
          } else {
            var _conductCheck3 = conductCheck(nextRawCheckedKeys, true, pathKeyEntities.value, maxLevel.value, levelEntities.value);
            checkedKeys = _conductCheck3.checkedKeys;
          }
          // Roll up to parent level keys
          var deDuplicatedKeys = formatStrategyValues(checkedKeys, pathKeyEntities.value, props.showCheckedStrategy);
          nextCheckedValues = getValueByKeyPath(deDuplicatedKeys);
        }
        triggerChange([].concat(_toConsumableArray(nextMissingValues), _toConsumableArray(nextCheckedValues)));
      }
    };
    // Display Value change logic
    var onDisplayValuesChange = function onDisplayValuesChange(_, info) {
      if (info.type === 'clear') {
        triggerChange([]);
        return;
      }
      // Cascader do not support `add` type. Only support `remove`
      var valueCells = info.values[0].valueCells;
      onInternalSelect(valueCells);
    };
    // ============================ Open ============================
    if (process.env.NODE_ENV !== 'production') {
      watchEffect(function () {
        devWarning(!props.onPopupVisibleChange, 'Cascader', '`popupVisibleChange` is deprecated. Please use `dropdownVisibleChange` instead.');
        devWarning(props.popupVisible === undefined, 'Cascader', '`popupVisible` is deprecated. Please use `open` instead.');
        devWarning(props.popupClassName === undefined, 'Cascader', '`popupClassName` is deprecated. Please use `dropdownClassName` instead.');
        devWarning(props.popupPlacement === undefined, 'Cascader', '`popupPlacement` is deprecated. Please use `placement` instead.');
        devWarning(props.popupStyle === undefined, 'Cascader', '`popupStyle` is deprecated. Please use `dropdownStyle` instead.');
      });
    }
    var mergedOpen = computed(function () {
      return props.open !== undefined ? props.open : props.popupVisible;
    });
    var mergedDropdownClassName = computed(function () {
      return props.dropdownClassName || props.popupClassName;
    });
    var mergedDropdownStyle = computed(function () {
      return props.dropdownStyle || props.popupStyle || {};
    });
    var mergedPlacement = computed(function () {
      return props.placement || props.popupPlacement;
    });
    var onInternalDropdownVisibleChange = function onInternalDropdownVisibleChange(nextVisible) {
      var _props$onDropdownVisi, _props$onPopupVisible;
      (_props$onDropdownVisi = props.onDropdownVisibleChange) === null || _props$onDropdownVisi === void 0 ? void 0 : _props$onDropdownVisi.call(props, nextVisible);
      (_props$onPopupVisible = props.onPopupVisibleChange) === null || _props$onPopupVisible === void 0 ? void 0 : _props$onPopupVisible.call(props, nextVisible);
    };
    var _toRefs = toRefs(props),
      changeOnSelect = _toRefs.changeOnSelect,
      checkable = _toRefs.checkable,
      dropdownPrefixCls = _toRefs.dropdownPrefixCls,
      loadData = _toRefs.loadData,
      expandTrigger = _toRefs.expandTrigger,
      expandIcon = _toRefs.expandIcon,
      loadingIcon = _toRefs.loadingIcon,
      dropdownMenuColumnStyle = _toRefs.dropdownMenuColumnStyle,
      customSlots = _toRefs.customSlots;
    useProvideCascader({
      options: mergedOptions,
      fieldNames: mergedFieldNames,
      values: checkedValues,
      halfValues: halfCheckedValues,
      changeOnSelect: changeOnSelect,
      onSelect: onInternalSelect,
      checkable: checkable,
      searchOptions: searchOptions,
      dropdownPrefixCls: dropdownPrefixCls,
      loadData: loadData,
      expandTrigger: expandTrigger,
      expandIcon: expandIcon,
      loadingIcon: loadingIcon,
      dropdownMenuColumnStyle: dropdownMenuColumnStyle,
      customSlots: customSlots
    });
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
      return omit(props, ['id', 'prefixCls', 'fieldNames',
      // Value
      'defaultValue', 'value', 'changeOnSelect', 'onChange', 'displayRender', 'checkable',
      // Search
      'searchValue', 'onSearch', 'showSearch',
      // Trigger
      'expandTrigger',
      // Options
      'options', 'dropdownPrefixCls', 'loadData',
      // Open
      'popupVisible', 'open', 'popupClassName', 'dropdownClassName', 'dropdownMenuColumnStyle', 'popupPlacement', 'placement', 'onDropdownVisibleChange', 'onPopupVisibleChange',
      // Icon
      'expandIcon', 'loadingIcon', 'customSlots', 'showCheckedStrategy',
      // Children
      'children']);
    });
    return function () {
      var emptyOptions = !(mergedSearchValue.value ? searchOptions.value : mergedOptions.value).length;
      var _props$dropdownMatchS = props.dropdownMatchSelectWidth,
        dropdownMatchSelectWidth = _props$dropdownMatchS === void 0 ? false : _props$dropdownMatchS;
      var dropdownStyle =
      // Search to match width
      mergedSearchValue.value && mergedSearchConfig.value.matchInputWidth ||
      // Empty keep the width
      emptyOptions ? {} : {
        minWidth: 'auto'
      };
      return _createVNode(BaseSelect, _objectSpread(_objectSpread(_objectSpread({}, pickProps.value), attrs), {}, {
        "ref": selectRef,
        "id": mergedId,
        "prefixCls": props.prefixCls,
        "dropdownMatchSelectWidth": dropdownMatchSelectWidth,
        "dropdownStyle": _objectSpread(_objectSpread({}, mergedDropdownStyle.value), dropdownStyle),
        "displayValues": displayValues.value,
        "onDisplayValuesChange": onDisplayValuesChange,
        "mode": multiple.value ? 'multiple' : undefined,
        "searchValue": mergedSearchValue.value,
        "onSearch": onInternalSearch,
        "showSearch": mergedShowSearch.value,
        "OptionList": OptionList,
        "emptyOptions": emptyOptions,
        "open": mergedOpen.value,
        "dropdownClassName": mergedDropdownClassName.value,
        "placement": mergedPlacement.value,
        "onDropdownVisibleChange": onInternalDropdownVisibleChange,
        "getRawInputElement": function getRawInputElement() {
          var _slots$default;
          return (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots);
        }
      }), slots);
    };
  }
});