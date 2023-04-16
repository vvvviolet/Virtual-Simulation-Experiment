import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import { createVNode as _createVNode } from "vue";
import { isLeaf, toPathKey } from '../utils/commonUtil';
import Checkbox from './Checkbox';
import { SEARCH_MARK } from '../hooks/useSearchOptions';
import { useInjectCascader } from '../context';
export var FIX_LABEL = '__cascader_fix_label__';
export default function Column(_ref) {
  var _expandIconRef$value, _customSlots$value$ex, _customSlots$value, _loadingIconRef$value, _customSlots$value$lo, _customSlots$value2;
  var prefixCls = _ref.prefixCls,
    multiple = _ref.multiple,
    options = _ref.options,
    activeValue = _ref.activeValue,
    prevValuePath = _ref.prevValuePath,
    onToggleOpen = _ref.onToggleOpen,
    onSelect = _ref.onSelect,
    onActive = _ref.onActive,
    checkedSet = _ref.checkedSet,
    halfCheckedSet = _ref.halfCheckedSet,
    loadingKeys = _ref.loadingKeys,
    isSelectable = _ref.isSelectable;
  var menuPrefixCls = "".concat(prefixCls, "-menu");
  var menuItemPrefixCls = "".concat(prefixCls, "-menu-item");
  var _useInjectCascader = useInjectCascader(),
    fieldNames = _useInjectCascader.fieldNames,
    changeOnSelect = _useInjectCascader.changeOnSelect,
    expandTrigger = _useInjectCascader.expandTrigger,
    expandIconRef = _useInjectCascader.expandIcon,
    loadingIconRef = _useInjectCascader.loadingIcon,
    dropdownMenuColumnStyle = _useInjectCascader.dropdownMenuColumnStyle,
    customSlots = _useInjectCascader.customSlots;
  var expandIcon = (_expandIconRef$value = expandIconRef.value) !== null && _expandIconRef$value !== void 0 ? _expandIconRef$value : (_customSlots$value$ex = (_customSlots$value = customSlots.value).expandIcon) === null || _customSlots$value$ex === void 0 ? void 0 : _customSlots$value$ex.call(_customSlots$value);
  var loadingIcon = (_loadingIconRef$value = loadingIconRef.value) !== null && _loadingIconRef$value !== void 0 ? _loadingIconRef$value : (_customSlots$value$lo = (_customSlots$value2 = customSlots.value).loadingIcon) === null || _customSlots$value$lo === void 0 ? void 0 : _customSlots$value$lo.call(_customSlots$value2);
  var hoverOpen = expandTrigger.value === 'hover';
  // ============================ Render ============================
  return _createVNode("ul", {
    "class": menuPrefixCls,
    "role": "menu"
  }, [options.map(function (option) {
    var _option$FIX_LABEL, _ref2;
    var disabled = option.disabled;
    var searchOptions = option[SEARCH_MARK];
    var label = (_option$FIX_LABEL = option[FIX_LABEL]) !== null && _option$FIX_LABEL !== void 0 ? _option$FIX_LABEL : option[fieldNames.value.label];
    var value = option[fieldNames.value.value];
    var isMergedLeaf = isLeaf(option, fieldNames.value);
    // Get real value of option. Search option is different way.
    var fullPath = searchOptions ? searchOptions.map(function (opt) {
      return opt[fieldNames.value.value];
    }) : [].concat(_toConsumableArray(prevValuePath), [value]);
    var fullPathKey = toPathKey(fullPath);
    var isLoading = loadingKeys.includes(fullPathKey);
    // >>>>> checked
    var checked = checkedSet.has(fullPathKey);
    // >>>>> halfChecked
    var halfChecked = halfCheckedSet.has(fullPathKey);
    // >>>>> Open
    var triggerOpenPath = function triggerOpenPath() {
      if (!disabled && (!hoverOpen || !isMergedLeaf)) {
        onActive(fullPath);
      }
    };
    // >>>>> Selection
    var triggerSelect = function triggerSelect() {
      if (isSelectable(option)) {
        onSelect(fullPath, isMergedLeaf);
      }
    };
    // >>>>> Title
    var title;
    if (typeof option.title === 'string') {
      title = option.title;
    } else if (typeof label === 'string') {
      title = label;
    }
    // >>>>> Render
    return _createVNode("li", {
      "key": fullPathKey,
      "class": [menuItemPrefixCls, (_ref2 = {}, _defineProperty(_ref2, "".concat(menuItemPrefixCls, "-expand"), !isMergedLeaf), _defineProperty(_ref2, "".concat(menuItemPrefixCls, "-active"), activeValue === value), _defineProperty(_ref2, "".concat(menuItemPrefixCls, "-disabled"), disabled), _defineProperty(_ref2, "".concat(menuItemPrefixCls, "-loading"), isLoading), _ref2)],
      "style": dropdownMenuColumnStyle.value,
      "role": "menuitemcheckbox",
      "title": title,
      "aria-checked": checked,
      "data-path-key": fullPathKey,
      "onClick": function onClick() {
        triggerOpenPath();
        if (!multiple || isMergedLeaf) {
          triggerSelect();
        }
      },
      "onDblclick": function onDblclick() {
        if (changeOnSelect.value) {
          onToggleOpen(false);
        }
      },
      "onMouseenter": function onMouseenter() {
        if (hoverOpen) {
          triggerOpenPath();
        }
      },
      "onMousedown": function onMousedown(e) {
        // Prevent selector from blurring
        e.preventDefault();
      }
    }, [multiple && _createVNode(Checkbox, {
      "prefixCls": "".concat(prefixCls, "-checkbox"),
      "checked": checked,
      "halfChecked": halfChecked,
      "disabled": disabled,
      "onClick": function onClick(e) {
        e.stopPropagation();
        triggerSelect();
      }
    }, null), _createVNode("div", {
      "class": "".concat(menuItemPrefixCls, "-content")
    }, [label]), !isLoading && expandIcon && !isMergedLeaf && _createVNode("div", {
      "class": "".concat(menuItemPrefixCls, "-expand-icon")
    }, [expandIcon]), isLoading && loadingIcon && _createVNode("div", {
      "class": "".concat(menuItemPrefixCls, "-loading-icon")
    }, [loadingIcon])]);
  })]);
}
Column.props = ['prefixCls', 'multiple', 'options', 'activeValue', 'prevValuePath', 'onToggleOpen', 'onSelect', 'onActive', 'checkedSet', 'halfCheckedSet', 'loadingKeys', 'isSelectable'];
Column.displayName = 'Column';
Column.inheritAttrs = false;