import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { Fragment as _Fragment, createVNode as _createVNode } from "vue";
import Cell from './Cell';
import { getSlot, getClass, getStyle } from '../_util/props-util';
import { inject, ref } from 'vue';
import { descriptionsContext } from './index';
var Row = function Row(props) {
  var renderCells = function renderCells(items, _ref, _ref2) {
    var colon = _ref.colon,
      prefixCls = _ref.prefixCls,
      bordered = _ref.bordered;
    var component = _ref2.component,
      type = _ref2.type,
      showLabel = _ref2.showLabel,
      showContent = _ref2.showContent,
      rootLabelStyle = _ref2.labelStyle,
      rootContentStyle = _ref2.contentStyle;
    return items.map(function (item, index) {
      var _item$children, _item$children$label;
      var itemProps = item.props || {};
      var _itemProps$prefixCls = itemProps.prefixCls,
        itemPrefixCls = _itemProps$prefixCls === void 0 ? prefixCls : _itemProps$prefixCls,
        _itemProps$span = itemProps.span,
        span = _itemProps$span === void 0 ? 1 : _itemProps$span,
        _itemProps$labelStyle = itemProps.labelStyle,
        labelStyle = _itemProps$labelStyle === void 0 ? itemProps['label-style'] : _itemProps$labelStyle,
        _itemProps$contentSty = itemProps.contentStyle,
        contentStyle = _itemProps$contentSty === void 0 ? itemProps['content-style'] : _itemProps$contentSty,
        _itemProps$label = itemProps.label,
        label = _itemProps$label === void 0 ? (_item$children = item.children) === null || _item$children === void 0 ? void 0 : (_item$children$label = _item$children.label) === null || _item$children$label === void 0 ? void 0 : _item$children$label.call(_item$children) : _itemProps$label;
      var children = getSlot(item);
      var className = getClass(item);
      var style = getStyle(item);
      var key = item.key;
      if (typeof component === 'string') {
        return _createVNode(Cell, {
          "key": "".concat(type, "-").concat(String(key) || index),
          "class": className,
          "style": style,
          "labelStyle": _objectSpread(_objectSpread({}, rootLabelStyle), labelStyle),
          "contentStyle": _objectSpread(_objectSpread({}, rootContentStyle), contentStyle),
          "span": span,
          "colon": colon,
          "component": component,
          "itemPrefixCls": itemPrefixCls,
          "bordered": bordered,
          "label": showLabel ? label : null,
          "content": showContent ? children : null
        }, null);
      }
      return [_createVNode(Cell, {
        "key": "label-".concat(String(key) || index),
        "class": className,
        "style": _objectSpread(_objectSpread(_objectSpread({}, rootLabelStyle), style), labelStyle),
        "span": 1,
        "colon": colon,
        "component": component[0],
        "itemPrefixCls": itemPrefixCls,
        "bordered": bordered,
        "label": label
      }, null), _createVNode(Cell, {
        "key": "content-".concat(String(key) || index),
        "class": className,
        "style": _objectSpread(_objectSpread(_objectSpread({}, rootContentStyle), style), contentStyle),
        "span": span * 2 - 1,
        "component": component[1],
        "itemPrefixCls": itemPrefixCls,
        "bordered": bordered,
        "content": children
      }, null)];
    });
  };
  var prefixCls = props.prefixCls,
    vertical = props.vertical,
    row = props.row,
    index = props.index,
    bordered = props.bordered;
  var _inject = inject(descriptionsContext, {
      labelStyle: ref({}),
      contentStyle: ref({})
    }),
    labelStyle = _inject.labelStyle,
    contentStyle = _inject.contentStyle;
  if (vertical) {
    return _createVNode(_Fragment, null, [_createVNode("tr", {
      "key": "label-".concat(index),
      "class": "".concat(prefixCls, "-row")
    }, [renderCells(row, props, {
      component: 'th',
      type: 'label',
      showLabel: true,
      labelStyle: labelStyle.value,
      contentStyle: contentStyle.value
    })]), _createVNode("tr", {
      "key": "content-".concat(index),
      "class": "".concat(prefixCls, "-row")
    }, [renderCells(row, props, {
      component: 'td',
      type: 'content',
      showContent: true,
      labelStyle: labelStyle.value,
      contentStyle: contentStyle.value
    })])]);
  }
  return _createVNode("tr", {
    "key": index,
    "class": "".concat(prefixCls, "-row")
  }, [renderCells(row, props, {
    component: bordered ? ['th', 'td'] : 'td',
    type: 'item',
    showLabel: true,
    showContent: true,
    labelStyle: labelStyle.value,
    contentStyle: contentStyle.value
  })]);
};
export default Row;