import _typeof from "@babel/runtime/helpers/esm/typeof";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { resolveDirective as _resolveDirective, createVNode as _createVNode } from "vue";
import RcTable from '../vc-table';
import { INTERNAL_HOOKS } from '../vc-table/Table';
import Spin from '../spin';
import Pagination from '../pagination';
import usePagination, { DEFAULT_PAGE_SIZE, getPaginationParam } from './hooks/usePagination';
import useLazyKVMap from './hooks/useLazyKVMap';
import useSelection from './hooks/useSelection';
import useSorter, { getSortData } from './hooks/useSorter';
import useFilter, { getFilterData } from './hooks/useFilter';
import useTitleColumns from './hooks/useTitleColumns';
import renderExpandIcon from './ExpandIcon';
import scrollTo from '../_util/scrollTo';
import defaultLocale from '../locale/en_US';
import devWarning from '../vc-util/devWarning';
import { nextTick, reactive, ref, computed, defineComponent, toRef, watchEffect, watch } from 'vue';
import useBreakpoint from '../_util/hooks/useBreakpoint';
import useConfigInject from '../_util/hooks/useConfigInject';
import { useLocaleReceiver } from '../locale-provider/LocaleReceiver';
import classNames from '../_util/classNames';
import omit from '../_util/omit';
import { initDefaultProps } from '../_util/props-util';
import { useProvideSlots, useProvideTableContext } from './context';
import useColumns from './hooks/useColumns';
import { convertChildrenToColumns } from './util';
var EMPTY_LIST = [];
export var tableProps = function tableProps() {
  return {
    prefixCls: {
      type: String,
      default: undefined
    },
    columns: {
      type: Array,
      default: undefined
    },
    rowKey: {
      type: [String, Function],
      default: undefined
    },
    tableLayout: {
      type: String,
      default: undefined
    },
    rowClassName: {
      type: [String, Function],
      default: undefined
    },
    title: {
      type: Function,
      default: undefined
    },
    footer: {
      type: Function,
      default: undefined
    },
    id: {
      type: String,
      default: undefined
    },
    showHeader: {
      type: Boolean,
      default: undefined
    },
    components: {
      type: Object,
      default: undefined
    },
    customRow: {
      type: Function,
      default: undefined
    },
    customHeaderRow: {
      type: Function,
      default: undefined
    },
    direction: {
      type: String,
      default: undefined
    },
    expandFixed: {
      type: [Boolean, String],
      default: undefined
    },
    expandColumnWidth: {
      type: Number,
      default: undefined
    },
    expandedRowKeys: {
      type: Array,
      default: undefined
    },
    defaultExpandedRowKeys: {
      type: Array,
      default: undefined
    },
    expandedRowRender: {
      type: Function,
      default: undefined
    },
    expandRowByClick: {
      type: Boolean,
      default: undefined
    },
    expandIcon: {
      type: Function,
      default: undefined
    },
    onExpand: {
      type: Function,
      default: undefined
    },
    onExpandedRowsChange: {
      type: Function,
      default: undefined
    },
    'onUpdate:expandedRowKeys': {
      type: Function,
      default: undefined
    },
    defaultExpandAllRows: {
      type: Boolean,
      default: undefined
    },
    indentSize: {
      type: Number,
      default: undefined
    },
    /** @deprecated Please use `EXPAND_COLUMN` in `columns` directly */
    expandIconColumnIndex: {
      type: Number,
      default: undefined
    },
    showExpandColumn: {
      type: Boolean,
      default: undefined
    },
    expandedRowClassName: {
      type: Function,
      default: undefined
    },
    childrenColumnName: {
      type: String,
      default: undefined
    },
    rowExpandable: {
      type: Function,
      default: undefined
    },
    sticky: {
      type: [Boolean, Object],
      default: undefined
    },
    dropdownPrefixCls: String,
    dataSource: {
      type: Array,
      default: undefined
    },
    pagination: {
      type: [Boolean, Object],
      default: undefined
    },
    loading: {
      type: [Boolean, Object],
      default: undefined
    },
    size: {
      type: String,
      default: undefined
    },
    bordered: Boolean,
    locale: {
      type: Object,
      default: undefined
    },
    onChange: {
      type: Function,
      default: undefined
    },
    onResizeColumn: {
      type: Function,
      default: undefined
    },
    rowSelection: {
      type: Object,
      default: undefined
    },
    getPopupContainer: {
      type: Function,
      default: undefined
    },
    scroll: {
      type: Object,
      default: undefined
    },
    sortDirections: {
      type: Array,
      default: undefined
    },
    showSorterTooltip: {
      type: [Boolean, Object],
      default: true
    },
    contextSlots: {
      type: Object
    },
    transformCellText: {
      type: Function
    }
  };
};
var InteralTable = defineComponent({
  name: 'InteralTable',
  inheritAttrs: false,
  props: initDefaultProps(tableProps(), {
    rowKey: 'key'
  }),
  // emits: ['expandedRowsChange', 'change', 'expand'],
  slots: ['emptyText', 'expandIcon', 'title', 'footer', 'summary', 'expandedRowRender', 'bodyCell', 'headerCell', 'customFilterIcon', 'customFilterDropdown'],
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs,
      slots = _ref.slots,
      expose = _ref.expose,
      emit = _ref.emit;
    devWarning(!(typeof props.rowKey === 'function' && props.rowKey.length > 1), 'Table', '`index` parameter of `rowKey` function is deprecated. There is no guarantee that it will work as expected.');
    useProvideSlots(computed(function () {
      return props.contextSlots;
    }));
    useProvideTableContext({
      onResizeColumn: function onResizeColumn(w, col) {
        emit('resizeColumn', w, col);
      }
    });
    var screens = useBreakpoint();
    var mergedColumns = computed(function () {
      var matched = new Set(Object.keys(screens.value).filter(function (m) {
        return screens.value[m];
      }));
      return props.columns.filter(function (c) {
        return !c.responsive || c.responsive.some(function (r) {
          return matched.has(r);
        });
      });
    });
    var _useConfigInject = useConfigInject('table', props),
      mergedSize = _useConfigInject.size,
      renderEmpty = _useConfigInject.renderEmpty,
      direction = _useConfigInject.direction,
      prefixCls = _useConfigInject.prefixCls,
      configProvider = _useConfigInject.configProvider;
    var transformCellText = computed(function () {
      return props.transformCellText || configProvider.transformCellText;
    });
    var _useLocaleReceiver = useLocaleReceiver('Table', defaultLocale.Table, toRef(props, 'locale')),
      _useLocaleReceiver2 = _slicedToArray(_useLocaleReceiver, 1),
      tableLocale = _useLocaleReceiver2[0];
    var rawData = computed(function () {
      return props.dataSource || EMPTY_LIST;
    });
    var dropdownPrefixCls = computed(function () {
      return configProvider.getPrefixCls('dropdown', props.dropdownPrefixCls);
    });
    var childrenColumnName = computed(function () {
      return props.childrenColumnName || 'children';
    });
    var expandType = computed(function () {
      if (rawData.value.some(function (item) {
        return item === null || item === void 0 ? void 0 : item[childrenColumnName.value];
      })) {
        return 'nest';
      }
      if (props.expandedRowRender) {
        return 'row';
      }
      return null;
    });
    var internalRefs = reactive({
      body: null
    });
    var updateInternalRefs = function updateInternalRefs(refs) {
      _extends(internalRefs, refs);
    };
    // ============================ RowKey ============================
    var getRowKey = computed(function () {
      if (typeof props.rowKey === 'function') {
        return props.rowKey;
      }
      return function (record) {
        return record === null || record === void 0 ? void 0 : record[props.rowKey];
      };
    });
    var _useLazyKVMap = useLazyKVMap(rawData, childrenColumnName, getRowKey),
      _useLazyKVMap2 = _slicedToArray(_useLazyKVMap, 1),
      getRecordByKey = _useLazyKVMap2[0];
    // ============================ Events =============================
    var changeEventInfo = {};
    var triggerOnChange = function triggerOnChange(info, action) {
      var reset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var pagination = props.pagination,
        scroll = props.scroll,
        onChange = props.onChange;
      var changeInfo = _objectSpread(_objectSpread({}, changeEventInfo), info);
      if (reset) {
        changeEventInfo.resetPagination();
        // Reset event param
        if (changeInfo.pagination.current) {
          changeInfo.pagination.current = 1;
        }
        // Trigger pagination events
        if (pagination && pagination.onChange) {
          pagination.onChange(1, changeInfo.pagination.pageSize);
        }
      }
      if (scroll && scroll.scrollToFirstRowOnChange !== false && internalRefs.body) {
        scrollTo(0, {
          getContainer: function getContainer() {
            return internalRefs.body;
          }
        });
      }
      onChange === null || onChange === void 0 ? void 0 : onChange(changeInfo.pagination, changeInfo.filters, changeInfo.sorter, {
        currentDataSource: getFilterData(getSortData(rawData.value, changeInfo.sorterStates, childrenColumnName.value), changeInfo.filterStates),
        action: action
      });
    };
    /**
     * Controlled state in `columns` is not a good idea that makes too many code (1000+ line?) to read
     * state out and then put it back to title render. Move these code into `hooks` but still too
     * complex. We should provides Table props like `sorter` & `filter` to handle control in next big version.
     */
    // ============================ Sorter =============================
    var onSorterChange = function onSorterChange(sorter, sorterStates) {
      triggerOnChange({
        sorter: sorter,
        sorterStates: sorterStates
      }, 'sort', false);
    };
    var _useSorter = useSorter({
        prefixCls: prefixCls,
        mergedColumns: mergedColumns,
        onSorterChange: onSorterChange,
        sortDirections: computed(function () {
          return props.sortDirections || ['ascend', 'descend'];
        }),
        tableLocale: tableLocale,
        showSorterTooltip: toRef(props, 'showSorterTooltip')
      }),
      _useSorter2 = _slicedToArray(_useSorter, 4),
      transformSorterColumns = _useSorter2[0],
      sortStates = _useSorter2[1],
      sorterTitleProps = _useSorter2[2],
      sorters = _useSorter2[3];
    var sortedData = computed(function () {
      return getSortData(rawData.value, sortStates.value, childrenColumnName.value);
    });
    // ============================ Filter ============================
    var onFilterChange = function onFilterChange(filters, filterStates) {
      triggerOnChange({
        filters: filters,
        filterStates: filterStates
      }, 'filter', true);
    };
    var _useFilter = useFilter({
        prefixCls: prefixCls,
        locale: tableLocale,
        dropdownPrefixCls: dropdownPrefixCls,
        mergedColumns: mergedColumns,
        onFilterChange: onFilterChange,
        getPopupContainer: toRef(props, 'getPopupContainer')
      }),
      _useFilter2 = _slicedToArray(_useFilter, 3),
      transformFilterColumns = _useFilter2[0],
      filterStates = _useFilter2[1],
      filters = _useFilter2[2];
    var mergedData = computed(function () {
      return getFilterData(sortedData.value, filterStates.value);
    });
    // ============================ Column ============================
    var _useColumns = useColumns(toRef(props, 'contextSlots')),
      _useColumns2 = _slicedToArray(_useColumns, 1),
      transformBasicColumns = _useColumns2[0];
    var columnTitleProps = computed(function () {
      return _objectSpread({}, sorterTitleProps.value);
    });
    var _useTitleColumns = useTitleColumns(columnTitleProps),
      _useTitleColumns2 = _slicedToArray(_useTitleColumns, 1),
      transformTitleColumns = _useTitleColumns2[0];
    // ========================== Pagination ==========================
    var onPaginationChange = function onPaginationChange(current, pageSize) {
      triggerOnChange({
        pagination: _objectSpread(_objectSpread({}, changeEventInfo.pagination), {}, {
          current: current,
          pageSize: pageSize
        })
      }, 'paginate');
    };
    var _usePagination = usePagination(computed(function () {
        return mergedData.value.length;
      }), toRef(props, 'pagination'), onPaginationChange),
      _usePagination2 = _slicedToArray(_usePagination, 2),
      mergedPagination = _usePagination2[0],
      resetPagination = _usePagination2[1];
    watchEffect(function () {
      changeEventInfo.sorter = sorters.value;
      changeEventInfo.sorterStates = sortStates.value;
      changeEventInfo.filters = filters.value;
      changeEventInfo.filterStates = filterStates.value;
      changeEventInfo.pagination = props.pagination === false ? {} : getPaginationParam(props.pagination, mergedPagination.value);
      changeEventInfo.resetPagination = resetPagination;
    });
    // ============================= Data =============================
    var pageData = computed(function () {
      if (props.pagination === false || !mergedPagination.value.pageSize) {
        return mergedData.value;
      }
      var _mergedPagination$val = mergedPagination.value,
        _mergedPagination$val2 = _mergedPagination$val.current,
        current = _mergedPagination$val2 === void 0 ? 1 : _mergedPagination$val2,
        total = _mergedPagination$val.total,
        _mergedPagination$val3 = _mergedPagination$val.pageSize,
        pageSize = _mergedPagination$val3 === void 0 ? DEFAULT_PAGE_SIZE : _mergedPagination$val3;
      devWarning(current > 0, 'Table', '`current` should be positive number.');
      // Dynamic table data
      if (mergedData.value.length < total) {
        if (mergedData.value.length > pageSize) {
          return mergedData.value.slice((current - 1) * pageSize, current * pageSize);
        }
        return mergedData.value;
      }
      return mergedData.value.slice((current - 1) * pageSize, current * pageSize);
    });
    watchEffect(function () {
      nextTick(function () {
        var _mergedPagination$val4 = mergedPagination.value,
          total = _mergedPagination$val4.total,
          _mergedPagination$val5 = _mergedPagination$val4.pageSize,
          pageSize = _mergedPagination$val5 === void 0 ? DEFAULT_PAGE_SIZE : _mergedPagination$val5;
        // Dynamic table data
        if (mergedData.value.length < total) {
          if (mergedData.value.length > pageSize) {
            devWarning(false, 'Table', '`dataSource` length is less than `pagination.total` but large than `pagination.pageSize`. Please make sure your config correct data with async mode.');
          }
        }
      });
    }, {
      flush: 'post'
    });
    var expandIconColumnIndex = computed(function () {
      if (props.showExpandColumn === false) return -1;
      // Adjust expand icon index, no overwrite expandIconColumnIndex if set.
      if (expandType.value === 'nest' && props.expandIconColumnIndex === undefined) {
        return props.rowSelection ? 1 : 0;
      } else if (props.expandIconColumnIndex > 0 && props.rowSelection) {
        return props.expandIconColumnIndex - 1;
      }
      return props.expandIconColumnIndex;
    });
    var rowSelection = ref();
    watch(function () {
      return props.rowSelection;
    }, function () {
      rowSelection.value = props.rowSelection ? _objectSpread({}, props.rowSelection) : props.rowSelection;
    }, {
      deep: true,
      immediate: true
    });
    // ========================== Selections ==========================
    var _useSelection = useSelection(rowSelection, {
        prefixCls: prefixCls,
        data: mergedData,
        pageData: pageData,
        getRowKey: getRowKey,
        getRecordByKey: getRecordByKey,
        expandType: expandType,
        childrenColumnName: childrenColumnName,
        locale: tableLocale,
        getPopupContainer: computed(function () {
          return props.getPopupContainer;
        })
      }),
      _useSelection2 = _slicedToArray(_useSelection, 2),
      transformSelectionColumns = _useSelection2[0],
      selectedKeySet = _useSelection2[1];
    var internalRowClassName = function internalRowClassName(record, index, indent) {
      var mergedRowClassName;
      var rowClassName = props.rowClassName;
      if (typeof rowClassName === 'function') {
        mergedRowClassName = classNames(rowClassName(record, index, indent));
      } else {
        mergedRowClassName = classNames(rowClassName);
      }
      return classNames(_defineProperty({}, "".concat(prefixCls.value, "-row-selected"), selectedKeySet.value.has(getRowKey.value(record, index))), mergedRowClassName);
    };
    expose({
      selectedKeySet: selectedKeySet
    });
    var indentSize = computed(function () {
      // Indent size
      return typeof props.indentSize === 'number' ? props.indentSize : 15;
    });
    var transformColumns = function transformColumns(innerColumns) {
      var res = transformTitleColumns(transformSelectionColumns(transformFilterColumns(transformSorterColumns(transformBasicColumns(innerColumns)))));
      return res;
    };
    return function () {
      var _mergedPagination$val6, _classNames3;
      var _props$expandIcon = props.expandIcon,
        expandIcon = _props$expandIcon === void 0 ? slots.expandIcon || renderExpandIcon(tableLocale.value) : _props$expandIcon,
        pagination = props.pagination,
        loading = props.loading,
        bordered = props.bordered;
      var topPaginationNode;
      var bottomPaginationNode;
      if (pagination !== false && (_mergedPagination$val6 = mergedPagination.value) !== null && _mergedPagination$val6 !== void 0 && _mergedPagination$val6.total) {
        var paginationSize;
        if (mergedPagination.value.size) {
          paginationSize = mergedPagination.value.size;
        } else {
          paginationSize = mergedSize.value === 'small' || mergedSize.value === 'middle' ? 'small' : undefined;
        }
        var renderPagination = function renderPagination(position) {
          return _createVNode(Pagination, _objectSpread(_objectSpread({}, mergedPagination.value), {}, {
            "class": ["".concat(prefixCls.value, "-pagination ").concat(prefixCls.value, "-pagination-").concat(position), mergedPagination.value.class],
            "size": paginationSize
          }), null);
        };
        var defaultPosition = direction.value === 'rtl' ? 'left' : 'right';
        var position = mergedPagination.value.position;
        if (position !== null && Array.isArray(position)) {
          var topPos = position.find(function (p) {
            return p.indexOf('top') !== -1;
          });
          var bottomPos = position.find(function (p) {
            return p.indexOf('bottom') !== -1;
          });
          var isDisable = position.every(function (p) {
            return "".concat(p) === 'none';
          });
          if (!topPos && !bottomPos && !isDisable) {
            bottomPaginationNode = renderPagination(defaultPosition);
          }
          if (topPos) {
            topPaginationNode = renderPagination(topPos.toLowerCase().replace('top', ''));
          }
          if (bottomPos) {
            bottomPaginationNode = renderPagination(bottomPos.toLowerCase().replace('bottom', ''));
          }
        } else {
          bottomPaginationNode = renderPagination(defaultPosition);
        }
      }
      // >>>>>>>>> Spinning
      var spinProps;
      if (typeof loading === 'boolean') {
        spinProps = {
          spinning: loading
        };
      } else if (_typeof(loading) === 'object') {
        spinProps = _objectSpread({
          spinning: true
        }, loading);
      }
      var wrapperClassNames = classNames("".concat(prefixCls.value, "-wrapper"), _defineProperty({}, "".concat(prefixCls.value, "-wrapper-rtl"), direction.value === 'rtl'), attrs.class);
      var tableProps = omit(props, ['columns']);
      return _createVNode("div", {
        "class": wrapperClassNames,
        "style": attrs.style
      }, [_createVNode(Spin, _objectSpread({
        "spinning": false
      }, spinProps), {
        default: function _default() {
          return [topPaginationNode, _createVNode(RcTable, _objectSpread(_objectSpread(_objectSpread({}, attrs), tableProps), {}, {
            "expandedRowKeys": props.expandedRowKeys,
            "defaultExpandedRowKeys": props.defaultExpandedRowKeys,
            "expandIconColumnIndex": expandIconColumnIndex.value,
            "indentSize": indentSize.value,
            "expandIcon": expandIcon,
            "columns": mergedColumns.value,
            "direction": direction.value,
            "prefixCls": prefixCls.value,
            "class": classNames((_classNames3 = {}, _defineProperty(_classNames3, "".concat(prefixCls.value, "-middle"), mergedSize.value === 'middle'), _defineProperty(_classNames3, "".concat(prefixCls.value, "-small"), mergedSize.value === 'small'), _defineProperty(_classNames3, "".concat(prefixCls.value, "-bordered"), bordered), _defineProperty(_classNames3, "".concat(prefixCls.value, "-empty"), rawData.value.length === 0), _classNames3)),
            "data": pageData.value,
            "rowKey": getRowKey.value,
            "rowClassName": internalRowClassName,
            "internalHooks": INTERNAL_HOOKS,
            "internalRefs": internalRefs,
            "onUpdateInternalRefs": updateInternalRefs,
            "transformColumns": transformColumns,
            "transformCellText": transformCellText.value
          }), _objectSpread(_objectSpread({}, slots), {}, {
            emptyText: function emptyText() {
              var _slots$emptyText, _props$locale;
              return ((_slots$emptyText = slots.emptyText) === null || _slots$emptyText === void 0 ? void 0 : _slots$emptyText.call(slots)) || ((_props$locale = props.locale) === null || _props$locale === void 0 ? void 0 : _props$locale.emptyText) || renderEmpty.value('Table');
            }
          })), bottomPaginationNode];
        }
      })]);
    };
  }
});
var Table = defineComponent({
  name: 'ATable',
  inheritAttrs: false,
  setup: function setup(_props, _ref2) {
    var attrs = _ref2.attrs,
      slots = _ref2.slots,
      expose = _ref2.expose;
    var table = ref();
    expose({
      table: table
    });
    return function () {
      var _slots$default;
      var props = attrs;
      var columns = props.columns || convertChildrenToColumns((_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots));
      return _createVNode(InteralTable, _objectSpread(_objectSpread({
        "ref": table
      }, attrs), {}, {
        "columns": columns || [],
        "expandedRowRender": slots.expandedRowRender,
        "contextSlots": _objectSpread({}, slots)
      }), slots);
    };
  }
});
export default Table;