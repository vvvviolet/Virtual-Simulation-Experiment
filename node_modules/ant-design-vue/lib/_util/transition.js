"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Transition", {
  enumerable: true,
  get: function get() {
    return _vue.Transition;
  }
});
Object.defineProperty(exports, "TransitionGroup", {
  enumerable: true,
  get: function get() {
    return _vue.TransitionGroup;
  }
});
exports.getTransitionProps = exports.getTransitionName = exports.getTransitionGroupProps = exports.getTransitionDirection = exports.default = exports.collapseMotion = void 0;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _vue = require("vue");
var _type = require("./type");
var SelectPlacements = (0, _type.tuple)('bottomLeft', 'bottomRight', 'topLeft', 'topRight');
var getTransitionDirection = function getTransitionDirection(placement) {
  if (placement !== undefined && (placement === 'topLeft' || placement === 'topRight')) {
    return "slide-down";
  }
  return "slide-up";
};
exports.getTransitionDirection = getTransitionDirection;
var getTransitionProps = function getTransitionProps(transitionName) {
  var opt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var transitionProps = transitionName ? (0, _objectSpread2.default)({
    name: transitionName,
    appear: true,
    // type: 'animation',
    // appearFromClass: `${transitionName}-appear ${transitionName}-appear-prepare`,
    // appearActiveClass: `antdv-base-transtion`,
    // appearToClass: `${transitionName}-appear ${transitionName}-appear-active`,
    enterFromClass: "".concat(transitionName, "-enter ").concat(transitionName, "-enter-prepare"),
    enterActiveClass: "".concat(transitionName, "-enter ").concat(transitionName, "-enter-prepare"),
    enterToClass: "".concat(transitionName, "-enter ").concat(transitionName, "-enter-active"),
    leaveFromClass: " ".concat(transitionName, "-leave"),
    leaveActiveClass: "".concat(transitionName, "-leave ").concat(transitionName, "-leave-active"),
    leaveToClass: "".concat(transitionName, "-leave ").concat(transitionName, "-leave-active")
  }, opt) : (0, _objectSpread2.default)({
    css: false
  }, opt);
  return transitionProps;
};
exports.getTransitionProps = getTransitionProps;
var getTransitionGroupProps = function getTransitionGroupProps(transitionName) {
  var opt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var transitionProps = transitionName ? (0, _objectSpread2.default)({
    name: transitionName,
    appear: true,
    // appearFromClass: `${transitionName}-appear ${transitionName}-appear-prepare`,
    appearActiveClass: "".concat(transitionName),
    appearToClass: "".concat(transitionName, "-appear ").concat(transitionName, "-appear-active"),
    enterFromClass: "".concat(transitionName, "-appear ").concat(transitionName, "-enter ").concat(transitionName, "-appear-prepare ").concat(transitionName, "-enter-prepare"),
    enterActiveClass: "".concat(transitionName),
    enterToClass: "".concat(transitionName, "-enter ").concat(transitionName, "-appear ").concat(transitionName, "-appear-active ").concat(transitionName, "-enter-active"),
    leaveActiveClass: "".concat(transitionName, " ").concat(transitionName, "-leave"),
    leaveToClass: "".concat(transitionName, "-leave-active")
  }, opt) : (0, _objectSpread2.default)({
    css: false
  }, opt);
  return transitionProps;
};
// ================== Collapse Motion ==================
exports.getTransitionGroupProps = getTransitionGroupProps;
var getCollapsedHeight = function getCollapsedHeight() {
  return {
    height: 0,
    opacity: 0
  };
};
var getRealHeight = function getRealHeight(node) {
  return {
    height: "".concat(node.scrollHeight, "px"),
    opacity: 1
  };
};
var getCurrentHeight = function getCurrentHeight(node) {
  return {
    height: "".concat(node.offsetHeight, "px")
  };
};
var collapseMotion = function collapseMotion() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'ant-motion-collapse';
  var style = arguments.length > 1 ? arguments[1] : undefined;
  var className = arguments.length > 2 ? arguments[2] : undefined;
  return {
    name: name,
    appear: true,
    css: true,
    onBeforeEnter: function onBeforeEnter(node) {
      className.value = name;
      style.value = getCollapsedHeight(node);
    },
    onEnter: function onEnter(node) {
      (0, _vue.nextTick)(function () {
        style.value = getRealHeight(node);
      });
    },
    onAfterEnter: function onAfterEnter() {
      className.value = '';
      style.value = {};
    },
    onBeforeLeave: function onBeforeLeave(node) {
      className.value = name;
      style.value = getCurrentHeight(node);
    },
    onLeave: function onLeave(node) {
      setTimeout(function () {
        style.value = getCollapsedHeight(node);
      });
    },
    onAfterLeave: function onAfterLeave() {
      className.value = '';
      style.value = {};
    }
  };
};
exports.collapseMotion = collapseMotion;
var getTransitionName = function getTransitionName(rootPrefixCls, motion, transitionName) {
  if (transitionName !== undefined) {
    return transitionName;
  }
  return "".concat(rootPrefixCls, "-").concat(motion);
};
exports.getTransitionName = getTransitionName;
var _default = _vue.Transition;
exports.default = _default;