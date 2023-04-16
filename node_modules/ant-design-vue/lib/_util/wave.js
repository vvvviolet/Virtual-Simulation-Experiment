"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = require("vue");
var _Event = _interopRequireDefault(require("./css-animation/Event"));
var _raf = _interopRequireDefault(require("./raf"));
var _propsUtil = require("./props-util");
var _useConfigInject2 = _interopRequireDefault(require("./hooks/useConfigInject"));
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
var _default = (0, _vue.defineComponent)({
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
    var instance = (0, _vue.getCurrentInstance)();
    var _useConfigInject = (0, _useConfigInject2.default)('', props),
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
      var node = (0, _propsUtil.findDOMNode)(instance);
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
      _Event.default.addStartEventListener(node, onTransitionStart);
      _Event.default.addEndEventListener(node, onTransitionEnd);
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
      _Event.default.removeStartEventListener(node, onTransitionStart);
      _Event.default.removeEndEventListener(node, onTransitionEnd);
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
        _raf.default.cancel(animationStartId);
        animationStart = true;
        // Render to trigger transition event cost 3 frames. Let's delay 10 frames to reset this.
        animationStartId = (0, _raf.default)(function () {
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
    (0, _vue.onMounted)(function () {
      (0, _vue.nextTick)(function () {
        var node = (0, _propsUtil.findDOMNode)(instance);
        if (node.nodeType !== 1) {
          return;
        }
        eventIns = bindAnimationEvent(node);
      });
    });
    (0, _vue.onBeforeUnmount)(function () {
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
exports.default = _default;