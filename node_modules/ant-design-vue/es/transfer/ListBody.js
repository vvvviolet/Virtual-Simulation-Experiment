import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _typeof from "@babel/runtime/helpers/esm/typeof";
import { Fragment as _Fragment, createVNode as _createVNode } from "vue";
import { defineComponent, computed, ref, watch } from 'vue';
import classNames from '../_util/classNames';
import ListItem from './ListItem';
import Pagination from '../pagination';
import PropTypes from '../_util/vue-types';
export var transferListBodyProps = {
  prefixCls: String,
  filteredRenderItems: PropTypes.array.def([]),
  selectedKeys: PropTypes.array,
  disabled: {
    type: Boolean,
    default: undefined
  },
  showRemove: {
    type: Boolean,
    default: undefined
  },
  pagination: PropTypes.any,
  onItemSelect: Function,
  onScroll: Function,
  onItemRemove: Function
};
function parsePagination(pagination) {
  if (!pagination) {
    return null;
  }
  var defaultPagination = {
    pageSize: 10
  };
  if (_typeof(pagination) === 'object') {
    return _objectSpread(_objectSpread({}, defaultPagination), pagination);
  }
  return defaultPagination;
}
var ListBody = defineComponent({
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
    var current = ref(1);
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
    var mergedPagination = computed(function () {
      return parsePagination(props.pagination);
    });
    watch([mergedPagination, function () {
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
    var items = computed(function () {
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
        paginationNode = _createVNode(Pagination, {
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
        return _createVNode(ListItem, {
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
      return _createVNode(_Fragment, null, [_createVNode("ul", {
        "class": classNames("".concat(prefixCls, "-content"), _defineProperty({}, "".concat(prefixCls, "-content-show-remove"), showRemove)),
        "onScroll": handleScroll
      }, [itemsList]), paginationNode]);
    };
  }
});
export default ListBody;