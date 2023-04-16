import { createVNode as _createVNode, resolveDirective as _resolveDirective } from "vue";
import PropTypes from './vue-types';
import { defineComponent, nextTick, onBeforeMount, onBeforeUnmount, onUpdated, Teleport, watch } from 'vue';
import { useInjectPortal } from '../vc-trigger/context';
export default defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'Portal',
  inheritAttrs: false,
  props: {
    getContainer: PropTypes.func.isRequired,
    didUpdate: Function
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var isSSR = true;
    // getContainer 不会改变，不用响应式
    var container;
    var _useInjectPortal = useInjectPortal(),
      shouldRender = _useInjectPortal.shouldRender;
    onBeforeMount(function () {
      isSSR = false;
      if (shouldRender.value) {
        container = props.getContainer();
      }
    });
    var stopWatch = watch(shouldRender, function () {
      if (shouldRender.value && !container) {
        container = props.getContainer();
      }
      if (container) {
        stopWatch();
      }
    });
    onUpdated(function () {
      nextTick(function () {
        if (shouldRender.value) {
          var _props$didUpdate;
          (_props$didUpdate = props.didUpdate) === null || _props$didUpdate === void 0 ? void 0 : _props$didUpdate.call(props, props);
        }
      });
    });
    onBeforeUnmount(function () {
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
      return container ? _createVNode(Teleport, {
        "to": container
      }, slots) : null;
    };
  }
});