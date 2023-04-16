"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = require("vue");
var _class = require("../vc-util/Dom/class");
var collapseMotion = function collapseMotion() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'ant-motion-collapse';
  var appear = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  return {
    name: name,
    appear: appear,
    css: true,
    onBeforeEnter: function onBeforeEnter(node) {
      node.style.height = '0px';
      node.style.opacity = '0';
      (0, _class.addClass)(node, name);
    },
    onEnter: function onEnter(node) {
      (0, _vue.nextTick)(function () {
        node.style.height = "".concat(node.scrollHeight, "px");
        node.style.opacity = '1';
      });
    },
    onAfterEnter: function onAfterEnter(node) {
      if (node) {
        (0, _class.removeClass)(node, name);
        node.style.height = null;
        node.style.opacity = null;
      }
    },
    onBeforeLeave: function onBeforeLeave(node) {
      (0, _class.addClass)(node, name);
      node.style.height = "".concat(node.offsetHeight, "px");
      node.style.opacity = null;
    },
    onLeave: function onLeave(node) {
      setTimeout(function () {
        node.style.height = '0px';
        node.style.opacity = '0';
      });
    },
    onAfterLeave: function onAfterLeave(node) {
      if (node) {
        (0, _class.removeClass)(node, name);
        if (node.style) {
          node.style.height = null;
          node.style.opacity = null;
        }
      }
    }
  };
};
var _default = collapseMotion;
exports.default = _default;