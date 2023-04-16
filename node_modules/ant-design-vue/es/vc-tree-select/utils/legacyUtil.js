import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
var _excluded = ["title", "switcherIcon"];
import { createVNode as _createVNode } from "vue";
import { filterEmpty } from '../../_util/props-util';
import { camelize } from 'vue';
import { warning } from '../../vc-util/warning';
import TreeNode from '../TreeNode';
function isTreeSelectNode(node) {
  return node && node.type && node.type.isTreeSelectNode;
}
export function convertChildrenToData(rootNodes) {
  function dig() {
    var treeNodes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    return filterEmpty(treeNodes).map(function (treeNode) {
      var _slots$title, _slots$switcherIcon, _slots$default;
      // Filter invalidate node
      if (!isTreeSelectNode(treeNode)) {
        warning(!treeNode, 'TreeSelect/TreeSelectNode can only accept TreeSelectNode as children.');
        return null;
      }
      var slots = treeNode.children || {};
      var key = treeNode.key;
      var props = {};
      for (var _i = 0, _Object$entries = Object.entries(treeNode.props); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
          k = _Object$entries$_i[0],
          v = _Object$entries$_i[1];
        props[camelize(k)] = v;
      }
      var isLeaf = props.isLeaf,
        checkable = props.checkable,
        selectable = props.selectable,
        disabled = props.disabled,
        disableCheckbox = props.disableCheckbox;
      // 默认值为 undefined
      var newProps = {
        isLeaf: isLeaf || isLeaf === '' || undefined,
        checkable: checkable || checkable === '' || undefined,
        selectable: selectable || selectable === '' || undefined,
        disabled: disabled || disabled === '' || undefined,
        disableCheckbox: disableCheckbox || disableCheckbox === '' || undefined
      };
      var slotsProps = _objectSpread(_objectSpread({}, props), newProps);
      var _props$title = props.title,
        title = _props$title === void 0 ? (_slots$title = slots.title) === null || _slots$title === void 0 ? void 0 : _slots$title.call(slots, slotsProps) : _props$title,
        _props$switcherIcon = props.switcherIcon,
        switcherIcon = _props$switcherIcon === void 0 ? (_slots$switcherIcon = slots.switcherIcon) === null || _slots$switcherIcon === void 0 ? void 0 : _slots$switcherIcon.call(slots, slotsProps) : _props$switcherIcon,
        rest = _objectWithoutProperties(props, _excluded);
      var children = (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots);
      var dataNode = _objectSpread(_objectSpread({}, rest), {}, {
        title: title,
        switcherIcon: switcherIcon,
        key: key,
        isLeaf: isLeaf
      }, newProps);
      var parsedChildren = dig(children);
      if (parsedChildren.length) {
        dataNode.children = parsedChildren;
      }
      return dataNode;
    });
  }
  return dig(rootNodes);
}
export function fillLegacyProps(dataNode) {
  // Skip if not dataNode exist
  if (!dataNode) {
    return dataNode;
  }
  var cloneNode = _objectSpread({}, dataNode);
  if (!('props' in cloneNode)) {
    Object.defineProperty(cloneNode, 'props', {
      get: function get() {
        warning(false, 'New `vc-tree-select` not support return node instance as argument anymore. Please consider to remove `props` access.');
        return cloneNode;
      }
    });
  }
  return cloneNode;
}
export function fillAdditionalInfo(extra, triggerValue, checkedValues, treeData, showPosition, fieldNames) {
  var triggerNode = null;
  var nodeList = null;
  function generateMap() {
    function dig(list) {
      var level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '0';
      var parentIncluded = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      return list.map(function (option, index) {
        var pos = "".concat(level, "-").concat(index);
        var value = option[fieldNames.value];
        var included = checkedValues.includes(value);
        var children = dig(option[fieldNames.children] || [], pos, included);
        var node = _createVNode(TreeNode, option, {
          default: function _default() {
            return [children.map(function (child) {
              return child.node;
            })];
          }
        });
        // Link with trigger node
        if (triggerValue === value) {
          triggerNode = node;
        }
        if (included) {
          var checkedNode = {
            pos: pos,
            node: node,
            children: children
          };
          if (!parentIncluded) {
            nodeList.push(checkedNode);
          }
          return checkedNode;
        }
        return null;
      }).filter(function (node) {
        return node;
      });
    }
    if (!nodeList) {
      nodeList = [];
      dig(treeData);
      // Sort to keep the checked node length
      nodeList.sort(function (_ref, _ref2) {
        var val1 = _ref.node.props.value;
        var val2 = _ref2.node.props.value;
        var index1 = checkedValues.indexOf(val1);
        var index2 = checkedValues.indexOf(val2);
        return index1 - index2;
      });
    }
  }
  Object.defineProperty(extra, 'triggerNode', {
    get: function get() {
      warning(false, '`triggerNode` is deprecated. Please consider decoupling data with node.');
      generateMap();
      return triggerNode;
    }
  });
  Object.defineProperty(extra, 'allCheckedNodes', {
    get: function get() {
      warning(false, '`allCheckedNodes` is deprecated. Please consider decoupling data with node.');
      generateMap();
      if (showPosition) {
        return nodeList;
      }
      return nodeList.map(function (_ref3) {
        var node = _ref3.node;
        return node;
      });
    }
  });
}