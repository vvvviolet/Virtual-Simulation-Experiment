"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "SHOW_CHILD", {
  enumerable: true,
  get: function get() {
    return _commonUtil.SHOW_CHILD;
  }
});
Object.defineProperty(exports, "SHOW_PARENT", {
  enumerable: true,
  get: function get() {
    return _commonUtil.SHOW_PARENT;
  }
});
exports.default = void 0;
exports.internalCascaderProps = internalCascaderProps;
exports.multipleCascaderProps = multipleCascaderProps;
exports.singleCascaderProps = singleCascaderProps;
var _vue = require("vue");
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _BaseSelect = require("../vc-select/BaseSelect");
var _omit = _interopRequireDefault(require("../_util/omit"));
var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));
var _propsUtil = require("../_util/props-util");
var _useId = _interopRequireDefault(require("../vc-select/hooks/useId"));
var _useMergedState5 = _interopRequireDefault(require("../_util/hooks/useMergedState"));
var _commonUtil = require("./utils/commonUtil");
var _useEntities = _interopRequireDefault(require("./hooks/useEntities"));
var _useSearchConfig2 = _interopRequireDefault(require("./hooks/useSearchConfig"));
var _useSearchOptions = _interopRequireDefault(require("./hooks/useSearchOptions"));
var _useMissingValues = _interopRequireDefault(require("./hooks/useMissingValues"));
var _treeUtil = require("./utils/treeUtil");
var _conductUtil = require("../vc-tree/utils/conductUtil");
var _useDisplayValues = _interopRequireDefault(require("./hooks/useDisplayValues"));
var _context = require("./context");
var _OptionList = _interopRequireDefault(require("./OptionList"));
var _vcSelect = require("../vc-select");
var _devWarning = _interopRequireDefault(require("../vc-util/devWarning"));
var _useMaxLevel2 = _interopRequireDefault(require("../vc-tree/useMaxLevel"));
function baseCascaderProps() {
  return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, (0, _omit.default)((0, _BaseSelect.baseSelectPropsWithoutPrivate)(), ['tokenSeparators', 'mode', 'showSearch'])), {}, {
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
      default: _commonUtil.SHOW_PARENT
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
    expandIcon: _vueTypes.default.any,
    loadingIcon: _vueTypes.default.any
  });
}
function singleCascaderProps() {
  return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, baseCascaderProps()), {}, {
    checkable: Boolean,
    onChange: Function
  });
}
function multipleCascaderProps() {
  return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, baseCascaderProps()), {}, {
    checkable: Boolean,
    onChange: Function
  });
}
function internalCascaderProps() {
  return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, baseCascaderProps()), {}, {
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
var _default = (0, _vue.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  name: 'Cascader',
  inheritAttrs: false,
  props: (0, _propsUtil.initDefaultProps)(internalCascaderProps(), {}),
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs,
      expose = _ref.expose,
      slots = _ref.slots;
    var mergedId = (0, _useId.default)((0, _vue.toRef)(props, 'id'));
    var multiple = (0, _vue.computed)(function () {
      return !!props.checkable;
    });
    // =========================== Values ===========================
    var _useMergedState = (0, _useMergedState5.default)(props.defaultValue, {
        value: (0, _vue.computed)(function () {
          return props.value;
        }),
        postState: toRawValues
      }),
      _useMergedState2 = (0, _slicedToArray2.default)(_useMergedState, 2),
      rawValues = _useMergedState2[0],
      setRawValues = _useMergedState2[1];
    // ========================= FieldNames =========================
    var mergedFieldNames = (0, _vue.computed)(function () {
      return (0, _commonUtil.fillFieldNames)(props.fieldNames);
    });
    // =========================== Option ===========================
    var mergedOptions = (0, _vue.computed)(function () {
      return props.options || [];
    });
    // Only used in multiple mode, this fn will not call in single mode
    var pathKeyEntities = (0, _useEntities.default)(mergedOptions, mergedFieldNames);
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
    var _useMergedState3 = (0, _useMergedState5.default)('', {
        value: (0, _vue.computed)(function () {
          return props.searchValue;
        }),
        postState: function postState(search) {
          return search || '';
        }
      }),
      _useMergedState4 = (0, _slicedToArray2.default)(_useMergedState3, 2),
      mergedSearchValue = _useMergedState4[0],
      setSearchValue = _useMergedState4[1];
    var onInternalSearch = function onInternalSearch(searchText, info) {
      setSearchValue(searchText);
      if (info.source !== 'blur' && props.onSearch) {
        props.onSearch(searchText);
      }
    };
    var _useSearchConfig = (0, _useSearchConfig2.default)((0, _vue.toRef)(props, 'showSearch')),
      mergedShowSearch = _useSearchConfig.showSearch,
      mergedSearchConfig = _useSearchConfig.searchConfig;
    var searchOptions = (0, _useSearchOptions.default)(mergedSearchValue, mergedOptions, mergedFieldNames, (0, _vue.computed)(function () {
      return props.dropdownPrefixCls || props.prefixCls;
    }), mergedSearchConfig, (0, _vue.toRef)(props, 'changeOnSelect'));
    // =========================== Values ===========================
    var missingValuesInfo = (0, _useMissingValues.default)(mergedOptions, mergedFieldNames, rawValues);
    // Fill `rawValues` with checked conduction values
    var _ref2 = [(0, _vue.ref)([]), (0, _vue.ref)([]), (0, _vue.ref)([])],
      checkedValues = _ref2[0],
      halfCheckedValues = _ref2[1],
      missingCheckedValues = _ref2[2];
    var _useMaxLevel = (0, _useMaxLevel2.default)(pathKeyEntities),
      maxLevel = _useMaxLevel.maxLevel,
      levelEntities = _useMaxLevel.levelEntities;
    (0, _vue.watchEffect)(function () {
      var _missingValuesInfo$va = (0, _slicedToArray2.default)(missingValuesInfo.value, 2),
        existValues = _missingValuesInfo$va[0],
        missingValues = _missingValuesInfo$va[1];
      if (!multiple.value || !rawValues.value.length) {
        var _ref3 = [existValues, [], missingValues];
        checkedValues.value = _ref3[0];
        halfCheckedValues.value = _ref3[1];
        missingCheckedValues.value = _ref3[2];
        return;
      }
      var keyPathValues = (0, _commonUtil.toPathKeys)(existValues);
      var keyPathEntities = pathKeyEntities.value;
      var _conductCheck = (0, _conductUtil.conductCheck)(keyPathValues, true, keyPathEntities, maxLevel.value, levelEntities.value),
        checkedKeys = _conductCheck.checkedKeys,
        halfCheckedKeys = _conductCheck.halfCheckedKeys;
      // Convert key back to value cells
      var _ref4 = [getValueByKeyPath(checkedKeys), getValueByKeyPath(halfCheckedKeys), missingValues];
      checkedValues.value = _ref4[0];
      halfCheckedValues.value = _ref4[1];
      missingCheckedValues.value = _ref4[2];
    });
    var deDuplicatedValues = (0, _vue.computed)(function () {
      var checkedKeys = (0, _commonUtil.toPathKeys)(checkedValues.value);
      var deduplicateKeys = (0, _treeUtil.formatStrategyValues)(checkedKeys, pathKeyEntities.value, props.showCheckedStrategy);
      return [].concat((0, _toConsumableArray2.default)(missingCheckedValues.value), (0, _toConsumableArray2.default)(getValueByKeyPath(deduplicateKeys)));
    });
    var displayValues = (0, _useDisplayValues.default)(deDuplicatedValues, mergedOptions, mergedFieldNames, multiple, (0, _vue.toRef)(props, 'displayRender'));
    // =========================== Change ===========================
    var triggerChange = function triggerChange(nextValues) {
      setRawValues(nextValues);
      // Save perf if no need trigger event
      if (props.onChange) {
        var nextRawValues = toRawValues(nextValues);
        var valueOptions = nextRawValues.map(function (valueCells) {
          return (0, _treeUtil.toPathOptions)(valueCells, mergedOptions.value, mergedFieldNames.value).map(function (valueOpt) {
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
        var pathKey = (0, _commonUtil.toPathKey)(valuePath);
        var checkedPathKeys = (0, _commonUtil.toPathKeys)(checkedValues.value);
        var halfCheckedPathKeys = (0, _commonUtil.toPathKeys)(halfCheckedValues.value);
        var existInChecked = checkedPathKeys.includes(pathKey);
        var existInMissing = missingCheckedValues.value.some(function (valueCells) {
          return (0, _commonUtil.toPathKey)(valueCells) === pathKey;
        });
        // Do update
        var nextCheckedValues = checkedValues.value;
        var nextMissingValues = missingCheckedValues.value;
        if (existInMissing && !existInChecked) {
          // Missing value only do filter
          nextMissingValues = missingCheckedValues.value.filter(function (valueCells) {
            return (0, _commonUtil.toPathKey)(valueCells) !== pathKey;
          });
        } else {
          // Update checked key first
          var nextRawCheckedKeys = existInChecked ? checkedPathKeys.filter(function (key) {
            return key !== pathKey;
          }) : [].concat((0, _toConsumableArray2.default)(checkedPathKeys), [pathKey]);
          // Conduction by selected or not
          var checkedKeys;
          if (existInChecked) {
            var _conductCheck2 = (0, _conductUtil.conductCheck)(nextRawCheckedKeys, {
              checked: false,
              halfCheckedKeys: halfCheckedPathKeys
            }, pathKeyEntities.value, maxLevel.value, levelEntities.value);
            checkedKeys = _conductCheck2.checkedKeys;
          } else {
            var _conductCheck3 = (0, _conductUtil.conductCheck)(nextRawCheckedKeys, true, pathKeyEntities.value, maxLevel.value, levelEntities.value);
            checkedKeys = _conductCheck3.checkedKeys;
          }
          // Roll up to parent level keys
          var deDuplicatedKeys = (0, _treeUtil.formatStrategyValues)(checkedKeys, pathKeyEntities.value, props.showCheckedStrategy);
          nextCheckedValues = getValueByKeyPath(deDuplicatedKeys);
        }
        triggerChange([].concat((0, _toConsumableArray2.default)(nextMissingValues), (0, _toConsumableArray2.default)(nextCheckedValues)));
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
      (0, _vue.watchEffect)(function () {
        (0, _devWarning.default)(!props.onPopupVisibleChange, 'Cascader', '`popupVisibleChange` is deprecated. Please use `dropdownVisibleChange` instead.');
        (0, _devWarning.default)(props.popupVisible === undefined, 'Cascader', '`popupVisible` is deprecated. Please use `open` instead.');
        (0, _devWarning.default)(props.popupClassName === undefined, 'Cascader', '`popupClassName` is deprecated. Please use `dropdownClassName` instead.');
        (0, _devWarning.default)(props.popupPlacement === undefined, 'Cascader', '`popupPlacement` is deprecated. Please use `placement` instead.');
        (0, _devWarning.default)(props.popupStyle === undefined, 'Cascader', '`popupStyle` is deprecated. Please use `dropdownStyle` instead.');
      });
    }
    var mergedOpen = (0, _vue.computed)(function () {
      return props.open !== undefined ? props.open : props.popupVisible;
    });
    var mergedDropdownClassName = (0, _vue.computed)(function () {
      return props.dropdownClassName || props.popupClassName;
    });
    var mergedDropdownStyle = (0, _vue.computed)(function () {
      return props.dropdownStyle || props.popupStyle || {};
    });
    var mergedPlacement = (0, _vue.computed)(function () {
      return props.placement || props.popupPlacement;
    });
    var onInternalDropdownVisibleChange = function onInternalDropdownVisibleChange(nextVisible) {
      var _props$onDropdownVisi, _props$onPopupVisible;
      (_props$onDropdownVisi = props.onDropdownVisibleChange) === null || _props$onDropdownVisi === void 0 ? void 0 : _props$onDropdownVisi.call(props, nextVisible);
      (_props$onPopupVisible = props.onPopupVisibleChange) === null || _props$onPopupVisible === void 0 ? void 0 : _props$onPopupVisible.call(props, nextVisible);
    };
    var _toRefs = (0, _vue.toRefs)(props),
      changeOnSelect = _toRefs.changeOnSelect,
      checkable = _toRefs.checkable,
      dropdownPrefixCls = _toRefs.dropdownPrefixCls,
      loadData = _toRefs.loadData,
      expandTrigger = _toRefs.expandTrigger,
      expandIcon = _toRefs.expandIcon,
      loadingIcon = _toRefs.loadingIcon,
      dropdownMenuColumnStyle = _toRefs.dropdownMenuColumnStyle,
      customSlots = _toRefs.customSlots;
    (0, _context.useProvideCascader)({
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
    var selectRef = (0, _vue.ref)();
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
    var pickProps = (0, _vue.computed)(function () {
      return (0, _omit.default)(props, ['id', 'prefixCls', 'fieldNames',
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
      return (0, _vue.createVNode)(_vcSelect.BaseSelect, (0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({}, pickProps.value), attrs), {}, {
        "ref": selectRef,
        "id": mergedId,
        "prefixCls": props.prefixCls,
        "dropdownMatchSelectWidth": dropdownMatchSelectWidth,
        "dropdownStyle": (0, _objectSpread2.default)((0, _objectSpread2.default)({}, mergedDropdownStyle.value), dropdownStyle),
        "displayValues": displayValues.value,
        "onDisplayValuesChange": onDisplayValuesChange,
        "mode": multiple.value ? 'multiple' : undefined,
        "searchValue": mergedSearchValue.value,
        "onSearch": onInternalSearch,
        "showSearch": mergedShowSearch.value,
        "OptionList": _OptionList.default,
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
exports.default = _default;