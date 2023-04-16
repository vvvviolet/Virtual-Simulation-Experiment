"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.baseSelectPropsWithoutPrivate = void 0;
exports.isMultiple = isMultiple;
var _vue = require("vue");
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _valueUtil = require("./utils/valueUtil");
var _SelectTrigger = _interopRequireDefault(require("./SelectTrigger"));
var _Selector = _interopRequireDefault(require("./Selector"));
var _useSelectTriggerControl = _interopRequireDefault(require("./hooks/useSelectTriggerControl"));
var _useDelayReset3 = _interopRequireDefault(require("./hooks/useDelayReset"));
var _TransBtn = _interopRequireDefault(require("./TransBtn"));
var _useLock3 = _interopRequireDefault(require("./hooks/useLock"));
var _useBaseProps = require("./hooks/useBaseProps");
var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));
var _propsUtil = require("../_util/props-util");
var _isMobile = _interopRequireDefault(require("../vc-util/isMobile"));
var _KeyCode = _interopRequireDefault(require("../_util/KeyCode"));
var _toReactive = require("../_util/toReactive");
var _classNames3 = _interopRequireDefault(require("../_util/classNames"));
var _createRef = _interopRequireDefault(require("../_util/createRef"));
var _LegacyContext = _interopRequireDefault(require("../vc-tree-select/LegacyContext"));
var _vnode = require("../_util/vnode");
var _excluded = ["prefixCls", "id", "open", "defaultOpen", "mode", "showSearch", "searchValue", "onSearch", "allowClear", "clearIcon", "showArrow", "inputIcon", "disabled", "loading", "getInputElement", "getPopupContainer", "placement", "animation", "transitionName", "dropdownStyle", "dropdownClassName", "dropdownMatchSelectWidth", "dropdownRender", "dropdownAlign", "showAction", "direction", "tokenSeparators", "tagRender", "optionLabelRender", "onPopupScroll", "onDropdownVisibleChange", "onFocus", "onBlur", "onKeyup", "onKeydown", "onMousedown", "onClear", "omitDomProps", "getRawInputElement", "displayValues", "onDisplayValuesChange", "emptyOptions", "activeDescendantId", "activeValue", "OptionList"];
var DEFAULT_OMIT_PROPS = ['value', 'onChange', 'removeIcon', 'placeholder', 'autofocus', 'maxTagCount', 'maxTagTextLength', 'maxTagPlaceholder', 'choiceTransitionName', 'onInputKeyDown', 'onPopupScroll', 'tabindex', 'OptionList', 'notFoundContent'];
var baseSelectPrivateProps = function baseSelectPrivateProps() {
  return {
    prefixCls: String,
    id: String,
    omitDomProps: Array,
    // >>> Value
    displayValues: Array,
    onDisplayValuesChange: Function,
    // >>> Active
    /** Current dropdown list active item string value */
    activeValue: String,
    /** Link search input with target element */
    activeDescendantId: String,
    onActiveValueChange: Function,
    // >>> Search
    searchValue: String,
    /** Trigger onSearch, return false to prevent trigger open event */
    onSearch: Function,
    /** Trigger when search text match the `tokenSeparators`. Will provide split content */
    onSearchSplit: Function,
    maxLength: Number,
    OptionList: _vueTypes.default.any,
    /** Tell if provided `options` is empty */
    emptyOptions: Boolean
  };
};
var baseSelectPropsWithoutPrivate = function baseSelectPropsWithoutPrivate() {
  return {
    showSearch: {
      type: Boolean,
      default: undefined
    },
    tagRender: {
      type: Function
    },
    optionLabelRender: {
      type: Function
    },
    direction: {
      type: String
    },
    // MISC
    tabindex: Number,
    autofocus: Boolean,
    notFoundContent: _vueTypes.default.any,
    placeholder: _vueTypes.default.any,
    onClear: Function,
    choiceTransitionName: String,
    // >>> Mode
    mode: String,
    // >>> Status
    disabled: {
      type: Boolean,
      default: undefined
    },
    loading: {
      type: Boolean,
      default: undefined
    },
    // >>> Open
    open: {
      type: Boolean,
      default: undefined
    },
    defaultOpen: {
      type: Boolean,
      default: undefined
    },
    onDropdownVisibleChange: {
      type: Function
    },
    // >>> Customize Input
    /** @private Internal usage. Do not use in your production. */
    getInputElement: {
      type: Function
    },
    /** @private Internal usage. Do not use in your production. */
    getRawInputElement: {
      type: Function
    },
    // >>> Selector
    maxTagTextLength: Number,
    maxTagCount: {
      type: [String, Number]
    },
    maxTagPlaceholder: _vueTypes.default.any,
    // >>> Search
    tokenSeparators: {
      type: Array
    },
    // >>> Icons
    allowClear: {
      type: Boolean,
      default: undefined
    },
    showArrow: {
      type: Boolean,
      default: undefined
    },
    inputIcon: _vueTypes.default.any,
    /** Clear all icon */
    clearIcon: _vueTypes.default.any,
    /** Selector remove icon */
    removeIcon: _vueTypes.default.any,
    // >>> Dropdown
    animation: String,
    transitionName: String,
    dropdownStyle: {
      type: Object
    },
    dropdownClassName: String,
    dropdownMatchSelectWidth: {
      type: [Boolean, Number],
      default: undefined
    },
    dropdownRender: {
      type: Function
    },
    dropdownAlign: Object,
    placement: {
      type: String
    },
    getPopupContainer: {
      type: Function
    },
    // >>> Focus
    showAction: {
      type: Array
    },
    onBlur: {
      type: Function
    },
    onFocus: {
      type: Function
    },
    // >>> Rest Events
    onKeyup: Function,
    onKeydown: Function,
    onMousedown: Function,
    onPopupScroll: Function,
    onInputKeyDown: Function,
    onMouseenter: Function,
    onMouseleave: Function,
    onClick: Function
  };
};
exports.baseSelectPropsWithoutPrivate = baseSelectPropsWithoutPrivate;
var baseSelectProps = function baseSelectProps() {
  return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, baseSelectPrivateProps()), baseSelectPropsWithoutPrivate());
};
function isMultiple(mode) {
  return mode === 'tags' || mode === 'multiple';
}
var _default2 = (0, _vue.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  name: 'BaseSelect',
  inheritAttrs: false,
  props: (0, _propsUtil.initDefaultProps)(baseSelectProps(), {
    showAction: [],
    notFoundContent: 'Not Found'
  }),
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs,
      expose = _ref.expose,
      slots = _ref.slots;
    var multiple = (0, _vue.computed)(function () {
      return isMultiple(props.mode);
    });
    var mergedShowSearch = (0, _vue.computed)(function () {
      return props.showSearch !== undefined ? props.showSearch : multiple.value || props.mode === 'combobox';
    });
    var mobile = (0, _vue.ref)(false);
    (0, _vue.onMounted)(function () {
      mobile.value = (0, _isMobile.default)();
    });
    var legacyTreeSelectContext = (0, _LegacyContext.default)();
    // ============================== Refs ==============================
    var containerRef = (0, _vue.ref)(null);
    var selectorDomRef = (0, _createRef.default)();
    var triggerRef = (0, _vue.ref)(null);
    var selectorRef = (0, _vue.ref)(null);
    var listRef = (0, _vue.ref)(null);
    /** Used for component focused management */
    var _useDelayReset = (0, _useDelayReset3.default)(),
      _useDelayReset2 = (0, _slicedToArray2.default)(_useDelayReset, 3),
      mockFocused = _useDelayReset2[0],
      setMockFocused = _useDelayReset2[1],
      cancelSetMockFocused = _useDelayReset2[2];
    var focus = function focus() {
      var _selectorRef$value;
      (_selectorRef$value = selectorRef.value) === null || _selectorRef$value === void 0 ? void 0 : _selectorRef$value.focus();
    };
    var blur = function blur() {
      var _selectorRef$value2;
      (_selectorRef$value2 = selectorRef.value) === null || _selectorRef$value2 === void 0 ? void 0 : _selectorRef$value2.blur();
    };
    expose({
      focus: focus,
      blur: blur,
      scrollTo: function scrollTo(arg) {
        var _listRef$value;
        return (_listRef$value = listRef.value) === null || _listRef$value === void 0 ? void 0 : _listRef$value.scrollTo(arg);
      }
    });
    var mergedSearchValue = (0, _vue.computed)(function () {
      var _props$displayValues$;
      if (props.mode !== 'combobox') {
        return props.searchValue;
      }
      var val = (_props$displayValues$ = props.displayValues[0]) === null || _props$displayValues$ === void 0 ? void 0 : _props$displayValues$.value;
      return typeof val === 'string' || typeof val === 'number' ? String(val) : '';
    });
    // ============================== Open ==============================
    var initOpen = props.open !== undefined ? props.open : props.defaultOpen;
    var innerOpen = (0, _vue.ref)(initOpen);
    var mergedOpen = (0, _vue.ref)(initOpen);
    var setInnerOpen = function setInnerOpen(val) {
      innerOpen.value = props.open !== undefined ? props.open : val;
      mergedOpen.value = innerOpen.value;
    };
    (0, _vue.watch)(function () {
      return props.open;
    }, function () {
      setInnerOpen(props.open);
    });
    // Not trigger `open` in `combobox` when `notFoundContent` is empty
    var emptyListContent = (0, _vue.computed)(function () {
      return !props.notFoundContent && props.emptyOptions;
    });
    (0, _vue.watchEffect)(function () {
      mergedOpen.value = innerOpen.value;
      if (props.disabled || emptyListContent.value && mergedOpen.value && props.mode === 'combobox') {
        mergedOpen.value = false;
      }
    });
    var triggerOpen = (0, _vue.computed)(function () {
      return emptyListContent.value ? false : mergedOpen.value;
    });
    var onToggleOpen = function onToggleOpen(newOpen) {
      var nextOpen = newOpen !== undefined ? newOpen : !mergedOpen.value;
      if (innerOpen.value !== nextOpen && !props.disabled) {
        setInnerOpen(nextOpen);
        if (props.onDropdownVisibleChange) {
          props.onDropdownVisibleChange(nextOpen);
        }
      }
    };
    var tokenWithEnter = (0, _vue.computed)(function () {
      return (props.tokenSeparators || []).some(function (tokenSeparator) {
        return ['\n', '\r\n'].includes(tokenSeparator);
      });
    });
    var onInternalSearch = function onInternalSearch(searchText, fromTyping, isCompositing) {
      var _props$onActiveValueC;
      var ret = true;
      var newSearchText = searchText;
      (_props$onActiveValueC = props.onActiveValueChange) === null || _props$onActiveValueC === void 0 ? void 0 : _props$onActiveValueC.call(props, null);
      // Check if match the `tokenSeparators`
      var patchLabels = isCompositing ? null : (0, _valueUtil.getSeparatedContent)(searchText, props.tokenSeparators);
      // Ignore combobox since it's not split-able
      if (props.mode !== 'combobox' && patchLabels) {
        var _props$onSearchSplit;
        newSearchText = '';
        (_props$onSearchSplit = props.onSearchSplit) === null || _props$onSearchSplit === void 0 ? void 0 : _props$onSearchSplit.call(props, patchLabels);
        // Should close when paste finish
        onToggleOpen(false);
        // Tell Selector that break next actions
        ret = false;
      }
      if (props.onSearch && mergedSearchValue.value !== newSearchText) {
        props.onSearch(newSearchText, {
          source: fromTyping ? 'typing' : 'effect'
        });
      }
      return ret;
    };
    // Only triggered when menu is closed & mode is tags
    // If menu is open, OptionList will take charge
    // If mode isn't tags, press enter is not meaningful when you can't see any option
    var onInternalSearchSubmit = function onInternalSearchSubmit(searchText) {
      var _props$onSearch;
      // prevent empty tags from appearing when you click the Enter button
      if (!searchText || !searchText.trim()) {
        return;
      }
      (_props$onSearch = props.onSearch) === null || _props$onSearch === void 0 ? void 0 : _props$onSearch.call(props, searchText, {
        source: 'submit'
      });
    };
    // Close will clean up single mode search text
    (0, _vue.watch)(mergedOpen, function () {
      if (!mergedOpen.value && !multiple.value && props.mode !== 'combobox') {
        onInternalSearch('', false, false);
      }
    }, {
      immediate: true,
      flush: 'post'
    });
    // ============================ Disabled ============================
    // Close dropdown & remove focus state when disabled change
    (0, _vue.watch)(function () {
      return props.disabled;
    }, function () {
      if (innerOpen.value && !!props.disabled) {
        setInnerOpen(false);
      }
    }, {
      immediate: true
    });
    // ============================ Keyboard ============================
    /**
     * We record input value here to check if can press to clean up by backspace
     * - null: Key is not down, this is reset by key up
     * - true: Search text is empty when first time backspace down
     * - false: Search text is not empty when first time backspace down
     */
    var _useLock = (0, _useLock3.default)(),
      _useLock2 = (0, _slicedToArray2.default)(_useLock, 2),
      getClearLock = _useLock2[0],
      setClearLock = _useLock2[1];
    // KeyDown
    var onInternalKeyDown = function onInternalKeyDown(event) {
      var _props$onKeydown;
      var clearLock = getClearLock();
      var which = event.which;
      if (which === _KeyCode.default.ENTER) {
        // Do not submit form when type in the input
        if (props.mode !== 'combobox') {
          event.preventDefault();
        }
        // We only manage open state here, close logic should handle by list component
        if (!mergedOpen.value) {
          onToggleOpen(true);
        }
      }
      setClearLock(!!mergedSearchValue.value);
      // Remove value by `backspace`
      if (which === _KeyCode.default.BACKSPACE && !clearLock && multiple.value && !mergedSearchValue.value && props.displayValues.length) {
        var cloneDisplayValues = (0, _toConsumableArray2.default)(props.displayValues);
        var removedDisplayValue = null;
        for (var i = cloneDisplayValues.length - 1; i >= 0; i -= 1) {
          var current = cloneDisplayValues[i];
          if (!current.disabled) {
            cloneDisplayValues.splice(i, 1);
            removedDisplayValue = current;
            break;
          }
        }
        if (removedDisplayValue) {
          props.onDisplayValuesChange(cloneDisplayValues, {
            type: 'remove',
            values: [removedDisplayValue]
          });
        }
      }
      for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        rest[_key - 1] = arguments[_key];
      }
      if (mergedOpen.value && listRef.value) {
        var _listRef$value2;
        (_listRef$value2 = listRef.value).onKeydown.apply(_listRef$value2, [event].concat(rest));
      }
      (_props$onKeydown = props.onKeydown) === null || _props$onKeydown === void 0 ? void 0 : _props$onKeydown.call.apply(_props$onKeydown, [props, event].concat(rest));
    };
    // KeyUp
    var onInternalKeyUp = function onInternalKeyUp(event) {
      for (var _len2 = arguments.length, rest = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        rest[_key2 - 1] = arguments[_key2];
      }
      if (mergedOpen.value && listRef.value) {
        var _listRef$value3;
        (_listRef$value3 = listRef.value).onKeyup.apply(_listRef$value3, [event].concat(rest));
      }
      if (props.onKeyup) {
        props.onKeyup.apply(props, [event].concat(rest));
      }
    };
    // ============================ Selector ============================
    var onSelectorRemove = function onSelectorRemove(val) {
      var newValues = props.displayValues.filter(function (i) {
        return i !== val;
      });
      props.onDisplayValuesChange(newValues, {
        type: 'remove',
        values: [val]
      });
    };
    // ========================== Focus / Blur ==========================
    /** Record real focus status */
    var focusRef = (0, _vue.ref)(false);
    var onContainerFocus = function onContainerFocus() {
      setMockFocused(true);
      if (!props.disabled) {
        if (props.onFocus && !focusRef.value) {
          props.onFocus.apply(props, arguments);
        }
        // `showAction` should handle `focus` if set
        if (props.showAction && props.showAction.includes('focus')) {
          onToggleOpen(true);
        }
      }
      focusRef.value = true;
    };
    var onContainerBlur = function onContainerBlur() {
      setMockFocused(false, function () {
        focusRef.value = false;
        onToggleOpen(false);
      });
      if (props.disabled) {
        return;
      }
      var searchVal = mergedSearchValue.value;
      if (searchVal) {
        // `tags` mode should move `searchValue` into values
        if (props.mode === 'tags') {
          props.onSearch(searchVal, {
            source: 'submit'
          });
        } else if (props.mode === 'multiple') {
          // `multiple` mode only clean the search value but not trigger event
          props.onSearch('', {
            source: 'blur'
          });
        }
      }
      if (props.onBlur) {
        props.onBlur.apply(props, arguments);
      }
    };
    (0, _vue.provide)('VCSelectContainerEvent', {
      focus: onContainerFocus,
      blur: onContainerBlur
    });
    // Give focus back of Select
    var activeTimeoutIds = [];
    (0, _vue.onMounted)(function () {
      activeTimeoutIds.forEach(function (timeoutId) {
        return clearTimeout(timeoutId);
      });
      activeTimeoutIds.splice(0, activeTimeoutIds.length);
    });
    (0, _vue.onBeforeUnmount)(function () {
      activeTimeoutIds.forEach(function (timeoutId) {
        return clearTimeout(timeoutId);
      });
      activeTimeoutIds.splice(0, activeTimeoutIds.length);
    });
    var onInternalMouseDown = function onInternalMouseDown(event) {
      var _triggerRef$value, _props$onMousedown;
      var target = event.target;
      var popupElement = (_triggerRef$value = triggerRef.value) === null || _triggerRef$value === void 0 ? void 0 : _triggerRef$value.getPopupElement();
      // We should give focus back to selector if clicked item is not focusable
      if (popupElement && popupElement.contains(target)) {
        var timeoutId = setTimeout(function () {
          var index = activeTimeoutIds.indexOf(timeoutId);
          if (index !== -1) {
            activeTimeoutIds.splice(index, 1);
          }
          cancelSetMockFocused();
          if (!mobile.value && !popupElement.contains(document.activeElement)) {
            var _selectorRef$value3;
            (_selectorRef$value3 = selectorRef.value) === null || _selectorRef$value3 === void 0 ? void 0 : _selectorRef$value3.focus();
          }
        });
        activeTimeoutIds.push(timeoutId);
      }
      for (var _len3 = arguments.length, restArgs = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        restArgs[_key3 - 1] = arguments[_key3];
      }
      (_props$onMousedown = props.onMousedown) === null || _props$onMousedown === void 0 ? void 0 : _props$onMousedown.call.apply(_props$onMousedown, [props, event].concat(restArgs));
    };
    // ============================= Dropdown ==============================
    var containerWidth = (0, _vue.ref)(null);
    var instance = (0, _vue.getCurrentInstance)();
    var onPopupMouseEnter = function onPopupMouseEnter() {
      // We need force update here since popup dom is render async
      instance.update();
    };
    (0, _vue.onMounted)(function () {
      (0, _vue.watch)(triggerOpen, function () {
        if (triggerOpen.value) {
          var _containerRef$value;
          var newWidth = Math.ceil((_containerRef$value = containerRef.value) === null || _containerRef$value === void 0 ? void 0 : _containerRef$value.offsetWidth);
          if (containerWidth.value !== newWidth && !Number.isNaN(newWidth)) {
            containerWidth.value = newWidth;
          }
        }
      }, {
        immediate: true,
        flush: 'post'
      });
    });
    // Close when click on non-select element
    (0, _useSelectTriggerControl.default)([containerRef, triggerRef], triggerOpen, onToggleOpen);
    (0, _useBaseProps.useProvideBaseSelectProps)((0, _toReactive.toReactive)((0, _objectSpread2.default)((0, _objectSpread2.default)({}, (0, _vue.toRefs)(props)), {}, {
      open: mergedOpen,
      triggerOpen: triggerOpen,
      showSearch: mergedShowSearch,
      multiple: multiple,
      toggleOpen: onToggleOpen
    })));
    return function () {
      var _classNames2;
      var _props$attrs = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, props), attrs),
        prefixCls = _props$attrs.prefixCls,
        id = _props$attrs.id,
        open = _props$attrs.open,
        defaultOpen = _props$attrs.defaultOpen,
        mode = _props$attrs.mode,
        showSearch = _props$attrs.showSearch,
        searchValue = _props$attrs.searchValue,
        onSearch = _props$attrs.onSearch,
        allowClear = _props$attrs.allowClear,
        clearIcon = _props$attrs.clearIcon,
        showArrow = _props$attrs.showArrow,
        inputIcon = _props$attrs.inputIcon,
        disabled = _props$attrs.disabled,
        loading = _props$attrs.loading,
        getInputElement = _props$attrs.getInputElement,
        getPopupContainer = _props$attrs.getPopupContainer,
        placement = _props$attrs.placement,
        animation = _props$attrs.animation,
        transitionName = _props$attrs.transitionName,
        dropdownStyle = _props$attrs.dropdownStyle,
        dropdownClassName = _props$attrs.dropdownClassName,
        dropdownMatchSelectWidth = _props$attrs.dropdownMatchSelectWidth,
        dropdownRender = _props$attrs.dropdownRender,
        dropdownAlign = _props$attrs.dropdownAlign,
        showAction = _props$attrs.showAction,
        direction = _props$attrs.direction,
        tokenSeparators = _props$attrs.tokenSeparators,
        tagRender = _props$attrs.tagRender,
        optionLabelRender = _props$attrs.optionLabelRender,
        onPopupScroll = _props$attrs.onPopupScroll,
        onDropdownVisibleChange = _props$attrs.onDropdownVisibleChange,
        onFocus = _props$attrs.onFocus,
        onBlur = _props$attrs.onBlur,
        onKeyup = _props$attrs.onKeyup,
        onKeydown = _props$attrs.onKeydown,
        onMousedown = _props$attrs.onMousedown,
        onClear = _props$attrs.onClear,
        omitDomProps = _props$attrs.omitDomProps,
        getRawInputElement = _props$attrs.getRawInputElement,
        displayValues = _props$attrs.displayValues,
        onDisplayValuesChange = _props$attrs.onDisplayValuesChange,
        emptyOptions = _props$attrs.emptyOptions,
        activeDescendantId = _props$attrs.activeDescendantId,
        activeValue = _props$attrs.activeValue,
        OptionList = _props$attrs.OptionList,
        restProps = (0, _objectWithoutProperties2.default)(_props$attrs, _excluded);
      // ============================= Input ==============================
      // Only works in `combobox`
      var customizeInputElement = mode === 'combobox' && getInputElement && getInputElement() || null;
      // Used for customize replacement for `vc-cascader`
      var customizeRawInputElement = typeof getRawInputElement === 'function' && getRawInputElement();
      var domProps = (0, _objectSpread2.default)({}, restProps);
      // Used for raw custom input trigger
      var onTriggerVisibleChange;
      if (customizeRawInputElement) {
        onTriggerVisibleChange = function onTriggerVisibleChange(newOpen) {
          onToggleOpen(newOpen);
        };
      }
      DEFAULT_OMIT_PROPS.forEach(function (propName) {
        delete domProps[propName];
      });
      omitDomProps === null || omitDomProps === void 0 ? void 0 : omitDomProps.forEach(function (propName) {
        delete domProps[propName];
      });
      // ============================= Arrow ==============================
      var mergedShowArrow = showArrow !== undefined ? showArrow : loading || !multiple.value && mode !== 'combobox';
      var arrowNode;
      if (mergedShowArrow) {
        arrowNode = (0, _vue.createVNode)(_TransBtn.default, {
          "class": (0, _classNames3.default)("".concat(prefixCls, "-arrow"), (0, _defineProperty2.default)({}, "".concat(prefixCls, "-arrow-loading"), loading)),
          "customizeIcon": inputIcon,
          "customizeIconProps": {
            loading: loading,
            searchValue: mergedSearchValue.value,
            open: mergedOpen.value,
            focused: mockFocused.value,
            showSearch: mergedShowSearch.value
          }
        }, null);
      }
      // ============================= Clear ==============================
      var clearNode;
      var onClearMouseDown = function onClearMouseDown() {
        onClear === null || onClear === void 0 ? void 0 : onClear();
        onDisplayValuesChange([], {
          type: 'clear',
          values: displayValues
        });
        onInternalSearch('', false, false);
      };
      if (!disabled && allowClear && (displayValues.length || mergedSearchValue.value)) {
        clearNode = (0, _vue.createVNode)(_TransBtn.default, {
          "class": "".concat(prefixCls, "-clear"),
          "onMousedown": onClearMouseDown,
          "customizeIcon": clearIcon
        }, {
          default: function _default() {
            return [(0, _vue.createTextVNode)("\xD7")];
          }
        });
      }
      // =========================== OptionList ===========================
      var optionList = (0, _vue.createVNode)(OptionList, {
        "ref": listRef
      }, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, legacyTreeSelectContext.customSlots), {}, {
        option: slots.option
      }));
      // ============================= Select =============================
      var mergedClassName = (0, _classNames3.default)(prefixCls, attrs.class, (_classNames2 = {}, (0, _defineProperty2.default)(_classNames2, "".concat(prefixCls, "-focused"), mockFocused.value), (0, _defineProperty2.default)(_classNames2, "".concat(prefixCls, "-multiple"), multiple.value), (0, _defineProperty2.default)(_classNames2, "".concat(prefixCls, "-single"), !multiple.value), (0, _defineProperty2.default)(_classNames2, "".concat(prefixCls, "-allow-clear"), allowClear), (0, _defineProperty2.default)(_classNames2, "".concat(prefixCls, "-show-arrow"), mergedShowArrow), (0, _defineProperty2.default)(_classNames2, "".concat(prefixCls, "-disabled"), disabled), (0, _defineProperty2.default)(_classNames2, "".concat(prefixCls, "-loading"), loading), (0, _defineProperty2.default)(_classNames2, "".concat(prefixCls, "-open"), mergedOpen.value), (0, _defineProperty2.default)(_classNames2, "".concat(prefixCls, "-customize-input"), customizeInputElement), (0, _defineProperty2.default)(_classNames2, "".concat(prefixCls, "-show-search"), mergedShowSearch.value), _classNames2));
      // >>> Selector
      var selectorNode = (0, _vue.createVNode)(_SelectTrigger.default, {
        "ref": triggerRef,
        "disabled": disabled,
        "prefixCls": prefixCls,
        "visible": triggerOpen.value,
        "popupElement": optionList,
        "containerWidth": containerWidth.value,
        "animation": animation,
        "transitionName": transitionName,
        "dropdownStyle": dropdownStyle,
        "dropdownClassName": dropdownClassName,
        "direction": direction,
        "dropdownMatchSelectWidth": dropdownMatchSelectWidth,
        "dropdownRender": dropdownRender,
        "dropdownAlign": dropdownAlign,
        "placement": placement,
        "getPopupContainer": getPopupContainer,
        "empty": emptyOptions,
        "getTriggerDOMNode": function getTriggerDOMNode() {
          return selectorDomRef.current;
        },
        "onPopupVisibleChange": onTriggerVisibleChange,
        "onPopupMouseEnter": onPopupMouseEnter
      }, {
        default: function _default() {
          return customizeRawInputElement ? (0, _propsUtil.isValidElement)(customizeRawInputElement) && (0, _vnode.cloneElement)(customizeRawInputElement, {
            ref: selectorDomRef
          }, false, true) : (0, _vue.createVNode)(_Selector.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, props), {}, {
            "domRef": selectorDomRef,
            "prefixCls": prefixCls,
            "inputElement": customizeInputElement,
            "ref": selectorRef,
            "id": id,
            "showSearch": mergedShowSearch.value,
            "mode": mode,
            "activeDescendantId": activeDescendantId,
            "tagRender": tagRender,
            "optionLabelRender": optionLabelRender,
            "values": displayValues,
            "open": mergedOpen.value,
            "onToggleOpen": onToggleOpen,
            "activeValue": activeValue,
            "searchValue": mergedSearchValue.value,
            "onSearch": onInternalSearch,
            "onSearchSubmit": onInternalSearchSubmit,
            "onRemove": onSelectorRemove,
            "tokenWithEnter": tokenWithEnter.value
          }), null);
        }
      });
      // >>> Render
      var renderNode;
      // Render raw
      if (customizeRawInputElement) {
        renderNode = selectorNode;
      } else {
        renderNode = (0, _vue.createVNode)("div", (0, _objectSpread2.default)((0, _objectSpread2.default)({}, domProps), {}, {
          "class": mergedClassName,
          "ref": containerRef,
          "onMousedown": onInternalMouseDown,
          "onKeydown": onInternalKeyDown,
          "onKeyup": onInternalKeyUp
        }), [mockFocused.value && !mergedOpen.value && (0, _vue.createVNode)("span", {
          "style": {
            width: 0,
            height: 0,
            display: 'flex',
            overflow: 'hidden',
            opacity: 0
          },
          "aria-live": "polite"
        }, ["".concat(displayValues.map(function (_ref2) {
          var label = _ref2.label,
            value = _ref2.value;
          return ['number', 'string'].includes((0, _typeof2.default)(label)) ? label : value;
        }).join(', '))]), selectorNode, arrowNode, clearNode]);
      }
      return renderNode;
    };
  }
});
exports.default = _default2;