"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.previewProps = exports.default = void 0;
var _vue = require("vue");
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _classNames = _interopRequireDefault(require("../../_util/classNames"));
var _vcDialog = _interopRequireDefault(require("../../vc-dialog"));
var _IDialogPropTypes = require("../../vc-dialog/IDialogPropTypes");
var _css = require("../../vc-util/Dom/css");
var _addEventListener = _interopRequireDefault(require("../../vc-util/Dom/addEventListener"));
var _KeyCode = _interopRequireDefault(require("../../_util/KeyCode"));
var _warning = require("../../vc-util/warning");
var _useFrameSetState3 = _interopRequireDefault(require("./hooks/useFrameSetState"));
var _getFixScaleEleTransPosition = _interopRequireDefault(require("./getFixScaleEleTransPosition"));
var _PreviewGroup = require("./PreviewGroup");
var initialPosition = {
  x: 0,
  y: 0
};
var previewProps = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, (0, _IDialogPropTypes.dialogPropTypes)()), {}, {
  src: String,
  alt: String,
  rootClassName: String,
  icons: {
    type: Object,
    default: function _default() {
      return {};
    }
  }
});
exports.previewProps = previewProps;
var Preview = (0, _vue.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  name: 'Preview',
  inheritAttrs: false,
  props: previewProps,
  emits: ['close', 'afterClose'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit,
      attrs = _ref.attrs;
    var _reactive = (0, _vue.reactive)(props.icons),
      rotateLeft = _reactive.rotateLeft,
      rotateRight = _reactive.rotateRight,
      zoomIn = _reactive.zoomIn,
      zoomOut = _reactive.zoomOut,
      close = _reactive.close,
      left = _reactive.left,
      right = _reactive.right;
    var scale = (0, _vue.ref)(1);
    var rotate = (0, _vue.ref)(0);
    var _useFrameSetState = (0, _useFrameSetState3.default)(initialPosition),
      _useFrameSetState2 = (0, _slicedToArray2.default)(_useFrameSetState, 2),
      position = _useFrameSetState2[0],
      setPosition = _useFrameSetState2[1];
    var onClose = function onClose() {
      return emit('close');
    };
    var imgRef = (0, _vue.ref)();
    var originPositionRef = (0, _vue.reactive)({
      originX: 0,
      originY: 0,
      deltaX: 0,
      deltaY: 0
    });
    var isMoving = (0, _vue.ref)(false);
    var groupContext = _PreviewGroup.context.inject();
    var previewUrls = groupContext.previewUrls,
      current = groupContext.current,
      isPreviewGroup = groupContext.isPreviewGroup,
      setCurrent = groupContext.setCurrent;
    var previewGroupCount = (0, _vue.computed)(function () {
      return previewUrls.value.size;
    });
    var previewUrlsKeys = (0, _vue.computed)(function () {
      return Array.from(previewUrls.value.keys());
    });
    var currentPreviewIndex = (0, _vue.computed)(function () {
      return previewUrlsKeys.value.indexOf(current.value);
    });
    var combinationSrc = (0, _vue.computed)(function () {
      return isPreviewGroup.value ? previewUrls.value.get(current.value) : props.src;
    });
    var showLeftOrRightSwitches = (0, _vue.computed)(function () {
      return isPreviewGroup.value && previewGroupCount.value > 1;
    });
    var lastWheelZoomDirection = (0, _vue.ref)({
      wheelDirection: 0
    });
    var onAfterClose = function onAfterClose() {
      scale.value = 1;
      rotate.value = 0;
      setPosition(initialPosition);
      emit('afterClose');
    };
    var onZoomIn = function onZoomIn() {
      scale.value++;
      setPosition(initialPosition);
    };
    var onZoomOut = function onZoomOut() {
      if (scale.value > 1) {
        scale.value--;
      }
      setPosition(initialPosition);
    };
    var onRotateRight = function onRotateRight() {
      rotate.value += 90;
    };
    var onRotateLeft = function onRotateLeft() {
      rotate.value -= 90;
    };
    var onSwitchLeft = function onSwitchLeft(event) {
      event.preventDefault();
      // Without this mask close will abnormal
      event.stopPropagation();
      if (currentPreviewIndex.value > 0) {
        setCurrent(previewUrlsKeys.value[currentPreviewIndex.value - 1]);
      }
    };
    var onSwitchRight = function onSwitchRight(event) {
      event.preventDefault();
      // Without this mask close will abnormal
      event.stopPropagation();
      if (currentPreviewIndex.value < previewGroupCount.value - 1) {
        setCurrent(previewUrlsKeys.value[currentPreviewIndex.value + 1]);
      }
    };
    var wrapClassName = (0, _classNames.default)((0, _defineProperty2.default)({}, "".concat(props.prefixCls, "-moving"), isMoving.value));
    var toolClassName = "".concat(props.prefixCls, "-operations-operation");
    var iconClassName = "".concat(props.prefixCls, "-operations-icon");
    var tools = [{
      icon: close,
      onClick: onClose,
      type: 'close'
    }, {
      icon: zoomIn,
      onClick: onZoomIn,
      type: 'zoomIn'
    }, {
      icon: zoomOut,
      onClick: onZoomOut,
      type: 'zoomOut',
      disabled: (0, _vue.computed)(function () {
        return scale.value === 1;
      })
    }, {
      icon: rotateRight,
      onClick: onRotateRight,
      type: 'rotateRight'
    }, {
      icon: rotateLeft,
      onClick: onRotateLeft,
      type: 'rotateLeft'
    }];
    var onMouseUp = function onMouseUp() {
      if (props.visible && isMoving.value) {
        var width = imgRef.value.offsetWidth * scale.value;
        var height = imgRef.value.offsetHeight * scale.value;
        var _getOffset = (0, _css.getOffset)(imgRef.value),
          _left = _getOffset.left,
          top = _getOffset.top;
        var isRotate = rotate.value % 180 !== 0;
        isMoving.value = false;
        var fixState = (0, _getFixScaleEleTransPosition.default)(isRotate ? height : width, isRotate ? width : height, _left, top);
        if (fixState) {
          setPosition((0, _objectSpread2.default)({}, fixState));
        }
      }
    };
    var onMouseDown = function onMouseDown(event) {
      // Only allow main button
      if (event.button !== 0) return;
      event.preventDefault();
      // Without this mask close will abnormal
      event.stopPropagation();
      originPositionRef.deltaX = event.pageX - position.x;
      originPositionRef.deltaY = event.pageY - position.y;
      originPositionRef.originX = position.x;
      originPositionRef.originY = position.y;
      isMoving.value = true;
    };
    var onMouseMove = function onMouseMove(event) {
      if (props.visible && isMoving.value) {
        setPosition({
          x: event.pageX - originPositionRef.deltaX,
          y: event.pageY - originPositionRef.deltaY
        });
      }
    };
    var onWheelMove = function onWheelMove(event) {
      if (!props.visible) return;
      event.preventDefault();
      var wheelDirection = event.deltaY;
      lastWheelZoomDirection.value = {
        wheelDirection: wheelDirection
      };
    };
    var onKeyDown = function onKeyDown(event) {
      if (!props.visible || !showLeftOrRightSwitches.value) return;
      event.preventDefault();
      if (event.keyCode === _KeyCode.default.LEFT) {
        if (currentPreviewIndex.value > 0) {
          setCurrent(previewUrlsKeys.value[currentPreviewIndex.value - 1]);
        }
      } else if (event.keyCode === _KeyCode.default.RIGHT) {
        if (currentPreviewIndex.value < previewGroupCount.value - 1) {
          setCurrent(previewUrlsKeys.value[currentPreviewIndex.value + 1]);
        }
      }
    };
    var onDoubleClick = function onDoubleClick() {
      if (props.visible) {
        if (scale.value !== 1) {
          scale.value = 1;
        }
        if (position.x !== initialPosition.x || position.y !== initialPosition.y) {
          setPosition(initialPosition);
        }
      }
    };
    var removeListeners = function removeListeners() {};
    (0, _vue.onMounted)(function () {
      (0, _vue.watch)([function () {
        return props.visible;
      }, isMoving], function () {
        removeListeners();
        var onTopMouseUpListener;
        var onTopMouseMoveListener;
        var onMouseUpListener = (0, _addEventListener.default)(window, 'mouseup', onMouseUp, false);
        var onMouseMoveListener = (0, _addEventListener.default)(window, 'mousemove', onMouseMove, false);
        var onScrollWheelListener = (0, _addEventListener.default)(window, 'wheel', onWheelMove, {
          passive: false
        });
        var onKeyDownListener = (0, _addEventListener.default)(window, 'keydown', onKeyDown, false);
        try {
          // Resolve if in iframe lost event
          /* istanbul ignore next */
          if (window.top !== window.self) {
            onTopMouseUpListener = (0, _addEventListener.default)(window.top, 'mouseup', onMouseUp, false);
            onTopMouseMoveListener = (0, _addEventListener.default)(window.top, 'mousemove', onMouseMove, false);
          }
        } catch (error) {
          /* istanbul ignore next */
          (0, _warning.warning)(false, "[vc-image] ".concat(error));
        }
        removeListeners = function removeListeners() {
          onMouseUpListener.remove();
          onMouseMoveListener.remove();
          onScrollWheelListener.remove();
          onKeyDownListener.remove();
          /* istanbul ignore next */
          if (onTopMouseUpListener) onTopMouseUpListener.remove();
          /* istanbul ignore next */
          if (onTopMouseMoveListener) onTopMouseMoveListener.remove();
        };
      }, {
        flush: 'post',
        immediate: true
      });
      (0, _vue.watch)([lastWheelZoomDirection], function () {
        var wheelDirection = lastWheelZoomDirection.value.wheelDirection;
        if (wheelDirection > 0) {
          onZoomOut();
        } else if (wheelDirection < 0) {
          onZoomIn();
        }
      });
    });
    (0, _vue.onUnmounted)(function () {
      removeListeners();
    });
    return function () {
      var visible = props.visible,
        prefixCls = props.prefixCls,
        rootClassName = props.rootClassName;
      return (0, _vue.createVNode)(_vcDialog.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, attrs), {}, {
        "transitionName": "zoom",
        "maskTransitionName": "fade",
        "closable": false,
        "keyboard": true,
        "prefixCls": prefixCls,
        "onClose": onClose,
        "afterClose": onAfterClose,
        "visible": visible,
        "wrapClassName": wrapClassName,
        "rootClassName": rootClassName,
        "getContainer": props.getContainer
      }), {
        default: function _default() {
          return [(0, _vue.createVNode)("ul", {
            "class": "".concat(props.prefixCls, "-operations")
          }, [tools.map(function (_ref2) {
            var IconType = _ref2.icon,
              onClick = _ref2.onClick,
              type = _ref2.type,
              disabled = _ref2.disabled;
            return (0, _vue.createVNode)("li", {
              "class": (0, _classNames.default)(toolClassName, (0, _defineProperty2.default)({}, "".concat(props.prefixCls, "-operations-operation-disabled"), disabled && (disabled === null || disabled === void 0 ? void 0 : disabled.value))),
              "onClick": onClick,
              "key": type
            }, [(0, _vue.cloneVNode)(IconType, {
              class: iconClassName
            })]);
          })]), (0, _vue.createVNode)("div", {
            "class": "".concat(props.prefixCls, "-img-wrapper"),
            "style": {
              transform: "translate3d(".concat(position.x, "px, ").concat(position.y, "px, 0)")
            }
          }, [(0, _vue.createVNode)("img", {
            "onMousedown": onMouseDown,
            "onDblclick": onDoubleClick,
            "ref": imgRef,
            "class": "".concat(props.prefixCls, "-img"),
            "src": combinationSrc.value,
            "alt": props.alt,
            "style": {
              transform: "scale3d(".concat(scale.value, ", ").concat(scale.value, ", 1) rotate(").concat(rotate.value, "deg)")
            }
          }, null)]), showLeftOrRightSwitches.value && (0, _vue.createVNode)("div", {
            "class": (0, _classNames.default)("".concat(props.prefixCls, "-switch-left"), (0, _defineProperty2.default)({}, "".concat(props.prefixCls, "-switch-left-disabled"), currentPreviewIndex.value <= 0)),
            "onClick": onSwitchLeft
          }, [left]), showLeftOrRightSwitches.value && (0, _vue.createVNode)("div", {
            "class": (0, _classNames.default)("".concat(props.prefixCls, "-switch-right"), (0, _defineProperty2.default)({}, "".concat(props.prefixCls, "-switch-right-disabled"), currentPreviewIndex.value >= previewGroupCount.value - 1)),
            "onClick": onSwitchRight
          }, [right])];
        }
      });
    };
  }
});
var _default2 = Preview;
exports.default = _default2;