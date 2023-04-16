"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = require("vue");
var _objectDestructuringEmpty2 = _interopRequireDefault(require("@babel/runtime/helpers/objectDestructuringEmpty"));
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _TreeNode = _interopRequireDefault(require("./TreeNode"));
var _contextTypes = require("./contextTypes");
var _props = require("./props");
var _collapseMotion = _interopRequireDefault(require("../_util/collapseMotion"));
var _excluded = ["motion", "motionNodes", "motionType", "active", "eventKey"];
var _default2 = (0, _vue.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  name: 'MotionTreeNode',
  inheritAttrs: false,
  props: (0, _objectSpread2.default)((0, _objectSpread2.default)({}, _props.treeNodeProps), {}, {
    active: Boolean,
    motion: Object,
    motionNodes: {
      type: Array
    },
    onMotionStart: Function,
    onMotionEnd: Function,
    motionType: String
    // treeNodeRequiredProps: { type: Object as PropType<TreeNodeRequiredProps> },
  }),

  slots: ['title', 'icon', 'switcherIcon', 'checkable'],
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs,
      slots = _ref.slots;
    var visible = (0, _vue.ref)(true);
    var context = (0, _contextTypes.useInjectTreeContext)();
    var motionedRef = (0, _vue.ref)(false);
    var transitionProps = (0, _vue.computed)(function () {
      if (props.motion) {
        return props.motion;
      } else {
        return (0, _collapseMotion.default)();
      }
    });
    var onMotionEnd = function onMotionEnd(node, type) {
      if (type === 'appear') {
        var _transitionProps$valu, _transitionProps$valu2;
        (_transitionProps$valu = transitionProps.value) === null || _transitionProps$valu === void 0 ? void 0 : (_transitionProps$valu2 = _transitionProps$valu.onAfterEnter) === null || _transitionProps$valu2 === void 0 ? void 0 : _transitionProps$valu2.call(_transitionProps$valu, node);
      } else if (type === 'leave') {
        var _transitionProps$valu3, _transitionProps$valu4;
        (_transitionProps$valu3 = transitionProps.value) === null || _transitionProps$valu3 === void 0 ? void 0 : (_transitionProps$valu4 = _transitionProps$valu3.onAfterLeave) === null || _transitionProps$valu4 === void 0 ? void 0 : _transitionProps$valu4.call(_transitionProps$valu3, node);
      }
      if (!motionedRef.value) {
        props.onMotionEnd();
      }
      motionedRef.value = true;
    };
    (0, _vue.watch)(function () {
      return props.motionNodes;
    }, function () {
      if (props.motionNodes && props.motionType === 'hide' && visible.value) {
        (0, _vue.nextTick)(function () {
          visible.value = false;
        });
      }
    }, {
      immediate: true,
      flush: 'post'
    });
    (0, _vue.onMounted)(function () {
      props.motionNodes && props.onMotionStart();
    });
    (0, _vue.onBeforeUnmount)(function () {
      props.motionNodes && onMotionEnd();
    });
    return function () {
      var motion = props.motion,
        motionNodes = props.motionNodes,
        motionType = props.motionType,
        active = props.active,
        eventKey = props.eventKey,
        otherProps = (0, _objectWithoutProperties2.default)(props, _excluded);
      if (motionNodes) {
        return (0, _vue.createVNode)(_vue.Transition, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, transitionProps.value), {}, {
          "appear": motionType === 'show',
          "onAfterAppear": function onAfterAppear(node) {
            return onMotionEnd(node, 'appear');
          },
          "onAfterLeave": function onAfterLeave(node) {
            return onMotionEnd(node, 'leave');
          }
        }), {
          default: function _default() {
            return [(0, _vue.withDirectives)((0, _vue.createVNode)("div", {
              "class": "".concat(context.value.prefixCls, "-treenode-motion")
            }, [motionNodes.map(function (treeNode) {
              var restProps = (0, _extends2.default)({}, ((0, _objectDestructuringEmpty2.default)(treeNode.data), treeNode.data)),
                title = treeNode.title,
                key = treeNode.key,
                isStart = treeNode.isStart,
                isEnd = treeNode.isEnd;
              delete restProps.children;
              return (0, _vue.createVNode)(_TreeNode.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, restProps), {}, {
                "title": title,
                "active": active,
                "data": treeNode.data,
                "key": key,
                "eventKey": key,
                "isStart": isStart,
                "isEnd": isEnd
              }), slots);
            })]), [[_vue.vShow, visible.value]])];
          }
        });
      }
      return (0, _vue.createVNode)(_TreeNode.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({
        "domRef": _vue.ref,
        "class": attrs.class,
        "style": attrs.style
      }, otherProps), {}, {
        "active": active,
        "eventKey": eventKey
      }), slots);
    };
  }
});
exports.default = _default2;