import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { createVNode as _createVNode } from "vue";
import { computed, defineComponent, onMounted, onUnmounted, reactive, ref, watch, cloneVNode } from 'vue';
import classnames from '../../_util/classNames';
import Dialog from '../../vc-dialog';
import { dialogPropTypes } from '../../vc-dialog/IDialogPropTypes';
import { getOffset } from '../../vc-util/Dom/css';
import addEventListener from '../../vc-util/Dom/addEventListener';
import KeyCode from '../../_util/KeyCode';
import { warning } from '../../vc-util/warning';
import useFrameSetState from './hooks/useFrameSetState';
import getFixScaleEleTransPosition from './getFixScaleEleTransPosition';
import { context } from './PreviewGroup';
var initialPosition = {
  x: 0,
  y: 0
};
export var previewProps = _objectSpread(_objectSpread({}, dialogPropTypes()), {}, {
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
var Preview = defineComponent({
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
    var _reactive = reactive(props.icons),
      rotateLeft = _reactive.rotateLeft,
      rotateRight = _reactive.rotateRight,
      zoomIn = _reactive.zoomIn,
      zoomOut = _reactive.zoomOut,
      close = _reactive.close,
      left = _reactive.left,
      right = _reactive.right;
    var scale = ref(1);
    var rotate = ref(0);
    var _useFrameSetState = useFrameSetState(initialPosition),
      _useFrameSetState2 = _slicedToArray(_useFrameSetState, 2),
      position = _useFrameSetState2[0],
      setPosition = _useFrameSetState2[1];
    var onClose = function onClose() {
      return emit('close');
    };
    var imgRef = ref();
    var originPositionRef = reactive({
      originX: 0,
      originY: 0,
      deltaX: 0,
      deltaY: 0
    });
    var isMoving = ref(false);
    var groupContext = context.inject();
    var previewUrls = groupContext.previewUrls,
      current = groupContext.current,
      isPreviewGroup = groupContext.isPreviewGroup,
      setCurrent = groupContext.setCurrent;
    var previewGroupCount = computed(function () {
      return previewUrls.value.size;
    });
    var previewUrlsKeys = computed(function () {
      return Array.from(previewUrls.value.keys());
    });
    var currentPreviewIndex = computed(function () {
      return previewUrlsKeys.value.indexOf(current.value);
    });
    var combinationSrc = computed(function () {
      return isPreviewGroup.value ? previewUrls.value.get(current.value) : props.src;
    });
    var showLeftOrRightSwitches = computed(function () {
      return isPreviewGroup.value && previewGroupCount.value > 1;
    });
    var lastWheelZoomDirection = ref({
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
    var wrapClassName = classnames(_defineProperty({}, "".concat(props.prefixCls, "-moving"), isMoving.value));
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
      disabled: computed(function () {
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
        var _getOffset = getOffset(imgRef.value),
          _left = _getOffset.left,
          top = _getOffset.top;
        var isRotate = rotate.value % 180 !== 0;
        isMoving.value = false;
        var fixState = getFixScaleEleTransPosition(isRotate ? height : width, isRotate ? width : height, _left, top);
        if (fixState) {
          setPosition(_objectSpread({}, fixState));
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
      if (event.keyCode === KeyCode.LEFT) {
        if (currentPreviewIndex.value > 0) {
          setCurrent(previewUrlsKeys.value[currentPreviewIndex.value - 1]);
        }
      } else if (event.keyCode === KeyCode.RIGHT) {
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
    onMounted(function () {
      watch([function () {
        return props.visible;
      }, isMoving], function () {
        removeListeners();
        var onTopMouseUpListener;
        var onTopMouseMoveListener;
        var onMouseUpListener = addEventListener(window, 'mouseup', onMouseUp, false);
        var onMouseMoveListener = addEventListener(window, 'mousemove', onMouseMove, false);
        var onScrollWheelListener = addEventListener(window, 'wheel', onWheelMove, {
          passive: false
        });
        var onKeyDownListener = addEventListener(window, 'keydown', onKeyDown, false);
        try {
          // Resolve if in iframe lost event
          /* istanbul ignore next */
          if (window.top !== window.self) {
            onTopMouseUpListener = addEventListener(window.top, 'mouseup', onMouseUp, false);
            onTopMouseMoveListener = addEventListener(window.top, 'mousemove', onMouseMove, false);
          }
        } catch (error) {
          /* istanbul ignore next */
          warning(false, "[vc-image] ".concat(error));
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
      watch([lastWheelZoomDirection], function () {
        var wheelDirection = lastWheelZoomDirection.value.wheelDirection;
        if (wheelDirection > 0) {
          onZoomOut();
        } else if (wheelDirection < 0) {
          onZoomIn();
        }
      });
    });
    onUnmounted(function () {
      removeListeners();
    });
    return function () {
      var visible = props.visible,
        prefixCls = props.prefixCls,
        rootClassName = props.rootClassName;
      return _createVNode(Dialog, _objectSpread(_objectSpread({}, attrs), {}, {
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
          return [_createVNode("ul", {
            "class": "".concat(props.prefixCls, "-operations")
          }, [tools.map(function (_ref2) {
            var IconType = _ref2.icon,
              onClick = _ref2.onClick,
              type = _ref2.type,
              disabled = _ref2.disabled;
            return _createVNode("li", {
              "class": classnames(toolClassName, _defineProperty({}, "".concat(props.prefixCls, "-operations-operation-disabled"), disabled && (disabled === null || disabled === void 0 ? void 0 : disabled.value))),
              "onClick": onClick,
              "key": type
            }, [cloneVNode(IconType, {
              class: iconClassName
            })]);
          })]), _createVNode("div", {
            "class": "".concat(props.prefixCls, "-img-wrapper"),
            "style": {
              transform: "translate3d(".concat(position.x, "px, ").concat(position.y, "px, 0)")
            }
          }, [_createVNode("img", {
            "onMousedown": onMouseDown,
            "onDblclick": onDoubleClick,
            "ref": imgRef,
            "class": "".concat(props.prefixCls, "-img"),
            "src": combinationSrc.value,
            "alt": props.alt,
            "style": {
              transform: "scale3d(".concat(scale.value, ", ").concat(scale.value, ", 1) rotate(").concat(rotate.value, "deg)")
            }
          }, null)]), showLeftOrRightSwitches.value && _createVNode("div", {
            "class": classnames("".concat(props.prefixCls, "-switch-left"), _defineProperty({}, "".concat(props.prefixCls, "-switch-left-disabled"), currentPreviewIndex.value <= 0)),
            "onClick": onSwitchLeft
          }, [left]), showLeftOrRightSwitches.value && _createVNode("div", {
            "class": classnames("".concat(props.prefixCls, "-switch-right"), _defineProperty({}, "".concat(props.prefixCls, "-switch-right-disabled"), currentPreviewIndex.value >= previewGroupCount.value - 1)),
            "onClick": onSwitchRight
          }, [right])];
        }
      });
    };
  }
});
export default Preview;