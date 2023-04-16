"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = require("vue");
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _classNames2 = _interopRequireDefault(require("../../_util/classNames"));
var _propsUtil = require("../../_util/props-util");
var _valueUtil = require("../utils/valueUtil");
var _context = require("../../table/context");
var _legacyUtil = require("../utils/legacyUtil");
var _HoverContext = require("../context/HoverContext");
var _StickyContext = require("../context/StickyContext");
var _warning = require("../../vc-util/warning");
var _eagerComputed = _interopRequireDefault(require("../../_util/eagerComputed"));
var _excluded = ["colSpan", "rowSpan", "style", "class"];
/** Check if cell is in hover range */
function inHoverRange(cellStartRow, cellRowSpan, startRow, endRow) {
  var cellEndRow = cellStartRow + cellRowSpan - 1;
  return cellStartRow <= endRow && cellEndRow >= startRow;
}
function isRenderCell(data) {
  return data && (0, _typeof2.default)(data) === 'object' && !Array.isArray(data) && !(0, _vue.isVNode)(data);
}
var _default2 = (0, _vue.defineComponent)({
  name: 'Cell',
  props: ['prefixCls', 'record', 'index', 'renderIndex', 'dataIndex', 'customRender', 'component', 'colSpan', 'rowSpan', 'fixLeft', 'fixRight', 'firstFixLeft', 'lastFixLeft', 'firstFixRight', 'lastFixRight', 'appendNode', 'additionalProps', 'ellipsis', 'align', 'rowType', 'isSticky', 'column', 'cellType', 'transformCellText'],
  slots: ['appendNode'],
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var contextSlots = (0, _context.useInjectSlots)();
    var _useInjectHover = (0, _HoverContext.useInjectHover)(),
      onHover = _useInjectHover.onHover,
      startRow = _useInjectHover.startRow,
      endRow = _useInjectHover.endRow;
    var colSpan = (0, _vue.computed)(function () {
      var _ref2, _props$colSpan, _props$additionalProp, _props$additionalProp2;
      return (_ref2 = (_props$colSpan = props.colSpan) !== null && _props$colSpan !== void 0 ? _props$colSpan : (_props$additionalProp = props.additionalProps) === null || _props$additionalProp === void 0 ? void 0 : _props$additionalProp.colSpan) !== null && _ref2 !== void 0 ? _ref2 : (_props$additionalProp2 = props.additionalProps) === null || _props$additionalProp2 === void 0 ? void 0 : _props$additionalProp2.colspan;
    });
    var rowSpan = (0, _vue.computed)(function () {
      var _ref3, _props$rowSpan, _props$additionalProp3, _props$additionalProp4;
      return (_ref3 = (_props$rowSpan = props.rowSpan) !== null && _props$rowSpan !== void 0 ? _props$rowSpan : (_props$additionalProp3 = props.additionalProps) === null || _props$additionalProp3 === void 0 ? void 0 : _props$additionalProp3.rowSpan) !== null && _ref3 !== void 0 ? _ref3 : (_props$additionalProp4 = props.additionalProps) === null || _props$additionalProp4 === void 0 ? void 0 : _props$additionalProp4.rowspan;
    });
    var hovering = (0, _eagerComputed.default)(function () {
      var index = props.index;
      return inHoverRange(index, rowSpan.value || 1, startRow.value, endRow.value);
    });
    var supportSticky = (0, _StickyContext.useInjectSticky)();
    // ====================== Hover =======================
    var _onMouseenter = function onMouseenter(event, mergedRowSpan) {
      var _additionalProps$onMo;
      var record = props.record,
        index = props.index,
        additionalProps = props.additionalProps;
      if (record) {
        onHover(index, index + mergedRowSpan - 1);
      }
      additionalProps === null || additionalProps === void 0 ? void 0 : (_additionalProps$onMo = additionalProps.onMouseenter) === null || _additionalProps$onMo === void 0 ? void 0 : _additionalProps$onMo.call(additionalProps, event);
    };
    var onMouseleave = function onMouseleave(event) {
      var _additionalProps$onMo2;
      var record = props.record,
        additionalProps = props.additionalProps;
      if (record) {
        onHover(-1, -1);
      }
      additionalProps === null || additionalProps === void 0 ? void 0 : (_additionalProps$onMo2 = additionalProps.onMouseleave) === null || _additionalProps$onMo2 === void 0 ? void 0 : _additionalProps$onMo2.call(additionalProps, event);
    };
    var getTitle = function getTitle(vnodes) {
      var vnode = (0, _propsUtil.filterEmpty)(vnodes)[0];
      if ((0, _vue.isVNode)(vnode)) {
        if (vnode.type === _vue.Text) {
          return vnode.children;
        } else {
          return Array.isArray(vnode.children) ? getTitle(vnode.children) : undefined;
        }
      } else {
        return vnode;
      }
    };
    return function () {
      var _slots$appendNode, _slots$default, _ref5, _ref6, _classNames, _slots$dragHandle;
      var prefixCls = props.prefixCls,
        record = props.record,
        index = props.index,
        renderIndex = props.renderIndex,
        dataIndex = props.dataIndex,
        customRender = props.customRender,
        _props$component = props.component,
        Component = _props$component === void 0 ? 'td' : _props$component,
        fixLeft = props.fixLeft,
        fixRight = props.fixRight,
        firstFixLeft = props.firstFixLeft,
        lastFixLeft = props.lastFixLeft,
        firstFixRight = props.firstFixRight,
        lastFixRight = props.lastFixRight,
        _props$appendNode = props.appendNode,
        appendNode = _props$appendNode === void 0 ? (_slots$appendNode = slots.appendNode) === null || _slots$appendNode === void 0 ? void 0 : _slots$appendNode.call(slots) : _props$appendNode,
        _props$additionalProp5 = props.additionalProps,
        additionalProps = _props$additionalProp5 === void 0 ? {} : _props$additionalProp5,
        ellipsis = props.ellipsis,
        align = props.align,
        rowType = props.rowType,
        isSticky = props.isSticky,
        _props$column = props.column,
        column = _props$column === void 0 ? {} : _props$column,
        cellType = props.cellType;
      var cellPrefixCls = "".concat(prefixCls, "-cell");
      // ==================== Child Node ====================
      var cellProps;
      var childNode;
      var children = (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots);
      if ((0, _valueUtil.validateValue)(children) || cellType === 'header') {
        childNode = children;
      } else {
        var _column$slots;
        var value = (0, _valueUtil.getPathValue)(record, dataIndex);
        // Customize render node
        childNode = value;
        if (customRender) {
          var renderData = customRender({
            text: value,
            value: value,
            record: record,
            index: index,
            renderIndex: renderIndex,
            column: column.__originColumn__
          });
          if (isRenderCell(renderData)) {
            if (process.env.NODE_ENV !== 'production') {
              (0, _warning.warning)(false, '`columns.customRender` return cell props is deprecated with perf issue, please use `customCell` instead.');
            }
            childNode = renderData.children;
            cellProps = renderData.props;
          } else {
            childNode = renderData;
          }
        }
        if (!(_legacyUtil.INTERNAL_COL_DEFINE in column) && cellType === 'body' && contextSlots.value.bodyCell && !((_column$slots = column.slots) !== null && _column$slots !== void 0 && _column$slots.customRender)) {
          var child = (0, _vue.renderSlot)(contextSlots.value, 'bodyCell', {
            text: value,
            value: value,
            record: record,
            index: index,
            column: column.__originColumn__
          }, function () {
            var fallback = childNode === undefined ? value : childNode;
            return [(0, _typeof2.default)(fallback) === 'object' && (0, _propsUtil.isValidElement)(fallback) || (0, _typeof2.default)(fallback) !== 'object' ? fallback : null];
          });
          childNode = (0, _propsUtil.flattenChildren)(child);
        }
        /** maybe we should @deprecated */
        if (props.transformCellText) {
          childNode = props.transformCellText({
            text: childNode,
            record: record,
            index: index,
            column: column.__originColumn__
          });
        }
      }
      // Not crash if final `childNode` is not validate VueNode
      if ((0, _typeof2.default)(childNode) === 'object' && !Array.isArray(childNode) && !(0, _vue.isVNode)(childNode)) {
        childNode = null;
      }
      if (ellipsis && (lastFixLeft || firstFixRight)) {
        var _childNode = function () {
          return childNode;
        }();
        childNode = (0, _vue.createVNode)("span", {
          "class": "".concat(cellPrefixCls, "-content")
        }, [childNode]);
      }
      if (Array.isArray(childNode) && childNode.length === 1) {
        childNode = childNode[0];
      }
      var _ref4 = cellProps || {},
        cellColSpan = _ref4.colSpan,
        cellRowSpan = _ref4.rowSpan,
        cellStyle = _ref4.style,
        cellClassName = _ref4.class,
        restCellProps = (0, _objectWithoutProperties2.default)(_ref4, _excluded);
      var mergedColSpan = (_ref5 = cellColSpan !== undefined ? cellColSpan : colSpan.value) !== null && _ref5 !== void 0 ? _ref5 : 1;
      var mergedRowSpan = (_ref6 = cellRowSpan !== undefined ? cellRowSpan : rowSpan.value) !== null && _ref6 !== void 0 ? _ref6 : 1;
      if (mergedColSpan === 0 || mergedRowSpan === 0) {
        return null;
      }
      // ====================== Fixed =======================
      var fixedStyle = {};
      var isFixLeft = typeof fixLeft === 'number' && supportSticky.value;
      var isFixRight = typeof fixRight === 'number' && supportSticky.value;
      if (isFixLeft) {
        fixedStyle.position = 'sticky';
        fixedStyle.left = "".concat(fixLeft, "px");
      }
      if (isFixRight) {
        fixedStyle.position = 'sticky';
        fixedStyle.right = "".concat(fixRight, "px");
      }
      // ====================== Align =======================
      var alignStyle = {};
      if (align) {
        alignStyle.textAlign = align;
      }
      // ====================== Render ======================
      var title;
      var ellipsisConfig = ellipsis === true ? {
        showTitle: true
      } : ellipsis;
      if (ellipsisConfig && (ellipsisConfig.showTitle || rowType === 'header')) {
        if (typeof childNode === 'string' || typeof childNode === 'number') {
          title = childNode.toString();
        } else if ((0, _vue.isVNode)(childNode)) {
          title = getTitle([childNode]);
        }
      }
      var componentProps = (0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({
        title: title
      }, restCellProps), additionalProps), {}, {
        colSpan: mergedColSpan !== 1 ? mergedColSpan : null,
        rowSpan: mergedRowSpan !== 1 ? mergedRowSpan : null,
        class: (0, _classNames2.default)(cellPrefixCls, (_classNames = {}, (0, _defineProperty2.default)(_classNames, "".concat(cellPrefixCls, "-fix-left"), isFixLeft && supportSticky.value), (0, _defineProperty2.default)(_classNames, "".concat(cellPrefixCls, "-fix-left-first"), firstFixLeft && supportSticky.value), (0, _defineProperty2.default)(_classNames, "".concat(cellPrefixCls, "-fix-left-last"), lastFixLeft && supportSticky.value), (0, _defineProperty2.default)(_classNames, "".concat(cellPrefixCls, "-fix-right"), isFixRight && supportSticky.value), (0, _defineProperty2.default)(_classNames, "".concat(cellPrefixCls, "-fix-right-first"), firstFixRight && supportSticky.value), (0, _defineProperty2.default)(_classNames, "".concat(cellPrefixCls, "-fix-right-last"), lastFixRight && supportSticky.value), (0, _defineProperty2.default)(_classNames, "".concat(cellPrefixCls, "-ellipsis"), ellipsis), (0, _defineProperty2.default)(_classNames, "".concat(cellPrefixCls, "-with-append"), appendNode), (0, _defineProperty2.default)(_classNames, "".concat(cellPrefixCls, "-fix-sticky"), (isFixLeft || isFixRight) && isSticky && supportSticky.value), (0, _defineProperty2.default)(_classNames, "".concat(cellPrefixCls, "-row-hover"), !cellProps && hovering.value), _classNames), additionalProps.class, cellClassName),
        onMouseenter: function onMouseenter(e) {
          _onMouseenter(e, mergedRowSpan);
        },
        onMouseleave: onMouseleave,
        style: (0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({}, (0, _propsUtil.parseStyleText)(additionalProps.style)), alignStyle), fixedStyle), cellStyle)
      });
      return (0, _vue.createVNode)(Component, componentProps, {
        default: function _default() {
          return [appendNode, childNode, (_slots$dragHandle = slots.dragHandle) === null || _slots$dragHandle === void 0 ? void 0 : _slots$dragHandle.call(slots)];
        }
      });
    };
  }
});
exports.default = _default2;