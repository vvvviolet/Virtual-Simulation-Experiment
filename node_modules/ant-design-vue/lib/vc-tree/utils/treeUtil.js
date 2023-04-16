"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertDataToEntities = convertDataToEntities;
exports.convertNodePropsToEventData = convertNodePropsToEventData;
exports.convertTreeToData = convertTreeToData;
exports.fillFieldNames = fillFieldNames;
exports.flattenTreeData = flattenTreeData;
exports.getKey = getKey;
exports.getTreeNodeProps = getTreeNodeProps;
exports.traverseDataNodes = traverseDataNodes;
exports.warningWithoutKey = warningWithoutKey;
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _util = require("../util");
var _warning = require("../../vc-util/warning");
var _vue = require("vue");
var _propsUtil = require("../../_util/props-util");
var _omit = _interopRequireDefault(require("../../_util/omit"));
var _excluded = ["title", "icon", "switcherIcon"];
function getKey(key, pos) {
  if (key !== null && key !== undefined) {
    return key;
  }
  return pos;
}
function fillFieldNames(fieldNames) {
  var _ref = fieldNames || {},
    title = _ref.title,
    _title = _ref._title,
    key = _ref.key,
    children = _ref.children;
  var mergedTitle = title || 'title';
  return {
    title: mergedTitle,
    _title: _title || [mergedTitle],
    key: key || 'key',
    children: children || 'children'
  };
}
/**
 * Warning if TreeNode do not provides key
 */
function warningWithoutKey(treeData, fieldNames) {
  var keys = new Map();
  function dig(list) {
    var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    (list || []).forEach(function (treeNode) {
      var key = treeNode[fieldNames.key];
      var children = treeNode[fieldNames.children];
      (0, _warning.warning)(key !== null && key !== undefined, "Tree node must have a certain key: [".concat(path).concat(key, "]"));
      var recordKey = String(key);
      (0, _warning.warning)(!keys.has(recordKey) || key === null || key === undefined, "Same 'key' exist in the Tree: ".concat(recordKey));
      keys.set(recordKey, true);
      dig(children, "".concat(path).concat(recordKey, " > "));
    });
  }
  dig(treeData);
}
/**
 * Convert `children` of Tree into `treeData` structure.
 */
function convertTreeToData(rootNodes) {
  function dig() {
    var node = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var treeNodes = (0, _propsUtil.filterEmpty)(node);
    return treeNodes.map(function (treeNode) {
      var _slots$title, _slots$icon, _slots$switcherIcon, _slots$default;
      // Filter invalidate node
      if (!(0, _util.isTreeNode)(treeNode)) {
        (0, _warning.warning)(!treeNode, 'Tree/TreeNode can only accept TreeNode as children.');
        return null;
      }
      var slots = treeNode.children || {};
      var key = treeNode.key;
      var props = {};
      for (var _i = 0, _Object$entries = Object.entries(treeNode.props); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = (0, _slicedToArray2.default)(_Object$entries[_i], 2),
          k = _Object$entries$_i[0],
          v = _Object$entries$_i[1];
        props[(0, _vue.camelize)(k)] = v;
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
      var slotsProps = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, props), newProps);
      var _props$title = props.title,
        title = _props$title === void 0 ? (_slots$title = slots.title) === null || _slots$title === void 0 ? void 0 : _slots$title.call(slots, slotsProps) : _props$title,
        _props$icon = props.icon,
        icon = _props$icon === void 0 ? (_slots$icon = slots.icon) === null || _slots$icon === void 0 ? void 0 : _slots$icon.call(slots, slotsProps) : _props$icon,
        _props$switcherIcon = props.switcherIcon,
        switcherIcon = _props$switcherIcon === void 0 ? (_slots$switcherIcon = slots.switcherIcon) === null || _slots$switcherIcon === void 0 ? void 0 : _slots$switcherIcon.call(slots, slotsProps) : _props$switcherIcon,
        rest = (0, _objectWithoutProperties2.default)(props, _excluded);
      var children = (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots);
      var dataNode = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, rest), {}, {
        title: title,
        icon: icon,
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
/**
 * Flat nest tree data into flatten list. This is used for virtual list render.
 * @param treeNodeList Origin data node list
 * @param expandedKeys
 * need expanded keys, provides `true` means all expanded (used in `rc-tree-select`).
 */
function flattenTreeData(treeNodeList, expandedKeys, fieldNames) {
  var _fillFieldNames = fillFieldNames(fieldNames),
    fieldTitles = _fillFieldNames._title,
    fieldKey = _fillFieldNames.key,
    fieldChildren = _fillFieldNames.children;
  var expandedKeySet = new Set(expandedKeys === true ? [] : expandedKeys);
  var flattenList = [];
  function dig(list) {
    var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    return list.map(function (treeNode, index) {
      var pos = (0, _util.getPosition)(parent ? parent.pos : '0', index);
      var mergedKey = getKey(treeNode[fieldKey], pos);
      // Pick matched title in field title list
      var mergedTitle;
      for (var i = 0; i < fieldTitles.length; i += 1) {
        var fieldTitle = fieldTitles[i];
        if (treeNode[fieldTitle] !== undefined) {
          mergedTitle = treeNode[fieldTitle];
          break;
        }
      }
      // Add FlattenDataNode into list
      var flattenNode = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, (0, _omit.default)(treeNode, [].concat((0, _toConsumableArray2.default)(fieldTitles), [fieldKey, fieldChildren]))), {}, {
        title: mergedTitle,
        key: mergedKey,
        parent: parent,
        pos: pos,
        children: null,
        data: treeNode,
        isStart: [].concat((0, _toConsumableArray2.default)(parent ? parent.isStart : []), [index === 0]),
        isEnd: [].concat((0, _toConsumableArray2.default)(parent ? parent.isEnd : []), [index === list.length - 1])
      });
      flattenList.push(flattenNode);
      // Loop treeNode children
      if (expandedKeys === true || expandedKeySet.has(mergedKey)) {
        flattenNode.children = dig(treeNode[fieldChildren] || [], flattenNode);
      } else {
        flattenNode.children = [];
      }
      return flattenNode;
    });
  }
  dig(treeNodeList);
  return flattenList;
}
/**
 * Traverse all the data by `treeData`.
 * Please not use it out of the `rc-tree` since we may refactor this code.
 */
function traverseDataNodes(dataNodes, callback,
// To avoid too many params, let use config instead of origin param
config) {
  var mergedConfig = {};
  if ((0, _typeof2.default)(config) === 'object') {
    mergedConfig = config;
  } else {
    mergedConfig = {
      externalGetKey: config
    };
  }
  mergedConfig = mergedConfig || {};
  // Init config
  var _mergedConfig = mergedConfig,
    childrenPropName = _mergedConfig.childrenPropName,
    externalGetKey = _mergedConfig.externalGetKey,
    fieldNames = _mergedConfig.fieldNames;
  var _fillFieldNames2 = fillFieldNames(fieldNames),
    fieldKey = _fillFieldNames2.key,
    fieldChildren = _fillFieldNames2.children;
  var mergeChildrenPropName = childrenPropName || fieldChildren;
  // Get keys
  var syntheticGetKey;
  if (externalGetKey) {
    if (typeof externalGetKey === 'string') {
      syntheticGetKey = function syntheticGetKey(node) {
        return node[externalGetKey];
      };
    } else if (typeof externalGetKey === 'function') {
      syntheticGetKey = function syntheticGetKey(node) {
        return externalGetKey(node);
      };
    }
  } else {
    syntheticGetKey = function syntheticGetKey(node, pos) {
      return getKey(node[fieldKey], pos);
    };
  }
  // Process
  function processNode(node, index, parent, pathNodes) {
    var children = node ? node[mergeChildrenPropName] : dataNodes;
    var pos = node ? (0, _util.getPosition)(parent.pos, index) : '0';
    var connectNodes = node ? [].concat((0, _toConsumableArray2.default)(pathNodes), [node]) : [];
    // Process node if is not root
    if (node) {
      var key = syntheticGetKey(node, pos);
      var data = {
        node: node,
        index: index,
        pos: pos,
        key: key,
        parentPos: parent.node ? parent.pos : null,
        level: parent.level + 1,
        nodes: connectNodes
      };
      callback(data);
    }
    // Process children node
    if (children) {
      children.forEach(function (subNode, subIndex) {
        processNode(subNode, subIndex, {
          node: node,
          pos: pos,
          level: parent ? parent.level + 1 : -1
        }, connectNodes);
      });
    }
  }
  processNode(null);
}
/**
 * Convert `treeData` into entity records.
 */
function convertDataToEntities(dataNodes) {
  var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    initWrapper = _ref2.initWrapper,
    processEntity = _ref2.processEntity,
    onProcessFinished = _ref2.onProcessFinished,
    externalGetKey = _ref2.externalGetKey,
    childrenPropName = _ref2.childrenPropName,
    fieldNames = _ref2.fieldNames;
  var /** @deprecated Use `config.externalGetKey` instead */
  legacyExternalGetKey = arguments.length > 2 ? arguments[2] : undefined;
  // Init config
  var mergedExternalGetKey = externalGetKey || legacyExternalGetKey;
  var posEntities = {};
  var keyEntities = {};
  var wrapper = {
    posEntities: posEntities,
    keyEntities: keyEntities
  };
  if (initWrapper) {
    wrapper = initWrapper(wrapper) || wrapper;
  }
  traverseDataNodes(dataNodes, function (item) {
    var node = item.node,
      index = item.index,
      pos = item.pos,
      key = item.key,
      parentPos = item.parentPos,
      level = item.level,
      nodes = item.nodes;
    var entity = {
      node: node,
      nodes: nodes,
      index: index,
      key: key,
      pos: pos,
      level: level
    };
    var mergedKey = getKey(key, pos);
    posEntities[pos] = entity;
    keyEntities[mergedKey] = entity;
    // Fill children
    entity.parent = posEntities[parentPos];
    if (entity.parent) {
      entity.parent.children = entity.parent.children || [];
      entity.parent.children.push(entity);
    }
    if (processEntity) {
      processEntity(entity, wrapper);
    }
  }, {
    externalGetKey: mergedExternalGetKey,
    childrenPropName: childrenPropName,
    fieldNames: fieldNames
  });
  if (onProcessFinished) {
    onProcessFinished(wrapper);
  }
  return wrapper;
}
/**
 * Get TreeNode props with Tree props.
 */
function getTreeNodeProps(key, _ref3) {
  var expandedKeysSet = _ref3.expandedKeysSet,
    selectedKeysSet = _ref3.selectedKeysSet,
    loadedKeysSet = _ref3.loadedKeysSet,
    loadingKeysSet = _ref3.loadingKeysSet,
    checkedKeysSet = _ref3.checkedKeysSet,
    halfCheckedKeysSet = _ref3.halfCheckedKeysSet,
    dragOverNodeKey = _ref3.dragOverNodeKey,
    dropPosition = _ref3.dropPosition,
    keyEntities = _ref3.keyEntities;
  var entity = keyEntities[key];
  var treeNodeProps = {
    eventKey: key,
    expanded: expandedKeysSet.has(key),
    selected: selectedKeysSet.has(key),
    loaded: loadedKeysSet.has(key),
    loading: loadingKeysSet.has(key),
    checked: checkedKeysSet.has(key),
    halfChecked: halfCheckedKeysSet.has(key),
    pos: String(entity ? entity.pos : ''),
    parent: entity.parent,
    // [Legacy] Drag props
    // Since the interaction of drag is changed, the semantic of the props are
    // not accuracy, I think it should be finally removed
    dragOver: dragOverNodeKey === key && dropPosition === 0,
    dragOverGapTop: dragOverNodeKey === key && dropPosition === -1,
    dragOverGapBottom: dragOverNodeKey === key && dropPosition === 1
  };
  return treeNodeProps;
}
function convertNodePropsToEventData(props) {
  var data = props.data,
    expanded = props.expanded,
    selected = props.selected,
    checked = props.checked,
    loaded = props.loaded,
    loading = props.loading,
    halfChecked = props.halfChecked,
    dragOver = props.dragOver,
    dragOverGapTop = props.dragOverGapTop,
    dragOverGapBottom = props.dragOverGapBottom,
    pos = props.pos,
    active = props.active,
    eventKey = props.eventKey;
  var eventData = (0, _objectSpread2.default)((0, _objectSpread2.default)({
    dataRef: data
  }, data), {}, {
    expanded: expanded,
    selected: selected,
    checked: checked,
    loaded: loaded,
    loading: loading,
    halfChecked: halfChecked,
    dragOver: dragOver,
    dragOverGapTop: dragOverGapTop,
    dragOverGapBottom: dragOverGapBottom,
    pos: pos,
    active: active,
    eventKey: eventKey,
    key: eventKey
  });
  if (!('props' in eventData)) {
    Object.defineProperty(eventData, 'props', {
      get: function get() {
        (0, _warning.warning)(false, 'Second param return from event is node data instead of TreeNode instance. Please read value directly instead of reading from `props`.');
        return props;
      }
    });
  }
  return eventData;
}