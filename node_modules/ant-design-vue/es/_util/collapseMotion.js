import { nextTick } from 'vue';
import { addClass, removeClass } from '../vc-util/Dom/class';
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
      addClass(node, name);
    },
    onEnter: function onEnter(node) {
      nextTick(function () {
        node.style.height = "".concat(node.scrollHeight, "px");
        node.style.opacity = '1';
      });
    },
    onAfterEnter: function onAfterEnter(node) {
      if (node) {
        removeClass(node, name);
        node.style.height = null;
        node.style.opacity = null;
      }
    },
    onBeforeLeave: function onBeforeLeave(node) {
      addClass(node, name);
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
        removeClass(node, name);
        if (node.style) {
          node.style.height = null;
          node.style.opacity = null;
        }
      }
    }
  };
};
export default collapseMotion;