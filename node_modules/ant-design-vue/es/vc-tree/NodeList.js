import _objectDestructuringEmpty from "@babel/runtime/helpers/esm/objectDestructuringEmpty";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
var _excluded = ["prefixCls", "selectable", "checkable", "disabled", "motion", "height", "itemHeight", "virtual", "focusable", "activeItem", "focused", "tabindex", "onKeydown", "onFocus", "onBlur", "onListChangeStart", "onListChangeEnd"];
import { resolveDirective as _resolveDirective, createVNode as _createVNode, Fragment as _Fragment } from "vue";
/**
 * Handle virtual list of the TreeNodes.
 */
import { computed, defineComponent, ref, shallowRef, watch } from 'vue';
import VirtualList from '../vc-virtual-list';
import omit from '../_util/omit';
import { useInjectKeysState, useInjectTreeContext } from './contextTypes';
import MotionTreeNode from './MotionTreeNode';
import { nodeListProps } from './props';
import { findExpandedKeys, getExpandRange } from './utils/diffUtil';
import { getKey } from './utils/treeUtil';
var HIDDEN_STYLE = {
  width: 0,
  height: 0,
  display: 'flex',
  overflow: 'hidden',
  opacity: 0,
  border: 0,
  padding: 0,
  margin: 0
};
var noop = function noop() {};
export var MOTION_KEY = "RC_TREE_MOTION_".concat(Math.random());
var MotionNode = {
  key: MOTION_KEY
};
export var MotionEntity = {
  key: MOTION_KEY,
  level: 0,
  index: 0,
  pos: '0',
  node: MotionNode,
  nodes: [MotionNode]
};
var MotionFlattenData = {
  parent: null,
  children: [],
  pos: MotionEntity.pos,
  data: MotionNode,
  title: null,
  key: MOTION_KEY,
  /** Hold empty list here since we do not use it */
  isStart: [],
  isEnd: []
};
/**
 * We only need get visible content items to play the animation.
 */
export function getMinimumRangeTransitionRange(list, virtual, height, itemHeight) {
  if (virtual === false || !height) {
    return list;
  }
  return list.slice(0, Math.ceil(height / itemHeight) + 1);
}
function itemKey(item) {
  var key = item.key,
    pos = item.pos;
  return getKey(key, pos);
}
function getAccessibilityPath(item) {
  var path = String(item.key);
  var current = item;
  while (current.parent) {
    current = current.parent;
    path = "".concat(current.key, " > ").concat(path);
  }
  return path;
}
export default defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'NodeList',
  inheritAttrs: false,
  props: nodeListProps,
  setup: function setup(props, _ref) {
    var expose = _ref.expose,
      attrs = _ref.attrs;
    // =============================== Ref ================================
    var listRef = ref();
    var indentMeasurerRef = ref();
    var _useInjectKeysState = useInjectKeysState(),
      expandedKeys = _useInjectKeysState.expandedKeys,
      flattenNodes = _useInjectKeysState.flattenNodes;
    expose({
      scrollTo: function scrollTo(scroll) {
        listRef.value.scrollTo(scroll);
      },
      getIndentWidth: function getIndentWidth() {
        return indentMeasurerRef.value.offsetWidth;
      }
    });
    // ============================== Motion ==============================
    var transitionData = shallowRef(flattenNodes.value);
    var transitionRange = shallowRef([]);
    var motionType = ref(null);
    function onMotionEnd() {
      transitionData.value = flattenNodes.value;
      transitionRange.value = [];
      motionType.value = null;
      props.onListChangeEnd();
    }
    var context = useInjectTreeContext();
    watch([function () {
      return expandedKeys.value.slice();
    }, flattenNodes], function (_ref2, _ref3) {
      var _ref4 = _slicedToArray(_ref2, 2),
        expandedKeys = _ref4[0],
        data = _ref4[1];
      var _ref5 = _slicedToArray(_ref3, 2),
        prevExpandedKeys = _ref5[0],
        prevData = _ref5[1];
      var diffExpanded = findExpandedKeys(prevExpandedKeys, expandedKeys);
      if (diffExpanded.key !== null) {
        var virtual = props.virtual,
          height = props.height,
          itemHeight = props.itemHeight;
        if (diffExpanded.add) {
          var keyIndex = prevData.findIndex(function (_ref6) {
            var key = _ref6.key;
            return key === diffExpanded.key;
          });
          var rangeNodes = getMinimumRangeTransitionRange(getExpandRange(prevData, data, diffExpanded.key), virtual, height, itemHeight);
          var newTransitionData = prevData.slice();
          newTransitionData.splice(keyIndex + 1, 0, MotionFlattenData);
          transitionData.value = newTransitionData;
          transitionRange.value = rangeNodes;
          motionType.value = 'show';
        } else {
          var _keyIndex = data.findIndex(function (_ref7) {
            var key = _ref7.key;
            return key === diffExpanded.key;
          });
          var _rangeNodes = getMinimumRangeTransitionRange(getExpandRange(data, prevData, diffExpanded.key), virtual, height, itemHeight);
          var _newTransitionData = data.slice();
          _newTransitionData.splice(_keyIndex + 1, 0, MotionFlattenData);
          transitionData.value = _newTransitionData;
          transitionRange.value = _rangeNodes;
          motionType.value = 'hide';
        }
      } else if (prevData !== data) {
        transitionData.value = data;
      }
    });
    // We should clean up motion if is changed by dragging
    watch(function () {
      return context.value.dragging;
    }, function (dragging) {
      if (!dragging) {
        onMotionEnd();
      }
    });
    var mergedData = computed(function () {
      return props.motion === undefined ? transitionData.value : flattenNodes.value;
    });
    var onActiveChange = function onActiveChange() {
      props.onActiveChange(null);
    };
    return function () {
      var _props$attrs = _objectSpread(_objectSpread({}, props), attrs),
        prefixCls = _props$attrs.prefixCls,
        selectable = _props$attrs.selectable,
        checkable = _props$attrs.checkable,
        disabled = _props$attrs.disabled,
        motion = _props$attrs.motion,
        height = _props$attrs.height,
        itemHeight = _props$attrs.itemHeight,
        virtual = _props$attrs.virtual,
        focusable = _props$attrs.focusable,
        activeItem = _props$attrs.activeItem,
        focused = _props$attrs.focused,
        tabindex = _props$attrs.tabindex,
        onKeydown = _props$attrs.onKeydown,
        onFocus = _props$attrs.onFocus,
        onBlur = _props$attrs.onBlur,
        onListChangeStart = _props$attrs.onListChangeStart,
        onListChangeEnd = _props$attrs.onListChangeEnd,
        domProps = _objectWithoutProperties(_props$attrs, _excluded);
      return _createVNode(_Fragment, null, [focused && activeItem && _createVNode("span", {
        "style": HIDDEN_STYLE,
        "aria-live": "assertive"
      }, [getAccessibilityPath(activeItem)]), _createVNode("div", null, [_createVNode("input", {
        "style": HIDDEN_STYLE,
        "disabled": focusable === false || disabled,
        "tabindex": focusable !== false ? tabindex : null,
        "onKeydown": onKeydown,
        "onFocus": onFocus,
        "onBlur": onBlur,
        "value": "",
        "onChange": noop,
        "aria-label": "for screen reader"
      }, null)]), _createVNode("div", {
        "class": "".concat(prefixCls, "-treenode"),
        "aria-hidden": true,
        "style": {
          position: 'absolute',
          pointerEvents: 'none',
          visibility: 'hidden',
          height: 0,
          overflow: 'hidden'
        }
      }, [_createVNode("div", {
        "class": "".concat(prefixCls, "-indent")
      }, [_createVNode("div", {
        "ref": indentMeasurerRef,
        "class": "".concat(prefixCls, "-indent-unit")
      }, null)])]), _createVNode(VirtualList, _objectSpread(_objectSpread({}, omit(domProps, ['onActiveChange'])), {}, {
        "data": mergedData.value,
        "itemKey": itemKey,
        "height": height,
        "fullHeight": false,
        "virtual": virtual,
        "itemHeight": itemHeight,
        "prefixCls": "".concat(prefixCls, "-list"),
        "ref": listRef,
        "onVisibleChange": function onVisibleChange(originList, fullList) {
          var originSet = new Set(originList);
          var restList = fullList.filter(function (item) {
            return !originSet.has(item);
          });
          // Motion node is not render. Skip motion
          if (restList.some(function (item) {
            return itemKey(item) === MOTION_KEY;
          })) {
            onMotionEnd();
          }
        }
      }), {
        default: function _default(treeNode) {
          var pos = treeNode.pos,
            restProps = _extends({}, (_objectDestructuringEmpty(treeNode.data), treeNode.data)),
            title = treeNode.title,
            key = treeNode.key,
            isStart = treeNode.isStart,
            isEnd = treeNode.isEnd;
          var mergedKey = getKey(key, pos);
          delete restProps.key;
          delete restProps.children;
          return _createVNode(MotionTreeNode, _objectSpread(_objectSpread({}, restProps), {}, {
            "eventKey": mergedKey,
            "title": title,
            "active": !!activeItem && key === activeItem.key,
            "data": treeNode.data,
            "isStart": isStart,
            "isEnd": isEnd,
            "motion": motion,
            "motionNodes": key === MOTION_KEY ? transitionRange.value : null,
            "motionType": motionType.value,
            "onMotionStart": onListChangeStart,
            "onMotionEnd": onMotionEnd,
            "onMousemove": onActiveChange
          }), null);
        }
      })]);
    };
  }
});