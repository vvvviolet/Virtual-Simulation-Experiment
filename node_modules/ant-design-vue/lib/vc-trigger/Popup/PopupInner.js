"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = require("vue");
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _useVisibleStatus3 = _interopRequireDefault(require("./useVisibleStatus"));
var _useStretchStyle3 = _interopRequireDefault(require("./useStretchStyle"));
var _Align = _interopRequireDefault(require("../../vc-align/Align"));
var _motionUtil = require("../utils/motionUtil");
var _propsUtil = require("../../_util/props-util");
var _classNames = _interopRequireDefault(require("../../_util/classNames"));
var _interface = require("./interface");
var _transition = require("../../_util/transition");
var _supportsPassive = _interopRequireDefault(require("../../_util/supportsPassive"));
var _default2 = (0, _vue.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  name: 'PopupInner',
  inheritAttrs: false,
  props: _interface.innerProps,
  emits: ['mouseenter', 'mouseleave', 'mousedown', 'touchstart', 'align'],
  setup: function setup(props, _ref) {
    var expose = _ref.expose,
      attrs = _ref.attrs,
      slots = _ref.slots;
    var alignRef = (0, _vue.ref)();
    var elementRef = (0, _vue.ref)();
    var alignedClassName = (0, _vue.ref)();
    // ======================= Measure ========================
    var _useStretchStyle = (0, _useStretchStyle3.default)((0, _vue.toRef)(props, 'stretch')),
      _useStretchStyle2 = (0, _slicedToArray2.default)(_useStretchStyle, 2),
      stretchStyle = _useStretchStyle2[0],
      measureStretchStyle = _useStretchStyle2[1];
    var doMeasure = function doMeasure() {
      if (props.stretch) {
        measureStretchStyle(props.getRootDomNode());
      }
    };
    var visible = (0, _vue.ref)(false);
    var timeoutId;
    (0, _vue.watch)(function () {
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
    var _useVisibleStatus = (0, _useVisibleStatus3.default)(visible, doMeasure),
      _useVisibleStatus2 = (0, _slicedToArray2.default)(_useVisibleStatus, 2),
      status = _useVisibleStatus2[0],
      goNextStatus = _useVisibleStatus2[1];
    // ======================== Aligns ========================
    var prepareResolveRef = (0, _vue.ref)();
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
    var motion = (0, _vue.computed)(function () {
      var m = (0, _typeof2.default)(props.animation) === 'object' ? props.animation : (0, _motionUtil.getMotion)(props);
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
    (0, _vue.watch)([motion, status], function () {
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
    var alignDisabled = (0, _vue.computed)(function () {
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
      var mergedStyle = [(0, _objectSpread2.default)((0, _objectSpread2.default)({}, stretchStyle.value), {}, {
        zIndex: zIndex,
        opacity: statusValue === 'motion' || statusValue === 'stable' || !visible.value ? null : 0,
        // pointerEvents: statusValue === 'stable' ? null : 'none',
        pointerEvents: !visible.value && statusValue !== 'stable' ? 'none' : null
      }), attrs.style];
      var childNode = (0, _propsUtil.flattenChildren)((_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots, {
        visible: props.visible
      }));
      // Wrapper when multiple children
      if (childNode.length > 1) {
        var _childNode = function () {
          return childNode;
        }();
        childNode = (0, _vue.createVNode)("div", {
          "class": "".concat(prefixCls, "-content")
        }, [childNode]);
      }
      var mergedClassName = (0, _classNames.default)(prefixCls, attrs.class, alignedClassName.value);
      var hasAnimate = visible.value || !props.visible;
      var transitionProps = hasAnimate ? (0, _transition.getTransitionProps)(motion.value.name, motion.value) : {};
      return (0, _vue.createVNode)(_vue.Transition, (0, _objectSpread2.default)((0, _objectSpread2.default)({
        "ref": elementRef
      }, transitionProps), {}, {
        "onBeforeEnter": onShowPrepare
      }), {
        default: function _default() {
          return !destroyPopupOnHide || props.visible ? (0, _vue.withDirectives)((0, _vue.createVNode)(_Align.default, {
            "target": getAlignTarget(),
            "key": "popup",
            "ref": alignRef,
            "monitorWindowResize": true,
            "disabled": alignDisabled.value,
            "align": align,
            "onAlign": onInternalAlign
          }, {
            default: function _default() {
              return (0, _vue.createVNode)("div", (0, _objectSpread2.default)((0, _objectSpread2.default)({
                "class": mergedClassName,
                "onMouseenter": onMouseenter,
                "onMouseleave": onMouseleave,
                "onMousedown": (0, _vue.withModifiers)(onMousedown, ['capture'])
              }, (0, _defineProperty2.default)({}, _supportsPassive.default ? 'onTouchstartPassive' : 'onTouchstart', (0, _vue.withModifiers)(onTouchstart, ['capture']))), {}, {
                "style": mergedStyle
              }), [childNode]);
            }
          }), [[_vue.vShow, visible.value]]) : null;
        }
      });
    };
  }
});
exports.default = _default2;