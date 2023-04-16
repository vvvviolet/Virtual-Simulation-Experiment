import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { shallowRef, watch, toRaw } from 'vue';
import { convertChildrenToData } from '../utils/legacyUtil';
function parseSimpleTreeData(treeData, _ref) {
  var id = _ref.id,
    pId = _ref.pId,
    rootPId = _ref.rootPId;
  var keyNodes = {};
  var rootNodeList = [];
  // Fill in the map
  var nodeList = treeData.map(function (node) {
    var clone = _objectSpread({}, node);
    var key = clone[id];
    keyNodes[key] = clone;
    clone.key = clone.key || key;
    return clone;
  });
  // Connect tree
  nodeList.forEach(function (node) {
    var parentKey = node[pId];
    var parent = keyNodes[parentKey];
    // Fill parent
    if (parent) {
      parent.children = parent.children || [];
      parent.children.push(node);
    }
    // Fill root tree node
    if (parentKey === rootPId || !parent && rootPId === null) {
      rootNodeList.push(node);
    }
  });
  return rootNodeList;
}
/**
 * Convert `treeData` or `children` into formatted `treeData`.
 * Will not re-calculate if `treeData` or `children` not change.
 */
export default function useTreeData(treeData, children, simpleMode) {
  var mergedTreeData = shallowRef();
  watch([simpleMode, treeData, children], function () {
    var simpleModeValue = simpleMode.value;
    if (treeData.value) {
      mergedTreeData.value = simpleMode.value ? parseSimpleTreeData(toRaw(treeData.value), _objectSpread({
        id: 'id',
        pId: 'pId',
        rootPId: null
      }, simpleModeValue !== true ? simpleModeValue : {})) : toRaw(treeData.value).slice();
    } else {
      mergedTreeData.value = convertChildrenToData(toRaw(children.value));
    }
  }, {
    immediate: true,
    deep: true
  });
  return mergedTreeData;
}