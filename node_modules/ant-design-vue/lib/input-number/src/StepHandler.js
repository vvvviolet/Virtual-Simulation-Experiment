"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = require("vue");
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _isMobile = _interopRequireDefault(require("../../vc-util/isMobile"));
var _classNames3 = _interopRequireDefault(require("../../_util/classNames"));
/**
 * When click and hold on a button - the speed of auto changing the value.
 */
var STEP_INTERVAL = 200;
/**
 * When click and hold on a button - the delay before auto changing the value.
 */
var STEP_DELAY = 600;
var _default = (0, _vue.defineComponent)({
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
    var stepTimeoutRef = (0, _vue.ref)();
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
    (0, _vue.onBeforeUnmount)(function () {
      onStopStep();
    });
    return function () {
      if ((0, _isMobile.default)()) {
        return null;
      }
      var prefixCls = props.prefixCls,
        upDisabled = props.upDisabled,
        downDisabled = props.downDisabled;
      var handlerClassName = "".concat(prefixCls, "-handler");
      var upClassName = (0, _classNames3.default)(handlerClassName, "".concat(handlerClassName, "-up"), (0, _defineProperty2.default)({}, "".concat(handlerClassName, "-up-disabled"), upDisabled));
      var downClassName = (0, _classNames3.default)(handlerClassName, "".concat(handlerClassName, "-down"), (0, _defineProperty2.default)({}, "".concat(handlerClassName, "-down-disabled"), downDisabled));
      var sharedHandlerProps = {
        unselectable: 'on',
        role: 'button',
        onMouseup: onStopStep,
        onMouseleave: onStopStep
      };
      var upNode = slots.upNode,
        downNode = slots.downNode;
      return (0, _vue.createVNode)("div", {
        "class": "".concat(handlerClassName, "-wrap")
      }, [(0, _vue.createVNode)("span", (0, _objectSpread2.default)((0, _objectSpread2.default)({}, sharedHandlerProps), {}, {
        "onMousedown": function onMousedown(e) {
          onStepMouseDown(e, true);
        },
        "aria-label": "Increase Value",
        "aria-disabled": upDisabled,
        "class": upClassName
      }), [(upNode === null || upNode === void 0 ? void 0 : upNode()) || (0, _vue.createVNode)("span", {
        "unselectable": "on",
        "class": "".concat(prefixCls, "-handler-up-inner")
      }, null)]), (0, _vue.createVNode)("span", (0, _objectSpread2.default)((0, _objectSpread2.default)({}, sharedHandlerProps), {}, {
        "onMousedown": function onMousedown(e) {
          onStepMouseDown(e, false);
        },
        "aria-label": "Decrease Value",
        "aria-disabled": downDisabled,
        "class": downClassName
      }), [(downNode === null || downNode === void 0 ? void 0 : downNode()) || (0, _vue.createVNode)("span", {
        "unselectable": "on",
        "class": "".concat(prefixCls, "-handler-down-inner")
      }, null)])]);
    };
  }
});
exports.default = _default;