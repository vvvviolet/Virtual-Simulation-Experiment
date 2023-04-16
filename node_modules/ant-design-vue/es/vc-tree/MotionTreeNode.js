import _objectDestructuringEmpty from "@babel/runtime/helpers/esm/objectDestructuringEmpty";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
var _excluded = ["motion", "motionNodes", "motionType", "active", "eventKey"];
import { withDirectives as _withDirectives, vShow as _vShow, createVNode as _createVNode, resolveDirective as _resolveDirective } from "vue";
import TreeNode from './TreeNode';
import { useInjectTreeContext } from './contextTypes';
import { computed, nextTick, defineComponent, onBeforeUnmount, onMounted, ref, Transition, watch } from 'vue';
import { treeNodeProps } from './props';
import collapseMotion from '../_util/collapseMotion';
export default defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'MotionTreeNode',
  inheritAttrs: false,
  props: _objectSpread(_objectSpread({}, treeNodeProps), {}, {
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
    var visible = ref(true);
    var context = useInjectTreeContext();
    var motionedRef = ref(false);
    var transitionProps = computed(function () {
      if (props.motion) {
        return props.motion;
      } else {
        return collapseMotion();
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
    watch(function () {
      return props.motionNodes;
    }, function () {
      if (props.motionNodes && props.motionType === 'hide' && visible.value) {
        nextTick(function () {
          visible.value = false;
        });
      }
    }, {
      immediate: true,
      flush: 'post'
    });
    onMounted(function () {
      props.motionNodes && props.onMotionStart();
    });
    onBeforeUnmount(function () {
      props.motionNodes && onMotionEnd();
    });
    return function () {
      var motion = props.motion,
        motionNodes = props.motionNodes,
        motionType = props.motionType,
        active = props.active,
        eventKey = props.eventKey,
        otherProps = _objectWithoutProperties(props, _excluded);
      if (motionNodes) {
        return _createVNode(Transition, _objectSpread(_objectSpread({}, transitionProps.value), {}, {
          "appear": motionType === 'show',
          "onAfterAppear": function onAfterAppear(node) {
            return onMotionEnd(node, 'appear');
          },
          "onAfterLeave": function onAfterLeave(node) {
            return onMotionEnd(node, 'leave');
          }
        }), {
          default: function _default() {
            return [_withDirectives(_createVNode("div", {
              "class": "".concat(context.value.prefixCls, "-treenode-motion")
            }, [motionNodes.map(function (treeNode) {
              var restProps = _extends({}, (_objectDestructuringEmpty(treeNode.data), treeNode.data)),
                title = treeNode.title,
                key = treeNode.key,
                isStart = treeNode.isStart,
                isEnd = treeNode.isEnd;
              delete restProps.children;
              return _createVNode(TreeNode, _objectSpread(_objectSpread({}, restProps), {}, {
                "title": title,
                "active": active,
                "data": treeNode.data,
                "key": key,
                "eventKey": key,
                "isStart": isStart,
                "isEnd": isEnd
              }), slots);
            })]), [[_vShow, visible.value]])];
          }
        });
      }
      return _createVNode(TreeNode, _objectSpread(_objectSpread({
        "domRef": ref,
        "class": attrs.class,
        "style": attrs.style
      }, otherProps), {}, {
        "active": active,
        "eventKey": eventKey
      }), slots);
    };
  }
});