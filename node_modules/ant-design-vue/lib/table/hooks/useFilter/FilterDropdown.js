"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = require("vue");
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _isEqual = _interopRequireDefault(require("lodash/isEqual"));
var _FilterFilled = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/FilterFilled"));
var _button = _interopRequireDefault(require("../../../button"));
var _menu = _interopRequireDefault(require("../../../menu"));
var _checkbox = _interopRequireDefault(require("../../../checkbox"));
var _radio = _interopRequireDefault(require("../../../radio"));
var _dropdown = _interopRequireDefault(require("../../../dropdown"));
var _empty = _interopRequireDefault(require("../../../empty"));
var _FilterWrapper = _interopRequireDefault(require("./FilterWrapper"));
var _ = require(".");
var _classNames2 = _interopRequireDefault(require("../../../_util/classNames"));
var _useConfigInject2 = _interopRequireDefault(require("../../../_util/hooks/useConfigInject"));
var _context = require("../../context");
var _FilterSearch = _interopRequireDefault(require("./FilterSearch"));
var _tree = _interopRequireDefault(require("../../../tree"));
var SubMenu = _menu.default.SubMenu,
  MenuItem = _menu.default.Item;
function hasSubMenu(filters) {
  return filters.some(function (_ref) {
    var children = _ref.children;
    return children && children.length > 0;
  });
}
function searchValueMatched(searchValue, text) {
  if (typeof text === 'string' || typeof text === 'number') {
    return text === null || text === void 0 ? void 0 : text.toString().toLowerCase().includes(searchValue.trim().toLowerCase());
  }
  return false;
}
function renderFilterItems(_ref2) {
  var filters = _ref2.filters,
    prefixCls = _ref2.prefixCls,
    filteredKeys = _ref2.filteredKeys,
    filterMultiple = _ref2.filterMultiple,
    searchValue = _ref2.searchValue,
    filterSearch = _ref2.filterSearch;
  return filters.map(function (filter, index) {
    var key = String(filter.value);
    if (filter.children) {
      return (0, _vue.createVNode)(SubMenu, {
        "key": key || index,
        "title": filter.text,
        "popupClassName": "".concat(prefixCls, "-dropdown-submenu")
      }, {
        default: function _default() {
          return [renderFilterItems({
            filters: filter.children,
            prefixCls: prefixCls,
            filteredKeys: filteredKeys,
            filterMultiple: filterMultiple,
            searchValue: searchValue,
            filterSearch: filterSearch
          })];
        }
      });
    }
    var Component = filterMultiple ? _checkbox.default : _radio.default;
    var item = (0, _vue.createVNode)(MenuItem, {
      "key": filter.value !== undefined ? key : index
    }, {
      default: function _default() {
        return [(0, _vue.createVNode)(Component, {
          "checked": filteredKeys.includes(key)
        }, null), (0, _vue.createVNode)("span", null, [filter.text])];
      }
    });
    if (searchValue.trim()) {
      if (typeof filterSearch === 'function') {
        return filterSearch(searchValue, filter) ? item : undefined;
      }
      return searchValueMatched(searchValue, filter.text) ? item : undefined;
    }
    return item;
  });
}
var _default2 = (0, _vue.defineComponent)({
  name: 'FilterDropdown',
  props: ['tablePrefixCls', 'prefixCls', 'dropdownPrefixCls', 'column', 'filterState', 'filterMultiple', 'filterMode', 'filterSearch', 'columnKey', 'triggerFilter', 'locale', 'getPopupContainer'],
  setup: function setup(props, _ref3) {
    var slots = _ref3.slots;
    var contextSlots = (0, _context.useInjectSlots)();
    var filterMode = (0, _vue.computed)(function () {
      var _props$filterMode;
      return (_props$filterMode = props.filterMode) !== null && _props$filterMode !== void 0 ? _props$filterMode : 'menu';
    });
    var filterSearch = (0, _vue.computed)(function () {
      var _props$filterSearch;
      return (_props$filterSearch = props.filterSearch) !== null && _props$filterSearch !== void 0 ? _props$filterSearch : false;
    });
    var filterDropdownVisible = (0, _vue.computed)(function () {
      return props.column.filterDropdownVisible;
    });
    var visible = (0, _vue.ref)(false);
    var filtered = (0, _vue.computed)(function () {
      var _props$filterState$fi;
      return !!(props.filterState && ((_props$filterState$fi = props.filterState.filteredKeys) !== null && _props$filterState$fi !== void 0 && _props$filterState$fi.length || props.filterState.forceFiltered));
    });
    var filterFlattenKeys = (0, _vue.computed)(function () {
      var _props$column;
      return (0, _.flattenKeys)((_props$column = props.column) === null || _props$column === void 0 ? void 0 : _props$column.filters);
    });
    var filterDropdownRef = (0, _vue.computed)(function () {
      var _props$column2 = props.column,
        filterDropdown = _props$column2.filterDropdown,
        _props$column2$slots = _props$column2.slots,
        slots = _props$column2$slots === void 0 ? {} : _props$column2$slots,
        customFilterDropdown = _props$column2.customFilterDropdown;
      return filterDropdown || slots.filterDropdown && contextSlots.value[slots.filterDropdown] || customFilterDropdown && contextSlots.value.customFilterDropdown;
    });
    var filterIconRef = (0, _vue.computed)(function () {
      var _props$column3 = props.column,
        filterIcon = _props$column3.filterIcon,
        _props$column3$slots = _props$column3.slots,
        slots = _props$column3$slots === void 0 ? {} : _props$column3$slots;
      return filterIcon || slots.filterIcon && contextSlots.value[slots.filterIcon] || contextSlots.value.customFilterIcon;
    });
    var triggerVisible = function triggerVisible(newVisible) {
      var _props$column$onFilte, _props$column4;
      visible.value = newVisible;
      (_props$column$onFilte = (_props$column4 = props.column).onFilterDropdownVisibleChange) === null || _props$column$onFilte === void 0 ? void 0 : _props$column$onFilte.call(_props$column4, newVisible);
    };
    var mergedVisible = (0, _vue.computed)(function () {
      return typeof filterDropdownVisible.value === 'boolean' ? filterDropdownVisible.value : visible.value;
    });
    var propFilteredKeys = (0, _vue.computed)(function () {
      var _props$filterState;
      return (_props$filterState = props.filterState) === null || _props$filterState === void 0 ? void 0 : _props$filterState.filteredKeys;
    });
    var filteredKeys = (0, _vue.shallowRef)([]);
    var onSelectKeys = function onSelectKeys(_ref4) {
      var selectedKeys = _ref4.selectedKeys;
      filteredKeys.value = selectedKeys;
    };
    var onCheck = function onCheck(keys, _ref5) {
      var node = _ref5.node,
        checked = _ref5.checked;
      if (!props.filterMultiple) {
        onSelectKeys({
          selectedKeys: checked && node.key ? [node.key] : []
        });
      } else {
        onSelectKeys({
          selectedKeys: keys
        });
      }
    };
    (0, _vue.watch)(propFilteredKeys, function () {
      if (!visible.value) {
        return;
      }
      onSelectKeys({
        selectedKeys: propFilteredKeys.value || []
      });
    }, {
      immediate: true
    });
    // const expandKeys = shallowRef(filterFlattenKeys.value.slice());
    // const onExpandChange = keys => (expandKeys.value = keys);
    var openKeys = (0, _vue.shallowRef)([]);
    var openRef = (0, _vue.ref)();
    var onOpenChange = function onOpenChange(keys) {
      openRef.value = setTimeout(function () {
        openKeys.value = keys;
      });
    };
    var onMenuClick = function onMenuClick() {
      clearTimeout(openRef.value);
    };
    (0, _vue.onBeforeUnmount)(function () {
      clearTimeout(openRef.value);
    });
    var searchValue = (0, _vue.ref)('');
    var onSearch = function onSearch(e) {
      var value = e.target.value;
      searchValue.value = value;
    };
    // clear search value after close filter dropdown
    (0, _vue.watch)(visible, function () {
      if (!visible.value) {
        searchValue.value = '';
      }
    });
    // ======================= Submit ========================
    var internalTriggerFilter = function internalTriggerFilter(keys) {
      var column = props.column,
        columnKey = props.columnKey,
        filterState = props.filterState;
      var mergedKeys = keys && keys.length ? keys : null;
      if (mergedKeys === null && (!filterState || !filterState.filteredKeys)) {
        return null;
      }
      if ((0, _isEqual.default)(mergedKeys, filterState === null || filterState === void 0 ? void 0 : filterState.filteredKeys)) {
        return null;
      }
      props.triggerFilter({
        column: column,
        key: columnKey,
        filteredKeys: mergedKeys
      });
    };
    var onConfirm = function onConfirm() {
      triggerVisible(false);
      internalTriggerFilter(filteredKeys.value);
    };
    var onReset = function onReset() {
      var _ref6 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
          confirm: false,
          closeDropdown: false
        },
        confirm = _ref6.confirm,
        closeDropdown = _ref6.closeDropdown;
      if (confirm) {
        internalTriggerFilter([]);
      }
      if (closeDropdown) {
        triggerVisible(false);
      }
      searchValue.value = '';
      filteredKeys.value = [];
    };
    var doFilter = function doFilter() {
      var _ref7 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
          closeDropdown: true
        },
        closeDropdown = _ref7.closeDropdown;
      if (closeDropdown) {
        triggerVisible(false);
      }
      internalTriggerFilter(filteredKeys.value);
    };
    var onVisibleChange = function onVisibleChange(newVisible) {
      if (newVisible && propFilteredKeys.value !== undefined) {
        // Sync filteredKeys on appear in controlled mode (propFilteredKeys.value !== undefiend)
        filteredKeys.value = propFilteredKeys.value || [];
      }
      triggerVisible(newVisible);
      // Default will filter when closed
      if (!newVisible && !filterDropdownRef.value) {
        onConfirm();
      }
    };
    var _useConfigInject = (0, _useConfigInject2.default)('', props),
      direction = _useConfigInject.direction;
    var onCheckAll = function onCheckAll(e) {
      if (e.target.checked) {
        var allFilterKeys = filterFlattenKeys.value;
        filteredKeys.value = allFilterKeys;
      } else {
        filteredKeys.value = [];
      }
    };
    var getTreeData = function getTreeData(_ref8) {
      var filters = _ref8.filters;
      return (filters || []).map(function (filter, index) {
        var key = String(filter.value);
        var item = {
          title: filter.text,
          key: filter.value !== undefined ? key : index
        };
        if (filter.children) {
          item.children = getTreeData({
            filters: filter.children
          });
        }
        return item;
      });
    };
    var treeData = (0, _vue.computed)(function () {
      return getTreeData({
        filters: props.column.filters
      });
    });
    // ======================== Style ========================
    var dropdownMenuClass = (0, _vue.computed)(function () {
      return (0, _classNames2.default)((0, _defineProperty2.default)({}, "".concat(props.dropdownPrefixCls, "-menu-without-submenu"), !hasSubMenu(props.column.filters || [])));
    });
    var getFilterComponent = function getFilterComponent() {
      var selectedKeys = filteredKeys.value;
      var column = props.column,
        locale = props.locale,
        tablePrefixCls = props.tablePrefixCls,
        filterMultiple = props.filterMultiple,
        dropdownPrefixCls = props.dropdownPrefixCls,
        getPopupContainer = props.getPopupContainer,
        prefixCls = props.prefixCls;
      if ((column.filters || []).length === 0) {
        return (0, _vue.createVNode)(_empty.default, {
          "image": _empty.default.PRESENTED_IMAGE_SIMPLE,
          "description": locale.filterEmptyText,
          "imageStyle": {
            height: 24
          },
          "style": {
            margin: 0,
            padding: '16px 0'
          }
        }, null);
      }
      if (filterMode.value === 'tree') {
        return (0, _vue.createVNode)(_vue.Fragment, null, [(0, _vue.createVNode)(_FilterSearch.default, {
          "filterSearch": filterSearch.value,
          "value": searchValue.value,
          "onChange": onSearch,
          "tablePrefixCls": tablePrefixCls,
          "locale": locale
        }, null), (0, _vue.createVNode)("div", {
          "class": "".concat(tablePrefixCls, "-filter-dropdown-tree")
        }, [filterMultiple ? (0, _vue.createVNode)(_checkbox.default, {
          "class": "".concat(tablePrefixCls, "-filter-dropdown-checkall"),
          "onChange": onCheckAll,
          "checked": selectedKeys.length === filterFlattenKeys.value.length,
          "indeterminate": selectedKeys.length > 0 && selectedKeys.length < filterFlattenKeys.value.length
        }, {
          default: function _default() {
            return [locale.filterCheckall];
          }
        }) : null, (0, _vue.createVNode)(_tree.default, {
          "checkable": true,
          "selectable": false,
          "blockNode": true,
          "multiple": filterMultiple,
          "checkStrictly": !filterMultiple,
          "class": "".concat(dropdownPrefixCls, "-menu"),
          "onCheck": onCheck,
          "checkedKeys": selectedKeys,
          "selectedKeys": selectedKeys,
          "showIcon": false,
          "treeData": treeData.value,
          "autoExpandParent": true,
          "defaultExpandAll": true,
          "filterTreeNode": searchValue.value.trim() ? function (node) {
            return searchValueMatched(searchValue.value, node.title);
          } : undefined
        }, null)])]);
      }
      return (0, _vue.createVNode)(_vue.Fragment, null, [(0, _vue.createVNode)(_FilterSearch.default, {
        "filterSearch": filterSearch.value,
        "value": searchValue.value,
        "onChange": onSearch,
        "tablePrefixCls": tablePrefixCls,
        "locale": locale
      }, null), (0, _vue.createVNode)(_menu.default, {
        "multiple": filterMultiple,
        "prefixCls": "".concat(dropdownPrefixCls, "-menu"),
        "class": dropdownMenuClass.value,
        "onClick": onMenuClick,
        "onSelect": onSelectKeys,
        "onDeselect": onSelectKeys,
        "selectedKeys": selectedKeys,
        "getPopupContainer": getPopupContainer,
        "openKeys": openKeys.value,
        "onOpenChange": onOpenChange
      }, {
        default: function _default() {
          return renderFilterItems({
            filters: column.filters || [],
            filterSearch: filterSearch.value,
            prefixCls: prefixCls,
            filteredKeys: filteredKeys.value,
            filterMultiple: filterMultiple,
            searchValue: searchValue.value
          });
        }
      })]);
    };
    return function () {
      var _slots$default;
      var tablePrefixCls = props.tablePrefixCls,
        prefixCls = props.prefixCls,
        column = props.column,
        dropdownPrefixCls = props.dropdownPrefixCls,
        locale = props.locale,
        getPopupContainer = props.getPopupContainer;
      var dropdownContent;
      if (typeof filterDropdownRef.value === 'function') {
        dropdownContent = filterDropdownRef.value({
          prefixCls: "".concat(dropdownPrefixCls, "-custom"),
          setSelectedKeys: function setSelectedKeys(selectedKeys) {
            return onSelectKeys({
              selectedKeys: selectedKeys
            });
          },
          selectedKeys: filteredKeys.value,
          confirm: doFilter,
          clearFilters: onReset,
          filters: column.filters,
          visible: mergedVisible.value,
          column: column.__originColumn__
        });
      } else if (filterDropdownRef.value) {
        dropdownContent = filterDropdownRef.value;
      } else {
        var selectedKeys = filteredKeys.value;
        dropdownContent = (0, _vue.createVNode)(_vue.Fragment, null, [getFilterComponent(), (0, _vue.createVNode)("div", {
          "class": "".concat(prefixCls, "-dropdown-btns")
        }, [(0, _vue.createVNode)(_button.default, {
          "type": "link",
          "size": "small",
          "disabled": selectedKeys.length === 0,
          "onClick": function onClick() {
            return onReset();
          }
        }, {
          default: function _default() {
            return [locale.filterReset];
          }
        }), (0, _vue.createVNode)(_button.default, {
          "type": "primary",
          "size": "small",
          "onClick": onConfirm
        }, {
          default: function _default() {
            return [locale.filterConfirm];
          }
        })])]);
      }
      var menu = (0, _vue.createVNode)(_FilterWrapper.default, {
        "class": "".concat(prefixCls, "-dropdown")
      }, {
        default: function _default() {
          return [dropdownContent];
        }
      });
      var filterIcon;
      if (typeof filterIconRef.value === 'function') {
        filterIcon = filterIconRef.value({
          filtered: filtered.value,
          column: column.__originColumn__
        });
      } else if (filterIconRef.value) {
        filterIcon = filterIconRef.value;
      } else {
        filterIcon = (0, _vue.createVNode)(_FilterFilled.default, null, null);
      }
      return (0, _vue.createVNode)("div", {
        "class": "".concat(prefixCls, "-column")
      }, [(0, _vue.createVNode)("span", {
        "class": "".concat(tablePrefixCls, "-column-title")
      }, [(_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)]), (0, _vue.createVNode)(_dropdown.default, {
        "overlay": menu,
        "trigger": ['click'],
        "visible": mergedVisible.value,
        "onVisibleChange": onVisibleChange,
        "getPopupContainer": getPopupContainer,
        "placement": direction.value === 'rtl' ? 'bottomLeft' : 'bottomRight'
      }, {
        default: function _default() {
          return [(0, _vue.createVNode)("span", {
            "role": "button",
            "tabindex": -1,
            "class": (0, _classNames2.default)("".concat(prefixCls, "-trigger"), {
              active: filtered.value
            }),
            "onClick": function onClick(e) {
              e.stopPropagation();
            }
          }, [filterIcon])];
        }
      })]);
    };
  }
});
exports.default = _default2;