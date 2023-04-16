"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transferListProps = exports.default = void 0;
var _vue = require("vue");
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _classNames2 = _interopRequireDefault(require("../_util/classNames"));
var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));
var _propsUtil = require("../_util/props-util");
var _DownOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/DownOutlined"));
var _checkbox = _interopRequireDefault(require("../checkbox"));
var _menu = _interopRequireDefault(require("../menu"));
var _dropdown = _interopRequireDefault(require("../dropdown"));
var _search = _interopRequireDefault(require("./search"));
var _ListBody = _interopRequireDefault(require("./ListBody"));
var defaultRender = function defaultRender() {
  return null;
};
function isRenderResultPlainObject(result) {
  return result && !(0, _propsUtil.isValidElement)(result) && Object.prototype.toString.call(result) === '[object Object]';
}
function getEnabledItemKeys(items) {
  return items.filter(function (data) {
    return !data.disabled;
  }).map(function (data) {
    return data.key;
  });
}
var transferListProps = {
  prefixCls: String,
  dataSource: {
    type: Array,
    default: []
  },
  filter: String,
  filterOption: Function,
  checkedKeys: _vueTypes.default.arrayOf(_vueTypes.default.string),
  handleFilter: Function,
  handleClear: Function,
  renderItem: Function,
  showSearch: {
    type: Boolean,
    default: false
  },
  searchPlaceholder: String,
  notFoundContent: _vueTypes.default.any,
  itemUnit: String,
  itemsUnit: String,
  renderList: _vueTypes.default.any,
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
  selectAllLabel: _vueTypes.default.any,
  showRemove: {
    type: Boolean,
    default: undefined
  },
  pagination: _vueTypes.default.any,
  onItemSelect: Function,
  onItemSelectAll: Function,
  onItemRemove: Function,
  onScroll: Function
};
exports.transferListProps = transferListProps;
var _default2 = (0, _vue.defineComponent)({
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
    var filterValue = (0, _vue.ref)('');
    var transferNode = (0, _vue.ref)();
    var defaultListBodyRef = (0, _vue.ref)();
    var renderListBody = function renderListBody(renderList, props) {
      var bodyContent = renderList ? renderList(props) : null;
      var customize = !!bodyContent && (0, _propsUtil.filterEmpty)(bodyContent).length > 0;
      if (!customize) {
        bodyContent = (0, _vue.createVNode)(_ListBody.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, props), {}, {
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
    var filteredItems = (0, _vue.ref)([]);
    var filteredRenderItems = (0, _vue.ref)([]);
    (0, _vue.watchEffect)(function () {
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
    var checkStatus = (0, _vue.computed)(function () {
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
    var enabledItemKeys = (0, _vue.computed)(function () {
      return getEnabledItemKeys(filteredItems.value);
    });
    var getNewSelectKeys = function getNewSelectKeys(keys, unCheckedKeys) {
      return Array.from(new Set([].concat((0, _toConsumableArray2.default)(keys), (0, _toConsumableArray2.default)(props.checkedKeys)))).filter(function (key) {
        return unCheckedKeys.indexOf(key) === -1;
      });
    };
    var getCheckBox = function getCheckBox(_ref2) {
      var disabled = _ref2.disabled,
        prefixCls = _ref2.prefixCls;
      var checkedAll = checkStatus.value === 'all';
      var checkAllCheckbox = (0, _vue.createVNode)(_checkbox.default, {
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
      return (0, _vue.createVNode)(_vue.Fragment, null, [(selectedCount > 0 ? "".concat(selectedCount, "/") : '') + totalCount, (0, _vue.createTextVNode)(" "), unit]);
    };
    var getListBody = function getListBody(prefixCls, searchPlaceholder, checkedKeys, renderList, showSearch, disabled) {
      var search = showSearch ? (0, _vue.createVNode)("div", {
        "class": "".concat(prefixCls, "-body-search-wrapper")
      }, [(0, _vue.createVNode)(_search.default, {
        "prefixCls": "".concat(prefixCls, "-search"),
        "onChange": handleFilter,
        "handleClear": handleClear,
        "placeholder": searchPlaceholder,
        "value": filterValue.value,
        "disabled": disabled
      }, null)]) : null;
      var bodyNode;
      var _splitAttrs = (0, _propsUtil.splitAttrs)(attrs),
        onEvents = _splitAttrs.onEvents;
      var _renderListBody = renderListBody(renderList, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, props), {}, {
          filteredItems: filteredItems.value,
          filteredRenderItems: filteredRenderItems.value,
          selectedKeys: checkedKeys
        }, onEvents)),
        bodyContent = _renderListBody.bodyContent,
        customize = _renderListBody.customize;
      // We should wrap customize list body in a classNamed div to use flex layout.
      if (customize) {
        bodyNode = (0, _vue.createVNode)("div", {
          "class": "".concat(prefixCls, "-body-customize-wrapper")
        }, [bodyContent]);
      } else {
        bodyNode = filteredItems.value.length ? bodyContent : (0, _vue.createVNode)("div", {
          "class": "".concat(prefixCls, "-body-not-found")
        }, [props.notFoundContent]);
      }
      return (0, _vue.createVNode)("div", {
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
      var footerDom = (_slots$footer = slots.footer) === null || _slots$footer === void 0 ? void 0 : _slots$footer.call(slots, (0, _objectSpread2.default)({}, props));
      var listCls = (0, _classNames2.default)(prefixCls, (_classNames = {}, (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-with-pagination"), !!pagination), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-with-footer"), !!footerDom), _classNames));
      // ================================= List Body =================================
      var listBody = getListBody(prefixCls, searchPlaceholder, checkedKeys, renderList, showSearch, disabled);
      var listFooter = footerDom ? (0, _vue.createVNode)("div", {
        "class": "".concat(prefixCls, "-footer")
      }, [footerDom]) : null;
      var checkAllCheckbox = !showRemove && !pagination && getCheckBox({
        disabled: disabled,
        prefixCls: prefixCls
      });
      var menu = null;
      if (showRemove) {
        menu = (0, _vue.createVNode)(_menu.default, null, {
          default: function _default() {
            return [pagination && (0, _vue.createVNode)(_menu.default.Item, {
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
            }), (0, _vue.createVNode)(_menu.default.Item, {
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
        menu = (0, _vue.createVNode)(_menu.default, null, {
          default: function _default() {
            return [(0, _vue.createVNode)(_menu.default.Item, {
              "key": "selectAll",
              "onClick": function onClick() {
                var keys = enabledItemKeys.value;
                onItemSelectAll(getNewSelectKeys(keys, []));
              }
            }, {
              default: function _default() {
                return [selectAll];
              }
            }), pagination && (0, _vue.createVNode)(_menu.default.Item, {
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
            }), (0, _vue.createVNode)(_menu.default.Item, {
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
      var dropdown = (0, _vue.createVNode)(_dropdown.default, {
        "class": "".concat(prefixCls, "-header-dropdown"),
        "overlay": menu,
        "disabled": disabled
      }, {
        default: function _default() {
          return [(0, _vue.createVNode)(_DownOutlined.default, null, null)];
        }
      });
      return (0, _vue.createVNode)("div", {
        "class": listCls,
        "style": attrs.style
      }, [(0, _vue.createVNode)("div", {
        "class": "".concat(prefixCls, "-header")
      }, [showSelectAll ? (0, _vue.createVNode)(_vue.Fragment, null, [checkAllCheckbox, dropdown]) : null, (0, _vue.createVNode)("span", {
        "class": "".concat(prefixCls, "-header-selected")
      }, [(0, _vue.createVNode)("span", null, [getSelectAllLabel(checkedKeys.length, filteredItems.value.length)]), (0, _vue.createVNode)("span", {
        "class": "".concat(prefixCls, "-header-title")
      }, [(_slots$titleText = slots.titleText) === null || _slots$titleText === void 0 ? void 0 : _slots$titleText.call(slots)])])]), listBody, listFooter]);
    };
  }
});
exports.default = _default2;