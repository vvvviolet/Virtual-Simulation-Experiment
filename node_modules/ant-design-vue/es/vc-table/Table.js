import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _typeof from "@babel/runtime/helpers/esm/typeof";
import { Fragment as _Fragment, createVNode as _createVNode, resolveDirective as _resolveDirective } from "vue";
import Header from './Header/Header';
import Body from './Body';
import useColumns from './hooks/useColumns';
import { useLayoutState, useTimeoutLock } from './hooks/useFrame';
import { getPathValue, mergeObject, validateValue, getColumnsKey } from './utils/valueUtil';
import useStickyOffsets from './hooks/useStickyOffsets';
import ColGroup from './ColGroup';
import Panel from './Panel';
import Footer from './Footer';
import { findAllChildrenKeys, renderExpandIcon } from './utils/expandUtil';
import { getCellFixedInfo } from './utils/fixUtil';
import StickyScrollBar from './stickyScrollBar';
import useSticky from './hooks/useSticky';
import FixedHolder from './FixedHolder';
import { onUpdated, computed, defineComponent, nextTick, onMounted, reactive, ref, shallowRef, toRef, toRefs, watch, watchEffect } from 'vue';
import { warning } from '../vc-util/warning';
import { reactivePick } from '../_util/reactivePick';
import useState from '../_util/hooks/useState';
import { toPx } from '../_util/util';
import isVisible from '../vc-util/Dom/isVisible';
import { getTargetScrollBarSize } from '../_util/getScrollBarSize';
import classNames from '../_util/classNames';
import VCResizeObserver from '../vc-resize-observer';
import { useProvideTable } from './context/TableContext';
import { useProvideBody } from './context/BodyContext';
import { useProvideResize } from './context/ResizeContext';
import { useProvideSticky } from './context/StickyContext';
import pickAttrs from '../_util/pickAttrs';
import { useProvideExpandedRow } from './context/ExpandedRowContext';
// Used for conditions cache
var EMPTY_DATA = [];
// Used for customize scroll
var EMPTY_SCROLL_TARGET = {};
export var INTERNAL_HOOKS = 'rc-table-internal-hook';
export default defineComponent({
  name: 'Table',
  inheritAttrs: false,
  props: ['prefixCls', 'data', 'columns', 'rowKey', 'tableLayout', 'scroll', 'rowClassName', 'title', 'footer', 'id', 'showHeader', 'components', 'customRow', 'customHeaderRow', 'direction', 'expandFixed', 'expandColumnWidth', 'expandedRowKeys', 'defaultExpandedRowKeys', 'expandedRowRender', 'expandRowByClick', 'expandIcon', 'onExpand', 'onExpandedRowsChange', 'onUpdate:expandedRowKeys', 'defaultExpandAllRows', 'indentSize', 'expandIconColumnIndex', 'expandedRowClassName', 'childrenColumnName', 'rowExpandable', 'sticky', 'transformColumns', 'internalHooks', 'internalRefs', 'canExpandable', 'onUpdateInternalRefs', 'transformCellText'],
  slots: ['title', 'footer', 'summary', 'emptyText'],
  emits: ['expand', 'expandedRowsChange', 'updateInternalRefs', 'update:expandedRowKeys'],
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs,
      slots = _ref.slots,
      emit = _ref.emit;
    var mergedData = computed(function () {
      return props.data || EMPTY_DATA;
    });
    var hasData = computed(function () {
      return !!mergedData.value.length;
    });
    // ==================== Customize =====================
    var mergedComponents = computed(function () {
      return mergeObject(props.components, {});
    });
    var getComponent = function getComponent(path, defaultComponent) {
      return getPathValue(mergedComponents.value, path) || defaultComponent;
    };
    var getRowKey = computed(function () {
      var rowKey = props.rowKey;
      if (typeof rowKey === 'function') {
        return rowKey;
      }
      return function (record) {
        var key = record && record[rowKey];
        if (process.env.NODE_ENV !== 'production') {
          warning(key !== undefined, 'Each record in table should have a unique `key` prop, or set `rowKey` to an unique primary key.');
        }
        return key;
      };
    });
    // ====================== Expand ======================
    var mergedExpandIcon = computed(function () {
      return props.expandIcon || renderExpandIcon;
    });
    var mergedChildrenColumnName = computed(function () {
      return props.childrenColumnName || 'children';
    });
    var expandableType = computed(function () {
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
        return record && _typeof(record) === 'object' && record[mergedChildrenColumnName.value];
      })) {
        return 'nest';
      }
      /* eslint-enable */
      return false;
    });
    var innerExpandedKeys = shallowRef([]);
    var stop = watchEffect(function () {
      if (props.defaultExpandedRowKeys) {
        innerExpandedKeys.value = props.defaultExpandedRowKeys;
      }
      if (props.defaultExpandAllRows) {
        innerExpandedKeys.value = findAllChildrenKeys(mergedData.value, getRowKey.value, mergedChildrenColumnName.value);
      }
    });
    // defalutXxxx 仅仅第一次生效
    stop();
    var mergedExpandedKeys = computed(function () {
      return new Set(props.expandedRowKeys || innerExpandedKeys.value || []);
    });
    var onTriggerExpand = function onTriggerExpand(record) {
      var key = getRowKey.value(record, mergedData.value.indexOf(record));
      var newExpandedKeys;
      var hasKey = mergedExpandedKeys.value.has(key);
      if (hasKey) {
        mergedExpandedKeys.value.delete(key);
        newExpandedKeys = _toConsumableArray(mergedExpandedKeys.value);
      } else {
        newExpandedKeys = [].concat(_toConsumableArray(mergedExpandedKeys.value), [key]);
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
      warning(false, '`expandedRowRender` should not use with nested Table');
    }
    var componentWidth = ref(0);
    var _useColumns = useColumns(_objectSpread(_objectSpread({}, toRefs(props)), {}, {
        // children,
        expandable: computed(function () {
          return !!props.expandedRowRender;
        }),
        expandedKeys: mergedExpandedKeys,
        getRowKey: getRowKey,
        onTriggerExpand: onTriggerExpand,
        expandIcon: mergedExpandIcon
      }), computed(function () {
        return props.internalHooks === INTERNAL_HOOKS ? props.transformColumns : null;
      })),
      _useColumns2 = _slicedToArray(_useColumns, 2),
      columns = _useColumns2[0],
      flattenColumns = _useColumns2[1];
    var columnContext = computed(function () {
      return {
        columns: columns.value,
        flattenColumns: flattenColumns.value
      };
    });
    // ====================== Scroll ======================
    var fullTableRef = ref();
    var scrollHeaderRef = ref();
    var scrollBodyRef = ref();
    var scrollBodySizeInfo = ref({
      scrollWidth: 0,
      clientWidth: 0
    });
    var scrollSummaryRef = ref();
    var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      pingedLeft = _useState2[0],
      setPingedLeft = _useState2[1];
    var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      pingedRight = _useState4[0],
      setPingedRight = _useState4[1];
    var _useLayoutState = useLayoutState(new Map()),
      _useLayoutState2 = _slicedToArray(_useLayoutState, 2),
      colsWidths = _useLayoutState2[0],
      updateColsWidths = _useLayoutState2[1];
    // Convert map to number width
    var colsKeys = computed(function () {
      return getColumnsKey(flattenColumns.value);
    });
    var colWidths = computed(function () {
      return colsKeys.value.map(function (columnKey) {
        return colsWidths.value.get(columnKey);
      });
    });
    var columnCount = computed(function () {
      return flattenColumns.value.length;
    });
    var stickyOffsets = useStickyOffsets(colWidths, columnCount, toRef(props, 'direction'));
    var fixHeader = computed(function () {
      return props.scroll && validateValue(props.scroll.y);
    });
    var horizonScroll = computed(function () {
      return props.scroll && validateValue(props.scroll.x) || Boolean(props.expandFixed);
    });
    var fixColumn = computed(function () {
      return horizonScroll.value && flattenColumns.value.some(function (_ref2) {
        var fixed = _ref2.fixed;
        return fixed;
      });
    });
    // Sticky
    var stickyRef = ref();
    var stickyState = useSticky(toRef(props, 'sticky'), toRef(props, 'prefixCls'));
    var summaryFixedInfos = reactive({});
    var fixFooter = computed(function () {
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
    var scrollXStyle = ref({});
    var scrollYStyle = ref({});
    var scrollTableStyle = ref({});
    watchEffect(function () {
      if (fixHeader.value) {
        scrollYStyle.value = {
          overflowY: 'scroll',
          maxHeight: toPx(props.scroll.y)
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
          width: props.scroll.x === true ? 'auto' : toPx(props.scroll.x),
          minWidth: '100%'
        };
      }
    });
    var onColumnResize = function onColumnResize(columnKey, width) {
      if (isVisible(fullTableRef.value)) {
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
    var _useTimeoutLock = useTimeoutLock(null),
      _useTimeoutLock2 = _slicedToArray(_useTimeoutLock, 2),
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
    watch([horizonScroll, function () {
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
    var _useState5 = useState(0),
      _useState6 = _slicedToArray(_useState5, 2),
      scrollbarSize = _useState6[0],
      setScrollbarSize = _useState6[1];
    useProvideSticky();
    onMounted(function () {
      nextTick(function () {
        var _scrollBodyRef$value, _scrollBodyRef$value2;
        triggerOnScroll();
        setScrollbarSize(getTargetScrollBarSize(scrollBodyRef.value).width);
        scrollBodySizeInfo.value = {
          scrollWidth: ((_scrollBodyRef$value = scrollBodyRef.value) === null || _scrollBodyRef$value === void 0 ? void 0 : _scrollBodyRef$value.scrollWidth) || 0,
          clientWidth: ((_scrollBodyRef$value2 = scrollBodyRef.value) === null || _scrollBodyRef$value2 === void 0 ? void 0 : _scrollBodyRef$value2.clientWidth) || 0
        };
      });
    });
    onUpdated(function () {
      nextTick(function () {
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
    watchEffect(function () {
      if (props.internalHooks === INTERNAL_HOOKS && props.internalRefs) {
        props.onUpdateInternalRefs({
          body: scrollBodyRef.value ? scrollBodyRef.value.$el || scrollBodyRef.value : null
        });
      }
    }, {
      flush: 'post'
    });
    // Table layout
    var mergedTableLayout = computed(function () {
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
    useProvideTable(reactive(_objectSpread(_objectSpread({}, toRefs(reactivePick(props, 'prefixCls', 'direction', 'transformCellText'))), {}, {
      getComponent: getComponent,
      scrollbarSize: scrollbarSize,
      fixedInfoList: computed(function () {
        return flattenColumns.value.map(function (_, colIndex) {
          return getCellFixedInfo(colIndex, colIndex, flattenColumns.value, stickyOffsets.value, props.direction);
        });
      }),
      isSticky: computed(function () {
        return stickyState.value.isSticky;
      }),
      summaryCollect: summaryCollect
    })));
    useProvideBody(reactive(_objectSpread(_objectSpread({}, toRefs(reactivePick(props, 'rowClassName', 'expandedRowClassName', 'expandRowByClick', 'expandedRowRender', 'expandIconColumnIndex', 'indentSize'))), {}, {
      columns: columns,
      flattenColumns: flattenColumns,
      tableLayout: mergedTableLayout,
      expandIcon: mergedExpandIcon,
      expandableType: expandableType,
      onTriggerExpand: onTriggerExpand
    })));
    useProvideResize({
      onColumnResize: onColumnResize
    });
    useProvideExpandedRow({
      componentWidth: componentWidth,
      fixHeader: fixHeader,
      fixColumn: fixColumn,
      horizonScroll: horizonScroll
    });
    // Body
    var bodyTable = function bodyTable() {
      return _createVNode(Body, {
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
      return _createVNode(ColGroup, {
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
        warning(false, '`components.body` with render props is only work on `scroll.y`.');
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
            warning(false, 'When use `components.body` with render props. Each column should have a fixed `width` value.');
            return 0;
          });
        } else {
          bodyContent = function bodyContent() {
            return _createVNode("div", {
              "style": _objectSpread(_objectSpread({}, scrollXStyle.value), scrollYStyle.value),
              "onScroll": onScroll,
              "ref": scrollBodyRef,
              "class": classNames("".concat(prefixCls, "-body"))
            }, [_createVNode(TableComponent, {
              "style": _objectSpread(_objectSpread({}, scrollTableStyle.value), {}, {
                tableLayout: mergedTableLayout.value
              })
            }, {
              default: function _default() {
                return [bodyColGroup(), bodyTable(), !fixFooter.value && summaryNode && _createVNode(Footer, {
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
        var fixedHolderProps = _objectSpread(_objectSpread(_objectSpread({
          noData: !mergedData.value.length,
          maxContentScroll: horizonScroll.value && scroll.x === 'max-content'
        }, headerProps), columnContext.value), {}, {
          direction: direction,
          stickyClassName: stickyClassName,
          onScroll: onScroll
        });
        groupTableNode = function groupTableNode() {
          return _createVNode(_Fragment, null, [showHeader !== false && _createVNode(FixedHolder, _objectSpread(_objectSpread({}, fixedHolderProps), {}, {
            "stickyTopOffset": offsetHeader,
            "class": "".concat(prefixCls, "-header"),
            "ref": scrollHeaderRef
          }), {
            default: function _default(fixedHolderPassProps) {
              return _createVNode(_Fragment, null, [_createVNode(Header, fixedHolderPassProps, null), fixFooter.value === 'top' && _createVNode(Footer, fixedHolderPassProps, {
                default: function _default() {
                  return [summaryNode];
                }
              })]);
            }
          }), bodyContent(), fixFooter.value && fixFooter.value !== 'top' && _createVNode(FixedHolder, _objectSpread(_objectSpread({}, fixedHolderProps), {}, {
            "stickyBottomOffset": offsetSummary,
            "class": "".concat(prefixCls, "-summary"),
            "ref": scrollSummaryRef
          }), {
            default: function _default(fixedHolderPassProps) {
              return _createVNode(Footer, fixedHolderPassProps, {
                default: function _default() {
                  return [summaryNode];
                }
              });
            }
          }), isSticky && scrollBodyRef.value && _createVNode(StickyScrollBar, {
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
          return _createVNode("div", {
            "style": _objectSpread(_objectSpread({}, scrollXStyle.value), scrollYStyle.value),
            "class": classNames("".concat(prefixCls, "-content")),
            "onScroll": onScroll,
            "ref": scrollBodyRef
          }, [_createVNode(TableComponent, {
            "style": _objectSpread(_objectSpread({}, scrollTableStyle.value), {}, {
              tableLayout: mergedTableLayout.value
            })
          }, {
            default: function _default() {
              return [bodyColGroup(), showHeader !== false && _createVNode(Header, _objectSpread(_objectSpread({}, headerProps), columnContext.value), null), bodyTable(), summaryNode && _createVNode(Footer, {
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
      var ariaProps = pickAttrs(attrs, {
        aria: true,
        data: true
      });
      var fullTable = function fullTable() {
        var _classNames;
        return _createVNode("div", _objectSpread(_objectSpread({}, ariaProps), {}, {
          "class": classNames(prefixCls, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _defineProperty(_classNames, "".concat(prefixCls, "-ping-left"), pingedLeft.value), _defineProperty(_classNames, "".concat(prefixCls, "-ping-right"), pingedRight.value), _defineProperty(_classNames, "".concat(prefixCls, "-layout-fixed"), tableLayout === 'fixed'), _defineProperty(_classNames, "".concat(prefixCls, "-fixed-header"), fixHeader.value), _defineProperty(_classNames, "".concat(prefixCls, "-fixed-column"), fixColumn.value), _defineProperty(_classNames, "".concat(prefixCls, "-scroll-horizontal"), horizonScroll.value), _defineProperty(_classNames, "".concat(prefixCls, "-has-fix-left"), flattenColumns.value[0] && flattenColumns.value[0].fixed), _defineProperty(_classNames, "".concat(prefixCls, "-has-fix-right"), flattenColumns.value[columnCount.value - 1] && flattenColumns.value[columnCount.value - 1].fixed === 'right'), _defineProperty(_classNames, attrs.class, attrs.class), _classNames)),
          "style": attrs.style,
          "id": id,
          "ref": fullTableRef
        }), [title && _createVNode(Panel, {
          "class": "".concat(prefixCls, "-title")
        }, {
          default: function _default() {
            return [title(mergedData.value)];
          }
        }), _createVNode("div", {
          "class": "".concat(prefixCls, "-container")
        }, [groupTableNode()]), footer && _createVNode(Panel, {
          "class": "".concat(prefixCls, "-footer")
        }, {
          default: function _default() {
            return [footer(mergedData.value)];
          }
        })]);
      };
      if (horizonScroll.value) {
        return _createVNode(VCResizeObserver, {
          "onResize": onFullTableResize
        }, {
          default: fullTable
        });
      }
      return fullTable();
    };
  }
});