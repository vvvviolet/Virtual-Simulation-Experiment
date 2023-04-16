import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _typeof from "@babel/runtime/helpers/esm/typeof";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { createVNode as _createVNode, resolveDirective as _resolveDirective } from "vue";
import OptionList from './OptionList';
import { formatStrategyValues, SHOW_CHILD } from './utils/strategyUtil';
import { useProvideSelectContext } from './TreeSelectContext';
import { useProvideLegacySelectContext } from './LegacyContext';
import useTreeData from './hooks/useTreeData';
import { toArray, fillFieldNames, isNil } from './utils/valueUtil';
import useCache from './hooks/useCache';
import useDataEntities from './hooks/useDataEntities';
import { fillAdditionalInfo, fillLegacyProps } from './utils/legacyUtil';
import useCheckedKeys from './hooks/useCheckedKeys';
import useFilterTreeData from './hooks/useFilterTreeData';
import warningProps from './utils/warningPropsUtil';
import { baseSelectPropsWithoutPrivate } from '../vc-select/BaseSelect';
import { computed, defineComponent, ref, shallowRef, toRaw, toRef, toRefs, watchEffect } from 'vue';
import omit from '../_util/omit';
import PropTypes from '../_util/vue-types';
import { BaseSelect } from '../vc-select';
import { initDefaultProps } from '../_util/props-util';
import useId from '../vc-select/hooks/useId';
import useMergedState from '../_util/hooks/useMergedState';
import { conductCheck } from '../vc-tree/utils/conductUtil';
import { warning } from '../vc-util/warning';
import { toReactive } from '../_util/toReactive';
import useMaxLevel from '../vc-tree/useMaxLevel';
export function treeSelectProps() {
  return _objectSpread(_objectSpread({}, omit(baseSelectPropsWithoutPrivate(), ['mode'])), {}, {
    prefixCls: String,
    id: String,
    value: {
      type: [String, Number, Object, Array]
    },
    defaultValue: {
      type: [String, Number, Object, Array]
    },
    onChange: {
      type: Function
    },
    searchValue: String,
    /** @deprecated Use `searchValue` instead */
    inputValue: String,
    onSearch: {
      type: Function
    },
    autoClearSearchValue: {
      type: Boolean,
      default: undefined
    },
    filterTreeNode: {
      type: [Boolean, Function],
      default: undefined
    },
    treeNodeFilterProp: String,
    // >>> Select
    onSelect: Function,
    onDeselect: Function,
    showCheckedStrategy: {
      type: String
    },
    treeNodeLabelProp: String,
    fieldNames: {
      type: Object
    },
    // >>> Mode
    multiple: {
      type: Boolean,
      default: undefined
    },
    treeCheckable: {
      type: Boolean,
      default: undefined
    },
    treeCheckStrictly: {
      type: Boolean,
      default: undefined
    },
    labelInValue: {
      type: Boolean,
      default: undefined
    },
    // >>> Data
    treeData: {
      type: Array
    },
    treeDataSimpleMode: {
      type: [Boolean, Object],
      default: undefined
    },
    loadData: {
      type: Function
    },
    treeLoadedKeys: {
      type: Array
    },
    onTreeLoad: {
      type: Function
    },
    // >>> Expanded
    treeDefaultExpandAll: {
      type: Boolean,
      default: undefined
    },
    treeExpandedKeys: {
      type: Array
    },
    treeDefaultExpandedKeys: {
      type: Array
    },
    onTreeExpand: {
      type: Function
    },
    // >>> Options
    virtual: {
      type: Boolean,
      default: undefined
    },
    listHeight: Number,
    listItemHeight: Number,
    onDropdownVisibleChange: {
      type: Function
    },
    // >>> Tree
    treeLine: {
      type: [Boolean, Object],
      default: undefined
    },
    treeIcon: PropTypes.any,
    showTreeIcon: {
      type: Boolean,
      default: undefined
    },
    switcherIcon: PropTypes.any,
    treeMotion: PropTypes.any,
    children: Array,
    showArrow: {
      type: Boolean,
      default: undefined
    },
    showSearch: {
      type: Boolean,
      default: undefined
    },
    open: {
      type: Boolean,
      default: undefined
    },
    defaultOpen: {
      type: Boolean,
      default: undefined
    },
    disabled: {
      type: Boolean,
      default: undefined
    },
    placeholder: PropTypes.any,
    maxTagPlaceholder: {
      type: Function
    },
    dropdownPopupAlign: PropTypes.any,
    customSlots: Object
  });
}
function isRawValue(value) {
  return !value || _typeof(value) !== 'object';
}
export default defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'TreeSelect',
  inheritAttrs: false,
  props: initDefaultProps(treeSelectProps(), {
    treeNodeFilterProp: 'value',
    autoClearSearchValue: true,
    showCheckedStrategy: SHOW_CHILD,
    listHeight: 200,
    listItemHeight: 20,
    prefixCls: 'vc-tree-select'
  }),
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs,
      expose = _ref.expose,
      slots = _ref.slots;
    var mergedId = useId(toRef(props, 'id'));
    var treeConduction = computed(function () {
      return props.treeCheckable && !props.treeCheckStrictly;
    });
    var mergedCheckable = computed(function () {
      return props.treeCheckable || props.treeCheckStrictly;
    });
    var mergedLabelInValue = computed(function () {
      return props.treeCheckStrictly || props.labelInValue;
    });
    var mergedMultiple = computed(function () {
      return mergedCheckable.value || props.multiple;
    });
    // ========================== Warning ===========================
    if (process.env.NODE_ENV !== 'production') {
      watchEffect(function () {
        warningProps(props);
      });
    }
    // ========================= FieldNames =========================
    var mergedFieldNames = computed(function () {
      return fillFieldNames(props.fieldNames);
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
    var onInternalSearch = function onInternalSearch(searchText) {
      var _props$onSearch;
      setSearchValue(searchText);
      (_props$onSearch = props.onSearch) === null || _props$onSearch === void 0 ? void 0 : _props$onSearch.call(props, searchText);
    };
    // ============================ Data ============================
    // `useTreeData` only do convert of `children` or `simpleMode`.
    // Else will return origin `treeData` for perf consideration.
    // Do not do anything to loop the data.
    var mergedTreeData = useTreeData(toRef(props, 'treeData'), toRef(props, 'children'), toRef(props, 'treeDataSimpleMode'));
    var _useDataEntities = useDataEntities(mergedTreeData, mergedFieldNames),
      keyEntities = _useDataEntities.keyEntities,
      valueEntities = _useDataEntities.valueEntities;
    /** Get `missingRawValues` which not exist in the tree yet */
    var splitRawValues = function splitRawValues(newRawValues) {
      var missingRawValues = [];
      var existRawValues = [];
      // Keep missing value in the cache
      newRawValues.forEach(function (val) {
        if (valueEntities.value.has(val)) {
          existRawValues.push(val);
        } else {
          missingRawValues.push(val);
        }
      });
      return {
        missingRawValues: missingRawValues,
        existRawValues: existRawValues
      };
    };
    // Filtered Tree
    var filteredTreeData = useFilterTreeData(mergedTreeData, mergedSearchValue, {
      fieldNames: mergedFieldNames,
      treeNodeFilterProp: toRef(props, 'treeNodeFilterProp'),
      filterTreeNode: toRef(props, 'filterTreeNode')
    });
    // =========================== Label ============================
    var getLabel = function getLabel(item) {
      if (item) {
        if (props.treeNodeLabelProp) {
          return item[props.treeNodeLabelProp];
        }
        // Loop from fieldNames
        var titleList = mergedFieldNames.value._title;
        for (var i = 0; i < titleList.length; i += 1) {
          var title = item[titleList[i]];
          if (title !== undefined) {
            return title;
          }
        }
      }
    };
    // ========================= Wrap Value =========================
    var toLabeledValues = function toLabeledValues(draftValues) {
      var values = toArray(draftValues);
      return values.map(function (val) {
        if (isRawValue(val)) {
          return {
            value: val
          };
        }
        return val;
      });
    };
    var convert2LabelValues = function convert2LabelValues(draftValues) {
      var values = toLabeledValues(draftValues);
      return values.map(function (item) {
        var rawLabel = item.label;
        var rawValue = item.value,
          rawHalfChecked = item.halfChecked;
        var rawDisabled;
        var entity = valueEntities.value.get(rawValue);
        // Fill missing label & status
        if (entity) {
          var _rawLabel;
          rawLabel = (_rawLabel = rawLabel) !== null && _rawLabel !== void 0 ? _rawLabel : getLabel(entity.node);
          rawDisabled = entity.node.disabled;
        }
        return {
          label: rawLabel,
          value: rawValue,
          halfChecked: rawHalfChecked,
          disabled: rawDisabled
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
    var rawMixedLabeledValues = computed(function () {
      return toLabeledValues(internalValue.value);
    });
    // Split value into full check and half check
    var rawLabeledValues = shallowRef([]);
    var rawHalfLabeledValues = shallowRef([]);
    watchEffect(function () {
      var fullCheckValues = [];
      var halfCheckValues = [];
      rawMixedLabeledValues.value.forEach(function (item) {
        if (item.halfChecked) {
          halfCheckValues.push(item);
        } else {
          fullCheckValues.push(item);
        }
      });
      rawLabeledValues.value = fullCheckValues;
      rawHalfLabeledValues.value = halfCheckValues;
    });
    // const [mergedValues] = useCache(rawLabeledValues);
    var rawValues = computed(function () {
      return rawLabeledValues.value.map(function (item) {
        return item.value;
      });
    });
    var _useMaxLevel = useMaxLevel(keyEntities),
      maxLevel = _useMaxLevel.maxLevel,
      levelEntities = _useMaxLevel.levelEntities;
    // Convert value to key. Will fill missed keys for conduct check.
    var _useCheckedKeys = useCheckedKeys(rawLabeledValues, rawHalfLabeledValues, treeConduction, keyEntities, maxLevel, levelEntities),
      _useCheckedKeys2 = _slicedToArray(_useCheckedKeys, 2),
      rawCheckedValues = _useCheckedKeys2[0],
      rawHalfCheckedValues = _useCheckedKeys2[1];
    // Convert rawCheckedKeys to check strategy related values
    var displayValues = computed(function () {
      // Collect keys which need to show
      var displayKeys = formatStrategyValues(rawCheckedValues.value, props.showCheckedStrategy, keyEntities.value, mergedFieldNames.value);
      // Convert to value and filled with label
      var values = displayKeys.map(function (key) {
        var _keyEntities$value$ke, _keyEntities$value$ke2, _keyEntities$value$ke3;
        return (_keyEntities$value$ke = (_keyEntities$value$ke2 = keyEntities.value[key]) === null || _keyEntities$value$ke2 === void 0 ? void 0 : (_keyEntities$value$ke3 = _keyEntities$value$ke2.node) === null || _keyEntities$value$ke3 === void 0 ? void 0 : _keyEntities$value$ke3[mergedFieldNames.value.value]) !== null && _keyEntities$value$ke !== void 0 ? _keyEntities$value$ke : key;
      });
      // Back fill with origin label
      var labeledValues = values.map(function (val) {
        var targetItem = rawLabeledValues.value.find(function (item) {
          return item.value === val;
        });
        return {
          value: val,
          label: targetItem === null || targetItem === void 0 ? void 0 : targetItem.label
        };
      });
      var rawDisplayValues = convert2LabelValues(labeledValues);
      var firstVal = rawDisplayValues[0];
      if (!mergedMultiple.value && firstVal && isNil(firstVal.value) && isNil(firstVal.label)) {
        return [];
      }
      return rawDisplayValues.map(function (item) {
        var _item$label;
        return _objectSpread(_objectSpread({}, item), {}, {
          label: (_item$label = item.label) !== null && _item$label !== void 0 ? _item$label : item.value
        });
      });
    });
    var _useCache = useCache(displayValues),
      _useCache2 = _slicedToArray(_useCache, 1),
      cachedDisplayValues = _useCache2[0];
    // =========================== Change ===========================
    var triggerChange = function triggerChange(newRawValues, extra, source) {
      var labeledValues = convert2LabelValues(newRawValues);
      setInternalValue(labeledValues);
      // Clean up if needed
      if (props.autoClearSearchValue) {
        setSearchValue('');
      }
      // Generate rest parameters is costly, so only do it when necessary
      if (props.onChange) {
        var eventValues = newRawValues;
        if (treeConduction.value) {
          var formattedKeyList = formatStrategyValues(newRawValues, props.showCheckedStrategy, keyEntities.value, mergedFieldNames.value);
          eventValues = formattedKeyList.map(function (key) {
            var entity = valueEntities.value.get(key);
            return entity ? entity.node[mergedFieldNames.value.value] : key;
          });
        }
        var _ref2 = extra || {
            triggerValue: undefined,
            selected: undefined
          },
          triggerValue = _ref2.triggerValue,
          selected = _ref2.selected;
        var returnRawValues = eventValues;
        // We need fill half check back
        if (props.treeCheckStrictly) {
          var halfValues = rawHalfLabeledValues.value.filter(function (item) {
            return !eventValues.includes(item.value);
          });
          returnRawValues = [].concat(_toConsumableArray(returnRawValues), _toConsumableArray(halfValues));
        }
        var returnLabeledValues = convert2LabelValues(returnRawValues);
        var additionalInfo = {
          // [Legacy] Always return as array contains label & value
          preValue: rawLabeledValues.value,
          triggerValue: triggerValue
        };
        // [Legacy] Fill legacy data if user query.
        // This is expansive that we only fill when user query
        // https://github.com/react-component/tree-select/blob/fe33eb7c27830c9ac70cd1fdb1ebbe7bc679c16a/src/Select.jsx
        var showPosition = true;
        if (props.treeCheckStrictly || source === 'selection' && !selected) {
          showPosition = false;
        }
        fillAdditionalInfo(additionalInfo, triggerValue, newRawValues, mergedTreeData.value, showPosition, mergedFieldNames.value);
        if (mergedCheckable.value) {
          additionalInfo.checked = selected;
        } else {
          additionalInfo.selected = selected;
        }
        var returnValues = mergedLabelInValue.value ? returnLabeledValues : returnLabeledValues.map(function (item) {
          return item.value;
        });
        props.onChange(mergedMultiple.value ? returnValues : returnValues[0], mergedLabelInValue.value ? null : returnLabeledValues.map(function (item) {
          return item.label;
        }), additionalInfo);
      }
    };
    // ========================== Options ===========================
    /** Trigger by option list */
    var onOptionSelect = function onOptionSelect(selectedKey, _ref3) {
      var _node$mergedFieldName;
      var selected = _ref3.selected,
        source = _ref3.source;
      var keyEntitiesValue = toRaw(keyEntities.value);
      var valueEntitiesValue = toRaw(valueEntities.value);
      var entity = keyEntitiesValue[selectedKey];
      var node = entity === null || entity === void 0 ? void 0 : entity.node;
      var selectedValue = (_node$mergedFieldName = node === null || node === void 0 ? void 0 : node[mergedFieldNames.value.value]) !== null && _node$mergedFieldName !== void 0 ? _node$mergedFieldName : selectedKey;
      // Never be falsy but keep it safe
      if (!mergedMultiple.value) {
        // Single mode always set value
        triggerChange([selectedValue], {
          selected: true,
          triggerValue: selectedValue
        }, 'option');
      } else {
        var newRawValues = selected ? [].concat(_toConsumableArray(rawValues.value), [selectedValue]) : rawCheckedValues.value.filter(function (v) {
          return v !== selectedValue;
        });
        // Add keys if tree conduction
        if (treeConduction.value) {
          // Should keep missing values
          var _splitRawValues = splitRawValues(newRawValues),
            missingRawValues = _splitRawValues.missingRawValues,
            existRawValues = _splitRawValues.existRawValues;
          var keyList = existRawValues.map(function (val) {
            return valueEntitiesValue.get(val).key;
          });
          // Conduction by selected or not
          var checkedKeys;
          if (selected) {
            var _conductCheck = conductCheck(keyList, true, keyEntitiesValue, maxLevel.value, levelEntities.value);
            checkedKeys = _conductCheck.checkedKeys;
          } else {
            var _conductCheck2 = conductCheck(keyList, {
              checked: false,
              halfCheckedKeys: rawHalfCheckedValues.value
            }, keyEntitiesValue, maxLevel.value, levelEntities.value);
            checkedKeys = _conductCheck2.checkedKeys;
          }
          // Fill back of keys
          newRawValues = [].concat(_toConsumableArray(missingRawValues), _toConsumableArray(checkedKeys.map(function (key) {
            return keyEntitiesValue[key].node[mergedFieldNames.value.value];
          })));
        }
        triggerChange(newRawValues, {
          selected: selected,
          triggerValue: selectedValue
        }, source || 'option');
      }
      // Trigger select event
      if (selected || !mergedMultiple.value) {
        var _props$onSelect;
        (_props$onSelect = props.onSelect) === null || _props$onSelect === void 0 ? void 0 : _props$onSelect.call(props, selectedValue, fillLegacyProps(node));
      } else {
        var _props$onDeselect;
        (_props$onDeselect = props.onDeselect) === null || _props$onDeselect === void 0 ? void 0 : _props$onDeselect.call(props, selectedValue, fillLegacyProps(node));
      }
    };
    // ========================== Dropdown ==========================
    var onInternalDropdownVisibleChange = function onInternalDropdownVisibleChange(open) {
      if (props.onDropdownVisibleChange) {
        var legacyParam = {};
        Object.defineProperty(legacyParam, 'documentClickClose', {
          get: function get() {
            warning(false, 'Second param of `onDropdownVisibleChange` has been removed.');
            return false;
          }
        });
        props.onDropdownVisibleChange(open, legacyParam);
      }
    };
    // ====================== Display Change ========================
    var onDisplayValuesChange = function onDisplayValuesChange(newValues, info) {
      var newRawValues = newValues.map(function (item) {
        return item.value;
      });
      if (info.type === 'clear') {
        triggerChange(newRawValues, {}, 'selection');
        return;
      }
      // TreeSelect only have multiple mode which means display change only has remove
      if (info.values.length) {
        onOptionSelect(info.values[0].value, {
          selected: false,
          source: 'selection'
        });
      }
    };
    var _toRefs = toRefs(props),
      treeNodeFilterProp = _toRefs.treeNodeFilterProp,
      loadData = _toRefs.loadData,
      treeLoadedKeys = _toRefs.treeLoadedKeys,
      onTreeLoad = _toRefs.onTreeLoad,
      treeDefaultExpandAll = _toRefs.treeDefaultExpandAll,
      treeExpandedKeys = _toRefs.treeExpandedKeys,
      treeDefaultExpandedKeys = _toRefs.treeDefaultExpandedKeys,
      onTreeExpand = _toRefs.onTreeExpand,
      virtual = _toRefs.virtual,
      listHeight = _toRefs.listHeight,
      listItemHeight = _toRefs.listItemHeight,
      treeLine = _toRefs.treeLine,
      treeIcon = _toRefs.treeIcon,
      showTreeIcon = _toRefs.showTreeIcon,
      switcherIcon = _toRefs.switcherIcon,
      treeMotion = _toRefs.treeMotion,
      customSlots = _toRefs.customSlots;
    toRaw;
    useProvideLegacySelectContext(toReactive({
      checkable: mergedCheckable,
      loadData: loadData,
      treeLoadedKeys: treeLoadedKeys,
      onTreeLoad: onTreeLoad,
      checkedKeys: rawCheckedValues,
      halfCheckedKeys: rawHalfCheckedValues,
      treeDefaultExpandAll: treeDefaultExpandAll,
      treeExpandedKeys: treeExpandedKeys,
      treeDefaultExpandedKeys: treeDefaultExpandedKeys,
      onTreeExpand: onTreeExpand,
      treeIcon: treeIcon,
      treeMotion: treeMotion,
      showTreeIcon: showTreeIcon,
      switcherIcon: switcherIcon,
      treeLine: treeLine,
      treeNodeFilterProp: treeNodeFilterProp,
      keyEntities: keyEntities,
      customSlots: customSlots
    }));
    useProvideSelectContext(toReactive({
      virtual: virtual,
      listHeight: listHeight,
      listItemHeight: listItemHeight,
      treeData: filteredTreeData,
      fieldNames: mergedFieldNames,
      onSelect: onOptionSelect
    }));
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
    return function () {
      var _props$dropdownMatchS;
      var restProps = omit(props, ['id', 'prefixCls',
      // Value
      'value', 'defaultValue', 'onChange', 'onSelect', 'onDeselect',
      // Search
      'searchValue', 'inputValue', 'onSearch', 'autoClearSearchValue', 'filterTreeNode', 'treeNodeFilterProp',
      // Selector
      'showCheckedStrategy', 'treeNodeLabelProp',
      //  Mode
      'multiple', 'treeCheckable', 'treeCheckStrictly', 'labelInValue',
      // FieldNames
      'fieldNames',
      // Data
      'treeDataSimpleMode', 'treeData', 'children', 'loadData', 'treeLoadedKeys', 'onTreeLoad',
      // Expanded
      'treeDefaultExpandAll', 'treeExpandedKeys', 'treeDefaultExpandedKeys', 'onTreeExpand',
      // Options
      'virtual', 'listHeight', 'listItemHeight', 'onDropdownVisibleChange',
      // Tree
      'treeLine', 'treeIcon', 'showTreeIcon', 'switcherIcon', 'treeMotion']);
      return _createVNode(BaseSelect, _objectSpread(_objectSpread(_objectSpread({
        "ref": selectRef
      }, attrs), restProps), {}, {
        "id": mergedId,
        "prefixCls": props.prefixCls,
        "mode": mergedMultiple.value ? 'multiple' : undefined,
        "displayValues": cachedDisplayValues.value,
        "onDisplayValuesChange": onDisplayValuesChange,
        "searchValue": mergedSearchValue.value,
        "onSearch": onInternalSearch,
        "OptionList": OptionList,
        "emptyOptions": !mergedTreeData.value.length,
        "onDropdownVisibleChange": onInternalDropdownVisibleChange,
        "tagRender": props.tagRender || slots.tagRender,
        "dropdownMatchSelectWidth": (_props$dropdownMatchS = props.dropdownMatchSelectWidth) !== null && _props$dropdownMatchS !== void 0 ? _props$dropdownMatchS : true
      }), slots);
    };
  }
});