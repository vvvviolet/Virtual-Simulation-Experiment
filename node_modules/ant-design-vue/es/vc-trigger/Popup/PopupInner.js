import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _typeof from "@babel/runtime/helpers/esm/typeof";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { withDirectives as _withDirectives, resolveDirective as _resolveDirective, vShow as _vShow, createVNode as _createVNode } from "vue";
import useVisibleStatus from './useVisibleStatus';
import useStretchStyle from './useStretchStyle';
import { computed, defineComponent, ref, toRef, Transition, watch, withModifiers } from 'vue';
import Align from '../../vc-align/Align';
import { getMotion } from '../utils/motionUtil';
import { flattenChildren } from '../../_util/props-util';
import classNames from '../../_util/classNames';
import { innerProps } from './interface';
import { getTransitionProps } from '../../_util/transition';
import supportsPassive from '../../_util/supportsPassive';
export default defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'PopupInner',
  inheritAttrs: false,
  props: innerProps,
  emits: ['mouseenter', 'mouseleave', 'mousedown', 'touchstart', 'align'],
  setup: function setup(props, _ref) {
    var expose = _ref.expose,
      attrs = _ref.attrs,
      slots = _ref.slots;
    var alignRef = ref();
    var elementRef = ref();
    var alignedClassName = ref();
    // ======================= Measure ========================
    var _useStretchStyle = useStretchStyle(toRef(props, 'stretch')),
      _useStretchStyle2 = _slicedToArray(_useStretchStyle, 2),
      stretchStyle = _useStretchStyle2[0],
      measureStretchStyle = _useStretchStyle2[1];
    var doMeasure = function doMeasure() {
      if (props.stretch) {
        measureStretchStyle(props.getRootDomNode());
      }
    };
    var visible = ref(false);
    var timeoutId;
    watch(function () {
      return props.visible;
    }, function (val) {
      clearTimeout(timeoutId);
      if (val) {
        timeoutId = setTimeout(function () {
          visible.value = props.visible;
        });
      } else {
        visible.value = false;
      }
    }, {
      immediate: true
    });
    // ======================== Status ========================
    var _useVisibleStatus = useVisibleStatus(visible, doMeasure),
      _useVisibleStatus2 = _slicedToArray(_useVisibleStatus, 2),
      status = _useVisibleStatus2[0],
      goNextStatus = _useVisibleStatus2[1];
    // ======================== Aligns ========================
    var prepareResolveRef = ref();
    // `target` on `rc-align` can accept as a function to get the bind element or a point.
    // ref: https://www.npmjs.com/package/rc-align
    var getAlignTarget = function getAlignTarget() {
      if (props.point) {
        return props.point;
      }
      return props.getRootDomNode;
    };
    var forceAlign = function forceAlign() {
      var _alignRef$value;
      (_alignRef$value = alignRef.value) === null || _alignRef$value === void 0 ? void 0 : _alignRef$value.forceAlign();
    };
    var onInternalAlign = function onInternalAlign(popupDomNode, matchAlign) {
      var nextAlignedClassName = props.getClassNameFromAlign(matchAlign);
      var preAlignedClassName = alignedClassName.value;
      if (alignedClassName.value !== nextAlignedClassName) {
        alignedClassName.value = nextAlignedClassName;
      }
      if (status.value === 'align') {
        var _props$onAlign;
        // Repeat until not more align needed
        if (preAlignedClassName !== nextAlignedClassName) {
          Promise.resolve().then(function () {
            forceAlign();
          });
        } else {
          goNextStatus(function () {
            var _prepareResolveRef$va;
            (_prepareResolveRef$va = prepareResolveRef.value) === null || _prepareResolveRef$va === void 0 ? void 0 : _prepareResolveRef$va.call(prepareResolveRef);
          });
        }
        (_props$onAlign = props.onAlign) === null || _props$onAlign === void 0 ? void 0 : _props$onAlign.call(props, popupDomNode, matchAlign);
      }
    };
    // ======================== Motion ========================
    var motion = computed(function () {
      var m = _typeof(props.animation) === 'object' ? props.animation : getMotion(props);
      ['onAfterEnter', 'onAfterLeave'].forEach(function (eventName) {
        var originFn = m[eventName];
        m[eventName] = function (node) {
          goNextStatus();
          // 结束后，强制 stable
          status.value = 'stable';
          originFn === null || originFn === void 0 ? void 0 : originFn(node);
        };
      });
      return m;
    });
    var onShowPrepare = function onShowPrepare() {
      return new Promise(function (resolve) {
        prepareResolveRef.value = resolve;
      });
    };
    watch([motion, status], function () {
      if (!motion.value && status.value === 'motion') {
        goNextStatus();
      }
    }, {
      immediate: true
    });
    expose({
      forceAlign: forceAlign,
      getElement: function getElement() {
        return elementRef.value.$el || elementRef.value;
      }
    });
    var alignDisabled = computed(function () {
      var _props$align;
      if ((_props$align = props.align) !== null && _props$align !== void 0 && _props$align.points && (status.value === 'align' || status.value === 'stable')) {
        return false;
      }
      return true;
    });
    return function () {
      var _slots$default;
      var zIndex = props.zIndex,
        align = props.align,
        prefixCls = props.prefixCls,
        destroyPopupOnHide = props.destroyPopupOnHide,
        onMouseenter = props.onMouseenter,
        onMouseleave = props.onMouseleave,
        _props$onTouchstart = props.onTouchstart,
        onTouchstart = _props$onTouchstart === void 0 ? function () {} : _props$onTouchstart,
        onMousedown = props.onMousedown;
      var statusValue = status.value;
      // ======================== Render ========================
      var mergedStyle = [_objectSpread(_objectSpread({}, stretchStyle.value), {}, {
        zIndex: zIndex,
        opacity: statusValue === 'motion' || statusValue === 'stable' || !visible.value ? null : 0,
        // pointerEvents: statusValue === 'stable' ? null : 'none',
        pointerEvents: !visible.value && statusValue !== 'stable' ? 'none' : null
      }), attrs.style];
      var childNode = flattenChildren((_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots, {
        visible: props.visible
      }));
      // Wrapper when multiple children
      if (childNode.length > 1) {
        var _childNode = function () {
          return childNode;
        }();
        childNode = _createVNode("div", {
          "class": "".concat(prefixCls, "-content")
        }, [childNode]);
      }
      var mergedClassName = classNames(prefixCls, attrs.class, alignedClassName.value);
      var hasAnimate = visible.value || !props.visible;
      var transitionProps = hasAnimate ? getTransitionProps(motion.value.name, motion.value) : {};
      return _createVNode(Transition, _objectSpread(_objectSpread({
        "ref": elementRef
      }, transitionProps), {}, {
        "onBeforeEnter": onShowPrepare
      }), {
        default: function _default() {
          return !destroyPopupOnHide || props.visible ? _withDirectives(_createVNode(Align, {
            "target": getAlignTarget(),
            "key": "popup",
            "ref": alignRef,
            "monitorWindowResize": true,
            "disabled": alignDisabled.value,
            "align": align,
            "onAlign": onInternalAlign
          }, {
            default: function _default() {
              return _createVNode("div", _objectSpread(_objectSpread({
                "class": mergedClassName,
                "onMouseenter": onMouseenter,
                "onMouseleave": onMouseleave,
                "onMousedown": withModifiers(onMousedown, ['capture'])
              }, _defineProperty({}, supportsPassive ? 'onTouchstartPassive' : 'onTouchstart', withModifiers(onTouchstart, ['capture']))), {}, {
                "style": mergedStyle
              }), [childNode]);
            }
          }), [[_vShow, visible.value]]) : null;
        }
      });
    };
  }
});