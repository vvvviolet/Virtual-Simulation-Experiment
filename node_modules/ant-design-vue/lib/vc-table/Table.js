"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.INTERNAL_HOOKS = void 0;
var _vue = require("vue");
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _Header = _interopRequireDefault(require("./Header/Header"));
var _Body = _interopRequireDefault(require("./Body"));
var _useColumns3 = _interopRequireDefault(require("./hooks/useColumns"));
var _useFrame = require("./hooks/useFrame");
var _valueUtil = require("./utils/valueUtil");
var _useStickyOffsets = _interopRequireDefault(require("./hooks/useStickyOffsets"));
var _ColGroup = _interopRequireDefault(require("./ColGroup"));
var _Panel = _interopRequireDefault(require("./Panel"));
var _Footer = _interopRequireDefault(require("./Footer"));
var _expandUtil = require("./utils/expandUtil");
var _fixUtil = require("./utils/fixUtil");
var _stickyScrollBar = _interopRequireDefault(require("./stickyScrollBar"));
var _useSticky = _interopRequireDefault(require("./hooks/useSticky"));
var _FixedHolder = _interopRequireDefault(require("./FixedHolder"));
var _warning = require("../vc-util/warning");
var _reactivePick = require("../_util/reactivePick");
var _useState7 = _interopRequireDefault(require("../_util/hooks/useState"));
var _util = require("../_util/util");
var _isVisible = _interopRequireDefault(require("../vc-util/Dom/isVisible"));
var _getScrollBarSize = require("../_util/getScrollBarSize");
var _classNames2 = _interopRequireDefault(require("../_util/classNames"));
var _vcResizeObserver = _interopRequireDefault(require("../vc-resize-observer"));
var _TableContext = require("./context/TableContext");
var _BodyContext = require("./context/BodyContext");
var _ResizeContext = require("./context/ResizeContext");
var _StickyContext = require("./context/StickyContext");
var _pickAttrs = _interopRequireDefault(require("../_util/pickAttrs"));
var _ExpandedRowContext = require("./context/ExpandedRowContext");
// Used for conditions cache
var EMPTY_DATA = [];
// Used for customize scroll
var EMPTY_SCROLL_TARGET = {};
var INTERNAL_HOOKS = 'rc-table-internal-hook';
exports.INTERNAL_HOOKS = INTERNAL_HOOKS;
var _default2 = (0, _vue.defineComponent)({
  name: 'Table',
  inheritAttrs: false,
  props: ['prefixCls', 'data', 'columns', 'rowKey', 'tableLayout', 'scroll', 'rowClassName', 'title', 'footer', 'id', 'showHeader', 'components', 'customRow', 'customHeaderRow', 'direction', 'expandFixed', 'expandColumnWidth', 'expandedRowKeys', 'defaultExpandedRowKeys', 'expandedRowRender', 'expandRowByClick', 'expandIcon', 'onExpand', 'onExpandedRowsChange', 'onUpdate:expandedRowKeys', 'defaultExpandAllRows', 'indentSize', 'expandIconColumnIndex', 'expandedRowClassName', 'childrenColumnName', 'rowExpandable', 'sticky', 'transformColumns', 'internalHooks', 'internalRefs', 'canExpandable', 'onUpdateInternalRefs', 'transformCellText'],
  slots: ['title', 'footer', 'summary', 'emptyText'],
  emits: ['expand', 'expandedRowsChange', 'updateInternalRefs', 'update:expandedRowKeys'],
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs,
      slots = _ref.slots,
      emit = _ref.emit;
    var mergedData = (0, _vue.computed)(function () {
      return props.data || EMPTY_DATA;
    });
    var hasData = (0, _vue.computed)(function () {
      return !!mergedData.value.length;
    });
    // ==================== Customize =====================
    var mergedComponents = (0, _vue.computed)(function () {
      return (0, _valueUtil.mergeObject)(props.components, {});
    });
    var getComponent = function getComponent(path, defaultComponent) {
      return (0, _valueUtil.getPathValue)(mergedComponents.value, path) || defaultComponent;
    };
    var getRowKey = (0, _vue.computed)(function () {
      var rowKey = props.rowKey;
      if (typeof rowKey === 'function') {
        return rowKey;
      }
      return function (record) {
        var key = record && record[rowKey];
        if (process.env.NODE_ENV !== 'production') {
          (0, _warning.warning)(key !== undefined, 'Each record in table should have a unique `key` prop, or set `rowKey` to an unique primary key.');
        }
        return key;
      };
    });
    // ====================== Expand ======================
    var mergedExpandIcon = (0, _vue.computed)(function () {
      return props.expandIcon || _expandUtil.renderExpandIcon;
    });
    var mergedChildrenColumnName = (0, _vue.computed)(function () {
      return props.childrenColumnName || 'children';
    });
    var expandableType = (0, _vue.computed)(function () {
      if (props.expandedRowRender) {
        return 'row';
      }
      /* eslint-disable no-underscore-dangle */
      /**
       * Fix https://github.com/ant-design/ant-design/issues/21154
       * This is a workaround to not to break current behavior.
       * We can remove follow code after final release.
       *
       * To other developer:
       *  Do not use `__PARENT_RENDER_ICON__` in prod since we will remove this when refactor
       */
      if (props.canExpandable || mergedData.value.some(function (record) {
        return record && (0, _typeof2.default)(record) === 'object' && record[mergedChildrenColumnName.value];
      })) {
        return 'nest';
      }
      /* eslint-enable */
      return false;
    });
    var innerExpandedKeys = (0, _vue.shallowRef)([]);
    var stop = (0, _vue.watchEffect)(function () {
      if (props.defaultExpandedRowKeys) {
        innerExpandedKeys.value = props.defaultExpandedRowKeys;
      }
      if (props.defaultExpandAllRows) {
        innerExpandedKeys.value = (0, _expandUtil.findAllChildrenKeys)(mergedData.value, getRowKey.value, mergedChildrenColumnName.value);
      }
    });
    // defalutXxxx 仅仅第一次生效
    stop();
    var mergedExpandedKeys = (0, _vue.computed)(function () {
      return new Set(props.expandedRowKeys || innerExpandedKeys.value || []);
    });
    var onTriggerExpand = function onTriggerExpand(record) {
      var key = getRowKey.value(record, mergedData.value.indexOf(record));
      var newExpandedKeys;
      var hasKey = mergedExpandedKeys.value.has(key);
      if (hasKey) {
        mergedExpandedKeys.value.delete(key);
        newExpandedKeys = (0, _toConsumableArray2.default)(mergedExpandedKeys.value);
      } else {
        newExpandedKeys = [].concat((0, _toConsumableArray2.default)(mergedExpandedKeys.value), [key]);
      }
      innerExpandedKeys.value = newExpandedKeys;
      emit('expand', !hasKey, record);
      emit('update:expandedRowKeys', newExpandedKeys);
      emit('expandedRowsChange', newExpandedKeys);
    };
    // Warning if use `expandedRowRender` and nest children in the same time
    if (process.env.NODE_ENV !== 'production' && props.expandedRowRender && mergedData.value.some(function (record) {
      return Array.isArray(record === null || record === void 0 ? void 0 : record[mergedChildrenColumnName.value]);
    })) {
      (0, _warning.warning)(false, '`expandedRowRender` should not use with nested Table');
    }
    var componentWidth = (0, _vue.ref)(0);
    var _useColumns = (0, _useColumns3.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({}, (0, _vue.toRefs)(props)), {}, {
        // children,
        expandable: (0, _vue.computed)(function () {
          return !!props.expandedRowRender;
        }),
        expandedKeys: mergedExpandedKeys,
        getRowKey: getRowKey,
        onTriggerExpand: onTriggerExpand,
        expandIcon: mergedExpandIcon
      }), (0, _vue.computed)(function () {
        return props.internalHooks === INTERNAL_HOOKS ? props.transformColumns : null;
      })),
      _useColumns2 = (0, _slicedToArray2.default)(_useColumns, 2),
      columns = _useColumns2[0],
      flattenColumns = _useColumns2[1];
    var columnContext = (0, _vue.computed)(function () {
      return {
        columns: columns.value,
        flattenColumns: flattenColumns.value
      };
    });
    // ====================== Scroll ======================
    var fullTableRef = (0, _vue.ref)();
    var scrollHeaderRef = (0, _vue.ref)();
    var scrollBodyRef = (0, _vue.ref)();
    var scrollBodySizeInfo = (0, _vue.ref)({
      scrollWidth: 0,
      clientWidth: 0
    });
    var scrollSummaryRef = (0, _vue.ref)();
    var _useState = (0, _useState7.default)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      pingedLeft = _useState2[0],
      setPingedLeft = _useState2[1];
    var _useState3 = (0, _useState7.default)(false),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      pingedRight = _useState4[0],
      setPingedRight = _useState4[1];
    var _useLayoutState = (0, _useFrame.useLayoutState)(new Map()),
      _useLayoutState2 = (0, _slicedToArray2.default)(_useLayoutState, 2),
      colsWidths = _useLayoutState2[0],
      updateColsWidths = _useLayoutState2[1];
    // Convert map to number width
    var colsKeys = (0, _vue.computed)(function () {
      return (0, _valueUtil.getColumnsKey)(flattenColumns.value);
    });
    var colWidths = (0, _vue.computed)(function () {
      return colsKeys.value.map(function (columnKey) {
        return colsWidths.value.get(columnKey);
      });
    });
    var columnCount = (0, _vue.computed)(function () {
      return flattenColumns.value.length;
    });
    var stickyOffsets = (0, _useStickyOffsets.default)(colWidths, columnCount, (0, _vue.toRef)(props, 'direction'));
    var fixHeader = (0, _vue.computed)(function () {
      return props.scroll && (0, _valueUtil.validateValue)(props.scroll.y);
    });
    var horizonScroll = (0, _vue.computed)(function () {
      return props.scroll && (0, _valueUtil.validateValue)(props.scroll.x) || Boolean(props.expandFixed);
    });
    var fixColumn = (0, _vue.computed)(function () {
      return horizonScroll.value && flattenColumns.value.some(function (_ref2) {
        var fixed = _ref2.fixed;
        return fixed;
      });
    });
    // Sticky
    var stickyRef = (0, _vue.ref)();
    var stickyState = (0, _useSticky.default)((0, _vue.toRef)(props, 'sticky'), (0, _vue.toRef)(props, 'prefixCls'));
    var summaryFixedInfos = (0, _vue.reactive)({});
    var fixFooter = (0, _vue.computed)(function () {
      var info = Object.values(summaryFixedInfos)[0];
      return (fixHeader.value || stickyState.value.isSticky) && info;
    });
    var summaryCollect = function summaryCollect(uniKey, fixed) {
      if (fixed) {
        summaryFixedInfos[uniKey] = fixed;
      } else {
        delete summaryFixedInfos[uniKey];
      }
    };
    // Scroll
    var scrollXStyle = (0, _vue.ref)({});
    var scrollYStyle = (0, _vue.ref)({});
    var scrollTableStyle = (0, _vue.ref)({});
    (0, _vue.watchEffect)(function () {
      if (fixHeader.value) {
        scrollYStyle.value = {
          overflowY: 'scroll',
          maxHeight: (0, _util.toPx)(props.scroll.y)
        };
      }
      if (horizonScroll.value) {
        scrollXStyle.value = {
          overflowX: 'auto'
        };
        // When no vertical scrollbar, should hide it
        // https://github.com/ant-design/ant-design/pull/20705
        // https://github.com/ant-design/ant-design/issues/21879
        if (!fixHeader.value) {
          scrollYStyle.value = {
            overflowY: 'hidden'
          };
        }
        scrollTableStyle.value = {
          width: props.scroll.x === true ? 'auto' : (0, _util.toPx)(props.scroll.x),
          minWidth: '100%'
        };
      }
    });
    var onColumnResize = function onColumnResize(columnKey, width) {
      if ((0, _isVisible.default)(fullTableRef.value)) {
        updateColsWidths(function (widths) {
          if (widths.get(columnKey) !== width) {
            var newWidths = new Map(widths);
            newWidths.set(columnKey, width);
            return newWidths;
          }
          return widths;
        });
      }
    };
    var _useTimeoutLock = (0, _useFrame.useTimeoutLock)(null),
      _useTimeoutLock2 = (0, _slicedToArray2.default)(_useTimeoutLock, 2),
      setScrollTarget = _useTimeoutLock2[0],
      getScrollTarget = _useTimeoutLock2[1];
    function forceScroll(scrollLeft, target) {
      if (!target) {
        return;
      }
      if (typeof target === 'function') {
        target(scrollLeft);
        return;
      }
      var domTarget = target.$el || target;
      if (domTarget.scrollLeft !== scrollLeft) {
        // eslint-disable-next-line no-param-reassign
        domTarget.scrollLeft = scrollLeft;
      }
    }
    var onScroll = function onScroll(_ref3) {
      var currentTarget = _ref3.currentTarget,
        scrollLeft = _ref3.scrollLeft;
      var isRTL = props.direction === 'rtl';
      var mergedScrollLeft = typeof scrollLeft === 'number' ? scrollLeft : currentTarget.scrollLeft;
      var compareTarget = currentTarget || EMPTY_SCROLL_TARGET;
      if (!getScrollTarget() || getScrollTarget() === compareTarget) {
        var _stickyRef$value;
        setScrollTarget(compareTarget);
        forceScroll(mergedScrollLeft, scrollHeaderRef.value);
        forceScroll(mergedScrollLeft, scrollBodyRef.value);
        forceScroll(mergedScrollLeft, scrollSummaryRef.value);
        forceScroll(mergedScrollLeft, (_stickyRef$value = stickyRef.value) === null || _stickyRef$value === void 0 ? void 0 : _stickyRef$value.setScrollLeft);
      }
      if (currentTarget) {
        var scrollWidth = currentTarget.scrollWidth,
          clientWidth = currentTarget.clientWidth;
        if (isRTL) {
          setPingedLeft(-mergedScrollLeft < scrollWidth - clientWidth);
          setPingedRight(-mergedScrollLeft > 0);
        } else {
          setPingedLeft(mergedScrollLeft > 0);
          setPingedRight(mergedScrollLeft < scrollWidth - clientWidth);
        }
      }
    };
    var triggerOnScroll = function triggerOnScroll() {
      if (horizonScroll.value && scrollBodyRef.value) {
        onScroll({
          currentTarget: scrollBodyRef.value
        });
      } else {
        setPingedLeft(false);
        setPingedRight(false);
      }
    };
    var timtout;
    var updateWidth = function updateWidth(width) {
      if (width !== componentWidth.value) {
        triggerOnScroll();
        componentWidth.value = fullTableRef.value ? fullTableRef.value.offsetWidth : width;
      }
    };
    var onFullTableResize = function onFullTableResize(_ref4) {
      var width = _ref4.width;
      clearTimeout(timtout);
      if (componentWidth.value === 0) {
        updateWidth(width);
        return;
      }
      timtout = setTimeout(function () {
        updateWidth(width);
      }, 100);
    };
    (0, _vue.watch)([horizonScroll, function () {
      return props.data;
    }, function () {
      return props.columns;
    }], function () {
      if (horizonScroll.value) {
        triggerOnScroll();
      }
    }, {
      flush: 'post'
    });
    var _useState5 = (0, _useState7.default)(0),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      scrollbarSize = _useState6[0],
      setScrollbarSize = _useState6[1];
    (0, _StickyContext.useProvideSticky)();
    (0, _vue.onMounted)(function () {
      (0, _vue.nextTick)(function () {
        var _scrollBodyRef$value, _scrollBodyRef$value2;
        triggerOnScroll();
        setScrollbarSize((0, _getScrollBarSize.getTargetScrollBarSize)(scrollBodyRef.value).width);
        scrollBodySizeInfo.value = {
          scrollWidth: ((_scrollBodyRef$value = scrollBodyRef.value) === null || _scrollBodyRef$value === void 0 ? void 0 : _scrollBodyRef$value.scrollWidth) || 0,
          clientWidth: ((_scrollBodyRef$value2 = scrollBodyRef.value) === null || _scrollBodyRef$value2 === void 0 ? void 0 : _scrollBodyRef$value2.clientWidth) || 0
        };
      });
    });
    (0, _vue.onUpdated)(function () {
      (0, _vue.nextTick)(function () {
        var _scrollBodyRef$value3, _scrollBodyRef$value4;
        var scrollWidth = ((_scrollBodyRef$value3 = scrollBodyRef.value) === null || _scrollBodyRef$value3 === void 0 ? void 0 : _scrollBodyRef$value3.scrollWidth) || 0;
        var clientWidth = ((_scrollBodyRef$value4 = scrollBodyRef.value) === null || _scrollBodyRef$value4 === void 0 ? void 0 : _scrollBodyRef$value4.clientWidth) || 0;
        if (scrollBodySizeInfo.value.scrollWidth !== scrollWidth || scrollBodySizeInfo.value.clientWidth !== clientWidth) {
          scrollBodySizeInfo.value = {
            scrollWidth: scrollWidth,
            clientWidth: clientWidth
          };
        }
      });
    });
    (0, _vue.watchEffect)(function () {
      if (props.internalHooks === INTERNAL_HOOKS && props.internalRefs) {
        props.onUpdateInternalRefs({
          body: scrollBodyRef.value ? scrollBodyRef.value.$el || scrollBodyRef.value : null
        });
      }
    }, {
      flush: 'post'
    });
    // Table layout
    var mergedTableLayout = (0, _vue.computed)(function () {
      if (props.tableLayout) {
        return props.tableLayout;
      }
      // https://github.com/ant-design/ant-design/issues/25227
      // When scroll.x is max-content, no need to fix table layout
      // it's width should stretch out to fit content
      if (fixColumn.value) {
        return props.scroll.x === 'max-content' ? 'auto' : 'fixed';
      }
      if (fixHeader.value || stickyState.value.isSticky || flattenColumns.value.some(function (_ref5) {
        var ellipsis = _ref5.ellipsis;
        return ellipsis;
      })) {
        return 'fixed';
      }
      return 'auto';
    });
    var emptyNode = function emptyNode() {
      var _slots$emptyText;
      return hasData.value ? null : ((_slots$emptyText = slots.emptyText) === null || _slots$emptyText === void 0 ? void 0 : _slots$emptyText.call(slots)) || 'No Data';
    };
    (0, _TableContext.useProvideTable)((0, _vue.reactive)((0, _objectSpread2.default)((0, _objectSpread2.default)({}, (0, _vue.toRefs)((0, _reactivePick.reactivePick)(props, 'prefixCls', 'direction', 'transformCellText'))), {}, {
      getComponent: getComponent,
      scrollbarSize: scrollbarSize,
      fixedInfoList: (0, _vue.computed)(function () {
        return flattenColumns.value.map(function (_, colIndex) {
          return (0, _fixUtil.getCellFixedInfo)(colIndex, colIndex, flattenColumns.value, stickyOffsets.value, props.direction);
        });
      }),
      isSticky: (0, _vue.computed)(function () {
        return stickyState.value.isSticky;
      }),
      summaryCollect: summaryCollect
    })));
    (0, _BodyContext.useProvideBody)((0, _vue.reactive)((0, _objectSpread2.default)((0, _objectSpread2.default)({}, (0, _vue.toRefs)((0, _reactivePick.reactivePick)(props, 'rowClassName', 'expandedRowClassName', 'expandRowByClick', 'expandedRowRender', 'expandIconColumnIndex', 'indentSize'))), {}, {
      columns: columns,
      flattenColumns: flattenColumns,
      tableLayout: mergedTableLayout,
      expandIcon: mergedExpandIcon,
      expandableType: expandableType,
      onTriggerExpand: onTriggerExpand
    })));
    (0, _ResizeContext.useProvideResize)({
      onColumnResize: onColumnResize
    });
    (0, _ExpandedRowContext.useProvideExpandedRow)({
      componentWidth: componentWidth,
      fixHeader: fixHeader,
      fixColumn: fixColumn,
      horizonScroll: horizonScroll
    });
    // Body
    var bodyTable = function bodyTable() {
      return (0, _vue.createVNode)(_Body.default, {
        "data": mergedData.value,
        "measureColumnWidth": fixHeader.value || horizonScroll.value || stickyState.value.isSticky,
        "expandedKeys": mergedExpandedKeys.value,
        "rowExpandable": props.rowExpandable,
        "getRowKey": getRowKey.value,
        "customRow": props.customRow,
        "childrenColumnName": mergedChildrenColumnName.value
      }, {
        emptyNode: emptyNode
      });
    };
    var bodyColGroup = function bodyColGroup() {
      return (0, _vue.createVNode)(_ColGroup.default, {
        "colWidths": flattenColumns.value.map(function (_ref6) {
          var width = _ref6.width;
          return width;
        }),
        "columns": flattenColumns.value
      }, null);
    };
    return function () {
      var _slots$summary;
      var prefixCls = props.prefixCls,
        scroll = props.scroll,
        tableLayout = props.tableLayout,
        direction = props.direction,
        _props$title = props.title,
        title = _props$title === void 0 ? slots.title : _props$title,
        _props$footer = props.footer,
        footer = _props$footer === void 0 ? slots.footer : _props$footer,
        id = props.id,
        showHeader = props.showHeader,
        customHeaderRow = props.customHeaderRow;
      var _stickyState$value = stickyState.value,
        isSticky = _stickyState$value.isSticky,
        offsetHeader = _stickyState$value.offsetHeader,
        offsetSummary = _stickyState$value.offsetSummary,
        offsetScroll = _stickyState$value.offsetScroll,
        stickyClassName = _stickyState$value.stickyClassName,
        container = _stickyState$value.container;
      var TableComponent = getComponent(['table'], 'table');
      var customizeScrollBody = getComponent(['body']);
      var summaryNode = (_slots$summary = slots.summary) === null || _slots$summary === void 0 ? void 0 : _slots$summary.call(slots, {
        pageData: mergedData.value
      });
      var groupTableNode = function groupTableNode() {
        return null;
      };
      // Header props
      var headerProps = {
        colWidths: colWidths.value,
        columCount: flattenColumns.value.length,
        stickyOffsets: stickyOffsets.value,
        customHeaderRow: customHeaderRow,
        fixHeader: fixHeader.value,
        scroll: scroll
      };
      if (process.env.NODE_ENV !== 'production' && typeof customizeScrollBody === 'function' && hasData.value && !fixHeader.value) {
        (0, _warning.warning)(false, '`components.body` with render props is only work on `scroll.y`.');
      }
      if (fixHeader.value || isSticky) {
        // >>>>>> Fixed Header
        var bodyContent = function bodyContent() {
          return null;
        };
        if (typeof customizeScrollBody === 'function') {
          bodyContent = function bodyContent() {
            return customizeScrollBody(mergedData.value, {
              scrollbarSize: scrollbarSize.value,
              ref: scrollBodyRef,
              onScroll: onScroll
            });
          };
          headerProps.colWidths = flattenColumns.value.map(function (_ref7, index) {
            var width = _ref7.width;
            var colWidth = index === columns.value.length - 1 ? width - scrollbarSize.value : width;
            if (typeof colWidth === 'number' && !Number.isNaN(colWidth)) {
              return colWidth;
            }
            (0, _warning.warning)(false, 'When use `components.body` with render props. Each column should have a fixed `width` value.');
            return 0;
          });
        } else {
          bodyContent = function bodyContent() {
            return (0, _vue.createVNode)("div", {
              "style": (0, _objectSpread2.default)((0, _objectSpread2.default)({}, scrollXStyle.value), scrollYStyle.value),
              "onScroll": onScroll,
              "ref": scrollBodyRef,
              "class": (0, _classNames2.default)("".concat(prefixCls, "-body"))
            }, [(0, _vue.createVNode)(TableComponent, {
              "style": (0, _objectSpread2.default)((0, _objectSpread2.default)({}, scrollTableStyle.value), {}, {
                tableLayout: mergedTableLayout.value
              })
            }, {
              default: function _default() {
                return [bodyColGroup(), bodyTable(), !fixFooter.value && summaryNode && (0, _vue.createVNode)(_Footer.default, {
                  "stickyOffsets": stickyOffsets.value,
                  "flattenColumns": flattenColumns.value
                }, {
                  default: function _default() {
                    return [summaryNode];
                  }
                })];
              }
            })]);
          };
        }
        // Fixed holder share the props
        var fixedHolderProps = (0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({
          noData: !mergedData.value.length,
          maxContentScroll: horizonScroll.value && scroll.x === 'max-content'
        }, headerProps), columnContext.value), {}, {
          direction: direction,
          stickyClassName: stickyClassName,
          onScroll: onScroll
        });
        groupTableNode = function groupTableNode() {
          return (0, _vue.createVNode)(_vue.Fragment, null, [showHeader !== false && (0, _vue.createVNode)(_FixedHolder.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, fixedHolderProps), {}, {
            "stickyTopOffset": offsetHeader,
            "class": "".concat(prefixCls, "-header"),
            "ref": scrollHeaderRef
          }), {
            default: function _default(fixedHolderPassProps) {
              return (0, _vue.createVNode)(_vue.Fragment, null, [(0, _vue.createVNode)(_Header.default, fixedHolderPassProps, null), fixFooter.value === 'top' && (0, _vue.createVNode)(_Footer.default, fixedHolderPassProps, {
                default: function _default() {
                  return [summaryNode];
                }
              })]);
            }
          }), bodyContent(), fixFooter.value && fixFooter.value !== 'top' && (0, _vue.createVNode)(_FixedHolder.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, fixedHolderProps), {}, {
            "stickyBottomOffset": offsetSummary,
            "class": "".concat(prefixCls, "-summary"),
            "ref": scrollSummaryRef
          }), {
            default: function _default(fixedHolderPassProps) {
              return (0, _vue.createVNode)(_Footer.default, fixedHolderPassProps, {
                default: function _default() {
                  return [summaryNode];
                }
              });
            }
          }), isSticky && scrollBodyRef.value && (0, _vue.createVNode)(_stickyScrollBar.default, {
            "ref": stickyRef,
            "offsetScroll": offsetScroll,
            "scrollBodyRef": scrollBodyRef,
            "onScroll": onScroll,
            "container": container,
            "scrollBodySizeInfo": scrollBodySizeInfo.value
          }, null)]);
        };
      } else {
        // >>>>>> Unique table
        groupTableNode = function groupTableNode() {
          return (0, _vue.createVNode)("div", {
            "style": (0, _objectSpread2.default)((0, _objectSpread2.default)({}, scrollXStyle.value), scrollYStyle.value),
            "class": (0, _classNames2.default)("".concat(prefixCls, "-content")),
            "onScroll": onScroll,
            "ref": scrollBodyRef
          }, [(0, _vue.createVNode)(TableComponent, {
            "style": (0, _objectSpread2.default)((0, _objectSpread2.default)({}, scrollTableStyle.value), {}, {
              tableLayout: mergedTableLayout.value
            })
          }, {
            default: function _default() {
              return [bodyColGroup(), showHeader !== false && (0, _vue.createVNode)(_Header.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, headerProps), columnContext.value), null), bodyTable(), summaryNode && (0, _vue.createVNode)(_Footer.default, {
                "stickyOffsets": stickyOffsets.value,
                "flattenColumns": flattenColumns.value
              }, {
                default: function _default() {
                  return [summaryNode];
                }
              })];
            }
          })]);
        };
      }
      var ariaProps = (0, _pickAttrs.default)(attrs, {
        aria: true,
        data: true
      });
      var fullTable = function fullTable() {
        var _classNames;
        return (0, _vue.createVNode)("div", (0, _objectSpread2.default)((0, _objectSpread2.default)({}, ariaProps), {}, {
          "class": (0, _classNames2.default)(prefixCls, (_classNames = {}, (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-ping-left"), pingedLeft.value), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-ping-right"), pingedRight.value), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-layout-fixed"), tableLayout === 'fixed'), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-fixed-header"), fixHeader.value), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-fixed-column"), fixColumn.value), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-scroll-horizontal"), horizonScroll.value), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-has-fix-left"), flattenColumns.value[0] && flattenColumns.value[0].fixed), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-has-fix-right"), flattenColumns.value[columnCount.value - 1] && flattenColumns.value[columnCount.value - 1].fixed === 'right'), (0, _defineProperty2.default)(_classNames, attrs.class, attrs.class), _classNames)),
          "style": attrs.style,
          "id": id,
          "ref": fullTableRef
        }), [title && (0, _vue.createVNode)(_Panel.default, {
          "class": "".concat(prefixCls, "-title")
        }, {
          default: function _default() {
            return [title(mergedData.value)];
          }
        }), (0, _vue.createVNode)("div", {
          "class": "".concat(prefixCls, "-container")
        }, [groupTableNode()]), footer && (0, _vue.createVNode)(_Panel.default, {
          "class": "".concat(prefixCls, "-footer")
        }, {
          default: function _default() {
            return [footer(mergedData.value)];
          }
        })]);
      };
      if (horizonScroll.value) {
        return (0, _vue.createVNode)(_vcResizeObserver.default, {
          "onResize": onFullTableResize
        }, {
          default: fullTable
        });
      }
      return fullTable();
    };
  }
});
exports.default = _default2;