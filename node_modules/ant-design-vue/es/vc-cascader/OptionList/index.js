import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import { createVNode as _createVNode } from "vue";
import { isLeaf, toPathKey, toPathKeys, toPathValueStr, scrollIntoParentView } from '../utils/commonUtil';
import useActive from './useActive';
import useKeyboard from './useKeyboard';
import { toPathOptions } from '../utils/treeUtil';
import { computed, defineComponent, onMounted, ref, shallowRef, watch, watchEffect } from 'vue';
import { useBaseProps } from '../../vc-select';
import { useInjectCascader } from '../context';
import Column, { FIX_LABEL } from './Column';
export default defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'OptionList',
  inheritAttrs: false,
  setup: function setup(_props, context) {
    var attrs = context.attrs,
      slots = context.slots;
    var baseProps = useBaseProps();
    var containerRef = ref();
    var rtl = computed(function () {
      return baseProps.direction === 'rtl';
    });
    var _useInjectCascader = useInjectCascader(),
      options = _useInjectCascader.options,
      values = _useInjectCascader.values,
      halfValues = _useInjectCascader.halfValues,
      fieldNames = _useInjectCascader.fieldNames,
      changeOnSelect = _useInjectCascader.changeOnSelect,
      onSelect = _useInjectCascader.onSelect,
      searchOptions = _useInjectCascader.searchOptions,
      dropdownPrefixCls = _useInjectCascader.dropdownPrefixCls,
      loadData = _useInjectCascader.loadData,
      expandTrigger = _useInjectCascader.expandTrigger,
      customSlots = _useInjectCascader.customSlots;
    var mergedPrefixCls = computed(function () {
      return dropdownPrefixCls.value || baseProps.prefixCls;
    });
    // ========================= loadData =========================
    var loadingKeys = shallowRef([]);
    var internalLoadData = function internalLoadData(valueCells) {
      // Do not load when search
      if (!loadData.value || baseProps.searchValue) {
        return;
      }
      var optionList = toPathOptions(valueCells, options.value, fieldNames.value);
      var rawOptions = optionList.map(function (_ref) {
        var option = _ref.option;
        return option;
      });
      var lastOption = rawOptions[rawOptions.length - 1];
      if (lastOption && !isLeaf(lastOption, fieldNames.value)) {
        var pathKey = toPathKey(valueCells);
        loadingKeys.value = [].concat(_toConsumableArray(loadingKeys.value), [pathKey]);
        loadData.value(rawOptions);
      }
    };
    watchEffect(function () {
      if (loadingKeys.value.length) {
        loadingKeys.value.forEach(function (loadingKey) {
          var valueStrCells = toPathValueStr(loadingKey);
          var optionList = toPathOptions(valueStrCells, options.value, fieldNames.value, true).map(function (_ref2) {
            var option = _ref2.option;
            return option;
          });
          var lastOption = optionList[optionList.length - 1];
          if (!lastOption || lastOption[fieldNames.value.children] || isLeaf(lastOption, fieldNames.value)) {
            loadingKeys.value = loadingKeys.value.filter(function (key) {
              return key !== loadingKey;
            });
          }
        });
      }
    });
    // ========================== Values ==========================
    var checkedSet = computed(function () {
      return new Set(toPathKeys(values.value));
    });
    var halfCheckedSet = computed(function () {
      return new Set(toPathKeys(halfValues.value));
    });
    // ====================== Accessibility =======================
    var _useActive = useActive(),
      _useActive2 = _slicedToArray(_useActive, 2),
      activeValueCells = _useActive2[0],
      setActiveValueCells = _useActive2[1];
    // =========================== Path ===========================
    var onPathOpen = function onPathOpen(nextValueCells) {
      setActiveValueCells(nextValueCells);
      // Trigger loadData
      internalLoadData(nextValueCells);
    };
    var isSelectable = function isSelectable(option) {
      var disabled = option.disabled;
      var isMergedLeaf = isLeaf(option, fieldNames.value);
      return !disabled && (isMergedLeaf || changeOnSelect.value || baseProps.multiple);
    };
    var onPathSelect = function onPathSelect(valuePath, leaf) {
      var fromKeyboard = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      onSelect(valuePath);
      if (!baseProps.multiple && (leaf || changeOnSelect.value && (expandTrigger.value === 'hover' || fromKeyboard))) {
        baseProps.toggleOpen(false);
      }
    };
    // ========================== Option ==========================
    var mergedOptions = computed(function () {
      if (baseProps.searchValue) {
        return searchOptions.value;
      }
      return options.value;
    });
    // ========================== Column ==========================
    var optionColumns = computed(function () {
      var optionList = [{
        options: mergedOptions.value
      }];
      var currentList = mergedOptions.value;
      var _loop = function _loop() {
        var activeValueCell = activeValueCells.value[i];
        var currentOption = currentList.find(function (option) {
          return option[fieldNames.value.value] === activeValueCell;
        });
        var subOptions = currentOption === null || currentOption === void 0 ? void 0 : currentOption[fieldNames.value.children];
        if (!(subOptions !== null && subOptions !== void 0 && subOptions.length)) {
          return "break";
        }
        currentList = subOptions;
        optionList.push({
          options: subOptions
        });
      };
      for (var i = 0; i < activeValueCells.value.length; i += 1) {
        var _ret = _loop();
        if (_ret === "break") break;
      }
      return optionList;
    });
    // ========================= Keyboard =========================
    var onKeyboardSelect = function onKeyboardSelect(selectValueCells, option) {
      if (isSelectable(option)) {
        onPathSelect(selectValueCells, isLeaf(option, fieldNames.value), true);
      }
    };
    useKeyboard(context, mergedOptions, fieldNames, activeValueCells, onPathOpen, onKeyboardSelect);
    var onListMouseDown = function onListMouseDown(event) {
      event.preventDefault();
    };
    onMounted(function () {
      watch(activeValueCells, function (cells) {
        for (var i = 0; i < cells.length; i += 1) {
          var _containerRef$value;
          var cellPath = cells.slice(0, i + 1);
          var cellKeyPath = toPathKey(cellPath);
          var ele = (_containerRef$value = containerRef.value) === null || _containerRef$value === void 0 ? void 0 : _containerRef$value.querySelector("li[data-path-key=\"".concat(cellKeyPath.replace(/\\{0,2}"/g, '\\"'), "\"]"));
          if (ele) {
            scrollIntoParentView(ele);
          }
        }
      }, {
        flush: 'post',
        immediate: true
      });
    });
    return function () {
      var _slots$notFoundConten, _customSlots$value$no, _customSlots$value, _optionColumns$value$, _optionColumns$value$2, _ref3, _ref4;
      // ========================== Render ==========================
      var _baseProps$notFoundCo = baseProps.notFoundContent,
        notFoundContent = _baseProps$notFoundCo === void 0 ? ((_slots$notFoundConten = slots.notFoundContent) === null || _slots$notFoundConten === void 0 ? void 0 : _slots$notFoundConten.call(slots)) || ((_customSlots$value$no = (_customSlots$value = customSlots.value).notFoundContent) === null || _customSlots$value$no === void 0 ? void 0 : _customSlots$value$no.call(_customSlots$value)) : _baseProps$notFoundCo,
        multiple = baseProps.multiple,
        toggleOpen = baseProps.toggleOpen;
      // >>>>> Empty
      var isEmpty = !((_optionColumns$value$ = optionColumns.value[0]) !== null && _optionColumns$value$ !== void 0 && (_optionColumns$value$2 = _optionColumns$value$.options) !== null && _optionColumns$value$2 !== void 0 && _optionColumns$value$2.length);
      var emptyList = [(_ref3 = {}, _defineProperty(_ref3, fieldNames.value.value, '__EMPTY__'), _defineProperty(_ref3, FIX_LABEL, notFoundContent), _defineProperty(_ref3, "disabled", true), _ref3)];
      var columnProps = _objectSpread(_objectSpread({}, attrs), {}, {
        multiple: !isEmpty && multiple,
        onSelect: onPathSelect,
        onActive: onPathOpen,
        onToggleOpen: toggleOpen,
        checkedSet: checkedSet.value,
        halfCheckedSet: halfCheckedSet.value,
        loadingKeys: loadingKeys.value,
        isSelectable: isSelectable
      });
      // >>>>> Columns
      var mergedOptionColumns = isEmpty ? [{
        options: emptyList
      }] : optionColumns.value;
      var columnNodes = mergedOptionColumns.map(function (col, index) {
        var prevValuePath = activeValueCells.value.slice(0, index);
        var activeValue = activeValueCells.value[index];
        return _createVNode(Column, _objectSpread(_objectSpread({
          "key": index
        }, columnProps), {}, {
          "prefixCls": mergedPrefixCls.value,
          "options": col.options,
          "prevValuePath": prevValuePath,
          "activeValue": activeValue
        }), null);
      });
      return _createVNode("div", {
        "class": ["".concat(mergedPrefixCls.value, "-menus"), (_ref4 = {}, _defineProperty(_ref4, "".concat(mergedPrefixCls.value, "-menu-empty"), isEmpty), _defineProperty(_ref4, "".concat(mergedPrefixCls.value, "-rtl"), rtl.value), _ref4)],
        "onMousedown": onListMouseDown,
        "ref": containerRef
      }, [columnNodes]);
    };
  }
});