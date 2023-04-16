import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { resolveDirective as _resolveDirective, Fragment as _Fragment, createVNode as _createVNode } from "vue";
import isEqual from 'lodash-es/isEqual';
import FilterFilled from "@ant-design/icons-vue/es/icons/FilterFilled";
import Button from '../../../button';
import Menu from '../../../menu';
import Checkbox from '../../../checkbox';
import Radio from '../../../radio';
import Dropdown from '../../../dropdown';
import Empty from '../../../empty';
import FilterDropdownMenuWrapper from './FilterWrapper';
import { flattenKeys } from '.';
import { computed, defineComponent, onBeforeUnmount, ref, shallowRef, watch } from 'vue';
import classNames from '../../../_util/classNames';
import useConfigInject from '../../../_util/hooks/useConfigInject';
import { useInjectSlots } from '../../context';
import FilterSearch from './FilterSearch';
import Tree from '../../../tree';
var SubMenu = Menu.SubMenu,
  MenuItem = Menu.Item;
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
      return _createVNode(SubMenu, {
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
    var Component = filterMultiple ? Checkbox : Radio;
    var item = _createVNode(MenuItem, {
      "key": filter.value !== undefined ? key : index
    }, {
      default: function _default() {
        return [_createVNode(Component, {
          "checked": filteredKeys.includes(key)
        }, null), _createVNode("span", null, [filter.text])];
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
export default defineComponent({
  name: 'FilterDropdown',
  props: ['tablePrefixCls', 'prefixCls', 'dropdownPrefixCls', 'column', 'filterState', 'filterMultiple', 'filterMode', 'filterSearch', 'columnKey', 'triggerFilter', 'locale', 'getPopupContainer'],
  setup: function setup(props, _ref3) {
    var slots = _ref3.slots;
    var contextSlots = useInjectSlots();
    var filterMode = computed(function () {
      var _props$filterMode;
      return (_props$filterMode = props.filterMode) !== null && _props$filterMode !== void 0 ? _props$filterMode : 'menu';
    });
    var filterSearch = computed(function () {
      var _props$filterSearch;
      return (_props$filterSearch = props.filterSearch) !== null && _props$filterSearch !== void 0 ? _props$filterSearch : false;
    });
    var filterDropdownVisible = computed(function () {
      return props.column.filterDropdownVisible;
    });
    var visible = ref(false);
    var filtered = computed(function () {
      var _props$filterState$fi;
      return !!(props.filterState && ((_props$filterState$fi = props.filterState.filteredKeys) !== null && _props$filterState$fi !== void 0 && _props$filterState$fi.length || props.filterState.forceFiltered));
    });
    var filterFlattenKeys = computed(function () {
      var _props$column;
      return flattenKeys((_props$column = props.column) === null || _props$column === void 0 ? void 0 : _props$column.filters);
    });
    var filterDropdownRef = computed(function () {
      var _props$column2 = props.column,
        filterDropdown = _props$column2.filterDropdown,
        _props$column2$slots = _props$column2.slots,
        slots = _props$column2$slots === void 0 ? {} : _props$column2$slots,
        customFilterDropdown = _props$column2.customFilterDropdown;
      return filterDropdown || slots.filterDropdown && contextSlots.value[slots.filterDropdown] || customFilterDropdown && contextSlots.value.customFilterDropdown;
    });
    var filterIconRef = computed(function () {
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
    var mergedVisible = computed(function () {
      return typeof filterDropdownVisible.value === 'boolean' ? filterDropdownVisible.value : visible.value;
    });
    var propFilteredKeys = computed(function () {
      var _props$filterState;
      return (_props$filterState = props.filterState) === null || _props$filterState === void 0 ? void 0 : _props$filterState.filteredKeys;
    });
    var filteredKeys = shallowRef([]);
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
    watch(propFilteredKeys, function () {
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
    var openKeys = shallowRef([]);
    var openRef = ref();
    var onOpenChange = function onOpenChange(keys) {
      openRef.value = setTimeout(function () {
        openKeys.value = keys;
      });
    };
    var onMenuClick = function onMenuClick() {
      clearTimeout(openRef.value);
    };
    onBeforeUnmount(function () {
      clearTimeout(openRef.value);
    });
    var searchValue = ref('');
    var onSearch = function onSearch(e) {
      var value = e.target.value;
      searchValue.value = value;
    };
    // clear search value after close filter dropdown
    watch(visible, function () {
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
      if (isEqual(mergedKeys, filterState === null || filterState === void 0 ? void 0 : filterState.filteredKeys)) {
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
    var _useConfigInject = useConfigInject('', props),
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
    var treeData = computed(function () {
      return getTreeData({
        filters: props.column.filters
      });
    });
    // ======================== Style ========================
    var dropdownMenuClass = computed(function () {
      return classNames(_defineProperty({}, "".concat(props.dropdownPrefixCls, "-menu-without-submenu"), !hasSubMenu(props.column.filters || [])));
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
        return _createVNode(Empty, {
          "image": Empty.PRESENTED_IMAGE_SIMPLE,
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
        return _createVNode(_Fragment, null, [_createVNode(FilterSearch, {
          "filterSearch": filterSearch.value,
          "value": searchValue.value,
          "onChange": onSearch,
          "tablePrefixCls": tablePrefixCls,
          "locale": locale
        }, null), _createVNode("div", {
          "class": "".concat(tablePrefixCls, "-filter-dropdown-tree")
        }, [filterMultiple ? _createVNode(Checkbox, {
          "class": "".concat(tablePrefixCls, "-filter-dropdown-checkall"),
          "onChange": onCheckAll,
          "checked": selectedKeys.length === filterFlattenKeys.value.length,
          "indeterminate": selectedKeys.length > 0 && selectedKeys.length < filterFlattenKeys.value.length
        }, {
          default: function _default() {
            return [locale.filterCheckall];
          }
        }) : null, _createVNode(Tree, {
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
      return _createVNode(_Fragment, null, [_createVNode(FilterSearch, {
        "filterSearch": filterSearch.value,
        "value": searchValue.value,
        "onChange": onSearch,
        "tablePrefixCls": tablePrefixCls,
        "locale": locale
      }, null), _createVNode(Menu, {
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
        dropdownContent = _createVNode(_Fragment, null, [getFilterComponent(), _createVNode("div", {
          "class": "".concat(prefixCls, "-dropdown-btns")
        }, [_createVNode(Button, {
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
        }), _createVNode(Button, {
          "type": "primary",
          "size": "small",
          "onClick": onConfirm
        }, {
          default: function _default() {
            return [locale.filterConfirm];
          }
        })])]);
      }
      var menu = _createVNode(FilterDropdownMenuWrapper, {
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
        filterIcon = _createVNode(FilterFilled, null, null);
      }
      return _createVNode("div", {
        "class": "".concat(prefixCls, "-column")
      }, [_createVNode("span", {
        "class": "".concat(tablePrefixCls, "-column-title")
      }, [(_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)]), _createVNode(Dropdown, {
        "overlay": menu,
        "trigger": ['click'],
        "visible": mergedVisible.value,
        "onVisibleChange": onVisibleChange,
        "getPopupContainer": getPopupContainer,
        "placement": direction.value === 'rtl' ? 'bottomLeft' : 'bottomRight'
      }, {
        default: function _default() {
          return [_createVNode("span", {
            "role": "button",
            "tabindex": -1,
            "class": classNames("".concat(prefixCls, "-trigger"), {
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