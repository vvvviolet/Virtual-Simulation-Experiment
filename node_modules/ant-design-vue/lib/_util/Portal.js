"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = require("vue");
var _vueTypes = _interopRequireDefault(require("./vue-types"));
var _context = require("../vc-trigger/context");
var _default = (0, _vue.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  name: 'Portal',
  inheritAttrs: false,
  props: {
    getContainer: _vueTypes.default.func.isRequired,
    didUpdate: Function
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var isSSR = true;
    // getContainer 不会改变，不用响应式
    var container;
    var _useInjectPortal = (0, _context.useInjectPortal)(),
      shouldRender = _useInjectPortal.shouldRender;
    (0, _vue.onBeforeMount)(function () {
      isSSR = false;
      if (shouldRender.value) {
        container = props.getContainer();
      }
    });
    var stopWatch = (0, _vue.watch)(shouldRender, function () {
      if (shouldRender.value && !container) {
        container = props.getContainer();
      }
      if (container) {
        stopWatch();
      }
    });
    (0, _vue.onUpdated)(function () {
      (0, _vue.nextTick)(function () {
        if (shouldRender.value) {
          var _props$didUpdate;
          (_props$didUpdate = props.didUpdate) === null || _props$didUpdate === void 0 ? void 0 : _props$didUpdate.call(props, props);
        }
      });
    });
    (0, _vue.onBeforeUnmount)(function () {
      if (container && container.parentNode) {
        container.parentNode.removeChild(container);
      }
    });
    return function () {
      if (!shouldRender.value) return null;
      if (isSSR) {
        var _slots$default;
        return (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots);
      }
      return container ? (0, _vue.createVNode)(_vue.Teleport, {
        "to": container
      }, slots) : null;
    };
  }
});
exports.default = _default;