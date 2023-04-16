"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.MotionEntity = exports.MOTION_KEY = void 0;
exports.getMinimumRangeTransitionRange = getMinimumRangeTransitionRange;
var _vue = require("vue");
var _objectDestructuringEmpty2 = _interopRequireDefault(require("@babel/runtime/helpers/objectDestructuringEmpty"));
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _vcVirtualList = _interopRequireDefault(require("../vc-virtual-list"));
var _omit = _interopRequireDefault(require("../_util/omit"));
var _contextTypes = require("./contextTypes");
var _MotionTreeNode = _interopRequireDefault(require("./MotionTreeNode"));
var _props = require("./props");
var _diffUtil = require("./utils/diffUtil");
var _treeUtil = require("./utils/treeUtil");
var _excluded = ["prefixCls", "selectable", "checkable", "disabled", "motion", "height", "itemHeight", "virtual", "focusable", "activeItem", "focused", "tabindex", "onKeydown", "onFocus", "onBlur", "onListChangeStart", "onListChangeEnd"];
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
var MOTION_KEY = "RC_TREE_MOTION_".concat(Math.random());
exports.MOTION_KEY = MOTION_KEY;
var MotionNode = {
  key: MOTION_KEY
};
var MotionEntity = {
  key: MOTION_KEY,
  level: 0,
  index: 0,
  pos: '0',
  node: MotionNode,
  nodes: [MotionNode]
};
exports.MotionEntity = MotionEntity;
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
function getMinimumRangeTransitionRange(list, virtual, height, itemHeight) {
  if (virtual === false || !height) {
    return list;
  }
  return list.slice(0, Math.ceil(height / itemHeight) + 1);
}
function itemKey(item) {
  var key = item.key,
    pos = item.pos;
  return (0, _treeUtil.getKey)(key, pos);
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
var _default2 = (0, _vue.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  name: 'NodeList',
  inheritAttrs: false,
  props: _props.nodeListProps,
  setup: function setup(props, _ref) {
    var expose = _ref.expose,
      attrs = _ref.attrs;
    // =============================== Ref ================================
    var listRef = (0, _vue.ref)();
    var indentMeasurerRef = (0, _vue.ref)();
    var _useInjectKeysState = (0, _contextTypes.useInjectKeysState)(),
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
    var transitionData = (0, _vue.shallowRef)(flattenNodes.value);
    var transitionRange = (0, _vue.shallowRef)([]);
    var motionType = (0, _vue.ref)(null);
    function onMotionEnd() {
      transitionData.value = flattenNodes.value;
      transitionRange.value = [];
      motionType.value = null;
      props.onListChangeEnd();
    }
    var context = (0, _contextTypes.useInjectTreeContext)();
    (0, _vue.watch)([function () {
      return expandedKeys.value.slice();
    }, flattenNodes], function (_ref2, _ref3) {
      var _ref4 = (0, _slicedToArray2.default)(_ref2, 2),
        expandedKeys = _ref4[0],
        data = _ref4[1];
      var _ref5 = (0, _slicedToArray2.default)(_ref3, 2),
        prevExpandedKeys = _ref5[0],
        prevData = _ref5[1];
      var diffExpanded = (0, _diffUtil.findExpandedKeys)(prevExpandedKeys, expandedKeys);
      if (diffExpanded.key !== null) {
        var virtual = props.virtual,
          height = props.height,
          itemHeight = props.itemHeight;
        if (diffExpanded.add) {
          var keyIndex = prevData.findIndex(function (_ref6) {
            var key = _ref6.key;
            return key === diffExpanded.key;
          });
          var rangeNodes = getMinimumRangeTransitionRange((0, _diffUtil.getExpandRange)(prevData, data, diffExpanded.key), virtual, height, itemHeight);
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
          var _rangeNodes = getMinimumRangeTransitionRange((0, _diffUtil.getExpandRange)(data, prevData, diffExpanded.key), virtual, height, itemHeight);
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
    (0, _vue.watch)(function () {
      return context.value.dragging;
    }, function (dragging) {
      if (!dragging) {
        onMotionEnd();
      }
    });
    var mergedData = (0, _vue.computed)(function () {
      return props.motion === undefined ? transitionData.value : flattenNodes.value;
    });
    var onActiveChange = function onActiveChange() {
      props.onActiveChange(null);
    };
    return function () {
      var _props$attrs = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, props), attrs),
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
        domProps = (0, _objectWithoutProperties2.default)(_props$attrs, _excluded);
      return (0, _vue.createVNode)(_vue.Fragment, null, [focused && activeItem && (0, _vue.createVNode)("span", {
        "style": HIDDEN_STYLE,
        "aria-live": "assertive"
      }, [getAccessibilityPath(activeItem)]), (0, _vue.createVNode)("div", null, [(0, _vue.createVNode)("input", {
        "style": HIDDEN_STYLE,
        "disabled": focusable === false || disabled,
        "tabindex": focusable !== false ? tabindex : null,
        "onKeydown": onKeydown,
        "onFocus": onFocus,
        "onBlur": onBlur,
        "value": "",
        "onChange": noop,
        "aria-label": "for screen reader"
      }, null)]), (0, _vue.createVNode)("div", {
        "class": "".concat(prefixCls, "-treenode"),
        "aria-hidden": true,
        "style": {
          position: 'absolute',
          pointerEvents: 'none',
          visibility: 'hidden',
          height: 0,
          overflow: 'hidden'
        }
      }, [(0, _vue.createVNode)("div", {
        "class": "".concat(prefixCls, "-indent")
      }, [(0, _vue.createVNode)("div", {
        "ref": indentMeasurerRef,
        "class": "".concat(prefixCls, "-indent-unit")
      }, null)])]), (0, _vue.createVNode)(_vcVirtualList.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, (0, _omit.default)(domProps, ['onActiveChange'])), {}, {
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
            restProps = (0, _extends2.default)({}, ((0, _objectDestructuringEmpty2.default)(treeNode.data), treeNode.data)),
            title = treeNode.title,
            key = treeNode.key,
            isStart = treeNode.isStart,
            isEnd = treeNode.isEnd;
          var mergedKey = (0, _treeUtil.getKey)(key, pos);
          delete restProps.key;
          delete restProps.children;
          return (0, _vue.createVNode)(_MotionTreeNode.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, restProps), {}, {
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
exports.default = _default2;