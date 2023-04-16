"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = require("vue");
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _ColGroup = _interopRequireDefault(require("../ColGroup"));
var _TableContext = require("../context/TableContext");
var _classNames2 = _interopRequireDefault(require("../../_util/classNames"));
var _addEventListener = _interopRequireDefault(require("../../vc-util/Dom/addEventListener"));
function useColumnWidth(colWidthsRef, columCountRef) {
  return (0, _vue.computed)(function () {
    var cloneColumns = [];
    var colWidths = colWidthsRef.value;
    var columCount = columCountRef.value;
    for (var i = 0; i < columCount; i += 1) {
      var val = colWidths[i];
      if (val !== undefined) {
        cloneColumns[i] = val;
      } else {
        return null;
      }
    }
    return cloneColumns;
  });
}
var _default = (0, _vue.defineComponent)({
  name: 'FixedHolder',
  inheritAttrs: false,
  props: ['columns', 'flattenColumns', 'stickyOffsets', 'customHeaderRow', 'noData', 'maxContentScroll', 'colWidths', 'columCount', 'direction', 'fixHeader', 'stickyTopOffset', 'stickyBottomOffset', 'stickyClassName'],
  emits: ['scroll'],
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs,
      slots = _ref.slots,
      emit = _ref.emit;
    var tableContext = (0, _TableContext.useInjectTable)();
    var combinationScrollBarSize = (0, _vue.computed)(function () {
      return tableContext.isSticky && !props.fixHeader ? 0 : tableContext.scrollbarSize;
    });
    var scrollRef = (0, _vue.ref)();
    var onWheel = function onWheel(e) {
      var currentTarget = e.currentTarget,
        deltaX = e.deltaX;
      if (deltaX) {
        emit('scroll', {
          currentTarget: currentTarget,
          scrollLeft: currentTarget.scrollLeft + deltaX
        });
        e.preventDefault();
      }
    };
    var wheelEvent = (0, _vue.ref)();
    (0, _vue.onMounted)(function () {
      (0, _vue.nextTick)(function () {
        wheelEvent.value = (0, _addEventListener.default)(scrollRef.value, 'wheel', onWheel);
      });
    });
    (0, _vue.onBeforeUnmount)(function () {
      var _wheelEvent$value;
      (_wheelEvent$value = wheelEvent.value) === null || _wheelEvent$value === void 0 ? void 0 : _wheelEvent$value.remove();
    });
    // Check if all flattenColumns has width
    var allFlattenColumnsWithWidth = (0, _vue.computed)(function () {
      return props.flattenColumns.every(function (column) {
        return column.width && column.width !== 0 && column.width !== '0px';
      });
    });
    var columnsWithScrollbar = (0, _vue.ref)([]);
    var flattenColumnsWithScrollbar = (0, _vue.ref)([]);
    (0, _vue.watchEffect)(function () {
      // Add scrollbar column
      var lastColumn = props.flattenColumns[props.flattenColumns.length - 1];
      var ScrollBarColumn = {
        fixed: lastColumn ? lastColumn.fixed : null,
        scrollbar: true,
        customHeaderCell: function customHeaderCell() {
          return {
            class: "".concat(tableContext.prefixCls, "-cell-scrollbar")
          };
        }
      };
      columnsWithScrollbar.value = combinationScrollBarSize.value ? [].concat((0, _toConsumableArray2.default)(props.columns), [ScrollBarColumn]) : props.columns;
      flattenColumnsWithScrollbar.value = combinationScrollBarSize.value ? [].concat((0, _toConsumableArray2.default)(props.flattenColumns), [ScrollBarColumn]) : props.flattenColumns;
    });
    // Calculate the sticky offsets
    var headerStickyOffsets = (0, _vue.computed)(function () {
      var stickyOffsets = props.stickyOffsets,
        direction = props.direction;
      var right = stickyOffsets.right,
        left = stickyOffsets.left;
      return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, stickyOffsets), {}, {
        left: direction === 'rtl' ? [].concat((0, _toConsumableArray2.default)(left.map(function (width) {
          return width + combinationScrollBarSize.value;
        })), [0]) : left,
        right: direction === 'rtl' ? right : [].concat((0, _toConsumableArray2.default)(right.map(function (width) {
          return width + combinationScrollBarSize.value;
        })), [0]),
        isSticky: tableContext.isSticky
      });
    });
    var mergedColumnWidth = useColumnWidth((0, _vue.toRef)(props, 'colWidths'), (0, _vue.toRef)(props, 'columCount'));
    return function () {
      var _slots$default;
      var noData = props.noData,
        columCount = props.columCount,
        stickyTopOffset = props.stickyTopOffset,
        stickyBottomOffset = props.stickyBottomOffset,
        stickyClassName = props.stickyClassName,
        maxContentScroll = props.maxContentScroll;
      var isSticky = tableContext.isSticky;
      return (0, _vue.createVNode)("div", {
        "style": (0, _objectSpread2.default)({
          overflow: 'hidden'
        }, isSticky ? {
          top: "".concat(stickyTopOffset, "px"),
          bottom: "".concat(stickyBottomOffset, "px")
        } : {}),
        "ref": scrollRef,
        "class": (0, _classNames2.default)(attrs.class, (0, _defineProperty2.default)({}, stickyClassName, !!stickyClassName))
      }, [(0, _vue.createVNode)("table", {
        "style": {
          tableLayout: 'fixed',
          visibility: noData || mergedColumnWidth.value ? null : 'hidden'
        }
      }, [(!noData || !maxContentScroll || allFlattenColumnsWithWidth.value) && (0, _vue.createVNode)(_ColGroup.default, {
        "colWidths": mergedColumnWidth.value ? [].concat((0, _toConsumableArray2.default)(mergedColumnWidth.value), [combinationScrollBarSize.value]) : [],
        "columCount": columCount + 1,
        "columns": flattenColumnsWithScrollbar.value
      }, null), (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, props), {}, {
        stickyOffsets: headerStickyOffsets.value,
        columns: columnsWithScrollbar.value,
        flattenColumns: flattenColumnsWithScrollbar.value
      }))])]);
    };
  }
});
exports.default = _default;