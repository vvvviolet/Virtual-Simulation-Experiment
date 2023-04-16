"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transferListBodyProps = exports.default = void 0;
var _vue = require("vue");
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _classNames2 = _interopRequireDefault(require("../_util/classNames"));
var _ListItem = _interopRequireDefault(require("./ListItem"));
var _pagination = _interopRequireDefault(require("../pagination"));
var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));
var transferListBodyProps = {
  prefixCls: String,
  filteredRenderItems: _vueTypes.default.array.def([]),
  selectedKeys: _vueTypes.default.array,
  disabled: {
    type: Boolean,
    default: undefined
  },
  showRemove: {
    type: Boolean,
    default: undefined
  },
  pagination: _vueTypes.default.any,
  onItemSelect: Function,
  onScroll: Function,
  onItemRemove: Function
};
exports.transferListBodyProps = transferListBodyProps;
function parsePagination(pagination) {
  if (!pagination) {
    return null;
  }
  var defaultPagination = {
    pageSize: 10
  };
  if ((0, _typeof2.default)(pagination) === 'object') {
    return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, defaultPagination), pagination);
  }
  return defaultPagination;
}
var ListBody = (0, _vue.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  name: 'ListBody',
  inheritAttrs: false,
  props: transferListBodyProps,
  emits: ['itemSelect', 'itemRemove', 'scroll'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit,
      expose = _ref.expose;
    var current = (0, _vue.ref)(1);
    var handleItemSelect = function handleItemSelect(item) {
      var selectedKeys = props.selectedKeys;
      var checked = selectedKeys.indexOf(item.key) >= 0;
      emit('itemSelect', item.key, !checked);
    };
    var handleItemRemove = function handleItemRemove(item) {
      emit('itemRemove', [item.key]);
    };
    var handleScroll = function handleScroll(e) {
      emit('scroll', e);
    };
    var mergedPagination = (0, _vue.computed)(function () {
      return parsePagination(props.pagination);
    });
    (0, _vue.watch)([mergedPagination, function () {
      return props.filteredRenderItems;
    }], function () {
      if (mergedPagination.value) {
        // Calculate the page number
        var maxPageCount = Math.ceil(props.filteredRenderItems.length / mergedPagination.value.pageSize);
        if (current.value > maxPageCount) {
          current.value = maxPageCount;
        }
      }
    }, {
      immediate: true
    });
    var items = (0, _vue.computed)(function () {
      var filteredRenderItems = props.filteredRenderItems;
      var displayItems = filteredRenderItems;
      if (mergedPagination.value) {
        displayItems = filteredRenderItems.slice((current.value - 1) * mergedPagination.value.pageSize, current.value * mergedPagination.value.pageSize);
      }
      return displayItems;
    });
    var onPageChange = function onPageChange(cur) {
      current.value = cur;
    };
    expose({
      items: items
    });
    return function () {
      var prefixCls = props.prefixCls,
        filteredRenderItems = props.filteredRenderItems,
        selectedKeys = props.selectedKeys,
        globalDisabled = props.disabled,
        showRemove = props.showRemove;
      var paginationNode = null;
      if (mergedPagination.value) {
        paginationNode = (0, _vue.createVNode)(_pagination.default, {
          "simple": true,
          "size": "small",
          "disabled": globalDisabled,
          "class": "".concat(prefixCls, "-pagination"),
          "total": filteredRenderItems.length,
          "pageSize": mergedPagination.value.pageSize,
          "current": current.value,
          "onChange": onPageChange
        }, null);
      }
      var itemsList = items.value.map(function (_ref2) {
        var renderedEl = _ref2.renderedEl,
          renderedText = _ref2.renderedText,
          item = _ref2.item;
        var disabled = item.disabled;
        var checked = selectedKeys.indexOf(item.key) >= 0;
        return (0, _vue.createVNode)(_ListItem.default, {
          "disabled": globalDisabled || disabled,
          "key": item.key,
          "item": item,
          "renderedText": renderedText,
          "renderedEl": renderedEl,
          "checked": checked,
          "prefixCls": prefixCls,
          "onClick": handleItemSelect,
          "onRemove": handleItemRemove,
          "showRemove": showRemove
        }, null);
      });
      return (0, _vue.createVNode)(_vue.Fragment, null, [(0, _vue.createVNode)("ul", {
        "class": (0, _classNames2.default)("".concat(prefixCls, "-content"), (0, _defineProperty2.default)({}, "".concat(prefixCls, "-content-show-remove"), showRemove)),
        "onScroll": handleScroll
      }, [itemsList]), paginationNode]);
    };
  }
});
var _default = ListBody;
exports.default = _default;