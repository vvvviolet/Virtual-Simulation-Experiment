import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { createVNode as _createVNode } from "vue";
import isMobile from '../../vc-util/isMobile';
import { onBeforeUnmount, ref, defineComponent } from 'vue';
import classNames from '../../_util/classNames';
/**
 * When click and hold on a button - the speed of auto changing the value.
 */
var STEP_INTERVAL = 200;
/**
 * When click and hold on a button - the delay before auto changing the value.
 */
var STEP_DELAY = 600;
export default defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'StepHandler',
  inheritAttrs: false,
  props: {
    prefixCls: String,
    upDisabled: Boolean,
    downDisabled: Boolean,
    onStep: {
      type: Function
    }
  },
  slots: ['upNode', 'downNode'],
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
      emit = _ref.emit;
    var stepTimeoutRef = ref();
    // We will interval update step when hold mouse down
    var onStepMouseDown = function onStepMouseDown(e, up) {
      e.preventDefault();
      emit('step', up);
      // Loop step for interval
      function loopStep() {
        emit('step', up);
        stepTimeoutRef.value = setTimeout(loopStep, STEP_INTERVAL);
      }
      // First time press will wait some time to trigger loop step update
      stepTimeoutRef.value = setTimeout(loopStep, STEP_DELAY);
    };
    var onStopStep = function onStopStep() {
      clearTimeout(stepTimeoutRef.value);
    };
    onBeforeUnmount(function () {
      onStopStep();
    });
    return function () {
      if (isMobile()) {
        return null;
      }
      var prefixCls = props.prefixCls,
        upDisabled = props.upDisabled,
        downDisabled = props.downDisabled;
      var handlerClassName = "".concat(prefixCls, "-handler");
      var upClassName = classNames(handlerClassName, "".concat(handlerClassName, "-up"), _defineProperty({}, "".concat(handlerClassName, "-up-disabled"), upDisabled));
      var downClassName = classNames(handlerClassName, "".concat(handlerClassName, "-down"), _defineProperty({}, "".concat(handlerClassName, "-down-disabled"), downDisabled));
      var sharedHandlerProps = {
        unselectable: 'on',
        role: 'button',
        onMouseup: onStopStep,
        onMouseleave: onStopStep
      };
      var upNode = slots.upNode,
        downNode = slots.downNode;
      return _createVNode("div", {
        "class": "".concat(handlerClassName, "-wrap")
      }, [_createVNode("span", _objectSpread(_objectSpread({}, sharedHandlerProps), {}, {
        "onMousedown": function onMousedown(e) {
          onStepMouseDown(e, true);
        },
        "aria-label": "Increase Value",
        "aria-disabled": upDisabled,
        "class": upClassName
      }), [(upNode === null || upNode === void 0 ? void 0 : upNode()) || _createVNode("span", {
        "unselectable": "on",
        "class": "".concat(prefixCls, "-handler-up-inner")
      }, null)]), _createVNode("span", _objectSpread(_objectSpread({}, sharedHandlerProps), {}, {
        "onMousedown": function onMousedown(e) {
          onStepMouseDown(e, false);
        },
        "aria-label": "Decrease Value",
        "aria-disabled": downDisabled,
        "class": downClassName
      }), [(downNode === null || downNode === void 0 ? void 0 : downNode()) || _createVNode("span", {
        "unselectable": "on",
        "class": "".concat(prefixCls, "-handler-down-inner")
      }, null)])]);
    };
  }
});