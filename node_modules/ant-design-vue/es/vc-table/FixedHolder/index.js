import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import { createVNode as _createVNode } from "vue";
import ColGroup from '../ColGroup';
import { computed, defineComponent, nextTick, onBeforeUnmount, onMounted, ref, toRef, watchEffect } from 'vue';
import { useInjectTable } from '../context/TableContext';
import classNames from '../../_util/classNames';
import addEventListenerWrap from '../../vc-util/Dom/addEventListener';
function useColumnWidth(colWidthsRef, columCountRef) {
  return computed(function () {
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
export default defineComponent({
  name: 'FixedHolder',
  inheritAttrs: false,
  props: ['columns', 'flattenColumns', 'stickyOffsets', 'customHeaderRow', 'noData', 'maxContentScroll', 'colWidths', 'columCount', 'direction', 'fixHeader', 'stickyTopOffset', 'stickyBottomOffset', 'stickyClassName'],
  emits: ['scroll'],
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs,
      slots = _ref.slots,
      emit = _ref.emit;
    var tableContext = useInjectTable();
    var combinationScrollBarSize = computed(function () {
      return tableContext.isSticky && !props.fixHeader ? 0 : tableContext.scrollbarSize;
    });
    var scrollRef = ref();
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
    var wheelEvent = ref();
    onMounted(function () {
      nextTick(function () {
        wheelEvent.value = addEventListenerWrap(scrollRef.value, 'wheel', onWheel);
      });
    });
    onBeforeUnmount(function () {
      var _wheelEvent$value;
      (_wheelEvent$value = wheelEvent.value) === null || _wheelEvent$value === void 0 ? void 0 : _wheelEvent$value.remove();
    });
    // Check if all flattenColumns has width
    var allFlattenColumnsWithWidth = computed(function () {
      return props.flattenColumns.every(function (column) {
        return column.width && column.width !== 0 && column.width !== '0px';
      });
    });
    var columnsWithScrollbar = ref([]);
    var flattenColumnsWithScrollbar = ref([]);
    watchEffect(function () {
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
      columnsWithScrollbar.value = combinationScrollBarSize.value ? [].concat(_toConsumableArray(props.columns), [ScrollBarColumn]) : props.columns;
      flattenColumnsWithScrollbar.value = combinationScrollBarSize.value ? [].concat(_toConsumableArray(props.flattenColumns), [ScrollBarColumn]) : props.flattenColumns;
    });
    // Calculate the sticky offsets
    var headerStickyOffsets = computed(function () {
      var stickyOffsets = props.stickyOffsets,
        direction = props.direction;
      var right = stickyOffsets.right,
        left = stickyOffsets.left;
      return _objectSpread(_objectSpread({}, stickyOffsets), {}, {
        left: direction === 'rtl' ? [].concat(_toConsumableArray(left.map(function (width) {
          return width + combinationScrollBarSize.value;
        })), [0]) : left,
        right: direction === 'rtl' ? right : [].concat(_toConsumableArray(right.map(function (width) {
          return width + combinationScrollBarSize.value;
        })), [0]),
        isSticky: tableContext.isSticky
      });
    });
    var mergedColumnWidth = useColumnWidth(toRef(props, 'colWidths'), toRef(props, 'columCount'));
    return function () {
      var _slots$default;
      var noData = props.noData,
        columCount = props.columCount,
        stickyTopOffset = props.stickyTopOffset,
        stickyBottomOffset = props.stickyBottomOffset,
        stickyClassName = props.stickyClassName,
        maxContentScroll = props.maxContentScroll;
      var isSticky = tableContext.isSticky;
      return _createVNode("div", {
        "style": _objectSpread({
          overflow: 'hidden'
        }, isSticky ? {
          top: "".concat(stickyTopOffset, "px"),
          bottom: "".concat(stickyBottomOffset, "px")
        } : {}),
        "ref": scrollRef,
        "class": classNames(attrs.class, _defineProperty({}, stickyClassName, !!stickyClassName))
      }, [_createVNode("table", {
        "style": {
          tableLayout: 'fixed',
          visibility: noData || mergedColumnWidth.value ? null : 'hidden'
        }
      }, [(!noData || !maxContentScroll || allFlattenColumnsWithWidth.value) && _createVNode(ColGroup, {
        "colWidths": mergedColumnWidth.value ? [].concat(_toConsumableArray(mergedColumnWidth.value), [combinationScrollBarSize.value]) : [],
        "columCount": columCount + 1,
        "columns": flattenColumnsWithScrollbar.value
      }, null), (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots, _objectSpread(_objectSpread({}, props), {}, {
        stickyOffsets: headerStickyOffsets.value,
        columns: columnsWithScrollbar.value,
        flattenColumns: flattenColumnsWithScrollbar.value
      }))])]);
    };
  }
});