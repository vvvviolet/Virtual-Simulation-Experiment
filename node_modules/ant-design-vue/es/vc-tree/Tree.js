import _typeof from "@babel/runtime/helpers/esm/typeof";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { createVNode as _createVNode } from "vue";
import { useProvideKeysState, TreeContext } from './contextTypes';
import { getDragChildrenKeys, parseCheckedKeys, conductExpandParent, calcSelectedKeys, calcDropPosition, arrAdd, arrDel, posToArr } from './util';
import { flattenTreeData, convertTreeToData, convertDataToEntities, convertNodePropsToEventData, getTreeNodeProps, fillFieldNames } from './utils/treeUtil';
import NodeList, { MOTION_KEY, MotionEntity } from './NodeList';
import { conductCheck } from './utils/conductUtil';
import DropIndicator from './DropIndicator';
import { computed, defineComponent, onUnmounted, reactive, ref, shallowRef, watch, watchEffect, nextTick, toRaw } from 'vue';
import initDefaultProps from '../_util/props-util/initDefaultProps';
import { treeProps } from './props';
import { warning } from '../vc-util/warning';
import KeyCode from '../_util/KeyCode';
import classNames from '../_util/classNames';
import pickAttrs from '../_util/pickAttrs';
import useMaxLevel from './useMaxLevel';
var MAX_RETRY_TIMES = 10;
export default defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'Tree',
  inheritAttrs: false,
  slots: ['checkable', 'title', 'icon', 'titleRender'],
  props: initDefaultProps(treeProps(), {
    prefixCls: 'vc-tree',
    showLine: false,
    showIcon: true,
    selectable: true,
    multiple: false,
    checkable: false,
    disabled: false,
    checkStrictly: false,
    draggable: false,
    defaultExpandParent: true,
    autoExpandParent: false,
    defaultExpandAll: false,
    defaultExpandedKeys: [],
    defaultCheckedKeys: [],
    defaultSelectedKeys: [],
    dropIndicatorRender: DropIndicator,
    allowDrop: function allowDrop() {
      return true;
    }
  }),
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs,
      slots = _ref.slots,
      expose = _ref.expose;
    var destroyed = ref(false);
    var delayedDragEnterLogic = {};
    var indent = ref();
    var selectedKeys = shallowRef([]);
    var checkedKeys = shallowRef([]);
    var halfCheckedKeys = shallowRef([]);
    var loadedKeys = shallowRef([]);
    var loadingKeys = shallowRef([]);
    var expandedKeys = shallowRef([]);
    var loadingRetryTimes = {};
    var dragState = reactive({
      draggingNodeKey: null,
      dragChildrenKeys: [],
      // dropTargetKey is the key of abstract-drop-node
      // the abstract-drop-node is the real drop node when drag and drop
      // not the DOM drag over node
      dropTargetKey: null,
      dropPosition: null,
      dropContainerKey: null,
      dropLevelOffset: null,
      dropTargetPos: null,
      dropAllowed: true,
      // the abstract-drag-over-node
      // if mouse is on the bottom of top dom node or no the top of the bottom dom node
      // abstract-drag-over-node is the top node
      dragOverNodeKey: null
    });
    var treeData = shallowRef([]);
    watch([function () {
      return props.treeData;
    }, function () {
      return props.children;
    }], function () {
      treeData.value = props.treeData !== undefined ? toRaw(props.treeData).slice() : convertTreeToData(toRaw(props.children));
    }, {
      immediate: true,
      deep: true
    });
    var keyEntities = shallowRef({});
    var focused = ref(false);
    var activeKey = ref(null);
    var listChanging = ref(false);
    var fieldNames = computed(function () {
      return fillFieldNames(props.fieldNames);
    });
    var listRef = ref();
    var dragStartMousePosition = null;
    var dragNode = null;
    var currentMouseOverDroppableNodeKey = null;
    var treeNodeRequiredProps = computed(function () {
      return {
        expandedKeysSet: expandedKeysSet.value,
        selectedKeysSet: selectedKeysSet.value,
        loadedKeysSet: loadedKeysSet.value,
        loadingKeysSet: loadingKeysSet.value,
        checkedKeysSet: checkedKeysSet.value,
        halfCheckedKeysSet: halfCheckedKeysSet.value,
        dragOverNodeKey: dragState.dragOverNodeKey,
        dropPosition: dragState.dropPosition,
        keyEntities: keyEntities.value
      };
    });
    var expandedKeysSet = computed(function () {
      return new Set(expandedKeys.value);
    });
    var selectedKeysSet = computed(function () {
      return new Set(selectedKeys.value);
    });
    var loadedKeysSet = computed(function () {
      return new Set(loadedKeys.value);
    });
    var loadingKeysSet = computed(function () {
      return new Set(loadingKeys.value);
    });
    var checkedKeysSet = computed(function () {
      return new Set(checkedKeys.value);
    });
    var halfCheckedKeysSet = computed(function () {
      return new Set(halfCheckedKeys.value);
    });
    watchEffect(function () {
      if (treeData.value) {
        var entitiesMap = convertDataToEntities(treeData.value, {
          fieldNames: fieldNames.value
        });
        keyEntities.value = _objectSpread(_defineProperty({}, MOTION_KEY, MotionEntity), entitiesMap.keyEntities);
      }
    });
    var init = false; // 处理 defaultXxxx api, 仅仅首次有效
    watch([function () {
      return props.expandedKeys;
    }, function () {
      return props.autoExpandParent;
    }, keyEntities],
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    function (_ref2, _ref3) {
      var _ref4 = _slicedToArray(_ref2, 2),
        _newKeys = _ref4[0],
        newAutoExpandParent = _ref4[1];
      var _ref5 = _slicedToArray(_ref3, 2),
        _oldKeys = _ref5[0],
        oldAutoExpandParent = _ref5[1];
      var keys = expandedKeys.value;
      // ================ expandedKeys =================
      if (props.expandedKeys !== undefined || init && newAutoExpandParent !== oldAutoExpandParent) {
        keys = props.autoExpandParent || !init && props.defaultExpandParent ? conductExpandParent(props.expandedKeys, keyEntities.value) : props.expandedKeys;
      } else if (!init && props.defaultExpandAll) {
        var cloneKeyEntities = _objectSpread({}, keyEntities.value);
        delete cloneKeyEntities[MOTION_KEY];
        keys = Object.keys(cloneKeyEntities).map(function (key) {
          return cloneKeyEntities[key].key;
        });
      } else if (!init && props.defaultExpandedKeys) {
        keys = props.autoExpandParent || props.defaultExpandParent ? conductExpandParent(props.defaultExpandedKeys, keyEntities.value) : props.defaultExpandedKeys;
      }
      if (keys) {
        expandedKeys.value = keys;
      }
      init = true;
    }, {
      immediate: true
    });
    // ================ flattenNodes =================
    var flattenNodes = shallowRef([]);
    watchEffect(function () {
      flattenNodes.value = flattenTreeData(treeData.value, expandedKeys.value, fieldNames.value);
    });
    // ================ selectedKeys =================
    watchEffect(function () {
      if (props.selectable) {
        if (props.selectedKeys !== undefined) {
          selectedKeys.value = calcSelectedKeys(props.selectedKeys, props);
        } else if (!init && props.defaultSelectedKeys) {
          selectedKeys.value = calcSelectedKeys(props.defaultSelectedKeys, props);
        }
      }
    });
    var _useMaxLevel = useMaxLevel(keyEntities),
      maxLevel = _useMaxLevel.maxLevel,
      levelEntities = _useMaxLevel.levelEntities;
    // ================= checkedKeys =================
    watchEffect(function () {
      if (props.checkable) {
        var checkedKeyEntity;
        if (props.checkedKeys !== undefined) {
          checkedKeyEntity = parseCheckedKeys(props.checkedKeys) || {};
        } else if (!init && props.defaultCheckedKeys) {
          checkedKeyEntity = parseCheckedKeys(props.defaultCheckedKeys) || {};
        } else if (treeData.value) {
          // If `treeData` changed, we also need check it
          checkedKeyEntity = parseCheckedKeys(props.checkedKeys) || {
            checkedKeys: checkedKeys.value,
            halfCheckedKeys: halfCheckedKeys.value
          };
        }
        if (checkedKeyEntity) {
          var _checkedKeyEntity = checkedKeyEntity,
            _checkedKeyEntity$che = _checkedKeyEntity.checkedKeys,
            newCheckedKeys = _checkedKeyEntity$che === void 0 ? [] : _checkedKeyEntity$che,
            _checkedKeyEntity$hal = _checkedKeyEntity.halfCheckedKeys,
            newHalfCheckedKeys = _checkedKeyEntity$hal === void 0 ? [] : _checkedKeyEntity$hal;
          if (!props.checkStrictly) {
            var conductKeys = conductCheck(newCheckedKeys, true, keyEntities.value, maxLevel.value, levelEntities.value);
            newCheckedKeys = conductKeys.checkedKeys;
            newHalfCheckedKeys = conductKeys.halfCheckedKeys;
          }
          checkedKeys.value = newCheckedKeys;
          halfCheckedKeys.value = newHalfCheckedKeys;
        }
      }
    });
    // ================= loadedKeys ==================
    watchEffect(function () {
      if (props.loadedKeys) {
        loadedKeys.value = props.loadedKeys;
      }
    });
    var resetDragState = function resetDragState() {
      _extends(dragState, {
        dragOverNodeKey: null,
        dropPosition: null,
        dropLevelOffset: null,
        dropTargetKey: null,
        dropContainerKey: null,
        dropTargetPos: null,
        dropAllowed: false
      });
    };
    var scrollTo = function scrollTo(scroll) {
      listRef.value.scrollTo(scroll);
    };
    watch(function () {
      return props.activeKey;
    }, function () {
      if (props.activeKey !== undefined) {
        activeKey.value = props.activeKey;
      }
    }, {
      immediate: true
    });
    watch(activeKey, function (val) {
      nextTick(function () {
        if (val !== null) {
          scrollTo({
            key: val
          });
        }
      });
    }, {
      immediate: true,
      flush: 'post'
    });
    // =========================== Expanded ===========================
    /** Set uncontrolled `expandedKeys`. This will also auto update `flattenNodes`. */
    var setExpandedKeys = function setExpandedKeys(keys) {
      if (props.expandedKeys === undefined) {
        expandedKeys.value = keys;
      }
    };
    var cleanDragState = function cleanDragState() {
      if (dragState.draggingNodeKey !== null) {
        _extends(dragState, {
          draggingNodeKey: null,
          dropPosition: null,
          dropContainerKey: null,
          dropTargetKey: null,
          dropLevelOffset: null,
          dropAllowed: true,
          dragOverNodeKey: null
        });
      }
      dragStartMousePosition = null;
      currentMouseOverDroppableNodeKey = null;
    };
    // if onNodeDragEnd is called, onWindowDragEnd won't be called since stopPropagation() is called
    var onNodeDragEnd = function onNodeDragEnd(event, node) {
      var onDragend = props.onDragend;
      dragState.dragOverNodeKey = null;
      cleanDragState();
      onDragend === null || onDragend === void 0 ? void 0 : onDragend({
        event: event,
        node: node.eventData
      });
      dragNode = null;
    };
    // since stopPropagation() is called in treeNode
    // if onWindowDrag is called, whice means state is keeped, drag state should be cleared
    var onWindowDragEnd = function onWindowDragEnd(event) {
      onNodeDragEnd(event, null, true);
      window.removeEventListener('dragend', onWindowDragEnd);
    };
    var onNodeDragStart = function onNodeDragStart(event, node) {
      var onDragstart = props.onDragstart;
      var eventKey = node.eventKey,
        eventData = node.eventData;
      dragNode = node;
      dragStartMousePosition = {
        x: event.clientX,
        y: event.clientY
      };
      var newExpandedKeys = arrDel(expandedKeys.value, eventKey);
      dragState.draggingNodeKey = eventKey;
      dragState.dragChildrenKeys = getDragChildrenKeys(eventKey, keyEntities.value);
      indent.value = listRef.value.getIndentWidth();
      setExpandedKeys(newExpandedKeys);
      window.addEventListener('dragend', onWindowDragEnd);
      if (onDragstart) {
        onDragstart({
          event: event,
          node: eventData
        });
      }
    };
    /**
     * [Legacy] Select handler is smaller than node,
     * so that this will trigger when drag enter node or select handler.
     * This is a little tricky if customize css without padding.
     * Better for use mouse move event to refresh drag state.
     * But let's just keep it to avoid event trigger logic change.
     */
    var onNodeDragEnter = function onNodeDragEnter(event, node) {
      var onDragenter = props.onDragenter,
        onExpand = props.onExpand,
        allowDrop = props.allowDrop,
        direction = props.direction;
      var pos = node.pos,
        eventKey = node.eventKey;
      // record the key of node which is latest entered, used in dragleave event.
      if (currentMouseOverDroppableNodeKey !== eventKey) {
        currentMouseOverDroppableNodeKey = eventKey;
      }
      if (!dragNode) {
        resetDragState();
        return;
      }
      var _calcDropPosition = calcDropPosition(event, dragNode, node, indent.value, dragStartMousePosition, allowDrop, flattenNodes.value, keyEntities.value, expandedKeysSet.value, direction),
        dropPosition = _calcDropPosition.dropPosition,
        dropLevelOffset = _calcDropPosition.dropLevelOffset,
        dropTargetKey = _calcDropPosition.dropTargetKey,
        dropContainerKey = _calcDropPosition.dropContainerKey,
        dropTargetPos = _calcDropPosition.dropTargetPos,
        dropAllowed = _calcDropPosition.dropAllowed,
        dragOverNodeKey = _calcDropPosition.dragOverNodeKey;
      if (
      // don't allow drop inside its children
      dragState.dragChildrenKeys.indexOf(dropTargetKey) !== -1 ||
      // don't allow drop when drop is not allowed caculated by calcDropPosition
      !dropAllowed) {
        resetDragState();
        return;
      }
      // Side effect for delay drag
      if (!delayedDragEnterLogic) {
        delayedDragEnterLogic = {};
      }
      Object.keys(delayedDragEnterLogic).forEach(function (key) {
        clearTimeout(delayedDragEnterLogic[key]);
      });
      if (dragNode.eventKey !== node.eventKey) {
        // hoist expand logic here
        // since if logic is on the bottom
        // it will be blocked by abstract dragover node check
        //   => if you dragenter from top, you mouse will still be consider as in the top node
        delayedDragEnterLogic[pos] = window.setTimeout(function () {
          if (dragState.draggingNodeKey === null) return;
          var newExpandedKeys = expandedKeys.value.slice();
          var entity = keyEntities.value[node.eventKey];
          if (entity && (entity.children || []).length) {
            newExpandedKeys = arrAdd(expandedKeys.value, node.eventKey);
          }
          setExpandedKeys(newExpandedKeys);
          if (onExpand) {
            onExpand(newExpandedKeys, {
              node: node.eventData,
              expanded: true,
              nativeEvent: event
            });
          }
        }, 800);
      }
      // Skip if drag node is self
      if (dragNode.eventKey === dropTargetKey && dropLevelOffset === 0) {
        resetDragState();
        return;
      }
      // Update drag over node and drag state
      _extends(dragState, {
        dragOverNodeKey: dragOverNodeKey,
        dropPosition: dropPosition,
        dropLevelOffset: dropLevelOffset,
        dropTargetKey: dropTargetKey,
        dropContainerKey: dropContainerKey,
        dropTargetPos: dropTargetPos,
        dropAllowed: dropAllowed
      });
      if (onDragenter) {
        onDragenter({
          event: event,
          node: node.eventData,
          expandedKeys: expandedKeys.value
        });
      }
    };
    var onNodeDragOver = function onNodeDragOver(event, node) {
      var onDragover = props.onDragover,
        allowDrop = props.allowDrop,
        direction = props.direction;
      if (!dragNode) {
        return;
      }
      var _calcDropPosition2 = calcDropPosition(event, dragNode, node, indent.value, dragStartMousePosition, allowDrop, flattenNodes.value, keyEntities.value, expandedKeysSet.value, direction),
        dropPosition = _calcDropPosition2.dropPosition,
        dropLevelOffset = _calcDropPosition2.dropLevelOffset,
        dropTargetKey = _calcDropPosition2.dropTargetKey,
        dropContainerKey = _calcDropPosition2.dropContainerKey,
        dropAllowed = _calcDropPosition2.dropAllowed,
        dropTargetPos = _calcDropPosition2.dropTargetPos,
        dragOverNodeKey = _calcDropPosition2.dragOverNodeKey;
      if (dragState.dragChildrenKeys.indexOf(dropTargetKey) !== -1 || !dropAllowed) {
        // don't allow drop inside its children
        // don't allow drop when drop is not allowed caculated by calcDropPosition
        return;
      }
      // Update drag position
      if (dragNode.eventKey === dropTargetKey && dropLevelOffset === 0) {
        if (!(dragState.dropPosition === null && dragState.dropLevelOffset === null && dragState.dropTargetKey === null && dragState.dropContainerKey === null && dragState.dropTargetPos === null && dragState.dropAllowed === false && dragState.dragOverNodeKey === null)) {
          resetDragState();
        }
      } else if (!(dropPosition === dragState.dropPosition && dropLevelOffset === dragState.dropLevelOffset && dropTargetKey === dragState.dropTargetKey && dropContainerKey === dragState.dropContainerKey && dropTargetPos === dragState.dropTargetPos && dropAllowed === dragState.dropAllowed && dragOverNodeKey === dragState.dragOverNodeKey)) {
        _extends(dragState, {
          dropPosition: dropPosition,
          dropLevelOffset: dropLevelOffset,
          dropTargetKey: dropTargetKey,
          dropContainerKey: dropContainerKey,
          dropTargetPos: dropTargetPos,
          dropAllowed: dropAllowed,
          dragOverNodeKey: dragOverNodeKey
        });
      }
      if (onDragover) {
        onDragover({
          event: event,
          node: node.eventData
        });
      }
    };
    var onNodeDragLeave = function onNodeDragLeave(event, node) {
      // if it is outside the droppable area
      // currentMouseOverDroppableNodeKey will be updated in dragenter event when into another droppable receiver.
      if (currentMouseOverDroppableNodeKey === node.eventKey && !event.currentTarget.contains(event.relatedTarget)) {
        resetDragState();
        currentMouseOverDroppableNodeKey = null;
      }
      var onDragleave = props.onDragleave;
      if (onDragleave) {
        onDragleave({
          event: event,
          node: node.eventData
        });
      }
    };
    var onNodeDrop = function onNodeDrop(event, _node) {
      var _activeItem$value;
      var outsideTree = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var dragChildrenKeys = dragState.dragChildrenKeys,
        dropPosition = dragState.dropPosition,
        dropTargetKey = dragState.dropTargetKey,
        dropTargetPos = dragState.dropTargetPos,
        dropAllowed = dragState.dropAllowed;
      if (!dropAllowed) return;
      var onDrop = props.onDrop;
      dragState.dragOverNodeKey = null;
      cleanDragState();
      if (dropTargetKey === null) return;
      var abstractDropNodeProps = _objectSpread(_objectSpread({}, getTreeNodeProps(dropTargetKey, toRaw(treeNodeRequiredProps.value))), {}, {
        active: ((_activeItem$value = activeItem.value) === null || _activeItem$value === void 0 ? void 0 : _activeItem$value.key) === dropTargetKey,
        data: keyEntities.value[dropTargetKey].node
      });
      var dropToChild = dragChildrenKeys.indexOf(dropTargetKey) !== -1;
      warning(!dropToChild, "Can not drop to dragNode's children node. Maybe this is a bug of ant-design-vue. Please report an issue.");
      var posArr = posToArr(dropTargetPos);
      var dropResult = {
        event: event,
        node: convertNodePropsToEventData(abstractDropNodeProps),
        dragNode: dragNode ? dragNode.eventData : null,
        dragNodesKeys: [dragNode.eventKey].concat(dragChildrenKeys),
        dropToGap: dropPosition !== 0,
        dropPosition: dropPosition + Number(posArr[posArr.length - 1])
      };
      if (!outsideTree) {
        onDrop === null || onDrop === void 0 ? void 0 : onDrop(dropResult);
      }
      dragNode = null;
    };
    var onNodeClick = function onNodeClick(e, treeNode) {
      var onClick = props.onClick;
      if (onClick) {
        onClick(e, treeNode);
      }
    };
    var onNodeDoubleClick = function onNodeDoubleClick(e, treeNode) {
      var onDblclick = props.onDblclick;
      if (onDblclick) {
        onDblclick(e, treeNode);
      }
    };
    var onNodeSelect = function onNodeSelect(e, treeNode) {
      var newSelectedKeys = selectedKeys.value;
      var onSelect = props.onSelect,
        multiple = props.multiple;
      var selected = treeNode.selected;
      var key = treeNode[fieldNames.value.key];
      var targetSelected = !selected;
      // Update selected keys
      if (!targetSelected) {
        newSelectedKeys = arrDel(newSelectedKeys, key);
      } else if (!multiple) {
        newSelectedKeys = [key];
      } else {
        newSelectedKeys = arrAdd(newSelectedKeys, key);
      }
      // [Legacy] Not found related usage in doc or upper libs
      var keyEntitiesValue = keyEntities.value;
      var selectedNodes = newSelectedKeys.map(function (selectedKey) {
        var entity = keyEntitiesValue[selectedKey];
        if (!entity) return null;
        return entity.node;
      }).filter(function (node) {
        return node;
      });
      if (props.selectedKeys === undefined) {
        selectedKeys.value = newSelectedKeys;
      }
      if (onSelect) {
        onSelect(newSelectedKeys, {
          event: 'select',
          selected: targetSelected,
          node: treeNode,
          selectedNodes: selectedNodes,
          nativeEvent: e
        });
      }
    };
    var onNodeCheck = function onNodeCheck(e, treeNode, checked) {
      var checkStrictly = props.checkStrictly,
        onCheck = props.onCheck;
      var key = treeNode[fieldNames.value.key];
      // Prepare trigger arguments
      var checkedObj;
      var eventObj = {
        event: 'check',
        node: treeNode,
        checked: checked,
        nativeEvent: e
      };
      var keyEntitiesValue = keyEntities.value;
      if (checkStrictly) {
        var newCheckedKeys = checked ? arrAdd(checkedKeys.value, key) : arrDel(checkedKeys.value, key);
        var newHalfCheckedKeys = arrDel(halfCheckedKeys.value, key);
        checkedObj = {
          checked: newCheckedKeys,
          halfChecked: newHalfCheckedKeys
        };
        eventObj.checkedNodes = newCheckedKeys.map(function (checkedKey) {
          return keyEntitiesValue[checkedKey];
        }).filter(function (entity) {
          return entity;
        }).map(function (entity) {
          return entity.node;
        });
        if (props.checkedKeys === undefined) {
          checkedKeys.value = newCheckedKeys;
        }
      } else {
        // Always fill first
        var _conductCheck = conductCheck([].concat(_toConsumableArray(checkedKeys.value), [key]), true, keyEntitiesValue, maxLevel.value, levelEntities.value),
          _newCheckedKeys = _conductCheck.checkedKeys,
          _newHalfCheckedKeys = _conductCheck.halfCheckedKeys;
        // If remove, we do it again to correction
        if (!checked) {
          var keySet = new Set(_newCheckedKeys);
          keySet.delete(key);
          var _conductCheck2 = conductCheck(Array.from(keySet), {
            checked: false,
            halfCheckedKeys: _newHalfCheckedKeys
          }, keyEntitiesValue, maxLevel.value, levelEntities.value);
          _newCheckedKeys = _conductCheck2.checkedKeys;
          _newHalfCheckedKeys = _conductCheck2.halfCheckedKeys;
        }
        checkedObj = _newCheckedKeys;
        // [Legacy] This is used for vc-tree-select`
        eventObj.checkedNodes = [];
        eventObj.checkedNodesPositions = [];
        eventObj.halfCheckedKeys = _newHalfCheckedKeys;
        _newCheckedKeys.forEach(function (checkedKey) {
          var entity = keyEntitiesValue[checkedKey];
          if (!entity) return;
          var node = entity.node,
            pos = entity.pos;
          eventObj.checkedNodes.push(node);
          eventObj.checkedNodesPositions.push({
            node: node,
            pos: pos
          });
        });
        if (props.checkedKeys === undefined) {
          checkedKeys.value = _newCheckedKeys;
          halfCheckedKeys.value = _newHalfCheckedKeys;
        }
      }
      if (onCheck) {
        onCheck(checkedObj, eventObj);
      }
    };
    var onNodeLoad = function onNodeLoad(treeNode) {
      var key = treeNode[fieldNames.value.key];
      var loadPromise = new Promise(function (resolve, reject) {
        // We need to get the latest state of loading/loaded keys
        var loadData = props.loadData,
          onLoad = props.onLoad;
        if (!loadData || loadedKeysSet.value.has(key) || loadingKeysSet.value.has(key)) {
          return null;
        }
        // Process load data
        var promise = loadData(treeNode);
        promise.then(function () {
          var newLoadedKeys = arrAdd(loadedKeys.value, key);
          var newLoadingKeys = arrDel(loadingKeys.value, key);
          // onLoad should trigger before internal setState to avoid `loadData` trigger twice.
          // https://github.com/ant-design/ant-design/issues/12464
          if (onLoad) {
            onLoad(newLoadedKeys, {
              event: 'load',
              node: treeNode
            });
          }
          if (props.loadedKeys === undefined) {
            loadedKeys.value = newLoadedKeys;
          }
          loadingKeys.value = newLoadingKeys;
          resolve();
        }).catch(function (e) {
          var newLoadingKeys = arrDel(loadingKeys.value, key);
          loadingKeys.value = newLoadingKeys;
          // If exceed max retry times, we give up retry
          loadingRetryTimes[key] = (loadingRetryTimes[key] || 0) + 1;
          if (loadingRetryTimes[key] >= MAX_RETRY_TIMES) {
            warning(false, 'Retry for `loadData` many times but still failed. No more retry.');
            var newLoadedKeys = arrAdd(loadedKeys.value, key);
            if (props.loadedKeys === undefined) {
              loadedKeys.value = newLoadedKeys;
            }
            resolve();
          }
          reject(e);
        });
        loadingKeys.value = arrAdd(loadingKeys.value, key);
      });
      // Not care warning if we ignore this
      loadPromise.catch(function () {});
      return loadPromise;
    };
    var onNodeMouseEnter = function onNodeMouseEnter(event, node) {
      var onMouseenter = props.onMouseenter;
      if (onMouseenter) {
        onMouseenter({
          event: event,
          node: node
        });
      }
    };
    var onNodeMouseLeave = function onNodeMouseLeave(event, node) {
      var onMouseleave = props.onMouseleave;
      if (onMouseleave) {
        onMouseleave({
          event: event,
          node: node
        });
      }
    };
    var onNodeContextMenu = function onNodeContextMenu(event, node) {
      var onRightClick = props.onRightClick;
      if (onRightClick) {
        event.preventDefault();
        onRightClick({
          event: event,
          node: node
        });
      }
    };
    var onFocus = function onFocus(e) {
      var onFocus = props.onFocus;
      focused.value = true;
      if (onFocus) {
        onFocus(e);
      }
    };
    var onBlur = function onBlur(e) {
      var onBlur = props.onBlur;
      focused.value = false;
      onActiveChange(null);
      if (onBlur) {
        onBlur(e);
      }
    };
    var onNodeExpand = function onNodeExpand(e, treeNode) {
      var newExpandedKeys = expandedKeys.value;
      var onExpand = props.onExpand,
        loadData = props.loadData;
      var expanded = treeNode.expanded;
      var key = treeNode[fieldNames.value.key];
      // Do nothing when motion is in progress
      if (listChanging.value) {
        return;
      }
      // Update selected keys
      var index = newExpandedKeys.indexOf(key);
      var targetExpanded = !expanded;
      warning(expanded && index !== -1 || !expanded && index === -1, 'Expand state not sync with index check');
      if (targetExpanded) {
        newExpandedKeys = arrAdd(newExpandedKeys, key);
      } else {
        newExpandedKeys = arrDel(newExpandedKeys, key);
      }
      setExpandedKeys(newExpandedKeys);
      if (onExpand) {
        onExpand(newExpandedKeys, {
          node: treeNode,
          expanded: targetExpanded,
          nativeEvent: e
        });
      }
      // Async Load data
      if (targetExpanded && loadData) {
        var loadPromise = onNodeLoad(treeNode);
        if (loadPromise) {
          loadPromise.then(function () {
            // [Legacy] Refresh logic
            // const newFlattenTreeData = flattenTreeData(
            //   treeData.value,
            //   newExpandedKeys,
            //   fieldNames.value,
            // );
            // flattenNodes.value = newFlattenTreeData;
          }).catch(function (e) {
            var expandedKeysToRestore = arrDel(expandedKeys.value, key);
            setExpandedKeys(expandedKeysToRestore);
            Promise.reject(e);
          });
        }
      }
    };
    var onListChangeStart = function onListChangeStart() {
      listChanging.value = true;
    };
    var onListChangeEnd = function onListChangeEnd() {
      setTimeout(function () {
        listChanging.value = false;
      });
    };
    // =========================== Keyboard ===========================
    var onActiveChange = function onActiveChange(newActiveKey) {
      var onActiveChange = props.onActiveChange;
      if (activeKey.value === newActiveKey) {
        return;
      }
      if (props.activeKey !== undefined) {
        activeKey.value = newActiveKey;
      }
      if (newActiveKey !== null) {
        scrollTo({
          key: newActiveKey
        });
      }
      if (onActiveChange) {
        onActiveChange(newActiveKey);
      }
    };
    var activeItem = computed(function () {
      if (activeKey.value === null) {
        return null;
      }
      return flattenNodes.value.find(function (_ref6) {
        var key = _ref6.key;
        return key === activeKey.value;
      }) || null;
    });
    var offsetActiveKey = function offsetActiveKey(offset) {
      var index = flattenNodes.value.findIndex(function (_ref7) {
        var key = _ref7.key;
        return key === activeKey.value;
      });
      // Align with index
      if (index === -1 && offset < 0) {
        index = flattenNodes.value.length;
      }
      index = (index + offset + flattenNodes.value.length) % flattenNodes.value.length;
      var item = flattenNodes.value[index];
      if (item) {
        var key = item.key;
        onActiveChange(key);
      } else {
        onActiveChange(null);
      }
    };
    var activeItemEventNode = computed(function () {
      return convertNodePropsToEventData(_objectSpread(_objectSpread({}, getTreeNodeProps(activeKey.value, treeNodeRequiredProps.value)), {}, {
        data: activeItem.value.data,
        active: true
      }));
    });
    var onKeydown = function onKeydown(event) {
      var onKeydown = props.onKeydown,
        checkable = props.checkable,
        selectable = props.selectable;
      // >>>>>>>>>> Direction
      switch (event.which) {
        case KeyCode.UP:
          {
            offsetActiveKey(-1);
            event.preventDefault();
            break;
          }
        case KeyCode.DOWN:
          {
            offsetActiveKey(1);
            event.preventDefault();
            break;
          }
      }
      // >>>>>>>>>> Expand & Selection
      var item = activeItem.value;
      if (item && item.data) {
        var expandable = item.data.isLeaf === false || !!(item.data.children || []).length;
        var eventNode = activeItemEventNode.value;
        switch (event.which) {
          // >>> Expand
          case KeyCode.LEFT:
            {
              // Collapse if possible
              if (expandable && expandedKeysSet.value.has(activeKey.value)) {
                onNodeExpand({}, eventNode);
              } else if (item.parent) {
                onActiveChange(item.parent.key);
              }
              event.preventDefault();
              break;
            }
          case KeyCode.RIGHT:
            {
              // Expand if possible
              if (expandable && !expandedKeysSet.value.has(activeKey.value)) {
                onNodeExpand({}, eventNode);
              } else if (item.children && item.children.length) {
                onActiveChange(item.children[0].key);
              }
              event.preventDefault();
              break;
            }
          // Selection
          case KeyCode.ENTER:
          case KeyCode.SPACE:
            {
              if (checkable && !eventNode.disabled && eventNode.checkable !== false && !eventNode.disableCheckbox) {
                onNodeCheck({}, eventNode, !checkedKeysSet.value.has(activeKey.value));
              } else if (!checkable && selectable && !eventNode.disabled && eventNode.selectable !== false) {
                onNodeSelect({}, eventNode);
              }
              break;
            }
        }
      }
      if (onKeydown) {
        onKeydown(event);
      }
    };
    expose({
      onNodeExpand: onNodeExpand,
      scrollTo: scrollTo,
      onKeydown: onKeydown,
      selectedKeys: computed(function () {
        return selectedKeys.value;
      }),
      checkedKeys: computed(function () {
        return checkedKeys.value;
      }),
      halfCheckedKeys: computed(function () {
        return halfCheckedKeys.value;
      }),
      loadedKeys: computed(function () {
        return loadedKeys.value;
      }),
      loadingKeys: computed(function () {
        return loadingKeys.value;
      }),
      expandedKeys: computed(function () {
        return expandedKeys.value;
      })
    });
    onUnmounted(function () {
      window.removeEventListener('dragend', onWindowDragEnd);
      destroyed.value = true;
    });
    useProvideKeysState({
      expandedKeys: expandedKeys,
      selectedKeys: selectedKeys,
      loadedKeys: loadedKeys,
      loadingKeys: loadingKeys,
      checkedKeys: checkedKeys,
      halfCheckedKeys: halfCheckedKeys,
      expandedKeysSet: expandedKeysSet,
      selectedKeysSet: selectedKeysSet,
      loadedKeysSet: loadedKeysSet,
      loadingKeysSet: loadingKeysSet,
      checkedKeysSet: checkedKeysSet,
      halfCheckedKeysSet: halfCheckedKeysSet,
      flattenNodes: flattenNodes
    });
    return function () {
      var _classNames;
      var draggingNodeKey = dragState.draggingNodeKey,
        dropLevelOffset = dragState.dropLevelOffset,
        dropContainerKey = dragState.dropContainerKey,
        dropTargetKey = dragState.dropTargetKey,
        dropPosition = dragState.dropPosition,
        dragOverNodeKey = dragState.dragOverNodeKey;
      var prefixCls = props.prefixCls,
        showLine = props.showLine,
        focusable = props.focusable,
        _props$tabindex = props.tabindex,
        tabindex = _props$tabindex === void 0 ? 0 : _props$tabindex,
        selectable = props.selectable,
        showIcon = props.showIcon,
        _props$icon = props.icon,
        icon = _props$icon === void 0 ? slots.icon : _props$icon,
        switcherIcon = props.switcherIcon,
        draggable = props.draggable,
        checkable = props.checkable,
        checkStrictly = props.checkStrictly,
        disabled = props.disabled,
        motion = props.motion,
        loadData = props.loadData,
        filterTreeNode = props.filterTreeNode,
        height = props.height,
        itemHeight = props.itemHeight,
        virtual = props.virtual,
        dropIndicatorRender = props.dropIndicatorRender,
        onContextmenu = props.onContextmenu,
        onScroll = props.onScroll,
        direction = props.direction;
      var className = attrs.class,
        style = attrs.style;
      var domProps = pickAttrs(_objectSpread(_objectSpread({}, props), attrs), {
        aria: true,
        data: true
      });
      // It's better move to hooks but we just simply keep here
      var draggableConfig;
      if (draggable) {
        if (_typeof(draggable) === 'object') {
          draggableConfig = draggable;
        } else if (typeof draggable === 'function') {
          draggableConfig = {
            nodeDraggable: draggable
          };
        } else {
          draggableConfig = {};
        }
      }
      return _createVNode(TreeContext, {
        "value": {
          prefixCls: prefixCls,
          selectable: selectable,
          showIcon: showIcon,
          icon: icon,
          switcherIcon: switcherIcon,
          draggable: draggableConfig,
          draggingNodeKey: draggingNodeKey,
          checkable: checkable,
          customCheckable: slots.checkable,
          checkStrictly: checkStrictly,
          disabled: disabled,
          keyEntities: keyEntities.value,
          dropLevelOffset: dropLevelOffset,
          dropContainerKey: dropContainerKey,
          dropTargetKey: dropTargetKey,
          dropPosition: dropPosition,
          dragOverNodeKey: dragOverNodeKey,
          dragging: draggingNodeKey !== null,
          indent: indent.value,
          direction: direction,
          dropIndicatorRender: dropIndicatorRender,
          loadData: loadData,
          filterTreeNode: filterTreeNode,
          onNodeClick: onNodeClick,
          onNodeDoubleClick: onNodeDoubleClick,
          onNodeExpand: onNodeExpand,
          onNodeSelect: onNodeSelect,
          onNodeCheck: onNodeCheck,
          onNodeLoad: onNodeLoad,
          onNodeMouseEnter: onNodeMouseEnter,
          onNodeMouseLeave: onNodeMouseLeave,
          onNodeContextMenu: onNodeContextMenu,
          onNodeDragStart: onNodeDragStart,
          onNodeDragEnter: onNodeDragEnter,
          onNodeDragOver: onNodeDragOver,
          onNodeDragLeave: onNodeDragLeave,
          onNodeDragEnd: onNodeDragEnd,
          onNodeDrop: onNodeDrop,
          slots: slots
        }
      }, {
        default: function _default() {
          return [_createVNode("div", {
            "role": "tree",
            "class": classNames(prefixCls, className, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-show-line"), showLine), _defineProperty(_classNames, "".concat(prefixCls, "-focused"), focused.value), _defineProperty(_classNames, "".concat(prefixCls, "-active-focused"), activeKey.value !== null), _classNames))
          }, [_createVNode(NodeList, _objectSpread({
            "ref": listRef,
            "prefixCls": prefixCls,
            "style": style,
            "disabled": disabled,
            "selectable": selectable,
            "checkable": !!checkable,
            "motion": motion,
            "height": height,
            "itemHeight": itemHeight,
            "virtual": virtual,
            "focusable": focusable,
            "focused": focused.value,
            "tabindex": tabindex,
            "activeItem": activeItem.value,
            "onFocus": onFocus,
            "onBlur": onBlur,
            "onKeydown": onKeydown,
            "onActiveChange": onActiveChange,
            "onListChangeStart": onListChangeStart,
            "onListChangeEnd": onListChangeEnd,
            "onContextmenu": onContextmenu,
            "onScroll": onScroll
          }, domProps), null)])];
        }
      });
    };
  }
});