"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof3 = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = require("vue");
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectSpread3 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _contextTypes = require("./contextTypes");
var _util = require("./util");
var _treeUtil = require("./utils/treeUtil");
var _NodeList = _interopRequireWildcard(require("./NodeList"));
var _conductUtil = require("./utils/conductUtil");
var _DropIndicator = _interopRequireDefault(require("./DropIndicator"));
var _initDefaultProps = _interopRequireDefault(require("../_util/props-util/initDefaultProps"));
var _props = require("./props");
var _warning = require("../vc-util/warning");
var _KeyCode = _interopRequireDefault(require("../_util/KeyCode"));
var _classNames2 = _interopRequireDefault(require("../_util/classNames"));
var _pickAttrs = _interopRequireDefault(require("../_util/pickAttrs"));
var _useMaxLevel2 = _interopRequireDefault(require("./useMaxLevel"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var MAX_RETRY_TIMES = 10;
var _default2 = (0, _vue.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  name: 'Tree',
  inheritAttrs: false,
  slots: ['checkable', 'title', 'icon', 'titleRender'],
  props: (0, _initDefaultProps.default)((0, _props.treeProps)(), {
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
    dropIndicatorRender: _DropIndicator.default,
    allowDrop: function allowDrop() {
      return true;
    }
  }),
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs,
      slots = _ref.slots,
      expose = _ref.expose;
    var destroyed = (0, _vue.ref)(false);
    var delayedDragEnterLogic = {};
    var indent = (0, _vue.ref)();
    var selectedKeys = (0, _vue.shallowRef)([]);
    var checkedKeys = (0, _vue.shallowRef)([]);
    var halfCheckedKeys = (0, _vue.shallowRef)([]);
    var loadedKeys = (0, _vue.shallowRef)([]);
    var loadingKeys = (0, _vue.shallowRef)([]);
    var expandedKeys = (0, _vue.shallowRef)([]);
    var loadingRetryTimes = {};
    var dragState = (0, _vue.reactive)({
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
    var treeData = (0, _vue.shallowRef)([]);
    (0, _vue.watch)([function () {
      return props.treeData;
    }, function () {
      return props.children;
    }], function () {
      treeData.value = props.treeData !== undefined ? (0, _vue.toRaw)(props.treeData).slice() : (0, _treeUtil.convertTreeToData)((0, _vue.toRaw)(props.children));
    }, {
      immediate: true,
      deep: true
    });
    var keyEntities = (0, _vue.shallowRef)({});
    var focused = (0, _vue.ref)(false);
    var activeKey = (0, _vue.ref)(null);
    var listChanging = (0, _vue.ref)(false);
    var fieldNames = (0, _vue.computed)(function () {
      return (0, _treeUtil.fillFieldNames)(props.fieldNames);
    });
    var listRef = (0, _vue.ref)();
    var dragStartMousePosition = null;
    var dragNode = null;
    var currentMouseOverDroppableNodeKey = null;
    var treeNodeRequiredProps = (0, _vue.computed)(function () {
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
    var expandedKeysSet = (0, _vue.computed)(function () {
      return new Set(expandedKeys.value);
    });
    var selectedKeysSet = (0, _vue.computed)(function () {
      return new Set(selectedKeys.value);
    });
    var loadedKeysSet = (0, _vue.computed)(function () {
      return new Set(loadedKeys.value);
    });
    var loadingKeysSet = (0, _vue.computed)(function () {
      return new Set(loadingKeys.value);
    });
    var checkedKeysSet = (0, _vue.computed)(function () {
      return new Set(checkedKeys.value);
    });
    var halfCheckedKeysSet = (0, _vue.computed)(function () {
      return new Set(halfCheckedKeys.value);
    });
    (0, _vue.watchEffect)(function () {
      if (treeData.value) {
        var entitiesMap = (0, _treeUtil.convertDataToEntities)(treeData.value, {
          fieldNames: fieldNames.value
        });
        keyEntities.value = (0, _objectSpread3.default)((0, _defineProperty2.default)({}, _NodeList.MOTION_KEY, _NodeList.MotionEntity), entitiesMap.keyEntities);
      }
    });
    var init = false; // 处理 defaultXxxx api, 仅仅首次有效
    (0, _vue.watch)([function () {
      return props.expandedKeys;
    }, function () {
      return props.autoExpandParent;
    }, keyEntities],
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    function (_ref2, _ref3) {
      var _ref4 = (0, _slicedToArray2.default)(_ref2, 2),
        _newKeys = _ref4[0],
        newAutoExpandParent = _ref4[1];
      var _ref5 = (0, _slicedToArray2.default)(_ref3, 2),
        _oldKeys = _ref5[0],
        oldAutoExpandParent = _ref5[1];
      var keys = expandedKeys.value;
      // ================ expandedKeys =================
      if (props.expandedKeys !== undefined || init && newAutoExpandParent !== oldAutoExpandParent) {
        keys = props.autoExpandParent || !init && props.defaultExpandParent ? (0, _util.conductExpandParent)(props.expandedKeys, keyEntities.value) : props.expandedKeys;
      } else if (!init && props.defaultExpandAll) {
        var cloneKeyEntities = (0, _objectSpread3.default)({}, keyEntities.value);
        delete cloneKeyEntities[_NodeList.MOTION_KEY];
        keys = Object.keys(cloneKeyEntities).map(function (key) {
          return cloneKeyEntities[key].key;
        });
      } else if (!init && props.defaultExpandedKeys) {
        keys = props.autoExpandParent || props.defaultExpandParent ? (0, _util.conductExpandParent)(props.defaultExpandedKeys, keyEntities.value) : props.defaultExpandedKeys;
      }
      if (keys) {
        expandedKeys.value = keys;
      }
      init = true;
    }, {
      immediate: true
    });
    // ================ flattenNodes =================
    var flattenNodes = (0, _vue.shallowRef)([]);
    (0, _vue.watchEffect)(function () {
      flattenNodes.value = (0, _treeUtil.flattenTreeData)(treeData.value, expandedKeys.value, fieldNames.value);
    });
    // ================ selectedKeys =================
    (0, _vue.watchEffect)(function () {
      if (props.selectable) {
        if (props.selectedKeys !== undefined) {
          selectedKeys.value = (0, _util.calcSelectedKeys)(props.selectedKeys, props);
        } else if (!init && props.defaultSelectedKeys) {
          selectedKeys.value = (0, _util.calcSelectedKeys)(props.defaultSelectedKeys, props);
        }
      }
    });
    var _useMaxLevel = (0, _useMaxLevel2.default)(keyEntities),
      maxLevel = _useMaxLevel.maxLevel,
      levelEntities = _useMaxLevel.levelEntities;
    // ================= checkedKeys =================
    (0, _vue.watchEffect)(function () {
      if (props.checkable) {
        var checkedKeyEntity;
        if (props.checkedKeys !== undefined) {
          checkedKeyEntity = (0, _util.parseCheckedKeys)(props.checkedKeys) || {};
        } else if (!init && props.defaultCheckedKeys) {
          checkedKeyEntity = (0, _util.parseCheckedKeys)(props.defaultCheckedKeys) || {};
        } else if (treeData.value) {
          // If `treeData` changed, we also need check it
          checkedKeyEntity = (0, _util.parseCheckedKeys)(props.checkedKeys) || {
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
            var conductKeys = (0, _conductUtil.conductCheck)(newCheckedKeys, true, keyEntities.value, maxLevel.value, levelEntities.value);
            newCheckedKeys = conductKeys.checkedKeys;
            newHalfCheckedKeys = conductKeys.halfCheckedKeys;
          }
          checkedKeys.value = newCheckedKeys;
          halfCheckedKeys.value = newHalfCheckedKeys;
        }
      }
    });
    // ================= loadedKeys ==================
    (0, _vue.watchEffect)(function () {
      if (props.loadedKeys) {
        loadedKeys.value = props.loadedKeys;
      }
    });
    var resetDragState = function resetDragState() {
      (0, _extends2.default)(dragState, {
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
    (0, _vue.watch)(function () {
      return props.activeKey;
    }, function () {
      if (props.activeKey !== undefined) {
        activeKey.value = props.activeKey;
      }
    }, {
      immediate: true
    });
    (0, _vue.watch)(activeKey, function (val) {
      (0, _vue.nextTick)(function () {
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
        (0, _extends2.default)(dragState, {
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
      var newExpandedKeys = (0, _util.arrDel)(expandedKeys.value, eventKey);
      dragState.draggingNodeKey = eventKey;
      dragState.dragChildrenKeys = (0, _util.getDragChildrenKeys)(eventKey, keyEntities.value);
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
      var _calcDropPosition = (0, _util.calcDropPosition)(event, dragNode, node, indent.value, dragStartMousePosition, allowDrop, flattenNodes.value, keyEntities.value, expandedKeysSet.value, direction),
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
            newExpandedKeys = (0, _util.arrAdd)(expandedKeys.value, node.eventKey);
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
      (0, _extends2.default)(dragState, {
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
      var _calcDropPosition2 = (0, _util.calcDropPosition)(event, dragNode, node, indent.value, dragStartMousePosition, allowDrop, flattenNodes.value, keyEntities.value, expandedKeysSet.value, direction),
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
        (0, _extends2.default)(dragState, {
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
      var abstractDropNodeProps = (0, _objectSpread3.default)((0, _objectSpread3.default)({}, (0, _treeUtil.getTreeNodeProps)(dropTargetKey, (0, _vue.toRaw)(treeNodeRequiredProps.value))), {}, {
        active: ((_activeItem$value = activeItem.value) === null || _activeItem$value === void 0 ? void 0 : _activeItem$value.key) === dropTargetKey,
        data: keyEntities.value[dropTargetKey].node
      });
      var dropToChild = dragChildrenKeys.indexOf(dropTargetKey) !== -1;
      (0, _warning.warning)(!dropToChild, "Can not drop to dragNode's children node. Maybe this is a bug of ant-design-vue. Please report an issue.");
      var posArr = (0, _util.posToArr)(dropTargetPos);
      var dropResult = {
        event: event,
        node: (0, _treeUtil.convertNodePropsToEventData)(abstractDropNodeProps),
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
        newSelectedKeys = (0, _util.arrDel)(newSelectedKeys, key);
      } else if (!multiple) {
        newSelectedKeys = [key];
      } else {
        newSelectedKeys = (0, _util.arrAdd)(newSelectedKeys, key);
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
        var newCheckedKeys = checked ? (0, _util.arrAdd)(checkedKeys.value, key) : (0, _util.arrDel)(checkedKeys.value, key);
        var newHalfCheckedKeys = (0, _util.arrDel)(halfCheckedKeys.value, key);
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
        var _conductCheck = (0, _conductUtil.conductCheck)([].concat((0, _toConsumableArray2.default)(checkedKeys.value), [key]), true, keyEntitiesValue, maxLevel.value, levelEntities.value),
          _newCheckedKeys = _conductCheck.checkedKeys,
          _newHalfCheckedKeys = _conductCheck.halfCheckedKeys;
        // If remove, we do it again to correction
        if (!checked) {
          var keySet = new Set(_newCheckedKeys);
          keySet.delete(key);
          var _conductCheck2 = (0, _conductUtil.conductCheck)(Array.from(keySet), {
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
          var newLoadedKeys = (0, _util.arrAdd)(loadedKeys.value, key);
          var newLoadingKeys = (0, _util.arrDel)(loadingKeys.value, key);
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
          var newLoadingKeys = (0, _util.arrDel)(loadingKeys.value, key);
          loadingKeys.value = newLoadingKeys;
          // If exceed max retry times, we give up retry
          loadingRetryTimes[key] = (loadingRetryTimes[key] || 0) + 1;
          if (loadingRetryTimes[key] >= MAX_RETRY_TIMES) {
            (0, _warning.warning)(false, 'Retry for `loadData` many times but still failed. No more retry.');
            var newLoadedKeys = (0, _util.arrAdd)(loadedKeys.value, key);
            if (props.loadedKeys === undefined) {
              loadedKeys.value = newLoadedKeys;
            }
            resolve();
          }
          reject(e);
        });
        loadingKeys.value = (0, _util.arrAdd)(loadingKeys.value, key);
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
      (0, _warning.warning)(expanded && index !== -1 || !expanded && index === -1, 'Expand state not sync with index check');
      if (targetExpanded) {
        newExpandedKeys = (0, _util.arrAdd)(newExpandedKeys, key);
      } else {
        newExpandedKeys = (0, _util.arrDel)(newExpandedKeys, key);
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
            var expandedKeysToRestore = (0, _util.arrDel)(expandedKeys.value, key);
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
    var activeItem = (0, _vue.computed)(function () {
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
    var activeItemEventNode = (0, _vue.computed)(function () {
      return (0, _treeUtil.convertNodePropsToEventData)((0, _objectSpread3.default)((0, _objectSpread3.default)({}, (0, _treeUtil.getTreeNodeProps)(activeKey.value, treeNodeRequiredProps.value)), {}, {
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
        case _KeyCode.default.UP:
          {
            offsetActiveKey(-1);
            event.preventDefault();
            break;
          }
        case _KeyCode.default.DOWN:
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
          case _KeyCode.default.LEFT:
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
          case _KeyCode.default.RIGHT:
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
          case _KeyCode.default.ENTER:
          case _KeyCode.default.SPACE:
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
      selectedKeys: (0, _vue.computed)(function () {
        return selectedKeys.value;
      }),
      checkedKeys: (0, _vue.computed)(function () {
        return checkedKeys.value;
      }),
      halfCheckedKeys: (0, _vue.computed)(function () {
        return halfCheckedKeys.value;
      }),
      loadedKeys: (0, _vue.computed)(function () {
        return loadedKeys.value;
      }),
      loadingKeys: (0, _vue.computed)(function () {
        return loadingKeys.value;
      }),
      expandedKeys: (0, _vue.computed)(function () {
        return expandedKeys.value;
      })
    });
    (0, _vue.onUnmounted)(function () {
      window.removeEventListener('dragend', onWindowDragEnd);
      destroyed.value = true;
    });
    (0, _contextTypes.useProvideKeysState)({
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
      var domProps = (0, _pickAttrs.default)((0, _objectSpread3.default)((0, _objectSpread3.default)({}, props), attrs), {
        aria: true,
        data: true
      });
      // It's better move to hooks but we just simply keep here
      var draggableConfig;
      if (draggable) {
        if ((0, _typeof2.default)(draggable) === 'object') {
          draggableConfig = draggable;
        } else if (typeof draggable === 'function') {
          draggableConfig = {
            nodeDraggable: draggable
          };
        } else {
          draggableConfig = {};
        }
      }
      return (0, _vue.createVNode)(_contextTypes.TreeContext, {
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
          return [(0, _vue.createVNode)("div", {
            "role": "tree",
            "class": (0, _classNames2.default)(prefixCls, className, (_classNames = {}, (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-show-line"), showLine), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-focused"), focused.value), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-active-focused"), activeKey.value !== null), _classNames))
          }, [(0, _vue.createVNode)(_NodeList.default, (0, _objectSpread3.default)({
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
exports.default = _default2;