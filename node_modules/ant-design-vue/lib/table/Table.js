"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof3 = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tableProps = exports.default = void 0;
var _vue = require("vue");
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _vcTable = _interopRequireDefault(require("../vc-table"));
var _Table = require("../vc-table/Table");
var _spin = _interopRequireDefault(require("../spin"));
var _pagination = _interopRequireDefault(require("../pagination"));
var _usePagination3 = _interopRequireWildcard(require("./hooks/usePagination"));
var _useLazyKVMap3 = _interopRequireDefault(require("./hooks/useLazyKVMap"));
var _useSelection3 = _interopRequireDefault(require("./hooks/useSelection"));
var _useSorter3 = _interopRequireWildcard(require("./hooks/useSorter"));
var _useFilter3 = _interopRequireWildcard(require("./hooks/useFilter"));
var _useTitleColumns3 = _interopRequireDefault(require("./hooks/useTitleColumns"));
var _ExpandIcon = _interopRequireDefault(require("./ExpandIcon"));
var _scrollTo = _interopRequireDefault(require("../_util/scrollTo"));
var _en_US = _interopRequireDefault(require("../locale/en_US"));
var _devWarning = _interopRequireDefault(require("../vc-util/devWarning"));
var _useBreakpoint = _interopRequireDefault(require("../_util/hooks/useBreakpoint"));
var _useConfigInject2 = _interopRequireDefault(require("../_util/hooks/useConfigInject"));
var _LocaleReceiver = require("../locale-provider/LocaleReceiver");
var _classNames4 = _interopRequireDefault(require("../_util/classNames"));
var _omit = _interopRequireDefault(require("../_util/omit"));
var _propsUtil = require("../_util/props-util");
var _context = require("./context");
var _useColumns3 = _interopRequireDefault(require("./hooks/useColumns"));
var _util = require("./util");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var EMPTY_LIST = [];
var tableProps = function tableProps() {
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
exports.tableProps = tableProps;
var InteralTable = (0, _vue.defineComponent)({
  name: 'InteralTable',
  inheritAttrs: false,
  props: (0, _propsUtil.initDefaultProps)(tableProps(), {
    rowKey: 'key'
  }),
  // emits: ['expandedRowsChange', 'change', 'expand'],
  slots: ['emptyText', 'expandIcon', 'title', 'footer', 'summary', 'expandedRowRender', 'bodyCell', 'headerCell', 'customFilterIcon', 'customFilterDropdown'],
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs,
      slots = _ref.slots,
      expose = _ref.expose,
      emit = _ref.emit;
    (0, _devWarning.default)(!(typeof props.rowKey === 'function' && props.rowKey.length > 1), 'Table', '`index` parameter of `rowKey` function is deprecated. There is no guarantee that it will work as expected.');
    (0, _context.useProvideSlots)((0, _vue.computed)(function () {
      return props.contextSlots;
    }));
    (0, _context.useProvideTableContext)({
      onResizeColumn: function onResizeColumn(w, col) {
        emit('resizeColumn', w, col);
      }
    });
    var screens = (0, _useBreakpoint.default)();
    var mergedColumns = (0, _vue.computed)(function () {
      var matched = new Set(Object.keys(screens.value).filter(function (m) {
        return screens.value[m];
      }));
      return props.columns.filter(function (c) {
        return !c.responsive || c.responsive.some(function (r) {
          return matched.has(r);
        });
      });
    });
    var _useConfigInject = (0, _useConfigInject2.default)('table', props),
      mergedSize = _useConfigInject.size,
      renderEmpty = _useConfigInject.renderEmpty,
      direction = _useConfigInject.direction,
      prefixCls = _useConfigInject.prefixCls,
      configProvider = _useConfigInject.configProvider;
    var transformCellText = (0, _vue.computed)(function () {
      return props.transformCellText || configProvider.transformCellText;
    });
    var _useLocaleReceiver = (0, _LocaleReceiver.useLocaleReceiver)('Table', _en_US.default.Table, (0, _vue.toRef)(props, 'locale')),
      _useLocaleReceiver2 = (0, _slicedToArray2.default)(_useLocaleReceiver, 1),
      tableLocale = _useLocaleReceiver2[0];
    var rawData = (0, _vue.computed)(function () {
      return props.dataSource || EMPTY_LIST;
    });
    var dropdownPrefixCls = (0, _vue.computed)(function () {
      return configProvider.getPrefixCls('dropdown', props.dropdownPrefixCls);
    });
    var childrenColumnName = (0, _vue.computed)(function () {
      return props.childrenColumnName || 'children';
    });
    var expandType = (0, _vue.computed)(function () {
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
    var internalRefs = (0, _vue.reactive)({
      body: null
    });
    var updateInternalRefs = function updateInternalRefs(refs) {
      (0, _extends2.default)(internalRefs, refs);
    };
    // ============================ RowKey ============================
    var getRowKey = (0, _vue.computed)(function () {
      if (typeof props.rowKey === 'function') {
        return props.rowKey;
      }
      return function (record) {
        return record === null || record === void 0 ? void 0 : record[props.rowKey];
      };
    });
    var _useLazyKVMap = (0, _useLazyKVMap3.default)(rawData, childrenColumnName, getRowKey),
      _useLazyKVMap2 = (0, _slicedToArray2.default)(_useLazyKVMap, 1),
      getRecordByKey = _useLazyKVMap2[0];
    // ============================ Events =============================
    var changeEventInfo = {};
    var triggerOnChange = function triggerOnChange(info, action) {
      var reset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var pagination = props.pagination,
        scroll = props.scroll,
        onChange = props.onChange;
      var changeInfo = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, changeEventInfo), info);
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
        (0, _scrollTo.default)(0, {
          getContainer: function getContainer() {
            return internalRefs.body;
          }
        });
      }
      onChange === null || onChange === void 0 ? void 0 : onChange(changeInfo.pagination, changeInfo.filters, changeInfo.sorter, {
        currentDataSource: (0, _useFilter3.getFilterData)((0, _useSorter3.getSortData)(rawData.value, changeInfo.sorterStates, childrenColumnName.value), changeInfo.filterStates),
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
    var _useSorter = (0, _useSorter3.default)({
        prefixCls: prefixCls,
        mergedColumns: mergedColumns,
        onSorterChange: onSorterChange,
        sortDirections: (0, _vue.computed)(function () {
          return props.sortDirections || ['ascend', 'descend'];
        }),
        tableLocale: tableLocale,
        showSorterTooltip: (0, _vue.toRef)(props, 'showSorterTooltip')
      }),
      _useSorter2 = (0, _slicedToArray2.default)(_useSorter, 4),
      transformSorterColumns = _useSorter2[0],
      sortStates = _useSorter2[1],
      sorterTitleProps = _useSorter2[2],
      sorters = _useSorter2[3];
    var sortedData = (0, _vue.computed)(function () {
      return (0, _useSorter3.getSortData)(rawData.value, sortStates.value, childrenColumnName.value);
    });
    // ============================ Filter ============================
    var onFilterChange = function onFilterChange(filters, filterStates) {
      triggerOnChange({
        filters: filters,
        filterStates: filterStates
      }, 'filter', true);
    };
    var _useFilter = (0, _useFilter3.default)({
        prefixCls: prefixCls,
        locale: tableLocale,
        dropdownPrefixCls: dropdownPrefixCls,
        mergedColumns: mergedColumns,
        onFilterChange: onFilterChange,
        getPopupContainer: (0, _vue.toRef)(props, 'getPopupContainer')
      }),
      _useFilter2 = (0, _slicedToArray2.default)(_useFilter, 3),
      transformFilterColumns = _useFilter2[0],
      filterStates = _useFilter2[1],
      filters = _useFilter2[2];
    var mergedData = (0, _vue.computed)(function () {
      return (0, _useFilter3.getFilterData)(sortedData.value, filterStates.value);
    });
    // ============================ Column ============================
    var _useColumns = (0, _useColumns3.default)((0, _vue.toRef)(props, 'contextSlots')),
      _useColumns2 = (0, _slicedToArray2.default)(_useColumns, 1),
      transformBasicColumns = _useColumns2[0];
    var columnTitleProps = (0, _vue.computed)(function () {
      return (0, _objectSpread2.default)({}, sorterTitleProps.value);
    });
    var _useTitleColumns = (0, _useTitleColumns3.default)(columnTitleProps),
      _useTitleColumns2 = (0, _slicedToArray2.default)(_useTitleColumns, 1),
      transformTitleColumns = _useTitleColumns2[0];
    // ========================== Pagination ==========================
    var onPaginationChange = function onPaginationChange(current, pageSize) {
      triggerOnChange({
        pagination: (0, _objectSpread2.default)((0, _objectSpread2.default)({}, changeEventInfo.pagination), {}, {
          current: current,
          pageSize: pageSize
        })
      }, 'paginate');
    };
    var _usePagination = (0, _usePagination3.default)((0, _vue.computed)(function () {
        return mergedData.value.length;
      }), (0, _vue.toRef)(props, 'pagination'), onPaginationChange),
      _usePagination2 = (0, _slicedToArray2.default)(_usePagination, 2),
      mergedPagination = _usePagination2[0],
      resetPagination = _usePagination2[1];
    (0, _vue.watchEffect)(function () {
      changeEventInfo.sorter = sorters.value;
      changeEventInfo.sorterStates = sortStates.value;
      changeEventInfo.filters = filters.value;
      changeEventInfo.filterStates = filterStates.value;
      changeEventInfo.pagination = props.pagination === false ? {} : (0, _usePagination3.getPaginationParam)(props.pagination, mergedPagination.value);
      changeEventInfo.resetPagination = resetPagination;
    });
    // ============================= Data =============================
    var pageData = (0, _vue.computed)(function () {
      if (props.pagination === false || !mergedPagination.value.pageSize) {
        return mergedData.value;
      }
      var _mergedPagination$val = mergedPagination.value,
        _mergedPagination$val2 = _mergedPagination$val.current,
        current = _mergedPagination$val2 === void 0 ? 1 : _mergedPagination$val2,
        total = _mergedPagination$val.total,
        _mergedPagination$val3 = _mergedPagination$val.pageSize,
        pageSize = _mergedPagination$val3 === void 0 ? _usePagination3.DEFAULT_PAGE_SIZE : _mergedPagination$val3;
      (0, _devWarning.default)(current > 0, 'Table', '`current` should be positive number.');
      // Dynamic table data
      if (mergedData.value.length < total) {
        if (mergedData.value.length > pageSize) {
          return mergedData.value.slice((current - 1) * pageSize, current * pageSize);
        }
        return mergedData.value;
      }
      return mergedData.value.slice((current - 1) * pageSize, current * pageSize);
    });
    (0, _vue.watchEffect)(function () {
      (0, _vue.nextTick)(function () {
        var _mergedPagination$val4 = mergedPagination.value,
          total = _mergedPagination$val4.total,
          _mergedPagination$val5 = _mergedPagination$val4.pageSize,
          pageSize = _mergedPagination$val5 === void 0 ? _usePagination3.DEFAULT_PAGE_SIZE : _mergedPagination$val5;
        // Dynamic table data
        if (mergedData.value.length < total) {
          if (mergedData.value.length > pageSize) {
            (0, _devWarning.default)(false, 'Table', '`dataSource` length is less than `pagination.total` but large than `pagination.pageSize`. Please make sure your config correct data with async mode.');
          }
        }
      });
    }, {
      flush: 'post'
    });
    var expandIconColumnIndex = (0, _vue.computed)(function () {
      if (props.showExpandColumn === false) return -1;
      // Adjust expand icon index, no overwrite expandIconColumnIndex if set.
      if (expandType.value === 'nest' && props.expandIconColumnIndex === undefined) {
        return props.rowSelection ? 1 : 0;
      } else if (props.expandIconColumnIndex > 0 && props.rowSelection) {
        return props.expandIconColumnIndex - 1;
      }
      return props.expandIconColumnIndex;
    });
    var rowSelection = (0, _vue.ref)();
    (0, _vue.watch)(function () {
      return props.rowSelection;
    }, function () {
      rowSelection.value = props.rowSelection ? (0, _objectSpread2.default)({}, props.rowSelection) : props.rowSelection;
    }, {
      deep: true,
      immediate: true
    });
    // ========================== Selections ==========================
    var _useSelection = (0, _useSelection3.default)(rowSelection, {
        prefixCls: prefixCls,
        data: mergedData,
        pageData: pageData,
        getRowKey: getRowKey,
        getRecordByKey: getRecordByKey,
        expandType: expandType,
        childrenColumnName: childrenColumnName,
        locale: tableLocale,
        getPopupContainer: (0, _vue.computed)(function () {
          return props.getPopupContainer;
        })
      }),
      _useSelection2 = (0, _slicedToArray2.default)(_useSelection, 2),
      transformSelectionColumns = _useSelection2[0],
      selectedKeySet = _useSelection2[1];
    var internalRowClassName = function internalRowClassName(record, index, indent) {
      var mergedRowClassName;
      var rowClassName = props.rowClassName;
      if (typeof rowClassName === 'function') {
        mergedRowClassName = (0, _classNames4.default)(rowClassName(record, index, indent));
      } else {
        mergedRowClassName = (0, _classNames4.default)(rowClassName);
      }
      return (0, _classNames4.default)((0, _defineProperty2.default)({}, "".concat(prefixCls.value, "-row-selected"), selectedKeySet.value.has(getRowKey.value(record, index))), mergedRowClassName);
    };
    expose({
      selectedKeySet: selectedKeySet
    });
    var indentSize = (0, _vue.computed)(function () {
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
        expandIcon = _props$expandIcon === void 0 ? slots.expandIcon || (0, _ExpandIcon.default)(tableLocale.value) : _props$expandIcon,
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
          return (0, _vue.createVNode)(_pagination.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, mergedPagination.value), {}, {
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
      } else if ((0, _typeof2.default)(loading) === 'object') {
        spinProps = (0, _objectSpread2.default)({
          spinning: true
        }, loading);
      }
      var wrapperClassNames = (0, _classNames4.default)("".concat(prefixCls.value, "-wrapper"), (0, _defineProperty2.default)({}, "".concat(prefixCls.value, "-wrapper-rtl"), direction.value === 'rtl'), attrs.class);
      var tableProps = (0, _omit.default)(props, ['columns']);
      return (0, _vue.createVNode)("div", {
        "class": wrapperClassNames,
        "style": attrs.style
      }, [(0, _vue.createVNode)(_spin.default, (0, _objectSpread2.default)({
        "spinning": false
      }, spinProps), {
        default: function _default() {
          return [topPaginationNode, (0, _vue.createVNode)(_vcTable.default, (0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({}, attrs), tableProps), {}, {
            "expandedRowKeys": props.expandedRowKeys,
            "defaultExpandedRowKeys": props.defaultExpandedRowKeys,
            "expandIconColumnIndex": expandIconColumnIndex.value,
            "indentSize": indentSize.value,
            "expandIcon": expandIcon,
            "columns": mergedColumns.value,
            "direction": direction.value,
            "prefixCls": prefixCls.value,
            "class": (0, _classNames4.default)((_classNames3 = {}, (0, _defineProperty2.default)(_classNames3, "".concat(prefixCls.value, "-middle"), mergedSize.value === 'middle'), (0, _defineProperty2.default)(_classNames3, "".concat(prefixCls.value, "-small"), mergedSize.value === 'small'), (0, _defineProperty2.default)(_classNames3, "".concat(prefixCls.value, "-bordered"), bordered), (0, _defineProperty2.default)(_classNames3, "".concat(prefixCls.value, "-empty"), rawData.value.length === 0), _classNames3)),
            "data": pageData.value,
            "rowKey": getRowKey.value,
            "rowClassName": internalRowClassName,
            "internalHooks": _Table.INTERNAL_HOOKS,
            "internalRefs": internalRefs,
            "onUpdateInternalRefs": updateInternalRefs,
            "transformColumns": transformColumns,
            "transformCellText": transformCellText.value
          }), (0, _objectSpread2.default)((0, _objectSpread2.default)({}, slots), {}, {
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
var Table = (0, _vue.defineComponent)({
  name: 'ATable',
  inheritAttrs: false,
  setup: function setup(_props, _ref2) {
    var attrs = _ref2.attrs,
      slots = _ref2.slots,
      expose = _ref2.expose;
    var table = (0, _vue.ref)();
    expose({
      table: table
    });
    return function () {
      var _slots$default;
      var props = attrs;
      var columns = props.columns || (0, _util.convertChildrenToColumns)((_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots));
      return (0, _vue.createVNode)(InteralTable, (0, _objectSpread2.default)((0, _objectSpread2.default)({
        "ref": table
      }, attrs), {}, {
        "columns": columns || [],
        "expandedRowRender": slots.expandedRowRender,
        "contextSlots": (0, _objectSpread2.default)({}, slots)
      }), slots);
    };
  }
});
var _default2 = Table;
exports.default = _default2;