import { nextTick, defineComponent, getCurrentInstance, onMounted, onBeforeUnmount } from 'vue';
import TransitionEvents from './css-animation/Event';
import raf from './raf';
import { findDOMNode } from './props-util';
import useConfigInject from './hooks/useConfigInject';
var styleForPesudo;
// Where el is the DOM element you'd like to test for visibility
function isHidden(element) {
  if (process.env.NODE_ENV === 'test') {
    return false;
  }
  return !element || element.offsetParent === null;
}
function isNotGrey(color) {
  // eslint-disable-next-line no-useless-escape
  var match = (color || '').match(/rgba?\((\d*), (\d*), (\d*)(, [\.\d]*)?\)/);
  if (match && match[1] && match[2] && match[3]) {
    return !(match[1] === match[2] && match[2] === match[3]);
  }
  return true;
}
export default defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'Wave',
  props: {
    insertExtraNode: Boolean,
    disabled: Boolean
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
      expose = _ref.expose;
    var instance = getCurrentInstance();
    var _useConfigInject = useConfigInject('', props),
      csp = _useConfigInject.csp,
      prefixCls = _useConfigInject.prefixCls;
    expose({
      csp: csp
    });
    var eventIns = null;
    var clickWaveTimeoutId = null;
    var animationStartId = null;
    var animationStart = false;
    var extraNode = null;
    var isUnmounted = false;
    var onTransitionStart = function onTransitionStart(e) {
      if (isUnmounted) return;
      var node = findDOMNode(instance);
      if (!e || e.target !== node) {
        return;
      }
      if (!animationStart) {
        resetEffect(node);
      }
    };
    var onTransitionEnd = function onTransitionEnd(e) {
      if (!e || e.animationName !== 'fadeEffect') {
        return;
      }
      resetEffect(e.target);
    };
    var getAttributeName = function getAttributeName() {
      var insertExtraNode = props.insertExtraNode;
      return insertExtraNode ? "".concat(prefixCls.value, "-click-animating") : "".concat(prefixCls.value, "-click-animating-without-extra-node");
    };
    var onClick = function onClick(node, waveColor) {
      var insertExtraNode = props.insertExtraNode,
        disabled = props.disabled;
      if (disabled || !node || isHidden(node) || node.className.indexOf('-leave') >= 0) {
        return;
      }
      extraNode = document.createElement('div');
      extraNode.className = "".concat(prefixCls.value, "-click-animating-node");
      var attributeName = getAttributeName();
      node.removeAttribute(attributeName);
      node.setAttribute(attributeName, 'true');
      // Not white or transparent or grey
      styleForPesudo = styleForPesudo || document.createElement('style');
      if (waveColor && waveColor !== '#ffffff' && waveColor !== 'rgb(255, 255, 255)' && isNotGrey(waveColor) && !/rgba\(\d*, \d*, \d*, 0\)/.test(waveColor) &&
      // any transparent rgba color
      waveColor !== 'transparent') {
        var _csp$value;
        // Add nonce if CSP exist
        if ((_csp$value = csp.value) !== null && _csp$value !== void 0 && _csp$value.nonce) {
          styleForPesudo.nonce = csp.value.nonce;
        }
        extraNode.style.borderColor = waveColor;
        styleForPesudo.innerHTML = "\n        [".concat(prefixCls.value, "-click-animating-without-extra-node='true']::after, .").concat(prefixCls.value, "-click-animating-node {\n          --antd-wave-shadow-color: ").concat(waveColor, ";\n        }");
        if (!document.body.contains(styleForPesudo)) {
          document.body.appendChild(styleForPesudo);
        }
      }
      if (insertExtraNode) {
        node.appendChild(extraNode);
      }
      TransitionEvents.addStartEventListener(node, onTransitionStart);
      TransitionEvents.addEndEventListener(node, onTransitionEnd);
    };
    var resetEffect = function resetEffect(node) {
      if (!node || node === extraNode || !(node instanceof Element)) {
        return;
      }
      var insertExtraNode = props.insertExtraNode;
      var attributeName = getAttributeName();
      node.setAttribute(attributeName, 'false'); // edge has bug on `removeAttribute` #14466
      if (styleForPesudo) {
        styleForPesudo.innerHTML = '';
      }
      if (insertExtraNode && extraNode && node.contains(extraNode)) {
        node.removeChild(extraNode);
      }
      TransitionEvents.removeStartEventListener(node, onTransitionStart);
      TransitionEvents.removeEndEventListener(node, onTransitionEnd);
    };
    var bindAnimationEvent = function bindAnimationEvent(node) {
      if (!node || !node.getAttribute || node.getAttribute('disabled') || node.className.indexOf('disabled') >= 0) {
        return;
      }
      var newClick = function newClick(e) {
        // Fix radio button click twice
        if (e.target.tagName === 'INPUT' || isHidden(e.target)) {
          return;
        }
        resetEffect(node);
        // Get wave color from target
        var waveColor = getComputedStyle(node).getPropertyValue('border-top-color') ||
        // Firefox Compatible
        getComputedStyle(node).getPropertyValue('border-color') || getComputedStyle(node).getPropertyValue('background-color');
        clickWaveTimeoutId = setTimeout(function () {
          return onClick(node, waveColor);
        }, 0);
        raf.cancel(animationStartId);
        animationStart = true;
        // Render to trigger transition event cost 3 frames. Let's delay 10 frames to reset this.
        animationStartId = raf(function () {
          animationStart = false;
        }, 10);
      };
      node.addEventListener('click', newClick, true);
      return {
        cancel: function cancel() {
          node.removeEventListener('click', newClick, true);
        }
      };
    };
    onMounted(function () {
      nextTick(function () {
        var node = findDOMNode(instance);
        if (node.nodeType !== 1) {
          return;
        }
        eventIns = bindAnimationEvent(node);
      });
    });
    onBeforeUnmount(function () {
      if (eventIns) {
        eventIns.cancel();
      }
      clearTimeout(clickWaveTimeoutId);
      isUnmounted = true;
    });
    return function () {
      var _slots$default;
      return (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)[0];
    };
  }
});