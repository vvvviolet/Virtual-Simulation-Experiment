import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { createTextVNode as _createTextVNode, Fragment as _Fragment, createVNode as _createVNode } from "vue";
import classNames from '../_util/classNames';
import PropTypes from '../_util/vue-types';
import { isValidElement, splitAttrs, filterEmpty } from '../_util/props-util';
import DownOutlined from "@ant-design/icons-vue/es/icons/DownOutlined";
import Checkbox from '../checkbox';
import Menu from '../menu';
import Dropdown from '../dropdown';
import Search from './search';
import ListBody from './ListBody';
import { watchEffect, computed, defineComponent, ref } from 'vue';
var defaultRender = function defaultRender() {
  return null;
};
function isRenderResultPlainObject(result) {
  return result && !isValidElement(result) && Object.prototype.toString.call(result) === '[object Object]';
}
function getEnabledItemKeys(items) {
  return items.filter(function (data) {
    return !data.disabled;
  }).map(function (data) {
    return data.key;
  });
}
export var transferListProps = {
  prefixCls: String,
  dataSource: {
    type: Array,
    default: []
  },
  filter: String,
  filterOption: Function,
  checkedKeys: PropTypes.arrayOf(PropTypes.string),
  handleFilter: Function,
  handleClear: Function,
  renderItem: Function,
  showSearch: {
    type: Boolean,
    default: false
  },
  searchPlaceholder: String,
  notFoundContent: PropTypes.any,
  itemUnit: String,
  itemsUnit: String,
  renderList: PropTypes.any,
  disabled: {
    type: Boolean,
    default: undefined
  },
  direction: String,
  showSelectAll: {
    type: Boolean,
    default: undefined
  },
  remove: String,
  selectAll: String,
  selectCurrent: String,
  selectInvert: String,
  removeAll: String,
  removeCurrent: String,
  selectAllLabel: PropTypes.any,
  showRemove: {
    type: Boolean,
    default: undefined
  },
  pagination: PropTypes.any,
  onItemSelect: Function,
  onItemSelectAll: Function,
  onItemRemove: Function,
  onScroll: Function
};
export default defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'TransferList',
  inheritAttrs: false,
  props: transferListProps,
  // emits: ['scroll', 'itemSelectAll', 'itemRemove', 'itemSelect'],
  slots: ['footer', 'titleText'],
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs,
      slots = _ref.slots;
    var filterValue = ref('');
    var transferNode = ref();
    var defaultListBodyRef = ref();
    var renderListBody = function renderListBody(renderList, props) {
      var bodyContent = renderList ? renderList(props) : null;
      var customize = !!bodyContent && filterEmpty(bodyContent).length > 0;
      if (!customize) {
        bodyContent = _createVNode(ListBody, _objectSpread(_objectSpread({}, props), {}, {
          "ref": defaultListBodyRef
        }), null);
      }
      return {
        customize: customize,
        bodyContent: bodyContent
      };
    };
    var renderItemHtml = function renderItemHtml(item) {
      var _props$renderItem = props.renderItem,
        renderItem = _props$renderItem === void 0 ? defaultRender : _props$renderItem;
      var renderResult = renderItem(item);
      var isRenderResultPlain = isRenderResultPlainObject(renderResult);
      return {
        renderedText: isRenderResultPlain ? renderResult.value : renderResult,
        renderedEl: isRenderResultPlain ? renderResult.label : renderResult,
        item: item
      };
    };
    var filteredItems = ref([]);
    var filteredRenderItems = ref([]);
    watchEffect(function () {
      var fItems = [];
      var fRenderItems = [];
      props.dataSource.forEach(function (item) {
        var renderedItem = renderItemHtml(item);
        var renderedText = renderedItem.renderedText;
        // Filter skip
        if (filterValue.value && filterValue.value.trim() && !matchFilter(renderedText, item)) {
          return null;
        }
        fItems.push(item);
        fRenderItems.push(renderedItem);
      });
      filteredItems.value = fItems;
      filteredRenderItems.value = fRenderItems;
    });
    var checkStatus = computed(function () {
      var checkedKeys = props.checkedKeys;
      if (checkedKeys.length === 0) {
        return 'none';
      }
      if (filteredItems.value.every(function (item) {
        return checkedKeys.indexOf(item.key) >= 0 || !!item.disabled;
      })) {
        return 'all';
      }
      return 'part';
    });
    var enabledItemKeys = computed(function () {
      return getEnabledItemKeys(filteredItems.value);
    });
    var getNewSelectKeys = function getNewSelectKeys(keys, unCheckedKeys) {
      return Array.from(new Set([].concat(_toConsumableArray(keys), _toConsumableArray(props.checkedKeys)))).filter(function (key) {
        return unCheckedKeys.indexOf(key) === -1;
      });
    };
    var getCheckBox = function getCheckBox(_ref2) {
      var disabled = _ref2.disabled,
        prefixCls = _ref2.prefixCls;
      var checkedAll = checkStatus.value === 'all';
      var checkAllCheckbox = _createVNode(Checkbox, {
        "disabled": disabled,
        "checked": checkedAll,
        "indeterminate": checkStatus.value === 'part',
        "class": "".concat(prefixCls, "-checkbox"),
        "onChange": function onChange() {
          // Only select enabled items
          var keys = enabledItemKeys.value;
          props.onItemSelectAll(getNewSelectKeys(!checkedAll ? keys : [], checkedAll ? props.checkedKeys : []));
        }
      }, null);
      return checkAllCheckbox;
    };
    var handleFilter = function handleFilter(e) {
      var _props$handleFilter;
      var filter = e.target.value;
      filterValue.value = filter;
      (_props$handleFilter = props.handleFilter) === null || _props$handleFilter === void 0 ? void 0 : _props$handleFilter.call(props, e);
    };
    var handleClear = function handleClear(e) {
      var _props$handleClear;
      filterValue.value = '';
      (_props$handleClear = props.handleClear) === null || _props$handleClear === void 0 ? void 0 : _props$handleClear.call(props, e);
    };
    var matchFilter = function matchFilter(text, item) {
      var filterOption = props.filterOption;
      if (filterOption) {
        return filterOption(filterValue.value, item);
      }
      return text.indexOf(filterValue.value) >= 0;
    };
    var getSelectAllLabel = function getSelectAllLabel(selectedCount, totalCount) {
      var itemsUnit = props.itemsUnit,
        itemUnit = props.itemUnit,
        selectAllLabel = props.selectAllLabel;
      if (selectAllLabel) {
        return typeof selectAllLabel === 'function' ? selectAllLabel({
          selectedCount: selectedCount,
          totalCount: totalCount
        }) : selectAllLabel;
      }
      var unit = totalCount > 1 ? itemsUnit : itemUnit;
      return _createVNode(_Fragment, null, [(selectedCount > 0 ? "".concat(selectedCount, "/") : '') + totalCount, _createTextVNode(" "), unit]);
    };
    var getListBody = function getListBody(prefixCls, searchPlaceholder, checkedKeys, renderList, showSearch, disabled) {
      var search = showSearch ? _createVNode("div", {
        "class": "".concat(prefixCls, "-body-search-wrapper")
      }, [_createVNode(Search, {
        "prefixCls": "".concat(prefixCls, "-search"),
        "onChange": handleFilter,
        "handleClear": handleClear,
        "placeholder": searchPlaceholder,
        "value": filterValue.value,
        "disabled": disabled
      }, null)]) : null;
      var bodyNode;
      var _splitAttrs = splitAttrs(attrs),
        onEvents = _splitAttrs.onEvents;
      var _renderListBody = renderListBody(renderList, _objectSpread(_objectSpread({}, props), {}, {
          filteredItems: filteredItems.value,
          filteredRenderItems: filteredRenderItems.value,
          selectedKeys: checkedKeys
        }, onEvents)),
        bodyContent = _renderListBody.bodyContent,
        customize = _renderListBody.customize;
      // We should wrap customize list body in a classNamed div to use flex layout.
      if (customize) {
        bodyNode = _createVNode("div", {
          "class": "".concat(prefixCls, "-body-customize-wrapper")
        }, [bodyContent]);
      } else {
        bodyNode = filteredItems.value.length ? bodyContent : _createVNode("div", {
          "class": "".concat(prefixCls, "-body-not-found")
        }, [props.notFoundContent]);
      }
      return _createVNode("div", {
        "class": showSearch ? "".concat(prefixCls, "-body ").concat(prefixCls, "-body-with-search") : "".concat(prefixCls, "-body"),
        "ref": transferNode
      }, [search, bodyNode]);
    };
    return function () {
      var _slots$footer, _classNames, _slots$titleText;
      var prefixCls = props.prefixCls,
        checkedKeys = props.checkedKeys,
        disabled = props.disabled,
        showSearch = props.showSearch,
        searchPlaceholder = props.searchPlaceholder,
        selectAll = props.selectAll,
        selectCurrent = props.selectCurrent,
        selectInvert = props.selectInvert,
        removeAll = props.removeAll,
        removeCurrent = props.removeCurrent,
        renderList = props.renderList,
        onItemSelectAll = props.onItemSelectAll,
        onItemRemove = props.onItemRemove,
        _props$showSelectAll = props.showSelectAll,
        showSelectAll = _props$showSelectAll === void 0 ? true : _props$showSelectAll,
        showRemove = props.showRemove,
        pagination = props.pagination;
      // Custom Layout
      var footerDom = (_slots$footer = slots.footer) === null || _slots$footer === void 0 ? void 0 : _slots$footer.call(slots, _objectSpread({}, props));
      var listCls = classNames(prefixCls, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-with-pagination"), !!pagination), _defineProperty(_classNames, "".concat(prefixCls, "-with-footer"), !!footerDom), _classNames));
      // ================================= List Body =================================
      var listBody = getListBody(prefixCls, searchPlaceholder, checkedKeys, renderList, showSearch, disabled);
      var listFooter = footerDom ? _createVNode("div", {
        "class": "".concat(prefixCls, "-footer")
      }, [footerDom]) : null;
      var checkAllCheckbox = !showRemove && !pagination && getCheckBox({
        disabled: disabled,
        prefixCls: prefixCls
      });
      var menu = null;
      if (showRemove) {
        menu = _createVNode(Menu, null, {
          default: function _default() {
            return [pagination && _createVNode(Menu.Item, {
              "key": "removeCurrent",
              "onClick": function onClick() {
                var pageKeys = getEnabledItemKeys((defaultListBodyRef.value.items || []).map(function (entity) {
                  return entity.item;
                }));
                onItemRemove === null || onItemRemove === void 0 ? void 0 : onItemRemove(pageKeys);
              }
            }, {
              default: function _default() {
                return [removeCurrent];
              }
            }), _createVNode(Menu.Item, {
              "key": "removeAll",
              "onClick": function onClick() {
                onItemRemove === null || onItemRemove === void 0 ? void 0 : onItemRemove(enabledItemKeys.value);
              }
            }, {
              default: function _default() {
                return [removeAll];
              }
            })];
          }
        });
      } else {
        menu = _createVNode(Menu, null, {
          default: function _default() {
            return [_createVNode(Menu.Item, {
              "key": "selectAll",
              "onClick": function onClick() {
                var keys = enabledItemKeys.value;
                onItemSelectAll(getNewSelectKeys(keys, []));
              }
            }, {
              default: function _default() {
                return [selectAll];
              }
            }), pagination && _createVNode(Menu.Item, {
              "onClick": function onClick() {
                var pageKeys = getEnabledItemKeys((defaultListBodyRef.value.items || []).map(function (entity) {
                  return entity.item;
                }));
                onItemSelectAll(getNewSelectKeys(pageKeys, []));
              }
            }, {
              default: function _default() {
                return [selectCurrent];
              }
            }), _createVNode(Menu.Item, {
              "key": "selectInvert",
              "onClick": function onClick() {
                var availableKeys;
                if (pagination) {
                  availableKeys = getEnabledItemKeys((defaultListBodyRef.value.items || []).map(function (entity) {
                    return entity.item;
                  }));
                } else {
                  availableKeys = enabledItemKeys.value;
                }
                var checkedKeySet = new Set(checkedKeys);
                var newCheckedKeys = [];
                var newUnCheckedKeys = [];
                availableKeys.forEach(function (key) {
                  if (checkedKeySet.has(key)) {
                    newUnCheckedKeys.push(key);
                  } else {
                    newCheckedKeys.push(key);
                  }
                });
                onItemSelectAll(getNewSelectKeys(newCheckedKeys, newUnCheckedKeys));
              }
            }, {
              default: function _default() {
                return [selectInvert];
              }
            })];
          }
        });
      }
      var dropdown = _createVNode(Dropdown, {
        "class": "".concat(prefixCls, "-header-dropdown"),
        "overlay": menu,
        "disabled": disabled
      }, {
        default: function _default() {
          return [_createVNode(DownOutlined, null, null)];
        }
      });
      return _createVNode("div", {
        "class": listCls,
        "style": attrs.style
      }, [_createVNode("div", {
        "class": "".concat(prefixCls, "-header")
      }, [showSelectAll ? _createVNode(_Fragment, null, [checkAllCheckbox, dropdown]) : null, _createVNode("span", {
        "class": "".concat(prefixCls, "-header-selected")
      }, [_createVNode("span", null, [getSelectAllLabel(checkedKeys.length, filteredItems.value.length)]), _createVNode("span", {
        "class": "".concat(prefixCls, "-header-title")
      }, [(_slots$titleText = slots.titleText) === null || _slots$titleText === void 0 ? void 0 : _slots$titleText.call(slots)])])]), listBody, listFooter]);
    };
  }
});