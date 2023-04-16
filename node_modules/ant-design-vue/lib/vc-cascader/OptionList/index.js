"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = require("vue");
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _commonUtil = require("../utils/commonUtil");
var _useActive3 = _interopRequireDefault(require("./useActive"));
var _useKeyboard = _interopRequireDefault(require("./useKeyboard"));
var _treeUtil = require("../utils/treeUtil");
var _vcSelect = require("../../vc-select");
var _context = require("../context");
var _Column = _interopRequireWildcard(require("./Column"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var _default = (0, _vue.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  name: 'OptionList',
  inheritAttrs: false,
  setup: function setup(_props, context) {
    var attrs = context.attrs,
      slots = context.slots;
    var baseProps = (0, _vcSelect.useBaseProps)();
    var containerRef = (0, _vue.ref)();
    var rtl = (0, _vue.computed)(function () {
      return baseProps.direction === 'rtl';
    });
    var _useInjectCascader = (0, _context.useInjectCascader)(),
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
    var mergedPrefixCls = (0, _vue.computed)(function () {
      return dropdownPrefixCls.value || baseProps.prefixCls;
    });
    // ========================= loadData =========================
    var loadingKeys = (0, _vue.shallowRef)([]);
    var internalLoadData = function internalLoadData(valueCells) {
      // Do not load when search
      if (!loadData.value || baseProps.searchValue) {
        return;
      }
      var optionList = (0, _treeUtil.toPathOptions)(valueCells, options.value, fieldNames.value);
      var rawOptions = optionList.map(function (_ref) {
        var option = _ref.option;
        return option;
      });
      var lastOption = rawOptions[rawOptions.length - 1];
      if (lastOption && !(0, _commonUtil.isLeaf)(lastOption, fieldNames.value)) {
        var pathKey = (0, _commonUtil.toPathKey)(valueCells);
        loadingKeys.value = [].concat((0, _toConsumableArray2.default)(loadingKeys.value), [pathKey]);
        loadData.value(rawOptions);
      }
    };
    (0, _vue.watchEffect)(function () {
      if (loadingKeys.value.length) {
        loadingKeys.value.forEach(function (loadingKey) {
          var valueStrCells = (0, _commonUtil.toPathValueStr)(loadingKey);
          var optionList = (0, _treeUtil.toPathOptions)(valueStrCells, options.value, fieldNames.value, true).map(function (_ref2) {
            var option = _ref2.option;
            return option;
          });
          var lastOption = optionList[optionList.length - 1];
          if (!lastOption || lastOption[fieldNames.value.children] || (0, _commonUtil.isLeaf)(lastOption, fieldNames.value)) {
            loadingKeys.value = loadingKeys.value.filter(function (key) {
              return key !== loadingKey;
            });
          }
        });
      }
    });
    // ========================== Values ==========================
    var checkedSet = (0, _vue.computed)(function () {
      return new Set((0, _commonUtil.toPathKeys)(values.value));
    });
    var halfCheckedSet = (0, _vue.computed)(function () {
      return new Set((0, _commonUtil.toPathKeys)(halfValues.value));
    });
    // ====================== Accessibility =======================
    var _useActive = (0, _useActive3.default)(),
      _useActive2 = (0, _slicedToArray2.default)(_useActive, 2),
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
      var isMergedLeaf = (0, _commonUtil.isLeaf)(option, fieldNames.value);
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
    var mergedOptions = (0, _vue.computed)(function () {
      if (baseProps.searchValue) {
        return searchOptions.value;
      }
      return options.value;
    });
    // ========================== Column ==========================
    var optionColumns = (0, _vue.computed)(function () {
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
        onPathSelect(selectValueCells, (0, _commonUtil.isLeaf)(option, fieldNames.value), true);
      }
    };
    (0, _useKeyboard.default)(context, mergedOptions, fieldNames, activeValueCells, onPathOpen, onKeyboardSelect);
    var onListMouseDown = function onListMouseDown(event) {
      event.preventDefault();
    };
    (0, _vue.onMounted)(function () {
      (0, _vue.watch)(activeValueCells, function (cells) {
        for (var i = 0; i < cells.length; i += 1) {
          var _containerRef$value;
          var cellPath = cells.slice(0, i + 1);
          var cellKeyPath = (0, _commonUtil.toPathKey)(cellPath);
          var ele = (_containerRef$value = containerRef.value) === null || _containerRef$value === void 0 ? void 0 : _containerRef$value.querySelector("li[data-path-key=\"".concat(cellKeyPath.replace(/\\{0,2}"/g, '\\"'), "\"]"));
          if (ele) {
            (0, _commonUtil.scrollIntoParentView)(ele);
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
      var emptyList = [(_ref3 = {}, (0, _defineProperty2.default)(_ref3, fieldNames.value.value, '__EMPTY__'), (0, _defineProperty2.default)(_ref3, _Column.FIX_LABEL, notFoundContent), (0, _defineProperty2.default)(_ref3, "disabled", true), _ref3)];
      var columnProps = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, attrs), {}, {
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
        return (0, _vue.createVNode)(_Column.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({
          "key": index
        }, columnProps), {}, {
          "prefixCls": mergedPrefixCls.value,
          "options": col.options,
          "prevValuePath": prevValuePath,
          "activeValue": activeValue
        }), null);
      });
      return (0, _vue.createVNode)("div", {
        "class": ["".concat(mergedPrefixCls.value, "-menus"), (_ref4 = {}, (0, _defineProperty2.default)(_ref4, "".concat(mergedPrefixCls.value, "-menu-empty"), isEmpty), (0, _defineProperty2.default)(_ref4, "".concat(mergedPrefixCls.value, "-rtl"), rtl.value), _ref4)],
        "onMousedown": onListMouseDown,
        "ref": containerRef
      }, [columnNodes]);
    };
  }
});
exports.default = _default;